import { MdDelete } from 'react-icons/md';

import { StyledCartProductCard } from './style';
import { StyledTitle } from '../../../../styles/typography';

const CartProductCard = ({ cartProduct }) => (
  <StyledCartProductCard>
    <div className='imageBox'>
      <img src={cartProduct.img} alt='Hamburguer' />
    </div>
    <div className='contentBox'>
      <StyledTitle tag='h3' $fontSize='three'>
        {cartProduct.name}
      </StyledTitle>
      <button type='button' aria-label='Remover'>
        <MdDelete size={24} />
      </button>
    </div>
  </StyledCartProductCard>
);

export default CartProductCard;
