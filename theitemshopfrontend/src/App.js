import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import HomeScreen from './screens/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import SigninScreen from './screens/SigninScreen';
import { useSelector } from 'react-redux';
import RegisterScreen from './screens/RegisterScreen';
import ProductsScreen from './screens/ProductsScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import guideFishList from './screens/guideFishList';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllItemsScreen from './screens/AllItems';
import OrderScreen from './screens/OrderScreen';
import guideFishPage from './screens/guideFishPage';
import SortedItemsScreen from './screens/SortedItemsScreen';
import OrdersScreen from './screens/OrdersScreen';
import ProfileScreen from './screens/ProfileScreen';




function App() {


  const userSignin = useSelector(state => state.userSignin);
  const { userInfo } = userSignin

  return (
    <BrowserRouter>
      <div className="grid-container">
        <div className="headerDiv">
          <header className="header">
            <button className="logo">

              <Link to="/"><img src="/images/item-shop-logo.png" alt="itemshoplogo"></img></Link>

            </button>
            <div className="searchbox-wrap">
              <input type="text"
                placeholder="Search for an Item..."
                className="searchbox"
              //onChange= {handleInput}
              //onKeyPress= {search} 
              />

            </div>

          <div className="headerLinks">
            <button className="signInbutt header-links">
              {/* IF THE USER IS SIGNED IN SHOW PROFILE PAGE IF NOT SHOW SIGN IN SCREEN */}
              {
                userInfo ? <Link to="/profile" className="userButt">{userInfo.name}</Link> :
                  <Link to="/signin" className="signButt">Sign In</Link>
              }

            </button>
            <button className="cartButt">
              <Link to = "cart/:id"><img src="/images/bit-13-512.png" alt="cart icon"></img></Link>
            </button>
            {userInfo && userInfo.isAdmin && (
              <div className="dropdown">
                <button className="adminButt"><Link to ="/orders">Admin</Link></button>
                
              </div>
            )}
          </div>
        </header>

          
        </div>
        <main className="main">
          
          <div className="content">
            <Route path = "/sorted" component = {SortedItemsScreen}/>
            <Route path = "/orders" component = {OrdersScreen}/>
            <Route path = "/profile" component = {ProfileScreen}/>
            <Route path = "/orders" component = {OrderScreen}/>
            <Route path = "/order/:id" component = {OrderScreen}/>
            <Route path ="/allitems" component = {AllItemsScreen}/>
            <Route path = "/products" component = {ProductsScreen}/>
            <Route path = "/shipping" component = {ShippingScreen}/>
            <Route path = "/payment" component = {PaymentScreen}/>
            <Route path = "/placeorder" component = {PlaceOrderScreen}/>
            <Route path="/signin" component={SigninScreen} />
            <Route path="/register" component={RegisterScreen} />
            <Route path="/product/:id" component={ProductScreen} />
            <Route path="/cart/:id?" component={CartScreen} />
            <Route path="/" exact={true} component={HomeScreen} />
            <Route path = "/fish-guide" component = {guideFishList}/>
            <Route path = "/fish/:id" component = {guideFishPage}/>
          </div>


        </main>
        <div className="footerDiv">
          <footer className="footer">
            <div className="footer-top">
              <div className="footer-colone"><h3>Connect with us here!</h3><p>Github Links</p></div>
              <div className="footer-coltwo"><h3>About</h3><p>Need Help?</p></div>
              <div className="footer-colthree"><h3>Data</h3><p>Data source</p><p>Logo</p></div>
              <div className="footer-colfour"><h3>Legal</h3><p>Terms of service</p><p>Privacy Policy</p></div>
            </div>
           
          </footer>
        </div>
      </div>

    </BrowserRouter>

  );
}

export default App;
