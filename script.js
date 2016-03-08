/**
 * @author joe
 * @time 2016-3-9 00:10
 */
Vue.config.debug = true;
var vue  = new Vue({
    el:'#app',
    data:{
        completed:true,
        newTodo:'',
        todolist:[
            {
                details:"hello world! I'm joe.",
                completed:false,
            },
            {
                details:"It was the age of wisdom,it was the age of foolishness.",
                completed:true,
            },
        ],
    },
    methods:{
        del:function(index){
            this.todolist.splice(index,1);
        },
        add:function(){
            if(typeof this.newTodo !== "undefined" && this.newTodo !== ''){
                this.todolist.push({details:this.newTodo,completed:false});
                this.newTodo = '';
            }
        },
        complete:function(index) {
            if(typeof this.todolist !== 'undefined' && typeof this.todolist[index].completed !== 'undefined'){
                this.todolist[index].completed = !this.todolist[index].completed;
            }
            console.log("index:" + index + ",completed:" + this.todolist[index].completed);
        }
    },
});
