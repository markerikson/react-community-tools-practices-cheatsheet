module.exports = {
  title: "React Common Tools and Practices",
  tagline: "Common Tools and Practices in the React Community",
  url: "https://react-community-tools-practices-cheatsheet.netlify.app",
  baseUrl: "/",
  favicon: "img/favicon.ico",
  projectName: "react-community-tools-practices-cheatsheet",
  themeConfig: {
    navbar: {
      title: "Common Tools & Practices",
      logo: {
        alt: "My Site Logo",
        src: "img/logo.svg",
      },
      items: [
        {
          to: "/common-mistakes/mistake1",
          label: "Common Mistakes",
          position: "right",
        },
        {
          to: "/glossary/glossary",
          label: "Glossary",
          position: "right",
        },
        {
          to: "/use-cases/choosing-library-for-existing-project",
          label: "Use Cases",
          position: "right",
        },
        {
          to: "/state-management/overview",
          label: "State Management",
          position: "right",
        },
      ],
    },
    footer: {
      style: "dark",
      links: [
        {
          title: "Docs",
          items: [
            {
              label: "Common Mistakes",
              to: "/common-mistakes/mistake1",
            },
            {
              label: "Glossary",
              to: "/glossary/glossary",
            },
            {
              label: "Use Cases",
              to: "/use-cases/choosing-library-for-existing-project",
            },
            {
              label: "State Management",
              to: "/state-management/overview",
            },
            {
              label: "How To",
              to: "/how-to/how-to",
            },
          ],
        },
        {
          title: "Community",
          items: [
            {
              label: "Github Discussion",
              href: "https://github.com/markerikson/react-community-tools-practices-cheatsheet/discussions/1",
            },
          ],
        },
        {
          title: "More",
          items: [
            {
              label: "GitHub",
              href: "https://github.com/markerikson/react-community-tools-practices-cheatsheet",
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} React Community. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      "@docusaurus/preset-classic",
      {
        docs: {
          path: "./docs",
          routeBasePath: "/",
          include: ["**/*.{md,mdx}"],
          sidebarPath: require.resolve("./sidebars.js"),
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      },
    ],
  ],
};
