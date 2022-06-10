export default {
  props: {
    layoutActive: {
      type: String,
      required: true
    },
    layoutLocation: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      options: [
        {
          id: 'layout',
          title: 'Layout',
          children: [
            {
              id: 'layout',
              title: 'Layout',
              component: 'b-form-select',
              cookies: false,
              value: 'default',
              options: [
                {
                  text: 'Layout Default',
                  value: 'default',
                  selected: true
                },
                {
                  text: 'Layout Fixed',
                  value: 'fixed'
                },
                {
                  text: 'Layout Fluid',
                  value: 'fluid'
                },
                {
                  text: 'Layout Mini',
                  value: 'mini'
                }
              ]
            },
            {
              id: 'rtl',
              title: 'Text Direction',
              component: 'custom-checkbox-toggle',
              options: [
                {
                  value: true
                },
                {
                  value: false,
                  selected: true
                }
              ]
            }
          ]
        },
        {
          id: 'mainDrawer',
          title: 'Main Drawer',
          children: [
            {
              id: 'align',
              title: 'Align',
              component: 'b-form-radio-group',
              options: [
                {
                  text: 'Start',
                  value: 'start',
                  selected: true
                },
                {
                  text: 'End',
                  value: 'end'
                }
              ]
            },
            {
              id: 'sidebar',
              title: 'Sidebar Skin',
              component: 'b-form-radio-group',
              options: [
                {
                  text: 'Light',
                  value: 'light',
                  selected: true
                },
                {
                  text: 'Dark',
                  value: 'dark'
                }
              ]
            }
          ]
        },
        {
          id: 'mainNavbar',
          title: 'Main Navbar',
          children: [
            {
              id: 'navbar',
              title: 'Main Navbar',
              component: 'b-form-radio-group',
              options: [
                {
                  text: 'Dark',
                  value: 'dark',
                  selected: true
                },
                {
                  text: 'Light',
                  value: 'light'
                },
                {
                  text: 'Primary',
                  value: 'primary'
                }
              ]
            }
          ]
        }
      ],
      config: {
        'layout.layout': function(layout) {
          if (layout !== this.layoutActive) {
            location = this.layoutLocation[layout]
          }
        },
        'layout.rtl': function(rtl) {
          if (this.oldSettings['layout.rtl'] !== undefined && rtl !== this.oldSettings['layout.rtl']) {
            return location.reload()
          }
          document.querySelector('html').setAttribute('dir', rtl ? 'rtl' : 'ltr')

          document.querySelectorAll('.mdk-drawer')
            .forEach(node => this.try(node, function() {
              this.mdkDrawer._resetPosition()
            }))

          document.querySelectorAll('.mdk-drawer-layout')
            .forEach(node => this.try(node, function() {
              this.mdkDrawerLayout._resetLayout()
            }))
        },
        'mainDrawer.align': function(align) {
          this.try(document.querySelector('#default-drawer'), function() {
            this.mdkDrawer.align = align
          })
        },
        'mainDrawer.sidebar': {
          'light': {
            '#default-drawer .sidebar': {
              addClass: ['sidebar-light'],
              removeClass: ['sidebar-dark', 'bg-dark']
            },
            '#default-drawer .js-text-body': {
              addClass: ['text-body']
            }
          },
          'dark': {
            '#default-drawer .sidebar': {
              addClass: ['sidebar-dark', 'bg-dark'],
              removeClass: ['sidebar-light']
            },
            '#default-drawer .js-text-body': {
              removeClass: ['text-body']
            }
          }
        },
        'mainNavbar.navbar': {
          'light': {
            '.navbar-main .navbar-brand img': {
              src: 'assets/images/stack-logo-blue.svg',
            },
            '.navbar-main': {
              addClass: ['navbar-light', 'bg-white', 'border-bottom'],
              removeClass: ['navbar-dark', 'bg-primary-dark', 'bg-dark']
            }
          },
          'dark': {
            '.navbar-main .navbar-brand img': {
              src: 'assets/images/stack-logo-white.svg',
            },
            '.navbar-main': {
              addClass: ['navbar-dark', 'bg-dark'],
              removeClass: ['navbar-light', 'bg-primary-dark', 'bg-white', 'border-bottom']
            }
          },
          'primary': {
            '.navbar-main .navbar-brand img': {
              src: 'assets/images/stack-logo-white.svg',
            },
            '.navbar-main': {
              addClass: ['navbar-dark', 'bg-primary-dark'],
              removeClass: ['navbar-light', 'bg-white', 'bg-dark', 'border-bottom']
            }
          }
        }
      }
    }
  },
  computed: {
    computedOptions() {
      const options = JSON.parse(JSON.stringify(this.options))
      options.map(option => {
        option.children
          .filter(group => group.cookies === false)
          .map(group => {
            if (this.layoutActive) {
              group.options.map(go => go.selected = go.value === this.layoutActive)
            } else {
              group.options.map(go => go.selected = go.value === group.value)
            }
          })
      })

      return options
    },
    computedSettings() {
      return Object.assign({}, this.settings)
    }
  },
  created() {
    this.listenOnRoot('fm:settings:state', this.onUpdate)
  },
  methods: {
    try(node, callback) {
      try {
        callback.call(node)
      } catch(e) {
        node.addEventListener('domfactory-component-upgraded', callback)
      }
    }
  }
}
