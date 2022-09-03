export default {
  project: { 
    link: 'https://github.com/brunojppb/ultimate-monorepo',
  },
  navigation: {
    nextLinks: true,
    prevLinks: true,
  },
  docsRepositoryBase: 'https://github.com/brunojppb/ultimate-monorepo/blob/main/apps/docs',
  titleSuffix: '',
  unstable_flexsearch: true,
  toc: {
    float: true,
  },
  darkMode: true,
  footer: {
    text: `ISC ${new Date().getFullYear()} © Bruno Paulino.`,
    EditLink: `Edit this page on GitHub`,
  },
  logo: (
    <span>Ultimate Monorepo docs</span>
  ),
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content="Ultimate Monorepo: The monorepo setup you were looking for" />
      <meta name="og:title" content="Ultimate Monorepo" />
    </>
  ),
}