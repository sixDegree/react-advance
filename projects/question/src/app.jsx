var React=require("react");
var ReactDOM=require("react-dom");
var Question=require("./components/question");

//require("../sass/style.scss");

var opts={
   showForm:true,
   newQuestion:null,
   questions:[
      {
        id:1,
        title:"Why do I have to complete a CAPTCHA?",
        description:"Completing the CAPTCHA proves you are a human and gives you temporary access to the web property.",
        voteCount:22
      },
      {
        id:2,
        title:"What can I do to prevent this in the future?",
        description:"If you are on a personal connection, like at home, you can run an anti-virus scan on your device to make sure it is not infected with malware.",
        voteCount:10
      }
   ]

};

//var element = React.createElement(Question, opts);
//ReactDOM.render(element,document.getElementById('app'));


var QuestionFactory=React.createFactory(Question);
ReactDOM.render(QuestionFactory(opts),document.getElementById('app'));

//ReactDOM.render(<Question {...opts} />,document.getElementById('app'));


