export default {
  items: [
    { component: 'swc', model: 'switchMe', 
      slots: [
        { name: 'label', items: [
          { component: 'text', itemtext: 'Turn on the progress:' },
          { component: 'progress-circular', indeterminate: 'switchMe', value: 0, size: 24, class: 'ml-2' }
        ]}
      ]
    }
  ]
}