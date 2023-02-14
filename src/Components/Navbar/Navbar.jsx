import React from 'react'
import NavbarDesign from './Navbar.module.css'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';


function Navbar() {
  const cartcolor = {
    color: '#fff'
  }
  const data = useSelector((state) =>{
    return state.cart
   })

  return (
    <div className={NavbarDesign}>
         <header className={NavbarDesign.head}>
            <nav>
                <div className={NavbarDesign.mainheader}>
                    <div className={NavbarDesign.title}><h1>Online Shopping Store</h1></div>
                    <div className={NavbarDesign.input}><input/></div>
                    <div><p>{data.length}</p></div>
                    <div className={NavbarDesign}><ShoppingCartIcon style={cartcolor}/></div>
                </div>
            </nav>
         </header>
    </div>
  )
}

export default Navbar