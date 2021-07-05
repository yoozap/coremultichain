<template>
	<div class="slider">
        <div class="top">
            <h2 class="ttl">Speakers</h2>
            <div class="btns">
                <div class="slider-button-prev">
                    <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15.24 -6.73927e-06L19.08 3.81889L10.44 12.3228L38 12.3228L38 17.6772L10.44 17.6772L19.08 26.1811L15.24 30L6.55671e-07 15L15.24 -6.73927e-06Z" fill="#0500FF"/>
                    </svg>
                </div>
                <div class="slider-button-next">
                    <svg width="38" height="30" viewBox="0 0 38 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M22.76 -6.73927e-06L18.92 3.81889L27.56 12.3228L-7.72693e-07 12.3228L-5.38648e-07 17.6772L27.56 17.6772L18.92 26.1811L22.76 30L38 15L22.76 -6.73927e-06Z" fill="#0500FF"/>
                    </svg>
                </div>
            </div>  
        </div> 
        <div v-swiper:slider="sliderOption">
            <div class="swiper-wrapper">
              <div class="swiper-slide" :key="speaker" v-for="speaker in 3">
                <div class="slide">
                    <div class="img-box">
                        <picture >
                          <source
                            media="(max-width: 767px)"
                            :srcset="require('@/assets/img/about-video.jpg')"
                          />
                          <source
                            media="(max-width: 1023px)"
                            :srcset="require('@/assets/img/about-video.jpg')"
                          />
                          <img
                            :src="require('@/assets/img/about-video.jpg')"
                            class="img-absolute"
                          />
                        </picture>
                    </div>
                    <div class="bottom">
                        <h3 class="ttl">Jason McAlisster</h3>
                        <p>Executive Director of the Office of Entrepreneurship
                        & Innovation at University of Arkansas</p>
                    </div>
                </div>
              </div>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name: 'mainSlider',
        data () {
            return {
                firstAnimation: false,
                sliderOption: {
                    slidesPerView: 'auto',
                    spaceBetween: 32,
                    speed: 800,
                    watchOverflow: true,
                    navigation: {
                        nextEl: '.slider-button-next',
                        prevEl: '.slider-button-prev',
                    },
                }
            }
        },
    }
</script>
<style scoped>
	.slider{
        margin-top: 140px;
        width: 100%;
        max-width: 952px;
    }
    .slider .top{
        display: flex;
        align-items: flex-start;
        justify-content: space-between;
        margin-bottom: 60px;
    }
    .slider .top .ttl{
        font-size: 51px;
        line-height: 66px;
        color: #fff;
        padding-right: 55px;
    }
    .slider .btns{
        display: flex;
        align-items: center;
    }
    .slider .btns > div{
        cursor: pointer;
    }
    .slider .btns > div:first-child{
        margin-right: 18px;
    }
    .slider .swiper-container{
        overflow: visible;
    }
    .slider .slide{
        cursor: pointer;
    }
    .slider .img-box{
        position: relative;
        padding-top: 59%;
    }
    .slider .img-box img{
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        object-fit: cover;
    }
    .slider .bottom{
        margin-top: 24px;
        display: flex;
        justify-content: space-between;
        opacity: 0;
        transition: 0.6s;
        transform: translateY(10px);
    }
    .slider .swiper-slide-active .bottom{
        opacity: 1;
        transform: translateY(0px);
    }
    .slider .bottom .ttl{
        font-size: 20px;
        color: #fff;
        margin-right: 80px;
    }
    .slider .bottom p{
        max-width: 416px;
        margin-top: 5px;
        font-size: 15px;
        line-height: 24px;
        color: rgba(255, 255, 255, 0.7);
    }
</style>