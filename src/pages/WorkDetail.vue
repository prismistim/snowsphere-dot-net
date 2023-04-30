<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { TagType } from '/@/types/workItemType'
import Contents from '/@/components/templates/Contents.vue'
import TempArticle from '/@/components/templates/TempArticle.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination } from 'vue3-carousel'
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
</script>

<template>
  <Contents>
    <template #title>
      <SectionTitle> Works </SectionTitle>
    </template>
    <template #content>
      <TempArticle v-if="target">
        <template #title>
          <h2 class="text-2xl">{{ target.title }}</h2>
        </template>
        <template #image>
          <Carousel :autoplay="7000" :transition="800" :wrap-around="true">
            <Slide v-for="slide in 4" :key="slide">
              <div class="carousel__item">
                <div class="overflow-hidden rounded-md">
                  <img src="/works_no_image.jpg" />
                </div>
              </div>
            </Slide>
            <template #addons>
              <Pagination></Pagination>
            </template>
          </Carousel>
        </template>
        <template #description>
          <p class="mx-auto px-2 lg:w-4/5">
            私は時分もちろんその相違めというもののためからもっないた。まず今を使用院はけっしてその活動うですだけをなさるて行くたがは意見しだならから、少しにはあるならしいなけれたい。地位をしまし方は多分十月に充分ないでた。何ともネルソンさんを意味先生突然失敗をとどまらませ上流その目標私か赴任をとして今推察んありますですて、そうしたほかはよそか主義豆腐がするて、岡田君の事を落語の何を何だか実意味と換えるて私壁とご一致に見ように同時にご批評で折っありありて、できるだけいよいよ納得からあったからしまいです事から担があるた。
          </p>
        </template>
        <template #back>
          <router-link to="/works" class="text-gray-400">
            Back to list
          </router-link>
        </template>
      </TempArticle>
    </template>
  </Contents>
</template>

<style>
.carousel__item {
  min-height: 200px;
  width: 100%;
  background-color: var(--vc-clr-primary);
  color: var(--vc-clr-white);
  font-size: 20px;
  border-radius: 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.carousel__slide {
  padding: 0 10px;
}

.carousel__prev,
.carousel__next {
  box-sizing: content-box;
  border: 5px solid white;
}

.carousel__pagination-button {
  background-color: #eee !important;
}

.carousel__pagination-button--active {
  background-color: #222 !important;
}
</style>
