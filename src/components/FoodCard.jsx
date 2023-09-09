import React from "react";
import {AiFillStar} from "react-icons/ai";

function FoodCard({data}){
    return (
        <>
        <div className="font-bold w-[250px] bg-white p-5 flex flex-col rounded-lg gap-2">
            <img className="w-auto h-[130px] hover:scale-110 cursor-grab transition-all duration-500 ease-in-out" src={data.img} alt="" />
            <div className="text-sm flex justify-between">
                <h2>{data.name}</h2>
                <span className="text-green-500">₹ {data.price}</span>
            </div>
            <p className="text-sm font-normal">{data.desc.slice(0,50)}...</p>
            <div className="flex justify-between">
                <span className="flex jusify-center items-center">
                    <AiFillStar className="mr-1 text-yellow-500" />{data.rating}
                </span>
                <button className="p-1 text-white bg-green-500 hover:bg-green-600 rounded-lg text-sm">Add To Cart</button>
            </div>
        </div>
        </>
    );
}

export default FoodCard