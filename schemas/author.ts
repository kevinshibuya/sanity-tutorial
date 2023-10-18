export default {
  name: 'author',
  type: 'document',
  title: 'Author',
  fields: [
    {
      name: 'name',
      type: 'string',
      title: 'Name',
    },
    {
      name: 'image',
      type: 'image',
      title: 'Picture',
    },
    {
      name: 'posts',
      type: 'array',
      title: 'Posts',
      of: [{type: 'reference', to: {type: 'post'}}],
    },
  ],
}
