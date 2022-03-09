export default {
    name: 'project',
    title: 'Project',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Project Title',
            type: 'string'
        },    
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
              source: 'title',
              maxLength: 96,
            },
        },
        {
            name: 'liveLink',
            title: 'Live Link',
            type: 'url'
        },
        {
            name: 'codeLink',
            title: 'Code Link',
            type: 'url'
        },
        {
            name: 'projectImage',
            title: 'Project image',
            type: 'image',
            options: {
              hotspot: true,
            },
          }
    ],
    // preview: {
    //   select: {
    //     title: 'title',
    //     author: 'author.name',
    //     media: 'projectImage',
    //   },
    //   prepare(selection) {
    //     const {author} = selection
    //     return Object.assign({}, selection, {
    //       subtitle: author && `by ${author}`,
    //     })
    //   },}
    preview: {
        select: {
          title: 'name',
          media: 'image',
        },
      },
}