var React=require("react");
var ReactDOM=require("react-dom");

var QuestionHeader=require("./question-header");
var QuestionForm=require("./question-form");
var QuestionList=require("./question-list");

module.exports= React.createClass({
  getDefaultProps:function(){
    return {
      questions:[]
    };
  },
  getInitialState:function(){
    return {
      showForm:false,
      newQuestion:null
    }
  },
  render: function() {
    return (
      <div>
        <QuestionHeader toggleForm={this.toggleForm}/>
        <QuestionForm showForm={this.state.showForm} toggleForm={this.toggleForm} addNewQuestion={this.addNewQuestion}/>
        <hr/>
        <QuestionList newQuestion={this.state.newQuestion} questions={this.props.questions} voteUpdate={this.voteUpdate}/>
      </div>
    );
  },
  toggleForm:function(e){
    this.setState({showForm:!this.state.showForm});
  },
  addNewQuestion:function(newQuestion){
    this.setState({newQuestion:newQuestion});
  },
  voteUpdate:function(questionId,voteCount){
    console.log("update question "+questionId+" vote: "+voteCount);
  }

});