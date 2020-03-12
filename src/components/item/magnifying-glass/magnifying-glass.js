export default {
  data: () => ({
    shadowSize: 218,
    smallImageSize: 418,
    largeImageSize: 800,
    largeImageContainerSize: 418,
    left: 0,
    top: 0,
    show: false
  }),
  computed: {
    shadow() {
      const { width, height } = this.getBoxSize(this.shadowSize);

      return {
        width,
        height,
        left: `${this.left}px`,
        top: `${this.top}px`
      };
    },
    largeImage() {
      const { width, height } = this.getBoxSize(this.largeImageSize);

      return {
        width,
        height,
        position: 'absolute',
        left: `${Math.ceil(-this.left * (this.largeImageSize / this.smallImageSize))}px`,
        top: `${Math.ceil(-this.top * (this.largeImageSize / this.smallImageSize))}px`
      };
    }
  },
  methods: {
    getBoxSize(size) {
      return {
        width: `${size}px`,
        height: `${size}px`
      };
    },
    move(e) {
      const x = e.offsetX - this.shadowSize / 2;
      const y = e.offsetY - this.shadowSize / 2;

      if (x <= 0) {
        this.left = 0;
      } else if (x > this.smallImageSize - this.shadowSize) {
        this.left = this.smallImageSize - this.shadowSize + 1;
      } else {
        this.left = x;
      }

      if (y <= 0) {
        this.top = 0;
      } else if (y > this.smallImageSize - this.shadowSize) {
        this.top = this.smallImageSize - this.shadowSize + 1;
      } else {
        this.top = y;
      }
    }
  }
};
