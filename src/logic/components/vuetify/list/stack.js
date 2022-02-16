export default {
  data: () => ({
    selected: [2],
    items: [
      {
        action: '15 min',
        headline: 'Brunch this weekend?',
        subtitle: `I'll be in your neighborhood doing errands this weekend. Do you want to hang out?`,
        title: 'Ali Connors'
      },
      {
        action: '2 hr',
        headline: 'Summer BBQ',
        subtitle: `Wish I could come, but I'm out of town this weekend.`,
        title: 'me, Scrott, Jennifer',
        iconName: 'mdi-star-outline'
      },
      {
        action: '6 hr',
        headline: 'Oui oui',
        subtitle: 'Do you have Paris recommendations? Have you ever been?',
        title: 'Sandra Adams'
      },
      {
        action: '12 hr',
        headline: 'Birthday gift',
        subtitle: 'Have any ideas about what we should get Heidi for her birthday?',
        title: 'Trevor Hansen'
      },
      {
        action: '18hr',
        headline: 'Recipe to try',
        subtitle: 'We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
        title: 'Britta Holt'
      },
    ],
  }),
  watch: {
    selected (e) {
      this.items.map((x, index) => {
        x.iconColor = e.some(y => y === index) ? 'yellow darken-3' : 'grey lighten-1'
        x.iconName = e.some(y => y === index) ? 'mdi-star' : 'mdi-star-outline'
      })
    }
  },
}