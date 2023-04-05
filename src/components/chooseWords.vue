<template>
  <div class="container">
    <div class="tableBox">
      <span class="titleBox">请选择您要编辑的word文档</span>
      <el-table ref="multipleTable" :data="tableData" border class="table" height="700" style="width: 100%">
        <el-table-column type="selection" :selectable="selectable" width="55">
        </el-table-column>
        <el-table-column type="index" label="序号" width="55" align="center">
        </el-table-column>
        <el-table-column prop="name" label="名字">
        </el-table-column>

      </el-table>

    </div>
    <el-button type="primary" class="addBtn" @click="goForm">编辑文档</el-button>
  </div>
</template>

<script>

export default {
  data() {
    return {

      tableData: [
        {
          name: "封面",
          id: 1
        },
        {
          name: "签约必读",
          id: 2
        },
        {
          name: "房地产经纪服务事项告知书",
          id: 3
        },
        {
          name: "房屋买卖流程图",
          id: 4
        },
        {
          name: "重要交易信息披露",
          id: 5
        },
        {
          name: "交易资金风险提示及自行划转确认书",
          id: 6
        },
        {
          name: "交易方信息确认表",
          id: 7
        },
        {
          name: "北京市存量房屋买卖合同",
          id: 8
        },
        {
          name: "补充协议",
          id: 9
        },
        {
          name: "补充协议-2",
          id: 10
        },
        {
          name: "居间服务合同",
          id: 11
        },
        {
          name: "居间服务确认书 -业主",
          id: 12
        },
        {
          name: "居间服务确认书 -客户",
          id: 13
        },
        {
          name: "配偶同意出售承诺书",
          id: 14
        },
        {
          name: "业主单身声明",
          id: 15
        },
        {
          name: "网上签约授权委托书",
          id: 16
        },
        {
          name: "购房承诺书",
          id: 17
        },
        {
          name: "换房声明",
          id: 18
        },

      ],

    };
  },
  created() {

  },
  mounted() {
    this.tableInit()
  },
  methods: {
    selectable(row) {
    
      if (row.id == 8 || row.id == 2 || row.id == 3 || row.id == 4 || row.id == 5 || row.id == 7 || row.id == 9 || row.id == 11 || row.id == 12 || row.id == 13) {
        return false
      } else {
        return true
      }
    },
    tableInit() {
      let rowInfo = [this.tableData[1], this.tableData[2], this.tableData[3], this.tableData[4], this.tableData[6], this.tableData[7], this.tableData[8], this.tableData[10], this.tableData[11], this.tableData[12]]


      rowInfo.forEach(row => {

        this.$refs.multipleTable.toggleRowSelection(row);
      });

    },
    goForm(){
       let chooseList = this.$refs.multipleTable.selection;
       let ids = ""
       chooseList.forEach((item)=> {
          ids += item.id +","
       })
       ids = ids.substring(0, ids.length - 1);
      

     
       this.$router.push(
        
          {path:'/page/edit',query: {ids:ids}}
        
       )
    }
  },
};
</script>


<style lang="less" scoped>
.container {
  text-align: center;
  width: 100%;

  .tableBox {
    margin: 0 auto;
    // text-align: center;
    width: 400px;

    // background-color: aqua;
    .titleBox {
      font-size: 16px;
      font-weight: 550;
      margin-bottom: 10px;
    }

    .table {
      margin-top: 20px;
    }
  }

  .addBtn {
    // text-align: center;
    margin-top: 30px;
  }
}
</style>