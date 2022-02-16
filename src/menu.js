export default {
  menu: [
    {
      type: 'group', title: 'menu.intro', icon: 'mdi-book-open-variant', name: '', children: [
        { type: 'item', title: 'menu.intro', path: 'intro/start', name: 'start' },
        { type: 'item', title: 'menu.play', path: 'intro/play', name: 'play' },
        { type: 'item', title: 'menu.release', path: 'intro/release', name: 'release' },
        { type: 'item', title: 'menu.shortcut', path: 'intro/shortcut', name: 'shortcut' },
        { type: 'item', title: 'menu.howto', path: 'intro/howto', name: 'howto' },
      ]
    },
    {
      type: 'group', title: 'menu.vuetify', icon: 'mdi-vuetify', name: '', children: [
        { type: 'item', title: 'menu.alert', path: 'components/vuetify/alert', name: 'alert' },
        { type: 'item', title: 'menu.avatar', path: 'components/vuetify/avatar', name: 'avatar' },
        { type: 'item', title: 'menu.badge', path: 'components/vuetify/badge', name: 'badge' },
        { type: 'item', title: 'menu.banner', path: 'components/vuetify/banner', name: 'banner' },
        { type: 'group', title: 'menu.bars', name: '', children: [
          { type: 'item', title: 'menu.toolbar', path: 'components/vuetify/toolbar', name: 'toolbar' },
        ]},
        { type: 'item', title: 'menu.bnavi', path: 'components/vuetify/bnavi', name: 'bnavi' },
        { type: 'item', title: 'menu.bsheet', path: 'components/vuetify/bsheet', name: 'bsheet' },
        { type: 'item', title: 'menu.breadcrumbs', path: 'components/vuetify/breadcrumbs', name: 'breadcrumbs' },
        { type: 'item', title: 'menu.btn', path: 'components/vuetify/btn', name: 'btn' },
        { type: 'item', title: 'menu.btnfloating', path: 'components/vuetify/btnfloating', name: 'btnfloating' },
        { type: 'item', title: 'menu.calendar', path: 'components/vuetify/calendar', name: 'calendar' },
        { type: 'item', title: 'menu.card', path: 'components/vuetify/card', name: 'card' },
        { type: 'item', title: 'menu.carousel', path: 'components/vuetify/carousel', name: 'carousel' },
        { type: 'item', title: 'menu.chip', path: 'components/vuetify/chip', name: 'chip' },
        { type: 'item', title: 'menu.dialog', path: 'components/vuetify/dialog', name: 'dialog' },
        { type: 'item', title: 'menu.divider', path: 'components/vuetify/divider', name: 'divider' },
        { type: 'item', title: 'menu.expansion', path: 'components/vuetify/expansion', name: 'expansion' },
        { type: 'item', title: 'menu.footer', path: 'components/vuetify/footer', name: 'footer' },

        { type: 'group', title: 'menu.formInput', name: '', children: [
          { type: 'item', title: 'menu.autocomplete', path: 'components/vuetify/autocomplete', name: 'autocomplete' },
          { type: 'item', title: 'menu.checkbox', path: 'components/vuetify/checkbox', name: 'checkbox' },
          { type: 'item', title: 'menu.combobox', path: 'components/vuetify/combobox', name: 'combobox' },
          { type: 'item', title: 'menu.currency', path: 'components/vuetify/currency', name: 'currency' },
          { type: 'item', title: 'menu.file', path: 'components/vuetify/file', name: 'file' },
          { type: 'item', title: 'menu.form', path: 'components/vuetify/form', name: 'form' },
          { type: 'item', title: 'menu.input', path: 'components/vuetify/input', name: 'input' },
          { type: 'item', title: 'menu.overflow', path: 'components/vuetify/overflow', name: 'overflow' },
          { type: 'item', title: 'menu.radio', path: 'components/vuetify/radio', name: 'radio' },
          { type: 'item', title: 'menu.range', path: 'components/vuetify/range', name: 'range' },
          { type: 'item', title: 'menu.select', path: 'components/vuetify/select', name: 'select' },
          { type: 'item', title: 'menu.slider', path: 'components/vuetify/slider', name: 'slider' },
          { type: 'item', title: 'menu.switch', path: 'components/vuetify/switch', name: 'switch' },
          { type: 'item', title: 'menu.textarea', path: 'components/vuetify/textarea', name: 'textarea' },
          { type: 'item', title: 'menu.textfield', path: 'components/vuetify/textfield', name: 'textfield' },
        ]},
        { type: 'item', title: 'menu.grid', path: 'components/vuetify/grid', name: 'grid' },
        {
          type: 'group', title: 'menu.group', name: '', children: [
            { type: 'item', title: 'menu.btngroup', path: 'components/vuetify/btngroup', name: 'btngroup' },
            { type: 'item', title: 'menu.chipgroup', path: 'components/vuetify/chipgroup', name: 'chipgroup' },
            { type: 'item', title: 'menu.itemgroup', path: 'components/vuetify/itemgroup', name: 'itemgroup' },
            { type: 'item', title: 'menu.listitemgroup', path: 'components/vuetify/listitemgroup', name: 'listitemgroup' },
            { type: 'item', title: 'menu.slidegroup', path: 'components/vuetify/slidegroup', name: 'slidegroup' },
            { type: 'item', title: 'menu.window', path: 'components/vuetify/window', name: 'window' },
          ]
        },
        { type: 'item', title: 'menu.hover', path: 'components/vuetify/hover', name: 'hover' },
        { type: 'item', title: 'menu.icon', path: 'components/vuetify/icon', name: 'icon' },
        { type: 'item', title: 'menu.image', path: 'components/vuetify/image', name: 'image' },
        { type: 'item', title: 'menu.lazy', path: 'components/vuetify/lazy', name: 'lazy' },
        { type: 'item', title: 'menu.list', path: 'components/vuetify/list', name: 'list' },
        { type: 'item', title: 'menu.menu', path: 'components/vuetify/menu', name: 'menu' },
        { type: 'item', title: 'menu.navid', path: 'components/vuetify/navid', name: 'navid' },
        { type: 'item', title: 'menu.overlay', path: 'components/vuetify/overlay', name: 'overlay' },
        { type: 'item', title: 'menu.pagination', path: 'components/vuetify/pagination', name: 'pagination' },
        { type: 'item', title: 'menu.parallax', path: 'components/vuetify/parallax', name: 'parallax' },
        {
          type: 'group', title: 'menu.picker', name: '', children: [
            { type: 'item', title: 'menu.date', path: 'components/vuetify/date', name: 'date' },
            { type: 'item', title: 'menu.time', path: 'components/vuetify/time', name: 'time' },
          ]
        },
        {
          type: 'group', title: 'menu.progress', name: '', children: [
            { type: 'item', title: 'menu.prgcir', path: 'components/vuetify/prgcir', name: 'prgcir' },
            { type: 'item', title: 'menu.prglin', path: 'components/vuetify/prglin', name: 'prglin' },
          ]
        },
        { type: 'item', title: 'menu.rating', path: 'components/vuetify/rating', name: 'rating' },
        { type: 'item', title: 'menu.sheet', path: 'components/vuetify/sheet', name: 'sheet' },
        { type: 'item', title: 'menu.skeleton', path: 'components/vuetify/skeleton', name: 'skeleton' },
        { type: 'item', title: 'menu.snackbar', path: 'components/vuetify/snackbar', name: 'snackbar' },
        { type: 'item', title: 'menu.stepper', path: 'components/vuetify/stepper', name: 'stepper' },
        { type: 'item', title: 'menu.subheader', path: 'components/vuetify/subheader', name: 'subheader' },
        {
          type: 'group', title: 'menu.table', name: '', children: [
            { type: 'item', title: 'menu.dataIterator', path: 'components/vuetify/dataIterator', name: 'dataIterator' },
            { type: 'item', title: 'menu.simpleTable', path: 'components/vuetify/simpleTable', name: 'simpleTable' }
          ]
        },
        { type: 'item', title: 'menu.tab', path: 'components/vuetify/tab', name: 'tab' },
        { type: 'item', title: 'menu.tree', path: 'components/vuetify/treeview', name: 'treeview' }
      ]
    },
    {
      type: 'group', title: 'menu.elementUi', icon: 'mdi-vuejs', name: '', children: [
        { type: 'group', title: 'menu.basic', name: '', children: [
          { type: 'item', title: 'menu.layout', path: 'components/element/layout', name: 'layout' },
          { type: 'item', title: 'menu.layoutC', path: 'components/element/layoutC', name: 'layoutC' },
          { type: 'item', title: 'menu.border', path: 'components/element/border', name: 'border' },
          { type: 'item', title: 'menu.icon', path: 'components/element/icon', name: 'icon' },
          { type: 'item', title: 'menu.btn', path: 'components/element/btn', name: 'btn' },
          { type: 'item', title: 'menu.link', path: 'components/element/link', name: 'link' },
        ]},
        { type: 'group', title: 'menu.form', name: '', children: [
          { type: 'item', title: 'menu.radio', path: 'components/element/radio', name: 'radio' },
          { type: 'item', title: 'menu.checkbox', path: 'components/element/checkbox', name: 'checkbox' },
          { type: 'item', title: 'menu.input', path: 'components/element/input', name: 'input' },
          { type: 'item', title: 'menu.inputNum', path: 'components/element/inputNum', name: 'inputNum' },
          { type: 'item', title: 'menu.select', path: 'components/element/select', name: 'select' },
          { type: 'item', title: 'menu.cascader', path: 'components/element/cascader', name: 'cascader' },
          { type: 'item', title: 'menu.switch', path: 'components/element/switch', name: 'switch' },
          { type: 'item', title: 'menu.slider', path: 'components/element/slider', name: 'slider' },
          { type: 'item', title: 'menu.time', path: 'components/element/time', name: 'time' },
          { type: 'item', title: 'menu.date', path: 'components/element/date', name: 'date' },
          { type: 'item', title: 'menu.datetime', path: 'components/element/datetime', name: 'datetime' },
          { type: 'item', title: 'menu.upload', path: 'components/element/upload', name: 'upload' },
          { type: 'item', title: 'menu.rate', path: 'components/element/rate', name: 'rate' },
          { type: 'item', title: 'menu.color', path: 'components/element/color', name: 'color' },
          { type: 'item', title: 'menu.transfer', path: 'components/element/transfer', name: 'transfer' },
          { type: 'item', title: 'menu.form', path: 'components/element/form', name: 'form' }
        ]}
      ]
    },
    {
      type: 'group', title: 'menu.agGrid', icon: 'mdi-view-grid', name: '', children: [
        { type: 'item', title: 'menu.agGrid', path: 'components/agGrid', name: 'agGrid' },
        { type: 'item', title: 'menu.agChart', path: 'components/agChart', name: 'agChart' }
      ]
    }
  ]
}
