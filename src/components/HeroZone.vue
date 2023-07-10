<template>
  <div id="hero" @click="hideSearch">

    <div class="content">
      <div class="text">
        <div class="hello">
          <p class="hello__" contenteditable="true">
          <div class="dash">
            <img width="48" height="2" style="border: 2px solid #333333;"
              src="../assets/dash.png" alt="dash">
          </div>Hello</p>
          <br>
          <p class="iam" contenteditable="true">I'm
            <span class="thename">
              Vadym Chervoniak</span>
          </p>
          <br>
          <p editcontenteditable="true" class="titles">
            A FE / BE developer, web developer, big fan of vue.js and javascript.
          </p>
          <br>
          <p contenteditable="true" class="getKnowMe">
            Of course, there's so much more to me than just a few fancy titles.
            Scroll down and get to know me,
          </p>
        </div>
      </div>
      <div class="photo"></div>
    </div>

    <div class="iconScroll">
      <div class="media">
        <a href="https://www.facebook.com/vadym4che/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/fb.png" alt="media1">
        </a>
        <a href="https://www.linkedin.com/in/vadym4che/" target="_blank" rel="noopener noreferrer">
          <img src="../assets/in.png" alt="media2">
        </a>
        <a href="https://github.com/vadym4che" target="_blank" rel="noopener noreferrer">
          <img src="../assets/gh.png" alt="media3">
        </a>
        <a href="https://www.codewars.com/users/vadym4che" target="_blank" rel="noopener noreferrer">
          <img src="../assets/cw.png" alt="media4">
        </a>
        <a href="https://t.me/vadym4che" target="_blank" rel="noopener noreferrer">
          <img src="../assets/tg.png" alt="media5">
        </a>
      </div>
      <a class="scroll" href="#about">
        <p>SCROLL</p>
        <img src="../assets/down.png" alt="scrolldown">
      </a>
    </div>
  </div>
</template>

<script>

import { mapActions } from 'pinia';
import { usePiniaEnv } from '../stores/PiniaEnv.js';

export default {
  name: 'HeroZone',
  methods: {
    ...mapActions(usePiniaEnv, ['hideSearch']),
  },
}
</script>

<style scoped>
br {
  display: block;
  height: 20px;
}</style>