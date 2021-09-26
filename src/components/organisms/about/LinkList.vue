<template>
  <div class="grid grid-cols-3 md:grid-cols-6 gap-10 md:gap-0 justify-items-center">
    <div v-for="(item, index) of icons" :key="index" class="lg:p-8 icon">
      <a :href="item.link" target="_blank">
        <img :src="item.data" class="w-8"/>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import twitterSvg from '/@/assets/svg/twitter.svg'
import facebookSvg from '/@/assets/svg/facebook.svg'
import githubSvg from '/@/assets/svg/github.svg'
import lastfmSvg from '/@/assets/svg/lastfm.svg'
import scSvg from '/@/assets/svg/sc.svg'
import ytSvg from '/@/assets/svg/yt.svg'

export default defineComponent({
  setup() {
    const icons = [
      {
        data: twitterSvg,
        link: 'https://twitter.com/Prismist_M'
      },
      {
        data: facebookSvg,
        link: 'https://facebook.com/mizukicom/'
      },
      {
        data: githubSvg,
        link: 'https://github.com/prismistim'
      },
      {
        data: scSvg,
        link: 'https://soundcloud.com/snowsphere_sc'
      },
      {
        data: ytSvg,
        link: 'https://www.youtube.com/channel/UCAqMZ1QWysfFHTGcgh4CkYw'
      },
      {
        data: lastfmSvg,
        link: 'https://last.fm/user/prismist-m'
      }
    ]

    return {
      icons
    }
  },
})
</script>

<style scoped>
.icon {
  color: '#cccccc';
}
</style>
