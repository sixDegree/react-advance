var React=require("react");

module.exports=React.createClass({
  getDefaultProps:function(){
    return {question:[]};
  },
  render:function(){
    this.sortQuestions();
    var items= this.props.questions.map(function(question){
       return this.renderItem(question)
     }.bind(this));
    return <div>{items}</div>
  },
  renderItem:function(question,self){
    return (
      <div className="media" key={question[".key"]}>
        <div className="media-left">
           <button className="btn btn-default" 
              onClick={this.voteUpdate.bind(null,question,1)}>
            <span className="glyphicon glyphicon-chevron-up"></span>
            <div>{question.voteCount}</div>
          </button>
          <button className="btn btn-default" 
              onClick={this.voteUpdate.bind(null,question,-1)}>
            <span className="glyphicon glyphicon-chevron-down"></span>
          </button>
        </div>
        <div className="media-body">
          <h4 className="media-heading">{question.title}</h4>
          <p>{question.description}</p>
        </div>
        <div className="media-right">
          <button className="btn btn-default" onClick={this.props.removeItem.bind(null,question)}>
            <span className="glyphicon glyphicon-remove"></span>
          </button>
        </div>
      </div>
    );
  },

  voteUpdate:function(question,addition){
    //console.log(arguments);
   /* question.voteCount=question.voteCount+addition;
    this.props.voteUpdate(question[".key"],question.voteCount);
    this.forceUpdate();*/
    this.props.voteUpdate(question[".key"],question.voteCount+addition);
  },
  sortQuestions:function(){
    this.props.questions.sort(function(a,b){
      return b.voteCount-a.voteCount;
    });
  }
});
