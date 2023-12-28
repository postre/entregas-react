import { useContext, useEffect, useState } from "react";
import { CartContext, FirebaseContext } from "../context";
import { NumberHelpers, StringHelpers } from "../helpers";


export const CartProvider = ({ children }) => {
  const { auth, MySwal, navigate, createOrder } = useContext(FirebaseContext);


  const initialObject = {
    items: [],
    taxesPercentage: 0,
    shippingCost: 0,
    subtotal: 0,
    taxes: 0,
    total: 0,
    quantity : 0
  };
  const [cartObject, setCartObject] = useState(initialObject);
  const [cartItems, setCartItems] = useState([]);
  const [cartLoaded, setCartLoaded] = useState(false);




  const taxPercentage = 21;
  const shippingCost=1500;

  const addToCart = (productCart, quantity = 1) => {

    if(!auth.currentUser){
      MySwal.fire({
        icon: "warning",
        title: "No te hagas el vivo!!!",
        html : "no podes comprar si no se quien sos",
        confirmButtonText: "ir al login",


      }).then((result) => {
        /* Read more about isConfirmed, isDenied below */
        if (result.isConfirmed) {
          navigate("/login")
        } 
      });
      return false;
    }
    productCart.quantity = quantity;

    const index = cartItems.findIndex((product) => product.id === productCart.id);

    if (index !== -1) {
      // Si el resulta de index no es -1
      // Hacemos una copia del state
      const cartItemsCopy = [...cartItems];
      // Modificamos la cantidad del producto aumentando el valor con la cantidad recibida
      cartItemsCopy[index] = productCart;
      // Modificamos el subtotal con la nueva cantidad
      cartItemsCopy[index].subTotal = cartItemsCopy[index].quantity * cartItemsCopy[index].price;
      // Reemplazamos el state original con la copia
      setCartItems(cartItemsCopy);
    } else {
      const newItem = {
        ...productCart,
        subTotal: quantity * productCart.price,
      };

      setCartItems([...cartItems, newItem]);
    }

 
  };

  const deleteFromCart = (product) => {
    const arrayFilter = cartItems.filter( item => item.id !== product.id );
    setCartItems(arrayFilter);
  };



  const isInCart = (id) => {
    if(auth.currentUser){
      return cartItems.find((item) => item.id === id);
    }
    
  };

  const handleSubTotal = () => {
    return cartItems.reduce((acum, item) => acum + item.subTotal, 0);
  };


  const handleTotalQuantity = () => {
    return cartItems.reduce((acum, item) => acum + item.quantity, 0);
  };

  const calculateTaxes = (subTotal) => {
    return (subTotal * taxPercentage) / 100;
  };

  const handleTotals = () => {
    const subtotal = handleSubTotal();
    const taxes = calculateTaxes(subtotal);
    const total = shippingCost + subtotal + taxes;
    const quantity = handleTotalQuantity();
    return {subtotal, taxes, total, quantity}
  };

  const handleCart = () => {
    
    const totals=handleTotals();

    const object = {
      items: cartItems,
      taxesPercentage: taxPercentage,
      shippingCost: shippingCost,
      subtotal: totals.subtotal,
      taxes: totals.taxes,
      total: totals.total,
      quantity : totals.quantity
    };


    return object;


    
  };

  

  const loadStateFromLocalStorage = () => {
   
    try {
      const serializedState = localStorage.getItem("cartState");
      return serializedState ? JSON.parse(serializedState) : initialObject;
    } catch (error) {
      console.error("Error loading state from localStorage:", error);
      return initialObject;
    }
  };

  const saveStateToLocalStorage = (state) => {
    try {
      const serializedState = JSON.stringify(state);
      localStorage.setItem("cartState", serializedState);
    } catch (error) {
      console.error("Error saving state to localStorage:", error);
    }
  };

  const orderConfirm = async () => {

    MySwal.fire({
      icon: "question",
      title: `Hola ${StringHelpers.title(auth.currentUser.displayName)}!!!`,
      html : `¿Estas seguro de confirmar una compra por <b>${NumberHelpers.moneyFormat(cartObject.total)}</b>?`,
      confirmButtonText: "SI, Confirmar!!",
      cancelButtonText: "NO, voy a seguir mirando",
      showCancelButton: true


    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        const user={
          id :auth.currentUser.uid,
          email : auth.currentUser.email,
          displayname : auth.currentUser.displayName  
        }
        createOrder(cartObject, user).then(response => { 
          setCartObject(initialObject);
          setCartItems([]);
          MySwal.fire({
            icon: "success",
            title: "Gracias por tu compra!",
            html : `Tu código de pedido es <b>${response}</b>, no lo pierdas!!<br>al confirmar serás redirigido`,
          }).then((result) => {

            navigate("/orders")
          });

         });

       

      } 
    });

   }

  useEffect(() => {
    const savedState = loadStateFromLocalStorage();
     setCartObject(savedState);
     setCartItems(savedState.items);
     setCartLoaded(true);
  }, []);

  useEffect(() => {
    if(cartLoaded){
      const object = handleCart();
      setCartObject(object)
      saveStateToLocalStorage(object)
    }
  }, [cartItems]);

  const objetValue = {
    cartObject,

    addToCart,
    deleteFromCart,

    isInCart,
    orderConfirm,
  };

  return <CartContext.Provider value={objetValue}>{children}</CartContext.Provider>;
};
