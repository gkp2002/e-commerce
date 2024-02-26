import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assest/star_icon.png'
import { shopContext } from '../../Context/ShopContext';

function ProductDisplay(props) {
    const {product} = props;
    const {addTocart}=useContext(shopContext);
  return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
          <div className='productdisplay-img-list'>
           <img src={product.image} alt=""/>
           <img src={product.image} alt=""/>
           <img src={product.image} alt=""/>
           <img src={product.image} alt=""/>
            
          </div>
          <div className='productdisplay-img'>
          <img className='productdisplay-main-img' src={product.image} alt=""/>
          </div>
        </div>
        <div className='productdisplay-right'>
           <h1>{product.name}</h1>
           <div className='productdisplay-right-star'>
           <img src={star_icon} alt=""/>
           <img src={star_icon} alt=""/>
           <img src={star_icon} alt=""/>
           <img src={star_icon} alt=""/>
        
           <p>(122)</p>
           </div>
           <div className='productdisplay-right-prices'>
           <div className='productdisplay-right-price-old'>  ${product.old_price}     </div>
           <div className='productdisplay-right-price-new'>${product.new_price}</div> 
           
           
           </div>
           <div className='productdisplay-right-description'>
           A product description is a marketing piece of 
           writing that explains a product and why it's worth buying. It's 
           usually found on a product page and
            provides information about the 
            product or service being sold
           
           </div>
           <div className='productdisplay-right-size'>
           <h1>Select Size</h1>
           <div className='productdisplay-right-sizes'>
           <div>S</div>
           <div>M</div>
           <div>L</div>
           <div>XL</div>
           <div>XXL</div>
           
           </div>
           </div>
           <button onClick={()=>{addTocart(product.id)}}>ADD To Cart</button>
           <p className='productdisplay-right-category'><span>Category:</span> Women , T-Shirt , Crop Top</p>
           <p className='productdisplay-right-category'><span>Tag:</span> Modern , Latest</p>
        </div>
      
    </div>
  )
}

export default ProductDisplay
