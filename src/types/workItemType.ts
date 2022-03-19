export type TagType = {
  name: string
}

export type WorkItemType = {
  id: number
  title: string
  image?: string
  tags: TagType[]
}