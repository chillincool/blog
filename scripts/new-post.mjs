// scripts/new-post.mjs
import fs from 'fs'
import path from 'path'

const root = process.cwd()
// Change to match your template’s posts directory
const POSTS_DIR = path.join(root, 'data', 'blog')

// Expect: yarn new:post "Post Title" "Post description"
const [, , titleArg, summaryArg] = process.argv

if (!titleArg) {
  console.error('Usage: yarn new:post "Post Title" "Post description"')
  process.exit(1)
}

const title = titleArg.trim()
const summary = (summaryArg || '').trim()

const slug = title
  .toLowerCase()
  .replace(/[^\w\s-]/g, '')
  .trim()
  .replace(/\s+/g, '-')

const date = new Date().toISOString().split('T')[0] // YYYY-MM-DD

// You can change `.mdx` to `/index.mdx` if you want Hugo-style folders
const dest = path.join(POSTS_DIR, `${slug}.mdx`)

const frontmatter = `---
title: "${title.replace(/"/g, '\\"')}"
date: "${date}"
tags: []
draft: true
summary: "${summary.replace(/"/g, '\\"')}"
images: []
---

`

fs.mkdirSync(path.dirname(dest), { recursive: true })
if (fs.existsSync(dest)) {
  console.error(`File already exists: ${dest}`)
  process.exit(1)
}
fs.writeFileSync(dest, frontmatter, 'utf8')
console.log(`✅ Created ${dest}`)
