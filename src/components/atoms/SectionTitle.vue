<template>
  <h2 class="mb-3 text-4xl text-gray-800 section-title">
    <slot />
  </h2>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap');

h2.section-title {
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}
</style>