import ProductCard from './ProductCard';
import { StyledProductList } from './style';
import { CartContext } from '../../providers/CartContext';
import { useContext } from "react";

const ProductList = () => {
  const { productList } = useContext(CartContext)
  return (
    <StyledProductList>
      {productList.map(product => {
        return <ProductCard key={product.id} product={product} />
      })}

    </StyledProductList>
  )
};

export default ProductList;
