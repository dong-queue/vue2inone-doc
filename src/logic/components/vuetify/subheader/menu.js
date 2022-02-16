export default {
  data() {
    return {
      items: [
        {
          action: 'mdi-inbox-arrow-down',
          title: 'Inbox',
        },
        {
          action: 'mdi-send',
          title: 'Sent',
        },
        {
          action: 'mdi-delete',
          title: 'Trash',
        },
        {
          action: 'mdi-alert-octagon',
          title: 'Spam',
        },
        { divider: true },
        { header: 'Labels' },
        {
          action: 'mdi-label',
          title: 'Family',
        },
        {
          action: 'mdi-label',
          title: 'Friends',
        },
        {
          action: 'mdi-label',
          title: 'Work',
        },
      ],
    }
  },
}