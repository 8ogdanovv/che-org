<script>

import HeaderView from './components/HeaderView.vue';
import HeroZone from './components/HeroZone.vue';
import AboutMe from './components/AboutMe.vue';
import WhatIDo from './components/WhatIDo.vue';
import MyFolio from './components/MyFolio.vue';
import TestedView from './components/TestedView.vue';
import GetInTouch from './components/GetInTouch.vue';
import ProjectsView from './components/ProjectsView.vue';
import MyBlog from './components/MyBlog.vue';
import FooterView from './components/FooterView.vue';


export default {
  name: 'App',
  components: {
    HeaderView,
    HeroZone,
    AboutMe,
    WhatIDo,
    MyFolio,
    TestedView,
    GetInTouch,
    ProjectsView,
    MyBlog,
    FooterView
  },
  data() {
  return {
    // activeColor: 'red',
  }
},
  methods: {
  },
  mounted() {
  }
}
</script>

<template>
  <div id="root">
    <HeaderView />
    <HeroZone />
    <AboutMe />
    <WhatIDo />
    <!-- <WhatIDo :color="activeColor" /> -->
    <!-- <WhatIDo :color="`blue`" /> -->
    <MyFolio />
    <TestedView />
    <GetInTouch />
    <ProjectsView />
    <MyBlog />
    <FooterView />
  </div>
</template>

<style>

</style>
