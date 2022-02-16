
const js = require('./ComponentCore.js')

js.default[`template`] = `<div>
  <template v-for="(contents, n) in (_.get(dynamicArg, 'screen') || [])">
    <v-code v-if="contents.component === 'code'" :key="n" :file="contents.file" v-on="$listeners"/>
    <a v-if="contents.component === 'link'" :class="contents.class" :href="contents.link" target="_blank">{{ contents.name }}</a>
    <v-iterator :key="n" v-if="contents.component === 'iterator'"
      class="mx-2"
      :dynamicArg="contents"
      :data="$data" 
      :rule="_.get(dynamicArg, 'rule')" 
      v-on="$listeners"
    />
  </template>
</div>`

export default js.default
