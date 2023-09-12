import React from 'react'
import {AiOutlinePlus ,AiOutlineMinus} from"react-icons/ai";
import {MdDelete} from "react-icons/md"


function ItemCart({data}){
    return(
        <>
        <div className='flex gap-2 shadow-md rounded-md p-2 mb-3'>
            <MdDelete className='absolute right-7 text-gray-600 cursor-pointer' />
            <img className='w-[50px] h-[50px]' src={data.img} alt="" />
            <div className='leading-5'>
                <h2 className='font-bold text-gray-800'>
                    {data.name}
                </h2>
                <div className='flex justify-between '>
                    <span className='text-green-500 font-bold'>{data.price}</span>
                    <div className='flex justify-center item-center gap-2 absolute right-7 '>
                        <AiOutlinePlus className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                        <span>1</span>
                        <AiOutlineMinus className='border-2 border-gray-600 text-gray-600 hover:bg-green-500 hover:text-white hover:border-none rounded-md p-1 text-xl transition-all ease-linear cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}

export default ItemCart;
