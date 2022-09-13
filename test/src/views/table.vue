<!--  -->
<template>
  <div class="table">
    <el-table :data="tableData" style="width: 100%">
      <el-table-column label="日期" width="180">
        <template slot-scope="scope">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ scope.row.date }}</span>
        </template>
      </el-table-column>
      <el-table-column label="姓名" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>姓名: {{ scope.row.name }}</p>
            <p>住址: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="tel" width="180">
        <template slot-scope="scope">{{ scope.row.tel }}</template>
      </el-table-column>
      <el-table-column label="sex" width="180">
        <template slot-scope="scope">{{ scope.row.sex }}</template>
      </el-table-column>
      <el-table-column label="school" width="180">
        <template slot-scope="scope">{{ scope.row.school }}</template>
      </el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)"
            >编辑</el-button
          >
          <el-button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)"
            >删除</el-button
          >
        </template>
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
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      dialogFormVisible: false,
      addUserDialogFormVisible:false,
      formLabelWidth: "300px",
      editForm: {
       
      },
      addForm:{

      },
      deleteForm:{

      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  computed: {},
  watch: {},
  methods: {
    getList() {
      this.$axios
        .get("/api/userlist")
        .then((res) => (this.tableData = res.data));

    },
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
                this.getList()
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
    this.getList();
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