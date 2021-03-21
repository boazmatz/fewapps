<template src="../templates/calculator/calculator.html">
</template>

<script>
export default {
  name: 'calculator',
    data () {
      return {
       newToDo: '',
       ExisitToDo: [
         {text: 'Go to School', id:0},
         {text: 'Go Shopping', id:1},
         {text: 'Go to do some sport', id:2}
         ]
      }
    },
    methods: {
        
          sumInputs() {
            let totalOfExcersice = document.getElementById("totalOfExcercise")
            let numberA = document.getElementById("numberA").value;
            let numberB = document.getElementById("numberB").value;
            let getNumA = Number(numberA)
            let getNumB = Number(numberB)
            let choosenOperator = this.select;
            if (choosenOperator == 'Plus') {
                totalOfExcersice.innerHTML = getNumA + getNumB;
            }
            else if (choosenOperator == 'Minus') {
                totalOfExcersice.innerHTML = getNumA - getNumB;
            } else if (choosenOperator == 'Multiplication') {
                totalOfExcersice.innerHTML = getNumA * getNumB;
            } else if (choosenOperator == 'Division') {
                totalOfExcersice.innerHTML = getNumA / getNumB;
            } else {
                
            } 
            }

        }

}
</script>

<style src="../templates/calculator/calculator.css">
</style>