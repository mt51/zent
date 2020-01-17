(window.webpackJsonp=window.webpackJsonp||[]).push([[50],{745:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return D}));var s=a(610),e=a.n(s),o=a(611),c=a.n(o),p=a(612),i=a.n(p),l=a(613),r=a.n(l),u=a(291),d=a.n(u),m=a(614),h=a.n(m),k=a(615),f=a.n(k),g=a(616),y=a.n(g),v=a(0),w=a.n(v),C=a(114),E=a(84),b=function(){return w.a.createElement(E.q,{text:"basic usage"})},z=function(){return w.a.createElement(E.q,{text:"customize usage",onCopySuccess:"Copied！"},w.a.createElement(E.i,{type:"primary"},"Click！"))};function _(n){return w.a.createElement(n.tag,y()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function N(n){return w.a.createElement(_,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function B(n){return w.a.createElement(_,{tag:"style",html:n.style})}var x=function(n){function t(){var n,a;e()(this,t);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return a=i()(this,(n=r()(t)).call.apply(n,[this].concat(o))),f()(d()(a),"state",{showCode:!1}),f()(d()(a),"toggle",(function(){a.setState({showCode:!a.state.showCode})})),a}return h()(t,n),c()(t,[{key:"render",value:function(){var n=this.state.showCode,t=this.props,a=t.title,s=t.src,e=t.children;return w.a.createElement("div",{className:"zandoc-react-demo"},w.a.createElement("div",{className:"zandoc-react-demo__preview"},e),w.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},w.a.createElement("div",{className:"zandoc-react-demo__title"},w.a.createElement("p",null,a||"")),w.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&w.a.createElement("pre",{className:"zandoc-react-demo__code"},w.a.createElement(_,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),t}(v.Component),D=function(n){function t(){return e()(this,t),i()(this,r()(t).apply(this,arguments))}return h()(t,n),c()(t,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var t=document.querySelector('a[href="'.concat(n,'"]'));t&&Object(C.a)(document.documentElement,0,function n(t,a){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(a+=t.offsetTop),n(t.parentNode,a);return a}(t,-9))}}},{key:"render",value:function(){return w.a.createElement("div",{className:"zandoc-react-container",key:null},w.a.createElement(B,{style:""}),w.a.createElement(N,{html:'<h2 class="anchor-heading"><a href="#copybutton">¶</a><a href="javascript:void(0)" id="copybutton" class="anchor-point"></a>CopyButton</h2>\n<p>Copy button will copy the specified text to the system clipboard when clicked.</p>\n<h3 class="anchor-heading"><a href="#guides">¶</a><a href="javascript:void(0)" id="guides" class="anchor-point"></a>Guides</h3>\n<ul>\n<li>When you need to copy some text, you can use this component.</li>\n<li>This component may fail in some older version browsers since it doesn\'t rely on Flash.</li>\n</ul>\n<h3 class="anchor-heading"><a href="#demos">¶</a><a href="javascript:void(0)" id="demos" class="anchor-point"></a>Demos</h3>'}),w.a.createElement(x,{title:"Basic usage",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> CopyButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>basic usage<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(b)),w.a.createElement(x,{title:"Customize usage",id:"Democustomize",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> CopyButton<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>customize usage<span class="token punctuation">"</span></span> <span class="token attr-name">onCopySuccess</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>Copied！<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Click！<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CopyButton</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},w.a.createElement(z)),w.a.createElement(N,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>Property</th>\n<th>Description</th>\n<th>Type</th>\n<th>Default</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>The next need to be copied</td>\n<td><code>string</code>\n \n|\n \n<code>() => string</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onCopySuccess</td>\n<td>The callback function that is triggered when copy successful. If this property is string, it will show in \n<code>Notify.info</code>\n.</td>\n<td>function \n|\n string</td>\n<td><code>\'Copied\'</code></td>\n</tr>\n<tr>\n<td>onCopyError</td>\n<td>The callback function that is triggered when copy failed. If this property is string, it will show in \n<code>Notify.error</code>\n.</td>\n<td>function \n|\n string</td>\n<td><code>\'Copy failed\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),t}(v.Component)}}]);