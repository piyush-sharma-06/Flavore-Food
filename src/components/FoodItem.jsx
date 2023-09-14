import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from 'react-hot-toast';


function FoodItem(){
    function handleToast(name){
        toast.success(`Added ${name}`);
    }
    return(
        <>
        <Toaster position="top-center"reverseOrder={false}/>
        <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.map(function(item){
            return <FoodCard key = {item.id} data={item} handleToast = {handleToast} />
        })}
        </div>
        </>
    );
}
export default FoodItem;