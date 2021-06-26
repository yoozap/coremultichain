<template>
    <div>
        <div
            id="main"
            class="outer"
            :class="firstAnimation ? 'animHead' : ''"
            v-view="visibilityChanged"
        >
            <TopHead />
            <div class="assets-bg__outer">
                <img
                    v-prlx="{ speed: 0.1 }"
                    :src="require(`@/assets/img/assets-bg.png`)"
                    alt=""
                    class="assets-bg"
                />
            </div>
            <div class="container">
                <div class="main-container__description">
                    <div class="left">
                        <h1>
                            <span>Proof</span>
                            <span>of Assets</span>
                        </h1>
                    </div>
                </div>
            </div>
        </div>
        <div class="container">
            <div class="coins__outer-container">
                <div class="coin__container" data-aos="fade-up">
                    <div class="coin__head">
                        <div class="coin__logo">
                            <img src="@/assets/img/btc-logo.svg" alt="" />
                        </div>
                        <div class="coin__name">BTC</div>
                    </div>
                    <div class="coin__columns">
                        <div class="coin__column column__left">
                            <h4 class="col__ttl">Proof of Asset</h4>
                            <div class="column__boxes">
                                <div class="column__box">
                                    <div class="box__head">
                                        <div class="box__ttl">73,601 BTC</div>
                                        <div class="box__icons">
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <rect
                                                            x="5"
                                                            y="5"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                        <rect
                                                            x="1"
                                                            y="1"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <path
                                                            d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="box__info">
                                        <div class="file__name">
                                            <span
                                                >3LYJfcfHPXYJreM...2jkn69LWEYKzexb</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="link__icon">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.05 10.95C14.25 12.15 14.25 14.1 13.05 15.3L9.15 19.2C7.95 20.4 6 20.4 4.65 19.2C3.45 18 3.45 16.05 4.65 14.7L5.1 14.25C4.65 13.2 4.35 12 4.35 10.8L2.55 12.6C0.15 15 0.15 18.9 2.55 21.3C4.95 23.7 8.85 23.7 11.25 21.3L15.15 17.4C15.6 16.95 15.9 16.5 16.2 16.05C17.55 13.8 17.25 10.65 15.15 8.70001L13.05 10.95Z"
                                    fill="white"
                                />
                                <path
                                    d="M10.9508 13.05C9.75084 11.85 9.75084 9.89996 10.9508 8.69996L14.8508 4.79996C16.0508 3.59996 18.0008 3.59996 19.3508 4.79996C20.5508 5.99996 20.5508 7.94996 19.3508 9.29996L18.9008 9.74996C19.3508 10.8 19.6508 12 19.6508 13.2L21.4508 11.4C23.8508 8.99996 23.8508 5.09996 21.4508 2.69996C19.0508 0.299963 15.1508 0.299963 12.7508 2.69996L8.85084 6.59996C8.40084 7.04996 8.10084 7.49996 7.80084 7.94996C6.45084 10.2 6.75084 13.35 8.85084 15.3L10.9508 13.05Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div class="coin__column column__right">
                            <h4 class="col__ttl">Wrapped Token</h4>
                            <div class="column__boxes">
                                <div class="column__box">
                                    <div class="box__head">
                                        <div class="box__ttl">9,900 BBTC</div>
                                        <div class="box__icons">
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <rect
                                                            x="5"
                                                            y="5"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                        <rect
                                                            x="1"
                                                            y="1"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <path
                                                            d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="box__info">
                                        <div class="file__name">
                                            <span
                                                >3LYJfcfHPXYJreM...2jkn69LWEYKzexb</span
                                            >
                                        </div>
                                        <span class="box__tag">erc20</span>
                                    </div>
                                </div>
                                <div class="column__box">
                                    <div class="box__head">
                                        <div class="box__ttl">9,900 BBTC</div>
                                        <div class="box__icons">
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <rect
                                                            x="5"
                                                            y="5"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                        <rect
                                                            x="1"
                                                            y="1"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <path
                                                            d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="box__info">
                                        <div class="file__name">
                                            <span
                                                >3LYJfcfHPXYJreM...2jkn69LWEYKzexb</span
                                            >
                                        </div>
                                        <span class="box__tag">erc20</span>
                                    </div>
                                </div>
                                <div class="column__box">
                                    <div class="box__head">
                                        <div class="box__ttl">9,900 BBTC</div>
                                        <div class="box__icons">
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <rect
                                                            x="5"
                                                            y="5"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                        <rect
                                                            x="1"
                                                            y="1"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <path
                                                            d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="box__info">
                                        <div class="file__name">
                                            <span
                                                >3LYJfcfHPXYJreM...2jkn69LWEYKzexb</span
                                            >
                                        </div>
                                        <span class="box__tag">erc20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="coin__container" data-aos="fade-up">
                    <div class="coin__head">
                        <div class="coin__logo">
                            <img src="@/assets/img/eth-logo.svg" alt="" />
                        </div>
                        <div class="coin__name">ETH</div>
                    </div>
                    <div class="coin__columns">
                        <div class="coin__column column__left">
                            <h4 class="col__ttl">Proof of Asset</h4>
                            <div class="column__boxes">
                                <div class="column__box">
                                    <div class="box__head">
                                        <div class="box__ttl">73,601 BTC</div>
                                        <div class="box__icons">
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <rect
                                                            x="5"
                                                            y="5"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                        <rect
                                                            x="1"
                                                            y="1"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <path
                                                            d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="box__info">
                                        <div class="file__name">
                                            <span
                                                >3LYJfcfHPXYJreM...2jkn69LWEYKzexb</span
                                            >
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="link__icon">
                            <svg
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M13.05 10.95C14.25 12.15 14.25 14.1 13.05 15.3L9.15 19.2C7.95 20.4 6 20.4 4.65 19.2C3.45 18 3.45 16.05 4.65 14.7L5.1 14.25C4.65 13.2 4.35 12 4.35 10.8L2.55 12.6C0.15 15 0.15 18.9 2.55 21.3C4.95 23.7 8.85 23.7 11.25 21.3L15.15 17.4C15.6 16.95 15.9 16.5 16.2 16.05C17.55 13.8 17.25 10.65 15.15 8.70001L13.05 10.95Z"
                                    fill="white"
                                />
                                <path
                                    d="M10.9508 13.05C9.75084 11.85 9.75084 9.89996 10.9508 8.69996L14.8508 4.79996C16.0508 3.59996 18.0008 3.59996 19.3508 4.79996C20.5508 5.99996 20.5508 7.94996 19.3508 9.29996L18.9008 9.74996C19.3508 10.8 19.6508 12 19.6508 13.2L21.4508 11.4C23.8508 8.99996 23.8508 5.09996 21.4508 2.69996C19.0508 0.299963 15.1508 0.299963 12.7508 2.69996L8.85084 6.59996C8.40084 7.04996 8.10084 7.49996 7.80084 7.94996C6.45084 10.2 6.75084 13.35 8.85084 15.3L10.9508 13.05Z"
                                    fill="white"
                                />
                            </svg>
                        </div>
                        <div class="coin__column column__right">
                            <h4 class="col__ttl">Wrapped Token</h4>
                            <div class="column__boxes">
                                <div class="column__box">
                                    <div class="box__head">
                                        <div class="box__ttl">9,900 BBTC</div>
                                        <div class="box__icons">
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <rect
                                                            x="5"
                                                            y="5"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                        <rect
                                                            x="1"
                                                            y="1"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <path
                                                            d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="box__info">
                                        <div class="file__name">
                                            <span
                                                >3LYJfcfHPXYJreM...2jkn69LWEYKzexb</span
                                            >
                                        </div>
                                        <span class="box__tag">erc20</span>
                                    </div>
                                </div>
                                <div class="column__box">
                                    <div class="box__head">
                                        <div class="box__ttl">9,900 BBTC</div>
                                        <div class="box__icons">
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <rect
                                                            x="5"
                                                            y="5"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                        <rect
                                                            x="1"
                                                            y="1"
                                                            width="10"
                                                            height="10"
                                                            fill="#0B111D"
                                                            stroke="white"
                                                            stroke-width="2"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                            <a href="#">
                                                <svg
                                                    width="16"
                                                    height="16"
                                                    viewBox="0 0 16 16"
                                                    fill="none"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                >
                                                    <g opacity="0.5">
                                                        <path
                                                            d="M14 2V8.87H12.0005V5.42L3.4205 14L2 12.5795L10.58 3.9995H7.1495V2H14Z"
                                                            fill="white"
                                                        />
                                                    </g>
                                                </svg>
                                            </a>
                                        </div>
                                    </div>
                                    <div class="box__info">
                                        <div class="file__name">
                                            <span
                                                >3LYJfcfHPXYJreM...2jkn69LWEYKzexb</span
                                            >
                                        </div>
                                        <span class="box__tag">erc20</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TopHead from "@/components/TopHead.vue";
