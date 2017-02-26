const store=require("./store");
const React=require("react");
const ReactDOM=require("react-dom");
const E=React.createElement;
const {useStrict}=require("mobx");
const TodoList=require("./todolist");

//useStrict(true)
ReactDOM.render(E(TodoList,{store}),document.getElementById("root"));