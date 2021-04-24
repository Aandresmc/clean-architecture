<template>
  <div>
    <InputComponent
      label="Correo electrónico"
      name="email"
      :onChange="setValueField"
      type="email"
      :value="user.email"
      :error="errors.email"
    />

    <InputComponent
      label="Contraseña"
      name="password"
      :onChange="setValueField"
      type="password"
      :value="user.password"
      :error="errors.password"
    />

    <ButtonSubmitComponent
      class="btn-form"
      :isLoading="isLoading"
      label="Iniciar Sesión"
    />
  </div>
</template>

<script lang="ts">
import { UserForm } from "@/app/features/login/presentation/index.vue";
import { ControlsComponent } from "@/app/shared/components";
import { defineComponent, PropType, toRefs } from "vue";
const { InputComponent, ButtonSubmitComponent } = ControlsComponent;

export default defineComponent({
  name: "FormComponent",
  props: {
    user: {
      type: Object as PropType<UserForm>,
      required: true,
    },
    isLoading: {
      type: Boolean,
      required: true,
    },
    errors: {
      type: Object as PropType<UserForm>,
    },
    setValueField: {
      type: Function,
      required: true,
    },
  },
  components: {
    InputComponent,
    ButtonSubmitComponent,
  },
  setup(props) {
    return {
      ...toRefs(props),
    };
  },
});
</script>
<style scoped>
.btn-form {
  display: flex;
  flex-direction: row-reverse;
}
</style>
