import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import Input from '../Input';
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormSchema, TLoginFormValues } from './LoginFormSchema';
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from '../../../providers/UserContext';

const LoginForm = () => {
  const { userLogin } = useContext(UserContext);
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(LoginFormSchema)
  })

  const submit: SubmitHandler<TLoginFormValues> = (formData) => {
    userLogin(formData);
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)}>
      <Input type="text" placeholder="E-mail" label="E-mail" id="email" {...register("email")} error={errors.email} />
      <Input type="password" placeholder="Senha" label="Senha" id="password" {...register("password")} error={errors.password} />
      <StyledButton type='submit' $buttonSize='default' $buttonStyle='green'>
        Entrar
      </StyledButton>
    </StyledForm>
  )
};

export default LoginForm;
