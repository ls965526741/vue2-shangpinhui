<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(item, index) in list" :key="item.id">
          <li class="cart-list-con1">
            <input
              type="checkbox"
              :checked="item.isChecked"
              @change="item.isChecked = item.isChecked === 1 ? 0 : 1"
              name="chk_list"
            />
          </li>
          <li class="cart-list-con2">
            <img :src="item.imgUrl" />
            <div class="item-msg">{{ item.skuName }}</div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">{{ item.skuBar }}</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{ toDecimal(item.skuPrice) }}</span>
          </li>
          <li class="cart-list-con5">
            <span @click="item.skuNum = item.skuNum <= 0 ? 0 : item.skuNum - 1" class="mins">-</span>
            <input autocomplete="off" type="text" v-model="item.skuNum" minnum="1" class="itxt" />
            <span @click="item.skuNum += 1" class="plus">+</span>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{ item.skuPrice * item.skuNum }}</span>
          </li>
          <li class="cart-list-con7">
            <a href="#none" class="sindelet" @click="list.splice(index, 1)">删除</a>
            <br />
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" :checked="checkAll" @change="checkAllChange" type="checkbox" />
        <span>全选</span>
      </div>
      <div class="option">
        <span @click="removeGoods">删除选中的商品</span>
        <span>移到我的关注</span>
        <span>清除下柜商品</span>
      </div>
      <div class="money-box">
        <div class="chosed">已选择 <span>0</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{ allPrice }}</i>
        </div>
        <div class="sumbtn">
          <span class="sum-btn" @click="account">结算</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import { toDecimal } from '@/utils/common.js'
export default {
  name: 'ShopCart',
  created() {
    this.$store.dispatch('cart')
  },
  computed: {
    ...mapState({ list: state => state.cart.cartList }),
    toDecimal() {
      return val => {
        return toDecimal(val)
      }
    },
    checkAll() {
      let res = true
      this.list.map(item => {
        if (item.isChecked !== 1) {
          res = false
        }
      })
      return res
    },
    allPrice() {
      let price = 0
      this.list.forEach(item => {
        if (item.isChecked === 1) {
          price = item.skuPrice * item.skuNum + price
        }
      })
      return price
    }
  },
  methods: {
    checkAllChange() {
      const i = this.checkAll === true ? 0 : 1
      this.list.forEach(item => (item.isChecked = i))
    },
    removeGoods() {
      const arr = []
      this.list.forEach((item, index) => {
        if (item.isChecked === 1) {
          arr.unshift(index)
        }
      })
      arr.forEach(item => this.list.splice(item, 1))
    },
    account() {
      this.$router.push('trade')
    }
  }
}
</script>

<style lang="scss" scoped>
.cart {
  width: 1200px;
  margin: 0 auto;

  h4 {
    margin: 9px 0;
    font-size: 14px;
    line-height: 21px;
  }

  .cart-main {
    .cart-th {
      background: #f5f5f5;
      border: 1px solid #ddd;
      padding: 10px;
      overflow: hidden;

      & > div {
        float: left;
      }

      .cart-th1 {
        width: 25%;

        input {
          vertical-align: middle;
        }

        span {
          vertical-align: middle;
        }
      }

      .cart-th2 {
        width: 25%;
      }

      .cart-th3,
      .cart-th4,
      .cart-th5,
      .cart-th6 {
        width: 12.5%;
      }
    }

    .cart-body {
      margin: 15px 0;
      border: 1px solid #ddd;

      .cart-list {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        overflow: hidden;

        & > li {
          float: left;
        }

        .cart-list-con1 {
          width: 4.1667%;
        }

        .cart-list-con2 {
          width: 25%;

          img {
            width: 82px;
            height: 82px;
            float: left;
          }

          .item-msg {
            float: left;
            width: 150px;
            margin: 0 10px;
            line-height: 18px;
          }
        }

        .cart-list-con3 {
          width: 20.8333%;

          .item-txt {
            text-align: center;
          }
        }

        .cart-list-con4 {
          width: 12.5%;
        }

        .cart-list-con5 {
          width: 12.5%;

          .mins {
            border: 1px solid #ddd;
            border-right: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }

          input {
            border: 1px solid #ddd;
            width: 40px;
            height: 33px;
            float: left;
            text-align: center;
            font-size: 14px;
          }

          .plus {
            border: 1px solid #ddd;
            border-left: 0;
            float: left;
            color: #666;
            width: 6px;
            text-align: center;
            padding: 8px;
          }
        }

        .cart-list-con6 {
          width: 12.5%;

          .sum {
            font-size: 16px;
          }
        }

        .cart-list-con7 {
          width: 12.5%;

          a {
            color: #666;
          }
        }
      }
    }
  }

  .cart-tool {
    overflow: hidden;
    border: 1px solid #ddd;

    .select-all {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        vertical-align: middle;
      }

      input {
        vertical-align: middle;
      }
    }

    .option {
      padding: 10px;
      overflow: hidden;
      float: left;

      span {
        float: left;
        padding: 0 10px;
        color: #666;
      }
    }

    .money-box {
      float: right;

      .chosed {
        line-height: 26px;
        float: left;
        padding: 0 10px;
      }

      .sumprice {
        width: 200px;
        line-height: 22px;
        float: left;
        padding: 0 10px;

        .summoney {
          color: #c81623;
          font-size: 16px;
        }
      }

      .sumbtn {
        float: right;

        span {
          display: block;
          position: relative;
          width: 96px;
          height: 52px;
          line-height: 52px;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-family: 'Microsoft YaHei';
          background: #e1251b;
          overflow: hidden;
        }
      }
    }
  }
}
</style>
