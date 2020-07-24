import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import './allitems.css'
import Rating from '../components/Rating';
import { MDBContainer } from 'mdbreact';



function AllItems(props) {

  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();
  const scrollContainerStyle = { width: "82%", maxHeight: "600px", };


  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, [])

  // IF LOADING DISPLAY
  return loading ? <div> Loading...</div> :
    error ? <div>{error}</div> :
      // IF NOT DISPLAY PRODUCT LIST 
      <div className="itemsTop">
      <div className="itemsDiv">

          <div className="itemHeaderdiv">
            <header className="itemHeader">
              <div className="itemHeader-links">
                <button className="swButt"><Link to="/allitems" className="swButt"><img src="/images/swordIcon.png" alt="carrot icon"></img></Link></button>
                <button className="swButt"><Link to="/allitems" className="stButt"><img src="/images/staffIcon.png" alt="carrot icon"></img></Link></button>
                <button className="swButt"><Link to="/allitems" className="vButt"><img src="/images/carrotIcon.png" alt="carrot icon"></img></Link></button>
                <button className="swButt"><Link to="/fish-guide" className="fButt"><img src="/images/4.png" alt="fish icon"></img></Link></button>
                <button className="swButt"><Link to="/allitems" className="mButt"><img src="/images/meatIcon.png" alt="meat icon"></img></Link></button>
                <button className="swButt"><Link to="/allitems" className="sButt"><img src="/images/stairIcon.png" alt="stair icon"></img></Link></button>
                <button className="swButt"><Link to="/allitems" className="bButt"><img src="/images/broomIcon.png" alt="broom icon"></img></Link></button>
              </div>
            </header>
          </div>
          <div className="mdb-container">
          
          <div className="scrollbar scrollbar-near-moon mdb-cont" style={scrollContainerStyle}>
          <div className="products">
            {
              products.map(product =>
                <div key={product._id}>
                  <div className="product">
                    <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product"></img></Link>
                    <div className="productInfo">
                      <div className="product-name">
                        <Link to={'/product/' + product._id}>{product.name}</Link></div>
                      <div className="product-brand">{product.brand}</div>
                      <div className="product-price">${product.price}</div>
                      <div className="product-rating">
                      <Rating value = {product.rating} text={product.numReviews + ' reviews'}
                      />
                      </div>
                    </div>
                  </div>
                </div>
              )
            }
          </div>
         </div>
         
        </div>
        </div>
        </div>
        
        
      
}
export default AllItems;