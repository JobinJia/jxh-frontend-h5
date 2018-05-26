import Vue from 'vue'
import OtherB from './OtherB.vue'
import '@/common/js/responsive.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#OtherB',
    // router,
    template: '<OtherB/>',
    components: { OtherB }
})
