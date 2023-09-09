import React from "react";

function CategoryMenu(){
    return(
        <>
        <div className="ml-6">
            <h3 className="text-xl font-semibold">Find the best Food</h3>
            <div className="flex gap-3 my-5 overflow-x-scroll scroll-smooth lg:overflow-x-hidden">
                <button className="px-3 py-2 font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white">All</button>
                <button className="px-3 py-2 font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white">Lunch</button>
                <button className="px-3 py-2 font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white">Breakfast</button>
                <button className="px-3 py-2 font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white">Dinner</button>
                <button className="px-3 py-2 font-bold bg-gray-200 rounded-lg hover:bg-green-500 hover:text-white">Snacks</button>
            </div>
        </div>
        </>
    );

}
export default CategoryMenu;