/**
 * plugins/vuetify.ts
 *
 * Framework documentation: https://vuetifyjs.com`
 */

// Styles
import '@mdi/font/css/materialdesignicons.css'
import 'vuetify/styles'

// Composables
import { createVuetify } from 'vuetify'

// https://vuetifyjs.com/en/introduction/why-vuetify/#feature-guides
export default createVuetify({
  theme: {
    themes: {
      light: {
        // dark:true,
        colors: {
          // primary: '#1867C0',
          // secondary: '#5CBBF6',
          // #BA7373 error
          // #CB997E sec-darken
          // #DDBEA9 sec
          // #EED3C0 sec-lighten
          // #FFE8D6 text
          // #B7B7A4 pri-lighten
          // #A5A58D pri
          // #6B705C pri-darken
          // #36382E surface

          "primary-darken":'#6B705C',
          primary:'#A5A58D',
          "primary-lighten":'#B7B7A4',
          "secondary-lighten":'#EED3C0',
          secondary:'#DDBEA9',
          "secondary-darken":'#CB997E',
          success:'#',
          info:'#',
          surface:'#36382E',
          background:'#36382E',
          error:'#BA7373',
          accent:'#BA7373',
          "warning":'#BA7373',
          // "on-background":'#',
          // "on-error":'#',
          // "on-info":'#',
          "on-primary":'#36382E',

          "on-secondary":'#36382E',
          // "on-success":'',
          "on-surface":'#FFE8D6',
          // "on-warning":'',
          

        },
      },
    },
  },
})
