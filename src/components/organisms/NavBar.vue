<template>
  <div
    class="font-heebo text-2xl font-semibold tracking-wide sticky top-0 z-10 bg-white bg-opacity-90 py-5 dark:bg-neutral-950/80"
  >
    <div class="grid grid-cols-3">
      <div>
        <router-link
          to="/about"
          class="transform text-gray-300 transition duration-500 ease-in-out hover:text-indigo-600"
        >
          about
        </router-link>
      </div>
      <div>
        <router-link
          to="/works"
          class="transform text-gray-300 transition duration-500 ease-in-out hover:text-indigo-600"
        >
          works
        </router-link>
      </div>
    </div>
  </div>
</template>
