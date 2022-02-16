export default {
  data: () => ({
    groupValue: true,
    admins: [
      // { text: 'Management', icon: 'mdi-account-multiple-outline'},
      // { text: 'Settings', icon: 'mdi-cog-outline'},
      ['Management', 'mdi-account-multiple-outline'],
      ['Settings', 'mdi-cog-outline']
    ],
    cruds: [
      { text: 'Create', icon: 'mdi-plus-outline'},
      { text: 'Read', icon: 'mdi-file-outline'},
      { text: 'Update', icon: 'mdi-update'},
      { text: 'Delete', icon: 'mdi-delete'},
    ],
  }),
}