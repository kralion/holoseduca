// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://holoseduca.netlify.app',
	integrations: [mdx(), sitemap()],
	vite: {
    plugins: [tailwindcss()],
  },
});
