<template>
  <section-card>
    <template #title>
      <sub-title>
        Background
      </sub-title>
      </template>
    <template #content>
      <ul class="rounded-md">
        <list-item
          v-for="(item, index) of careers"
          :key="item.title"
          :title="item.title"
          :description="item.description"
          :index="index"
          :length="careers.length"
        />
      </ul>
      <p class="mt-5 mb-4 text-gray-800">詳しい経歴は
        <a href="https://wantedly.com/id/snowsphere" target="_blank" class="border-b border-indigo-600 hover:border-red-600 text-indigo-600 hover:text-red-600">Wantedly</a>
        をご覧ください。
      </p>
    </template>
  </section-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionCard from '/@/components/molecules/SectionCard.vue'
import ListItem from '/@/components/molecules/ListItem.vue'
import SubTitle from '/@/components/atoms/SubTitle.vue'

export default defineComponent({
  components: {
    SectionCard,
    ListItem,
    SubTitle
  },
  setup() {
    const careers = [
      {
        title: '2019.03',
        description: '岐阜工業高等専門学校 電気情報工学科 卒業',
      },
      {
        title: '2019.03 - (now)',
        description: '一般社団法人 Do It Yourself インターン',
      },
      {
        title: '2019.03 - (now)',
        description: '株式会社コマースロボティクス パート',
      },
      {
        title: '2020.04',
        description: 'サイバー大学 IT 総合学部 IT 総合学科 入学',
      },
    ]

    return {
      careers,
    }
  },
})
</script>
