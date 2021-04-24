<template>
  <div class="container">
    <slot />
  </div>
</template>

<style scoped>
.container {
  padding: 2rem;
  display: flex;
  flex-direction: column;
  height: 50%;
  justify-content: space-evenly;
}
</style>
