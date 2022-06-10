import './preloader'
import './sidebar'

(function(){
  'use strict';
  
  // Self Initialize DOM Factory Components
  domFactory.handler.autoInit()

  // ENABLE TOOLTIPS
  $('[data-toggle="tooltip"]').tooltip()

})()