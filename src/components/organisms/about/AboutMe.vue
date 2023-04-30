<script setup lang="ts">
import RoundedImage from '/@/components/atoms/RoundedImage.vue'
import Card from '/@/components/molecules/Card.vue'
import Profile from '/@/components/organisms/about/Profile.vue'
</script>

<template>
  <div class="text-center">
    <div class="mx-auto mb-4 md:mb-0 md:w-[30vw] lg:w-[25vw] 2xl:w-[23vw]">
      <rounded-image src="/me.jpg" />
    </div>
    <card class="block">
      <template #description>
        <div class="mb-8">
          <profile />
        </div>
      </template>
    </card>
  </div>
  <div class="mb-12">
    <div class="border-gray-100 md:mb-6 md:border-b" />
  </div>
</template>
