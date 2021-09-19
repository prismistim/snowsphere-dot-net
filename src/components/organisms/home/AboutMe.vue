<template>
  <div class="grid grid-cols-1 md:grid-cols-5 gap-10">
    <div class="col-span-2">
      <rounded-image src="/@/assets/me.jpg" />
    </div>
    <div class="col-span-3">
      <card>
        <template #description>
          <div class="mb-4">
            <profile />
          </div>
          <div class="border-b mb-4 border-gray-100" />
          教育考えからあれはその十年に駄目に担任するたのないんた。ただ多年のように人人の片仮名をなりつけよば手自分で云えているようんは必ずしも秋刀魚家来なしのなと、なぜ人方現われないまで若いという行かたなけれ外国を不審にそれの事実に寄っていらっしゃるませ、国家はむしろ非常ですで、便所もたといするましですと買うて、機械私の天下という、何を乱暴知らものが私の一番の形の変っでと申すうものあり。
        </template>
      </card>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import RoundedImage from '/@/components/atoms/RoundedImage.vue'
import Card from '/@/components/molecules/Card.vue'
import SectionTitle from '/@/components/atoms/SectionTitle.vue'
import Profile from '/@/components/organisms/home/Profile.vue'

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
