<template>
    <div>
        <div class="search">
            <el-input clearable v-model="keyword" placeholder="通过用户名搜索" round prefix-icon="el-icon-search"></el-input>
            <el-button type="primary" round icon="el-icon-search">搜索</el-button>
        </div>

        <div class="data">
            <el-table
                :data="tableData"
                border
                style="width: 100%">
                <el-table-column
                fixed
                prop="num"
                label="编号"
                width="100">
                </el-table-column>
                <el-table-column
                prop="name"
                label="姓名"
                width="150">
                </el-table-column>
                <el-table-column
                prop="age"
                label="年龄"
                width="120">
                </el-table-column>
                <el-table-column
                prop="auth"
                label="身份"
                width="200">
                </el-table-column>
                <el-table-column
                prop="addr"
                label="住址"
                width="300">
                </el-table-column>
                <el-table-column
                fixed="right"
                label="操作"
                width="250">
                <template slot-scope="scope">
                    <el-button @click="handleClick(scope.row)" type="text" size="small">查看</el-button>
                    <el-button type="text" size="small">编辑</el-button>
                </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>

<script>
export default {
    name:'User',
    data(){
        return{
            keyword:'',
            tableData: [{
            num: '1',
            name: 'CoderFeng',
            age: 21,
            addr: '广东省普宁市',
            auth: "管理员"
            }]
        }
    },
    methods: {
        //row为一行的数据
        handleClick(row){
            
        }
    },
    created(){
        //请求获取用户信息
    },
}
</script>

<style scoped>
.search{
    display: flex;
    justify-content: center;
    margin-top: 10px;
}

.search .el-input{
    width: 400px;
}

.search .el-button{
    width: 150px;
    margin-left: 10px;
}

.data{
    margin-top: 10px;
}
</style>
