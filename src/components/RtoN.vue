<template>
  <h1 class="green"> Roman to Numeral Converter </h1>
  <div> 
    <h3> Roman&nbsp:  <input type="text" v-model="roman"/> 
      <button @click="convert"> CONVERT </button>
    </h3>
  </div> 
  <div> 
    <h3> Result &nbsp: {{result}} </h3>
  </div> 


</template>



<script>
const romanHash = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000,
};

export default{
  name: 'FromRoman',
  data(){
    return{
      roman: "",
      result: ""
    }
  },
  mounted(){

  },
  methods: {
    convert(event){
      var r = this.roman;

      // Check if input is empty
      if (r == ""){
        alert("Please Input a Roman Number !")
        this.result = ""
      } else {
          r = r.toUpperCase();
          var acc = 0;

          // Converting roman to number
          for (var i = 0; i<r.length; i++){
            if (r[i] === "I" && r[i+1] === "V") {
              acc += 4;
              i++;
            } else if (r[i] === "I" && r[i+1] === "X") {
              acc += 9;
              i++;
            } else if (r[i] === "X" && r[i+1] === "L"){
              acc += 40;
              i++;
            } else if (r[i] === "X" && r[i+1] === "C"){
              acc += 90;
              i++;
            } else if (r[i] === "C" && r[i+1] === "D"){
              acc += 400;
              i++;
            } else if (r[i] === "C" && r[i+1] === "M"){
              acc += 900;
              i++;
            } else {
              acc += romanHash[r[i]];
            }
          }
          if (!isNaN(acc)) {
            this.result = String(acc);
          } else {
            alert("Please Input a Valid Roman Number !")
          }
      }
    }
  }
}

</script>

<style>
h1 {
  font-weight: 500;
  font-size: 2.6rem;
  top: -10px;
}
h3 {
  font-size: 1.2rem;
}
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
}

button {
  background-color: hsla(160, 100%, 37%, 1);
  border-radius: 3px;
  color: white;
  border: none;
  padding: 2px 10px;
  margin-left: 5px;
  font-size: 1rem;
  cursor: pointer
}

button:hover{
  background-color: hsla(160, 97%, 40%, 0.76);
}

@media (hover: hover) {
a:hover {
  background-color: hsla(160, 100%, 37%, 0.2);
}
}
</style> 


