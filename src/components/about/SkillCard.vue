<script setup lang="ts">
import meJson from '/@/data/me.json'
import type { ListItem } from '/@/types/ListItem'
import SubTitle from '/@/components/ui/SubTitle.vue'
import Tag from '/@/components/ui/Tag.vue'
import LoveIcon from '/@/components/ui/LoveIcon.vue'

const skillListItems: ListItem[] = [
  {
    label: 'languages',
    value: 'languages',
  },
  {
    label: 'frameworks',
    value: 'frameworks',
  },
  {
    label: 'applications',
    value: 'applications',
  },
]

const serviceListItems: ListItem[] = [
  {
    label: 'AWS',
    value: 'aws',
  },
  {
    label: 'others',
    value: 'others',
  },
]
</script>

<template>
  <sub-title> skills </sub-title>
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
      <div class="font-heebo text-lg text-neutral-500">{{ skill.label }}:</div>
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
              <LoveIcon></LoveIcon>
            </div>
          </template>
        </Tag>
      </div>
    </div>
    <div
      :class="['border-t border-neutral-300 px-6 py-4 dark:border-neutral-700']"
    >
      <div class="font-heebo text-lg text-neutral-500">services:</div>
      <div
        v-for="serviceListItem in serviceListItems"
        :key="serviceListItem.label"
        class="mt-3"
      >
        <div class="text-md font-heebo text-neutral-500">
          {{ serviceListItem.label }}:
        </div>
        <div class="text-md mt-3 flex flex-wrap gap-2 text-neutral-700">
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
