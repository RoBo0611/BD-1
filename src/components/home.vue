<template>
      <nav class="navbar">
        <a class="navcon" href="#">home</a>
        <a class="navcon" href="#">gallery</a>
        <a class="navcon" href="#">references</a>
        <a class="navcon" href="#">contact</a>
      </nav>
      <header class="head">
        <div>
          <h1>{{ msg }}</h1>
        </div>
      </header>

    <section class="diagonal">
      <div class="wrapper">

        <h2>Section Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos autem perferendis recusandae saepe a ea dicta iusto inventore? Veritatis asperiores soluta quam placeat eligendi numquam. Ducimus maxime dolores nam vitae.</p>

      </div> 
    </section>
    <section class="else">
      <div class="wrapper">

        <h2>Section Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos autem perferendis recusandae saepe a ea dicta iusto inventore? Veritatis asperiores soluta quam placeat eligendi numquam. Ducimus maxime dolores nam vitae.</p>

      </div> 
    </section>
    <section class="some">
      <div class="wrapper">

        <h2>Section Title</h2>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quos autem perferendis recusandae saepe a ea dicta iusto inventore? Veritatis asperiores soluta quam placeat eligendi numquam. Ducimus maxime dolores nam vitae.</p>

      </div> 
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
  background-color: #141516;
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

.head {
  font-size: xx-large;
  color: #6A9113;
  text-transform: uppercase;
  text-align: center;
}

.wrapper {
  max-width: 50rem;
  margin-inline: auto;
  padding-inline: 1rem;
}

section {
  padding-block: 5rem;
} 

.diagonal {
  --skew-angle: 5deg;
  --background:  #6A9113;
  /* fallback for old browsers */
  background: -webkit-linear-gradient(to left, #141517, #6A9113);
  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to left, #141517, #6A9113);
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  position: relative;
  isolation: isolate;
}

.diagonal::after {
  content: "";
  background: (var(--background));
  z-index: -1;
  position: absolute;
  inset: 0;
  transform: skewY(-5deg);
}

/*diagonal wont work. something wroing with the skewY.



/* .content {
  display: flex;
  height: 80vh;
  padding-top: 2rem;
  color: #6A9113;
  background-color: #141517;
  height: 3rem;
}

.card1 {
  background-color: #6A9113;
  border: #141517;
} */


</style>
