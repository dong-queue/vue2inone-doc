export default {
  data: () => ({
    fruits: [
      'Apples',
      'Apricots',
      'Avocado',
      'Bananas',
      'Blueberries',
      'Blackberries',
      'Boysenberries',
      'Bread fruit',
      'Cantaloupes (cantalope)',
      'Cherries',
      'Cranberries',
      'Cucumbers',
      'Currants',
      'Dates',
      'Eggplant',
      'Figs',
      'Grapes',
      'Grapefruit',
      'Guava',
      'Honeydew melons',
      'Huckleberries',
      'Kiwis',
      'Kumquat',
      'Lemons',
      'Limes',
      'Mangos',
      'Mulberries',
      'Muskmelon',
      'Nectarines',
      'Olives',
      'Oranges',
      'Papaya',
      'Peaches',
      'Pears',
      'Persimmon',
      'Pineapple',
      'Plums',
      'Pomegranate',
      'Raspberries',
      'Rose Apple',
      'Starfruit',
      'Strawberries',
      'Tangerines',
      'Tomatoes',
      'Watermelons',
      'Zucchini',
    ],
    selectedFruits: [],
    likesAllFruit: false,
    likesSomeFruit: false,
    icon: 'mdi-checkbox-blank-outline'
  }),
  watch: {
    selectedFruits (value) {
      this.likesAllFruit = value.length === this.fruits.length
      this.likesSomeFruit = value.length > 0 && !this.likesAllFruit
      this.icon = this.likesAllFruit ? 'mdi-close-box' : this.likesSomeFruit ? 'mdi-minus-box' : 'mdi-checkbox-blank-outline'
    }
  },
  methods: {
    toggle() {
      this.$nextTick(() => {
        if (this.likesAllFruit) {
          this.selectedFruits = []
        } else {
          this.selectedFruits = this.fruits.slice()
        }
      })
    },
  },
}