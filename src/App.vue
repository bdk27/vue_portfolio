<template>
  <ycheng-nav></ycheng-nav>
  <ycheng-home></ycheng-home>
  <ycheng-about></ycheng-about>
  <ycheng-port></ycheng-port>
  <ycheng-email></ycheng-email>
  <ycheng-footer></ycheng-footer>
</template>

<script>
import YchengAbout from './components/YchengAbout.vue'
import YchengEmail from './components/YchengEmail.vue'
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
    YchengEmail,
    YchengFooter,
  }
}
</script>

<style lang='scss'>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+TC:wght@100;300;400;500;700;900&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Kaushan+Script&family=Poppins:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Lobster&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Russo+One&display=swap');
  @import './assets/style.scss';

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  font-family: 'Noto Sans TC', sans-serif;
}
html {
  font-size: 62.5%;
}
section {
  padding: 5rem 0rem;
}
</style>
