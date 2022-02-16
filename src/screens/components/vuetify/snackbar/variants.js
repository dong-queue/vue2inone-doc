export default {
  items: [
    { component: 'card', height: 300, flat: true, items: [
      { 
        component: 'snackbar', timeout: -1, value: true, absolute: true, left: true, 
        shaped: true, top: true, itemtext: 'Lorem ipsum dolor sit amet consectetur.' 
      },
      { 
        component: 'snackbar', timeout: -1, value: true, color: 'blue-grey', absolute: true, 
        right: true, rounded: 'pill', top: true, itemtext: 'Lorem ipsum dolor sit amet consectetur.' 
      },
      { 
        component: 'snackbar', timeout: -1, value: true, absolute: true, centered: true, 
        color: 'deep-purple accent-4', elevation: 24, itemtext: 'Lorem ipsum dolor sit amet consectetur.' 
      },
      { 
        component: 'snackbar', timeout: -1, value: true, absolute: true, bottom: true, 
        color: 'primary',left: true, text: true, itemtext: 'Lorem ipsum dolor sit amet consectetur.' 
      },
      { 
        component: 'snackbar', timeout: -1, value: true, absolute: true, bottom: true, 
        color: 'success', outlined: true, right: true, itemtext: 'Lorem ipsum dolor sit amet consectetur.' 
      },
    ]}
  ]
}