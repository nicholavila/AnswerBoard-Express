"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[1547],{85352:function(e,r,a){a.r(r);var t=a(74165),n=a(1413),i=a(15861),s=a(70885),o=a(47313),l=a(65832),d=a(21366),c=a(63849),u=a(31616),v=a(93298),f=a(58467),h=a(7410),p=a(34491),Z=a(3463),m=a(24751),x=a(46417);r.default=function(){var e=(0,f.UO)(),r=(0,f.s0)(),a=(0,o.useState)({slug:"",title:"",viewport:"",description:"",keywords:"",author:"",other:""}),b=(0,s.Z)(a,2),y=b[0],j=b[1],g=Z.Ry({slug:Z.Z_("Enter slug.").required("Slug is required."),title:Z.Z_("Enter title.").required("Title is required."),viewport:Z.Z_("Enter viewport.").required("Viewport is required."),description:Z.Z_("Enter description.").required("Description is required."),keywords:Z.Z_("Enter keywords.").required("Keywords is required."),author:Z.Z_("Enter author.").required("Author is required."),other:Z.Z_("Enter other.")});(0,o.useEffect)((function(){(0,i.Z)((0,t.Z)().mark((function r(){var a,i,s;return(0,t.Z)().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a=e.id,r.next=3,m.Z.get("/admin/seos/".concat(a));case 3:i=r.sent,(s=i.data).success?(j((0,n.Z)((0,n.Z)({},y),{},{slug:s.data.slug,title:s.data.title,viewport:s.data.viewport,description:s.data.description,keywords:s.data.keywords,author:s.data.author,other:s.data.other})),document.title=s.data.title):p.Am.error(s.msg);case 6:case"end":return r.stop()}}),r)})))()}),[]);var w=function(){var a=(0,i.Z)((0,t.Z)().mark((function a(n,i){var s,o,l,d;return(0,t.Z)().wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return s=i.resetForm,o=e.id,a.next=4,m.Z.put("admin/seos/".concat(o),n);case 4:l=a.sent,(d=l.data).success?(p.Am.success(d.msg),s(),r("/admin/seo")):p.Am.error(d.msg);case 7:case"end":return a.stop()}}),a)})));return function(e,r){return a.apply(this,arguments)}}();return(0,x.jsxs)(l.Z,{children:[(0,x.jsx)(l.Z.Header,{style:{background:"#3c4b64"},bsPrefix:"card-header py-3",children:(0,x.jsx)(l.Z.Title,{bsPrefix:"card-title mb-0 text-light",as:"h1",children:"Edit SEO"})}),(0,x.jsx)(l.Z.Body,{children:(0,x.jsx)(h.J9,{validationSchema:g,validateOnChange:!1,validateOnBlur:!1,onSubmit:w,initialValues:y,enableReinitialize:!0,children:function(e){var r=e.handleSubmit,a=e.handleChange,t=e.handleBlur,n=e.values,i=e.touched,s=e.errors;return(0,x.jsxs)(d.Z,{noValidate:!0,onSubmit:r,children:[(0,x.jsxs)(d.Z.Group,{className:"mb-3",children:[(0,x.jsx)(d.Z.Label,{children:"Slug:"}),(0,x.jsx)(d.Z.Control,{type:"text",placeholder:"Please enter slug.",name:"slug",onChange:a,onBlur:t,value:n.slug,touched:i,isInvalid:!!s.slug}),(0,x.jsx)(d.Z.Control.Feedback,{type:"invalid",children:s.slug})]}),(0,x.jsxs)(d.Z.Group,{className:"mb-3",children:[(0,x.jsx)(d.Z.Label,{children:"Title:"}),(0,x.jsx)(d.Z.Control,{type:"text",placeholder:"Please enter title.",name:"title",onChange:a,onBlur:t,value:n.title,touched:i,isInvalid:!!s.title}),(0,x.jsx)(d.Z.Control.Feedback,{type:"invalid",children:s.title})]}),(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(u.Z,{md:6,children:(0,x.jsxs)(d.Z.Group,{className:"mb-3",children:[(0,x.jsx)(d.Z.Label,{children:"Meta viewport:"}),(0,x.jsx)(d.Z.Control,{type:"text",placeholder:"Please enter viewport.",name:"viewport",onChange:a,onBlur:t,value:n.viewport,touched:i,isInvalid:!!s.viewport}),(0,x.jsx)(d.Z.Control.Feedback,{type:"invalid",children:s.viewport})]})}),(0,x.jsx)(u.Z,{md:6,children:(0,x.jsxs)(d.Z.Group,{className:"mb-3",children:[(0,x.jsx)(d.Z.Label,{children:"Meta description:"}),(0,x.jsx)(d.Z.Control,{type:"text",placeholder:"Please enter description.",name:"description",onChange:a,onBlur:t,value:n.description,touched:i,isInvalid:!!s.description}),(0,x.jsx)(d.Z.Control.Feedback,{type:"invalid",children:s.description})]})})]}),(0,x.jsxs)(c.Z,{children:[(0,x.jsx)(u.Z,{md:6,children:(0,x.jsxs)(d.Z.Group,{className:"mb-3",children:[(0,x.jsx)(d.Z.Label,{children:"Meta keywords:"}),(0,x.jsx)(d.Z.Control,{type:"text",placeholder:"Please enter keywords.",name:"keywords",onChange:a,onBlur:t,value:n.keywords,touched:i,isInvalid:!!s.keywords}),(0,x.jsx)(d.Z.Control.Feedback,{type:"invalid",children:s.keywords})]})}),(0,x.jsx)(u.Z,{md:6,children:(0,x.jsxs)(d.Z.Group,{className:"mb-3",children:[(0,x.jsx)(d.Z.Label,{children:"Meta author:"}),(0,x.jsx)(d.Z.Control,{type:"text",placeholder:"Please enter author.",name:"author",onChange:a,onBlur:t,value:n.author,touched:i,isInvalid:!!s.author}),(0,x.jsx)(d.Z.Control.Feedback,{type:"invalid",children:s.author})]})})]}),(0,x.jsxs)(d.Z.Group,{className:"mb-3",children:[(0,x.jsx)(d.Z.Label,{children:"Other header code:"}),(0,x.jsx)(d.Z.Control,{as:"textarea",placeholder:"Please enter othere header code.",name:"other",onChange:a,onBlur:t,value:n.other,touched:i,isInvalid:!!s.other,rows:5}),(0,x.jsx)(d.Z.Control.Feedback,{type:"invalid",children:s.other})]}),(0,x.jsxs)(v.Z,{type:"submit",variant:"primary",className:"float-end",children:[(0,x.jsx)("i",{className:"fa fa-save"})," Save"]})]})}})})]})}},16184:function(e,r,a){a.d(r,{FT:function(){return o}});var t=a(70885),n=a(47313),i=a(46417),s=["as","disabled"];function o(e){var r=e.tagName,a=e.disabled,t=e.href,n=e.target,i=e.rel,s=e.role,o=e.onClick,l=e.tabIndex,d=void 0===l?0:l,c=e.type;r||(r=null!=t||null!=n||null!=i?"a":"button");var u={tagName:r};if("button"===r)return[{type:c||"button",disabled:a},u];var v=function(e){(a||"a"===r&&function(e){return!e||"#"===e.trim()}(t))&&e.preventDefault(),a?e.stopPropagation():null==o||o(e)};return"a"===r&&(t||(t="#"),a&&(t=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:a?void 0:d,href:t,target:"a"===r?n:void 0,"aria-disabled":a||void 0,rel:"a"===r?i:void 0,onClick:v,onKeyDown:function(e){" "===e.key&&(e.preventDefault(),v(e))}},u]}var l=n.forwardRef((function(e,r){var a=e.as,n=e.disabled,l=function(e,r){if(null==e)return{};var a,t,n={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],r.indexOf(a)>=0||(n[a]=e[a]);return n}(e,s),d=o(Object.assign({tagName:a,disabled:n},l)),c=(0,t.Z)(d,2),u=c[0],v=c[1].tagName;return(0,i.jsx)(v,Object.assign({},l,u,{ref:r}))}));l.displayName="Button",r.ZP=l},93298:function(e,r,a){var t=a(1413),n=a(70885),i=a(45987),s=a(46123),o=a.n(s),l=a(47313),d=a(16184),c=a(68524),u=a(46417),v=["as","bsPrefix","variant","size","active","className"],f=l.forwardRef((function(e,r){var a=e.as,s=e.bsPrefix,l=e.variant,f=e.size,h=e.active,p=e.className,Z=(0,i.Z)(e,v),m=(0,c.vE)(s,"btn"),x=(0,d.FT)((0,t.Z)({tagName:a},Z)),b=(0,n.Z)(x,2),y=b[0],j=b[1].tagName;return(0,u.jsx)(j,(0,t.Z)((0,t.Z)((0,t.Z)({},y),Z),{},{ref:r,className:o()(p,m,h&&"active",l&&"".concat(m,"-").concat(l),f&&"".concat(m,"-").concat(f),Z.href&&Z.disabled&&"disabled")}))}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1},r.Z=f},65832:function(e,r,a){a.d(r,{Z:function(){return B}});var t=a(1413),n=a(45987),i=a(46123),s=a.n(i),o=a(47313),l=a(68524),d=a(28864),c=a(96205),u=a(46417),v=["bsPrefix","className","variant","as"],f=o.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,o=e.variant,d=e.as,c=void 0===d?"img":d,f=(0,n.Z)(e,v),h=(0,l.vE)(a,"card-img");return(0,u.jsx)(c,(0,t.Z)({ref:r,className:s()(o?"".concat(h,"-").concat(o):h,i)},f))}));f.displayName="CardImg";var h=f,p=a(15614),Z=["bsPrefix","className","as"],m=o.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,d=e.as,c=void 0===d?"div":d,v=(0,n.Z)(e,Z),f=(0,l.vE)(a,"card-header"),h=(0,o.useMemo)((function(){return{cardHeaderBsPrefix:f}}),[f]);return(0,u.jsx)(p.Z.Provider,{value:h,children:(0,u.jsx)(c,(0,t.Z)((0,t.Z)({ref:r},v),{},{className:s()(i,f)}))})}));m.displayName="CardHeader";var x=m,b=["bsPrefix","className","bg","text","border","body","children","as"],y=(0,c.Z)("h5"),j=(0,c.Z)("h6"),g=(0,d.Z)("card-body"),w=(0,d.Z)("card-title",{Component:y}),N=(0,d.Z)("card-subtitle",{Component:j}),C=(0,d.Z)("card-link",{Component:"a"}),k=(0,d.Z)("card-text",{Component:"p"}),P=(0,d.Z)("card-footer"),E=(0,d.Z)("card-img-overlay"),O=o.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,o=e.bg,d=e.text,c=e.border,v=e.body,f=e.children,h=e.as,p=void 0===h?"div":h,Z=(0,n.Z)(e,b),m=(0,l.vE)(a,"card");return(0,u.jsx)(p,(0,t.Z)((0,t.Z)({ref:r},Z),{},{className:s()(i,m,o&&"bg-".concat(o),d&&"text-".concat(d),c&&"border-".concat(c)),children:v?(0,u.jsx)(g,{children:f}):f}))}));O.displayName="Card",O.defaultProps={body:!1};var B=Object.assign(O,{Img:h,Title:w,Subtitle:N,Body:g,Link:C,Text:k,Header:x,Footer:P,ImgOverlay:E})},15614:function(e,r,a){var t=a(47313).createContext(null);t.displayName="CardHeaderContext",r.Z=t},63849:function(e,r,a){var t=a(1413),n=a(45987),i=a(46123),s=a.n(i),o=a(47313),l=a(68524),d=a(46417),c=["bsPrefix","className","as"],u=o.forwardRef((function(e,r){var a=e.bsPrefix,i=e.className,o=e.as,u=void 0===o?"div":o,v=(0,n.Z)(e,c),f=(0,l.vE)(a,"row"),h=(0,l.pi)(),p=(0,l.zG)(),Z="".concat(f,"-cols"),m=[];return h.forEach((function(e){var r,a=v[e];delete v[e],r=null!=a&&"object"===typeof a?a.cols:a;var t=e!==p?"-".concat(e):"";null!=r&&m.push("".concat(Z).concat(t,"-").concat(r))})),(0,d.jsx)(u,(0,t.Z)((0,t.Z)({ref:r},v),{},{className:s().apply(void 0,[i,f].concat(m))}))}));u.displayName="Row",r.Z=u},28864:function(e,r,a){a.d(r,{Z:function(){return f}});var t=a(1413),n=a(45987),i=a(46123),s=a.n(i),o=/-(.)/g;var l=a(47313),d=a(68524),c=a(46417),u=["className","bsPrefix","as"],v=function(e){return e[0].toUpperCase()+(r=e,r.replace(o,(function(e,r){return r.toUpperCase()}))).slice(1);var r};function f(e){var r=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=r.displayName,i=void 0===a?v(e):a,o=r.Component,f=r.defaultProps,h=l.forwardRef((function(r,a){var i=r.className,l=r.bsPrefix,v=r.as,f=void 0===v?o||"div":v,h=(0,n.Z)(r,u),p=(0,d.vE)(l,e);return(0,c.jsx)(f,(0,t.Z)({ref:a,className:s()(i,p)},h))}));return h.defaultProps=f,h.displayName=i,h}},96205:function(e,r,a){var t=a(1413),n=a(47313),i=a(46123),s=a.n(i),o=a(46417);r.Z=function(e){return n.forwardRef((function(r,a){return(0,o.jsx)("div",(0,t.Z)((0,t.Z)({},r),{},{ref:a,className:s()(r.className,e)}))}))}},21024:function(e){var r=function(){};e.exports=r},11752:function(e,r,a){a.d(r,{Z:function(){return i}});var t=a(61120);function n(e,r){for(;!Object.prototype.hasOwnProperty.call(e,r)&&null!==(e=(0,t.Z)(e)););return e}function i(){return i="undefined"!==typeof Reflect&&Reflect.get?Reflect.get.bind():function(e,r,a){var t=n(e,r);if(t){var i=Object.getOwnPropertyDescriptor(t,r);return i.get?i.get.call(arguments.length<3?e:a):i.value}},i.apply(this,arguments)}}}]);