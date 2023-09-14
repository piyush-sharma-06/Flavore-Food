import React,{useState} from "react";
import {IoMdClose} from "react-icons/io";
import ItemCart from "./ItemCart";
import { useSelector } from "react-redux";
import {FaShoppingCart} from "react-icons/fa"
 
function Cart(){

    const [activeCart, setactiveCart] = useState(false);
    const cartItems = useSelector((state)=>state.cart.cart);
    const totalQty = cartItems.reduce(function(pre,item){
        return pre + item.qty;
    },0);
    const totalAmount = cartItems.reduce(function(pre,item){
        return pre + (item.price*item.qty);
    },0);
    console.log(cartItems);
    function closeCartHandler(){
        setactiveCart(false);
    }
    function enableCartHandler(){
        setactiveCart(true);
    }

    return(
        <>
        <div className={`fixed right-0 top-0 w-full lg:w-[20vw] h-full bg-white p-5 ${activeCart ? "translate-x-0":"translate-x-full"} transition-all duration-500 z-50`}>
            <div className="flex justify-between items-center my-3">
                <span className="text-xl font-bold">My Order</span>
                <IoMdClose onClick={closeCartHandler} className="border-2 border-gray-600 text-gray-600 rounded-md hover:text-red-300 hover:border-red-300 cursor-pointer" />
            </div>
            {
               cartItems.length > 0 ? cartItems.map(function(items){
                    return <ItemCart key = {items.id} data = {items}/>
                }) : <h2 className="text-center text-xl font-bold text-gray-800">Your cart is empty</h2>
            }
            
            <div className="absolute bottom-0 mb-5">
                <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
                <h3 className="font-semibold text-gray-800">Total Amount : {totalAmount}</h3>
                <hr className="lg:w-[18vw] w-[90vw] my-2"/>
                <button className="bg-green-500 font-bold px-3 text-white py-2 rounded-lg lg:w-[18vw] w-[90vw]">CheckOut</button>
            </div>
        </div>
        <FaShoppingCart onClick={enableCartHandler} className={`bg-white shandow-md p-3 text-5xl rounded-full  fixed bottom-4 right-4 cursor-pointer ${totalQty > 0 ? "animate-bounce":"git"}`} />
        </>
    );
}
export default Cart;