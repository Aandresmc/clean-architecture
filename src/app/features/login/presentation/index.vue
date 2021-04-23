<template>
  <!-- <Form :onSubmit="handleSubmit"> -->
  <Container>
    <TitleComponent title="Iniciar Sesión" />
    <FormComponent
      :user="user"
      :isLoading="isLoading"
      :setValueField="handleInputChange"
      :errors="errors"
    />
  </Container>
  <!-- </Form> -->
</template>

<script lang="ts">
import { defineComponent, InputHTMLAttributes, reactive, ref } from "vue";
import { TitleComponent, Container } from "@/app/shared/components";
import { FormComponent } from "./components/";

export type UserForm = {
  email: string;
  password: string;
};

type State = {
  user: UserForm;
  errors?: UserForm;
  isLoading: boolean;
};

const _initialStateUser: UserForm = {
  email: "",
  password: "",
};

export default defineComponent({
  components: {
    TitleComponent,
    Container,
    FormComponent,
  },
  setup() {
    const state = reactive<State>({
      user: _initialStateUser,
      isLoading: false,
      errors: _initialStateUser,
    });

    const handleInputChange = (event: InputHTMLAttributes) => {
      const { name, value } = event;
      console.log(name, value);
    };

    return {
      ...state,
      handleInputChange,
    };
  },
});
</script>
