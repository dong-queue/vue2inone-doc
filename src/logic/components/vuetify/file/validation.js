export default {
  data: () => ({
    rules: [
      value => !value || value.size < 200000 || 'Avatar size should be less than 2 kb!',
    ],
  }),
}