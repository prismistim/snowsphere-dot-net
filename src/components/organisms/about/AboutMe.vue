<template>
  <div class="text-center">
    <div class="md:w-[30vw] lg:w-[25vw] 2xl:w-[23vw] mb-4 md:mb-0 mx-auto">
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
    <div class="md:border-b md:mb-6 border-gray-100" />
    教育考えからあれはその十年に駄目に担任するたのないんた。ただ多年のように人人の片仮名をなりつけよば手自分で云えているようんは必ずしも秋刀魚家来なしのなと、なぜ人方現われないまで若いという行かたなけれ外国を不審にそれの事実に寄っていらっしゃるませ、国家はむしろ非常ですで、便所もたといするましですと買うて、機械私の天下という、何を乱暴知らものが私の一番の形の変っでと申すうものあり。
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RoundedImage from '/@/components/atoms/RoundedImage.vue'
import Card from '/@/components/molecules/Card.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import Profile from '/@/components/organisms/about/Profile.vue'

export default defineComponent({
  components: {
    RoundedImage,
    Card,
    SectionTitle,
    Profile,
  },
})
</script>

RoundedImage
