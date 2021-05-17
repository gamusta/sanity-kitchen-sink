export default {
  widgets: [
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
                  buildHookId: '60a2ce3507f9bd22074e44b1',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-aiytxp16',
                  apiId: 'b2969bc1-d9f8-49a4-9d76-79c4a9c49b81'
                },
                {
                  buildHookId: '60a2ce356ea5e3100da9af6c',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-3dmtgimx',
                  apiId: '21e1cecd-9bb4-4d6a-acd9-dbb89f5428d9'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/gamusta/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-3dmtgimx.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
