var React=require("react");
var ReactDOM=require("react-dom");

var ReactFire=require("reactfire");
var Firebase=require("firebase");
var rootUrl="https://scorching-torch-8742.firebaseio.com/";

var QuestionHeader=require("./question-header");
var QuestionForm=require("./question-form");
var QuestionList=require("./question-list-fb");

module.exports = React.createClass({
  mixins:[ReactFire],
  getInitialState:function(){
    return {
      showForm:false,
      newQuestion:null,
      questions:[]
    }
  },

  componentWillMount:function(){
    console.log("Question Will Mount...");
    this.fb=new Firebase(rootUrl+"questions/");
    this.bindAsArray(this.fb,"questions");        // => this.state.questions
    this.fb.on("value",this.loadDataHandler);
  },
  loadDataHandler:function(){
    console.log("Data Loaded");
  },
  render: function() {
    return (
      <div>
        <QuestionHeader toggleForm={this.toggleForm}/>
        <QuestionForm showForm={this.state.showForm} toggleForm={this.toggleForm} addNewQuestion={this.addNewQuestion}/>
        <hr/>
        <QuestionList questions={this.state.questions} voteUpdate={this.voteUpdate} removeItem={this.removeItem}/>
      </div>
    );
  },
  toggleForm:function(e){
    this.setState({showForm:!this.state.showForm});
  },
  addNewQuestion:function(newQuestion){
    //this.firebaseRefs.questions.push(newQuestion);
    this.fb.push(newQuestion);
    this.setState({newQuestion:newQuestion});
  },
  voteUpdate:function(questionId,voteCount){
    this.fb.child(questionId).update({voteCount:voteCount});
  },
  removeItem:function(question){
    this.fb.child(question[".key"]).remove();
  }

});
