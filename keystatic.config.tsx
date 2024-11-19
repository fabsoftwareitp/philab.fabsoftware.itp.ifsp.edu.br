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
    professores: collection({
      label: 'Professores',
      slugField: 'title',
      path: 'src/content/professores/*',
      format: { contentField: 'emptyContent' },
      schema: { 
        emptyContent: fields.emptyContent({ extension: 'md' }),
        title: fields.slug({ name: { label: 'Nome' } }),
        cargo: fields.text({
          label: 'Cargo',
        }),
        nomeCompleto: fields.text({
          label: 'Nome completo',
        }),
        curriculo: fields.url({
          label: 'Curriculum Lattes',
        }),
        contato: fields.text({
          label: 'Contato',
        }),
        avatar: fields.image({
          label: 'Avatar',
          directory: 'public/images/professores',
          publicPath: '/images/professores/'
        }),
      },
    }),
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
    disciplinas: collection({
      label: 'Disciplinas',
      slugField: 'title',
      path: 'src/content/disciplinas/*',
      format: { contentField: 'emptyContent' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        emptyContent: fields.emptyContent({ extension: 'md' }),
        curso: fields.text({
          label: 'Curso',
        }),
        disciplinas: fields.array(
          fields.object({
            disciplina: fields.text({ label: 'Disciplina' }),
            descricao: fields.text({ label: 'Descrição', multiline: true, }),
            link: fields.url({
              label: 'link',
            }),
          }),
          // Labelling options
          {
            label: 'Disciplina',
            itemLabel: props => props.fields.disciplina.value
          }
        ),
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