<template>

  <div class="hello">

    <div class="welcome">
      <h1>{{ msg }}</h1><span><kendo-button class="k-outline" v-on:click="reverseName">flip it</kendo-button></span>
      <h2>App Name: {{ appName }}</h2><input v-model="appName">
      <h1>Resources</h1>
      <ul>
        <!-- eslint-disable-next-line -->
        <li v-for="resource in resources">
          <a
            :href="resource.href"
            :target="resource.target"
          >
            {{ resource.name }}
          </a>
        </li>
      </ul>
      <kendo-button class="k-primary" v-on:click="showNinja">Kendo or No Kendo?</kendo-button>
      <br>
      <img v-if="ninja" src="../assets/kendo-logo.png">
      <br>
    </div>

  <!-- <div class="demo-grid">
    <kendo-datasource
      ref="datasource"
      :type="'odata'"
      :pageSize=20
      :transportRead="'https://demos.telerik.com/kendo-ui/service/Northwind.svc/Customers'"
    ></kendo-datasource>
    <kendo-grid
      :height="550"
      :dataSourceRef="'datasource'"
      :groupable='true'
      :sortable='true'
      :pageable-refresh='true'
      :pageable-page-sizes='true'
      :pageable-button-count="5">
        <kendo-grid-column field="ContactName" title="Contact Name" :width="250"></kendo-grid-column>
        <kendo-grid-column field="ContactTitle" title="Contact Title"></kendo-grid-column>
        <kendo-grid-column field="CompanyName" title="Company Name"></kendo-grid-column>
        <kendo-grid-column field="Country" title="Country" :width="150"></kendo-grid-column>
      </kendo-grid>
  </div> -->

  <!-- <kendo-button class="k-outline" v-on:click="getBusObs">Get busy</kendo-button> -->

  <div class="busOb-grid">
    <kendo-datasource
      ref="cherwellAPI"
      :pageSize=20
      :transportRead="'http://localhost/BusObBlueprint/api/businessobjects'"
    ></kendo-datasource>
    <kendo-grid
      :height="550"
      :dataSourceRef="'cherwellAPI'"
      :groupable='true'
      :sortable='true'
      :pageable-refresh='true'
      :pageable-page-sizes='true'
      :pageable-button-count="5">
        <kendo-grid-column field="Name" title="Name" :width="250"></kendo-grid-column>
        <kendo-grid-column field="Type" title="Type"></kendo-grid-column>
        <kendo-grid-column field="Description" title="Description"></kendo-grid-column>
        <kendo-grid-column field="LastModified" title="LastModified"></kendo-grid-column>
      </kendo-grid>
  </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      appName: 'Hello Data Binding',
      ninja: false,
      // showGrid: false,
      resources: [
        { name: 'awesome-vue', href: 'https://github.com/vuejs/awesome-vue', target: '_blank' },
        { name: 'vue-loader', href: 'http://vue-loader.vuejs.org/', target: '_blank' },
        { name: 'vuex', href: 'http://vuex.vuejs.org/', target: '_blank' },
        { name: 'vue-router', href: 'http://router.vuejs.org/', target: '_blank' }
      ],
      busobs: []
    }
  },
  methods: {
    reverseName: function () {
      this.msg = this.msg.split('').reverse().join('')
    },
    showNinja: function () {
      this.ninja = !this.ninja
    }
    // getBusObs: function () {
    //   this.$http.get('http://localhost/BusObBlueprint/api/businessobjects')
    //     .then(function (response) {
    //       this.busobs = response.data
    //       this.showGrid = true
    //       console.log(response.data)
    //     })
    // }
  }
  // "created" to change lifecycle hook for busobs
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
