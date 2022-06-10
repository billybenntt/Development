<template>
  <div>
    <app-settings-dropdown
      namespace="stack-v1.3.0" 
      :options="computedOptions">
    </app-settings-dropdown>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue)

import 'bootstrap-vue/dist/bootstrap-vue.css'

import { listenOnRootMixin } from 'fm-app-settings'
import AppSettingsDropdown from './app-settings-dropdown'
import stackAppSettingsMixin from './stack-app-settings-mixin'

export default {
  components: {
    AppSettingsDropdown
  },
  mixins: [
    listenOnRootMixin,
    stackAppSettingsMixin
  ],
  data() {
    return {
      settings: {},
      oldSettings: {}
    }
  },
  created() {
    this.listenOnRoot('fm:settings:state', this.onUpdate)
  },
  methods: {
    onUpdate(settings) {
      Object.keys(settings).map(key => {
        this.$set(this.oldSettings, key, this.settings[key])
        this.$set(this.settings, key, settings[key])
        this.applyConfig(key, settings[key])
      })
    },
    applyConfig(configKey, value) {
      let config = this.config[configKey]

      if (config === undefined) {
        return
      }

      if (typeof config === 'function') {
        return config.call(this, value)
      }

      this.applyElements(config[value])
    },
    applyElements(config) {
      if (config === undefined) {
        return
      }

      for (var selector in config) {
        if (config.hasOwnProperty(selector)) {
          var element = config[selector]
          var node = document.querySelector(selector)
          if (!node) {
            return
          }
          if (element.addClass) {
            element.addClass.forEach(className => {
              node.classList.add(className)
            })
          }
          if (element.removeClass) {
            element.removeClass.forEach(className => {
              node.classList.remove(className)
            })
          }
          if (element.src) {
            node.src = element.src
          }
        }
      }
    }
  }
}
</script>
