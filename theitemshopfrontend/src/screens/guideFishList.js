import React from 'react';
import FishData from "../components/fishData";
import { Link } from 'react-router-dom';
import { MDBContainer, MDBScrollbar } from "mdbreact";
import "../component_css/scrollbar.css";

function guideFishList() {
    const scrollContainerStyle = { width: "95%", maxHeight: "600px" };
    return (
        <div className="manyFishdiv">
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
            <MDBContainer style={{marginTop: "50px"}}>
                <div className="scrollbar scrollbar-near-moon mt-5 mx-auto" style={scrollContainerStyle}>
                    <div style={{ display: "flex", flexWrap: "wrap", flexDirection: "row" }}>
                        <FishData />            
                    </div>
                </div>
            </MDBContainer>
        </div>
    )   
}   

export default guideFishList;