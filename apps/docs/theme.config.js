export default {
  projectLink: 'https://github.com/brunojppb/ultimate-monorepo',
  docsRepositoryBase: 'https://github.com/brunojppb/ultimate-monorepo/blob/main',
  titleSuffix: '',
  nextLinks: true,
  prevLinks: true,
  search: true,
  customSearch: null, // customizable, you can use algolia for example
  darkMode: true,
  footer: true,
  footerText: `ISC ${new Date().getFullYear()} © Bruno Paulino.`,
  footerEditLink: `Edit this page on GitHub`,
  logo: (
    <>
      <svg>...</svg>
      <span>Ultimate Monorepo docs</span>
    </>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Ultimate Monorepo: The monorepo setup you were looking for" />
      <meta name="og:title" content="Ultimate Monorepo" />
    </>
  ),
}