export default {
    name: "MainContainer",
    data() {
        return {
            firstAnimation: false
        };
    },
    components: {
        TopHead
    },
    mounted() {
        setTimeout(() => {
            this.firstAnimation = true;
        }, 100);
    },
    methods: {
        visibilityChanged() {
            this.$store.commit("setMenuStatus", 0);
        }
    }
};
</script>
<style scoped>
.assets-bg {
    width: 100%;
    height: 120%;
}
.assets-bg__outer {
    overflow: hidden;
    position: absolute;
    top: 0px;
    right: 0px;
    width: 100vw;
    z-index: 1;
    opacity: 0;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
}

.assets-bg__outer:before {
    position: absolute;
    bottom: 0px;
    right: 0px;
    width: 100%;
    content: "";
    z-index: 2;
    height: 25%;
    background: rgb(0, 5, 15);
    background: linear-gradient(
        180deg,
        rgba(0, 5, 15, 0) 0%,
        rgba(0, 5, 15, 1) 100%
    );
}
.animHead .assets-bg__outer {
    opacity: 1;
    transform: translateY(-38px);
}
.container {
    position: relative;
    z-index: 20;
    height: 100%;
}
.main-container__description h1 {
    display: flex;
    flex-direction: column;
    font-size: 100px;
    transform: translateY(10px);
    opacity: 0;
    transition: 0.6s cubic-bezier(0.79, 0.01, 0.15, 0.99);
    margin-top: 215px;
}
.main-container__description h1 span {
    font-size: inherit;
    font-family: inherit;
}
.main-container__description h1 span:nth-child(2) {
    padding-left: 122px;
}
.animHead h1 {
    transform: translateY(0px);
    opacity: 1;
    transition-delay: 0.5s;
}
.main-container__description h3 {
    font-size: 20px;
    margin-top: 100px;
}
.main-container__description {
    width: 100%;
    z-index: 5;
    display: flex;
    flex-direction: column;
}
.left {
    /* width: 50%; */
    position: relative;
    z-index: 5;
}

