// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import vueResource from 'vue-resource'

import '@progress/kendo-ui'
import '@progress/kendo-theme-default/dist/all.css'
import { Button,
  ButtonGroup,
  ButtonGroupButton,
  ToolBar,
  ToolBarItem,
  ButtonsInstaller } from '@progress/kendo-buttons-vue-wrapper'
import { Grid, GridColumn, GridInstaller } from '@progress/kendo-grid-vue-wrapper'
import { DataSource, DataSourceInstaller } from '@progress/kendo-datasource-vue-wrapper'

Vue.use(ButtonsInstaller)
Vue.use(GridInstaller)
Vue.use(DataSourceInstaller)
Vue.use(vueResource)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: {
    App,
    Button,
    ButtonGroup,
    ButtonGroupButton,
    DataSource,
    Grid,
    GridColumn,
    ToolBar,
    ToolBarItem
  },
  template: '<App/>'
})
