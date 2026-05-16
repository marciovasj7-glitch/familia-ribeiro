export interface FamilyMember {
  id: string
  name: string
  role: string
  dates?: string
  birth?: string
  death?: string
  birthplace?: string
  description: string
  photo?: string
  children?: string[]
  spouse?: string
  isDeponent?: boolean
  inMemoriam?: boolean
}

export interface TimelineEvent {
  id: string
  year: number
  title: string
  description: string
  category: 'birth' | 'marriage' | 'death' | 'milestone'
}

export interface GalleryItem {
  id: string
  title: string
  description: string
  image: string
  category: string
  year?: number
  featured?: boolean
}

export interface Video {
  id: string
  title: string
  description: string
  url: string
  thumbnail?: string
}

export interface GeologicalData {
  members: FamilyMember[]
  timeline: TimelineEvent[]
  gallery: GalleryItem[]
  videos: Video[]
}
