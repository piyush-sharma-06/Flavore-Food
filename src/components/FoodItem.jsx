import React from "react";
import FoodCard from "./FoodCard";
import FoodData from "../data/FoodData.js";
import toast, { Toaster } from 'react-hot-toast';
import { useSelector} from "react-redux";


function FoodItem(){
    const searchItem = useSelector(function(state){
        return state.search.search;
    })
    function handleToast(name){
        toast.success(`Added ${name}`);
    }
    const categoryToDisplay = useSelector(function(state){
        return state.category.category;
    })
    const actualItems = FoodData.filter(function(item) {
        if (categoryToDisplay === "All") {
            if(item.name.toLowerCase().includes(searchItem.toLowerCase())){
                return true;
            }
        } else {
            return (
                categoryToDisplay === item.category &&
                item.name.toLowerCase().includes(searchItem.toLowerCase())
            );
        }
    });
    

    console.log(categoryToDisplay);
    return(
        <>
        <Toaster position="top-center"reverseOrder={false}/>
        <div className="flex flex-wrap gap-10 justify-center lg:justify-start mx-6 my-10">
        {actualItems.map(function(item){
            return <FoodCard key = {item.id} data={item} handleToast = {handleToast} />
        })}
        </div>
        </>
    );
}
export default FoodItem;