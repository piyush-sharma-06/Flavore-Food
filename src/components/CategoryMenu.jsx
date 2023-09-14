import React,{useState,useEffect} from "react";
import FoodData from "../data/FoodData";
import { setCategory } from "../redux/slices/CategorySlice";
import { useDispatch,useSelector } from "react-redux";

function CategoryMenu(){

    const [categories , setCategories] = useState([]);

    const dispatch = useDispatch();
    const selectedCategory = useSelector((state) => state.category.category);


    

    function listUniqueCategories(){
        const uniqueCategories = [...new Set(FoodData.map(function (food){
            return food.category;
        }))]
        console.log(uniqueCategories);
        setCategories(uniqueCategories);
    }

    useEffect(function(){
        listUniqueCategories();
    },[]);

    return(
        <>
        <div className="ml-6">
            <h3 className="text-xl font-semibold">Find the best Food</h3>
            <div className="flex gap-3 my-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
            <button
                onClick={() => dispatch(setCategory("All"))}
                className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                selectedCategory === "All" && "bg-green-500 text-white"
                }`}
        >
          All
        </button>
                {categories.map(function(item,index){
                    return( <button
                        onClick={() => dispatch(setCategory(item))}
                        key={index}
                        className={`px-3 py-2 bg-gray-200 font-bold rounded-lg hover:bg-green-500 hover:text-white ${
                          selectedCategory === item && "bg-green-500 text-white"
                        } `}
                      >
                        {item}
                      </button> );
                })}
            </div>
        </div>
        </>
    );

}
export default CategoryMenu;