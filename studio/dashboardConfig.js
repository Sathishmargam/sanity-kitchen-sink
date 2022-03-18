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
                  buildHookId: '6234483913f2c15db1d9346a',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-gcdvttsu',
                  apiId: 'd3e0cfa4-67d1-4055-a2de-78a1d5488115'
                },
                {
                  buildHookId: '62344839bd2102493a89fedb',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-4say32jv',
                  apiId: 'fbcb460f-10b7-4a2e-a69c-6acf185ee72c'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/Sathishmargam/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-4say32jv.netlify.app', category: 'apps'}
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
