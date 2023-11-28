"use strict";(self.webpackChunkpets_project_front=self.webpackChunkpets_project_front||[]).push([[116],{4078:(e,n,t)=>{t.d(n,{r:()=>l});var r,o=t(2791);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){let{title:t,titleId:a,...l}=e;return o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:12,height:20,fill:"none",ref:n,"aria-labelledby":a},l),t?o.createElement("title",{id:a},t):null,r||(r=o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M6 11A5 5 0 1 0 6 1a5 5 0 0 0 0 10Zm0 0v8m-3-3h6"})))}const l=o.forwardRef(a);t.p},8465:(e,n,t)=>{t.d(n,{r:()=>l});var r,o=t(2791);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},i.apply(this,arguments)}function a(e,n){let{title:t,titleId:a,...l}=e;return o.createElement("svg",i({xmlns:"http://www.w3.org/2000/svg",width:12,height:20,fill:"none",ref:n,"aria-labelledby":a},l),t?o.createElement("title",{id:a},t):null,r||(r=o.createElement("path",{strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M6 9a5 5 0 1 0 0 10A5 5 0 0 0 6 9Zm0 0V1m0 0 4 4M6 1 2 5"})))}const l=o.forwardRef(a);t.p},7116:(e,n,t)=>{t.r(n),t.d(n,{default:()=>ln});var r=t(2791),o=t(5705),i=t(7689),a=t(8007);const l=a.Ry().shape({title:a.Z_().required("Title is required").min(8,"Name must be at least 8 characters").max(60,"Name must not exceed 60 characters"),category:a.Z_().required("Category is required").oneOf(["my pet","sell","lost-found","for-free"],"Invalid category"),name:a.Z_().required("Name is required").min(2,"Name must be at least 2 characters").max(16,"Name must not exceed 16 characters"),birthday:a.Z_().required("Date is required").matches(/^(\d{2})\.(\d{2})\.(\d{4})$/,"Invalid date format. Use DD.MM.YYYY"),type:a.Z_().required("Breed is required").min(2,"Breed must be at least 2 characters").max(30,"Breed must not exceed 30 characters"),petPhoto:a.nK().required("File is required").test("fileSize","File size must not exceed 3MB",(e=>e&&e.size<=3145728)),sex:a.Z_().required("Sex is required").oneOf(["male","female"],"Invalid sex"),location:a.Z_().required("Location is required").matches(/^[A-Z][a-zA-Z]*(-[a-zA-Z]+)?$/i,"Invalid location format"),price:a.Rx().positive("Price must be greater than 0").required("Price is required"),comments:a.Z_().test("comments","Comments must be between 8 and 120 characters",(e=>!e||e.length>=8&&e.length<=120))}),s=async(e,n,t)=>{try{await l.validateAt(e,n),t((n=>({...n,[e]:""})))}catch(r){t((n=>({...n,[e]:r.message})))}};var c;function d(){return d=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},d.apply(this,arguments)}function p(e,n){let{title:t,titleId:o,...i}=e;return r.createElement("svg",d({width:33,height:32,viewBox:"0 0 33 32",fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,c||(c=r.createElement("path",{d:"M16.6157 30.7699V16.0007M16.6157 16.0007V1.23145M16.6157 16.0007H31.6157M16.6157 16.0007H1.61572",stroke:"#54ADFF",strokeWidth:2,strokeLinecap:"round"})))}const m=r.forwardRef(p);t.p;var h,u,x=t(8465),g=t(4078);function f(){return f=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},f.apply(this,arguments)}function y(e,n){let{title:t,titleId:o,...i}=e;return r.createElement("svg",f({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,h||(h=r.createElement("g",{clipPath:"url(#a)"},r.createElement("path",{d:"M15.36 14.36a5.82 5.82 0 0 0-8.92-4.16l-4.07 2.58A3.67 3.67 0 0 0 .78 16.9a3.67 3.67 0 0 0 3.49 2.7h.05c2 .07 3.91.96 5.24 2.47a3.68 3.68 0 0 0 4.31.93A3.68 3.68 0 0 0 16 19.14l-.64-4.78Zm-2.07 7.36c-.93.42-2 .2-2.67-.57A8.66 8.66 0 0 0 4.3 18.2h-.04c-1-.04-1.85-.7-2.12-1.68s.12-2 .98-2.55L7.2 11.4a4.42 4.42 0 0 1 6.77 3.16l.64 4.78c.14 1-.4 1.97-1.32 2.4ZM4.72 9.4c.83.05 1.63-.26 2.24-.9.6-.6.95-1.42 1.01-2.32.07-.89-.18-1.75-.68-2.43a2.84 2.84 0 0 0-2.1-1.2c-1.66-.1-3.12 1.33-3.25 3.22-.1 1.5.67 2.84 1.83 3.38.3.14.61.22.95.25ZM3.35 5.87c.07-1.12.86-1.97 1.75-1.9.16 0 .31.04.46.11.23.1.43.28.6.5.3.42.45.95.41 1.5a2.26 2.26 0 0 1-.61 1.44c-.33.33-.73.5-1.14.47-.89-.06-1.55-1.01-1.47-2.12Z"}),r.createElement("path",{d:"M10.64 8.65c1.76.82 3.96-.15 4.9-2.15.93-2.01.26-4.31-1.5-5.13-1.77-.83-3.96.14-4.9 2.15-.93 2-.26 4.3 1.5 5.13Zm2.8-6c1.06.48 1.43 1.95.82 3.25-.6 1.3-1.97 1.97-3.02 1.47-1.06-.5-1.43-1.95-.82-3.26.6-1.3 1.96-1.96 3.02-1.47ZM15.74 12.11c.23.22.49.4.76.52 1.29.6 2.98.25 4.13-.97a3.94 3.94 0 0 0 1.1-2.48c.04-.95-.29-1.8-.93-2.41a3.04 3.04 0 0 0-2.46-.79c-.9.1-1.76.54-2.42 1.24-1.4 1.47-1.47 3.67-.18 4.9Zm1.2-3.93c.43-.45.98-.74 1.55-.8.53-.06 1 .09 1.34.4.34.33.52.8.49 1.32a2.53 2.53 0 0 1-.72 1.6c-.86.9-2.16 1.09-2.89.4-.73-.7-.63-2 .23-2.92ZM22.67 14.83c-.8-1.47-2.8-1.93-4.46-1.03-1.66.9-2.36 2.83-1.57 4.3.3.53.74.93 1.28 1.18.93.43 2.12.41 3.18-.16 1.66-.9 2.36-2.83 1.57-4.3Zm-2.24 3.05c-.98.53-2.12.33-2.55-.46-.42-.78.03-1.85 1-2.38a2.16 2.16 0 0 1 1.91-.13c.28.13.5.33.64.59.43.78-.02 1.85-1 2.38Z"}))),u||(u=r.createElement("defs",null,r.createElement("clipPath",{id:"a"},r.createElement("path",{d:"M0 0h24v24H0z"})))))}const b=r.forwardRef(y);t.p;var j,v,w,Z,k,P=t(168),L=t(6487);const F=L.ZP.div(j||(j=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),B=L.ZP.div(v||(v=(0,P.Z)(["\nmargin-bottom: 30px;\n\n@media screen and (min-width: 768px) {\n    margin-bottom: 40px;\n  }\n"]))),C=L.ZP.div(w||(w=(0,P.Z)(["\n  position: relative;\n  margin-bottom: 20px;\n  &:last-child {\n    margin-bottom: 0;\n  }\n  @media screen and (min-width: 768px) {\n    margin-bottom: 24px;\n  }\n"]))),D=L.ZP.label(Z||(Z=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.36;\n\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    gap: 8px;\n    font-size: 20px;\n    line-height: 1.3;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.black})),S=(0,L.ZP)(o.gN)(k||(k=(0,P.Z)(["\n  padding: 10px 16px;\n\n  font-size: 14px;\n  line-height: 1.5;\n\n  border: 1px solid ",";\n  border-radius: 40px;\n  outline-color: ",";\n  transition: outline 300ms ",";\n\n  &.invalid {\n    border-color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    min-width: 394px;\n    padding: 12px 16px;\n  }\n\n  &[type='date']::-webkit-calendar-picker-indicator {\n    cursor: pointer;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.blueLink}),(e=>{let{theme:n}=e;return n.colors.blueLink}),(e=>{let{theme:n}=e;return n.transitionRegular}),(e=>{let{theme:n}=e;return n.colors.red}));var E;const z=(0,L.iv)(E||(E=(0,P.Z)(["\n  position: absolute;\n  width: 1px;\n  height: 1px;\n  margin: -1px;\n  border: 0;\n  padding: 0;\n  white-space: nowrap;\n  clip-path: inset(100%);\n  clip: rect(0 0 0 0);\n  overflow: hidden;\n"])));var M,O,A,q;const N=L.ZP.div(M||(M=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),R=L.ZP.div(O||(O=(0,P.Z)(["\n display: flex;\n  flex-direction: column;\n  \n  margin-bottom: 90px;\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 137px;\n  }\n"]))),I=(0,L.ZP)(o.gN)(A||(A=(0,P.Z)(["\n  ","\n"])),z),_=L.ZP.label(q||(q=(0,P.Z)(["\n  padding: 8px 16px;\n  margin-bottom: 12px;\n\n  width: fit-content;\n\n  font-weight: 500;\n  font-size: 14px;\n  line-height: 1.36;\n  letter-spacing: 0.04em;\n\n  color: ",";\n  background-color: ",";\n  border-radius: 40px;\n  cursor: pointer;\n\n  transition: color 300ms ",",\n    background-color 300ms ",";\n\n  &:last-child {\n    margin-bottom: 0;\n  }\n\n  &:hover,\n  &:focus,\n  ",":checked + & {\n    background-color: ",";\n    color: ",";\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.blueLink}),(e=>{let{theme:n}=e;return n.colors.lightBlue}),(e=>{let{theme:n}=e;return n.transitionRegular}),(e=>{let{theme:n}=e;return n.transitionRegular}),I,(e=>{let{theme:n}=e;return n.colors.blueLink}),(e=>{let{theme:n}=e;return n.colors.white}));var H,T,Y,W,U,V,X,$,J,K,Q,G,ee;const ne=L.ZP.div(H||(H=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  margin-bottom: 24px;\n\n  @media screen and (min-width: 768px) {\n    ",";\n      margin-bottom: 60px;\n  }\n"])),(e=>{let{category:n}=e;return"my-pet"!==n?"flex-direction: row; column-gap:44px":""})),te=L.ZP.div(T||(T=(0,P.Z)(["\n  display: flex;\n  ",";\n  margin-bottom: 16px;\n\n  @media screen and (min-width: 768px) {\n    ",";\n    ",";\n    margin-bottom: 0px;\n    align-items: flex-start;\n  }\n"])),(e=>{let{category:n}=e;return"my-pet"!==n?"flex-direction: column;":""}),(e=>{let{category:n}=e;return"my-pet"!==n?"row-gap: 38px;":""}),(e=>{let{category:n}=e;return"sell"!==n?"row-gap: 22px;":""})),re=L.ZP.div(Y||(Y=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n"]))),oe=(0,L.ZP)(o.gN)(W||(W=(0,P.Z)(["\n  ","\n"])),z),ie=(0,L.ZP)(D)(U||(U=(0,P.Z)(["\n  @media screen and (min-width: 768px) {\n    height: 100%;\n  }\n"]))),ae=(0,L.ZP)(S)(V||(V=(0,P.Z)(["\n  resize: none;\n  /* height: 92px; */\n \n  flex-grow: 1;\n\n  border-radius: 20px;\n"]))),le=L.ZP.div(X||(X=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  column-gap: 16px;\n\n  @media screen and (min-width: 768px) {\n  }\n\n  & p {\n    font-weight: 500;\n    font-size: 14px;\n    line-height: 1.36;\n\n    color: ",";\n\n    @media screen and (min-width: 768px) {\n      font-size: 20px;\n      line-height: 1.3;\n      margin-bottom: 8px;\n    }\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.black})),se=L.ZP.div($||($=(0,P.Z)(["\n  display: inherit;\n  margin-bottom: 10px;\n"]))),ce=L.ZP.label(J||(J=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  padding: 8px 15px;\n  stroke: ",";\n\n  color: #888888;\n\n  cursor: pointer;\n  transition: color 300ms ",";\n\n  &:hover {\n    color: ",";\n  }\n\n  ",":checked + & {\n    color: ",";\n    background-color: ",";\n    border-radius: 20px;\n    stroke: white;\n    padding: 8px 15px;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.red}),(e=>{let{theme:n}=e;return n.transitionRegular}),(e=>{let{theme:n}=e;return n.colors.blueLink}),I,(e=>{let{theme:n}=e;return n.colors.white}),(e=>{let{theme:n}=e;return n.colors.blueLink})),de=L.ZP.label(K||(K=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n\n  font-size: 16px;\n  font-weight: 400;\n  line-height: 1.5;\n  padding: 8px 15px;\n  \n  stroke: ",";\n\n  color: #888888;\n\n  cursor: pointer;\n  transition: color 300ms ",";\n\n  &:hover {\n    color: ",";\n  }\n\n  ",":checked + & {\n    color: ",";\n    background-color: ",";\n    border-radius: 20px;\n    stroke: white;\n    padding: 8px 15px;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.blueLink}),(e=>{let{theme:n}=e;return n.transitionRegular}),(e=>{let{theme:n}=e;return n.colors.blueLink}),I,(e=>{let{theme:n}=e;return n.colors.white}),(e=>{let{theme:n}=e;return n.colors.blueLink})),pe=L.ZP.div(Q||(Q=(0,P.Z)(["\n  margin-left: 19px;\n"]))),me=(0,L.ZP)(D)(G||(G=(0,P.Z)(["\n  display: flex;\n  flex-direction: row;\n  align-items: center;\n  column-gap: 55px;\n\n  @media screen and (min-width: 768px) {\n    ",";\n  }\n"])),(e=>{let{category:n}=e;return"my-pet"!==n?"flex-direction: column":""})),he=L.ZP.div(ee||(ee=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 112px;\n  height: 112px;\n\n  background-color: ",";\n  border-radius: 20px;\n  color: ",";\n\n  cursor: pointer;\n  overflow: hidden;\n  object-position: center;\n  object-fit: cover;\n\n  & svg {\n    stroke: currentColor;\n  }\n\n  & img {\n    width: 100%;\n    height: 100%;\n    object-fit: cover;\n  }\n\n  @media screen and (min-width: 768px) {\n    min-width: 182px;\n    height: 182px;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.lightBlue}),(e=>{let{theme:n}=e;return n.colors.blueLink}));var ue,xe,ge,fe,ye,be,je,ve;const we=L.ZP.div(ue||(ue=(0,P.Z)(["\n  display: flex;\n  justify-content: center;\n  padding-top: 20px;\n  height: 100vh;\n\n  @media screen and (min-width: 768px) {\n    padding-top: 60px;\n  }\n\n  @media screen and (min-width: 1280px) {\n    padding-top: 40px;\n  }\n"]))),Ze=L.ZP.div(xe||(xe=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  padding: 20px 8px 16px;\n  width: 280px;\n  height: fit-content;\n  min-height: 496px;\n  background: ",";\n  box-shadow: ",";\n  border-radius: 40px;\n\n  @media screen and (min-width: 768px) {\n    margin: 0 auto;\n    padding: 20px 32px;\n    width: fit-content;\n    min-width: 458px;\n\n    & h1 {\n      text-align: ",";\n    }\n\n    & textarea {\n      height: ",";\n    }\n  }\n  @media screen and (min-width: 1280px) {\n    padding: ",";\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.white}),(e=>{let{theme:n}=e;return n.shadows.shadowDefault}),(e=>{let{step:n,category:t}=e;return n<"2"?" left":"my-pet"===t?"left":"center"}),(e=>{let{category:n}=e;return"lost-found"===n||"for-free"===n?"182px":"92px"}),(e=>{let{step:n,category:t}=e;return 2===n&&"my-pet"!==t?"20px 74px":"20px 32px"})),ke=(0,L.ZP)(o.l0)(ge||(ge=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  flex-grow: 1;\n"]))),Pe=L.ZP.h1(fe||(fe=(0,P.Z)(["\n  padding-left: 12px;\n  margin-bottom: 24px;\n  font-size: 20px;\n  line-height: 1.35;\n  font-weight: 500;\n\n  color: ",";\n\n  @media screen and (min-width: 768px) {\n    font-size: 28px;\n\n    padding-left: 0;\n    }\n"])),(e=>{let{theme:n}=e;return n.colors.black})),Le=L.ZP.ul(ye||(ye=(0,P.Z)(["\n  display: flex;\n  column-gap: 12px;\n  margin-bottom: 20px;\n\n  @media screen and (min-width: 768px) {\n    width: 392px;\n    margin: 0 auto;\n    margin-bottom: 20px;\n    }\n"]))),Fe=L.ZP.li(be||(be=(0,P.Z)(["\n  position: relative;\n  padding-bottom: 12px;\n  flex-basis: calc((100% - 24px) / 3);\n\n  &::after {\n    content: '';\n    position: absolute;\n    bottom: 0;\n    left: 0;\n\n    width: 100%;\n    height: 8px;\n\n    background-color: ",";\n    border-radius: 8px;\n  }\n\n  &.current::after {\n    background-color: ",";\n  }\n\n  &.completed::after {\n    background-color: ",";\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.lightBlue}),(e=>{let{theme:n}=e;return n.colors.blueLink}),(e=>{let{theme:n}=e;return n.colors.green})),Be=L.ZP.p(je||(je=(0,P.Z)(["\n  font-weight: 500;\n  font-size: 10px;\n  line-height: 1.4;\n  text-align: center;\n\n  margin-bottom: 12px;\n\n  color: ",";\n\n  ",".current & {\n    color: ",";\n  }\n\n  ",".completed & {\n    color: ",";\n  }\n\n  @media screen and (min-width: 768px) {\n    font-size: 16px;\n    line-height: 1.62;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.grey}),Fe,(e=>{let{theme:n}=e;return n.colors.blueLink}),Fe,(e=>{let{theme:n}=e;return n.colors.green})),Ce=L.ZP.div(ve||(ve=(0,P.Z)(["\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n\n  @media screen and (min-width: 768px) {\n    flex-direction: row-reverse;\n    justify-content: ",";\n      align-items: stretch;\n      justify-content: space-evenly;\n  }\n"])),(e=>{let{category:n,isMoreInfo:t}=e;return"your-pet"!==n?t:"end"}));var De,Se,Ee,ze,Me,Oe,Ae=t(1087);const qe=(0,L.F4)(De||(De=(0,P.Z)(["\n0% {\n  transform: translateX(0);\n}\n15% {\n  transform: translateX(15%);\n}\n60% {\n  transform: translateX(-30%);\n}\n100% {\n  transform: translateX(0);\n}\n"]))),Ne=(0,L.iv)(Se||(Se=(0,P.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n\n  padding: "," 0;\n\n  max-height: 40px;\n\n  font-family: 'Manrope';\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.38;\n\n  color: ",";\n  background-color: transparent;\n  border: none;\n\n  transition: color 300ms ",";\n\n  & svg {\n    stroke: currentColor;\n  }\n\n  &:hover svg,\n  &:focus svg {\n    animation: "," 600ms linear infinite;\n  }\n"])),(e=>{let{theme:n}=e;return"4px"}),(e=>{let{theme:n}=e;return n.colors.blueLink}),(e=>{let{theme:n}=e;return n.transitionRegular}),qe),Re=(0,L.iv)(Ee||(Ee=(0,P.Z)(["\n  z-index: 10;\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n\n  padding: 9px 0;\n  gap: 12px;\n\n  min-width: 248px;\n\n  font-family: 'Manrope';\n  font-size: 16px;\n  font-weight: 700;\n  line-height: 1.38;\n\n  color: ",";\n  background-color: #54ADFF;\n  border: none;\n  border-radius: 40px;\n  transition: color ",",\n    background-color ",";\n  overflow: hidden;\n\n  margin-bottom: 20px;\n\n  &::before {\n    content: '';\n    z-index: -1;\n    position: absolute;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100%;\n    background-image: linear-gradient(290.46deg, rgb(65, 158, 241) 0%, rgb(155, 208, 255) 107.89%);\n    opacity: 0;\n    transition: opacity ",";\n  }\n\n  &:hover::before,\n  &:focus::before {\n    opacity: 1;\n  }\n\n  & svg {\n    fill: currentColor;\n  }\n\n  &:disabled {\n    color: ",";\n    background-color: ",";\n    border-color: ",";\n    pointer-events: none;\n  }\n\n  @media screen and (min-width: 768px) {\n    margin-bottom: 0px;\n  }\n"])),(e=>{let{theme:n}=e;return n.colors.white}),(e=>{let{theme:n}=e;return n.transitions.transitionRegular}),(e=>{let{theme:n}=e;return n.transitions.transitionRegular}),(e=>{let{theme:n}=e;return n.transitions.transitionRegular}),(e=>{let{theme:n}=e;return n.colors.grey}),(e=>{let{theme:n}=e;return n.colors.lightBlue}),(e=>{let{theme:n}=e;return n.colors.lightBlue})),Ie=L.ZP.button(ze||(ze=(0,P.Z)(["\n  ","\n"])),Re),_e=L.ZP.button(Me||(Me=(0,P.Z)(["\n  ","\n"])),Ne),He=(0,L.ZP)(Ae.rU)(Oe||(Oe=(0,P.Z)(["\n  ","\n"])),Ne);var Te;function Ye(){return Ye=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},Ye.apply(this,arguments)}function We(e,n){let{title:t,titleId:o,...i}=e;return r.createElement("svg",Ye({xmlns:"http://www.w3.org/2000/svg",width:24,height:24,fill:"none",ref:n,"aria-labelledby":o},i),t?r.createElement("title",{id:o},t):null,Te||(Te=r.createElement("path",{stroke:"#54ADFF",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:1.5,d:"M4 12h16M4 12l6-6m-6 6 6 6"})))}const Ue=r.forwardRef(We);t.p;var Ve=t(3329);const Xe=e=>{let{text:n,clickHandler:t,type:r,isLink:o,path:i}=e;return o?(0,Ve.jsxs)(He,{onClick:t,type:r,to:i,children:[(0,Ve.jsx)(Ue,{}),n]}):(0,Ve.jsxs)(_e,{onClick:t,type:r,children:[(0,Ve.jsx)(Ue,{}),n]})},$e=e=>{let{text:n,icon:t,clickHandler:r,filled:o,short:i,type:a,isDisabled:l}=e;return(0,Ve.jsxs)(Ie,{type:a,onClick:r&&(()=>r(!1)),filled:o,short:i,disabled:l,children:[n,t]})};var Je;const Ke=L.ZP.p(Je||(Je=(0,P.Z)(["\n  position: absolute;\n  bottom: -4px;\n  left: 16px;\n\n  font-size: 12px;\n  line-height: 1.33;\n  color: ",";\n  transform: translateY(100%);\n"])),(e=>{let{theme:n}=e;return n.colors.red})),Qe=e=>{let{message:n}=e;return(0,Ve.jsx)(Ke,{children:n})};var Ge=t(9434),en=t(7212),nn=t(7260);const tn=e=>{let{formData:n,setFormData:t,backStep:o}=e;const[i,a]=(0,r.useState)(!0),[l,c]=(0,r.useState)({}),[d,p]=(0,r.useState)({}),[h,u]=(0,r.useState)(""),[f,y]=(0,r.useState)(window.innerWidth),j=Boolean(!l.petPhoto&&!!n.petPhoto),v=Boolean(!l.comments),w=Boolean(!l.location&&!!n.location),Z=Boolean(!l.sex&&!!n.sex),k=Boolean(!l.price&&!!n.price);(0,r.useEffect)((()=>{const e=()=>{y(window.innerWidth)};return window.addEventListener("resize",e),()=>{window.removeEventListener("resize",e)}}),[]),(0,r.useEffect)((()=>{"sell"===n.category&&a(!(j&&w&&Z&&k&&v)),"my-pet"===n.category?a(!(j&&v)):a(!(j&&w&&Z&&v))}),[l,n.category,v,w,j,k,Z]),(0,r.useEffect)((()=>{p((e=>({...e,...n})))}),[n]);const P=e=>{const{name:n,value:r,type:o,files:i}=e.target,a="file"===o?i[0]:r;c((e=>({...e,[n]:""}))),"file"===o&&u(r),t((e=>({...e,[n]:a})))},L=(0,Ge.I0)();return(0,Ve.jsxs)(Ve.Fragment,{children:[(0,Ve.jsxs)(ne,{category:n.category,children:[(0,Ve.jsxs)(te,{category:n.category,children:["my-pet"!==n.category&&(0,Ve.jsxs)(le,{children:[(0,Ve.jsx)("p",{children:"The Sex"}),(0,Ve.jsxs)(se,{children:[(0,Ve.jsx)(I,{type:"radio",id:"female",name:"sex",value:"female",onChange:P,checked:"female"===n.sex,onBlur:()=>s("sex",n,c)}),(0,Ve.jsxs)(ce,{htmlFor:"female",children:[(0,Ve.jsx)(g.r,{}),(0,Ve.jsx)(pe,{children:"Female"})]}),(0,Ve.jsx)(I,{type:"radio",id:"male",name:"sex",value:"male",onChange:P,checked:"male"===n.sex,onBlur:()=>s("sex",n,c)}),(0,Ve.jsxs)(de,{htmlFor:"male",children:[(0,Ve.jsx)(x.r,{}),(0,Ve.jsx)(pe,{children:"Male"})]})]})]}),(0,Ve.jsxs)(me,{htmlFor:"pet-image",category:n.category,children:["my-pet"===n.category||f<768?(0,Ve.jsxs)(Ve.Fragment,{children:["Load the ",(0,Ve.jsx)("br",{})," pet\u2019s image:"]}):"Load the pet\u2019s image:",(0,Ve.jsxs)(he,{children:[!n.petPhoto&&(0,Ve.jsx)(m,{width:"30",height:"30"}),!!n.petPhoto&&(0,Ve.jsx)("img",{id:"image",src:URL.createObjectURL(n.petPhoto),alt:n.petPhoto.name})]}),(0,Ve.jsx)(oe,{type:"file",id:"pet-image",name:"petPhoto",accept:".png, .jpg, .jpeg, .webp",onChange:P,value:h,onBlur:()=>s("petPhoto",n,c)})]})]}),(0,Ve.jsxs)(re,{children:["my-pet"!==n.category&&(0,Ve.jsxs)(C,{children:[(0,Ve.jsxs)(D,{htmlFor:"location",children:["Location",(0,Ve.jsx)(S,{placeholder:"Your location",type:"text",name:"location",onChange:P,value:n.location,onBlur:()=>s("location",n,c),className:l.location?"invalid":""})]}),!!l.location&&(0,Ve.jsx)(Qe,{message:l.location})]}),"sell"===n.category&&(0,Ve.jsxs)(C,{children:[(0,Ve.jsxs)(D,{htmlFor:"price",children:["Price",(0,Ve.jsx)(S,{placeholder:"Your price",type:"number",name:"price",onChange:P,value:n.price,onBlur:()=>s("price",n,c),className:l.price?"invalid":""})]}),!!l.price&&(0,Ve.jsx)(Qe,{message:l.price})]}),(0,Ve.jsxs)(C,{children:[(0,Ve.jsxs)(ie,{htmlFor:"comments",children:["Comments",(0,Ve.jsx)(ae,{component:"textarea",placeholder:"Type of pet",name:"comments",onChange:P,value:n.comments,onBlur:()=>s("comments",n,c),className:l.comments?"invalid":""})]}),!!l.comments&&(0,Ve.jsx)(Qe,{message:l.comments})]})]})]}),(0,Ve.jsxs)(Ce,{isMoreInfo:!0,category:n.category,children:[(0,Ve.jsx)($e,{type:"button",text:"Done",icon:(0,Ve.jsx)(b,{}),filled:!0,clickHandler:()=>{p((e=>({...e,...n}))),(async()=>{"my-pet"===d.category?(await L((0,en.Ci)(d)),await L((0,en.ts)())):await L((0,nn.QO)(d))})()},isDisabled:i}),(0,Ve.jsx)(Xe,{type:"button",clickHandler:o,text:"Back",isLink:!1})]})]})},rn=e=>{let{formData:n,setFormData:t,nextStep:o,cancel:i}=e;const[a,l]=(0,r.useState)(!0);(0,r.useEffect)((()=>{n.category?l(!1):l(!0)}),[n.category]);const s=e=>{const{name:n,value:r}=e.target;t((e=>({...e,[n]:r})))};return(0,Ve.jsxs)(N,{children:[(0,Ve.jsxs)(R,{children:[(0,Ve.jsx)(I,{type:"radio",name:"category",value:"my-pet",id:"my-pet",onChange:s,checked:"my-pet"===n.category}),(0,Ve.jsx)(_,{htmlFor:"my-pet",children:"your pet"}),(0,Ve.jsx)(I,{type:"radio",name:"category",value:"sell",id:"sell",checked:"sell"===n.category,onChange:s}),(0,Ve.jsx)(_,{htmlFor:"sell",children:"sell"}),(0,Ve.jsx)(I,{type:"radio",name:"category",value:"lost-found",id:"lost-found",checked:"lost-found"===n.category,onChange:s}),(0,Ve.jsx)(_,{htmlFor:"lost-found",children:"lost/found"}),(0,Ve.jsx)(I,{type:"radio",name:"category",value:"for-free",id:"for-free",checked:"for-free"===n.category,onChange:s}),(0,Ve.jsx)(_,{htmlFor:"for-free",children:"in good hands"})]}),(0,Ve.jsxs)(Ce,{children:[(0,Ve.jsx)($e,{isDisabled:a,type:"button",text:"Next",icon:(0,Ve.jsx)(b,{}),clickHandler:o,filled:!1}),(0,Ve.jsx)(Xe,{text:"Cancel",isLink:!0,path:i})]})]})},on=e=>{let{formData:n,setFormData:t,nextStep:o,backStep:i}=e;const[a,l]=(0,r.useState)({}),[c,d]=(0,r.useState)(!1),[p,m]=(0,r.useState)(),h=Boolean(!a.name&&!!n.name),u=Boolean(!a.birthday&&!!n.birthday),x=Boolean(!a.type&&!!n.type),g=Boolean(!a.title&&!!n.title);(0,r.useEffect)((()=>{"my-pet"===n.category&&d(!(h&&u&&x)),"my-pet"!==n.category&&d(!(h&&u&&x&&g)),m(function(){const e=new Date,n=e.getFullYear(),t=String(e.getMonth()+1).padStart(2,"0"),r=String(e.getDate()).padStart(2,"0");return"".concat(n,"-").concat(t,"-").concat(r)}())}),[a,n.category,u,x,h,g]);const f=e=>{const{name:n,value:r}=e.target;l((e=>({...e,[n]:""})));const o="birthday"===n?new Date(r).toLocaleDateString("uk-UA",{day:"2-digit",month:"2-digit",year:"numeric"}):r;t((e=>({...e,[n]:o})))};return(0,Ve.jsxs)(F,{children:[(0,Ve.jsxs)(B,{children:["my-pet"!==n.category&&(0,Ve.jsxs)(C,{children:[(0,Ve.jsxs)(D,{htmlFor:"title",children:["Title of add:",(0,Ve.jsx)(S,{placeholder:"Title of add",type:"text",name:"title",value:n.title,onChange:f,onBlur:()=>s("title",n,l),className:a.title?"invalid":""})]}),!!a.title&&(0,Ve.jsx)(Qe,{message:a.title})]}),(0,Ve.jsxs)(C,{children:[(0,Ve.jsxs)(D,{htmlFor:"name",children:["Pet\u2019s name",(0,Ve.jsx)(S,{placeholder:"Type name pet",type:"text",name:"name",onChange:f,value:n.name,onBlur:()=>s("name",n,l),className:a.name?"invalid":""})]}),!!a.name&&(0,Ve.jsx)(Qe,{message:a.name})]}),(0,Ve.jsxs)(C,{children:[(0,Ve.jsxs)(D,{htmlFor:"birthday",children:["Date of birth",(0,Ve.jsx)(S,{placeholder:"Type date of birth",type:"date",name:"birthday","data-pattern":"**.**.****",max:p,onChange:f,value:n.birthday.split(".").reverse().join("-"),onBlur:()=>s("birthday",n,l),className:a.birthday?"invalid":""})]}),!!a.birthday&&(0,Ve.jsx)(Qe,{message:a.birthday})]}),(0,Ve.jsxs)(C,{children:[(0,Ve.jsxs)(D,{htmlFor:"type",children:["Type",(0,Ve.jsx)(S,{placeholder:"Type of pet",type:"text",name:"type",onChange:f,value:n.type,onBlur:()=>s("type",n,l),className:a.type?"invalid":""})]}),!!a.type&&(0,Ve.jsx)(Qe,{message:a.type})]})]}),(0,Ve.jsxs)(Ce,{children:[(0,Ve.jsx)($e,{type:"button",text:"Next",icon:(0,Ve.jsx)(b,{}),clickHandler:o,filled:!1,isDisabled:c}),(0,Ve.jsx)(Xe,{type:"button",clickHandler:i,text:"Back",isLink:!1})]})]})},an=()=>{var e,n;const[t,a]=(0,r.useState)({category:"",name:"",title:"",birthday:"",type:"",location:"",comments:"",petPhoto:null,sex:"",price:""}),[s,c]=(0,r.useState)(0),[d,p]=(0,r.useState)(""),m=null!==(e=null===(n=(0,i.TH)().state)||void 0===n?void 0:n.from)&&void 0!==e?e:"/",h=(0,r.useCallback)((()=>{if(s<1)return"Add pet";return{"my-pet":"Add pet",sell:"Add pet for sale","lost-found":"Add to lost or found pet","for-free":"Add your pet","":"Add pet"}[t.category]||"Add pet"}),[t.category,s]);(0,r.useEffect)((()=>{p(h())}),[h]);const u=e=>e>s?"":e<s?"completed":"current",x=e=>{c((e=>e+1))},g=()=>{c((e=>e-1))};return(0,Ve.jsx)(we,{children:(0,Ve.jsxs)(Ze,{step:s,category:t.category,children:[(0,Ve.jsx)(Pe,{children:d}),(0,Ve.jsx)(Le,{children:["Choose option","Personal details","More info"].map(((e,n)=>(0,Ve.jsx)(Fe,{className:u(n),children:(0,Ve.jsx)(Be,{children:e})},n)))}),(0,Ve.jsx)(o.J9,{initialValues:t,validationSchema:l,validateOnChange:!1,children:()=>(0,Ve.jsxs)(ke,{autoComplete:"on",children:[0===s&&(0,Ve.jsx)(rn,{formData:t,setFormData:a,nextStep:x,cancel:m}),1===s&&(0,Ve.jsx)(on,{formData:t,setFormData:a,nextStep:x,backStep:g}),2===s&&(0,Ve.jsx)(tn,{formData:t,setFormData:a,backStep:g})]})})]})})},ln=()=>(0,Ve.jsx)(an,{})}}]);
//# sourceMappingURL=116.046bdddc.chunk.js.map