/**
 * By default, Nuxt.js is configured to cover most use cases.
 * This default configuration can be overwritten in this file
 * @link {https://nuxtjs.org/guide/configuration/}
 */

module.exports = {
  ssr: false,
  target: 'static',
  head: {
    title: 'Transcription-Translator',
    meta: [{ charset: 'utf-8' }]
  },
  loading: false,
  plugins: [

  ],
  buildModules: [
    '@nuxt/typescript-build'
  ],
  modules: [

  ]
}
