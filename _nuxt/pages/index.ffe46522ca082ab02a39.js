webpackJsonp([0],{"+ptz":function(t,e,s){"use strict";var i=function(){var t=this.$createElement,e=this._self._c||t;return e("section",{staticClass:"container"},[e("div",[e("h1",{staticClass:"title"},[this._v("\n      Welcome to lucifer!\n    ")]),e("div",[e("app-question")],1)])])};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},"/TYz":function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("fO5T"),r=s("+ptz"),o=!1;var n=function(t){o||s("hBD0")},a=s("VU/8")(i.a,r.a,!1,n,null,null);a.options.__file="pages/index.vue",e.default=a.exports},"0MJc":function(t,e,s){"use strict";var i=s("M/we"),r=!1;var o=function(t){r||s("Y0ue")},n=s("VU/8")(null,i.a,!1,o,null,null);n.options.__file="components/AppLogo.vue",e.a=n.exports},"9gFk":function(t,e,s){"use strict";e.a={data:function(){return{question:"",answer:"",outputText:"",answerProccess:!1,isToShowAnswer:!1,phrases:["Lord of Darkness"],tempPhrase:[]}},methods:{ask:function(){this.answer||(this.answer="Are you Kidding?! I demand respect!"),this.isToShowAnswer=!0},inputText:function(t){";"==t.data?(this.answerProccess=!this.answerProccess,this.answerProccess&&(this.tempPhrase=this.phrases[0].split("")),t.target.value=this.outputText):this.answerProccess?this.answer+=t.data:this.outputText+=t.data?t.data:"",this.answerProccess&&(this.outputText+=this.tempPhrase?this.tempPhrase.shift():".")},clean:function(t){setTimeout(function(){t.target.value="",this.outputText="",this.answerProccess=!1},0)}}}},EerU:function(t,e,s){"use strict";var i=s("9gFk"),r=s("aOAY"),o=s("VU/8")(i.a,r.a,!1,null,null,null);o.options.__file="components/AppQuestion.vue",e.a=o.exports},"M/we":function(t,e,s){"use strict";var i=function(){var t=this.$createElement;this._self._c;return this._m(0)};i._withStripped=!0;var r={render:i,staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"VueToNuxtLogo"},[e("div",{staticClass:"Triangle Triangle--two"}),e("div",{staticClass:"Triangle Triangle--one"}),e("div",{staticClass:"Triangle Triangle--three"}),e("div",{staticClass:"Triangle Triangle--four"})])}]};e.a=r},Y0ue:function(t,e,s){var i=s("auxt");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("389b891c",i,!1,{sourceMap:!1})},aOAY:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",{staticClass:"field"},[s("label",{staticClass:"label"},[t._v("Ask me what you know. If I win, give me your soul!")]),s("div",{staticClass:"control"},[s("input",{staticClass:"input",attrs:{type:"text",placeholder:"Ask here"},domProps:{value:t.outputText},on:{input:t.inputText,focus:t.clean}})]),s("div",{staticClass:"field is-grouped"},[s("div",{staticClass:"control"},[s("button",{staticClass:"button is-link",on:{click:t.ask}},[t._v("Sell my soul")])])])]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.isToShowAnswer,expression:"isToShowAnswer"}]},[s("h2",{staticClass:"subtitle"},[t._v(t._s(t.answer))])])])};i._withStripped=!0;var r={render:i,staticRenderFns:[]};e.a=r},auxt:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".VueToNuxtLogo{display:inline-block;-webkit-animation:turn 2s linear forwards 1s;animation:turn 2s linear forwards 1s;-webkit-transform:rotateX(180deg);transform:rotateX(180deg);position:relative;overflow:hidden;height:180px;width:245px}.Triangle{position:absolute;top:0;left:0;width:0;height:0}.Triangle--one{border-left:105px solid transparent;border-right:105px solid transparent;border-bottom:180px solid #41b883}.Triangle--two{top:30px;border-left:87.5px solid transparent;border-right:87.5px solid transparent;border-bottom:150px solid #3b8070}.Triangle--three,.Triangle--two{left:35px;-webkit-animation:goright .5s linear forwards 3.5s;animation:goright .5s linear forwards 3.5s}.Triangle--three{top:60px;border-left:70px solid transparent;border-right:70px solid transparent;border-bottom:120px solid #35495e}.Triangle--four{top:120px;left:70px;-webkit-animation:godown .5s linear forwards 3s;animation:godown .5s linear forwards 3s;border-left:35px solid transparent;border-right:35px solid transparent;border-bottom:60px solid #fff}@-webkit-keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@keyframes turn{to{-webkit-transform:rotateX(0deg);transform:rotateX(0deg)}}@-webkit-keyframes godown{to{top:180px}}@keyframes godown{to{top:180px}}@-webkit-keyframes goright{to{left:70px}}@keyframes goright{to{left:70px}}",""])},fO5T:function(t,e,s){"use strict";var i=s("0MJc"),r=s("EerU");e.a={components:{AppLogo:i.a,AppQuestion:r.a}}},hBD0:function(t,e,s){var i=s("m3iI");"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);s("rjj0")("1b22dc92",i,!1,{sourceMap:!1})},m3iI:function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".container{min-height:100vh;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;text-align:center}.title{font-family:Quicksand,Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;display:block;font-weight:300;font-size:100px;color:#35495e;letter-spacing:1px}.subtitle{font-weight:300;font-size:42px;color:#526488;word-spacing:5px;padding-bottom:15px}.links{padding-top:15px}",""])}});