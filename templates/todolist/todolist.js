export default {
    name: 'app',
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
    methods:{
      add(){
        this.ExisitToDo.push({
          text: this.newToDo,
          id: new Date().valueOf()
          }),
          this.newToDo=''
        },
        deleteToDo(i){
          this.ExisitToDo.splice(i,1)
  }
      }
    }