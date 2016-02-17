var React=require("react");

module.exports=React.createClass({
  getDefaultProps:function(){
    return {question:[]};
  },
  componentWillReceiveProps:function(newProps){
      if(newProps.newQuestion){
        var newQuestion=newProps.newQuestion;
         if(!newQuestion.id){
          newQuestion.id=this.props.questions.length+1;
          this.props.questions.push(newQuestion);
          this.forceUpdate();
        }
      }
  },
  render:function(){
    this.sortQuestions();
    var self=this;
    var items= this.props.questions.map(function(question){
       return self.renderItem(question)
     });
    return <div>{items}</div>
  },
  renderItem:function(question){
    return (
      <div className="media" key={question.id}>
        <div className="media-left">
           <button className="btn btn-default" 
              onClick={this.voteUpdate.bind(this,question,1)}>
            <span className="glyphicon glyphicon-chevron-up"></span>
            <div>{question.voteCount}</div>
          </button>
          <button className="btn btn-default" 
              onClick={this.voteUpdate.bind(this,question,-1)}>
            <span className="glyphicon glyphicon-chevron-down"></span>
          </button>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{question.title}</h4>
          <p>{question.description}</p>
        </div>
      </div>
    );
  },

  voteUpdate:function(question,addition){
    //console.log(arguments);
    question.voteCount=question.voteCount+addition;
    this.props.voteUpdate(question.id,question.voteCount);
    this.forceUpdate();
  },
  sortQuestions:function(){
    this.props.questions.sort(function(a,b){
      return b.voteCount-a.voteCount;
    });
  }
});
