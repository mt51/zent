(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{705:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return D}));var t=s(616),p=s.n(t),o=s(610),e=s.n(o),c=s(611),l=s.n(c),u=s(612),i=s.n(u),k=s(613),r=s.n(k),d=s(291),g=s.n(d),m=s(614),h=s.n(m),f=s(615),v=s.n(f),y=s(0),w=s.n(y),E=s(114),b=s(84),z=function(){return w.a.createElement(b.g,{loading:!0})},x=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),v()(g()(s),"state",{loading:!1}),v()(g()(s),"onChange",(function(n){s.setState({loading:n})})),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.loading;return w.a.createElement("div",null,w.a.createElement(b.g,{loading:n},w.a.createElement("div",{className:"zent-loading-example-hello-world"},"Hello World")),w.a.createElement(b.Fb,{className:"zent-loading-example-switch",checked:n,onChange:this.onChange,size:"small"}))}}]),a}(w.a.Component);return w.a.createElement(n,null)},C=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),v()(g()(s),"state",{on:!1}),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this;return w.a.createElement("div",null,w.a.createElement(b.i,{onClick:function(){n.setState({on:!0})}},"全局开启"),w.a.createElement(b.i,{onClick:function(){n.setState({on:!1})},style:{zIndex:9999,position:"relative"}},"全局关闭"),w.a.createElement(b.S,{loading:this.state.on}))}}]),a}(w.a.Component);return w.a.createElement(n,null)},L=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),v()(g()(s),"state",{loading:!1}),v()(g()(s),"onChange",(function(n){s.setState({loading:n})})),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.loading;return w.a.createElement("div",null,w.a.createElement(b.g,{loading:n,delay:1e3}),w.a.createElement(b.Fb,{className:"zent-loading-example-switch",checked:n,onChange:this.onChange,size:"small"}))}}]),a}(w.a.Component);return w.a.createElement(n,null)},S=function(){return w.a.createElement("div",null,w.a.createElement(b.g,{loading:!0,iconSize:64,iconText:"加载中"}),w.a.createElement(b.g,{loading:!0,icon:"circle",iconSize:64,iconText:"加载中"}))},N=function(){return w.a.createElement("div",{className:"zent-loading-demo-inline-container"},w.a.createElement(b.Y,{loading:!0}),w.a.createElement(b.Y,{loading:!0,iconText:"加载中"}),w.a.createElement(b.Y,{loading:!0,iconText:"加载中",textPosition:"top"}),w.a.createElement(b.Y,{loading:!0,icon:"circle",iconText:"加载中",textPosition:"left"}),w.a.createElement(b.Y,{loading:!0,icon:"circle",iconText:"加载中",textPosition:"right"}))};function j(n){return w.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function B(n){return w.a.createElement(j,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function T(n){return w.a.createElement(j,{tag:"style",html:n.style})}var _=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=r()(a)).call.apply(n,[this].concat(p))),v()(g()(s),"state",{showCode:!1}),v()(g()(s),"toggle",(function(){s.setState({showCode:!s.state.showCode})})),s}return h()(a,n),l()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},p),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,s||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(j,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),D=function(n){function a(){return e()(this,a),i()(this,r()(a).apply(this,arguments))}return h()(a,n),l()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(E.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(T,{style:".zent-loading-example-switch {\n\tmargin-top: 10px;\n}\n.zent-loading-example-hello-world {\n\tbackground: #f8f8f8;\n\ttext-align: center;\n\theight: 260px;\n\tline-height: 260px;\n}\n\n.zent-loading-demo-inline-container {\n\t\tdisplay: flex;\n\t\talign-items: center;\n\t\tjustify-content: space-around;\n\t}"}),w.a.createElement(B,{html:'<h2 class="anchor-heading"><a href="#loading-deng-dai">¶</a><a href="javascript:void(0)" id="loading-deng-dai" class="anchor-point"></a>Loading 等待</h2>\n<p>等待，用于页面或者区块的等待状态。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>当页面处于渲染中或者加载异步数据时，可以使用此组件减少用户等待时的焦虑感</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),w.a.createElement(_,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> BlockLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockLoading</span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(z)),w.a.createElement(_,{title:"包裹模式",id:"Demowrappermode",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> BlockLoading<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockLoading</span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>\n          <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-loading-example-hello-world<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Hello World<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>BlockLoading</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-loading-example-switch<span class="token punctuation">"</span></span>\n          <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(x)),w.a.createElement(_,{title:"全局模式",id:"Demoglobalmode",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> FullScreenLoading<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Example</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span>\n    on<span class="token punctuation">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>Button\n          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> on<span class="token punctuation">:</span> <span class="token boolean">true</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          全局开启\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token operator">&lt;</span>Button\n          onClick<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n            <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> on<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n          <span class="token punctuation">}</span><span class="token punctuation">}</span>\n          style<span class="token operator">=</span><span class="token punctuation">{</span><span class="token punctuation">{</span> zIndex<span class="token punctuation">:</span> <span class="token number">9999</span><span class="token punctuation">,</span> position<span class="token punctuation">:</span> <span class="token string">\'relative\'</span> <span class="token punctuation">}</span><span class="token punctuation">}</span>\n        <span class="token operator">></span>\n          全局关闭\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>FullScreenLoading</span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">.</span>on<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Example</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(C)),w.a.createElement(_,{title:"延迟 1s 显示",id:"Demodelay",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> BlockLoading<span class="token punctuation">,</span> Switch <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  state <span class="token operator">=</span> <span class="token punctuation">{</span> loading<span class="token punctuation">:</span> <span class="token boolean">false</span> <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function-variable function">onChange</span> <span class="token operator">=</span> value <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setState</span><span class="token punctuation">(</span><span class="token punctuation">{</span> loading<span class="token punctuation">:</span> value <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span><span class="token punctuation">;</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> <span class="token punctuation">{</span> loading <span class="token punctuation">}</span> <span class="token operator">=</span> <span class="token keyword">this</span><span class="token punctuation">.</span>state<span class="token punctuation">;</span>\n\n    <span class="token keyword">return</span> <span class="token punctuation">(</span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockLoading</span> <span class="token attr-name">loading</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span> <span class="token attr-name">delay</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">1000</span><span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n        <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Switch</span>\n          <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-loading-example-switch<span class="token punctuation">"</span></span>\n          <span class="token attr-name">checked</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>loading<span class="token punctuation">}</span></span>\n          <span class="token attr-name">onChange</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>onChange<span class="token punctuation">}</span></span>\n          <span class="token attr-name">size</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>small<span class="token punctuation">"</span></span>\n        <span class="token punctuation">/></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>\n    <span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(L)),w.a.createElement(_,{title:"自定义图标大小和文字",id:"Demotext",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> BlockLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockLoading</span> <span class="token attr-name">loading</span> <span class="token attr-name">iconSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">64</span><span class="token punctuation">}</span></span> <span class="token attr-name">iconText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>加载中<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>BlockLoading</span> <span class="token attr-name">loading</span> <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span> <span class="token attr-name">iconSize</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token number">64</span><span class="token punctuation">}</span></span> <span class="token attr-name">iconText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>加载中<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(S)),w.a.createElement(_,{title:"内联样式",id:"Demoinline",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> InlineLoading <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">className</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>zent-loading-demo-inline-container<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InlineLoading</span> <span class="token attr-name">loading</span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InlineLoading</span> <span class="token attr-name">loading</span> <span class="token attr-name">iconText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>加载中<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InlineLoading</span> <span class="token attr-name">loading</span> <span class="token attr-name">iconText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>加载中<span class="token punctuation">"</span></span> <span class="token attr-name">textPosition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>top<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InlineLoading</span>\n      <span class="token attr-name">loading</span>\n      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span>\n      <span class="token attr-name">iconText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>加载中<span class="token punctuation">"</span></span>\n      <span class="token attr-name">textPosition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>left<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>InlineLoading</span>\n      <span class="token attr-name">loading</span>\n      <span class="token attr-name">icon</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>circle<span class="token punctuation">"</span></span>\n      <span class="token attr-name">iconText</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>加载中<span class="token punctuation">"</span></span>\n      <span class="token attr-name">textPosition</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>right<span class="token punctuation">"</span></span>\n    <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(N)),w.a.createElement(B,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<p><code>Loading</code> 有 3 种类型：<code>BlockLoading</code>, <code>InlineLoading</code> 以及 <code>FullScreenLoading</code>。\n3 种类型共享大部分参数，每种类型可能有独有的参数。</p>\n<h4 class="anchor-heading"><a href="#tong-yong-de-can-shu">¶</a><a href="javascript:void(0)" id="tong-yong-de-can-shu" class="anchor-point"></a>通用的参数</h4>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必填</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>loading</td>\n<td>显示控制</td>\n<td>bool</td>\n<td>否</td>\n<td><code>false</code></td>\n<td><code>true</code></td>\n</tr>\n<tr>\n<td>delay</td>\n<td>显示延迟时间（毫秒）</td>\n<td>number</td>\n<td>否</td>\n<td><code>0</code></td>\n<td></td>\n</tr>\n<tr>\n<td>icon</td>\n<td>图标样式</td>\n<td>string</td>\n<td>否</td>\n<td><code>\'youzan\'</code></td>\n<td><code>\'circle\'</code></td>\n</tr>\n<tr>\n<td>iconSize</td>\n<td>图标大小</td>\n<td>number</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>iconText</td>\n<td>图标文案</td>\n<td>string</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>textPosition</td>\n<td>文案相对图标的位置</td>\n<td>string</td>\n<td>否</td>\n<td><code>\'bottom\'</code></td>\n<td><code>\'top\'</code>\n \n|\n \n<code>\'left\'</code>\n \n|\n \n<code>\'right\'</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>自定义额外类名</td>\n<td>string</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#blockloading">¶</a><a href="javascript:void(0)" id="blockloading" class="anchor-point"></a>BlockLoading</h4>\n<p>块级 <code>Loading</code>，可以包裹内容，或者给定一个高度。常用于页面区块的加载。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必填</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>height</td>\n<td>如果包裹了组件，默认表现为组件高度；否则将使用默认高度</td>\n<td>number</td>\n<td><code>160</code></td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>children</td>\n<td>包裹的内容</td>\n<td>node</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#inlineloading">¶</a><a href="javascript:void(0)" id="inlineloading" class="anchor-point"></a>InlineLoading</h4>\n<p>内联 <code>Loading</code>，不能包裹内容，行内显示。</p>\n<h4 class="anchor-heading"><a href="#fullscreenloading">¶</a><a href="javascript:void(0)" id="fullscreenloading" class="anchor-point"></a>FullScreenLoading</h4>\n<p>全屏 <code>Loading</code>，不能包裹内容，全屏显示。用于页面级的加载。</p>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>是否必填</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>zIndex</td>\n<td>蒙层 z-index</td>\n<td>number</td>\n<td>否</td>\n<td></td>\n<td></td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(y.Component)}}]);