export default {
  items: [
    { component: 'div', items: [
      { component: 'alert', border: 'left', coloredBorder: true, color: 'deep-purple accent-4', elevation: 2, 
        itemtext: `
          Aliquam eu nunc. Fusce commodo aliquam arcu. In consectetuer turpis ut velit. Nulla facilisi..

          Morbi mollis tellus ac sapien. Fusce vel dui. Praesent ut ligula non mi varius sagittis. Vivamus consectetuer hendrerit lacus. Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec, nisi.
        `
      },
      {
        component: 'alert', border: 'top', coloredBorder: true, type: 'info', elevation: 2,
        itemtext: `Vestibulum ullamcorper mauris at ligula. Nam pretium turpis et arcu. Ut varius tincidunt libero. Curabitur ligula sapien, tincidunt non, euismod vitae, posuere imperdiet, leo. Morbi nec metus.`
      },
      {
        component: 'alert', border: 'bottom', coloredBorder: true, type: 'warning', elevation: 2,
        itemtext: `Sed in libero ut nibh placerat accumsan. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Phasellus leo dolor, tempus non, auctor et, hendrerit quis, nisi. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.`
      },
      {
        component: 'alert', border: 'right', coloredBorder: true, type: 'error', elevation: 2,
        itemtext: `Fusce commodo aliquam arcu. Pellentesque posuere. Phasellus tempus. Donec posuere vulputate arcu.`
      }
    ]}
  ]
}