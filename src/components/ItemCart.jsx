import React from 'react'
import {AiOutlinePlus ,AiOutlineMinus} from"react-icons/ai";
import {MdDelete} from "react-icons/md"
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../redux/slices/CartSlice';
import {incrementQty} from '../redux/slices/CartSlice';
import { decrementQty } from '../redux/slices/CartSlice';


function ItemCart({data}){

    const dispatch = useDispatch();
    function deleteCartHandler(){
        dispatch(removeFromCart(data.id));
    }
    function incrementHandler(){
        dispatch(incrementQty(data.id));
    }
    function decrementHandler(){
        if(data.qty>1){
            dispatch(decrementQty(data.id));
        }
    }

    return(
        <>
        <div className='flex gap-2 shadow-md rounded-md p-2 mb-3'>
            <div><MdDelete onClick={deleteCartHandler} className='absolute right-7 text-gray-600 cursor-pointer' /></div>
            <img className='w-[50px] h-[50px]' src={data.img} alt="" />
            <div className='leading-5'>
                <h2 className='font-bold text-gray-800'>
                    {data.name}
                </h2>
                <div className='flex justify-between '>
                    <span className='text-green-500 font-bold'>{data.price}</span>
                    <div className='flex justify-center item-center gap-2 absolute right-7 '>
                        <AiOutlinePlus onClick={incrementHandler} className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                        <span>{data.qty}</span>
                        <AiOutlineMinus onClick={decrementHandler} className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemCart;
