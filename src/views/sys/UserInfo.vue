<template>
    <div>
    <el-card>
        <h1>基本信息</h1>
      <hr/>
      <el-form label-position="right" label-width="80px">
        <el-form-item label="我的昵称:">
          <el-input clearable v-model="username"></el-input>
        </el-form-item>
        <el-form-item label="性别:">
          <el-radio-group v-model="sex" size="medium">
            <el-radio label="1" border>男</el-radio>
            <el-radio label="2" border>女</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item  label="新密码:">
          <el-input v-model="pwd" type="password" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码:">
          <el-input v-model="con_pwd" type="password" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" round>保存</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<script>
    export default {
        name: "",
        data(){
          return {
            username:'',
            sex: '',
            pwd:'',
            con_pwd:''
          }
        },
        created(){
          //发送请求获取用户数据
        },
        
    }
</script>

<style scoped>
.el-card{
  width: 70%;
}
.el-card .el-form{
  margin-top: 15px;
}

.el-card .el-form-item{
  margin-left: 15%;
}

.el-card .el-input{
  width: 400px;
  margin-left: -30%;
}

.el-card .el-form .el-button{
  width: 200px;
  margin-left: -35%;
}
.el-radio-group{
  margin-left: -55%;
}
.el-radio{
  width: 100px;
}
</style>
