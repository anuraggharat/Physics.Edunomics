import React, { useState } from 'react'
import Sidebar from '../Dashboard/Sidebar'
import {FiMenu} from 'react-icons/fi'
import { Button  } from 'reactstrap';



export default function Main({children}) {


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
        overflowX: "hidden",
        transition: "0.5s",
        paddingTop: "60",}

    const stylesMain={
      marginLeft:0,
      backgroundColor:"white",
      minWidth:"100vh"
    }
    const activeStylesMain={
      backgroundColor:"white",
      marginLeft:250,
      minWidth:"100vh"

    }


    return (
        // main wrapper
        <div className="main-content">
          {/* Side bar code */}
          <div id="mySidebar" className="bg-white shadow-lg" style={sidebarState ? (styles):(activeStyles)}>
            <Sidebar toggleSidebar={toggleSidebar} />
          </div>

        {/* button nav  */}
            <div id="main" style={sidebarState ? (stylesMain):(activeStylesMain)} >
                <div className="w-100">
                <Button color="link" onClick={toggleSidebar}  size="lg"><FiMenu className="text-warning" /></Button>
                </div>
                {children}
            </div>
        </div>
    )
}
