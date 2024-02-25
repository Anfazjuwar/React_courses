import React, { useContext } from 'react'
import{ ShopContext} from '../Context/ShopContext'
import{ useParams} from 'react-router-dom';
import BreadCrums from '../Components/Breadcrums/BreadCrums';
import ProductDisplay from '../Components/ProductDiplay/ProductDisplay';
import DescriptionBox from '../Components/DescriptionBox/DescriptionBox';
import RealatedProduct from '../Components/RelatedProduct/RealatedProduct';

const Product = () => {
  const {all_product} = useContext(ShopContext)
  const {productId} = useParams()
  const product = all_product.find((e) => e.id === Number( productId))
  return (
    <div>
      <BreadCrums product={product}/>
      <ProductDisplay product={product} />
      <DescriptionBox/>
      <RealatedProduct/>
    </div>
  )
}

export default Product
