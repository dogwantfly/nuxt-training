// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  components: {
    dirs: [
      {
        path: '~/components/global',
        global: true,
      },
    ],
  },
  imports: {
    dirs: ['stores'],
  },
  modules: [
    [
      '@pinia/nuxt',
      {
        autoImports: ['defineStore', 'acceptHMRUpdate'],
      },
    ],
  ],
  app: {
    head: {
      viewport: 'width=500, initial-scale=1',
      title: 'Nuxt3 training',
      meta: [
        {
          name: 'description',
          content: 'Nuxt3 training Repo',
        },
        {
          property: 'title',
          content: 'Nuxt3 training Repo',
        },
        { property: 'og:title', content: 'Nuxt3 training' },
        { property: 'og:url', content: 'http://localhost:3000/' },
        {
          property: 'og:description',
          content: 'Nuxt3 training',
        },
      ],
      link: [
        {
          rel: "stylesheet",
          href: "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css",
        },
      ],
      script: [
        {
          src: "https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js",
          async: true,
          tagPosition: 'bodyOpen'
        },
      ],
    },
  },
});
