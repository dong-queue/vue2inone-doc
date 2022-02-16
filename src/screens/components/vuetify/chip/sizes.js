export default {
  items: [
    {
      component: 'row',
      align: 'center', justify: 'center',
      items: [
        {
          component: 'chip', class: 'ma-2', size: 'xs', itemtext: 'x-small chip'
        },
        {
          component: 'chip', class: 'ma-2', size: 'sm', itemtext: 'small chip'
        },
        {
          component: 'chip', class: 'ma-2', itemtext: 'Default'
        },
        {
          component: 'chip', class: 'ma-2', size: 'lg', itemtext: 'large chip'
        },
        {
          component: 'chip', class: 'ma-2', size: 'xl', itemtext: 'x-large chip'
        }
      ],
    }
  ]
}