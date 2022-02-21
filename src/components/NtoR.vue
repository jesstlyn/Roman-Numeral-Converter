<template>
  <h1 class="green"> Numeral to Roman Converter </h1>
  <div> 
    <h3> Numeral: <input type="text" v-model="numeral"/>
        <button @click="convert"> CONVERT </button>
    </h3>
  </div> 
  <div> 
    <h3> Result &nbsp &nbsp:   {{result}} </h3>
  </div> 


</template>

<script>
 var roman = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1
  };

export default{
  name: 'FromNumeral',
  data(){
    return{
      numeral: "",
      result: ""
    }
  },
  mounted(){

  },
  methods: {
    convert(event){
        var num = this.numeral;

        // Check if input is empty
        if (num == "" ){
            alert("Please Input a Number ! ")
        } else {
            //Check if input is a number
            if (!isNaN(num)){
                num = parseInt(this.numeral);
                var str = '';

                //Converting number to roman 
                for (var i of Object.keys(roman)) {
                    var q = Math.floor(num / roman[i]);
                    num -= q * roman[i];
                    str += i.repeat(q);
                }
                this.result = str;
            } else{
                alert("Please Input a Valid Number ! ")
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


