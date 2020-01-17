(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{731:function(n,a,t){"use strict";t.r(a),t.d(a,"default",(function(){return x}));var s=t(610),e=t.n(s),o=t(611),p=t.n(o),c=t(612),r=t.n(c),l=t(613),u=t.n(l),i=t(291),d=t.n(i),k=t(614),m=t.n(k),h=t(615),g=t.n(h),f=t(616),b=t.n(f),w=t(0),y=t.n(w),v=t(114),E=t(84),z=function(){return y.a.createElement(E.h,{breads:[{name:"Index",href:"//www.youzan.com"},{name:"Application Center",href:"//www.youzan.com"},{name:"Marteting Center"}]})},I=function(){return y.a.createElement(E.h,null,y.a.createElement(E.h.Item,{name:"Index",href:"//www.youzan.com"}),y.a.createElement(E.h.Item,{name:"Application Center",href:"//www.youzan.com",className:"zent-demo-bread"}),y.a.createElement(E.h.Item,{name:"Marteting Center"}))},B=function(){return y.a.createElement(E.h,null,y.a.createElement(E.h.Item,null,y.a.createElement("a",{href:"//www.youzan.com"},"Index")),y.a.createElement(E.h.Item,null,y.a.createElement("span",null,"Application Center")),y.a.createElement("span",null,"Marteting Center"))};function C(n){return y.a.createElement(n.tag,b()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function N(n){return y.a.createElement(C,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function _(n){return y.a.createElement(C,{tag:"style",html:n.style})}var D=function(n){function a(){var n,t;e()(this,a);for(var s=arguments.length,o=new Array(s),p=0;p<s;p++)o[p]=arguments[p];return t=r()(this,(n=u()(a)).call.apply(n,[this].concat(o))),g()(d()(t),"state",{showCode:!1}),g()(d()(t),"toggle",(function(){t.setState({showCode:!t.state.showCode})})),t}return m()(a,n),p()(a,[{key:"render",value:function(){var n=this.state.showCode,a=this.props,t=a.title,s=a.src,e=a.children;return y.a.createElement("div",{className:"zandoc-react-demo"},y.a.createElement("div",{className:"zandoc-react-demo__preview"},e),y.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},y.a.createElement("div",{className:"zandoc-react-demo__title"},y.a.createElement("p",null,t||"")),y.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&y.a.createElement("pre",{className:"zandoc-react-demo__code"},y.a.createElement(C,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),a}(w.Component),x=function(n){function a(){return e()(this,a),r()(this,u()(a).apply(this,arguments))}return m()(a,n),p()(a,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var a=document.querySelector('a[href="'.concat(n,'"]'));a&&Object(v.a)(document.documentElement,0,function n(a,t){for(;a;)return a.offsetTop&&"static"!==getComputedStyle(a).position&&(t+=a.offsetTop),n(a.parentNode,t);return t}(a,-9))}}},{key:"render",value:function(){return y.a.createElement("div",{className:"zandoc-react-container",key:null},y.a.createElement(_,{style:""}),y.a.createElement(N,{html:'<h2 class="anchor-heading"><a href="#breadcrumb">¶</a><a href="javascript:void(0)" id="breadcrumb" class="anchor-point"></a>Breadcrumb</h2>\n<p>Breadcrumb is used to provide a hierarchical navigation structure and mark the current position.</p>\n<h3 class="anchor-heading"><a href="#guide">¶</a><a href="javascript:void(0)" id="guide" class="anchor-point"></a>Guide</h3>\n<ul>\n<li>There\'re more than 2 levels of hierarchy。</li>\n<li>Users need to be told where they are.</li>\n<li>Function of navigating upwards is required.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),y.a.createElement(D,{title:"Basic Usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Breadcrumb <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\n<span class="token keyword">const</span> dataList <span class="token operator">=</span> <span class="token punctuation">[</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Index\'</span><span class="token punctuation">,</span> href<span class="token punctuation">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Application Center\'</span><span class="token punctuation">,</span> href<span class="token punctuation">:</span> <span class="token string">\'//www.youzan.com\'</span> <span class="token punctuation">}</span><span class="token punctuation">,</span>\n  <span class="token punctuation">{</span> name<span class="token punctuation">:</span> <span class="token string">\'Marteting Center\'</span> <span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span> <span class="token attr-name">breads</span><span class="token script language-javascript"><span class="token punctuation">=</span><span class="token punctuation">{</span>dataList<span class="token punctuation">}</span></span> <span class="token punctuation">/></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span><span class="token punctuation">;</span>'},y.a.createElement(z)),y.a.createElement(D,{title:"Breadcrmb.Item can be used directory",id:"Demoitem",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span><span class="token punctuation">></span></span>\n    <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item name<span class="token operator">=</span><span class="token string">"Index"</span> href<span class="token operator">=</span><span class="token string">"//www.youzan.com"</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token operator">&lt;</span>Breadcrumb<span class="token punctuation">.</span>Item name<span class="token operator">=</span><span class="token string">"Application Center"</span> href<span class="token operator">=</span><span class="token string">"//www.youzan.com"</span> className<span class="token operator">=</span><span class="token string">"zent-demo-bread"</span> <span class="token operator">/</span><span class="token operator">></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb.Item</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Marteting Center<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},y.a.createElement(I)),y.a.createElement(D,{title:"The content of Breadcrumb.Item is customizable.The whole Breadcrumb can be customized as well.",id:"Democustomitem",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> Alert<span class="token punctuation">,</span> Icon <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\n      <span class="token operator">&lt;</span>a href<span class="token operator">=</span><span class="token string">"//www.youzan.com"</span><span class="token operator">></span>Index<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\n      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Application Center<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb.Item</span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>span</span><span class="token punctuation">></span></span>Marteting Center<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>span</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Breadcrumb</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode\n<span class="token punctuation">)</span>'},y.a.createElement(B)),y.a.createElement(N,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<h4 class="anchor-heading"><a href="#breadcrumb">¶</a><a href="javascript:void(0)" id="breadcrumb" class="anchor-point"></a>Breadcrumb</h4>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>breads</td>\n<td>data</td>\n<td>array</td>\n<td><code>[]</code></td>\n</tr>\n<tr>\n<td>className</td>\n<td>extra custom class name</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>prefix</td>\n<td>custom prefix</td>\n<td>string</td>\n<td><code>\'zent\'</code></td>\n</tr>\n</tbody>\n</table>\n<h4 class="anchor-heading"><a href="#item">¶</a><a href="javascript:void(0)" id="item" class="anchor-point"></a>Item</h4>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>className</td>\n<td>extra custom class name</td>\n<td>string</td>\n<td><code>\'\'</code></td>\n</tr>\n<tr>\n<td>name</td>\n<td>content</td>\n<td>string or React node</td>\n<td>-</td>\n</tr>\n<tr>\n<td>href</td>\n<td>hyperlink</td>\n<td>string</td>\n<td>-</td>\n</tr>\n</tbody>\n</table>'}))}}]),a}(w.Component)}}]);