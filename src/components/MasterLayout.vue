<template>
  <div class="container-master-layout">
    <Header />
    <div class="body-page">
      <router-view></router-view>
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./layout/Header";
import Footer from "./layout/Footer";
export default {
  name: "MasterLayout",
  components: {
    Header,
    Footer
  }
};
</script>
<style lang="scss">
.container-master-layout {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}
.body-page {
  flex: 1;
  padding: 20px;
}
</style>
