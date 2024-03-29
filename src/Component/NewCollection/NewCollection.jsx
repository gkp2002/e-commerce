import React from 'react'
import new_colections from '../Assest/new_collections'
import './Collection.CSS'
import Item from '../Item/Item'
function NewCollection() { 
  return (
    <div className='new-collection'> 
    <h1>NEW COLLECTION</h1>
    <hr/>
    <div className='collections'>

      {new_colections.map((item,i)=>{
        return <Item key={i} id={item.id} name={item.name} image={item.image}
        new_price={item.new_price} old_price={item.old_price}
      />
      
      })}
  
     </div>
    </div>
  )
}

export default NewCollection
