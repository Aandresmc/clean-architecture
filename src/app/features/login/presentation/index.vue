<template>
  <div>
    <input type="email" />
    <input type="password" />
    <button @click="context.handleSubmit">Iniciar Sesion</button>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { Options, setup, Vue } from "vue-class-component";
import { useStore } from "../../../app.store";
import { ILogin } from "../domain/entities/ilogin";
import { LoginModuleTypes } from "./store/types";

@Options({
  created() {
    console.log("entro a created");
  },
})
export default class LoginPage extends Vue {
  context = setup(() => {
    const user = ref<ILogin.Params>({
      email: "amora@gmail.com",
      password: "12345678",
    });

    const store = useStore();

    const handleSubmit = () => {
      console.log("entro");
      console.log(store.getters.token);
      store.dispatch(LoginModuleTypes.ACTION_LOGIN, user);
    };

    return {
      user,
      handleSubmit,
    };
  });
}
</script>
