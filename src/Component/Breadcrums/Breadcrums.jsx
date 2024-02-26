import React from 'react'
import './Breadcrum.css'
import arrow_icon from '../Assest/breadcrum_arrow.png'
function Breadcrums(props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
        Home  <img src={arrow_icon}/> shop <img src={arrow_icon}/>{product.category} <img src={arrow_icon}/> {product.name}
    </div>
  )
}

export default Breadcrums
