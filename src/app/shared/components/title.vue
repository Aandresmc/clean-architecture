<template>
  <h4>{{ title }}</h4>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TitleComponent",
  props: {
    title: {
      type: String,
      required: true,
      default: "",
    },
  },
  setup(props) {
    return { ...props };
  },
});
</script>
