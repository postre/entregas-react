import { Link } from "react-router-dom"

export const CartWidget = () => {

    return (
      
            <Link to="/cart">
            <button type="button" className="btn btn-warning me-2">
                <i className="fas fa-shopping-cart me-3"></i>
                <span>0</span>
            </button>
            </Link>
     
    )
}