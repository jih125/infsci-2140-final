<template>
  <el-container>
    <el-header>
      <el-row>
        <el-col :span="1">
          <el-link :underline="false" href="/">
            <i class="material-icons md-48 back" style="margin-top:18px;"
              >arrow_back</i
            >
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
            style="margin-top: 18px;"
            >Outline</el-button
          >
          <el-drawer
            title="Outline"
            :visible.sync="drawer"
            :direction="direction"
          >
            <el-menu default-active="2" class="el-menu-vertical-demo">
              <el-submenu index="1">
                <template slot="title">
                  <i class="el-icon-collection"></i>
                  <span>{{ paper.title }}</span>
                </template>
                <el-menu-item-group>
                  <template slot="title">分组一</template>
                  <el-menu-item index="1-1">选项1</el-menu-item>
                  <el-menu-item index="1-2">选项2</el-menu-item>
                </el-menu-item-group>
                <el-menu-item-group title="分组2">
                  <el-menu-item index="1-3">选项3</el-menu-item>
                </el-menu-item-group>
                <el-submenu index="1-4">
                  <template slot="title">选项4</template>
                  <el-menu-item index="1-4-1">选项1</el-menu-item>
                </el-submenu>
              </el-submenu>
            </el-menu>
          </el-drawer>
        </el-col>
      </el-row>
    </el-header>
    <el-container>
      <el-container>
        <el-main>
          <iframe
            src="demo.pdf"
            width="100%"
            height="800px"
            style="border: none;"
          />
        </el-main>
        <el-footer>INFSCI 2140 PROJECT</el-footer>
      </el-container>
      <el-aside width="25%" style="height:800px;" id="sidearea">
        <h5>Search methods</h5>
        <el-form ref="form" :model="form" name="testform">
          <el-form-item prop="searchtext">
            <el-input
              type="textarea"
              v-model="form.searchtext"
              :rows="3"
              id="sel"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="submit('form')" :loading="loading"
              >Submit</el-button
            >
            <el-button @click="reset('form')">Cancel</el-button>
          </el-form-item>
        </el-form>
      </el-aside>
    </el-container>
  </el-container>
</template>
<script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>
<script>
import Vue from 'vue'
import card from './card.vue'
Vue.config.productionTip = false

export default {
  components: {
    card
  },
  data() {
    return {
      show: true,
      results: [],
      loading: false,
      drawer: false,
      direction: 'ltr',
      paper: {
        title: 'A study of methods for negative relevance feedback',
        src: 'demo.pdf'
      },
      form: {
        searchtext: ''
      },
      result: {
        text: ''
      }
    }
  },
  computed: {},
  methods: {
    submit(formName) {
      this.loading = true
      if (this.form.searchtext == '') {
        setTimeout(
          () => ((this.loading = false), alert('Please submit your search!')),
          1000
        )
      } else {
        setTimeout(() => ((this.loading = false), this.createCard()), 1000)
      }
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    createCard() { 
      var title = document.createElement('h1')
      var titleText = document.createTextNode('Search result from Wikipedia:')
      title.appendChild(titleText)
      document.getElementById('sidearea').appendChild(title)

      var content = document.createElement('p')
      var contentText = document.createTextNode(this.form.searchtext)
      content.appendChild(contentText)
      document.getElementById('sidearea').appendChild(contentText)

      var referenceTitle = document.createElement('h1')
      referenceTitle.appendChild(document.createTextNode('Reference:'))
      document.getElementById('sidearea').appendChild(referenceTitle)

      var divider = document.createElement('hr')
      var referenceArray = ['Bullying', 'Cyber', 'Wiki'];
      for (var i = 0; i < referenceArray.length; i++) {
        var reference = document.createElement('a');
        var referencetext = document.createTextNode(referenceArray[i]);
        reference.appendChild(referencetext);
        reference.href = 'http://www.google.com';
        reference.title = referenceArray[i];
        reference.style.marginRight = '10px'
        document.getElementById('sidearea').appendChild(reference);
        document.getElementById('sidearea').appendChild(divider);
      }
    }
  }
}
</script>
<style scoped>
.el-header {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  /* margin: 0; */
}
.back {
  color: black;
}
.title {
  font-size: large;
}
#result-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
</style>
