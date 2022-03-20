<template>
  <el-dialog title="扫码支付" :visible.sync="dialogVisible" width="30%">
    <div class="pay-dialog">
      <img :src="payUrl" alt="">
    </div>
    <span slot="footer" class="dialog-footer">
      <el-button @click="dialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="ensure">确 定</el-button>
    </span>
  </el-dialog>
</template>

<script>
import QRCode from 'qrcode'
export default {
  data() {
    return {
      dialogVisible: false,
      payUrl: ''
    }
  },
  methods: {
    show() {
      this.dialogVisible = true
    },
    async get() {
      this.payUrl = await QRCode.toDataURL('I am a pony!')
    },
    ensure() {
      this.dialogVisible = false
      this.$emit('ensure')
    }
  },
  created() {
    this.get()
  }
}
</script>

<style lang="scss" scoped>
.pay-dialog {
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
