<script setup lang="ts">
import SectionCard from '/@/components/molecules/SectionCard.vue'
import ListItem from '/@/components/molecules/ListItem.vue'
import SubTitle from '/@/components/atoms/SubTitle.vue'
import careers from '/@/data/careers.json'
</script>

<template>
  <section-card>
    <template #title>
      <sub-title> Background </sub-title>
    </template>
    <template #content>
      <ul class="rounded-md">
        <list-item
          v-for="(item, index) of careers.items"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :index="index"
          :length="careers.items.length"
        />
      </ul>
      <p class="mt-5 mb-4 text-gray-800">
        詳しい経歴は
        <a
          href="https://wantedly.com/id/snowsphere"
          target="_blank"
          class="
            border-b border-indigo-600
            hover:border-red-600
            text-indigo-600
            hover:text-red-600
          "
        >
          Wantedly
        </a>
        をご覧ください。
      </p>
    </template>
  </section-card>
</template>
