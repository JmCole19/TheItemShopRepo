import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { listProducts } from '../actions/productActions';
import Rating from '../components/Rating'



function AllItems(props) {
  const [searchKeyword, setSearchKeyword] = useState('');
  const [sortOrder, setSortOrder] = useState('')
  const category = props.match.params.id ? props.match.params.id : '';
  const productList = useSelector(state => state.productList);
  const { products, loading, error } = productList;
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(listProducts());
    return () => {
      //
    };
  }, [])

  const submitHandler = (e) =>{
    e.preventDefault();
    dispatch(listProducts(category, setSearchKeyword, sortOrder))
  }

    const sortHandler = (e) =>{
      
      setSortOrder(e.target.value)
      dispatch(listProducts(category,searchKeyword, sortOrder))
    }
  // IF LOADING DISPLAY
  return <div className="content">
    {category && <h2>{category}</h2>}

        <ul className = "filter">
          <li>
            <form onSubmit={submitHandler}>
              <input name = "searchKeyword" onChange = {(e) => setSearchKeyword(e.target.value)}/>
              <button type = "submit">Search</button>
            </form>
          </li>
          <li>
            Sory By {' '}
          <select name = "sortOrder" onChange={sortHandler}>
            <option value ="">Newest</option>
            <option value ="">Lowest</option>
            <option value ="">Highest</option>


          </select>
          </li>
        </ul>
        {loading ? <div> Loading...</div> :
    error ? <div>{error}</div> :
      // IF NOT DISPLAY PRODUCT LIST 
      <div>
        <div className="banner-inner-page"></div>
        <ul className="products">
          {
            products.map(product =>
              <li key={product._id}>
                <div className="product">
                  <Link to={'/product/' + product._id}><img className="product-image" src={product.image} alt="product"></img></Link>
                  <div className="product-name">
                    <Link to={'/product/' + product._id}>{product.name}</Link></div>
                  <div className="product-brand">{product.brand}</div>
                  <div className="product-price">${product.price}</div>
                  <div className="product-rating"><Rating value = {product.rating} text={product.numReviews + ' reviews'}
                      /> </div>
                </div>
              </li>
            )
          }


        </ul>
        
      </div>
}


  </div>
}
  
export default AllItems;