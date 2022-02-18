module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    removeConsole: {
      exclude: ['error'],
    },
  },
  i18n: {
    locales: ['pt-BR'],
    defaultLocale: 'pt-BR',
  },
}
