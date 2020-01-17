(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{673:function(n,t,a){"use strict";a.r(t),a.d(t,"default",(function(){return j}));var s=a(610),e=a.n(s),o=a(611),c=a.n(o),p=a(612),l=a.n(p),u=a(613),r=a.n(u),i=a(291),d=a.n(i),k=a(614),m=a.n(k),h=a(615),f=a.n(h),g=a(616),y=a.n(g),v=a(0),E=a.n(v),z=a(114),C=a(84),b=function(){return E.a.createElement(C.q,{text:"basic usage"})},w=function(){return E.a.createElement(C.q,{text:"customize usage",onCopySuccess:"复制成功啦！"},E.a.createElement(C.i,{type:"primary"},"点我"))};function _(n){return E.a.createElement(n.tag,y()({},n.attributes,{dangerouslySetInnerHTML:{__html:n.html}}))}function N(n){return E.a.createElement(_,{tag:"section",html:n.html,attributes:{className:"zandoc-react-markdown"}})}function B(n){return E.a.createElement(_,{tag:"style",html:n.style})}var S=function(n){function t(){var n,a;e()(this,t);for(var s=arguments.length,o=new Array(s),c=0;c<s;c++)o[c]=arguments[c];return a=l()(this,(n=r()(t)).call.apply(n,[this].concat(o))),f()(d()(a),"state",{showCode:!1}),f()(d()(a),"toggle",(function(){a.setState({showCode:!a.state.showCode})})),a}return m()(t,n),c()(t,[{key:"render",value:function(){var n=this.state.showCode,t=this.props,a=t.title,s=t.src,e=t.children;return E.a.createElement("div",{className:"zandoc-react-demo"},E.a.createElement("div",{className:"zandoc-react-demo__preview"},e),E.a.createElement("div",{className:"zandoc-react-demo__bottom",onClick:this.toggle},E.a.createElement("div",{className:"zandoc-react-demo__title"},E.a.createElement("p",null,a||"")),E.a.createElement("i",{className:"zenticon zenticon-caret-up zandoc-react-demo__toggle ".concat(n?"zandoc-react-demo__toggle-on":"zandoc-react-demo__toggle-off")})),n&&E.a.createElement("pre",{className:"zandoc-react-demo__code"},E.a.createElement(_,{tag:"code",html:s,attributes:{className:"language-jsx"}})))}}]),t}(v.Component),j=function(n){function t(){return e()(this,t),l()(this,r()(t).apply(this,arguments))}return m()(t,n),c()(t,[{key:"componentDidMount",value:function(){var n=location.hash;if(n){var t=document.querySelector('a[href="'.concat(n,'"]'));t&&Object(z.a)(document.documentElement,0,function n(t,a){for(;t;)return t.offsetTop&&"static"!==getComputedStyle(t).position&&(a+=t.offsetTop),n(t.parentNode,a);return a}(t,-9))}}},{key:"render",value:function(){return E.a.createElement("div",{className:"zandoc-react-container",key:null},E.a.createElement(B,{style:""}),E.a.createElement(N,{html:'<h2 class="anchor-heading"><a href="#copybutton-fu-zhi-an-niu">¶</a><a href="javascript:void(0)" id="copybutton-fu-zhi-an-niu" class="anchor-point"></a>CopyButton 复制按钮</h2>\n<p>复制按钮，点击后复制指定的文本到系统剪贴板中。</p>\n<h3 class="anchor-heading"><a href="#shi-yong-zhi-nan">¶</a><a href="javascript:void(0)" id="shi-yong-zhi-nan" class="anchor-point"></a>使用指南</h3>\n<ul>\n<li>当需要复制某些文本的时候，可以使用此组件</li>\n<li>不依赖 Flash，所以在某些老版本浏览器上可能失败</li>\n</ul>\n<h3 class="anchor-heading"><a href="#dai-ma-yan-shi">¶</a><a href="javascript:void(0)" id="dai-ma-yan-shi" class="anchor-point"></a>代码演示</h3>'}),E.a.createElement(S,{title:"基础用法",id:"Demobasic",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> CopyButton <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>basic usage<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span><span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(b)),E.a.createElement(S,{title:"自定义组件",id:"Democustomize",src:'<span class="token keyword">import</span> <span class="token punctuation">{</span> CopyButton<span class="token punctuation">,</span> Button <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">\'zent\'</span><span class="token punctuation">;</span>\n\nReactDOM<span class="token punctuation">.</span><span class="token function">render</span><span class="token punctuation">(</span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>CopyButton</span> <span class="token attr-name">text</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>customize usage<span class="token punctuation">"</span></span> <span class="token attr-name">onCopySuccess</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>复制成功啦！<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>\n    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Button</span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>primary<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>点我<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Button</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>CopyButton</span><span class="token punctuation">></span></span>\n  <span class="token punctuation">,</span> mountNode<span class="token punctuation">)</span><span class="token punctuation">;</span>'},E.a.createElement(w)),E.a.createElement(N,{html:'<h3 class="anchor-heading"><a href="#api">¶</a><a href="javascript:void(0)" id="api" class="anchor-point"></a>API</h3>\n<table class="table">\n<thead>\n<tr>\n<th>参数</th>\n<th>说明</th>\n<th>类型</th>\n<th>默认值</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td>text</td>\n<td>需要复制的文本</td>\n<td><code>string</code>\n \n|\n \n<code>() => string</code></td>\n<td></td>\n</tr>\n<tr>\n<td>onCopySuccess</td>\n<td>复制成功后的回调函数，如果是字符串则使用 \n<code>Notify.info</code>\n 提示</td>\n<td>function \n|\n string</td>\n<td><code>\'复制成功\'</code></td>\n</tr>\n<tr>\n<td>onCopyError</td>\n<td>复制失败后的回调函数，如果是字符串则使用 \n<code>Notify.error</code>\n 提示</td>\n<td>function \n|\n string</td>\n<td><code>\'复制失败\'</code></td>\n</tr>\n</tbody>\n</table>'}))}}]),t}(v.Component)}}]);