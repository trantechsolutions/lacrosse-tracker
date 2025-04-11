(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function nl(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const ve={},_s=[],jt=()=>{},vg=()=>!1,ao=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),sl=t=>t.startsWith("onUpdate:"),qe=Object.assign,il=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},yg=Object.prototype.hasOwnProperty,ue=(t,e)=>yg.call(t,e),K=Array.isArray,ws=t=>lo(t)==="[object Map]",eh=t=>lo(t)==="[object Set]",Y=t=>typeof t=="function",Oe=t=>typeof t=="string",On=t=>typeof t=="symbol",Ie=t=>t!==null&&typeof t=="object",th=t=>(Ie(t)||Y(t))&&Y(t.then)&&Y(t.catch),nh=Object.prototype.toString,lo=t=>nh.call(t),bg=t=>lo(t).slice(8,-1),sh=t=>lo(t)==="[object Object]",rl=t=>Oe(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,di=nl(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),co=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Cg=/-(\w)/g,bt=co(t=>t.replace(Cg,(e,n)=>n?n.toUpperCase():"")),Eg=/\B([A-Z])/g,rs=co(t=>t.replace(Eg,"-$1").toLowerCase()),uo=co(t=>t.charAt(0).toUpperCase()+t.slice(1)),Fo=co(t=>t?`on${uo(t)}`:""),Sn=(t,e)=>!Object.is(t,e),$o=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},ih=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},Ig=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let Hc;const ho=()=>Hc||(Hc=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function ol(t){if(K(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Oe(s)?Pg(s):ol(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Oe(t)||Ie(t))return t}const Sg=/;(?![^(]*\))/g,Tg=/:([^]+)/,kg=/\/\*[^]*?\*\//g;function Pg(t){const e={};return t.replace(kg,"").split(Sg).forEach(n=>{if(n){const s=n.split(Tg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function fo(t){let e="";if(Oe(t))e=t;else if(K(t))for(let n=0;n<t.length;n++){const s=fo(t[n]);s&&(e+=s+" ")}else if(Ie(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Ag="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Rg=nl(Ag);function rh(t){return!!t||t===""}const oh=t=>!!(t&&t.__v_isRef===!0),Ee=t=>Oe(t)?t:t==null?"":K(t)||Ie(t)&&(t.toString===nh||!Y(t.toString))?oh(t)?Ee(t.value):JSON.stringify(t,ah,2):String(t),ah=(t,e)=>oh(e)?ah(t,e.value):ws(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Uo(s,r)+" =>"]=i,n),{})}:eh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Uo(n))}:On(e)?Uo(e):Ie(e)&&!K(e)&&!sh(e)?String(e):e,Uo=(t,e="")=>{var n;return On(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let dt;class xg{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=dt,!e&&dt&&(this.index=(dt.scopes||(dt.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=dt;try{return dt=this,e()}finally{dt=n}}}on(){dt=this}off(){dt=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Og(){return dt}let _e;const Ho=new WeakSet;class lh{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,dt&&dt.active&&dt.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Ho.has(this)&&(Ho.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||uh(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,Vc(this),dh(this);const e=_e,n=Rt;_e=this,Rt=!0;try{return this.fn()}finally{hh(this),_e=e,Rt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)cl(e);this.deps=this.depsTail=void 0,Vc(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Ho.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){pa(this)&&this.run()}get dirty(){return pa(this)}}let ch=0,hi,fi;function uh(t,e=!1){if(t.flags|=8,e){t.next=fi,fi=t;return}t.next=hi,hi=t}function al(){ch++}function ll(){if(--ch>0)return;if(fi){let e=fi;for(fi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;hi;){let e=hi;for(hi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function dh(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function hh(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),cl(s),Ng(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function pa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(fh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function fh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Si))return;t.globalVersion=Si;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!pa(t)){t.flags&=-3;return}const n=_e,s=Rt;_e=t,Rt=!0;try{dh(t);const i=t.fn(t._value);(e.version===0||Sn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{_e=n,Rt=s,hh(t),t.flags&=-3}}function cl(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)cl(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Ng(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Rt=!0;const ph=[];function Nn(){ph.push(Rt),Rt=!1}function Mn(){const t=ph.pop();Rt=t===void 0?!0:t}function Vc(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=_e;_e=void 0;try{e()}finally{_e=n}}}let Si=0;class Mg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class ul{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!_e||!Rt||_e===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==_e)n=this.activeLink=new Mg(_e,this),_e.deps?(n.prevDep=_e.depsTail,_e.depsTail.nextDep=n,_e.depsTail=n):_e.deps=_e.depsTail=n,mh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=_e.depsTail,n.nextDep=void 0,_e.depsTail.nextDep=n,_e.depsTail=n,_e.deps===n&&(_e.deps=s)}return n}trigger(e){this.version++,Si++,this.notify(e)}notify(e){al();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{ll()}}}function mh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)mh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const ma=new WeakMap,zn=Symbol(""),ga=Symbol(""),Ti=Symbol("");function Ue(t,e,n){if(Rt&&_e){let s=ma.get(t);s||ma.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new ul),i.map=s,i.key=n),i.track()}}function en(t,e,n,s,i,r){const o=ma.get(t);if(!o){Si++;return}const a=l=>{l&&l.trigger()};if(al(),e==="clear")o.forEach(a);else{const l=K(t),c=l&&rl(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,h)=>{(h==="length"||h===Ti||!On(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ti)),e){case"add":l?c&&a(o.get("length")):(a(o.get(zn)),ws(t)&&a(o.get(ga)));break;case"delete":l||(a(o.get(zn)),ws(t)&&a(o.get(ga)));break;case"set":ws(t)&&a(o.get(zn));break}}ll()}function hs(t){const e=ce(t);return e===t?e:(Ue(e,"iterate",Ti),yt(t)?e:e.map(He))}function po(t){return Ue(t=ce(t),"iterate",Ti),t}const Dg={__proto__:null,[Symbol.iterator](){return Vo(this,Symbol.iterator,He)},concat(...t){return hs(this).concat(...t.map(e=>K(e)?hs(e):e))},entries(){return Vo(this,"entries",t=>(t[1]=He(t[1]),t))},every(t,e){return Jt(this,"every",t,e,void 0,arguments)},filter(t,e){return Jt(this,"filter",t,e,n=>n.map(He),arguments)},find(t,e){return Jt(this,"find",t,e,He,arguments)},findIndex(t,e){return Jt(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return Jt(this,"findLast",t,e,He,arguments)},findLastIndex(t,e){return Jt(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return Jt(this,"forEach",t,e,void 0,arguments)},includes(...t){return Wo(this,"includes",t)},indexOf(...t){return Wo(this,"indexOf",t)},join(t){return hs(this).join(t)},lastIndexOf(...t){return Wo(this,"lastIndexOf",t)},map(t,e){return Jt(this,"map",t,e,void 0,arguments)},pop(){return si(this,"pop")},push(...t){return si(this,"push",t)},reduce(t,...e){return Wc(this,"reduce",t,e)},reduceRight(t,...e){return Wc(this,"reduceRight",t,e)},shift(){return si(this,"shift")},some(t,e){return Jt(this,"some",t,e,void 0,arguments)},splice(...t){return si(this,"splice",t)},toReversed(){return hs(this).toReversed()},toSorted(t){return hs(this).toSorted(t)},toSpliced(...t){return hs(this).toSpliced(...t)},unshift(...t){return si(this,"unshift",t)},values(){return Vo(this,"values",He)}};function Vo(t,e,n){const s=po(t),i=s[e]();return s!==t&&!yt(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const Lg=Array.prototype;function Jt(t,e,n,s,i,r){const o=po(t),a=o!==t&&!yt(t),l=o[e];if(l!==Lg[e]){const d=l.apply(t,r);return a?He(d):d}let c=n;o!==t&&(a?c=function(d,h){return n.call(this,He(d),h,t)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function Wc(t,e,n,s){const i=po(t);let r=n;return i!==t&&(yt(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,He(a),l,t)}),i[e](r,...s)}function Wo(t,e,n){const s=ce(t);Ue(s,"iterate",Ti);const i=s[e](...n);return(i===-1||i===!1)&&fl(n[0])?(n[0]=ce(n[0]),s[e](...n)):i}function si(t,e,n=[]){Nn(),al();const s=ce(t)[e].apply(t,n);return ll(),Mn(),s}const Bg=nl("__proto__,__v_isRef,__isVue"),gh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(On));function Fg(t){On(t)||(t=String(t));const e=ce(this);return Ue(e,"has",t),e.hasOwnProperty(t)}class _h{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?Kg:bh:r?yh:vh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=K(e);if(!i){let l;if(o&&(l=Dg[n]))return l;if(n==="hasOwnProperty")return Fg}const a=Reflect.get(e,n,je(e)?e:s);return(On(n)?gh.has(n):Bg(n))||(i||Ue(e,"get",n),r)?a:je(a)?o&&rl(n)?a:a.value:Ie(a)?i?Eh(a):js(a):a}}class wh extends _h{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=Yn(r);if(!yt(s)&&!Yn(s)&&(r=ce(r),s=ce(s)),!K(e)&&je(r)&&!je(s))return l?!1:(r.value=s,!0)}const o=K(e)&&rl(n)?Number(n)<e.length:ue(e,n),a=Reflect.set(e,n,s,je(e)?e:i);return e===ce(i)&&(o?Sn(s,r)&&en(e,"set",n,s):en(e,"add",n,s)),a}deleteProperty(e,n){const s=ue(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&en(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!On(n)||!gh.has(n))&&Ue(e,"has",n),s}ownKeys(e){return Ue(e,"iterate",K(e)?"length":zn),Reflect.ownKeys(e)}}class $g extends _h{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const Ug=new wh,Hg=new $g,Vg=new wh(!0);const _a=t=>t,or=t=>Reflect.getPrototypeOf(t);function Wg(t,e,n){return function(...s){const i=this.__v_raw,r=ce(i),o=ws(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?_a:e?wa:He;return!e&&Ue(r,"iterate",l?ga:zn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function ar(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function jg(t,e){const n={get(i){const r=this.__v_raw,o=ce(r),a=ce(i);t||(Sn(i,a)&&Ue(o,"get",i),Ue(o,"get",a));const{has:l}=or(o),c=e?_a:t?wa:He;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ue(ce(i),"iterate",zn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=ce(r),a=ce(i);return t||(Sn(i,a)&&Ue(o,"has",i),Ue(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=ce(a),c=e?_a:t?wa:He;return!t&&Ue(l,"iterate",zn),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return qe(n,t?{add:ar("add"),set:ar("set"),delete:ar("delete"),clear:ar("clear")}:{add(i){!e&&!yt(i)&&!Yn(i)&&(i=ce(i));const r=ce(this);return or(r).has.call(r,i)||(r.add(i),en(r,"add",i,i)),this},set(i,r){!e&&!yt(r)&&!Yn(r)&&(r=ce(r));const o=ce(this),{has:a,get:l}=or(o);let c=a.call(o,i);c||(i=ce(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?Sn(r,u)&&en(o,"set",i,r):en(o,"add",i,r),this},delete(i){const r=ce(this),{has:o,get:a}=or(r);let l=o.call(r,i);l||(i=ce(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&en(r,"delete",i,void 0),c},clear(){const i=ce(this),r=i.size!==0,o=i.clear();return r&&en(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=Wg(i,t,e)}),n}function dl(t,e){const n=jg(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(ue(n,i)&&i in s?n:s,i,r)}const qg={get:dl(!1,!1)},zg={get:dl(!1,!0)},Gg={get:dl(!0,!1)};const vh=new WeakMap,yh=new WeakMap,bh=new WeakMap,Kg=new WeakMap;function Yg(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Qg(t){return t.__v_skip||!Object.isExtensible(t)?0:Yg(bg(t))}function js(t){return Yn(t)?t:hl(t,!1,Ug,qg,vh)}function Ch(t){return hl(t,!1,Vg,zg,yh)}function Eh(t){return hl(t,!0,Hg,Gg,bh)}function hl(t,e,n,s,i){if(!Ie(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=Qg(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function vs(t){return Yn(t)?vs(t.__v_raw):!!(t&&t.__v_isReactive)}function Yn(t){return!!(t&&t.__v_isReadonly)}function yt(t){return!!(t&&t.__v_isShallow)}function fl(t){return t?!!t.__v_raw:!1}function ce(t){const e=t&&t.__v_raw;return e?ce(e):t}function Jg(t){return!ue(t,"__v_skip")&&Object.isExtensible(t)&&ih(t,"__v_skip",!0),t}const He=t=>Ie(t)?js(t):t,wa=t=>Ie(t)?Eh(t):t;function je(t){return t?t.__v_isRef===!0:!1}function Ce(t){return Ih(t,!1)}function Xg(t){return Ih(t,!0)}function Ih(t,e){return je(t)?t:new Zg(t,e)}class Zg{constructor(e,n){this.dep=new ul,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ce(e),this._value=n?e:He(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||yt(e)||Yn(e);e=s?e:ce(e),Sn(e,n)&&(this._rawValue=e,this._value=s?e:He(e),this.dep.trigger())}}function ys(t){return je(t)?t.value:t}const e_={get:(t,e,n)=>e==="__v_raw"?t:ys(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return je(i)&&!je(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Sh(t){return vs(t)?t:new Proxy(t,e_)}class t_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new ul(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Si-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&_e!==this)return uh(this,!0),!0}get value(){const e=this.dep.track();return fh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function n_(t,e,n=!1){let s,i;return Y(t)?s=t:(s=t.get,i=t.set),new t_(s,i,n)}const lr={},Cr=new WeakMap;let Un;function s_(t,e=!1,n=Un){if(n){let s=Cr.get(n);s||Cr.set(n,s=[]),s.push(t)}}function i_(t,e,n=ve){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=N=>i?N:yt(N)||i===!1||i===0?vn(N,1):vn(N);let u,d,h,m,w=!1,b=!1;if(je(t)?(d=()=>t.value,w=yt(t)):vs(t)?(d=()=>c(t),w=!0):K(t)?(b=!0,w=t.some(N=>vs(N)||yt(N)),d=()=>t.map(N=>{if(je(N))return N.value;if(vs(N))return c(N);if(Y(N))return l?l(N,2):N()})):Y(t)?e?d=l?()=>l(t,2):t:d=()=>{if(h){Nn();try{h()}finally{Mn()}}const N=Un;Un=u;try{return l?l(t,3,[m]):t(m)}finally{Un=N}}:d=jt,e&&i){const N=d,re=i===!0?1/0:i;d=()=>vn(N(),re)}const M=Og(),D=()=>{u.stop(),M&&M.active&&il(M.effects,u)};if(r&&e){const N=e;e=(...re)=>{N(...re),D()}}let O=b?new Array(t.length).fill(lr):lr;const L=N=>{if(!(!(u.flags&1)||!u.dirty&&!N))if(e){const re=u.run();if(i||w||(b?re.some((Se,he)=>Sn(Se,O[he])):Sn(re,O))){h&&h();const Se=Un;Un=u;try{const he=[re,O===lr?void 0:b&&O[0]===lr?[]:O,m];l?l(e,3,he):e(...he),O=re}finally{Un=Se}}}else u.run()};return a&&a(L),u=new lh(d),u.scheduler=o?()=>o(L,!1):L,m=N=>s_(N,!1,u),h=u.onStop=()=>{const N=Cr.get(u);if(N){if(l)l(N,4);else for(const re of N)re();Cr.delete(u)}},e?s?L(!0):O=u.run():o?o(L.bind(null,!0),!0):u.run(),D.pause=u.pause.bind(u),D.resume=u.resume.bind(u),D.stop=D,D}function vn(t,e=1/0,n){if(e<=0||!Ie(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,je(t))vn(t.value,e,n);else if(K(t))for(let s=0;s<t.length;s++)vn(t[s],e,n);else if(eh(t)||ws(t))t.forEach(s=>{vn(s,e,n)});else if(sh(t)){for(const s in t)vn(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&vn(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Wi(t,e,n,s){try{return s?t(...s):t()}catch(i){mo(i,e,n)}}function zt(t,e,n,s){if(Y(t)){const i=Wi(t,e,n,s);return i&&th(i)&&i.catch(r=>{mo(r,e,n)}),i}if(K(t)){const i=[];for(let r=0;r<t.length;r++)i.push(zt(t[r],e,n,s));return i}}function mo(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||ve;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Nn(),Wi(r,null,10,[t,l,c]),Mn();return}}r_(t,n,i,s,o)}function r_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const Ke=[];let Ht=-1;const bs=[];let gn=null,ps=0;const Th=Promise.resolve();let Er=null;function kh(t){const e=Er||Th;return t?e.then(this?t.bind(this):t):e}function o_(t){let e=Ht+1,n=Ke.length;for(;e<n;){const s=e+n>>>1,i=Ke[s],r=ki(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function pl(t){if(!(t.flags&1)){const e=ki(t),n=Ke[Ke.length-1];!n||!(t.flags&2)&&e>=ki(n)?Ke.push(t):Ke.splice(o_(e),0,t),t.flags|=1,Ph()}}function Ph(){Er||(Er=Th.then(Rh))}function a_(t){K(t)?bs.push(...t):gn&&t.id===-1?gn.splice(ps+1,0,t):t.flags&1||(bs.push(t),t.flags|=1),Ph()}function jc(t,e,n=Ht+1){for(;n<Ke.length;n++){const s=Ke[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;Ke.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function Ah(t){if(bs.length){const e=[...new Set(bs)].sort((n,s)=>ki(n)-ki(s));if(bs.length=0,gn){gn.push(...e);return}for(gn=e,ps=0;ps<gn.length;ps++){const n=gn[ps];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}gn=null,ps=0}}const ki=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Rh(t){try{for(Ht=0;Ht<Ke.length;Ht++){const e=Ke[Ht];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Wi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;Ht<Ke.length;Ht++){const e=Ke[Ht];e&&(e.flags&=-2)}Ht=-1,Ke.length=0,Ah(),Er=null,(Ke.length||bs.length)&&Rh()}}let kt=null,xh=null;function Ir(t){const e=kt;return kt=t,xh=t&&t.type.__scopeId||null,e}function va(t,e=kt,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&tu(-1);const r=Ir(e);let o;try{o=t(...i)}finally{Ir(r),s._d&&tu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function Bn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Nn(),zt(l,n,8,[t.el,a,t,e]),Mn())}}const l_=Symbol("_vte"),c_=t=>t.__isTeleport;function ml(t,e){t.shapeFlag&6&&t.component?(t.transition=e,ml(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Oh(t,e){return Y(t)?qe({name:t.name},e,{setup:t}):t}function Nh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Sr(t,e,n,s,i=!1){if(K(t)){t.forEach((w,b)=>Sr(w,e&&(K(e)?e[b]:e),n,s,i));return}if(pi(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Sr(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?bl(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===ve?a.refs={}:a.refs,d=a.setupState,h=ce(d),m=d===ve?()=>!1:w=>ue(h,w);if(c!=null&&c!==l&&(Oe(c)?(u[c]=null,m(c)&&(d[c]=null)):je(c)&&(c.value=null)),Y(l))Wi(l,a,12,[o,u]);else{const w=Oe(l),b=je(l);if(w||b){const M=()=>{if(t.f){const D=w?m(l)?d[l]:u[l]:l.value;i?K(D)&&il(D,r):K(D)?D.includes(r)||D.push(r):w?(u[l]=[r],m(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else w?(u[l]=o,m(l)&&(d[l]=o)):b&&(l.value=o,t.k&&(u[t.k]=o))};o?(M.id=-1,ut(M,n)):M()}}}ho().requestIdleCallback;ho().cancelIdleCallback;const pi=t=>!!t.type.__asyncLoader,Mh=t=>t.type.__isKeepAlive;function u_(t,e){Dh(t,"a",e)}function d_(t,e){Dh(t,"da",e)}function Dh(t,e,n=We){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(go(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Mh(i.parent.vnode)&&h_(s,e,n,i),i=i.parent}}function h_(t,e,n,s){const i=go(e,t,s,!0);_l(()=>{il(s[e],i)},n)}function go(t,e,n=We,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Nn();const a=ji(n),l=zt(e,n,t,o);return a(),Mn(),l});return s?i.unshift(r):i.push(r),r}}const fn=t=>(e,n=We)=>{(!Ri||t==="sp")&&go(t,(...s)=>e(...s),n)},f_=fn("bm"),gl=fn("m"),p_=fn("bu"),m_=fn("u"),g_=fn("bum"),_l=fn("um"),__=fn("sp"),w_=fn("rtg"),v_=fn("rtc");function y_(t,e=We){go("ec",t,e)}const b_="components";function qc(t,e){return E_(b_,t,!0,e)||t}const C_=Symbol.for("v-ndc");function E_(t,e,n=!0,s=!1){const i=kt||We;if(i){const r=i.type;{const a=cw(r,!1);if(a&&(a===e||a===bt(e)||a===uo(bt(e))))return r}const o=zc(i[t]||r[t],e)||zc(i.appContext[t],e);return!o&&s?r:o}}function zc(t,e){return t&&(t[e]||t[bt(e)]||t[uo(bt(e))])}function wl(t,e,n,s){let i;const r=n,o=K(t);if(o||Oe(t)){const a=o&&vs(t);let l=!1;a&&(l=!yt(t),t=po(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?He(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(Ie(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const ya=t=>t?sf(t)?bl(t):ya(t.parent):null,mi=qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>ya(t.parent),$root:t=>ya(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>Bh(t),$forceUpdate:t=>t.f||(t.f=()=>{pl(t.update)}),$nextTick:t=>t.n||(t.n=kh.bind(t.proxy)),$watch:t=>j_.bind(t)}),jo=(t,e)=>t!==ve&&!t.__isScriptSetup&&ue(t,e),I_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(jo(s,e))return o[e]=1,s[e];if(i!==ve&&ue(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&ue(c,e))return o[e]=3,r[e];if(n!==ve&&ue(n,e))return o[e]=4,n[e];ba&&(o[e]=0)}}const u=mi[e];let d,h;if(u)return e==="$attrs"&&Ue(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==ve&&ue(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,ue(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return jo(i,e)?(i[e]=n,!0):s!==ve&&ue(s,e)?(s[e]=n,!0):ue(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==ve&&ue(t,o)||jo(e,o)||(a=r[0])&&ue(a,o)||ue(s,o)||ue(mi,o)||ue(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:ue(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function Gc(t){return K(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let ba=!0;function S_(t){const e=Bh(t),n=t.proxy,s=t.ctx;ba=!1,e.beforeCreate&&Kc(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:w,activated:b,deactivated:M,beforeDestroy:D,beforeUnmount:O,destroyed:L,unmounted:N,render:re,renderTracked:Se,renderTriggered:he,errorCaptured:Xe,serverPrefetch:Ze,expose:et,inheritAttrs:Dt,components:Qt,directives:gt,filters:$}=e;if(c&&T_(c,s,null),o)for(const z in o){const Q=o[z];Y(Q)&&(s[z]=Q.bind(n))}if(i){const z=i.call(n,n);Ie(z)&&(t.data=js(z))}if(ba=!0,r)for(const z in r){const Q=r[z],Et=Y(Q)?Q.bind(n,n):Y(Q.get)?Q.get.bind(n,n):jt,Lt=!Y(Q)&&Y(Q.set)?Q.set.bind(n):jt,tt=It({get:Et,set:Lt});Object.defineProperty(s,z,{enumerable:!0,configurable:!0,get:()=>tt.value,set:nt=>tt.value=nt})}if(a)for(const z in a)Lh(a[z],s,n,z);if(l){const z=Y(l)?l.call(n):l;Reflect.ownKeys(z).forEach(Q=>{fr(Q,z[Q])})}u&&Kc(u,t,"c");function q(z,Q){K(Q)?Q.forEach(Et=>z(Et.bind(n))):Q&&z(Q.bind(n))}if(q(f_,d),q(gl,h),q(p_,m),q(m_,w),q(u_,b),q(d_,M),q(y_,Xe),q(v_,Se),q(w_,he),q(g_,O),q(_l,N),q(__,Ze),K(et))if(et.length){const z=t.exposed||(t.exposed={});et.forEach(Q=>{Object.defineProperty(z,Q,{get:()=>n[Q],set:Et=>n[Q]=Et})})}else t.exposed||(t.exposed={});re&&t.render===jt&&(t.render=re),Dt!=null&&(t.inheritAttrs=Dt),Qt&&(t.components=Qt),gt&&(t.directives=gt),Ze&&Nh(t)}function T_(t,e,n=jt){K(t)&&(t=Ca(t));for(const s in t){const i=t[s];let r;Ie(i)?"default"in i?r=on(i.from||s,i.default,!0):r=on(i.from||s):r=on(i),je(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function Kc(t,e,n){zt(K(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Lh(t,e,n,s){let i=s.includes(".")?Jh(n,s):()=>n[s];if(Oe(t)){const r=e[t];Y(r)&&Es(i,r)}else if(Y(t))Es(i,t.bind(n));else if(Ie(t))if(K(t))t.forEach(r=>Lh(r,e,n,s));else{const r=Y(t.handler)?t.handler.bind(n):e[t.handler];Y(r)&&Es(i,r,t)}}function Bh(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Tr(l,c,o,!0)),Tr(l,e,o)),Ie(e)&&r.set(e,l),l}function Tr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Tr(t,r,n,!0),i&&i.forEach(o=>Tr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=k_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const k_={data:Yc,props:Qc,emits:Qc,methods:ui,computed:ui,beforeCreate:Ge,created:Ge,beforeMount:Ge,mounted:Ge,beforeUpdate:Ge,updated:Ge,beforeDestroy:Ge,beforeUnmount:Ge,destroyed:Ge,unmounted:Ge,activated:Ge,deactivated:Ge,errorCaptured:Ge,serverPrefetch:Ge,components:ui,directives:ui,watch:A_,provide:Yc,inject:P_};function Yc(t,e){return e?t?function(){return qe(Y(t)?t.call(this,this):t,Y(e)?e.call(this,this):e)}:e:t}function P_(t,e){return ui(Ca(t),Ca(e))}function Ca(t){if(K(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ge(t,e){return t?[...new Set([].concat(t,e))]:e}function ui(t,e){return t?qe(Object.create(null),t,e):e}function Qc(t,e){return t?K(t)&&K(e)?[...new Set([...t,...e])]:qe(Object.create(null),Gc(t),Gc(e??{})):e}function A_(t,e){if(!t)return e;if(!e)return t;const n=qe(Object.create(null),t);for(const s in e)n[s]=Ge(t[s],e[s]);return n}function Fh(){return{app:null,config:{isNativeTag:vg,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let R_=0;function x_(t,e){return function(s,i=null){Y(s)||(s=qe({},s)),i!=null&&!Ie(i)&&(i=null);const r=Fh(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:R_++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:dw,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&Y(u.install)?(o.add(u),u.install(c,...d)):Y(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!l){const m=c._ceVNode||Te(s,i);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(m,u,h),l=!0,c._container=u,u.__vue_app__=c,bl(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(zt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=Cs;Cs=c;try{return u()}finally{Cs=d}}};return c}}let Cs=null;function fr(t,e){if(We){let n=We.provides;const s=We.parent&&We.parent.provides;s===n&&(n=We.provides=Object.create(s)),n[t]=e}}function on(t,e,n=!1){const s=We||kt;if(s||Cs){const i=Cs?Cs._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&Y(e)?e.call(s&&s.proxy):e}}const $h={},Uh=()=>Object.create($h),Hh=t=>Object.getPrototypeOf(t)===$h;function O_(t,e,n,s=!1){const i={},r=Uh();t.propsDefaults=Object.create(null),Vh(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Ch(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function N_(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ce(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(_o(t.emitsOptions,h))continue;const m=e[h];if(l)if(ue(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const w=bt(h);i[w]=Ea(l,a,w,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{Vh(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!ue(e,d)&&((u=rs(d))===d||!ue(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ea(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!ue(e,d))&&(delete r[d],c=!0)}c&&en(t.attrs,"set","")}function Vh(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(di(l))continue;const c=e[l];let u;i&&ue(i,u=bt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:_o(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ce(n),c=a||ve;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ea(i,l,d,c[d],t,!ue(c,d))}}return o}function Ea(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=ue(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&Y(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=ji(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===rs(n))&&(s=!0))}return s}const M_=new WeakMap;function Wh(t,e,n=!1){const s=n?M_:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!Y(t)){const u=d=>{l=!0;const[h,m]=Wh(d,e,!0);qe(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Ie(t)&&s.set(t,_s),_s;if(K(r))for(let u=0;u<r.length;u++){const d=bt(r[u]);Jc(d)&&(o[d]=ve)}else if(r)for(const u in r){const d=bt(u);if(Jc(d)){const h=r[u],m=o[d]=K(h)||Y(h)?{type:h}:qe({},h),w=m.type;let b=!1,M=!0;if(K(w))for(let D=0;D<w.length;++D){const O=w[D],L=Y(O)&&O.name;if(L==="Boolean"){b=!0;break}else L==="String"&&(M=!1)}else b=Y(w)&&w.name==="Boolean";m[0]=b,m[1]=M,(b||ue(m,"default"))&&a.push(d)}}const c=[o,a];return Ie(t)&&s.set(t,c),c}function Jc(t){return t[0]!=="$"&&!di(t)}const jh=t=>t[0]==="_"||t==="$stable",vl=t=>K(t)?t.map(Wt):[Wt(t)],D_=(t,e,n)=>{if(e._n)return e;const s=va((...i)=>vl(e(...i)),n);return s._c=!1,s},qh=(t,e,n)=>{const s=t._ctx;for(const i in t){if(jh(i))continue;const r=t[i];if(Y(r))e[i]=D_(i,r,s);else if(r!=null){const o=vl(r);e[i]=()=>o}}},zh=(t,e)=>{const n=vl(e);t.slots.default=()=>n},Gh=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},L_=(t,e,n)=>{const s=t.slots=Uh();if(t.vnode.shapeFlag&32){const i=e._;i?(Gh(s,e,n),n&&ih(s,"_",i,!0)):qh(e,s)}else e&&zh(t,e)},B_=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=ve;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:Gh(i,e,n):(r=!e.$stable,qh(e,i)),o=e}else e&&(zh(t,e),o={default:1});if(r)for(const a in i)!jh(a)&&o[a]==null&&delete i[a]},ut=J_;function F_(t){return $_(t)}function $_(t,e){const n=ho();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=jt,insertStaticContent:w}=t,b=(f,p,g,v=null,E=null,C=null,P=void 0,k=null,T=!!p.dynamicChildren)=>{if(f===p)return;f&&!ii(f,p)&&(v=y(f),nt(f,E,C,!0),f=null),p.patchFlag===-2&&(T=!1,p.dynamicChildren=null);const{type:I,ref:V,shapeFlag:R}=p;switch(I){case wo:M(f,p,g,v);break;case Qn:D(f,p,g,v);break;case zo:f==null&&O(p,g,v,P);break;case wt:Qt(f,p,g,v,E,C,P,k,T);break;default:R&1?re(f,p,g,v,E,C,P,k,T):R&6?gt(f,p,g,v,E,C,P,k,T):(R&64||R&128)&&I.process(f,p,g,v,E,C,P,k,T,B)}V!=null&&E&&Sr(V,f&&f.ref,C,p||f,!p)},M=(f,p,g,v)=>{if(f==null)s(p.el=a(p.children),g,v);else{const E=p.el=f.el;p.children!==f.children&&c(E,p.children)}},D=(f,p,g,v)=>{f==null?s(p.el=l(p.children||""),g,v):p.el=f.el},O=(f,p,g,v)=>{[f.el,f.anchor]=w(f.children,p,g,v,f.el,f.anchor)},L=({el:f,anchor:p},g,v)=>{let E;for(;f&&f!==p;)E=h(f),s(f,g,v),f=E;s(p,g,v)},N=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},re=(f,p,g,v,E,C,P,k,T)=>{p.type==="svg"?P="svg":p.type==="math"&&(P="mathml"),f==null?Se(p,g,v,E,C,P,k,T):Ze(f,p,E,C,P,k,T)},Se=(f,p,g,v,E,C,P,k)=>{let T,I;const{props:V,shapeFlag:R,transition:U,dirs:G}=f;if(T=f.el=o(f.type,C,V&&V.is,V),R&8?u(T,f.children):R&16&&Xe(f.children,T,null,v,E,qo(f,C),P,k),G&&Bn(f,null,v,"created"),he(T,f,f.scopeId,P,v),V){for(const ge in V)ge!=="value"&&!di(ge)&&r(T,ge,null,V[ge],C,v);"value"in V&&r(T,"value",null,V.value,C),(I=V.onVnodeBeforeMount)&&Ut(I,v,f)}G&&Bn(f,null,v,"beforeMount");const se=U_(E,U);se&&U.beforeEnter(T),s(T,p,g),((I=V&&V.onVnodeMounted)||se||G)&&ut(()=>{I&&Ut(I,v,f),se&&U.enter(T),G&&Bn(f,null,v,"mounted")},E)},he=(f,p,g,v,E)=>{if(g&&m(f,g),v)for(let C=0;C<v.length;C++)m(f,v[C]);if(E){let C=E.subTree;if(p===C||Zh(C.type)&&(C.ssContent===p||C.ssFallback===p)){const P=E.vnode;he(f,P,P.scopeId,P.slotScopeIds,E.parent)}}},Xe=(f,p,g,v,E,C,P,k,T=0)=>{for(let I=T;I<f.length;I++){const V=f[I]=k?_n(f[I]):Wt(f[I]);b(null,V,p,g,v,E,C,P,k)}},Ze=(f,p,g,v,E,C,P)=>{const k=p.el=f.el;let{patchFlag:T,dynamicChildren:I,dirs:V}=p;T|=f.patchFlag&16;const R=f.props||ve,U=p.props||ve;let G;if(g&&Fn(g,!1),(G=U.onVnodeBeforeUpdate)&&Ut(G,g,p,f),V&&Bn(p,f,g,"beforeUpdate"),g&&Fn(g,!0),(R.innerHTML&&U.innerHTML==null||R.textContent&&U.textContent==null)&&u(k,""),I?et(f.dynamicChildren,I,k,g,v,qo(p,E),C):P||Q(f,p,k,null,g,v,qo(p,E),C,!1),T>0){if(T&16)Dt(k,R,U,g,E);else if(T&2&&R.class!==U.class&&r(k,"class",null,U.class,E),T&4&&r(k,"style",R.style,U.style,E),T&8){const se=p.dynamicProps;for(let ge=0;ge<se.length;ge++){const de=se[ge],lt=R[de],st=U[de];(st!==lt||de==="value")&&r(k,de,lt,st,E,g)}}T&1&&f.children!==p.children&&u(k,p.children)}else!P&&I==null&&Dt(k,R,U,g,E);((G=U.onVnodeUpdated)||V)&&ut(()=>{G&&Ut(G,g,p,f),V&&Bn(p,f,g,"updated")},v)},et=(f,p,g,v,E,C,P)=>{for(let k=0;k<p.length;k++){const T=f[k],I=p[k],V=T.el&&(T.type===wt||!ii(T,I)||T.shapeFlag&70)?d(T.el):g;b(T,I,V,null,v,E,C,P,!0)}},Dt=(f,p,g,v,E)=>{if(p!==g){if(p!==ve)for(const C in p)!di(C)&&!(C in g)&&r(f,C,p[C],null,E,v);for(const C in g){if(di(C))continue;const P=g[C],k=p[C];P!==k&&C!=="value"&&r(f,C,k,P,E,v)}"value"in g&&r(f,"value",p.value,g.value,E)}},Qt=(f,p,g,v,E,C,P,k,T)=>{const I=p.el=f?f.el:a(""),V=p.anchor=f?f.anchor:a("");let{patchFlag:R,dynamicChildren:U,slotScopeIds:G}=p;G&&(k=k?k.concat(G):G),f==null?(s(I,g,v),s(V,g,v),Xe(p.children||[],g,V,E,C,P,k,T)):R>0&&R&64&&U&&f.dynamicChildren?(et(f.dynamicChildren,U,g,E,C,P,k),(p.key!=null||E&&p===E.subTree)&&Kh(f,p,!0)):Q(f,p,g,V,E,C,P,k,T)},gt=(f,p,g,v,E,C,P,k,T)=>{p.slotScopeIds=k,f==null?p.shapeFlag&512?E.ctx.activate(p,g,v,P,T):$(p,g,v,E,C,P,T):J(f,p,T)},$=(f,p,g,v,E,C,P)=>{const k=f.component=iw(f,v,E);if(Mh(f)&&(k.ctx.renderer=B),rw(k,!1,P),k.asyncDep){if(E&&E.registerDep(k,q,P),!f.el){const T=k.subTree=Te(Qn);D(null,T,p,g)}}else q(k,f,p,g,E,C,P)},J=(f,p,g)=>{const v=p.component=f.component;if(Y_(f,p,g))if(v.asyncDep&&!v.asyncResolved){z(v,p,g);return}else v.next=p,v.update();else p.el=f.el,v.vnode=p},q=(f,p,g,v,E,C,P)=>{const k=()=>{if(f.isMounted){let{next:R,bu:U,u:G,parent:se,vnode:ge}=f;{const Ft=Yh(f);if(Ft){R&&(R.el=ge.el,z(f,R,P)),Ft.asyncDep.then(()=>{f.isUnmounted||k()});return}}let de=R,lt;Fn(f,!1),R?(R.el=ge.el,z(f,R,P)):R=ge,U&&$o(U),(lt=R.props&&R.props.onVnodeBeforeUpdate)&&Ut(lt,se,R,ge),Fn(f,!0);const st=Zc(f),Bt=f.subTree;f.subTree=st,b(Bt,st,d(Bt.el),y(Bt),f,E,C),R.el=st.el,de===null&&Q_(f,st.el),G&&ut(G,E),(lt=R.props&&R.props.onVnodeUpdated)&&ut(()=>Ut(lt,se,R,ge),E)}else{let R;const{el:U,props:G}=p,{bm:se,m:ge,parent:de,root:lt,type:st}=f,Bt=pi(p);Fn(f,!1),se&&$o(se),!Bt&&(R=G&&G.onVnodeBeforeMount)&&Ut(R,de,p),Fn(f,!0);{lt.ce&&lt.ce._injectChildStyle(st);const Ft=f.subTree=Zc(f);b(null,Ft,g,v,f,E,C),p.el=Ft.el}if(ge&&ut(ge,E),!Bt&&(R=G&&G.onVnodeMounted)){const Ft=p;ut(()=>Ut(R,de,Ft),E)}(p.shapeFlag&256||de&&pi(de.vnode)&&de.vnode.shapeFlag&256)&&f.a&&ut(f.a,E),f.isMounted=!0,p=g=v=null}};f.scope.on();const T=f.effect=new lh(k);f.scope.off();const I=f.update=T.run.bind(T),V=f.job=T.runIfDirty.bind(T);V.i=f,V.id=f.uid,T.scheduler=()=>pl(V),Fn(f,!0),I()},z=(f,p,g)=>{p.component=f;const v=f.vnode.props;f.vnode=p,f.next=null,N_(f,p.props,v,g),B_(f,p.children,g),Nn(),jc(f),Mn()},Q=(f,p,g,v,E,C,P,k,T=!1)=>{const I=f&&f.children,V=f?f.shapeFlag:0,R=p.children,{patchFlag:U,shapeFlag:G}=p;if(U>0){if(U&128){Lt(I,R,g,v,E,C,P,k,T);return}else if(U&256){Et(I,R,g,v,E,C,P,k,T);return}}G&8?(V&16&&_t(I,E,C),R!==I&&u(g,R)):V&16?G&16?Lt(I,R,g,v,E,C,P,k,T):_t(I,E,C,!0):(V&8&&u(g,""),G&16&&Xe(R,g,v,E,C,P,k,T))},Et=(f,p,g,v,E,C,P,k,T)=>{f=f||_s,p=p||_s;const I=f.length,V=p.length,R=Math.min(I,V);let U;for(U=0;U<R;U++){const G=p[U]=T?_n(p[U]):Wt(p[U]);b(f[U],G,g,null,E,C,P,k,T)}I>V?_t(f,E,C,!0,!1,R):Xe(p,g,v,E,C,P,k,T,R)},Lt=(f,p,g,v,E,C,P,k,T)=>{let I=0;const V=p.length;let R=f.length-1,U=V-1;for(;I<=R&&I<=U;){const G=f[I],se=p[I]=T?_n(p[I]):Wt(p[I]);if(ii(G,se))b(G,se,g,null,E,C,P,k,T);else break;I++}for(;I<=R&&I<=U;){const G=f[R],se=p[U]=T?_n(p[U]):Wt(p[U]);if(ii(G,se))b(G,se,g,null,E,C,P,k,T);else break;R--,U--}if(I>R){if(I<=U){const G=U+1,se=G<V?p[G].el:v;for(;I<=U;)b(null,p[I]=T?_n(p[I]):Wt(p[I]),g,se,E,C,P,k,T),I++}}else if(I>U)for(;I<=R;)nt(f[I],E,C,!0),I++;else{const G=I,se=I,ge=new Map;for(I=se;I<=U;I++){const ct=p[I]=T?_n(p[I]):Wt(p[I]);ct.key!=null&&ge.set(ct.key,I)}let de,lt=0;const st=U-se+1;let Bt=!1,Ft=0;const ni=new Array(st);for(I=0;I<st;I++)ni[I]=0;for(I=G;I<=R;I++){const ct=f[I];if(lt>=st){nt(ct,E,C,!0);continue}let $t;if(ct.key!=null)$t=ge.get(ct.key);else for(de=se;de<=U;de++)if(ni[de-se]===0&&ii(ct,p[de])){$t=de;break}$t===void 0?nt(ct,E,C,!0):(ni[$t-se]=I+1,$t>=Ft?Ft=$t:Bt=!0,b(ct,p[$t],g,null,E,C,P,k,T),lt++)}const $c=Bt?H_(ni):_s;for(de=$c.length-1,I=st-1;I>=0;I--){const ct=se+I,$t=p[ct],Uc=ct+1<V?p[ct+1].el:v;ni[I]===0?b(null,$t,g,Uc,E,C,P,k,T):Bt&&(de<0||I!==$c[de]?tt($t,g,Uc,2):de--)}}},tt=(f,p,g,v,E=null)=>{const{el:C,type:P,transition:k,children:T,shapeFlag:I}=f;if(I&6){tt(f.component.subTree,p,g,v);return}if(I&128){f.suspense.move(p,g,v);return}if(I&64){P.move(f,p,g,B);return}if(P===wt){s(C,p,g);for(let R=0;R<T.length;R++)tt(T[R],p,g,v);s(f.anchor,p,g);return}if(P===zo){L(f,p,g);return}if(v!==2&&I&1&&k)if(v===0)k.beforeEnter(C),s(C,p,g),ut(()=>k.enter(C),E);else{const{leave:R,delayLeave:U,afterLeave:G}=k,se=()=>s(C,p,g),ge=()=>{R(C,()=>{se(),G&&G()})};U?U(C,se,ge):ge()}else s(C,p,g)},nt=(f,p,g,v=!1,E=!1)=>{const{type:C,props:P,ref:k,children:T,dynamicChildren:I,shapeFlag:V,patchFlag:R,dirs:U,cacheIndex:G}=f;if(R===-2&&(E=!1),k!=null&&Sr(k,null,g,f,!0),G!=null&&(p.renderCache[G]=void 0),V&256){p.ctx.deactivate(f);return}const se=V&1&&U,ge=!pi(f);let de;if(ge&&(de=P&&P.onVnodeBeforeUnmount)&&Ut(de,p,f),V&6)rr(f.component,g,v);else{if(V&128){f.suspense.unmount(g,v);return}se&&Bn(f,null,p,"beforeUnmount"),V&64?f.type.remove(f,p,g,B,v):I&&!I.hasOnce&&(C!==wt||R>0&&R&64)?_t(I,p,g,!1,!0):(C===wt&&R&384||!E&&V&16)&&_t(T,p,g),v&&us(f)}(ge&&(de=P&&P.onVnodeUnmounted)||se)&&ut(()=>{de&&Ut(de,p,f),se&&Bn(f,null,p,"unmounted")},g)},us=f=>{const{type:p,el:g,anchor:v,transition:E}=f;if(p===wt){ds(g,v);return}if(p===zo){N(f);return}const C=()=>{i(g),E&&!E.persisted&&E.afterLeave&&E.afterLeave()};if(f.shapeFlag&1&&E&&!E.persisted){const{leave:P,delayLeave:k}=E,T=()=>P(g,C);k?k(f.el,C,T):T()}else C()},ds=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},rr=(f,p,g)=>{const{bum:v,scope:E,job:C,subTree:P,um:k,m:T,a:I}=f;Xc(T),Xc(I),v&&$o(v),E.stop(),C&&(C.flags|=8,nt(P,f,p,g)),k&&ut(k,p),ut(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},_t=(f,p,g,v=!1,E=!1,C=0)=>{for(let P=C;P<f.length;P++)nt(f[P],p,g,v,E)},y=f=>{if(f.shapeFlag&6)return y(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=h(f.anchor||f.el),g=p&&p[l_];return g?h(g):p};let x=!1;const A=(f,p,g)=>{f==null?p._vnode&&nt(p._vnode,null,null,!0):b(p._vnode||null,f,p,null,null,null,g),p._vnode=f,x||(x=!0,jc(),Ah(),x=!1)},B={p:b,um:nt,m:tt,r:us,mt:$,mc:Xe,pc:Q,pbc:et,n:y,o:t};return{render:A,hydrate:void 0,createApp:x_(A)}}function qo({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function Fn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function U_(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function Kh(t,e,n=!1){const s=t.children,i=e.children;if(K(s)&&K(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=_n(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&Kh(o,a)),a.type===wo&&(a.el=o.el)}}function H_(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function Yh(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:Yh(e)}function Xc(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const V_=Symbol.for("v-scx"),W_=()=>on(V_);function Es(t,e,n){return Qh(t,e,n)}function Qh(t,e,n=ve){const{immediate:s,deep:i,flush:r,once:o}=n,a=qe({},n),l=e&&s||!e&&r!=="post";let c;if(Ri){if(r==="sync"){const m=W_();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=jt,m.resume=jt,m.pause=jt,m}}const u=We;a.call=(m,w,b)=>zt(m,u,w,b);let d=!1;r==="post"?a.scheduler=m=>{ut(m,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(m,w)=>{w?m():pl(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=i_(t,e,a);return Ri&&(c?c.push(h):l&&h()),h}function j_(t,e,n){const s=this.proxy,i=Oe(t)?t.includes(".")?Jh(s,t):()=>s[t]:t.bind(s,s);let r;Y(e)?r=e:(r=e.handler,n=e);const o=ji(this),a=Qh(i,r.bind(s),n);return o(),a}function Jh(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const q_=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${bt(e)}Modifiers`]||t[`${rs(e)}Modifiers`];function z_(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||ve;let i=n;const r=e.startsWith("update:"),o=r&&q_(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>Oe(u)?u.trim():u)),o.number&&(i=n.map(Ig)));let a,l=s[a=Fo(e)]||s[a=Fo(bt(e))];!l&&r&&(l=s[a=Fo(rs(e))]),l&&zt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,zt(c,t,6,i)}}function Xh(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!Y(t)){const l=c=>{const u=Xh(c,e,!0);u&&(a=!0,qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Ie(t)&&s.set(t,null),null):(K(r)?r.forEach(l=>o[l]=null):qe(o,r),Ie(t)&&s.set(t,o),o)}function _o(t,e){return!t||!ao(e)?!1:(e=e.slice(2).replace(/Once$/,""),ue(t,e[0].toLowerCase()+e.slice(1))||ue(t,rs(e))||ue(t,e))}function Zc(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:m,ctx:w,inheritAttrs:b}=t,M=Ir(t);let D,O;try{if(n.shapeFlag&4){const N=i||s,re=N;D=Wt(c.call(re,N,u,d,m,h,w)),O=a}else{const N=e;D=Wt(N.length>1?N(d,{attrs:a,slots:o,emit:l}):N(d,null)),O=e.props?a:G_(a)}}catch(N){gi.length=0,mo(N,t,1),D=Te(Qn)}let L=D;if(O&&b!==!1){const N=Object.keys(O),{shapeFlag:re}=L;N.length&&re&7&&(r&&N.some(sl)&&(O=K_(O,r)),L=Os(L,O,!1,!0))}return n.dirs&&(L=Os(L,null,!1,!0),L.dirs=L.dirs?L.dirs.concat(n.dirs):n.dirs),n.transition&&ml(L,n.transition),D=L,Ir(M),D}const G_=t=>{let e;for(const n in t)(n==="class"||n==="style"||ao(n))&&((e||(e={}))[n]=t[n]);return e},K_=(t,e)=>{const n={};for(const s in t)(!sl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function Y_(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?eu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!_o(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?eu(s,o,c):!0:!!o;return!1}function eu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!_o(n,r))return!0}return!1}function Q_({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const Zh=t=>t.__isSuspense;function J_(t,e){e&&e.pendingBranch?K(t)?e.effects.push(...t):e.effects.push(t):a_(t)}const wt=Symbol.for("v-fgt"),wo=Symbol.for("v-txt"),Qn=Symbol.for("v-cmt"),zo=Symbol.for("v-stc"),gi=[];let ht=null;function Z(t=!1){gi.push(ht=t?null:[])}function X_(){gi.pop(),ht=gi[gi.length-1]||null}let Pi=1;function tu(t,e=!1){Pi+=t,t<0&&ht&&e&&(ht.hasOnce=!0)}function ef(t){return t.dynamicChildren=Pi>0?ht||_s:null,X_(),Pi>0&&ht&&ht.push(t),t}function ne(t,e,n,s,i,r){return ef(F(t,e,n,s,i,r,!0))}function tf(t,e,n,s,i){return ef(Te(t,e,n,s,i,!0))}function kr(t){return t?t.__v_isVNode===!0:!1}function ii(t,e){return t.type===e.type&&t.key===e.key}const nf=({key:t})=>t??null,pr=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Oe(t)||je(t)||Y(t)?{i:kt,r:t,k:e,f:!!n}:t:null);function F(t,e=null,n=null,s=0,i=null,r=t===wt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&nf(e),ref:e&&pr(e),scopeId:xh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:kt};return a?(yl(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Oe(n)?8:16),Pi>0&&!o&&ht&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&ht.push(l),l}const Te=Z_;function Z_(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===C_)&&(t=Qn),kr(t)){const a=Os(t,e,!0);return n&&yl(a,n),Pi>0&&!r&&ht&&(a.shapeFlag&6?ht[ht.indexOf(t)]=a:ht.push(a)),a.patchFlag=-2,a}if(uw(t)&&(t=t.__vccOpts),e){e=ew(e);let{class:a,style:l}=e;a&&!Oe(a)&&(e.class=fo(a)),Ie(l)&&(fl(l)&&!K(l)&&(l=qe({},l)),e.style=ol(l))}const o=Oe(t)?1:Zh(t)?128:c_(t)?64:Ie(t)?4:Y(t)?2:0;return F(t,e,n,s,i,o,r,!0)}function ew(t){return t?fl(t)||Hh(t)?qe({},t):t:null}function Os(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?tw(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&nf(c),ref:e&&e.ref?n&&r?K(r)?r.concat(pr(e)):[r,pr(e)]:pr(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==wt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Os(t.ssContent),ssFallback:t.ssFallback&&Os(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&ml(u,l.clone(u)),u}function Ai(t=" ",e=0){return Te(wo,null,t,e)}function Ve(t="",e=!1){return e?(Z(),tf(Qn,null,t)):Te(Qn,null,t)}function Wt(t){return t==null||typeof t=="boolean"?Te(Qn):K(t)?Te(wt,null,t.slice()):kr(t)?_n(t):Te(wo,null,String(t))}function _n(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Os(t)}function yl(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(K(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),yl(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!Hh(e)?e._ctx=kt:i===3&&kt&&(kt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else Y(e)?(e={default:e,_ctx:kt},n=32):(e=String(e),s&64?(n=16,e=[Ai(e)]):n=8);t.children=e,t.shapeFlag|=n}function tw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=fo([e.class,s.class]));else if(i==="style")e.style=ol([e.style,s.style]);else if(ao(i)){const r=e[i],o=s[i];o&&r!==o&&!(K(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function Ut(t,e,n,s=null){zt(t,e,7,[n,s])}const nw=Fh();let sw=0;function iw(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||nw,r={uid:sw++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new xg(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Wh(s,i),emitsOptions:Xh(s,i),emit:null,emitted:null,propsDefaults:ve,inheritAttrs:s.inheritAttrs,ctx:ve,data:ve,props:ve,attrs:ve,slots:ve,refs:ve,setupState:ve,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=z_.bind(null,r),t.ce&&t.ce(r),r}let We=null,Pr,Ia;{const t=ho(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Pr=e("__VUE_INSTANCE_SETTERS__",n=>We=n),Ia=e("__VUE_SSR_SETTERS__",n=>Ri=n)}const ji=t=>{const e=We;return Pr(t),t.scope.on(),()=>{t.scope.off(),Pr(e)}},nu=()=>{We&&We.scope.off(),Pr(null)};function sf(t){return t.vnode.shapeFlag&4}let Ri=!1;function rw(t,e=!1,n=!1){e&&Ia(e);const{props:s,children:i}=t.vnode,r=sf(t);O_(t,s,r,e),L_(t,i,n);const o=r?ow(t,e):void 0;return e&&Ia(!1),o}function ow(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,I_);const{setup:s}=n;if(s){Nn();const i=t.setupContext=s.length>1?lw(t):null,r=ji(t),o=Wi(s,t,0,[t.props,i]),a=th(o);if(Mn(),r(),(a||t.sp)&&!pi(t)&&Nh(t),a){if(o.then(nu,nu),e)return o.then(l=>{su(t,l)}).catch(l=>{mo(l,t,0)});t.asyncDep=o}else su(t,o)}else rf(t)}function su(t,e,n){Y(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Ie(e)&&(t.setupState=Sh(e)),rf(t)}function rf(t,e,n){const s=t.type;t.render||(t.render=s.render||jt);{const i=ji(t);Nn();try{S_(t)}finally{Mn(),i()}}}const aw={get(t,e){return Ue(t,"get",""),t[e]}};function lw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,aw),slots:t.slots,emit:t.emit,expose:e}}function bl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Sh(Jg(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in mi)return mi[n](t)},has(e,n){return n in e||n in mi}})):t.proxy}function cw(t,e=!0){return Y(t)?t.displayName||t.name:t.name||e&&t.__name}function uw(t){return Y(t)&&"__vccOpts"in t}const It=(t,e)=>n_(t,e,Ri);function of(t,e,n){const s=arguments.length;return s===2?Ie(e)&&!K(e)?kr(e)?Te(t,null,[e]):Te(t,e):Te(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&kr(n)&&(n=[n]),Te(t,e,n))}const dw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Sa;const iu=typeof window<"u"&&window.trustedTypes;if(iu)try{Sa=iu.createPolicy("vue",{createHTML:t=>t})}catch{}const af=Sa?t=>Sa.createHTML(t):t=>t,hw="http://www.w3.org/2000/svg",fw="http://www.w3.org/1998/Math/MathML",Zt=typeof document<"u"?document:null,ru=Zt&&Zt.createElement("template"),pw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?Zt.createElementNS(hw,t):e==="mathml"?Zt.createElementNS(fw,t):n?Zt.createElement(t,{is:n}):Zt.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>Zt.createTextNode(t),createComment:t=>Zt.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>Zt.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{ru.innerHTML=af(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=ru.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},mw=Symbol("_vtc");function gw(t,e,n){const s=t[mw];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const ou=Symbol("_vod"),_w=Symbol("_vsh"),ww=Symbol(""),vw=/(^|;)\s*display\s*:/;function yw(t,e,n){const s=t.style,i=Oe(n);let r=!1;if(n&&!i){if(e)if(Oe(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&mr(s,a,"")}else for(const o in e)n[o]==null&&mr(s,o,"");for(const o in n)o==="display"&&(r=!0),mr(s,o,n[o])}else if(i){if(e!==n){const o=s[ww];o&&(n+=";"+o),s.cssText=n,r=vw.test(n)}}else e&&t.removeAttribute("style");ou in t&&(t[ou]=r?s.display:"",t[_w]&&(s.display="none"))}const au=/\s*!important$/;function mr(t,e,n){if(K(n))n.forEach(s=>mr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=bw(t,e);au.test(n)?t.setProperty(rs(s),n.replace(au,""),"important"):t[s]=n}}const lu=["Webkit","Moz","ms"],Go={};function bw(t,e){const n=Go[e];if(n)return n;let s=bt(e);if(s!=="filter"&&s in t)return Go[e]=s;s=uo(s);for(let i=0;i<lu.length;i++){const r=lu[i]+s;if(r in t)return Go[e]=r}return e}const cu="http://www.w3.org/1999/xlink";function uu(t,e,n,s,i,r=Rg(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(cu,e.slice(6,e.length)):t.setAttributeNS(cu,e,n):n==null||r&&!rh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":On(n)?String(n):n)}function du(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?af(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=rh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Cw(t,e,n,s){t.addEventListener(e,n,s)}function Ew(t,e,n,s){t.removeEventListener(e,n,s)}const hu=Symbol("_vei");function Iw(t,e,n,s,i=null){const r=t[hu]||(t[hu]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Sw(e);if(s){const c=r[e]=Pw(s,i);Cw(t,a,c,l)}else o&&(Ew(t,a,o,l),r[e]=void 0)}}const fu=/(?:Once|Passive|Capture)$/;function Sw(t){let e;if(fu.test(t)){e={};let s;for(;s=t.match(fu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):rs(t.slice(2)),e]}let Ko=0;const Tw=Promise.resolve(),kw=()=>Ko||(Tw.then(()=>Ko=0),Ko=Date.now());function Pw(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;zt(Aw(s,n.value),e,5,[s])};return n.value=t,n.attached=kw(),n}function Aw(t,e){if(K(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const pu=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,Rw=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?gw(t,s,o):e==="style"?yw(t,n,s):ao(e)?sl(e)||Iw(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):xw(t,e,s,o))?(du(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&uu(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Oe(s))?du(t,bt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),uu(t,e,s,o))};function xw(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&pu(e)&&Y(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return pu(e)&&Oe(n)?!1:e in t}const Ow=qe({patchProp:Rw},pw);let mu;function Nw(){return mu||(mu=F_(Ow))}const Mw=(...t)=>{const e=Nw().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=Lw(s);if(!i)return;const r=e._component;!Y(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,Dw(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function Dw(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function Lw(t){return Oe(t)?document.querySelector(t):t}const Bw=()=>{};var gu={};/**
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
 */const lf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const S=function(t,e){if(!t)throw qs(e)},qs=function(t){return new Error("Firebase Database ("+lf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const cf=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Fw=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Cl={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(cf(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Fw(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new $w;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const w=c<<6&192|d;s.push(w)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class $w extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const uf=function(t){const e=cf(t);return Cl.encodeByteArray(e,!0)},Ar=function(t){return uf(t).replace(/\./g,"")},Rr=function(t){try{return Cl.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function Uw(t){return df(void 0,t)}function df(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!Hw(n)||(t[n]=df(t[n],e[n]));return t}function Hw(t){return t!=="__proto__"}/**
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
 */function Vw(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Ww=()=>Vw().__FIREBASE_DEFAULTS__,jw=()=>{if(typeof process>"u"||typeof gu>"u")return;const t=gu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qw=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Rr(t[1]);return e&&JSON.parse(e)},El=()=>{try{return Bw()||Ww()||jw()||qw()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},hf=t=>{var e,n;return(n=(e=El())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},zw=t=>{const e=hf(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},ff=()=>{var t;return(t=El())===null||t===void 0?void 0:t.config},pf=t=>{var e;return(e=El())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class vo{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Gw(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Ar(JSON.stringify(n)),Ar(JSON.stringify(o)),""].join(".")}/**
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
 */function Ye(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Il(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Ye())}function Kw(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Yw(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function mf(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Qw(){const t=Ye();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Jw(){return lf.NODE_ADMIN===!0}function Xw(){try{return typeof indexedDB=="object"}catch{return!1}}function Zw(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const ev="FirebaseError";class Dn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=ev,Object.setPrototypeOf(this,Dn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,qi.prototype.create)}}class qi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?tv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Dn(i,a,s)}}function tv(t,e){return t.replace(nv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const nv=/\{\$([^}]+)}/g;/**
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
 */function xi(t){return JSON.parse(t)}function De(t){return JSON.stringify(t)}/**
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
 */const gf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=xi(Rr(r[0])||""),n=xi(Rr(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},sv=function(t){const e=gf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},iv=function(t){const e=gf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function Yt(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function Ns(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ta(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function xr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function Jn(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(_u(r)&&_u(o)){if(!Jn(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function _u(t){return t!==null&&typeof t=="object"}/**
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
 */function zs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class rv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function ov(t,e){const n=new av(t,e);return n.subscribe.bind(n)}class av{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");lv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=Yo),i.error===void 0&&(i.error=Yo),i.complete===void 0&&(i.complete=Yo);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function lv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Yo(){}function Sl(t,e){return`${t} failed: ${e} argument `}/**
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
 */const cv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,S(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},yo=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function Mt(t){return t&&t._delegate?t._delegate:t}class Xn{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Hn="[DEFAULT]";/**
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
 */class uv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new vo;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(hv(e))try{this.getOrInitializeService({instanceIdentifier:Hn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Hn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Hn){return this.instances.has(e)}getOptions(e=Hn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:dv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Hn){return this.component?this.component.multipleInstances?e:Hn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function dv(t){return t===Hn?void 0:t}function hv(t){return t.instantiationMode==="EAGER"}/**
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
 */class fv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new uv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var fe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(fe||(fe={}));const pv={debug:fe.DEBUG,verbose:fe.VERBOSE,info:fe.INFO,warn:fe.WARN,error:fe.ERROR,silent:fe.SILENT},mv=fe.INFO,gv={[fe.DEBUG]:"log",[fe.VERBOSE]:"log",[fe.INFO]:"info",[fe.WARN]:"warn",[fe.ERROR]:"error"},_v=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=gv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Tl{constructor(e){this.name=e,this._logLevel=mv,this._logHandler=_v,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in fe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?pv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,fe.DEBUG,...e),this._logHandler(this,fe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,fe.VERBOSE,...e),this._logHandler(this,fe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,fe.INFO,...e),this._logHandler(this,fe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,fe.WARN,...e),this._logHandler(this,fe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,fe.ERROR,...e),this._logHandler(this,fe.ERROR,...e)}}const wv=(t,e)=>e.some(n=>t instanceof n);let wu,vu;function vv(){return wu||(wu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function yv(){return vu||(vu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const _f=new WeakMap,ka=new WeakMap,wf=new WeakMap,Qo=new WeakMap,kl=new WeakMap;function bv(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Tn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&_f.set(n,t)}).catch(()=>{}),kl.set(e,t),e}function Cv(t){if(ka.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});ka.set(t,e)}let Pa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return ka.get(t);if(e==="objectStoreNames")return t.objectStoreNames||wf.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Tn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function Ev(t){Pa=t(Pa)}function Iv(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(Jo(this),e,...n);return wf.set(s,e.sort?e.sort():[e]),Tn(s)}:yv().includes(t)?function(...e){return t.apply(Jo(this),e),Tn(_f.get(this))}:function(...e){return Tn(t.apply(Jo(this),e))}}function Sv(t){return typeof t=="function"?Iv(t):(t instanceof IDBTransaction&&Cv(t),wv(t,vv())?new Proxy(t,Pa):t)}function Tn(t){if(t instanceof IDBRequest)return bv(t);if(Qo.has(t))return Qo.get(t);const e=Sv(t);return e!==t&&(Qo.set(t,e),kl.set(e,t)),e}const Jo=t=>kl.get(t);function Tv(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Tn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Tn(o.result),l.oldVersion,l.newVersion,Tn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const kv=["get","getKey","getAll","getAllKeys","count"],Pv=["put","add","delete","clear"],Xo=new Map;function yu(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(Xo.get(e))return Xo.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=Pv.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||kv.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return Xo.set(e,r),r}Ev(t=>({...t,get:(e,n,s)=>yu(e,n)||t.get(e,n,s),has:(e,n)=>!!yu(e,n)||t.has(e,n)}));/**
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
 */class Av{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(Rv(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function Rv(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Aa="@firebase/app",bu="0.11.4";/**
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
 */const cn=new Tl("@firebase/app"),xv="@firebase/app-compat",Ov="@firebase/analytics-compat",Nv="@firebase/analytics",Mv="@firebase/app-check-compat",Dv="@firebase/app-check",Lv="@firebase/auth",Bv="@firebase/auth-compat",Fv="@firebase/database",$v="@firebase/data-connect",Uv="@firebase/database-compat",Hv="@firebase/functions",Vv="@firebase/functions-compat",Wv="@firebase/installations",jv="@firebase/installations-compat",qv="@firebase/messaging",zv="@firebase/messaging-compat",Gv="@firebase/performance",Kv="@firebase/performance-compat",Yv="@firebase/remote-config",Qv="@firebase/remote-config-compat",Jv="@firebase/storage",Xv="@firebase/storage-compat",Zv="@firebase/firestore",ey="@firebase/vertexai",ty="@firebase/firestore-compat",ny="firebase",sy="11.6.0";/**
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
 */const Ra="[DEFAULT]",iy={[Aa]:"fire-core",[xv]:"fire-core-compat",[Nv]:"fire-analytics",[Ov]:"fire-analytics-compat",[Dv]:"fire-app-check",[Mv]:"fire-app-check-compat",[Lv]:"fire-auth",[Bv]:"fire-auth-compat",[Fv]:"fire-rtdb",[$v]:"fire-data-connect",[Uv]:"fire-rtdb-compat",[Hv]:"fire-fn",[Vv]:"fire-fn-compat",[Wv]:"fire-iid",[jv]:"fire-iid-compat",[qv]:"fire-fcm",[zv]:"fire-fcm-compat",[Gv]:"fire-perf",[Kv]:"fire-perf-compat",[Yv]:"fire-rc",[Qv]:"fire-rc-compat",[Jv]:"fire-gcs",[Xv]:"fire-gcs-compat",[Zv]:"fire-fst",[ty]:"fire-fst-compat",[ey]:"fire-vertex","fire-js":"fire-js",[ny]:"fire-js-all"};/**
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
 */const Or=new Map,ry=new Map,xa=new Map;function Cu(t,e){try{t.container.addComponent(e)}catch(n){cn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Ms(t){const e=t.name;if(xa.has(e))return cn.debug(`There were multiple attempts to register component ${e}.`),!1;xa.set(e,t);for(const n of Or.values())Cu(n,t);for(const n of ry.values())Cu(n,t);return!0}function Pl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function St(t){return t==null?!1:t.settings!==void 0}/**
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
 */const oy={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},kn=new qi("app","Firebase",oy);/**
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
 */class ay{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new Xn("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw kn.create("app-deleted",{appName:this._name})}}/**
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
 */const Gs=sy;function vf(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:Ra,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw kn.create("bad-app-name",{appName:String(i)});if(n||(n=ff()),!n)throw kn.create("no-options");const r=Or.get(i);if(r){if(Jn(n,r.options)&&Jn(s,r.config))return r;throw kn.create("duplicate-app",{appName:i})}const o=new fv(i);for(const l of xa.values())o.addComponent(l);const a=new ay(n,s,o);return Or.set(i,a),a}function yf(t=Ra){const e=Or.get(t);if(!e&&t===Ra&&ff())return vf();if(!e)throw kn.create("no-app",{appName:t});return e}function Pn(t,e,n){var s;let i=(s=iy[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),cn.warn(a.join(" "));return}Ms(new Xn(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const ly="firebase-heartbeat-database",cy=1,Oi="firebase-heartbeat-store";let Zo=null;function bf(){return Zo||(Zo=Tv(ly,cy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Oi)}catch(n){console.warn(n)}}}}).catch(t=>{throw kn.create("idb-open",{originalErrorMessage:t.message})})),Zo}async function uy(t){try{const n=(await bf()).transaction(Oi),s=await n.objectStore(Oi).get(Cf(t));return await n.done,s}catch(e){if(e instanceof Dn)cn.warn(e.message);else{const n=kn.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});cn.warn(n.message)}}}async function Eu(t,e){try{const s=(await bf()).transaction(Oi,"readwrite");await s.objectStore(Oi).put(e,Cf(t)),await s.done}catch(n){if(n instanceof Dn)cn.warn(n.message);else{const s=kn.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});cn.warn(s.message)}}}function Cf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const dy=1024,hy=30;class fy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new my(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Iu();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>hy){const o=gy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){cn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=Iu(),{heartbeatsToSend:s,unsentEntries:i}=py(this._heartbeatsCache.heartbeats),r=Ar(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return cn.warn(n),""}}}function Iu(){return new Date().toISOString().substring(0,10)}function py(t,e=dy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Su(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Su(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class my{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Xw()?Zw().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await uy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Eu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Su(t){return Ar(JSON.stringify({version:2,heartbeats:t})).length}function gy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function _y(t){Ms(new Xn("platform-logger",e=>new Av(e),"PRIVATE")),Ms(new Xn("heartbeat",e=>new fy(e),"PRIVATE")),Pn(Aa,bu,t),Pn(Aa,bu,"esm2017"),Pn("fire-js","")}_y("");var wy="firebase",vy="11.6.0";/**
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
 */Pn(wy,vy,"app");var Tu={};const ku="@firebase/database",Pu="1.0.14";/**
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
 */let Ef="";function yy(t){Ef=t}/**
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
 */class by{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),De(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:xi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class Cy{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return Yt(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const If=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new by(e)}}catch{}return new Cy},Wn=If("localStorage"),Ey=If("sessionStorage");/**
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
 */const Is=new Tl("@firebase/database"),Iy=function(){let t=1;return function(){return t++}}(),Sf=function(t){const e=cv(t),n=new rv;n.update(e);const s=n.digest();return Cl.encodeByteArray(s)},zi=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=zi.apply(null,s):typeof s=="object"?e+=De(s):e+=s,e+=" "}return e};let _i=null,Au=!0;const Sy=function(t,e){S(!0,"Can't turn on custom loggers persistently."),Is.logLevel=fe.VERBOSE,_i=Is.log.bind(Is)},Be=function(...t){if(Au===!0&&(Au=!1,_i===null&&Ey.get("logging_enabled")===!0&&Sy()),_i){const e=zi.apply(null,t);_i(e)}},Gi=function(t){return function(...e){Be(t,...e)}},Oa=function(...t){const e="FIREBASE INTERNAL ERROR: "+zi(...t);Is.error(e)},un=function(...t){const e=`FIREBASE FATAL ERROR: ${zi(...t)}`;throw Is.error(e),new Error(e)},ot=function(...t){const e="FIREBASE WARNING: "+zi(...t);Is.warn(e)},Ty=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&ot("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Al=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ky=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Ds="[MIN_NAME]",Zn="[MAX_NAME]",os=function(t,e){if(t===e)return 0;if(t===Ds||e===Zn)return-1;if(e===Ds||t===Zn)return 1;{const n=Ru(t),s=Ru(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},Py=function(t,e){return t===e?0:t<e?-1:1},ri=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+De(e))},Rl=function(t){if(typeof t!="object"||t===null)return De(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=De(e[s]),n+=":",n+=Rl(t[e[s]]);return n+="}",n},Tf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function $e(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const kf=function(t){S(!Al(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},Ay=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},Ry=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function xy(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const Oy=new RegExp("^-?(0*)\\d{1,10}$"),Ny=-2147483648,My=2147483647,Ru=function(t){if(Oy.test(t)){const e=Number(t);if(e>=Ny&&e<=My)return e}return null},Ks=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw ot("Exception was thrown by user callback.",n),e},Math.floor(0))}},Dy=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},wi=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class Ly{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,St(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){ot(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class By{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(Be("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',ot(e)}}class gr{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}gr.OWNER="owner";/**
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
 */const xl="5",Pf="v",Af="s",Rf="r",xf="f",Of=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Nf="ls",Mf="p",Na="ac",Df="websocket",Lf="long_polling";/**
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
 */class Bf{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Wn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Wn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function Fy(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function Ff(t,e,n){S(typeof e=="string","typeof type must == string"),S(typeof n=="object","typeof params must == object");let s;if(e===Df)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===Lf)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Fy(t)&&(n.ns=t.namespace);const i=[];return $e(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class $y{constructor(){this.counters_={}}incrementCounter(e,n=1){Yt(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return Uw(this.counters_)}}/**
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
 */const ea={},ta={};function Ol(t){const e=t.toString();return ea[e]||(ea[e]=new $y),ea[e]}function Uy(t,e){const n=t.toString();return ta[n]||(ta[n]=e()),ta[n]}/**
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
 */class Hy{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&Ks(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const xu="start",Vy="close",Wy="pLPCommand",jy="pRTLPCB",$f="id",Uf="pw",Hf="ser",qy="cb",zy="seg",Gy="ts",Ky="d",Yy="dframe",Vf=1870,Wf=30,Qy=Vf-Wf,Jy=25e3,Xy=3e4;class gs{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=Gi(e),this.stats_=Ol(n),this.urlFn=l=>(this.appCheckToken&&(l[Na]=this.appCheckToken),Ff(n,Lf,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new Hy(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(Xy)),ky(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Nl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===xu)this.id=a,this.password=l;else if(o===Vy)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[xu]="t",s[Hf]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[qy]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Pf]=xl,this.transportSessionId&&(s[Af]=this.transportSessionId),this.lastSessionId&&(s[Nf]=this.lastSessionId),this.applicationId&&(s[Mf]=this.applicationId),this.appCheckToken&&(s[Na]=this.appCheckToken),typeof location<"u"&&location.hostname&&Of.test(location.hostname)&&(s[Rf]=xf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){gs.forceAllow_=!0}static forceDisallow(){gs.forceDisallow_=!0}static isAvailable(){return gs.forceAllow_?!0:!gs.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ay()&&!Ry()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=uf(n),i=Tf(s,Qy);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Yy]="t",s[$f]=e,s[Uf]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=De(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class Nl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Iy(),window[Wy+this.uniqueCallbackIdentifier]=e,window[jy+this.uniqueCallbackIdentifier]=n,this.myIFrame=Nl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){Be("frame writing exception"),a.stack&&Be(a.stack),Be(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||Be("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[$f]=this.myID,e[Uf]=this.myPW,e[Hf]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+Wf+s.length<=Vf;){const o=this.pendingSegs.shift();s=s+"&"+zy+i+"="+o.seg+"&"+Gy+i+"="+o.ts+"&"+Ky+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Jy)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{Be("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Zy=16384,eb=45e3;let Nr=null;typeof MozWebSocket<"u"?Nr=MozWebSocket:typeof WebSocket<"u"&&(Nr=WebSocket);class Tt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=Gi(this.connId),this.stats_=Ol(n),this.connURL=Tt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Pf]=xl,typeof location<"u"&&location.hostname&&Of.test(location.hostname)&&(o[Rf]=xf),n&&(o[Af]=n),s&&(o[Nf]=s),i&&(o[Na]=i),r&&(o[Mf]=r),Ff(e,Df,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Wn.set("previous_websocket_failure",!0);try{let s;Jw(),this.mySock=new Nr(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){Tt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Nr!==null&&!Tt.forceDisallow_}static previouslyFailed(){return Wn.isInMemoryStorage||Wn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Wn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=xi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(S(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=De(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Tf(n,Zy);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(eb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}Tt.responsesRequiredToBeHealthy=2;Tt.healthyTimeout=3e4;/**
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
 */class Ni{static get ALL_TRANSPORTS(){return[gs,Tt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=Tt&&Tt.isAvailable();let s=n&&!Tt.previouslyFailed();if(e.webSocketOnly&&(n||ot("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[Tt];else{const i=this.transports_=[];for(const r of Ni.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);Ni.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}Ni.globalTransportInitialized_=!1;/**
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
 */const tb=6e4,nb=5e3,sb=10*1024,ib=100*1024,na="t",Ou="d",rb="s",Nu="r",ob="e",Mu="o",Du="a",Lu="n",Bu="p",ab="h";class lb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=Gi("c:"+this.id+":"),this.transportManager_=new Ni(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=wi(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>ib?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>sb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(na in e){const n=e[na];n===Du?this.upgradeIfSecondaryHealthy_():n===Nu?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Mu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=ri("t",e),s=ri("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Bu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Du,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Lu,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=ri("t",e),s=ri("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=ri(na,e);if(Ou in e){const s=e[Ou];if(n===ab){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Lu){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===rb?this.onConnectionShutdown_(s):n===Nu?this.onReset_(s):n===ob?Oa("Server Error: "+s):n===Mu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Oa("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),xl!==s&&ot("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),wi(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(tb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):wi(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(nb))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Bu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Wn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class jf{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */let qf=class{constructor(e){this.allowedEvents_=e,this.listeners_={},S(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){S(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}};/**
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
 */class Mr extends qf{static getInstance(){return new Mr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Il()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return S(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Fu=32,$u=768;class pe{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function ae(){return new pe("")}function ee(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Rn(t){return t.pieces_.length-t.pieceNum_}function ye(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new pe(t.pieces_,e)}function Ml(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function cb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Mi(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function zf(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new pe(e,0)}function ke(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof pe)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new pe(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function it(t,e){const n=ee(t),s=ee(e);if(n===null)return e;if(n===s)return it(ye(t),ye(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function ub(t,e){const n=Mi(t,0),s=Mi(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=os(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Dl(t,e){if(Rn(t)!==Rn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function vt(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Rn(t)>Rn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class db{constructor(e,n){this.errorPrefix_=n,this.parts_=Mi(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=yo(this.parts_[s]);Gf(this)}}function hb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=yo(e),Gf(t)}function fb(t){const e=t.parts_.pop();t.byteLength_-=yo(e),t.parts_.length>0&&(t.byteLength_-=1)}function Gf(t){if(t.byteLength_>$u)throw new Error(t.errorPrefix_+"has a key path longer than "+$u+" bytes ("+t.byteLength_+").");if(t.parts_.length>Fu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Fu+") or object contains a cycle "+Vn(t))}function Vn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Ll extends qf{static getInstance(){return new Ll}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return S(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const oi=1e3,pb=60*5*1e3,Uu=30*1e3,mb=1.3,gb=3e4,_b="server_kill",Hu=3;class an extends jf{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=an.nextPersistentConnectionId_++,this.log_=Gi("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=oi,this.maxReconnectDelay_=pb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Ll.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Mr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(De(r)),S(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new vo,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),S(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;an.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&Yt(e,"w")){const s=Ns(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();ot(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||iv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=Uu)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=sv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),S(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+De(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Oa("Unrecognized action received from server: "+De(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){S(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>gb&&(this.reconnectDelay_=oi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*mb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+an.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){S(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?Be("getToken() completed but was canceled"):(Be("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new lb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{ot(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(_b)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&ot(d),l())}}}interrupt(e){Be("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){Be("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ta(this.interruptReasons_)&&(this.reconnectDelay_=oi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Rl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new pe(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){Be("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=Hu&&(this.reconnectDelay_=Uu,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){Be("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=Hu&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Ef.replace(/\./g,"-")]=1,Il()?e["framework.cordova"]=1:mf()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Mr.getInstance().currentlyOnline();return Ta(this.interruptReasons_)&&e}}an.nextPersistentConnectionId_=0;an.nextConnectionId_=0;/**
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
 */class X{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new X(e,n)}}/**
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
 */class bo{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new X(Ds,e),i=new X(Ds,n);return this.compare(s,i)!==0}minPost(){return X.MIN}}/**
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
 */let cr;class Kf extends bo{static get __EMPTY_NODE(){return cr}static set __EMPTY_NODE(e){cr=e}compare(e,n){return os(e.name,n.name)}isDefinedOn(e){throw qs("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return X.MIN}maxPost(){return new X(Zn,cr)}makePost(e,n){return S(typeof e=="string","KeyIndex indexValue must always be a string."),new X(e,cr)}toString(){return".key"}}const Ss=new Kf;/**
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
 */class ur{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Me{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Me.RED,this.left=i??rt.EMPTY_NODE,this.right=r??rt.EMPTY_NODE}copy(e,n,s,i,r){return new Me(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return rt.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return rt.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Me.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Me.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Me.RED=!0;Me.BLACK=!1;class wb{copy(e,n,s,i,r){return this}insert(e,n,s){return new Me(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class rt{constructor(e,n=rt.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new rt(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Me.BLACK,null,null))}remove(e){return new rt(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Me.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new ur(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new ur(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new ur(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new ur(this.root_,null,this.comparator_,!0,e)}}rt.EMPTY_NODE=new wb;/**
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
 */function vb(t,e){return os(t.name,e.name)}function Bl(t,e){return os(t,e)}/**
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
 */let Ma;function yb(t){Ma=t}const Yf=function(t){return typeof t=="number"?"number:"+kf(t):"string:"+t},Qf=function(t){if(t.isLeafNode()){const e=t.val();S(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Yt(e,".sv"),"Priority must be a string or number.")}else S(t===Ma||t.isEmpty(),"priority of unexpected type.");S(t===Ma||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let Vu;class Ne{static set __childrenNodeConstructor(e){Vu=e}static get __childrenNodeConstructor(){return Vu}constructor(e,n=Ne.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,S(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Qf(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Ne(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:ee(e)===".priority"?this.priorityNode_:Ne.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Ne.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=ee(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(S(s!==".priority"||Rn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Ne.__childrenNodeConstructor.EMPTY_NODE.updateChild(ye(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Yf(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=kf(this.value_):e+=this.value_,this.lazyHash_=Sf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Ne.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Ne.__childrenNodeConstructor?-1:(S(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Ne.VALUE_TYPE_ORDER.indexOf(n),r=Ne.VALUE_TYPE_ORDER.indexOf(s);return S(i>=0,"Unknown leaf type: "+n),S(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Ne.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let Jf,Xf;function bb(t){Jf=t}function Cb(t){Xf=t}class Eb extends bo{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?os(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return X.MIN}maxPost(){return new X(Zn,new Ne("[PRIORITY-POST]",Xf))}makePost(e,n){const s=Jf(e);return new X(n,new Ne("[PRIORITY-POST]",s))}toString(){return".priority"}}const Pe=new Eb;/**
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
 */const Ib=Math.log(2);class Sb{constructor(e){const n=r=>parseInt(Math.log(r)/Ib,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Dr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Me(h,d.node,Me.BLACK,null,null);{const m=parseInt(u/2,10)+l,w=i(l,m),b=i(m+1,c);return d=t[m],h=n?n(d):d,new Me(h,d.node,Me.BLACK,w,b)}},r=function(l){let c=null,u=null,d=t.length;const h=function(w,b){const M=d-w,D=d;d-=w;const O=i(M+1,D),L=t[M],N=n?n(L):L;m(new Me(N,L.node,b,null,O))},m=function(w){c?(c.left=w,c=w):(u=w,c=w)};for(let w=0;w<l.count;++w){const b=l.nextBitIsOne(),M=Math.pow(2,l.count-(w+1));b?h(M,Me.BLACK):(h(M,Me.BLACK),h(M,Me.RED))}return u},o=new Sb(t.length),a=r(o);return new rt(s||e,a)};/**
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
 */let sa;const fs={};class nn{static get Default(){return S(fs&&Pe,"ChildrenNode.ts has not been loaded"),sa=sa||new nn({".priority":fs},{".priority":Pe}),sa}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=Ns(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof rt?n:null}hasIndex(e){return Yt(this.indexSet_,e.toString())}addIndex(e,n){S(e!==Ss,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(X.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Dr(s,e.getCompare()):a=fs;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new nn(u,c)}addToIndexes(e,n){const s=xr(this.indexes_,(i,r)=>{const o=Ns(this.indexSet_,r);if(S(o,"Missing index implementation for "+r),i===fs)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(X.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Dr(a,o.getCompare())}else return fs;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new X(e.name,a))),l.insert(e,e.node)}});return new nn(s,this.indexSet_)}removeFromIndexes(e,n){const s=xr(this.indexes_,i=>{if(i===fs)return i;{const r=n.get(e.name);return r?i.remove(new X(e.name,r)):i}});return new nn(s,this.indexSet_)}}/**
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
 */let ai;class W{static get EMPTY_NODE(){return ai||(ai=new W(new rt(Bl),null,nn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&Qf(this.priorityNode_),this.children_.isEmpty()&&S(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||ai}updatePriority(e){return this.children_.isEmpty()?this:new W(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?ai:n}}getChild(e){const n=ee(e);return n===null?this:this.getImmediateChild(n).getChild(ye(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(S(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new X(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?ai:this.priorityNode_;return new W(i,o,r)}}updateChild(e,n){const s=ee(e);if(s===null)return n;{S(ee(e)!==".priority"||Rn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(ye(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Pe,(o,a)=>{n[o]=a.val(e),s++,r&&W.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Yf(this.getPriority().val())+":"),this.forEachChild(Pe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":Sf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new X(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new X(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new X(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,X.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Ki?-1:0}withIndex(e){if(e===Ss||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new W(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===Ss||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Pe),i=n.getIterator(Pe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===Ss?null:this.indexMap_.get(e.toString())}}W.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class Tb extends W{constructor(){super(new rt(Bl),W.EMPTY_NODE,nn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return W.EMPTY_NODE}isEmpty(){return!1}}const Ki=new Tb;Object.defineProperties(X,{MIN:{value:new X(Ds,W.EMPTY_NODE)},MAX:{value:new X(Zn,Ki)}});Kf.__EMPTY_NODE=W.EMPTY_NODE;Ne.__childrenNodeConstructor=W;yb(Ki);Cb(Ki);/**
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
 */const kb=!0;function Fe(t,e=null){if(t===null)return W.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),S(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Ne(n,Fe(e))}if(!(t instanceof Array)&&kb){const n=[];let s=!1;if($e(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=Fe(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new X(o,l)))}}),n.length===0)return W.EMPTY_NODE;const r=Dr(n,vb,o=>o.name,Bl);if(s){const o=Dr(n,Pe.getCompare());return new W(r,Fe(e),new nn({".priority":o},{".priority":Pe}))}else return new W(r,Fe(e),nn.Default)}else{let n=W.EMPTY_NODE;return $e(t,(s,i)=>{if(Yt(t,s)&&s.substring(0,1)!=="."){const r=Fe(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority(Fe(e))}}bb(Fe);/**
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
 */class Pb extends bo{constructor(e){super(),this.indexPath_=e,S(!te(e)&&ee(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?os(e.name,n.name):r}makePost(e,n){const s=Fe(e),i=W.EMPTY_NODE.updateChild(this.indexPath_,s);return new X(n,i)}maxPost(){const e=W.EMPTY_NODE.updateChild(this.indexPath_,Ki);return new X(Zn,e)}toString(){return Mi(this.indexPath_,0).join("/")}}/**
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
 */class Ab extends bo{compare(e,n){const s=e.node.compareTo(n.node);return s===0?os(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return X.MIN}maxPost(){return X.MAX}makePost(e,n){const s=Fe(e);return new X(n,s)}toString(){return".value"}}const Rb=new Ab;/**
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
 */function Zf(t){return{type:"value",snapshotNode:t}}function Ls(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Di(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Li(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function xb(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Fl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){S(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Di(n,a)):S(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Ls(n,s)):o.trackChildChange(Li(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Pe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Di(i,r))}),n.isLeafNode()||n.forEachChild(Pe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Li(i,r,o))}else s.trackChildChange(Ls(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?W.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Bi{constructor(e){this.indexedFilter_=new Fl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Bi.getStartPost_(e),this.endPost_=Bi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new X(n,s))||(s=W.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=W.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(W.EMPTY_NODE);const r=this;return n.forEachChild(Pe,(o,a)=>{r.matches(new X(o,a))||(i=i.updateImmediateChild(o,W.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class Ob{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Bi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new X(n,s))||(s=W.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=W.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=W.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(W.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,W.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;S(a.numChildren()===this.limit_,"");const l=new X(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Li(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Di(n,d));const b=a.updateImmediateChild(n,W.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Ls(h.name,h.node)),b.updateImmediateChild(h.name,h.node)):b}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Di(c.name,c.node)),r.trackChildChange(Ls(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,W.EMPTY_NODE)):e}}/**
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
 */class $l{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Pe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return S(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return S(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Ds}hasEnd(){return this.endSet_}getIndexEndValue(){return S(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return S(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:Zn}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return S(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Pe}copy(){const e=new $l;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function Nb(t){return t.loadsAllData()?new Fl(t.getIndex()):t.hasLimit()?new Ob(t):new Bi(t)}function Wu(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Pe?n="$priority":t.index_===Rb?n="$value":t.index_===Ss?n="$key":(S(t.index_ instanceof Pb,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=De(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=De(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+De(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=De(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+De(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function ju(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Pe&&(e.i=t.index_.toString()),e}/**
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
 */class Lr extends jf{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(S(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=Gi("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Lr.getListenId_(e,s),a={};this.listens_[o]=a;const l=Wu(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),Ns(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=Lr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=Wu(e._queryParams),s=e._path.toString(),i=new vo;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+zs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=xi(a.responseText)}catch{ot("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&ot("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class Mb{constructor(){this.rootNode_=W.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function Br(){return{value:null,children:new Map}}function ep(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=ee(e);t.children.has(s)||t.children.set(s,Br());const i=t.children.get(s);e=ye(e),ep(i,e,n)}}function Da(t,e,n){t.value!==null?n(e,t.value):Db(t,(s,i)=>{const r=new pe(e.toString()+"/"+s);Da(i,r,n)})}function Db(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class Lb{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&$e(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const qu=10*1e3,Bb=30*1e3,Fb=5*60*1e3;class $b{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new Lb(e);const s=qu+(Bb-qu)*Math.random();wi(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;$e(e,(i,r)=>{r>0&&Yt(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),wi(this.reportStats_.bind(this),Math.floor(Math.random()*2*Fb))}}/**
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
 */var Pt;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Pt||(Pt={}));function Ul(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Hl(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Vl(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class Fr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Pt.ACK_USER_WRITE,this.source=Ul()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return S(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new pe(e));return new Fr(ae(),n,this.revert)}}else return S(ee(this.path)===e,"operationForChild called for unrelated child."),new Fr(ye(this.path),this.affectedTree,this.revert)}}/**
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
 */class Fi{constructor(e,n){this.source=e,this.path=n,this.type=Pt.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new Fi(this.source,ae()):new Fi(this.source,ye(this.path))}}/**
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
 */class es{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Pt.OVERWRITE}operationForChild(e){return te(this.path)?new es(this.source,ae(),this.snap.getImmediateChild(e)):new es(this.source,ye(this.path),this.snap)}}/**
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
 */class Bs{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Pt.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new pe(e));return n.isEmpty()?null:n.value?new es(this.source,ae(),n.value):new Bs(this.source,ae(),n)}else return S(ee(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Bs(this.source,ye(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ts{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=ee(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class Ub{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Hb(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(xb(o.childName,o.snapshotNode))}),li(t,i,"child_removed",e,s,n),li(t,i,"child_added",e,s,n),li(t,i,"child_moved",r,s,n),li(t,i,"child_changed",e,s,n),li(t,i,"value",e,s,n),i}function li(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>Wb(t,a,l)),o.forEach(a=>{const l=Vb(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function Vb(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function Wb(t,e,n){if(e.childName==null||n.childName==null)throw qs("Should only compare child_ events.");const s=new X(e.childName,e.snapshotNode),i=new X(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function Co(t,e){return{eventCache:t,serverCache:e}}function vi(t,e,n,s){return Co(new ts(e,n,s),t.serverCache)}function tp(t,e,n,s){return Co(t.eventCache,new ts(e,n,s))}function La(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function ns(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let ia;const jb=()=>(ia||(ia=new rt(Py)),ia);class we{static fromObject(e){let n=new we(null);return $e(e,(s,i)=>{n=n.set(new pe(s),i)}),n}constructor(e,n=jb()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:ae(),value:this.value};if(te(e))return null;{const s=ee(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(ye(e),n);return r!=null?{path:ke(new pe(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=ee(e),s=this.children.get(n);return s!==null?s.subtree(ye(e)):new we(null)}}set(e,n){if(te(e))return new we(n,this.children);{const s=ee(e),r=(this.children.get(s)||new we(null)).set(ye(e),n),o=this.children.insert(s,r);return new we(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new we(null):new we(null,this.children);{const n=ee(e),s=this.children.get(n);if(s){const i=s.remove(ye(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new we(null):new we(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=ee(e),s=this.children.get(n);return s?s.get(ye(e)):null}}setTree(e,n){if(te(e))return n;{const s=ee(e),r=(this.children.get(s)||new we(null)).setTree(ye(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new we(this.value,o)}}fold(e){return this.fold_(ae(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(ke(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,ae(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(te(e))return null;{const r=ee(e),o=this.children.get(r);return o?o.findOnPath_(ye(e),ke(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,ae(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const i=ee(e),r=this.children.get(i);return r?r.foreachOnPath_(ye(e),ke(n,i),s):new we(null)}}foreach(e){this.foreach_(ae(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(ke(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class xt{constructor(e){this.writeTree_=e}static empty(){return new xt(new we(null))}}function yi(t,e,n){if(te(e))return new xt(new we(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=it(i,e);return r=r.updateChild(o,n),new xt(t.writeTree_.set(i,r))}else{const i=new we(n),r=t.writeTree_.setTree(e,i);return new xt(r)}}}function Ba(t,e,n){let s=t;return $e(n,(i,r)=>{s=yi(s,ke(e,i),r)}),s}function zu(t,e){if(te(e))return xt.empty();{const n=t.writeTree_.setTree(e,new we(null));return new xt(n)}}function Fa(t,e){return as(t,e)!=null}function as(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(it(n.path,e)):null}function Gu(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Pe,(s,i)=>{e.push(new X(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new X(s,i.value))}),e}function An(t,e){if(te(e))return t;{const n=as(t,e);return n!=null?new xt(new we(n)):new xt(t.writeTree_.subtree(e))}}function $a(t){return t.writeTree_.isEmpty()}function Fs(t,e){return np(ae(),t.writeTree_,e)}function np(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(S(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=np(ke(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(ke(t,".priority"),s)),n}}/**
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
 */function Wl(t,e){return op(e,t)}function qb(t,e,n,s,i){S(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=yi(t.visibleWrites,e,n)),t.lastWriteId=s}function zb(t,e,n,s){S(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Ba(t.visibleWrites,e,n),t.lastWriteId=s}function Gb(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function Kb(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);S(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&Yb(a,s.path)?i=!1:vt(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return Qb(t),!0;if(s.snap)t.visibleWrites=zu(t.visibleWrites,s.path);else{const a=s.children;$e(a,l=>{t.visibleWrites=zu(t.visibleWrites,ke(s.path,l))})}return!0}else return!1}function Yb(t,e){if(t.snap)return vt(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&vt(ke(t.path,n),e))return!0;return!1}function Qb(t){t.visibleWrites=sp(t.allWrites,Jb,ae()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function Jb(t){return t.visible}function sp(t,e,n){let s=xt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)vt(n,o)?(a=it(n,o),s=yi(s,a,r.snap)):vt(o,n)&&(a=it(o,n),s=yi(s,ae(),r.snap.getChild(a)));else if(r.children){if(vt(n,o))a=it(n,o),s=Ba(s,a,r.children);else if(vt(o,n))if(a=it(o,n),te(a))s=Ba(s,ae(),r.children);else{const l=Ns(r.children,ee(a));if(l){const c=l.getChild(ye(a));s=yi(s,ae(),c)}}}else throw qs("WriteRecord should have .snap or .children")}}return s}function ip(t,e,n,s,i){if(!s&&!i){const r=as(t.visibleWrites,e);if(r!=null)return r;{const o=An(t.visibleWrites,e);if($a(o))return n;if(n==null&&!Fa(o,ae()))return null;{const a=n||W.EMPTY_NODE;return Fs(o,a)}}}else{const r=An(t.visibleWrites,e);if(!i&&$a(r))return n;if(!i&&n==null&&!Fa(r,ae()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(vt(c.path,e)||vt(e,c.path))},a=sp(t.allWrites,o,e),l=n||W.EMPTY_NODE;return Fs(a,l)}}}function Xb(t,e,n){let s=W.EMPTY_NODE;const i=as(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Pe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=An(t.visibleWrites,e);return n.forEachChild(Pe,(o,a)=>{const l=Fs(An(r,new pe(o)),a);s=s.updateImmediateChild(o,l)}),Gu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=An(t.visibleWrites,e);return Gu(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function Zb(t,e,n,s,i){S(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=ke(e,n);if(Fa(t.visibleWrites,r))return null;{const o=An(t.visibleWrites,r);return $a(o)?i.getChild(n):Fs(o,i.getChild(n))}}function eC(t,e,n,s){const i=ke(e,n),r=as(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=An(t.visibleWrites,i);return Fs(o,s.getNode().getImmediateChild(n))}else return null}function tC(t,e){return as(t.visibleWrites,e)}function nC(t,e,n,s,i,r,o){let a;const l=An(t.visibleWrites,e),c=as(l,ae());if(c!=null)a=c;else if(n!=null)a=Fs(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function sC(){return{visibleWrites:xt.empty(),allWrites:[],lastWriteId:-1}}function $r(t,e,n,s){return ip(t.writeTree,t.treePath,e,n,s)}function jl(t,e){return Xb(t.writeTree,t.treePath,e)}function Ku(t,e,n,s){return Zb(t.writeTree,t.treePath,e,n,s)}function Ur(t,e){return tC(t.writeTree,ke(t.treePath,e))}function iC(t,e,n,s,i,r){return nC(t.writeTree,t.treePath,e,n,s,i,r)}function ql(t,e,n){return eC(t.writeTree,t.treePath,e,n)}function rp(t,e){return op(ke(t.treePath,e),t.writeTree)}function op(t,e){return{treePath:t,writeTree:e}}/**
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
 */class rC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;S(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),S(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Li(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Di(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Ls(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Li(s,e.snapshotNode,i.oldSnap));else throw qs("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class oC{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const ap=new oC;class zl{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ts(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ql(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:ns(this.viewCache_),r=iC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function aC(t){return{filter:t}}function lC(t,e){S(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),S(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function cC(t,e,n,s,i){const r=new rC;let o,a;if(n.type===Pt.OVERWRITE){const c=n;c.source.fromUser?o=Ua(t,e,c.path,c.snap,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=Hr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Pt.MERGE){const c=n;c.source.fromUser?o=dC(t,e,c.path,c.children,s,i,r):(S(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=Ha(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Pt.ACK_USER_WRITE){const c=n;c.revert?o=pC(t,e,c.path,s,i,r):o=hC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Pt.LISTEN_COMPLETE)o=fC(t,e,n.path,s,r);else throw qs("Unknown operation type: "+n.type);const l=r.getChanges();return uC(e,o,l),{viewCache:o,changes:l}}function uC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=La(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(Zf(La(e)))}}function lp(t,e,n,s,i,r){const o=e.eventCache;if(Ur(s,n)!=null)return e;{let a,l;if(te(n))if(S(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=ns(e),u=c instanceof W?c:W.EMPTY_NODE,d=jl(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=$r(s,ns(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=ee(n);if(c===".priority"){S(Rn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=Ku(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=ye(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=Ku(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=ql(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return vi(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function Hr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=ee(n);if(!l.isCompleteForPath(n)&&Rn(n)>1)return e;const w=ye(n),M=l.getNode().getImmediateChild(m).updateChild(w,s);m===".priority"?c=u.updatePriority(l.getNode(),M):c=u.updateChild(l.getNode(),m,M,w,ap,null)}const d=tp(e,c,l.isFullyInitialized()||te(n),u.filtersNodes()),h=new zl(i,d,r);return lp(t,d,n,i,h,a)}function Ua(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new zl(i,e,r);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=vi(e,c,!0,t.filter.filtersNodes());else{const d=ee(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=vi(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=ye(n),m=a.getNode().getImmediateChild(d);let w;if(te(h))w=s;else{const b=u.getCompleteChild(d);b!=null?Ml(h)===".priority"&&b.getChild(zf(h)).isEmpty()?w=b:w=b.updateChild(h,s):w=W.EMPTY_NODE}if(m.equals(w))l=e;else{const b=t.filter.updateChild(a.getNode(),d,w,h,u,o);l=vi(e,b,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function Yu(t,e){return t.eventCache.isCompleteForChild(e)}function dC(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=ke(n,l);Yu(e,ee(u))&&(a=Ua(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=ke(n,l);Yu(e,ee(u))||(a=Ua(t,a,u,c,i,r,o))}),a}function Qu(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function Ha(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;te(n)?c=s:c=new we(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),w=Qu(t,m,h);l=Hr(t,l,new pe(d),w,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const w=e.serverCache.getNode().getImmediateChild(d),b=Qu(t,w,h);l=Hr(t,l,new pe(d),b,i,r,o,a)}}),l}function hC(t,e,n,s,i,r,o){if(Ur(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Hr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(te(n)){let c=new we(null);return l.getNode().forEachChild(Ss,(u,d)=>{c=c.set(new pe(u),d)}),Ha(t,e,n,c,i,r,a,o)}else return e}else{let c=new we(null);return s.foreach((u,d)=>{const h=ke(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),Ha(t,e,n,c,i,r,a,o)}}function fC(t,e,n,s,i){const r=e.serverCache,o=tp(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return lp(t,o,n,s,ap,i)}function pC(t,e,n,s,i,r){let o;if(Ur(s,n)!=null)return e;{const a=new zl(s,e,i),l=e.eventCache.getNode();let c;if(te(n)||ee(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=$r(s,ns(e));else{const d=e.serverCache.getNode();S(d instanceof W,"serverChildren would be complete if leaf node"),u=jl(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=ee(n);let d=ql(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,ye(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,W.EMPTY_NODE,ye(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=$r(s,ns(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Ur(s,ae())!=null,vi(e,c,o,t.filter.filtersNodes())}}/**
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
 */class mC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Fl(s.getIndex()),r=Nb(s);this.processor_=aC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(W.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(W.EMPTY_NODE,a.getNode(),null),u=new ts(l,o.isFullyInitialized(),i.filtersNodes()),d=new ts(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Co(d,u),this.eventGenerator_=new Ub(this.query_)}get query(){return this.query_}}function gC(t){return t.viewCache_.serverCache.getNode()}function _C(t,e){const n=ns(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(ee(e)).isEmpty())?n.getChild(e):null}function Ju(t){return t.eventRegistrations_.length===0}function wC(t,e){t.eventRegistrations_.push(e)}function Xu(t,e,n){const s=[];if(n){S(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function Zu(t,e,n,s){e.type===Pt.MERGE&&e.source.queryId!==null&&(S(ns(t.viewCache_),"We should always have a full cache before handling merges"),S(La(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=cC(t.processor_,i,e,n,s);return lC(t.processor_,r.viewCache),S(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,cp(t,r.changes,r.viewCache.eventCache.getNode(),null)}function vC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Pe,(r,o)=>{s.push(Ls(r,o))}),n.isFullyInitialized()&&s.push(Zf(n.getNode())),cp(t,s,n.getNode(),e)}function cp(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return Hb(t.eventGenerator_,e,n,i)}/**
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
 */let Vr;class yC{constructor(){this.views=new Map}}function bC(t){S(!Vr,"__referenceConstructor has already been defined"),Vr=t}function CC(){return S(Vr,"Reference.ts has not been loaded"),Vr}function EC(t){return t.views.size===0}function Gl(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return S(r!=null,"SyncTree gave us an op for an invalid query."),Zu(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(Zu(o,e,n,s));return r}}function IC(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=$r(n,i?s:null),l=!1;a?l=!0:s instanceof W?(a=jl(n,s),l=!1):(a=W.EMPTY_NODE,l=!1);const c=Co(new ts(a,l,!1),new ts(s,i,!1));return new mC(e,c)}return o}function SC(t,e,n,s,i,r){const o=IC(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),wC(o,n),vC(o,n)}function TC(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=xn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(Xu(c,n,s)),Ju(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(Xu(l,n,s)),Ju(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!xn(t)&&r.push(new(CC())(e._repo,e._path)),{removed:r,events:o}}function up(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Ts(t,e){let n=null;for(const s of t.views.values())n=n||_C(s,e);return n}function dp(t,e){if(e._queryParams.loadsAllData())return Eo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function hp(t,e){return dp(t,e)!=null}function xn(t){return Eo(t)!=null}function Eo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Wr;function kC(t){S(!Wr,"__referenceConstructor has already been defined"),Wr=t}function PC(){return S(Wr,"Reference.ts has not been loaded"),Wr}let AC=1;class ed{constructor(e){this.listenProvider_=e,this.syncPointTree_=new we(null),this.pendingWriteTree_=sC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function RC(t,e,n,s,i){return qb(t.pendingWriteTree_,e,n,s,i),i?Ys(t,new es(Ul(),e,n)):[]}function xC(t,e,n,s){zb(t.pendingWriteTree_,e,n,s);const i=we.fromObject(n);return Ys(t,new Bs(Ul(),e,i))}function jn(t,e,n=!1){const s=Gb(t.pendingWriteTree_,e);if(Kb(t.pendingWriteTree_,e)){let r=new we(null);return s.snap!=null?r=r.set(ae(),!0):$e(s.children,o=>{r=r.set(new pe(o),!0)}),Ys(t,new Fr(s.path,r,n))}else return[]}function Io(t,e,n){return Ys(t,new es(Hl(),e,n))}function OC(t,e,n){const s=we.fromObject(n);return Ys(t,new Bs(Hl(),e,s))}function NC(t,e){return Ys(t,new Fi(Hl(),e))}function MC(t,e,n){const s=Kl(t,n);if(s){const i=Yl(s),r=i.path,o=i.queryId,a=it(r,e),l=new Fi(Vl(o),a);return Ql(t,r,l)}else return[]}function Va(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||hp(o,e))){const l=TC(o,e,n,s);EC(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>xn(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=BC(h);for(let w=0;w<m.length;++w){const b=m[w],M=b.query,D=gp(t,b);t.listenProvider_.startListening(bi(M),jr(t,M),D.hashFn,D.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(bi(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(So(h));t.listenProvider_.stopListening(bi(h),m)}))}FC(t,c)}return a}function DC(t,e,n,s){const i=Kl(t,s);if(i!=null){const r=Yl(i),o=r.path,a=r.queryId,l=it(o,e),c=new es(Vl(a),l,n);return Ql(t,o,c)}else return[]}function LC(t,e,n,s){const i=Kl(t,s);if(i){const r=Yl(i),o=r.path,a=r.queryId,l=it(o,e),c=we.fromObject(n),u=new Bs(Vl(a),l,c);return Ql(t,o,u)}else return[]}function td(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const w=it(h,i);r=r||Ts(m,w),o=o||xn(m)});let a=t.syncPointTree_.get(i);a?(o=o||xn(a),r=r||Ts(a,ae())):(a=new yC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=W.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,w)=>{const b=Ts(w,ae());b&&(r=r.updateImmediateChild(m,b))}));const c=hp(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=So(e);S(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=$C();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=Wl(t.pendingWriteTree_,i);let d=SC(a,e,n,u,r,l);if(!c&&!o&&!s){const h=dp(a,e);d=d.concat(UC(t,e,h))}return d}function fp(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=it(o,e),c=Ts(a,l);if(c)return c});return ip(i,e,r,n,!0)}function Ys(t,e){return pp(e,t.syncPointTree_,null,Wl(t.pendingWriteTree_,ae()))}function pp(t,e,n,s){if(te(t.path))return mp(t,e,n,s);{const i=e.get(ae());n==null&&i!=null&&(n=Ts(i,ae()));let r=[];const o=ee(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=rp(s,o);r=r.concat(pp(a,l,c,u))}return i&&(r=r.concat(Gl(i,t,s,n))),r}}function mp(t,e,n,s){const i=e.get(ae());n==null&&i!=null&&(n=Ts(i,ae()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=rp(s,o),u=t.operationForChild(o);u&&(r=r.concat(mp(u,a,l,c)))}),i&&(r=r.concat(Gl(i,t,s,n))),r}function gp(t,e){const n=e.query,s=jr(t,n);return{hashFn:()=>(gC(e)||W.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?MC(t,n._path,s):NC(t,n._path);{const r=xy(i,n);return Va(t,n,null,r)}}}}function jr(t,e){const n=So(e);return t.queryToTagMap.get(n)}function So(t){return t._path.toString()+"$"+t._queryIdentifier}function Kl(t,e){return t.tagToQueryMap.get(e)}function Yl(t){const e=t.indexOf("$");return S(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new pe(t.substr(0,e))}}function Ql(t,e,n){const s=t.syncPointTree_.get(e);S(s,"Missing sync point for query tag that we're tracking");const i=Wl(t.pendingWriteTree_,e);return Gl(s,n,i,null)}function BC(t){return t.fold((e,n,s)=>{if(n&&xn(n))return[Eo(n)];{let i=[];return n&&(i=up(n)),$e(s,(r,o)=>{i=i.concat(o)}),i}})}function bi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(PC())(t._repo,t._path):t}function FC(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=So(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function $C(){return AC++}function UC(t,e,n){const s=e._path,i=jr(t,e),r=gp(t,n),o=t.listenProvider_.startListening(bi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)S(!xn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!te(c)&&u&&xn(u))return[Eo(u).query];{let h=[];return u&&(h=h.concat(up(u).map(m=>m.query))),$e(d,(m,w)=>{h=h.concat(w)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(bi(u),jr(t,u))}}return o}/**
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
 */class Jl{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new Jl(n)}node(){return this.node_}}class Xl{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=ke(this.path_,e);return new Xl(this.syncTree_,n)}node(){return fp(this.syncTree_,this.path_)}}const HC=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},nd=function(t,e,n){if(!t||typeof t!="object")return t;if(S(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return VC(t[".sv"],e,n);if(typeof t[".sv"]=="object")return WC(t[".sv"],e);S(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},VC=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:S(!1,"Unexpected server value: "+t)}},WC=function(t,e,n){t.hasOwnProperty("increment")||S(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&S(!1,"Unexpected increment value: "+s);const i=e.node();if(S(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},_p=function(t,e,n,s){return Zl(e,new Xl(n,t),s)},jC=function(t,e,n){return Zl(t,new Jl(e),n)};function Zl(t,e,n){const s=t.getPriority().val(),i=nd(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=nd(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Ne(a,Fe(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Ne(i))),o.forEachChild(Pe,(a,l)=>{const c=Zl(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class ec{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function tc(t,e){let n=e instanceof pe?e:new pe(e),s=t,i=ee(n);for(;i!==null;){const r=Ns(s.node.children,i)||{children:{},childCount:0};s=new ec(i,s,r),n=ye(n),i=ee(n)}return s}function Qs(t){return t.node.value}function wp(t,e){t.node.value=e,Wa(t)}function vp(t){return t.node.childCount>0}function qC(t){return Qs(t)===void 0&&!vp(t)}function To(t,e){$e(t.node.children,(n,s)=>{e(new ec(n,t,s))})}function yp(t,e,n,s){n&&e(t),To(t,i=>{yp(i,e,!0)})}function zC(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function Yi(t){return new pe(t.parent===null?t.name:Yi(t.parent)+"/"+t.name)}function Wa(t){t.parent!==null&&GC(t.parent,t.name,t)}function GC(t,e,n){const s=qC(n),i=Yt(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,Wa(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,Wa(t))}/**
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
 */const KC=/[\[\].#$\/\u0000-\u001F\u007F]/,YC=/[\[\].#$\u0000-\u001F\u007F]/,ra=10*1024*1024,nc=function(t){return typeof t=="string"&&t.length!==0&&!KC.test(t)},bp=function(t){return typeof t=="string"&&t.length!==0&&!YC.test(t)},QC=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),bp(t)},JC=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Al(t)||t&&typeof t=="object"&&Yt(t,".sv")},sc=function(t,e,n){const s=n instanceof pe?new db(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Vn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Vn(s)+" with contents = "+e.toString());if(Al(e))throw new Error(t+"contains "+e.toString()+" "+Vn(s));if(typeof e=="string"&&e.length>ra/3&&yo(e)>ra)throw new Error(t+"contains a string greater than "+ra+" utf8 bytes "+Vn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if($e(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!nc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Vn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);hb(s,o),sc(t,a,s),fb(s)}),i&&r)throw new Error(t+' contains ".value" child '+Vn(s)+" in addition to actual children.")}},XC=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Mi(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!nc(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(ub);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&vt(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},ZC=function(t,e,n,s){const i=Sl(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];$e(e,(o,a)=>{const l=new pe(o);if(sc(i,a,ke(n,l)),Ml(l)===".priority"&&!JC(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),XC(i,r)},Cp=function(t,e,n,s){if(!bp(n))throw new Error(Sl(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},eE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),Cp(t,e,n)},tE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!QC(n))throw new Error(Sl(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class nE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ic(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Dl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function Ep(t,e,n){ic(t,n),Ip(t,s=>Dl(s,e))}function dn(t,e,n){ic(t,n),Ip(t,s=>vt(s,e)||vt(e,s))}function Ip(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(sE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function sE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();_i&&Be("event: "+n.toString()),Ks(s)}}}/**
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
 */const iE="repo_interrupt",rE=25;class oE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new nE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=Br(),this.transactionQueueTree_=new ec,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function aE(t,e,n){if(t.stats_=Ol(t.repoInfo_),t.forceRestClient_||Dy())t.server_=new Lr(t.repoInfo_,(s,i,r,o)=>{sd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>id(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{De(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new an(t.repoInfo_,e,(s,i,r,o)=>{sd(t,s,i,r,o)},s=>{id(t,s)},s=>{cE(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=Uy(t.repoInfo_,()=>new $b(t.stats_,t.server_)),t.infoData_=new Mb,t.infoSyncTree_=new ed({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=Io(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),oc(t,"connected",!1),t.serverSyncTree_=new ed({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);dn(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function lE(t){const n=t.infoData_.getNode(new pe(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function rc(t){return HC({timestamp:lE(t)})}function sd(t,e,n,s,i){t.dataUpdateCount++;const r=new pe(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=xr(n,c=>Fe(c));o=LC(t.serverSyncTree_,r,l,i)}else{const l=Fe(n);o=DC(t.serverSyncTree_,r,l,i)}else if(s){const l=xr(n,c=>Fe(c));o=OC(t.serverSyncTree_,r,l)}else{const l=Fe(n);o=Io(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=$i(t,r)),dn(t.eventQueue_,a,o)}function id(t,e){oc(t,"connected",e),e===!1&&dE(t)}function cE(t,e){$e(e,(n,s)=>{oc(t,n,s)})}function oc(t,e,n){const s=new pe("/.info/"+e),i=Fe(n);t.infoData_.updateSnapshot(s,i);const r=Io(t.infoSyncTree_,s,i);dn(t.eventQueue_,s,r)}function Sp(t){return t.nextWriteId_++}function uE(t,e,n,s){ac(t,"update",{path:e.toString(),value:n});let i=!0;const r=rc(t),o={};if($e(n,(a,l)=>{i=!1,o[a]=_p(ke(e,a),Fe(l),t.serverSyncTree_,r)}),i)Be("update() called with empty data.  Don't do anything."),rd(t,s,"ok",void 0);else{const a=Sp(t),l=xC(t.serverSyncTree_,e,o,a);ic(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||ot("update at "+e+" failed: "+c);const h=jn(t.serverSyncTree_,a,!d),m=h.length>0?$i(t,e):e;dn(t.eventQueue_,m,h),rd(t,s,c,u)}),$e(n,c=>{const u=Rp(t,ke(e,c));$i(t,u)}),dn(t.eventQueue_,e,[])}}function dE(t){ac(t,"onDisconnectEvents");const e=rc(t),n=Br();Da(t.onDisconnect_,ae(),(i,r)=>{const o=_p(i,r,t.serverSyncTree_,e);ep(n,i,o)});let s=[];Da(n,ae(),(i,r)=>{s=s.concat(Io(t.serverSyncTree_,i,r));const o=Rp(t,i);$i(t,o)}),t.onDisconnect_=Br(),dn(t.eventQueue_,ae(),s)}function hE(t,e,n){let s;ee(e._path)===".info"?s=td(t.infoSyncTree_,e,n):s=td(t.serverSyncTree_,e,n),Ep(t.eventQueue_,e._path,s)}function fE(t,e,n){let s;ee(e._path)===".info"?s=Va(t.infoSyncTree_,e,n):s=Va(t.serverSyncTree_,e,n),Ep(t.eventQueue_,e._path,s)}function pE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(iE)}function ac(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),Be(n,...e)}function rd(t,e,n,s){e&&Ks(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Tp(t,e,n){return fp(t.serverSyncTree_,e,n)||W.EMPTY_NODE}function lc(t,e=t.transactionQueueTree_){if(e||ko(t,e),Qs(e)){const n=Pp(t,e);S(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&mE(t,Yi(e),n)}else vp(e)&&To(e,n=>{lc(t,n)})}function mE(t,e,n){const s=n.map(c=>c.currentWriteId),i=Tp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];S(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=it(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{ac(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(jn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();ko(t,tc(t.transactionQueueTree_,e)),lc(t,t.transactionQueueTree_),dn(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)Ks(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{ot("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}$i(t,e)}},o)}function $i(t,e){const n=kp(t,e),s=Yi(n),i=Pp(t,n);return gE(t,i,s),s}function gE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=it(n,l.path);let u=!1,d;if(S(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(jn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=rE)u=!0,d="maxretry",i=i.concat(jn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Tp(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){sc("transaction failed: Data returned ",m,l.path);let w=Fe(m);typeof m=="object"&&m!=null&&Yt(m,".priority")||(w=w.updatePriority(h.getPriority()));const M=l.currentWriteId,D=rc(t),O=jC(w,h,D);l.currentOutputSnapshotRaw=w,l.currentOutputSnapshotResolved=O,l.currentWriteId=Sp(t),o.splice(o.indexOf(M),1),i=i.concat(RC(t.serverSyncTree_,l.path,O,l.currentWriteId,l.applyLocally)),i=i.concat(jn(t.serverSyncTree_,M,!0))}else u=!0,d="nodata",i=i.concat(jn(t.serverSyncTree_,l.currentWriteId,!0))}dn(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}ko(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)Ks(s[a]);lc(t,t.transactionQueueTree_)}function kp(t,e){let n,s=t.transactionQueueTree_;for(n=ee(e);n!==null&&Qs(s)===void 0;)s=tc(s,n),e=ye(e),n=ee(e);return s}function Pp(t,e){const n=[];return Ap(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Ap(t,e,n){const s=Qs(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);To(e,i=>{Ap(t,i,n)})}function ko(t,e){const n=Qs(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,wp(e,n.length>0?n:void 0)}To(e,s=>{ko(t,s)})}function Rp(t,e){const n=Yi(kp(t,e)),s=tc(t.transactionQueueTree_,e);return zC(s,i=>{oa(t,i)}),oa(t,s),yp(s,i=>{oa(t,i)}),n}function oa(t,e){const n=Qs(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(S(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(S(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(jn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?wp(e,void 0):n.length=r+1,dn(t.eventQueue_,Yi(e),i);for(let o=0;o<s.length;o++)Ks(s[o])}}/**
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
 */function _E(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function wE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):ot(`Invalid query segment '${n}' in query '${t}'`)}return e}const od=function(t,e){const n=vE(t),s=n.namespace;n.domain==="firebase.com"&&un(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&un("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||Ty();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new Bf(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new pe(n.pathString)}},vE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=_E(t.substring(u,d)));const h=wE(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const w=e.indexOf(".");s=e.substring(0,w).toLowerCase(),n=e.substring(w+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */class yE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+De(this.snapshot.exportVal())}}class bE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class CE{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return S(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class cc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return te(this._path)?null:Ml(this._path)}get ref(){return new Ln(this._repo,this._path)}get _queryIdentifier(){const e=ju(this._queryParams),n=Rl(e);return n==="{}"?"default":n}get _queryObject(){return ju(this._queryParams)}isEqual(e){if(e=Mt(e),!(e instanceof cc))return!1;const n=this._repo===e._repo,s=Dl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+cb(this._path)}}class Ln extends cc{constructor(e,n){super(e,n,new $l,!1)}get parent(){const e=zf(this._path);return e===null?null:new Ln(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class qr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new pe(e),s=qa(this.ref,e);return new qr(this._node.getChild(n),s,Pe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new qr(i,qa(this.ref,s),Pe)))}hasChild(e){const n=new pe(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ja(t,e){return t=Mt(t),t._checkNotDeleted("ref"),qa(t._root,e)}function qa(t,e){return t=Mt(t),ee(t._path)===null?eE("child","path",e):Cp("child","path",e),new Ln(t._repo,ke(t._path,e))}function EE(t,e){ZC("update",e,t._path);const n=new vo;return uE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class uc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new yE("value",this,new qr(e.snapshotNode,new Ln(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new bE(this,e,n):null}matches(e){return e instanceof uc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function IE(t,e,n,s,i){const r=new CE(n,void 0),o=new uc(r);return hE(t._repo,t,o),()=>fE(t._repo,t,o)}function xp(t,e,n,s){return IE(t,"value",e)}bC(Ln);kC(Ln);/**
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
 */const SE="FIREBASE_DATABASE_EMULATOR_HOST",za={};let TE=!1;function kE(t,e,n,s){t.repoInfo_=new Bf(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function PE(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||un("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),Be("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=od(r,i),a=o.repoInfo,l;typeof process<"u"&&Tu&&(l=Tu[SE]),l?(r=`http://${l}?ns=${a.namespace}`,o=od(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new By(t.name,t.options,e);tE("Invalid Firebase Database URL",o),te(o.path)||un("Database URL must point to the root of a Firebase Database (not including a child path).");const u=RE(a,t,c,new Ly(t,n));return new xE(u,t)}function AE(t,e){const n=za[e];(!n||n[t.key]!==t)&&un(`Database ${e}(${t.repoInfo_}) has already been deleted.`),pE(t),delete n[t.key]}function RE(t,e,n,s){let i=za[e.name];i||(i={},za[e.name]=i);let r=i[t.toURLString()];return r&&un("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new oE(t,TE,n,s),i[t.toURLString()]=r,r}class xE{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(aE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Ln(this._repo,ae())),this._rootInternal}_delete(){return this._rootInternal!==null&&(AE(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&un("Cannot call "+e+" on a deleted database.")}}function OE(t=yf(),e){const n=Pl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=zw("database");s&&NE(n,...s)}return n}function NE(t,e,n,s={}){t=Mt(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&Jn(s,r.repoInfo_.emulatorOptions))return;un("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&un('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new gr(gr.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Gw(s.mockUserToken,t.app.options.projectId);o=new gr(a)}kE(r,i,s,o)}/**
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
 */function ME(t){yy(Gs),Ms(new Xn("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return PE(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Pn(ku,Pu,t),Pn(ku,Pu,"esm2017")}an.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};an.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};ME();function dc(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Op(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const DE=Op,Np=new qi("auth","Firebase",Op());/**
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
 */const zr=new Tl("@firebase/auth");function LE(t,...e){zr.logLevel<=fe.WARN&&zr.warn(`Auth (${Gs}): ${t}`,...e)}function _r(t,...e){zr.logLevel<=fe.ERROR&&zr.error(`Auth (${Gs}): ${t}`,...e)}/**
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
 */function Gt(t,...e){throw fc(t,...e)}function Ot(t,...e){return fc(t,...e)}function hc(t,e,n){const s=Object.assign(Object.assign({},DE()),{[e]:n});return new qi("auth","Firebase",s).create(e,{appName:t.name})}function Gn(t){return hc(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function BE(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Gt(t,"argument-error"),hc(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function fc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return Np.create(t,...e)}function j(t,e,...n){if(!t)throw fc(e,...n)}function sn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw _r(e),new Error(e)}function hn(t,e){t||sn(e)}/**
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
 */function Ga(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function FE(){return ad()==="http:"||ad()==="https:"}function ad(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function $E(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(FE()||Yw()||"connection"in navigator)?navigator.onLine:!0}function UE(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qi{constructor(e,n){this.shortDelay=e,this.longDelay=n,hn(n>e,"Short delay should be less than long delay!"),this.isMobile=Il()||mf()}get(){return $E()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function pc(t,e){hn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Mp{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;sn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;sn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;sn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const HE={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const VE=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],WE=new Qi(3e4,6e4);function mc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Js(t,e,n,s,i={}){return Dp(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=zs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return Kw()||(c.referrerPolicy="no-referrer"),Mp.fetch()(await Lp(t,t.config.apiHost,n,a),c)})}async function Dp(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},HE),e);try{const i=new qE(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw dr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw dr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw dr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw dr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw hc(t,u,c);Gt(t,u)}}catch(i){if(i instanceof Dn)throw i;Gt(t,"network-request-failed",{message:String(i)})}}async function jE(t,e,n,s,i={}){const r=await Js(t,e,n,s,i);return"mfaPendingCredential"in r&&Gt(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function Lp(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?pc(t.config,i):`${t.config.apiScheme}://${i}`;return VE.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class qE{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Ot(this.auth,"network-request-failed")),WE.get())})}}function dr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Ot(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function zE(t,e){return Js(t,"POST","/v1/accounts:delete",e)}async function Gr(t,e){return Js(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ci(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function GE(t,e=!1){const n=Mt(t),s=await n.getIdToken(e),i=gc(s);j(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ci(aa(i.auth_time)),issuedAtTime:Ci(aa(i.iat)),expirationTime:Ci(aa(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function aa(t){return Number(t)*1e3}function gc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return _r("JWT malformed, contained fewer than 3 sections"),null;try{const i=Rr(n);return i?JSON.parse(i):(_r("Failed to decode base64 JWT payload"),null)}catch(i){return _r("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function ld(t){const e=gc(t);return j(e,"internal-error"),j(typeof e.exp<"u","internal-error"),j(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function Ui(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Dn&&KE(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function KE({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class YE{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class Ka{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ci(this.lastLoginAt),this.creationTime=Ci(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Kr(t){var e;const n=t.auth,s=await t.getIdToken(),i=await Ui(t,Gr(n,{idToken:s}));j(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?Bp(r.providerUserInfo):[],a=JE(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ka(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function QE(t){const e=Mt(t);await Kr(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function JE(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function Bp(t){return t.map(e=>{var{providerId:n}=e,s=dc(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function XE(t,e){const n=await Dp(t,{},async()=>{const s=zs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await Lp(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Mp.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function ZE(t,e){return Js(t,"POST","/v2/accounts:revokeToken",mc(t,e))}/**
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
 */class ks{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){j(e.idToken,"internal-error"),j(typeof e.idToken<"u","internal-error"),j(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):ld(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){j(e.length!==0,"internal-error");const n=ld(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(j(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await XE(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new ks;return s&&(j(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(j(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(j(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ks,this.toJSON())}_performRefresh(){return sn("not implemented")}}/**
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
 */function pn(t,e){j(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class At{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=dc(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new YE(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ka(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await Ui(this,this.stsTokenManager.getToken(this.auth,e));return j(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return GE(this,e)}reload(){return QE(this)}_assign(e){this!==e&&(j(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new At(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){j(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await Kr(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(St(this.auth.app))return Promise.reject(Gn(this.auth));const e=await this.getIdToken();return await Ui(this,zE(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,w=(o=n.photoURL)!==null&&o!==void 0?o:void 0,b=(a=n.tenantId)!==null&&a!==void 0?a:void 0,M=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,D=(c=n.createdAt)!==null&&c!==void 0?c:void 0,O=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:L,emailVerified:N,isAnonymous:re,providerData:Se,stsTokenManager:he}=n;j(L&&he,e,"internal-error");const Xe=ks.fromJSON(this.name,he);j(typeof L=="string",e,"internal-error"),pn(d,e.name),pn(h,e.name),j(typeof N=="boolean",e,"internal-error"),j(typeof re=="boolean",e,"internal-error"),pn(m,e.name),pn(w,e.name),pn(b,e.name),pn(M,e.name),pn(D,e.name),pn(O,e.name);const Ze=new At({uid:L,auth:e,email:h,emailVerified:N,displayName:d,isAnonymous:re,photoURL:w,phoneNumber:m,tenantId:b,stsTokenManager:Xe,createdAt:D,lastLoginAt:O});return Se&&Array.isArray(Se)&&(Ze.providerData=Se.map(et=>Object.assign({},et))),M&&(Ze._redirectEventId=M),Ze}static async _fromIdTokenResponse(e,n,s=!1){const i=new ks;i.updateFromServerResponse(n);const r=new At({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await Kr(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];j(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?Bp(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new ks;a.updateFromIdToken(s);const l=new At({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new Ka(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const cd=new Map;function rn(t){hn(t instanceof Function,"Expected a class definition");let e=cd.get(t);return e?(hn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,cd.set(t,e),e)}/**
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
 */class Fp{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Fp.type="NONE";const ud=Fp;/**
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
 */function wr(t,e,n){return`firebase:${t}:${e}:${n}`}class Ps{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=wr(this.userKey,i.apiKey,r),this.fullPersistenceKey=wr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await Gr(this.auth,{idToken:e}).catch(()=>{});return n?At._fromGetAccountInfoResponse(this.auth,n,e):null}return At._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ps(rn(ud),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||rn(ud);const o=wr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const h=await Gr(e,{idToken:u}).catch(()=>{});if(!h)break;d=await At._fromGetAccountInfoResponse(e,h,u)}else d=At._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ps(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ps(r,e,s))}}/**
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
 */function dd(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Vp(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if($p(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(jp(e))return"Blackberry";if(qp(e))return"Webos";if(Up(e))return"Safari";if((e.includes("chrome/")||Hp(e))&&!e.includes("edge/"))return"Chrome";if(Wp(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function $p(t=Ye()){return/firefox\//i.test(t)}function Up(t=Ye()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Hp(t=Ye()){return/crios\//i.test(t)}function Vp(t=Ye()){return/iemobile/i.test(t)}function Wp(t=Ye()){return/android/i.test(t)}function jp(t=Ye()){return/blackberry/i.test(t)}function qp(t=Ye()){return/webos/i.test(t)}function _c(t=Ye()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function e0(t=Ye()){var e;return _c(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function t0(){return Qw()&&document.documentMode===10}function zp(t=Ye()){return _c(t)||Wp(t)||qp(t)||jp(t)||/windows phone/i.test(t)||Vp(t)}/**
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
 */function Gp(t,e=[]){let n;switch(t){case"Browser":n=dd(Ye());break;case"Worker":n=`${dd(Ye())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Gs}/${s}`}/**
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
 */class n0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function s0(t,e={}){return Js(t,"GET","/v2/passwordPolicy",mc(t,e))}/**
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
 */const i0=6;class r0{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:i0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class o0{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new hd(this),this.idTokenSubscription=new hd(this),this.beforeStateQueue=new n0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Np,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=rn(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await Ps.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await Gr(this,{idToken:e}),s=await At._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(St(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return j(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Kr(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=UE()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(St(this.app))return Promise.reject(Gn(this));const n=e?Mt(e):null;return n&&j(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&j(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return St(this.app)?Promise.reject(Gn(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return St(this.app)?Promise.reject(Gn(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(rn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await s0(this),n=new r0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new qi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await ZE(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&rn(e)||this._popupRedirectResolver;j(n,this,"argument-error"),this.redirectPersistenceManager=await Ps.create(this,[rn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(j(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return j(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Gp(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(St(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&LE(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Po(t){return Mt(t)}class hd{constructor(e){this.auth=e,this.observer=null,this.addObserver=ov(n=>this.observer=n)}get next(){return j(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let wc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function a0(t){wc=t}function l0(t){return wc.loadJS(t)}function c0(){return wc.gapiScript}function u0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function d0(t,e){const n=Pl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(Jn(r,e??{}))return i;Gt(i,"already-initialized")}return n.initialize({options:e})}function h0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(rn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function f0(t,e,n){const s=Po(t);j(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=Kp(e),{host:o,port:a}=p0(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){j(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),j(Jn(c,s.config.emulator)&&Jn(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,m0()}function Kp(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function p0(t){const e=Kp(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:fd(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:fd(o)}}}function fd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function m0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class Yp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return sn("not implemented")}_getIdTokenResponse(e){return sn("not implemented")}_linkToIdToken(e,n){return sn("not implemented")}_getReauthenticationResolver(e){return sn("not implemented")}}/**
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
 */async function As(t,e){return jE(t,"POST","/v1/accounts:signInWithIdp",mc(t,e))}/**
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
 */const g0="http://localhost";class ss extends Yp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new ss(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Gt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=dc(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new ss(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return As(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,As(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,As(e,n)}buildRequest(){const e={requestUri:g0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=zs(n)}return e}}/**
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
 */class vc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Ji extends vc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class yn extends Ji{constructor(){super("facebook.com")}static credential(e){return ss._fromParams({providerId:yn.PROVIDER_ID,signInMethod:yn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return yn.credentialFromTaggedObject(e)}static credentialFromError(e){return yn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return yn.credential(e.oauthAccessToken)}catch{return null}}}yn.FACEBOOK_SIGN_IN_METHOD="facebook.com";yn.PROVIDER_ID="facebook.com";/**
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
 */class tn extends Ji{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return ss._fromParams({providerId:tn.PROVIDER_ID,signInMethod:tn.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return tn.credentialFromTaggedObject(e)}static credentialFromError(e){return tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return tn.credential(n,s)}catch{return null}}}tn.GOOGLE_SIGN_IN_METHOD="google.com";tn.PROVIDER_ID="google.com";/**
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
 */class bn extends Ji{constructor(){super("github.com")}static credential(e){return ss._fromParams({providerId:bn.PROVIDER_ID,signInMethod:bn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return bn.credentialFromTaggedObject(e)}static credentialFromError(e){return bn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return bn.credential(e.oauthAccessToken)}catch{return null}}}bn.GITHUB_SIGN_IN_METHOD="github.com";bn.PROVIDER_ID="github.com";/**
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
 */class Cn extends Ji{constructor(){super("twitter.com")}static credential(e,n){return ss._fromParams({providerId:Cn.PROVIDER_ID,signInMethod:Cn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Cn.credentialFromTaggedObject(e)}static credentialFromError(e){return Cn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return Cn.credential(n,s)}catch{return null}}}Cn.TWITTER_SIGN_IN_METHOD="twitter.com";Cn.PROVIDER_ID="twitter.com";/**
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
 */class $s{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await At._fromIdTokenResponse(e,s,i),o=pd(s);return new $s({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=pd(s);return new $s({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function pd(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class Yr extends Dn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,Yr.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new Yr(e,n,s,i)}}function Qp(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Yr._fromErrorAndOperation(t,r,e,s):r})}async function _0(t,e,n=!1){const s=await Ui(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return $s._forOperation(t,"link",s)}/**
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
 */async function w0(t,e,n=!1){const{auth:s}=t;if(St(s.app))return Promise.reject(Gn(s));const i="reauthenticate";try{const r=await Ui(t,Qp(s,i,e,t),n);j(r.idToken,s,"internal-error");const o=gc(r.idToken);j(o,s,"internal-error");const{sub:a}=o;return j(t.uid===a,s,"user-mismatch"),$s._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Gt(s,"user-mismatch"),r}}/**
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
 */async function v0(t,e,n=!1){if(St(t.app))return Promise.reject(Gn(t));const s="signIn",i=await Qp(t,s,e),r=await $s._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function y0(t,e,n,s){return Mt(t).onIdTokenChanged(e,n,s)}function b0(t,e,n){return Mt(t).beforeAuthStateChanged(e,n)}function C0(t){return Mt(t).signOut()}const Qr="__sak";/**
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
 */class Jp{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Qr,"1"),this.storage.removeItem(Qr),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const E0=1e3,I0=10;class Xp extends Jp{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=zp(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);t0()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,I0):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},E0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Xp.type="LOCAL";const S0=Xp;/**
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
 */class Zp extends Jp{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Zp.type="SESSION";const em=Zp;/**
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
 */function T0(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Ao{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Ao(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await T0(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ao.receivers=[];/**
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
 */function yc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class k0{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=yc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function qt(){return window}function P0(t){qt().location.href=t}/**
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
 */function tm(){return typeof qt().WorkerGlobalScope<"u"&&typeof qt().importScripts=="function"}async function A0(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function R0(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function x0(){return tm()?self:null}/**
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
 */const nm="firebaseLocalStorageDb",O0=1,Jr="firebaseLocalStorage",sm="fbase_key";class Xi{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ro(t,e){return t.transaction([Jr],e?"readwrite":"readonly").objectStore(Jr)}function N0(){const t=indexedDB.deleteDatabase(nm);return new Xi(t).toPromise()}function Ya(){const t=indexedDB.open(nm,O0);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(Jr,{keyPath:sm})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(Jr)?e(s):(s.close(),await N0(),e(await Ya()))})})}async function md(t,e,n){const s=Ro(t,!0).put({[sm]:e,value:n});return new Xi(s).toPromise()}async function M0(t,e){const n=Ro(t,!1).get(e),s=await new Xi(n).toPromise();return s===void 0?null:s.value}function gd(t,e){const n=Ro(t,!0).delete(e);return new Xi(n).toPromise()}const D0=800,L0=3;class im{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ya(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>L0)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return tm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ao._getInstance(x0()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await A0(),!this.activeServiceWorker)return;this.sender=new k0(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||R0()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ya();return await md(e,Qr,"1"),await gd(e,Qr),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>md(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>M0(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>gd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Ro(i,!1).getAll();return new Xi(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),D0)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}im.type="LOCAL";const B0=im;new Qi(3e4,6e4);/**
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
 */function rm(t,e){return e?rn(e):(j(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class bc extends Yp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return As(e,this._buildIdpRequest())}_linkToIdToken(e,n){return As(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return As(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function F0(t){return v0(t.auth,new bc(t),t.bypassAuthState)}function $0(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),w0(n,new bc(t),t.bypassAuthState)}async function U0(t){const{auth:e,user:n}=t;return j(n,e,"internal-error"),_0(n,new bc(t),t.bypassAuthState)}/**
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
 */class om{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return F0;case"linkViaPopup":case"linkViaRedirect":return U0;case"reauthViaPopup":case"reauthViaRedirect":return $0;default:Gt(this.auth,"internal-error")}}resolve(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){hn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const H0=new Qi(2e3,1e4);async function V0(t,e,n){if(St(t.app))return Promise.reject(Ot(t,"operation-not-supported-in-this-environment"));const s=Po(t);BE(t,e,vc);const i=rm(s,n);return new qn(s,"signInViaPopup",e,i).executeNotNull()}class qn extends om{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,qn.currentPopupAction&&qn.currentPopupAction.cancel(),qn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return j(e,this.auth,"internal-error"),e}async onExecution(){hn(this.filter.length===1,"Popup operations only handle one event");const e=yc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Ot(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Ot(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,qn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Ot(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,H0.get())};e()}}qn.currentPopupAction=null;/**
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
 */const W0="pendingRedirect",vr=new Map;class j0 extends om{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=vr.get(this.auth._key());if(!e){try{const s=await q0(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}vr.set(this.auth._key(),e)}return this.bypassAuthState||vr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function q0(t,e){const n=K0(e),s=G0(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function z0(t,e){vr.set(t._key(),e)}function G0(t){return rn(t._redirectPersistence)}function K0(t){return wr(W0,t.config.apiKey,t.name)}async function Y0(t,e,n=!1){if(St(t.app))return Promise.reject(Gn(t));const s=Po(t),i=rm(s,e),o=await new j0(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const Q0=10*60*1e3;class J0{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!X0(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!am(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Ot(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Q0&&this.cachedEventUids.clear(),this.cachedEventUids.has(_d(e))}saveEventToCache(e){this.cachedEventUids.add(_d(e)),this.lastProcessedEventTime=Date.now()}}function _d(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function am({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function X0(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return am(t);default:return!1}}/**
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
 */async function Z0(t,e={}){return Js(t,"GET","/v1/projects",e)}/**
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
 */const eI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,tI=/^https?/;async function nI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Z0(t);for(const n of e)try{if(sI(n))return}catch{}Gt(t,"unauthorized-domain")}function sI(t){const e=Ga(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!tI.test(n))return!1;if(eI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const iI=new Qi(3e4,6e4);function wd(){const t=qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function rI(t){return new Promise((e,n)=>{var s,i,r;function o(){wd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{wd(),n(Ot(t,"network-request-failed"))},timeout:iI.get()})}if(!((i=(s=qt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=qt().gapi)===null||r===void 0)&&r.load)o();else{const a=u0("iframefcb");return qt()[a]=()=>{gapi.load?o():n(Ot(t,"network-request-failed"))},l0(`${c0()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw yr=null,e})}let yr=null;function oI(t){return yr=yr||rI(t),yr}/**
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
 */const aI=new Qi(5e3,15e3),lI="__/auth/iframe",cI="emulator/auth/iframe",uI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},dI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function hI(t){const e=t.config;j(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?pc(e,cI):`https://${t.config.authDomain}/${lI}`,s={apiKey:e.apiKey,appName:t.name,v:Gs},i=dI.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${zs(s).slice(1)}`}async function fI(t){const e=await oI(t),n=qt().gapi;return j(n,t,"internal-error"),e.open({where:document.body,url:hI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:uI,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Ot(t,"network-request-failed"),a=qt().setTimeout(()=>{r(o)},aI.get());function l(){qt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const pI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},mI=500,gI=600,_I="_blank",wI="http://localhost";class vd{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function vI(t,e,n,s=mI,i=gI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},pI),{width:s.toString(),height:i.toString(),top:r,left:o}),c=Ye().toLowerCase();n&&(a=Hp(c)?_I:n),$p(c)&&(e=e||wI,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,w])=>`${h}${m}=${w},`,"");if(e0(c)&&a!=="_self")return yI(e||"",a),new vd(null);const d=window.open(e||"",a,u);j(d,t,"popup-blocked");try{d.focus()}catch{}return new vd(d)}function yI(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const bI="__/auth/handler",CI="emulator/auth/handler",EI=encodeURIComponent("fac");async function yd(t,e,n,s,i,r){j(t.config.authDomain,t,"auth-domain-config-required"),j(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Gs,eventId:i};if(e instanceof vc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ta(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof Ji){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${EI}=${encodeURIComponent(l)}`:"";return`${II(t)}?${zs(a).slice(1)}${c}`}function II({config:t}){return t.emulator?pc(t,CI):`https://${t.authDomain}/${bI}`}/**
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
 */const la="webStorageSupport";class SI{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=em,this._completeRedirectFn=Y0,this._overrideRedirectResult=z0}async _openPopup(e,n,s,i){var r;hn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await yd(e,n,s,Ga(),i);return vI(e,o,yc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await yd(e,n,s,Ga(),i);return P0(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(hn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await fI(e),s=new J0(e);return n.register("authEvent",i=>(j(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(la,{type:la},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[la];o!==void 0&&n(!!o),Gt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=nI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return zp()||Up()||_c()}}const TI=SI;var bd="@firebase/auth",Cd="1.10.0";/**
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
 */class kI{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){j(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function PI(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function AI(t){Ms(new Xn("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;j(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Gp(t)},c=new o0(s,i,r,l);return h0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Ms(new Xn("auth-internal",e=>{const n=Po(e.getProvider("auth").getImmediate());return(s=>new kI(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Pn(bd,Cd,PI(t)),Pn(bd,Cd,"esm2017")}/**
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
 */const RI=5*60,xI=pf("authIdTokenMaxAge")||RI;let Ed=null;const OI=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>xI)return;const i=n==null?void 0:n.token;Ed!==i&&(Ed=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function NI(t=yf()){const e=Pl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=d0(t,{popupRedirectResolver:TI,persistence:[B0,S0,em]}),s=pf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=OI(r.toString());b0(n,o,()=>o(n.currentUser)),y0(n,a=>o(a))}}const i=hf("auth");return i&&f0(n,`http://${i}`),n}function MI(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}a0({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Ot("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",MI().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});AI("Browser");const DI={apiKey:"AIzaSyBA6z3KtW9-3XxqvvsudpSPOls0isD7xx8",authDomain:"lax-scoreboard.firebaseapp.com",databaseURL:"https://lax-scoreboard-default-rtdb.firebaseio.com",projectId:"lax-scoreboard",storageBucket:"lax-scoreboard.appspot.com",messagingSenderId:"560143102921",appId:"1:560143102921:web:6e3a5d98726cecceeeae18"},lm=vf(DI),Qa=OE(lm),br=NI(lm),xo=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},LI={data(){return{user:null,isAllowed:!1,allowedEmails:["jonny5v@gmail.com"],isPublicView:!1}},created(){br.onAuthStateChanged(t=>{this.user=t,this.user?this.isAllowed=this.allowedEmails.includes(this.user.email):this.isAllowed=!1})},methods:{loginWithGoogle(){const t=new tn;V0(br,t).then(e=>{const n=e.user;console.log("User signed in: ",n)}).catch(e=>{console.error("Error during Google sign-in: ",e)})},logout(){C0(br).then(()=>{console.log("User signed out"),this.$router.push("/")}).catch(t=>{console.error("Error signing out:",t)})}}},BI={class:"navbar fixed-bottom bg-dark"},FI={class:"container-fluid"},$I={class:"float-start m-2"},UI={class:"float-end m-2"},HI={key:2};function VI(t,e,n,s,i,r){const o=qc("router-view"),a=qc("router-link");return Z(),ne("div",null,[Te(o),F("nav",BI,[F("div",FI,[F("div",$I,[F("button",{class:"btn btn-secondary btn-sm me-2",onClick:e[0]||(e[0]=(...l)=>t.exportData&&t.exportData(...l))}," Export Data "),F("button",{class:"btn btn-success btn-sm",onClick:e[1]||(e[1]=(...l)=>t.newGame&&t.newGame(...l))}," New Game ")]),F("div",UI,[Te(a,{to:"/",class:"btn btn-secondary btn-sm me-2"},{default:va(()=>e[4]||(e[4]=[Ai("Public")])),_:1}),i.user&&i.isAllowed?(Z(),tf(a,{key:0,to:"/control",class:"btn btn-primary btn-sm me-2"},{default:va(()=>e[5]||(e[5]=[Ai("Control")])),_:1})):Ve("",!0),i.user?Ve("",!0):(Z(),ne("button",{key:1,class:"btn btn-danger btn-sm",onClick:e[2]||(e[2]=(...l)=>r.loginWithGoogle&&r.loginWithGoogle(...l))},"Login to Access Controls")),i.user&&!i.isAllowed?(Z(),ne("p",HI,"You are not authorized to access this content.")):Ve("",!0),i.user?(Z(),ne("button",{key:3,class:"btn btn-danger btn-sm",onClick:e[3]||(e[3]=(...l)=>r.logout&&r.logout(...l))},"Logout")):Ve("",!0)])])])])}const WI=xo(LI,[["render",VI]]);/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const ms=typeof document<"u";function cm(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function jI(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&cm(t.default)}const le=Object.assign;function ca(t,e){const n={};for(const s in e){const i=e[s];n[s]=Nt(i)?i.map(t):t(i)}return n}const Ei=()=>{},Nt=Array.isArray,um=/#/g,qI=/&/g,zI=/\//g,GI=/=/g,KI=/\?/g,dm=/\+/g,YI=/%5B/g,QI=/%5D/g,hm=/%5E/g,JI=/%60/g,fm=/%7B/g,XI=/%7C/g,pm=/%7D/g,ZI=/%20/g;function Cc(t){return encodeURI(""+t).replace(XI,"|").replace(YI,"[").replace(QI,"]")}function eS(t){return Cc(t).replace(fm,"{").replace(pm,"}").replace(hm,"^")}function Ja(t){return Cc(t).replace(dm,"%2B").replace(ZI,"+").replace(um,"%23").replace(qI,"%26").replace(JI,"`").replace(fm,"{").replace(pm,"}").replace(hm,"^")}function tS(t){return Ja(t).replace(GI,"%3D")}function nS(t){return Cc(t).replace(um,"%23").replace(KI,"%3F")}function sS(t){return t==null?"":nS(t).replace(zI,"%2F")}function Hi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const iS=/\/$/,rS=t=>t.replace(iS,"");function ua(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=cS(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Hi(o)}}function oS(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Id(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function aS(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Us(e.matched[s],n.matched[i])&&mm(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Us(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function mm(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!lS(t[n],e[n]))return!1;return!0}function lS(t,e){return Nt(t)?Sd(t,e):Nt(e)?Sd(e,t):t===e}function Sd(t,e){return Nt(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function cS(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const mn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Vi;(function(t){t.pop="pop",t.push="push"})(Vi||(Vi={}));var Ii;(function(t){t.back="back",t.forward="forward",t.unknown=""})(Ii||(Ii={}));function uS(t){if(!t)if(ms){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),rS(t)}const dS=/^[^#]+#/;function hS(t,e){return t.replace(dS,"#")+e}function fS(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Oo=()=>({left:window.scrollX,top:window.scrollY});function pS(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=fS(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Td(t,e){return(history.state?history.state.position-e:-1)+t}const Xa=new Map;function mS(t,e){Xa.set(t,e)}function gS(t){const e=Xa.get(t);return Xa.delete(t),e}let _S=()=>location.protocol+"//"+location.host;function gm(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Id(l,"")}return Id(n,t)+s+i}function wS(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const m=gm(t,location),w=n.value,b=e.value;let M=0;if(h){if(n.value=m,e.value=h,o&&o===w){o=null;return}M=b?h.position-b.position:0}else s(m);i.forEach(D=>{D(n.value,w,{delta:M,type:Vi.pop,direction:M?M>0?Ii.forward:Ii.back:Ii.unknown})})};function l(){o=n.value}function c(h){i.push(h);const m=()=>{const w=i.indexOf(h);w>-1&&i.splice(w,1)};return r.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(le({},h.state,{scroll:Oo()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function kd(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Oo():null}}function vS(t){const{history:e,location:n}=window,s={value:gm(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:_S()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(l,c){const u=le({},e.state,kd(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=le({},i.value,e.state,{forward:l,scroll:Oo()});r(u.current,u,!0);const d=le({},kd(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function yS(t){t=uS(t);const e=vS(t),n=wS(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=le({location:"",base:t,go:s,createHref:hS.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function bS(t){return typeof t=="string"||t&&typeof t=="object"}function _m(t){return typeof t=="string"||typeof t=="symbol"}const wm=Symbol("");var Pd;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(Pd||(Pd={}));function Hs(t,e){return le(new Error,{type:t,[wm]:!0},e)}function Xt(t,e){return t instanceof Error&&wm in t&&(e==null||!!(t.type&e))}const Ad="[^/]+?",CS={sensitive:!1,strict:!1,start:!0,end:!0},ES=/[.+*?^${}()[\]/\\]/g;function IS(t,e){const n=le({},CS,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace(ES,"\\$&"),m+=40;else if(h.type===1){const{value:w,repeatable:b,optional:M,regexp:D}=h;r.push({name:w,repeatable:b,optional:M});const O=D||Ad;if(O!==Ad){m+=10;try{new RegExp(`(${O})`)}catch(N){throw new Error(`Invalid custom RegExp for param "${w}" (${O}): `+N.message)}}let L=b?`((?:${O})(?:/(?:${O}))*)`:`(${O})`;d||(L=M&&c.length<2?`(?:/${L})`:"/"+L),M&&(L+="?"),i+=L,m+=20,M&&(m+=-8),b&&(m+=-20),O===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",w=r[h-1];d[w.name]=m&&w.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:w,repeatable:b,optional:M}=m,D=w in c?c[w]:"";if(Nt(D)&&!b)throw new Error(`Provided param "${w}" is an array but it is not repeatable (* or + modifiers)`);const O=Nt(D)?D.join("/"):D;if(!O)if(M)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${w}"`);u+=O}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function SS(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function vm(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=SS(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(Rd(s))return 1;if(Rd(i))return-1}return i.length-s.length}function Rd(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const TS={type:0,value:""},kS=/[a-zA-Z0-9_]/;function PS(t){if(!t)return[[]];if(t==="/")return[[TS]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:kS.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function AS(t,e,n){const s=IS(PS(t.path),n),i=le(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function RS(t,e){const n=[],s=new Map;e=Md({strict:!1,end:!0,sensitive:!1},e);function i(d){return s.get(d)}function r(d,h,m){const w=!m,b=Od(d);b.aliasOf=m&&m.record;const M=Md(e,d),D=[b];if("alias"in d){const N=typeof d.alias=="string"?[d.alias]:d.alias;for(const re of N)D.push(Od(le({},b,{components:m?m.record.components:b.components,path:re,aliasOf:m?m.record:b})))}let O,L;for(const N of D){const{path:re}=N;if(h&&re[0]!=="/"){const Se=h.record.path,he=Se[Se.length-1]==="/"?"":"/";N.path=h.record.path+(re&&he+re)}if(O=AS(N,h,M),m?m.alias.push(O):(L=L||O,L!==O&&L.alias.push(O),w&&d.name&&!Nd(O)&&o(d.name)),ym(O)&&l(O),b.children){const Se=b.children;for(let he=0;he<Se.length;he++)r(Se[he],O,m&&m.children[he])}m=m||O}return L?()=>{o(L)}:Ei}function o(d){if(_m(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const h=NS(d,n);n.splice(h,0,d),d.record.name&&!Nd(d)&&s.set(d.record.name,d)}function c(d,h){let m,w={},b,M;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw Hs(1,{location:d});M=m.record.name,w=le(xd(h.params,m.keys.filter(L=>!L.optional).concat(m.parent?m.parent.keys.filter(L=>L.optional):[]).map(L=>L.name)),d.params&&xd(d.params,m.keys.map(L=>L.name))),b=m.stringify(w)}else if(d.path!=null)b=d.path,m=n.find(L=>L.re.test(b)),m&&(w=m.parse(b),M=m.record.name);else{if(m=h.name?s.get(h.name):n.find(L=>L.re.test(h.path)),!m)throw Hs(1,{location:d,currentLocation:h});M=m.record.name,w=le({},h.params,d.params),b=m.stringify(w)}const D=[];let O=m;for(;O;)D.unshift(O.record),O=O.parent;return{name:M,path:b,params:w,matched:D,meta:OS(D)}}t.forEach(d=>r(d));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function xd(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function Od(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:xS(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function xS(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function Nd(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function OS(t){return t.reduce((e,n)=>le(e,n.meta),{})}function Md(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function NS(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;vm(t,e[r])<0?s=r:n=r+1}const i=MS(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function MS(t){let e=t;for(;e=e.parent;)if(ym(e)&&vm(t,e)===0)return e}function ym({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function DS(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(dm," "),o=r.indexOf("="),a=Hi(o<0?r:r.slice(0,o)),l=o<0?null:Hi(r.slice(o+1));if(a in e){let c=e[a];Nt(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function Dd(t){let e="";for(let n in t){const s=t[n];if(n=tS(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Nt(s)?s.map(r=>r&&Ja(r)):[s&&Ja(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function LS(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Nt(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const BS=Symbol(""),Ld=Symbol(""),Ec=Symbol(""),bm=Symbol(""),Za=Symbol("");function ci(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function wn(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Hs(4,{from:n,to:e})):h instanceof Error?l(h):bS(h)?l(Hs(2,{from:e,to:h})):(o&&s.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(h=>l(h))})}function da(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(cm(l)){const u=(l.__vccOpts||l)[e];u&&r.push(wn(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=jI(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&wn(m,n,s,o,a,i)()}))}}return r}function Bd(t){const e=on(Ec),n=on(bm),s=It(()=>{const l=ys(t.to);return e.resolve(l)}),i=It(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Us.bind(null,u));if(h>-1)return h;const m=Fd(l[c-2]);return c>1&&Fd(u)===m&&d[d.length-1].path!==m?d.findIndex(Us.bind(null,l[c-2])):h}),r=It(()=>i.value>-1&&VS(n.params,s.value.params)),o=It(()=>i.value>-1&&i.value===n.matched.length-1&&mm(n.params,s.value.params));function a(l={}){if(HS(l)){const c=e[ys(t.replace)?"replace":"push"](ys(t.to)).catch(Ei);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:It(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function FS(t){return t.length===1?t[0]:t}const $S=Oh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Bd,setup(t,{slots:e}){const n=js(Bd(t)),{options:s}=on(Ec),i=It(()=>({[$d(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[$d(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&FS(e.default(n));return t.custom?r:of("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),US=$S;function HS(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function VS(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Nt(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function Fd(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const $d=(t,e,n)=>t??e??n,WS=Oh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=on(Za),i=It(()=>t.route||s.value),r=on(Ld,0),o=It(()=>{let c=ys(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=It(()=>i.value.matched[o.value]);fr(Ld,It(()=>o.value+1)),fr(BS,a),fr(Za,i);const l=Ce();return Es(()=>[l.value,a.value,t.name],([c,u,d],[h,m,w])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Us(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(b=>b(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return Ud(n.default,{Component:h,route:c});const m=d.props[u],w=m?m===!0?c.params:typeof m=="function"?m(c):m:null,M=of(h,le({},w,e,{onVnodeUnmounted:D=>{D.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return Ud(n.default,{Component:M,route:c})||M}}});function Ud(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const jS=WS;function qS(t){const e=RS(t.routes,t),n=t.parseQuery||DS,s=t.stringifyQuery||Dd,i=t.history,r=ci(),o=ci(),a=ci(),l=Xg(mn);let c=mn;ms&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=ca.bind(null,y=>""+y),d=ca.bind(null,sS),h=ca.bind(null,Hi);function m(y,x){let A,B;return _m(y)?(A=e.getRecordMatcher(y),B=x):B=y,e.addRoute(B,A)}function w(y){const x=e.getRecordMatcher(y);x&&e.removeRoute(x)}function b(){return e.getRoutes().map(y=>y.record)}function M(y){return!!e.getRecordMatcher(y)}function D(y,x){if(x=le({},x||l.value),typeof y=="string"){const g=ua(n,y,x.path),v=e.resolve({path:g.path},x),E=i.createHref(g.fullPath);return le(g,v,{params:h(v.params),hash:Hi(g.hash),redirectedFrom:void 0,href:E})}let A;if(y.path!=null)A=le({},y,{path:ua(n,y.path,x.path).path});else{const g=le({},y.params);for(const v in g)g[v]==null&&delete g[v];A=le({},y,{params:d(g)}),x.params=d(x.params)}const B=e.resolve(A,x),me=y.hash||"";B.params=u(h(B.params));const f=oS(s,le({},y,{hash:eS(me),path:B.path})),p=i.createHref(f);return le({fullPath:f,hash:me,query:s===Dd?LS(y.query):y.query||{}},B,{redirectedFrom:void 0,href:p})}function O(y){return typeof y=="string"?ua(n,y,l.value.path):le({},y)}function L(y,x){if(c!==y)return Hs(8,{from:x,to:y})}function N(y){return he(y)}function re(y){return N(le(O(y),{replace:!0}))}function Se(y){const x=y.matched[y.matched.length-1];if(x&&x.redirect){const{redirect:A}=x;let B=typeof A=="function"?A(y):A;return typeof B=="string"&&(B=B.includes("?")||B.includes("#")?B=O(B):{path:B},B.params={}),le({query:y.query,hash:y.hash,params:B.path!=null?{}:y.params},B)}}function he(y,x){const A=c=D(y),B=l.value,me=y.state,f=y.force,p=y.replace===!0,g=Se(A);if(g)return he(le(O(g),{state:typeof g=="object"?le({},me,g.state):me,force:f,replace:p}),x||A);const v=A;v.redirectedFrom=x;let E;return!f&&aS(s,B,A)&&(E=Hs(16,{to:v,from:B}),tt(B,B,!0,!1)),(E?Promise.resolve(E):et(v,B)).catch(C=>Xt(C)?Xt(C,2)?C:Lt(C):Q(C,v,B)).then(C=>{if(C){if(Xt(C,2))return he(le({replace:p},O(C.to),{state:typeof C.to=="object"?le({},me,C.to.state):me,force:f}),x||v)}else C=Qt(v,B,!0,p,me);return Dt(v,B,C),C})}function Xe(y,x){const A=L(y,x);return A?Promise.reject(A):Promise.resolve()}function Ze(y){const x=ds.values().next().value;return x&&typeof x.runWithContext=="function"?x.runWithContext(y):y()}function et(y,x){let A;const[B,me,f]=zS(y,x);A=da(B.reverse(),"beforeRouteLeave",y,x);for(const g of B)g.leaveGuards.forEach(v=>{A.push(wn(v,y,x))});const p=Xe.bind(null,y,x);return A.push(p),_t(A).then(()=>{A=[];for(const g of r.list())A.push(wn(g,y,x));return A.push(p),_t(A)}).then(()=>{A=da(me,"beforeRouteUpdate",y,x);for(const g of me)g.updateGuards.forEach(v=>{A.push(wn(v,y,x))});return A.push(p),_t(A)}).then(()=>{A=[];for(const g of f)if(g.beforeEnter)if(Nt(g.beforeEnter))for(const v of g.beforeEnter)A.push(wn(v,y,x));else A.push(wn(g.beforeEnter,y,x));return A.push(p),_t(A)}).then(()=>(y.matched.forEach(g=>g.enterCallbacks={}),A=da(f,"beforeRouteEnter",y,x,Ze),A.push(p),_t(A))).then(()=>{A=[];for(const g of o.list())A.push(wn(g,y,x));return A.push(p),_t(A)}).catch(g=>Xt(g,8)?g:Promise.reject(g))}function Dt(y,x,A){a.list().forEach(B=>Ze(()=>B(y,x,A)))}function Qt(y,x,A,B,me){const f=L(y,x);if(f)return f;const p=x===mn,g=ms?history.state:{};A&&(B||p?i.replace(y.fullPath,le({scroll:p&&g&&g.scroll},me)):i.push(y.fullPath,me)),l.value=y,tt(y,x,A,p),Lt()}let gt;function $(){gt||(gt=i.listen((y,x,A)=>{if(!rr.listening)return;const B=D(y),me=Se(B);if(me){he(le(me,{replace:!0,force:!0}),B).catch(Ei);return}c=B;const f=l.value;ms&&mS(Td(f.fullPath,A.delta),Oo()),et(B,f).catch(p=>Xt(p,12)?p:Xt(p,2)?(he(le(O(p.to),{force:!0}),B).then(g=>{Xt(g,20)&&!A.delta&&A.type===Vi.pop&&i.go(-1,!1)}).catch(Ei),Promise.reject()):(A.delta&&i.go(-A.delta,!1),Q(p,B,f))).then(p=>{p=p||Qt(B,f,!1),p&&(A.delta&&!Xt(p,8)?i.go(-A.delta,!1):A.type===Vi.pop&&Xt(p,20)&&i.go(-1,!1)),Dt(B,f,p)}).catch(Ei)}))}let J=ci(),q=ci(),z;function Q(y,x,A){Lt(y);const B=q.list();return B.length?B.forEach(me=>me(y,x,A)):console.error(y),Promise.reject(y)}function Et(){return z&&l.value!==mn?Promise.resolve():new Promise((y,x)=>{J.add([y,x])})}function Lt(y){return z||(z=!y,$(),J.list().forEach(([x,A])=>y?A(y):x()),J.reset()),y}function tt(y,x,A,B){const{scrollBehavior:me}=t;if(!ms||!me)return Promise.resolve();const f=!A&&gS(Td(y.fullPath,0))||(B||!A)&&history.state&&history.state.scroll||null;return kh().then(()=>me(y,x,f)).then(p=>p&&pS(p)).catch(p=>Q(p,y,x))}const nt=y=>i.go(y);let us;const ds=new Set,rr={currentRoute:l,listening:!0,addRoute:m,removeRoute:w,clearRoutes:e.clearRoutes,hasRoute:M,getRoutes:b,resolve:D,options:t,push:N,replace:re,go:nt,back:()=>nt(-1),forward:()=>nt(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:q.add,isReady:Et,install(y){const x=this;y.component("RouterLink",US),y.component("RouterView",jS),y.config.globalProperties.$router=x,Object.defineProperty(y.config.globalProperties,"$route",{enumerable:!0,get:()=>ys(l)}),ms&&!us&&l.value===mn&&(us=!0,N(i.location).catch(me=>{}));const A={};for(const me in mn)Object.defineProperty(A,me,{get:()=>l.value[me],enumerable:!0});y.provide(Ec,x),y.provide(bm,Ch(A)),y.provide(Za,l);const B=y.unmount;ds.add(y),y.unmount=function(){ds.delete(y),ds.size<1&&(c=mn,gt&&gt(),gt=null,l.value=mn,us=!1,z=!1),B()}}};function _t(y){return y.reduce((x,A)=>x.then(()=>Ze(A)),Promise.resolve())}return rr}function zS(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Us(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Us(c,l))||i.push(l))}return[n,s,i]}const GS={class:"container-fluid py-3"},KS={class:"row sticky-topbar text-center mb-4"},YS={class:"col-12 col-md-4"},QS={class:"side-clock-display"},JS={class:"col-12 col-md-4"},XS={class:"clock-display"},ZS={key:1},eT={class:"col-12 col-md-4"},tT={class:"side-clock-display shot-clock-seconds"},nT={key:1},sT={key:0,class:"text-center my-3"},iT={__name:"HeaderSection",props:["quarter","gameClock","shotClock","isClockRunning","isPublicView"],emits:["editClock"],setup(t,{emit:e}){const n=t;function s(o){const a=String(Math.floor(o/60)).padStart(2,"0"),l=String(o%60).padStart(2,"0");return`${a}:${l}`}const i=e,r=o=>{i("editClock",o)};return(o,a)=>(Z(),ne("div",GS,[F("div",KS,[F("div",YS,[a[9]||(a[9]=F("div",null,"Quarter",-1)),t.isPublicView?Ve("",!0):(Z(),ne("button",{key:0,class:"btn btn-outline-dark mt-2 me-2",onClick:a[0]||(a[0]=l=>o.$emit("adjustQuarter",-1))},a[7]||(a[7]=[F("i",{class:"bi bi-dash"},null,-1)]))),t.isPublicView?Ve("",!0):(Z(),ne("button",{key:1,class:"btn btn-outline-dark mt-2",onClick:a[1]||(a[1]=l=>o.$emit("adjustQuarter",1))},a[8]||(a[8]=[F("i",{class:"bi bi-plus"},null,-1)]))),F("div",QS,Ee(t.quarter),1)]),F("div",JS,[a[10]||(a[10]=F("div",null,"Game Clock",-1)),t.isPublicView?Ve("",!0):(Z(),ne("button",{key:0,class:"btn btn-danger btn-sm mx-1",onClick:a[2]||(a[2]=l=>o.$emit("resetClock","gameClock"))}," Reset Game ")),F("div",XS,[!t.isPublicView&&!t.isClockRunning?(Z(),ne("span",{key:0,class:"editable",onClick:a[3]||(a[3]=l=>r("gameClock"))},Ee(s(n.gameClock)),1)):(Z(),ne("span",ZS,Ee(s(n.gameClock)),1))])]),F("div",eT,[a[11]||(a[11]=F("div",null,"Shot Clock",-1)),t.isPublicView?Ve("",!0):(Z(),ne("button",{key:0,class:"btn btn-warning btn-sm mx-1",onClick:a[4]||(a[4]=l=>o.$emit("resetClock","shotClock"))}," Reset Shot ")),F("div",tT,[!t.isPublicView&&!t.isClockRunning?(Z(),ne("span",{key:0,class:"editable",onClick:a[5]||(a[5]=l=>r("shotClock"))},Ee(n.shotClock),1)):(Z(),ne("span",nT,Ee(n.shotClock),1))])]),t.isPublicView?Ve("",!0):(Z(),ne("div",sT,[F("button",{class:"btn btn-primary btn-sm mx-1",onClick:a[6]||(a[6]=l=>o.$emit("toggleClocks"))},[F("i",{class:fo(n.isClockRunning?"bi bi-pause-fill":"bi bi-play-fill")},null,2),Ai(" "+Ee(n.isClockRunning?"Stop":"Start"),1)])]))])]))}},Cm=xo(iT,[["__scopeId","data-v-a0114062"]]),rT={class:"col-6 border-end"},oT={key:1},aT={class:"score-display mb-2"},lT={key:0,class:"btn-group btn-group-sm mb-2"},cT={class:"mb-2"},uT={key:1,class:"btn-group btn-group-sm mb-3"},dT={class:"list-group"},hT={key:0,class:"badge bg-success"},fT=["onClick"],pT={__name:"TeamPanel",props:["teamLabel","score","timeouts","penalties","teamName","isClockRunning","isPublicView"],setup(t){return(e,n)=>(Z(),ne("div",rT,[F("h4",null,[!t.isPublicView&&!t.isClockRunning?(Z(),ne("span",{key:0,onClick:n[0]||(n[0]=s=>e.$emit("editName")),class:"editable"},Ee(t.teamName),1)):(Z(),ne("span",oT,Ee(t.teamName),1))]),F("div",aT,Ee(t.score),1),t.isPublicView?Ve("",!0):(Z(),ne("div",lT,[F("button",{class:"btn btn-danger btn-lg",onClick:n[1]||(n[1]=s=>e.$emit("adjustScore",-1))},n[5]||(n[5]=[F("i",{class:"bi bi-dash-circle"},null,-1)])),F("button",{class:"btn btn-success btn-lg",onClick:n[2]||(n[2]=s=>e.$emit("adjustScore",1))},n[6]||(n[6]=[F("i",{class:"bi bi-plus-circle"},null,-1)]))])),F("div",cT,"Timeouts: "+Ee(t.timeouts),1),t.isPublicView?Ve("",!0):(Z(),ne("div",uT,[F("button",{class:"btn btn-outline-secondary",onClick:n[3]||(n[3]=s=>e.$emit("adjustTimeout",-1))},n[7]||(n[7]=[F("i",{class:"bi bi-dash"},null,-1)])),F("button",{class:"btn btn-outline-secondary",onClick:n[4]||(n[4]=s=>e.$emit("adjustTimeout",1))},n[8]||(n[8]=[F("i",{class:"bi bi-plus"},null,-1)]))])),n[10]||(n[10]=F("h6",null,"Penalties",-1)),F("ul",dT,[(Z(!0),ne(wt,null,wl(t.penalties,(s,i)=>(Z(),ne("li",{key:i,class:"list-group-item d-flex justify-content-between align-items-center"},[Ai(Ee(s.player?`#${s.player}`:"Player")+" - "+Ee(s.category)+" ("+Ee(s.remaining)+"s) ",1),s.releasable?(Z(),ne("span",hT,"Releasable")):Ve("",!0),t.isPublicView?Ve("",!0):(Z(),ne("button",{key:1,class:"btn btn-sm btn-danger removeBtn",onClick:r=>e.$emit("removePenalty",i)},n[9]||(n[9]=[F("i",{class:"bi bi-x"},null,-1)]),8,fT))]))),128))])]))}},Hd=xo(pT,[["__scopeId","data-v-3af79e8a"]]),mT={class:"row text-center align-items-start mb-4"},Em={__name:"ScoreSection",props:["score","timeouts","home","away","activePenalties","isClockRunning","isPublicView"],setup(t){return(e,n)=>(Z(),ne("div",mT,[Te(Hd,{teamLabel:"home",score:t.score.home,timeouts:t.timeouts.home,penalties:t.activePenalties.filter(s=>s.team==="home"),isClockRunning:t.isClockRunning,teamName:t.home,isPublicView:t.isPublicView,onAdjustScore:n[0]||(n[0]=s=>e.$emit("adjustScore","home",s)),onAdjustTimeout:n[1]||(n[1]=s=>e.$emit("adjustTimeout","home",s)),onEditName:n[2]||(n[2]=()=>e.$emit("editName","home")),onRemovePenalty:n[3]||(n[3]=s=>e.$emit("removePenalty",s,"home"))},null,8,["score","timeouts","penalties","isClockRunning","teamName","isPublicView"]),Te(Hd,{teamLabel:"away",score:t.score.away,timeouts:t.timeouts.away,penalties:t.activePenalties.filter(s=>s.team==="away"),isClockRunning:t.isClockRunning,teamName:t.away,isPublicView:t.isPublicView,onAdjustScore:n[4]||(n[4]=s=>e.$emit("adjustScore","away",s)),onAdjustTimeout:n[5]||(n[5]=s=>e.$emit("adjustTimeout","away",s)),onEditName:n[6]||(n[6]=()=>e.$emit("editName","away")),onRemovePenalty:n[7]||(n[7]=s=>e.$emit("removePenalty",s,"away"))},null,8,["score","timeouts","penalties","isClockRunning","teamName","isPublicView"])]))}},gT={class:"container-fluid py-3"},_T={__name:"PublicViewer",setup(t){const e=Ce({home:0,away:0}),n=Ce({home:2,away:2}),s=Ce(720),i=Ce(80),r=Ce(!1),o=Ce(1),a=Ce("Home"),l=Ce("Away"),c=Ce([]);return gl(()=>{const u=ja(Qa,"/scoreboard");xp(u,d=>{const h=d.val();h&&(e.value=h.score,n.value=h.timeouts,s.value=h.gameClock,i.value=h.shotClock,r.value=h.isClockRunning,o.value=h.quarter,a.value=h.home,l.value=h.away,c.value=JSON.parse(h.activePenalties||[]))})}),(u,d)=>(Z(),ne("div",gT,[Te(Cm,{quarter:o.value,gameClock:s.value,shotClock:i.value,isClockRunning:r.value,isPublicView:!0},null,8,["quarter","gameClock","shotClock","isClockRunning"]),Te(Em,{score:e.value,timeouts:n.value,home:a.value,away:l.value,activePenalties:c.value,isClockRunning:!0,isPublicView:!0},null,8,["score","timeouts","home","away","activePenalties"])]))}};/*!
* sweetalert2 v11.17.2
* Released under the MIT License.
*/function Im(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function wT(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function Vd(t,e){return t.get(Im(t,e))}function vT(t,e,n){wT(t,e),e.set(t,n)}function yT(t,e,n){return t.set(Im(t,e),n),n}const bT=100,H={},CT=()=>{H.previousActiveElement instanceof HTMLElement?(H.previousActiveElement.focus(),H.previousActiveElement=null):document.body&&document.body.focus()},ET=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;H.restoreFocusTimeout=setTimeout(()=>{CT(),e()},bT),window.scrollTo(n,s)}),Sm="swal2-",IT=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],_=IT.reduce((t,e)=>(t[e]=Sm+e,t),{}),ST=["success","warning","info","question","error"],Xr=ST.reduce((t,e)=>(t[e]=Sm+e,t),{}),Tm="SweetAlert2:",Ic=t=>t.charAt(0).toUpperCase()+t.slice(1),Qe=t=>{console.warn(`${Tm} ${typeof t=="object"?t.join(" "):t}`)},ls=t=>{console.error(`${Tm} ${t}`)},Wd=[],TT=t=>{Wd.includes(t)||(Wd.push(t),Qe(t))},km=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;TT(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},No=t=>typeof t=="function"?t():t,Sc=t=>t&&typeof t.toPromise=="function",Zi=t=>Sc(t)?t.toPromise():Promise.resolve(t),Tc=t=>t&&Promise.resolve(t)===t,Je=()=>document.body.querySelector(`.${_.container}`),er=t=>{const e=Je();return e?e.querySelector(t):null},pt=t=>er(`.${t}`),oe=()=>pt(_.popup),Xs=()=>pt(_.icon),kT=()=>pt(_["icon-content"]),Pm=()=>pt(_.title),kc=()=>pt(_["html-container"]),Am=()=>pt(_.image),Pc=()=>pt(_["progress-steps"]),Mo=()=>pt(_["validation-message"]),Kt=()=>er(`.${_.actions} .${_.confirm}`),Zs=()=>er(`.${_.actions} .${_.cancel}`),cs=()=>er(`.${_.actions} .${_.deny}`),PT=()=>pt(_["input-label"]),ei=()=>er(`.${_.loader}`),tr=()=>pt(_.actions),Rm=()=>pt(_.footer),Do=()=>pt(_["timer-progress-bar"]),Ac=()=>pt(_.close),AT=`
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
`,Rc=()=>{const t=oe();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),s=t.querySelectorAll(AT),i=Array.from(s).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(i))].filter(r=>at(r))},xc=()=>ln(document.body,_.shown)&&!ln(document.body,_["toast-shown"])&&!ln(document.body,_["no-backdrop"]),Lo=()=>{const t=oe();return t?ln(t,_.toast):!1},RT=()=>{const t=oe();return t?t.hasAttribute("data-loading"):!1},mt=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html"),i=s.querySelector("head");i&&Array.from(i.childNodes).forEach(o=>{t.appendChild(o)});const r=s.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},ln=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},xT=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(_).includes(n)&&!Object.values(Xr).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},ft=(t,e,n)=>{if(xT(t,e),!e.customClass)return;const s=e.customClass[n];if(s){if(typeof s!="string"&&!s.forEach){Qe(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof s}"`);return}ie(t,s)}},Bo=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${_.popup} > .${_[e]}`);case"checkbox":return t.querySelector(`.${_.popup} > .${_.checkbox} input`);case"radio":return t.querySelector(`.${_.popup} > .${_.radio} input:checked`)||t.querySelector(`.${_.popup} > .${_.radio} input:first-child`);case"range":return t.querySelector(`.${_.popup} > .${_.range} input`);default:return t.querySelector(`.${_.popup} > .${_.input}`)}},xm=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Om=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},ie=(t,e)=>{Om(t,e,!0)},Ct=(t,e)=>{Om(t,e,!1)},En=(t,e)=>{const n=Array.from(t.children);for(let s=0;s<n.length;s++){const i=n[s];if(i instanceof HTMLElement&&ln(i,e))return i}},Kn=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},Le=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";t&&(t.style.display=e)},ze=t=>{t&&(t.style.display="none")},Oc=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";t&&new MutationObserver(()=>{nr(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},jd=(t,e,n,s)=>{const i=t.querySelector(e);i&&i.style.setProperty(n,s)},nr=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";e?Le(t,n):ze(t)},at=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),OT=()=>!at(Kt())&&!at(cs())&&!at(Zs()),qd=t=>t.scrollHeight>t.clientHeight,Nm=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Nc=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=Do();n&&at(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},NT=()=>{const t=Do();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.width=`${s}%`},MT=()=>typeof window>"u"||typeof document>"u",DT=`
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
`.replace(/(^|\n)\s*/g,""),LT=()=>{const t=Je();return t?(t.remove(),Ct([document.documentElement,document.body],[_["no-backdrop"],_["toast-shown"],_["has-column"]]),!0):!1},$n=()=>{H.currentInstance.resetValidationMessage()},BT=()=>{const t=oe(),e=En(t,_.input),n=En(t,_.file),s=t.querySelector(`.${_.range} input`),i=t.querySelector(`.${_.range} output`),r=En(t,_.select),o=t.querySelector(`.${_.checkbox} input`),a=En(t,_.textarea);e.oninput=$n,n.onchange=$n,r.onchange=$n,o.onchange=$n,a.oninput=$n,s.oninput=()=>{$n(),i.value=s.value},s.onchange=()=>{$n(),i.value=s.value}},FT=t=>typeof t=="string"?document.querySelector(t):t,$T=t=>{const e=oe();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},UT=t=>{window.getComputedStyle(t).direction==="rtl"&&ie(Je(),_.rtl)},HT=t=>{const e=LT();if(MT()){ls("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=_.container,e&&ie(n,_["no-transition"]),mt(n,DT),n.dataset.swal2Theme=t.theme;const s=FT(t.target);s.appendChild(n),$T(t),UT(s),BT()},Mc=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?VT(t,e):t&&mt(e,t)},VT=(t,e)=>{t.jquery?WT(e,t):mt(e,t.toString())},WT=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},jT=(t,e)=>{const n=tr(),s=ei();!n||!s||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?ze(n):Le(n),ft(n,e,"actions"),qT(n,s,e),mt(s,e.loaderHtml||""),ft(s,e,"loader"))};function qT(t,e,n){const s=Kt(),i=cs(),r=Zs();!s||!i||!r||(ha(s,"confirm",n),ha(i,"deny",n),ha(r,"cancel",n),zT(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e))))}function zT(t,e,n,s){if(!s.buttonsStyling){Ct([t,e,n],_.styled);return}ie([t,e,n],_.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,ie(t,_["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,ie(e,_["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,ie(n,_["default-outline"]))}function ha(t,e,n){const s=Ic(e);nr(t,n[`show${s}Button`],"inline-block"),mt(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=_[e],ft(t,n,`${e}Button`)}const GT=(t,e)=>{const n=Ac();n&&(mt(n,e.closeButtonHtml||""),ft(n,e,"closeButton"),nr(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},KT=(t,e)=>{const n=Je();n&&(YT(n,e.backdrop),QT(n,e.position),JT(n,e.grow),ft(n,e,"container"))};function YT(t,e){typeof e=="string"?t.style.background=e:e||ie([document.documentElement,document.body],_["no-backdrop"])}function QT(t,e){e&&(e in _?ie(t,_[e]):(Qe('The "position" parameter is not valid, defaulting to "center"'),ie(t,_.center)))}function JT(t,e){e&&ie(t,_[`grow-${e}`])}var be={innerParams:new WeakMap,domCache:new WeakMap};const XT=["input","file","range","select","radio","checkbox","textarea"],ZT=(t,e)=>{const n=oe();if(!n)return;const s=be.innerParams.get(t),i=!s||e.input!==s.input;XT.forEach(r=>{const o=En(n,_[r]);o&&(nk(r,e.inputAttributes),o.className=_[r],i&&ze(o))}),e.input&&(i&&ek(e),sk(e))},ek=t=>{if(!t.input)return;if(!Re[t.input]){ls(`Unexpected type of input! Expected ${Object.keys(Re).join(" | ")}, got "${t.input}"`);return}const e=Mm(t.input);if(!e)return;const n=Re[t.input](e,t);Le(e),t.inputAutoFocus&&setTimeout(()=>{xm(n)})},tk=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},nk=(t,e)=>{const n=oe();if(!n)return;const s=Bo(n,t);if(s){tk(s);for(const i in e)s.setAttribute(i,e[i])}},sk=t=>{if(!t.input)return;const e=Mm(t.input);e&&ft(e,t,"input")},Dc=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},sr=(t,e,n)=>{if(n.inputLabel){const s=document.createElement("label"),i=_["input-label"];s.setAttribute("for",t.id),s.className=i,typeof n.customClass=="object"&&ie(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},Mm=t=>{const e=oe();if(e)return En(e,_[t]||_.input)},Zr=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Tc(e)||Qe(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Re={};Re.text=Re.email=Re.password=Re.number=Re.tel=Re.url=Re.search=Re.date=Re["datetime-local"]=Re.time=Re.week=Re.month=(t,e)=>(Zr(t,e.inputValue),sr(t,t,e),Dc(t,e),t.type=e.input,t);Re.file=(t,e)=>(sr(t,t,e),Dc(t,e),t);Re.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return Zr(n,e.inputValue),n.type=e.input,Zr(s,e.inputValue),sr(n,t,e),t};Re.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");mt(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return sr(t,t,e),t};Re.radio=t=>(t.textContent="",t);Re.checkbox=(t,e)=>{const n=Bo(oe(),"checkbox");n.value="1",n.checked=!!e.inputValue;const s=t.querySelector("span");return mt(s,e.inputPlaceholder||e.inputLabel),n};Re.textarea=(t,e)=>{Zr(t,e.inputValue),Dc(t,e),sr(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(oe()).width),i=()=>{if(!document.body.contains(t))return;const r=t.offsetWidth+n(t);r>s?oe().style.width=`${r}px`:Kn(oe(),"width",e.width)};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const ik=(t,e)=>{const n=kc();n&&(Oc(n),ft(n,e,"htmlContainer"),e.html?(Mc(e.html,n),Le(n,"block")):e.text?(n.textContent=e.text,Le(n,"block")):ze(n),ZT(t,e))},rk=(t,e)=>{const n=Rm();n&&(Oc(n),nr(n,e.footer,"block"),e.footer&&Mc(e.footer,n),ft(n,e,"footer"))},ok=(t,e)=>{const n=be.innerParams.get(t),s=Xs();if(!s)return;if(n&&e.icon===n.icon){Gd(s,e),zd(s,e);return}if(!e.icon&&!e.iconHtml){ze(s);return}if(e.icon&&Object.keys(Xr).indexOf(e.icon)===-1){ls(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),ze(s);return}Le(s),Gd(s,e),zd(s,e),ie(s,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Dm)},zd=(t,e)=>{for(const[n,s]of Object.entries(Xr))e.icon!==n&&Ct(t,s);ie(t,e.icon&&Xr[e.icon]),ck(t,e),Dm(),ft(t,e,"icon")},Dm=()=>{const t=oe();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},ak=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,lk=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,Gd=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,s="";e.iconHtml?s=Kd(e.iconHtml):e.icon==="success"?(s=ak,n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?s=lk:e.icon&&(s=Kd({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==s.trim()&&mt(t,s)},ck=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])jd(t,n,"background-color",e.iconColor);jd(t,".swal2-success-ring","border-color",e.iconColor)}},Kd=t=>`<div class="${_["icon-content"]}">${t}</div>`,uk=(t,e)=>{const n=Am();if(n){if(!e.imageUrl){ze(n);return}Le(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),Kn(n,"width",e.imageWidth),Kn(n,"height",e.imageHeight),n.className=_.image,ft(n,e,"image")}};let Lc=!1,Lm=0,Bm=0,Fm=0,$m=0;const dk=t=>{t.addEventListener("mousedown",eo),document.body.addEventListener("mousemove",to),t.addEventListener("mouseup",no),t.addEventListener("touchstart",eo),document.body.addEventListener("touchmove",to),t.addEventListener("touchend",no)},hk=t=>{t.removeEventListener("mousedown",eo),document.body.removeEventListener("mousemove",to),t.removeEventListener("mouseup",no),t.removeEventListener("touchstart",eo),document.body.removeEventListener("touchmove",to),t.removeEventListener("touchend",no)},eo=t=>{const e=oe();if(t.target===e||Xs().contains(t.target)){Lc=!0;const n=Um(t);Lm=n.clientX,Bm=n.clientY,Fm=parseInt(e.style.insetInlineStart)||0,$m=parseInt(e.style.insetBlockStart)||0,ie(e,"swal2-dragging")}},to=t=>{const e=oe();if(Lc){let{clientX:n,clientY:s}=Um(t);e.style.insetInlineStart=`${Fm+(n-Lm)}px`,e.style.insetBlockStart=`${$m+(s-Bm)}px`}},no=()=>{const t=oe();Lc=!1,Ct(t,"swal2-dragging")},Um=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},fk=(t,e)=>{const n=Je(),s=oe();if(!(!n||!s)){if(e.toast){Kn(n,"width",e.width),s.style.width="100%";const i=ei();i&&s.insertBefore(i,Xs())}else Kn(s,"width",e.width);Kn(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),ze(Mo()),pk(s,e),e.draggable&&!e.toast?(ie(s,_.draggable),dk(s)):(Ct(s,_.draggable),hk(s))}},pk=(t,e)=>{const n=e.showClass||{};t.className=`${_.popup} ${at(t)?n.popup:""}`,e.toast?(ie([document.documentElement,document.body],_["toast-shown"]),ie(t,_.toast)):ie(t,_.modal),ft(t,e,"popup"),typeof e.customClass=="string"&&ie(t,e.customClass),e.icon&&ie(t,_[`icon-${e.icon}`])},mk=(t,e)=>{const n=Pc();if(!n)return;const{progressSteps:s,currentProgressStep:i}=e;if(!s||s.length===0||i===void 0){ze(n);return}Le(n),n.textContent="",i>=s.length&&Qe("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.forEach((r,o)=>{const a=gk(r);if(n.appendChild(a),o===i&&ie(a,_["active-progress-step"]),o!==s.length-1){const l=_k(e);n.appendChild(l)}})},gk=t=>{const e=document.createElement("li");return ie(e,_["progress-step"]),mt(e,t),e},_k=t=>{const e=document.createElement("li");return ie(e,_["progress-step-line"]),t.progressStepsDistance&&Kn(e,"width",t.progressStepsDistance),e},wk=(t,e)=>{const n=Pm();n&&(Oc(n),nr(n,e.title||e.titleText,"block"),e.title&&Mc(e.title,n),e.titleText&&(n.innerText=e.titleText),ft(n,e,"title"))},Hm=(t,e)=>{fk(t,e),KT(t,e),mk(t,e),ok(t,e),uk(t,e),wk(t,e),GT(t,e),ik(t,e),jT(t,e),rk(t,e);const n=oe();typeof e.didRender=="function"&&n&&e.didRender(n),H.eventEmitter.emit("didRender",n)},vk=()=>at(oe()),Vm=()=>{var t;return(t=Kt())===null||t===void 0?void 0:t.click()},yk=()=>{var t;return(t=cs())===null||t===void 0?void 0:t.click()},bk=()=>{var t;return(t=Zs())===null||t===void 0?void 0:t.click()},ti=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Wm=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},Ck=(t,e,n)=>{Wm(t),e.toast||(t.keydownHandler=s=>Ik(e,s,n),t.keydownTarget=e.keydownListenerCapture?window:oe(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},el=(t,e)=>{var n;const s=Rc();if(s.length){t=t+e,t===s.length?t=0:t===-1&&(t=s.length-1),s[t].focus();return}(n=oe())===null||n===void 0||n.focus()},jm=["ArrowRight","ArrowDown"],Ek=["ArrowLeft","ArrowUp"],Ik=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?Sk(e,t):e.key==="Tab"?Tk(e):[...jm,...Ek].includes(e.key)?kk(e.key):e.key==="Escape"&&Pk(e,t,n)))},Sk=(t,e)=>{if(!No(e.allowEnterKey))return;const n=Bo(oe(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;Vm(),t.preventDefault()}},Tk=t=>{const e=t.target,n=Rc();let s=-1;for(let i=0;i<n.length;i++)if(e===n[i]){s=i;break}t.shiftKey?el(s,-1):el(s,1),t.stopPropagation(),t.preventDefault()},kk=t=>{const e=tr(),n=Kt(),s=cs(),i=Zs();if(!e||!n||!s||!i)return;const r=[n,s,i];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=jm.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&at(a))break}a instanceof HTMLButtonElement&&a.focus()}},Pk=(t,e,n)=>{No(e.allowEscapeKey)&&(t.preventDefault(),n(ti.esc))};var Vs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const Ak=()=>{const t=Je();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},qm=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},zm=typeof window<"u"&&!!window.GestureEvent,Rk=()=>{if(zm&&!ln(document.body,_.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,ie(document.body,_.iosfix),xk()}},xk=()=>{const t=Je();if(!t)return;let e;t.ontouchstart=n=>{e=Ok(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},Ok=t=>{const e=t.target,n=Je(),s=kc();return!n||!s||Nk(t)||Mk(t)?!1:e===n||!qd(n)&&e instanceof HTMLElement&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(qd(s)&&s.contains(e))},Nk=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",Mk=t=>t.touches&&t.touches.length>1,Dk=()=>{if(ln(document.body,_.iosfix)){const t=parseInt(document.body.style.top,10);Ct(document.body,_.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},Lk=()=>{const t=document.createElement("div");t.className=_["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Rs=null;const Bk=t=>{Rs===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Rs=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Rs+Lk()}px`)},Fk=()=>{Rs!==null&&(document.body.style.paddingRight=`${Rs}px`,Rs=null)};function Gm(t,e,n,s){Lo()?Yd(t,s):(ET(n).then(()=>Yd(t,s)),Wm(H)),zm?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),xc()&&(Fk(),Dk(),qm()),$k()}function $k(){Ct([document.documentElement,document.body],[_.shown,_["height-auto"],_["no-backdrop"],_["toast-shown"]])}function In(t){t=Hk(t);const e=Vs.swalPromiseResolve.get(this),n=Uk(this);this.isAwaitingPromise?t.isDismissed||(ir(this),e(t)):n&&e(t)}const Uk=t=>{const e=oe();if(!e)return!1;const n=be.innerParams.get(t);if(!n||ln(e,n.hideClass.popup))return!1;Ct(e,n.showClass.popup),ie(e,n.hideClass.popup);const s=Je();return Ct(s,n.showClass.backdrop),ie(s,n.hideClass.backdrop),Vk(t,e,n),!0};function Km(t){const e=Vs.swalPromiseReject.get(this);ir(this),e&&e(t)}const ir=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,be.innerParams.get(t)||t._destroy())},Hk=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),Vk=(t,e,n)=>{var s;const i=Je(),r=Nm(e);typeof n.willClose=="function"&&n.willClose(e),(s=H.eventEmitter)===null||s===void 0||s.emit("willClose",e),r?Wk(t,e,i,n.returnFocus,n.didClose):Gm(t,i,n.returnFocus,n.didClose)},Wk=(t,e,n,s,i)=>{H.swalCloseEventFinishedCallback=Gm.bind(null,t,n,s,i);const r=function(o){if(o.target===e){var a;(a=H.swalCloseEventFinishedCallback)===null||a===void 0||a.call(H),delete H.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},Yd=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=H.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},Ws=t=>{let e=oe();if(e||new Ae,e=oe(),!e)return;const n=ei();Lo()?ze(Xs()):jk(e,t),Le(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},jk=(t,e)=>{const n=tr(),s=ei();!n||!s||(!e&&at(Kt())&&(e=Kt()),Le(n),e&&(ze(e),s.setAttribute("data-button-to-replace",e.className),n.insertBefore(s,e)),ie([t,n],_.loading))},qk=(t,e)=>{e.input==="select"||e.input==="radio"?Qk(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Sc(e.inputValue)||Tc(e.inputValue))&&(Ws(Kt()),Jk(t,e))},zk=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return Gk(n);case"radio":return Kk(n);case"file":return Yk(n);default:return e.inputAutoTrim?n.value.trim():n.value}},Gk=t=>t.checked?1:0,Kk=t=>t.checked?t.value:null,Yk=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,Qk=(t,e)=>{const n=oe();if(!n)return;const s=i=>{e.input==="select"?Xk(n,so(i),e):e.input==="radio"&&Zk(n,so(i),e)};Sc(e.inputOptions)||Tc(e.inputOptions)?(Ws(Kt()),Zi(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):ls(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},Jk=(t,e)=>{const n=t.getInput();n&&(ze(n),Zi(e.inputValue).then(s=>{n.value=e.input==="number"?`${parseFloat(s)||0}`:`${s}`,Le(n),n.focus(),t.hideLoading()}).catch(s=>{ls(`Error in inputValue promise: ${s}`),n.value="",Le(n),n.focus(),t.hideLoading()}))};function Xk(t,e,n){const s=En(t,_.select);if(!s)return;const i=(r,o,a)=>{const l=document.createElement("option");l.value=a,mt(l,o),l.selected=Ym(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()}function Zk(t,e,n){const s=En(t,_.radio);if(!s)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=_.radio,l.value=o,Ym(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");mt(u,a),u.className=_.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}const so=t=>{const e=[];return t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=so(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=so(s)),e.push([n,s])}),e},Ym=(t,e)=>!!e&&e.toString()===t.toString(),eP=t=>{const e=be.innerParams.get(t);t.disableButtons(),e.input?Qm(t,"confirm"):Fc(t,!0)},tP=t=>{const e=be.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?Qm(t,"deny"):Bc(t,!1)},nP=(t,e)=>{t.disableButtons(),e(ti.cancel)},Qm=(t,e)=>{const n=be.innerParams.get(t);if(!n.input){ls(`The "input" parameter is needed to be set when using returnInputValueOn${Ic(e)}`);return}const s=t.getInput(),i=zk(t,n);n.inputValidator?sP(t,i,e):s&&!s.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||s.validationMessage)):e==="deny"?Bc(t,i):Fc(t,i)},sP=(t,e,n)=>{const s=be.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>Zi(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Bc(t,e):Fc(t,e)})},Bc=(t,e)=>{const n=be.innerParams.get(t||void 0);n.showLoaderOnDeny&&Ws(cs()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>Zi(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),ir(t)):t.close({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>Jm(t||void 0,i))):t.close({isDenied:!0,value:e})},Qd=(t,e)=>{t.close({isConfirmed:!0,value:e})},Jm=(t,e)=>{t.rejectPromise(e)},Fc=(t,e)=>{const n=be.innerParams.get(t||void 0);n.showLoaderOnConfirm&&Ws(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>Zi(n.preConfirm(e,n.validationMessage))).then(i=>{at(Mo())||i===!1?(t.hideLoading(),ir(t)):Qd(t,typeof i>"u"?e:i)}).catch(i=>Jm(t||void 0,i))):Qd(t,e)};function io(){const t=be.innerParams.get(this);if(!t)return;const e=be.domCache.get(this);ze(e.loader),Lo()?t.icon&&Le(Xs()):iP(e),Ct([e.popup,e.actions],_.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const iP=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?Le(e[0],"inline-block"):OT()&&ze(t.actions)};function Xm(){const t=be.innerParams.get(this),e=be.domCache.get(this);return e?Bo(e.popup,t.input):null}function Zm(t,e,n){const s=be.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function eg(t,e){const n=oe();if(!(!n||!t))if(t.type==="radio"){const s=n.querySelectorAll(`[name="${_.radio}"]`);for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function tg(){Zm(this,["confirmButton","denyButton","cancelButton"],!1)}function ng(){Zm(this,["confirmButton","denyButton","cancelButton"],!0)}function sg(){eg(this.getInput(),!1)}function ig(){eg(this.getInput(),!0)}function rg(t){const e=be.domCache.get(this),n=be.innerParams.get(this);mt(e.validationMessage,t),e.validationMessage.className=_["validation-message"],n.customClass&&n.customClass.validationMessage&&ie(e.validationMessage,n.customClass.validationMessage),Le(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid","true"),s.setAttribute("aria-describedby",_["validation-message"]),xm(s),ie(s,_.inputerror))}function og(){const t=be.domCache.get(this);t.validationMessage&&ze(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),Ct(e,_.inputerror))}const xs={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},rP=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],oP={allowEnterKey:void 0},aP=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],ag=t=>Object.prototype.hasOwnProperty.call(xs,t),lg=t=>rP.indexOf(t)!==-1,cg=t=>oP[t],lP=t=>{ag(t)||Qe(`Unknown parameter "${t}"`)},cP=t=>{aP.includes(t)&&Qe(`The parameter "${t}" is incompatible with toasts`)},uP=t=>{const e=cg(t);e&&km(t,e)},ug=t=>{t.backdrop===!1&&t.allowOutsideClick&&Qe('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","borderless"].includes(t.theme)&&Qe(`Invalid theme "${t.theme}". Expected "light", "dark", "auto", or "borderless"`);for(const e in t)lP(e),t.toast&&cP(e),uP(e)};function dg(t){const e=Je(),n=oe(),s=be.innerParams.get(this);if(!n||ln(n,s.hideClass.popup)){Qe("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const i=dP(t),r=Object.assign({},s,i);ug(r),e.dataset.swal2Theme=r.theme,Hm(this,r),be.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const dP=t=>{const e={};return Object.keys(t).forEach(n=>{lg(n)?e[n]=t[n]:Qe(`Invalid parameter to update: ${n}`)}),e};function hg(){const t=be.domCache.get(this),e=be.innerParams.get(this);if(!e){fg(this);return}t.popup&&H.swalCloseEventFinishedCallback&&(H.swalCloseEventFinishedCallback(),delete H.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),H.eventEmitter.emit("didDestroy"),hP(this)}const hP=t=>{fg(t),delete t.params,delete H.keydownHandler,delete H.keydownTarget,delete H.currentInstance},fg=t=>{t.isAwaitingPromise?(fa(be,t),t.isAwaitingPromise=!0):(fa(Vs,t),fa(be,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},fa=(t,e)=>{for(const n in t)t[n].delete(e)};var fP=Object.freeze({__proto__:null,_destroy:hg,close:In,closeModal:In,closePopup:In,closeToast:In,disableButtons:ng,disableInput:ig,disableLoading:io,enableButtons:tg,enableInput:sg,getInput:Xm,handleAwaitingPromise:ir,hideLoading:io,rejectPromise:Km,resetValidationMessage:og,showValidationMessage:rg,update:dg});const pP=(t,e,n)=>{t.toast?mP(t,e,n):(_P(e),wP(e),vP(t,e,n))},mP=(t,e,n)=>{e.popup.onclick=()=>{t&&(gP(t)||t.timer||t.input)||n(ti.close)}},gP=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let ro=!1;const _P=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(ro=!0)}}},wP=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(ro=!0)}}},vP=(t,e,n)=>{e.container.onclick=s=>{if(ro){ro=!1;return}s.target===e.container&&No(t.allowOutsideClick)&&n(ti.backdrop)}},yP=t=>typeof t=="object"&&t.jquery,Jd=t=>t instanceof Element||yP(t),bP=t=>{const e={};return typeof t[0]=="object"&&!Jd(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||Jd(i)?e[n]=i:i!==void 0&&ls(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function CP(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new this(...e)}function EP(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const IP=()=>H.timeout&&H.timeout.getTimerLeft(),pg=()=>{if(H.timeout)return NT(),H.timeout.stop()},mg=()=>{if(H.timeout){const t=H.timeout.start();return Nc(t),t}},SP=()=>{const t=H.timeout;return t&&(t.running?pg():mg())},TP=t=>{if(H.timeout){const e=H.timeout.increase(t);return Nc(e,!0),e}},kP=()=>!!(H.timeout&&H.timeout.isRunning());let Xd=!1;const tl={};function PP(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";tl[t]=this,Xd||(document.body.addEventListener("click",AP),Xd=!0)}const AP=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in tl){const s=e.getAttribute(n);if(s){tl[n].fire({template:s});return}}};class RP{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const s=this._getHandlersByEventName(e);s.includes(n)||s.push(n)}once(e,n){var s=this;const i=function(){s.removeListener(e,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];n.apply(s,o)};this.on(e,i)}emit(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];this._getHandlersByEventName(e).forEach(r=>{try{r.apply(this,s)}catch(o){console.error(o)}})}removeListener(e,n){const s=this._getHandlersByEventName(e),i=s.indexOf(n);i>-1&&s.splice(i,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}H.eventEmitter=new RP;const xP=(t,e)=>{H.eventEmitter.on(t,e)},OP=(t,e)=>{H.eventEmitter.once(t,e)},NP=(t,e)=>{if(!t){H.eventEmitter.reset();return}e?H.eventEmitter.removeListener(t,e):H.eventEmitter.removeAllListeners(t)};var MP=Object.freeze({__proto__:null,argsToParams:bP,bindClickHandler:PP,clickCancel:bk,clickConfirm:Vm,clickDeny:yk,enableLoading:Ws,fire:CP,getActions:tr,getCancelButton:Zs,getCloseButton:Ac,getConfirmButton:Kt,getContainer:Je,getDenyButton:cs,getFocusableElements:Rc,getFooter:Rm,getHtmlContainer:kc,getIcon:Xs,getIconContent:kT,getImage:Am,getInputLabel:PT,getLoader:ei,getPopup:oe,getProgressSteps:Pc,getTimerLeft:IP,getTimerProgressBar:Do,getTitle:Pm,getValidationMessage:Mo,increaseTimer:TP,isDeprecatedParameter:cg,isLoading:RT,isTimerRunning:kP,isUpdatableParameter:lg,isValidParameter:ag,isVisible:vk,mixin:EP,off:NP,on:xP,once:OP,resumeTimer:mg,showLoading:Ws,stopTimer:pg,toggleTimer:SP});class DP{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const gg=["swal-title","swal-html","swal-footer"],LP=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return jP(n),Object.assign(BP(n),FP(n),$P(n),UP(n),HP(n),VP(n),WP(n,gg))},BP=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(s=>{is(s,["name","value"]);const i=s.getAttribute("name"),r=s.getAttribute("value");!i||!r||(typeof xs[i]=="boolean"?e[i]=r!=="false":typeof xs[i]=="object"?e[i]=JSON.parse(r):e[i]=r)}),e},FP=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(s=>{const i=s.getAttribute("name"),r=s.getAttribute("value");!i||!r||(e[i]=new Function(`return ${r}`)())}),e},$P=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(s=>{is(s,["type","color","aria-label"]);const i=s.getAttribute("type");!i||!["confirm","cancel","deny"].includes(i)||(e[`${i}ButtonText`]=s.innerHTML,e[`show${Ic(i)}Button`]=!0,s.hasAttribute("color")&&(e[`${i}ButtonColor`]=s.getAttribute("color")),s.hasAttribute("aria-label")&&(e[`${i}ButtonAriaLabel`]=s.getAttribute("aria-label")))}),e},UP=t=>{const e={},n=t.querySelector("swal-image");return n&&(is(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},HP=t=>{const e={},n=t.querySelector("swal-icon");return n&&(is(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},VP=t=>{const e={},n=t.querySelector("swal-input");n&&(is(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=Array.from(t.querySelectorAll("swal-input-option"));return s.length&&(e.inputOptions={},s.forEach(i=>{is(i,["value"]);const r=i.getAttribute("value");if(!r)return;const o=i.innerHTML;e.inputOptions[r]=o})),e},WP=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(is(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},jP=t=>{const e=gg.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.includes(s)||Qe(`Unrecognized element <${s}>`)})},is=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&Qe([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},_g=10,qP=t=>{const e=Je(),n=oe();typeof t.willOpen=="function"&&t.willOpen(n),H.eventEmitter.emit("willOpen",n);const i=window.getComputedStyle(document.body).overflowY;KP(e,n,t),setTimeout(()=>{zP(e,n)},_g),xc()&&(GP(e,t.scrollbarPadding,i),Ak()),!Lo()&&!H.previousActiveElement&&(H.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),H.eventEmitter.emit("didOpen",n),Ct(e,_["no-transition"])},oo=t=>{const e=oe();if(t.target!==e)return;const n=Je();e.removeEventListener("animationend",oo),e.removeEventListener("transitionend",oo),n.style.overflowY="auto"},zP=(t,e)=>{Nm(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",oo),e.addEventListener("transitionend",oo)):t.style.overflowY="auto"},GP=(t,e,n)=>{Rk(),e&&n!=="hidden"&&Bk(n),setTimeout(()=>{t.scrollTop=0})},KP=(t,e,n)=>{ie(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),Le(e,"grid"),setTimeout(()=>{ie(e,n.showClass.popup),e.style.removeProperty("opacity")},_g)):Le(e,"grid"),ie([document.documentElement,document.body],_.shown),n.heightAuto&&n.backdrop&&!n.toast&&ie([document.documentElement,document.body],_["height-auto"])};var Zd={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function YP(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Zd.email),t.input==="url"&&(t.inputValidator=Zd.url))}function QP(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(Qe('Target parameter is not valid, defaulting to "body"'),t.target="body")}function JP(t){YP(t),t.showLoaderOnConfirm&&!t.preConfirm&&Qe(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),QP(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),HT(t)}let Vt;var hr=new WeakMap;class xe{constructor(){if(vT(this,hr,void 0),typeof window>"u")return;Vt=this;for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const i=Object.freeze(this.constructor.argsToParams(n));this.params=i,this.isAwaitingPromise=!1,yT(hr,this,this._main(Vt.params))}_main(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(ug(Object.assign({},n,e)),H.currentInstance){const r=Vs.swalPromiseResolve.get(H.currentInstance),{isAwaitingPromise:o}=H.currentInstance;H.currentInstance._destroy(),o||r({isDismissed:!0}),xc()&&qm()}H.currentInstance=Vt;const s=ZP(e,n);JP(s),Object.freeze(s),H.timeout&&(H.timeout.stop(),delete H.timeout),clearTimeout(H.restoreFocusTimeout);const i=eA(Vt);return Hm(Vt,s),be.innerParams.set(Vt,s),XP(Vt,i,s)}then(e){return Vd(hr,this).then(e)}finally(e){return Vd(hr,this).finally(e)}}const XP=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o})};Vs.swalPromiseResolve.set(t,s),Vs.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>{eP(t)},e.denyButton.onclick=()=>{tP(t)},e.cancelButton.onclick=()=>{nP(t,r)},e.closeButton.onclick=()=>{r(ti.close)},pP(n,e,r),Ck(H,n,r),qk(t,n),qP(n),tA(H,n,r),nA(e,n),setTimeout(()=>{e.container.scrollTop=0})}),ZP=(t,e)=>{const n=LP(t),s=Object.assign({},xs,e,n,t);return s.showClass=Object.assign({},xs.showClass,s.showClass),s.hideClass=Object.assign({},xs.hideClass,s.hideClass),s.animation===!1&&(s.showClass={backdrop:"swal2-noanimation"},s.hideClass={}),s},eA=t=>{const e={popup:oe(),container:Je(),actions:tr(),confirmButton:Kt(),denyButton:cs(),cancelButton:Zs(),loader:ei(),closeButton:Ac(),validationMessage:Mo(),progressSteps:Pc()};return be.domCache.set(t,e),e},tA=(t,e,n)=>{const s=Do();ze(s),e.timer&&(t.timeout=new DP(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(Le(s),ft(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Nc(e.timer)})))},nA=(t,e)=>{if(!e.toast){if(!No(e.allowEnterKey)){km("allowEnterKey"),rA();return}sA(t)||iA(t,e)||el(-1,1)}},sA=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&at(n))return n.focus(),!0;return!1},iA=(t,e)=>e.focusDeny&&at(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&at(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&at(t.confirmButton)?(t.confirmButton.focus(),!0):!1,rA=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}xe.prototype.disableButtons=ng;xe.prototype.enableButtons=tg;xe.prototype.getInput=Xm;xe.prototype.disableInput=ig;xe.prototype.enableInput=sg;xe.prototype.hideLoading=io;xe.prototype.disableLoading=io;xe.prototype.showValidationMessage=rg;xe.prototype.resetValidationMessage=og;xe.prototype.close=In;xe.prototype.closePopup=In;xe.prototype.closeModal=In;xe.prototype.closeToast=In;xe.prototype.rejectPromise=Km;xe.prototype.update=dg;xe.prototype._destroy=hg;Object.assign(xe,MP);Object.keys(fP).forEach(t=>{xe[t]=function(){return Vt&&Vt[t]?Vt[t](...arguments):null}});xe.DismissReason=ti;xe.version="11.17.2";const Ae=xe;Ae.default=Ae;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:var(--swal2-border-radius);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const oA={class:"mb-4"},aA={class:"row g-2"},lA={key:0,class:"col-12"},cA={class:"penalty-form mb-4"},uA={class:"list-group"},dA={__name:"PenaltyForm",props:["newPenalty","gameClock","activePenalties","expiredPenalties"],emits:["addPenalty","clearPenalties"],setup(t,{emit:e}){const n=t,s=e,i=js({...n.newPenalty});Es(()=>n.newPenalty,l=>{Object.assign(i,l)});const r=()=>{Ae.fire({title:"Add Penalty",html:`
      <div class="row g-2">
        <div class="col-4">
          <label>Player</label>
          <input id="player" class="form-control form-control-sm" type="text" placeholder="Player #" value="${i.player}" />
        </div>
        <div class="col-6 offset-2">
          <label>Releasable</label>
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-success active" id="yesBtn">Yes</button>
            <button class="btn btn-outline-success" id="noBtn">No</button>
          </div>
        </div>
        <div class="col-6">
          <label>Team</label>
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-primary active" id="homeBtn">Home</button>
            <button class="btn btn-outline-primary" id="awayBtn">Away</button>
          </div>
        </div>
        <div class="col-6">
          <label>Duration</label>
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-danger active" id="30sBtn">30s</button>
            <button class="btn btn-outline-danger" id="1minBtn">1:00</button>
            <button class="btn btn-outline-danger" id="2minBtn">2:00</button>
          </div>
        </div>
        <div class="col-12">
          <label>Penalty Category</label>
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-dark active" id="crosscheckBtn">Crosscheck</button>
            <button class="btn btn-outline-dark" id="slashBtn">Slash</button>
            <button class="btn btn-outline-dark" id="tripBtn">Trip</button>
            <button class="btn btn-outline-dark" id="roughnessBtn">Unnecessary Roughness</button>
            <button class="btn btn-outline-dark" id="otherBtn">Other</button>
          </div>
        </div>
      </div>
    `,showCancelButton:!0,confirmButtonText:"Add Penalty",cancelButtonText:"Cancel",preConfirm:()=>{const l=document.getElementById("player").value,c=i.releasable,u=i.team,d=i.duration,h=i.category;return n.activePenalties.find(w=>w.player===l)?(Ae.showValidationMessage("This player already has an active penalty."),!1):l?{player:l,releasable:c,team:u,duration:d,category:h}:(Ae.showValidationMessage("Player # is required"),!1)}}).then(l=>{l.isConfirmed&&s("addPenalty",{...l.value,startGameClock:n.gameClock,endGameClock:n.gameClock-l.value.duration})}),setTimeout(()=>{document.getElementById("yesBtn").addEventListener("click",()=>{i.releasable=!0,o("yesBtn","noBtn")}),document.getElementById("noBtn").addEventListener("click",()=>{i.releasable=!1,o("noBtn","yesBtn")}),document.getElementById("homeBtn").addEventListener("click",()=>{i.team="home",o("homeBtn","awayBtn")}),document.getElementById("awayBtn").addEventListener("click",()=>{i.team="away",o("awayBtn","homeBtn")}),document.getElementById("30sBtn").addEventListener("click",()=>{i.duration=30,o("30sBtn","1minBtn","2minBtn")}),document.getElementById("1minBtn").addEventListener("click",()=>{i.duration=60,o("1minBtn","30sBtn","2minBtn")}),document.getElementById("2minBtn").addEventListener("click",()=>{i.duration=120,o("2minBtn","30sBtn","1minBtn")}),document.getElementById("crosscheckBtn").addEventListener("click",()=>{i.category="crosscheck",o("crosscheckBtn","slashBtn","tripBtn","roughnessBtn","otherBtn")}),document.getElementById("slashBtn").addEventListener("click",()=>{i.category="slash",o("slashBtn","crosscheckBtn","tripBtn","roughnessBtn","otherBtn")}),document.getElementById("tripBtn").addEventListener("click",()=>{i.category="trip",o("tripBtn","crosscheckBtn","slashBtn","roughnessBtn","otherBtn")}),document.getElementById("roughnessBtn").addEventListener("click",()=>{i.category="unnecessaryroughness",o("roughnessBtn","crosscheckBtn","slashBtn","tripBtn","otherBtn")}),document.getElementById("otherBtn").addEventListener("click",()=>{i.category="other",o("otherBtn","crosscheckBtn","slashBtn","tripBtn","roughnessBtn")})},100)},o=(...l)=>{l.forEach(u=>{document.getElementById(u).classList.remove("active")});const c=document.getElementById(`${l[0]}`);c&&c.classList.add("active")};function a(l){const c=String(Math.floor(l/60)).padStart(2,"0"),u=String(l%60).padStart(2,"0");return`${c}:${u}`}return(l,c)=>(Z(),ne("div",oA,[F("div",aA,[F("div",{class:"col-12"},[F("button",{class:"btn btn-primary w-100 mb-2",onClick:r}," Add Penalty ")]),t.expiredPenalties.length>0?(Z(),ne("div",lA,[F("div",cA,[c[1]||(c[1]=F("h5",{class:"text-center"},"Expired Penalties",-1)),F("ul",uA,[(Z(!0),ne(wt,null,wl(t.expiredPenalties,(u,d)=>(Z(),ne("li",{key:d,class:"list-group-item"},Ee(u.team)+" "+Ee(u.player?`- #${u.player}`:"")+" | "+Ee(u.category)+" | "+Ee(a(u.startGameClock))+" → "+Ee(a(u.endGameClock)),1))),128))]),t.expiredPenalties.length>0?(Z(),ne("button",{key:0,class:"btn btn-outline-dark mt-2 w-100",onClick:c[0]||(c[0]=u=>l.$emit("clearPenalties"))},"Clear Penalties")):Ve("",!0)])])):Ve("",!0)])]))}},hA={class:"mb-4"},fA={class:"row g-2"},pA={key:0,class:"col-12"},mA={class:"penalty-form mb-4"},gA={class:"list-group"},_A=["onClick"],wA={__name:"PlayerStatsForm",props:["newPlayerStat","playerStats"],emits:["addPlayerStat","clearPlayerStat"],setup(t,{emit:e}){const n=t,s=js({...n.newPlayerStat}),i=e;Es(()=>n.newPlayerStat,l=>Object.assign(s,l));const r=()=>{Ae.fire({title:"Add Player Stat",html:`
      <div class="row g-2">
        <div class="col-4">
          <label>Player</label>
          <input id="player" class="form-control form-control-sm" v-model="local.player" placeholder="Player #" />
        </div>
        <div class="col-6 offset-2">
          <label>Team</label>
          <div class="btn-group btn-group-sm w-100">
            <button class="btn btn-outline-primary active" id="homeBtn">Home</button>
          <button class="btn btn-outline-primary" id="awayBtn">Away</button>
          </div>
        </div>
        <div class="col-12">
          <label>Category</label>
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
    `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:"Add Stat",cancelButtonText:"Cancel",preConfirm:()=>{const l=document.getElementById("player").value;return l?{player:l,team:s.team,type:s.type}:(Ae.showValidationMessage("Player # is required"),!1)}}).then(l=>{l.isConfirmed&&i("addPlayerStat",{...l.value})}),setTimeout(()=>{document.getElementById("homeBtn").addEventListener("click",()=>{s.team="home",o("homeBtn","awayBtn")}),document.getElementById("awayBtn").addEventListener("click",()=>{s.team="away",o("awayBtn","homeBtn")}),document.getElementById("goalBtn").addEventListener("click",()=>{s.type="goal",o("goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("assistBtn").addEventListener("click",()=>{s.type="assist",o("assistBtn","goalBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("shotBtn").addEventListener("click",()=>{s.type="shot",o("shotBtn","goalBtn","assistBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("shotOnBtn").addEventListener("click",()=>{s.type="shotOn",o("shotOnBtn","goalBtn","assistBtn","shotBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("gbBtn").addEventListener("click",()=>{s.type="groundBall",o("gbBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("causedTOBtn").addEventListener("click",()=>{s.type="causedTO",o("causedTOBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("saveBtn").addEventListener("click",()=>{s.type="save",o("saveBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("faceOffBtn").addEventListener("click",()=>{s.type="faceOff",o("faceOffBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffWinBtn")}),document.getElementById("faceOffWinBtn").addEventListener("click",()=>{s.type="faceOffWin",o("faceOffWinBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn")})},100)},o=(...l)=>{l.forEach(u=>{document.getElementById(u).classList.remove("active")});const c=document.getElementById(`${l[0]}`);console.log(c),c&&c.classList.add("active")};function a(l){const c=String(Math.floor(l/60)).padStart(2,"0"),u=String(l%60).padStart(2,"0");return`${c}:${u}`}return(l,c)=>(Z(),ne("div",hA,[F("div",fA,[F("div",{class:"col-12"},[F("button",{class:"btn btn-primary w-100",onClick:r},"Add Player Stat")]),t.playerStats.length>0?(Z(),ne("div",pA,[F("div",mA,[c[2]||(c[2]=F("h5",{class:"text-center"},"Player Stats",-1)),F("ul",gA,[(Z(!0),ne(wt,null,wl(t.playerStats,(u,d)=>(Z(),ne("li",{key:d,class:"list-group-item d-flex justify-content-between align-items-center"},[F("span",null,Ee(u.team)+" - #"+Ee(u.player)+" | "+Ee(u.type)+" | Time: "+Ee(a(u.gameClock))+" | Quarter: "+Ee(u.quarter),1),F("button",{class:"btn btn-danger btn-sm ml-auto removeBtn",onClick:h=>l.$emit("removePlayerStat",d)},c[1]||(c[1]=[F("i",{class:"bi bi-x"},null,-1)]),8,_A)]))),128))]),F("button",{class:"btn btn-outline-dark mt-3 w-100",onClick:c[0]||(c[0]=u=>l.$emit("clearPlayerStat"))}," Clear All ")])])):Ve("",!0)])]))}},vA=xo(wA,[["__scopeId","data-v-0aaf98e5"]]),yA={class:"container-fluid py-3"},bA={class:"row"},CA={class:"col-6"},EA={class:"col-6"},IA={__name:"GameController",props:{isPublicView:Boolean},setup(t){const e=Ce({home:0,away:0}),n=Ce({home:2,away:2}),s=Ce(720),i=Ce(80),r=Ce(!1),o=Ce(null),a=Ce(1),l=Ce("Home"),c=Ce("Away"),u=Ce([]),d=Ce([]),h=Ce([]),m=Ce({team:"home",player:"",duration:30,category:"crosscheck",releasable:!0}),w=Ce({player:"",team:"home",type:"goal"});gl(()=>{const $=ja(Qa,"/scoreboard");xp($,J=>{const q=J.val();q&&(e.value=q.score||{home:0,away:0},n.value=q.timeouts||{home:2,away:2},s.value=q.gameClock??720,i.value=q.shotClock??80,r.value=q.isClockRunning??!1,a.value=q.quarter??1,l.value=q.home??"Home",c.value=q.away??"Away",h.value=JSON.parse(q.playerStats||"[]"),u.value=JSON.parse(q.activePenalties||"[]"),d.value=JSON.parse(q.expiredPenalties||"[]"))})}),_l(()=>{o.value&&(clearInterval(o.value),o.value=null)});function b(){const $=ja(Qa,"/scoreboard");EE($,{score:e.value,timeouts:n.value,gameClock:s.value,shotClock:i.value,isClockRunning:r.value,quarter:a.value,home:l.value,away:c.value,playerStats:JSON.stringify(h.value),activePenalties:JSON.stringify(u.value),expiredPenalties:JSON.stringify(d.value)})}function M(){if(r.value){console.log("Stopping clocks"),clearInterval(o.value),o.value=null,r.value=!1,b();return}if(s.value===0||i.value===0){console.log("Clocks not started — one or both clocks are at 0");return}console.log("Starting clocks"),o.value=setInterval(()=>{let $=!1;i.value>0&&(i.value--,i.value===0&&($=!0)),s.value>0&&(s.value--,s.value===0&&($=!0)),Ze(),b(),$&&(clearInterval(o.value),o.value=null,r.value=!1,console.log("Clocks stopped because one hit zero"),b())},1e3),r.value=!0,b()}function D($){$==="shotClock"&&(i.value=80),$==="gameClock"&&(s.value=720),b()}function O($,J){e.value[$]=Math.max(0,e.value[$]+J),b()}function L($,J){n.value[$]=Math.max(0,Math.min(2,n.value[$]+J)),b()}function N($){a.value=Math.max(1,Math.min(4,a.value+$)),b()}function re($){const J=$==="home"?l.value:c.value;Ae.fire({title:`Set ${$==="home"?"Home":"Away"} Team Name`,input:"text",inputLabel:"Team Name",inputValue:J,showCancelButton:!0,confirmButtonText:"Save",cancelButtonText:"Cancel",inputValidator:q=>{if(!q)return"Team name cannot be empty!"}}).then(q=>{const z=q.value;z!==void 0&&($==="home"?l.value=z:c.value=z,b(),Ae.fire({toast:!0,position:"bottom",title:"Updated!",text:`${$==="home"?"Home":"Away"} team name changed to "${z}"`,icon:"success",timer:1500,showConfirmButton:!1,timerProgressBar:!0}))})}function Se($){const J=$==="gameClock"?s.value:i.value;Ae.fire({title:`Set ${$==="gameClock"?"Game":"Shot"} Clock`,input:"number",inputLabel:"Time in seconds",inputValue:J,inputAttributes:{min:0,step:1},showCancelButton:!0,confirmButtonText:"Set",cancelButtonText:"Cancel",inputValidator:q=>{if(q==="")return"You must enter a value!";const z=parseInt(q);if(isNaN(z)||z<0)return"Please enter a valid non-negative number."}}).then(q=>{const z=q.value,Q=parseInt(z);isNaN(Q)||($==="gameClock"?s.value=Q:i.value=Q,b(),Ae.fire({toast:!0,position:"bottom",title:"Clock Updated",text:`${$==="gameClock"?"Game":"Shot"} clock set to ${Q} seconds.`,icon:"success",timer:1500,showConfirmButton:!1}))})}function he($){const J={...$};J.startGameClock=s.value,J.remaining=J.duration,J.endGameClock=s.value-J.duration,J.quarter=a.value,u.value.push(J),m.value={team:"home",player:"",duration:30,category:"crosscheck",releasable:!0},b()}function Xe($,J){const q=u.value.filter(Q=>Q.team===J);if($<0||$>=q.length){Ae.fire({title:"Error",text:"Invalid index for the selected team.",icon:"error",showConfirmButton:!0});return}const z=q[$];Ae.fire({title:"Remove Penalty?",html:`
      <strong>Player:</strong> ${z.player}<br>
      <strong>Team:</strong> ${z.team}<br>
      <strong>Duration:</strong> ${z.duration} sec
    `,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, remove it",cancelButtonText:"Cancel"}).then(Q=>{if(Q.isConfirmed){const Et=u.value.findIndex(tt=>tt.player===z.player&&tt.team===z.team&&tt.duration===z.duration),Lt=u.value.splice(Et,1)[0];d.value.push(Lt),b(),Ae.fire({toast:!0,position:"bottom",title:"Removed",text:"The penalty has been moved to expired.",icon:"success",timer:1200,showConfirmButton:!1})}})}function Ze(){const $=[];for(const J of u.value)J.remaining--,J.remaining<=0?d.value.push({...J}):$.push(J);u.value=$,b()}function et(){Ae.fire({title:"Clear All Expired Penalties?",text:"This will permanently remove all expired penalties from the list.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, clear them",cancelButtonText:"Cancel"}).then($=>{$.isConfirmed&&(d.value=[],b(),Ae.fire({toast:!0,position:"bottom",title:"Cleared",text:"Expired penalties have been removed.",icon:"success",timer:1200,showConfirmButton:!1}))})}function Dt($){const J={...$,gameClock:s.value,quarter:a.value};h.value.push(J),b()}function Qt($){const J=h.value[$];Ae.fire({title:"Remove Player Stat?",html:`
      <strong>Player:</strong> ${J.player}<br>
      <strong>Type:</strong> ${J.type}<br>
      <strong>Quarter:</strong> ${J.quarter}<br>
    `,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, remove it",cancelButtonText:"Cancel"}).then(q=>{q.isConfirmed&&(h.value.splice($,1),b(),Ae.fire({title:"Removed",text:"Player stat has been removed.",icon:"success",timer:1200,showConfirmButton:!1}))})}function gt(){Ae.fire({title:"Clear All Player Stats?",text:"This will permanently remove all player statistics.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, clear them",cancelButtonText:"Cancel"}).then($=>{$.isConfirmed&&(h.value=[],b(),Ae.fire({toast:!0,position:"bottom",title:"Cleared",text:"All player stats have been removed.",icon:"success",timer:1200,showConfirmButton:!1}))})}return($,J)=>(Z(),ne("div",yA,[Te(Cm,{quarter:a.value,gameClock:s.value,shotClock:i.value,isClockRunning:r.value,isPublicView:!1,onToggleClocks:M,onResetClock:D,onAdjustQuarter:N,onEditClock:Se},null,8,["quarter","gameClock","shotClock","isClockRunning"]),Te(Em,{score:e.value,timeouts:n.value,home:l.value,away:c.value,activePenalties:u.value,isClockRunning:r.value,onAdjustScore:O,onAdjustTimeout:L,onEditName:re,onRemovePenalty:Xe,isPublicView:!1},null,8,["score","timeouts","home","away","activePenalties","isClockRunning"]),F("div",bA,[F("div",CA,[Te(dA,{newPenalty:m.value,gameClock:s.value,activePenalties:u.value,expiredPenalties:d.value,onClearPenalties:et,onAddPenalty:he},null,8,["newPenalty","gameClock","activePenalties","expiredPenalties"])]),F("div",EA,[Te(vA,{newPlayerStat:w.value,playerStats:h.value,onAddPlayerStat:Dt,onRemovePlayerStat:Qt,onClearPlayerStat:gt},null,8,["newPlayerStat","playerStats"])])])]))}},SA=()=>new Promise((t,e)=>{br.onAuthStateChanged(n=>{n?t(n):e("Not authenticated")})}),TA=[{path:"/",name:"PublicViewer",component:_T},{path:"/control",name:"GameController",component:IA,props:t=>({isPublicView:t.query.isPublicView}),beforeEnter:async(t,e,n)=>{try{const s=await SA();["jonny5v@gmail.com"].includes(s.email)?n():n({name:"PublicViewer"})}catch{n({name:"PublicViewer"})}}}],kA=qS({history:yS("/lacrosse-tracker/"),routes:TA}),wg=Mw(WI);wg.use(kA);wg.mount("#app");
