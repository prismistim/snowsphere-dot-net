<template>
  <div class="sticky top-0 py-5 bg-opacity-80 bg-white nav-bar">
    <div class="grid grid-cols-3">
      <div>
        <router-link
          to="/about"
          class="
            text-2xl
            font-bold
            text-gray-300
            hover:text-indigo-600
            transition
            transform
            ease-in-out
            duration-500
          "
          >About</router-link
        >
      </div>
      <div>
        <router-link
          to="/works"
          class="
            text-2xl
            font-bold
            text-gray-300
            hover:text-indigo-600
            transition
            transform
            ease-in-out
            duration-500
          "
          >Works</router-link
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  font-family: 'futura-pt', sans-serif;
}
</style>
