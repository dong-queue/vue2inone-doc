<template>
  <v-fab-transition>
    <v-btn fab="fab" small dark="dark" fixed="fixed" bottom="bottom" right="right" color="red" v-scroll="onScroll" v-show="fab" @click="toTop">
      <v-icon>mdi-chevron-double-up</v-icon>
    </v-btn>
  </v-fab-transition>
</template>

<script>
export default {
  name: 'app-fab',

  data: () => ({
    fab: false
  }),

  methods: {
    onScroll () {
      if (typeof window === 'undefined') return

      const top = window.pageYOffset ||
        document.documentElement.offsetTop ||
        0
      // console.log('fab', top)
      this.fab = top > 100
    },
    toTop () {
      // this.$router.push({ hash: '' })
      this.$vuetify.goTo(0)
    }
  }
}
</script>
