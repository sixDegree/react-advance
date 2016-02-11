var React=require("react");

module.exports=React.createClass({
	render:function(){
	  return (
	    <div className="jumbotron">
	      <h1 className="text-center">Question & Answer</h1> 
	      <button className="btn btn-success pull-right" onClick={this.props.toggleForm}>Add Question</button>
	    </div>
	  );
	}
});