import React from "react";
import './Home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons';

const Home = ()=>{
    return(
        <>
            <FontAwesomeIcon  />
            {/*//! section 1 */}
            <div className="section-1 mt-5 container">
                <div className="col-md-6">
                    <h2>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </h2>
                    <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae aliquam possimus iste suscipit accusantium quia velit atque tempora, pariatur libero optio animi eaque harum ducimus minus sed magni culpa temporibus.</p>
                    <div className="btns">
                    
                        <button  className="btn-1" >Order Now <FontAwesomeIcon icon={faShoppingBasket} /></button>
                        <button className="btn-2">Learn More</button>
                    </div>
                </div>
            </div>
            {/*//! section 2 */}
            <div className="section-2">
                <div className="items">
                    <h4>1287+</h4>
                    <p>SAVINGS</p>
                </div>
                <div className="items">
                    <h4>5786+</h4>
                    <p> PHOTOS</p>
                </div>
                <div className="items">
                    <h4>1800+</h4>
                    <p>ROCKETS</p>
                </div>
                <div className="items">
                    <h4>7210+</h4>
                    <p>GLOBES</p>
                </div>
                

            </div>
        </>
        
        
    );
}
export default Home;