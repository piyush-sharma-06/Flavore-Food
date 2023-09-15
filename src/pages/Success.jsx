import React,{useEffect, useState} from "react";
import { PropagateLoader } from "react-spinners";

function Success(){

    const [loading, setLoading] = useState(true);

    useEffect(function(){
        setTimeout(function(){
            setLoading(false);
        },3000);
    },[]);

    if(loading){
        return <div className="flex flex-col items-center h-screen justify-center"><PropagateLoader className="" color="#36d7b7" /></div>
    }
    return(
        <>
        <div className="flex flex-col items-center h-screen justify-center">
            <h2 className="text-3xl text-semibold mb-4">Order Successful!</h2>
            <p>Your order has been placed successfully</p>
        </div>
        </>
    );
}

export default Success;