export default {
  components: {
    // A simple helper component
    VSheetFooter: {
      functional: true,

      render(h, { children }) {
        return h('v-sheet', {
          staticClass: 'mt-auto align-center justify-center d-flex px-2',
          props: {
            color: 'rgba(0, 0, 0, .36)',
            dark: true,
            height: 50,
          },
        }, children)
      },
    },
  },
}