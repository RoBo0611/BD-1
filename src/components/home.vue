<template>
      <nav class="navbar">
        <a href="#">home</a>
        <a href="#">gallery</a>
        <a href="#">references</a>
        <a href="#">contact</a>
          <form class="push" ref="form" action="login">
            <label for="login">personalise: </label>
            <input v-model="text" class="person" name="login" id="login" placeholder=" Enter you name">
          <button href="#"><font-awesome-icon :icon="['fas', 'user-astronaut']" /></button>
          </form>
      </nav>

      <header class="head">
        <div>
          <h1>{{ msg }} {{ text }}</h1>
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

        <h2>play with the title</h2>
        <p class="buttons">
          <button @click="reverseMessage">click me to see what happens</button>
          <button @click="text += '!'">append "!"</button>
          <button @click="resetForm()"> reset title</button>
        </p>

      </div> 
    </section>

    <section class="some">
      <div class="wrapper">

        <h2>Attribute bindings</h2>
        <p :class="{ red: isRed }" @click="toggleRed">click and check the color of the text again</p>
      </div> 
    </section>

    <section class="else">
      <div class="buttons">

        <h2>lets get some info</h2>
        <p></p>
      </div> 
    </section>

    <footer>
      <div class="foot">
        <a href="https://apple.com"><font-awesome-icon :icon="['fab', 'apple']" size="lg" /></a>
        <a href="https://youtube.com"><font-awesome-icon :icon="['fab', 'youtube']" size="lg" /></a>
        <a href="https://github.com"><font-awesome-icon :icon="['fab', 'github']" size="lg" /></a>
      </div>
    </footer>
    
 
</template>

<script>
export default {
  name: 'Home-page',
  data() {
    return {
      isRed: true,
      msg: "welcome",
      text: '',
    }
  },
  methods: {
    reverseMessage() {
      this.msg = this.msg.split('').reverse().join('')
    },
    toggleRed() {
      this.isRed = !this.isRed
    },
    resetForm() {
      this.$refs.form.reset()
    },
    resetMsg() {
      this.msg.reset()
    },
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
  justify-content: left;
  text-transform: capitalize;
  padding: 1em;
  margin: 0;
  color: #6A9113;
}

form {
  height: 5px;
}

.push {

 margin-left: auto;
 height: 5px;
}

.person {
  color: #141517;
  background-color: #6A9113;
  border-radius: 10px;
}



a {
  padding: 1em;
  border-radius: 10%;
  text-decoration: none;
  color: #6A9113;
  font-weight: 500;
  transition: ease-out 1s;
}

a:hover {
  box-shadow: #6A9113 5px 5px 10px;
}

.head {
  font-size: xx-large;
  color: #6A9113;
  text-transform: uppercase;
  text-align: center;
  text-shadow: #54750c 1px 0 10px;
  transform: skewY(5deg)
  
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
  position: relative;
  isolation: isolate;
  color: #141516;
}

.diagonal::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  transform: skewY(5deg);
  background: linear-gradient(-45deg, #141517, #6A9113);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* fallback for old browsers */
    /* background: -webkit-linear-gradient(-45deg, #141517, #6A9113); */
    /* Chrome 10-25, Safari 5.1-6 */
}

.else {
    color: #6A9113;
    text-transform: uppercase;
    display: flex;
    
}

h2 {
  text-align: center;
}

.buttons {
  display: flex;
  flex-direction: row;
}

button {
  margin: 2rem;
  text-transform: uppercase;
  background: linear-gradient(-45deg, #141517,#6A9113);
  padding: 1rem;
  border-radius: 5px;
  transition: ease-out 1s;
}

button:hover {
  box-shadow: 5px 5px 10px #6A9113;
}

.some { 
  position: relative;
  isolation: isolate;
  color: #141516;
  text-align: center;
  text-transform: uppercase;
}

.some::after {
  content: "";
  z-index: -1;
  position: absolute;
  inset: 0;
  transform: skewY(5deg);
  background: linear-gradient(-45deg, #141517, #6A9113);
    /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
    /* fallback for old browsers */
    /* background: -webkit-linear-gradient(-45deg, #141517, #6A9113); */
    /* Chrome 10-25, Safari 5.1-6 */
}

.red {
  color: red;
}

.foot {
  display: flex;
  margin-right: auto;
  padding: 1rem;
  
}

.foothead {
  text-transform: uppercase;
  color: #6A9113;
}
</style>
