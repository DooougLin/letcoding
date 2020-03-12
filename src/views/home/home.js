import LetcodingHeader from '@/components/public/letcoding-header/letcoding-header.vue';
import LetcodingFooter from '@/components/public/letcoding-footer/letcoding-footer.vue';
import SearchBar from '@/components/public/search-bar/search-bar.vue';
import Swiper from 'swiper';

export default {
  components: {
    LetcodingHeader, LetcodingFooter, SearchBar
  },
  data: () => ({

  }),
  methods: {
    initSwiper() {
      const pagination = (element) => ({
        el: element,
        clickable: true,
        bulletClass: 'bullet',
        bulletActiveClass: 'bullet-active',
        renderBullet: function (index, className) {
          return `<span class="${className}">${index + 1}</span>`;
        }

      });

      setTimeout(() => {
        this.swiper = new Swiper('#swiper1', {
          autoplay: true,
          pagination: pagination('#swiper-pagination1')
        });

        this.swiper2 = new Swiper('#swiper2', {
          autoplay: true,
          slidesPerView: 4,
          slidesPerGroup: 4,
          pagination: pagination('#swiper-pagination2')
        });
      }, 300);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initSwiper();
    });
  }
};
