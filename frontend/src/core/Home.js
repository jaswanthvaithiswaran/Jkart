import React,{useEffect,useState}  from "react";
import "../Styles/Basestyles.css";
import {API} from "../backend";
import Base from "./Base";
import Card from "./Card";
import { getProducts } from "./helper/coreapicalls";


const Home=()=>{

    const [products,setProducts] = useState([])
    const [error,setError] = useState(false)
    
    const loadAllProducts = ()=>{
        getProducts().then(data=>{
            if(data.error)
            {
                setError(data.error);
            }
            else
            {
                setProducts(data);
            }
        })
    }

    useEffect(()=>{
        loadAllProducts();
    },[])

    return(
        <Base>
            
            <div className="row mt-5 mb-5 text-center">
                <h3 className="text-white">All products</h3>
                <div className="row ">
                    {products.map((product,index)=>{
                        return(
                            <div className="col-2 offset-1 mb-5 " key={index}>
                                <Card product={product}/>
                            </div>
                        )
                    })}
                </div>
                

            </div>
        </Base>
    )
}
export default Home;