import { StyledInputContainer } from '../../../styles/form';
import { StyledParagraph } from '../../../styles/typography';

interface IInputProps{
  id: string;
}

const Input = ({ id }: IInputProps) => (
  <div>
    <StyledInputContainer>
      <input type='text' id={id} placeholder=' ' />
      <label htmlFor={id}>Teste</label>
    </StyledInputContainer>
    <StyledParagraph fontColor='red'>Erro</StyledParagraph>
  </div>
);

export default Input;
