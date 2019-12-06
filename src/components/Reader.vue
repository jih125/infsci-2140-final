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
        <h5 style="margin-top:20px">Search methods</h5>
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
      },
      category: [
        {
          name:'123',
          url:'http://www.google.com'
        },
        {
          name:'123',
          url:'http://www.google.com'
        },
        {
          name:'123',
          url:'http://www.google.com'
        },
        ]
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
      var card = document.createElement('div')
      card.setAttribute('class','card')

      var cardBody = document.createElement('div')
      cardBody.setAttribute('class','card-body')

      var resultTitle = document.createElement('h5')
      resultTitle.setAttribute('class','card-title')
      var resultTitleText = document.createTextNode('Search for Wikipedia:'+this.form.searchtext)

      var resultContent = document.createElement('p')
      resultContent.setAttribute('class','card-text')
      var contentText = 'Here is the <span class="searchmatch">result</span>'
      resultContent.innerHTML = contentText

      resultTitle.appendChild(resultTitleText)
      cardBody.appendChild(resultTitle)
      cardBody.appendChild(resultContent)
      for(var i = 0; i<this.category.length;i++){
        var resource = document.createElement('a')
        resource.setAttribute('class','card-link')
        resource.setAttribute('href',this.category[i].url)
        resource.setAttribute('target','_blank')
        var resourceTitle = document.createTextNode(this.category[i].name)
        resource.appendChild(resourceTitle)
        cardBody.appendChild(resource)
      }
      card.appendChild(cardBody)

      document.getElementById('sidearea').appendChild(card)
    }
  }
}
</script>
<style>
.el-header {
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.19), 0 6px 6px rgba(0, 0, 0, 0.23);
  /* margin: 0; */
}
.back {
  color: black;
}
.title {
  font-size: large;
  font-weight: bold;
  margin-top: 16px;
}
#result-title {
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}
.searchmatch {
  font-weight: bold;
}
</style>
