export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '601677c5d9325cbc7d81c9ad',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-k2stt51n',
                  apiId: 'f32aec59-e6d2-4a67-8473-342cce58527e'
                },
                {
                  buildHookId: '601677c50d9f51c08daa2c51',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-n2u5p7bo',
                  apiId: '66bbcdf1-4ac8-4849-a724-0245fcff25d1'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/smilehead-failman/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-n2u5p7bo.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
