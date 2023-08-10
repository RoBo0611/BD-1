<template>
    
      <nav class="navbar">
        <div>
        <a href="#">home</a>
        <a href="#">gallery</a>
        <a href="#">references</a>
        <a href="#">contact</a>
        </div>
        <div class="form">
          <form class="push" ref="form" action="login">
            <label for="login">personalise: </label>
            <input v-model="text" class="person" name="login" id="login" placeholder=" Enter you name">
            <button @click="addName"><font-awesome-icon :icon="['fas', 'user-astronaut']" /></button>
          </form>
        </div>
      </nav>

      
    <div class="button">
      <button @click="greet" >button</button>
    </div>

    <Transition class="box">
      <div class="box">
        
      </div>
    </Transition>

    <input v-model="names" type="text">
    <button @click="addName">Click here</button>
    

</template>

<script>
export default {
  name: 'Home-page',
  data() {
    return {
      isRed: true,
      msg: "welcome",
      text: '',
      replaceMsg: 'Welcome',
      names: [],
    };
  },
  methods: {
   greet(e) {
    console.log(e)
    document.querySelector('.button').append(document.createElement('button'));
   },
  addName(e) {
    this.names.push()
    console.log(e)
  }
    
   },
  };



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
body {
  height: 100vh;
  margin: 0;
  background-color: var(--background-colour);
}

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-transform: capitalize;
  padding: 1em;
  margin: 0;
  color: var(--primary-colour);
}

form {
  display: flex;
  height: 5px;
}

.box {
  height: 5rem;
  width: 5rem;
  background-color: aqua;
  margin: 1rem;
  border-radius: 5px;
  border: solid black;
}

.v-enter-active,
.v-leave-active {
  transition: skewy(360deg) 3s ease;
}

.person {
  color: #141517;
  background-color: var(--secondary-colour);
  border-radius: 5px;
  height: 1rem;
}



a {
  padding: 1em;
  border-radius: 10%;
  text-decoration: none;
  color: var(--primary-colour);
  font-weight: 500;
  transition: ease-out 1s;
}

a:hover {
  box-shadow: var(--action-colour) 5px 5px 10px;
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

.content { 
  position: relative;
  isolation: isolate;
  color: #141516;
  text-align: center;
  text-transform: uppercase;
}

.content::after {
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
    text-align: center;
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

.foot {
  display: flex;
  margin-right: auto;
  padding: 1rem;
  
}

.foothead {
  text-transform: uppercase;
  color: #6A9113;
}

.red {
  color: red;
}
</style>
