import React from "react";

import { Container } from "./styles";

import { Form, useForm } from "app/shared/";

import { FormComponent } from "./components";
import { TitleComponent } from "app/shared/";

import { UseCase } from "app/core/use_case";
import { ILogin } from "../domain/entities/ilogin";
import { validators } from "./validators";

type FormElement = React.FormEvent<HTMLFormElement>;

type Props = {
  authUseCase: UseCase<ILogin.Params, ILogin.Response>;
};

export type UserForm = {
  email: string;
  password: string;
};

const initialValues: UserForm = {
  email: "",
  password: "",
};

const LoginPage: React.FC<Props> = ({ authUseCase }: Props) => {
  const validate = (fieldValue: UserForm = values) => {
    let formErrors = { ...errors } as UserForm;

    if ("email" in fieldValue)
      formErrors.email = validators.email(fieldValue.email);

    if ("password" in fieldValue)
      formErrors.password = validators.password(fieldValue.password);

    setErrors({
      ...formErrors,
    });

    //submit form , set value form to fields
    if (fieldValue === values) {
      let formValid = Object.values(formErrors).every(
        (errorField) => errorField === ""
      );
      return formValid;
    }
  };

  const {
    values,
    isLoading,
    setLoading,
    errors,
    setErrors,
    handleInputChange,
    resetForm,
  } = useForm({ initialValues, validateOnChange: true, validate });

  const handleSubmit = async (event: FormElement): Promise<void> => {
    event.preventDefault();
    try {
      if (validate()) {
        await sendRequest();
      }
    } catch (error) {
      console.log(error);

      // setState({
      //     ...state,
      //     mainError: error.message,
      //     isLoading: false,
      // });
    }
  };

  const sendRequest = async () => {
    setLoading(true);
    const token = await authUseCase.call(values as UserForm);
    console.log("token", token);
    setLoading(false);
    resetForm();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Container>
        <TitleComponent title='Iniciar Sesión' />
        <FormComponent
          user={values}
          isLoading={isLoading}
          setValueField={handleInputChange}
          errors={errors}
        />
      </Container>
    </Form>
  );
};

export default LoginPage;
