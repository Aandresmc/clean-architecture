<template>
  <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <input
        class="input"
        :class="error && 'is-danger'"
        :type="type"
        :placeholder="label"
        :value="value"
        :name="name"
        @input="onChange($event.target)"
      />
    </div>
    <p class="help" :class="error && 'is-danger'">{{ error }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, toRefs } from "vue";

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
      ...toRefs(props),
    };
  },
});
</script>
