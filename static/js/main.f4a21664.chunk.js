(this.webpackJsonpreact_hw2_feedback=this.webpackJsonpreact_hw2_feedback||[]).push([[0],{13:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(2),o=a.n(c),l=a(3),u=a(4),i=a(5),d=a(7),s=a(6),m=function(e){var t=e.name,a=e.value;return r.a.createElement("p",null,t,": ",a)},b=function(e){var t=e.good,a=e.neutral,n=e.bad,c=e.total,o=e.positivePercentage;return r.a.createElement(r.a.Fragment,null,r.a.createElement(m,{name:"Good",value:t}),r.a.createElement(m,{name:"Neutral",value:a}),r.a.createElement(m,{name:"Bad",value:n}),r.a.createElement(m,{name:"Total",value:c()}),r.a.createElement(m,{name:"Positive",value:o()}))},v=function(e){var t=e.options,a=e.onLeaveFeedback;return r.a.createElement(n.Fragment,null,t.map((function(e){return r.a.createElement("button",{key:e,type:"button",onClick:function(){return a(e)}},e)})))},f=function(e){var t=e.title,a=e.children;return r.a.createElement("section",null,r.a.createElement("h2",null,t),a)},E=function(e){var t=e.message;return r.a.createElement("p",null,t)};E.defaultProps={message:"No feedback"};var k=E,g=Object.values({GOOD:"good",NEUTRAL:"neutral",BAD:"bad"}),h=function(e){Object(d.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(u.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={good:0,neutral:0,bad:0},e.handleAddFeedback=function(t){e.setState((function(e){return Object(l.a)({},t,e[t]+1)}))},e.countTotalFeedback=function(){return Object.values(e.state).reduce((function(e,t){return e+t}),0)},e.countPositiveFeedbackPercentage=function(){var t=e.state.good,a=0;return t&&(a=Math.floor(t/e.countTotalFeedback()*100)),"".concat(a,"%")},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this.state,t=e.good,a=e.neutral,n=e.bad;return r.a.createElement("div",null,r.a.createElement(f,{title:"Please, leave Feedback"},r.a.createElement(v,{options:g,onLeaveFeedback:this.handleAddFeedback})),r.a.createElement(f,{title:"Statistics"},this.countTotalFeedback()?r.a.createElement(b,{good:t,neutral:a,bad:n,total:this.countTotalFeedback,positivePercentage:this.countPositiveFeedbackPercentage}):r.a.createElement(k,{message:"No feedback given"})))}}]),a}(n.Component);o.a.render(r.a.createElement(h,null),document.getElementById("root"))},8:function(e,t,a){e.exports=a(13)}},[[8,1,2]]]);
//# sourceMappingURL=main.f4a21664.chunk.js.map