import './homescreen.css'
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions'; 

function HomeScreen(props) {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, [])

  // IF LOADING DISPLAY
  return loading ? <div> Loading...</div> :
    error ? <div>{error}</div> :
      // IF NOT DISPLAY STORE FRONT 
    <div className="Home">
      <div className="itemHeaderdiv">
        <header className="itemHeader">
          <div className="itemHeader-links">
            <button className="swButt"><Link to="/allitems" className="swButt"><img src="/images/swordIcon.png" class="animated jello" alt="carrot icon"></img></Link></button>
            <button className="swButt"><Link to="/allitems" className="stButt"><img src="/images/staffIcon.png" alt="carrot icon"></img></Link></button>
            <button className="swButt"><Link to="/allitems" className="vButt"><img src="/images/carrotIcon.png" alt="carrot icon"></img></Link></button>
            <button className="swButt"><Link to="/fish-guide" className="fButt"><img src="/images/4.png" alt="fish icon"></img></Link></button>
            <button className="swButt"><Link to="/allitems" className="mButt"><img src="/images/meatIcon.png" alt="meat icon"></img></Link></button>
            <button className="swButt"><Link to="/allitems" className="sButt"><img src="/images/stairIcon.png" alt="stair icon"></img></Link></button>
            <button className="swButt"><Link to="/allitems" className="bButt"><img src="/images/broomIcon.png" alt="broom icon"></img></Link></button>
          </div>
        </header>
      </div>

      <div className="storeFrontdiv">
        <div className="contentDiv">
          <div className="content">

            <img src="/images/ItemShopStoreFront.png"></img>

          </div>

          <div className="homepageButts">
            <button className="allItemsbutt"><Link to="/allitems">All Items</Link></button>
            <button className="ratingFilterbutt"><Link to="/allitems">Rating</Link></button>
            <button className="priceFilterbutt"><Link to="/allitems">Price</Link></button>
            <button className="newestFilterbutt"><Link to = "/allitems">Newest Products</Link></button>
          </div>
        </div>
      </div>
    </div>
}
export default HomeScreen;