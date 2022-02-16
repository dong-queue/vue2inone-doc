export default {
  data() {
    return {
      items: [
        { make: "Toyota", model: "Celica", price: 35000 },
        { make: "Ford", model: "Mondeo", price: 32000 },
        { make: "Porsche", model: "Boxter", price: 72000 }
      ],
      make: '',
      model: '',
      price: 0
    }
  },
  methods: {
    setItem (event) {
      let item = event.api.getSelectedRows()[0]
      this.make = item.make
      this.model = item.model
      this.price = item.price
    }
  }
}