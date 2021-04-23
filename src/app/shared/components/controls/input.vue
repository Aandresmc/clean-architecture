<template>
  <div class="field">
    <p class="control">
      <input
        class="input"
        :type="type"
        :placeholder="label"
        :value="value"
        :name="name"
        @input="onChange($event.target)"
      />
      <span>error:{{ error }}</span>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

type inputsType = "text" | "email" | "password" | "number";

export default defineComponent({
  name: "InputComponent",
  props: {
    name: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      required: true,
    },
    type: {
      type: String as PropType<inputsType>,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },

    error: {
      type: String,
      default: "",
    },
    onChange: {
      type: Function,
      required: true,
    },
  },
  setup(props) {
    return {
      ...props,
    };
  },
});
</script>
