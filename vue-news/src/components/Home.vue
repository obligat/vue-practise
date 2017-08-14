<template>
    <div>
        <Slider></Slider>
        <div class="news-list">
            <ul>
                <li v-for="(item,id) in newsList" class="item">
                    <router-link :to="'/article/'+item.id">
                        <h2>{{id + 1}}. {{item.title}}</h2>
                        <p>{{item.detail}}</p>
                    </router-link>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
    import Slider from './Slider.vue'

    export default {

        mounted() {
            this.fetchData()
        },
        data() {
            return {
                newsList: []
            }
        },
        methods: {
            fetchData() {
                var that = this;
                that.$http.get('src/data/index.data').then(function (res) {
                    that.newsList = res.data
                }).catch(function (err) {
                    console.log(err);
                });
            }
        },
        components: {
            Slider
        }
    }
</script>
<style scoped>
    .news-list{
        
    }
    
    ul{
        display: flex;
        flex-direction:column;
    }

    .item{
        padding:0.1rem;
    }
</style>