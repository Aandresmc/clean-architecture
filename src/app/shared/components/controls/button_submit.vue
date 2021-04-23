<template>
  <div class="field">
    <p class="control">
      <button class="button is-primary">Iniciar Sesion {{ isLoading }}</button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonSubmitComponent",
  props: {
    isLoading: {
      type: Boolean,
      required: true,
      default: false,
    },
  },
  setup(props) {
    return {
      ...props,
    };
  },
});
</script>
