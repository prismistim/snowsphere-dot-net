<script setup lang="ts">
import WorkItem from '/@/components/molecules/works/WorkItem.vue'

type Work = {
  title: string
  tags: string[]
}

const works: Work[] = []

for (let i = 0; i < 10; i++) {
  works.push({
    title: 'hogehoge' + i,
    tags: ['fohe', 'figafga'],
  })
}
</script>

<template>
  <div class="grid grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
    <work-item
      v-for="item of works"
      :key="item.title"
      img-src="/me.jpg"
      :title="item.title"
      :tags="item.tags"
    />
  </div>
</template>
