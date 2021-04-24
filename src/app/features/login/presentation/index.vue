<template>
  <Form :onSubmit="handleSubmit">
    <Container>
      <TitleH4Component title="Iniciar Sesión" />
      <FormComponent
        :user="values"
        :isLoading="isLoading"
        :setValueField="handleInputChange"
        :errors="errors"
      />
    </Container>
  </Form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Container, Form, TitleComponent, useForm } from "@/app/shared";
import { FormComponent } from "./components/";
import { LoginModuleTypes } from "./store/types";
import { validators } from "./validators";
import { useStore } from "@/app/app.store";
const { TitleH4Component } = TitleComponent;

export type UserForm = {
  email: string;
  password: string;
};

const initialValues: UserForm = {
  email: "",
  password: "",
};

export default defineComponent({
  components: {
    Container,
    Form,
    TitleH4Component,
    FormComponent,
  },
  setup() {
    const store = useStore();

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

    const handleSubmit = async (event: Event): Promise<void> => {
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
      const token = await store.dispatch(LoginModuleTypes.ACTION_LOGIN, values);
      setLoading(false);
      resetForm();
    };

    return {
      values,
      isLoading,
      errors,
      handleSubmit,
      handleInputChange,
    };
  },
});
</script>
