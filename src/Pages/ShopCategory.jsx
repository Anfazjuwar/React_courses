import React, {useContext}from 'react'
import './CSS/Shopcategory.css'
import { ShopContext } from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'


const ShopCategory = (props) => {
  const {all_product} = useContext(ShopContext)
  return (
    <div className='shop-category'>
      <img className='shop-category-banner' src={props.banner} alt=''/>
      <div className="shopcategory-indexsort">
        <p>
          <span>showing 1-12</span>out of 36 Products

        </p>
        <div className="shopcategory-sort">
          sort by <img src={dropdown_icon} alt=''/>
        </div>
      </div>
      <div className="shopcategoryproducts">
      { all_product.map((item) => {
        if(props.Category===item.category){
            return  <Item 
            key={item.id} 
            id={item.id}
            name={item.name} 
            image={item.image}
            new_price={item.new_price} old_price={item.old_price} />
        }else{
          return (null)
        }  
          
          
          })}
            
        
      </div>
     
     <div className="shopcategory-loadmore">
       Expoler More 
     </div>
      
    </div>
  )
}

export default ShopCategory
