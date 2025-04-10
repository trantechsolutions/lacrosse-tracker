(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ll(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const we={},_s=[],jt=()=>{},Sg=()=>!1,ho=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),cl=t=>t.startsWith("onUpdate:"),qe=Object.assign,ul=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Tg=Object.prototype.hasOwnProperty,ce=(t,e)=>Tg.call(t,e),K=Array.isArray,ws=t=>fo(t)==="[object Map]",ih=t=>fo(t)==="[object Set]",Y=t=>typeof t=="function",Oe=t=>typeof t=="string",Nn=t=>typeof t=="symbol",Ce=t=>t!==null&&typeof t=="object",rh=t=>(Ce(t)||Y(t))&&Y(t.then)&&Y(t.catch),oh=Object.prototype.toString,fo=t=>oh.call(t),kg=t=>fo(t).slice(8,-1),ah=t=>fo(t)==="[object Object]",dl=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,hi=ll(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),po=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Pg=/-(\w)/g,Ct=po(t=>t.replace(Pg,(e,n)=>n?n.toUpperCase():"")),Ag=/\B([A-Z])/g,os=po(t=>t.replace(Ag,"-$1").toLowerCase()),mo=po(t=>t.charAt(0).toUpperCase()+t.slice(1)),zo=po(t=>t?`on${mo(t)}`:""),Tn=(t,e)=>!Object.is(t,e),Go=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},lh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Rg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let qc;const go=()=>qc||(qc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function hl(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Oe(s)?Mg(s):hl(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Oe(t)||Ce(t))return t}const xg=/;(?![^(]*\))/g,Og=/:([^]+)/,Ng=/\/\*[^]*?\*\//g;function Mg(t){const e={};return t.replace(Ng,"").split(xg).forEach(n=>{if(n){const s=n.split(Og);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function _o(t){let e="";if(Oe(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=_o(t[n]);s&&(e+=s+" ")}else if(Ce(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Dg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Lg=ll(Dg);function ch(t){return!!t||t===""}const uh=t=>!!(t&&t.__v_isRef===!0),be=t=>Oe(t)?t:t==null?"":K(t)||Ce(t)&&(t.toString===oh||!Y(t.toString))?uh(t)?be(t.value):JSON.stringify(t,dh,2):String(t),dh=(t,e)=>uh(e)?dh(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Ko(s,r)+" =>"]=i,n),{})}:ih(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Ko(n))}:Nn(e)?Ko(e):Ce(e)&&!K(e)&&!ah(e)?String(e):e,Ko=(t,e="")=>{var n;return Nn(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let ut;class Bg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=ut,!e&&ut&&(this.index=(ut.scopes||(ut.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=ut;try{return ut=this,e()}finally{ut=n}}}on(){ut=this}off(){ut=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Fg(){return ut}let ge;const Yo=new WeakSet;class hh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,ut&&ut.active&&ut.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Yo.has(this)&&(Yo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||ph(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,zc(this),mh(this);const e=ge,n=Rt;ge=this,Rt=!0;try{return this.fn()}finally{gh(this),ge=e,Rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)ml(e);this.deps=this.depsTail=void 0,zc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Yo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Ca(this)&&this.run()}get dirty(){return Ca(this)}}let fh=0,fi,pi;function ph(t,e=!1){if(t.flags|=8,e){t.next=pi,pi=t;return}t.next=fi,fi=t}function fl(){fh++}function pl(){if(--fh>0)return;if(pi){let e=pi;for(pi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;fi;){let e=fi;for(fi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function mh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function gh(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),ml(s),$g(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Ca(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(_h(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function _h(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Ti))return;t.globalVersion=Ti;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Ca(t)){t.flags&=-3;return}const n=ge,s=Rt;ge=t,Rt=!0;try{mh(t);const i=t.fn(t._value);(e.version===0||Tn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ge=n,Rt=s,gh(t),t.flags&=-3}}function ml(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)ml(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function $g(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Rt=!0;const wh=[];function Mn(){wh.push(Rt),Rt=!1}function Dn(){const t=wh.pop();Rt=t===void 0?!0:t}function zc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ge;ge=void 0;try{e()}finally{ge=n}}}let Ti=0;class Ug{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class gl{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ge||!Rt||ge===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ge)n=this.activeLink=new Ug(ge,this),ge.deps?(n.prevDep=ge.depsTail,ge.depsTail.nextDep=n,ge.depsTail=n):ge.deps=ge.depsTail=n,vh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ge.depsTail,n.nextDep=void 0,ge.depsTail.nextDep=n,ge.depsTail=n,ge.deps===n&&(ge.deps=s)}return n}trigger(e){this.version++,Ti++,this.notify(e)}notify(e){fl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{pl()}}}function vh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)vh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Ea=new WeakMap,Gn=Symbol(""),Ia=Symbol(""),ki=Symbol("");function He(t,e,n){if(Rt&&ge){let s=Ea.get(t);s||Ea.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new gl),i.map=s,i.key=n),i.track()}}function en(t,e,n,s,i,r){const o=Ea.get(t);if(!o){Ti++;return}const a=l=>{l&&l.trigger()};if(fl(),e==="clear")o.forEach(a);else{const l=K(t),c=l&&dl(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,h)=>{(h==="length"||h===ki||!Nn(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(ki)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Gn)),ws(t)&&a(o.get(Ia)));break;case"delete":l||(a(o.get(Gn)),ws(t)&&a(o.get(Ia)));break;case"set":ws(t)&&a(o.get(Gn));break}}pl()}function hs(t){const e=le(t);return e===t?e:(He(e,"iterate",ki),bt(t)?e:e.map(Ve))}function wo(t){return He(t=le(t),"iterate",ki),t}const Hg={__proto__:null,[Symbol.iterator](){return Qo(this,Symbol.iterator,Ve)},concat(...t){return hs(this).concat(...t.map(e=>K(e)?hs(e):e))},entries(){return Qo(this,"entries",t=>(t[1]=Ve(t[1]),t))},every(t,e){return Jt(this,"every",t,e,void 0,arguments)},filter(t,e){return Jt(this,"filter",t,e,n=>n.map(Ve),arguments)},find(t,e){return Jt(this,"find",t,e,Ve,arguments)},findIndex(t,e){return Jt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Jt(this,"findLast",t,e,Ve,arguments)},findLastIndex(t,e){return Jt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Jt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Jo(this,"includes",t)},indexOf(...t){return Jo(this,"indexOf",t)},join(t){return hs(this).join(t)},lastIndexOf(...t){return Jo(this,"lastIndexOf",t)},map(t,e){return Jt(this,"map",t,e,void 0,arguments)},pop(){return ii(this,"pop")},push(...t){return ii(this,"push",t)},reduce(t,...e){return Gc(this,"reduce",t,e)},reduceRight(t,...e){return Gc(this,"reduceRight",t,e)},shift(){return ii(this,"shift")},some(t,e){return Jt(this,"some",t,e,void 0,arguments)},splice(...t){return ii(this,"splice",t)},toReversed(){return hs(this).toReversed()},toSorted(t){return hs(this).toSorted(t)},toSpliced(...t){return hs(this).toSpliced(...t)},unshift(...t){return ii(this,"unshift",t)},values(){return Qo(this,"values",Ve)}};function Qo(t,e,n){const s=wo(t),i=s[e]();return s!==t&&!bt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Vg=Array.prototype;function Jt(t,e,n,s,i,r){const o=wo(t),a=o!==t&&!bt(t),l=o[e];if(l!==Vg[e]){const d=l.apply(t,r);return a?Ve(d):d}let c=n;o!==t&&(a?c=function(d,h){return n.call(this,Ve(d),h,t)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Gc(t,e,n,s){const i=wo(t);let r=n;return i!==t&&(bt(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Ve(a),l,t)}),i[e](r,...s)}function Jo(t,e,n){const s=le(t);He(s,"iterate",ki);const i=s[e](...n);return(i===-1||i===!1)&&vl(n[0])?(n[0]=le(n[0]),s[e](...n)):i}function ii(t,e,n=[]){Mn(),fl();const s=le(t)[e].apply(t,n);return pl(),Dn(),s}const Wg=ll("__proto__,__v_isRef,__isVue"),yh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(Nn));function jg(t){Nn(t)||(t=String(t));const e=le(this);return He(e,"has",t),e.hasOwnProperty(t)}class bh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?e_:Sh:r?Ih:Eh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=K(e);if(!i){let l;if(o&&(l=Hg[n]))return l;if(n==="hasOwnProperty")return jg}const a=Reflect.get(e,n,je(e)?e:s);return(Nn(n)?yh.has(n):Wg(n))||(i||He(e,"get",n),r)?a:je(a)?o&&dl(n)?a:a.value:Ce(a)?i?kh(a):qs(a):a}}class Ch extends bh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Qn(r);if(!bt(s)&&!Qn(s)&&(r=le(r),s=le(s)),!K(e)&&je(r)&&!je(s))return l?!1:(r.value=s,!0)}const o=K(e)&&dl(n)?Number(n)<e.length:ce(e,n),a=Reflect.set(e,n,s,je(e)?e:i);return e===le(i)&&(o?Tn(s,r)&&en(e,"set",n,s):en(e,"add",n,s)),a}deleteProperty(e,n){const s=ce(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&en(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!Nn(n)||!yh.has(n))&&He(e,"has",n),s}ownKeys(e){return He(e,"iterate",K(e)?"length":Gn),Reflect.ownKeys(e)}}class qg extends bh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const zg=new Ch,Gg=new qg,Kg=new Ch(!0);const Sa=t=>t,lr=t=>Reflect.getPrototypeOf(t);function Yg(t,e,n){return function(...s){const i=this.__v_raw,r=le(i),o=ws(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?Sa:e?Ta:Ve;return!e&&He(r,"iterate",l?Ia:Gn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function cr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function Qg(t,e){const n={get(i){const r=this.__v_raw,o=le(r),a=le(i);t||(Tn(i,a)&&He(o,"get",i),He(o,"get",a));const{has:l}=lr(o),c=e?Sa:t?Ta:Ve;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&He(le(i),"iterate",Gn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=le(r),a=le(i);return t||(Tn(i,a)&&He(o,"has",i),He(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=le(a),c=e?Sa:t?Ta:Ve;return!t&&He(l,"iterate",Gn),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return qe(n,t?{add:cr("add"),set:cr("set"),delete:cr("delete"),clear:cr("clear")}:{add(i){!e&&!bt(i)&&!Qn(i)&&(i=le(i));const r=le(this);return lr(r).has.call(r,i)||(r.add(i),en(r,"add",i,i)),this},set(i,r){!e&&!bt(r)&&!Qn(r)&&(r=le(r));const o=le(this),{has:a,get:l}=lr(o);let c=a.call(o,i);c||(i=le(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Tn(r,u)&&en(o,"set",i,r):en(o,"add",i,r),this},delete(i){const r=le(this),{has:o,get:a}=lr(r);let l=o.call(r,i);l||(i=le(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&en(r,"delete",i,void 0),c},clear(){const i=le(this),r=i.size!==0,o=i.clear();return r&&en(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Yg(i,t,e)}),n}function _l(t,e){const n=Qg(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ce(n,i)&&i in s?n:s,i,r)}const Jg={get:_l(!1,!1)},Xg={get:_l(!1,!0)},Zg={get:_l(!0,!1)};const Eh=new WeakMap,Ih=new WeakMap,Sh=new WeakMap,e_=new WeakMap;function t_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function n_(t){return t.__v_skip||!Object.isExtensible(t)?0:t_(kg(t))}function qs(t){return Qn(t)?t:wl(t,!1,zg,Jg,Eh)}function Th(t){return wl(t,!1,Kg,Xg,Ih)}function kh(t){return wl(t,!0,Gg,Zg,Sh)}function wl(t,e,n,s,i){if(!Ce(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=n_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function vs(t){return Qn(t)?vs(t.__v_raw):!!(t&&t.__v_isReactive)}function Qn(t){return!!(t&&t.__v_isReadonly)}function bt(t){return!!(t&&t.__v_isShallow)}function vl(t){return t?!!t.__v_raw:!1}function le(t){const e=t&&t.__v_raw;return e?le(e):t}function s_(t){return!ce(t,"__v_skip")&&Object.isExtensible(t)&&lh(t,"__v_skip",!0),t}const Ve=t=>Ce(t)?qs(t):t,Ta=t=>Ce(t)?kh(t):t;function je(t){return t?t.__v_isRef===!0:!1}function Ie(t){return Ph(t,!1)}function i_(t){return Ph(t,!0)}function Ph(t,e){return je(t)?t:new r_(t,e)}class r_{constructor(e,n){this.dep=new gl,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:le(e),this._value=n?e:Ve(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||bt(e)||Qn(e);e=s?e:le(e),Tn(e,n)&&(this._rawValue=e,this._value=s?e:Ve(e),this.dep.trigger())}}function ys(t){return je(t)?t.value:t}const o_={get:(t,e,n)=>e==="__v_raw"?t:ys(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return je(i)&&!je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Ah(t){return vs(t)?t:new Proxy(t,o_)}class a_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new gl(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Ti-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ge!==this)return ph(this,!0),!0}get value(){const e=this.dep.track();return _h(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function l_(t,e,n=!1){let s,i;return Y(t)?s=t:(s=t.get,i=t.set),new a_(s,i,n)}const ur={},Tr=new WeakMap;let Vn;function c_(t,e=!1,n=Vn){if(n){let s=Tr.get(n);s||Tr.set(n,s=[]),s.push(t)}}function u_(t,e,n=we){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=D=>i?D:bt(D)||i===!1||i===0?vn(D,1):vn(D);let u,d,h,m,w=!1,E=!1;if(je(t)?(d=()=>t.value,w=bt(t)):vs(t)?(d=()=>c(t),w=!0):K(t)?(E=!0,w=t.some(D=>vs(D)||bt(D)),d=()=>t.map(D=>{if(je(D))return D.value;if(vs(D))return c(D);if(Y(D))return l?l(D,2):D()})):Y(t)?e?d=l?()=>l(t,2):t:d=()=>{if(h){Mn();try{h()}finally{Dn()}}const D=Vn;Vn=u;try{return l?l(t,3,[m]):t(m)}finally{Vn=D}}:d=jt,e&&i){const D=d,se=i===!0?1/0:i;d=()=>vn(D(),se)}const T=Fg(),B=()=>{u.stop(),T&&T.active&&ul(T.effects,u)};if(r&&e){const D=e;e=(...se)=>{D(...se),B()}}let M=E?new Array(t.length).fill(ur):ur;const F=D=>{if(!(!(u.flags&1)||!u.dirty&&!D))if(e){const se=u.run();if(i||w||(E?se.some((Ee,de)=>Tn(Ee,M[de])):Tn(se,M))){h&&h();const Ee=Vn;Vn=u;try{const de=[se,M===ur?void 0:E&&M[0]===ur?[]:M,m];l?l(e,3,de):e(...de),M=se}finally{Vn=Ee}}}else u.run()};return a&&a(F),u=new hh(d),u.scheduler=o?()=>o(F,!1):F,m=D=>c_(D,!1,u),h=u.onStop=()=>{const D=Tr.get(u);if(D){if(l)l(D,4);else for(const se of D)se();Tr.delete(u)}},e?s?F(!0):M=u.run():o?o(F.bind(null,!0),!0):u.run(),B.pause=u.pause.bind(u),B.resume=u.resume.bind(u),B.stop=B,B}function vn(t,e=1/0,n){if(e<=0||!Ce(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,je(t))vn(t.value,e,n);else if(K(t))for(let s=0;s<t.length;s++)vn(t[s],e,n);else if(ih(t)||ws(t))t.forEach(s=>{vn(s,e,n)});else if(ah(t)){for(const s in t)vn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&vn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function ji(t,e,n,s){try{return s?t(...s):t()}catch(i){vo(i,e,n)}}function zt(t,e,n,s){if(Y(t)){const i=ji(t,e,n,s);return i&&rh(i)&&i.catch(r=>{vo(r,e,n)}),i}if(K(t)){const i=[];for(let r=0;r<t.length;r++)i.push(zt(t[r],e,n,s));return i}}function vo(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||we;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Mn(),ji(r,null,10,[t,l,c]),Dn();return}}d_(t,n,i,s,o)}function d_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ke=[];let Ht=-1;const bs=[];let gn=null,ps=0;const Rh=Promise.resolve();let kr=null;function xh(t){const e=kr||Rh;return t?e.then(this?t.bind(this):t):e}function h_(t){let e=Ht+1,n=Ke.length;for(;e<n;){const s=e+n>>>1,i=Ke[s],r=Pi(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function yl(t){if(!(t.flags&1)){const e=Pi(t),n=Ke[Ke.length-1];!n||!(t.flags&2)&&e>=Pi(n)?Ke.push(t):Ke.splice(h_(e),0,t),t.flags|=1,Oh()}}function Oh(){kr||(kr=Rh.then(Mh))}function f_(t){K(t)?bs.push(...t):gn&&t.id===-1?gn.splice(ps+1,0,t):t.flags&1||(bs.push(t),t.flags|=1),Oh()}function Kc(t,e,n=Ht+1){for(;n<Ke.length;n++){const s=Ke[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ke.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Nh(t){if(bs.length){const e=[...new Set(bs)].sort((n,s)=>Pi(n)-Pi(s));if(bs.length=0,gn){gn.push(...e);return}for(gn=e,ps=0;ps<gn.length;ps++){const n=gn[ps];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gn=null,ps=0}}const Pi=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Mh(t){try{for(Ht=0;Ht<Ke.length;Ht++){const e=Ke[Ht];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),ji(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ht<Ke.length;Ht++){const e=Ke[Ht];e&&(e.flags&=-2)}Ht=-1,Ke.length=0,Nh(),kr=null,(Ke.length||bs.length)&&Mh()}}let kt=null,Dh=null;function Pr(t){const e=kt;return kt=t,Dh=t&&t.type.__scopeId||null,e}function ka(t,e=kt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&ru(-1);const r=Pr(e);let o;try{o=t(...i)}finally{Pr(r),s._d&&ru(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function $n(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Mn(),zt(l,n,8,[t.el,a,t,e]),Dn())}}const p_=Symbol("_vte"),m_=t=>t.__isTeleport;function bl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,bl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Lh(t,e){return Y(t)?qe({name:t.name},e,{setup:t}):t}function Bh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Ar(t,e,n,s,i=!1){if(K(t)){t.forEach((w,E)=>Ar(w,e&&(K(e)?e[E]:e),n,s,i));return}if(mi(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Ar(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?kl(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===we?a.refs={}:a.refs,d=a.setupState,h=le(d),m=d===we?()=>!1:w=>ce(h,w);if(c!=null&&c!==l&&(Oe(c)?(u[c]=null,m(c)&&(d[c]=null)):je(c)&&(c.value=null)),Y(l))ji(l,a,12,[o,u]);else{const w=Oe(l),E=je(l);if(w||E){const T=()=>{if(t.f){const B=w?m(l)?d[l]:u[l]:l.value;i?K(B)&&ul(B,r):K(B)?B.includes(r)||B.push(r):w?(u[l]=[r],m(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else w?(u[l]=o,m(l)&&(d[l]=o)):E&&(l.value=o,t.k&&(u[t.k]=o))};o?(T.id=-1,ct(T,n)):T()}}}go().requestIdleCallback;go().cancelIdleCallback;const mi=t=>!!t.type.__asyncLoader,Fh=t=>t.type.__isKeepAlive;function g_(t,e){$h(t,"a",e)}function __(t,e){$h(t,"da",e)}function $h(t,e,n=We){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(yo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Fh(i.parent.vnode)&&w_(s,e,n,i),i=i.parent}}function w_(t,e,n,s){const i=yo(e,t,s,!0);El(()=>{ul(s[e],i)},n)}function yo(t,e,n=We,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Mn();const a=qi(n),l=zt(e,n,t,o);return a(),Dn(),l});return s?i.unshift(r):i.push(r),r}}const hn=t=>(e,n=We)=>{(!xi||t==="sp")&&yo(t,(...s)=>e(...s),n)},v_=hn("bm"),Cl=hn("m"),y_=hn("bu"),b_=hn("u"),C_=hn("bum"),El=hn("um"),E_=hn("sp"),I_=hn("rtg"),S_=hn("rtc");function T_(t,e=We){yo("ec",t,e)}const k_="components";function Yc(t,e){return A_(k_,t,!0,e)||t}const P_=Symbol.for("v-ndc");function A_(t,e,n=!0,s=!1){const i=kt||We;if(i){const r=i.type;{const a=mw(r,!1);if(a&&(a===e||a===Ct(e)||a===mo(Ct(e))))return r}const o=Qc(i[t]||r[t],e)||Qc(i.appContext[t],e);return!o&&s?r:o}}function Qc(t,e){return t&&(t[e]||t[Ct(e)]||t[mo(Ct(e))])}function Il(t,e,n,s){let i;const r=n,o=K(t);if(o||Oe(t)){const a=o&&vs(t);let l=!1;a&&(l=!bt(t),t=wo(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Ve(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(Ce(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Pa=t=>t?lf(t)?kl(t):Pa(t.parent):null,gi=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Pa(t.parent),$root:t=>Pa(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Hh(t),$forceUpdate:t=>t.f||(t.f=()=>{yl(t.update)}),$nextTick:t=>t.n||(t.n=xh.bind(t.proxy)),$watch:t=>Q_.bind(t)}),Xo=(t,e)=>t!==we&&!t.__isScriptSetup&&ce(t,e),R_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(Xo(s,e))return o[e]=1,s[e];if(i!==we&&ce(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ce(c,e))return o[e]=3,r[e];if(n!==we&&ce(n,e))return o[e]=4,n[e];Aa&&(o[e]=0)}}const u=gi[e];let d,h;if(u)return e==="$attrs"&&He(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==we&&ce(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ce(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return Xo(i,e)?(i[e]=n,!0):s!==we&&ce(s,e)?(s[e]=n,!0):ce(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==we&&ce(t,o)||Xo(e,o)||(a=r[0])&&ce(a,o)||ce(s,o)||ce(gi,o)||ce(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ce(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Jc(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let Aa=!0;function x_(t){const e=Hh(t),n=t.proxy,s=t.ctx;Aa=!1,e.beforeCreate&&Xc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:w,activated:E,deactivated:T,beforeDestroy:B,beforeUnmount:M,destroyed:F,unmounted:D,render:se,renderTracked:Ee,renderTriggered:de,errorCaptured:et,serverPrefetch:tt,expose:nt,inheritAttrs:Dt,components:Qt,directives:gt,filters:Fn}=e;if(c&&O_(c,s,null),o)for(const L in o){const $=o[L];Y($)&&(s[L]=$.bind(n))}if(i){const L=i.call(n,n);Ce(L)&&(t.data=qs(L))}if(Aa=!0,r)for(const L in r){const $=r[L],re=Y($)?$.bind(n,n):Y($.get)?$.get.bind(n,n):jt,Ae=!Y($)&&Y($.set)?$.set.bind(n):jt,_t=It({get:re,set:Ae});Object.defineProperty(s,L,{enumerable:!0,configurable:!0,get:()=>_t.value,set:Ue=>_t.value=Ue})}if(a)for(const L in a)Uh(a[L],s,n,L);if(l){const L=Y(l)?l.call(n):l;Reflect.ownKeys(L).forEach($=>{mr($,L[$])})}u&&Xc(u,t,"c");function O(L,$){K($)?$.forEach(re=>L(re.bind(n))):$&&L($.bind(n))}if(O(v_,d),O(Cl,h),O(y_,m),O(b_,w),O(g_,E),O(__,T),O(T_,et),O(S_,Ee),O(I_,de),O(C_,M),O(El,D),O(E_,tt),K(nt))if(nt.length){const L=t.exposed||(t.exposed={});nt.forEach($=>{Object.defineProperty(L,$,{get:()=>n[$],set:re=>n[$]=re})})}else t.exposed||(t.exposed={});se&&t.render===jt&&(t.render=se),Dt!=null&&(t.inheritAttrs=Dt),Qt&&(t.components=Qt),gt&&(t.directives=gt),tt&&Bh(t)}function O_(t,e,n=jt){K(t)&&(t=Ra(t));for(const s in t){const i=t[s];let r;Ce(i)?"default"in i?r=on(i.from||s,i.default,!0):r=on(i.from||s):r=on(i),je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Xc(t,e,n){zt(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Uh(t,e,n,s){let i=s.includes(".")?tf(n,s):()=>n[s];if(Oe(t)){const r=e[t];Y(r)&&Es(i,r)}else if(Y(t))Es(i,t.bind(n));else if(Ce(t))if(K(t))t.forEach(r=>Uh(r,e,n,s));else{const r=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(r)&&Es(i,r,t)}}function Hh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Rr(l,c,o,!0)),Rr(l,e,o)),Ce(e)&&r.set(e,l),l}function Rr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Rr(t,r,n,!0),i&&i.forEach(o=>Rr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=N_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const N_={data:Zc,props:eu,emits:eu,methods:di,computed:di,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:di,directives:di,watch:D_,provide:Zc,inject:M_};function Zc(t,e){return e?t?function(){return qe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function M_(t,e){return di(Ra(t),Ra(e))}function Ra(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function di(t,e){return t?qe(Object.create(null),t,e):e}function eu(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:qe(Object.create(null),Jc(t),Jc(e??{})):e}function D_(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function Vh(){return{app:null,config:{isNativeTag:Sg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let L_=0;function B_(t,e){return function(s,i=null){Y(s)||(s=qe({},s)),i!=null&&!Ce(i)&&(i=null);const r=Vh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:L_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:_w,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...d)):Y(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!l){const m=c._ceVNode||Se(s,i);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(m,u,h),l=!0,c._container=u,u.__vue_app__=c,kl(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(zt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Cs;Cs=c;try{return u()}finally{Cs=d}}};return c}}let Cs=null;function mr(t,e){if(We){let n=We.provides;const s=We.parent&&We.parent.provides;s===n&&(n=We.provides=Object.create(s)),n[t]=e}}function on(t,e,n=!1){const s=We||kt;if(s||Cs){const i=Cs?Cs._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}const Wh={},jh=()=>Object.create(Wh),qh=t=>Object.getPrototypeOf(t)===Wh;function F_(t,e,n,s=!1){const i={},r=jh();t.propsDefaults=Object.create(null),zh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Th(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function $_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=le(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(bo(t.emitsOptions,h))continue;const m=e[h];if(l)if(ce(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const w=Ct(h);i[w]=xa(l,a,w,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{zh(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ce(e,d)&&((u=os(d))===d||!ce(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=xa(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ce(e,d))&&(delete r[d],c=!0)}c&&en(t.attrs,"set","")}function zh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(hi(l))continue;const c=e[l];let u;i&&ce(i,u=Ct(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:bo(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=le(n),c=a||we;for(let u=0;u<r.length;u++){const d=r[u];n[d]=xa(i,l,d,c[d],t,!ce(c,d))}}return o}function xa(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ce(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=qi(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===os(n))&&(s=!0))}return s}const U_=new WeakMap;function Gh(t,e,n=!1){const s=n?U_:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=d=>{l=!0;const[h,m]=Gh(d,e,!0);qe(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ce(t)&&s.set(t,_s),_s;if(K(r))for(let u=0;u<r.length;u++){const d=Ct(r[u]);tu(d)&&(o[d]=we)}else if(r)for(const u in r){const d=Ct(u);if(tu(d)){const h=r[u],m=o[d]=K(h)||Y(h)?{type:h}:qe({},h),w=m.type;let E=!1,T=!0;if(K(w))for(let B=0;B<w.length;++B){const M=w[B],F=Y(M)&&M.name;if(F==="Boolean"){E=!0;break}else F==="String"&&(T=!1)}else E=Y(w)&&w.name==="Boolean";m[0]=E,m[1]=T,(E||ce(m,"default"))&&a.push(d)}}const c=[o,a];return Ce(t)&&s.set(t,c),c}function tu(t){return t[0]!=="$"&&!hi(t)}const Kh=t=>t[0]==="_"||t==="$stable",Sl=t=>K(t)?t.map(Wt):[Wt(t)],H_=(t,e,n)=>{if(e._n)return e;const s=ka((...i)=>Sl(e(...i)),n);return s._c=!1,s},Yh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(Kh(i))continue;const r=t[i];if(Y(r))e[i]=H_(i,r,s);else if(r!=null){const o=Sl(r);e[i]=()=>o}}},Qh=(t,e)=>{const n=Sl(e);t.slots.default=()=>n},Jh=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},V_=(t,e,n)=>{const s=t.slots=jh();if(t.vnode.shapeFlag&32){const i=e._;i?(Jh(s,e,n),n&&lh(s,"_",i,!0)):Yh(e,s)}else e&&Qh(t,e)},W_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=we;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Jh(i,e,n):(r=!e.$stable,Yh(e,i)),o=e}else e&&(Qh(t,e),o={default:1});if(r)for(const a in i)!Kh(a)&&o[a]==null&&delete i[a]},ct=sw;function j_(t){return q_(t)}function q_(t,e){const n=go();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=jt,insertStaticContent:w}=t,E=(f,p,g,v=null,C=null,b=null,A=void 0,P=null,k=!!p.dynamicChildren)=>{if(f===p)return;f&&!ri(f,p)&&(v=y(f),Ue(f,C,b,!0),f=null),p.patchFlag===-2&&(k=!1,p.dynamicChildren=null);const{type:I,ref:j,shapeFlag:x}=p;switch(I){case Co:T(f,p,g,v);break;case Jn:B(f,p,g,v);break;case ea:f==null&&M(p,g,v,A);break;case vt:Qt(f,p,g,v,C,b,A,P,k);break;default:x&1?se(f,p,g,v,C,b,A,P,k):x&6?gt(f,p,g,v,C,b,A,P,k):(x&64||x&128)&&I.process(f,p,g,v,C,b,A,P,k,U)}j!=null&&C&&Ar(j,f&&f.ref,b,p||f,!p)},T=(f,p,g,v)=>{if(f==null)s(p.el=a(p.children),g,v);else{const C=p.el=f.el;p.children!==f.children&&c(C,p.children)}},B=(f,p,g,v)=>{f==null?s(p.el=l(p.children||""),g,v):p.el=f.el},M=(f,p,g,v)=>{[f.el,f.anchor]=w(f.children,p,g,v,f.el,f.anchor)},F=({el:f,anchor:p},g,v)=>{let C;for(;f&&f!==p;)C=h(f),s(f,g,v),f=C;s(p,g,v)},D=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},se=(f,p,g,v,C,b,A,P,k)=>{p.type==="svg"?A="svg":p.type==="math"&&(A="mathml"),f==null?Ee(p,g,v,C,b,A,P,k):tt(f,p,C,b,A,P,k)},Ee=(f,p,g,v,C,b,A,P)=>{let k,I;const{props:j,shapeFlag:x,transition:V,dirs:G}=f;if(k=f.el=o(f.type,b,j&&j.is,j),x&8?u(k,f.children):x&16&&et(f.children,k,null,v,C,Zo(f,b),A,P),G&&$n(f,null,v,"created"),de(k,f,f.scopeId,A,v),j){for(const me in j)me!=="value"&&!hi(me)&&r(k,me,null,j[me],b,v);"value"in j&&r(k,"value",null,j.value,b),(I=j.onVnodeBeforeMount)&&Ut(I,v,f)}G&&$n(f,null,v,"beforeMount");const ee=z_(C,V);ee&&V.beforeEnter(k),s(k,p,g),((I=j&&j.onVnodeMounted)||ee||G)&&ct(()=>{I&&Ut(I,v,f),ee&&V.enter(k),G&&$n(f,null,v,"mounted")},C)},de=(f,p,g,v,C)=>{if(g&&m(f,g),v)for(let b=0;b<v.length;b++)m(f,v[b]);if(C){let b=C.subTree;if(p===b||sf(b.type)&&(b.ssContent===p||b.ssFallback===p)){const A=C.vnode;de(f,A,A.scopeId,A.slotScopeIds,C.parent)}}},et=(f,p,g,v,C,b,A,P,k=0)=>{for(let I=k;I<f.length;I++){const j=f[I]=P?_n(f[I]):Wt(f[I]);E(null,j,p,g,v,C,b,A,P)}},tt=(f,p,g,v,C,b,A)=>{const P=p.el=f.el;let{patchFlag:k,dynamicChildren:I,dirs:j}=p;k|=f.patchFlag&16;const x=f.props||we,V=p.props||we;let G;if(g&&Un(g,!1),(G=V.onVnodeBeforeUpdate)&&Ut(G,g,p,f),j&&$n(p,f,g,"beforeUpdate"),g&&Un(g,!0),(x.innerHTML&&V.innerHTML==null||x.textContent&&V.textContent==null)&&u(P,""),I?nt(f.dynamicChildren,I,P,g,v,Zo(p,C),b):A||$(f,p,P,null,g,v,Zo(p,C),b,!1),k>0){if(k&16)Dt(P,x,V,g,C);else if(k&2&&x.class!==V.class&&r(P,"class",null,V.class,C),k&4&&r(P,"style",x.style,V.style,C),k&8){const ee=p.dynamicProps;for(let me=0;me<ee.length;me++){const ue=ee[me],at=x[ue],st=V[ue];(st!==at||ue==="value")&&r(P,ue,at,st,C,g)}}k&1&&f.children!==p.children&&u(P,p.children)}else!A&&I==null&&Dt(P,x,V,g,C);((G=V.onVnodeUpdated)||j)&&ct(()=>{G&&Ut(G,g,p,f),j&&$n(p,f,g,"updated")},v)},nt=(f,p,g,v,C,b,A)=>{for(let P=0;P<p.length;P++){const k=f[P],I=p[P],j=k.el&&(k.type===vt||!ri(k,I)||k.shapeFlag&70)?d(k.el):g;E(k,I,j,null,v,C,b,A,!0)}},Dt=(f,p,g,v,C)=>{if(p!==g){if(p!==we)for(const b in p)!hi(b)&&!(b in g)&&r(f,b,p[b],null,C,v);for(const b in g){if(hi(b))continue;const A=g[b],P=p[b];A!==P&&b!=="value"&&r(f,b,P,A,C,v)}"value"in g&&r(f,"value",p.value,g.value,C)}},Qt=(f,p,g,v,C,b,A,P,k)=>{const I=p.el=f?f.el:a(""),j=p.anchor=f?f.anchor:a("");let{patchFlag:x,dynamicChildren:V,slotScopeIds:G}=p;G&&(P=P?P.concat(G):G),f==null?(s(I,g,v),s(j,g,v),et(p.children||[],g,j,C,b,A,P,k)):x>0&&x&64&&V&&f.dynamicChildren?(nt(f.dynamicChildren,V,g,C,b,A,P),(p.key!=null||C&&p===C.subTree)&&Xh(f,p,!0)):$(f,p,g,j,C,b,A,P,k)},gt=(f,p,g,v,C,b,A,P,k)=>{p.slotScopeIds=P,f==null?p.shapeFlag&512?C.ctx.activate(p,g,v,A,k):Fn(p,g,v,C,b,A,k):fn(f,p,k)},Fn=(f,p,g,v,C,b,A)=>{const P=f.component=uw(f,v,C);if(Fh(f)&&(P.ctx.renderer=U),dw(P,!1,A),P.asyncDep){if(C&&C.registerDep(P,O,A),!f.el){const k=P.subTree=Se(Jn);B(null,k,p,g)}}else O(P,f,p,g,C,b,A)},fn=(f,p,g)=>{const v=p.component=f.component;if(tw(f,p,g))if(v.asyncDep&&!v.asyncResolved){L(v,p,g);return}else v.next=p,v.update();else p.el=f.el,v.vnode=p},O=(f,p,g,v,C,b,A)=>{const P=()=>{if(f.isMounted){let{next:x,bu:V,u:G,parent:ee,vnode:me}=f;{const Ft=Zh(f);if(Ft){x&&(x.el=me.el,L(f,x,A)),Ft.asyncDep.then(()=>{f.isUnmounted||P()});return}}let ue=x,at;Un(f,!1),x?(x.el=me.el,L(f,x,A)):x=me,V&&Go(V),(at=x.props&&x.props.onVnodeBeforeUpdate)&&Ut(at,ee,x,me),Un(f,!0);const st=su(f),Bt=f.subTree;f.subTree=st,E(Bt,st,d(Bt.el),y(Bt),f,C,b),x.el=st.el,ue===null&&nw(f,st.el),G&&ct(G,C),(at=x.props&&x.props.onVnodeUpdated)&&ct(()=>Ut(at,ee,x,me),C)}else{let x;const{el:V,props:G}=p,{bm:ee,m:me,parent:ue,root:at,type:st}=f,Bt=mi(p);Un(f,!1),ee&&Go(ee),!Bt&&(x=G&&G.onVnodeBeforeMount)&&Ut(x,ue,p),Un(f,!0);{at.ce&&at.ce._injectChildStyle(st);const Ft=f.subTree=su(f);E(null,Ft,g,v,f,C,b),p.el=Ft.el}if(me&&ct(me,C),!Bt&&(x=G&&G.onVnodeMounted)){const Ft=p;ct(()=>Ut(x,ue,Ft),C)}(p.shapeFlag&256||ue&&mi(ue.vnode)&&ue.vnode.shapeFlag&256)&&f.a&&ct(f.a,C),f.isMounted=!0,p=g=v=null}};f.scope.on();const k=f.effect=new hh(P);f.scope.off();const I=f.update=k.run.bind(k),j=f.job=k.runIfDirty.bind(k);j.i=f,j.id=f.uid,k.scheduler=()=>yl(j),Un(f,!0),I()},L=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,$_(f,p.props,v,g),W_(f,p.children,g),Mn(),Kc(f),Dn()},$=(f,p,g,v,C,b,A,P,k=!1)=>{const I=f&&f.children,j=f?f.shapeFlag:0,x=p.children,{patchFlag:V,shapeFlag:G}=p;if(V>0){if(V&128){Ae(I,x,g,v,C,b,A,P,k);return}else if(V&256){re(I,x,g,v,C,b,A,P,k);return}}G&8?(j&16&&wt(I,C,b),x!==I&&u(g,x)):j&16?G&16?Ae(I,x,g,v,C,b,A,P,k):wt(I,C,b,!0):(j&8&&u(g,""),G&16&&et(x,g,v,C,b,A,P,k))},re=(f,p,g,v,C,b,A,P,k)=>{f=f||_s,p=p||_s;const I=f.length,j=p.length,x=Math.min(I,j);let V;for(V=0;V<x;V++){const G=p[V]=k?_n(p[V]):Wt(p[V]);E(f[V],G,g,null,C,b,A,P,k)}I>j?wt(f,C,b,!0,!1,x):et(p,g,v,C,b,A,P,k,x)},Ae=(f,p,g,v,C,b,A,P,k)=>{let I=0;const j=p.length;let x=f.length-1,V=j-1;for(;I<=x&&I<=V;){const G=f[I],ee=p[I]=k?_n(p[I]):Wt(p[I]);if(ri(G,ee))E(G,ee,g,null,C,b,A,P,k);else break;I++}for(;I<=x&&I<=V;){const G=f[x],ee=p[V]=k?_n(p[V]):Wt(p[V]);if(ri(G,ee))E(G,ee,g,null,C,b,A,P,k);else break;x--,V--}if(I>x){if(I<=V){const G=V+1,ee=G<j?p[G].el:v;for(;I<=V;)E(null,p[I]=k?_n(p[I]):Wt(p[I]),g,ee,C,b,A,P,k),I++}}else if(I>V)for(;I<=x;)Ue(f[I],C,b,!0),I++;else{const G=I,ee=I,me=new Map;for(I=ee;I<=V;I++){const lt=p[I]=k?_n(p[I]):Wt(p[I]);lt.key!=null&&me.set(lt.key,I)}let ue,at=0;const st=V-ee+1;let Bt=!1,Ft=0;const si=new Array(st);for(I=0;I<st;I++)si[I]=0;for(I=G;I<=x;I++){const lt=f[I];if(at>=st){Ue(lt,C,b,!0);continue}let $t;if(lt.key!=null)$t=me.get(lt.key);else for(ue=ee;ue<=V;ue++)if(si[ue-ee]===0&&ri(lt,p[ue])){$t=ue;break}$t===void 0?Ue(lt,C,b,!0):(si[$t-ee]=I+1,$t>=Ft?Ft=$t:Bt=!0,E(lt,p[$t],g,null,C,b,A,P,k),at++)}const Wc=Bt?G_(si):_s;for(ue=Wc.length-1,I=st-1;I>=0;I--){const lt=ee+I,$t=p[lt],jc=lt+1<j?p[lt+1].el:v;si[I]===0?E(null,$t,g,jc,C,b,A,P,k):Bt&&(ue<0||I!==Wc[ue]?_t($t,g,jc,2):ue--)}}},_t=(f,p,g,v,C=null)=>{const{el:b,type:A,transition:P,children:k,shapeFlag:I}=f;if(I&6){_t(f.component.subTree,p,g,v);return}if(I&128){f.suspense.move(p,g,v);return}if(I&64){A.move(f,p,g,U);return}if(A===vt){s(b,p,g);for(let x=0;x<k.length;x++)_t(k[x],p,g,v);s(f.anchor,p,g);return}if(A===ea){F(f,p,g);return}if(v!==2&&I&1&&P)if(v===0)P.beforeEnter(b),s(b,p,g),ct(()=>P.enter(b),C);else{const{leave:x,delayLeave:V,afterLeave:G}=P,ee=()=>s(b,p,g),me=()=>{x(b,()=>{ee(),G&&G()})};V?V(b,ee,me):me()}else s(b,p,g)},Ue=(f,p,g,v=!1,C=!1)=>{const{type:b,props:A,ref:P,children:k,dynamicChildren:I,shapeFlag:j,patchFlag:x,dirs:V,cacheIndex:G}=f;if(x===-2&&(C=!1),P!=null&&Ar(P,null,g,f,!0),G!=null&&(p.renderCache[G]=void 0),j&256){p.ctx.deactivate(f);return}const ee=j&1&&V,me=!mi(f);let ue;if(me&&(ue=A&&A.onVnodeBeforeUnmount)&&Ut(ue,p,f),j&6)ar(f.component,g,v);else{if(j&128){f.suspense.unmount(g,v);return}ee&&$n(f,null,p,"beforeUnmount"),j&64?f.type.remove(f,p,g,U,v):I&&!I.hasOnce&&(b!==vt||x>0&&x&64)?wt(I,p,g,!1,!0):(b===vt&&x&384||!C&&j&16)&&wt(k,p,g),v&&Lt(f)}(me&&(ue=A&&A.onVnodeUnmounted)||ee)&&ct(()=>{ue&&Ut(ue,p,f),ee&&$n(f,null,p,"unmounted")},g)},Lt=f=>{const{type:p,el:g,anchor:v,transition:C}=f;if(p===vt){ds(g,v);return}if(p===ea){D(f);return}const b=()=>{i(g),C&&!C.persisted&&C.afterLeave&&C.afterLeave()};if(f.shapeFlag&1&&C&&!C.persisted){const{leave:A,delayLeave:P}=C,k=()=>A(g,b);P?P(f.el,b,k):k()}else b()},ds=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},ar=(f,p,g)=>{const{bum:v,scope:C,job:b,subTree:A,um:P,m:k,a:I}=f;nu(k),nu(I),v&&Go(v),C.stop(),b&&(b.flags|=8,Ue(A,f,p,g)),P&&ct(P,p),ct(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},wt=(f,p,g,v=!1,C=!1,b=0)=>{for(let A=b;A<f.length;A++)Ue(f[A],p,g,v,C)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=h(f.anchor||f.el),g=p&&p[p_];return g?h(g):p};let N=!1;const R=(f,p,g)=>{f==null?p._vnode&&Ue(p._vnode,null,null,!0):E(p._vnode||null,f,p,null,null,null,g),p._vnode=f,N||(N=!0,Kc(),Nh(),N=!1)},U={p:E,um:Ue,m:_t,r:Lt,mt:Fn,mc:et,pc:$,pbc:nt,n:y,o:t};return{render:R,hydrate:void 0,createApp:B_(R)}}function Zo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Un({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function z_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Xh(t,e,n=!1){const s=t.children,i=e.children;if(K(s)&&K(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=_n(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Xh(o,a)),a.type===Co&&(a.el=o.el)}}function G_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Zh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Zh(e)}function nu(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const K_=Symbol.for("v-scx"),Y_=()=>on(K_);function Es(t,e,n){return ef(t,e,n)}function ef(t,e,n=we){const{immediate:s,deep:i,flush:r,once:o}=n,a=qe({},n),l=e&&s||!e&&r!=="post";let c;if(xi){if(r==="sync"){const m=Y_();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=jt,m.resume=jt,m.pause=jt,m}}const u=We;a.call=(m,w,E)=>zt(m,u,w,E);let d=!1;r==="post"?a.scheduler=m=>{ct(m,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(m,w)=>{w?m():yl(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=u_(t,e,a);return xi&&(c?c.push(h):l&&h()),h}function Q_(t,e,n){const s=this.proxy,i=Oe(t)?t.includes(".")?tf(s,t):()=>s[t]:t.bind(s,s);let r;Y(e)?r=e:(r=e.handler,n=e);const o=qi(this),a=ef(i,r.bind(s),n);return o(),a}function tf(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const J_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Ct(e)}Modifiers`]||t[`${os(e)}Modifiers`];function X_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||we;let i=n;const r=e.startsWith("update:"),o=r&&J_(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>Oe(u)?u.trim():u)),o.number&&(i=n.map(Rg)));let a,l=s[a=zo(e)]||s[a=zo(Ct(e))];!l&&r&&(l=s[a=zo(os(e))]),l&&zt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(c,t,6,i)}}function nf(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=nf(c,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ce(t)&&s.set(t,null),null):(K(r)?r.forEach(l=>o[l]=null):qe(o,r),Ce(t)&&s.set(t,o),o)}function bo(t,e){return!t||!ho(e)?!1:(e=e.slice(2).replace(/Once$/,""),ce(t,e[0].toLowerCase()+e.slice(1))||ce(t,os(e))||ce(t,e))}function su(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:m,ctx:w,inheritAttrs:E}=t,T=Pr(t);let B,M;try{if(n.shapeFlag&4){const D=i||s,se=D;B=Wt(c.call(se,D,u,d,m,h,w)),M=a}else{const D=e;B=Wt(D.length>1?D(d,{attrs:a,slots:o,emit:l}):D(d,null)),M=e.props?a:Z_(a)}}catch(D){_i.length=0,vo(D,t,1),B=Se(Jn)}let F=B;if(M&&E!==!1){const D=Object.keys(M),{shapeFlag:se}=F;D.length&&se&7&&(r&&D.some(cl)&&(M=ew(M,r)),F=Os(F,M,!1,!0))}return n.dirs&&(F=Os(F,null,!1,!0),F.dirs=F.dirs?F.dirs.concat(n.dirs):n.dirs),n.transition&&bl(F,n.transition),B=F,Pr(T),B}const Z_=t=>{let e;for(const n in t)(n==="class"||n==="style"||ho(n))&&((e||(e={}))[n]=t[n]);return e},ew=(t,e)=>{const n={};for(const s in t)(!cl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function tw(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?iu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!bo(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?iu(s,o,c):!0:!!o;return!1}function iu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!bo(n,r))return!0}return!1}function nw({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const sf=t=>t.__isSuspense;function sw(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):f_(t)}const vt=Symbol.for("v-fgt"),Co=Symbol.for("v-txt"),Jn=Symbol.for("v-cmt"),ea=Symbol.for("v-stc"),_i=[];let dt=null;function Z(t=!1){_i.push(dt=t?null:[])}function iw(){_i.pop(),dt=_i[_i.length-1]||null}let Ai=1;function ru(t,e=!1){Ai+=t,t<0&&dt&&e&&(dt.hasOnce=!0)}function rf(t){return t.dynamicChildren=Ai>0?dt||_s:null,iw(),Ai>0&&dt&&dt.push(t),t}function te(t,e,n,s,i,r){return rf(H(t,e,n,s,i,r,!0))}function of(t,e,n,s,i){return rf(Se(t,e,n,s,i,!0))}function xr(t){return t?t.__v_isVNode===!0:!1}function ri(t,e){return t.type===e.type&&t.key===e.key}const af=({key:t})=>t??null,gr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||je(t)||Y(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function H(t,e=null,n=null,s=0,i=null,r=t===vt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&af(e),ref:e&&gr(e),scopeId:Dh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:kt};return a?(Tl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),Ai>0&&!o&&dt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&dt.push(l),l}const Se=rw;function rw(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===P_)&&(t=Jn),xr(t)){const a=Os(t,e,!0);return n&&Tl(a,n),Ai>0&&!r&&dt&&(a.shapeFlag&6?dt[dt.indexOf(t)]=a:dt.push(a)),a.patchFlag=-2,a}if(gw(t)&&(t=t.__vccOpts),e){e=ow(e);let{class:a,style:l}=e;a&&!Oe(a)&&(e.class=_o(a)),Ce(l)&&(vl(l)&&!K(l)&&(l=qe({},l)),e.style=hl(l))}const o=Oe(t)?1:sf(t)?128:m_(t)?64:Ce(t)?4:Y(t)?2:0;return H(t,e,n,s,i,o,r,!0)}function ow(t){return t?vl(t)||qh(t)?qe({},t):t:null}function Os(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?aw(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&af(c),ref:e&&e.ref?n&&r?K(r)?r.concat(gr(e)):[r,gr(e)]:gr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==vt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Os(t.ssContent),ssFallback:t.ssFallback&&Os(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&bl(u,l.clone(u)),u}function Ri(t=" ",e=0){return Se(Co,null,t,e)}function Ye(t="",e=!1){return e?(Z(),of(Jn,null,t)):Se(Jn,null,t)}function Wt(t){return t==null||typeof t=="boolean"?Se(Jn):K(t)?Se(vt,null,t.slice()):xr(t)?_n(t):Se(Co,null,String(t))}function _n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Os(t)}function Tl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Tl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!qh(e)?e._ctx=kt:i===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),s&64?(n=16,e=[Ri(e)]):n=8);t.children=e,t.shapeFlag|=n}function aw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=_o([e.class,s.class]));else if(i==="style")e.style=hl([e.style,s.style]);else if(ho(i)){const r=e[i],o=s[i];o&&r!==o&&!(K(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ut(t,e,n,s=null){zt(t,e,7,[n,s])}const lw=Vh();let cw=0;function uw(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||lw,r={uid:cw++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Bg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Gh(s,i),emitsOptions:nf(s,i),emit:null,emitted:null,propsDefaults:we,inheritAttrs:s.inheritAttrs,ctx:we,data:we,props:we,attrs:we,slots:we,refs:we,setupState:we,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=X_.bind(null,r),t.ce&&t.ce(r),r}let We=null,Or,Oa;{const t=go(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Or=e("__VUE_INSTANCE_SETTERS__",n=>We=n),Oa=e("__VUE_SSR_SETTERS__",n=>xi=n)}const qi=t=>{const e=We;return Or(t),t.scope.on(),()=>{t.scope.off(),Or(e)}},ou=()=>{We&&We.scope.off(),Or(null)};function lf(t){return t.vnode.shapeFlag&4}let xi=!1;function dw(t,e=!1,n=!1){e&&Oa(e);const{props:s,children:i}=t.vnode,r=lf(t);F_(t,s,r,e),V_(t,i,n);const o=r?hw(t,e):void 0;return e&&Oa(!1),o}function hw(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,R_);const{setup:s}=n;if(s){Mn();const i=t.setupContext=s.length>1?pw(t):null,r=qi(t),o=ji(s,t,0,[t.props,i]),a=rh(o);if(Dn(),r(),(a||t.sp)&&!mi(t)&&Bh(t),a){if(o.then(ou,ou),e)return o.then(l=>{au(t,l)}).catch(l=>{vo(l,t,0)});t.asyncDep=o}else au(t,o)}else cf(t)}function au(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ce(e)&&(t.setupState=Ah(e)),cf(t)}function cf(t,e,n){const s=t.type;t.render||(t.render=s.render||jt);{const i=qi(t);Mn();try{x_(t)}finally{Dn(),i()}}}const fw={get(t,e){return He(t,"get",""),t[e]}};function pw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,fw),slots:t.slots,emit:t.emit,expose:e}}function kl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Ah(s_(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in gi)return gi[n](t)},has(e,n){return n in e||n in gi}})):t.proxy}function mw(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function gw(t){return Y(t)&&"__vccOpts"in t}const It=(t,e)=>l_(t,e,xi);function uf(t,e,n){const s=arguments.length;return s===2?Ce(e)&&!K(e)?xr(e)?Se(t,null,[e]):Se(t,e):Se(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&xr(n)&&(n=[n]),Se(t,e,n))}const _w="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Na;const lu=typeof window<"u"&&window.trustedTypes;if(lu)try{Na=lu.createPolicy("vue",{createHTML:t=>t})}catch{}const df=Na?t=>Na.createHTML(t):t=>t,ww="http://www.w3.org/2000/svg",vw="http://www.w3.org/1998/Math/MathML",Zt=typeof document<"u"?document:null,cu=Zt&&Zt.createElement("template"),yw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Zt.createElementNS(ww,t):e==="mathml"?Zt.createElementNS(vw,t):n?Zt.createElement(t,{is:n}):Zt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Zt.createTextNode(t),createComment:t=>Zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{cu.innerHTML=df(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=cu.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},bw=Symbol("_vtc");function Cw(t,e,n){const s=t[bw];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const uu=Symbol("_vod"),Ew=Symbol("_vsh"),Iw=Symbol(""),Sw=/(^|;)\s*display\s*:/;function Tw(t,e,n){const s=t.style,i=Oe(n);let r=!1;if(n&&!i){if(e)if(Oe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&_r(s,a,"")}else for(const o in e)n[o]==null&&_r(s,o,"");for(const o in n)o==="display"&&(r=!0),_r(s,o,n[o])}else if(i){if(e!==n){const o=s[Iw];o&&(n+=";"+o),s.cssText=n,r=Sw.test(n)}}else e&&t.removeAttribute("style");uu in t&&(t[uu]=r?s.display:"",t[Ew]&&(s.display="none"))}const du=/\s*!important$/;function _r(t,e,n){if(K(n))n.forEach(s=>_r(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=kw(t,e);du.test(n)?t.setProperty(os(s),n.replace(du,""),"important"):t[s]=n}}const hu=["Webkit","Moz","ms"],ta={};function kw(t,e){const n=ta[e];if(n)return n;let s=Ct(e);if(s!=="filter"&&s in t)return ta[e]=s;s=mo(s);for(let i=0;i<hu.length;i++){const r=hu[i]+s;if(r in t)return ta[e]=r}return e}const fu="http://www.w3.org/1999/xlink";function pu(t,e,n,s,i,r=Lg(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(fu,e.slice(6,e.length)):t.setAttributeNS(fu,e,n):n==null||r&&!ch(n)?t.removeAttribute(e):t.setAttribute(e,r?"":Nn(n)?String(n):n)}function mu(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?df(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=ch(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Pw(t,e,n,s){t.addEventListener(e,n,s)}function Aw(t,e,n,s){t.removeEventListener(e,n,s)}const gu=Symbol("_vei");function Rw(t,e,n,s,i=null){const r=t[gu]||(t[gu]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=xw(e);if(s){const c=r[e]=Mw(s,i);Pw(t,a,c,l)}else o&&(Aw(t,a,o,l),r[e]=void 0)}}const _u=/(?:Once|Passive|Capture)$/;function xw(t){let e;if(_u.test(t)){e={};let s;for(;s=t.match(_u);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):os(t.slice(2)),e]}let na=0;const Ow=Promise.resolve(),Nw=()=>na||(Ow.then(()=>na=0),na=Date.now());function Mw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;zt(Dw(s,n.value),e,5,[s])};return n.value=t,n.attached=Nw(),n}function Dw(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const wu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Lw=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Cw(t,s,o):e==="style"?Tw(t,n,s):ho(e)?cl(e)||Rw(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Bw(t,e,s,o))?(mu(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&pu(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Oe(s))?mu(t,Ct(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),pu(t,e,s,o))};function Bw(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&wu(e)&&Y(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return wu(e)&&Oe(n)?!1:e in t}const Fw=qe({patchProp:Lw},yw);let vu;function $w(){return vu||(vu=j_(Fw))}const Uw=(...t)=>{const e=$w().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Vw(s);if(!i)return;const r=e._component;!Y(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Hw(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Hw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Vw(t){return Oe(t)?document.querySelector(t):t}const Ww=()=>{};var yu={};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const S=function(t,e){if(!t)throw zs(e)},zs=function(t){return new Error("Firebase Database ("+hf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ff=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},jw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Pl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(ff(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):jw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new qw;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const w=c<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class qw extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const pf=function(t){const e=ff(t);return Pl.encodeByteArray(e,!0)},Nr=function(t){return pf(t).replace(/\./g,"")},Mr=function(t){try{return Pl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zw(t){return mf(void 0,t)}function mf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Gw(n)||(t[n]=mf(t[n],e[n]));return t}function Gw(t){return t!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yw=()=>Kw().__FIREBASE_DEFAULTS__,Qw=()=>{if(typeof process>"u"||typeof yu>"u")return;const t=yu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Jw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Mr(t[1]);return e&&JSON.parse(e)},Al=()=>{try{return Ww()||Yw()||Qw()||Jw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},gf=t=>{var e,n;return(n=(e=Al())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Xw=t=>{const e=gf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},_f=()=>{var t;return(t=Al())===null||t===void 0?void 0:t.config},wf=t=>{var e;return(e=Al())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Nr(JSON.stringify(n)),Nr(JSON.stringify(o)),""].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Je(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Rl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Je())}function ev(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function tv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function vf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function nv(){const t=Je();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function sv(){return hf.NODE_ADMIN===!0}function iv(){try{return typeof indexedDB=="object"}catch{return!1}}function rv(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ov="FirebaseError";class Ln extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ov,Object.setPrototypeOf(this,Ln.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Gi.prototype.create)}}class Gi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?av(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ln(i,a,s)}}function av(t,e){return t.replace(lv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const lv=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oi(t){return JSON.parse(t)}function Le(t){return JSON.stringify(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Oi(Mr(r[0])||""),n=Oi(Mr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},cv=function(t){const e=yf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},uv=function(t){const e=yf(t).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ns(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ma(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Dr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Xn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(bu(r)&&bu(o)){if(!Xn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function bu(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function hv(t,e){const n=new fv(t,e);return n.subscribe.bind(n)}class fv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");pv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=sa),i.error===void 0&&(i.error=sa),i.complete===void 0&&(i.complete=sa);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function pv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function sa(){}function Eo(t,e){return`${t} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Io=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){return t&&t._delegate?t._delegate:t}class Zn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wn="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new zi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(wv(e))try{this.getOrInitializeService({instanceIdentifier:Wn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Wn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Wn){return this.instances.has(e)}getOptions(e=Wn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:_v(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Wn){return this.component?this.component.multipleInstances?e:Wn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function _v(t){return t===Wn?void 0:t}function wv(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new gv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var he;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(he||(he={}));const yv={debug:he.DEBUG,verbose:he.VERBOSE,info:he.INFO,warn:he.WARN,error:he.ERROR,silent:he.SILENT},bv=he.INFO,Cv={[he.DEBUG]:"log",[he.VERBOSE]:"log",[he.INFO]:"info",[he.WARN]:"warn",[he.ERROR]:"error"},Ev=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Cv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class xl{constructor(e){this.name=e,this._logLevel=bv,this._logHandler=Ev,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in he))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?yv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,he.DEBUG,...e),this._logHandler(this,he.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,he.VERBOSE,...e),this._logHandler(this,he.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,he.INFO,...e),this._logHandler(this,he.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,he.WARN,...e),this._logHandler(this,he.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,he.ERROR,...e),this._logHandler(this,he.ERROR,...e)}}const Iv=(t,e)=>e.some(n=>t instanceof n);let Cu,Eu;function Sv(){return Cu||(Cu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Tv(){return Eu||(Eu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const bf=new WeakMap,Da=new WeakMap,Cf=new WeakMap,ia=new WeakMap,Ol=new WeakMap;function kv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(kn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&bf.set(n,t)}).catch(()=>{}),Ol.set(e,t),e}function Pv(t){if(Da.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Da.set(t,e)}let La={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Da.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Cf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return kn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Av(t){La=t(La)}function Rv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ra(this),e,...n);return Cf.set(s,e.sort?e.sort():[e]),kn(s)}:Tv().includes(t)?function(...e){return t.apply(ra(this),e),kn(bf.get(this))}:function(...e){return kn(t.apply(ra(this),e))}}function xv(t){return typeof t=="function"?Rv(t):(t instanceof IDBTransaction&&Pv(t),Iv(t,Sv())?new Proxy(t,La):t)}function kn(t){if(t instanceof IDBRequest)return kv(t);if(ia.has(t))return ia.get(t);const e=xv(t);return e!==t&&(ia.set(t,e),Ol.set(e,t)),e}const ra=t=>Ol.get(t);function Ov(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=kn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(kn(o.result),l.oldVersion,l.newVersion,kn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const Nv=["get","getKey","getAll","getAllKeys","count"],Mv=["put","add","delete","clear"],oa=new Map;function Iu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(oa.get(e))return oa.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Mv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||Nv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return oa.set(e,r),r}Av(t=>({...t,get:(e,n,s)=>Iu(e,n)||t.get(e,n,s),has:(e,n)=>!!Iu(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dv{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Lv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Lv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Ba="@firebase/app",Su="0.11.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cn=new xl("@firebase/app"),Bv="@firebase/app-compat",Fv="@firebase/analytics-compat",$v="@firebase/analytics",Uv="@firebase/app-check-compat",Hv="@firebase/app-check",Vv="@firebase/auth",Wv="@firebase/auth-compat",jv="@firebase/database",qv="@firebase/data-connect",zv="@firebase/database-compat",Gv="@firebase/functions",Kv="@firebase/functions-compat",Yv="@firebase/installations",Qv="@firebase/installations-compat",Jv="@firebase/messaging",Xv="@firebase/messaging-compat",Zv="@firebase/performance",ey="@firebase/performance-compat",ty="@firebase/remote-config",ny="@firebase/remote-config-compat",sy="@firebase/storage",iy="@firebase/storage-compat",ry="@firebase/firestore",oy="@firebase/vertexai",ay="@firebase/firestore-compat",ly="firebase",cy="11.6.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fa="[DEFAULT]",uy={[Ba]:"fire-core",[Bv]:"fire-core-compat",[$v]:"fire-analytics",[Fv]:"fire-analytics-compat",[Hv]:"fire-app-check",[Uv]:"fire-app-check-compat",[Vv]:"fire-auth",[Wv]:"fire-auth-compat",[jv]:"fire-rtdb",[qv]:"fire-data-connect",[zv]:"fire-rtdb-compat",[Gv]:"fire-fn",[Kv]:"fire-fn-compat",[Yv]:"fire-iid",[Qv]:"fire-iid-compat",[Jv]:"fire-fcm",[Xv]:"fire-fcm-compat",[Zv]:"fire-perf",[ey]:"fire-perf-compat",[ty]:"fire-rc",[ny]:"fire-rc-compat",[sy]:"fire-gcs",[iy]:"fire-gcs-compat",[ry]:"fire-fst",[ay]:"fire-fst-compat",[oy]:"fire-vertex","fire-js":"fire-js",[ly]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lr=new Map,dy=new Map,$a=new Map;function Tu(t,e){try{t.container.addComponent(e)}catch(n){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ms(t){const e=t.name;if($a.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;$a.set(e,t);for(const n of Lr.values())Tu(n,t);for(const n of dy.values())Tu(n,t);return!0}function Nl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function St(t){return t==null?!1:t.settings!==void 0}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Pn=new Gi("app","Firebase",hy);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Zn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Pn.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ks=cy;function Ef(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Fa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Pn.create("bad-app-name",{appName:String(i)});if(n||(n=_f()),!n)throw Pn.create("no-options");const r=Lr.get(i);if(r){if(Xn(n,r.options)&&Xn(s,r.config))return r;throw Pn.create("duplicate-app",{appName:i})}const o=new vv(i);for(const l of $a.values())o.addComponent(l);const a=new fy(n,s,o);return Lr.set(i,a),a}function If(t=Fa){const e=Lr.get(t);if(!e&&t===Fa&&_f())return Ef();if(!e)throw Pn.create("no-app",{appName:t});return e}function An(t,e,n){var s;let i=(s=uy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}Ms(new Zn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const py="firebase-heartbeat-database",my=1,Ni="firebase-heartbeat-store";let aa=null;function Sf(){return aa||(aa=Ov(py,my,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Ni)}catch(n){console.warn(n)}}}}).catch(t=>{throw Pn.create("idb-open",{originalErrorMessage:t.message})})),aa}async function gy(t){try{const n=(await Sf()).transaction(Ni),s=await n.objectStore(Ni).get(Tf(t));return await n.done,s}catch(e){if(e instanceof Ln)cn.warn(e.message);else{const n=Pn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(n.message)}}}async function ku(t,e){try{const s=(await Sf()).transaction(Ni,"readwrite");await s.objectStore(Ni).put(e,Tf(t)),await s.done}catch(n){if(n instanceof Ln)cn.warn(n.message);else{const s=Pn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(s.message)}}}function Tf(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _y=1024,wy=30;class vy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new by(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Pu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>wy){const o=Cy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){cn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Pu(),{heartbeatsToSend:s,unsentEntries:i}=yy(this._heartbeatsCache.heartbeats),r=Nr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return cn.warn(n),""}}}function Pu(){return new Date().toISOString().substring(0,10)}function yy(t,e=_y){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Au(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Au(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class by{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return iv()?rv().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await gy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ku(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ku(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Au(t){return Nr(JSON.stringify({version:2,heartbeats:t})).length}function Cy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ey(t){Ms(new Zn("platform-logger",e=>new Dv(e),"PRIVATE")),Ms(new Zn("heartbeat",e=>new vy(e),"PRIVATE")),An(Ba,Su,t),An(Ba,Su,"esm2017"),An("fire-js","")}Ey("");var Iy="firebase",Sy="11.6.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(Iy,Sy,"app");var Ru={};const xu="@firebase/database",Ou="1.0.14";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let kf="";function Ty(t){kf=t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ky{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Le(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Oi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Py{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new ky(e)}}catch{}return new Py},qn=Pf("localStorage"),Ay=Pf("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Is=new xl("@firebase/database"),Ry=function(){let t=1;return function(){return t++}}(),Af=function(t){const e=mv(t),n=new dv;n.update(e);const s=n.digest();return Pl.encodeByteArray(s)},Ki=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=Ki.apply(null,s):typeof s=="object"?e+=Le(s):e+=s,e+=" "}return e};let wi=null,Nu=!0;const xy=function(t,e){S(!0,"Can't turn on custom loggers persistently."),Is.logLevel=he.VERBOSE,wi=Is.log.bind(Is)},Fe=function(...t){if(Nu===!0&&(Nu=!1,wi===null&&Ay.get("logging_enabled")===!0&&xy()),wi){const e=Ki.apply(null,t);wi(e)}},Yi=function(t){return function(...e){Fe(t,...e)}},Ua=function(...t){const e="FIREBASE INTERNAL ERROR: "+Ki(...t);Is.error(e)},un=function(...t){const e=`FIREBASE FATAL ERROR: ${Ki(...t)}`;throw Is.error(e),new Error(e)},Qe=function(...t){const e="FIREBASE WARNING: "+Ki(...t);Is.warn(e)},Oy=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&Qe("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Ml=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},Ny=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ds="[MIN_NAME]",es="[MAX_NAME]",as=function(t,e){if(t===e)return 0;if(t===Ds||e===es)return-1;if(e===Ds||t===es)return 1;{const n=Mu(t),s=Mu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},My=function(t,e){return t===e?0:t<e?-1:1},oi=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Le(e))},Dl=function(t){if(typeof t!="object"||t===null)return Le(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Le(e[s]),n+=":",n+=Dl(t[e[s]]);return n+="}",n},Rf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function $e(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const xf=function(t){S(!Ml(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Dy=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ly=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function By(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Fy=new RegExp("^-?(0*)\\d{1,10}$"),$y=-2147483648,Uy=2147483647,Mu=function(t){if(Fy.test(t)){const e=Number(t);if(e>=$y&&e<=Uy)return e}return null},Ys=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw Qe("Exception was thrown by user callback.",n),e},Math.floor(0))}},Hy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},vi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vy{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,St(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){Qe(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wy{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Fe("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',Qe(e)}}class wr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}wr.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ll="5",Of="v",Nf="s",Mf="r",Df="f",Lf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Bf="ls",Ff="p",Ha="ac",$f="websocket",Uf="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=qn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&qn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function jy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Vf(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===$f)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Uf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);jy(t)&&(n.ns=t.namespace);const i=[];return $e(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(){this.counters_={}}incrementCounter(e,n=1){Yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return zw(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const la={},ca={};function Bl(t){const e=t.toString();return la[e]||(la[e]=new qy),la[e]}function zy(t,e){const n=t.toString();return ca[n]||(ca[n]=e()),ca[n]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ys(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Du="start",Ky="close",Yy="pLPCommand",Qy="pRTLPCB",Wf="id",jf="pw",qf="ser",Jy="cb",Xy="seg",Zy="ts",eb="d",tb="dframe",zf=1870,Gf=30,nb=zf-Gf,sb=25e3,ib=3e4;class gs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Yi(e),this.stats_=Bl(n),this.urlFn=l=>(this.appCheckToken&&(l[Ha]=this.appCheckToken),Vf(n,Uf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Gy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(ib)),Ny(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Fl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===Du)this.id=a,this.password=l;else if(o===Ky)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[Du]="t",s[qf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Jy]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Of]=Ll,this.transportSessionId&&(s[Nf]=this.transportSessionId),this.lastSessionId&&(s[Bf]=this.lastSessionId),this.applicationId&&(s[Ff]=this.applicationId),this.appCheckToken&&(s[Ha]=this.appCheckToken),typeof location<"u"&&location.hostname&&Lf.test(location.hostname)&&(s[Mf]=Df);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gs.forceAllow_=!0}static forceDisallow(){gs.forceDisallow_=!0}static isAvailable(){return gs.forceAllow_?!0:!gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Dy()&&!Ly()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=pf(n),i=Rf(s,nb);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[tb]="t",s[Wf]=e,s[jf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Le(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Fl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Ry(),window[Yy+this.uniqueCallbackIdentifier]=e,window[Qy+this.uniqueCallbackIdentifier]=n,this.myIFrame=Fl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Fe("frame writing exception"),a.stack&&Fe(a.stack),Fe(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Fe("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[Wf]=this.myID,e[jf]=this.myPW,e[qf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Gf+s.length<=zf;){const o=this.pendingSegs.shift();s=s+"&"+Xy+i+"="+o.seg+"&"+Zy+i+"="+o.ts+"&"+eb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(sb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Fe("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rb=16384,ob=45e3;let Br=null;typeof MozWebSocket<"u"?Br=MozWebSocket:typeof WebSocket<"u"&&(Br=WebSocket);class Tt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Yi(this.connId),this.stats_=Bl(n),this.connURL=Tt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Of]=Ll,typeof location<"u"&&location.hostname&&Lf.test(location.hostname)&&(o[Mf]=Df),n&&(o[Nf]=n),s&&(o[Bf]=s),i&&(o[Ha]=i),r&&(o[Ff]=r),Vf(e,$f,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,qn.set("previous_websocket_failure",!0);try{let s;sv(),this.mySock=new Br(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Br!==null&&!Tt.forceDisallow_}static previouslyFailed(){return qn.isInMemoryStorage||qn.get("previous_websocket_failure")===!0}markConnectionHealthy(){qn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Oi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Le(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Rf(n,rb);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(ob))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tt.responsesRequiredToBeHealthy=2;Tt.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mi{static get ALL_TRANSPORTS(){return[gs,Tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Tt&&Tt.isAvailable();let s=n&&!Tt.previouslyFailed();if(e.webSocketOnly&&(n||Qe("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Tt];else{const i=this.transports_=[];for(const r of Mi.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Mi.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Mi.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ab=6e4,lb=5e3,cb=10*1024,ub=100*1024,ua="t",Lu="d",db="s",Bu="r",hb="e",Fu="o",$u="a",Uu="n",Hu="p",fb="h";class pb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Yi("c:"+this.id+":"),this.transportManager_=new Mi(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=vi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ub?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>cb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ua in e){const n=e[ua];n===$u?this.upgradeIfSecondaryHealthy_():n===Bu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Fu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=oi("t",e),s=oi("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Hu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:$u,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Uu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=oi("t",e),s=oi("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=oi(ua,e);if(Lu in e){const s=e[Lu];if(n===fb){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Uu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===db?this.onConnectionShutdown_(s):n===Bu?this.onReset_(s):n===hb?Ua("Server Error: "+s):n===Fu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ua("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),Ll!==s&&Qe("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),vi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(ab))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):vi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(lb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Hu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(qn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Yf=class{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends Yf{static getInstance(){return new Fr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Rl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=32,Wu=768;class fe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function oe(){return new fe("")}function Q(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function xn(t){return t.pieces_.length-t.pieceNum_}function ve(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new fe(t.pieces_,e)}function $l(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function mb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Di(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function Qf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new fe(e,0)}function ke(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof fe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new fe(n,0)}function X(t){return t.pieceNum_>=t.pieces_.length}function it(t,e){const n=Q(t),s=Q(e);if(n===null)return e;if(n===s)return it(ve(t),ve(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function gb(t,e){const n=Di(t,0),s=Di(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=as(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Ul(t,e){if(xn(t)!==xn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function yt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(xn(t)>xn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class _b{constructor(e,n){this.errorPrefix_=n,this.parts_=Di(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Io(this.parts_[s]);Jf(this)}}function wb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Io(e),Jf(t)}function vb(t){const e=t.parts_.pop();t.byteLength_-=Io(e),t.parts_.length>0&&(t.byteLength_-=1)}function Jf(t){if(t.byteLength_>Wu)throw new Error(t.errorPrefix_+"has a key path longer than "+Wu+" bytes ("+t.byteLength_+").");if(t.parts_.length>Vu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Vu+") or object contains a cycle "+jn(t))}function jn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl extends Yf{static getInstance(){return new Hl}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ai=1e3,yb=60*5*1e3,ju=30*1e3,bb=1.3,Cb=3e4,Eb="server_kill",qu=3;class an extends Kf{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=an.nextPersistentConnectionId_++,this.log_=Yi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=ai,this.maxReconnectDelay_=yb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Hl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Fr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Le(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new zi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;an.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yt(e,"w")){const s=Ns(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();Qe(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||uv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=ju)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=cv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Le(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ua("Unrecognized action received from server: "+Le(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Cb&&(this.reconnectDelay_=ai),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*bb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+an.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Fe("getToken() completed but was canceled"):(Fe("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new pb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{Qe(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Eb)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&Qe(d),l())}}}interrupt(e){Fe("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Fe("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ma(this.interruptReasons_)&&(this.reconnectDelay_=ai,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Dl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new fe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Fe("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=qu&&(this.reconnectDelay_=ju,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Fe("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=qu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+kf.replace(/\./g,"-")]=1,Rl()?e["framework.cordova"]=1:vf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Fr.getInstance().currentlyOnline();return Ma(this.interruptReasons_)&&e}}an.nextPersistentConnectionId_=0;an.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class J{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new J(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new J(Ds,e),i=new J(Ds,n);return this.compare(s,i)!==0}minPost(){return J.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let dr;class Xf extends So{static get __EMPTY_NODE(){return dr}static set __EMPTY_NODE(e){dr=e}compare(e,n){return as(e.name,n.name)}isDefinedOn(e){throw zs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return J.MIN}maxPost(){return new J(es,dr)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new J(e,dr)}toString(){return".key"}}const Ss=new Xf;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Me.RED,this.left=i??rt.EMPTY_NODE,this.right=r??rt.EMPTY_NODE}copy(e,n,s,i,r){return new Me(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class Ib{copy(e,n,s,i,r){return this}insert(e,n,s){return new Me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,n=rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new hr(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new hr(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new hr(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new hr(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new Ib;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sb(t,e){return as(t.name,e.name)}function Vl(t,e){return as(t,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Va;function Tb(t){Va=t}const Zf=function(t){return typeof t=="number"?"number:"+xf(t):"string:"+t},ep=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yt(e,".sv"),"Priority must be a string or number.")}else S(t===Va||t.isEmpty(),"priority of unexpected type.");S(t===Va||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zu;class Ne{static set __childrenNodeConstructor(e){zu=e}static get __childrenNodeConstructor(){return zu}constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),ep(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return X(e)?this:Q(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Q(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||xn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(ve(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Zf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=xf(this.value_):e+=this.value_,this.lazyHash_=Af(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),r=Ne.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let tp,np;function kb(t){tp=t}function Pb(t){np=t}class Ab extends So{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?as(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return J.MIN}maxPost(){return new J(es,new Ne("[PRIORITY-POST]",np))}makePost(e,n){const s=tp(e);return new J(n,new Ne("[PRIORITY-POST]",s))}toString(){return".priority"}}const Pe=new Ab;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rb=Math.log(2);class xb{constructor(e){const n=r=>parseInt(Math.log(r)/Rb,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const $r=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Me(h,d.node,Me.BLACK,null,null);{const m=parseInt(u/2,10)+l,w=i(l,m),E=i(m+1,c);return d=t[m],h=n?n(d):d,new Me(h,d.node,Me.BLACK,w,E)}},r=function(l){let c=null,u=null,d=t.length;const h=function(w,E){const T=d-w,B=d;d-=w;const M=i(T+1,B),F=t[T],D=n?n(F):F;m(new Me(D,F.node,E,null,M))},m=function(w){c?(c.left=w,c=w):(u=w,c=w)};for(let w=0;w<l.count;++w){const E=l.nextBitIsOne(),T=Math.pow(2,l.count-(w+1));E?h(T,Me.BLACK):(h(T,Me.BLACK),h(T,Me.RED))}return u},o=new xb(t.length),a=r(o);return new rt(s||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let da;const fs={};class nn{static get Default(){return S(fs&&Pe,"ChildrenNode.ts has not been loaded"),da=da||new nn({".priority":fs},{".priority":Pe}),da}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ns(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rt?n:null}hasIndex(e){return Yt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(J.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=$r(s,e.getCompare()):a=fs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new nn(u,c)}addToIndexes(e,n){const s=Dr(this.indexes_,(i,r)=>{const o=Ns(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===fs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(J.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),$r(a,o.getCompare())}else return fs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new J(e.name,a))),l.insert(e,e.node)}});return new nn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Dr(this.indexes_,i=>{if(i===fs)return i;{const r=n.get(e.name);return r?i.remove(new J(e.name,r)):i}});return new nn(s,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let li;class q{static get EMPTY_NODE(){return li||(li=new q(new rt(Vl),null,nn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&ep(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||li}updatePriority(e){return this.children_.isEmpty()?this:new q(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?li:n}}getChild(e){const n=Q(e);return n===null?this:this.getImmediateChild(n).getChild(ve(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new J(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?li:this.priorityNode_;return new q(i,o,r)}}updateChild(e,n){const s=Q(e);if(s===null)return n;{S(Q(e)!==".priority"||xn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ve(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Pe,(o,a)=>{n[o]=a.val(e),s++,r&&q.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Zf(this.getPriority().val())+":"),this.forEachChild(Pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Af(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new J(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new J(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new J(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,J.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,J.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Qi?-1:0}withIndex(e){if(e===Ss||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new q(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Pe),i=n.getIterator(Pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ss?null:this.indexMap_.get(e.toString())}}q.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Ob extends q{constructor(){super(new rt(Vl),q.EMPTY_NODE,nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return q.EMPTY_NODE}isEmpty(){return!1}}const Qi=new Ob;Object.defineProperties(J,{MIN:{value:new J(Ds,q.EMPTY_NODE)},MAX:{value:new J(es,Qi)}});Xf.__EMPTY_NODE=q.EMPTY_NODE;Ne.__childrenNodeConstructor=q;Tb(Qi);Pb(Qi);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nb=!0;function De(t,e=null){if(t===null)return q.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,De(e))}if(!(t instanceof Array)&&Nb){const n=[];let s=!1;if($e(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=De(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new J(o,l)))}}),n.length===0)return q.EMPTY_NODE;const r=$r(n,Sb,o=>o.name,Vl);if(s){const o=$r(n,Pe.getCompare());return new q(r,De(e),new nn({".priority":o},{".priority":Pe}))}else return new q(r,De(e),nn.Default)}else{let n=q.EMPTY_NODE;return $e(t,(s,i)=>{if(Yt(t,s)&&s.substring(0,1)!=="."){const r=De(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(De(e))}}kb(De);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mb extends So{constructor(e){super(),this.indexPath_=e,S(!X(e)&&Q(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?as(e.name,n.name):r}makePost(e,n){const s=De(e),i=q.EMPTY_NODE.updateChild(this.indexPath_,s);return new J(n,i)}maxPost(){const e=q.EMPTY_NODE.updateChild(this.indexPath_,Qi);return new J(es,e)}toString(){return Di(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Db extends So{compare(e,n){const s=e.node.compareTo(n.node);return s===0?as(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return J.MIN}maxPost(){return J.MAX}makePost(e,n){const s=De(e);return new J(n,s)}toString(){return".value"}}const Lb=new Db;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sp(t){return{type:"value",snapshotNode:t}}function Ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Li(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Bi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function Bb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Li(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ls(n,s)):o.trackChildChange(Bi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Li(i,r))}),n.isLeafNode()||n.forEachChild(Pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Bi(i,r,o))}else s.trackChildChange(Ls(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?q.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fi{constructor(e){this.indexedFilter_=new Wl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Fi.getStartPost_(e),this.endPost_=Fi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new J(n,s))||(s=q.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=q.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(q.EMPTY_NODE);const r=this;return n.forEachChild(Pe,(o,a)=>{r.matches(new J(o,a))||(i=i.updateImmediateChild(o,q.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fb{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Fi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new J(n,s))||(s=q.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=q.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=q.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(q.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,q.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new J(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Bi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Li(n,d));const E=a.updateImmediateChild(n,q.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ls(h.name,h.node)),E.updateImmediateChild(h.name,h.node)):E}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Li(c.name,c.node)),r.trackChildChange(Ls(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,q.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ds}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:es}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new jl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function $b(t){return t.loadsAllData()?new Wl(t.getIndex()):t.hasLimit()?new Fb(t):new Fi(t)}function Gu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Pe?n="$priority":t.index_===Lb?n="$value":t.index_===Ss?n="$key":(S(t.index_ instanceof Mb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Le(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Le(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Le(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Le(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Le(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function Ku(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Pe&&(e.i=t.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ur extends Kf{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Yi("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Ur.getListenId_(e,s),a={};this.listens_[o]=a;const l=Gu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Ns(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=Ur.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Gu(e._queryParams),s=e._path.toString(),i=new zi;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Gs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Oi(a.responseText)}catch{Qe("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&Qe("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ub{constructor(){this.rootNode_=q.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hr(){return{value:null,children:new Map}}function ip(t,e,n){if(X(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Q(e);t.children.has(s)||t.children.set(s,Hr());const i=t.children.get(s);e=ve(e),ip(i,e,n)}}function Wa(t,e,n){t.value!==null?n(e,t.value):Hb(t,(s,i)=>{const r=new fe(e.toString()+"/"+s);Wa(i,r,n)})}function Hb(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&$e(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yu=10*1e3,Wb=30*1e3,jb=5*60*1e3;class qb{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Vb(e);const s=Yu+(Wb-Yu)*Math.random();vi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;$e(e,(i,r)=>{r>0&&Yt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),vi(this.reportStats_.bind(this),Math.floor(Math.random()*2*jb))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function ql(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function zl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Gl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Pt.ACK_USER_WRITE,this.source=ql()}operationForChild(e){if(X(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new fe(e));return new Vr(oe(),n,this.revert)}}else return S(Q(this.path)===e,"operationForChild called for unrelated child."),new Vr(ve(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.source=e,this.path=n,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return X(this.path)?new $i(this.source,oe()):new $i(this.source,ve(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ts{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Pt.OVERWRITE}operationForChild(e){return X(this.path)?new ts(this.source,oe(),this.snap.getImmediateChild(e)):new ts(this.source,ve(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Pt.MERGE}operationForChild(e){if(X(this.path)){const n=this.children.subtree(new fe(e));return n.isEmpty()?null:n.value?new ts(this.source,oe(),n.value):new Bs(this.source,oe(),n)}else return S(Q(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bs(this.source,ve(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ns{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(X(e))return this.isFullyInitialized()&&!this.filtered_;const n=Q(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zb{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Gb(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(Bb(o.childName,o.snapshotNode))}),ci(t,i,"child_removed",e,s,n),ci(t,i,"child_added",e,s,n),ci(t,i,"child_moved",r,s,n),ci(t,i,"child_changed",e,s,n),ci(t,i,"value",e,s,n),i}function ci(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Yb(t,a,l)),o.forEach(a=>{const l=Kb(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Kb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Yb(t,e,n){if(e.childName==null||n.childName==null)throw zs("Should only compare child_ events.");const s=new J(e.childName,e.snapshotNode),i=new J(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function To(t,e){return{eventCache:t,serverCache:e}}function yi(t,e,n,s){return To(new ns(e,n,s),t.serverCache)}function rp(t,e,n,s){return To(t.eventCache,new ns(e,n,s))}function ja(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ss(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ha;const Qb=()=>(ha||(ha=new rt(My)),ha);class _e{static fromObject(e){let n=new _e(null);return $e(e,(s,i)=>{n=n.set(new fe(s),i)}),n}constructor(e,n=Qb()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:oe(),value:this.value};if(X(e))return null;{const s=Q(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ve(e),n);return r!=null?{path:ke(new fe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(X(e))return this;{const n=Q(e),s=this.children.get(n);return s!==null?s.subtree(ve(e)):new _e(null)}}set(e,n){if(X(e))return new _e(n,this.children);{const s=Q(e),r=(this.children.get(s)||new _e(null)).set(ve(e),n),o=this.children.insert(s,r);return new _e(this.value,o)}}remove(e){if(X(e))return this.children.isEmpty()?new _e(null):new _e(null,this.children);{const n=Q(e),s=this.children.get(n);if(s){const i=s.remove(ve(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new _e(null):new _e(this.value,r)}else return this}}get(e){if(X(e))return this.value;{const n=Q(e),s=this.children.get(n);return s?s.get(ve(e)):null}}setTree(e,n){if(X(e))return n;{const s=Q(e),r=(this.children.get(s)||new _e(null)).setTree(ve(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new _e(this.value,o)}}fold(e){return this.fold_(oe(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ke(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,oe(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(X(e))return null;{const r=Q(e),o=this.children.get(r);return o?o.findOnPath_(ve(e),ke(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,oe(),n)}foreachOnPath_(e,n,s){if(X(e))return this;{this.value&&s(n,this.value);const i=Q(e),r=this.children.get(i);return r?r.foreachOnPath_(ve(e),ke(n,i),s):new _e(null)}}foreach(e){this.foreach_(oe(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ke(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(e){this.writeTree_=e}static empty(){return new xt(new _e(null))}}function bi(t,e,n){if(X(e))return new xt(new _e(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=it(i,e);return r=r.updateChild(o,n),new xt(t.writeTree_.set(i,r))}else{const i=new _e(n),r=t.writeTree_.setTree(e,i);return new xt(r)}}}function qa(t,e,n){let s=t;return $e(n,(i,r)=>{s=bi(s,ke(e,i),r)}),s}function Qu(t,e){if(X(e))return xt.empty();{const n=t.writeTree_.setTree(e,new _e(null));return new xt(n)}}function za(t,e){return ls(t,e)!=null}function ls(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(it(n.path,e)):null}function Ju(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pe,(s,i)=>{e.push(new J(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new J(s,i.value))}),e}function Rn(t,e){if(X(e))return t;{const n=ls(t,e);return n!=null?new xt(new _e(n)):new xt(t.writeTree_.subtree(e))}}function Ga(t){return t.writeTree_.isEmpty()}function Fs(t,e){return op(oe(),t.writeTree_,e)}function op(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=op(ke(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ke(t,".priority"),s)),n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Kl(t,e){return up(e,t)}function Jb(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=bi(t.visibleWrites,e,n)),t.lastWriteId=s}function Xb(t,e,n,s){S(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=qa(t.visibleWrites,e,n),t.lastWriteId=s}function Zb(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function eC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&tC(a,s.path)?i=!1:yt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return nC(t),!0;if(s.snap)t.visibleWrites=Qu(t.visibleWrites,s.path);else{const a=s.children;$e(a,l=>{t.visibleWrites=Qu(t.visibleWrites,ke(s.path,l))})}return!0}else return!1}function tC(t,e){if(t.snap)return yt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&yt(ke(t.path,n),e))return!0;return!1}function nC(t){t.visibleWrites=ap(t.allWrites,sC,oe()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function sC(t){return t.visible}function ap(t,e,n){let s=xt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)yt(n,o)?(a=it(n,o),s=bi(s,a,r.snap)):yt(o,n)&&(a=it(o,n),s=bi(s,oe(),r.snap.getChild(a)));else if(r.children){if(yt(n,o))a=it(n,o),s=qa(s,a,r.children);else if(yt(o,n))if(a=it(o,n),X(a))s=qa(s,oe(),r.children);else{const l=Ns(r.children,Q(a));if(l){const c=l.getChild(ve(a));s=bi(s,oe(),c)}}}else throw zs("WriteRecord should have .snap or .children")}}return s}function lp(t,e,n,s,i){if(!s&&!i){const r=ls(t.visibleWrites,e);if(r!=null)return r;{const o=Rn(t.visibleWrites,e);if(Ga(o))return n;if(n==null&&!za(o,oe()))return null;{const a=n||q.EMPTY_NODE;return Fs(o,a)}}}else{const r=Rn(t.visibleWrites,e);if(!i&&Ga(r))return n;if(!i&&n==null&&!za(r,oe()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(yt(c.path,e)||yt(e,c.path))},a=ap(t.allWrites,o,e),l=n||q.EMPTY_NODE;return Fs(a,l)}}}function iC(t,e,n){let s=q.EMPTY_NODE;const i=ls(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Rn(t.visibleWrites,e);return n.forEachChild(Pe,(o,a)=>{const l=Fs(Rn(r,new fe(o)),a);s=s.updateImmediateChild(o,l)}),Ju(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Rn(t.visibleWrites,e);return Ju(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function rC(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ke(e,n);if(za(t.visibleWrites,r))return null;{const o=Rn(t.visibleWrites,r);return Ga(o)?i.getChild(n):Fs(o,i.getChild(n))}}function oC(t,e,n,s){const i=ke(e,n),r=ls(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Rn(t.visibleWrites,i);return Fs(o,s.getNode().getImmediateChild(n))}else return null}function aC(t,e){return ls(t.visibleWrites,e)}function lC(t,e,n,s,i,r,o){let a;const l=Rn(t.visibleWrites,e),c=ls(l,oe());if(c!=null)a=c;else if(n!=null)a=Fs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function cC(){return{visibleWrites:xt.empty(),allWrites:[],lastWriteId:-1}}function Wr(t,e,n,s){return lp(t.writeTree,t.treePath,e,n,s)}function Yl(t,e){return iC(t.writeTree,t.treePath,e)}function Xu(t,e,n,s){return rC(t.writeTree,t.treePath,e,n,s)}function jr(t,e){return aC(t.writeTree,ke(t.treePath,e))}function uC(t,e,n,s,i,r){return lC(t.writeTree,t.treePath,e,n,s,i,r)}function Ql(t,e,n){return oC(t.writeTree,t.treePath,e,n)}function cp(t,e){return up(ke(t.treePath,e),t.writeTree)}function up(t,e){return{treePath:t,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Bi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Li(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ls(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Bi(s,e.snapshotNode,i.oldSnap));else throw zs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const dp=new hC;class Jl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ns(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Ql(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ss(this.viewCache_),r=uC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fC(t){return{filter:t}}function pC(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function mC(t,e,n,s,i){const r=new dC;let o,a;if(n.type===Pt.OVERWRITE){const c=n;c.source.fromUser?o=Ka(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!X(c.path),o=qr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Pt.MERGE){const c=n;c.source.fromUser?o=_C(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ya(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Pt.ACK_USER_WRITE){const c=n;c.revert?o=yC(t,e,c.path,s,i,r):o=wC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Pt.LISTEN_COMPLETE)o=vC(t,e,n.path,s,r);else throw zs("Unknown operation type: "+n.type);const l=r.getChanges();return gC(e,o,l),{viewCache:o,changes:l}}function gC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=ja(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(sp(ja(e)))}}function hp(t,e,n,s,i,r){const o=e.eventCache;if(jr(s,n)!=null)return e;{let a,l;if(X(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ss(e),u=c instanceof q?c:q.EMPTY_NODE,d=Yl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=Wr(s,ss(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Q(n);if(c===".priority"){S(xn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Xu(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ve(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Xu(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=Ql(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return yi(e,a,o.isFullyInitialized()||X(n),t.filter.filtersNodes())}}function qr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(X(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=Q(n);if(!l.isCompleteForPath(n)&&xn(n)>1)return e;const w=ve(n),T=l.getNode().getImmediateChild(m).updateChild(w,s);m===".priority"?c=u.updatePriority(l.getNode(),T):c=u.updateChild(l.getNode(),m,T,w,dp,null)}const d=rp(e,c,l.isFullyInitialized()||X(n),u.filtersNodes()),h=new Jl(i,d,r);return hp(t,d,n,i,h,a)}function Ka(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new Jl(i,e,r);if(X(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=yi(e,c,!0,t.filter.filtersNodes());else{const d=Q(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=yi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ve(n),m=a.getNode().getImmediateChild(d);let w;if(X(h))w=s;else{const E=u.getCompleteChild(d);E!=null?$l(h)===".priority"&&E.getChild(Qf(h)).isEmpty()?w=E:w=E.updateChild(h,s):w=q.EMPTY_NODE}if(m.equals(w))l=e;else{const E=t.filter.updateChild(a.getNode(),d,w,h,u,o);l=yi(e,E,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Zu(t,e){return t.eventCache.isCompleteForChild(e)}function _C(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ke(n,l);Zu(e,Q(u))&&(a=Ka(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ke(n,l);Zu(e,Q(u))||(a=Ka(t,a,u,c,i,r,o))}),a}function ed(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ya(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;X(n)?c=s:c=new _e(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),w=ed(t,m,h);l=qr(t,l,new fe(d),w,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const w=e.serverCache.getNode().getImmediateChild(d),E=ed(t,w,h);l=qr(t,l,new fe(d),E,i,r,o,a)}}),l}function wC(t,e,n,s,i,r,o){if(jr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(X(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return qr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(X(n)){let c=new _e(null);return l.getNode().forEachChild(Ss,(u,d)=>{c=c.set(new fe(u),d)}),Ya(t,e,n,c,i,r,a,o)}else return e}else{let c=new _e(null);return s.foreach((u,d)=>{const h=ke(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Ya(t,e,n,c,i,r,a,o)}}function vC(t,e,n,s,i){const r=e.serverCache,o=rp(e,r.getNode(),r.isFullyInitialized()||X(n),r.isFiltered());return hp(t,o,n,s,dp,i)}function yC(t,e,n,s,i,r){let o;if(jr(s,n)!=null)return e;{const a=new Jl(s,e,i),l=e.eventCache.getNode();let c;if(X(n)||Q(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=Wr(s,ss(e));else{const d=e.serverCache.getNode();S(d instanceof q,"serverChildren would be complete if leaf node"),u=Yl(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Q(n);let d=Ql(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ve(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,q.EMPTY_NODE,ve(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=Wr(s,ss(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||jr(s,oe())!=null,yi(e,c,o,t.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Wl(s.getIndex()),r=$b(s);this.processor_=fC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(q.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(q.EMPTY_NODE,a.getNode(),null),u=new ns(l,o.isFullyInitialized(),i.filtersNodes()),d=new ns(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=To(d,u),this.eventGenerator_=new zb(this.query_)}get query(){return this.query_}}function CC(t){return t.viewCache_.serverCache.getNode()}function EC(t,e){const n=ss(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!X(e)&&!n.getImmediateChild(Q(e)).isEmpty())?n.getChild(e):null}function td(t){return t.eventRegistrations_.length===0}function IC(t,e){t.eventRegistrations_.push(e)}function nd(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function sd(t,e,n,s){e.type===Pt.MERGE&&e.source.queryId!==null&&(S(ss(t.viewCache_),"We should always have a full cache before handling merges"),S(ja(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=mC(t.processor_,i,e,n,s);return pC(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,fp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function SC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Pe,(r,o)=>{s.push(Ls(r,o))}),n.isFullyInitialized()&&s.push(sp(n.getNode())),fp(t,s,n.getNode(),e)}function fp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Gb(t.eventGenerator_,e,n,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zr;class TC{constructor(){this.views=new Map}}function kC(t){S(!zr,"__referenceConstructor has already been defined"),zr=t}function PC(){return S(zr,"Reference.ts has not been loaded"),zr}function AC(t){return t.views.size===0}function Xl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),sd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(sd(o,e,n,s));return r}}function RC(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=Wr(n,i?s:null),l=!1;a?l=!0:s instanceof q?(a=Yl(n,s),l=!1):(a=q.EMPTY_NODE,l=!1);const c=To(new ns(a,l,!1),new ns(s,i,!1));return new bC(e,c)}return o}function xC(t,e,n,s,i,r){const o=RC(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),IC(o,n),SC(o,n)}function OC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=On(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(nd(c,n,s)),td(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(nd(l,n,s)),td(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!On(t)&&r.push(new(PC())(e._repo,e._path)),{removed:r,events:o}}function pp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ts(t,e){let n=null;for(const s of t.views.values())n=n||EC(s,e);return n}function mp(t,e){if(e._queryParams.loadsAllData())return ko(t);{const s=e._queryIdentifier;return t.views.get(s)}}function gp(t,e){return mp(t,e)!=null}function On(t){return ko(t)!=null}function ko(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Gr;function NC(t){S(!Gr,"__referenceConstructor has already been defined"),Gr=t}function MC(){return S(Gr,"Reference.ts has not been loaded"),Gr}let DC=1;class id{constructor(e){this.listenProvider_=e,this.syncPointTree_=new _e(null),this.pendingWriteTree_=cC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function _p(t,e,n,s,i){return Jb(t.pendingWriteTree_,e,n,s,i),i?Qs(t,new ts(ql(),e,n)):[]}function LC(t,e,n,s){Xb(t.pendingWriteTree_,e,n,s);const i=_e.fromObject(n);return Qs(t,new Bs(ql(),e,i))}function En(t,e,n=!1){const s=Zb(t.pendingWriteTree_,e);if(eC(t.pendingWriteTree_,e)){let r=new _e(null);return s.snap!=null?r=r.set(oe(),!0):$e(s.children,o=>{r=r.set(new fe(o),!0)}),Qs(t,new Vr(s.path,r,n))}else return[]}function Po(t,e,n){return Qs(t,new ts(zl(),e,n))}function BC(t,e,n){const s=_e.fromObject(n);return Qs(t,new Bs(zl(),e,s))}function FC(t,e){return Qs(t,new $i(zl(),e))}function $C(t,e,n){const s=ec(t,n);if(s){const i=tc(s),r=i.path,o=i.queryId,a=it(r,e),l=new $i(Gl(o),a);return nc(t,r,l)}else return[]}function Qa(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||gp(o,e))){const l=OC(o,e,n,s);AC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>On(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=VC(h);for(let w=0;w<m.length;++w){const E=m[w],T=E.query,B=yp(t,E);t.listenProvider_.startListening(Ci(T),Kr(t,T),B.hashFn,B.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Ci(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(Ao(h));t.listenProvider_.stopListening(Ci(h),m)}))}WC(t,c)}return a}function UC(t,e,n,s){const i=ec(t,s);if(i!=null){const r=tc(i),o=r.path,a=r.queryId,l=it(o,e),c=new ts(Gl(a),l,n);return nc(t,o,c)}else return[]}function HC(t,e,n,s){const i=ec(t,s);if(i){const r=tc(i),o=r.path,a=r.queryId,l=it(o,e),c=_e.fromObject(n),u=new Bs(Gl(a),l,c);return nc(t,o,u)}else return[]}function rd(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const w=it(h,i);r=r||Ts(m,w),o=o||On(m)});let a=t.syncPointTree_.get(i);a?(o=o||On(a),r=r||Ts(a,oe())):(a=new TC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=q.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,w)=>{const E=Ts(w,oe());E&&(r=r.updateImmediateChild(m,E))}));const c=gp(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Ao(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=jC();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=Kl(t.pendingWriteTree_,i);let d=xC(a,e,n,u,r,l);if(!c&&!o&&!s){const h=mp(a,e);d=d.concat(qC(t,e,h))}return d}function Zl(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=it(o,e),c=Ts(a,l);if(c)return c});return lp(i,e,r,n,!0)}function Qs(t,e){return wp(e,t.syncPointTree_,null,Kl(t.pendingWriteTree_,oe()))}function wp(t,e,n,s){if(X(t.path))return vp(t,e,n,s);{const i=e.get(oe());n==null&&i!=null&&(n=Ts(i,oe()));let r=[];const o=Q(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=cp(s,o);r=r.concat(wp(a,l,c,u))}return i&&(r=r.concat(Xl(i,t,s,n))),r}}function vp(t,e,n,s){const i=e.get(oe());n==null&&i!=null&&(n=Ts(i,oe()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=cp(s,o),u=t.operationForChild(o);u&&(r=r.concat(vp(u,a,l,c)))}),i&&(r=r.concat(Xl(i,t,s,n))),r}function yp(t,e){const n=e.query,s=Kr(t,n);return{hashFn:()=>(CC(e)||q.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?$C(t,n._path,s):FC(t,n._path);{const r=By(i,n);return Qa(t,n,null,r)}}}}function Kr(t,e){const n=Ao(e);return t.queryToTagMap.get(n)}function Ao(t){return t._path.toString()+"$"+t._queryIdentifier}function ec(t,e){return t.tagToQueryMap.get(e)}function tc(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new fe(t.substr(0,e))}}function nc(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=Kl(t.pendingWriteTree_,e);return Xl(s,n,i,null)}function VC(t){return t.fold((e,n,s)=>{if(n&&On(n))return[ko(n)];{let i=[];return n&&(i=pp(n)),$e(s,(r,o)=>{i=i.concat(o)}),i}})}function Ci(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(MC())(t._repo,t._path):t}function WC(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Ao(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function jC(){return DC++}function qC(t,e,n){const s=e._path,i=Kr(t,e),r=yp(t,n),o=t.listenProvider_.startListening(Ci(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)S(!On(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!X(c)&&u&&On(u))return[ko(u).query];{let h=[];return u&&(h=h.concat(pp(u).map(m=>m.query))),$e(d,(m,w)=>{h=h.concat(w)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Ci(u),Kr(t,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new sc(n)}node(){return this.node_}}class ic{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ke(this.path_,e);return new ic(this.syncTree_,n)}node(){return Zl(this.syncTree_,this.path_)}}const zC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},od=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return GC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return KC(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},GC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},KC=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},bp=function(t,e,n,s){return rc(e,new ic(n,t),s)},Cp=function(t,e,n){return rc(t,new sc(e),n)};function rc(t,e,n){const s=t.getPriority().val(),i=od(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=od(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,De(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ne(i))),o.forEachChild(Pe,(a,l)=>{const c=rc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function ac(t,e){let n=e instanceof fe?e:new fe(e),s=t,i=Q(n);for(;i!==null;){const r=Ns(s.node.children,i)||{children:{},childCount:0};s=new oc(i,s,r),n=ve(n),i=Q(n)}return s}function Js(t){return t.node.value}function Ep(t,e){t.node.value=e,Ja(t)}function Ip(t){return t.node.childCount>0}function YC(t){return Js(t)===void 0&&!Ip(t)}function Ro(t,e){$e(t.node.children,(n,s)=>{e(new oc(n,t,s))})}function Sp(t,e,n,s){n&&e(t),Ro(t,i=>{Sp(i,e,!0)})}function QC(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Ji(t){return new fe(t.parent===null?t.name:Ji(t.parent)+"/"+t.name)}function Ja(t){t.parent!==null&&JC(t.parent,t.name,t)}function JC(t,e,n){const s=YC(n),i=Yt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Ja(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Ja(t))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XC=/[\[\].#$\/\u0000-\u001F\u007F]/,ZC=/[\[\].#$\u0000-\u001F\u007F]/,fa=10*1024*1024,lc=function(t){return typeof t=="string"&&t.length!==0&&!XC.test(t)},Tp=function(t){return typeof t=="string"&&t.length!==0&&!ZC.test(t)},eE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Tp(t)},tE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Ml(t)||t&&typeof t=="object"&&Yt(t,".sv")},kp=function(t,e,n,s){s&&e===void 0||xo(Eo(t,"value"),e,n)},xo=function(t,e,n){const s=n instanceof fe?new _b(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+jn(s));if(typeof e=="function")throw new Error(t+"contains a function "+jn(s)+" with contents = "+e.toString());if(Ml(e))throw new Error(t+"contains "+e.toString()+" "+jn(s));if(typeof e=="string"&&e.length>fa/3&&Io(e)>fa)throw new Error(t+"contains a string greater than "+fa+" utf8 bytes "+jn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if($e(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!lc(o)))throw new Error(t+" contains an invalid key ("+o+") "+jn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);wb(s,o),xo(t,a,s),vb(s)}),i&&r)throw new Error(t+' contains ".value" child '+jn(s)+" in addition to actual children.")}},nE=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Di(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!lc(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(gb);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&yt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},sE=function(t,e,n,s){const i=Eo(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];$e(e,(o,a)=>{const l=new fe(o);if(xo(i,a,ke(n,l)),$l(l)===".priority"&&!tE(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),nE(i,r)},Pp=function(t,e,n,s){if(!Tp(n))throw new Error(Eo(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},iE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Pp(t,e,n)},Ap=function(t,e){if(Q(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},rE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!lc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!eE(n))throw new Error(Eo(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Oo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Ul(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Rp(t,e,n){Oo(t,n),xp(t,s=>Ul(s,e))}function Nt(t,e,n){Oo(t,n),xp(t,s=>yt(s,e)||yt(e,s))}function xp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(aE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function aE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();wi&&Fe("event: "+n.toString()),Ys(s)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lE="repo_interrupt",cE=25;class uE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new oE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Hr(),this.transactionQueueTree_=new oc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function dE(t,e,n){if(t.stats_=Bl(t.repoInfo_),t.forceRestClient_||Hy())t.server_=new Ur(t.repoInfo_,(s,i,r,o)=>{ad(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>ld(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Le(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new an(t.repoInfo_,e,(s,i,r,o)=>{ad(t,s,i,r,o)},s=>{ld(t,s)},s=>{hE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=zy(t.repoInfo_,()=>new qb(t.stats_,t.server_)),t.infoData_=new Ub,t.infoSyncTree_=new id({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Po(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),cc(t,"connected",!1),t.serverSyncTree_=new id({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Nt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Op(t){const n=t.infoData_.getNode(new fe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function No(t){return zC({timestamp:Op(t)})}function ad(t,e,n,s,i){t.dataUpdateCount++;const r=new fe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Dr(n,c=>De(c));o=HC(t.serverSyncTree_,r,l,i)}else{const l=De(n);o=UC(t.serverSyncTree_,r,l,i)}else if(s){const l=Dr(n,c=>De(c));o=BC(t.serverSyncTree_,r,l)}else{const l=De(n);o=Po(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=$s(t,r)),Nt(t.eventQueue_,a,o)}function ld(t,e){cc(t,"connected",e),e===!1&&mE(t)}function hE(t,e){$e(e,(n,s)=>{cc(t,n,s)})}function cc(t,e,n){const s=new fe("/.info/"+e),i=De(n);t.infoData_.updateSnapshot(s,i);const r=Po(t.infoSyncTree_,s,i);Nt(t.eventQueue_,s,r)}function uc(t){return t.nextWriteId_++}function fE(t,e,n,s,i){Mo(t,"set",{path:e.toString(),value:n,priority:s});const r=No(t),o=De(n,s),a=Zl(t.serverSyncTree_,e),l=Cp(o,a,r),c=uc(t),u=_p(t.serverSyncTree_,e,l,c,!0);Oo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const w=h==="ok";w||Qe("set at "+e+" failed: "+h);const E=En(t.serverSyncTree_,c,!w);Nt(t.eventQueue_,e,E),Xa(t,i,h,m)});const d=hc(t,e);$s(t,d),Nt(t.eventQueue_,d,[])}function pE(t,e,n,s){Mo(t,"update",{path:e.toString(),value:n});let i=!0;const r=No(t),o={};if($e(n,(a,l)=>{i=!1,o[a]=bp(ke(e,a),De(l),t.serverSyncTree_,r)}),i)Fe("update() called with empty data.  Don't do anything."),Xa(t,s,"ok",void 0);else{const a=uc(t),l=LC(t.serverSyncTree_,e,o,a);Oo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||Qe("update at "+e+" failed: "+c);const h=En(t.serverSyncTree_,a,!d),m=h.length>0?$s(t,e):e;Nt(t.eventQueue_,m,h),Xa(t,s,c,u)}),$e(n,c=>{const u=hc(t,ke(e,c));$s(t,u)}),Nt(t.eventQueue_,e,[])}}function mE(t){Mo(t,"onDisconnectEvents");const e=No(t),n=Hr();Wa(t.onDisconnect_,oe(),(i,r)=>{const o=bp(i,r,t.serverSyncTree_,e);ip(n,i,o)});let s=[];Wa(n,oe(),(i,r)=>{s=s.concat(Po(t.serverSyncTree_,i,r));const o=hc(t,i);$s(t,o)}),t.onDisconnect_=Hr(),Nt(t.eventQueue_,oe(),s)}function gE(t,e,n){let s;Q(e._path)===".info"?s=rd(t.infoSyncTree_,e,n):s=rd(t.serverSyncTree_,e,n),Rp(t.eventQueue_,e._path,s)}function _E(t,e,n){let s;Q(e._path)===".info"?s=Qa(t.infoSyncTree_,e,n):s=Qa(t.serverSyncTree_,e,n),Rp(t.eventQueue_,e._path,s)}function wE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(lE)}function Mo(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Fe(n,...e)}function Xa(t,e,n,s){e&&Ys(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Np(t,e,n){return Zl(t.serverSyncTree_,e,n)||q.EMPTY_NODE}function dc(t,e=t.transactionQueueTree_){if(e||Do(t,e),Js(e)){const n=Dp(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&vE(t,Ji(e),n)}else Ip(e)&&Ro(e,n=>{dc(t,n)})}function vE(t,e,n){const s=n.map(c=>c.currentWriteId),i=Np(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=it(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{Mo(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(En(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Do(t,ac(t.transactionQueueTree_,e)),dc(t,t.transactionQueueTree_),Nt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Ys(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{Qe("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}$s(t,e)}},o)}function $s(t,e){const n=Mp(t,e),s=Ji(n),i=Dp(t,n);return yE(t,i,s),s}function yE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=it(n,l.path);let u=!1,d;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(En(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=cE)u=!0,d="maxretry",i=i.concat(En(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Np(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){xo("transaction failed: Data returned ",m,l.path);let w=De(m);typeof m=="object"&&m!=null&&Yt(m,".priority")||(w=w.updatePriority(h.getPriority()));const T=l.currentWriteId,B=No(t),M=Cp(w,h,B);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=M,l.currentWriteId=uc(t),o.splice(o.indexOf(T),1),i=i.concat(_p(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),i=i.concat(En(t.serverSyncTree_,T,!0))}else u=!0,d="nodata",i=i.concat(En(t.serverSyncTree_,l.currentWriteId,!0))}Nt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Do(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ys(s[a]);dc(t,t.transactionQueueTree_)}function Mp(t,e){let n,s=t.transactionQueueTree_;for(n=Q(e);n!==null&&Js(s)===void 0;)s=ac(s,n),e=ve(e),n=Q(e);return s}function Dp(t,e){const n=[];return Lp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Lp(t,e,n){const s=Js(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Ro(e,i=>{Lp(t,i,n)})}function Do(t,e){const n=Js(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,Ep(e,n.length>0?n:void 0)}Ro(e,s=>{Do(t,s)})}function hc(t,e){const n=Ji(Mp(t,e)),s=ac(t.transactionQueueTree_,e);return QC(s,i=>{pa(t,i)}),pa(t,s),Sp(s,i=>{pa(t,i)}),n}function pa(t,e){const n=Js(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(En(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Ep(e,void 0):n.length=r+1,Nt(t.eventQueue_,Ji(e),i);for(let o=0;o<s.length;o++)Ys(s[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function CE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):Qe(`Invalid query segment '${n}' in query '${t}'`)}return e}const cd=function(t,e){const n=EE(t),s=n.namespace;n.domain==="firebase.com"&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Oy();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Hf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new fe(n.pathString)}},EE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=bE(t.substring(u,d)));const h=CE(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",IE=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=ud.charAt(n%64),n=Math.floor(n/64);S(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=ud.charAt(e[i]);return S(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Le(this.snapshot.exportVal())}}class TE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return X(this._path)?null:$l(this._path)}get ref(){return new Bn(this._repo,this._path)}get _queryIdentifier(){const e=Ku(this._queryParams),n=Dl(e);return n==="{}"?"default":n}get _queryObject(){return Ku(this._queryParams)}isEqual(e){if(e=ft(e),!(e instanceof fc))return!1;const n=this._repo===e._repo,s=Ul(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+mb(this._path)}}class Bn extends fc{constructor(e,n){super(e,n,new jl,!1)}get parent(){const e=Qf(this._path);return e===null?null:new Bn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Yr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new fe(e),s=Ui(this.ref,e);return new Yr(this._node.getChild(n),s,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Yr(i,Ui(this.ref,s),Pe)))}hasChild(e){const n=new fe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vr(t,e){return t=ft(t),t._checkNotDeleted("ref"),e!==void 0?Ui(t._root,e):t._root}function Ui(t,e){return t=ft(t),Q(t._path)===null?iE("child","path",e):Pp("child","path",e),new Bn(t._repo,ke(t._path,e))}function PE(t,e){t=ft(t),Ap("push",t._path),kp("push",e,t._path,!0);const n=Op(t._repo),s=IE(n),i=Ui(t,s),r=Ui(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function AE(t,e){t=ft(t),Ap("set",t._path),kp("set",e,t._path,!1);const n=new zi;return fE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function RE(t,e){sE("update",e,t._path);const n=new zi;return pE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class pc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new SE("value",this,new Yr(e.snapshotNode,new Bn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new TE(this,e,n):null}matches(e){return e instanceof pc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function xE(t,e,n,s,i){const r=new kE(n,void 0),o=new pc(r);return gE(t._repo,t,o),()=>_E(t._repo,t,o)}function Bp(t,e,n,s){return xE(t,"value",e)}kC(Bn);NC(Bn);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const OE="FIREBASE_DATABASE_EMULATOR_HOST",Za={};let NE=!1;function ME(t,e,n,s){t.repoInfo_=new Hf(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function DE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Fe("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=cd(r,i),a=o.repoInfo,l;typeof process<"u"&&Ru&&(l=Ru[OE]),l?(r=`http://${l}?ns=${a.namespace}`,o=cd(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new Wy(t.name,t.options,e);rE("Invalid Firebase Database URL",o),X(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const u=BE(a,t,c,new Vy(t,n));return new FE(u,t)}function LE(t,e){const n=Za[e];(!n||n[t.key]!==t)&&un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),wE(t),delete n[t.key]}function BE(t,e,n,s){let i=Za[e.name];i||(i={},Za[e.name]=i);let r=i[t.toURLString()];return r&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new uE(t,NE,n,s),i[t.toURLString()]=r,r}class FE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(dE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Bn(this._repo,oe())),this._rootInternal}_delete(){return this._rootInternal!==null&&(LE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function $E(t=If(),e){const n=Nl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Xw("database");s&&UE(n,...s)}return n}function UE(t,e,n,s={}){t=ft(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Xn(s,r.repoInfo_.emulatorOptions))return;un("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new wr(wr.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Zw(s.mockUserToken,t.app.options.projectId);o=new wr(a)}ME(r,i,s,o)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function HE(t){Ty(Ks),Ms(new Zn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return DE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),An(xu,Ou,t),An(xu,Ou,"esm2017")}an.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};an.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};HE();function mc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Fp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const VE=Fp,$p=new Gi("auth","Firebase",Fp());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr=new xl("@firebase/auth");function WE(t,...e){Qr.logLevel<=he.WARN&&Qr.warn(`Auth (${Ks}): ${t}`,...e)}function yr(t,...e){Qr.logLevel<=he.ERROR&&Qr.error(`Auth (${Ks}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gt(t,...e){throw _c(t,...e)}function Ot(t,...e){return _c(t,...e)}function gc(t,e,n){const s=Object.assign(Object.assign({},VE()),{[e]:n});return new Gi("auth","Firebase",s).create(e,{appName:t.name})}function Kn(t){return gc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function jE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Gt(t,"argument-error"),gc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function _c(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return $p.create(t,...e)}function z(t,e,...n){if(!t)throw _c(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw yr(e),new Error(e)}function dn(t,e){t||sn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function el(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function qE(){return dd()==="http:"||dd()==="https:"}function dd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zE(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(qE()||tv()||"connection"in navigator)?navigator.onLine:!0}function GE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xi{constructor(e,n){this.shortDelay=e,this.longDelay=n,dn(n>e,"Short delay should be less than long delay!"),this.isMobile=Rl()||vf()}get(){return zE()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wc(t,e){dn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Up{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const YE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],QE=new Xi(3e4,6e4);function vc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Xs(t,e,n,s,i={}){return Hp(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Gs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return ev()||(c.referrerPolicy="no-referrer"),Up.fetch()(await Vp(t,t.config.apiHost,n,a),c)})}async function Hp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},KE),e);try{const i=new XE(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw fr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw gc(t,u,c);Gt(t,u)}}catch(i){if(i instanceof Ln)throw i;Gt(t,"network-request-failed",{message:String(i)})}}async function JE(t,e,n,s,i={}){const r=await Xs(t,e,n,s,i);return"mfaPendingCredential"in r&&Gt(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Vp(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?wc(t.config,i):`${t.config.apiScheme}://${i}`;return YE.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class XE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ot(this.auth,"network-request-failed")),QE.get())})}}function fr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ot(t,e,s);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ZE(t,e){return Xs(t,"POST","/v1/accounts:delete",e)}async function Jr(t,e){return Xs(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ei(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function e0(t,e=!1){const n=ft(t),s=await n.getIdToken(e),i=yc(s);z(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ei(ma(i.auth_time)),issuedAtTime:Ei(ma(i.iat)),expirationTime:Ei(ma(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ma(t){return Number(t)*1e3}function yc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return yr("JWT malformed, contained fewer than 3 sections"),null;try{const i=Mr(n);return i?JSON.parse(i):(yr("Failed to decode base64 JWT payload"),null)}catch(i){return yr("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function hd(t){const e=yc(t);return z(e,"internal-error"),z(typeof e.exp<"u","internal-error"),z(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Hi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Ln&&t0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function t0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ei(this.lastLoginAt),this.creationTime=Ei(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Hi(t,Jr(n,{idToken:s}));z(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Wp(r.providerUserInfo):[],a=i0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new tl(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function s0(t){const e=ft(t);await Xr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function i0(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Wp(t){return t.map(e=>{var{providerId:n}=e,s=mc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function r0(t,e){const n=await Hp(t,{},async()=>{const s=Gs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await Vp(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Up.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function o0(t,e){return Xs(t,"POST","/v2/accounts:revokeToken",vc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){z(e.idToken,"internal-error"),z(typeof e.idToken<"u","internal-error"),z(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):hd(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){z(e.length!==0,"internal-error");const n=hd(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(z(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await r0(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ks;return s&&(z(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(z(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(z(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pn(t,e){z(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=mc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new n0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new tl(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Hi(this,this.stsTokenManager.getToken(this.auth,e));return z(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return e0(this,e)}reload(){return s0(this)}_assign(e){this!==e&&(z(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){z(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Xr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(St(this.auth.app))return Promise.reject(Kn(this.auth));const e=await this.getIdToken();return await Hi(this,ZE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,T=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,B=(c=n.createdAt)!==null&&c!==void 0?c:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:F,emailVerified:D,isAnonymous:se,providerData:Ee,stsTokenManager:de}=n;z(F&&de,e,"internal-error");const et=ks.fromJSON(this.name,de);z(typeof F=="string",e,"internal-error"),pn(d,e.name),pn(h,e.name),z(typeof D=="boolean",e,"internal-error"),z(typeof se=="boolean",e,"internal-error"),pn(m,e.name),pn(w,e.name),pn(E,e.name),pn(T,e.name),pn(B,e.name),pn(M,e.name);const tt=new At({uid:F,auth:e,email:h,emailVerified:D,displayName:d,isAnonymous:se,photoURL:w,phoneNumber:m,tenantId:E,stsTokenManager:et,createdAt:B,lastLoginAt:M});return Ee&&Array.isArray(Ee)&&(tt.providerData=Ee.map(nt=>Object.assign({},nt))),T&&(tt._redirectEventId=T),tt}static async _fromIdTokenResponse(e,n,s=!1){const i=new ks;i.updateFromServerResponse(n);const r=new At({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Xr(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];z(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Wp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ks;a.updateFromIdToken(s);const l=new At({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new tl(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fd=new Map;function rn(t){dn(t instanceof Function,"Expected a class definition");let e=fd.get(t);return e?(dn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,fd.set(t,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}jp.type="NONE";const pd=jp;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=br(this.userKey,i.apiKey,r),this.fullPersistenceKey=br("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Jr(this.auth,{idToken:e}).catch(()=>{});return n?At._fromGetAccountInfoResponse(this.auth,n,e):null}return At._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ps(rn(pd),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||rn(pd);const o=br(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const h=await Jr(e,{idToken:u}).catch(()=>{});if(!h)break;d=await At._fromGetAccountInfoResponse(e,h,u)}else d=At._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ps(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ps(r,e,s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Kp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(qp(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Qp(e))return"Blackberry";if(Jp(e))return"Webos";if(zp(e))return"Safari";if((e.includes("chrome/")||Gp(e))&&!e.includes("edge/"))return"Chrome";if(Yp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function qp(t=Je()){return/firefox\//i.test(t)}function zp(t=Je()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Gp(t=Je()){return/crios\//i.test(t)}function Kp(t=Je()){return/iemobile/i.test(t)}function Yp(t=Je()){return/android/i.test(t)}function Qp(t=Je()){return/blackberry/i.test(t)}function Jp(t=Je()){return/webos/i.test(t)}function bc(t=Je()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function a0(t=Je()){var e;return bc(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function l0(){return nv()&&document.documentMode===10}function Xp(t=Je()){return bc(t)||Yp(t)||Jp(t)||Qp(t)||/windows phone/i.test(t)||Kp(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zp(t,e=[]){let n;switch(t){case"Browser":n=md(Je());break;case"Worker":n=`${md(Je())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ks}/${s}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function u0(t,e={}){return Xs(t,"GET","/v2/passwordPolicy",vc(t,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const d0=6;class h0{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:d0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class f0{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gd(this),this.idTokenSubscription=new gd(this),this.beforeStateQueue=new c0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=$p,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Jr(this,{idToken:e}),s=await At._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(St(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return z(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Xr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=GE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(St(this.app))return Promise.reject(Kn(this));const n=e?ft(e):null;return n&&z(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&z(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return St(this.app)?Promise.reject(Kn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return St(this.app)?Promise.reject(Kn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await u0(this),n=new h0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Gi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await o0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;z(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(z(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return z(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Zp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(St(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&WE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Lo(t){return ft(t)}class gd{constructor(e){this.auth=e,this.observer=null,this.addObserver=hv(n=>this.observer=n)}get next(){return z(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Cc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function p0(t){Cc=t}function m0(t){return Cc.loadJS(t)}function g0(){return Cc.gapiScript}function _0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w0(t,e){const n=Nl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Xn(r,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function v0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function y0(t,e,n){const s=Lo(t);z(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=em(e),{host:o,port:a}=b0(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){z(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),z(Xn(c,s.config.emulator)&&Xn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,C0()}function em(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function b0(t){const e=em(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:_d(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:_d(o)}}}function _d(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function C0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function As(t,e){return JE(t,"POST","/v1/accounts:signInWithIdp",vc(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E0="http://localhost";class is extends tm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new is(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=mc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new is(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,As(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:E0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Gs(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ec{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zi extends Ec{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn extends Zi{constructor(){super("facebook.com")}static credential(e){return is._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tn extends Zi{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return is._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return tn.credential(n,s)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn extends Zi{constructor(){super("github.com")}static credential(e){return is._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cn extends Zi{constructor(){super("twitter.com")}static credential(e,n){return is._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Cn.credential(n,s)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Us{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await At._fromIdTokenResponse(e,s,i),o=wd(s);return new Us({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=wd(s);return new Us({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function wd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zr extends Ln{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Zr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Zr(e,n,s,i)}}function nm(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Zr._fromErrorAndOperation(t,r,e,s):r})}async function I0(t,e,n=!1){const s=await Hi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return Us._forOperation(t,"link",s)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function S0(t,e,n=!1){const{auth:s}=t;if(St(s.app))return Promise.reject(Kn(s));const i="reauthenticate";try{const r=await Hi(t,nm(s,i,e,t),n);z(r.idToken,s,"internal-error");const o=yc(r.idToken);z(o,s,"internal-error");const{sub:a}=o;return z(t.uid===a,s,"user-mismatch"),Us._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Gt(s,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function T0(t,e,n=!1){if(St(t.app))return Promise.reject(Kn(t));const s="signIn",i=await nm(t,s,e),r=await Us._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function k0(t,e,n,s){return ft(t).onIdTokenChanged(e,n,s)}function P0(t,e,n){return ft(t).beforeAuthStateChanged(e,n)}function A0(t){return ft(t).signOut()}const eo="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(eo,"1"),this.storage.removeItem(eo),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const R0=1e3,x0=10;class im extends sm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=Xp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);l0()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,x0):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},R0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}im.type="LOCAL";const O0=im;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rm extends sm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}rm.type="SESSION";const om=rm;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function N0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Bo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await N0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Bo.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Ic("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qt(){return window}function D0(t){qt().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function am(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function L0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function B0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function F0(){return am()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lm="firebaseLocalStorageDb",$0=1,to="firebaseLocalStorage",cm="fbase_key";class er{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Fo(t,e){return t.transaction([to],e?"readwrite":"readonly").objectStore(to)}function U0(){const t=indexedDB.deleteDatabase(lm);return new er(t).toPromise()}function nl(){const t=indexedDB.open(lm,$0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(to,{keyPath:cm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(to)?e(s):(s.close(),await U0(),e(await nl()))})})}async function vd(t,e,n){const s=Fo(t,!0).put({[cm]:e,value:n});return new er(s).toPromise()}async function H0(t,e){const n=Fo(t,!1).get(e),s=await new er(n).toPromise();return s===void 0?null:s.value}function yd(t,e){const n=Fo(t,!0).delete(e);return new er(n).toPromise()}const V0=800,W0=3;class um{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await nl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>W0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return am()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Bo._getInstance(F0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await L0(),!this.activeServiceWorker)return;this.sender=new M0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||B0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await nl();return await vd(e,eo,"1"),await yd(e,eo),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>vd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>H0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>yd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Fo(i,!1).getAll();return new er(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),V0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}um.type="LOCAL";const j0=um;new Xi(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(t,e){return e?rn(e):(z(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sc extends tm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function q0(t){return T0(t.auth,new Sc(t),t.bypassAuthState)}function z0(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),S0(n,new Sc(t),t.bypassAuthState)}async function G0(t){const{auth:e,user:n}=t;return z(n,e,"internal-error"),I0(n,new Sc(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hm{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return q0;case"linkViaPopup":case"linkViaRedirect":return G0;case"reauthViaPopup":case"reauthViaRedirect":return z0;default:Gt(this.auth,"internal-error")}}resolve(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){dn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const K0=new Xi(2e3,1e4);async function Y0(t,e,n){if(St(t.app))return Promise.reject(Ot(t,"operation-not-supported-in-this-environment"));const s=Lo(t);jE(t,e,Ec);const i=dm(s,n);return new zn(s,"signInViaPopup",e,i).executeNotNull()}class zn extends hm{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,zn.currentPopupAction&&zn.currentPopupAction.cancel(),zn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return z(e,this.auth,"internal-error"),e}async onExecution(){dn(this.filter.length===1,"Popup operations only handle one event");const e=Ic();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,zn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,K0.get())};e()}}zn.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Q0="pendingRedirect",Cr=new Map;class J0 extends hm{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Cr.get(this.auth._key());if(!e){try{const s=await X0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Cr.set(this.auth._key(),e)}return this.bypassAuthState||Cr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function X0(t,e){const n=tI(e),s=eI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function Z0(t,e){Cr.set(t._key(),e)}function eI(t){return rn(t._redirectPersistence)}function tI(t){return br(Q0,t.config.apiKey,t.name)}async function nI(t,e,n=!1){if(St(t.app))return Promise.reject(Kn(t));const s=Lo(t),i=dm(s,e),o=await new J0(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sI=10*60*1e3;class iI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!rI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!fm(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=sI&&this.cachedEventUids.clear(),this.cachedEventUids.has(bd(e))}saveEventToCache(e){this.cachedEventUids.add(bd(e)),this.lastProcessedEventTime=Date.now()}}function bd(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function fm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function rI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return fm(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function oI(t,e={}){return Xs(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,lI=/^https?/;async function cI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await oI(t);for(const n of e)try{if(uI(n))return}catch{}Gt(t,"unauthorized-domain")}function uI(t){const e=el(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!lI.test(n))return!1;if(aI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dI=new Xi(3e4,6e4);function Cd(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function hI(t){return new Promise((e,n)=>{var s,i,r;function o(){Cd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Cd(),n(Ot(t,"network-request-failed"))},timeout:dI.get()})}if(!((i=(s=qt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=qt().gapi)===null||r===void 0)&&r.load)o();else{const a=_0("iframefcb");return qt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},m0(`${g0()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw Er=null,e})}let Er=null;function fI(t){return Er=Er||hI(t),Er}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pI=new Xi(5e3,15e3),mI="__/auth/iframe",gI="emulator/auth/iframe",_I={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},wI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function vI(t){const e=t.config;z(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wc(e,gI):`https://${t.config.authDomain}/${mI}`,s={apiKey:e.apiKey,appName:t.name,v:Ks},i=wI.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Gs(s).slice(1)}`}async function yI(t){const e=await fI(t),n=qt().gapi;return z(n,t,"internal-error"),e.open({where:document.body,url:vI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:_I,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=qt().setTimeout(()=>{r(o)},pI.get());function l(){qt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},CI=500,EI=600,II="_blank",SI="http://localhost";class Ed{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function TI(t,e,n,s=CI,i=EI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},bI),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Je().toLowerCase();n&&(a=Gp(c)?II:n),qp(c)&&(e=e||SI,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,w])=>`${h}${m}=${w},`,"");if(a0(c)&&a!=="_self")return kI(e||"",a),new Ed(null);const d=window.open(e||"",a,u);z(d,t,"popup-blocked");try{d.focus()}catch{}return new Ed(d)}function kI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const PI="__/auth/handler",AI="emulator/auth/handler",RI=encodeURIComponent("fac");async function Id(t,e,n,s,i,r){z(t.config.authDomain,t,"auth-domain-config-required"),z(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Ks,eventId:i};if(e instanceof Ec){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ma(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Zi){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${RI}=${encodeURIComponent(l)}`:"";return`${xI(t)}?${Gs(a).slice(1)}${c}`}function xI({config:t}){return t.emulator?wc(t,AI):`https://${t.authDomain}/${PI}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ga="webStorageSupport";class OI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=om,this._completeRedirectFn=nI,this._overrideRedirectResult=Z0}async _openPopup(e,n,s,i){var r;dn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Id(e,n,s,el(),i);return TI(e,o,Ic())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Id(e,n,s,el(),i);return D0(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(dn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await yI(e),s=new iI(e);return n.register("authEvent",i=>(z(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(ga,{type:ga},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[ga];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=cI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return Xp()||zp()||bc()}}const NI=OI;var Sd="@firebase/auth",Td="1.10.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){z(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function DI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function LI(t){Ms(new Zn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;z(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Zp(t)},c=new f0(s,i,r,l);return v0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ms(new Zn("auth-internal",e=>{const n=Lo(e.getProvider("auth").getImmediate());return(s=>new MI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(Sd,Td,DI(t)),An(Sd,Td,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const BI=5*60,FI=wf("authIdTokenMaxAge")||BI;let kd=null;const $I=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>FI)return;const i=n==null?void 0:n.token;kd!==i&&(kd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function UI(t=If()){const e=Nl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=w0(t,{popupRedirectResolver:NI,persistence:[j0,O0,om]}),s=wf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=$I(r.toString());P0(n,o,()=>o(n.currentUser)),k0(n,a=>o(a))}}const i=gf("auth");return i&&y0(n,`http://${i}`),n}function HI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}p0({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ot("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",HI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});LI("Browser");const VI={apiKey:"AIzaSyBA6z3KtW9-3XxqvvsudpSPOls0isD7xx8",authDomain:"lax-scoreboard.firebaseapp.com",databaseURL:"https://lax-scoreboard-default-rtdb.firebaseio.com",projectId:"lax-scoreboard",storageBucket:"lax-scoreboard.appspot.com",messagingSenderId:"560143102921",appId:"1:560143102921:web:6e3a5d98726cecceeeae18"},pm=Ef(VI),Ir=$E(pm),Sr=UI(pm),$o=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},WI={data(){return{user:null,isAllowed:!1,allowedEmails:["jonny5v@gmail.com"],isPublicView:!1}},created(){Sr.onAuthStateChanged(t=>{this.user=t,this.user?this.isAllowed=this.allowedEmails.includes(this.user.email):this.isAllowed=!1})},methods:{loginWithGoogle(){const t=new tn;Y0(Sr,t).then(e=>{const n=e.user;console.log("User signed in: ",n)}).catch(e=>{console.error("Error during Google sign-in: ",e)})},logout(){A0(Sr).then(()=>{console.log("User signed out"),this.$router.push("/")}).catch(t=>{console.error("Error signing out:",t)})}}},jI={class:"container mb-2"},qI={class:"position-fixed bottom-0 end-0 m-2"},zI={key:2};function GI(t,e,n,s,i,r){const o=Yc("router-view"),a=Yc("router-link");return Z(),te("div",null,[Se(o),H("div",jI,[H("div",qI,[Se(a,{to:"/",class:"btn btn-outline-secondary btn-sm me-2"},{default:ka(()=>e[2]||(e[2]=[Ri("Public")])),_:1}),i.user&&i.isAllowed?(Z(),of(a,{key:0,to:"/control",class:"btn btn-outline-primary btn-sm me-2"},{default:ka(()=>e[3]||(e[3]=[Ri("Control")])),_:1})):Ye("",!0),i.user?Ye("",!0):(Z(),te("button",{key:1,class:"btn btn-secondary btn-sm",onClick:e[0]||(e[0]=(...l)=>r.loginWithGoogle&&r.loginWithGoogle(...l))},"Login to Access Controls")),i.user&&!i.isAllowed?(Z(),te("p",zI,"You are not authorized to access this content.")):Ye("",!0),i.user?(Z(),te("button",{key:3,class:"btn btn-danger btn-sm",onClick:e[1]||(e[1]=(...l)=>r.logout&&r.logout(...l))},"Logout")):Ye("",!0)])])])}const KI=$o(WI,[["render",GI]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ms=typeof document<"u";function mm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function YI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&mm(t.default)}const ae=Object.assign;function _a(t,e){const n={};for(const s in e){const i=e[s];n[s]=Mt(i)?i.map(t):t(i)}return n}const Ii=()=>{},Mt=Array.isArray,gm=/#/g,QI=/&/g,JI=/\//g,XI=/=/g,ZI=/\?/g,_m=/\+/g,eS=/%5B/g,tS=/%5D/g,wm=/%5E/g,nS=/%60/g,vm=/%7B/g,sS=/%7C/g,ym=/%7D/g,iS=/%20/g;function Tc(t){return encodeURI(""+t).replace(sS,"|").replace(eS,"[").replace(tS,"]")}function rS(t){return Tc(t).replace(vm,"{").replace(ym,"}").replace(wm,"^")}function sl(t){return Tc(t).replace(_m,"%2B").replace(iS,"+").replace(gm,"%23").replace(QI,"%26").replace(nS,"`").replace(vm,"{").replace(ym,"}").replace(wm,"^")}function oS(t){return sl(t).replace(XI,"%3D")}function aS(t){return Tc(t).replace(gm,"%23").replace(ZI,"%3F")}function lS(t){return t==null?"":aS(t).replace(JI,"%2F")}function Vi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const cS=/\/$/,uS=t=>t.replace(cS,"");function wa(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=pS(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Vi(o)}}function dS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Pd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function hS(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Hs(e.matched[s],n.matched[i])&&bm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Hs(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function bm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!fS(t[n],e[n]))return!1;return!0}function fS(t,e){return Mt(t)?Ad(t,e):Mt(e)?Ad(e,t):t===e}function Ad(t,e){return Mt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function pS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Wi;(function(t){t.pop="pop",t.push="push"})(Wi||(Wi={}));var Si;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Si||(Si={}));function mS(t){if(!t)if(ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),uS(t)}const gS=/^[^#]+#/;function _S(t,e){return t.replace(gS,"#")+e}function wS(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Uo=()=>({left:window.scrollX,top:window.scrollY});function vS(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=wS(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Rd(t,e){return(history.state?history.state.position-e:-1)+t}const il=new Map;function yS(t,e){il.set(t,e)}function bS(t){const e=il.get(t);return il.delete(t),e}let CS=()=>location.protocol+"//"+location.host;function Cm(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Pd(l,"")}return Pd(n,t)+s+i}function ES(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const m=Cm(t,location),w=n.value,E=e.value;let T=0;if(h){if(n.value=m,e.value=h,o&&o===w){o=null;return}T=E?h.position-E.position:0}else s(m);i.forEach(B=>{B(n.value,w,{delta:T,type:Wi.pop,direction:T?T>0?Si.forward:Si.back:Si.unknown})})};function l(){o=n.value}function c(h){i.push(h);const m=()=>{const w=i.indexOf(h);w>-1&&i.splice(w,1)};return r.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(ae({},h.state,{scroll:Uo()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function xd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Uo():null}}function IS(t){const{history:e,location:n}=window,s={value:Cm(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:CS()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(l,c){const u=ae({},e.state,xd(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=ae({},i.value,e.state,{forward:l,scroll:Uo()});r(u.current,u,!0);const d=ae({},xd(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function SS(t){t=mS(t);const e=IS(t),n=ES(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=ae({location:"",base:t,go:s,createHref:_S.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function TS(t){return typeof t=="string"||t&&typeof t=="object"}function Em(t){return typeof t=="string"||typeof t=="symbol"}const Im=Symbol("");var Od;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Od||(Od={}));function Vs(t,e){return ae(new Error,{type:t,[Im]:!0},e)}function Xt(t,e){return t instanceof Error&&Im in t&&(e==null||!!(t.type&e))}const Nd="[^/]+?",kS={sensitive:!1,strict:!1,start:!0,end:!0},PS=/[.+*?^${}()[\]/\\]/g;function AS(t,e){const n=ae({},kS,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(PS,"\\$&"),m+=40;else if(h.type===1){const{value:w,repeatable:E,optional:T,regexp:B}=h;r.push({name:w,repeatable:E,optional:T});const M=B||Nd;if(M!==Nd){m+=10;try{new RegExp(`(${M})`)}catch(D){throw new Error(`Invalid custom RegExp for param "${w}" (${M}): `+D.message)}}let F=E?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||(F=T&&c.length<2?`(?:/${F})`:"/"+F),T&&(F+="?"),i+=F,m+=20,T&&(m+=-8),E&&(m+=-20),M===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",w=r[h-1];d[w.name]=m&&w.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:w,repeatable:E,optional:T}=m,B=w in c?c[w]:"";if(Mt(B)&&!E)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const M=Mt(B)?B.join("/"):B;if(!M)if(T)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function RS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Sm(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=RS(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Md(s))return 1;if(Md(i))return-1}return i.length-s.length}function Md(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const xS={type:0,value:""},OS=/[a-zA-Z0-9_]/;function NS(t){if(!t)return[[]];if(t==="/")return[[xS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:OS.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function MS(t,e,n){const s=AS(NS(t.path),n),i=ae(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function DS(t,e){const n=[],s=new Map;e=Fd({strict:!1,end:!0,sensitive:!1},e);function i(d){return s.get(d)}function r(d,h,m){const w=!m,E=Ld(d);E.aliasOf=m&&m.record;const T=Fd(e,d),B=[E];if("alias"in d){const D=typeof d.alias=="string"?[d.alias]:d.alias;for(const se of D)B.push(Ld(ae({},E,{components:m?m.record.components:E.components,path:se,aliasOf:m?m.record:E})))}let M,F;for(const D of B){const{path:se}=D;if(h&&se[0]!=="/"){const Ee=h.record.path,de=Ee[Ee.length-1]==="/"?"":"/";D.path=h.record.path+(se&&de+se)}if(M=MS(D,h,T),m?m.alias.push(M):(F=F||M,F!==M&&F.alias.push(M),w&&d.name&&!Bd(M)&&o(d.name)),Tm(M)&&l(M),E.children){const Ee=E.children;for(let de=0;de<Ee.length;de++)r(Ee[de],M,m&&m.children[de])}m=m||M}return F?()=>{o(F)}:Ii}function o(d){if(Em(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const h=FS(d,n);n.splice(h,0,d),d.record.name&&!Bd(d)&&s.set(d.record.name,d)}function c(d,h){let m,w={},E,T;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw Vs(1,{location:d});T=m.record.name,w=ae(Dd(h.params,m.keys.filter(F=>!F.optional).concat(m.parent?m.parent.keys.filter(F=>F.optional):[]).map(F=>F.name)),d.params&&Dd(d.params,m.keys.map(F=>F.name))),E=m.stringify(w)}else if(d.path!=null)E=d.path,m=n.find(F=>F.re.test(E)),m&&(w=m.parse(E),T=m.record.name);else{if(m=h.name?s.get(h.name):n.find(F=>F.re.test(h.path)),!m)throw Vs(1,{location:d,currentLocation:h});T=m.record.name,w=ae({},h.params,d.params),E=m.stringify(w)}const B=[];let M=m;for(;M;)B.unshift(M.record),M=M.parent;return{name:T,path:E,params:w,matched:B,meta:BS(B)}}t.forEach(d=>r(d));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function Dd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Ld(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:LS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function LS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Bd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function BS(t){return t.reduce((e,n)=>ae(e,n.meta),{})}function Fd(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function FS(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Sm(t,e[r])<0?s=r:n=r+1}const i=$S(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function $S(t){let e=t;for(;e=e.parent;)if(Tm(e)&&Sm(t,e)===0)return e}function Tm({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function US(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(_m," "),o=r.indexOf("="),a=Vi(o<0?r:r.slice(0,o)),l=o<0?null:Vi(r.slice(o+1));if(a in e){let c=e[a];Mt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function $d(t){let e="";for(let n in t){const s=t[n];if(n=oS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Mt(s)?s.map(r=>r&&sl(r)):[s&&sl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function HS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Mt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const VS=Symbol(""),Ud=Symbol(""),kc=Symbol(""),km=Symbol(""),rl=Symbol("");function ui(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Vs(4,{from:n,to:e})):h instanceof Error?l(h):TS(h)?l(Vs(2,{from:e,to:h})):(o&&s.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(h=>l(h))})}function va(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(mm(l)){const u=(l.__vccOpts||l)[e];u&&r.push(wn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=YI(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&wn(m,n,s,o,a,i)()}))}}return r}function Hd(t){const e=on(kc),n=on(km),s=It(()=>{const l=ys(t.to);return e.resolve(l)}),i=It(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Hs.bind(null,u));if(h>-1)return h;const m=Vd(l[c-2]);return c>1&&Vd(u)===m&&d[d.length-1].path!==m?d.findIndex(Hs.bind(null,l[c-2])):h}),r=It(()=>i.value>-1&&GS(n.params,s.value.params)),o=It(()=>i.value>-1&&i.value===n.matched.length-1&&bm(n.params,s.value.params));function a(l={}){if(zS(l)){const c=e[ys(t.replace)?"replace":"push"](ys(t.to)).catch(Ii);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:It(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function WS(t){return t.length===1?t[0]:t}const jS=Lh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Hd,setup(t,{slots:e}){const n=qs(Hd(t)),{options:s}=on(kc),i=It(()=>({[Wd(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Wd(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&WS(e.default(n));return t.custom?r:uf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),qS=jS;function zS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function GS(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Mt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Vd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const Wd=(t,e,n)=>t??e??n,KS=Lh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=on(rl),i=It(()=>t.route||s.value),r=on(Ud,0),o=It(()=>{let c=ys(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=It(()=>i.value.matched[o.value]);mr(Ud,It(()=>o.value+1)),mr(VS,a),mr(rl,i);const l=Ie();return Es(()=>[l.value,a.value,t.name],([c,u,d],[h,m,w])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Hs(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(E=>E(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return jd(n.default,{Component:h,route:c});const m=d.props[u],w=m?m===!0?c.params:typeof m=="function"?m(c):m:null,T=uf(h,ae({},w,e,{onVnodeUnmounted:B=>{B.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return jd(n.default,{Component:T,route:c})||T}}});function jd(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const YS=KS;function QS(t){const e=DS(t.routes,t),n=t.parseQuery||US,s=t.stringifyQuery||$d,i=t.history,r=ui(),o=ui(),a=ui(),l=i_(mn);let c=mn;ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=_a.bind(null,y=>""+y),d=_a.bind(null,lS),h=_a.bind(null,Vi);function m(y,N){let R,U;return Em(y)?(R=e.getRecordMatcher(y),U=N):U=y,e.addRoute(U,R)}function w(y){const N=e.getRecordMatcher(y);N&&e.removeRoute(N)}function E(){return e.getRoutes().map(y=>y.record)}function T(y){return!!e.getRecordMatcher(y)}function B(y,N){if(N=ae({},N||l.value),typeof y=="string"){const g=wa(n,y,N.path),v=e.resolve({path:g.path},N),C=i.createHref(g.fullPath);return ae(g,v,{params:h(v.params),hash:Vi(g.hash),redirectedFrom:void 0,href:C})}let R;if(y.path!=null)R=ae({},y,{path:wa(n,y.path,N.path).path});else{const g=ae({},y.params);for(const v in g)g[v]==null&&delete g[v];R=ae({},y,{params:d(g)}),N.params=d(N.params)}const U=e.resolve(R,N),pe=y.hash||"";U.params=u(h(U.params));const f=dS(s,ae({},y,{hash:rS(pe),path:U.path})),p=i.createHref(f);return ae({fullPath:f,hash:pe,query:s===$d?HS(y.query):y.query||{}},U,{redirectedFrom:void 0,href:p})}function M(y){return typeof y=="string"?wa(n,y,l.value.path):ae({},y)}function F(y,N){if(c!==y)return Vs(8,{from:N,to:y})}function D(y){return de(y)}function se(y){return D(ae(M(y),{replace:!0}))}function Ee(y){const N=y.matched[y.matched.length-1];if(N&&N.redirect){const{redirect:R}=N;let U=typeof R=="function"?R(y):R;return typeof U=="string"&&(U=U.includes("?")||U.includes("#")?U=M(U):{path:U},U.params={}),ae({query:y.query,hash:y.hash,params:U.path!=null?{}:y.params},U)}}function de(y,N){const R=c=B(y),U=l.value,pe=y.state,f=y.force,p=y.replace===!0,g=Ee(R);if(g)return de(ae(M(g),{state:typeof g=="object"?ae({},pe,g.state):pe,force:f,replace:p}),N||R);const v=R;v.redirectedFrom=N;let C;return!f&&hS(s,U,R)&&(C=Vs(16,{to:v,from:U}),_t(U,U,!0,!1)),(C?Promise.resolve(C):nt(v,U)).catch(b=>Xt(b)?Xt(b,2)?b:Ae(b):$(b,v,U)).then(b=>{if(b){if(Xt(b,2))return de(ae({replace:p},M(b.to),{state:typeof b.to=="object"?ae({},pe,b.to.state):pe,force:f}),N||v)}else b=Qt(v,U,!0,p,pe);return Dt(v,U,b),b})}function et(y,N){const R=F(y,N);return R?Promise.reject(R):Promise.resolve()}function tt(y){const N=ds.values().next().value;return N&&typeof N.runWithContext=="function"?N.runWithContext(y):y()}function nt(y,N){let R;const[U,pe,f]=JS(y,N);R=va(U.reverse(),"beforeRouteLeave",y,N);for(const g of U)g.leaveGuards.forEach(v=>{R.push(wn(v,y,N))});const p=et.bind(null,y,N);return R.push(p),wt(R).then(()=>{R=[];for(const g of r.list())R.push(wn(g,y,N));return R.push(p),wt(R)}).then(()=>{R=va(pe,"beforeRouteUpdate",y,N);for(const g of pe)g.updateGuards.forEach(v=>{R.push(wn(v,y,N))});return R.push(p),wt(R)}).then(()=>{R=[];for(const g of f)if(g.beforeEnter)if(Mt(g.beforeEnter))for(const v of g.beforeEnter)R.push(wn(v,y,N));else R.push(wn(g.beforeEnter,y,N));return R.push(p),wt(R)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),R=va(f,"beforeRouteEnter",y,N,tt),R.push(p),wt(R))).then(()=>{R=[];for(const g of o.list())R.push(wn(g,y,N));return R.push(p),wt(R)}).catch(g=>Xt(g,8)?g:Promise.reject(g))}function Dt(y,N,R){a.list().forEach(U=>tt(()=>U(y,N,R)))}function Qt(y,N,R,U,pe){const f=F(y,N);if(f)return f;const p=N===mn,g=ms?history.state:{};R&&(U||p?i.replace(y.fullPath,ae({scroll:p&&g&&g.scroll},pe)):i.push(y.fullPath,pe)),l.value=y,_t(y,N,R,p),Ae()}let gt;function Fn(){gt||(gt=i.listen((y,N,R)=>{if(!ar.listening)return;const U=B(y),pe=Ee(U);if(pe){de(ae(pe,{replace:!0,force:!0}),U).catch(Ii);return}c=U;const f=l.value;ms&&yS(Rd(f.fullPath,R.delta),Uo()),nt(U,f).catch(p=>Xt(p,12)?p:Xt(p,2)?(de(ae(M(p.to),{force:!0}),U).then(g=>{Xt(g,20)&&!R.delta&&R.type===Wi.pop&&i.go(-1,!1)}).catch(Ii),Promise.reject()):(R.delta&&i.go(-R.delta,!1),$(p,U,f))).then(p=>{p=p||Qt(U,f,!1),p&&(R.delta&&!Xt(p,8)?i.go(-R.delta,!1):R.type===Wi.pop&&Xt(p,20)&&i.go(-1,!1)),Dt(U,f,p)}).catch(Ii)}))}let fn=ui(),O=ui(),L;function $(y,N,R){Ae(y);const U=O.list();return U.length?U.forEach(pe=>pe(y,N,R)):console.error(y),Promise.reject(y)}function re(){return L&&l.value!==mn?Promise.resolve():new Promise((y,N)=>{fn.add([y,N])})}function Ae(y){return L||(L=!y,Fn(),fn.list().forEach(([N,R])=>y?R(y):N()),fn.reset()),y}function _t(y,N,R,U){const{scrollBehavior:pe}=t;if(!ms||!pe)return Promise.resolve();const f=!R&&bS(Rd(y.fullPath,0))||(U||!R)&&history.state&&history.state.scroll||null;return xh().then(()=>pe(y,N,f)).then(p=>p&&vS(p)).catch(p=>$(p,y,N))}const Ue=y=>i.go(y);let Lt;const ds=new Set,ar={currentRoute:l,listening:!0,addRoute:m,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:T,getRoutes:E,resolve:B,options:t,push:D,replace:se,go:Ue,back:()=>Ue(-1),forward:()=>Ue(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:O.add,isReady:re,install(y){const N=this;y.component("RouterLink",qS),y.component("RouterView",YS),y.config.globalProperties.$router=N,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ys(l)}),ms&&!Lt&&l.value===mn&&(Lt=!0,D(i.location).catch(pe=>{}));const R={};for(const pe in mn)Object.defineProperty(R,pe,{get:()=>l.value[pe],enumerable:!0});y.provide(kc,N),y.provide(km,Th(R)),y.provide(rl,l);const U=y.unmount;ds.add(y),y.unmount=function(){ds.delete(y),ds.size<1&&(c=mn,gt&&gt(),gt=null,l.value=mn,Lt=!1,L=!1),U()}}};function wt(y){return y.reduce((N,R)=>N.then(()=>tt(R)),Promise.resolve())}return ar}function JS(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Hs(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Hs(c,l))||i.push(l))}return[n,s,i]}const XS={class:"container-fluid py-3"},ZS={class:"row sticky-topbar text-center mb-4"},eT={class:"col-4"},tT={class:"side-clock-display"},nT={class:"col-4"},sT={class:"clock-display"},iT={key:1},rT={class:"col-4"},oT={class:"side-clock-display shot-clock-seconds"},aT={key:1},lT={key:0,class:"text-center my-3"},cT={__name:"HeaderSection",props:["quarter","gameClock","shotClock","isClockRunning","isPublicView"],emits:["editClock"],setup(t,{emit:e}){const n=t;function s(o){const a=String(Math.floor(o/60)).padStart(2,"0"),l=String(o%60).padStart(2,"0");return`${a}:${l}`}const i=e,r=o=>{i("editClock",o)};return(o,a)=>(Z(),te("div",XS,[H("div",ZS,[H("div",eT,[a[9]||(a[9]=H("div",null,"Quarter",-1)),t.isPublicView?Ye("",!0):(Z(),te("button",{key:0,class:"btn btn-outline-dark mt-2 me-2",onClick:a[0]||(a[0]=l=>o.$emit("adjustQuarter",-1))},a[7]||(a[7]=[H("i",{class:"bi bi-dash"},null,-1)]))),t.isPublicView?Ye("",!0):(Z(),te("button",{key:1,class:"btn btn-outline-dark mt-2",onClick:a[1]||(a[1]=l=>o.$emit("adjustQuarter",1))},a[8]||(a[8]=[H("i",{class:"bi bi-plus"},null,-1)]))),H("div",tT,be(t.quarter),1)]),H("div",nT,[a[10]||(a[10]=H("div",null,"Game Clock",-1)),t.isPublicView?Ye("",!0):(Z(),te("button",{key:0,class:"btn btn-danger btn-sm mx-1",onClick:a[2]||(a[2]=l=>o.$emit("resetClock","gameClock"))}," Reset Game ")),H("div",sT,[!t.isPublicView&&!t.isClockRunning?(Z(),te("span",{key:0,class:"editable",onClick:a[3]||(a[3]=l=>r("gameClock"))},be(s(n.gameClock)),1)):(Z(),te("span",iT,be(s(n.gameClock)),1))])]),H("div",rT,[a[11]||(a[11]=H("div",null,"Shot Clock",-1)),t.isPublicView?Ye("",!0):(Z(),te("button",{key:0,class:"btn btn-warning btn-sm mx-1",onClick:a[4]||(a[4]=l=>o.$emit("resetClock","shotClock"))}," Reset Shot ")),H("div",oT,[!t.isPublicView&&!t.isClockRunning?(Z(),te("span",{key:0,class:"editable",onClick:a[5]||(a[5]=l=>r("shotClock"))},be(n.shotClock),1)):(Z(),te("span",aT,be(n.shotClock),1))])]),t.isPublicView?Ye("",!0):(Z(),te("div",lT,[H("button",{class:"btn btn-primary btn-sm mx-1",onClick:a[6]||(a[6]=l=>o.$emit("toggleClocks"))},[H("i",{class:_o(n.isClockRunning?"bi bi-pause-fill":"bi bi-play-fill")},null,2),Ri(" "+be(n.isClockRunning?"Stop":"Start"),1)])]))])]))}},Pm=$o(cT,[["__scopeId","data-v-9303f264"]]),uT={class:"col-6 border-end"},dT={key:1},hT={class:"score-display mb-2"},fT={key:0,class:"btn-group btn-group-sm mb-2"},pT={class:"mb-2"},mT={key:1,class:"btn-group btn-group-sm mb-3"},gT={class:"list-group"},_T={key:0,class:"badge bg-success"},wT=["onClick"],vT={__name:"TeamPanel",props:["teamLabel","score","timeouts","penalties","teamName","isClockRunning","isPublicView"],setup(t){return(e,n)=>(Z(),te("div",uT,[H("h4",null,[!t.isPublicView&&!t.isClockRunning?(Z(),te("span",{key:0,onClick:n[0]||(n[0]=s=>e.$emit("editName")),class:"editable"},be(t.teamName),1)):(Z(),te("span",dT,be(t.teamName),1))]),H("div",hT,be(t.score),1),t.isPublicView?Ye("",!0):(Z(),te("div",fT,[H("button",{class:"btn btn-danger btn-lg",onClick:n[1]||(n[1]=s=>e.$emit("adjustScore",-1))},n[5]||(n[5]=[H("i",{class:"bi bi-dash-circle"},null,-1)])),H("button",{class:"btn btn-success btn-lg",onClick:n[2]||(n[2]=s=>e.$emit("adjustScore",1))},n[6]||(n[6]=[H("i",{class:"bi bi-plus-circle"},null,-1)]))])),H("div",pT,"Timeouts: "+be(t.timeouts),1),t.isPublicView?Ye("",!0):(Z(),te("div",mT,[H("button",{class:"btn btn-outline-secondary",onClick:n[3]||(n[3]=s=>e.$emit("adjustTimeout",-1))},n[7]||(n[7]=[H("i",{class:"bi bi-dash"},null,-1)])),H("button",{class:"btn btn-outline-secondary",onClick:n[4]||(n[4]=s=>e.$emit("adjustTimeout",1))},n[8]||(n[8]=[H("i",{class:"bi bi-plus"},null,-1)]))])),n[10]||(n[10]=H("h6",null,"Penalties",-1)),H("ul",gT,[(Z(!0),te(vt,null,Il(t.penalties,(s,i)=>(Z(),te("li",{key:i,class:"list-group-item d-flex justify-content-between align-items-center"},[Ri(be(s.player?`#${s.player}`:"Player")+" - "+be(s.category)+" ("+be(s.remaining)+"s) ",1),s.releasable?(Z(),te("span",_T,"Releasable")):Ye("",!0),H("button",{class:"btn btn-sm btn-danger removeBtn",onClick:r=>e.$emit("removePenalty",i)},n[9]||(n[9]=[H("i",{class:"bi bi-x"},null,-1)]),8,wT)]))),128))])]))}},qd=$o(vT,[["__scopeId","data-v-7d99ff3a"]]),yT={class:"row text-center align-items-start mb-4"},Am={__name:"ScoreSection",props:["score","timeouts","home","away","activePenalties","isClockRunning","isPublicView"],setup(t){return(e,n)=>(Z(),te("div",yT,[Se(qd,{teamLabel:"home",score:t.score.home,timeouts:t.timeouts.home,penalties:t.activePenalties.filter(s=>s.team==="home"),isClockRunning:t.isClockRunning,teamName:t.home,isPublicView:t.isPublicView,onAdjustScore:n[0]||(n[0]=s=>e.$emit("adjustScore","home",s)),onAdjustTimeout:n[1]||(n[1]=s=>e.$emit("adjustTimeout","home",s)),onEditName:n[2]||(n[2]=()=>e.$emit("editName","home")),onRemovePenalty:n[3]||(n[3]=s=>e.$emit("removePenalty",s,"home"))},null,8,["score","timeouts","penalties","isClockRunning","teamName","isPublicView"]),Se(qd,{teamLabel:"away",score:t.score.away,timeouts:t.timeouts.away,penalties:t.activePenalties.filter(s=>s.team==="away"),isClockRunning:t.isClockRunning,teamName:t.away,isPublicView:t.isPublicView,onAdjustScore:n[4]||(n[4]=s=>e.$emit("adjustScore","away",s)),onAdjustTimeout:n[5]||(n[5]=s=>e.$emit("adjustTimeout","away",s)),onEditName:n[6]||(n[6]=()=>e.$emit("editName","away")),onRemovePenalty:n[7]||(n[7]=s=>e.$emit("removePenalty",s,"away"))},null,8,["score","timeouts","penalties","isClockRunning","teamName","isPublicView"])]))}},bT={class:"container-fluid py-3"},CT={__name:"PublicViewer",setup(t){const e=Ie({home:0,away:0}),n=Ie({home:2,away:2}),s=Ie(720),i=Ie(80),r=Ie(!1),o=Ie(1),a=Ie("Home"),l=Ie("Away");return Cl(()=>{const c=vr(Ir,"/scoreboard");Bp(c,u=>{const d=u.val();d&&(e.value=d.score,n.value=d.timeouts,s.value=d.gameClock,i.value=d.shotClock,r.value=d.isClockRunning,o.value=d.quarter,a.value=d.home,l.value=d.away)})}),(c,u)=>(Z(),te("div",bT,[Se(Pm,{quarter:o.value,gameClock:s.value,shotClock:i.value,isClockRunning:r.value,isPublicView:!0},null,8,["quarter","gameClock","shotClock","isClockRunning"]),Se(Am,{score:e.value,timeouts:n.value,home:a.value,away:l.value,activePenalties:[],isClockRunning:!0,isPublicView:!0},null,8,["score","timeouts","home","away"])]))}};/*!
* sweetalert2 v11.17.2
* Released under the MIT License.
*/function Rm(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function ET(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function zd(t,e){return t.get(Rm(t,e))}function IT(t,e,n){ET(t,e),e.set(t,n)}function ST(t,e,n){return t.set(Rm(t,e),n),n}const TT=100,W={},kT=()=>{W.previousActiveElement instanceof HTMLElement?(W.previousActiveElement.focus(),W.previousActiveElement=null):document.body&&document.body.focus()},PT=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;W.restoreFocusTimeout=setTimeout(()=>{kT(),e()},TT),window.scrollTo(n,s)}),xm="swal2-",AT=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],_=AT.reduce((t,e)=>(t[e]=xm+e,t),{}),RT=["success","warning","info","question","error"],no=RT.reduce((t,e)=>(t[e]=xm+e,t),{}),Om="SweetAlert2:",Pc=t=>t.charAt(0).toUpperCase()+t.slice(1),Xe=t=>{console.warn(`${Om} ${typeof t=="object"?t.join(" "):t}`)},cs=t=>{console.error(`${Om} ${t}`)},Gd=[],xT=t=>{Gd.includes(t)||(Gd.push(t),Xe(t))},Nm=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;xT(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},Ho=t=>typeof t=="function"?t():t,Ac=t=>t&&typeof t.toPromise=="function",tr=t=>Ac(t)?t.toPromise():Promise.resolve(t),Rc=t=>t&&Promise.resolve(t)===t,Ze=()=>document.body.querySelector(`.${_.container}`),nr=t=>{const e=Ze();return e?e.querySelector(t):null},pt=t=>nr(`.${t}`),ie=()=>pt(_.popup),Zs=()=>pt(_.icon),OT=()=>pt(_["icon-content"]),Mm=()=>pt(_.title),xc=()=>pt(_["html-container"]),Dm=()=>pt(_.image),Oc=()=>pt(_["progress-steps"]),Vo=()=>pt(_["validation-message"]),Kt=()=>nr(`.${_.actions} .${_.confirm}`),ei=()=>nr(`.${_.actions} .${_.cancel}`),us=()=>nr(`.${_.actions} .${_.deny}`),NT=()=>pt(_["input-label"]),ti=()=>nr(`.${_.loader}`),sr=()=>pt(_.actions),Lm=()=>pt(_.footer),Wo=()=>pt(_["timer-progress-bar"]),Nc=()=>pt(_.close),MT=`
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`,Mc=()=>{const t=ie();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),s=t.querySelectorAll(MT),i=Array.from(s).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(i))].filter(r=>ot(r))},Dc=()=>ln(document.body,_.shown)&&!ln(document.body,_["toast-shown"])&&!ln(document.body,_["no-backdrop"]),jo=()=>{const t=ie();return t?ln(t,_.toast):!1},DT=()=>{const t=ie();return t?t.hasAttribute("data-loading"):!1},mt=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html"),i=s.querySelector("head");i&&Array.from(i.childNodes).forEach(o=>{t.appendChild(o)});const r=s.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},ln=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},LT=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(_).includes(n)&&!Object.values(no).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},ht=(t,e,n)=>{if(LT(t,e),!e.customClass)return;const s=e.customClass[n];if(s){if(typeof s!="string"&&!s.forEach){Xe(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof s}"`);return}ne(t,s)}},qo=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${_.popup} > .${_[e]}`);case"checkbox":return t.querySelector(`.${_.popup} > .${_.checkbox} input`);case"radio":return t.querySelector(`.${_.popup} > .${_.radio} input:checked`)||t.querySelector(`.${_.popup} > .${_.radio} input:first-child`);case"range":return t.querySelector(`.${_.popup} > .${_.range} input`);default:return t.querySelector(`.${_.popup} > .${_.input}`)}},Bm=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Fm=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},ne=(t,e)=>{Fm(t,e,!0)},Et=(t,e)=>{Fm(t,e,!1)},In=(t,e)=>{const n=Array.from(t.children);for(let s=0;s<n.length;s++){const i=n[s];if(i instanceof HTMLElement&&ln(i,e))return i}},Yn=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},Be=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";t&&(t.style.display=e)},ze=t=>{t&&(t.style.display="none")},Lc=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";t&&new MutationObserver(()=>{ir(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Kd=(t,e,n,s)=>{const i=t.querySelector(e);i&&i.style.setProperty(n,s)},ir=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";e?Be(t,n):ze(t)},ot=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),BT=()=>!ot(Kt())&&!ot(us())&&!ot(ei()),Yd=t=>t.scrollHeight>t.clientHeight,$m=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Bc=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=Wo();n&&ot(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},FT=()=>{const t=Wo();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.width=`${s}%`},$T=()=>typeof window>"u"||typeof document>"u",UT=`
 <div aria-labelledby="${_.title}" aria-describedby="${_["html-container"]}" class="${_.popup}" tabindex="-1">
   <button type="button" class="${_.close}"></button>
   <ul class="${_["progress-steps"]}"></ul>
   <div class="${_.icon}"></div>
   <img class="${_.image}" />
   <h2 class="${_.title}" id="${_.title}"></h2>
   <div class="${_["html-container"]}" id="${_["html-container"]}"></div>
   <input class="${_.input}" id="${_.input}" />
   <input type="file" class="${_.file}" />
   <div class="${_.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${_.select}" id="${_.select}"></select>
   <div class="${_.radio}"></div>
   <label class="${_.checkbox}">
     <input type="checkbox" id="${_.checkbox}" />
     <span class="${_.label}"></span>
   </label>
   <textarea class="${_.textarea}" id="${_.textarea}"></textarea>
   <div class="${_["validation-message"]}" id="${_["validation-message"]}"></div>
   <div class="${_.actions}">
     <div class="${_.loader}"></div>
     <button type="button" class="${_.confirm}"></button>
     <button type="button" class="${_.deny}"></button>
     <button type="button" class="${_.cancel}"></button>
   </div>
   <div class="${_.footer}"></div>
   <div class="${_["timer-progress-bar-container"]}">
     <div class="${_["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g,""),HT=()=>{const t=Ze();return t?(t.remove(),Et([document.documentElement,document.body],[_["no-backdrop"],_["toast-shown"],_["has-column"]]),!0):!1},Hn=()=>{W.currentInstance.resetValidationMessage()},VT=()=>{const t=ie(),e=In(t,_.input),n=In(t,_.file),s=t.querySelector(`.${_.range} input`),i=t.querySelector(`.${_.range} output`),r=In(t,_.select),o=t.querySelector(`.${_.checkbox} input`),a=In(t,_.textarea);e.oninput=Hn,n.onchange=Hn,r.onchange=Hn,o.onchange=Hn,a.oninput=Hn,s.oninput=()=>{Hn(),i.value=s.value},s.onchange=()=>{Hn(),i.value=s.value}},WT=t=>typeof t=="string"?document.querySelector(t):t,jT=t=>{const e=ie();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},qT=t=>{window.getComputedStyle(t).direction==="rtl"&&ne(Ze(),_.rtl)},zT=t=>{const e=HT();if($T()){cs("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=_.container,e&&ne(n,_["no-transition"]),mt(n,UT),n.dataset.swal2Theme=t.theme;const s=WT(t.target);s.appendChild(n),jT(t),qT(s),VT()},Fc=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?GT(t,e):t&&mt(e,t)},GT=(t,e)=>{t.jquery?KT(e,t):mt(e,t.toString())},KT=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},YT=(t,e)=>{const n=sr(),s=ti();!n||!s||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?ze(n):Be(n),ht(n,e,"actions"),QT(n,s,e),mt(s,e.loaderHtml||""),ht(s,e,"loader"))};function QT(t,e,n){const s=Kt(),i=us(),r=ei();!s||!i||!r||(ya(s,"confirm",n),ya(i,"deny",n),ya(r,"cancel",n),JT(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e))))}function JT(t,e,n,s){if(!s.buttonsStyling){Et([t,e,n],_.styled);return}ne([t,e,n],_.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,ne(t,_["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,ne(e,_["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,ne(n,_["default-outline"]))}function ya(t,e,n){const s=Pc(e);ir(t,n[`show${s}Button`],"inline-block"),mt(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=_[e],ht(t,n,`${e}Button`)}const XT=(t,e)=>{const n=Nc();n&&(mt(n,e.closeButtonHtml||""),ht(n,e,"closeButton"),ir(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},ZT=(t,e)=>{const n=Ze();n&&(ek(n,e.backdrop),tk(n,e.position),nk(n,e.grow),ht(n,e,"container"))};function ek(t,e){typeof e=="string"?t.style.background=e:e||ne([document.documentElement,document.body],_["no-backdrop"])}function tk(t,e){e&&(e in _?ne(t,_[e]):(Xe('The "position" parameter is not valid, defaulting to "center"'),ne(t,_.center)))}function nk(t,e){e&&ne(t,_[`grow-${e}`])}var ye={innerParams:new WeakMap,domCache:new WeakMap};const sk=["input","file","range","select","radio","checkbox","textarea"],ik=(t,e)=>{const n=ie();if(!n)return;const s=ye.innerParams.get(t),i=!s||e.input!==s.input;sk.forEach(r=>{const o=In(n,_[r]);o&&(ak(r,e.inputAttributes),o.className=_[r],i&&ze(o))}),e.input&&(i&&rk(e),lk(e))},rk=t=>{if(!t.input)return;if(!Re[t.input]){cs(`Unexpected type of input! Expected ${Object.keys(Re).join(" | ")}, got "${t.input}"`);return}const e=Um(t.input);if(!e)return;const n=Re[t.input](e,t);Be(e),t.inputAutoFocus&&setTimeout(()=>{Bm(n)})},ok=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},ak=(t,e)=>{const n=ie();if(!n)return;const s=qo(n,t);if(s){ok(s);for(const i in e)s.setAttribute(i,e[i])}},lk=t=>{if(!t.input)return;const e=Um(t.input);e&&ht(e,t,"input")},$c=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},rr=(t,e,n)=>{if(n.inputLabel){const s=document.createElement("label"),i=_["input-label"];s.setAttribute("for",t.id),s.className=i,typeof n.customClass=="object"&&ne(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},Um=t=>{const e=ie();if(e)return In(e,_[t]||_.input)},so=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Rc(e)||Xe(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Re={};Re.text=Re.email=Re.password=Re.number=Re.tel=Re.url=Re.search=Re.date=Re["datetime-local"]=Re.time=Re.week=Re.month=(t,e)=>(so(t,e.inputValue),rr(t,t,e),$c(t,e),t.type=e.input,t);Re.file=(t,e)=>(rr(t,t,e),$c(t,e),t);Re.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return so(n,e.inputValue),n.type=e.input,so(s,e.inputValue),rr(n,t,e),t};Re.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");mt(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return rr(t,t,e),t};Re.radio=t=>(t.textContent="",t);Re.checkbox=(t,e)=>{const n=qo(ie(),"checkbox");n.value="1",n.checked=!!e.inputValue;const s=t.querySelector("span");return mt(s,e.inputPlaceholder||e.inputLabel),n};Re.textarea=(t,e)=>{so(t,e.inputValue),$c(t,e),rr(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(ie()).width),i=()=>{if(!document.body.contains(t))return;const r=t.offsetWidth+n(t);r>s?ie().style.width=`${r}px`:Yn(ie(),"width",e.width)};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const ck=(t,e)=>{const n=xc();n&&(Lc(n),ht(n,e,"htmlContainer"),e.html?(Fc(e.html,n),Be(n,"block")):e.text?(n.textContent=e.text,Be(n,"block")):ze(n),ik(t,e))},uk=(t,e)=>{const n=Lm();n&&(Lc(n),ir(n,e.footer,"block"),e.footer&&Fc(e.footer,n),ht(n,e,"footer"))},dk=(t,e)=>{const n=ye.innerParams.get(t),s=Zs();if(!s)return;if(n&&e.icon===n.icon){Jd(s,e),Qd(s,e);return}if(!e.icon&&!e.iconHtml){ze(s);return}if(e.icon&&Object.keys(no).indexOf(e.icon)===-1){cs(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),ze(s);return}Be(s),Jd(s,e),Qd(s,e),ne(s,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Hm)},Qd=(t,e)=>{for(const[n,s]of Object.entries(no))e.icon!==n&&Et(t,s);ne(t,e.icon&&no[e.icon]),pk(t,e),Hm(),ht(t,e,"icon")},Hm=()=>{const t=ie();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},hk=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,fk=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Jd=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,s="";e.iconHtml?s=Xd(e.iconHtml):e.icon==="success"?(s=hk,n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?s=fk:e.icon&&(s=Xd({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==s.trim()&&mt(t,s)},pk=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Kd(t,n,"background-color",e.iconColor);Kd(t,".swal2-success-ring","border-color",e.iconColor)}},Xd=t=>`<div class="${_["icon-content"]}">${t}</div>`,mk=(t,e)=>{const n=Dm();if(n){if(!e.imageUrl){ze(n);return}Be(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Yn(n,"width",e.imageWidth),Yn(n,"height",e.imageHeight),n.className=_.image,ht(n,e,"image")}};let Uc=!1,Vm=0,Wm=0,jm=0,qm=0;const gk=t=>{t.addEventListener("mousedown",io),document.body.addEventListener("mousemove",ro),t.addEventListener("mouseup",oo),t.addEventListener("touchstart",io),document.body.addEventListener("touchmove",ro),t.addEventListener("touchend",oo)},_k=t=>{t.removeEventListener("mousedown",io),document.body.removeEventListener("mousemove",ro),t.removeEventListener("mouseup",oo),t.removeEventListener("touchstart",io),document.body.removeEventListener("touchmove",ro),t.removeEventListener("touchend",oo)},io=t=>{const e=ie();if(t.target===e||Zs().contains(t.target)){Uc=!0;const n=zm(t);Vm=n.clientX,Wm=n.clientY,jm=parseInt(e.style.insetInlineStart)||0,qm=parseInt(e.style.insetBlockStart)||0,ne(e,"swal2-dragging")}},ro=t=>{const e=ie();if(Uc){let{clientX:n,clientY:s}=zm(t);e.style.insetInlineStart=`${jm+(n-Vm)}px`,e.style.insetBlockStart=`${qm+(s-Wm)}px`}},oo=()=>{const t=ie();Uc=!1,Et(t,"swal2-dragging")},zm=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},wk=(t,e)=>{const n=Ze(),s=ie();if(!(!n||!s)){if(e.toast){Yn(n,"width",e.width),s.style.width="100%";const i=ti();i&&s.insertBefore(i,Zs())}else Yn(s,"width",e.width);Yn(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),ze(Vo()),vk(s,e),e.draggable&&!e.toast?(ne(s,_.draggable),gk(s)):(Et(s,_.draggable),_k(s))}},vk=(t,e)=>{const n=e.showClass||{};t.className=`${_.popup} ${ot(t)?n.popup:""}`,e.toast?(ne([document.documentElement,document.body],_["toast-shown"]),ne(t,_.toast)):ne(t,_.modal),ht(t,e,"popup"),typeof e.customClass=="string"&&ne(t,e.customClass),e.icon&&ne(t,_[`icon-${e.icon}`])},yk=(t,e)=>{const n=Oc();if(!n)return;const{progressSteps:s,currentProgressStep:i}=e;if(!s||s.length===0||i===void 0){ze(n);return}Be(n),n.textContent="",i>=s.length&&Xe("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.forEach((r,o)=>{const a=bk(r);if(n.appendChild(a),o===i&&ne(a,_["active-progress-step"]),o!==s.length-1){const l=Ck(e);n.appendChild(l)}})},bk=t=>{const e=document.createElement("li");return ne(e,_["progress-step"]),mt(e,t),e},Ck=t=>{const e=document.createElement("li");return ne(e,_["progress-step-line"]),t.progressStepsDistance&&Yn(e,"width",t.progressStepsDistance),e},Ek=(t,e)=>{const n=Mm();n&&(Lc(n),ir(n,e.title||e.titleText,"block"),e.title&&Fc(e.title,n),e.titleText&&(n.innerText=e.titleText),ht(n,e,"title"))},Gm=(t,e)=>{wk(t,e),ZT(t,e),yk(t,e),dk(t,e),mk(t,e),Ek(t,e),XT(t,e),ck(t,e),YT(t,e),uk(t,e);const n=ie();typeof e.didRender=="function"&&n&&e.didRender(n),W.eventEmitter.emit("didRender",n)},Ik=()=>ot(ie()),Km=()=>{var t;return(t=Kt())===null||t===void 0?void 0:t.click()},Sk=()=>{var t;return(t=us())===null||t===void 0?void 0:t.click()},Tk=()=>{var t;return(t=ei())===null||t===void 0?void 0:t.click()},ni=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ym=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},kk=(t,e,n)=>{Ym(t),e.toast||(t.keydownHandler=s=>Ak(e,s,n),t.keydownTarget=e.keydownListenerCapture?window:ie(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},ol=(t,e)=>{var n;const s=Mc();if(s.length){t=t+e,t===s.length?t=0:t===-1&&(t=s.length-1),s[t].focus();return}(n=ie())===null||n===void 0||n.focus()},Qm=["ArrowRight","ArrowDown"],Pk=["ArrowLeft","ArrowUp"],Ak=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Rk(e,t):e.key==="Tab"?xk(e):[...Qm,...Pk].includes(e.key)?Ok(e.key):e.key==="Escape"&&Nk(e,t,n)))},Rk=(t,e)=>{if(!Ho(e.allowEnterKey))return;const n=qo(ie(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;Km(),t.preventDefault()}},xk=t=>{const e=t.target,n=Mc();let s=-1;for(let i=0;i<n.length;i++)if(e===n[i]){s=i;break}t.shiftKey?ol(s,-1):ol(s,1),t.stopPropagation(),t.preventDefault()},Ok=t=>{const e=sr(),n=Kt(),s=us(),i=ei();if(!e||!n||!s||!i)return;const r=[n,s,i];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=Qm.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&ot(a))break}a instanceof HTMLButtonElement&&a.focus()}},Nk=(t,e,n)=>{Ho(e.allowEscapeKey)&&(t.preventDefault(),n(ni.esc))};var Ws={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Mk=()=>{const t=Ze();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},Jm=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Xm=typeof window<"u"&&!!window.GestureEvent,Dk=()=>{if(Xm&&!ln(document.body,_.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,ne(document.body,_.iosfix),Lk()}},Lk=()=>{const t=Ze();if(!t)return;let e;t.ontouchstart=n=>{e=Bk(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Bk=t=>{const e=t.target,n=Ze(),s=xc();return!n||!s||Fk(t)||$k(t)?!1:e===n||!Yd(n)&&e instanceof HTMLElement&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Yd(s)&&s.contains(e))},Fk=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",$k=t=>t.touches&&t.touches.length>1,Uk=()=>{if(ln(document.body,_.iosfix)){const t=parseInt(document.body.style.top,10);Et(document.body,_.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Hk=()=>{const t=document.createElement("div");t.className=_["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Rs=null;const Vk=t=>{Rs===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Rs=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Rs+Hk()}px`)},Wk=()=>{Rs!==null&&(document.body.style.paddingRight=`${Rs}px`,Rs=null)};function Zm(t,e,n,s){jo()?Zd(t,s):(PT(n).then(()=>Zd(t,s)),Ym(W)),Xm?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Dc()&&(Wk(),Uk(),Jm()),jk()}function jk(){Et([document.documentElement,document.body],[_.shown,_["height-auto"],_["no-backdrop"],_["toast-shown"]])}function Sn(t){t=zk(t);const e=Ws.swalPromiseResolve.get(this),n=qk(this);this.isAwaitingPromise?t.isDismissed||(or(this),e(t)):n&&e(t)}const qk=t=>{const e=ie();if(!e)return!1;const n=ye.innerParams.get(t);if(!n||ln(e,n.hideClass.popup))return!1;Et(e,n.showClass.popup),ne(e,n.hideClass.popup);const s=Ze();return Et(s,n.showClass.backdrop),ne(s,n.hideClass.backdrop),Gk(t,e,n),!0};function eg(t){const e=Ws.swalPromiseReject.get(this);or(this),e&&e(t)}const or=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,ye.innerParams.get(t)||t._destroy())},zk=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Gk=(t,e,n)=>{var s;const i=Ze(),r=$m(e);typeof n.willClose=="function"&&n.willClose(e),(s=W.eventEmitter)===null||s===void 0||s.emit("willClose",e),r?Kk(t,e,i,n.returnFocus,n.didClose):Zm(t,i,n.returnFocus,n.didClose)},Kk=(t,e,n,s,i)=>{W.swalCloseEventFinishedCallback=Zm.bind(null,t,n,s,i);const r=function(o){if(o.target===e){var a;(a=W.swalCloseEventFinishedCallback)===null||a===void 0||a.call(W),delete W.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},Zd=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=W.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},js=t=>{let e=ie();if(e||new Te,e=ie(),!e)return;const n=ti();jo()?ze(Zs()):Yk(e,t),Be(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},Yk=(t,e)=>{const n=sr(),s=ti();!n||!s||(!e&&ot(Kt())&&(e=Kt()),Be(n),e&&(ze(e),s.setAttribute("data-button-to-replace",e.className),n.insertBefore(s,e)),ne([t,n],_.loading))},Qk=(t,e)=>{e.input==="select"||e.input==="radio"?tP(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Ac(e.inputValue)||Rc(e.inputValue))&&(js(Kt()),nP(t,e))},Jk=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Xk(n);case"radio":return Zk(n);case"file":return eP(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Xk=t=>t.checked?1:0,Zk=t=>t.checked?t.value:null,eP=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,tP=(t,e)=>{const n=ie();if(!n)return;const s=i=>{e.input==="select"?sP(n,ao(i),e):e.input==="radio"&&iP(n,ao(i),e)};Ac(e.inputOptions)||Rc(e.inputOptions)?(js(Kt()),tr(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):cs(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},nP=(t,e)=>{const n=t.getInput();n&&(ze(n),tr(e.inputValue).then(s=>{n.value=e.input==="number"?`${parseFloat(s)||0}`:`${s}`,Be(n),n.focus(),t.hideLoading()}).catch(s=>{cs(`Error in inputValue promise: ${s}`),n.value="",Be(n),n.focus(),t.hideLoading()}))};function sP(t,e,n){const s=In(t,_.select);if(!s)return;const i=(r,o,a)=>{const l=document.createElement("option");l.value=a,mt(l,o),l.selected=tg(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()}function iP(t,e,n){const s=In(t,_.radio);if(!s)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=_.radio,l.value=o,tg(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");mt(u,a),u.className=_.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}const ao=t=>{const e=[];return t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=ao(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=ao(s)),e.push([n,s])}),e},tg=(t,e)=>!!e&&e.toString()===t.toString(),rP=t=>{const e=ye.innerParams.get(t);t.disableButtons(),e.input?ng(t,"confirm"):Vc(t,!0)},oP=t=>{const e=ye.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?ng(t,"deny"):Hc(t,!1)},aP=(t,e)=>{t.disableButtons(),e(ni.cancel)},ng=(t,e)=>{const n=ye.innerParams.get(t);if(!n.input){cs(`The "input" parameter is needed to be set when using returnInputValueOn${Pc(e)}`);return}const s=t.getInput(),i=Jk(t,n);n.inputValidator?lP(t,i,e):s&&!s.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||s.validationMessage)):e==="deny"?Hc(t,i):Vc(t,i)},lP=(t,e,n)=>{const s=ye.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>tr(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Hc(t,e):Vc(t,e)})},Hc=(t,e)=>{const n=ye.innerParams.get(t||void 0);n.showLoaderOnDeny&&js(us()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>tr(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),or(t)):t.close({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>sg(t||void 0,i))):t.close({isDenied:!0,value:e})},eh=(t,e)=>{t.close({isConfirmed:!0,value:e})},sg=(t,e)=>{t.rejectPromise(e)},Vc=(t,e)=>{const n=ye.innerParams.get(t||void 0);n.showLoaderOnConfirm&&js(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>tr(n.preConfirm(e,n.validationMessage))).then(i=>{ot(Vo())||i===!1?(t.hideLoading(),or(t)):eh(t,typeof i>"u"?e:i)}).catch(i=>sg(t||void 0,i))):eh(t,e)};function lo(){const t=ye.innerParams.get(this);if(!t)return;const e=ye.domCache.get(this);ze(e.loader),jo()?t.icon&&Be(Zs()):cP(e),Et([e.popup,e.actions],_.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const cP=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Be(e[0],"inline-block"):BT()&&ze(t.actions)};function ig(){const t=ye.innerParams.get(this),e=ye.domCache.get(this);return e?qo(e.popup,t.input):null}function rg(t,e,n){const s=ye.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function og(t,e){const n=ie();if(!(!n||!t))if(t.type==="radio"){const s=n.querySelectorAll(`[name="${_.radio}"]`);for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function ag(){rg(this,["confirmButton","denyButton","cancelButton"],!1)}function lg(){rg(this,["confirmButton","denyButton","cancelButton"],!0)}function cg(){og(this.getInput(),!1)}function ug(){og(this.getInput(),!0)}function dg(t){const e=ye.domCache.get(this),n=ye.innerParams.get(this);mt(e.validationMessage,t),e.validationMessage.className=_["validation-message"],n.customClass&&n.customClass.validationMessage&&ne(e.validationMessage,n.customClass.validationMessage),Be(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid","true"),s.setAttribute("aria-describedby",_["validation-message"]),Bm(s),ne(s,_.inputerror))}function hg(){const t=ye.domCache.get(this);t.validationMessage&&ze(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Et(e,_.inputerror))}const xs={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},uP=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],dP={allowEnterKey:void 0},hP=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],fg=t=>Object.prototype.hasOwnProperty.call(xs,t),pg=t=>uP.indexOf(t)!==-1,mg=t=>dP[t],fP=t=>{fg(t)||Xe(`Unknown parameter "${t}"`)},pP=t=>{hP.includes(t)&&Xe(`The parameter "${t}" is incompatible with toasts`)},mP=t=>{const e=mg(t);e&&Nm(t,e)},gg=t=>{t.backdrop===!1&&t.allowOutsideClick&&Xe('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","borderless"].includes(t.theme)&&Xe(`Invalid theme "${t.theme}". Expected "light", "dark", "auto", or "borderless"`);for(const e in t)fP(e),t.toast&&pP(e),mP(e)};function _g(t){const e=Ze(),n=ie(),s=ye.innerParams.get(this);if(!n||ln(n,s.hideClass.popup)){Xe("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const i=gP(t),r=Object.assign({},s,i);gg(r),e.dataset.swal2Theme=r.theme,Gm(this,r),ye.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const gP=t=>{const e={};return Object.keys(t).forEach(n=>{pg(n)?e[n]=t[n]:Xe(`Invalid parameter to update: ${n}`)}),e};function wg(){const t=ye.domCache.get(this),e=ye.innerParams.get(this);if(!e){vg(this);return}t.popup&&W.swalCloseEventFinishedCallback&&(W.swalCloseEventFinishedCallback(),delete W.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),W.eventEmitter.emit("didDestroy"),_P(this)}const _P=t=>{vg(t),delete t.params,delete W.keydownHandler,delete W.keydownTarget,delete W.currentInstance},vg=t=>{t.isAwaitingPromise?(ba(ye,t),t.isAwaitingPromise=!0):(ba(Ws,t),ba(ye,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},ba=(t,e)=>{for(const n in t)t[n].delete(e)};var wP=Object.freeze({__proto__:null,_destroy:wg,close:Sn,closeModal:Sn,closePopup:Sn,closeToast:Sn,disableButtons:lg,disableInput:ug,disableLoading:lo,enableButtons:ag,enableInput:cg,getInput:ig,handleAwaitingPromise:or,hideLoading:lo,rejectPromise:eg,resetValidationMessage:hg,showValidationMessage:dg,update:_g});const vP=(t,e,n)=>{t.toast?yP(t,e,n):(CP(e),EP(e),IP(t,e,n))},yP=(t,e,n)=>{e.popup.onclick=()=>{t&&(bP(t)||t.timer||t.input)||n(ni.close)}},bP=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let co=!1;const CP=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(co=!0)}}},EP=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(co=!0)}}},IP=(t,e,n)=>{e.container.onclick=s=>{if(co){co=!1;return}s.target===e.container&&Ho(t.allowOutsideClick)&&n(ni.backdrop)}},SP=t=>typeof t=="object"&&t.jquery,th=t=>t instanceof Element||SP(t),TP=t=>{const e={};return typeof t[0]=="object"&&!th(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||th(i)?e[n]=i:i!==void 0&&cs(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function kP(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new this(...e)}function PP(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const AP=()=>W.timeout&&W.timeout.getTimerLeft(),yg=()=>{if(W.timeout)return FT(),W.timeout.stop()},bg=()=>{if(W.timeout){const t=W.timeout.start();return Bc(t),t}},RP=()=>{const t=W.timeout;return t&&(t.running?yg():bg())},xP=t=>{if(W.timeout){const e=W.timeout.increase(t);return Bc(e,!0),e}},OP=()=>!!(W.timeout&&W.timeout.isRunning());let nh=!1;const al={};function NP(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";al[t]=this,nh||(document.body.addEventListener("click",MP),nh=!0)}const MP=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in al){const s=e.getAttribute(n);if(s){al[n].fire({template:s});return}}};class DP{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const s=this._getHandlersByEventName(e);s.includes(n)||s.push(n)}once(e,n){var s=this;const i=function(){s.removeListener(e,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];n.apply(s,o)};this.on(e,i)}emit(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];this._getHandlersByEventName(e).forEach(r=>{try{r.apply(this,s)}catch(o){console.error(o)}})}removeListener(e,n){const s=this._getHandlersByEventName(e),i=s.indexOf(n);i>-1&&s.splice(i,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}W.eventEmitter=new DP;const LP=(t,e)=>{W.eventEmitter.on(t,e)},BP=(t,e)=>{W.eventEmitter.once(t,e)},FP=(t,e)=>{if(!t){W.eventEmitter.reset();return}e?W.eventEmitter.removeListener(t,e):W.eventEmitter.removeAllListeners(t)};var $P=Object.freeze({__proto__:null,argsToParams:TP,bindClickHandler:NP,clickCancel:Tk,clickConfirm:Km,clickDeny:Sk,enableLoading:js,fire:kP,getActions:sr,getCancelButton:ei,getCloseButton:Nc,getConfirmButton:Kt,getContainer:Ze,getDenyButton:us,getFocusableElements:Mc,getFooter:Lm,getHtmlContainer:xc,getIcon:Zs,getIconContent:OT,getImage:Dm,getInputLabel:NT,getLoader:ti,getPopup:ie,getProgressSteps:Oc,getTimerLeft:AP,getTimerProgressBar:Wo,getTitle:Mm,getValidationMessage:Vo,increaseTimer:xP,isDeprecatedParameter:mg,isLoading:DT,isTimerRunning:OP,isUpdatableParameter:pg,isValidParameter:fg,isVisible:Ik,mixin:PP,off:FP,on:LP,once:BP,resumeTimer:bg,showLoading:js,stopTimer:yg,toggleTimer:RP});class UP{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Cg=["swal-title","swal-html","swal-footer"],HP=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return YP(n),Object.assign(VP(n),WP(n),jP(n),qP(n),zP(n),GP(n),KP(n,Cg))},VP=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(s=>{rs(s,["name","value"]);const i=s.getAttribute("name"),r=s.getAttribute("value");!i||!r||(typeof xs[i]=="boolean"?e[i]=r!=="false":typeof xs[i]=="object"?e[i]=JSON.parse(r):e[i]=r)}),e},WP=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(s=>{const i=s.getAttribute("name"),r=s.getAttribute("value");!i||!r||(e[i]=new Function(`return ${r}`)())}),e},jP=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(s=>{rs(s,["type","color","aria-label"]);const i=s.getAttribute("type");!i||!["confirm","cancel","deny"].includes(i)||(e[`${i}ButtonText`]=s.innerHTML,e[`show${Pc(i)}Button`]=!0,s.hasAttribute("color")&&(e[`${i}ButtonColor`]=s.getAttribute("color")),s.hasAttribute("aria-label")&&(e[`${i}ButtonAriaLabel`]=s.getAttribute("aria-label")))}),e},qP=t=>{const e={},n=t.querySelector("swal-image");return n&&(rs(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},zP=t=>{const e={},n=t.querySelector("swal-icon");return n&&(rs(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},GP=t=>{const e={},n=t.querySelector("swal-input");n&&(rs(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=Array.from(t.querySelectorAll("swal-input-option"));return s.length&&(e.inputOptions={},s.forEach(i=>{rs(i,["value"]);const r=i.getAttribute("value");if(!r)return;const o=i.innerHTML;e.inputOptions[r]=o})),e},KP=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(rs(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},YP=t=>{const e=Cg.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.includes(s)||Xe(`Unrecognized element <${s}>`)})},rs=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Xe([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Eg=10,QP=t=>{const e=Ze(),n=ie();typeof t.willOpen=="function"&&t.willOpen(n),W.eventEmitter.emit("willOpen",n);const i=window.getComputedStyle(document.body).overflowY;ZP(e,n,t),setTimeout(()=>{JP(e,n)},Eg),Dc()&&(XP(e,t.scrollbarPadding,i),Mk()),!jo()&&!W.previousActiveElement&&(W.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),W.eventEmitter.emit("didOpen",n),Et(e,_["no-transition"])},uo=t=>{const e=ie();if(t.target!==e)return;const n=Ze();e.removeEventListener("animationend",uo),e.removeEventListener("transitionend",uo),n.style.overflowY="auto"},JP=(t,e)=>{$m(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",uo),e.addEventListener("transitionend",uo)):t.style.overflowY="auto"},XP=(t,e,n)=>{Dk(),e&&n!=="hidden"&&Vk(n),setTimeout(()=>{t.scrollTop=0})},ZP=(t,e,n)=>{ne(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),Be(e,"grid"),setTimeout(()=>{ne(e,n.showClass.popup),e.style.removeProperty("opacity")},Eg)):Be(e,"grid"),ne([document.documentElement,document.body],_.shown),n.heightAuto&&n.backdrop&&!n.toast&&ne([document.documentElement,document.body],_["height-auto"])};var sh={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function eA(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=sh.email),t.input==="url"&&(t.inputValidator=sh.url))}function tA(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Xe('Target parameter is not valid, defaulting to "body"'),t.target="body")}function nA(t){eA(t),t.showLoaderOnConfirm&&!t.preConfirm&&Xe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),tA(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),zT(t)}let Vt;var pr=new WeakMap;class xe{constructor(){if(IT(this,pr,void 0),typeof window>"u")return;Vt=this;for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const i=Object.freeze(this.constructor.argsToParams(n));this.params=i,this.isAwaitingPromise=!1,ST(pr,this,this._main(Vt.params))}_main(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(gg(Object.assign({},n,e)),W.currentInstance){const r=Ws.swalPromiseResolve.get(W.currentInstance),{isAwaitingPromise:o}=W.currentInstance;W.currentInstance._destroy(),o||r({isDismissed:!0}),Dc()&&Jm()}W.currentInstance=Vt;const s=iA(e,n);nA(s),Object.freeze(s),W.timeout&&(W.timeout.stop(),delete W.timeout),clearTimeout(W.restoreFocusTimeout);const i=rA(Vt);return Gm(Vt,s),ye.innerParams.set(Vt,s),sA(Vt,i,s)}then(e){return zd(pr,this).then(e)}finally(e){return zd(pr,this).finally(e)}}const sA=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o})};Ws.swalPromiseResolve.set(t,s),Ws.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>{rP(t)},e.denyButton.onclick=()=>{oP(t)},e.cancelButton.onclick=()=>{aP(t,r)},e.closeButton.onclick=()=>{r(ni.close)},vP(n,e,r),kk(W,n,r),Qk(t,n),QP(n),oA(W,n,r),aA(e,n),setTimeout(()=>{e.container.scrollTop=0})}),iA=(t,e)=>{const n=HP(t),s=Object.assign({},xs,e,n,t);return s.showClass=Object.assign({},xs.showClass,s.showClass),s.hideClass=Object.assign({},xs.hideClass,s.hideClass),s.animation===!1&&(s.showClass={backdrop:"swal2-noanimation"},s.hideClass={}),s},rA=t=>{const e={popup:ie(),container:Ze(),actions:sr(),confirmButton:Kt(),denyButton:us(),cancelButton:ei(),loader:ti(),closeButton:Nc(),validationMessage:Vo(),progressSteps:Oc()};return ye.domCache.set(t,e),e},oA=(t,e,n)=>{const s=Wo();ze(s),e.timer&&(t.timeout=new UP(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Be(s),ht(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Bc(e.timer)})))},aA=(t,e)=>{if(!e.toast){if(!Ho(e.allowEnterKey)){Nm("allowEnterKey"),uA();return}lA(t)||cA(t,e)||ol(-1,1)}},lA=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&ot(n))return n.focus(),!0;return!1},cA=(t,e)=>e.focusDeny&&ot(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&ot(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&ot(t.confirmButton)?(t.confirmButton.focus(),!0):!1,uA=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}xe.prototype.disableButtons=lg;xe.prototype.enableButtons=ag;xe.prototype.getInput=ig;xe.prototype.disableInput=ug;xe.prototype.enableInput=cg;xe.prototype.hideLoading=lo;xe.prototype.disableLoading=lo;xe.prototype.showValidationMessage=dg;xe.prototype.resetValidationMessage=hg;xe.prototype.close=Sn;xe.prototype.closePopup=Sn;xe.prototype.closeModal=Sn;xe.prototype.closeToast=Sn;xe.prototype.rejectPromise=eg;xe.prototype.update=_g;xe.prototype._destroy=wg;Object.assign(xe,$P);Object.keys(wP).forEach(t=>{xe[t]=function(){return Vt&&Vt[t]?Vt[t](...arguments):null}});xe.DismissReason=ni;xe.version="11.17.2";const Te=xe;Te.default=Te;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:var(--swal2-border-radius);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const dA={class:"mb-4"},hA={class:"row g-2"},fA={key:0,class:"col-12"},pA={class:"penalty-form mb-4"},mA={class:"list-group"},gA={__name:"PenaltyForm",props:["newPenalty","gameClock","expiredPenalties"],emits:["addPenalty","clearPenalties"],setup(t,{emit:e}){const n=t,s=e,i=qs({...n.newPenalty});Es(()=>n.newPenalty,l=>{Object.assign(i,l)});const r=()=>{Te.fire({title:"Add Penalty",html:`
      <div class="row g-2">
      <div class="col-4">
        <input id="player" class="form-control form-control-sm" type="text" placeholder="Player #" value="${i.player}" />
      </div>
      <div class="col-4 offset-4">
        <label class="btn btn-outline-success btn-sm w-100" for="releasable">Releasable</label>
        <input class="btn-check" type="checkbox" id="releasable" ${i.releasable?"checked":""} />
      </div>
       <div class="col-6">
        <label>Team</label>
        <div class="btn-group w-100">
          <button class="btn btn-outline-primary active" id="homeBtn">Home</button>
          <button class="btn btn-outline-primary" id="awayBtn">Away</button>
        </div>
      </div>
       <div class="col-6">
        <label>Duration</label>
        <div class="btn-group w-100">
          <button class="btn btn-outline-danger active" id="30sBtn">30s</button>
          <button class="btn btn-outline-danger" id="1minBtn">1:00</button>
          <button class="btn btn-outline-danger" id="2minBtn">2:00</button>
        </div>
      </div>
       <div class="col-12">
        <label>Penalty Category</label>
        <div class="btn-group w-100">
          <button class="btn btn-outline-dark active" id="crosscheckBtn">Crosscheck</button>
          <button class="btn btn-outline-dark" id="slashBtn">Slash</button>
          <button class="btn btn-outline-dark" id="tripBtn">Trip</button>
          <button class="btn btn-outline-dark" id="roughnessBtn">Unnecessary Roughness</button>
          <button class="btn btn-outline-dark" id="otherBtn">Other</button>
        </div>
      </div>
    `,showCancelButton:!0,confirmButtonText:"Add Penalty",cancelButtonText:"Cancel",preConfirm:()=>{const l=document.getElementById("player").value,c=document.getElementById("releasable").checked,u=i.team,d=i.duration,h=i.category;return l?{player:l,releasable:c,team:u,duration:d,category:h}:(Te.showValidationMessage("Player # is required"),!1)}}).then(l=>{l.isConfirmed&&s("addPenalty",{...l.value,startGameClock:n.gameClock,endGameClock:n.gameClock-l.value.duration})}),setTimeout(()=>{document.getElementById("homeBtn").addEventListener("click",()=>{i.team="home",o("homeBtn","awayBtn")}),document.getElementById("awayBtn").addEventListener("click",()=>{i.team="away",o("awayBtn","homeBtn")}),document.getElementById("30sBtn").addEventListener("click",()=>{i.duration=30,o("30sBtn","1minBtn","2minBtn")}),document.getElementById("1minBtn").addEventListener("click",()=>{i.duration=60,o("1minBtn","30sBtn","2minBtn")}),document.getElementById("2minBtn").addEventListener("click",()=>{i.duration=120,o("2minBtn","30sBtn","1minBtn")}),document.getElementById("crosscheckBtn").addEventListener("click",()=>{i.category="crosscheck",o("crosscheckBtn","slashBtn","tripBtn","roughnessBtn","otherBtn")}),document.getElementById("slashBtn").addEventListener("click",()=>{i.category="slash",o("slashBtn","crosscheckBtn","tripBtn","roughnessBtn","otherBtn")}),document.getElementById("tripBtn").addEventListener("click",()=>{i.category="trip",o("tripBtn","crosscheckBtn","slashBtn","roughnessBtn","otherBtn")}),document.getElementById("roughnessBtn").addEventListener("click",()=>{i.category="unnecessaryroughness",o("roughnessBtn","crosscheckBtn","slashBtn","tripBtn","otherBtn")}),document.getElementById("otherBtn").addEventListener("click",()=>{i.category="other",o("otherBtn","crosscheckBtn","slashBtn","tripBtn","roughnessBtn")})},100)},o=(...l)=>{l.forEach(u=>{document.getElementById(u).classList.remove("active")});const c=document.getElementById(`${l[0]}`);console.log(c),c&&c.classList.add("active")};function a(l){const c=String(Math.floor(l/60)).padStart(2,"0"),u=String(l%60).padStart(2,"0");return`${c}:${u}`}return(l,c)=>(Z(),te("div",dA,[H("div",hA,[H("div",{class:"col-6 offset-3"},[H("button",{class:"btn btn-primary w-100 mb-2",onClick:r}," Add Penalty ")]),t.expiredPenalties.length>0?(Z(),te("div",fA,[H("div",pA,[c[1]||(c[1]=H("h5",{class:"text-center"},"Expired Penalties",-1)),H("ul",mA,[(Z(!0),te(vt,null,Il(t.expiredPenalties,(u,d)=>(Z(),te("li",{key:d,class:"list-group-item"},be(u.team)+" "+be(u.player?`- #${u.player}`:"")+" | "+be(u.category)+" | "+be(a(u.startGameClock))+" → "+be(a(u.endGameClock)),1))),128))]),t.expiredPenalties.length>0?(Z(),te("button",{key:0,class:"btn btn-outline-dark mt-2",onClick:c[0]||(c[0]=u=>l.$emit("clearPenalties"))},"Clear Penalties")):Ye("",!0)])])):Ye("",!0)])]))}},_A={class:"mb-4"},wA={class:"row g-2"},vA={key:0,class:"col-12"},yA={class:"penalty-form mb-4"},bA={class:"list-group"},CA=["onClick"],EA={__name:"PlayerStatsForm",props:["newPlayerStat","playerStats"],emits:["addPlayerStat","clearPlayerStat"],setup(t,{emit:e}){const n=t,s=qs({...n.newPlayerStat}),i=e;Es(()=>n.newPlayerStat,l=>Object.assign(s,l));const r=()=>{Te.fire({title:"Add Player Stat",html:`
      <div class="row g-2">
        <div class="col-4">
          <input id="player" class="form-control form-control-sm" v-model="local.player" placeholder="Player #" />
        </div>
        <div class="col-6 offset-2">
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-primary active" id="homeBtn">Home</button>
          <button class="btn btn-outline-primary" id="awayBtn">Away</button>
          </div>
        </div>
        <div class="col-12">
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-success active" id="goalBtn">Goal</button>
            <button class="btn btn-outline-success" id="assistBtn">Assist</button>
            <button class="btn btn-outline-success" id="shotBtn">Shot</button>
            <button class="btn btn-outline-success" id="shotOnBtn">Shot On</button>
          </div>
        </div>
        <div class="col-12">
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-dark" id="gbBtn">Ground Ball</button>
            <button class="btn btn-outline-dark" id="causedTOBtn">Caused TO</button>
            <button class="btn btn-outline-dark" id="saveBtn">Save</button>
            <button class="btn btn-outline-dark" id="faceOffBtn">Face Off</button>
            <button class="btn btn-outline-dark" id="faceOffWinBtn">FO Win</button>
          </div>
        </div>
      </div>
    `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:"Add Stat",cancelButtonText:"Cancel",preConfirm:()=>{const l=document.getElementById("player").value;return l?{player:l,team:s.team,type:s.type}:(Te.showValidationMessage("Player # is required"),!1)}}).then(l=>{l.isConfirmed&&i("addPlayerStat",{...l.value})}),setTimeout(()=>{document.getElementById("homeBtn").addEventListener("click",()=>{s.team="home",o("homeBtn","awayBtn")}),document.getElementById("awayBtn").addEventListener("click",()=>{s.team="away",o("awayBtn","homeBtn")}),document.getElementById("goalBtn").addEventListener("click",()=>{s.type="goal",o("goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("assistBtn").addEventListener("click",()=>{s.type="assist",o("assistBtn","goalBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("shotBtn").addEventListener("click",()=>{s.type="shot",o("shotBtn","goalBtn","assistBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("shotOnBtn").addEventListener("click",()=>{s.type="shotOn",o("shotOnBtn","goalBtn","assistBtn","shotBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("gbBtn").addEventListener("click",()=>{s.type="groundBall",o("gbBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("causedTOBtn").addEventListener("click",()=>{s.type="causedTO",o("causedTOBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("saveBtn").addEventListener("click",()=>{s.type="save",o("saveBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("faceOffBtn").addEventListener("click",()=>{s.type="faceOff",o("faceOffBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffWinBtn")}),document.getElementById("faceOffWinBtn").addEventListener("click",()=>{s.type="faceOffWin",o("faceOffWinBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn")})},100)},o=(...l)=>{l.forEach(u=>{document.getElementById(u).classList.remove("active")});const c=document.getElementById(`${l[0]}`);console.log(c),c&&c.classList.add("active")};function a(l){const c=String(Math.floor(l/60)).padStart(2,"0"),u=String(l%60).padStart(2,"0");return`${c}:${u}`}return(l,c)=>(Z(),te("div",_A,[H("div",wA,[H("div",{class:"col-6 offset-3 mb-2"},[H("button",{class:"btn btn-primary w-100",onClick:r},"Add Player Stat")]),t.playerStats.length>0?(Z(),te("div",vA,[H("div",yA,[c[2]||(c[2]=H("h5",{class:"text-center"},"Player Stats",-1)),H("ul",bA,[(Z(!0),te(vt,null,Il(t.playerStats,(u,d)=>(Z(),te("li",{key:d,class:"list-group-item d-flex justify-content-between align-items-center"},[H("span",null,be(u.team)+" - #"+be(u.player)+" | "+be(u.type)+" | Time: "+be(a(u.gameClock))+" | Quarter: "+be(u.quarter),1),H("button",{class:"btn btn-danger btn-sm ml-auto removeBtn",onClick:h=>l.$emit("removePlayerStat",d)},c[1]||(c[1]=[H("i",{class:"bi bi-x"},null,-1)]),8,CA)]))),128))]),H("button",{class:"btn btn-outline-dark mt-3 w-100",onClick:c[0]||(c[0]=u=>l.$emit("clearPlayerStat"))}," Clear All ")])])):Ye("",!0)])]))}},IA=$o(EA,[["__scopeId","data-v-f8de91bb"]]),SA={class:"container-fluid py-3"},TA={class:"row"},kA={class:"col-6"},PA={class:"col-6"},AA={__name:"GameController",props:{isPublicView:Boolean},setup(t){const e=Ie({home:0,away:0}),n=Ie({home:2,away:2}),s=Ie(720),i=Ie(80),r=Ie(!1),o=Ie(null),a=Ie(1),l=Ie("Home"),c=Ie("Away"),u=Ie([]),d=Ie([]),h=Ie([]),m=Ie({team:"home",player:"",duration:30,category:"crosscheck",releasable:!0}),w=Ie({player:"",team:"home",type:"goal"});Cl(()=>{const O=vr(Ir,"/scoreboard");Bp(O,L=>{const $=L.val();$&&(e.value=$.score||{home:0,away:0},n.value=$.timeouts||{home:2,away:2},s.value=$.gameClock??720,i.value=$.shotClock??80,r.value=$.isClockRunning??!1,a.value=$.quarter??1,l.value=$.home??"Home",c.value=$.away??"Away",h.value=JSON.parse($.playerStats||"[]"),u.value=JSON.parse($.activePenalties||"[]"),d.value=JSON.parse($.expiredPenalties||"[]"))})}),El(()=>{o.value&&(clearInterval(o.value),o.value=null)});async function E(){if(!(await Te.fire({title:"Start a New Game?",text:"This will archive the current game and reset the scoreboard.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, start new game!"})).isConfirmed)return;const L=new Date().toISOString(),$=vr(Ir,"/games"),re=PE($);await AE(re,{archivedAt:L,data:{score:e.value,timeouts:n.value,gameClock:s.value,shotClock:i.value,isClockRunning:r.value,quarter:a.value,home:l.value,away:c.value,playerStats:h.value,activePenalties:u.value,expiredPenalties:d.value}}),e.value={home:0,away:0},n.value={home:2,away:2},s.value=720,i.value=80,r.value=!1,a.value=1,l.value="Home",c.value="Away",h.value=[],u.value=[],d.value=[],o.value&&(clearInterval(o.value),o.value=null),T(),Te.fire({title:"New Game Started!",icon:"success",timer:1500,showConfirmButton:!1})}function T(){const O=vr(Ir,"/scoreboard");RE(O,{score:e.value,timeouts:n.value,gameClock:s.value,shotClock:i.value,isClockRunning:r.value,quarter:a.value,home:l.value,away:c.value,playerStats:JSON.stringify(h.value),activePenalties:JSON.stringify(u.value),expiredPenalties:JSON.stringify(d.value)})}function B(){if(r.value){console.log("Stopping clocks"),clearInterval(o.value),o.value=null,r.value=!1,T();return}if(s.value===0||i.value===0){console.log("Clocks not started — one or both clocks are at 0");return}console.log("Starting clocks"),o.value=setInterval(()=>{let O=!1;i.value>0&&(i.value--,i.value===0&&(O=!0)),s.value>0&&(s.value--,s.value===0&&(O=!0)),nt(),T(),O&&(clearInterval(o.value),o.value=null,r.value=!1,console.log("Clocks stopped because one hit zero"),T())},1e3),r.value=!0,T()}function M(O){O==="shotClock"&&(i.value=80),O==="gameClock"&&(s.value=720),T()}function F(O,L){e.value[O]=Math.max(0,e.value[O]+L),T()}function D(O,L){n.value[O]=Math.max(0,Math.min(2,n.value[O]+L)),T()}function se(O){a.value=Math.max(1,Math.min(4,a.value+O)),T()}function Ee(O){const L=O==="home"?l.value:c.value;Te.fire({title:`Set ${O==="home"?"Home":"Away"} Team Name`,input:"text",inputLabel:"Team Name",inputValue:L,showCancelButton:!0,confirmButtonText:"Save",cancelButtonText:"Cancel",inputValidator:$=>{if(!$)return"Team name cannot be empty!"}}).then($=>{const re=$.value;re!==void 0&&(O==="home"?l.value=re:c.value=re,T(),Te.fire({toast:!0,position:"bottom",title:"Updated!",text:`${O==="home"?"Home":"Away"} team name changed to "${re}"`,icon:"success",timer:1500,showConfirmButton:!1,timerProgressBar:!0}))})}function de(O){const L=O==="gameClock"?s.value:i.value;Te.fire({title:`Set ${O==="gameClock"?"Game":"Shot"} Clock`,input:"number",inputLabel:"Time in seconds",inputValue:L,inputAttributes:{min:0,step:1},showCancelButton:!0,confirmButtonText:"Set",cancelButtonText:"Cancel",inputValidator:$=>{if($==="")return"You must enter a value!";const re=parseInt($);if(isNaN(re)||re<0)return"Please enter a valid non-negative number."}}).then($=>{const re=$.value,Ae=parseInt(re);isNaN(Ae)||(O==="gameClock"?s.value=Ae:i.value=Ae,T(),Te.fire({toast:!0,position:"bottom",title:"Clock Updated",text:`${O==="gameClock"?"Game":"Shot"} clock set to ${Ae} seconds.`,icon:"success",timer:1500,showConfirmButton:!1}))})}function et(O){const L={...O};L.startGameClock=s.value,L.remaining=L.duration,L.endGameClock=s.value-L.duration,L.quarter=a.value,u.value.push(L),m.value={team:"home",player:"",duration:30,category:"crosscheck",releasable:!0},T()}function tt(O,L){const $=u.value.filter(Ae=>Ae.team===L);if(O<0||O>=$.length){Te.fire({title:"Error",text:"Invalid index for the selected team.",icon:"error",showConfirmButton:!0});return}const re=$[O];Te.fire({title:"Remove Penalty?",html:`
      <strong>Player:</strong> ${re.player}<br>
      <strong>Team:</strong> ${re.team}<br>
      <strong>Duration:</strong> ${re.duration} sec
    `,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, remove it",cancelButtonText:"Cancel"}).then(Ae=>{if(Ae.isConfirmed){const _t=u.value.findIndex(Lt=>Lt.player===re.player&&Lt.team===re.team&&Lt.duration===re.duration),Ue=u.value.splice(_t,1)[0];d.value.push(Ue),T(),Te.fire({toast:!0,position:"bottom",title:"Removed",text:"The penalty has been moved to expired.",icon:"success",timer:1200,showConfirmButton:!1})}})}function nt(){const O=[];for(const L of u.value)L.remaining--,L.remaining<=0?d.value.push({...L}):O.push(L);u.value=O,T()}function Dt(){Te.fire({title:"Clear All Expired Penalties?",text:"This will permanently remove all expired penalties from the list.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, clear them",cancelButtonText:"Cancel"}).then(O=>{O.isConfirmed&&(d.value=[],T(),Te.fire({title:"Cleared",text:"Expired penalties have been removed.",icon:"success",timer:1200,showConfirmButton:!1}))})}function Qt(O){const L={...O,gameClock:s.value,quarter:a.value};h.value.push(L),T()}async function gt(O){const L=h.value[O];(await Te.fire({title:"Remove Player Stat?",html:`
      <strong>Player:</strong> ${L.player}<br>
      <strong>Type:</strong> ${L.type}<br>
      <strong>Quarter:</strong> ${L.quarter}<br>
    `,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, remove it",cancelButtonText:"Cancel"})).isConfirmed&&(h.value.splice(O,1),T(),Te.fire({title:"Removed",text:"Player stat has been removed.",icon:"success",timer:1200,showConfirmButton:!1}))}async function Fn(){(await Te.fire({title:"Clear All Player Stats?",text:"This will permanently remove all player statistics.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, clear them",cancelButtonText:"Cancel"})).isConfirmed&&(h.value=[],T(),Te.fire({title:"Cleared",text:"All player stats have been removed.",icon:"success",timer:1200,showConfirmButton:!1}))}function fn(){const O={score:e.value,timeouts:n.value,gameClock:s.value,shotClock:i.value,isClockRunning:r.value,quarter:a.value,playerStats:h.value,home:l.value,away:c.value},L=JSON.stringify(O,null,2),$=new Blob([L],{type:"application/json"}),re=URL.createObjectURL($),Ae=document.createElement("a");Ae.href=re,Ae.download="game_data.json",Ae.click(),URL.revokeObjectURL(re)}return(O,L)=>(Z(),te("div",SA,[Se(Pm,{quarter:a.value,gameClock:s.value,shotClock:i.value,isClockRunning:r.value,isPublicView:!1,onToggleClocks:B,onResetClock:M,onAdjustQuarter:se,onEditClock:de},null,8,["quarter","gameClock","shotClock","isClockRunning"]),Se(Am,{score:e.value,timeouts:n.value,home:l.value,away:c.value,activePenalties:u.value,isClockRunning:r.value,onAdjustScore:F,onAdjustTimeout:D,onEditName:Ee,onRemovePenalty:tt,isPublicView:!1},null,8,["score","timeouts","home","away","activePenalties","isClockRunning"]),H("div",TA,[H("div",kA,[Se(gA,{newPenalty:m.value,gameClock:s.value,expiredPenalties:d.value,onClearPenalties:Dt,onAddPenalty:et},null,8,["newPenalty","gameClock","expiredPenalties"])]),H("div",PA,[Se(IA,{newPlayerStat:w.value,playerStats:h.value,onAddPlayerStat:Qt,onRemovePlayerStat:gt,onClearPlayerStat:Fn},null,8,["newPlayerStat","playerStats"])])]),H("div",{class:"position-fixed bottom-0 start-0 m-2"},[H("button",{class:"btn btn-secondary btn-sm me-2",onClick:fn}," Export Data "),H("button",{class:"btn btn-dark btn-sm",onClick:E}," New Game ")])]))}},RA=()=>new Promise((t,e)=>{Sr.onAuthStateChanged(n=>{n?t(n):e("Not authenticated")})}),xA=[{path:"/",name:"PublicViewer",component:CT},{path:"/control",name:"GameController",component:AA,props:t=>({isPublicView:t.query.isPublicView}),beforeEnter:async(t,e,n)=>{try{const s=await RA();["jonny5v@gmail.com"].includes(s.email)?n():n({name:"PublicViewer"})}catch{n({name:"PublicViewer"})}}}],OA=QS({history:SS(),routes:xA}),Ig=Uw(KI);Ig.use(OA);Ig.mount("#app");
