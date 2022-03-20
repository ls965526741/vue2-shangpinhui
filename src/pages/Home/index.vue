<template>
  <div class="home">
    <TypeNav />
    <ListContainer />
    <Recommend />
    <Rank />
    <Like />
    <Floor v-for="item in list" :key="item.id" :list="item" />
    <Brand />
  </div>
</template>

<script>
import ListContainer from './ListContainer'
import Recommend from './Recommend'
import Rank from './Rank'
import Like from './Like'
import Floor from './Floor'
import Brand from './Brand'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    ListContainer,
    Recommend,
    Rank,
    Like,
    Floor,
    Brand
  },
  data() {
    return {}
  },
  methods: {},
  mounted() {
    this.$store.dispatch('floorList')
  },
  computed: {
    ...mapState({ list: state => state.home.floorList })
  }
}
</script>

<style lang="scss" scoped>
.home {
  user-select: none;
}
</style>
