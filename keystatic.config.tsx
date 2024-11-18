// keystatic.config.tsx
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'local',
    // kind: 'github',
    // repo: {
    //   owner: 'fabsoftwareitp',
    //   name: 'philab.fabsoftware.itp.ifsp.edu.br' 
    // }  
  },
  collections: {
    posts: collection({
      label: 'Posts',
      slugField: 'title',
      path: 'src/content/posts/*',
      format: { contentField: 'content' },
      schema: {
        image: fields.image({
          label: 'Image',
          directory: 'public/images/posts',
          publicPath: '/images/posts/'
        }),
        title: fields.slug({ name: { label: 'Title' } }),
        content: fields.markdoc({ label: 'Content', extension: 'md' }),
      },
    }),
  },
  ui: {
    brand: { 
      name: 'Philab',
      mark: ({ colorScheme }) => {
        let path = colorScheme === 'dark'
          ? './fundos/logo-claro.svg'
          : './fundos/logo-claro.svg';
        return <img src={path} height={24} />
      }
    }
  }
});