<script setup lang="ts">
import WorkItem from '/@/components/molecules/works/WorkItem.vue'
import dataWorks from '/@/data/works.json'

type Tag = {
  name: string
}

type Work = {
  title: string
  tags: Tag[]
}

const works: Work[] = []

dataWorks.items.forEach((item) => {
  works.push(item)
})
</script>

<template>
  <div class="grid gap-8 lg:grid-cols-2">
    <work-item
      v-for="item of works"
      :key="item.title"
      image="/@/articles/lastfm_lambda.png"
      :title="item.title"
      :tags="item.tags"
    />
  </div>
</template>
