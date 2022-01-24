export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '61eeccb46ce87f291c5d843c',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-6va2aaqk',
                  apiId: '5604c42c-32e5-4425-ad75-f3fb99cec719'
                },
                {
                  buildHookId: '61eeccb420759228ff08dbc5',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-ufjza6kh',
                  apiId: '36ee5b25-44de-4915-b349-5a86ddce75f3'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/eugene-nosenko/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-ufjza6kh.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
