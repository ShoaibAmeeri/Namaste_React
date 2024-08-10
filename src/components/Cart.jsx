import { useSelector } from "react-redux"
import ItemMenuCard from "./ItemMenuCard"
import RestaurantCatagory from "./RestaurantCatagory"

const Cart = ()=>{

    const cartItems = useSelector((store)=>store.cart.items)
    console.log(cartItems);
    
    return(
        <div className="text-center p-4 m-4">

            <h1 className="text-3xl font-semibold ">Cart</h1>
            <div className="">
            {/* <RestaurantCatagory
   
          data={cartItems}
   
        /> */}
            </div>

        </div>
    )
}

export default Cart