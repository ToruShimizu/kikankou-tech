// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

import sitemap from '@astrojs/sitemap'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react'

import playformCompress from '@playform/compress'

import playformInline from '@playform/inline'

// https://astro.build/config
export default defineConfig({
    site: 'https://shimit-blog.com',
    output: 'server',
    adapter: cloudflare({
        imageService: 'cloudflare',
    }),
    integrations: [
        sitemap({
            filter: (page) => page !== 'https://shimit-blog.com/contact/completed/',
        }),
        tailwind(),
        react(),
        playformCompress(),
        playformInline({ Critters: { fonts: false } }),
    ],
})
