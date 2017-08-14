<template>
    <div id="app">
        <NavView v-show="hideShow"></NavView>
        <router-view></router-view>
        <FooterView></FooterView>
    </div>
</template>
<script>
    import NavView from './components/Nav.vue'
    import FooterView from './components/Footer.vue'
    import {mapGetters} from 'vuex'

    export default {
        components: {
            NavView,
            FooterView
        },
        computed: mapGetters([
            'hideShow'
        ]),
        mounted() {
            console.log(this.$route);
            var path = this.$route.path;
            this.hideNav(path)
        },
        watch: {
            $route(to) {
                var path = to.path;
                console.log(path);
                this.hideNav(path);
            }
        }
        ,
        methods: {
            hideNav(path) {
                if (path === '/user') {
                    this.$store.dispatch('SHOW_HEAD_FAIL')
                } else {
                    this.$store.dispatch('SHOW_HEAD_SUCC')
                }
            }
        }

    }
</script>