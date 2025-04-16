// keystatic.config.tsx
import { config, fields, collection } from '@keystatic/core';

export default config({
  storage: {
    kind: 'github',
    repo: {
      owner: 'fabsoftwareitp',
      name: 'philab.fabsoftware.itp.ifsp.edu.br' 
    }  
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
    paginaInicial: collection({
      label: 'Página inicial',
      slugField: 'title',
      path: 'src/content/pagInicial/*',
      format: { contentField: 'emptyContent' },
      schema: { 
        emptyContent: fields.emptyContent({ extension: 'md' }),
        title: fields.slug({ name: { label: 'Nome' } }),
        sobre: fields.text({
          label: 'Sobre o lab',
          multiline: true,
        }),
        img1: fields.image({
            label: 'Imagem 1',
            directory: 'public/images/pagInicial',
            publicPath: '/images/pagInicial/'
        }),
        img2: fields.image({
            label: 'Imagem 2',
            directory: 'public/images/pagInicial',
            publicPath: '/images/pagInicial/'
        }),
        img3: fields.image({
            label: 'Imagem 3',
            directory: 'public/images/pagInicial',
            publicPath: '/images/pagInicial/'
        }),
        sobreProf: fields.text({
          label: 'Descrição professores',
          multiline: true,
        }),
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
    equipamentos: collection({
      label: 'Equipamentos',
      slugField: 'title',
      path: 'src/content/equipamentos/*',
      format: { contentField: 'content' },
      schema: {
        title: fields.slug({ name: { label: 'Title' } }),
        nome: fields.text({ label: 'Nome do equipamento' }),
        imagens: fields.array(
          fields.image({
            label: 'Imagens',
            directory: 'public/images/equipamentos',
            publicPath: '/images/equipamentos/',
          }),
          {
            label: 'Imagens',
          },
          // Labelling options
        ),
        content: fields.markdoc({ label: 'Descrição', extension: 'md' }),
      },
    }),
  },
  ui: {
    brand: { 
      name: 'Philab',
      mark: ({ colorScheme }) => {
        let path = colorScheme === 'dark'
          ? '/fundos/logo-claro.svg'
          : '/fundos/logo-claro.svg';
        return <img src={path} height={24} />
      }
    }
  }
});