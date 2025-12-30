import { defineConfig } from 'vitepress'
import tailwindcss from '@tailwindcss/vite';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  title: "Gurun Kit",
  description: "Vue & Tailwind UI Kit",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Components', link: '/components/navbar' }
    ],

    sidebar: [
      {
        text: 'Components',
        items: [
          { text: 'Navbar', link: '/components/navbar' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
