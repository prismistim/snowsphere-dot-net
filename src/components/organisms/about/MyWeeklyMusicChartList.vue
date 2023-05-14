<script setup lang="ts">
import axios, { AxiosResponse } from 'axios'
import { ref, computed } from 'vue'
import { Response, Track } from '/@/types/LastfmWeeklyChart'
import SectionCard from '/@/components/molecules/SectionCard.vue'
import SubTitle from '/@/components/atoms/SubTitle.vue'
import MusicListItem from '/@/components/molecules/about/MusicListItem.vue'

const chartsRawData = ref<Track[]>([])

const fetchMusicChart = async () => {
  const apiKey = import.meta.env.VITE_LF_API_KEY

  try {
    const res: AxiosResponse<Response> = await axios.get(
      `https://ws.audioscrobbler.com/2.0/?method=user.getweeklytrackchart&user=prismist-m&api_key=${apiKey}&format=json`
    )

    if (res.status === 200) {
      chartsRawData.value = res.data.weeklytrackchart.track
    }
  } catch (err) {
    console.log(err)
  }
}

const MusicCharts = computed(() => {
  if (chartsRawData.value.length === 0) {
    return []
  }

  const target = chartsRawData.value.map((item: Track) => {
    return {
      rank: Number(item['@attr'].rank),
      thumb: item.image[1]['#text'],
      title: item.name,
      artist: item.artist['#text'],
      playCount: Number(item.playcount),
    }
  })

  return target.slice(0, 5)
})

// fetchMusicChart()
</script>

<template>
  <section-card>
    <template #title>
      <sub-title> Weekly Music Chart </sub-title>
    </template>
    <template #content>
      <ul class="py-2 md:py-0">
        <music-list-item
          v-for="item of MusicCharts"
          :key="item.title"
          :rank="item.rank"
          :thumb="item.thumb"
          :title="item.title"
          :artist="item.artist"
          :play-count="item.playCount"
        ></music-list-item>
      </ul>
    </template>
  </section-card>
</template>
