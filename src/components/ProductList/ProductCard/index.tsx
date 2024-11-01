import { StyledProductCard } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph, StyledTitle } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { addProductToCart } = useContext(CartContext)
  return (
    <StyledProductCard>
      <div className='imageBox'>
        <img src={product.img} alt='Hamburguer' />
      </div>
      <div className='content'>
        <StyledTitle tag='h3' $fontSize='three'>
          {product.name}
        </StyledTitle>
        <StyledParagraph className='category'>{product.category}</StyledParagraph>
        <StyledParagraph className='price'>{`R$: ${parseFloat(product.price).toFixed(2)}`}</StyledParagraph>
        <StyledButton onClick={() => addProductToCart(product.id)} $buttonSize='medium' $buttonStyle='green'>
          Adicionar
        </StyledButton>
      </div>
    </StyledProductCard>
  )
};

export default ProductCard;
