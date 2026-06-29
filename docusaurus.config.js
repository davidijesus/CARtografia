const config = {
  title: 'CARtografia',
  tagline: 'Suficiência cartográfica para análise semiautomática do CAR',
  url: 'https://davidijesus.github.io',
  baseUrl: '/CARtografia/',
  organizationName: 'davidijesus',
  projectName: 'CARtografia',
  deploymentBranch: 'gh-pages',
  onBrokenLinks: 'throw',
  trailingSlash: false,
  i18n: {
    defaultLocale: 'pt-BR',
    locales: ['pt-BR'],
  },
  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: 'warn',
    },
  },
  themes: ['@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      {
        docs: {
          path: 'docs',
          routeBasePath: 'docs',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    navbar: {
      title: 'CARtografia',
      logo: {
        alt: 'Isótipo CARtografia',
        src: 'img/cartografia-isotipo.png',
      },
      items: [
        {
          to: '/login',
          position: 'left',
          label: 'Protótipo',
        },
        {
          type: 'docSidebar',
          sidebarId: 'businessPlan',
          position: 'left',
          label: 'Documentação',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentação',
          items: [
            {
              label: 'Business Plan',
              to: '/docs/business-plan',
            },
            {
              label: 'Protótipo',
              to: '/login',
            },
          ],
        },
      ],
      copyright: `CARtografia - documentação estratégica aberta.`,
    },
  },
};

module.exports = config;
