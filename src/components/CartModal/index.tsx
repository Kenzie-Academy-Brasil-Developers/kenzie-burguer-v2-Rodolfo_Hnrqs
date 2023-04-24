import { MdClose } from 'react-icons/md';
import CartProductList from './CartProductList';
import { StyledCartModalBox } from './style';
import { StyledParagraph, StyledTitle } from '../../styles/typography';
import { CartContext } from '../../providers/CartContext';
import { useContext } from "react";

const CartModal = ({ setViewModal }) => {
  const { cartList } = useContext(CartContext);
  return (
    <StyledCartModalBox>
      <dialog>
        <header>
          <StyledTitle tag='h2' $fontSize='three'>
            Carrinho de compras
          </StyledTitle>
          <button
            type='button'
            aria-label='Fechar'
            onClick={() => {
              setViewModal(false);
            }}
          >
            <MdClose size={21} />
          </button>
        </header>
        <div className='cartBox'>
          {cartList ? (<CartProductList />) : null}
          {cartList.length === 0 ? (
            <div className='emptyBox'>
              <StyledTitle tag='h3' $fontSize='three' textAlign='center'>
                Sua sacola está vazia
              </StyledTitle>
              <StyledParagraph textAlign='center'>Adicione itens</StyledParagraph>
            </div>
          ) : null}

        </div>
      </dialog>
    </StyledCartModalBox >
  )
};

export default CartModal;
