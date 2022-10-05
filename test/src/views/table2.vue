<!--  -->
<template>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column v-for="(item,index) in headData" :key="index" :label="item.label" :prop="item.name" width="180">
      
        </el-table-column>
     
      
      </el-table>
        <el-dialog title="资料修改" :visible.sync="dialogFormVisible">
          <el-form :model="editForm">
            <el-form-item label="姓名" :label-width="formLabelWidth">
              <el-input v-model="editForm.name" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="日期" :label-width="formLabelWidth">
              <el-input v-model="editForm.date" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="tel" :label-width="formLabelWidth">
              <el-input v-model="editForm.tel" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="性别" :label-width="formLabelWidth">
              <el-input v-model="editForm.sex" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="school" :label-width="formLabelWidth">
              <el-input v-model="editForm.school" autocomplete="off"></el-input>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="confirmEdit(editForm.id)"
              >确 定</el-button
            >
          </div>
        </el-dialog>
        <el-button type="primary" @click="addUserDialogFormVisible = true">增加人员</el-button>
  
  <el-dialog title="增加人员" :visible.sync="addUserDialogFormVisible">
    <el-form :model="addForm">
      <el-form-item label="姓名" :label-width="formLabelWidth">
        <el-input v-model="addForm.name" autocomplete="off"></el-input>
      </el-form-item>
     
       <el-form-item label="tel" :label-width="formLabelWidth">
        <el-input v-model="addForm.tel" autocomplete="off"></el-input>
      </el-form-item>
       <el-form-item label="性别" :label-width="formLabelWidth">
        <el-input v-model="addForm.sex" autocomplete="off"></el-input>
      </el-form-item>
       <el-form-item label="school" :label-width="formLabelWidth">
        <el-input v-model="addForm.school" autocomplete="off"></el-input>
      </el-form-item>
       <el-form-item label="地址" :label-width="formLabelWidth">
        <el-input v-model="addForm.address" autocomplete="off"></el-input>
      </el-form-item>
      
    </el-form>
    <div slot="footer" class="dialog-footer">
      <el-button @click="addUserDialogFormVisible = false">取 消</el-button>
      <el-button type="primary" @click="addUser()">确 定</el-button>
    </div>
  </el-dialog>
  <testConponent :movie="this.teststring" @test="test123">   </testConponent>
    </div>
  </template>
  
  <script>
    import testConponent from '@/components/testConponent.vue';  


  export default {
    components: {
        testConponent: testConponent
        
    },
    data() {
      return {
        dialogFormVisible: false,
        addUserDialogFormVisible:false,
        formLabelWidth: "300px",
        teststring:"电风扇",
        editForm: {
         
        },
        addForm:{
  
        },
        deleteForm:{
  
        },
        headData:[
        {name:'id',label:'id'},
        {name:'name',label:'姓名'},
        {name:'sex',label:'性别'},
        {name:'age',label:'年龄'},
        
    ],
    tableData:[
        {'id':1,'name':'张三','sex':'男','age':'32'},
        {'id':2,'name':'张四','sex':'男','age':'42'},
        {'id':3,'name':'张有','sex':'女','age':'2'},
        {'id':4,'name':'立式','sex':'男','age':'22'},

    ]
      };
    },
    computed: {},
    watch: {},
    methods: {
     
      handleEdit(index, row) {
        this.dialogFormVisible = true;
        this.editForm = row;
       
  
        console.log(row);
      },
      confirmEdit(id){
         
          let url = `/api/userlist/${id}`
          
          this.$axios.put(url,this.editForm).then(res=>{
          console.log(res)
        })
      },
      test123(){
        console.log(535)
      },
      addUser(row){
          
          this.$axios.post('/api/userlist',this.addForm).then(res=>{
          console.log(res)
        })
  
      },
      handleDelete(index, row) {
          this.deleteForm = row;
        console.log(index, row);
         this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
              let url = '/api/userlist/'+row.id
              this.$axios.delete(url).then(res=>{
                  console.log(res)
                  if(res.status === 200){
                       this.$message({
                      type: 'success',
                      message: '删除成功!'
                  });
                 

                  }
                  
              })
           
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消删除'
            });          
          });
      }
       
    },
    created() {
    
    },
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
  </style>