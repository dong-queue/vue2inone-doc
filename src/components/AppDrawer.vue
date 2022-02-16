<template>
  <v-navigation-drawer bottom app clipped touchless id="appDrawer" v-model="localDrawer" >
    <v-flex xs12 class="d-flex justify-center ma-0 pa-0 ">
      <v-btn class="d-lg-none" small icon @click.native="localDrawer = false"><v-icon small>mdi-close</v-icon></v-btn>
    </v-flex>
    <v-list class="pt-0" dense expand>
      <template v-for="(menuItem, i) in menu">
        <v-list-group v-if="menuItem.type === 'group'" :key="i" :prepend-icon="menuItem.icon" :value="getIsOpenSubGroup(menuItem)" no-action>
          <template v-slot:activator>
            <v-list-item-title>{{ $t(menuItem.title) }}</v-list-item-title>
          </template>

          <template v-for="(item, c) in menuItem.children"> 
            
            <v-list-item :key="`${i}${c}-item`" v-if="item.type === 'item'" @click="click(item)" ripple="ripple" color="primary" :input-value="item.path === path">
              <v-list-item-title v-text="$t(item.title)"/>
              <v-list-item-icon v-if="item.icon">
                <v-icon v-text="item.icon"></v-icon>
              </v-list-item-icon>
            </v-list-item>
            
            <v-list-group :key="`${i}${c}-group`" v-if="item.type === 'group'" :value="getIsOpenSubGroup(item)" sub-group no-action>
              <template v-slot:activator>
                <v-list-item-content>
                  <v-list-item-title>{{ $t(item.title) }}</v-list-item-title>
                </v-list-item-content>
              </template>

              <template v-for="(subItem, s) in item.children"> 
                <v-list-item :key="`${i}${c}${s}-subItem`" v-if="subItem.type === 'item'" @click="click(subItem)" ripple="ripple" color="primary" :input-value="subItem.path === path">
                  <v-list-item-title v-text="$t(subItem.title)"/>
                  <v-list-item-icon v-if="subItem.icon">
                    <v-icon v-text="subItem.icon"></v-icon>
                  </v-list-item-icon>
                </v-list-item>
              </template>
            </v-list-group>
          </template>

        </v-list-group>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
const menu = require('@/menu.js').default
import { mapState } from 'vuex'

export default {
  name: 'app-drawer',
  props:  {
    drawer: {
      type: Boolean,
      default: () => (false)
    },
    path: {
      type: String
    }
  },
  data () {
    return {
      localDrawer: false,
      menu: menu.menu
    }
  },
  computed: {
    ...mapState([
      'page'
    ])
  },
  watch: {
    'drawer': function () {
      // console.log('drawer', this.drawer)
      this.localDrawer = this.drawer
    },
    'localDrawer': function () {
      // console.log('appDrawer.vue-localDrawer', this.localDrawer, this.drawer)
      if (this.localDrawer !== this.drawer) this.$emit('callEvent', 'changeDrawer')
    }
  },
  created () {
    this.localDrawer = this.drawer
    // this.$util.getIsValid(window.getApp) ? window.getApp.$on('APP_DRAWER_TOGGLED', () => {
    //   this.drawer = (!this.drawer)
    // }) : null
  },
  methods: {
    closeDrawer () {
      // console.log('appDrawer.vue-changeDrawer')
      this.localDrawer = !this.localDrawer
    },
    click (params) {
      this.$emit('callEvent', 'changePath', params)
      // console.log('appDrawer.vue-', this.$vuetify.breakpoint)
      if (!this.$vuetify.breakpoint.lgAndUp) this.localDrawer = false
    },
    getIsOpenSubGroup (item) {
      let result = false
      if (item.children) result = getIsMatchedPath(item.children, this.path)
      // console.log('appDrawer.vue-getIsOpenSubGroup: ', result)
      return result
      // return item.children.some(x => x.path === this.path)
    }
  }
}

function getIsMatchedPath (items, path) {
  let result = false
  if (Array.isArray(items)) {
    items.map(item => {
      if (!result) {
        if (item.children) result = getIsMatchedPath(item.children, path)
        else result = item.path === path
      }
    })
  }
  // console.log('appDrawer.vue-getIsMatchedPath: ', items, path, result)
  return result
}

</script>
<style>
#appDrawer {
  overflow: hidden;
}
#appDrawer .drawer-menu--scroll {
  height: calc(100vh - 48px);
  overflow: auto;
}
</style>
