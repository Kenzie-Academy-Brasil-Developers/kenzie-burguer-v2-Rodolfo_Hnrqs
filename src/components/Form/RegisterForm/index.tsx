import Input from '../Input';
import { StyledButton } from '../../../styles/button';
import { StyledForm } from '../../../styles/form';
import { zodResolver } from "@hookform/resolvers/zod";
import { RegisterFormSchema, TRegisterFormValues } from './RegisterFormSchema';
import { useForm, SubmitHandler } from "react-hook-form";
import { useContext } from "react";
import { UserContext } from '../../../providers/UserContext';

const RegisterForm = () => {
  const { userRegister } = useContext(UserContext)
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(RegisterFormSchema)
  })

  const submit: SubmitHandler<TRegisterFormValues> = (formData) => {
    userRegister(formData);
  }

  return (
    <StyledForm onSubmit={handleSubmit(submit)} >
      <Input type="text" placeholder="Nome" label="Nome" id="name" {...register("name")} error={errors.name} />
      <Input type="email" placeholder="E-mail" label="E-mail" id='email' {...register("email")} error={errors.email} />
      <Input type="password" placeholder="Senha" label="Senha" id='password' {...register("password")} error={errors.password} />
      <Input type="password" placeholder="Confirmar Senha" label="Confirmar Senha" id='confirm' {...register("confirm")} error={errors.confirm} />
      <StyledButton $buttonSize='default' $buttonStyle='gray'>
        Cadastrar
      </StyledButton>
    </StyledForm>
  )
};

export default RegisterForm;
