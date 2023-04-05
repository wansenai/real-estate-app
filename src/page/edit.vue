<template>
    <div class="container">
        <div class="sellerBox">
            <div class="sellerTitle">
                卖方信息
            </div>
            <el-form :inline="true" :model="formInfo" class="demo-form-inline" size="mini">
                <el-form-item label="出卖人姓名">
                    <el-input v-model="formInfo.sellerName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="出卖人身份证号">
                    <el-input v-model="formInfo.sellerIdNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="出卖人通讯地址">
                    <el-input v-model="formInfo.sellerAdress" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="出卖人邮政编码">
                    <el-input v-model="formInfo.sellerPostNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="出卖人电话">
                    <el-input v-model="formInfo.sellerPhoneNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="出卖共有权人姓名">
                    <el-input v-model="formInfo.sellCommonName" placeholder="请输入" @change="sellCommonNameChange"></el-input>
                </el-form-item>
                <el-form-item label="出卖共有权人身份证号">
                    <el-input v-model="formInfo.sellCommonIdNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="出卖共有权人通讯地址">
                    <el-input v-model="formInfo.sellCommonAdress" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="出卖共有权人邮政编码">
                    <el-input v-model="formInfo.sellCommonPostNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="出卖共有权人电话">
                    <el-input v-model="formInfo.sellCommonPhoneNum" placeholder="请输入"></el-input>
                </el-form-item>


            </el-form>
        </div>
        <div class="bugerBox">
            <div class="bugerTitle">
                买方信息
            </div>
            <el-form :inline="true" :model="formInfo" class="demo-form-inline" size="mini">
                <el-form-item label="买受人姓名">
                    <el-input v-model="formInfo.buyerName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="买受人身份证号">
                    <el-input v-model="formInfo.buyerIdNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="买受人通讯地址">
                    <el-input v-model="formInfo.buyerAdress" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="买受人邮政编码">
                    <el-input v-model="formInfo.buyerPostNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="买受人电话">
                    <el-input v-model="formInfo.buyerPhoneNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="共同买受人姓名">
                    <el-input v-model="formInfo.buyerCommonName" placeholder="请输入" @change="buyerCommonName"></el-input>
                </el-form-item>
                <el-form-item label="共同买受人身份证号">
                    <el-input v-model="formInfo.buyerCommonIdNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="共同买受人通讯地址">
                    <el-input v-model="formInfo.buyerCommonAdress" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="共同买受人邮政编码">
                    <el-input v-model="formInfo.buyerCommonPostNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="共同买受人电话">
                    <el-input v-model="formInfo.buyerCommonPhoneNum" placeholder="请输入"></el-input>
                </el-form-item>


            </el-form>
        </div>
        <div class="bugerBox">
            <div class="bugerTitle">
                房产信息
            </div>
            <el-form :inline="true" :model="formInfo" class="demo-form-inline" size="mini">
                <el-form-item label="居间方">
                    <el-input v-model="formInfo.intermediaryName" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="居间方营业执照号">
                    <el-input v-model="formInfo.intermediaryNumber" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="房屋坐落位置">
                    <el-input v-model="formInfo.houseAdress" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="建筑面积">
                    <el-input v-model="formInfo.houseArea" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="总高">
                    <el-input v-model="formInfo.houseHeight" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="地上">
                    <el-input v-model="formInfo.aboveGround" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="地下">
                    <el-input v-model="formInfo.underGround" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="所在楼层">
                    <el-input v-model="formInfo.storey" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="产权性质">
                    <el-input v-model="formInfo.properties" placeholder="请输入"></el-input>
                    <div class="tipsBox">提示：1、商品房，2、已购公房，3可交易经济适用房，4、按经济适用房管理，5、其他房屋</div>
                </el-form-item>
                <el-form-item label="产权证号">
                    <el-input v-model="formInfo.propertyNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="共有权号">
                    <el-input v-model="formInfo.propertyCommonNum" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="填发单位">
                    <el-input v-model="formInfo.unit" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="房本填发日期">
                    <!-- <el-date-picker v-model="formInfo.houseData" type="date" placeholder="选择日期">
                    </el-date-picker> -->
                    <el-input v-model="formInfo.houseData" placeholder="请输入"></el-input>
                </el-form-item>


            </el-form>
        </div>
        <div class="bugerBox">
            <div class="bugerTitle">
                其他信息
            </div>
            <el-form :inline="true" :model="formInfo" class="demo-form-inline" size="mini">
                <el-form-item label="成交价格（含网签）">
                    <el-input v-model="formInfo.transactionPrice" placeholder="请输入"
                        @change="transactionPricechange"></el-input>
                </el-form-item>
                <el-form-item label="网签价">
                    <el-input v-model="formInfo.signatruePrice" placeholder="请输入" @change="signatruePricechange"></el-input>
                </el-form-item>
                <el-form-item label="装饰装修补偿款">
                    <el-input v-model="formInfo.compensatePrice" placeholder="请输入"
                        @change="compensatePricechange"></el-input>
                </el-form-item>
                <el-form-item label="抵押情况">
                    <el-input v-model="formInfo.mortgageSituation" placeholder="请输入"
                        @change="mortgageSituationChange"></el-input>
                    <div class="tipsBox">
                        提示：1.已抵押 2.未抵押
                    </div>
                </el-form-item>
                <el-form-item label="抵押权人">
                    <el-input v-model="formInfo.mortgagePerson" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="抵押登记日期">
                    <!-- <el-input v-model="formInfo.mortgageData" placeholder="请输入"></el-input> -->
                    <el-date-picker v-model="formInfo.mortgageData" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy年MM月dd日">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="租赁情况">
                    <el-input v-model="formInfo.Lease" placeholder="请输入"></el-input>
                    <div class="tipsBox">
                        提示：1.已出租 2.未出租
                    </div>
                </el-form-item>
                <el-form-item label="权利限制情况">
                    <el-input v-model="formInfo.limitation" placeholder="请输入"></el-input>
                    <div class="tipsBox">
                        提示：1.无任何权利限制 2.存在查封等
                    </div>
                </el-form-item>
                <el-form-item label="特殊情况">
                    <el-input v-model="formInfo.exceptional" placeholder="请输入"></el-input>
                    <div class="tipsBox">
                        提示：无特殊情况此处填x
                    </div>
                </el-form-item>
                <!-- <el-form-item label="居住权情况">
                    <el-input v-model="formInfo.liveSituation" placeholder="请输入"></el-input>
                    <div class="tipsBox">
                        提示：1.已出租 2.未出租
                    </div>
                </el-form-item> -->
                <el-form-item label="贷款情况">
                    <el-input v-model="formInfo.loan" placeholder="请输入" @change="loanchange"></el-input>
                    <div class="tipsBox">
                        提示：1.全款 2.贷款
                    </div>
                </el-form-item>
                <el-form-item label="贷款金额">
                    <el-input v-model="formInfo.loanPrice" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="未批贷如何处理">
                    <el-input v-model="formInfo.unLoan" placeholder="请输入"></el-input>
                    <div class="tipsBox">
                        提示：1.补齐全款 2.继续申请其他贷款
                    </div>
                </el-form-item>
                <el-form-item label="多少日内转移登记">
                    <el-input v-model="formInfo.daysData" placeholder="请输入"></el-input>
                </el-form-item>

                <el-form-item label="税费承担方式">
                    <el-input v-model="formInfo.taxation" placeholder="请输入"></el-input>
                    <div class="tipsBox">
                        提示：1.买受人承担 2.另行约定详情
                    </div>
                </el-form-item>
                <el-form-item label="税费承担方式详情">
                    <el-input v-model="formInfo.taxationDetail" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="房屋交付">
                    <el-input v-model="formInfo.housePay" placeholder="请输入" @change="housePaychange"></el-input>
                    <div class="tipsBox">
                        提示：1办理完毕过户手续，2收到购房款，3其他具体时间或条件
                    </div>
                </el-form-item>
                <el-form-item label="房屋交付详情">
                    <el-input v-model="formInfo.housePayDetail" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="签约日期">
                    <!-- <el-input v-model="formInfo.contractData" placeholder="请输入"></el-input> -->
                    <el-date-picker v-model="formInfo.contractData" type="date" placeholder="选择日期" format="yyyy 年 MM 月 dd 日"
                        value-format="yyyy年MM月dd日">
                    </el-date-picker>
                </el-form-item>

                <el-form-item label="佣金全额">
                    <el-input v-model="formInfo.commission" placeholder="请输入" @change="commissionchange"></el-input>
                </el-form-item>
                <el-form-item label="甲方承担佣金">
                    <el-input v-model="formInfo.jiaCommission" placeholder="请输入" @change="jiaCommissionchange"></el-input>
                </el-form-item>
                <el-form-item label="乙方承担佣金">
                    <el-input v-model="formInfo.yiCommission" placeholder="请输入" @change="yiCommissionchange"></el-input>
                </el-form-item>
                <el-form-item label="定金总额">
                    <el-input v-model="formInfo.frontMoney" placeholder="请输入" @change="frontMoneychange"></el-input>
                </el-form-item>
                <el-form-item label="第一笔付定金时间">
                    <!-- <el-input v-model="formInfo.firstMoneyData" placeholder="请输入"></el-input> -->
                    <el-date-picker v-model="formInfo.firstMoneyData" type="date" placeholder="选择日期"
                        format="yyyy 年 MM 月 dd 日" value-format="yyyy年MM月dd日">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="第一笔付定金金额">
                    <el-input v-model="formInfo.firstMoney" placeholder="请输入" @change="firstMoneyChange"></el-input>
                </el-form-item>
                <el-form-item label="剩余付定金时间">
                    <!-- <el-input v-model="formInfo.secondMoneyData" placeholder="请输入"></el-input>
                     -->
                    <el-date-picker v-model="formInfo.secondMoneyData" format="yyyy 年 MM 月 dd 日" value-format="yyyy年MM月dd日"
                        type="date" placeholder="选择日期">
                    </el-date-picker>
                </el-form-item>
                <el-form-item label="剩余付定金金额">
                    <el-input v-model="formInfo.secondMoney" placeholder="请输入" @change="secondMoneyChange"></el-input>
                </el-form-item>
                <el-form-item label="解押事宜">
                    <el-input v-model="formInfo.release" placeholder="请输入" @change="releaseChange"></el-input>
                    <div class="tipsBox">
                        提示：1.无抵押，2约定时间解押，3自行输入
                    </div>
                </el-form-item>
                <el-form-item label="解押选2（解押时间）">
                    <el-input v-model="formInfo.release2" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="解押选3">
                    <el-input v-model="formInfo.release3" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="第一笔首付时间或条件">
                    <el-input v-model="formInfo.firstPriceData" placeholder="请输入"></el-input>
                </el-form-item>

                <el-form-item label="第一笔首付金额">
                    <el-input v-model="formInfo.firstPrice" placeholder="请输入" @change="firstPriceChange"></el-input>
                </el-form-item>
                <el-form-item label="第二笔首付时间或条件">
                    <el-input v-model="formInfo.secondPriceData" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="第二笔首付金额">
                    <el-input v-model="formInfo.secondPrice" placeholder="请输入" @change="secondPriceChange"></el-input>
                </el-form-item>
                <el-form-item label="第三笔首付时间或条件">
                    <el-input v-model="formInfo.thirdPriceData" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="第三笔首付金额">
                    <el-input v-model="formInfo.thirdPrice" placeholder="请输入" @change="thirdPriceChange"></el-input>
                </el-form-item>

                <el-form-item label="何时办理贷款手续">
                    <el-input v-model="formInfo.provideTime" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="何时办理过户">
                    <el-input v-model="formInfo.transferTime" placeholder="请输入"></el-input>
                    <div class="tipsBox">
                        提示：1.无抵押，2约定时间解押，3自行输入
                    </div>
                </el-form-item>
                <el-form-item label="何时办理过户选3">
                    <el-input v-model="formInfo.transferTime2" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="何时办理过户选4">
                    <el-input v-model="formInfo.transferTime3" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="物业交割时间或条件">
                    <el-input v-model="formInfo.joinTime" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="物业交割方式">
                    <el-input v-model="formInfo.jointype" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="物业交割选1（保证金金额）">
                    <el-input v-model="formInfo.jointype2" placeholder="请输入" @change="jointype2Change"></el-input>
                </el-form-item>
                <el-form-item label="户口迁出">
                    <el-input v-model="formInfo.move" placeholder="请输入" @change="movechange"></el-input>
                    <div class="tipsBox">
                        提示：1.无需迁出户口2.约定迁出时间,及户口保证金
                    </div>
                </el-form-item>
                <el-form-item label="户口迁出时间">
                    <el-input v-model="formInfo.moveTime" placeholder="请输入"></el-input>
                </el-form-item>

                <el-form-item label="户口保证金">
                    <el-input v-model="formInfo.movePrice" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="其他约定事项">
                    <el-input v-model="formInfo.otherMove" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="何时取得央产房上市证明">
                    <el-input v-model="formInfo.proveData" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="租赁期限">
                    <el-input v-model="formInfo.rentTime" placeholder="请输入"></el-input>
                </el-form-item>
                <el-form-item label="租金归属">
                    <el-input v-model="formInfo.rentPrice" placeholder="请输入"></el-input>
                    <div class="tipsBox">
                        提示：时间或条件之前租金归甲方
                    </div>
                </el-form-item>
                <el-form-item label="补充协议2">
                    <el-input v-model="formInfo.otherThings" placeholder="请输入"></el-input>
                </el-form-item>

            </el-form>
        </div>
        <div class="exportBtn">
            <el-button type="primary" class="addBtn" @click="exportBtn">保存并导出</el-button>
            <el-button type="success" class="addBtn" @click="goBack">重新选择文档</el-button>
        </div>
    </div>
