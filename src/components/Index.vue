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
                    <el-form-item label="Findings">
                      <span>{{ props.row.findings }}</span>
                    </el-form-item>
                    <el-form-item label="Contribution">
                      <span>{{ props.row.contribution }}</span>
                    </el-form-item>
                  </el-form>
                </template>
              </el-table-column>
              <el-table-column label="Title" prop="title"> </el-table-column>
              <el-table-column align="right">
                <template slot-scope="props">
                  <el-link :href="props.row.url" :underline="false">
                    <el-button size="mini" type="primary">Read now</el-button>
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
  scope: {},
  props: {
    source: String
  },
  data() {
    return {
      tableData: [
        {
          title: 'Cyberbullying, self-esteem, empathy and loneliness',
          keyword: [
            'Cyberbullying',
            'Loneliness',
            'Empathy',
            'Self-esteem',
            'Perpetration',
            'Victimisation'
          ],
          methodology:
            'Given a query and a ranked document list for the query, we keep deleting the top ranked relevant document until none of the top 10 ranked documents of the list is relevant. We assume that the deleted relevant documents do not exist in the collection.',
          findings: 'here',
          contribution: 'here',
          url: '/demo'
        },
        {
          title: 'Vitro: Designing a Voice Assistant for the Scientific Lab Workplace',
          keyword: [
          'voice assistant', 
          'design research', 
          'conversational agent', 
          'augmented scientific workplace'
          ],
          methodology:
           ['case study in the design of Vitro, a voice-based assistant created for a biology wet lab. ', 'contextual inquiry proces'],
          findings: 
          ['Participants saw Vitro as lab equipment, rather than as a labmate. ',
          'Despite our initial observation that scientists engaged in “careful deviation” from protocols, Vitro supported this practice only minimally. ',
          'On average, participants in our experiment were only “moderately comfortable” with how voice-enabled devices such as Google Assistant, Siri or Cortana handle user privacy.' ],
          contribution: 'It does not seek to report on a new AI technology, nor does it purport to introduce a new design technique or methodology. Instead, it simply asks if (and how) human-computer interaction and design practitioners and researchers may take voice as a serious design material for hands-free workplace applications',
          url: '/p1531-cambre(1)'
        },
        {
          title:
            'Measuring Young Children’s Long-Term Relationships with Social Robots',
          keyword: 'assessments; children; long-term interaction; human-robot interaction; social robots',
          methodology:
            'Experiment: social vs. neutral\n A pilot test of four assessments that we have adapted or created for use in this context with children aged 5–6: the Inclusion of Other in Self task, the Social-Relational Interview, the Narrative Description, and the Self-disclosure Task.',
          findings: 'Children can appropriately respond to these assessments with reasonably high internal reliability, and that the proposed assessments are able to capture child-robot relationship adjustments over a long-term interaction.',
          contribution: 'This paper makes two contributions. First, we provide reliability and validity information about the assessments. Second, we report the results of the field study. ',
          url: '/p207-kory_westlund'
        }
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
  font-weight: lighter;
  font-size: 48px;
  margin-top: 0;
}
.demo-table-expand {
  font-size: 0;
}
.demo-table-expand label {
  width: 90px;
  font-weight: bold;
  color: #049eff;
}
.demo-table-expand .el-form-item {
  margin-right: 0;
  margin-bottom: 0;
  width: 100%;
}
el-main {
  padding-bottom: 100px;
}
.el-footer {
  text-align: center;
}
</style>
