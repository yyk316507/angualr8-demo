<template>
<div style="position:relative;">
  <div class="container">
    <div>
      <div class="step-box">
        <ul>
          <li class="on"><span>1</span>填写信息</li><li><span>2</span>信息核验</li><li><span>3</span>认证成功</li>
        </ul>
      </div>
      <div class="rz_result">
        <div class="result_fail">
          <h6 class="rt_norz">身份信息审核未通过，请重新填写并提交认证信息！</h6>
          <p class="rz_tips"><em>未通过原因：{{reason}}</em></p>
        </div>
      </div>
      <div class="main-form">
        <div class="form-box-person">
          <h2>主体信息</h2>
          <div class="input-box">
            <span class="label"><em>*</em>姓名</span>
            <input class="txt-input name "  :class="{'txt':!read}" type="text" :readonly="read"   @focus="inp1" @blur="inp2"  v-model="name"/>
            <a href="#" @click = 'amend' v-if="read">修改</a>
            <label  v-if="iserr" class="tips-error-noicon"><i class="tips-icon-error"></i>{{errtxt}}</label>
            <p class="pz-tips" v-if="!read">信息审核成功后身份证姓名不可修改；如果名字包含分隔号“·”，请勿省略。</p>
          </div>
          <div class="input-box">
            <span class="label"><em>*</em>职务</span>
            <select class="select-long"  @change="indexSelect($event)" name = "duty" v-model="duty">
              <option value="请选择">请选择</option>
              <option value="产品经理">产品经理</option>
              <option value="研发工程师">研发工程师</option>
              <option value="产品运营">产品运营</option>
              <option value="渠道推广">渠道推广</option>
              <option value="数据分析师">数据分析师</option>
              <option value="商务">商务</option>
              <option value="其他">其他</option>
            </select>
            <label class='tips-error-noicon' v-if="icon==true"><i class="tips-icon-warn" style="margin-left:7px;"></i>待完善</label>
            <label  v-if="iserr1" class="tips-error-noicon"><i class="tips-icon-error"></i>{{errtxt1}}</label>
          </div>
          <div class="input-box">
            <span class="label"><em>*</em>身份证号</span>
            <input class="txt-input txt" type="text" value="51001416108051515023" @focus="inp3" @blur="inp4" v-model="IDnumber"/>
            <el-popover
                    ref="popover4"
                    title="身份证号被占用？"
                    popper-class = "color"
                    placement="right-start"
                    width="300"
                    color='red'
                    trigger="hover">
                    <p class="tipck">1.请您核对身份证号填写是否正确。</p>
                    <p class="tipck">2.一个主体身份只能提交认证一次，若信息填写无误，则说明其他账号已认证过该身份，请您联系客服解决！</p>
            </el-popover>
            <span class="tips-icon-ques" v-popover:popover4 style="margin-left:13px;"></span>
            <label  v-if="iserr2" class="tips-error-noicon"><i class="tips-icon-error"></i>{{errtxt2}}</label>
            <p class="pz-tips">输入18位的二代身份证号，若含字母，字母需大写！</p>
          </div>
          <div class="input-box">
            <span class="label"><em>*</em>身份证照片</span>
            <ul class="input-idcard-imagelist">
              <li>
                <span v-if="!imageUrl">身份证正面</span>
                <el-upload          
                  class="avatar-uploader"
                  action=""
                  name = 'pic'
                  :show-file-list="false"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imageUrl" :src="imageUrl" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="tips-icon-success" v-if="imageUrl"></span>
              </li>
              <li>
                <span v-if="!imageUrl2">身份证反面</span>
                <el-upload          
                  class="avatar-uploader"
                  action=""
                  name = 'pic'
                  :show-file-list="false"
                  :before-upload="beforeAvatarUpload1">
                  <img v-if="imageUrl1" :src="imageUrl1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="tips-icon-success"  v-if="imageUrl1"></span>
              </li>
              <li>
                <span v-if="!imageUrl2">手持身份证</span>
                <el-upload          
                  class="avatar-uploader"
                  action=""
                  name = 'pic'
                  :show-file-list="false"
                  :before-upload="beforeAvatarUpload2">
                  <img v-if="imageUrl2" :src="imageUrl2" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
                <span class="tips-icon-success"  v-if="imageUrl2"></span>
              </li>
            </ul>
            <label  v-if="iserr6" class="tips-error-noicon"><i class="tips-icon-error"></i>{{errtxt6}}</label>
            <div class="input-idcard-tips">
              <p><a href="javascript:;" @click="exampleDialog = true">查看示范</a> </p>
              <el-dialog
                :visible.sync="exampleDialog"
                center
                width="65%"
                :before-close="handleClose">
                <ul class="idCardSf">
                    <li><img style="width:100%;" src="../../assets/images/idCard.png"></li>
                </ul>
                <span slot="footer" class="dialog-footer">
                  <el-button @click="exampleDialog = false" class="know">我知道了</el-button>
                </span>
              </el-dialog>
              <div class="idcard-input-tips-box">
                <p class="idcard-tips">身份证照片要求：</p>
                1.请上传完整、清晰的彩色照片或者扫描件<br/>
                2.图片内容真实有效，不得做任何修改<br/>
                3.手持身份证照需双手持身份证且不遮挡信息，面部和证件信息清晰可见<br/>
                4.若需添加水印请注明【仅供数智信源统一实名认证使用】请勿遮挡有效信息<br/>
                5.支持jpg，png，jpeg，bmp格式，大小不超过10M</div>
            </div>
          </div>
          <div class="input-box input-box-address">
            <span class="label"><em>*</em>联系地址</span>
            <div id="distpicker" class="select-address">
              <select name="province" class="provice1"  @change="citySelect1($event)"></select>
              <select name="city" class="city1"  @change="citySelect2($event)"></select>
              <select name="county" class="county1" style="margin-right:0px;" @change="citySelect($event)"></select>
            </div>
            <label  v-if="iserr3" class="tips-error-noicon"><i class="tips-icon-error"></i>{{errtxt3}}</label>
            <p class="address">
              <input class="txt-input txt" type="text" v-model="address" value="51001416108051515023" @focus="inp5" @blur="inp6"/>
              <label  v-if="iserr4" class="tips-error-noicon"><i class="tips-icon-error"></i>{{errtxt4}}</label>
            </p>
          </div>
          <div class="input-box">
            <span class="label"><em>*</em>QQ</span>
            <input class="txt-input txt" type="text" value="张晓" v-model="qq"  @focus="inp7" @blur="inp8"/>
            <label class='tips-error-noicon' v-if="icon==true"><i class="tips-icon-warn" style="margin-left:7px;"></i>待完善</label>
            <label  v-if="iserr5" class="tips-error-noicon"><i class="tips-icon-error"></i>{{errtxt5}}</label>
            <p class="pz-tips">专职客服将通过QQ为您提供服务</p>
          </div>
          <div class="input-box">
            <span class="label"><em></em>座机</span>
            <input class="txt-input txt" type="text" value="" v-model="tel"/>
            <p class="pz-tips">010-12345678</p>
          </div>
        </div>
      </div> 
      <div>
        <div class="ordinary-auth-box">
          <h2><em>01</em><span>填写银行卡信息</span></h2>
          <p class="warn">银行卡用于核验用户身份一致性，不涉及其他用途，请放心填写</p>
          <div class="form-box-person">
            <div class="input-box">
              <span class="label"><em>*</em>开户名</span>
              <input class="txt-input txt" type="text" value="张晓" v-model= 'againName' @focus="inp9" @blur="inp10"/>
              <label  v-if="iserr7" class="tips-error-noicon"><i class="tips-icon-error"></i>{{errtxt7}}</label>
              <p class="pz-tips">开户名需和认证主体姓名一致</p>
            </div>
            <div class="input-box">
              <span class="label"><em>*</em>银行卡号</span>
              <input class="txt-input txt" type="text" v-model= 'bank' @focus="inp11" @blur="inp12"/>
              <label  v-if="iserr8" class="tips-error-noicon"><i class="tips-icon-error"></i>{{errtxt8}}</label>
              <p class="pz-tips"><em class="warm-icon-small"></em>此卡用于接收核验款项（请确保此卡可用），若卡号和开户名不一致将导致转款失败，请认真核对</p>
            </div>
            <div class="input-box">
              <span class="label"><em>*</em>开户银行</span>
              <input class="txt-input txt" type="text"   v-model="openbank"  @focus="inp13" @blur="inp14"/>
              <label  v-if="iserr9" class="tips-error-noicon"><i class="tips-icon-error"></i>{{errtxt9}}</label>
              <p class="pz-tips">请输入开户银行名称，例：招商银行</p>
            </div>
            <div class="input-box">
              <span class="label"><em>*</em>开户支行</span>
              <input class="txt-input txt" type="text" value="张晓" v-model="subbank"  @focus="inp15" @blur="inp16"/>
              <label  v-if="iserr10" class="tips-error-noicon"><i class="tips-icon-error"></i>{{errtxt10}}</label>
              <p class="pz-tips">请输入开户支行名称，例：海淀区西二旗支行</p>
            </div>
          </div>
          <div class="input-box"><h2 class="gray-title"><em>02</em><span>主体信息审核成功后，系统将向此银行卡中转入一笔小额款项用于银行卡核验</span></h2></div>
          <div class="input-box"><h2 class="gray-title"><em>03</em><span>您收到核验款项后，在页面按提示输入核验金额</span></h2></div>
          <div class="input-box"><h2 class="gray-title"><em>04</em><span>核验通过，实名认证成功</span></h2></div>
        </div>
      </div>
    </div>
  </div>
  <div class="input-btn-box" id="footerBtn1"  :class="{isFixed:searchBarFixed}">
      <div class="btnbox">
              <button class="btn line_btn mr40" @click="prev">返回</button>
              <button class="btn bg_btn" @click="go">确认提交</button>
      </div>
      <div class="input-agreen"><input type="checkbox" name="" id="isCheck"/>
          <div class="sim-input-agreen" v-on:click="checkAgree" v-bind:class="{checked: isChecked }"></div>
            <!--<div class="sim-input-agreen" v-bind:class="{'checked':check}" v-bind:click="checkFunc"></div>-->
          <label  style="color:#676767;" v-on:click="checkAgree">我已阅读并同意<a href="#"  @click="approveDialog = true">实名认证服务协议</a>的条款</label>
          
      </div>    
  </div>
  <el-dialog
                :visible.sync="approveDialog"
                  center
                  width="40%"
                  :before-close="handleClose">
                <div class="agreement"> 
                <p class="title">统一实名认证服务协议</p>
                <p>一.关于实名认证</p>
                <ul>  
                  <li>1.数智信源统一实名认证为了更好的保障用户权益，将采用权威专业的实名认证机制来确保用户身份信息的真实性与合法性。</li>
                  <li>2.用户同意数智信源统一实名认证可自行委托第三方审核机构对其提交的资料和信息进行甄别核实，并在完成所有审核流程后，作出认证成功或者认证失败的判断，生成认证标识及认证信息，用户应当予以配合。 </li>
                  <li>数智信源统一实名认证有权自行委托第三方审核机构甄别核实包括但不限于以下内容：</li>
                  <li>2.1用户是否拥有合法主体资质，以及是否取得提供服务或内容相应的权利或授权；</li>
                  <li>2.2账号主体身份，以及是否经过用户明确授权；</li>
                  <li>2.3账号主体身份，以及是否经过用户明确授权；</li>
                  <li>其他数智信源统一实名认证或第三方审核机构认为需要审核的内容。</li>
                </ul>
                <p>二.关于实名认证资料</p>
                <ul>  
                  <li>1.用户只要在规定的时间内按我们的要求提供真实、有效、完整的审核资料，就能通过实名认证。用户提供的身份信息、联系人及联络信息，相关图片、文件等均由用户自行提供，用户依 法应对其提供的任何信息承担全部责任。</li>
                  <li>2.任何单位或个人认为数智信源统一实名认证内容（包括但不限于数智信源统一实名认证用户提供的个人信息或相关文件）可能涉嫌侵犯其合法权益，应该及时向数智信源统一实名认证提出书面权利通知，并提供身份证明、权属证明、具体链接（URL）及详细侵权情况证明。数智信源统一实名认证在收到上述法律文件后，将会依法尽快移除相关涉嫌侵权的内容</li>
                </ul>
                <p>三.关于实名认证信息使用 </p>
                <ul>  
                  <li>1.数智信源统一实名认证不会向任何无关第三方提供、出售、出租、分享或交易用户的个人注册信息和身份相关信息，除非事先得到用户的许可，或该第三方和数智信源统一实名认证单独或共同为用户提供服务，且在该服务结束后，其将被禁止访问包括其以前能够访问的所有这些资料。</li>
                  <li>2.数智信源统一实名认证亦不允许任何第三方以任何手段收集、编辑、出售或者无偿传播用户的个人注册信息和身份相关信息。任何数智信源统一实名认证用户如从事上述活动，一经发现，数智信源统一实名认证有权立即终止与该用户的服务协议。</li>
                </ul>
                <p>四.用户隐私保护 </p>
                <ul>  
                  <li>1.数智信源统一实名认证尊重并保护所有使用统一实名认证服务的用户个人隐私权。为了给用户提供更准确的服务，数智信源统一实名认证会按照本隐私权政策的规定使用和披露用户的相关信息。但数智信源统一实名认证将以高度的勤勉、审慎义务对待这些信息。</li>
                  <li>2.除本隐私权政策另有规定外，在未征得用户事先许可的情况下，数智信源统一实名认证不会将这些信息对外披露或向第三方提供。</li>
                </ul>
                <p>五.免责声明 </p>
                <ul>  
                  <li>1.用户明确同意其使用数智信源统一实名认证服务所存在的风险将完全由其自己承担；因其使用数智信源统一实名认证服务而产生的一切后果也由其自己承担，数智信源统一实名认证对用户不承担任何责任。</li>
                  <li>2.数智信源统一实名认证不担保服务一定能满足用户的要求，也不担保服务不会中断，对服务的及时性、安全性、准确性也都不作担保。</li>
                  <li>3.数智信源统一实名认证不保证为向用户提供便利而设置的外部链接的准确性和完整性，同时，对于该等外部链接指向的不由数智信源统一实名认证实际控制的任何网页上的内容，数智信源统一实名认证不承担任何责任。 对于因不可抗力或数智信源统一实名认证不能控制的原因造成的服务中断或其它缺陷，数智信源统一实名认证不承担任何责任，但将尽力减少因此而给用户造成的损失和影响。</li>
                  <li>4.用户同意，对于数智信源统一实名认证向用户提供的下列产品或者服务的质量缺陷本身及其引发的任何损失，数智信源统一实名认证无需承担任何责任：</li>
                  <li>1）数智信源统一实名认证向用户免费提供的各项服务；</li>
                  <li>2）数智信源统一实名认证向用户赠送的任何产品或者服务；</li>
                  <li>3）数智信源统一实名认证向收费服务用户附赠的各种产品或者服务。</li>
                  </ul>
                </div>
                  <span slot="footer" class="dialog-footer">
                    <el-button @click="approveDialog = false" class="know">我知道了</el-button>
                  </span>
  </el-dialog>