.main-container__header .left {
    font-size: 20px;
    line-height: 28px;
}
#main {
    position: relative;
    width: 100%;
    background: #00050f;
    z-index: 2;
}
.coins__outer-container {
    display: flex;
    flex-direction: column;
    width: 952px;
}
.coin__container {
    background: #010918;
    width: 100%;
    padding: 24px;
    margin-top: 30px;
}
.coin__container:first-child {
    margin-top: 100px;
}
.coin__container:last-child {
    margin-bottom: 100px;
}
.coin__head {
    display: flex;
    align-items: center;
    margin-bottom: 24px;
}
.coin__logo img {
    margin-right: 16px;
}
.coin__columns {
    display: flex;
}
.coin__column {
    width: 50%;
}
.link__icon {
    margin-top: 75px;
    margin-left: 20px;
    margin-right: 20px;
}
.col__ttl {
    line-height: 30px;
    margin-bottom: 8px;
}
.column__box {
    padding: 18px 24px;
    background: rgba(255, 255, 255, 0.04);
}
.column__box:not(:last-child) {
    margin-bottom: 8px;
}
.box__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.box__ttl {
    font-size: 20px;
    line-height: 30px;
    color: #ff7152;
}
.box__icons a:first-child {
    margin-right: 12px;
}
.box__icons svg path,
.box__icons svg rect,
.box__icons svg g {
    transition: 0.6s;
}
.box__icons svg:hover path {
    fill: #ff7152;
}
.box__icons svg:hover rect {
    stroke: #ff7152;
}
.box__icons svg:hover g {
    opacity: 1;
}
.box__info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.file__name {
    position: relative;
    /* width: 289px; */
    margin-right: 8px;
}
.file__name span {
    line-height: 30px;
    opacity: 0.7;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
}

