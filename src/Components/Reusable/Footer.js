import React from 'react'
import {FaTwitter,FaFacebookF,FaInstagram} from 'react-icons/fa'

export default function Footer() {
    return (
        <footer className="bg-secondary text-center text-white py-5">
            <div className="w-100 text-center py-1">
                <h4>EDUNOMICS</h4>
            </div>
            <div className="w-100 text-center py-1">
                <p>contact@edunomics.in</p>
            </div>
            <div className=" w-100 center py-1"> 
                <h2><FaFacebookF className="text-light mr-3" /><FaTwitter className="mx-5" /><FaInstagram className="ml-3" /></h2> 
            </div>
            <div className="w-100 text-white pt-4">
                <a  className="border-right px-4 text-white link" href="#"   >JOIN US</a>
                <a  className="border-right px-4 text-white" href="#"   >COOKIE POLICY</a>
                <a  className="border-right px-4 text-white" href="#"   >TERMS OF USE</a>
                <a  className="border-right px-4 text-white" href="#"   >TECH</a>
                <a  className="border-0 px-4 text-white" href="#"   >PRIVACY POLICY</a>

            </div>
        </footer>
    )
}
