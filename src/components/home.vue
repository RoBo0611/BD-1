<template>
      <nav class="navbar">
        <a class="navcon" href="#">home</a>
        <a class="navcon" href="#">gallery</a>
        <a class="navcon" href="#">references</a>
        <a class="navcon" href="#">contact</a>
      </nav>
    <section class="content">
      {{ msg }}
    </section>
 
</template>

<script>
export default {
  name: 'Home-page',
  props: {
    msg: String
  }
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  height: 100vh;
  margin: 0;
  background: #6A9113;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to bottom, #141517, #6A9113);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to bottom, #141517, #6A9113);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}



.navbar {
  display: flex;
  justify-content: space-evenly;
  text-transform: capitalize;
  padding: 1em;
  margin: 0;
  
 
}

a {
  text-decoration: none;
  color: #6A9113;
  font-weight: 500;
  
}

a:hover {
  transition-delay: all 1s ease-out;
  font-weight: bold;
  text-decoration: underline;
}

.content {
  padding-top: 2rem;
  color: #6A9113;
  background-color: #141517;
  height: 3rem;
}


</style>
