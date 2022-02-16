<template>
    <v-card flat tile class="grey lighten-5">
      <v-container fluid>
        <v-row align="center" justify="space-between">
          <v-col cols="8" class="py-0">
            <v-item-group
              v-model="selected"
              class="pa-2"
              mandatory
            >
              <template v-for="(section, i) in sections">
                <v-item
                  v-if="code[section]"
                  :key="`item-${i}`"
                  :value="section"
                >
                  <template #default="{ active, toggle }">
                    <v-btn
                      :input-value="active"
                      class="mr-2"
                      text
                      @click="toggle"
                    >
                      {{ section }}
                    </v-btn>
                  </template>
                </v-item>
              </template>
            </v-item-group>
          </v-col>
          <v-col cols="4" align-self="end" class="text-end py-0">
            <v-btn text small color="red" @click="changeCode('reset')">reset</v-btn>
            <v-btn text small color="primary" @click="changeCode('apply')">apply</v-btn>
          </v-col>
          <v-col cols="12">
            <v-window
              v-model="selected"
              class="grey lighten-5"
            >
              <template v-for="(section, i) in sections">
                <v-window-item
                  :key="`window-${i}`"
                  :value="section"
                >
                  <prism-editor style="max-height: 500px; overflow: auto;" class="my-editor" v-model="code[section]" :highlight="highlighter" lineNumbers
                    line-numbers>
                  </prism-editor>
                </v-window-item>
              </template>
            </v-window>
            
          </v-col>
          <v-col cols="12">
            <keep-alive max="2">
            <component ref="main" v-if="example" :is="example" :dynamicArg="dynamic"/>  
            </keep-alive>
          </v-col>
        </v-row>
      </v-container>
    </v-card>
</template>

<script>
  import { PrismEditor } from 'vue-prism-editor';
  import 'vue-prism-editor/dist/prismeditor.min.css'; // import the styles somewhere
 
  // import highlighting library (you can use any library you want just return html string)
  import { highlight, languages } from 'prismjs/components/prism-core';
  import 'prismjs/components/prism-clike';
  import 'prismjs/components/prism-javascript';
  import 'prismjs/themes/prism-tomorrow.css'; // import syntax highlighting styles

  export default {
    name: 'Code',
    props: {
      file: {
        type: String,
        default: () => ('')
      },
    },
    components: {
      PrismEditor,
    },
    data: () => ({ 
      sections: [
        'template',
        'script',
        'style'
      ],
      selected: 'template',
      example: undefined,
      code: {
        template: '',
        templateOrg: '',
        script: '',
        style: ''
      },
      dynamic: {
      }
    }),
    watch: {
      // 'id' () {
      //   this.importTemplate().then(x => {
      //     this.code = x.default
      //   })
      // }
    },
    async created () {
      await this.importTemplate('screens').then(x => {
        this.code.template = x
        this.code.templateOrg = x
      })
      
      await this.importTemplate('logic').then(x => {
        // console.log('logic', x)
        this.code.script = x
      })
      // this.importStyle().then(x => {
      //   this.code.style = x
      // })
      this.makeVue()
    },
    methods: {
      highlighter (code) {
        return highlight(code, languages.js); //returns html
      },
      async importTemplate (type) {
        var template = ''
        try {
          template = ( await import(
            /* webpackChunkName: "examples-source" */
            /* webpackMode: "lazy-once" */
            `!raw-loader!../${type}/${this.file}.js`
          )).default
          let exportIndex = template.indexOf('export default')
          let funcIndex = template.indexOf('function')
          
          if (funcIndex < 100) { // function이 위에 있거나 없는 경우
            template = template.replace(/export default {/g, '')
            template = template.slice(0, template.lastIndexOf('}') -1)
          } else { // function이 export 아래에 있는 경우
            let exportString = template.slice(exportIndex, funcIndex)
            let functionString = template.slice(funcIndex)
            exportString = exportString.replace(/export default {/g, '')
            exportString = exportString.slice(0, exportString.lastIndexOf('}') - 1 )
            template = String(exportString).concat('\n\n', functionString)
          }
            
        } catch (err) {
          // console.log(err)
          template = ''
        }
        return template
      },
      changeCode (param) {
        if (param === 'reset') this.code.template = this._.cloneDeep(this.code.templateOrg)
        try {
          // let temp = String(this.code.template).replace(/^export default {/g, '')
          // temp = temp.slice(0, temp.lastIndexOf('}') -1)
          this.dynamic = {items: eval(this.code.template)}
          this.makeSample()
        } catch (err) {
          console.log('error', err)
          alert('template code has error!! please correct and try again.')
        }
      },
      async makeVue () {
        // screen
        let screen = {}
        try {
          screen = (await import(
            /* webpackChunkName: "examples" */
            /* webpackMode: "lazy-once" */
            `@/screens/${this.file}.js`
          )).default
        } catch (err) {
          screen = {
            items: []
          }
        }
        this.dynamic = screen
        this.makeSample()
      },
      async makeSample () {
        this.example = null
        let logic = {}
        try {
          logic = (await import(
            /* webpackChunkName: "examples" */
            /* webpackMode: "lazy-once" */
            `@/logic/${this.file}.js`
          )).default
        } catch (err) {
          logic = {
            data() { return {} },
            computed: {},
            methods: {}
          }
        }
        // let style = null
        // try {
        //   style = (await import(`@/style/${this.file}.scss`))
        // } catch (err) {
        //   style = null
        // }
        this.example = this._.cloneDeep(require('@/logic/ComponentChild.js').default)
        if (this.$util.getIsValid(logic, 'template')) this.example.template = logic.template
        this.example.mixins = [logic]
        this.example.computed.methods = function () { return Object.keys(this._.get(logic, 'methods') || {}) }
        // if (style) this.$styles.update(style)
        // console.log('example', this.example)
      }
    }
  }
</script>

<style>
  /* required class */
  .my-editor {
    /* we dont use `language-` classes anymore so thats why we need to add background and text color manually */
    background: #2d2d2d;
    color: #ccc;
 
    /* you must provide font-family font-size line-height. Example: */
    font-family: Fira code, Fira Mono, Consolas, Menlo, Courier, monospace;
    font-size: 14px;
    line-height: 1.5;
    padding: 5px;
  }
 
  /* optional class for removing the outline */
  .prism-editor__textarea:focus {
    outline: none;
  }
  #input-usage .v-input__prepend-outer,
  #input-usage .v-input__append-outer,
  #input-usage .v-input__slot,
  #input-usage .v-messages {
    border: 1px dashed rgba(0,0,0, .4);
  }

  /* slider-appendprepend */
  @keyframes metronome-example {
    from {
      transform: scale(.5);
    }

    to {
      transform: scale(1);
    }
  }

  .v-avatar--metronome {
    animation-name: metronome-example;
    animation-iteration-count: infinite;
    animation-direction: alternate;
  }

  /* slider-appendtxt */
  .e4 {
  width: 400px;
  margin: auto;
  }

  /* image-gradients */
  .bottom-gradient {
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.4) 0%, transparent 72px);
  }

  .repeating-gradient {
    background-image: repeating-linear-gradient(-45deg,
                        rgba(255,0,0,.25),
                        rgba(255,0,0,.25) 5px,
                        rgba(0,0,255,.25) 5px,
                        rgba(0,0,255,.25) 10px
                      );
  }
</style> 