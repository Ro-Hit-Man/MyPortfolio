import React from 'react'
import '../styles/global.css'
import Navbar from './Navbar'

export default function Layout( { children } ) {
    return (
        <div className='layout'>
            <Navbar></Navbar>
            <div className='content'>
                { children }
            </div>
            <footer>
                <h5>Copyright &copy; 2021 Rohit Mittal</h5>
            </footer>
        </div>
    )
}
