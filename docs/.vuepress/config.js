// .vuepress/config.js

const DEPLOY_DOMAIN = 'https://docs.filecoin.io'

module.exports = {
  base: '/',
  head: require('./head'),
  locales: {
    '/': {
      lang: 'en-US',
      title: 'Filecoin Docs',
      description: 'Filecoin Documentation'
    }
  },
  markdown: {
    extendMarkdown: md => {
      md.set({
        breaks: true
      })
      md.use(require('markdown-it-video'))
      md.use(require('markdown-it-footnote'))
      md.use(require('markdown-it-task-lists'))
      md.use(require('markdown-it-deflist'))
    }
  },
  themeConfig: {
    algolia: {
      apiKey: '6c3d7635474cdcd0a0aaf8ca397a4c44',
      indexName: 'filecoin'
    },
    betaTestFormUrl:
      'https://docs.google.com/forms/d/1LVaD1B2uyW6Ff0jfU_iQ5mCeyQcHfyQO6BDD99XAgK0/viewform',
    defaultImage: '/images/social-card.png',
    author: {
      name: 'Filecoin Team',
      twitter: '@filecoin'
    },
    keywords:
      'Filecoin, crypto, mining, blockchain, IPFS, dweb, protocol, libp2p, ipld, multiformats, bitswap, decentralized web, InterPlanetary File System, dapp, documentation, docs, Protocol Labs',
    // edit links
    // repo: 'filecoin-project/filecoin-docs',
    domain: DEPLOY_DOMAIN,
    docsRepo: 'filecoin-project/filecoin-docs',
    docsDir: 'docs',
    docsBranch: 'master',
    feedbackWidget: {
      docsRepoIssue: 'filecoin-project/filecoin-docs'
    },
    editLinks: false,
    // page nav
    nextLinks: true,
    prevLinks: true,
    // ui/ux
    logo: '/images/filecoin-symbol-color.svg',
    locales: {
      '/': {
        label: 'English',
        selectText: 'Languages',
        ariaLabel: 'Select language',
        editLinkText: 'Edit this page',
        lastUpdated: 'Last Updated',
        serviceWorker: {
          updatePopup: {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        },
        nav: require('./nav/en'),
        sidebar: {
          '/mine/': [
            '/mine/storage-mining',
            '/mine/lotus-seal-worker',
            '/mine/setting-a-static-port',
            '/mine/connectivity',
            '/mine/spacerace',
            '/mine/mining-troubleshooting'
          ],
          '/build/': [
            '/build/getting-started',
            '/build/implementations',
            {
              title: 'Tools',
              collapsable: false,
              path: '/build/tools/',
              children: [
                '/build/tools/api-clients',
                '/build/tools/filecoin-backed-pinning',
                '/build/tools/powergate',
                '/build/tools/signing-libraries',
                '/build/tools/slate',
                '/build/tools/wallets'
              ]
            },
            {
              title: 'Examples',
              sidebarDepth: 2,
              path: '/build/examples/',
              collapsable: false,
              children: [
                '/build/examples/meme-marketplace',
                '/build/examples/network-inspector',
                '/build/examples/simple-pinning-service',
                '/build/examples/slate-and-powergate'
              ]
            }
          ],
          '/reference/': [
            'glossary',
            ['https://github.com/filecoin-project/specs', 'Specification'],
            ['https://lotu.sh/', 'Lotus tutorial']
          ],
          '/': [
            {
              title: 'Introduction',
              path: '/introduction/',
              collapsable: false,
              children: [
                '/introduction/new-to-web3',
                '/introduction/what-is-filecoin',
                '/introduction/why-filecoin',
                '/introduction/ipfs-and-filecoin',
                '/introduction/filecoin-compared-to',
                '/introduction/faq'
              ]
            },
            {
              title: 'How-tos',
              path: '/how-to/',
              collapsable: false,
              children: [
                {
                  title: 'Install Filecoin',
                  sidebarDepth: 1,
                  collapsable: false,
                  children: ['/how-to/install-filecoin', '/how-to/networks']
                },
                {
                  title: 'Store Data',
                  collapsable: false,
                  path: '/how-to/store/prepare-data/',
                  children: [
                    '/how-to/store/prepare-data',
                    '/how-to/store/tokens',
                    '/how-to/store/making-storage-deals',
                    '/how-to/store/retrieving-data',
                    '/how-to/store/large-files'
                  ]
                }
              ]
            },
            {
              title: 'Project',
              path: '/project/',
              children: [
                [
                  'https://app.instagantt.com/shared/s/1152992274307505/latest',
                  'Roadmap'
                ],
                ['https://research.filecoin.io/', 'Research'],
                '/project/related-projects',
                [
                  'https://github.com/filecoin-project/community/blob/master/CODE_OF_CONDUCT.md',
                  'Code of conduct'
                ]
              ]
            },

            {
              title: 'Community',
              path: '/community/',
              children: [
                {
                  title: 'Join the community',
                  sidebarDepth: 2,
                  collapsable: false,
                  children: [
                    '/community/contribute/ways-to-contribute',
                    '/community/chat-and-discussion-forums',
                    ['https://proto.school/#/events', 'ProtoSchool workshops'],
                    '/community/social-media/social-media'
                  ]
                },
                {
                  title: 'Write the docs',
                  sidebarDepth: 1,
                  collapsable: false,
                  children: [
                    '/community/contribute/grammar-formatting-and-style',
                    '/community/contribute/writing-guide',
                    '/community/contribute/contribution-tutorial'
                  ]
                }
              ]
            }
          ]
        }
      }
    }
  },
  plugins: [
    '@vuepress/plugin-back-to-top',
    [
      '@vuepress/active-header-links',
      {
        sidebarLinkSelector: '.sidebar-link',
        headerAnchorSelector: '.header-anchor',
        headerTopOffset: 120
      }
    ],
    '@vuepress/plugin-last-updated',
    [
      'vuepress-plugin-clean-urls',
      {
        normalSuffix: '/',
        indexSuffix: '/',
        notFoundPath: '/404/'
      }
    ],
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-148766289-2'
      }
    ],
    [
      'vuepress-plugin-medium-zoom',
      {
        selector: '.theme-default-content img',
        delay: 500,
        options: {
          margin: 20,
          background: 'rgba(255,255,255,0.8)',
          scrollOffset: 0
        }
      }
    ],
    [
      'vuepress-plugin-seo',
      {
        siteTitle: ($page, $site) => $site.title,
        title: $page => $page.title,
        description: $page => $page.frontmatter.description,
        author: ($page, $site) =>
          $page.frontmatter.author || $site.themeConfig.author,
        tags: $page => $page.frontmatter.tags,
        twitterCard: _ => 'summary_large_image',
        type: $page =>
          ['articles', 'posts', 'blog'].some(folder =>
            $page.regularPath.startsWith('/' + folder)
          )
            ? 'article'
            : 'website',
        url: ($page, $site, path) => ($site.themeConfig.domain || '') + path,
        image: ($page, $site) =>
          $page.frontmatter.image
            ? ($site.themeConfig.domain || '') + $page.frontmatter.image
            : ($site.themeConfig.domain || '') + $site.themeConfig.defaultImage,
        publishedAt: $page =>
          $page.frontmatter.date && new Date($page.frontmatter.date),
        modifiedAt: $page => $page.lastUpdated && new Date($page.lastUpdated),
        customMeta: (add, context) => {
          const { $site, image } = context
          add(
            'twitter:site',
            ($site.themeConfig.author && $site.themeConfig.author.twitter) || ''
          )
          add('image', image)
          add('keywords', $site.themeConfig.keywords)
        }
      }
    ],
    [
      'vuepress-plugin-sitemap',
      {
        hostname: DEPLOY_DOMAIN
      }
    ],
    [
      'vuepress-plugin-robots',
      {
        host: DEPLOY_DOMAIN
      }
    ],
    [
      'vuepress-plugin-canonical',
      {
        // add <link rel="canonical" header (https://tools.ietf.org/html/rfc6596)
        // to deduplicate SEO across all copies loaded from various public gateways
        baseURL: DEPLOY_DOMAIN
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'callout',
        defaultTitle: ''
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'right',
        defaultTitle: ''
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'left',
        defaultTitle: ''
      }
    ],
    'vuepress-plugin-check-md',
    'vuepress-plugin-ipfs'
  ],
  extraWatchFiles: ['.vuepress/nav/en.js']
}
