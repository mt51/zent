(window.webpackJsonp=window.webpackJsonp||[]).push([[147],{657:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return M}));var t=s(610),p=s.n(t),e=s(611),o=s.n(e),c=s(612),l=s.n(c),u=s(613),i=s.n(u),k=s(291),r=s.n(k),d=s(614),m=s.n(d),g=s(615),v=s.n(g),f=s(616),y=s.n(f),h=s(617),w=s.n(h),b=s(0),E=s.n(b),_=s(114),S=s(84),N=s(91),x=function(){function n(){return E.a.createElement("div",{className:"waypoint-demo-basic__spacer"},E.a.createElement(S.V,{type:"down"}))}return E.a.createElement((function(a){var s=E.a.useState(null),t=w()(s,2),p=t[0],e=t[1],o=E.a.useCallback((function(){return e("Waypoint 进入屏幕")}),[]),c=E.a.useCallback((function(){return e("Waypoint 离开屏幕")}),[]);return E.a.createElement("div",{className:"waypoint-demo-basic"},p?E.a.createElement("div",{className:"waypoint-demo-basic__message"},p):null,E.a.createElement("div",{className:"waypoint-demo-basic__scrollable-parent"},E.a.createElement(n,null),E.a.createElement(n,null),E.a.createElement(n,null),E.a.createElement(n,null),E.a.createElement(n,null),E.a.createElement(n,null),E.a.createElement("div",{className:"waypoint-demo-basic__waypoint-line"}),E.a.createElement(S.Sb,{onEnter:o,onLeave:c}),E.a.createElement(n,null),E.a.createElement(n,null),E.a.createElement(n,null),E.a.createElement(n,null),E.a.createElement(n,null),E.a.createElement(n,null)))}),null)},C=function(){function n(n){var a=E.a.useState(!1),s=w()(a,2),t=s[0],p=s[1],e=E.a.useCallback((function(){return p(!0)}),[]),o=E.a.useCallback((function(){return p(!1)}),[]);return E.a.createElement(E.a.Fragment,null,E.a.createElement(S.Sb,{onEnter:e,onLeave:o}),E.a.createElement(N.CSSTransition,{in:t,timeout:500,classNames:"waypoint-demo-reveal",unmountOnExit:!0},n.children))}function a(){return E.a.createElement("div",{className:"waypoint-demo-reveal__spacer"},E.a.createElement(S.V,{type:"down",className:"waypoint-demo-reveal-pulse"}))}return E.a.createElement((function(s){return E.a.createElement("div",{className:"waypoint-demo-reveal"},E.a.createElement("div",{className:"waypoint-demo-reveal__scrollable-parent"},E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement(n,null,E.a.createElement("p",{className:"waypoint-demo-reveal-text"},"Surely You're Joking, Mr. Feynman!")),E.a.createElement(a,null),E.a.createElement(a,null),E.a.createElement(a,null)))}),null)};function R(n){return E.a.createElement(n.tag,y()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function z(n){return E.a.createElement(R,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function O(n){return E.a.createElement(R,{tag:"style",html:n.style})}var D=function(n){function a(){var n,s;p()(this,a);for(var t=arguments.length,e=new Array(t),o=0;o<t;o++)e[o]=arguments[o];return s=l()(this,(n=i()(a)).call.apply(n,[this].concat(e))),v()(r()(s),"state",{showCode:!1}),v()(r()(s),"toggle",(function(){s.setState({showCode:!s.state.showCode})})),s}return m()(a,n),o()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return E.a.createElement("div",{className:"zandoc-react-demo"},E.a.createElement("div",{className:"zandoc-react-demo__preview"},p),E.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.a.createElement("div",{className:"zandoc-react-demo__title"},E.a.createElement("p",null,s||"")),E.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&E.a.createElement("pre",{className:"zandoc-react-demo__code"},E.a.createElement(R,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(b.Component),M=function(n){function a(){return p()(this,a),l()(this,i()(a).apply(this,arguments))}return m()(a,n),o()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(_.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return E.a.createElement("div",{className:"zandoc-react-container",key:null},E.a.createElement(O,{style:".waypoint-demo-basic {\n  position: relative;\n}\n\n.waypoint-demo-basic__scrollable-parent {\n  max-height: 400px;\n  overflow: scroll;\n  position: relative;\n}\n\n.waypoint-demo-basic__spacer {\n  color: #969799;\n  font-size: 40px;\n  line-height: 200px;\n  text-align: center;\n}\n\n.waypoint-demo-basic__waypoint-line {\n  border-top: 2px dashed #d40000;\n}\n\n.waypoint-demo-basic__message {\n\tbox-sizing: border-box;\n  background-color: #f2f3f5;\n  color: #323233;\n  left: 0;\n  opacity: 0.8;\n  padding: 10px 0;\n  pointer-events: none;\n  position: absolute;\n  text-align: center;\n  top: 0;\n  width: 100%;\n}\n\n.waypoint-demo-reveal {\n  position: relative;\n}\n\n.waypoint-demo-reveal__scrollable-parent {\n  max-height: 400px;\n  overflow: scroll;\n  position: relative;\n}\n\n.waypoint-demo-reveal__spacer {\n  color: #969799;\n  font-size: 40px;\n  line-height: 200px;\n  text-align: center;\n}\n\n.waypoint-demo-reveal-text {\n\ttransition: opacity 500ms, transform 500ms;\n\ttext-align: center;\n\tpadding: 10px 0;\n}\n\n.waypoint-demo-reveal-enter {\n\topacity: 0;\n\ttransform: scale(0.1);\n}\n\n.waypoint-demo-reveal-enter-active {\n\topacity: 1;\n\ttransform: scale(1);\n}\n\n.waypoint-demo-reveal-exit {\n\topacity: 1;\n\ttransform: scale(0.9);\n}\n\n.waypoint-demo-reveal-exit-active {\n\topacity: 0;\n\ttransform: scale(0);\n}"}),E.a.createElement(z,{html:'<h2 class="anchor-heading"><a href="#waypoint">¶</a><a href="javascript:void(0)" id="waypoint" class="anchor-point"></a>Waypoint</h2>\n<p>当滚动到某个 DOM 元素时执行一个函数，支持任意可滚动的容器。</p>\n<p><strong>常见使用场景：</strong></p>\n<ul>\n<li>懒加载图片</li>\n<li>无限滚动</li>\n<li>固钉</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),E.a.createElement(D,{title:"基础用法",id:"Demo01basic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Waypoint<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>msg<span class="token punctuation">,</span> setMsg<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token keyword">null</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> setEnterMsg <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token string">\'Waypoint 进入屏幕\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> setLeaveMsg <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setMsg</span><span class="token punctuation">(</span><span class="token string">\'Waypoint 离开屏幕\'</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-basic<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token punctuation">{</span>msg <span class="token operator">?</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-basic__message<span class="token punctuation">"</span></span><span class="token punctuation">></span></span><span class="token punctuation">{</span>msg<span class="token punctuation">}</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span> <span class="token punctuation">:</span> <span class="token keyword">null</span><span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-basic__scrollable-parent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-basic__waypoint-line<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Waypoint</span> <span class="token attr-name">onEnter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setEnterMsg<span class="token punctuation">}</span></span> <span class="token attr-name">onLeave</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>setLeaveMsg<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-basic__spacer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(x)),E.a.createElement(D,{title:"Reveal",id:"Demo02reveal",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Waypoint<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n<span class="token keyword">import</span> <span class="token punctuation">{</span> CSSTransition <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'react-transition-group\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">Reveal</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">const</span> <span class="token punctuation">[</span>revealed<span class="token punctuation">,</span> setRevealed<span class="token punctuation">]</span> <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useState</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> reveal <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setRevealed</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">const</span> hide <span class="token operator">=</span> React<span class="token punctuation">.</span><span class="token function">useCallback</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token function">setRevealed</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token operator">&lt;</span><span class="token operator">></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Waypoint</span> <span class="token attr-name">onEnter</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>reveal<span class="token punctuation">}</span></span> <span class="token attr-name">onLeave</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>hide<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CSSTransition</span>\n        <span class="token attr-name">in</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>revealed<span class="token punctuation">}</span></span>\n        <span class="token attr-name">timeout</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">500</span><span class="token punctuation">}</span></span>\n        <span class="token attr-name">classNames</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal<span class="token punctuation">"</span></span>\n        <span class="token attr-name">unmountOnExit</span>\n      <span class="token punctuation">></span></span>\n        <span class="token punctuation">{</span>props<span class="token punctuation">.</span>children<span class="token punctuation">}</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CSSTransition</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span><span class="token operator">/</span><span class="token operator">></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Demo</span><span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal__scrollable-parent<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Reveal</span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal-text<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n            Surely You\'re Joking<span class="token punctuation">,</span> Mr<span class="token punctuation">.</span> Feynman<span class="token operator">!</span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Reveal</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Spacer</span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\n<span class="token keyword">function</span> <span class="token function">Spacer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n  <span class="token keyword">return</span> <span class="token punctuation">(</span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal__spacer<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Icon</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>down<span class="token punctuation">"</span></span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>waypoint-demo-reveal-pulse<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Demo</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(C)),E.a.createElement(z,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必须</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>onEnter</td>\n<td>元素滚动到屏幕内时的回调函数</td>\n<td><code>(data: IWaypointCallbackData) => void</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onLeave</td>\n<td>元素滚动到屏幕外时的回调函数</td>\n<td><code>(data: IWaypointCallbackData) => void</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>onPositionChange</td>\n<td>元素位置变化时的回调函数</td>\n<td><code>(data: IWaypointCallbackData) => void</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>topOffset</td>\n<td>距离容器顶部的距离</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>否</td>\n<td><code>0px</code></td>\n<td></td>\n</tr>\n<tr>\n<td>bottomOffset</td>\n<td>距离容器底部的距离</td>\n<td><code>number</code>\n \n|\n \n<code>string</code></td>\n<td>否</td>\n<td><code>0px</code></td>\n<td></td>\n</tr>\n<tr>\n<td>horizontal</td>\n<td>是否使用水平滚动模式</td>\n<td><code>boolean</code></td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>scrollableAncestor</td>\n<td>指定滚动容器的 DOM 元素，一般当外层有多个滚动容器时才需要使用</td>\n<td><code>Element</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>fireOnRapidScroll</td>\n<td>当快速滚动时是否触发 \n<code>onEnter</code>\n 和 \n<code>onLeave</code></td>\n<td><code>boolean</code></td>\n<td>否</td>\n<td><code>true</code></td>\n<td></td>\n</tr>\n<tr>\n<td>children</td>\n<td>待追踪的元素，不传时可以认为是追踪屏幕内一条线</td>\n<td><code>ReactNode</code></td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<p><strong>几点说明</strong></p>\n<ul>\n<li><a href="../../apidoc/interfaces/iwaypointcallbackdata.html"><code>IWaypointCallbackData</code> 的定义</a></li>\n<li>快速滚动顾名思义就是滚动速度非常快，元素可能进入屏幕后立刻又出了屏幕</li>\n<li><code>topOffset</code> 和 <code>bottomOffset</code> 可正可负，正负数效果和 <code>margin</code> 一样，正数往屏幕内偏移，负数往屏幕外偏移</li>\n<li><code>topOffset</code> 和 <code>bottomOffset</code> 可以是一个百分比，这个百分比是相对滚动容器大小的</li>\n<li>开启 <code>horizontal</code> 后，<code>topOffset</code> 其实是 <code>leftOffset</code>，而 <code>bottomOffset</code> 其实是 <code>rightOffset</code>，参数名特意没有变</li>\n<li><code>children</code> 只能是<strong>一个</strong>元素，这个元素必须是原生组件、<code>React.forwardRef</code> 包装过的自定义组件，或者是接受一个 <code>innerRef</code> 参数的自定义组件，其中自定义组件必须把 <code>ref</code> 设置到需要跟踪位置的 DOM 元素上</li>\n</ul>'}))}}]),a}(b.Component)}}]);