<template>
  <div
    class="nav-bar sticky top-0 z-10 bg-white bg-opacity-90 py-5 dark:bg-transparent"
  >
    <div class="grid grid-cols-3">
      <div>
        <router-link
          to="/about"
          class="transform text-2xl font-bold text-gray-300 transition duration-500 ease-in-out hover:text-indigo-600"
        >
          About
        </router-link>
      </div>
      <div>
        <router-link
          to="/works"
          class="transform text-2xl font-bold text-gray-300 transition duration-500 ease-in-out hover:text-indigo-600"
        >
          Works
        </router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.nav-bar {
  font-family: 'futura-pt', sans-serif;
}
</style>
