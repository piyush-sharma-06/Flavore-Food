import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";



function FoodItem(){
    return(
        <>
        <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {FoodData.map(function(item){
            return <FoodCard key = {item.id} data={item} />
        })}
        </div>
        </>
    );
}
export default FoodItem;