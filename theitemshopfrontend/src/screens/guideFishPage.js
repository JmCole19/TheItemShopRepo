import React from 'react';
import FishPageData from '../components/fishPageData'
import './guidefish.css'

function guideFishPage() {
    return (
         <div className="fishPagediv"> 
            <div className="fishDatadiv">
                <FishPageData />
            </div>
        </div>
    )
}

export default guideFishPage;