import React, { useEffect, useState } from 'react'
import { useDispatch} from 'react-redux';
import { addcart } from '../../store/Counterslice';
import Navbar from '../Navbar/Navbar'
import Homedesign from './Home.module.css';


function Home() {
   const [singleproduct, setSingleproduct] = useState([]);

   const dispatchData = useDispatch();


    useEffect(() =>{

    const productData = async() =>{
     const data = await fetch('https://fakestoreapi.com/products');
     const res = await data.json();
       

      setSingleproduct(res);
      console.table(res);
     }

     productData()
    }, [])

     const addTocart = (items) =>{
       console.log("addtocart")
      
       dispatchData(addcart(items))
     }

  return (
    <div>
       <Navbar />

        <div>
        <h1>Shop items</h1>
        </div>
             <div className={Homedesign.singleproductdesign}>
               {
                singleproduct.slice(0, 10).map((items) => {
                  return(
                        <div className={Homedesign.productsection} key={items.id}>
                            <div className={Homedesign.image}>
                                  <img src={items.image}/>
                            </div>
                            <div className={Homedesign.descriptionsection}>
                                <h1>{items.title}</h1>
                                <h2>{items.price}</h2>
                            </div>
                            <div className={Homedesign.addtocart}>
                                <button onClick={() => addTocart(items)}>Add To Cart</button>
                            </div>
                        </div>
                  )
              
            
                })
               }
             </div>    
    </div>
  )
}

export default Home