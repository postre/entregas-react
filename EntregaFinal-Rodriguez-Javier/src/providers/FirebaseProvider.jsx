import { FieldPath, documentId, addDoc, collection, doc, getDoc, getDocs, orderBy, query, serverTimestamp, where } from "firebase/firestore";
import { FirebaseContext } from "../context";
import { useState } from "react";
import { db, auth } from "../config/firebaseConfig";
import {  createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile  } from 'firebase/auth';
import { Product, Category, Order } from "../models";
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const initialOrder = {
  buyer:{},
  items:{
    items: [],
    taxesPercentage: 0,
    shippingCost: 0,
    subtotal: 0,
    taxes: 0,
    total: 0,
    quantity : 0
  }
};

export const FirebaseProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [product, setProduct] = useState(null);
  const [category, setCategory] = useState(null);
  const [orders, setOrders] = useState([]);
  const [order, setOrder] = useState(initialOrder);
  const [isLoading, setIsLoading] = useState(true);
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const MySwal = withReactContent(Swal)

  const getProducts = async (params = {}) => {
    setIsLoading(true);
    const categoryId = params.categoryId !== undefined ? params.categoryId : undefined;
    const productsDB = categoryId
      ? query(collection(db, "products"), where("category", "==", categoryId))
      : query(collection(db, "products"), where("featured", "==", "1"));
    try {
      const response = await getDocs(productsDB);
      const response_1 = response.docs;
      const response_2 = response_1.map((productDB) => {
        return new Product(productDB);
      });
      setProducts(response_2);
      setIsLoading(false);
    } catch (error) {
      return console.error(error);
    }
  };

  const getProduct = (id) => {
    setIsLoading(true);
    const productRef = doc(db, "products", id);
    getDoc(productRef).then((resp) => {
      // Verificar si el producto existe
      if (resp.exists()) {
        setProduct(new Product(resp));
        setIsLoading(false);
      }
    });
  };

  const getCategories = async () => {

    const categoriesDB = query(collection(db, "categories"));
    try {
      const response = await getDocs(categoriesDB);
      const response_1 = response.docs;
      const response_2 = response_1.map((category) => {
        return new Category(category);
      });
      setCategories(response_2);
      setIsLoading(false);
    } catch (error) {
      return console.error(error);
    }
  };

  const getCategory = (slug) => {
    if(slug==undefined){
      setCategory(undefined);
      return;
    }
    const categories = query(collection(db, "categories"), where("slug", "==", slug));
    return getDocs(categories)
      .then((response) => new Category(response.docs[0]))
      .then((response) => {
        setCategory(response);

      })
      .catch((error) => console.error(error));
  };

  const restrict = () => {
    if(!auth.currentUser){
      navigate('/');
      return;
    }
  } 

  const createOrder = async (items, buyer) => { 
    restrict();
    setIsLoading(true)
    const newOrder = {
      buyer: buyer,
      items: items,
      date: serverTimestamp(),
    }

    try {
      const response = await addDoc( collection(db, "orders"), newOrder );
      const response_1 = response.id;
      setIsLoading(false);
      return response_1
    } catch (error) {
      return console.error(error);
    }

  }

  const getOrders = async (key) => {

    restrict();

    setIsLoading(true);
    
    const ordersDB = query(collection(db, "orders"), where("buyer.id", "==", auth.currentUser.uid), orderBy("date"))
    try {
      const response = await getDocs(ordersDB);
      const response_1 = response.docs;
      const response_2 = response_1.map((orderDB) => {
        return new Order(orderDB);
      });
      if(key){
        const filteredOrders = response_2.filter((item) => item.id.toLowerCase().includes(key.toLowerCase()));
        setOrders(filteredOrders);
      }else{
        setOrders(response_2);
      }
      
      setIsLoading(false);
    } catch (error) {
      return console.error(error);
    }
  };

  const getOrder = (id) => {

    restrict();

    setIsLoading(true);
    const orderRef = doc(db, "orders", id);
    getDoc(orderRef).then((resp) => {
      // Verificar si el producto existe
      if (resp.exists()) {
        setOrder(new Order(resp));
        setIsLoading(false);
      }
    });
  };

  const validateSignup = () =>{
    let errorsSign ="";

    if(userName==''){
      errorsSign +="Ingrese un nombre<br>";
    }

    if(email==''){
      errorsSign +="Ingrese un email<br>";
    }

    if(!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)){
      errorsSign +="Ingrese un email válido<br>";
    }

    if(password==''){
      errorsSign +="Ingrese una contraseña<br>";
    }


    if(errorsSign!=''){
      MySwal.fire({
        icon: "error",
        title: "Error en el Registro",
        html : errorsSign,
        confirmButtonText: "Ir al login",

      });
      return false;
    }
    return true;
  }

  const createUser = async (e, email, password) => {
    e.preventDefault()
    if(!validateSignup()){
      return false;
    }
    setIsLoading(true)
   

    await createUserWithEmailAndPassword(auth, email, password, userName)
      .then((userCredential) => {


          // Signed in
          // const user = userCredential.user;
          MySwal.fire({
            icon: "success",
            title: "Usuario Registrado Exitosamente!!",
            confirmButtonText: "Ir al login",

          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              setIsLoading(false)
              navigate("/login")
            }
          })
          
          // ...
      })
      .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.error(errorCode, errorMessage);
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message+" ("+error.code+")",
          });
          setEmail("")
          setUserName("")
          setPassword("")
          setIsLoading(false)
      });

      await updateProfile(auth.currentUser, { displayName: userName }).catch(
        (err) => console.log(err)
      );

 
  }
  const loginUser = async (e, email, password) => {
    setIsLoading(true)
    e.preventDefault();

     signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            navigate("/")
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: error.message+" ("+error.code+")",
          });
          setEmail("")
          setPassword("")
          setIsLoading(false)
        });
  


 
  }

  const logoutUser = async (e) => {
    e.preventDefault();

    await signOut(auth);
    navigate("/");
}

  const objetValue = {
    products,
    getProducts,
    isLoading,
    getProduct,
    product,
    getCategories,
    getCategory,
    categories,
    category,

    createOrder,

    orders,
    getOrders,
    getOrder,
    order,

    restrict,

    auth,
    createUser,
    loginUser,
    logoutUser,
    email,
    setEmail,
    userName,
    setUserName,
    password,
    setPassword,
    MySwal,
    navigate
  };

  return <FirebaseContext.Provider value={objetValue}> {children} </FirebaseContext.Provider>;
};
