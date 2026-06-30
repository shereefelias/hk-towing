import { readFile, rm, writeFile } from 'node:fs/promises'
import { render } from '../dist-ssr/entry-server.js'

const outputPath = new URL('../dist/index.html', import.meta.url)
const serverOutputPath = new URL('../dist-ssr', import.meta.url)
const rootPlaceholder = '<div id="root"></div>'
const template = await readFile(outputPath, 'utf8')

if (!template.includes(rootPlaceholder)) {
  throw new Error('Unable to prerender: root placeholder was not found in dist/index.html')
}

const html = template.replace(
  rootPlaceholder,
  `<div id="root">${render()}</div>`,
)

await writeFile(outputPath, html)
await rm(serverOutputPath, { recursive: true, force: true })
