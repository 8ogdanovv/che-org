<template>
  <div id="folio">
    <h2>Portfolio</h2>

    <ul class="list">
      <li>
      <span class="mob">-</span>
        All</li>
      <span class="desk">-</span>
      <li>
      <span class="mob">-</span>
        FE</li>
      <span class="desk">-</span>
      <li>
        <span class="mob">-</span>
        BE</li>
      <span class="desk">-</span>
      <li>
      <span class="mob">-</span>
        Design</li>
    </ul>

    <div class="cases">
      <!-- <img src="../assets/tile1.png" alt="case">
      <img src="../assets/tile2.png" alt="case">
      <img src="../assets/tile3.png" alt="case">
      <img src="../assets/tile4.png" alt="case">
      <img src="../assets/tile5.png" alt="case">
      <img src="../assets/tile6.png" alt="case"> -->
      <div class="col1">
          <div class="case1"></div>
          <div class="case2"></div>
      </div>
      <div class="col2">
          <div class="case3"></div>
          <div class="case4"></div>
      </div>
      <div class="col3">
         <div class="case5"></div>
          <div class="case6"></div>
      </div>

    </div>


    <div class="slider">
      <div class="dots">
        <img src="../assets/dot0.png" alt="dot">
        <img src="../assets/dot1.png" alt="dot">
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
    name: 'MyFolio'
  }
</script>

<style scoped>

</style>