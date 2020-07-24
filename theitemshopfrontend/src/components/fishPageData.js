import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import API from './API';

function FishPageData() {

    const [fish, setFish] = useState({})

    const { id } = useParams()
    useEffect(() => {
        API.getIndiFish(id)
            .then(res => setFish(res.data))
            .catch(err => console.log(err));
    }, [])

    String.prototype.Capitalize = function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    }

    return (
        <div>
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


            <div className="d-flex flex-row justify-content-center align-items-center">
                <div className="d-flex flex-column align-items-center" style={{ marginRight: "10rem" }}>
                    <div>
                        {fish.name && <h1>{fish.name["name-USen"].Capitalize()}</h1>}
                    </div>
                    <div className="d-flex flex-column">
                        <div>
                            <div className="d-flex flex-column align-items-center">
                                <img src={fish.icon_uri} />
                            </div>
                        </div>
                        <div className="d-flex flex-column align-items-center">
                            <p style={{ fontStyle: "italic", fontSize: "18px"}}>{fish["catch-phrase"]}</p>
                            <div className="d-flex flex-column align-items-center">
                                <li style={{fontSize: "20px"}}>
                                    Average Price: ${fish.price}
                                </li>
                                {fish.availability && <li style={{fontSize: "20px"}}>Typically found: {fish.availability.location}</li>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="d-flex flex-column align-items-center" style={{ marginLeft: "10rem" }}>
                    <img src={fish.image_uri} style={{ width: "600px", height: "300px" }} />
                    <p style={{ fontWeight: "bold", fontSize: "15px", width: "300px" }}>{fish["museum-phrase"]}</p>
                </div>
            </div>
        </div>
    )   
}

export default FishPageData;