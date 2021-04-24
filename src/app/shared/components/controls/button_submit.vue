<template>
  <div class="field">
    <p class="control">
      <button
        class="button is-primary"
        :class="isLoading && 'is-loading'"
        type="submit"
      >
        {{ label }}
      </button>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent, toRefs } from "vue";

export default defineComponent({
  name: "ButtonSubmitComponent",
  props: {
    isLoading: {
      type: Boolean,
      required: true,
    },
    label: {
      type: String,
      requited: true,
    },
  },
  setup(props) {
    return {
      ...toRefs(props),
    };
  },
});
</script>
