(this["webpackJsonpweather-gif"]=this["webpackJsonpweather-gif"]||[]).push([[0],{47:function(e,t,a){e.exports=a(81)},49:function(e,t,a){},76:function(e,t,a){},81:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=(a(49),a(3)),c=a(4),s=a(6),i=a(5),o=a(7),m=a(2),u=a(8),d=a(19),p=a(25),h=a.n(p),E=a(18),f=a.n(E),g=function(e){e?f.a.defaults.headers.common.Authorization=e:delete f.a.defaults.headers.common.Authorization},v={GETWEATHER:"GETWEATHER",POSTWEATHER:"POSTWEATHER",DELETEONEWEATHER:"DELETEONEWEATHER",TEMPERATURE:"TEMPERATURE"},b=function(e){return{type:"SET_CURRENT_USER",payload:e}},y=function(){return function(e){localStorage.removeItem("jwtToken"),g(!1),e(b({}))}},w=(a(76),a(17)),N=a(42),S=a(43),T=a(13),C=a(77),D={isAuthenticated:!1,user:{},loading:!1},O={emailNotFound:"",passwordIncorrect:""},j=a(45),x={weatherData:[],temperature:"F"};var R=Object(w.combineReducers)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:D,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_CURRENT_USER":return Object(T.a)({},e,{isAuthenticated:!C(t.payload),user:t.payload});case"USER_LOADING":return Object(T.a)({},e,{loading:!0});default:return e}},errors:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:O,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ERRORS":return t.payload;case"DELETE_ERROR_MSGS":default:return e}},weather:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v.GETWEATHER:return Object(T.a)({},e,{weatherData:t.payload.savedWeatherData,temperature:t.payload.temperature});case v.POSTWEATHER:return Object(T.a)({},e,{weatherData:[].concat(Object(j.a)(e.weatherData),[JSON.parse(t.payload)])});case v.DELETEONEWEATHER:return Object(T.a)({},e,{weatherData:e.weatherData.filter((function(e){return e.location!==t.payload}))});case v.TEMPERATURE:return Object(T.a)({},e,{temperature:t.payload});default:return e}}}),k=[S.a],W=Object(w.createStore)(R,{},Object(N.composeWithDevTools)(w.applyMiddleware.apply(void 0,k))),F=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"navbar-fixed"},r.a.createElement("nav",{className:"z-depth-0"},r.a.createElement("div",{className:"nav-wrapper white"},r.a.createElement(u.b,{to:"/",style:{fontFamily:"monospace"},className:"col s5 brand-logo center black-text"},"Weather.GIFS"))))}}]),t}(n.Component),A=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).getGif=function(e){var t=[];fetch("https://api.giphy.com/v1/gifs/search?api_key=NK7bgE246YG7l7Rp55mggieuBzvJZ035&q=".concat(e,"&limit=25&offset=0&rating=G&lang=en")).then((function(e){return e.json()})).then((function(e){console.log(e.data),e.data.forEach((function(e,a){t.push(e.images.original.url)}))})).then((function(e){a.setState({gifArr:t[Math.floor(Math.random()*t.length)]})})).catch((function(e){return console.log(e)})).finally(console.log("gif search finished"))},a.state={gifArr:void 0},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getGif("weather")}},{key:"render",value:function(){return r.a.createElement("div",{className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("img",{className:"introGif",srcSet:this.state.gifArr,alt:"weatherGif"}),r.a.createElement("h4",null,"View the weather in your favorite cities with a funny .gif!"),r.a.createElement("br",null),r.a.createElement("div",{className:"col s6"},r.a.createElement(u.b,{to:"/register",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Register")),r.a.createElement("div",{className:"col s6"},r.a.createElement(u.b,{to:"/login",style:{width:"140px",borderRadius:"3px",letterSpacing:"1.5px"},className:"btn btn-large btn-flat waves-effect white black-text"},"Log In")))))}}]),t}(n.Component),M=a(21),L=a(20),G=a.n(L),H=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).onChange=function(t){e.setState(Object(M.a)({},t.target.id,t.target.value))},e.onSubmit=function(t){t.preventDefault();var a={name:e.state.name,email:e.state.email,password:e.state.password,password2:e.state.password2};e.props.registerUser(a,e.props.history),console.log(a)},e.state={name:"",email:"",password:"",password2:"",errors:{}},e}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(u.b,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Register")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Already have an account? ",r.a.createElement(u.b,{to:"/login"},"Log in"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.name,error:e.name,id:"name",type:"text",className:G()("",{invalid:e.name})}),r.a.createElement("label",{htmlFor:"name"},"Name"),r.a.createElement("span",{className:"red-text"},e.name)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:G()("",{invalid:e.email})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:G()("",{invalid:e.password})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password2,error:e.password2,id:"password2",type:"password",className:G()("",{invalid:e.password2})}),r.a.createElement("label",{htmlFor:"password2"},"Confirm Password"),r.a.createElement("span",{className:"red-text"},e.password2)),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Sign up"))))))}}]),t}(n.Component),U=Object(m.b)((function(e){return{auth:e.auth,errors:e.errors}}),{registerUser:function(e,t){return function(a){f.a.post("/api/users/register",e).then((function(e){return t.push("/login")})).catch((function(e){return a({type:"GET_ERRORS",payload:e.response.data})}))}}})(Object(d.g)(H)),_=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(i.a)(t).call(this))).onChange=function(t){e.setState(Object(M.a)({},t.target.id,t.target.value))},e.clearErrorMsgs=function(){e.props.clearMsgs()},e.onSubmit=function(t){t.preventDefault();var a={email:e.state.email,password:e.state.password};console.log(a),e.props.loginUser(a)},e.errors=r.a.createRef(),e.state={email:"",password:"",errors:{}},e}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentWillReceiveProps",value:function(e){e.auth.isAuthenticated&&this.props.history.push("/dashboard/".concat(this.state.email)),e.errors&&this.setState({errors:e.errors})}},{key:"render",value:function(){var e=this.state.errors;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:{marginTop:"4rem"},className:"row"},r.a.createElement("div",{className:"col s8 offset-s2"},r.a.createElement(u.b,{to:"/",className:"btn-flat waves-effect"},r.a.createElement("i",{className:"material-icons left"},"keyboard_backspace")," Back to home"),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("h4",null,r.a.createElement("b",null,"Login")," below"),r.a.createElement("p",{className:"grey-text text-darken-1"},"Don't have an account? ",r.a.createElement(u.b,{to:"/register"},"Register"))),r.a.createElement("form",{noValidate:!0,onSubmit:this.onSubmit},r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.email,error:e.email,id:"email",type:"email",className:G()("",{invalid:e.email||e.emailnotfound})}),r.a.createElement("label",{htmlFor:"email"},"Email"),r.a.createElement("span",{className:"red-text"},e.email,e.emailnotfound)),r.a.createElement("div",{className:"input-field col s12"},r.a.createElement("input",{onChange:this.onChange,value:this.state.password,error:e.password,id:"password",type:"password",className:G()("",{invalid:e.password||e.passwordincorrect})}),r.a.createElement("label",{htmlFor:"password"},"Password"),r.a.createElement("span",{className:"red-text"},e.password,e.passwordincorrect)),r.a.createElement("div",{className:"errors",ref:this.errors},this.props.errors.emailNotFound,this.props.errors.passwordIncorrect),r.a.createElement("div",{className:"col s12",style:{paddingLeft:"11.250px"}},r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},type:"submit",className:"btn btn-large waves-effect waves-light hoverable blue accent-3",onClick:this.clearErrorMsgs},"Login"))))))}}]),t}(n.Component),B=Object(m.b)((function(e){return{auth:e.auth,errors:e.errors}}),{loginUser:function(e){return function(t){f.a.post("/api/users/login",e).then((function(e){var a=e.data.token;localStorage.setItem("jwtToken",a),g(a);var n=h()(a);t(b(n))})).catch((function(e){return t({type:"GET_ERRORS",payload:e.response.data})}))}},clearMsgs:function(){return function(e){e({type:"DELETE_ERROR_MSGS"})}}})(_),P=a(46),I=Object(m.b)((function(e){return{auth:e.auth}}))((function(e){var t=e.component,a=e.auth,n=Object(P.a)(e,["component","auth"]);return r.a.createElement(d.b,Object.assign({},n,{render:function(e){return!0===a.isAuthenticated?r.a.createElement(t,e):r.a.createElement(d.a,{to:"/login"})}}))})),V=a(30),J=a.n(V),K=f.a.create({withCredentials:!0}),Y=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).getGif=function(e){var t=[];fetch("https://api.giphy.com/v1/gifs/search?api_key=NK7bgE246YG7l7Rp55mggieuBzvJZ035&q=".concat(e,"&limit=50&offset=0&rating=G&lang=en")).then((function(e){return e.json()})).then((function(e){console.log(e.data),e.data.forEach((function(e,a){t.push(e.images.original.url)}))})).then((function(e){a.setState({gifArr:t[Math.floor(Math.random()*t.length)]})})).catch((function(e){return console.log(e)})).finally(console.log("gif search finished"))},a.degtoDir=function(e){return e<=10&&e>=355?"N":e>10&&e<=30?"NNE":e>30&&e<=60?"NE":e>60&&e<80?"ENE":e>=80&&e<=100?"E":e>100&&e<=120?"ESE":e>120&&e<=140?"SE":e>140&&e<=160?"SSE":e>160&&e<=190?"S":e>190&&e<=210?"SSW":e>210&&e<=230?"SW":e>230&&e<=250?"WSW":e>250&&e<=280?"W":e>280&&e<=300?"WNW":e>300&&e<=320?"NW":e>320&&e<=355?"NNW":void 0},a.state={gifArr:void 0},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){console.log(this.props.weatherData.desc),this.getGif(this.props.weatherData.desc)}},{key:"render",value:function(){var e,t,a,n,l=this,c=this.props.weatherData,s=c.location,i=c.desc,o=c.currTempF,m=c.maxTempF,u=c.minTempF,d=c.currTempC,p=c.maxTempC,h=c.minTempC,E=c.humidity,f=c.windDir,g=c.windSpeedM,v=c.windSpeedK,b=c.index,y=this.props,w=y.handleDelete,N=y.addToDB,S=y.duplicateSearch,T=y.dataLimit,C=y.tempValue,D=this.degtoDir(f);return"F"===C?(e={display:"inline"},a={display:"inline"},t={display:"none"},n={display:"none"}):(e={display:"none"},a={display:"none"},t={display:"inline"},n={display:"inline"}),r.a.createElement("div",{id:"user-data-".concat(b)},S?r.a.createElement("div",null,r.a.createElement("p",null,"You have already selected this city.",r.a.createElement("br",null),"Please search again."),r.a.createElement("button",{onClick:function(){return w("search")}},"Dismiss")):T?r.a.createElement("div",null,r.a.createElement("p",null,"You have reached the limit of cities to save weather data."),r.a.createElement("p",null,"Please delete one or more city entry and try again."),r.a.createElement("button",{onClick:function(){return w("search")}},"Dismiss")):r.a.createElement("div",null,r.a.createElement("h2",{className:"selected-location"},s),r.a.createElement("button",{id:"deleteSelection",onClick:function(){return w("search")},className:"btn waves-effect waves-light hoverable blue accent-3"},"Delete"),r.a.createElement("button",{id:"addCity",onClick:N,className:"btn waves-effect waves-light hoverable blue accent-3"},"Add!"),r.a.createElement("p",{className:"selected-desc"},i),r.a.createElement("img",{className:"selected-gif",srcSet:l.state.gifArr,alt:"weather gif"}),r.a.createElement("div",{className:"additionalData"},r.a.createElement("p",{className:"selected-humidity"},"Humidity:",r.a.createElement("br",null),E,"%"),r.a.createElement("p",{className:"selected-currTemp"},"Currently:",r.a.createElement("br",null),r.a.createElement("span",{style:e},o,"\xb0F"),r.a.createElement("span",{style:t},d,"\xb0C")),r.a.createElement("p",{className:"selected-maxMinTemp"},r.a.createElement("span",{style:e},"High / Low: ",r.a.createElement("br",null),m,"\xb0F / ",u,"\xb0F"),r.a.createElement("span",{style:t},"High / Low: ",r.a.createElement("br",null),p,"\xb0C / ",h,"\xb0C")),r.a.createElement("p",{className:"selected-wind"},"Direction: ",D,r.a.createElement("br",null)," Speed:",r.a.createElement("span",{style:a},g,"mph"),r.a.createElement("span",{style:n},v,"kph")))))}}]),t}(n.Component),z=Object(m.b)((function(e){return{tempValue:e.weather.temperature}}))(Y),q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).toggleHover=function(){a.setState({hover:!a.state.hover})},a.handleDelete=function(){var e=a.props,t=e.data,n=e.urlUserName,r=e.location;a.props.deleteOneWeather("/api/weather/".concat(n,"/").concat(r),t),a.props.dataLimitFalse()},a.iconClose=r.a.createRef(),a.state={hover:!1},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e,t,a,n=this.props.tempValue;e=this.state.hover?{display:"flex"}:{display:"none"},"F"===n?(t={display:"inline"},a={display:"none"}):(t={display:"none"},a={display:"inline"});var l=this.props.data,c=l.location,s=l.desc,i=l.currTempF,o=l.maxTempF,m=l.minTempF,u=l.currTempC,d=l.maxTempC,p=l.minTempC,h=l.icon;return r.a.createElement("div",{className:"user-selected-child",id:"user-data-".concat(this.props.index),onMouseEnter:this.toggleHover,onMouseLeave:this.toggleHover},r.a.createElement("div",{className:"icon-close",style:e,onClick:this.handleDelete},r.a.createElement("span",null,"\xd7")),r.a.createElement("h6",{className:"user-selected-title"},c),r.a.createElement("p",null,r.a.createElement("span",{style:t},i,"\xb0F"),r.a.createElement("span",{style:a},u,"\xb0C")),r.a.createElement("p",null,s),r.a.createElement("img",{className:"user-selected-weather-icon",src:"http://openweathermap.org/img/wn/".concat(h,"@2x.png"),alt:s}),r.a.createElement("p",null,r.a.createElement("span",{style:t},"H: ",o,"\xb0F / L: ",m,"\xb0F"),r.a.createElement("span",{style:a},"H: ",d,"\xb0C / L: ",p,"\xb0C")))}}]),t}(n.Component),Z=Object(m.b)((function(e){return{weatherData:e.weather.weatherData,tempValue:e.weather.temperature}}),{deleteOneWeather:function(e,t){return function(a){var n=t.location;K.delete(e,t).then((function(e){a({type:v.DELETEONEWEATHER,payload:n})})).catch((function(e){return console.log(e)}))}}})(q),Q=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).getGif=function(e){var t=[];fetch("https://api.giphy.com/v1/gifs/search?api_key=NK7bgE246YG7l7Rp55mggieuBzvJZ035&q=".concat(e,"&limit=50&offset=0&rating=G&lang=en")).then((function(e){return e.json()})).then((function(e){console.log(e.data),e.data.forEach((function(e,a){t.push(e.images.original.url)}))})).then((function(e){a.setState({gifArr:t[Math.floor(Math.random()*t.length)]})})).catch((function(e){return console.log(e)})).finally(console.log("gif search finished"))},a.degtoDir=function(e){return e<=10&&e>=355?"N":e>10&&e<=30?"NNE":e>30&&e<=60?"NE":e>60&&e<80?"ENE":e>=80&&e<=100?"E":e>100&&e<=120?"ESE":e>120&&e<=140?"SE":e>140&&e<=160?"SSE":e>160&&e<=190?"S":e>190&&e<=210?"SSW":e>210&&e<=230?"SW":e>230&&e<=250?"WSW":e>250&&e<=280?"W":e>280&&e<=300?"WNW":e>300&&e<=320?"NW":e>320&&e<=355?"NNW":void 0},a.iconClose=r.a.createRef(),a.state={hover:!1,gifArr:void 0},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.getGif(this.props.data.desc)}},{key:"render",value:function(){var e,t,a,n,l=this,c=this.props.data,s=c.location,i=c.desc,o=c.humidity,m=c.currTempC,u=c.currTempF,d=c.maxTempC,p=c.maxTempF,h=c.minTempC,E=c.minTempF,f=c.windDir,g=c.windSpeedM,v=c.windSpeedK,b=c.tempValue,y=this.degtoDir(f);return"F"===b?(e={display:"inline"},a={display:"inline"},t={display:"none"},n={display:"none"}):(e={display:"none"},a={display:"none"},t={display:"inline"},n={display:"inline"}),r.a.createElement("div",null,r.a.createElement("h2",{className:"selected-location"},s),r.a.createElement("button",{id:"deleteSelection",onClick:function(){return l.props.handleDelete("select")},className:"btn waves-effect waves-light hoverable blue accent-3"},"Close"),r.a.createElement("p",{className:"selected-desc"},i),r.a.createElement("img",{className:"selected-gif",srcSet:this.state.gifArr,alt:"weather gif"}),r.a.createElement("div",{className:"additionalData"},r.a.createElement("p",{className:"selected-humidity"},"Humidity:",r.a.createElement("br",null),o,"%"),r.a.createElement("p",{className:"selected-currTemp"},"Currently:",r.a.createElement("br",null),r.a.createElement("span",{style:e},u,"\xb0F"),r.a.createElement("span",{style:t},m,"\xb0C")),r.a.createElement("p",{className:"selected-maxMinTemp"},r.a.createElement("span",{style:e},"High / Low: ",r.a.createElement("br",null),p,"\xb0F / ",E,"\xb0F"),r.a.createElement("span",{style:t},"High / Low: ",r.a.createElement("br",null),d,"\xb0C / ",h,"\xb0C")),r.a.createElement("p",{className:"selected-wind"},"Direction: ",y,r.a.createElement("br",null)," Speed:",r.a.createElement("span",{style:a},g,"mph"),r.a.createElement("span",{style:n},v,"kph"))))}}]),t}(n.Component),$=Object(m.b)((function(e){return{weatherData:e.weather.weatherData,tempValue:e.weather.temperature}}))(Q),X=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).viewCity=function(e){if("\xd7"!==e.target.textContent){var t=e.target.closest(".user-selected-child").querySelector("h6").textContent,n=a.props.storedWeatherData.filter((function(e,a){return e.location===t}));a.setState({selectCity:n[0]}),a.selectedCityData.current.style.display="flex"}},a.dataLimitFalse=function(){a.setState({dataLimit:!1})},a.handleTemp=function(e){var t=e.target.value;a.props.changeTemp("/api/weather/".concat(a.state.urlUserName,"/").concat(t)),window.location.reload()},a.selectCity=function(e){e.preventDefault(),5===a.props.storedWeatherData.length&&a.setState({dataLimit:!0});var t=encodeURIComponent(e.target.search.value),n={lat:"",lng:"",location:"",desc:"",currTempF:"",minTempF:"",maxTempF:"",currTempC:"",minTempC:"",maxTempC:"",humidity:"",windSpeedM:"",windSpeedK:"",windDirDeg:"",index:"",icon:""};n.location=e.target.search.value.split(",")[0],a.props.storedWeatherData.forEach((function(e,t){n.location===e.location&&a.setState({duplicateSearch:!0})})),fetch("https://maps.googleapis.com/maps/api/geocode/json?&address=".concat(t,"&key=AIzaSyDnNkqJyGkWjJcQxN2dGcZr5KHnw1mlB7A")).then((function(e){return e.json()})).then((function(e){return n.lat=e.results[0].geometry.bounds.northeast.lat,n.lng=e.results[0].geometry.bounds.northeast.lng,fetch("https://api.openweathermap.org/data/2.5/weather?lat=".concat(n.lat,"&lon=").concat(n.lng,"&appid=7ce1fd394a7aaa5d61d9b5930c1b3513&units=imperial"))})).then((function(e){return e.json()})).then((function(e){var t=e.weather,r=e.main,l=e.wind;n.desc=t[0].main,n.currTempF=Math.round(r.temp),n.minTempF=Math.round(r.temp_min),n.maxTempF=Math.round(r.temp_max),n.currTempC=Math.round((n.currTempF-32)/1.8),n.minTempC=Math.round((n.minTempF-32)/1.8),n.maxTempC=Math.round((n.maxTempF-32)/1.8),n.humidity=Math.round(r.humidity),n.windSpeedM=Math.round(l.speed),n.windSpeedK=Math.round(1.609344*l.speed),n.windDir=Math.round(l.deg),n.index=a.props.storedWeatherData.length,n.icon=t[0].icon})).then((function(){a.setState(Object(T.a)({},a.state,{weatherData:Object(T.a)({},n)}))})).then((function(){a.renderedWeatherData.current.style.display="flex"})).catch((function(e){return console.log("Something wrong happened: ".concat(e))})).finally(console.log("weather search finished")),e.target.search.value=""},a.renderWeatherData=function(e){return r.a.createElement(z,{weatherData:e})},a.handleDelete=function(e){"search"===e?(a.setState({weatherData:void 0}),a.state.duplicateSearch&&a.setState({duplicateSearch:!1}),a.renderedWeatherData.current.style.display="none"):"select"===e&&(a.setState({selectCity:{}}),a.selectedCityData.current.style.display="none")},a.addToDB=function(){console.log("add to db");var e=a.state,t=e.urlUserName,n=e.weatherData;a.props.handleAddToUserData("/api/weather/".concat(t),n),a.handleDelete("search")},a.onLogoutClick=function(e){e.preventDefault(),a.props.logoutUser()},a.renderedWeatherData=r.a.createRef(),a.selectedCityData=r.a.createRef(),a.state={duplicateSearch:!1,dataLimit:!1,selectCity:{}},a}return Object(o.a)(t,e),Object(c.a)(t,[{key:"componentDidUpdate",value:function(){this.renderWeatherData(this.state.weatherData)}},{key:"componentDidMount",value:function(){var e=this;console.log(this.props.tempValue);var t=window.location.pathname.split("/"),a=t[t.length-1];this.setState(Object(T.a)({urlUserName:a},this.state),(function(){e.props.getWeather("/api/weather/".concat(a))}))}},{key:"render",value:function(){var e=this,t=this.props.auth.user,a=this.props,n=a.storedWeatherData,l=a.tempValue,c=this.state.urlUserName;return r.a.createElement("div",{className:"container valign-wrapper"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col s12 center-align"},r.a.createElement("h4",null,r.a.createElement("b",null,"Hey there,")," ",t.name.split(" ")[0],r.a.createElement("p",{className:"flow-text grey-text text-darken-1"},"Welcome to Weather in .GIFS! Find your city to get started.",r.a.createElement("br",null),"Then, click on a city you selected to view the .gif!")),r.a.createElement("form",{onSubmit:this.selectCity},r.a.createElement("label",{htmlFor:"search"},"Search by city:"),r.a.createElement("div",{className:"flexRow"},r.a.createElement("input",{type:"text",name:"search",placeholder:"Ex: Atlanta, GA"}),r.a.createElement("button",{onClick:this.locateCity,className:"btn waves-effect waves-light hoverable blue accent-3"},"Search!"))),r.a.createElement("div",{className:"selectedCityData",ref:this.selectedCityData,style:{display:"none"}},0!==Object.keys(this.state.selectCity).length&&r.a.createElement($,{data:this.state.selectCity,handleDelete:this.handleDelete})),r.a.createElement("div",{className:"renderedWeatherData",ref:this.renderedWeatherData,style:{display:"none"}},!!this.state.weatherData&&r.a.createElement(z,{weatherData:this.state.weatherData,handleDelete:this.handleDelete,addToDB:this.addToDB,dataLength:this.props.storedWeatherData,duplicateSearch:this.state.duplicateSearch,dataLimit:this.state.dataLimit})),r.a.createElement("div",{className:"user-selcted-weather",onClick:this.viewCity},n.map((function(t,a){return r.a.createElement(Z,{key:a,data:t,urlUserName:c,index:t.index,location:t.location,icon:t.icon,dataLimitFalse:e.dataLimitFalse})}))),r.a.createElement("button",{style:{width:"150px",borderRadius:"3px",letterSpacing:"1.5px",marginTop:"1rem"},onClick:this.onLogoutClick,className:"btn btn-large waves-effect waves-light hoverable blue accent-3"},"Logout"),r.a.createElement("div",null,r.a.createElement("label",{className:"selectLabel",htmlFor:"selectTemp"},"C\xb0 / F\xb0"),r.a.createElement("select",{name:"selectTemp",value:l,onChange:this.handleTemp},r.a.createElement("option",{value:"F"},"F\xb0"),r.a.createElement("option",{value:"C"},"C\xb0"))))))}}]),t}(n.Component),ee=Object(m.b)((function(e){return{auth:e.auth,storedWeatherData:e.weather.weatherData,tempValue:e.weather.temperature}}),{logoutUser:y,handleAddToUserData:function(e,t){return function(a){K.post(e,t).then((function(e){a({type:v.POSTWEATHER,payload:e.config.data})})).catch((function(e){return console.log(e)}))}},getWeather:function(e){return function(t){var a;return J.a.async((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,J.a.awrap(K.get(e));case 2:a=n.sent;try{t({type:v.GETWEATHER,payload:a.data})}catch(r){console.log(r)}case 4:case"end":return n.stop()}}))}},changeTemp:function(e){return function(t){K.put(e).then((function(){t({type:v.TEMPERATURE,payload:e})})).catch((function(e){return console.log(e)}))}}})(X),te=function(){return r.a.createElement("div",{className:"courtesy"},r.a.createElement("div",{className:"courtesy-inner"},r.a.createElement("div",null,r.a.createElement("h5",null,"Weather data powered by:"),r.a.createElement("a",{href:"https://openweathermap.org/",target:"_blank",rel:"noopener noreferrer"},r.a.createElement("img",{srcSet:"https://openweathermap.org/themes/openweathermap/assets/img/openweather-negative-logo-RGB.png",alt:"OpenWeather"}))),r.a.createElement("div",null,r.a.createElement("h5",null,".gifs provided by:"),r.a.createElement("iframe",{title:"intro gif",src:"https://giphy.com/embed/YJBNjrvG5Ctmo",frameBorder:"0",class:"giphy-embed",allowFullScreen:!0}),r.a.createElement("p",null,r.a.createElement("a",{href:"https://giphy.com/gifs/haydiroket-art-YJBNjrvG5Ctmo"},"via GIPHY")))),r.a.createElement("h6",null,"Created by ",r.a.createElement("a",{href:"https://www.shanecharper.com",target:"_blank",rel:"noopener noreferrer"},"Shane Harper")))};if(localStorage.jwtToken){var ae=localStorage.jwtToken;g(ae);var ne=h()(ae);W.dispatch(b(ne));var re=Date.now()/1e3;ne.exp<re&&(W.dispatch(y()),window.location.href="./login")}var le=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(o.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement(m.a,{store:W},r.a.createElement(u.a,null,r.a.createElement("div",{className:"App"},r.a.createElement(F,null),r.a.createElement(d.b,{exact:!0,path:"/",component:A}),r.a.createElement(d.b,{exact:!0,path:"/register",component:U}),r.a.createElement(d.b,{exact:!0,path:"/login",component:B}),r.a.createElement(d.d,null,r.a.createElement(I,{exact:!0,path:"/dashboard/:userEmail",component:ee})),r.a.createElement(te,null))))}}]),t}(n.Component);var ce=Object(m.b)((function(e){return{message:e.message}}))(le),se=a(24);a(80),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));Object(se.render)(r.a.createElement(m.a,{store:W},r.a.createElement(ce,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[47,1,2]]]);
//# sourceMappingURL=main.14088e65.chunk.js.map