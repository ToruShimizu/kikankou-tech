// @ts-check
import { defineConfig } from 'astro/config'
import cloudflare from '@astrojs/cloudflare'

import sitemap from '@astrojs/sitemap'

import tailwind from '@astrojs/tailwind'

import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
    site: 'https://kikankou-tech.com',
    output: 'server',
    adapter: cloudflare(),
    integrations: [sitemap(), tailwind(), react()],
})