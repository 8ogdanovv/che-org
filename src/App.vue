<script>
export default {
  name: 'App',
  data() {
    return {
      menuShowOnOff: false,
    }
  },
  methods: {
    menuShow() {
      this.menuShowOnOff = !this.menuShowOnOff;
    }
  }
}
</script>

<template>
  <div id="root">
    <div id="hero">
    <header>
      <div class="logo">
        VAdym4ČHe
      </div>
      <div class="search">
        <input type="text" placeholder="search">
      </div>
      <nav class="menu">
        <button @click="menuShow">menu</button>
        <ul v-show="menuShowOnOff">
          <li><a href="#hero">#to top</a></li>
          <li><a href="#about">about me</a></li>
          <li><a href="wid">what I do</a></li>
          <li><a href="#folio">portfolio</a></li>
          <li><a href="#tested">testimonial</a></li>
          <li><a href="#git">contacts</a></li>
          <li><a href="#pro">projects</a></li>
          <li><a href="#blog">my blog</a></li>
          <li @click="menuShow">[x] close menu</li>
        </ul>
      </nav>
    </header>
    <div class="content">
      <div class="text">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores dolorem optio sit dicta error distinctio veniam doloremque, nemo vel excepturi minus dignissimos ipsam voluptatibus fuga suscipit perspiciatis vero facere aut alias repellendus soluta.
      </div>
      <img src="" alt="hero">
    </div>
    <div class="iconScroll">
      <div class="media">
        <img src="" alt="media1"><img src="" alt="media2"><img src="" alt="media3"><img src="" alt="media4"><img src="" alt="media5">
      </div>
      <div class="scroll">
        scroll vvv
      </div>
    </div>
  </div>
  <div id="about">
    <h2>About Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laudantium, quidem?</h2>
    <img src="" alt="photo">
  </div>
  <div id="wid">
    <h2>What I Do</h2>
    <div class="content">
      <div class="card">
        <img src="" alt="card1">
      </div>
      <div class="card">
        <img src="" alt="card2">
      </div>
      <div class="card">
        <img src="" alt="card3">
      </div>
    </div>

  </div>
  <div id="folio">
    portfolio
  </div>
  <div id="tested">
    tested
  </div>
  <div id="git">
    get in touch
  </div>
  <div id="pro">
    projects
  </div>
  <div id="blog">
    blog
  </div>
  <footer>
    footer
  </footer>
  </div>
</template>

<style>

</style>
