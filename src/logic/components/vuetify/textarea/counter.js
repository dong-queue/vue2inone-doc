export default {
  data: () => ({
    rules: [v => v.length <= 25 || 'Max 25 characters'],
    value: 'Hello!',
  }),
}