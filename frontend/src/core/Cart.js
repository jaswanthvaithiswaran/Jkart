import React,{useEffect,useState}  from "react";
import "../Styles/Basestyles.css";
import Base from "./Base";
import Card from "./Card";

import { loadCart } from "./helper/CartHelper";

const Cart=()=>{

    const [products,setProducts] = useState([])
    
    const loadAllProducts =()=>{
        return(
            <div mb-5>
                {products.map((product,index)=>{
                    return(
                        <Card
                        key={index}
                        product={product}
                        removeFromCart={true}
                        addtoCart={false} 
                        
                        />
                    )
                })}
            </div>
        )
    }
    
    const loadCheckout = ()=>{
        return(
            <div>
                <h2>This section is for checkout</h2>
            </div>
        )
    }
    useEffect(()=>{
        setProducts(loadCart())
    },[])

    return(
        <Base>
            
            <div className="row mt-5 mb-5 text-center">
                <h3 className="text-white">Cart</h3>
                <div className="row text-white ">
                    <div className="col-6">
                        <div className="row ">
                            <div className="col-4 offset-md-1 ">
                            {loadAllProducts()}
                            </div>
                        </div>
                    </div>
                    <div className="col-6">{loadCheckout()}</div>
                </div>
                

            </div>
        </Base>
    )
}

export default Cart;