(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{672:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return B}));var t=s(616),p=s.n(t),o=s(610),e=s.n(o),c=s(611),l=s.n(c),u=s(612),r=s.n(u),i=s(613),k=s.n(i),d=s(291),h=s.n(d),g=s(614),m=s.n(g),f=s(615),v=s.n(f),y=s(0),w=s.n(y),C=s(114),E=s(84),F=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=r()(this,(n=k()(a)).call.apply(n,[this].concat(p))),v()(h()(s),"state",{color:"#5197FF"}),v()(h()(s),"handleChange",(function(n){s.setState({color:n})})),s}return m()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.color;return w.a.createElement("div",null,w.a.createElement(E.p,{color:n,onChange:this.handleChange}),w.a.createElement("div",{style:{color:n,marginTop:5}},"当前颜色：",n))}}]),a}(w.a.Component);return w.a.createElement(n,null)},b=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=r()(this,(n=k()(a)).call.apply(n,[this].concat(p))),v()(h()(s),"state",{color:"rgba(81, 151, 255, 0.6)",showAlpha:!0}),v()(h()(s),"handleChange",(function(n){s.setState({color:n})})),s}return m()(a,n),l()(a,[{key:"render",value:function(){var n=this.state,a=n.color,s=n.showAlpha;return w.a.createElement("div",null,w.a.createElement(E.p,{color:a,showAlpha:s,onChange:this.handleChange}),w.a.createElement("div",{style:{color:a,marginTop:5}},"当前颜色：",a))}}]),a}(w.a.Component);return w.a.createElement(n,null)},A=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=r()(this,(n=k()(a)).call.apply(n,[this].concat(p))),v()(h()(s),"state",{color:"#FF4444"}),v()(h()(s),"handleChange",(function(n){s.setState({color:n})})),s}return m()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.color;return w.a.createElement("div",null,w.a.createElement(E.p,{color:n,type:"simple",onChange:this.handleChange}),w.a.createElement("div",{style:{color:n,marginTop:5}},"当前颜色：",n))}}]),a}(w.a.Component);return w.a.createElement(n,null)},S=function(){var n=E.p.ColorBoard,a=function(a){function s(){var n,a;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return a=r()(this,(n=k()(s)).call.apply(n,[this].concat(p))),v()(h()(a),"state",{color:"#5197FF"}),v()(h()(a),"handleChange",(function(n){a.setState({color:n.hex})})),a}return m()(s,a),l()(s,[{key:"render",value:function(){var a=this.state,s=a.color;a.showAlpha;return w.a.createElement("div",null,w.a.createElement(n,{color:s,onChange:this.handleChange}),w.a.createElement("div",{style:{color:s,marginTop:10}},s))}}]),s}(w.a.Component);return w.a.createElement(a,null)},z=function(){var n=E.p.ColorBoard,a=function(a){function s(){var n,a;e()(this,s);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return a=r()(this,(n=k()(s)).call.apply(n,[this].concat(p))),v()(h()(a),"state",{color:"rgba(81, 151, 255, 0.6)",showAlpha:!0}),v()(h()(a),"handleChange",(function(n){a.setState({color:n.rgba})})),a}return m()(s,a),l()(s,[{key:"render",value:function(){var a=this.state,s=a.color,t=a.showAlpha;return w.a.createElement("div",null,w.a.createElement(n,{color:s,showAlpha:t,onChange:this.handleChange}),w.a.createElement("div",{style:{color:s,marginTop:10}},"当前颜色：",s))}}]),s}(w.a.Component);return w.a.createElement(a,null)};function j(n){return w.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function N(n){return w.a.createElement(j,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function D(n){return w.a.createElement(j,{tag:"style",html:n.style})}var _=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=r()(this,(n=k()(a)).call.apply(n,[this].concat(p))),v()(h()(s),"state",{showCode:!1}),v()(h()(s),"toggle",(function(){s.setState({showCode:!s.state.showCode})})),s}return m()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},p),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,s||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(j,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),B=function(n){function a(){return e()(this,a),r()(this,k()(a).apply(this,arguments))}return m()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(C.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(D,{style:""}),w.a.createElement(N,{html:'<h2 class="anchor-heading"><a href="#colorpicker-yan-se-xuan-ze-qi">¶</a><a href="javascript:void(0)" id="colorpicker-yan-se-xuan-ze-qi" class="anchor-point"></a>ColorPicker 颜色选择器</h2>\n<p>用于颜色选择，支持多种格式。</p>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),w.a.createElement(_,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#5197FF\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>当前颜色：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(F)),w.a.createElement(_,{title:"选择透明度",id:"Demoopacity",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'rgba(81, 151, 255, 0.6)\'</span><span class="token punctuation">,</span>\n    showAlpha<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> showAlpha <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">showAlpha</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showAlpha<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>当前颜色：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(b)),w.a.createElement(_,{title:"简化版用法",id:"Demosimple",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#FF4444\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorPicker</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>simple<span class="token punctuation">"</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">5</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>当前颜色：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(A)),w.a.createElement(_,{title:"颜色面板",id:"Democolorboard",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ColorBoard <span class="token operator">=</span> ColorPicker<span class="token punctuation">.</span>ColorBoard<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'#5197FF\'</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color<span class="token punctuation">:</span> color<span class="token punctuation">.</span>hex\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> showAlpha <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBoard</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(S)),w.a.createElement(_,{title:"带选择透明的面板",id:"Demoopacityboard",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> ColorPicker <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> ColorBoard <span class="token operator">=</span> ColorPicker<span class="token punctuation">.</span>ColorBoard<span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Simple</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    color<span class="token punctuation">:</span> <span class="token string">\'rgba(81, 151, 255, 0.6)\'</span><span class="token punctuation">,</span>\n    showAlpha<span class="token punctuation">:</span> <span class="token boolean">true</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">handleChange</span> <span class="token operator">=</span> <span class="token punctuation">(</span>color<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      color<span class="token punctuation">:</span> color<span class="token punctuation">.</span>rgba\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> color<span class="token punctuation">,</span> showAlpha <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ColorBoard</span> <span class="token attr-name">color</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>color<span class="token punctuation">}</span></span> <span class="token attr-name">showAlpha</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>showAlpha<span class="token punctuation">}</span></span> <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>handleChange<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token operator">&lt;</span>div style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> color<span class="token punctuation">,</span> marginTop<span class="token punctuation">:</span> <span class="token number">10</span> <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">></span>当前颜色：<span class="token punctuation">{</span>color<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Simple</span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(z)),w.a.createElement(N,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<h4 class=\"anchor-heading\"><a href=\"#colorpicker\">¶</a><a href=\"javascript:void(0)\" id=\"colorpicker\" class=\"anchor-point\"></a>ColorPicker</h4>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>可选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>color</td>\n<td>颜色选择器的颜色</td>\n<td>string</td>\n<td></td>\n<td><code>'#5197FF'</code>\n 或  \n<code>'rgba(81, 151, 255, 0.6)'</code></td>\n</tr>\n<tr>\n<td>showAlpha</td>\n<td>是否显示透明度选择</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true/false</code></td>\n</tr>\n<tr>\n<td>type</td>\n<td>颜色选择器类型</td>\n<td>string</td>\n<td><code>'default'</code></td>\n<td><code>'default'</code>\n、\n<code>'simple'</code></td>\n</tr>\n<tr>\n<td>presetColors</td>\n<td>简化版自定义颜色数组</td>\n<td>array</td>\n<td>[\n<code>'#FFFFFF'</code>\n, \n<code>'#F8F8F8'</code>\n, \n<code>'#F2F2F2'</code>\n, \n<code>'#999999'</code>\n, \n<code>'#444444'</code>\n, \n<code>'#FF4444'</code>\n, \n<code>'#FF6500'</code>\n, \n<code>'#FF884D'</code>\n, \n<code>'#FFCD00'</code>\n, \n<code>'#3FBD00'</code>\n, \n<code>'#3FBC87'</code>\n, \n<code>'#00CD98'</code>\n, \n<code>'#5197FF'</code>\n, \n<code>'#BADCFF'</code>\n, \n<code>'#FFEFB8'</code>\n]</td>\n<td></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>颜色变化时回调函数</td>\n<td>func(color)</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>可选，自定义类名</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>wrapperClassName</td>\n<td>可选，自定义trigger包裹节点的类名</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>可选，自定义前缀</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class=\"anchor-heading\"><a href=\"#colorboard\">¶</a><a href=\"javascript:void(0)\" id=\"colorboard\" class=\"anchor-point\"></a>ColorBoard</h4>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>可选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>color</td>\n<td>颜色选择器的颜色</td>\n<td>string</td>\n<td></td>\n<td><code>'#5197FF'</code>\n 或  \n<code>'rgba(81, 151, 255, 0.6)'</code></td>\n</tr>\n<tr>\n<td>showAlpha</td>\n<td>是否显示透明度选择</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td><code>true/false</code></td>\n</tr>\n<tr>\n<td>onChange</td>\n<td>颜色变化时回调函数</td>\n<td>func(color)</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>可选，自定义类名</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>可选，自定义前缀</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>"}))}}]),a}(y.Component)}}]);