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
          <p class="title">{{ paper.title }}</p>
        </el-col>
        <el-col :span="3">
          <el-button
            @click="drawer = true"
            type="primary"
            size="mini"
            style="margin-left: 16px; margin-top: 14px"
          >Outline</el-button>
          <el-drawer title="Outline" :visible.sync="drawer" :direction="direction">
            <span>我来啦!</span>
          </el-drawer>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-aside width="75%">
        <iframe
          src="https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true"
          frameborder="0"
          height="800px"
          width="100%"
        ></iframe>
      </el-aside>
      <el-container>
        <el-main>
          <el-form ref="form" :model="form" name="testform" label-width="70px">
            <el-form-item label="Search">
              <el-input type="textarea" v-model="textarea" :rows="2" id="sel"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" size="mini" @click="onSubmit">Go</el-button>
              <el-button size="mini">Cancel</el-button>
            </el-form-item>
          </el-form>
        </el-main>
        <el-footer>INFSCI 2140 PROJECT</el-footer>
      </el-container>
    </el-container>
  </el-container>
</template>

<script>
export default {
  created() {
    document.onmouseup = document.onkeyup = document.onselectionchange = function() {
      var text = "";
      //text=document.getSelection();
      var activeEl = document.activeElement;
      var activeElTagName = activeEl ? activeEl.tagName.toLowerCase() : null;
      if (
        activeElTagName == "iframe" ||
        /^(?:textarea)$/i.test(activeEl.type) ||
        typeof activeEl.selectionStart == "number"
      ) {
        text = activeEl.value.slice(
          activeEl.selectionStart,
          activeEl.selectionEnd
        );
      }else if(document.getSelection()){
        text = document.getSelection().toString();
      }
      document.getElementById("sel").value = text;
    }
  },
  data() {
    return {
      drawer: false,
      direction: "ltr",
      title: "A study of methods for negative relevance feedback",
      paper: {
        title: "A study of methods for negative relevance feedback",
        src:
          "https://docs.google.com/viewerng/viewer?url=http://infolab.stanford.edu/pub/papers/google.pdf&embedded=true"
      },
      form: {}
    };
  },
  methods: {
    //
  }
};
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
