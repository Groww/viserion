module.exports = {
  title: 'Viserion',
  tagline: 'A collection of common ui components for react-native apps',
  url: 'https://groww.github.io',
  baseUrl: '/viserion/',
  favicon: 'img/favicon.ico',
  organizationName: 'Groww', // Usually your GitHub org/user name.
  projectName: 'viserion', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Viserion',
      logo: {
        alt: 'viserion',
        src: 'img/groww_logo.svg',
      },
      links: [
        {
          to: 'docs/installation',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/Groww/viserion',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Social',
          items: [
            {
              label: 'Blog',
              href: 'https://medium.com/groww-engineering',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/groww/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/_groww',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} My Project, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/Groww/viserion/edit/alpha/docs/documentation',
        },
        theme: { customCss: require.resolve('./src/css/custom.css') },
      },
    ],
  ],
};
