import React from 'react'
import Content from './Content'
import Navbar from '../Reusable/Navbar'
import Footer from '../Reusable/Footer'
import { Link } from 'react-router-dom'


const index=()=> {
    
  
    return (
        <>
       
        <div className="Home py-5">
            <div className="container text-center py-5">
                <h1 className="display-1 font-weight-normal text-white">Where you want to go today?</h1>
                <h2 className=" text-white mt-5">Share your ultimate travel bucket list with us!</h2>
            </div>
        </div>
        <section className="py-5">
            <Content />
        </section>
        <Footer />
        </>
    )
}

export default index