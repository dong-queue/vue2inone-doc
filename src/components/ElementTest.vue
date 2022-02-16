<template>
  <el-radio-group :value="radio" @change="e => setValue(e)">
    <el-radio :label="3">Option A</el-radio>
    <el-radio :label="6">Option B</el-radio>
    <el-radio :label="9" @change="e => change(e)">Option C</el-radio>
  </el-radio-group>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      }
    },
    methods: {
      change (e) {
        console.log('test-change', e)
      },
      setValue (e) {
        console.log('test-setValue', e)
        this.radio = e
      }
    }
  }
</script>