.file__name:after {
    content: attr(data-filetype);
    position: absolute;
    left: 100%;
    top: 0;
}
.box__tag {
    padding: 4px 10px;
    height: 24px;
    font-size: 12px;
    border-radius: 22px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    text-transform: uppercase;
}
/*Ipad Pro 1024*/
@media (max-width: 1300px) {
    .main-container__description {
        padding-left: 25px;
    }
    .main-container__description h1 {
        font-size: 50px;
    }
    .main-container__description h1 span:nth-child(2) {
        padding-left: 63px;
    }
}
@media (max-width: 1200px) {
    .coins__outer-container {
        width: 100%;
    }
    .column__box {
        padding: 18px;
    }
    .link__icon {
        margin-left: 10px;
        margin-right: 10px;
    }
}
/*Ipad 768*/
@media (max-width: 1023px) {
    .main-container__description {
        padding-left: 0px;
    }
    .main-container__description .frst-txt {
        font-size: 12px;
        line-height: 22px;
    }
    .main-container__description .scnd-txt {
        font-size: 16px;
        line-height: 26px;
        margin-top: 30px;
    }
    .right {
        padding-bottom: 60px;
        padding-right: 30px;
    }
    .main-video__container {
        right: -38%;
        padding-top: 130%;
        width: 130%;
    }
    .main-container__header .left {
        font-size: 13px;
        line-height: 22px;
    }
    .main-container__description p {
        font-size: 32px;
        line-height: 40px;
    }
    .scroll-down {
        display: none;
    }
    .coin__columns {
        flex-direction: column;
    }
    .coin__column {
        width: 100%;
    }
    .link__icon {
        margin-top: 30px;
        margin-bottom: 20px;
    }
}
/*Mobile 320*/
@media (max-width: 767px) {
    .protocol__link-main-svg {
        margin-right: 25px;
    }
    .protocol__link-txt {
        font-size: 10px;
    }
    .assets-bg__outer {
        width: 100%;
    }
    .left {
        width: 100%;
    }
    .main-container__description {
        flex-direction: column;
    }
    .main-container__description h3 {
        text-align: left;
    }
    .download-container__mobile-inner a {
        margin: 0px 15px;
    }
    .download-container__mobile .ttl {
        font-size: 16px;
        color: #fff;
        opacity: 0.6;
        margin-bottom: 25px;
    }
    .main-container__description {
        padding: 0px 15px;
        text-align: center;
        bottom: 90px;
    }
    .main-container__description h1 {
        margin-top: 115px;
        margin-bottom: 50px;
        text-align: left;
    }
    .assets-bg {
        height: 100vh;
        object-fit: cover;
    }
    .main-container__description {
        padding: 0px;
    }
}
</style>
