import CartProductCard from './CartProductCard';
import { StyledCartProductList } from './style';
import { StyledButton } from '../../../styles/button';
import { StyledParagraph } from '../../../styles/typography';
import { CartContext } from '../../../providers/CartContext';
import { useContext } from "react";

const CartProductList = () => {
  const { cartList } = useContext(CartContext)
  return (
    <StyledCartProductList>
      {cartList ? (
        <ul>
          {cartList.map(cartProduct => {
            return <CartProductCard key={cartProduct.id} cartProduct={cartProduct} />
          })}
        </ul>
      ) : null}

      {cartList.length != 0 ? (
        <>
          <div className='totalBox'>
            <StyledParagraph>
              <strong>Total</strong>
            </StyledParagraph>
            <StyledParagraph className='total'>R$ 14,00</StyledParagraph>
          </div>
          <StyledButton $buttonSize='default' $buttonStyle='gray'>
            Remover todos
          </StyledButton>
        </>
      ) : null}
    </StyledCartProductList>
  )
};

export default CartProductList;
