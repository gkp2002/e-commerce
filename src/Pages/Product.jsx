import React, { useContext } from 'react'
import { shopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrums from '../Component/Breadcrums/Breadcrums';
import ProductDisplay from '../Component/ProductDisplay/ProductDisplay';
import Descriptionbox from '../Component/DescriptionBox/Descriptionbox';
import RelatedProduct from '../Component/RelatedProduct/RelatedProduct';

function Product(props) {
  const {all_product} = useContext(shopContext)
  const{productId} =useParams();
  const product = all_product.find((e)=> e.id === Number(productId))
  return(
    <div>
     <Breadcrums product={product}/> 
     <ProductDisplay product={product}/>
     <Descriptionbox />
     <RelatedProduct/>

    </div>
  )
}

export default Product
