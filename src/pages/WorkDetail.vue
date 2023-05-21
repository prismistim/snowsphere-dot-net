<script setup lang="ts">
import { defineAsyncComponent, computed } from 'vue'
import { useRoute } from 'vue-router'
import { TagType } from '/@/types/workItemType'
import Contents from '/@/components/templates/Contents.vue'
import TempArticle from '/@/components/templates/TempArticle.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import dataWorks from '/@/data/works.json'

type Work = {
  id: number
  title: string
  tags: TagType[]
}

const route = useRoute()

const target = computed(() => {
  return dataWorks.items.find(
    (item: Work) => item.id === parseInt(route.path.split('/')[2])
  )
})

// TODO: 存在しないファイルを参照したら404
const Article = defineAsyncComponent(
  () => import(`../articles/${route.path.split('/').reverse()[0]}.md`)
)
</script>

<template>
  <Article />
</template>
