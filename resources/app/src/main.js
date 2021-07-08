import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import router from "./router";
import store from "./store";
import "./assets/css/main.css";
import VueAwesomeSwiper from "vue-awesome-swiper";
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/swiper-bundle.css";
import AOS from "aos";
import "aos/dist/aos.css";
import checkView from "vue-check-view";
import VueSmoothScroll from "vue2-smooth-scroll";
import VueApexCharts from "vue-apexcharts";
import VueCountdown from "@chenfengyuan/vue-countdown";
import VuePrlx from "vue-prlx";
import SlideUpDown from "vue-slide-up-down";
import VueScrollactive from "vue-scrollactive";
import VueMq from "vue-mq";
import Clipboard from "v-clipboard";
import vClickOutside from "v-click-outside";
import Meta from "vue-meta";
import CloudflareVideoPlayer from "vue-cloudflare-video-player";
import Element from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import axios from "axios";
import VueAxios from "vue-axios";
import VueKinesis from "vue-kinesis";

Vue.use(VueKinesis);
Vue.use(VueAxios, axios);
// axios.defaults.baseURL = 'http://cmcx.test';

Vue.use(CloudflareVideoPlayer);
Vue.use(Meta);

Vue.use(vClickOutside);

Vue.use(Clipboard);

Vue.use(VueMq, {
    breakpoints: {
        phone: 768,
        tablet: 1023,
        md: 1366,
        lg: 1367
    },
    defaultBreakpoint: "sm" // customize this for SSR
});

Vue.use(VueScrollactive);
Vue.component("slide-up-down", SlideUpDown);
Vue.component("slide-up-down", SlideUpDown);
Vue.use(VuePrlx);
Vue.component(VueCountdown.name, VueCountdown);
Vue.use(VueApexCharts);

Vue.component("apexchart", VueApexCharts);
Vue.use(checkView);

AOS.init();

Vue.use(VueAwesomeSwiper);
Swiper.use([Navigation, Pagination]);
Vue.config.productionTip = false;

Vue.use(VueSmoothScroll, {
    duration: 400,
    updateHistory: false
});

Vue.use(Element);

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount("#app");
