export default {
  data: () => ({
    form: {
      txnTypes: [
        { text: 'Sell', value: 'in' },
        { text: 'Buy', value: 'out' }
      ],
      txnTypeHint: ' ',
      item: {
        txnTypeCd: 'in',
        isShowHint: false,
        date: null,
        amount: 0,
        itemName: '',
        remark: '',
        file: null
      },
      itemLabel: 'selling item'
    }
  }),
  methods: {
    txnTypeChanged(value) {
      // console.log(value)
      this.form.itemLabel = (value === 'in') ? 'selling item' : 'buying item'
    },
    dataChanged(value) {
      this.$message({ type: 'warning', showClose: true, message: String('value changed').concat(': ', value), duration: 5000 })
    },
    onFileChange(value) {
      this.$message({ type: 'warning', showClose: true, message: String('file changed').concat(': ', value), duration: 5000 })
    },
    confirm() {
      this.$refs.form.validate()
      this.$message({ type: 'warning', showClose: true, message: String('Form Validation Result: ').concat(this.formIsValid) })
    }
  }
}