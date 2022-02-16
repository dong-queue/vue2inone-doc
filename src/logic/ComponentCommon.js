
export default {
  template: '',
  delay: 200,
  timeout: 3000,
  props: {
    dynamicArg: {
      type: Object,
      default: () => ({}),
    },
    data: {
      type: Object,
      default () {
        return {}
      },
    },
    rootData: {
      type: Object
    },
    parentData: {
      type: Object
    },
    _index: {
      type: Number,
      default () { return 0 }
    }
  },
  data () {
    return {
      model: null,
      size: {
        xs: 'xSmall',
        sm: 'small',
        lg: 'large',
        xl: 'xLarge'
      }
    }
  },
  computed: {
    subItems() {
      let value = this.getValue(this._.get(this.dynamicArg, 'itemsfor'))
      return value || this.dynamicArg.items
    },
    isSubModel() {
      return this._.get(this.dynamicArg, 'itemsfor')
    },
    customListeners () {
      let vm = this
      let result = {}
      let events = this._.get(this.dynamicArg, 'evnts') || []
      events.map(x => {
        let returnValue = vm.getValue(x.value)
        let event = {
          [x.event]: function (even) {
            x.func ? vm.runFunc(x.func, (typeof (x.value) !== 'undefined' ? returnValue : even), even)
              : vm.callEvent(x.method, (typeof (x.value) !== 'undefined' ? returnValue : even), even)
          }
        }
        Object.assign(result, event)
      })
      return Object.assign({}, this.$listners, result)
    }
  },
  methods: {
    
    getDataSlotName (slot) {
      return slot.type === 'data' ? this._.kebabCase(slot.name) : ''
    },
    getNonDataSlotName (slot) {
      return slot.type !== 'data' ? this._.kebabCase(slot.name) : ''
    },
    getEvents ( params ) {
      // console.log('getEvents', params)
      if (!Array.isArray(params)) return
      let result = {}
      let callEvent = this.callEvent
      let runFunc = this.runFunc
      let getValue = this.getValue
      params.map(x => {
        if (!this.$util.getIsValid(x.type) || x.type === 'default' || x.type === 'none') {
          let events = String(x.event).trim().split('.')
          let event = {}
          let returnValue = getValue(x.value)
          events.reduce(function (o, s, i, z) {
            return o[s] = i === (z.length - 1) ? function (even) {
              x.func ? runFunc(x.func, (typeof (x.value) !== 'undefined' ? returnValue : even), even) 
                : callEvent(x.method, (typeof (x.value) !== 'undefined' ? returnValue : even), even)
            } : {} 
          }, event)
          Object.assign(result, event)
        }
      })
      // console.log('getEvents-result', data)
      return result
    },
    runEvent (params, target, even ) {
      if (!Array.isArray(params) || !this.$util.getIsValid(target, 'event')) return
      let _ = this._
      let result = target.type ? params.find(x => x.event === target.event && _.camelCase(x.type) === target.type) : 
        params.find(x => x.event === target.event && !this.$util.getIsValid(x.type))
      if (result) {
        let resultValue = typeof (result.value) !== 'undefined' ? this.getValue(result.value) : even
        result.func ? this.runFunc(result.func, resultValue, even) : this.callEvent(result.method, resultValue, even)
      }
    },
    runFunc (func, value, even) {
      // console.log('runfunc', func, value, even)
      return func(value, even)
    },
    getBind ( params, type, parent ) {
      if (typeof (params) !== 'object') return
      
      let obj = this._.assign({}, this._.omit(params, ['attrs', 'class', 'component', 'inject', 'style', 'itemsfor', 'items', 'itemtext', 'obj', 'card', 'model', 'evnts', 'html', 'if', 'slots', 'show']))
      // if (type === 'carousel') console.log('bind-0', type, obj, params)
      if (obj.bind) {
        obj = this.getProp(params, 'bind')
      } else {
        Object.keys(obj).map(x => {
          // console.log(type, x, obj[x], this._.findIndex(props[type], ['name', obj[x]]))
          // if (this._.findIndex(props[type], ['name', obj[x]]) > -1) console.error(`Invalid bind value: Property ${x}'s value ${obj[x]} is same name with component properties. Please use different value with property.`)
          obj[x] = this.getProp(params, x)
        })
      }
      
      if (params) {
        let sizeKey = this._.get(params, 'size') || this._.get(parent, 'size')
        if(this.$util.getIsValid(sizeKey)) {
          let sizeValue = this._.get(this.size, sizeKey)
          if (sizeValue) obj[sizeValue] = true
          // console.log('size', sizeKey, sizeValue)
        }
      }
      if (params.attrs) obj = this._.assign(obj, this.getValue(params.attrs))
      // if (type === 'btn') console.log('bind-3', type, obj)
      return obj
    },
    getProp ( item, name, bindName ) {
      // return this._.get(this.data, name) || this._.get(this.data, this._.get(item, name)) || this._.get(item, `bind.${bindName || name}`) || this._.get(item, `${bindName || name}`)
      let bindprop = this._.get(item, `bind.${bindName || name}`)
      let key = Object.keys(item).find(x => this._.camelCase(x) === this._.camelCase(bindName || name))
      // console.log(name, key)
      let prop = Object.keys(item).some(x => this._.camelCase(x) === this._.camelCase(bindName || name)) ? 
        typeof (bindprop) !== 'undefined' ? bindprop : this._.get(item, key) : undefined
      if (typeof (prop) === 'undefined') return null
      let isArray = Array.isArray(prop)
      if (!isArray) prop = [prop]
      let results = []
      let data = this.rootData ? Object.assign({}, this.rootData, this.data) : this.data
      data = this.parentData ? Object.assign({}, data, this.parentData) : data
      let callEvent = this.callEvent
      prop.map(x => {
        let value = typeof (x.value) !== 'undefined' ? x.value : x
        let temp = this._.has(data, value) ? this._.get(data, value) : value
        
        let returnValue = (x=== '_self' || x.value === '_self') ? data
          : (x === '_index' || x.value === '_index') ? this._index
            : temp
        let result = returnValue
        if (x.func) result = x.func(returnValue)
        if (x.method) result = function (even) { callEvent(x.method, (typeof (x.value) !== 'undefined' ? returnValue : even), even) }
        if (isArray) results.push(result)
        else results = result
      })
      // if (name === 'roundType') console.log('getProp', item, name, prop, results )
      return results
    },
    setValue (value, model) {
      if (model) {
        if (this.data) {
          if (this._.has(this.data, model)) this._.set(this.data, model, value)
        } else if (this.rootData) {
          if (this._.has(this.rootData, model)) this._.set(this.rootData, model, value)           
        } else if (this.parentData) {
          if (this._.has(this.parentData, model)) this._.set(this.parentData, model, value)    
        }
      }
      // console.log('setValue', value, typeof(value), model, this.data)
    },
    getValue (value, model, nullOption) {
      let target = value ? value : model
      if (typeof(target) !== 'string') target = String(target)  
      let attribute = (target.indexOf('[') > -1 ? target.slice(target.indexOf('[')).replace(/W/g, '') : null)
      let data = this.rootData ? Object.assign({}, this.rootData, this.data) : this.data
      data = this.parentData ? Object.assign({}, data, this.parentData) : data
      if (attribute) {
        attribute = String().concat(target.slice(0, target.indexOf('[')), '.', (this._.get(data, attribute)))
      } else attribute = target
      let result = target === '_self' ? data : this._.get(data, attribute)
      // console.log('getValue', target, attribute, result)
      return typeof (attribute) !== 'undefined' ? (typeof (result) !== 'undefined' ? result : (nullOption ? undefined : value) ) : undefined
    },
    callEvent (name, item, event) {
      if (typeof (name) === 'undefined' || name === '') return
      let callName = name
      let callItem = item
      let itemIndex = String(name).search(/\(+\s*'*\w+'*\s*\)+/g)
      // console.log(itemIndex)
      if (itemIndex > -1) {
        callName = String(name).slice(0, itemIndex)
        if (String(name).slice(itemIndex).search(/\(+\s*'/g) > -1) { // item 이 string인 경우
          callItem = String(name).slice(itemIndex).replace(/[(+\s*'*)]/g, '')
        } else {
          callItem = this.data[String(name).slice(itemIndex).replace(/[(+\s*'*)]/g, '')]
        }
      }

      // eslint-disable-next-line
      // this.$emit('callEvent', callName, callItem, event)
      // console.log('common.js - callevent: ', callName, callItem, event)
      this.$emit(callName, callItem, event)
    },
    getLocation (params) {
      let result = ''
      switch (params) {
        case 'center':
          result = 'text-center'
          break
        case 'left':
        case 'start':
          result = 'text-start'
          break
        case 'right':
        case 'end':
          result = 'text-end'
          break
        case 'justify':
          result = 'text-justify'
          break
      }
      return result
    },
    getIf (rule) { // 단 하나라도 조건에 맞지 않는게 있으면 false return
      if (!this.$util.getIsValid(rule)) return true
      if (typeof (rule) === 'boolean') return rule
      let result = true
      let getValue = this.getValue
      if (Array.isArray(rule)) {
        try {
          result = rule.every(x => {
            // console.log('getIf', x)
            let compareData = getValue(x.target, null, true) // value, model, nullOption
            // console.log('target-data: ', compareData, this.$util.getIsValid(compareData))
            let test = x.value ? (typeof(x.value) === 'function' ? 
              x.value(compareData)
              : String(x.value).split(',').every(y => {
                return String(compareData).trim() === String(y).trim()
              })
            ) : this.$util.getIsValid(compareData)
            return Boolean(x.ne) === true ? !test : test
          })
        } catch (err) {
          result = false
        }
      } else result = true
      // console.log('getIf-result', rule, result)
      return result
    },
    getReadonly (rule) {
      if (typeof (rule) === 'boolean') return rule
      else return false
    },
    getMaxDate (type) {
      switch (type) {
        case 'date':
          return '9999-12-31'
        case 'datetime':
          return '9999-12-31'
        case 'datetime-local':
          return '9999-12-31'
        default:
          return ''
      }
    },
    getHint (hint, items, item) {
      // console.log('gethint: ', this._.get(this.data, hint))
      let msg = ''
      if (this.$util.getIsValid(hint)) msg = this._.get(this.data, hint) || hint
      else if (Array.isArray(items)) {
        let target = items.find(x => (this._.get(x, 'id') === item || x === item))
        if (typeof (target) !== 'undefined' && (target.isDeleted || target.isClosed || target.isCompleted)) msg = 'closed item'
      }
      return this.getTransLang(msg)
    },
    getTransLangHtml (text) {
      if (!text) return ''
      let result = (typeof (text) === 'object' || Array.isArray(text)) ? this.getValue(text.value) : this.getValue(text)
      if (typeof (result) === 'function' ) return result()
      else {
        result = this.getTransLang(result)
        result = Array.isArray(result) ? result.join('\n<br>') : result
        if (text.func) result = text.func(result)
        if (text.method) result = this.callEvent(text.method, result)
        // console.log('getTransLangHtml', data, text, result, typeof (this._.get(data, text.value || text)))
        return result
      }
    },
    getTransLang (param) {
      let lang = this.$t
      let result = this.$util.getIsValid(param) ? param : ''
      // console.log('lang', typeof(lang))
      // console.log('result', result)
      let trans = String(result).trim()
      // console.log('trans', trans)
      if (typeof (lang) === 'function' && this.$util.getIsValid(trans)) {
        trans = this.$t(trans) || trans
        // console.log('trans2', trans)
      }
      result = Array.isArray(result) || typeof (result) === 'object' || typeof (result) === 'boolean' ? result : trans
      return result
    },
  },
}

