<template>
  <router-view></router-view>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";

import { containerBuilder } from "./app.container";

@Options({
  async created() {
    await containerBuilder();
  },
})
export default class App extends Vue {}
</script>
