export default {
  data: () => ({
    items: [
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*9C9hLji68wV373tk8okLYA.jpeg',
        title: 'TBI’s 5 Best: SF Mocktails to Finish Dry January Strong',
        category: 'Travel',
        keyword: 'Drinks',

      },
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*BBNtYUieAqHoXKjiJ2mMjQ.png',
        title: 'PWAs on iOS 12.2 beta: the good, the bad, and the “not sure yet if good”',
        category: 'Technology',
        keyword: 'Phones',
      },
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*rTEtei1UEmNqbq6evRsExw.jpeg',
        title: 'How to Get Media Mentions for Your Business',
        category: 'Media',
        keyword: 'Social',
      },
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*FD2nkJewVeQnGf0ommQfrw.jpeg',
        title: 'The Pitfalls Of Outsourcing Self-Awareness To Artificial Intelligence',
        category: 'Technology',
        keyword: 'Military',
      },
      {
        image: 'https://cdn-images-1.medium.com/max/1024/1*eogFpsVgNzXQLCVgFzT_-A.jpeg',
        title: 'Degrees of Freedom and Sudoko',
        category: 'Travel',
        keyword: 'Social',
      },
    ],
    search: '',
    keywords: [],
    searching: []
  }),
  watch: {
    search (value) {
      this.searching = []
      this.keywords = []
      if (!value) {
        this.searching = this.items
      } else {
        const search = this.search.toLowerCase()
        this.searching = this.items.filter(item => {
          const text = item.title.toLowerCase()

          return text.indexOf(search) > -1
        })
        this.searching.map(x => {
          this.keywords.push(x.keyword)
        })
      }
    } 
  },
  created () {
    this.searching = this.items
  }
}