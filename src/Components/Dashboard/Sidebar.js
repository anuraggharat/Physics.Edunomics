import React from 'react'
import { Link } from 'react-router-dom'

export default function Sidebar() {
    return (
        <div className="sidebar" id="sidebar">
            <ul className="sidebarList">
                <li><Link>HOME</Link></li>
                <li><Link>SESSIONS</Link></li>
                <li><Link>DOWNLOADS</Link></li>
                <li><Link>SETTINGS</Link></li>
                <li><Link>ABOUT</Link></li>
            </ul>
        </div>
    )
}
