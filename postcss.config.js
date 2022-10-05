const purgecss = require('@fullhuman/postcss-purgecss')({
  content: ['./hugo_stats.json'],
  defaultExtractor: (content) => {
    const els = JSON.parse(content).htmlElements
    return [...(els.tags || []), ...(els.classes || []), ...(els.ids || [])]
  },
  safelist: ['nav-active', 'overflow-active', 'gtag-orcamento'],
})

const cssnano = require('cssnano')({
  preset: 'advanced',
})

module.exports = {
  syntax: 'postcss-scss',
  plugins: [
    ...(process.env.HUGO_ENVIRONMENT === 'production'
      ? [purgecss, cssnano]
      : []),
  ],
}
