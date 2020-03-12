import LetcodingHeader from '@/components/public/letcoding-header/letcoding-header.vue';
import LetcodingFooter from '@/components/public/letcoding-footer/letcoding-footer.vue';
// import SearchBar from '@/components/public/search-bar/search-bar.vue';

import OrderForm from '@/components/personal-center/order-form/order-form.vue';
import Addr from '@/components/personal-center/addr/addr.vue';

export default {
  components: {
    LetcodingHeader, LetcodingFooter, OrderForm, Addr
  },
  data: () => ({
    demo: false
  })
};
