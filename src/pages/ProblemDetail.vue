<template>
  <div>
    <el-row :gutter="10">
      <el-col :span="20">
        <el-card class="box-card">
          <div slot="header">
            <span>{{problemInfo.title}}</span>
          </div>
          <div class="title">题目描述</div>
          <div class="content" v-html="problemInfo.description"></div>
          <div class="title">输入</div>
          <div class="content" v-html="problemInfo.input"></div>
          <div class="title">输出</div>
          <div class="content" v-html="problemInfo.output"></div>
          <el-row :gutter="10">
            <el-col :span="12">
              <div class="title">样例输入</div>
              <div class="">
                <pre class="sample" v-html="problemInfo.sampleInput"></pre>
              </div>
            </el-col>
            <el-col :span="12">
              <div class="title">样例输出</div>
              <div class="">
                <pre class="sample" v-html="problemInfo.sampleOutput"></pre>
              </div>
            </el-col>
          </el-row>



        </el-card>
      </el-col>

      <el-col :span="4">
        <el-card class="box-card">
          <div slot="header">
            <span>题目信息</span>
          </div>
          <div>
            <el-tag type="success" size="mini">时间限制</el-tag>
            <div class="problem-info-right">{{problemInfo.timeLimit}}</div>
          </div>
          <div>
            <el-tag type="success" size="mini">内存限制</el-tag>
            <div class="problem-info-right">{{problemInfo.memoryLimit}}</div>
          </div>
          <div>
            <el-tag type="success" size="mini">通过/提交</el-tag>
            <div class="problem-info-right">{{problemInfo.acceptNumber}} / {{problemInfo.acceptNumber}}</div>
          </div>
          <div>
            <el-tag type="success" size="mini">原题链接</el-tag>
            <div class="problem-info-right">
              <el-link
                type="primary"
                :href="problemInfo.originUrl"
                target="_blank"
              >
                {{problemInfo.originOj}}-{{problemInfo.originProbId}}
              </el-link>
            </div>
          </div>
          <div>
            <el-tag type="success" size="mini">更新时间</el-tag>
            <div class="problem-info-right">{{problemInfo.updateTime}}</div>
          </div>
        </el-card>

      </el-col>
    </el-row>
  </div>
</template>

<script>
import NavBar from "./components/NavBar";
export default {
  name: 'ProblemDetail',
  components: {
    NavBar
  },

  data () {
    return {
      ojName: this.$route.params.ojName,
      probId: this.$route.params.probId,
      problemInfo: {
        id: 0,
        title: "A + B Problem",
        description: "Calculate <i>A + B</i>. <br>",
        timeLimit: "2000/1000 MS",
        memoryLimit: "65536/32768 K",
        input: "Each line will contain two integers <i>A</i> and <i>B</i>. Process to end of file. <br>",
        output: "For each case, output <i>A + B</i> in one line. <br>",
        sampleInput: "<div style=\"font-family:Courier New,Courier,monospace;\"> 1 1 </div>",
        sampleOutput: "<div style=\"font-family:Courier New,Courier,monospace;\"> 2 </div>",
        submitNumber: 0,
        acceptNumber: 0,
        originOj: "HDU",
        originProbId: "1000",
        originUrl: "http://acm.hdu.edu.cn/showproblem.php?pid=1000",
        updateTime: "2020-07-18T08:03:23.000+00:00"
      }
    }
  },
  methods: {

  },
  mounted(){

  }
}
</script>

<style scoped>
  .el-card__header {
    padding: 10px 20px;
  }

  .problem-info-right {
    float:right;
    font-size: 14px;
  }

  .title {
    font-size: 20px;
    font-weight: 400;
    margin: 8px 0 8px;
    color: #3091f2;
  }

  .content {
    font-size: 15px;
    margin: 10px 20px 25px;
  }

  .sample {
    margin: 0;
    padding: 5px;
    background: transparent;
    border: 1px solid #d3d4d6;
    border-radius: 5px;
  }

</style>
