<template>
  <div>
    <el-container>
      <el-header>
        <p>CoderFeng</p>
        <el-dropdown  @command="command">
              <span class="el-dropdown-link">
                  {{user.name}}<i><img :src="user.circleUrl"></i>
              </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="info">个人中心</el-dropdown-item>
            <el-dropdown-item command="logout" divided>注销</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </el-header>


      <el-container>
        <el-aside width="200px">
          <!--<el-radio-group v-model="isCollapse">
              <el-radio-button :label="false">展开</el-radio-button>
              <el-radio-button :label="true">收起</el-radio-button>
          </el-radio-group>-->
          <!--<el-scrollbar style="width: 100%;height: 100%">-->
            <div>
              <el-menu default-active="/home"  router unique-opened  background-color="#D5FFF3">
                <el-menu-item index="/home">
                  <i class="el-icon-position"></i>
                  <span slot="title">首页</span>
                </el-menu-item>
                <el-submenu index="2">
                  <template slot="title">
                    <i class="el-icon-user"></i>
                    <span slot="title">用户管理</span>
                  </template>
                  <el-menu-item-group>
                    <el-menu-item index="/user">用户管理</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group>
                    <el-menu-item index="2-2">权限管理</el-menu-item>
                  </el-menu-item-group>
                </el-submenu>
              </el-menu>
            </div>
<!--          </el-scrollbar>-->
        </el-aside>

        <el-main>
          <el-breadcrumb separator-class="el-icon-arrow-right" v-if="this.$router.currentRoute.path != '/home'">
            <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>{{this.$router.currentRoute.name}}</el-breadcrumb-item>
          </el-breadcrumb>
          <div class="homeWelcome" v-if="this.$router.currentRoute.path == '/home'">
            欢迎来到CoderFeng尝试的网站！
          </div>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
    name: "Home",
    data() {
      return {
        user: {
          name: "admin",
          circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
        },    //用户信息
      }
    },
    methods : {
      command(cmd) {
        if (cmd === 'logout'){
          this.$confirm('此操作将会注销登录，是否继续','提示',{
            confirmButtonText : '确定',
            cancelButtonText : '取消'
          }).then(() =>{
            //发送请求给后端，改变标志位

            //移除用户
            // window.sessionStorage.removeItem("user");
            this.$router.replace("/");
          }).catch(() => {
            this.$message.info('已取消操作');
          });
        }else{
          if(this.$router.currentRoute.Path !== '/info'){
            this.$router.replace('/info');
          }
        }
      }
    },

}
</script>

<style scoped>
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    min-height: 400px;
  }

p{
  font-size: 20px;
  font-weight: bolder;
  color: #ffffff;
}

.el-header{
  background: #5c6fff;
  display: flex;
  align-items: center;
  box-sizing: border-box;
  justify-content: space-between;
}

.el-dropdown{
  cursor: pointer;
}
.el-dropdown-link{
  display: flex;
  align-items: center;
  color: #ffffff;
}
.el-header img{
  width: 25px;
  height: 25px;
  border-radius: 24px;
}

.el-aside{
  height: calc(100vh - 80px);
}

.el-menu i{
  margin-left: -10%
}

.homeWelcome{
  text-align: center;
  font-family: 华文隶书;
  color: #ef7bff;
  font-size: 28px;
  padding-top: 60px;
}

.el-breadcrumb{
  margin-bottom: 10px;
}
</style>