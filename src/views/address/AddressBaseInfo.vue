<template>
    <div>
      <el-container>
        <el-header>

        </el-header>
        <el-main>
          <el-form  ref="addressReal" :model="addressReal" label-width="80px">

          <el-row>
                <el-col  :span="12">
                  <el-form-item  label="国家" >
                    <el-select  @change="countryChange" v-model="addressReal.country"  placeholder="选择国家">
                        <el-option  v-for="item in countryList"
                                    :key="item.key"
                                    :value="item.key"
                                    :label="item.value"
                        >
                        </el-option>
                    </el-select>
<!--                    <el-input type="primary" v-model="addressReal.country" ></el-input>-->
                  </el-form-item>
                </el-col>
              <el-col  :span="12">
                <el-form-item  label="省份" >
                  <el-select v-model="addressReal.city" placeholder="选择城市"  :disabled="addressReal.country === ''">
                    <el-option v-for="item  in cityList"
                            :key="item.key"
                            :value="item.key"
                            :label="item.value"
                    >

                    </el-option>
                  </el-select>
                  <el-input type="primary" v-model="addressReal.city"></el-input>
                </el-form-item>
              </el-col>
          </el-row>
          <el-row>
            <el-col  :span="12">
              <el-form-item  label="地域" >
                <el-input type="primary" v-model="addressReal.territory" ></el-input>
              </el-form-item>
            </el-col>
            <el-col  :span="12">
              <el-form-item  label="特产" >
                <el-input type="primary" v-model="addressReal.speciality"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
            <el-row>
              <el-col>
                <el-form-item label="描述">
                  <el-input type="textarea" v-model="addressReal.content"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="12">
                <el-form-item label="创建日期">
                  <el-date-picker type="datetime" v-model="addressReal.createTime">

                  </el-date-picker>
                </el-form-item>
              </el-col>
              <el-col :span="12">
                <el-form-item label="修改日期">
                  <el-date-picker type="datetime"  v-model="addressReal.modifyTime">

                  </el-date-picker>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-button type="primary" icon="el-icon-location">保存</el-button>
            </el-row>
          </el-form>
        </el-main>

      </el-container>
    </div>
</template>

<script>
export default {
  name: "AddressBaseInfo",
  data(){
    return {
      addressReal: {
        createTime:'',
        modifyTime:'',
        country:'',
        city:''
      },
      countryList:[{
       key:'CHINA', value:'中国'
      },
        {
          key:'USA', value:'美国'
        }],
      cityList:[
        {
          key:'123',
          value:'北京'
        }
      ]
    }
  },
  methods:{
    countryChange(row){
      console.log(row)
    }
  }
}
</script>

<style scoped>

</style>