</template>

<script >
import docxtemplater from "docxtemplater";
import PizZip from "pizzip";
import JSZipUtils from "jszip-utils";
import { saveAs } from "file-saver";


export default {
    data() {
        return {
            cjjgPrice: null,
            wqjPrice: null,
            wordsInfo: "",
            formInline: {
                user: '',
                region: ''
            },
            formInfo: {
                first_name: "",
                //卖方信息
                sellerName: "",
                sellerIdNum: "",
                sellerAdress: "",
                sellerPostNum: "",
                sellerPhoneNum: "",
                sellCommonName: "",
                sellCommonIdNum: "",
                sellCommonAdress: "",
                sellCommonPostNum: "",
                sellCommonPhoneNum: "",
                //买方信息
                buyerName: "",
                buyerIdNum: "",
                buyerAdress: "",
                buyerPostNum: "",
                buyerPhoneNum: "",
                buyerCommonName: "",
                buyerCommonIdNum: "",
                buyerCommonAdress: "",
                buyerCommonPostNum: "",
                buyerCommonPhoneNum: "",
                //房产信息
                intermediaryName: "",
                intermediaryNumber: "",
                houseAdress: "",
                houseArea: "",
                houseHeight: "",
                aboveGround: "",
                underGround: "",
                storey: "",
                properties: "",
                propertyNum: "",
                propertyCommonNum: "",
                unit: "",
                houseData: "",
                //其他信息
                transactionPrice: "",
                signatruePrice: "",
                compensatePrice: "",
                mortgageSituation: "",
                mortgagePerson: "",
                mortgageData: "",
                Lease: "",
                limitation: "",
                exceptional: "",
                loan: "",
                loanPrice: "",


                unLoan: "",
                daysData: "",
                taxation: "",
                taxationDetail: "",
                housePay: "",
                housePayDetail: "",
                contractData: "",
                commission: "",
                jiaCommission: "",
                yiCommission: "",
                frontMoney: "",
                firstMoneyData: "",
                firstMoney: "",
                secondMoneyData: "",
                secondMoney: "",
                release: "",
                release2: "",
                release3: "",

                firstPriceData: "",
                firstPrice: "",
                secondPriceData: "",
                secondPrice: "",
                thirdPriceData: "",
                thirdPrice: "",
                provideTime: "",
                transferTime: "",
                transferTime2: "",
                transferTime3: "",
                joinTime: "",
                jointype: "",
                jointype2: "",
                move: "",
                moveTime: "",

                movePrice: "",
                otherMove: "",
                proveData: "",
                rentTime: "",
                rentPrice: "",
                otherThings: "",
            },
            tableData: [
                {
                    name: "封面",
                    id: 1
                },
                {
                    name: "签约必读",
                    id: 2
                },
                {
                    name: "房地产经纪服务事项告知书",
                    id: 3
                },
                {
                    name: "房屋买卖流程图",
                    id: 4
                },
                {
                    name: "重要交易信息披露",
                    id: 5
                },
                {
                    name: "交易资金风险提示及自行划转确认书",
                    id: 6
                },
                {
                    name: "交易方信息确认表",
                    id: 7
                },
                {
                    name: "北京市存量房屋买卖合同",
                    id: 8
                },
                {
                    name: "补充协议",
                    id: 9
                },
                {
                    name: "补充协议-2",
                    id: 10
                },
                {
                    name: "居间服务合同",
                    id: 11
                },
                {
                    name: "居间服务确认书 -业主",
                    id: 12
                },
                {
                    name: "居间服务确认书 -客户",
                    id: 13
                },
                {
                    name: "配偶同意出售承诺书",
                    id: 14
                },
                {
                    name: "业主单身声明",
                    id: 15
                },
                {
                    name: "网上签约授权委托书",
                    id: 16
                },
                {
                    name: "购房承诺书",
                    id: 17
                },
                {
                    name: "换房声明",
                    id: 18
                },

            ],



        }
    },
    created() {

    },
    mounted() {

        this.wordsInfo = this.$route.query.ids.split(",")
    },
    computed: {
        // compensatePrice(){
        //     return 111
        // }
    },
    methods: {
        goBack() {
            this.$router.push(

                { path: '/' }

            )
        },


        //转大写
        toChies(amount) {
            const cnNums = [
                "零",
                "壹",
                "贰",
                "叁",
                "肆",
                "伍",
                "陆",
                "柒",
                "捌",
                "玖",
            ];
            // 基本单位
            const cnIntRadice = ["", "拾", "佰", "仟"];
            // 对应整数部分扩展单位
            const cnIntUnits = ["", "万", "亿", "兆"];
            // 对应小数部分单位
            const cnDecUnits = ["角", "分"];
            // 整数金额时后面跟的字符
            const cnInteger = "整";
            // 整型完以后的单位
            const cnIntLast = "元";
            // 最大处理的数字
            const maxNum = 9999999999999999.99;
            // 金额整数部分
            let integerNum;
            // 金额小数部分
            let decimalNum;
            // 输出的中文金额字符串
            let chineseStr = "";
            // 分离金额后用的数组，预定义
            let parts;
            if (amount === "") {
                return "";
            }
            amount = parseFloat(amount);
            if (amount >= maxNum) {
                // 超出最大处理数字
                return "";
            }
            if (amount === 0) {
                chineseStr = cnNums[0] + cnIntLast + cnInteger;
                return chineseStr;
            }
            // 转换为字符串
            amount = amount.toString();
            if (amount.indexOf(".") === -1) {
                integerNum = amount;

                decimalNum = "";
            } else {
                parts = amount.split(".");
                integerNum = parts[0];
                decimalNum = parts[1].substr(0, 4);
            }
            // 获取整型部分转换
            if (parseInt(integerNum, 10) > 0) {
                let zeroCount = 0;
                const IntLen = integerNum.length;
                for (let i = 0; i < IntLen; i++) {
                    const n = integerNum.substr(i, 1);
                    const p = IntLen - i - 1;
                    const q = p / 4;
                    const m = p % 4;
                    if (n === "0") {
                        zeroCount++;
                    } else {
                        if (zeroCount > 0) {
                            chineseStr += cnNums[0];
                        }
                        // 归零
                        zeroCount = 0;
                        //alert(cnNums[parseInt(n)])
                        chineseStr += cnNums[parseInt(n)] + cnIntRadice[m];
                    }
                    if (m === 0 && zeroCount < 4) {
                        chineseStr += cnIntUnits[q];
                    }
                }
                chineseStr += cnIntLast;
            }
            // 小数部分
            if (decimalNum !== "") {
                const decLen = decimalNum.length;
                for (let i = 0; i < decLen; i++) {
                    const n = decimalNum.substr(i, 1);
                    if (n !== "0") {
                        chineseStr += cnNums[Number(n)] + cnDecUnits[i];
                    }
                }
            }
            if (chineseStr === "") {
                chineseStr += cnNums[0] + cnIntLast + cnInteger;
            } else if (decimalNum === "") {
                chineseStr += cnInteger;
            }
            return chineseStr;//转好的大写文字

        },
        commissionchange() {
            this.formInfo.commission = this.toChies(this.formInfo.commission)
        },
        firstMoneyChange() {
            this.formInfo.firstMoney = this.toChies(this.formInfo.firstMoney)

        },
        firstPriceChange() {
            this.formInfo.firstPrice = this.toChies(this.formInfo.firstPrice)

        },
        secondPriceChange() {
            this.formInfo.secondPrice = this.toChies(this.formInfo.secondPrice)

        },
        jointype2Change() {
            this.formInfo.jointype2 = this.toChies(this.formInfo.jointype2)

        },
        thirdPriceChange() {
            this.formInfo.thirdPrice = this.toChies(this.formInfo.thirdPrice)

        },
        secondMoneyChange() {
            this.formInfo.secondMoney = this.toChies(this.formInfo.secondMoney)

        },
        jiaCommissionchange() {
            this.formInfo.jiaCommission = this.toChies(this.formInfo.jiaCommission)

        },
        yiCommissionchange() {
            this.formInfo.yiCommission = this.toChies(this.formInfo.yiCommission)

        },
        frontMoneychange() {
            this.formInfo.frontMoney = this.toChies(this.formInfo.frontMoney)

        },

        transactionPricechange() {
            this.cjjgPrice = this.formInfo.transactionPrice
            this.formInfo.transactionPrice = this.toChies(this.formInfo.transactionPrice)
        },
        signatruePricechange() {
            this.wqjPrice = this.formInfo.signatruePrice

            if (this.cjjgPrice && this.cjjgPrice > this.wqjPrice) {

                this.formInfo.compensatePrice = this.toChies(this.cjjgPrice - this.wqjPrice)
            }

            this.formInfo.signatruePrice = this.toChies(this.formInfo.signatruePrice)

        },
        compensatePricechange() {


            this.formInfo.compensatePrice = this.toChies(this.formInfo.compensatePrice)
        },
        onSubmit() {
            console.log('submit!');
        },
        sellCommonNameChange() {
            console.log("change事件", this.formInfo.sellCommonName);
            if (this.formInfo.sellCommonName == "x") {
                this.formInfo.sellCommonIdNum = "x"
                this.formInfo.sellCommonAdress = "x"
                this.formInfo.sellCommonPostNum = "x"
                this.formInfo.sellCommonPhoneNum = "x"
                this.formInfo.propertyCommonNum = "x"
            }
        },
        buyerCommonName() {
            if (this.formInfo.buyerCommonName == "x") {
                this.formInfo.buyerCommonIdNum = "x"
                this.formInfo.buyerCommonAdress = "x"
                this.formInfo.buyerCommonPostNum = "x"
                this.formInfo.buyerCommonPhoneNum = "x"
            }
        },
        mortgageSituationChange() {

            if (this.formInfo.mortgageSituation == 2) {
                this.formInfo.mortgagePerson = "x"
                this.formInfo.mortgageData = "x"
            }
        },
        loanchange() {
            if (this.formInfo.loan == 1) {
                this.formInfo.loanPrice = "x"
            }
        },
        housePaychange() {
            if (this.formInfo.housePay == 1 || this.formInfo.housePay == 2) {
                this.formInfo.housePayDetail = "x"

            }

        },
        releaseChange() {
            if (this.formInfo.release == 1) {
                this.formInfo.release2 = "x"
                this.formInfo.release3 = "x"
            }
        },
        movechange() {
            if (this.formInfo.move == 1) {
                this.formInfo.moveTime = "x"
                this.formInfo.movePrice = "x"

            }
        },
        exportBtn() {

            if (this.formInfo.sellerIdNum) {
                this.formInfo.sellerIdNum = "身份证" + this.formInfo.sellerIdNum
            }
            if (this.formInfo.sellCommonIdNum) {
                this.formInfo.sellCommonIdNum = "身份证" + this.formInfo.sellCommonIdNum

            }
            if (this.formInfo.buyerIdNum) {
                this.formInfo.buyerIdNum = "身份证" + this.formInfo.buyerIdNum

            }
            if (this.formInfo.buyerCommonIdNum) {
                this.formInfo.buyerCommonIdNum = "身份证" + this.formInfo.buyerCommonIdNum
            }



            this.exportWords(this.formInfo)



        },
        pause(msec) { // 异步暂停函数
            return new Promise(
                (resolve, reject) => {
                    setTimeout(resolve, msec || 1000);
                }
            );
        },

        async exportWords(docxDataInfo) {

            var infotetx = []
            for (let index = 0; index < this.wordsInfo.length; index++) {

                infotetx.push(
                    {
                        id: this.wordsInfo[index]
                    }
                )
            }
            let count = 0;
            for (let item of infotetx) {
                this.tableData.forEach((tableItem) => {
                    if (item.id == tableItem.id) {
                        item.name = tableItem.name
                    }
                })

                JSZipUtils.getBinaryContent(`${item.id}.docx`, function (error, content) {
                    if (error) {
                        throw error
                    };

                    var zip = new PizZip(content);
                    var doc = new docxtemplater()
                    // doc.attachModule(new ImageModule(opts));  //没有图片可以去掉这一段
                    doc.loadZip(zip);
                    //获取数据
                    doc.setData({
                        ...docxDataInfo
                    });
                    try {
                        doc.render()
                    } catch (error) {
                        var e = {
                            message: error.message,
                            name: error.name,
                            stack: error.stack,
                            properties: error.properties,
                        }
                        console.log(JSON.stringify({
                            error: e
                        }));
                        throw error;
                    }
                    var out = doc.getZip().generate({
                        type: "blob",
                        mimeType: "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
                    })
                    saveAs(out, `${item.name}.docx`)
                })
                console.log("1111111111111", count);
                if (++count >= 10) {
                    await this.pause(1000);
                    count = 0;
                }
            }
        }
    }
}

</script>

<style lang="less" scoped>
.container {
    padding: 0 10px;

    .sellerBox {
        border-bottom: 1px solid #BEBEBE;
    }

    .sellerTitle {
        font-weight: 550;
        margin-bottom: 10px;
    }

    .bugerBox {
        margin-top: 10px;
        border-bottom: 1px solid #BEBEBE;

        .bugerTitle {
            font-weight: 550;
            margin-bottom: 10px;
        }
    }

    .exportBtn {
        text-align: center;
        margin-top: 10px;

    }

    .tipsBox {
        font-size: 12px;
    }
}
</style>