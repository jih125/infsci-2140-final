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
        <!-- <el-col :span="3">
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
        </el-col> -->
      </el-row>
    </el-header>
    <el-container>
      <el-container>
        <el-main>
          <iframe
            :src="paper.src"
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
            <el-button @click="reset('form')">Delete</el-button>
            <el-button type="text" @click="removeCards()">Clear</el-button>
          </el-form-item>
        </el-form>
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item">
            <a
              class="nav-link active"
              id="wiki-tab"
              data-toggle="tab"
              href="#wiki"
              role="tab"
              aria-controls="wiki"
              aria-selected="true"
              >Wikipedia</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              id="springer-tab"
              data-toggle="tab"
              href="#springer"
              role="tab"
              aria-controls="springer"
              aria-selected="false"
              >Springer</a
            >
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="wiki"
            role="tabpanel"
            aria-labelledby="wiki-tab"
          >
            <div class="container" id="wikicard"></div>
          </div>
          <div
            class="tab-pane fade"
            id="springer"
            role="tabpanel"
            aria-labelledby="springer-tab"
          >
            <div class="container" id="springercard"></div>
          </div>
        </div>
      </el-aside>
    </el-container>
  </el-container>
</template>
<script src="//mozilla.github.io/pdf.js/build/pdf.js"></script>
<script>
import Vue from 'vue'
import card from './card.vue'
import * as external from '@/plugins/fetchApi.js'

function createCard(id, title, content, url) {
  var card = document.createElement('div')
  card.setAttribute('id', 'card')
  card.setAttribute('class', 'card')
  card.setAttribute('style', 'margin-top:10px')
  var cardBody = document.createElement('div')
  cardBody.setAttribute('class', 'card-body')

  var resultTitle = document.createElement('a')
  resultTitle.setAttribute('class', 'card-title')
  resultTitle.setAttribute('href', url)
  resultTitle.setAttribute('target', '_blank')

  var resultTitleText = document.createElement('h5')
  resultTitleText.innerText = title
  resultTitle.appendChild(resultTitleText)

  var resultContent = document.createElement('p')
  resultContent.setAttribute('class', 'card-text')
  resultContent.setAttribute(
    'style',
    'overflow: hidden;display: -webkit-box;-webkit-box-orient: vertical;-webkit-line-clamp: 4;'
  )
  var contentText = content
  resultContent.innerHTML = contentText

  cardBody.appendChild(resultTitle)
  cardBody.appendChild(resultContent)
  card.appendChild(cardBody)
  // return card
  document.getElementById(id).appendChild(card)
}

export default {
  components: {
    card
  },
  created() {},
  mounted() {},
  data() {
    return {
      show: true,
      results: [],
      loading: false,
      drawer: false,
      direction: 'ltr',
      paper: {
        title:
          'Measuring Young Children’s Long-Term Relationships with Social Robots',
        src: 'westlund.pdf'
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
          () => (
            (this.loading = false),
            this.notify('Warning', 'Please input before search', 'warning')
          ),
          1000
        )
      } else {
        this.loading = false

        external.getWikiResult(this.form.searchtext).then(function(result) {
          var resultArray = result
          resultArray.forEach(element => {
            createCard('wikicard', element.title, element.snippet, element.url)
          })
        })
        external.getSpringerResult(this.form.searchtext).then(function(result) {
          var resultArray = result
          resultArray.forEach(element => {
            createCard(
              'springercard',
              element.title,
              element.abstract,
              element.url[0].value
            )
          })
        })
      }
    },
    reset(formName) {
      this.$refs[formName].resetFields()
    },
    notify(title, message, type) {
      const h = this.$createElement

      this.$notify({
        title: title,
        message: h('i', { style: 'color: teal' }, message),
        type: type
      })
    },
    removeCards() {
      var childNodes = document.getElementById('wikicard').childNodes
      for (var i = childNodes.length - 1; i >= 0; i--) {
        var childNode = childNodes[i]
        if (childNode.id == 'card') {
          childNode.parentNode.removeChild(childNode)
        }
      }
      var childNodes = document.getElementById('springercard').childNodes
      for (var i = childNodes.length - 1; i >= 0; i--) {
        var childNode = childNodes[i]
        if (childNode.id == 'card') {
          childNode.parentNode.removeChild(childNode)
        }
      }
      this.notify('Success', 'Card removed', 'success')
    },
    async getWikiResult(query) {
      var url = 'https://en.wikipedia.org/w/api.php'
      var params = {
        action: 'query',
        format: 'json',
        list: 'search',
        utf8: 1,
        srsearch: query,
        srprop: 'snippet|titlesnippet',
        srlimit: 5,
        srenablerewrites: 1,
        srsort: 'relevance'
      }

      url = url + '?origin=*'
      Object.keys(params).forEach(function(key) {
        url += '&' + key + '=' + params[key]
      })
      var temp = []
      await fetch(url)
        .then(function(response) {
          return response.json()
        })
        .then(function(response) {
          temp = response.query.search
        })
        .catch(function(error) {
          console.log(error)
        })
      return temp
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
