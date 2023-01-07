<template>
  <ycheng-nav></ycheng-nav>
  <ycheng-home></ycheng-home>
  <ycheng-about></ycheng-about>
  <ycheng-port></ycheng-port>
  <ycheng-contact></ycheng-contact>
  <ycheng-footer></ycheng-footer>
</template>

<script>
import YchengAbout from './components/YchengAbout.vue'
import YchengContact from './components/YchengContact.vue'
import YchengFooter from './components/YchengFooter.vue'
import YchengHome from './components/YchengHome.vue'
import YchengNav from './components/YchengNav.vue'
import YchengPort from './components/YchengPort.vue'

export default {
  name: 'App',
  components: {
    YchengNav,
    YchengHome,
    YchengAbout,
    YchengPort,
    YchengContact,
    YchengFooter,
  }
}
</script>

<style lang='scss'>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@500&display=swap');
  @import './assets/scss/style.scss';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
  list-style: none;
}
html {
  font-size: 62.5%;
  scroll-behavior: smooth;
  scroll-padding-top:6rem;
}
section {
  padding: 5rem 0rem;
  background: $bg-color;
}
</style>
