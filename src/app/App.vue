<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { containerBuilder } from "./app.container";

export default defineComponent({
  async created() {
    await containerBuilder();
  },
});
</script>

<style lang="scss">
@import "@/app/shared/theme/app.scss";
</style>
