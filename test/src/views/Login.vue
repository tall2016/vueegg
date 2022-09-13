<!--  -->
<template>
  <div class="login">
    <div class="wrap">
      <div class="content">
        <div class="title">后台登录系统</div>
        <div class="form">
          <el-form ref="form" :model="loginform" label-width="80px">
            <el-form-item label="用户名">
              <el-input v-model="loginform.user.username"></el-input>
            </el-form-item>
            <el-form-item label="密  码">
              <el-input v-model="loginform.user.password"></el-input>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      loginform: {user:{
        username: "",
        password: ""
      }
       
      }
    };
  },
  computed: {},
  watch: {},
  methods: {
    onSubmit() {
        console.log(this.loginform)
      this.$axios.post('/api/login',this.loginform, {})
      .then(res=>{
        console.log(res)
        if(res.status === 200){
            localStorage.setItem("token", res.token);
              this.$router.push("/");
        }
         
      }
      );
    // this.$axios.get('/api').then(res=>{
    //     console.log(res)
    // })
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
};
</script>
<style lang='less' scoped>
.wrap {
  width: 100vw;
  height: 100vh;
  background: beige;
  position: fixed;
  top: 0;
  left: 0;
  .content {
    width: 400px;
    height: 300px;
    padding: 30px;
    background: white;
    position: absolute;
    top: 50%;
    left: 50%;
    margin-top: -150px;
    margin-left: -200px;
    .title {
      text-align: center;
      font-size: 28px;
      line-height: 100px;
    }
  }
}
</style>