(function(e){function t(t){for(var a,o,s=t[0],c=t[1],l=t[2],d=0,v=[];d<s.length;d++)o=s[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&v.push(r[o][0]),r[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);u&&u(t);while(v.length)v.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,s=1;s<n.length;s++){var c=n[s];0!==r[c]&&(a=!1)}a&&(i.splice(t--,1),e=o(o.s=n[0]))}return e}var a={},r={app:0},i=[];function o(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=a,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)o.d(n,a,function(t){return e[t]}.bind(null,a));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=t,s=s.slice();for(var l=0;l<s.length;l++)t(s[l]);var u=c;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"0a9b":function(e,t,n){},"0d9b":function(e,t,n){"use strict";n("727a")},"1e6a":function(e,t,n){},2859:function(e,t,n){},"2cec":function(e,t,n){"use strict";n("c57b")},"327e":function(e,t,n){},"40e2":function(e,t,n){"use strict";n("9279")},4390:function(e,t,n){},"4a2d":function(e,t,n){"use strict";n("d290")},5461:function(e,t,n){"use strict";n("327e")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("Navbar"),n("v-main",[n("router-view")],1),n("Footer")],1)},i=[],o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"nav"}},[n("b-navbar",{attrs:{toggleable:"md",type:"light",variant:"light",fixed:"top"}},[n("NavbarBrand"),n("b-navbar-toggle",{attrs:{target:"nav-collapse"}}),n("NavbarLinks")],1)],1)},s=[],c=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("router-link",{staticClass:"navbar-brand-align",attrs:{to:{name:"Home"}}},[a("b-navbar-brand",[a("img",{attrs:{src:n("cf05"),alt:"",width:"50px"}}),e._v(" CSULB Tzu Ching ")])],1)},l=[],u={},d=u,v=(n("fa47"),n("2877")),m=Object(v["a"])(d,c,l,!1,null,null,null),p=m.exports,_=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[n("b-navbar-nav",e._l(e.links,(function(t){return n("b-nav-item",{key:t},[n("router-link",{attrs:{to:{name:t}}},[e._v(e._s(t))])],1)})),1)],1)},f=[],h={data:function(){return{links:["Home","About","Team","Events","Photos"]}}},b=h,C=(n("a672"),Object(v["a"])(b,_,f,!1,null,null,null)),g=C.exports,y={components:{NavbarBrand:p,NavbarLinks:g}},k=y,w=(n("fb32"),Object(v["a"])(k,o,s,!1,null,"1fc7f41e",null)),T=w.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-footer",{attrs:{color:"white",id:"footer",padless:""}},[n("v-row",{attrs:{id:"footer_content","no-gutters":""}},[n("v-col",{attrs:{cols:"12"}},[n("v-card",{attrs:{flat:"",tile:""}},e._l(e.externalLinks,(function(e){return n("a",{key:e.icon,attrs:{href:e.hyperlink,target:"_blank"}},[n("i",{staticClass:"mx-3 icon-link",class:e.icon})])})),0),n("v-col",{staticClass:"py-4",attrs:{cols:"12"}},[n("p",[e._v(e._s((new Date).getFullYear())+" — CSULB Tzu Ching")]),n("p",[e._v(" Designed by "),n("a",{attrs:{href:"https://www.brianenguyen.com/",target:"_blank"}},[e._v("Brian Nguyen")])])])],1)],1)],1)},S=[],x={data:function(){return{externalLinks:[{icon:"fas fa-envelope fa-2x",hyperlink:"mailto:tcca.csulb@gmail.com"},{icon:"fab fa-facebook fa-2x",hyperlink:"https://www.facebook.com/CSULBTzuChing"},{icon:"fab fa-instagram fa-2x",hyperlink:"https://www.instagram.com/tccaofcsulb/"},{icon:"fab fa-discord fa-2x",hyperlink:"https://discord.gg/fmf3JtTNCc"}]}}},E=x,V=(n("ded2"),n("6544")),B=n.n(V),O=n("b0af"),W=n("62ad"),U=n("553a"),L=n("0fd9"),A=Object(v["a"])(E,j,S,!1,null,null,null),z=A.exports;B()(A,{VCard:O["a"],VCol:W["a"],VFooter:U["a"],VRow:L["a"]});var P={name:"App",components:{Navbar:T,Footer:z},watch:{$route:{immediate:!0,handler:function(e){document.title=e.meta.title||"CSULB Tzu Ching"}}}},$=P,M=n("7496"),N=n("f6c4"),I=Object(v["a"])($,r,i,!1,null,null,null),q=I.exports;B()(I,{VApp:M["a"],VMain:N["a"]});var G=n("8c4f"),F=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("Carousel"),n("CardWrapper",[n("Introduction"),n("UpcomingEvents"),n("RecentPhotos"),n("Quote")],1)],1)},D=[],R=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-carousel",{attrs:{cycle:"",height:"600",interval:"10000"}},e._l(e.contents,(function(e,t){return n("v-carousel-item",{key:t,attrs:{src:e.src}},[n("CarouselContent",{attrs:{content:e}})],1)})),1)},H=[],J=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{staticClass:"carousel_content"},[n("h1",{staticClass:"carousel_header"},[e._v(e._s(e.content.header))]),n("p",{staticClass:"carousel_description"},[e._v(e._s(e.content.description))]),e.content.link?n("div",[n("router-link",{staticClass:"carousel_btn",attrs:{to:e.content.link}},[n("v-btn",[e._v(e._s(e.content.button))])],1)],1):e._e()])},K=[],Q={props:{content:Object}},Y=Q,Z=(n("697c"),n("8336")),X=n("a523"),ee=Object(v["a"])(Y,J,K,!1,null,null,null),te=ee.exports;B()(ee,{VBtn:Z["a"],VContainer:X["a"]});var ne={name:"Carousel",components:{CarouselContent:te},data:function(){return{contents:[{header:"Welcome to CSULB Tzu Ching!",button:"About Us",link:"/about",src:"https://res.cloudinary.com/buraiyen/image/upload/v1636914034/CSULB_TC_Website/17097614_645084968996981_6289676080599741977_o_j7ylph.jpg"},{header:"Events",description:"View our current / most recent events!",button:"View",link:"/events",src:"https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_2407/v1636247406/CSULB_TC_Website/DSC_0400_nmkrtt.jpg"},{header:"Photos",description:"Check out our photos from our events!",button:"View",link:"/photos",src:"https://res.cloudinary.com/buraiyen/image/upload/v1636245907/CSULB_TC_Website/17546836_656892331149578_6206756973583337194_o_pboqz1.jpg"},{header:"Board Members",description:"Get to know our 2021-2022 officers and advisors!",src:"https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1531/v1636919257/CSULB_TC_Website/BEN_1689_01_hobk1j.jpg",button:"View",link:"/team"}]}}},ae=ne,re=n("5e66"),ie=n("3e35"),oe=Object(v["a"])(ae,R,H,!1,null,null,null),se=oe.exports;B()(oe,{VCarousel:re["a"],VCarouselItem:ie["a"]});var ce=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",[a("v-row",{staticClass:"text-center"},[a("v-col",{attrs:{cols:"12"}},[a("v-img",{staticClass:"my-3",attrs:{src:n("cf05"),contain:"",height:"300"}}),a("h1",{staticClass:"intro_title"},[e._v("Welcome to CSULB Tzu Ching!")]),a("p",{staticClass:"intro_description"},[e._v(" CSULB Tzu Ching (also known as the Tzu Chi Collegiate Association of CSULB) are a volunteering organization of diverse students that focuses on medicine, education, charity, and humanistic culture. We serve as the CSULB collegiate chapter for our mother organization: the Tzu Chi Foundation. ")])],1)],1)],1)},le=[],ue={name:"Introduction"},de=ue,ve=(n("d51c"),n("adda")),me=Object(v["a"])(de,ce,le,!1,null,"f4804bec",null),pe=me.exports;B()(me,{VCol:W["a"],VContainer:X["a"],VImg:ve["a"],VRow:L["a"]});var _e=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"recent_events_section"}},[n("h1",{attrs:{id:"recent_events_header"}},[e._v("Upcoming Events")]),n("h2",{staticClass:"recent_events_month"},[e._v(e._s(e.month))]),n("v-row",e._l(e.events,(function(e,t){return n("v-col",{key:t,attrs:{cols:"12",md:"6",lg:"4"}},[n("UpcomingEventCard",{attrs:{event:e}})],1)})),1),n("center",[n("router-link",{staticClass:"events_btn_hover",attrs:{to:"/events"}},[n("v-btn",{staticClass:"events_btn",attrs:{"x-large":""}},[e._v("View More Events")])],1)],1),n("hr")],1)},fe=[],he=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{elevation:"3"}},[n("v-card-title",[n("h1",{staticClass:"upcoming_event_name"},[e._v(" "+e._s(e.event.name)+" ")])]),n("v-card-subtitle",[n("h4",{staticClass:"upcoming_event_datetime"},[e._v(" "+e._s(e.event.date)+" @ "+e._s(e.event.time)+" ")]),n("h4",{staticClass:"upcoming_event_location"},[e._v(" "+e._s(e.event.location)+" ")])]),n("v-card-text",[n("p",{staticClass:"upcoming_event_description"},[e._v(" "+e._s(e.event.description)+" ")])]),n("v-card-actions",[n("v-btn",{attrs:{color:"blue",text:""}},[e._v("Sign Up")])],1)],1)},be=[],Ce={props:{event:Object}},ge=Ce,ye=(n("6dc7"),n("99d9")),ke=Object(v["a"])(ge,he,be,!1,null,null,null),we=ke.exports;B()(ke,{VBtn:Z["a"],VCard:O["a"],VCardActions:ye["a"],VCardSubtitle:ye["b"],VCardText:ye["c"],VCardTitle:ye["d"]});var Te={components:{UpcomingEventCard:we},data:function(){return{month:"November 2021",events:[{name:"Medical Outreach",date:"Saturday, 11/6/21",time:"9:00 AM",location:"1355 Broad Ave, Wilmington, CA 90744",description:"Help medical professionals provide services to those in need"},{name:"Weili's Warm Gathering",date:"Wednesday, 11/3/21",time:"9:00 AM",location:"Zoom",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officia atque a unde aspernatur officiis facilis ipsam vero quisquam neque. Sapiente, ipsa nostrum! Inventore, assumenda! Nulla eligendi eum debitis asperiores?"},{name:"Weili's Warm Gathering",date:"Wednesday, 11/3/21",time:"9:00 AM",location:"Zoom",description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente, officia atque a unde aspernatur officiis facilis ipsam vero quisquam neque. Sapiente, ipsa nostrum! Inventore, assumenda! Nulla eligendi eum debitis asperiores?"}]}}},je=Te,Se=(n("f527"),Object(v["a"])(je,_e,fe,!1,null,"616ad9dd",null)),xe=Se.exports;B()(Se,{VBtn:Z["a"],VCol:W["a"],VContainer:X["a"],VRow:L["a"]});var Ee=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},Ve=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("div",{staticClass:"quote_content"},[n("h2",{staticClass:"quote_1"},[e._v('"Be grateful for the past')]),n("h2",{staticClass:"quote_2"},[e._v("Look forward to the future")]),n("h2",{staticClass:"quote_3"},[e._v('Take advantage of the present"')]),n("footer",{attrs:{id:"author"}},[e._v("— "),n("cite",[e._v("Dharma Master Cheng Yen")])])])])}],Be=(n("e774"),{}),Oe=Object(v["a"])(Be,Ee,Ve,!1,null,null,null),We=Oe.exports,Ue=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h1",{attrs:{id:"recent_photos_header"}},[e._v("Recent Photos")]),n("v-row",{staticClass:"fill-height"},e._l(e.photos,(function(e,t){return n("v-col",{key:t,attrs:{cols:"12",md:"6",lg:"4"}},[n("PhotoCard",{attrs:{photo:e}})],1)})),1),n("center",[n("router-link",{staticClass:"photos_btn_hover",attrs:{to:"/photos"}},[n("v-btn",{staticClass:"photos_btn",attrs:{"x-large":""}},[e._v("View More Photos")])],1)],1)],1)},Le=[],Ae=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-dialog",{attrs:{width:"750"},scopedSlots:e._u([{key:"activator",fn:function(t){var a=t.on,r=t.attrs;return[n("v-img",e._g(e._b({staticClass:"photo_card",attrs:{src:e.photo,"aspect-ratio":"1"},scopedSlots:e._u([{key:"placeholder",fn:function(){return[n("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[n("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)},"v-img",r,!1),a))]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[n("center",[n("v-img",e._g(e._b({staticClass:"photo_card_popup",attrs:{src:e.photo,width:"750px"},on:{click:function(t){e.dialog=!1}}},"v-img",e.attrs,!1),e.on))],1)],1)},ze=[],Pe={name:"PhotoCard",data:function(){return{dialog:!1}},props:{photo:String}},$e=Pe,Me=(n("69ce"),n("169a")),Ne=n("490a"),Ie=Object(v["a"])($e,Ae,ze,!1,null,null,null),qe=Ie.exports;B()(Ie,{VDialog:Me["a"],VImg:ve["a"],VProgressCircular:Ne["a"],VRow:L["a"]});var Ge={name:"RecentPhotos",components:{PhotoCard:qe},data:function(){return{photos:["https://res.cloudinary.com/buraiyen/image/upload/v1637183817/CSULB_TC_Website/6F3E6219-7561-4D01-AA4A-B13A735CCE80_kjncp4.jpg","https://res.cloudinary.com/buraiyen/image/upload/v1637183822/CSULB_TC_Website/IMG_9996_bdgkjf.jpg","https://res.cloudinary.com/buraiyen/image/upload/v1637183820/CSULB_TC_Website/IMG_0040_txeaj1.jpg"]}}},Fe=Ge,De=(n("fe9b"),Object(v["a"])(Fe,Ue,Le,!1,null,null,null)),Re=De.exports;B()(De,{VBtn:Z["a"],VCol:W["a"],VRow:L["a"]});var He=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{staticClass:"card_wrapper",attrs:{outlined:"",elevation:"3"}},[n("v-container",{staticClass:"card_wrapper_content"},[e._t("default")],2)],1)},Je=[],Ke={},Qe=Ke,Ye=(n("5461"),Object(v["a"])(Qe,He,Je,!1,null,null,null)),Ze=Ye.exports;B()(Ye,{VCard:O["a"],VContainer:X["a"]});var Xe={name:"Home",components:{Carousel:se,Introduction:pe,UpcomingEvents:xe,Quote:We,RecentPhotos:Re,CardWrapper:Ze}},et=Xe,tt=(n("d39d"),Object(v["a"])(et,F,D,!1,null,"3f5a70b2",null)),nt=tt.exports,at=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{id:"about"}},[n("h1",{attrs:{id:"about_header"}},[e._v("About Us")]),n("h2",{staticClass:"about_subheader"},[e._v("The Tzu Chi Foundation")]),n("p",[e._v(" The Tzu Chi Foundation ("),n("em",[e._v("tzu")]),e._v(' - "compassionate", '),n("em",[e._v("chi")]),e._v(' - "relief") is a global relief organization whose main missions are charity, education, medicine, and humanistic culture. The organization was founded in Taiwan by Dharma Master Cheng in 1966, and it began as a group of 30 housewives who saved money everyday, which would then be donated to those in need. This incentivized others to follow their acts of compassion. The organization expanded throughout the years and became a major organization to provide relief services. The Tzu Chi Foundation today consists of over 10 million members worldwide in over 50 countries. In 2020, Tzu Chi has provided aid to 125 countries, donated over 2 million medical masks, provided food to over 70 thousand households, and benefitted 17,335 students from their tutoring program ')]),n("p",[e._v(" For more information about the Tzu Chi Foundation: "),n("a",{attrs:{href:""}},[e._v("click here to visit Tzu Chi USA's website")])]),n("h2",{staticClass:"about_subheader"},[e._v("CSULB Tzu Ching")]),n("p",[e._v(" The Tzu Chi Foundation consists of collegiate chapters throughout the world. CSULB Tzu Ching ("),n("em",[e._v("tzu")]),e._v(' - "compassionate", '),n("em",[e._v("ching")]),e._v(' - "youth") was founded in 2014 and consists of many students from diverse backgrounds, majors, ethnicities, and more. Our general meetings are once a month and we provide diverse range of events for members to attend, such as food-packing events, medical outreaches, senior center visits, and socials. Go Beach! Go Tzu Ching! ')])])},rt=[],it={components:{}},ot=it,st=(n("9c4f"),Object(v["a"])(ot,at,rt,!1,null,"a07811fe",null)),ct=st.exports;B()(st,{VContainer:X["a"]});var lt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CardWrapper",[n("h1",{attrs:{id:"team_header"}},[e._v("2021-2022 Team")]),n("div",{staticClass:"section_spacer"},[n("h2",{staticClass:"team_subheader"},[e._v("Officers")]),n("v-row",e._l(e.officers,(function(e,t){return n("v-col",{key:t,attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[n("TeamMemberCard",{attrs:{member:e}})],1)})),1)],1),n("div",[n("h2",{staticClass:"team_subheader"},[e._v("Advisors")]),n("v-row",e._l(e.advisors,(function(e,t){return n("v-col",{key:t,attrs:{cols:"12",lg:"4",md:"6",sm:"12"}},[n("TeamMemberCard",{attrs:{member:e}})],1)})),1)],1)])},ut=[],dt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{outlined:"",elevation:"5"}},[n("div",{staticClass:"card_content"},[n("h2",{staticClass:"member_name"},[e._v(e._s(e.member.name))]),n("p",[e._v(e._s(e.member.role))]),n("p",{staticClass:"member_description"},[e._v(e._s(e.member.description))]),n("a",{attrs:{href:""}},[n("i",{staticClass:"fas fa-envelope fa-2x mr-2"})]),n("a",{attrs:{href:e.member.linkedin}},[n("i",{staticClass:"fab fa-linkedin fa-2x mx-2"})])])])},vt=[],mt={props:{member:Object}},pt=mt,_t=(n("2cec"),Object(v["a"])(pt,dt,vt,!1,null,null,null)),ft=_t.exports;B()(_t,{VCard:O["a"]});var ht={components:{TeamMemberCard:ft,CardWrapper:Ze},data:function(){return{officers:[{name:"Samanta C.",role:"President",description:"Plans monthly events, leads general meetings, delegates tasks to other officers",email:"",linkedin:""},{name:"Vivienne A.",role:"Executive Vice President",description:"Helps lead general meetings with president, finds a common meeting time with officers",email:"",linkedin:""},{name:"Thu N.",role:"VP of Administration",description:"Takes notes during officer meetings, tracks members' volunteering hours",email:"",linkedin:""},{name:"Jose A.",role:"Treasurer",description:"Handles all financial and budgeting of the organization",email:"",linkedin:""},{name:"Mahya J.",role:"VP of Communications",description:"Sends monthly emails that advertise general meetings and volunteering events",email:"",linkedin:""}],advisors:[{name:"Brian N.",role:"Webmaster / Photographer / Advisor",description:"Maintains CSULB TC website and advises current officer board",email:"",linkedin:"https://www.linkedin.com/in/brian-edison-nguyen/"},{name:"Lily K.",role:"Advisor",description:"",email:"",linkedin:""},{name:"Weili K.",role:"Advisor",description:"",email:"",linkedin:""}]}}},bt=ht,Ct=(n("c3d3"),Object(v["a"])(bt,lt,ut,!1,null,"69a72fac",null)),gt=Ct.exports;B()(Ct,{VCol:W["a"],VRow:L["a"]});var yt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CardWrapper",[n("h1",{attrs:{id:"events_header"}},[e._v("Events")]),n("v-checkbox",{attrs:{label:"Condensed view: "+e.isCondensed.toString()},model:{value:e.isCondensed,callback:function(t){e.isCondensed=t},expression:"isCondensed"}}),e.isCondensed?n("div",[n("EventTimelineCondensed",{attrs:{month:"November 2021",events:e.november}})],1):n("div",[n("EventTimeline",{attrs:{month:"November 2021",events:e.november}})],1)],1)},kt=[],wt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"month"},[e._v(e._s(e.month))]),n("v-timeline",{staticClass:"timeline_spacing",attrs:{dense:""}},e._l(e.events,(function(e,t){return n("div",{key:t},[n("EventTimelineItem",{attrs:{event:e}})],1)})),0)],1)},Tt=[],jt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-timeline-item",[n("EventCard",{attrs:{event:e.event}})],1)},St=[],xt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-card",{attrs:{"max-width":"500",elevation:"5"}},[n("v-img",{attrs:{height:"150px",src:e.event.img}}),n("v-card-title",{staticClass:"event_name"},[e._v(e._s(e.event.name))]),n("v-card-subtitle",[n("h4",[e._v(e._s(e.event.date)+" @ "+e._s(e.event.time))]),e._v(" "+e._s(e.event.location)+" ")]),n("v-card-text",[e._v(e._s(e.event.description))]),n("v-card-actions",[n("a",{staticClass:"signup_link",attrs:{href:e.event.link}},[n("v-btn",{attrs:{color:"blue",text:""}},[e._v("Sign Up")])],1)])],1)},Et=[],Vt={props:{event:Object}},Bt=Vt,Ot=(n("8dd4"),Object(v["a"])(Bt,xt,Et,!1,null,"7e24af21",null)),Wt=Ot.exports;B()(Ot,{VBtn:Z["a"],VCard:O["a"],VCardActions:ye["a"],VCardSubtitle:ye["b"],VCardText:ye["c"],VCardTitle:ye["d"],VImg:ve["a"]});var Ut={props:{event:Object},components:{EventCard:Wt}},Lt=Ut,At=n("1e06"),zt=Object(v["a"])(Lt,jt,St,!1,null,null,null),Pt=zt.exports;B()(zt,{VTimelineItem:At["a"]});var $t={components:{EventTimelineItem:Pt},props:{month:String,events:Array}},Mt=$t,Nt=(n("9a2a"),n("8414")),It=Object(v["a"])(Mt,wt,Tt,!1,null,"577a2741",null),qt=It.exports;B()(It,{VTimeline:Nt["a"]});var Gt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("h2",{staticClass:"month"},[e._v(e._s(e.month))]),n("v-timeline",{staticClass:"timeline_spacing",attrs:{dense:""}},e._l(e.events,(function(e,t){return n("div",{key:t},[n("EventTimelineItemCondensed",{attrs:{event:e}})],1)})),0)],1)},Ft=[],Dt=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-timeline-item",{attrs:{small:""}},[n("h3",{staticClass:"event_name"},[e._v(e._s(e.event.name))]),n("h4",[e._v(e._s(e.event.date)+" @ "+e._s(e.event.time))]),n("p",[e._v(e._s(e.event.location))]),n("p",{staticClass:"event_description"},[e._v(e._s(e.event.description))]),n("a",{staticClass:"signup_link",attrs:{href:e.event.link}},[n("v-btn",{attrs:{small:""}},[e._v(" Sign Up")])],1)])},Rt=[],Ht={props:{event:Object}},Jt=Ht,Kt=(n("9f14"),Object(v["a"])(Jt,Dt,Rt,!1,null,"556d8eaa",null)),Qt=Kt.exports;B()(Kt,{VBtn:Z["a"],VTimelineItem:At["a"]});var Yt={components:{EventTimelineItemCondensed:Qt},props:{month:String,events:Array}},Zt=Yt,Xt=(n("4a2d"),Object(v["a"])(Zt,Gt,Ft,!1,null,null,null)),en=Xt.exports;B()(Xt,{VTimeline:Nt["a"]});var tn={components:{EventTimeline:qt,EventTimelineCondensed:en,CardWrapper:Ze},data:function(){return{isCondensed:!1,november:[{name:"Medical Outreach",date:"Saturday, 11/13/21",time:"9:10 AM",location:"123 Sesame Street",description:"This is a test",img:"https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_678/v1636487294/CSULB_TC_Website/DSC_0118_c3fvq6.jpg",link:""},{name:"Medical Outreach",date:"Saturday, 11/13/21",time:"9:00 AM",location:"123 Sesame Street",description:"This is a test",img:"https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_678/v1636487294/CSULB_TC_Website/DSC_0118_c3fvq6.jpg",link:""},{name:"Medical Outreach",date:"Saturday, 11/13/21",time:"9:00 AM",location:"123 Sesame Street",description:"This is a test",img:"https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_678/v1636487294/CSULB_TC_Website/DSC_0118_c3fvq6.jpg",link:""}]}}},nn=tn,an=(n("0d9b"),n("ac7c")),rn=Object(v["a"])(nn,yt,kt,!1,null,"da24fd20",null),on=rn.exports;B()(rn,{VCheckbox:an["a"]});var sn=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("CardWrapper",[n("h1",{attrs:{id:"photos_header"}},[e._v("Photos")]),n("h3",{attrs:{id:"photos_subheader"}},[e._v(" Get a glimpse at what we do in our organization! ")]),e._l(e.events,(function(e,t){return n("div",{key:t},[n("PhotoGallery",{attrs:{event:e}})],1)}))],2)},cn=[],ln=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"gallery_section"},[n("h2",{staticClass:"event_namedate_header"},[e._v(e._s(e.event.name)+", "+e._s(e.event.date))]),n("v-row",e._l(e.event.photos,(function(e){return n("v-col",{key:e,attrs:{cols:"6",lg:"4"}},[n("PhotoCard",{attrs:{photo:e}})],1)})),1)],1)},un=[],dn={components:{PhotoCard:qe},props:{event:Object}},vn=dn,mn=(n("d394"),Object(v["a"])(vn,ln,un,!1,null,null,null)),pn=mn.exports;B()(mn,{VCol:W["a"],VRow:L["a"]});var _n={components:{PhotoGallery:pn,CardWrapper:Ze},data:function(){return{events:[{name:"Medical Outreach",date:"11/13/21",photos:["https://res.cloudinary.com/buraiyen/image/upload/v1637183817/CSULB_TC_Website/6F3E6219-7561-4D01-AA4A-B13A735CCE80_kjncp4.jpg","https://res.cloudinary.com/buraiyen/image/upload/v1637183822/CSULB_TC_Website/IMG_9996_bdgkjf.jpg","https://res.cloudinary.com/buraiyen/image/upload/v1637183820/CSULB_TC_Website/IMG_0040_txeaj1.jpg"]},{name:"Fall Week of Welcome",date:"9/5/21",photos:["https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1151/v1637269283/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1548_pynqen.jpg","https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1084/v1637269278/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1632_sdahq2.jpg","https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1148/v1637269268/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1689_fjaew9.jpg","https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_892/v1637269276/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1533_uplruz.jpg","https://res.cloudinary.com/buraiyen/image/upload/c_scale,w_1020/v1637269282/CSULB_TC_Website/Gallery/2021_WeekOfWelcome/BEN_1661_klychz.jpg"]}]}}},fn=_n,hn=(n("40e2"),Object(v["a"])(fn,sn,cn,!1,null,null,null)),bn=hn.exports,Cn=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},gn=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"error"}},[n("h1",[e._v("404 Error")]),n("h3",[e._v("The page you are on doesn't or no longer exists")])])}],yn={},kn=yn,wn=(n("bc5e"),Object(v["a"])(kn,Cn,gn,!1,null,null,null)),Tn=wn.exports;a["default"].use(G["a"]);var jn=[{path:"/",name:"Home",component:nt,meta:{title:"CSULB Tzu Ching"}},{path:"/about",name:"About",component:ct,meta:{title:"About | CSULB TC"}},{path:"/team",name:"Team",component:gt,meta:{title:"Team | CSULB TC"}},{path:"/events",name:"Events",component:on,meta:{title:"Events | CSULB TC"}},{path:"/photos",name:"Photos",component:bn,meta:{title:"Photos | CSULB TC"}},{path:"*",component:Tn,meta:{title:"404"}}],Sn=new G["a"]({mode:"history",base:"/",routes:jn}),xn=Sn,En=n("f309");a["default"].use(En["a"]);var Vn=new En["a"]({}),Bn=n("5f5b"),On=n("b1e0");n("f9e3"),n("2dd8");a["default"].config.productionTip=!1,a["default"].use(Bn["a"]),a["default"].use(On["a"]),new a["default"]({router:xn,vuetify:Vn,render:function(e){return e(q)}}).$mount("#app")},"5e1b":function(e,t,n){},6541:function(e,t,n){},"697c":function(e,t,n){"use strict";n("79c6")},"69ce":function(e,t,n){"use strict";n("dc90")},"6dc7":function(e,t,n){"use strict";n("df18")},"727a":function(e,t,n){},"789e":function(e,t,n){},"79c6":function(e,t,n){},"7d7a":function(e,t,n){},"82e5":function(e,t,n){},8630:function(e,t,n){},"8dd4":function(e,t,n){"use strict";n("4390")},9279:function(e,t,n){},"92d6":function(e,t,n){},"9a0e":function(e,t,n){},"9a2a":function(e,t,n){"use strict";n("ac66")},"9c4f":function(e,t,n){"use strict";n("6541")},"9f14":function(e,t,n){"use strict";n("7d7a")},a672:function(e,t,n){"use strict";n("92d6")},ac66:function(e,t,n){},bc5e:function(e,t,n){"use strict";n("789e")},c3d3:function(e,t,n){"use strict";n("8630")},c57b:function(e,t,n){},cf05:function(e,t,n){e.exports=n.p+"img/logo.6bd7c5f2.png"},d0ac:function(e,t,n){},d290:function(e,t,n){},d394:function(e,t,n){"use strict";n("0a9b")},d39d:function(e,t,n){"use strict";n("1e6a")},d51c:function(e,t,n){"use strict";n("2859")},dc90:function(e,t,n){},ded2:function(e,t,n){"use strict";n("f10d")},df18:function(e,t,n){},e774:function(e,t,n){"use strict";n("d0ac")},f10d:function(e,t,n){},f527:function(e,t,n){"use strict";n("5e1b")},f9d6:function(e,t,n){},fa47:function(e,t,n){"use strict";n("82e5")},fb32:function(e,t,n){"use strict";n("9a0e")},fe9b:function(e,t,n){"use strict";n("f9d6")}});
//# sourceMappingURL=app.4f78f61e.js.map