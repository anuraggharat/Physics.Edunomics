import React, { useState } from 'react'
import Sidebar from './Sidebar'
import MainContent from './MainContent'
import { Link } from 'react-router-dom'


export default function Main() {


    const [sidebarState,setSidebarState]  =useState(false)

    const toggleSidebar=()=>{
      setSidebarState(!sidebarState)
      console.log(!sidebarState)
    }


    const styles={ height: "100%",
        width: 0,
        top: 0,
        height:"100vh",
        display:"none",
        left: 0,
        position:"fixed",
        transition:"width .5s" ,
        backgroundColor: "black",
        overflowX: "hidden",
        transition: "0.5s",
        paddingTop: "60",}
        
    const activeStyles={ height: "100%",
        width: 250,
        height:"100vh",
        top: 0,
        position:"fixed",
        left: 0,
        transition:"width .5s" ,
        backgroundColor: "black",
        overflowX: "hidden",
        transition: "0.5s",
        paddingTop: "60",}

    const stylesMain={
      backgroundColor:"red"
    }
    const activeStylesMain={
      backgroundColor:"red",
      marginLeft:250,
    }
    console.log(sidebarState)
    return (
        <div className="main-content">
          <div id="mySidebar" style={sidebarState ? (styles):(activeStyles)}>
        <button href="javascript:void(0)" class="closebtn" onClick={toggleSidebar} >&times;</button>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
</div>

<div id="main" style={sidebarState ? (stylesMain):(activeStylesMain)} >
  <button class="openbtn" onClick={toggleSidebar} >&#9776; Open Sidebar</button>
  <h2>Collapsed Sidebar</h2>
  <p>Content...</p>
</div>
        </div>
    )
}
