webpackJsonp([8],{bAZZ:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={name:"PhoneLogin",data:function(){return{curIndex:3,user:{phone:"",code:""},phone_tips:"",code_tips:""}},watch:{user:{deep:!0,handler:function(e,t){/^1[0-9]{10}$/.test(e.phone)?this.phone_tips="":this.phone_tips="请输入正确的手机号码",/^[0-9]{6}$/.test(e.code)?this.code_tips="":this.code_tips="请输入正确的验证码"}}},methods:{toLogin:function(){""===this.phone_tips&&""===this.code_tips&&console.log("登录成功")}}},i={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"phone_login_box"},[e._m(0),e._v(" "),s("label",{staticClass:"input_phone"},[s("div",{staticClass:"login_tips"},[s("p",[e._v(e._s(e.phone_tips))]),e._v(" "),s("p",[e._v(e._s(e.code_tips))])]),e._v(" "),s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.phone,expression:"user.phone"}],attrs:{type:"text",placeholder:"请输入手机号"},domProps:{value:e.user.phone},on:{input:function(t){t.target.composing||e.$set(e.user,"phone",t.target.value)}}})]),e._v(" "),s("label",{staticClass:"input_code"},[s("input",{directives:[{name:"model",rawName:"v-model",value:e.user.code,expression:"user.code"}],attrs:{type:"text",placeholder:"请输入手机验证码"},domProps:{value:e.user.code},on:{input:function(t){t.target.composing||e.$set(e.user,"code",t.target.value)}}}),e._v(" "),s("div",{staticClass:"get_phone_code"},[e._v("获取验证码")])]),e._v(" "),e._m(1),e._v(" "),s("div",{staticClass:"login_btn active",on:{click:e.toLogin}},[e._v("登录")]),e._v(" "),s("div",{staticClass:"back_btn",on:{click:function(t){return e.$router.replace("/personal")}}},[e._v("其他登录方式")]),e._v(" "),s("div",{staticClass:"register_btn"},[e._v("注册账号 >")])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"top_logo"},[t("img",{attrs:{src:"//yanxuan.nosdn.127.net/bd139d2c42205f749cd4ab78fa3d6c60.png",alt:"netease"}})])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login_help"},[t("span",[this._v("遇到问题? ")]),this._v(" "),t("span",[this._v("使用密码验证登录")])])}]};var o=s("VU/8")(n,i,!1,function(e){s("fNfp")},"data-v-6f77fc9d",null);t.default=o.exports},fNfp:function(e,t){}});
//# sourceMappingURL=8.41b539e4180dc0a51668.js.map