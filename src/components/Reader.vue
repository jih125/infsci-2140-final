<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="1">
          <el-link :underline="false" href="/">
            <i class="material-icons md-48 back">arrow_back</i>
          </el-link>
        </el-col>
        <el-col :span="20">
          <p class="title">{{ title }}</p>
        </el-col>
        <el-col :span="3">
          <el-button
            @click="drawer = true"
            type="primary"
            size="mini"
            style="margin-left: 16px; margin-top: 14px"
          >
            Outline
          </el-button>
          <el-drawer
            title="Outline"
            :visible.sync="drawer"
            :direction="direction"
          >
            <span>我来啦!</span>
          </el-drawer>
        </el-col>
      </el-row>
    </el-header>
    <el-aside width="1000px">
      <iframe
        :src="src"
        frameborder="0"
        height="800px"
        width="100%"
      >
      </iframe>
    </el-aside>
    <el-main> </el-main>
  </el-container>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: 'ltr',
      title: 'A study of methods for negative relevance feedback',
      // paper: {
      //   title: 'A study of methods for negative relevance feedback',
      src: 'https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true'
      // }
    }
  },
  methods: {
    //
  }
}
</script>

<style scoped>
.el-header {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  margin: 0;
}
.back {
  margin: 15px;
  color: black;
}
.title {
  font-size: large;
  margin: 15px;
}
</style>
