<template>
  <section-card>
    <template #title>
      <sub-title>
        Skil
      </sub-title>
      </template>
    <template #content>
      <ul class="rounded-md">
        <tag-list-item
          v-for="(item, index) of careers"
          :key="item.title"
          :title="item.title"
          :tags="item.tags"
          :index="index"
          :length="careers.length"
        />
      </ul>
    </template>
  </section-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import SectionCard from '/@/components/molecules/SectionCard.vue'
import TagListItem from '/@/components/molecules/TagListItem.vue'
import SubTitle from '/@/components/atoms/SubTitle.vue'

export default defineComponent({
  components: {
    SectionCard,
    TagListItem,
    SubTitle
  },
  setup() {
    const careers = [
      {
        title: 'Language',
        tags: [
          'JavaScript', 'TypeScript', 'PHP', 'Dart', 'Java', 'C', 'C#'
        ],
      },
      {
        title: 'FW / Lib / SDK',
        tags: [
          'Vue.js', 'Node.js', 'Vite', 'Tailwind CSS', 'Bootstrap', 'Vuetify', 'CodeIgniter', 'Electron', 'Flutter', 'Unity', 'Laravel'
        ],
      },
      {
        title: 'Software',
        tags: [
          'Illustrator', 'Photoshop', 'Premiere', 'After Effects', 'VS Code', 'Intelij IDEA'
        ],
      },
      {
        title: 'Service (AWS)',
        tags: [
          'ECS', 'EC2', 'ELB', 'S3', 'CloudFront', 'Lambda', 'Cognito'
        ]
      },
      {
        title: 'Licence',
        tags: [
          'アマチュア無線3級', '普通自動車運転免許'
        ],
      },
    ]

    return {
      careers,
    }
  },
})
</script>
