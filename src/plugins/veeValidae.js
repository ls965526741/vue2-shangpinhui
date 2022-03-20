/*
 * @Author: liaoshuai
 * @Date: 2021-12-31 16:47:10
 * @LastEditors: liaoshuai
 * @LastEditTime: 2021-12-31 18:04:29
 * @Description:vee-validate@2表单验证插件
 * 使用
 * <input type="text" v-model="info.phone" name="phone" v-validate="{ required: true, regex: /^1\d{10}$/ }" :class="{invalid:errors.has('phone')}" />
 * <input type="password" v-model="info.password1" name="password1" v-validate="{ required: true, is:info.password }" :class="{invalid:errors.has('password1')}" />
 * <span class="error-msg">{{ errors.first("phone") }}</span>
 *
 * <input type="checkbox" v-model="info.agree" name="agree" v-validate="{ required: true, agree:true }" />
 * 验证成功的方法
 * const success = await this.$validator.validateAll()
 */

import Vue from 'vue'
import VeeValidate from 'vee-validate'
// 中文提示信息
import zh_CN from 'vee-validate/dist/locale/zh_CN'
Vue.use(VeeValidate)

// 表单验证
VeeValidate.Validator.localize('zh_CN', {
  messages: {
    ...zh_CN.messages,
    is: field => `${field}必须与密码相同` // 修改内置规则的 message，让确认密码和密码相同
  },
  attributes: {
    phone: '手机号',
    code: '验证码',
    password: '密码',
    password1: '确认密码',
    agree: '协议'
  }
})

// 自定义校验规则
VeeValidate.Validator.extend('agree', {
  validate: value => {
    return value
  },
  getMessage: field => field + '必须同意'
})
