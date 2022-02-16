export default {
  data() {
    return {
      items: [
        { col: [
          { label: 'Prepend', prependIcon: 'mdi-map-marker' },
          { label: 'Prepend Inner', prependInnerIcon: 'mdi-map-marker' },
          { label: 'Append', appendIcon: 'mdi-map-marker' },
          { label: 'Append Outer', appendOuterIcon: 'mdi-map-marker' },
        ]},
        { col: [
          { label: 'Prepend', prependIcon: 'mdi-map-marker', solo: true },
          { label: 'Prepend Inner', prependInnerIcon: 'mdi-map-marker', solo: true },
          { label: 'Append', appendIcon: 'mdi-map-marker', solo: true },
          { label: 'Append Outer', appendOuterIcon: 'mdi-map-marker', solo: true },
        ]},
        { col: [
          { label: 'Prepend', prependIcon: 'mdi-map-marker', filled: true },
          { label: 'Prepend Inner', prependInnerIcon: 'mdi-map-marker', filled: true },
          { label: 'Append', appendIcon: 'mdi-map-marker', filled: true },
          { label: 'Append Outer', appendOuterIcon: 'mdi-map-marker', filled: true },
        ]},
        { col: [
          { label: 'Prepend', prependIcon: 'mdi-map-marker', outlined: true },
          { label: 'Prepend Inner', prependInnerIcon: 'mdi-map-marker', outlined: true },
          { label: 'Append', appendIcon: 'mdi-map-marker', outlined: true },
          { label: 'Append Outer', appendOuterIcon: 'mdi-map-marker', outlined: true },
        ]}
      ]
    }
  }
}