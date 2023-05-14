<script setup lang="ts">
import meJson from '/@/data/me.json'
import type { ListItem } from '/@/types/ListItem'
import SubTitle from '/@/components/atoms/SubTitle.vue'
import Tag from '/@/components/ui/Tag.vue'

const skillListItems: ListItem[] = [
  {
    label: 'Languages',
    value: 'languages',
  },
  {
    label: 'Frameworks',
    value: 'frameworks',
  },
  {
    label: 'Applications',
    value: 'applications',
  },
]

const serviceListItems: ListItem[] = [
  {
    label: 'AWS',
    value: 'aws',
  },
  {
    label: 'Others',
    value: 'others',
  },
]
</script>

<template>
  <sub-title> Skills </sub-title>
  <div
    class="mt-6 rounded-lg border border-neutral-300 dark:border-neutral-700"
  >
    <div
      v-for="(skill, index) in skillListItems"
      :key="skill.label"
      :class="[
        index !== 0 ? 'border-t' : '',
        'border-neutral-300 px-6 pb-6 pt-4 dark:border-neutral-700',
      ]"
    >
      <div class="font-futura text-lg font-semibold text-neutral-400">
        {{ skill.label }}
      </div>
      <div class="text-md mt-3 flex flex-wrap gap-2 text-neutral-700">
        <Tag
          v-for="item in meJson.skills[skill.value]"
          :key="item.name"
          :bg-color="`lv${item.level}`"
        >
          <template #default>
            {{ item.name }}
          </template>
          <template #append>
            <div
              v-if="item.isLove"
              class="ml-1 mt-0.5 inline-flex content-center"
            >
              <span
                class="material-icons-rounded bg-gradient-to-r from-rose-500 to-fuchsia-500 bg-clip-text text-transparent"
                style="font-size: 0.75rem"
              >
                favorite
              </span>
            </div>
          </template>
        </Tag>
      </div>
    </div>
    <div
      :class="['border-t border-neutral-300 px-6 py-4 dark:border-neutral-700']"
    >
      <div class="font-futura text-lg font-semibold text-neutral-400">
        Services
      </div>
      <div
        v-for="serviceListItem in serviceListItems"
        :key="serviceListItem.label"
        class="mt-3"
      >
        <div class="text-md font-futura font-semibold text-neutral-400">
          {{ serviceListItem.label }}
        </div>
        <div
          class="text-md mt-3 flex flex-wrap gap-2 text-neutral-700"
        >
          <Tag
            v-for="item in meJson.skills.services[serviceListItem.value]"
            :key="item"
          >
            {{ item }}
          </Tag>
        </div>
      </div>
    </div>
  </div>
</template>
