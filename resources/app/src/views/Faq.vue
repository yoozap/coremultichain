<template>
    <div class="body-container">
        <img :src="require('@/assets/img/faq-bg.png')" alt="bg image" class="bg-img">
        <div class="container" :class="firstAnimation ? 'animHead' : ''" v-view="visibilityChanged">
            <TopHead/>
            <div class="blog">
                <h1 data-aos="fade-up">Faq</h1>
                <p class="faq__teaser" data-aos="fade-up">Answers to frequently asked questions about the CORE Network.</p>
                <div class="faq__list">
                    <div class="faq__item" data-aos="fade-up" v-for="(item, index) in itemData" :key="index">
                        <div class="faq__item-title">{{item.question}}</div>
                        <div class="faq__item-tease">{{item.answer}}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import TopHead from '../components/TopHead'
    export default {
        name: 'Faq',
        components: {
            TopHead
        },
        data () {
            return {
                firstAnimation: false
            }
        },
        mounted () {
            setTimeout(() => {
                this.firstAnimation = true
            }, 100)
        },
        computed:{
            itemData(){
                return this.$store.state.faq;
            }
        },
        methods: {
            visibilityChanged () {
                this.$store.commit('setMenuStatus', 0)
            }
        }
    }
</script>
<style scoped>
    .blog{
        flex-direction: column;
        position: relative;
        width: 100%;
        padding-bottom: 100px;
    }
    .body-container{
        position: relative;
        padding-left: 210px;
    }
    .body-container > .bg-img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: auto;
        object-fit: cover;
        opacity: 0.3;
        background: rgb(255,255,255);
        background: linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(0,5,15,0.3) 30%);
    }
    h1{
        font-size: 100px;
        line-height: 110px;
        margin-top: 210px;
        display: flex;
        flex-direction: column;
        margin-bottom: 100px;
    }
    .faq__teaser{
        font-size: 20px;
        max-width: 460px;
        color:  #fff;
    }
    .faq__list{
        margin-top: 100px;
        max-width: 952px;
        /*padding-right: 120px*/;
    }
    .faq__item{
        display: flex;
        margin-bottom: 80px;
    }
    .faq__item:last-child{
        margin-bottom: 0;
    }
    .faq__item-title{
        width: 530px;
        padding-right: 100px;
        font-size: 51px;
        line-height: 66px;
        color: #fff;
    }
    .faq__item-tease{
        flex: 1;
        padding-top: 34px;
        font-size: 15px;
        line-height: 24px;
        color:  rgba(255,255,255,0.7);
    }


    @media(max-width: 1900px){
    }
    @media(max-width: 1599px){
    }
    @media(max-width: 1300px){
        .faq__item-title{
            padding-right: 40px;
            font-size: 40px;
            width: 420px;
            line-height: 52px;
        }
    }

    /*Ipad 768*/
    @media (max-width: 1023px){
        .body-container{
            padding-left: 180px;
        }
        h1{
            font-size: 60px;
            line-height: 70px;
            margin-bottom: 50px;
        }
        .faq__item{
            flex-direction: column;
        }
        .faq__item-title{
            padding-right: 0;
        }
    }
    /*Mobile 320*/
    @media (max-width: 767px){
        .body-container{
            padding-left: 0px;
        }
        h1 {
            font-size: 50px;
            line-height: 60px;
            margin-bottom: 30px;
            margin-top: 100px;
        }
        .faq__item-title{
            padding-right: 0px;
            font-size: 26px;
            width: 100%;
            line-height: 32px;
        }
        .faq__item{
            margin-bottom: 60px;
        }
        .faq__item-tease{
            padding-top: 21px
        }
    }
</style>
