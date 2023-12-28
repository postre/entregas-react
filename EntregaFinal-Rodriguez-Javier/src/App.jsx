import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Error404, Layout } from "./pages";
import { CartListContainer, ItemDetailContainer, ItemListContainer, Slider, SignUp, LogIn, OrderListContainer, OrderDetailContainer } from "./components";
import { CartProvider, FirebaseProvider } from "./providers";

function App() {
  return (
    <>
    <BrowserRouter>
      <FirebaseProvider>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Layout><Slider /><ItemListContainer /></Layout>} />
            <Route path="/products/featured" element={<Layout><ItemListContainer /></Layout>} />
            <Route path="/products/category/:categoryId" element={<Layout><ItemListContainer /></Layout>} />
            <Route path="/product/:id" element={<Layout><ItemDetailContainer /></Layout>} />
            <Route path="/cart" element={<Layout><CartListContainer /></Layout>} />
            <Route path="/orders" element={<Layout><OrderListContainer /></Layout>} />
            <Route path="/order/:id" element={<Layout><OrderDetailContainer /></Layout>} />
            <Route path="/signup" element={<Layout><SignUp /></Layout>} />
            <Route path="/login" element={<Layout><LogIn /></Layout>} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </CartProvider>
      </FirebaseProvider>
    </BrowserRouter>
    </>
  );
}

export default App;
