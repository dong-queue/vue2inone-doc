<template>
  
  <v-app>
    
    <!-- 메뉴바 -->
    <app-drawer :drawer="drawer" :path="dynamic.path" @callEvent="callEvent"/>
    <!-- 상단 toolbar -->
    <core-appbar v-on:changeDrawer="changeDrawer"/>
    <!-- 맨 위로 이동버튼 -->
    <app-fab/>
    <v-main>
      <v-iterator :dynamicArg="test"></v-iterator>
      <v-card class="d-flex flex-row justify-center transparent" elevation="0">
        <!-- <keep-alive> -->
          <component style="width: 80vw;" ref="main" v-if="component" :is="component" :dynamicArg="$data.dynamic"/>
        <!-- </keep-alive> -->
        <v-dialog v-model="processing" persistent width="100">
          <v-card color="transparent" dark>
            <v-card-text>
              <v-progress-linear indeterminate color="primary" class="mb-0"/>
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-card>
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from 'vuex'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-balham.css'
export default {
  name: 'App',
  components: {
    CoreAppbar: () => import('@/components/AppbarType1'),
    AppFab: () => import('@/components/AppFab'),
    AppDrawer: () => import('@/components/AppDrawer')
  },
  data: () => ({
    test: {
      items: [
        { component: 'row', framework: 'element', items: [
          { component: 'btn', framework: 'element', color: 'grey lighten-3', itemtext: 'Block Button', style: 'width: 100%;', 
            evnts: [{ event: 'click', method: 'btnClick'}]
          }
        ]}
      ]
    },
    drawer: true,
    dynamic: {
      condition: '',
      screen: {}
    },
    component: null,
    processing: false
  }),
  created () {
    window.getApp = this
    this.$on('changePath', (value) => {
      this.changePath(value)
    })
    if (this.$util.getIsValid(this.page, 'name') && this.$util.getIsValid(this.page, 'path')) this.changePath(this.page)
    else if (!this.component) this.changePath({name: 'start', path: 'intro/start'})
  },
  computed: {
    ...mapState([
      'page'
    ])
  },
  methods: {
    callEvent (name, item, even) {
      // console.log('app.vue - callEvent', name, item, even)
      if (typeof (this[name]) === 'function') this[name](item, even)
    },
    changeDrawer () {
      // console.log('app.vue-changeDrawer', this.drawer)
      this.drawer = (!this.drawer)
    },
    changePath (params) {
      this.processing = true
      this.component = null
      // console.log('changePath1: ', params)
      this.dynamic = this.$util.getIsValid(params) ? params : {
        component: '',
        screen: '',
      }

      let obj = {
        path: this._.get(params, 'path'),
        name: this._.get(params, 'name')
      }
      
      // console.log('path', obj)
      let screen
      if (this.$util.getIsValid(obj.path) && this.$util.getIsValid(obj.name)) {
        this.$store.dispatch('setPage', obj)
        try {
          screen = require(`@/screens/${obj.path}/${obj.name}.js`).default
        } catch (err) {
          screen = {
            items: []
          }
        }
        this.dynamic.path = obj.path
        this.dynamic.name = obj.name

        // console.log('changePath2: ', screen)
        this.dynamic.screen = screen.items
        let logic
        try {
          // console.log('main.js-routerName: ', y)
          logic = this._.cloneDeep(require(`@/logic/${obj.path}/${obj.name}.js`).default)
        } catch (err) {
          logic = {
            data() { return {} },
            computed: {},
            methods: {}
          }
        }
        this.component = this._.cloneDeep(require('@/logic/ComponentParent.js').default)
        if (this.$util.getIsValid(logic, 'template')) this.component.template = logic.template
        this.component.mixins = [logic]
        this.component.computed.methods = function () { return Object.keys(this._.get(logic, 'methods') || {}) }
        if (process.env.VUE_APP_GOOGLE_ANALYTICS) this.$gtag.pageview({page_title: String(obj.path).concat('/', obj.name) })
        this.processing = false
      }
    },
  }
};
</script>
<style>
.custom-loader {
    animation: loader 1s infinite;
    display: flex;
  }
  @-moz-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-webkit-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @-o-keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes loader {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(360deg);
    }
  }
</style>