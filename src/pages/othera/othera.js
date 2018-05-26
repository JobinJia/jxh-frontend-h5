import Vue from 'vue'
import OtherA from './OtherA.vue'

import '@/common/js/responsive.js'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    el: '#OtherA',
    // router,
    template: '<OtherA/>',
    components: { OtherA }
})