</div>
</template>

<script>
import qs from 'qs';
import $ from 'jquery';
import Util from '../../assets/js/common.js'; 
import 'distpicker';
// $("#distpicker").distpicker();
export default {
    data(){
      return {
        name : '',
        duty : '',
        city: '',
        province : '',
        county : '',
        IDnumber : '',
        address : '',
        qq : '',
        againName : '',
        bank : '',
        openbank : '',
        subbank : '',
        tel: '',
        iserr : false,//姓名的错误提示
        iserr1 : false,//职务的错误提示
        iserr2 : false,//身份证号错误提示
        iserr3 : false,//联系地址错误提示
        iserr4 : false,//详细地址错误提示
        iserr5 : false,//qq错误提示
        iserr6 : false,//图片提示错误
        iserr7 : false,//开户名错误提示是否显示
        iserr8 : false,//银行卡号错误提示是否显示
        iserr9 : false,//开户银行错误提示是否显示
        iserr10 : false,//开户支行错误提示是否显示
        errtxt : '',//姓名的错误提示文本
        errtxt1 : '',//职务的错误提示文本
        errtxt2 : '',//身份号的错误提示文本
        errtxt3 : '',//联系地址错误提示文本
        errtxt4 : '',//详细联系地址错误提示文本
        errtxt5 : '',//qq错误提示文本
        errtxt6 : '',//图片提示错误文本
        errtxt7 : '',//开户名错误提示文本
        errtxt8 : '',//银行卡号错误提示文本
        errtxt9 : '',//开户银行错误提示文本
        errtxt10 : '',//开户支行错误提示文本
        imageUrl: '',//上传图片身份证正面
        imageUrl1 : '',//上传图片身份证反面
        imageUrl2 : '',//上传图片手持身份证
        img: '',//返给服务器的上传图片身份证正面src
        img1 : '',//返给服务器的上传图片身份证反面src
        img2 : '',//返给服务器的上传图片手持身份证src
        exampleDialog : false,//示范弹层
        approveDialog : false,//实名认证弹层
        isChecked: true,//同意的复选框
        read : true,//姓名只是可读
        originId : '',//原来的身份证号
        id : '',//修改信息需要返给服务器
        reason: '',
        icon:false,//老用户进来的提示
        searchBarFixed : false
      }
    },
    components:{
      
    },
    mounted(){ 
      var _that = this;
      this.$http.post(Util.url+"/realNameUtils/getBaseInfo").then(function(res){
          if(res.data.code == 100){
              _that.name = res.data.content.name
              _that.duty = res.data.content.business
              _that.IDnumber = res.data.content.idCardNum
              _that.originId = res.data.content.idCardNum
              _that.imageUrl = res.data.content.idFrontImg
              _that.imageUrl1 = res.data.content.idBackImg
              _that.imageUrl2 = res.data.content.idHandedImg
              _that.province = res.data.content.province
              _that.city = res.data.content.city
              _that.county = res.data.content.county
              _that.address = res.data.content.address
              _that.qq = res.data.content.qq
              _that.bank = res.data.content.bankCardNum
              _that.subbank = res.data.content.bankSubName
              _that.openbank = res.data.content.bankName
              _that.againName = res.data.content.bankUsername
              _that.id = res.data.content.id
              _that.reason  = res.data.content.auditReason
              _that.tel = res.data.content.tel
              if(res.data.content.field2=='12' ){
                _that.icon = true
              }else{
                _that.icon = false
              }
              console.log(_that.icon)
              if(!_that.reason){
                _that.reason ="信息待完善"
              }
              if (_that.province != "" && _that.county != "") {
                  $('#distpicker').distpicker({
                      province: _that.province,
                      city: _that.city,
                      district: _that.county
                  });
              } else {
                  $("#distpicker").distpicker({autoSelect:false});
              }
              if(!_that.duty ){
                _that.duty = "请选择"
              }
          }else{
            _that.duty = "请选择"
            $("#distpicker").distpicker({autoSelect:false});
          }
        }).catch(function(err){
          this.duty = "请选择"
          $("#distpicker").distpicker({autoSelect:false});
        })
        window.addEventListener('scroll', this.handleScroll)
    },
    methods:{
      indexSelect(event){//获取职务下拉列表的值
        if(event.target.value=="请选择"){
          this.iserr1 = true;
          this.errtxt1 = '请选择职务'
        }else{
          this.iserr1 = false;
          this.errtxt1 = ''
          this.duty = event.target.value
        }
      },
      citySelect1(event){
        this.province = event.target.value
      },
      citySelect2(event){
        this.city = event.target.value
      },
      citySelect(event){//获取联系地址下拉列表的值
        if(event.target.value==""){
          this.iserr3 = true;
          this.errtxt3 = '请选择联系地址'
        }else{
          this.iserr3 = false;
          this.errtxt3 = ''
          this.county = event.target.value
        }
      },
      inp1 : function(){//姓名的提示错误是否显示
        this.iserr = false;
        this.errtxt = '';
      },
      inp2 : function(){
        if(!$.trim(this.name)){
          this.iserr = true;
          this.errtxt = '请输入您的姓名'
        }else{
          this.iserr = false;
          this.errtxt = ''
        }
      },
      inp3 : function(){//身份证的提示错误是否显示
        this.iserr2 = false;
        this.errtxt2 = '';
      },
      inp4 : function(){
        if(!$.trim(this.IDnumber)){
          this.iserr2 = true;
          this.errtxt2 = '请输入您的身份证号'
        }else{ 
          if(Util.validateIdCard(this.IDnumber)){
            if(this.originId==this.IDnumber){
                this.iserr2 = false;
                this.errtxt2 = ''
            }else{
              var data = {
                idCardNum : this.IDnumber,
                type :'natural'
              }  
              var _that = this;
              this.$http.post(Util.url+"/realNameUtils/checkUniqueIdCardNum",qs.stringify(data)).then(function(res){
                if(res.data){
                  _that.iserr2 = false;
                  _that.errtxt2 = ''
                }else{
                  _that.iserr2 = true;
                  _that.errtxt2 = '此身份证号被占用，请重新输入'
                }
              })
            }  
          }else{
            this.iserr2 = true;
            this.errtxt2 = '身份证号格式不符合要求，请重新输入'
          }
          
        }
      },
      inp5 : function(){//详细联系地址的提示错误是否显示
        this.iserr4 = false;
        this.errtxt4 = '';
      },
      inp6 : function(){
        if(!$.trim(this.address)){
          this.iserr4 = true;
          this.errtxt4 = '请输入您的详细联系地址'
        }else{
          this.iserr4 = false;
          this.errtxt4 = ''
        }
      },
      inp7 : function(){//QQ的提示错误是否显示
        this.iserr5 = false;
        this.errtxt5 = '';
      },
      inp8 : function(){
        if(!$.trim(this.qq)){
          this.iserr5 = true;
          this.errtxt5 = '请输入您的QQ'
        }else{
          var tel = /^[1-9][0-9]{4,}$/  //判断qq格式是不是正确
          if(tel.test(this.qq)){
            this.iserr5 = false;
            this.errtxt5 = ''
          }else{
            this.iserr5 = true;
            this.errtxt5 = '您输入的qq格式不正确，请重新输入'
          }
          
        }
      },
      inp9:function(){//开户名的错误提示是否显示
        this.iserr = false;
        this.errtxt = '';
      },
      inp10:function(){
        if(!$.trim(this.againName)){
          this.iserr7 = true;
          this.errtxt7 = '请输入银行卡开户名！';
        }else{
          if(this.name!=this.againName){
            this.iserr7 = true;
            this.errtxt7 = '开户名和主体姓名不一致';
          }else{
            this.iserr7 = false;
            this.errtxt7 = '';
          }  
        } 
      },
      inp11:function(){//银行卡号的错误提示是否显示
        this.iserr8 = false;
        this.errtxt8 = '';
      },
      inp12:function(){
        if(!$.trim(this.bank)){
          this.iserr8 = true;
          this.errtxt8 = '请输入银行卡号！';
        }else{
          if(Util.luhnCheck(this.bank)){
            this.iserr8 = false;
            this.errtxt8 = '';
          }else{
            this.iserr8 = true;
            this.errtxt8 =  '银行卡号格式不符合规范';
          } 
        } 
      },
      inp13:function(){//开户银行的错误提示是否显示
        this.iserr9 = false;
        this.errtxt9 = '';
      },
      inp14:function(){
        if(!$.trim(this.openbank)){
          this.iserr9 = true;
          this.errtxt9 = '请输入开户银行';
        }else{
            this.iserr9 = false;
            this.errtxt9 =  '';
        } 
      },
      inp15:function(){//开户支行的错误提示是否显示
        this.iserr10 = false;
        this.errtxt10 = '';
      },
      inp16:function(){
        if(!$.trim(this.subbank)){
          this.iserr10 = true;
          this.errtxt10 = '请输入开户银行';
        }else{
            this.iserr10 = false;
            this.errtxt10 =  '';
        } 
      },
      checkAgree: function () { 
        this.isChecked = !this.isChecked;
        $('#isCheck').attr('checked',this.isChecked);
      },
      beforeAvatarUpload(file) {//正面图片上传的验证
        const isJPG = file.type === 'image/jpg';
        const isJPEG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isBMP = file.type === 'image/bmp';
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isJPG && !isJPEG && !isPNG && !isBMP) {
          this.$message.error('上传头像图片只能是 JPG、JPEG、PNG、BMP 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 10MB!');
        }
        if((isJPG || isJPEG || isPNG || isBMP) && isLt2M){
          let fd = new FormData()
          fd.append('pic', file);
          var  _that = this;
          this.$http.post(Util.url+"/upload/upload",fd).then(function(res){
            _that.imageUrl = res.data.content.serviceaPath;
            _that.img =  res.data.content.dataPath;
              if(!_that.imageUrl || !_that.imageUrl1 || !_that.imageUrl2){
                _that.iserr6 = true;
                _that.errtxt6 =  '请上传身份证照片'
              }else if(_that.imageUrl && _that.imageUrl1 && _that.imageUrl2){
                _that.iserr6 = false;
                _that.errtxt6 =  ''
              }
          })
        }
        return isJPG && isLt2M && isJPEG && isPNG && isBMP  ;
      },
      beforeAvatarUpload1(file) {//反面上传图片的验证
        const isJPG = file.type === 'image/jpg';
        const isJPEG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isBMP = file.type === 'image/bmp';
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isJPG && !isJPEG && !isPNG && !isBMP) {
          this.$message.error('上传头像图片只能是 JPG、JPEG、PNG、BMP 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 10MB!');
        }
        if((isJPG || isJPEG || isPNG || isBMP) && isLt2M){
          let fd = new FormData()
          fd.append('pic', file);
          var  _that = this;
          this.$http.post(Util.url+"/upload/upload",fd).then(function(res){
            _that.imageUrl1 = res.data.content.serviceaPath;
            _that.img1 =  res.data.content.dataPath;
              if(!_that.imageUrl || !_that.imageUrl1 || !_that.imageUrl2){
              _that.iserr6 = true;
              _that.errtxt6 =  '请上传身份证照片'
            }else if(_that.imageUrl && _that.imageUrl1 && _that.imageUrl2){
              _that.iserr6 = false;
              _that.errtxt6 =  ''
            }
          })
        }
        return isJPG && isLt2M && isJPEG && isPNG && isBMP  ;
      },
      beforeAvatarUpload2(file) {//手持图片上传的验证
        const isJPG = file.type === 'image/jpg';
        const isJPEG = file.type === 'image/jpeg';
        const isPNG = file.type === 'image/png';
        const isBMP = file.type === 'image/bmp';
        const isLt2M = file.size / 1024 / 1024 < 10;
        if (!isJPG && !isJPEG && !isPNG && !isBMP) {
          this.$message.error('上传头像图片只能是 JPG、JPEG、PNG、BMP 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 10MB!');
        }
        if((isJPG || isJPEG || isPNG || isBMP) && isLt2M){
          let fd = new FormData()
          fd.append('pic', file);
          var  _that = this;
          this.$http.post(Util.url+"/upload/upload",fd).then(function(res){
            _that.imageUrl2 = res.data.content.serviceaPath;
            _that.img2 =  res.data.content.dataPath;
            if(!_that.imageUrl || !_that.imageUrl1 || !_that.imageUrl2){
              _that.iserr6 = true;
              _that.errtxt6 =  '请上传身份证照片'
            }else if(_that.imageUrl && _that.imageUrl1 && _that.imageUrl2){
              _that.iserr6 = false;
              _that.errtxt6 =  ''
            }
          })
        }
        return isJPG && isLt2M && isJPEG && isPNG && isBMP  ;
      },
      handleClose(done) {//关闭查看    
          done();
      },
      amend:function(){
          this.read = false//可编辑
      },
      handleScroll () {
        var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
        var offsetTop = document.querySelector('#footerBtn1').offsetTop
        if (scrollTop < 1300) {
          this.searchBarFixed = true
        } else {
          this.searchBarFixed = false
        }
      },
      prev:function(){
        this.$router.push({path:'/user/fail'})//点击确定提交跳到审核页面
      },
      go:function(){
        var data = {
          authType : 0,
          id : this.id,
          name : this.name,
          business : this.duty,
          idCardNum : this.IDnumber,
          idFrontImg : this.img || '',
          idBackImg : this.img1 || '',
          idHandedImg : this.img2 || '',
          province : this.province,
          city : this.city,
          county	: this.county,
          address : this.address,
          qq : this.qq,
          bankCardNum : this.bank,
          bankSubName	: this.subbank,
          bankName : this.openbank,
          bankUsername : this.againName,
          tel : this.tel
        }     
          this.inp2()//判断姓名
          this.inp4()//判断身份证号
          this.inp6()//判断详细联系地址
          this.inp8()//qq
          this.inp10()//开户名
          this.inp12()//银行卡号
          this.inp14()//银行名称
          this.inp16()//银行支行
          if(!this.isChecked){
              layer.msg('请阅读并勾选《用户注册协议》 ')
            }
          if(!this.imageUrl || !this.imageUrl1 || !this.imageUrl2){
            this.iserr6 = true;
            this.errtxt6 =  '请上传身份证照片'
          }else if(this.imageUrl && this.imageUrl1 && this.imageUrl2){
            this.iserr6 = false;
            this.errtxt6 =  ''
          }
          console.log($('.county1').val())
          if($('.county1').text()=="—— 区 ——"){
            this.iserr3 = true;
            this.errtxt3 = "请选择联系地址"
          }else{
            this.iserr3 = false;
            this.errtxt3 = ""
          }
          if(this.duty=="请选择" || this.duty==""){
            this.iserr1 = true;
            this.errtxt1 = "请选择职务"
          }else{
            this.iserr1 = false;
            this.errtxt1 = ""
          }
          var _that =  this;
          if(!this.iserr && !this.iserr1 && !this.iserr2 && !this.iserr3 && !this.iserr4 && !this.iserr5 && !this.iserr6 && !this.iserr7 && !this.iserr8 && !this.iserr9 && !this.iserr10 && this.isChecked){
          this.$http.post(Util.url+"/naturalRealName/saveBaseInfo",qs.stringify(data)).then(function(res){
              if(res.data.code == 100){
                _that.$router.push({path:'/user/review'})//点击确定提交跳到审核页面
                }
            })
          }else {
            this.$nextTick(function(){
              var offsetTop = $('.tips-icon-error').eq(0).offset().top
              $(document).scrollTop(offsetTop-90)
            })
          }
          
        }
        

    },
    destroyed () {
          window.removeEventListener('scroll', this.handleScroll)
        }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .isFixed{
    position:fixed;
    bottom:0;
    z-index:500;
    width: 100%;
  }
    .tipck{
        margin-left:20px;
        line-height:26px;
        margin-right:20px;
      }
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 70px;
      color: #c5c5c5;
      width: 142px;
      height: 142px;
      line-height: 170px;
      text-align: center;
    }
    .avatar {
      width: 140px;
      height: 140px;
      display: block;
    }
    .know{
      background:#ff8a33;
      color:#fff;
      width: 160px;
      height: 50px;
      line-height: 50px;
      padding: 0;
      font-size: 16px;
    }
    .know:focus{
      border:none;
      outline:none;
    }
  .warn{
    color:#969696;
    padding-top:30px;
  }
  //点击按钮上一步  确定
  .setbtn{
      display:inline-block;
      width:160px;
      height:50px;
      border:1px solid #ff6d00;
      color:#ff6d00;
      border-radius:5px;
      background:none;
      margin-left:100px;
      background:#fff;
    }
  .nobtn{
      background:#a1a1a1;
      color:#fff;
      display:inline-block;
      width:160px;
      height:50px;
      border-radius:5px;
      margin-left:100px;
      border:1px solid #a1a1a1;
    }
  .idCardSf{
    height: 400px;
}
</style>

