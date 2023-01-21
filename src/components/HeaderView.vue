<template>
  <header @click.self="hideSearch">
    <div class="logo">
      <h1>Vadym4Čhe</h1>
    </div>

    <div class="search">
      <img @click.self="toggleSearch" width="32" height="32"
      v-show="!search"
      src="../assets/search.png" alt="search">

      <input
      id="searchInput"
      v-show="search"
      @keypress.enter="toggleSearch"
      type="text" placeholder="search">

    </div>

    <nav class="menu" @click.self="toggleMenu">

      <span
      @click.self="toggleMenu"
      >
      Menu
      </span>

        <img id="menuPNG" width="21" height="15"
        @click.self="toggleMenu"
        src="../assets/menu.png" alt="menu">
      <ul
      @click.self="hideMenu"
      v-show="menu"
      >
        <!-- <li 
        @click.self="hideMenu">
        <a
          @click.self="hideMenu"
          href="#top">#to top</a></li> -->
        <li @click.self="hideMenu">
          <a 
          @click.self="hideMenu"
          href="#about">about me</a></li>
        <li @click.self="hideMenu">
          <a
          @click.self="hideMenu"
          href="#wid">what I do</a></li>
        <li @click.self="hideMenu">
          <a
          @click.self="hideMenu"
          href="#folio">portfolio</a></li>
        <li ><a 
          @click.self="hideMenu"
          href="#tested">testimonial</a></li>
        <li ><a
          @click.self="hideMenu"
          href="#git">contacts</a></li>
        <li @click.self="hideMenu"><a 
          @click.self="hideMenu"
          href="#pro">projects</a></li>
        <li
        @click.self="hideMenu"
        ><a 
        @click.self="hideMenu"
        href="#blog">my blog</a></li>
        <!-- <li @click.self="hideMenu" class="close">[x] close menu</li> -->
      </ul>
    </nav>
  </header>
</template>

<script>

import { mapWritableState, mapActions } from 'pinia';
import { usePiniaEnv } from '../stores/PiniaEnv.js';

export default {
  name: 'HeaderView',
  data() {
    return {
      menuShowOnOff: false,
    }
  },
  computed: {
    ...mapWritableState(usePiniaEnv, ['search', 'menu'])
  },
  methods: {
    ...mapActions(usePiniaEnv, ['toggleSearch', 'hideSearch', 'toggleMenu', 'hideMenu']),
  },
}
</script>

<style scoped>

</style>