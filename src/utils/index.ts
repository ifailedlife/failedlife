import { getCollection } from 'astro:content'
import dayjs from 'dayjs'
import MarkdownIt from 'markdown-it'
import sanitizeHtml from 'sanitize-html'
import type { Post } from '~/types'

export async function getCategories() {
  const posts = await getPosts()
  const categories = new Map<string, Post[]>()

  for (const post of posts) {
    if (post.data.categories) {
      for (const c of post.data.categories) {
        const posts = categories.get(c) || []
        posts.push(post)
        categories.set(c, posts)
      }
    }
  }

  return categories
}

export async function getPosts() {
  const posts = await getCollection('posts')
  posts.sort((a, b) => {
    return dayjs(a.data.pubDate).isBefore(dayjs(b.data.pubDate)) ? 1 : -1
  })
  return posts
}

const parser = new MarkdownIt()
export function getPostDescription(post: Post) {
  if (post.data.description) {
    return post.data.description
  }

  const html = parser.render(post.body)
  const sanitized = sanitizeHtml(html, { allowedTags: [] })
  return sanitized.slice(0, 400)
}

export function formatDate(date: Date, format: string = 'YYYY-MM-DD') {
  return dayjs(date).format(format)
}

// failedlife > get the year of post
export function formatDateYear(date: Date, format: string = 'YYYY') {
  return dayjs(date).format(format)
}

// failedlife > get the year diff of post from current year
export function formatDateYearDiff(date: Date, format: string = 'YYYY-MM-DD') {
  const today = dayjs()
  const diff = today.diff(dayjs(date).format(format), 'year')
  return diff
}

// failedlife added function to get the name of season from the date: Date
export function formatDateInSeason(date: Date, format: string = 'M') {
  let season = ''
  switch (dayjs(date).format(format)) {
    case '12':
    case '1':
      season = 'winter'
      break
    case '2':
      season = 'late_winter'
      break
    case '3':
      season = 'early_spring'
      break
    case '4':
    case '5':
      season = 'spring'
      break
    case '6':
      season = 'late_spring'
      break
    case '7':
    case '8':
      season = 'summer'
      break
    case '9':
    case '10':
      season = 'fall'
      break
    case '11':
      season = 'early_winter'
      break
  }
  return season
}

export function getPathFromCategory(
  category: string,
  category_map: { name: string, path: string }[],
) {
  const mappingPath = category_map.find(l => l.name === category)
  return mappingPath ? mappingPath.path : category
}
