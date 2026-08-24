// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/**
 * The URL or reference to your projects logo!
 * @type {string}
 */
const logo = 'https://upload.wikimedia.org/wikipedia/commons/1/17/Temple_T_logo.svg';

const main_template_jira_scripts = () => {
  if (process.env.ORG_NAME === 'ApplebaumIan'){
    return [    'https://temple-cis-projects-in-cs.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/azc3hx/b/8/c95134bc67d3a521bb3f4331beb9b804/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=50af7ec2',
      'https://temple-cis-projects-in-cs.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/azc3hx/b/8/c95134bc67d3a521bb3f4331beb9b804/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=160e88a6',]
  } else {
    return []
  }
}
const is_pdf = process.env.PDF; // helper env variable to ignore parts that shouldn't be a part of the PDF. Basically tell docusaurus whether its being rendered as a PDF or not.
const course_number = 'CIS 3296';
const semester = process.env.SEMESTER_YEAR;
// You can change the title here. The default is the name of the repository.
const title = ''+(process.env.PROJECT_NAME || 'software-design').replaceAll('-',' ').split(' ').map((word) => {
  return word[0].toUpperCase() + word.substring(1);
}).join(' ');

/** @type {import('@docusaurus/types').Config} */
const config = {
  /*TODO: Change to your project's title and tagline*/
  title: title,
  tagline: 'Professor Applebaum',
  /*Unless you move this website to a seperate repo don't change url and baseurl.*/
  url: 'https://software-design.ianapplebaum.com/',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/dont-panic.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: process.env.ORG_NAME || 'applebaumian', // Usually your GitHub org/user name.
  projectName: process.env.PROJECT_NAME || 'software-design', // Usually your repo name.
  customFields:{
    course_number: course_number,
    semester: semester,
    is_pdf: is_pdf,
  },
  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  markdown: {
    mermaid: true,
  },
  themes: ['@docusaurus/theme-live-codeblock','@docusaurus/theme-mermaid'],
  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          showLastUpdateAuthor: true,
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs',
          path: 'docs',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/'+(process.env.ORG_NAME || 'ianapplebaum')+'/'+(process.env.PROJECT_NAME || 'software-design')+'/edit/main/documentation/',
          remarkPlugins: [require('./src/plugins/remark-showcase-redirect')],

        },

        // tutorials: {
        //   sidebarPath: require.resolve('./tutorialSidebars.js'),
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        // },

        theme: {
          customCss: require.resolve('./src/css/custom.scss'),
        },
      }),
    ],
    [
      'redocusaurus',
      {
        // Plugin Options for loading OpenAPI files
        specs: [
          {
            id: 'using-petstore-yaml',
            spec: 'static/openapi.yml.yaml',
            route: '/api/',
          },
          // {
          //   id: 'using-single-yaml',
          //   spec: 'https://courses.ianapplebaum.com/public/docs/openapi.yaml',
          //   route: '/courses/api/',
          // },
        ],
        // Theme Options for modifying how redoc renders them
        theme: {
          // Change with your site colors
          customCss: require.resolve('./src/css/custom.scss'),
        },
      },
    ],
  ],
  themeConfig:

    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs:{
        sidebar: {
          hideable: true,
        },
      },
      colorMode: {
        defaultMode: 'dark',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
      navbar: {
        /*TODO: Change to your project's title*/
        title: title,
        logo: {
          alt: 'My Site Logo',
          src: logo,
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Documentation',
          },{
            to: '/design-patterns/intro',
            label: 'Design Patterns',
            position: 'left',
            activeBaseRegex: `/design-patterns/`,
          },{
            to: '/tutorial/intro',
            label: 'Docusaurus Tutorial',
            position: 'left',
            activeBaseRegex: `/tutorial/`,
          },
          // {
          //   to: '/slides',
          //   label: 'Lecture Slides',
          //   position: 'left',
          // },

          {
            href: 'https://github.com/'+(process.env.ORG_NAME || 'ianapplebaum')+'/'+(process.env.PROJECT_NAME || 'software-design'),
            label: 'GitHub',
            position: 'right',
          },
        ],

      },
      footer: {
        logo: {
          alt: 'My Site Logo',
          src: logo,
        },
        links: [
          {
            title: 'Course Materials',
            items: [
              {
                label: 'Documentation Reference',
                to: '/docs/intro',
              },
              {
                label: 'Course Schedule',
                to:'/#course-schedule',
              },
              {
                label: 'Docusaurus Tutorial',
                to:'/tutorial/intro',
              },
              {
                label: 'Docusaurus Guide',
                href: 'https://docusaurus.io/docs/category/guides',
              },
              {
                label: 'GitHub Statistics',
                to:'/github-statistics',
              },
              {
                label: 'GPU Server',
                to:'/gpu-server',
              },
            ],
          },
          {
            title: 'Communication',
            items: [
              {
                label: 'Class Discord',
                href: '/#class-discord',
              },
              {
                label: 'Course Contacts',
                href: '/#contact-professor-applebaum',
              },
              {
                label: 'Office Hours',
                href: '/#office-hours-professor-applebaum',
              },
            ],
          },
          {
            title: 'Our Tools',
            items: [
              {
                label: 'Jira',
                href: 'https://temple-cis-projects-in-cs.atlassian.net',
              },
              {
                label: 'Miro',
                href: 'https://miro.com/',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Ian Tyler Applebaum. <a target="_blank" href="https://github.com/applebaumian/projects-in-computer-science">Built with Docusaurus.</a>`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      imageZoom: {
        // CSS selector to apply the plugin to, defaults to '.markdown img'
        selector: '.markdown img',
        // Optional medium-zoom options
        // see: https://www.npmjs.com/package/medium-zoom#options
        options: {
          margin: 24,
          zIndex:100,
          background: 'white',
          // scrollOffset: 10,
          // container: '#zoom-container',
          // template: '#zoom-template',
        },
      },

    }),
  plugins: [
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "docs", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/ApplebaumIan/projects-in-computer-science/refs/heads/main/documentation/docs/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs", // the base directory to output to.
        documents: [
          // "api-specification/Intro.md",

          // "api-specification/calculator-model-generated.md",
          // "api-specification/openapi-spec-petstore.md",
          // "api-specification/openapi-spec.md",
          // "development-plan/Intro.md",

          // "development-plan/activities.md",
          // "development-plan/development-environment.md",
          // "development-plan/schedule.md",
          // "development-plan/tasks.md",
          // "development-plan/version-control.md",
          "intro.mdx",
          "markdown-tutorial.mdx",
          "requirements/Intro.md",

          "requirements/features-and-requirements.md",
          "requirements/general-requirements.md",
          "requirements/system-block-diagram.md",
          "requirements/system-overview.md",
          "requirements/use-case-descriptions.md",
          "set-it-up.mdx",
          "system-architecture/Intro.md",

          "testing/Intro.md",

          "testing/acceptence-testing.md",
          "testing/integration-testing.md",
          "testing/test-report.md",
          "testing/unit-testing.md",
          "why-docusaurus.mdx"
        ]
        , // the file names to download
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "images-content", // used by CLI, must be path safe
        sourceBaseUrl: "https://capstone.ianapplebaum.com/img/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "static/img", // the base directory to output to.
        documents: ["blastpad-example.webp"], // the file names to download
        requestConfig: { responseType: "arraybuffer" }
      },
    ],
    [
      "docusaurus-plugin-remote-content",
      {
        // options here
        name: "json", // used by CLI, must be path safe
        sourceBaseUrl: "https://raw.githubusercontent.com/ApplebaumIan/projects-in-computer-science/refs/heads/main/documentation/docs/", // the base url for the markdown (gets prepended to all of the documents when fetching)
        outDir: "docs", // the base directory to output to.
        documents:[
            // "api-specification/_category_.json",
          // "development-plan/_category_.json",
          "requirements/_category_.json",
          "system-architecture/_category_.json",
          "testing/_category_.json",],
        requestConfig: { responseType: "arraybuffer" }
      },
    ],

    [
      '@docusaurus/plugin-content-docs',
    {
        id: 'tutorial',
        path: 'tutorial',
        routeBasePath: 'tutorial',
        sidebarPath: require.resolve('./sidebars.js'),
        remarkPlugins: [require('./src/plugins/remark-showcase-redirect')],
        // ... other options
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'design-patterns',
        path: 'design-patterns',
        routeBasePath: 'design-patterns',
        sidebarPath: require.resolve('./sidebars.js'),
        remarkPlugins: [require('./src/plugins/remark-showcase-redirect')],
        // ... other options
      },
    ],[
      '@docusaurus/plugin-content-docs',
      {
        id: 'syllabus',
        path: 'syllabus',
        routeBasePath: 'syllabus',
        sidebarPath: require.resolve('./sidebars.js'),
        remarkPlugins: [require('./src/plugins/remark-showcase-redirect')],
        // ... other options
      },
    ],
    [
      '@docusaurus/plugin-google-gtag',
      {
        trackingID: 'G-2Z6N80YCD7',
        anonymizeIP: true,
      },
    ],
    [
      "docusaurus2-dotenv-2",
      {
        systemvars: true,
      },
    ],
    [
      '@docusaurus/plugin-client-redirects',
      {
        redirects: [
          {
            to: 'https://capstone.ianapplebaum.com/showcase',
            from: '/showcase',
          },
        ],
      },
    ],
    'plugin-image-zoom',
    'docusaurus-plugin-sass'


  ],
  scripts:['https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js',
    {
      src:"/js/userway.js",
      async:false
    },
  ...main_template_jira_scripts()
  ],
};
console.log(config.scripts)
module.exports = config;
