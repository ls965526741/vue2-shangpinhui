const focus = {}
focus.install = function (Vue, options) {
  Vue.directive('focus', {
    inserted: function (el) {
      el.focus()
    }
  })
}
export default focus
