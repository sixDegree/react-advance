var React=require("react");
var ReactDOM=require("react-dom");

module.exports=React.createClass({
  render:function(){
    var showFormStyle={display:this.props.showForm?"block":"none"};
    return (
      <form style={showFormStyle} onSubmit={this.submitHandler} onReset={this.resetHandler}>
        <div className="form-group">
          <label>Question</label>
          <input type="text" className="form-control" placeholder="Enter your question" ref="quesTitleInput" />
        </div>
        <div className="form-group">
          <label>Description</label>
          <textarea className="form-control" placeholder="Question Description" rows="3" ref="quesDescInput"></textarea>
        </div>
        <div className="form-group text-right">
          <button className="btn btn-default" type="reset">Cancel</button> &nbsp; 
          <button className="btn btn-success" type="submit">Submit</button>
        </div>
      </form>
    );
  },
  submitHandler:function(e){
    e.preventDefault();
    var newQuestion={
      title:ReactDOM.findDOMNode(this.refs.quesTitleInput).value,
      description:ReactDOM.findDOMNode(this.refs.quesDescInput).value,
      voteCount:0
    };
    this.props.addNewQuestion(newQuestion);
    e.target.reset();
  },
  resetHandler:function(e){
    this.props.toggleForm();
  }

});