import LetcodingHeader from '@/components/public/letcoding-header/letcoding-header.vue';
import LetcodingFooter from '@/components/public/letcoding-footer/letcoding-footer.vue';
import SearchBar from '@/components/public/search-bar/search-bar.vue';
// import MagnifyingGlass from '@/components/magnifying-glass/magnifying-glass.vue';
import ItemVideo from '@/components/item/item-video/item-video.vue';
import Swiper from 'swiper';

export default {
  components: {
    LetcodingHeader, LetcodingFooter, SearchBar, ItemVideo
  },
  data: () => ({

  }),
  methods: {
    initSwiper(){
      setTimeout(() => {
        this.swiper3 = new Swiper('#swiper3', {
          direction: 'vertical',
          // observer: true,
          // observeParents: true
          slidesPerView: 3,
          slidesPerGroup: 3,
          loop: true,
          navigation: {
            nextEl: '.swiper-next',
            prevEl: '.swiper-prev'
          }
        });
      }, 300);
    }
  },
  mounted(){
    this.$nextTick(() => {
      this.initSwiper();
    });
  }
};
