<template>
  <el-container>
    <el-main style="margin-top:100px;">
      <el-row>
        <el-col :span="16" :offset="4">
          <div class="grid-content" align="left">
            <h1 id="title">Welcome!</h1>
            <h2 class="subtitle">enjoy your reading!</h2>
            <el-table :data="tableData" style="width: 100%">
              <el-table-column type="expand">
                <template slot-scope="props">
                  <el-form
                    label-position="left"
                    inline
                    class="demo-table-expand"
                  >
                    <el-form-item label="Keyword">
                      <span>{{ props.row.keyword }}</span>
                    </el-form-item>
                    <el-form-item label="Methodology">
                      <span>{{ props.row.methodology }}</span>
                    </el-form-item>
                    <el-form-item label="Experiment">
                      <span>{{ props.row.experiment }}</span>
                    </el-form-item>
                    <el-form-item label="Result">
                      <span>{{ props.row.result }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="Title" prop="title"> </el-table-column>
              <el-table-column align="right">
                <template slot-scope="props">
                  <el-link :href='props.row.src' :underline="false">
                  <el-button
                    size="mini"
                    type="primary"
                    >Read now</el-button
                  >
                  </el-link>
                </template>
              </el-table-column>
            </el-table>
          </div>
        </el-col>
      </el-row>
    </el-main>
    <el-footer style="margin-top:200px">INFSCI 2140 PROJECT</el-footer>
  </el-container>
</template>

<script>
export default {
  scope: {

  },
  props: {
    source: String
  },
  data() {
    return {
      tableData: [
        {
          title: 'Cyberbullying, self-esteem, empathy and loneliness',
          keyword: 'Negative feedback',
          methodology: 'Given a query and a ranked document list for the query, we keep deleting the top ranked relevant document until none of the top 10 ranked documents of the list is relevant. We assume that the deleted relevant documents do not exist in the collection.',
          experiment: 'here',
          result: 'here',
          src:'/reader/demo'
        },
        {
          title: 'Probabilistic Latent Semantic Indexing',
          keyword: 'Negative feedback',
          methodology: 'Given a query and a ranked document list for the query, we keep deleting the top ranked relevant document until none of the top 10 ranked documents of the list is relevant. We assume that the deleted relevant documents do not exist in the collection.',
          experiment: 'here',
          result: 'here',
          src:'/reader/shen'
        },
        {
          title: 'Context-Sensitive Information Retrieval Using Implicit Feedback',
          keyword: 'Negative feedback',
          methodology: 'Given a query and a ranked document list for the query, we keep deleting the top ranked relevant document until none of the top 10 ranked documents of the list is relevant. We assume that the deleted relevant documents do not exist in the collection.',
          experiment: 'here',
          result: 'here',
          src:'reader/hofmann'  
        },
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
#title {
  font-weight: bolder;
  font-size: 64px;
  margin-bottom: 0;
}
.subtitle {
  font-weight:lighter;
  font-size: 48px;
  margin-top: 0;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  font-weight: bold;
  color: #049EFF;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
el-main {
  padding-bottom:100px;
}
.el-footer{
  text-align: center;
}
</style>
