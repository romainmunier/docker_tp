"use strict";(self.webpackChunk_nextcloud_text=self.webpackChunk_nextcloud_text||[]).push([["editor-collab"],{44666:(t,n,e)=>{e.d(n,{Z:()=>o});var r=e(87537),s=e.n(r),a=e(23645),i=e.n(a)()(s());i.push([t.id,".avatar[data-v-1bf0295d],.avatar-wrapper[data-v-1bf0295d]{border-radius:50%;width:var(--size);height:var(--size);text-align:center;color:#fff;line-height:var(--size);font-size:var(--font-size);font-weight:normal;display:flex;justify-content:center;align-items:center}","",{version:3,sources:["webpack://./src/components/Editor/AvatarWrapper.vue"],names:[],mappings:"AAEA,0DACC,iBAAA,CACA,iBAAA,CACA,kBAAA,CACA,iBAAA,CACA,UAAA,CACA,uBAAA,CACA,0BAAA,CACA,kBAAA,CACA,YAAA,CACA,sBAAA,CACA,kBAAA",sourcesContent:["\n\n.avatar, .avatar-wrapper {\n\tborder-radius: 50%;\n\twidth: var(--size);\n\theight: var(--size);\n\ttext-align: center;\n\tcolor: #ffffff;\n\tline-height: var(--size);\n\tfont-size: var(--font-size);\n\tfont-weight: normal;\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n}\n"],sourceRoot:""}]);const o=i},59105:(t,n,e)=>{e.d(n,{Z:()=>o});var r=e(87537),s=e.n(r),a=e(23645),i=e.n(a)()(s());i.push([t.id,".session-list[data-v-5131a104]{height:44px}.avatar-list[data-v-5131a104]{border:none;background-color:var(--color-main-background);padding:0;margin:0;padding-left:3px;display:inline-flex;flex-direction:row-reverse}.avatar-list .avatar-wrapper[data-v-5131a104]{margin:0 -18px 0 0;z-index:1;border-radius:50%;overflow:hidden;box-sizing:content-box !important;height:36px;width:36px}.avatar-list .icon-more[data-v-5131a104],.avatar-list .icon-group[data-v-5131a104],.avatar-list .icon-settings-dark[data-v-5131a104]{width:44px;height:44px;margin:0 3px 0 0}.avatar-list .icon-more[data-v-5131a104]:hover,.avatar-list .icon-group[data-v-5131a104]:hover,.avatar-list .icon-settings-dark[data-v-5131a104]:hover{background-color:var(--color-background-hover)}.session-menu[data-v-5131a104]{max-width:280px;padding-top:6px;padding-bottom:6px}.session-menu ul li[data-v-5131a104]{align-items:center;display:flex;padding:6px}.session-menu ul li .avatar-wrapper[data-v-5131a104]{height:36px;width:36px;margin-right:6px}.session-menu ul li .session-label[data-v-5131a104]{padding-right:3px}.session-menu ul li .guest-label[data-v-5131a104]{padding-left:3px;color:var(--color-text-maxcontrast)}label[data-v-5131a104]{display:block;margin:8px}.hint[data-v-5131a104]{margin:8px;color:var(--color-text-maxcontrast)}","",{version:3,sources:["webpack://./src/components/Editor/SessionList.vue"],names:[],mappings:"AACA,+BACC,WAAA,CAED,8BACC,WAAA,CACA,6CAAA,CACA,SAAA,CACA,QAAA,CACA,gBAAA,CACA,mBAAA,CACA,0BAAA,CAEA,8CACC,kBAAA,CACA,SAAA,CACA,iBAAA,CACA,eAAA,CACA,iCAAA,CACA,WAAA,CACA,UAAA,CAGD,qIACC,UAAA,CACA,WAAA,CACA,gBAAA,CAEA,uJACC,8CAAA,CAKH,+BACC,eAAA,CACA,eAAA,CACA,kBAAA,CAEA,qCACC,kBAAA,CACA,YAAA,CACA,WAAA,CAEA,qDACC,WAAA,CACA,UAAA,CACA,gBAAA,CAGD,oDACC,iBAAA,CAED,kDACC,gBAAA,CACA,mCAAA,CAKH,uBACC,aAAA,CACA,UAAA,CAGD,uBACC,UAAA,CACA,mCAAA",sourcesContent:["\n.session-list {\n\theight: 44px;\n}\n.avatar-list {\n\tborder: none;\n\tbackground-color: var(--color-main-background);\n\tpadding: 0;\n\tmargin: 0;\n\tpadding-left: 3px;\n\tdisplay: inline-flex;\n\tflex-direction: row-reverse;\n\n\t.avatar-wrapper {\n\t\tmargin: 0 -18px 0 0;\n\t\tz-index: 1;\n\t\tborder-radius: 50%;\n\t\toverflow: hidden;\n\t\tbox-sizing: content-box !important;\n\t\theight: 36px;\n\t\twidth: 36px;\n\t}\n\n\t.icon-more, .icon-group, .icon-settings-dark {\n\t\twidth: 44px;\n\t\theight: 44px;\n\t\tmargin: 0 3px 0 0;\n\n\t\t&:hover {\n\t\t\tbackground-color: var(--color-background-hover);\n\t\t}\n\t}\n}\n\n.session-menu {\n\tmax-width: 280px;\n\tpadding-top: 6px;\n\tpadding-bottom: 6px;\n\n\tul li {\n\t\talign-items: center;\n\t\tdisplay: flex;\n\t\tpadding: 6px;\n\n\t\t.avatar-wrapper {\n\t\t\theight: 36px;\n\t\t\twidth: 36px;\n\t\t\tmargin-right: 6px;\n\t\t}\n\n\t\t.session-label {\n\t\t\tpadding-right: 3px;\n\t\t}\n\t\t.guest-label {\n\t\t\tpadding-left: 3px;\n\t\t\tcolor: var(--color-text-maxcontrast);\n\t\t}\n\t}\n}\n\nlabel {\n\tdisplay: block;\n\tmargin: 8px;\n}\n\n.hint {\n\tmargin: 8px;\n\tcolor: var(--color-text-maxcontrast);\n}\n"],sourceRoot:""}]);const o=i},47849:(t,n,e)=>{e.d(n,{Z:()=>x});function r(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function s(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?r(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):r(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}const i={name:"AvatarWrapper",components:{NcAvatar:e(15961).Xn},props:{session:{type:Object,required:!0},size:{type:Number,default:function(){return 32}}},computed:{sessionAvatarStyle:function(){return s(s({},this.sessionBackgroundStyle),{},{"border-color":this.session.color,"border-width":"2px","border-style":"solid","--size":this.size+"px","--font-size":this.size/2+"px"})},sessionBackgroundStyle:function(){return{"background-color":this.session.userId?this.session.color+" !important":"#b9b9b9"}},guestInitial:function(){return""===this.session.guestName?"?":this.session.guestName.slice(0,1).toUpperCase()}}};var o=e(93379),A=e.n(o),l=e(7795),c=e.n(l),u=e(90569),p=e.n(u),d=e(3565),C=e.n(d),v=e(19216),g=e.n(v),f=e(44589),b=e.n(f),h=e(44666),m={};m.styleTagTransform=b(),m.setAttributes=C(),m.insert=p().bind(null,"head"),m.domAPI=c(),m.insertStyleElement=g();A()(h.Z,m);h.Z&&h.Z.locals&&h.Z.locals;const x=(0,e(51900).Z)(i,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"avatar-wrapper",style:t.sessionAvatarStyle},[t.session.userId?n("NcAvatar",{attrs:{user:t.session.userId?t.session.userId:t.session.guestName,"is-guest":null===t.session.userId,"disable-menu":!0,"show-user-status":!1,"disable-tooltip":!0,size:t.size}}):n("div",{staticClass:"avatar",style:t.sessionBackgroundStyle},[t._v("\n\t\t"+t._s(t.guestInitial)+"\n\t")])],1)}),[],!1,null,"1bf0295d",null).exports},45286:(n,e,r)=>{r.r(e),r.d(e,{default:()=>j});var s=r(15961),a=r(47849),i=r(20629),o=r(13815);function A(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?A(Object(e),!0).forEach((function(n){c(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):A(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}const u={name:"SessionList",components:{AvatarWrapper:a.Z,NcPopover:s.Fh},directives:{tooltip:s.u},mixins:[o.Z],props:{sessions:{type:Object,default:function(){return{}}}},data:function(){return{myName:""}},computed:l(l({},(0,i.rn)({storeShowAuthorAnnotations:function(t){return t.text.showAuthorAnnotations}})),{},{label:function(){return t("text","Active people")},showAuthorAnnotations:{get:function(){return this.storeShowAuthorAnnotations},set:function(t){this.setShowAuthorAnnotations(t)}},participantsPopover:function(){return this.currentSession.guestName?this.participantsWithoutCurrent:this.participants},participantsWithoutCurrent:function(){return this.participants.filter((function(t){return!t.isCurrent}))},participants:function(){return Object.values(this.sessions).filter((function(t){return t.lastContact>Date.now()/1e3-90&&(null!==t.userId||null!==t.guestName)})).sort((function(t,n){return t.lastContact<n.lastContact}))},currentSession:function(){return Object.values(this.sessions).find((function(t){return t.isCurrent}))},avatarStyle:function(){return function(t){return{opacity:t.lastContact>Date.now()/1e3-60?1:.5}}},sessionsVisible:function(){return this.participantsWithoutCurrent.slice(0,3)}}),methods:l({},(0,i.nv)("text",["setShowAuthorAnnotations"]))};var p=r(93379),d=r.n(p),C=r(7795),v=r.n(C),g=r(90569),f=r.n(g),b=r(3565),h=r.n(b),m=r(19216),x=r.n(m),y=r(44589),w=r.n(y),O=r(59105),k={};k.styleTagTransform=w(),k.setAttributes=h(),k.insert=f().bind(null,"head"),k.domAPI=v(),k.insertStyleElement=x();d()(O.Z,k);O.Z&&O.Z.locals&&O.Z.locals;const j=(0,r(51900).Z)(u,(function(){var t=this,n=t._self._c;return n("NcPopover",{staticClass:"session-list",attrs:{placement:"bottom"},scopedSlots:t._u([{key:"default",fn:function(){return[n("div",{staticClass:"session-menu"},[t._t("lastSaved"),t._v(" "),n("ul",[t._t("default"),t._v(" "),t._l(t.participantsPopover,(function(e){return n("li",{key:e.id,style:t.avatarStyle(e)},[n("AvatarWrapper",{attrs:{session:e,size:36}}),t._v(" "),n("span",{staticClass:"session-label"},[t._v("\n\t\t\t\t\t\t"+t._s(e.userId?e.displayName:e.guestName?e.guestName:t.t("text","Guest"))+"\n\t\t\t\t\t")]),t._v(" "),null===e.userId?n("span",{staticClass:"guest-label"},[t._v("("+t._s(t.t("text","guest"))+")")]):t._e()],1)}))],2)],2)]},proxy:!0}],null,!0)},[n("button",{directives:[{name:"tooltip",rawName:"v-tooltip.bottom",value:t.label,expression:"label",modifiers:{bottom:!0}}],staticClass:"avatar-list",attrs:{slot:"trigger",title:t.label,"aria-label":t.label},slot:"trigger"},[n("div",{staticClass:"avatardiv icon-group"}),t._v(" "),t._l(t.sessionsVisible,(function(t){return n("AvatarWrapper",{key:t.id,attrs:{session:t,size:40}})}))],2)])}),[],!1,null,"5131a104",null).exports}}]);
//# sourceMappingURL=editor-collab.js.map?v=48c45453e23323d8d41d