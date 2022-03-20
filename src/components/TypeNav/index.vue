<template>
  <div class="type-nav">
    <div class="container" @mouseleave="mouseLeaveNav">
      <h2 class="all" @mouseenter="() => (show = true)">全部商品分类</h2>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
      <transition name="sort">
        <div class="sort" v-show="show">
          <div class="all-sort-list2">
            <div
              class="item"
              @mouseenter="currentChange(item1.categoryId)"
              @click="navClick"
              :class="currentIndex === item1.categoryId ? 'cur' : ''"
              v-for="item1 in category"
              :key="item1.categoryId"
            >
              <h3>
                <div :data-name="item1.categoryName" :data-id1="item1.categoryId">{{ item1.categoryName }}</div>
              </h3>
              <div class="item-list clearfix" :class="currentIndex === item1.categoryId ? 'block' : ''">
                <div class="subitem" v-for="item2 in item1.categoryChild" :key="item2.categoryId">
                  <dl class="fore">
                    <dt>
                      <div :data-name="item1.categoryName" :data-id2="item2.categoryId">{{ item2.categoryName }}</div>
                    </dt>
                    <dd>
                      <em v-for="item3 in item2.categoryChild" :key="item3.categoryId">
                        <div :data-name="item1.categoryName" :data-id3="item3.categoryId">{{ item3.categoryName }}</div>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import throttle from 'lodash/throttle'
export default {
  data() {
    return {
      currentIndex: -1,
      show: true
    }
  },
  computed: {
    ...mapState({ category: state => state.home.category })
  },
  methods: {
    currentChange: throttle(function (index) {
      this.currentIndex = index
    }, 50),
    navClick(e) {
      const { id1, id2, id3, name } = e.target.dataset
      const query = { categoryName: name }
      if (id1) {
        query.category1Id = id1
      } else if (id2) {
        query.category2Id = id2
      } else {
        query.category3Id = id3
      }
      const loction = { name: 'search', query }
      if (Object.getOwnPropertyNames(this.$route.params).length !== 0) {
        loction.params = this.$route.params
      }
      this.$router.push(loction)
    },
    mouseLeaveNav() {
      this.currentIndex = -1
      if (this.$route.path !== '/home') {
        this.show = false
      }
    }
  },
  mounted() {
    if (this.$route.path !== '/home') {
      this.show = false
    }
  }
}
</script>

<style lang="scss" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      background: #fafafa;
      overflow-y: scroll;
      &::-webkit-scrollbar {
        display: none;
      }

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            color: #333;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          .block {
            display: block;
          }
        }
        .cur {
          background-color: #e1251b;
          color: #fff;
        }
      }
    }
    .sort-enter {
      opacity: 0;
    }
    .sort-enter-to {
      opacity: 1;
    }
    .sort-enter-active {
      transition: all 0.5s linear;
    }
  }
}
</style>
