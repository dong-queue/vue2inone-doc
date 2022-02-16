export default {
  data: () => ({
    types: ['Places to Be', 'Places to See'],
    cards: ['Good', 'Best', 'Finest'],
    socials: [
      {
        icon: 'mdi-facebook',
        color: 'indigo',
      },
      {
        icon: 'mdi-linkedin',
        color: 'cyan darken-1',
      },
      {
        icon: 'mdi-instagram',
        color: 'red lighten-3',
      },
    ],
    image: () => {
      const min = 550
      const max = 560

      return Math.floor(Math.random() * (max - min + 1)) + min
    }
  })
}