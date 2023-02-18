import {React}  from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Checkoutpagedesign from './Checkoutpage.module.css';
import { removecart } from '../../store/Counterslice';

 function Checkoutpage() {

  const itemsData = useSelector((state) => {
    return state.cart
  })

  const dispatchitem = useDispatch();

  const remove = (singleproduct) =>{
   dispatchitem(removecart(singleproduct))
  }
  return (
    <div>
    <div>
       {itemsData?.length === 0 ?(
          <div className={Checkoutpage.carttitle}>
              <h1>Your items is empty</h1>
          </div>
       ):(
            <div className={Checkoutpagedesign.datasection}>
             <div className={Checkoutpagedesign.total}>
             <h1>Your cart items</h1>
              <p>Total price</p>
             </div>
                 {
                  itemsData.map((singleproduct) =>{
                    return (
                      <div key={singleproduct.id} className={Checkoutpagedesign.productdisplay}>
                     <div className={Checkoutpagedesign.display}>
                       <img src={singleproduct.image}/>
                       <p>{singleproduct.title}</p>
                       <p>{singleproduct.price}</p>
                      </div>
                      <div className={Checkoutpagedesign.removebutton}>
                         <button onClick={() => remove(singleproduct.id)} className={Checkoutpagedesign.remove}>Remove from cart</button>
                      </div>
                  </div>
                    )
                  })
                 }
             <div> 
                
               </div>
            </div>
       )}
      </div>
    </div>
  )
}
export default Checkoutpage;