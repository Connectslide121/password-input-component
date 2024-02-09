(()=>{"use strict";var e={n:t=>{var a=t&&t.__esModule?()=>t.default:()=>t;return e.d(a,{a}),a},d:(t,a)=>{for(var l in a)e.o(a,l)&&!e.o(t,l)&&Object.defineProperty(t,l,{enumerable:!0,get:a[l]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{default:()=>n});const a=require("react");var l=e.n(a);function n(e){const[t,n]=(0,a.useState)(!1),[s,r]=(0,a.useState)(""),[u,o]=(0,a.useState)("password"),[i,c]=(0,a.useState)("password"),[p,d]=(0,a.useState)(""),[m,f]=(0,a.useState)(!0),[h,E]=(0,a.useState)(6),[g,S]=(0,a.useState)(!0),[v,y]=(0,a.useState)(!0),[w,b]=(0,a.useState)(!0),[C,P]=(0,a.useState)(!0),[x,q]=(0,a.useState)(!1),[I,N]=(0,a.useState)(!1),[O,_]=(0,a.useState)(!1),[j,z]=(0,a.useState)(!1),[A,L]=(0,a.useState)(!1);return(0,a.useEffect)((()=>{void 0!==e.inputName?o(e.inputName):o("password")}),[e.inputName]),(0,a.useEffect)((()=>{void 0!==e.inputId?c(e.inputId):c("password")}),[e.inputId]),(0,a.useEffect)((()=>{void 0!==e.inputPlaceholder?d(e.inputPlaceholder):d("")}),[e.inputPlaceholder]),(0,a.useEffect)((()=>{void 0!==e.isRequired?f(e.isRequired):f(!0)}),[e.isRequired]),(0,a.useEffect)((()=>{e.minLength?E(e.minLength):E(6)}),[e.minLength]),(0,a.useEffect)((()=>{void 0!==e.specialCharacter?S(e.specialCharacter):S(!0)}),[e.specialCharacter]),(0,a.useEffect)((()=>{void 0!==e.lowercase?y(e.lowercase):y(!0)}),[e.lowercase]),(0,a.useEffect)((()=>{void 0!==e.uppercase?b(e.uppercase):b(!0)}),[e.uppercase]),(0,a.useEffect)((()=>{void 0!==e.digit?P(e.digit):P(!0)}),[e.digit]),(0,a.useEffect)((()=>{s.length>=h?q(!0):q(!1),s.match(/[a-z]/)?_(!0):_(!1),s.match(/[A-Z]/)?z(!0):z(!1),s.match(/[0-9]/)?L(!0):L(!1),s.match(/[^a-zA-Z0-9]/)?N(!0):N(!1)}),[s,h]),l().createElement("div",{style:{position:"relative",display:"inline-block"}},l().createElement("input",{className:"password-input",type:"password",name:u,id:i,onChange:t=>(t=>{r(t.target.value),e.onInputChange&&e.onInputChange(t)})(t),onFocus:()=>n(!0),onBlur:()=>n(!1),placeholder:p,required:m}),t&&l().createElement("div",{style:{position:"absolute",top:"0",right:"-310px",display:"flex",flexDirection:"column",gap:"6px",padding:"8px",backgroundColor:"rgba(0,0,0,0.8)",color:"white"},className:"password-tooltip"},l().createElement("p",null,l().createElement("span",null,x?"✅":"❌")," at least"," ",h," characters"),g&&l().createElement("p",null,l().createElement("span",null,I?"✅":"❌"),' at least one special character (&*_+:"...)'),v&&l().createElement("p",null,l().createElement("span",null,O?"✅":"❌")," at least one lowercase ('a'-'z')"),w&&l().createElement("p",null,l().createElement("span",null,j?"✅":"❌")," at least one uppercase ('A'-'Z')"),C&&l().createElement("p",null,l().createElement("span",null,A?"✅":"❌")," at least one digit ('0'-'9')")))}module.exports=t})();