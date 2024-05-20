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
        { property: 'og:title', content: 'Nuxt3 training' },
        { property: 'og:url', content: 'http://localhost:3000/' },
        {
          property: 'og:description',
          content: 'Nuxt3 training',
        },
      ],
    },
  },
});
