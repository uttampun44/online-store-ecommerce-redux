import React from 'react'
import NavbarDesign from './Navbar.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function Navbar() {
  const cartcolor = {
    color: '#fff'
  }
  return (
    <div className={NavbarDesign}>
         <header className={NavbarDesign.head}>
            <nav>
                <div className={NavbarDesign.mainheader}>
                    <div className={NavbarDesign.title}><h1>Online Shopping Store</h1></div>
                    <div className={NavbarDesign.input}><input/></div>
                    <div className={NavbarDesign}><ShoppingCartIcon style={cartcolor}/></div>
                </div>
            </nav>
         </header>
    </div>
  )
}

export default Navbar