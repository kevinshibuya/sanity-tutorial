export default {
  name: 'post',
  type: 'document',
  title: 'Post',
  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title',
    },
    {
      name: 'date',
      type: 'date',
      title: 'Date',
    },
    {
      name: 'content',
      type: 'text',
      title: 'Content',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Image',
    },
    {
      name: 'author',
      type: 'reference',
      title: 'Author',
      to: [{type: 'author'}],
    },
  ],
}
