(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{710:function(n,a,s){"use strict";s.r(a),s.d(a,"default",(function(){return I}));var t=s(616),p=s.n(t),o=s(610),e=s.n(o),c=s(611),u=s.n(c),l=s(612),i=s.n(l),r=s(613),k=s.n(r),d=s(291),m=s.n(d),f=s(614),h=s.n(f),g=s(615),w=s.n(g),y=s(0),C=s.n(y),v=s(114),b=s(84),E=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),w()(m()(s),"showAlertInfo",(function(){b.Db.alert({content:"这个是具体内容",parentComponent:m()(s)})})),s}return h()(a,n),u()(a,[{key:"render",value:function(){return C.a.createElement(b.i,{onClick:this.showAlertInfo},"消息对话框")}}]),a}(C.a.Component);return C.a.createElement(n,null)},A=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),w()(m()(s),"onConfirm",(function(){b.lb.success("我真的知道了")})),w()(m()(s),"onCancel",(function(){b.lb.error("我真的取消了")})),w()(m()(s),"showAlertConfirm",(function(){b.Db.confirm({content:C.a.createElement("p",null,"这个是内容"),onConfirm:s.onConfirm,onCancel:s.onCancel,parentComponent:m()(s)})})),s}return h()(a,n),u()(a,[{key:"render",value:function(){return C.a.createElement(b.i,{onClick:this.showAlertConfirm},"消息对话框")}}]),a}(C.a.Component);return C.a.createElement(n,null)},D=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),w()(m()(s),"autoCloseConfirm",(function(){var n=b.Db.confirm({content:C.a.createElement("p",null,"一秒后自动关闭"),parentComponent:m()(s)});setTimeout(n,1e3)})),s}return h()(a,n),u()(a,[{key:"render",value:function(){return C.a.createElement(b.i,{onClick:this.autoCloseConfirm},"自动关闭对话框")}}]),a}(C.a.Component);return C.a.createElement(n,null)},N=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),w()(m()(s),"promiseConfirm",(function(){b.Db.confirm({content:"点击确定后三秒自动关闭",title:"onConfirm返回Promise",onConfirm:function(){return new Promise((function(n){setTimeout((function(){n()}),3e3)}))},parentComponent:m()(s)})})),s}return h()(a,n),u()(a,[{key:"render",value:function(){return C.a.createElement(b.i,{onClick:this.promiseConfirm},"自动关闭对话框(Promise)")}}]),a}(C.a.Component);return C.a.createElement(n,null)},B=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),w()(m()(s),"showAlertInfo",(function(){b.Db.alert({type:"info",content:"这个是具体内容",title:"这是一个消息标题",parentComponent:m()(s)})})),s}return h()(a,n),u()(a,[{key:"render",value:function(){return C.a.createElement(b.i,{onClick:this.showAlertInfo},"含有图标消息对话框")}}]),a}(C.a.Component);return C.a.createElement(n,null)},z=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),w()(m()(s),"showAlertConfirm",(function(){b.Db.confirm({confirmType:"danger",confirmText:"删除",cancelText:"取消",content:"确认删除吗？",title:"请确认",parentComponent:m()(s)})})),s}return h()(a,n),u()(a,[{key:"render",value:function(){return C.a.createElement(b.i,{onClick:this.showAlertConfirm,type:"danger"},"删除")}}]),a}(C.a.Component);return C.a.createElement(n,null)},S=function(){var n=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),w()(m()(s),"showAlertInfo",(function(){b.Db.alert({closeBtn:!0,maskClosable:!0,content:"这个是具体内容",parentComponent:m()(s)})})),s}return h()(a,n),u()(a,[{key:"render",value:function(){return C.a.createElement(b.i,{onClick:this.showAlertInfo},"带有关闭按钮")}}]),a}(C.a.Component);return C.a.createElement(n,null)};function x(n){return C.a.createElement(n.tag,p()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function j(n){return C.a.createElement(x,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function T(n){return C.a.createElement(x,{tag:"style",html:n.style})}var _=function(n){function a(){var n,s;e()(this,a);for(var t=arguments.length,p=new Array(t),o=0;o<t;o++)p[o]=arguments[o];return s=i()(this,(n=k()(a)).call.apply(n,[this].concat(p))),w()(m()(s),"state",{showCode:!1}),w()(m()(s),"toggle",(function(){s.setState({showCode:!s.state.showCode})})),s}return h()(a,n),u()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,s=a.title,t=a.src,p=a.children;return C.a.createElement("div",{className:"zandoc-react-demo"},C.a.createElement("div",{className:"zandoc-react-demo__preview"},p),C.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},C.a.createElement("div",{className:"zandoc-react-demo__title"},C.a.createElement("p",null,s||"")),C.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&C.a.createElement("pre",{className:"zandoc-react-demo__code"},C.a.createElement(x,{tag:"code",html:t,attributes:{className:"language-jsx"}})))}}]),a}(y.Component),I=function(n){function a(){return e()(this,a),i()(this,k()(a).apply(this,arguments))}return h()(a,n),u()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(v.a)(document.documentElement,0,function n(a,s){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(s+=a.offsetTop),n(a.parentNode,s);return s}(a,-9))}}},{key:"render",value:function(){return C.a.createElement("div",{className:"zandoc-react-container",key:null},C.a.createElement(T,{style:""}),C.a.createElement(j,{html:'<h2 class="anchor-heading"><a href="#sweetalert-kuai-jie-dui-hua-kuang">¶</a><a href="javascript:void(0)" id="sweetalert-kuai-jie-dui-hua-kuang" class="anchor-point"></a>Sweetalert 快捷对话框</h2>\n<p>快速唤起 Dialog 组件</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>组件不提供个性化选项，如有需要请使用 Dialog 组件。</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),C.a.createElement(_,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Sweetalert<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">showAlertInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Sweetalert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      content<span class="token punctuation">:</span> <span class="token string">\'这个是具体内容\'</span><span class="token punctuation">,</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showAlertInfo<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>消息对话框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(E)),C.a.createElement(_,{title:"带有确认和取消按钮",id:"Demowithbuttons",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Sweetalert<span class="token punctuation">,</span> Button<span class="token punctuation">,</span> Notify <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">onConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">success</span><span class="token punctuation">(</span><span class="token string">\'我真的知道了\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">onCancel</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Notify<span class="token punctuation">.</span><span class="token function">error</span><span class="token punctuation">(</span><span class="token string">\'我真的取消了\'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function-variable function">showAlertConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Sweetalert<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      content<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这个是内容<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n      onConfirm<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onConfirm<span class="token punctuation">,</span>\n      onCancel<span class="token punctuation">:</span> <span class="token keyword">this</span><span class="token punctuation">.</span>onCancel<span class="token punctuation">,</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showAlertConfirm<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>消息对话框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(A)),C.a.createElement(_,{title:"自动关闭",id:"Democlosedexternal",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Sweetalert<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">autoCloseConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    <span class="token keyword">const</span> close <span class="token operator">=</span> Sweetalert<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      content<span class="token punctuation">:</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>一秒后自动关闭<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span><span class="token punctuation">,</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n    <span class="token function">setTimeout</span><span class="token punctuation">(</span>close<span class="token punctuation">,</span> <span class="token number">1000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>autoCloseConfirm<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>自动关闭对话框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(D)),C.a.createElement(_,{title:"回调返回 Promise",id:"Demoreturnpromise",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Sweetalert<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">promiseConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Sweetalert<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      content<span class="token punctuation">:</span> <span class="token string">\'点击确定后三秒自动关闭\'</span><span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'onConfirm返回Promise\'</span><span class="token punctuation">,</span>\n      onConfirm<span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token keyword">new</span> <span class="token class-name">Promise</span><span class="token punctuation">(</span><span class="token punctuation">(</span>resolve<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token function">setTimeout</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n          <span class="token function">resolve</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n        <span class="token punctuation">}</span><span class="token punctuation">,</span> <span class="token number">3000</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n      <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">,</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>promiseConfirm<span class="token punctuation">}</span></span><span class="token punctuation">></span></span><span class="token function">自动关闭对话框</span><span class="token punctuation">(</span>Promise<span class="token punctuation">)</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(N)),C.a.createElement(_,{title:"标题旁带有 icon 的 Dialog",id:"Demowithicon",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Sweetalert<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">showAlertInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Sweetalert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      type<span class="token punctuation">:</span> <span class="token string">\'info\'</span><span class="token punctuation">,</span>\n      content<span class="token punctuation">:</span> <span class="token string">\'这个是具体内容\'</span><span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'这是一个消息标题\'</span><span class="token punctuation">,</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showAlertInfo<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>含有图标消息对话框<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(B)),C.a.createElement(_,{title:"支持设置 Dialog 中的 button 类型",id:"Demobuttontype",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Sweetalert<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">showAlertConfirm</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Sweetalert<span class="token punctuation">.</span><span class="token function">confirm</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      confirmType<span class="token punctuation">:</span> <span class="token string">\'danger\'</span><span class="token punctuation">,</span>\n      confirmText<span class="token punctuation">:</span> <span class="token string">\'删除\'</span><span class="token punctuation">,</span>\n      cancelText<span class="token punctuation">:</span> <span class="token string">\'取消\'</span><span class="token punctuation">,</span>\n      content<span class="token punctuation">:</span> <span class="token string">\'确认删除吗？\'</span><span class="token punctuation">,</span>\n      title<span class="token punctuation">:</span> <span class="token string">\'请确认\'</span><span class="token punctuation">,</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showAlertConfirm<span class="token punctuation">}</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>danger<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>删除<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(z)),C.a.createElement(_,{title:"带有右上角的关闭按钮",id:"Demowithclosebtn",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Sweetalert<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">class</span> <span class="token class-name">Wrapper</span> <span class="token keyword">extends</span> <span class="token class-name">React<span class="token punctuation">.</span>Component</span> <span class="token punctuation">{</span>\n  <span class="token function-variable function">showAlertInfo</span> <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n    Sweetalert<span class="token punctuation">.</span><span class="token function">alert</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n      closeBtn<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      maskClosable<span class="token punctuation">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>\n      content<span class="token punctuation">:</span> <span class="token string">\'这个是具体内容\'</span><span class="token punctuation">,</span>\n      parentComponent<span class="token punctuation">:</span> <span class="token keyword">this</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n\n  <span class="token function">render</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">onClick</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span><span class="token keyword">this</span><span class="token punctuation">.</span>showAlertInfo<span class="token punctuation">}</span></span><span class="token punctuation">></span></span>带有关闭按钮<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span><span class="token punctuation">;</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Wrapper</span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span>\n  mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},C.a.createElement(S)),C.a.createElement(j,{html:"<h3 class=\"anchor-heading\"><a href=\"#api\">¶</a><a href=\"javascript:void(0)\" id=\"api\" class=\"anchor-point\"></a>API</h3>\n<h4 class=\"anchor-heading\"><a href=\"#alert\">¶</a><a href=\"javascript:void(0)\" id=\"alert\" class=\"anchor-point\"></a>alert</h4>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>弹窗中的内容</td>\n<td>node</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>弹窗的类型, 设置会在title左边显示一个小图标, 不传不会显示图标</td>\n<td>string</td>\n<td>-</td>\n<td><code>'info'</code>\n, \n<code>'success'</code>\n, \n<code>'error'</code>\n, \n<code>'warning'</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>弹窗的标题</td>\n<td>node</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>确定操作回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>confirmText</td>\n<td>确定按钮文案</td>\n<td>string</td>\n<td><code>'我知道了'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>confirmType</td>\n<td>确定按钮的类型</td>\n<td>string</td>\n<td><code>'primary'</code></td>\n<td><code>'default'</code>\n、\n<code>'primary'</code>\n、\n<code>'danger'</code>\n、\n<code>'success'</code></td>\n</tr>\n<tr>\n<td>closeBtn</td>\n<td>是否显示右上角关闭按钮</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>maskClosable</td>\n<td>点击遮罩是否可以关闭</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>parentComponent</td>\n<td>父级组件实例，i18n 需要通过这个传递 context</td>\n<td>ReactInstance</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外的className</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>默认className的前缀</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<h4 class=\"anchor-heading\"><a href=\"#confirm\">¶</a><a href=\"javascript:void(0)\" id=\"confirm\" class=\"anchor-point\"></a>confirm</h4>\n<table class=\"table\">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n<th>备选值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>content</td>\n<td>弹窗中的内容</td>\n<td>node</td>\n<td></td>\n<td></td>\n</tr>\n<tr>\n<td>type</td>\n<td>弹窗的类型, 设置会在title左边显示一个小图标, 不传不会显示图标</td>\n<td>string</td>\n<td>-</td>\n<td><code>'info'</code>\n, \n<code>'success'</code>\n, \n<code>'error'</code>\n, \n<code>'warning'</code></td>\n</tr>\n<tr>\n<td>title</td>\n<td>弹窗的标题</td>\n<td>node</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onCancel</td>\n<td>取消操作回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onConfirm</td>\n<td>确定操作回调函数</td>\n<td>func</td>\n<td><code>noop</code></td>\n<td></td>\n</tr>\n<tr>\n<td>cancelText</td>\n<td>取消按钮文案</td>\n<td>string</td>\n<td><code>'取消'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>confirmText</td>\n<td>确定按钮文案</td>\n<td>string</td>\n<td><code>'确定'</code></td>\n<td></td>\n</tr>\n<tr>\n<td>confirmType</td>\n<td>确定按钮的类型</td>\n<td>string</td>\n<td><code>'primary'</code></td>\n<td><code>'default'</code>\n、\n<code>'primary'</code>\n、\n<code>'danger'</code>\n、\n<code>'success'</code></td>\n</tr>\n<tr>\n<td>closeBtn</td>\n<td>是否显示右上角关闭按钮</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>maskClosable</td>\n<td>点击遮罩是否可以关闭</td>\n<td>bool</td>\n<td><code>false</code></td>\n<td></td>\n</tr>\n<tr>\n<td>className</td>\n<td>额外的className</td>\n<td>string</td>\n<td><code>''</code></td>\n<td></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>默认className的前缀</td>\n<td>string</td>\n<td><code>'zent'</code></td>\n<td></td>\n</tr>\n</tbody>\n</table>\n<ul>\n<li><code>Sweetalert.alert</code> 和 <code>Sweetalert.confirm</code> 的返回值是可以用来手动关闭对话框的函数。</li>\n<li>如果 <code>onConfirm</code> 的返回值是 <code>Promise</code>, 对应的按钮会在 <code>Promise</code> pending 时保持在 loading 状态；如果 <code>Promise</code> reject，对话框不会关闭，如果 <code>Promise</code> resolve 对话框关闭。</li>\n<li>如果 <code>onConfirm</code> 没有参数并且返回值是 <code>false</code> 对话框不会关闭。</li>\n<li>如果 <code>onConfirm</code> 有一个参数的话，需要手动调用 <code>close</code> 这个参数来关闭对话框。</li>\n</ul>"}))}}]),a}(y.Component)}}]);