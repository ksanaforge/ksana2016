const {autorun,extendObservable} =require("mobx");
class TodoStore {
	constructor (){
		extendObservable(this,{
			todos : ["buy mild","buy eggs"],
			get total(){
				return this.todos.length;
			}
		});
	}
}
var store = window.store=new TodoStore();
/*
autorun(()=>{
	console.log(store.todos[0]);
})
*/
module.exports=store;
