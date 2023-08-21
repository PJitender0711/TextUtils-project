import React, { useEffect } from 'react';
import './PreLoader.css';
import { preLoaderAnim } from '../animations';
const PreLoader = () => {
    useEffect(()=>{
        preLoaderAnim()
    },[]);
  return (
    <div className="preloader">
        <div class="logo"></div>
        <div className="texts-container">   
            <span>Welcome</span> 
            <span>To</span> 
            <span>TextUtils</span>  
        </div> 
        
    </div>
  )
}

export default PreLoader
