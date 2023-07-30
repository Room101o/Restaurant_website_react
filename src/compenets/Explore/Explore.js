import React from "react";
import "./Explore.css";
import menu01 from "./../../imgs/menu01.png";
import menu2 from "./../../imgs/menu2.png";
import menu3 from "./../../imgs/menu3.jpg";
import { useState } from "react";
import ProductItem  from "../Navs/ProductItem";
const Explore = ({ name, price }) =>{
    //!js

    const [showModal, setShowModal] = useState(false);

    const handleShowModal = () => {
      setShowModal(true);
    };
  
    // const handleCloseModal = () => {
    //   setShowModal(false);
    // };
  
    // const handleCheckout = (quantity) => {
    //   // Here you can handle the checkout logic with the selected quantity
    //   console.log(`Checkout for ${name} with Quantity: ${quantity}`);
    //   setShowModal(false);
    // };
      //!jsx
    return(
        <>
        
            <div className="explore container">
                <div className="content-explore">
                    <h1>Explore Our Foods</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eligendi culpa voluptatem saepe, quas ipsa fugit assumenda dolores fugiat nulla molestiae eos, ipsum similique sit maiores officiis, velit dignissimos vitae.</p>
                    
                </div>
                <div className="box-menu">
                    <div className="box">
                        <div className="img-menu">
                            <img src={menu01} alt="" />
                        </div>
                        <div className="desc-menu">
                            <h4>Tacos</h4>
                            <p>Time: 15 - 20 Minutes | Service: 1</p>
                            <h3><ProductItem name="Product 1" price={10} /></h3>
                            {/* <button  onClick={handleShowModal} >Order Now</button> */}
                        </div>
                        
                    </div>
                    <div className="box">
                        <div className="img-menu">
                            <img src={menu2} alt="" />
                        </div>
                        <div className="desc-menu">
                            <h4>Hamburger</h4>
                            <p>Time: 30 - 45 Minutes | Service: 1</p>
                            <h3><ProductItem name="Product 2" price={15} /></h3>
                            {/* <button  onClick={handleShowModal} >Order Now</button> */}
                        </div>
                        
                    </div>
                    <div className="box">
                        <div className="img-menu">
                            <img src={menu3} alt="" />
                        </div>
                        <div className="desc-menu">
                            <h4>Salade</h4>
                            <p>Time: 10 - 15 Minutes | Service: 1</p>
                            <h3 ><ProductItem name="Product 3" price={20} /></h3>
                            {/* <button  onClick={handleShowModal}>Order Now</button> */}
                        </div>
                   
                    </div>
                </div>
            </div>
        </>
    );
}
export default Explore