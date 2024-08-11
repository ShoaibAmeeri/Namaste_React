import { useDispatch, useSelector } from "react-redux"
import ItemMenuCard from "./ItemMenuCard"

import { clearCart } from "../utils/cartSlice"

const Cart = () => {
    const cartItems = useSelector((store) => store.cart.items)

    const dispatch = useDispatch()

    const clearCartHandler = () =>{
        dispatch(clearCart())
    }

    return (
        <div className="text-center p-4 m-4 w-6/12 mx-auto">
            <h1 className="text-3xl font-semibold ">Cart</h1>
            <button className="text-3xl font-semibold rounded-lg bg-red-500 p-2 m-4" onClick={clearCartHandler} >Clear Cart</button>
            <div className="text-start">
                
                {
                    cartItems.length == 0 ? <h1 className="text-2xl font-bold text-red-600" > Cart is empty </h1> :
                
                cartItems.map(i => <ItemMenuCard data={i} key={i.card.info.id} />)}
            </div>
        </div>
    )
}

export default Cart