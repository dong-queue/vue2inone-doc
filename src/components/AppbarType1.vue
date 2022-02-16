<template>
  <v-app-bar
    :color="'white'"
    flat
    app
    dark
    fixed
    dense
    clipped-left
    elevation="1"
    v-scroll="onScroll"
  >
    <v-toolbar-title class="ml-0 pl-3">
      <v-app-bar-nav-icon color="grey" aria-label="Open Navigation Drawer" @click.stop="onClickDrawer"></v-app-bar-nav-icon>
      <span class="black--text">V-Iterator</span>
      </v-toolbar-title>
    <v-spacer />
    <v-toolbar-items>
      <v-menu offset-y origin="center center" :nudge-bottiom="10" transition="scale-transition">
        <template v-slot:activator="{ on }">
          <v-btn icon large text v-on="on">
            <v-avatar size="32px" >
              <img size="32px" :src="getLocaleImage($i18n.locale)">
            </v-avatar>
          </v-btn>  
        </template>
        <v-card max-width="375" class="mx-auto" color="white" tile>
          <v-list dense class="pa-0 transparent">
            <v-list-item v-for="(item, e) in langs" @click="onChangeLang(item.value)" :key="`lang-${e}`">
              <v-list-item-icon>
                <v-avatar size="32px" :color="`${item.value === $i18n.locale ? 'grey' : 'teal'}`" >
                  <img :src="getLocaleImage(item.value)">
                </v-avatar>
              </v-list-item-icon>
              <v-list-item-content>
                <v-list-item-title :class="`${item.value === $i18n.locale ? 'grey--text' : 'font-weigth-bold black--text'} text-start`">{{ $util.getTransLang(item.title) }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-card>
      </v-menu>
    </v-toolbar-items>
  </v-app-bar>
</template>

<script>
  export default {
    data: () => ({
      isScrolling: false,
      title: process.env.VUE_APP_TITLE,
      langs: [
        {value: 'en', title: 'English'},
        {value: 'ko', title: '한글'}
      ],
      menu: []
    }),
    computed: {
      toolbarTextColor () {
        return this.isJumbotron ? (!this.isScrolling ? 'white' : 'white') : 'white'
      },
      isJumbotron () {
        return this.$util.isNullTo(this.$util.isNullTo(this.page, {items: []}).items, []).findIndex( (x, index) => {
          return (index === 0 && x.component === 'jumbotron')
        }) > -1
      },
      appbarColor () {
        return this.$util.getIsValid(this.page, 'appbarColor') ? this.$util.isNullTo(this.page.appbarColor, 'transparent'): 'transparent'
      }
    },
    watch: {
      '$i18n.locale' () {
        // this.title = this.$util.getTransLang('common.appTitle')
        // this.$store.dispatch('setMenu', Object.freeze(this.$util.getTransLangObject(this.menu)))
      }
    },
    async created () {
      // this.title = this.$t('common.appTitle')
    },
    methods: {
      onScroll () {
        this.isScrolling = (window.pageYOffset ||
          document.documentElement.scrollTop || 0) > 100
      },
      onClickDrawer () {
        this.$emit('changeDrawer')
      },
      goTo (routerName) {
        // console.log('goTo', routerName, this.$util.getIsValid(routerName))
        if (this.$util.getIsValid(routerName)) window.getApp.$router.push({name: routerName})
      },
      getColor (value) {
        // console.log('getColor', this.bottomNav, value)
        return this.bottomNav === value ? 'yellow' : 'grey'
      },
      getLocaleImage (locale) {
        return 'https://image.biznent.com/weasyhome/' + encodeURI(typeof (locale) === 'undefined' || locale === null ? 'ko.jpg' : locale + '.jpg', 'utf-8')
      },
      onChangeLang (lang) {
        // console.log('appbar - onChangelang', lang)
        this.$i18n.locale = lang
      }
    }
  }
</script>
