const React=require("react");
const E=React.createElement;
const DevTools=require("mobx-react-devtools").default;
const local=window.location.host.indexOf("127.0.0.1")>-1;

const {observer}=require("mobx-react");

module.exports = observer(class TodoList extends React.Component{
	render(){
		return E("div",{},
			local?E(DevTools):null,
			this.props.store.todos.map((todo,key)=>E('div',{key},todo)),
			E("span",{},this.props.store.total)
		)
	}
})

