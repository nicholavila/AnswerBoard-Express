"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[7724],{47724:function(e,t,s){s.r(t);var n=s(4942),i=s(74165),a=s(1413),l=s(15861),o=s(70885),r=s(47313),u=s(65832),c=s(21366),d=s(93298),m=s(7410),p=s(3463),h=s(24751),b=s(3979),g=s(34491),j=s(58467),Z=s(7155),f=s(76666),v=s.n(f),x=s(46417),_=document.createElement("script");_.type="text/javascript",_.src="https://www.wiris.net/demo/plugins/app/WIRISplugins.js?viewer=image",document.head.appendChild(_),window.$=v(),window.tinymce=s(86821),s(37741);t.default=function(){var e=(0,r.useRef)(null),t=(0,j.s0)(),s=(0,r.useState)([]),f=(0,o.Z)(s,2),v=f[0],_=f[1],y=(0,r.useState)([]),C=(0,o.Z)(y,2),k=C[0],w=C[1],S=(0,r.useState)([]),T=(0,o.Z)(S,2),N=T[0],I=T[1],q=(0,r.useState)([]),B=(0,o.Z)(q,2),F=B[0],M=B[1],P=(0,r.useState)({no:"",year:"",subject:"",module:"",topic:"",name:"",content:"",permission:2}),G=(0,o.Z)(P,2),L=G[0],E=G[1],O=p.Ry({no:p.Rx().typeError("Must be a number.").required("Please enter a no.").test("","Must be between 1 and 99.",(function(e){return e||(e=0),!(e<1||e>99)})),year:p.Z_("Choose a year.").required("Year is required."),subject:p.Z_("Choose a subject.").required("Subject is required"),module:p.Z_("Choose a module.").required("Module is required."),topic:p.Z_("Choose a topic.").required("Topic is required."),name:p.Z_("Enter a subtopic name.").test("len","Must be less than 64 characters.",(function(e){return e||(e=""),e.length<64})).required("Please enter a name.")});(0,r.useEffect)((function(){(0,l.Z)((0,i.Z)().mark((function e(){var t,s,n;return(0,i.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,h.Z.get("/admin/years/get-all-populate");case 2:t=e.sent,s=t.data,n=s.length>0&&s[0].subjects.length>0&&s[0].subjects[0].modules.length>0&&s[0].subjects[0].modules[0].topics.length>0&&s[0].subjects[0].modules[0].topics[0].subTopics.length>0?s[0].subjects[0].modules[0].topics[0].subTopics[0].no:0,_(s),w(s.length?s[0].subjects:[]),I(s.length&&s[0].subjects.length?s[0].subjects[0].modules:[]),M(s.length&&s[0].subjects.length&&s[0].subjects[0].modules.length?s[0].subjects[0].modules[0].topics:[]),E((0,a.Z)((0,a.Z)({},L),{},{year:s.length?s[0]._id:"",subject:s.length&&s[0].subjects.length?s[0].subjects[0]._id:"",module:s.length&&s[0].subjects.length&&s[0].subjects[0].modules.length?s[0].subjects[0].modules[0]._id:"",topic:s.length&&s[0].subjects.length&&s[0].subjects[0].modules.length&&s[0].subjects[0].modules[0].topics.length?s[0].subjects[0].modules[0].topics[0]._id:"",no:n+1}));case 10:case"end":return e.stop()}}),e)})))()}),[]);var R=function(e){var t,s=v.findIndex((function(t){return t._id===e.target.value}));t=v.length>s&&v[s].subjects.length>0&&v[s].subjects[0].modules.length>0&&v[s].subjects[0].modules[0].topics.length>0&&v[s].subjects[0].modules[0].topics[0].subTopics.length>0?v[s].subjects[0].modules[0].topics[0].subTopics[0].no:0,w(v[s].subjects),I(v[s].subjects.length?v[s].subjects[0].modules:[]),M(v[s].subjects.length&&v[s].subjects[0].modules.length?v[s].subjects[0].modules[0].topics:[]),E((0,a.Z)((0,a.Z)({},L),{},{year:e.target.value,subject:v[s].subjects.length?v[s].subjects[0]._id:"",module:v[s].subjects.length&&v[s].subjects[0].modules.length?v[s].subjects[0].modules[0]._id:"",topic:v[s].subjects.length&&v[s].subjects[0].modules[0].topics.length?v[s].subjects[0].modules[0].topics[0]._id:"",no:t+1}))},A=function(e){var t,s=k.findIndex((function(t){return t._id===e.target.value}));t=k.length>s&&k[s].modules.length>0&&k[s].modules[0].topics.length>0&&k[s].modules[0].topics[0].subTopics.length>0?k[s].modules[0].topics[0].subTopics[0].no:0,I(k[s].modules),M(k[s].modules.length?k[s].modules[0].topics:[]),E((0,a.Z)((0,a.Z)({},L),{},{subject:e.target.value,module:k[s].modules.length?k[s].modules[0]._id:"",topic:k[s].modules.length&&k[s].modules[0].topics.length?k[s].modules[0].topics[0]._id:"",no:t+1}))},H=function(e){var t,s=N.findIndex((function(t){return t._id===e.target.value}));t=N.length>s&&N[s].topics.length>0&&N[s].topics[0].subTopics.length>0?N[s].topics[0].subTopics[0].no:0,M(N[s].topics),E((0,a.Z)((0,a.Z)({},L),{},{module:e.target.value,topic:N[s].topics.length?N[s].topics[0]._id:"",no:t+1}))},J=function(e){var t,s=F.findIndex((function(t){return t._id===e.target.value}));t=F.length>s&&F[s].subTopics.length>0?F[s].subTopics[0].no:0,E((0,a.Z)((0,a.Z)({},L),{},{topic:e.target.value,no:t+1}))},z=function(e){E((0,a.Z)((0,a.Z)({},L),{},{permission:Number(e.target.value)}))},D=function(){var s=(0,l.Z)((0,i.Z)().mark((function s(n,a){var l,o,r;return(0,i.Z)().wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return l=a.resetForm,n.content=e.current.getContent(),s.next=4,h.Z.post("admin/sub-topics",n);case 4:o=s.sent,(r=o.data).success?(g.Am.success(r.msg),l(),t("/admin/subtopics")):g.Am.error(r.msg);case 7:case"end":return s.stop()}}),s)})));return function(e,t){return s.apply(this,arguments)}}();return(0,x.jsxs)(u.Z,{children:[(0,x.jsx)(u.Z.Header,{style:{background:"#3c4b64"},bsPrefix:"card-header py-3",children:(0,x.jsx)(u.Z.Title,{bsPrefix:"card-title mb-0 text-light",as:"h1",children:"New subtopic"})}),(0,x.jsx)(u.Z.Body,{children:(0,x.jsx)(m.J9,{validationSchema:O,validateOnChange:!1,validateOnBlur:!1,onSubmit:D,initialValues:L,enableReinitialize:!0,children:function(t){var s,i=t.handleSubmit,a=t.handleChange,l=t.handleBlur,o=t.values,r=t.touched,u=t.errors;return(0,x.jsxs)(c.Z,{noValidate:!0,onSubmit:i,children:[(0,x.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,x.jsx)(c.Z.Label,{children:"Year:"}),(0,x.jsx)(c.Z.Select,{name:"year",value:L.year,onChange:R,onBlur:l,touched:r,isInvalid:!!u.year,children:v.map((function(e,t){return(0,x.jsx)("option",{value:e._id,children:e.name},t)}))}),(0,x.jsx)(c.Z.Control.Feedback,{type:"invalid",children:u.year})]}),(0,x.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,x.jsx)(c.Z.Label,{children:"Subject:"}),(0,x.jsx)(c.Z.Select,{name:"subject",value:L.subject,onChange:A,onBlur:l,touched:r,isInvalid:!!u.subject,children:k.map((function(e,t){return(0,x.jsx)("option",{value:e._id,children:e.name},t)}))}),(0,x.jsx)(c.Z.Control.Feedback,{type:"invalid",children:u.subject})]}),(0,x.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,x.jsx)(c.Z.Label,{children:"Module:"}),(0,x.jsx)(c.Z.Select,{name:"module",value:o.module,onChange:H,onBlur:l,touched:r,isInvalid:!!u.module,children:N.map((function(e,t){return(0,x.jsx)("option",{value:e._id,children:e.name},t)}))}),(0,x.jsx)(c.Z.Control.Feedback,{type:"invalid",children:u.module})]}),(0,x.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,x.jsx)(c.Z.Label,{children:"Topic:"}),(0,x.jsx)(c.Z.Select,{name:"topic",value:L.topic,onChange:J,onBlur:l,touched:r,isInvalid:!!u.topic,children:F.map((function(e,t){return(0,x.jsx)("option",{value:e._id,children:e.name},t)}))}),(0,x.jsx)(c.Z.Control.Feedback,{type:"invalid",children:u.topic})]}),(0,x.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,x.jsx)(c.Z.Label,{children:"Order:"}),(0,x.jsx)(c.Z.Control,{type:"text",placeholder:"Please enter a subtopic order.",name:"no",onChange:a,onBlur:l,value:o.no,touched:r,isInvalid:!!u.no}),(0,x.jsx)(c.Z.Control.Feedback,{type:"invalid",children:u.no})]}),(0,x.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,x.jsx)(c.Z.Label,{children:"Name:"}),(0,x.jsx)(c.Z.Control,{type:"text",placeholder:"Please enter a subtopic name.",name:"name",onChange:a,onBlur:l,value:o.name,touched:r,isInvalid:!!u.name}),(0,x.jsx)(c.Z.Control.Feedback,{type:"invalid",children:u.name})]}),(0,x.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,x.jsx)(c.Z.Check,{inline:!0,type:"radio",name:"permission",label:"Open",id:"permission-1",value:"0",checked:0===o.permission,onChange:z,onBlur:l}),(0,x.jsx)(c.Z.Check,{inline:!0,type:"radio",name:"permission",label:"Free",id:"permission-2",value:"1",checked:1===o.permission,onChange:z,onBlur:l}),(0,x.jsx)(c.Z.Check,{inline:!0,type:"radio",name:"permission",label:"Premium",id:"permission-3",value:"2",checked:2===o.permission,onChange:z,onBlur:l})]}),(0,x.jsxs)(c.Z.Group,{className:"mb-3",children:[(0,x.jsx)(c.Z.Label,{children:"Description:"}),(0,x.jsx)(Z.M,{tinymceScriptSrc:"/tinymce/tinymce.min.js",onInit:function(t,s){return e.current=s},init:(s={height:450,menubar:!0,selector:"textarea",block_unsupported_drop:!1,automatic_uploads:!0,file_picker_callback:function(e,t,s){"file"==s.filetype&&e("mypage.html",{text:"My text"}),"image"==s.filetype&&e("myimage.jpg",{alt:"My alt text"}),"media"==s.filetype&&e("movie.mp4",{source2:"alt.ogg",poster:"image.jpg"})},plugins:["advlist autolink lists link image charmap print preview anchor","searchreplace visualblocks code fullscreen","insertdatetime media table paste code help wordcount","grid","tiny_mce_wiris","code","table","link","media","codesample"],toolbar:"undo redo | formatselect | bold italic backcolor | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | removeformat | grid_insert | tiny_mce_wiris_formulaEditor tiny_mce_wiris_formulaEditorChemistry | help | image",images_upload_handler:b.Z,images_upload_credentials:!0,paste_data_images:!0,paste_as_text:!0},(0,n.Z)(s,"paste_data_images",!0),(0,n.Z)(s,"paste_enable_default_filters",!1),(0,n.Z)(s,"paste_postprocess",(function(e,t){t.node.querySelectorAll("img")})),(0,n.Z)(s,"draggable_modal",!0),(0,n.Z)(s,"content_style","body { font-family:Helvetica,Arial,sans-serif; font-size:14px }"),s),name:"description"})]}),(0,x.jsxs)(d.Z,{type:"submit",variant:"primary",className:"float-end",children:[(0,x.jsx)("i",{className:"fa fa-save"})," Save"]})]})}})})]})}},3979:function(e,t,s){var n=s(74165),i=s(15861),a=function(){var e=(0,i.Z)((0,n.Z)().mark((function e(t,s,i){var a,l;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:(a=new XMLHttpRequest).withCredentials=!1,a.open("POST","https://answersheet.au/api/v1/admin/questions/image"),a.onload=function(){var e;200===a.status?(e=JSON.parse(a.responseText))&&"string"===typeof e.location?s(e.location):i("Invalid JSON: "+a.responseText):i("HTTP Error: "+a.status)},(l=new FormData).append("file",t.blob(),t.filename()),a.send(l);case 7:case"end":return e.stop()}}),e)})));return function(t,s,n){return e.apply(this,arguments)}}();t.Z=a}}]);