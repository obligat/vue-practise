<template>
    <div class="swiper-container">
        <div class="swiper-wrapper">
            <div class="swiper-slide">
                <img src="../assets/images/1.jpg" data-src="" class="swiper-lazy">
                <div class="swiper-lazy-preloader"></div>
            </div>
            <div class="swiper-slide">
                <img src="../assets/images/2.jpg" class="swiper-lazy">
                <div class="swiper-lazy-preloader"></div>
            </div>
            <div class="swiper-slide">
                <img src="../assets/images/3.jpg" class="swiper-lazy">
                <div class="swiper-lazy-preloader"></div>
            </div>
            <div class="swiper-slide">
                <img src="../assets/images/4.jpg" class="swiper-lazy">
                <div class="swiper-lazy-preloader"></div>
            </div>
        </div>
        <div class="swiper-pagination"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-button-next"></div>
    </div>
</template>
<script>
    export default {
        mounted() {
            this.fnSlider()
        },
        methods: {
            fnSlider() {
                $(function () {
                    new Swiper($('.swiper-container')[0], {
                        lazyLoading: true,
                        lazyLoadingInPrevNext: true,
                        autoplay: 3000,
                        loop: true,
                        pagination: ".swiper-pagination",
                        nextButton: ".swiper-button-next",
                        prevButton: ".swiper-button-prev"
                    })
                })
            }
        }
    }

</script>
<style scoped>
    @import "../assets/css/swiper-3.4.2.min.css";
</style>