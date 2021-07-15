<template>
  <div>
  <el-card :body-style="{ padding: '0px' }" >
    <p>系统登录</p>
    <el-input
      type="text"
      placeholder="账号"
      v-model="username"
      clearable
      @blur="checkUser"
      @focus="clearTip"
    >
    </el-input>
    <!--<span class="span_style" id="user_span"></span>--><br>
    <el-input
      type="password"
      placeholder="密码"
      v-model="password"
      @blur="checkWord"
      @focus="clearWordTip"
      show-password
    >
    </el-input>
    <!--<span class="span_style" id="word_span"></span>--><br>
    <el-checkbox v-model="remember" label="记住密码" border></el-checkbox><br>
    <el-button type="primary" round @click="login">登录</el-button><br>
    <el-button type="primary" round @click="dialog = true">注册</el-button><br>
  </el-card>
  <el-dialog :visible.sync="dialog" title="注册">
<!--    <p style="font-size: 20px;font-weight: bolder;">注册</p>-->
    <el-input
      type="text"
      placeholder="账号"
      v-model="reg_username"
      clearable
    >
    </el-input><br>
    <el-input
      type="password"
      placeholder="密码"
      show-password
      v-model="reg_password"
    >
    </el-input><br>
    <el-input
      type="password"
      placeholder="确认密码"
      v-model="con_password"
      @focus="clear_con"
      @blur="confirm"
      show-password
      style="margin-bottom: 10px"
    >
    </el-input><span style="font-size: 12px;color:red" id="con_span"></span><br>
    <el-button type="primary"
               style="width: 120px;margin-top: 10px;"
               round @click="register">注册</el-button>
    <el-button type="info"
               style="width: 120px;margin-top: 10px"
               round @click="dialog = false">取消</el-button><br>
  </el-dialog>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return{
      username: "",
      password:"",
      remember:"",//remember:  true代表记住
      dialog : false,

      //注册
      reg_username:"",
      reg_password:"",
      con_password:"",
    }
  },
  methods :{
    checkUser(){
      if (this.username.length < 5 && this.username.length !== 0){
        document.getElementById("user_span").innerText = "输入格式错误";
        // alert("格式不对")
      }
      // console.log(this.username.length)
    },
    checkWord(){
      if (this.password.length === 0){
        document.getElementById("word_span").innerText = "输入密码为空";
        // alert("格式不对")
      }
    },
    clearTip(){
      document.getElementById("user_span").innerText = "";
      document.getElementById("word_span").innerText = "";
    },
    clearWordTip(){
      document.getElementById("word_span").innerText = "";
    },
    login(){
      //{"username":username,"password":..}
      // let data = get(login,"");
      if (true /*data.code === 200*/){
        //登录成功
        //将用户信息放入session中
        // window.sessionStorage.setItem("user","token");
        this.$router.push('/home');
      }else{
        // this.$message.error("这是条错误信息");
      }
    },
    register(){
      //{"username":username,"password":password} => {"code":,"data":,"msg":}
      if (this.judge_password()){
        //查询判断
        if (this.query_user()){
          var res = this.insert_user();
          if (res.code !== 200){
            this.$message.error(res.msg);
          }else{
            this.$message.success("注册成功");
            this.dialog = false;
          }
        }
      }else{
        this.$message.error("请查看错误信息！");
      }
      /*let url = http + "";
      let param = {username : this.reg_username};
      let res = get(url,param);
      if (res.code !== 200){
          this.$message.error(res.msg);
      }else{
          url = http + "",
          param = {"username":this.reg_username,"password":this.reg_password};
      }*/
    },
    judge_password(){
      this.confirm();
      return this.reg_password === this.con_password;
    },
    clear_con(){
      document.getElementById("con_span").innerText = "";
    },
    confirm() {
      if (this.reg_password !== this.con_password){
        document.getElementById("con_span").innerText = "密码不一致";
      }
    },
    query_user(){
      let url = http + "";
      let param = {username : this.reg_username};
      let res = get(url,param);
      if (res.code !== 200){
        this.$message.error(res.msg);
        return false;
      }else{
        return true;
      }
    },
    insert_user(){
      let url = http + "";
      let param = {"username":this.reg_username,"password":this.reg_password};
      return post(url, param);
    }
  }
}
</script>

<style scoped>

  .el-card{
    width: 50%;
    height: 400px;
    left: 50%;
    top: 50%;
    transform: translate(50%,40%);
    border-radius: 5%;
  }


  .el-card p{
    font-size: 18px;
    font-weight: bold;
  }

  .el-input{
    width: 400px;
    margin-top: 20px;
  }

  .el-card .el-checkbox{
    margin-left: 45%;
    margin-top: 10px;
    border: 2px none;
  }

  .el-card .el-button{
    width: 300px;
    height: 50px;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  .el-dialog .el-input{
    margin-top: 20px;
  }

</style>
