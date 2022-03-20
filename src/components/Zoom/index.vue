<template>
  <div class="spec-preview">
    <img :src="img" />
    <div class="event" @mousemove="imgMove"></div>
    <div class="big">
      <img :src="img" ref="img" :style="{ top: clientY, left: clientY }" />
    </div>
    <div ref="mask" class="mask"></div>
  </div>
</template>

<script>
import throttle from 'lodash/throttle'
export default {
  name: 'Zoom',
  data() {
    return {
      clientX: 0,
      clientY: 0
    }
  },
  methods: {
    imgMove: throttle(function (e) {
      const mask = this.$refs.mask
      const img = this.$refs.img
      let left = e.offsetX - mask.offsetWidth / 2
      let top = e.offsetY - mask.offsetHeight / 2
      if (left <= 0) left = 0
      if (left >= mask.offsetWidth) left = mask.offsetWidth
      if (top <= 0) top = 0
      if (top >= mask.offsetHeight) top = mask.offsetHeight
      mask.style.left = left + 'px'
      mask.style.top = top + 'px'
      img.style.left = -2 * left + 'px'
      img.style.top = -2 * top + 'px'
    }, 16)
  },
  props: ['img']
}
</script>

<style lang="scss">
.spec-preview {
  position: relative;
  width: 400px;
  height: 400px;
  border: 1px solid #ccc;

  img {
    width: 100%;
    height: 100%;
  }

  .event {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 998;
  }

  .mask {
    width: 50%;
    height: 50%;
    background-color: rgba(0, 255, 0, 0.3);
    position: absolute;
    left: 0;
    top: 0;
    display: none;
  }

  .big {
    width: 100%;
    height: 100%;
    position: absolute;
    top: -1px;
    left: 100%;
    border: 1px solid #aaa;
    overflow: hidden;
    z-index: 998;
    display: none;
    background: white;

    img {
      width: 200%;
      max-width: 200%;
      height: 200%;
      position: absolute;
    }
  }

  .event:hover ~ .mask,
  .event:hover ~ .big {
    display: block;
  }
}
</style>
