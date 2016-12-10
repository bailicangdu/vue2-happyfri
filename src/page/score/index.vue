<template>
  	<div>
    	<div class="your_scores_container">
            <header class="your_scores"><span>{{score}}</span>分！</header>
            <div class="result_tip">{{scoreTips}}</div>
        </div>
        <div class="share_button" @click="showCover"></div>
        <div class="share_code">
            <header class="share_header">关注葡萄之家,获取答案。</header>
            <img src="../../images/4-4.png" height="212" width="212" class="code_img"> 
        </div>
        <div class="share_cover" v-show="showHide" @click="showCover">
            <img src="../../images/5-2.png" class="share_img">
        </div>
  	</div>
</template>

<script>
import ajax from '../../config/ajax'
import {basePath, targetUrl} from '../../config/config'

export default {
	name: 'score',
    data(){
        return {
            showHide: false,
            score: 0,
            scoreTips:'',
            scoreTipsArr:['可怜智商就和一坨屎一样！','智商达到正常人的水准！','不要嘚瑟还有进步的空间！','智商离爆表只差一步了！','智商爆表了！'],
        }
    },
    methods: {
        showCover: function (){
            this.showHide = !this.showHide;
        }
    },
	created(){
        let strJson = JSON.stringify(this.$store.state.answerid)
        ajax('GET', 'http://operating-activities.putao.com/service/record/add?user_id=2&active_id=2&active_topic_id=4&record=11&time='+ this.$store.state.allTime+'&answer='+strJson).
        then((res) => {
            this.score = Number(res.score);
            if(this.score <= 50) {
                this.scoreTips = this.scoreTipsArr[0];
                return
            }
            if(this.score <= 70) {
                this.scoreTips = this.scoreTipsArr[1];
                return
            }
            if(this.score == 80) {
                this.scoreTips = this.scoreTipsArr[2];
                return
            }
            if(this.score == 90) {
                this.scoreTips = this.scoreTipsArr[3];
                return
            }
            if(this.score == 100) {
                this.scoreTips = this.scoreTipsArr[4];
            }
        }).
        catch(() => {
            alert('获取数据失败')
        })

        var url = window.location.href.split('#')[0];
        const successFun = res => {
            wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                appId: res.appId, // 必填，公众号的唯一标识
                timestamp: res.timestamp, // 必填，生成签名的时间戳
                nonceStr: res.nonceStr, // 必填，生成签名的随机串
                signature: res.signature, // 必填，签名，见附录1
                jsApiList: ['onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo','onMenuShareQZone'] // 必填，需要使用的JS接口列表，所有JS接口列表见附录2
            });
        }
    
        //ajax('GET','http://wxinterface.putaoevent.com/getuser?users_id=2')
        ajax('GET','http://wxinterface.putaoevent.com/jssdk?wx_account_id=3&callback_url=' + basePath + '&url=' + basePath).then((res) => {
            successFun(res)
        })

        wx.ready(function() {
            wx.onMenuShareTimeline({
                title: '葡萄科技自助订货系统', // 分享标题
                link: 'http://sale.putao.com/#', // 分享链接
                imgUrl: 'http://h5.ptevent.cn/pt_order_sys/share.jpg', // 分享图标
                success: function() {
                    
                },
                cancel: function() {
                    
                }
            });
            wx.onMenuShareAppMessage({
                title: '葡萄科技自助订货系统', // 分享标题
                desc: '下单、查询、代发、分级管理让您了如指掌', // 分享描述
                link: 'http://sale.putao.com/#', // 分享链接
                imgUrl: 'http://h5.ptevent.cn/pt_order_sys/share.jpg', // 分享图标
                type: 'link', // 分享类型,music、video或link，不填默认为link
                dataUrl: '', // 如果type是music或video，则要提供数据链接，默认为空
                success: function () { 
                    
                },
                cancel: function () { 
                    
                }
            });

            wx.onMenuShareQQ({
                title: '葡萄科技自助订货系统', // 分享标题
                desc: '下单、查询、代发、分级管理让您了如指掌', // 分享描述
                link: 'http://sale.putao.com/#', // 分享链接
                imgUrl: 'http://h5.ptevent.cn/pt_order_sys/share.jpg', // 分享图标
                success: function () { 
                   
                },
                cancel: function () { 
                   
                }
            });

            wx.onMenuShareWeibo({
                title: '葡萄科技自助订货系统', // 分享标题
                desc: '下单、查询、代发、分级管理让您了如指掌', // 分享描述
                link: 'http://sale.putao.com/#', // 分享链接
                imgUrl: 'http://h5.ptevent.cn/pt_order_sys/share.jpg', // 分享图标
                success: function () { 
                   
                },
                cancel: function () { 
                    
                }
            });

            wx.onMenuShareQZone({
                title: '葡萄科技自助订货系统', // 分享标题
                desc: '下单、查询、代发、分级管理让您了如指掌', // 分享描述
                link: 'http://sale.putao.com/#', // 分享链接
                imgUrl: 'http://h5.ptevent.cn/pt_order_sys/share.jpg', // 分享图标
                success: function () { 
                   
                },
                cancel: function () { 
                    
                }
            });
        })    
    }
}

</script>

<style lang="less">
    body{
        background-image: url(../../images/4-1.jpg);
        padding-top: 1.2rem;
    }
    .your_scores_container{
        width: 9.7rem;
        height: 9.1rem;
        background: url(../../images/4-2.png) no-repeat;
        background-size: 100% 100%;
        margin: 0 auto 0;
        position: relative;
        .your_scores{
            position: absolute;
            width: 100%;
            text-indent: 3.3rem;
            top: 4.7rem;
            color: #a51d31;
            font-size: 1.4rem;
            font-weight: 900;
            -webkit-text-stroke: 0.05rem #412318;
            font-family: 'Microsoft YaHei';
            span{
                font-family: Tahoma,Helvetica,Arial;
                color: #a51d31;
            }
        }
        .result_tip{
            position: absolute;
            top: 7rem;
            width: 9rem;
            left: 0.6rem;
            color: #3e2415;
            font-size: 0.65rem;
            text-align: center;
        }
    }
    .share_button{
        width: 6.025rem;
        height: 2.4rem;
        margin: 0.8rem auto 0;
        background: url(../../images/4-3.png) no-repeat 0.4rem 0;
        background-size: 5.825rem 100%;
    }
    .share_code{
        width: 5.3rem;
        margin: 1.5rem auto 0;
        .share_header{
            color: #664718;
            font-size: 0.475rem;
            font-family: 'Microsoft YaHei';
            width: 6rem;
            font-weight: 500;
        }
        .code_img{
            height: 5.3rem;
            width: 5.3rem;
            margin-top: 0.5rem;
        }
    }
    .share_cover{
        position: fixed;
        bottom: 0;
        right: 0;
        top: 0;
        left: 0;
        background: url(../../images/5-1.png) no-repeat;
        background-size: 100% 100%;
        opacity: 0.92;
    }
    .share_img{
        height: 10.975rem;
        width: 11.95rem;
        position: fixed;
        top: 0.5rem;
        left: 50%;
        margin-left: -5.975rem;
    }
</style>
