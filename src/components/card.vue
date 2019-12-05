<template>
  <el-card :class="type">
    <div slot="header">
      <h1>Search result</h1>
      <p>{{ title }}</p>
    </div>
    <div id="content">
      <p>{{ description }}</p>
      <a :href="link"></a>
    </div>
  </el-card>
</template>

<script>
export default {
  name: 'card',
  props: ['title','description','link'],
  data() {
    return {
      cards: [
        {
          card: { title: '', description: '', link: ''},
          cardtype: 'card'
        },
      ]
    }
  }
}
</script>

<style></style>
