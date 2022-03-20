const drag = {}
drag.install = function (Vue, options) {
  Vue.directive('drag', {
    inserted: function (el) {
      el.onmousedown = function (e) {
        const l = e.clientX - el.offsetLeft
        const t = e.clientY - el.offsetTop
        document.onmousemove = function (e) {
          el.style.left = e.clientX - l + 'px'
          el.style.top = e.clientY - t + 'px'
        }
        el.onmouseup = function () {
          document.onmousemove = null
          el.onmouseup = null
        }
      }
    }
  })
}

export default drag
