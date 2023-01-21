<template>
  <!-- :style="{ backgroundColor: color }" -->
  <div id="wid">
    <h2>What I Do</h2>
    <div class="content">
      <div class="card">
        <div class="head">
        <h3>
          FE Development
        </h3>
        <p>
          User interface design, user experience design, user research.
        </p>
      </div>
        <p>
          Read more
          <img src="../assets/right0.png" alt="read more">
        </p>
      </div>
      <div class="card">
        <div class="head">
        <h3>
          BE Development
        </h3>
        <p>
          API design, DX design, SSR and more.
        </p>
      </div>
        <p>
          Read more
          <img src="../assets/right1.png" alt="read more">
        </p>
      </div>
      <div class="card">
        <div class="head">
        <h3>
          Web Design
        </h3>
        <p>
          Creating your own unique 100% customized styles and UI / UX design.
        </p>
      </div>
        <p>
          Read more
          <img src="../assets/right1.png" alt="read more">
        </p>
      </div>
    </div>

    <div class="slider">
      <div class="dots">
        <img src="../assets/dot0.png" alt="dot">
        <img src="../assets/dot1.png" alt="dot">
        <img src="../assets/dot1.png" alt="dot">
      </div>
      <div class="arrows">
        <img src="../assets/arrow2.png" alt="back">
        <img src="../assets/arrow1.png" alt="forward">
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'WhatIDo',
    data() {
      return {
        // color: this.$attrs.color
      }
    }
  }
</script>

<style scoped>

#wid {
  align-items: center;
}

</style>