<script setup lang="ts">
import SectionCard from '/@/components/molecules/SectionCard.vue'
import TagListItem from '/@/components/molecules/TagListItem.vue'
import SubTitle from '/@/components/atoms/SubTitle.vue'

import skils from '/@/data/skils.json'
</script>

<template>
  <section-card>
    <template #title>
      <sub-title> Skil </sub-title>
    </template>
    <template #content>
      <ul class="rounded-md">
        <tag-list-item
          v-for="(item, index) of skils.items"
          :key="item.title"
          :title="item.title"
          :tags="item.tags"
          :index="index"
          :length="skils.items.length"
        />
      </ul>
    </template>
  </section-card>
</template>
