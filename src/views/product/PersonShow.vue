<template>
  <div>
    <el-container>
      <el-header>
        <el-radio-group v-model="person.type">
          <el-radio @click.native.prevent="change('name')" label="name">姓名</el-radio>
          <el-radio @click.native.prevent="change('age')" label="age">年龄</el-radio>
          <el-radio @click.native.prevent="change('address')" label="address">地址</el-radio>
          <el-radio @click.native.prevent="change('birthday')" label="birthday">生日</el-radio>
          <el-radio @click.native.prevent="change('idCard')" label="idCard">身份证</el-radio>
          <el-button @click="toPage">跳转</el-button>
        </el-radio-group>
      </el-header>
      <el-main>
        <el-container>
          <template>
            <el-select     multiple
                           collapse-tags
                       v-model="person.types">
              <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value">
              </el-option>
            </el-select>
          </template>
          <el-input v-model="person.value" @change="valueTrim(person.value)" @keyup.enter.native="searchPerson(person)"
                    placeholder="请输入内容">
            <i slot="suffix" class="el-input__icon el-icon-close" @click="cleanVal"></i>
            <el-button slot="append" icon="el-icon-search" @click="searchPerson(person)"></el-button>
          </el-input>
        </el-container>
      </el-main>
      <el-footer>
        <el-popover
            placement="bottom"
            title="添加用户"
            width="500px"
            trigger="manual"
            v-model="visible">
          <el-container>
            <el-main>
              <el-form :model="personInfo" ref="dynamicValidateForm">
                <el-form-item label="姓名" label-width="100px" prop="name" :rules="[
                  {required:true,message:'姓名不能为空',trigger:'blur'}
                ]">
                  <el-input type="text" name="name" v-model="personInfo.name"></el-input>
                </el-form-item>
                <el-form-item label="年龄" label-width="100px" prop="age" :rules="[
                  {required:true,message:'年龄不能为空',trigger:'blur'}
                ]">
                  <el-input type="number" name="age" v-model="personInfo.age"></el-input>
                </el-form-item>
                <el-form-item label="地址" label-width="100px" prop="address" :rules="[
                  {required:true,message:'地址不能为空',trigger:'blur'}
                ]">
                  <el-input type="text" name="address" v-model="personInfo.address"></el-input>
                </el-form-item>
                <el-form-item label="生日" label-width="100px" prop="birthday">
                  <el-date-picker v-model="personInfo.birthday" format="yyyy-MM-dd"
                                  value-format="yyyy-MM-dd"></el-date-picker>
                </el-form-item>
                <el-form-item label="身份证" prop="idCard" :rules="[
                { required: true, message: '身份证不能为空',trigger:'blur'},
                { pattern:'^[1-9]\\d{5}(18|19|([23]\\d))\\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\\d{3}[0-9Xx]$',message: '身份证格式不正确',trigger: ['blur', 'change']}]"
                              label-width="100px">
                  <el-input type="text" show-word-limit maxlength="18" minlength="18" name="idCard"
                            v-model="personInfo.idCard"></el-input>
                </el-form-item>
                <el-form-item label-width="200px">
                  <el-button type="success" icon="el-icon-check" circle @click="addPerson(personInfo)"></el-button>
                </el-form-item>
              </el-form>
            </el-main>
          </el-container>
          <el-button slot="reference" @click="changeVis()">添加用户</el-button>
        </el-popover>
        <el-main>
          <el-table :data="persons">
            <el-table-column label="姓名" prop="name">
              <template slot-scope="scope">
                <div v-html="scope.row.name"></div>
              </template>
            </el-table-column>
            <el-table-column label="年纪" prop="age"></el-table-column>
            <el-table-column label="身份证" prop="idCard">
              <template slot-scope="scope">
                <div v-html="scope.row.idCard"></div>
              </template>
            </el-table-column>
            <el-table-column label="地址" prop="address">
              <template slot-scope="scope">
                <div v-html="scope.row.address"></div>
              </template>
            </el-table-column>
            <el-table-column label="生日" prop="birthday">
              <template slot-scope="scope">
                <div v-html="scope.row.birthday"></div>
              </template>
            </el-table-column>
            <el-table-column fixed="right"
                             label="操作"
                             width="100">
              <template slot-scope="scope">
                <el-button type="danger" icon="el-icon-delete" size="small" @click="delPerson(scope.row.id)">删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
        <el-pagination layout="prev, pager, next" @current-change="currentChange" @next-click="currentChange"
                       :total="20">
        </el-pagination>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "PersonShow",
  inject:['reload'],
  data() {
    return {
      input: '',
      persons: [{'birthday': '', 'address': '', 'idCard': '', 'name': '', 'age': ''}],
      person: {
        type: '',
        value: '',
        types:[]
      },
      page:{
        pageNum: 0,
        size: 10,
      },
      visible: false,
      personInfo: {'birthday': '', 'address': '', 'idCard': '', 'name': '', 'age': ''},
      birthday: {'year': '', 'month': '', 'day': ''},
      options: [
        {
          label: '姓名',
          value: 'name'
        },
        {
          label: '生日',
          value: 'birthday'
        },
        {
          label: '年龄',
          value: 'age'
        },
        {
          label: '地址',
          value: 'address'
        },
        {
          label: '身份证',
          value: 'idCard'
        }
      ]
    }
  },
  mounted() {
    this.searchPerson(this.person)
  },
  watch:{
    // persons: {
    //   handler(newVal, oldVal) {
    //   },
    //   deep: true,
    //   immediate: true
    // }
  },
  methods: {
    ck(data) {
      this.$axios.get('/doc/ps/list').then(res => {
        this.persons = res.data
        console.log(this.persons)
      })
    },
    searchPerson(data) {
      console.log(this.person)
      this.$axios.post('/product/ps/search', data,{
        params:this.page
      }).then(res => {
        console.log('res',res)
        this.persons = res.data
      })
    },
    change(type) {
      this.person.type = type;
    },
    currentChange(data) {
      // 页码
      this.page.pageNum = (data - 1) * this.page.size
      this.searchPerson(this.person)
    },
    cleanVal() {
      this.person.value = ''
      this.searchPerson(this.person)
    },
    valueTrim(data) {
      data = data.trim()
    },
    addPerson(data) {
      this.$axios.get('product/ps/save', {params: data}).then(res => {
        console.log(res)
        this.visible = false;
        this.personInfo = {};
      });
      this.reload()
    },
    delPerson(data){
      this.$axios.get('product/ps/del', {params: {"id":data}}).then(res => {
        this.reload()
      });
    },
    changeVis() {
      this.visible = !this.visible
      this.personInfo = {}
    },
    toPage(){
      this.$router.push(
          {
            path:'home'
          }
      )
    }

  }
}
</script>

<style scoped>

</style>
