(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))s(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerPolicy&&(r.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?r.credentials="include":i.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(i){if(i.ep)return;i.ep=!0;const r=n(i);fetch(i.href,r)}})();/**
* @vue/shared v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**//*! #__NO_SIDE_EFFECTS__ */function ml(t){const e=Object.create(null);for(const n of t.split(","))e[n]=1;return n=>n in e}const Ce={},ks=[],Kt=()=>{},$g=()=>!1,go=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&(t.charCodeAt(2)>122||t.charCodeAt(2)<97),gl=t=>t.startsWith("onUpdate:"),Qe=Object.assign,_l=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},Ug=Object.prototype.hasOwnProperty,fe=(t,e)=>Ug.call(t,e),G=Array.isArray,Ps=t=>_o(t)==="[object Map]",mh=t=>_o(t)==="[object Set]",J=t=>typeof t=="function",Me=t=>typeof t=="string",$n=t=>typeof t=="symbol",Pe=t=>t!==null&&typeof t=="object",gh=t=>(Pe(t)||J(t))&&J(t.then)&&J(t.catch),_h=Object.prototype.toString,_o=t=>_h.call(t),Hg=t=>_o(t).slice(8,-1),wh=t=>_o(t)==="[object Object]",wl=t=>Me(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,_i=ml(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),wo=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},Vg=/-(\w)/g,Tt=wo(t=>t.replace(Vg,(e,n)=>n?n.toUpperCase():"")),Wg=/\B([A-Z])/g,ms=wo(t=>t.replace(Wg,"-$1").toLowerCase()),vo=wo(t=>t.charAt(0).toUpperCase()+t.slice(1)),Qo=wo(t=>t?`on${vo(t)}`:""),xn=(t,e)=>!Object.is(t,e),Jo=(t,...e)=>{for(let n=0;n<t.length;n++)t[n](...e)},vh=(t,e,n,s=!1)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,writable:s,value:n})},jg=t=>{const e=parseFloat(t);return isNaN(e)?t:e};let tu;const yo=()=>tu||(tu=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});function vl(t){if(G(t)){const e={};for(let n=0;n<t.length;n++){const s=t[n],i=Me(s)?Kg(s):vl(s);if(i)for(const r in i)e[r]=i[r]}return e}else if(Me(t)||Pe(t))return t}const qg=/;(?![^(]*\))/g,zg=/:([^]+)/,Gg=/\/\*[^]*?\*\//g;function Kg(t){const e={};return t.replace(Gg,"").split(qg).forEach(n=>{if(n){const s=n.split(zg);s.length>1&&(e[s[0].trim()]=s[1].trim())}}),e}function Yi(t){let e="";if(Me(t))e=t;else if(G(t))for(let n=0;n<t.length;n++){const s=Yi(t[n]);s&&(e+=s+" ")}else if(Pe(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const Yg="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",Qg=ml(Yg);function yh(t){return!!t||t===""}const bh=t=>!!(t&&t.__v_isRef===!0),ke=t=>Me(t)?t:t==null?"":G(t)||Pe(t)&&(t.toString===_h||!J(t.toString))?bh(t)?ke(t.value):JSON.stringify(t,Ch,2):String(t),Ch=(t,e)=>bh(e)?Ch(t,e.value):Ps(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[s,i],r)=>(n[Xo(s,r)+" =>"]=i,n),{})}:mh(e)?{[`Set(${e.size})`]:[...e.values()].map(n=>Xo(n))}:$n(e)?Xo(e):Pe(e)&&!G(e)&&!wh(e)?String(e):e,Xo=(t,e="")=>{var n;return $n(t)?`Symbol(${(n=t.description)!=null?n:e})`:t};/**
* @vue/reactivity v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let et;class Eh{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this._isPaused=!1,this.parent=et,!e&&et&&(this.index=(et.scopes||(et.scopes=[])).push(this)-1)}get active(){return this._active}pause(){if(this._active){this._isPaused=!0;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].pause();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].pause()}}resume(){if(this._active&&this._isPaused){this._isPaused=!1;let e,n;if(this.scopes)for(e=0,n=this.scopes.length;e<n;e++)this.scopes[e].resume();for(e=0,n=this.effects.length;e<n;e++)this.effects[e].resume()}}run(e){if(this._active){const n=et;try{return et=this,e()}finally{et=n}}}on(){et=this}off(){et=this.parent}stop(e){if(this._active){this._active=!1;let n,s;for(n=0,s=this.effects.length;n<s;n++)this.effects[n].stop();for(this.effects.length=0,n=0,s=this.cleanups.length;n<s;n++)this.cleanups[n]();if(this.cleanups.length=0,this.scopes){for(n=0,s=this.scopes.length;n<s;n++)this.scopes[n].stop(!0);this.scopes.length=0}if(!this.detached&&this.parent&&!e){const i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0}}}function Ih(t){return new Eh(t)}function Sh(){return et}function Jg(t,e=!1){et&&et.cleanups.push(t)}let ye;const Zo=new WeakSet;class Th{constructor(e){this.fn=e,this.deps=void 0,this.depsTail=void 0,this.flags=5,this.next=void 0,this.cleanup=void 0,this.scheduler=void 0,et&&et.active&&et.effects.push(this)}pause(){this.flags|=64}resume(){this.flags&64&&(this.flags&=-65,Zo.has(this)&&(Zo.delete(this),this.trigger()))}notify(){this.flags&2&&!(this.flags&32)||this.flags&8||Ph(this)}run(){if(!(this.flags&1))return this.fn();this.flags|=2,nu(this),Ah(this);const e=ye,n=Lt;ye=this,Lt=!0;try{return this.fn()}finally{Rh(this),ye=e,Lt=n,this.flags&=-3}}stop(){if(this.flags&1){for(let e=this.deps;e;e=e.nextDep)Cl(e);this.deps=this.depsTail=void 0,nu(this),this.onStop&&this.onStop(),this.flags&=-2}}trigger(){this.flags&64?Zo.add(this):this.scheduler?this.scheduler():this.runIfDirty()}runIfDirty(){Aa(this)&&this.run()}get dirty(){return Aa(this)}}let kh=0,wi,vi;function Ph(t,e=!1){if(t.flags|=8,e){t.next=vi,vi=t;return}t.next=wi,wi=t}function yl(){kh++}function bl(){if(--kh>0)return;if(vi){let e=vi;for(vi=void 0;e;){const n=e.next;e.next=void 0,e.flags&=-9,e=n}}let t;for(;wi;){let e=wi;for(wi=void 0;e;){const n=e.next;if(e.next=void 0,e.flags&=-9,e.flags&1)try{e.trigger()}catch(s){t||(t=s)}e=n}}if(t)throw t}function Ah(t){for(let e=t.deps;e;e=e.nextDep)e.version=-1,e.prevActiveLink=e.dep.activeLink,e.dep.activeLink=e}function Rh(t){let e,n=t.depsTail,s=n;for(;s;){const i=s.prevDep;s.version===-1?(s===n&&(n=i),Cl(s),Xg(s)):e=s,s.dep.activeLink=s.prevActiveLink,s.prevActiveLink=void 0,s=i}t.deps=e,t.depsTail=n}function Aa(t){for(let e=t.deps;e;e=e.nextDep)if(e.dep.version!==e.version||e.dep.computed&&(xh(e.dep.computed)||e.dep.version!==e.version))return!0;return!!t._dirty}function xh(t){if(t.flags&4&&!(t.flags&16)||(t.flags&=-17,t.globalVersion===Oi))return;t.globalVersion=Oi;const e=t.dep;if(t.flags|=2,e.version>0&&!t.isSSR&&t.deps&&!Aa(t)){t.flags&=-3;return}const n=ye,s=Lt;ye=t,Lt=!0;try{Ah(t);const i=t.fn(t._value);(e.version===0||xn(i,t._value))&&(t._value=i,e.version++)}catch(i){throw e.version++,i}finally{ye=n,Lt=s,Rh(t),t.flags&=-3}}function Cl(t,e=!1){const{dep:n,prevSub:s,nextSub:i}=t;if(s&&(s.nextSub=i,t.prevSub=void 0),i&&(i.prevSub=s,t.nextSub=void 0),n.subs===t&&(n.subs=s,!s&&n.computed)){n.computed.flags&=-5;for(let r=n.computed.deps;r;r=r.nextDep)Cl(r,!0)}!e&&!--n.sc&&n.map&&n.map.delete(n.key)}function Xg(t){const{prevDep:e,nextDep:n}=t;e&&(e.nextDep=n,t.prevDep=void 0),n&&(n.prevDep=e,t.nextDep=void 0)}let Lt=!0;const Oh=[];function Un(){Oh.push(Lt),Lt=!1}function Hn(){const t=Oh.pop();Lt=t===void 0?!0:t}function nu(t){const{cleanup:e}=t;if(t.cleanup=void 0,e){const n=ye;ye=void 0;try{e()}finally{ye=n}}}let Oi=0;class Zg{constructor(e,n){this.sub=e,this.dep=n,this.version=n.version,this.nextDep=this.prevDep=this.nextSub=this.prevSub=this.prevActiveLink=void 0}}class El{constructor(e){this.computed=e,this.version=0,this.activeLink=void 0,this.subs=void 0,this.map=void 0,this.key=void 0,this.sc=0}track(e){if(!ye||!Lt||ye===this.computed)return;let n=this.activeLink;if(n===void 0||n.sub!==ye)n=this.activeLink=new Zg(ye,this),ye.deps?(n.prevDep=ye.depsTail,ye.depsTail.nextDep=n,ye.depsTail=n):ye.deps=ye.depsTail=n,Nh(n);else if(n.version===-1&&(n.version=this.version,n.nextDep)){const s=n.nextDep;s.prevDep=n.prevDep,n.prevDep&&(n.prevDep.nextDep=s),n.prevDep=ye.depsTail,n.nextDep=void 0,ye.depsTail.nextDep=n,ye.depsTail=n,ye.deps===n&&(ye.deps=s)}return n}trigger(e){this.version++,Oi++,this.notify(e)}notify(e){yl();try{for(let n=this.subs;n;n=n.prevSub)n.sub.notify()&&n.sub.dep.notify()}finally{bl()}}}function Nh(t){if(t.dep.sc++,t.sub.flags&4){const e=t.dep.computed;if(e&&!t.dep.subs){e.flags|=20;for(let s=e.deps;s;s=s.nextDep)Nh(s)}const n=t.dep.subs;n!==t&&(t.prevSub=n,n&&(n.nextSub=t)),t.dep.subs=t}}const Pr=new WeakMap,Zn=Symbol(""),Ra=Symbol(""),Ni=Symbol("");function Ke(t,e,n){if(Lt&&ye){let s=Pr.get(t);s||Pr.set(t,s=new Map);let i=s.get(n);i||(s.set(n,i=new El),i.map=s,i.key=n),i.track()}}function on(t,e,n,s,i,r){const o=Pr.get(t);if(!o){Oi++;return}const a=l=>{l&&l.trigger()};if(yl(),e==="clear")o.forEach(a);else{const l=G(t),c=l&&wl(n);if(l&&n==="length"){const u=Number(s);o.forEach((d,h)=>{(h==="length"||h===Ni||!$n(h)&&h>=u)&&a(d)})}else switch((n!==void 0||o.has(void 0))&&a(o.get(n)),c&&a(o.get(Ni)),e){case"add":l?c&&a(o.get("length")):(a(o.get(Zn)),Ps(t)&&a(o.get(Ra)));break;case"delete":l||(a(o.get(Zn)),Ps(t)&&a(o.get(Ra)));break;case"set":Ps(t)&&a(o.get(Zn));break}}bl()}function e_(t,e){const n=Pr.get(t);return n&&n.get(e)}function bs(t){const e=ae(t);return e===t?e:(Ke(e,"iterate",Ni),St(t)?e:e.map(Ye))}function bo(t){return Ke(t=ae(t),"iterate",Ni),t}const t_={__proto__:null,[Symbol.iterator](){return ea(this,Symbol.iterator,Ye)},concat(...t){return bs(this).concat(...t.map(e=>G(e)?bs(e):e))},entries(){return ea(this,"entries",t=>(t[1]=Ye(t[1]),t))},every(t,e){return nn(this,"every",t,e,void 0,arguments)},filter(t,e){return nn(this,"filter",t,e,n=>n.map(Ye),arguments)},find(t,e){return nn(this,"find",t,e,Ye,arguments)},findIndex(t,e){return nn(this,"findIndex",t,e,void 0,arguments)},findLast(t,e){return nn(this,"findLast",t,e,Ye,arguments)},findLastIndex(t,e){return nn(this,"findLastIndex",t,e,void 0,arguments)},forEach(t,e){return nn(this,"forEach",t,e,void 0,arguments)},includes(...t){return ta(this,"includes",t)},indexOf(...t){return ta(this,"indexOf",t)},join(t){return bs(this).join(t)},lastIndexOf(...t){return ta(this,"lastIndexOf",t)},map(t,e){return nn(this,"map",t,e,void 0,arguments)},pop(){return ci(this,"pop")},push(...t){return ci(this,"push",t)},reduce(t,...e){return su(this,"reduce",t,e)},reduceRight(t,...e){return su(this,"reduceRight",t,e)},shift(){return ci(this,"shift")},some(t,e){return nn(this,"some",t,e,void 0,arguments)},splice(...t){return ci(this,"splice",t)},toReversed(){return bs(this).toReversed()},toSorted(t){return bs(this).toSorted(t)},toSpliced(...t){return bs(this).toSpliced(...t)},unshift(...t){return ci(this,"unshift",t)},values(){return ea(this,"values",Ye)}};function ea(t,e,n){const s=bo(t),i=s[e]();return s!==t&&!St(t)&&(i._next=i.next,i.next=()=>{const r=i._next();return r.value&&(r.value=n(r.value)),r}),i}const n_=Array.prototype;function nn(t,e,n,s,i,r){const o=bo(t),a=o!==t&&!St(t),l=o[e];if(l!==n_[e]){const d=l.apply(t,r);return a?Ye(d):d}let c=n;o!==t&&(a?c=function(d,h){return n.call(this,Ye(d),h,t)}:n.length>2&&(c=function(d,h){return n.call(this,d,h,t)}));const u=l.call(o,c,s);return a&&i?i(u):u}function su(t,e,n,s){const i=bo(t);let r=n;return i!==t&&(St(t)?n.length>3&&(r=function(o,a,l){return n.call(this,o,a,l,t)}):r=function(o,a,l){return n.call(this,o,Ye(a),l,t)}),i[e](r,...s)}function ta(t,e,n){const s=ae(t);Ke(s,"iterate",Ni);const i=s[e](...n);return(i===-1||i===!1)&&Tl(n[0])?(n[0]=ae(n[0]),s[e](...n)):i}function ci(t,e,n=[]){Un(),yl();const s=ae(t)[e].apply(t,n);return bl(),Hn(),s}const s_=ml("__proto__,__v_isRef,__isVue"),Lh=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter($n));function i_(t){$n(t)||(t=String(t));const e=ae(this);return Ke(e,"has",t),e.hasOwnProperty(t)}class Dh{constructor(e=!1,n=!1){this._isReadonly=e,this._isShallow=n}get(e,n,s){if(n==="__v_skip")return e.__v_skip;const i=this._isReadonly,r=this._isShallow;if(n==="__v_isReactive")return!i;if(n==="__v_isReadonly")return i;if(n==="__v_isShallow")return r;if(n==="__v_raw")return s===(i?r?p_:$h:r?Fh:Bh).get(e)||Object.getPrototypeOf(e)===Object.getPrototypeOf(s)?e:void 0;const o=G(e);if(!i){let l;if(o&&(l=t_[n]))return l;if(n==="hasOwnProperty")return i_}const a=Reflect.get(e,n,Le(e)?e:s);return($n(n)?Lh.has(n):s_(n))||(i||Ke(e,"get",n),r)?a:Le(a)?o&&wl(n)?a:a.value:Pe(a)?i?Hh(a):is(a):a}}class Mh extends Dh{constructor(e=!1){super(!1,e)}set(e,n,s,i){let r=e[n];if(!this._isShallow){const l=rs(r);if(!St(s)&&!rs(s)&&(r=ae(r),s=ae(s)),!G(e)&&Le(r)&&!Le(s))return l?!1:(r.value=s,!0)}const o=G(e)&&wl(n)?Number(n)<e.length:fe(e,n),a=Reflect.set(e,n,s,Le(e)?e:i);return e===ae(i)&&(o?xn(s,r)&&on(e,"set",n,s):on(e,"add",n,s)),a}deleteProperty(e,n){const s=fe(e,n);e[n];const i=Reflect.deleteProperty(e,n);return i&&s&&on(e,"delete",n,void 0),i}has(e,n){const s=Reflect.has(e,n);return(!$n(n)||!Lh.has(n))&&Ke(e,"has",n),s}ownKeys(e){return Ke(e,"iterate",G(e)?"length":Zn),Reflect.ownKeys(e)}}class r_ extends Dh{constructor(e=!1){super(!0,e)}set(e,n){return!0}deleteProperty(e,n){return!0}}const o_=new Mh,a_=new r_,l_=new Mh(!0);const xa=t=>t,fr=t=>Reflect.getPrototypeOf(t);function c_(t,e,n){return function(...s){const i=this.__v_raw,r=ae(i),o=Ps(r),a=t==="entries"||t===Symbol.iterator&&o,l=t==="keys"&&o,c=i[t](...s),u=n?xa:e?Oa:Ye;return!e&&Ke(r,"iterate",l?Ra:Zn),{next(){const{value:d,done:h}=c.next();return h?{value:d,done:h}:{value:a?[u(d[0]),u(d[1])]:u(d),done:h}},[Symbol.iterator](){return this}}}}function pr(t){return function(...e){return t==="delete"?!1:t==="clear"?void 0:this}}function u_(t,e){const n={get(i){const r=this.__v_raw,o=ae(r),a=ae(i);t||(xn(i,a)&&Ke(o,"get",i),Ke(o,"get",a));const{has:l}=fr(o),c=e?xa:t?Oa:Ye;if(l.call(o,i))return c(r.get(i));if(l.call(o,a))return c(r.get(a));r!==o&&r.get(i)},get size(){const i=this.__v_raw;return!t&&Ke(ae(i),"iterate",Zn),Reflect.get(i,"size",i)},has(i){const r=this.__v_raw,o=ae(r),a=ae(i);return t||(xn(i,a)&&Ke(o,"has",i),Ke(o,"has",a)),i===a?r.has(i):r.has(i)||r.has(a)},forEach(i,r){const o=this,a=o.__v_raw,l=ae(a),c=e?xa:t?Oa:Ye;return!t&&Ke(l,"iterate",Zn),a.forEach((u,d)=>i.call(r,c(u),c(d),o))}};return Qe(n,t?{add:pr("add"),set:pr("set"),delete:pr("delete"),clear:pr("clear")}:{add(i){!e&&!St(i)&&!rs(i)&&(i=ae(i));const r=ae(this);return fr(r).has.call(r,i)||(r.add(i),on(r,"add",i,i)),this},set(i,r){!e&&!St(r)&&!rs(r)&&(r=ae(r));const o=ae(this),{has:a,get:l}=fr(o);let c=a.call(o,i);c||(i=ae(i),c=a.call(o,i));const u=l.call(o,i);return o.set(i,r),c?xn(r,u)&&on(o,"set",i,r):on(o,"add",i,r),this},delete(i){const r=ae(this),{has:o,get:a}=fr(r);let l=o.call(r,i);l||(i=ae(i),l=o.call(r,i)),a&&a.call(r,i);const c=r.delete(i);return l&&on(r,"delete",i,void 0),c},clear(){const i=ae(this),r=i.size!==0,o=i.clear();return r&&on(i,"clear",void 0,void 0),o}}),["keys","values","entries",Symbol.iterator].forEach(i=>{n[i]=c_(i,t,e)}),n}function Il(t,e){const n=u_(t,e);return(s,i,r)=>i==="__v_isReactive"?!t:i==="__v_isReadonly"?t:i==="__v_raw"?s:Reflect.get(fe(n,i)&&i in s?n:s,i,r)}const d_={get:Il(!1,!1)},h_={get:Il(!1,!0)},f_={get:Il(!0,!1)};const Bh=new WeakMap,Fh=new WeakMap,$h=new WeakMap,p_=new WeakMap;function m_(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function g_(t){return t.__v_skip||!Object.isExtensible(t)?0:m_(Hg(t))}function is(t){return rs(t)?t:Sl(t,!1,o_,d_,Bh)}function Uh(t){return Sl(t,!1,l_,h_,Fh)}function Hh(t){return Sl(t,!0,a_,f_,$h)}function Sl(t,e,n,s,i){if(!Pe(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const r=i.get(t);if(r)return r;const o=g_(t);if(o===0)return t;const a=new Proxy(t,o===2?s:n);return i.set(t,a),a}function On(t){return rs(t)?On(t.__v_raw):!!(t&&t.__v_isReactive)}function rs(t){return!!(t&&t.__v_isReadonly)}function St(t){return!!(t&&t.__v_isShallow)}function Tl(t){return t?!!t.__v_raw:!1}function ae(t){const e=t&&t.__v_raw;return e?ae(e):t}function kl(t){return!fe(t,"__v_skip")&&Object.isExtensible(t)&&vh(t,"__v_skip",!0),t}const Ye=t=>Pe(t)?is(t):t,Oa=t=>Pe(t)?Hh(t):t;function Le(t){return t?t.__v_isRef===!0:!1}function Se(t){return Vh(t,!1)}function __(t){return Vh(t,!0)}function Vh(t,e){return Le(t)?t:new w_(t,e)}class w_{constructor(e,n){this.dep=new El,this.__v_isRef=!0,this.__v_isShallow=!1,this._rawValue=n?e:ae(e),this._value=n?e:Ye(e),this.__v_isShallow=n}get value(){return this.dep.track(),this._value}set value(e){const n=this._rawValue,s=this.__v_isShallow||St(e)||rs(e);e=s?e:ae(e),xn(e,n)&&(this._rawValue=e,this._value=s?e:Ye(e),this.dep.trigger())}}function L(t){return Le(t)?t.value:t}const v_={get:(t,e,n)=>e==="__v_raw"?t:L(Reflect.get(t,e,n)),set:(t,e,n,s)=>{const i=t[e];return Le(i)&&!Le(n)?(i.value=n,!0):Reflect.set(t,e,n,s)}};function Wh(t){return On(t)?t:new Proxy(t,v_)}function y_(t){const e=G(t)?new Array(t.length):{};for(const n in t)e[n]=C_(t,n);return e}class b_{constructor(e,n,s){this._object=e,this._key=n,this._defaultValue=s,this.__v_isRef=!0,this._value=void 0}get value(){const e=this._object[this._key];return this._value=e===void 0?this._defaultValue:e}set value(e){this._object[this._key]=e}get dep(){return e_(ae(this._object),this._key)}}function C_(t,e,n){const s=t[e];return Le(s)?s:new b_(t,e,n)}class E_{constructor(e,n,s){this.fn=e,this.setter=n,this._value=void 0,this.dep=new El(this),this.__v_isRef=!0,this.deps=void 0,this.depsTail=void 0,this.flags=16,this.globalVersion=Oi-1,this.next=void 0,this.effect=this,this.__v_isReadonly=!n,this.isSSR=s}notify(){if(this.flags|=16,!(this.flags&8)&&ye!==this)return Ph(this,!0),!0}get value(){const e=this.dep.track();return xh(this),e&&(e.version=this.dep.version),this._value}set value(e){this.setter&&this.setter(e)}}function I_(t,e,n=!1){let s,i;return J(t)?s=t:(s=t.get,i=t.set),new E_(s,i,n)}const mr={},Ar=new WeakMap;let Kn;function S_(t,e=!1,n=Kn){if(n){let s=Ar.get(n);s||Ar.set(n,s=[]),s.push(t)}}function T_(t,e,n=Ce){const{immediate:s,deep:i,once:r,scheduler:o,augmentJob:a,call:l}=n,c=B=>i?B:St(B)||i===!1||i===0?In(B,1):In(B);let u,d,h,m,v=!1,y=!1;if(Le(t)?(d=()=>t.value,v=St(t)):On(t)?(d=()=>c(t),v=!0):G(t)?(y=!0,v=t.some(B=>On(B)||St(B)),d=()=>t.map(B=>{if(Le(B))return B.value;if(On(B))return c(B);if(J(B))return l?l(B,2):B()})):J(t)?e?d=l?()=>l(t,2):t:d=()=>{if(h){Un();try{h()}finally{Hn()}}const B=Kn;Kn=u;try{return l?l(t,3,[m]):t(m)}finally{Kn=B}}:d=Kt,e&&i){const B=d,K=i===!0?1/0:i;d=()=>In(B(),K)}const R=Sh(),F=()=>{u.stop(),R&&R.active&&_l(R.effects,u)};if(r&&e){const B=e;e=(...K)=>{B(...K),F()}}let M=y?new Array(t.length).fill(mr):mr;const $=B=>{if(!(!(u.flags&1)||!u.dirty&&!B))if(e){const K=u.run();if(i||v||(y?K.some((Te,ne)=>xn(Te,M[ne])):xn(K,M))){h&&h();const Te=Kn;Kn=u;try{const ne=[K,M===mr?void 0:y&&M[0]===mr?[]:M,m];l?l(e,3,ne):e(...ne),M=K}finally{Kn=Te}}}else u.run()};return a&&a($),u=new Th(d),u.scheduler=o?()=>o($,!1):$,m=B=>S_(B,!1,u),h=u.onStop=()=>{const B=Ar.get(u);if(B){if(l)l(B,4);else for(const K of B)K();Ar.delete(u)}},e?s?$(!0):M=u.run():o?o($.bind(null,!0),!0):u.run(),F.pause=u.pause.bind(u),F.resume=u.resume.bind(u),F.stop=F,F}function In(t,e=1/0,n){if(e<=0||!Pe(t)||t.__v_skip||(n=n||new Set,n.has(t)))return t;if(n.add(t),e--,Le(t))In(t.value,e,n);else if(G(t))for(let s=0;s<t.length;s++)In(t[s],e,n);else if(mh(t)||Ps(t))t.forEach(s=>{In(s,e,n)});else if(wh(t)){for(const s in t)In(t[s],e,n);for(const s of Object.getOwnPropertySymbols(t))Object.prototype.propertyIsEnumerable.call(t,s)&&In(t[s],e,n)}return t}/**
* @vue/runtime-core v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/function Qi(t,e,n,s){try{return s?t(...s):t()}catch(i){Co(i,e,n)}}function Jt(t,e,n,s){if(J(t)){const i=Qi(t,e,n,s);return i&&gh(i)&&i.catch(r=>{Co(r,e,n)}),i}if(G(t)){const i=[];for(let r=0;r<t.length;r++)i.push(Jt(t[r],e,n,s));return i}}function Co(t,e,n,s=!0){const i=e?e.vnode:null,{errorHandler:r,throwUnhandledErrorInProduction:o}=e&&e.appContext.config||Ce;if(e){let a=e.parent;const l=e.proxy,c=`https://vuejs.org/error-reference/#runtime-${n}`;for(;a;){const u=a.ec;if(u){for(let d=0;d<u.length;d++)if(u[d](t,l,c)===!1)return}a=a.parent}if(r){Un(),Qi(r,null,10,[t,l,c]),Hn();return}}k_(t,n,i,s,o)}function k_(t,e,n,s=!0,i=!1){if(i)throw t;console.error(t)}const tt=[];let qt=-1;const As=[];let bn=null,Is=0;const jh=Promise.resolve();let Rr=null;function Pl(t){const e=Rr||jh;return t?e.then(this?t.bind(this):t):e}function P_(t){let e=qt+1,n=tt.length;for(;e<n;){const s=e+n>>>1,i=tt[s],r=Li(i);r<t||r===t&&i.flags&2?e=s+1:n=s}return e}function Al(t){if(!(t.flags&1)){const e=Li(t),n=tt[tt.length-1];!n||!(t.flags&2)&&e>=Li(n)?tt.push(t):tt.splice(P_(e),0,t),t.flags|=1,qh()}}function qh(){Rr||(Rr=jh.then(Gh))}function A_(t){G(t)?As.push(...t):bn&&t.id===-1?bn.splice(Is+1,0,t):t.flags&1||(As.push(t),t.flags|=1),qh()}function iu(t,e,n=qt+1){for(;n<tt.length;n++){const s=tt[n];if(s&&s.flags&2){if(t&&s.id!==t.uid)continue;tt.splice(n,1),n--,s.flags&4&&(s.flags&=-2),s(),s.flags&4||(s.flags&=-2)}}}function zh(t){if(As.length){const e=[...new Set(As)].sort((n,s)=>Li(n)-Li(s));if(As.length=0,bn){bn.push(...e);return}for(bn=e,Is=0;Is<bn.length;Is++){const n=bn[Is];n.flags&4&&(n.flags&=-2),n.flags&8||n(),n.flags&=-2}bn=null,Is=0}}const Li=t=>t.id==null?t.flags&2?-1:1/0:t.id;function Gh(t){try{for(qt=0;qt<tt.length;qt++){const e=tt[qt];e&&!(e.flags&8)&&(e.flags&4&&(e.flags&=-2),Qi(e,e.i,e.i?15:14),e.flags&4||(e.flags&=-2))}}finally{for(;qt<tt.length;qt++){const e=tt[qt];e&&(e.flags&=-2)}qt=-1,tt.length=0,zh(),Rr=null,(tt.length||As.length)&&Gh()}}let Et=null,Kh=null;function xr(t){const e=Et;return Et=t,Kh=t&&t.type.__scopeId||null,e}function R_(t,e=Et,n){if(!e||t._n)return t;const s=(...i)=>{s._d&&pu(-1);const r=xr(e);let o;try{o=t(...i)}finally{xr(r),s._d&&pu(1)}return o};return s._n=!0,s._c=!0,s._d=!0,s}function qn(t,e,n,s){const i=t.dirs,r=e&&e.dirs;for(let o=0;o<i.length;o++){const a=i[o];r&&(a.oldValue=r[o].value);let l=a.dir[s];l&&(Un(),Jt(l,n,8,[t.el,a,t,e]),Hn())}}const x_=Symbol("_vte"),O_=t=>t.__isTeleport;function Rl(t,e){t.shapeFlag&6&&t.component?(t.transition=e,Rl(t.component.subTree,e)):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}/*! #__NO_SIDE_EFFECTS__ */function Yh(t,e){return J(t)?Qe({name:t.name},e,{setup:t}):t}function Qh(t){t.ids=[t.ids[0]+t.ids[2]+++"-",0,0]}function Or(t,e,n,s,i=!1){if(G(t)){t.forEach((v,y)=>Or(v,e&&(G(e)?e[y]:e),n,s,i));return}if(yi(s)&&!i){s.shapeFlag&512&&s.type.__asyncResolved&&s.component.subTree.component&&Or(t,e,n,s.component.subTree);return}const r=s.shapeFlag&4?Dl(s.component):s.el,o=i?null:r,{i:a,r:l}=t,c=e&&e.r,u=a.refs===Ce?a.refs={}:a.refs,d=a.setupState,h=ae(d),m=d===Ce?()=>!1:v=>fe(h,v);if(c!=null&&c!==l&&(Me(c)?(u[c]=null,m(c)&&(d[c]=null)):Le(c)&&(c.value=null)),J(l))Qi(l,a,12,[o,u]);else{const v=Me(l),y=Le(l);if(v||y){const R=()=>{if(t.f){const F=v?m(l)?d[l]:u[l]:l.value;i?G(F)&&_l(F,r):G(F)?F.includes(r)||F.push(r):v?(u[l]=[r],m(l)&&(d[l]=u[l])):(l.value=[r],t.k&&(u[t.k]=l.value))}else v?(u[l]=o,m(l)&&(d[l]=o)):y&&(l.value=o,t.k&&(u[t.k]=o))};o?(R.id=-1,ft(R,n)):R()}}}yo().requestIdleCallback;yo().cancelIdleCallback;const yi=t=>!!t.type.__asyncLoader,Jh=t=>t.type.__isKeepAlive;function N_(t,e){Xh(t,"a",e)}function L_(t,e){Xh(t,"da",e)}function Xh(t,e,n=je){const s=t.__wdc||(t.__wdc=()=>{let i=n;for(;i;){if(i.isDeactivated)return;i=i.parent}return t()});if(Eo(e,s,n),n){let i=n.parent;for(;i&&i.parent;)Jh(i.parent.vnode)&&D_(s,e,n,i),i=i.parent}}function D_(t,e,n,s){const i=Eo(e,t,s,!0);Io(()=>{_l(s[e],i)},n)}function Eo(t,e,n=je,s=!1){if(n){const i=n[t]||(n[t]=[]),r=e.__weh||(e.__weh=(...o)=>{Un();const a=Ji(n),l=Jt(e,n,t,o);return a(),Hn(),l});return s?i.unshift(r):i.push(r),r}}const _n=t=>(e,n=je)=>{(!Mi||t==="sp")&&Eo(t,(...s)=>e(...s),n)},M_=_n("bm"),xl=_n("m"),B_=_n("bu"),F_=_n("u"),$_=_n("bum"),Io=_n("um"),U_=_n("sp"),H_=_n("rtg"),V_=_n("rtc");function W_(t,e=je){Eo("ec",t,e)}const j_="components";function q_(t,e){return G_(j_,t,!0,e)||t}const z_=Symbol.for("v-ndc");function G_(t,e,n=!0,s=!1){const i=Et||je;if(i){const r=i.type;{const a=Dw(r,!1);if(a&&(a===e||a===Tt(e)||a===vo(Tt(e))))return r}const o=ru(i[t]||r[t],e)||ru(i.appContext[t],e);return!o&&s?r:o}}function ru(t,e){return t&&(t[e]||t[Tt(e)]||t[vo(Tt(e))])}function Ol(t,e,n,s){let i;const r=n,o=G(t);if(o||Me(t)){const a=o&&On(t);let l=!1;a&&(l=!St(t),t=bo(t)),i=new Array(t.length);for(let c=0,u=t.length;c<u;c++)i[c]=e(l?Ye(t[c]):t[c],c,void 0,r)}else if(typeof t=="number"){i=new Array(t);for(let a=0;a<t;a++)i[a]=e(a+1,a,void 0,r)}else if(Pe(t))if(t[Symbol.iterator])i=Array.from(t,(a,l)=>e(a,l,void 0,r));else{const a=Object.keys(t);i=new Array(a.length);for(let l=0,c=a.length;l<c;l++){const u=a[l];i[l]=e(t[u],u,l,r)}}else i=[];return i}const Na=t=>t?yf(t)?Dl(t):Na(t.parent):null,bi=Qe(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>Na(t.parent),$root:t=>Na(t.root),$host:t=>t.ce,$emit:t=>t.emit,$options:t=>ef(t),$forceUpdate:t=>t.f||(t.f=()=>{Al(t.update)}),$nextTick:t=>t.n||(t.n=Pl.bind(t.proxy)),$watch:t=>mw.bind(t)}),na=(t,e)=>t!==Ce&&!t.__isScriptSetup&&fe(t,e),K_={get({_:t},e){if(e==="__v_skip")return!0;const{ctx:n,setupState:s,data:i,props:r,accessCache:o,type:a,appContext:l}=t;let c;if(e[0]!=="$"){const m=o[e];if(m!==void 0)switch(m){case 1:return s[e];case 2:return i[e];case 4:return n[e];case 3:return r[e]}else{if(na(s,e))return o[e]=1,s[e];if(i!==Ce&&fe(i,e))return o[e]=2,i[e];if((c=t.propsOptions[0])&&fe(c,e))return o[e]=3,r[e];if(n!==Ce&&fe(n,e))return o[e]=4,n[e];La&&(o[e]=0)}}const u=bi[e];let d,h;if(u)return e==="$attrs"&&Ke(t.attrs,"get",""),u(t);if((d=a.__cssModules)&&(d=d[e]))return d;if(n!==Ce&&fe(n,e))return o[e]=4,n[e];if(h=l.config.globalProperties,fe(h,e))return h[e]},set({_:t},e,n){const{data:s,setupState:i,ctx:r}=t;return na(i,e)?(i[e]=n,!0):s!==Ce&&fe(s,e)?(s[e]=n,!0):fe(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(r[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:s,appContext:i,propsOptions:r}},o){let a;return!!n[o]||t!==Ce&&fe(t,o)||na(e,o)||(a=r[0])&&fe(a,o)||fe(s,o)||fe(bi,o)||fe(i.config.globalProperties,o)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:fe(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};function ou(t){return G(t)?t.reduce((e,n)=>(e[n]=null,e),{}):t}let La=!0;function Y_(t){const e=ef(t),n=t.proxy,s=t.ctx;La=!1,e.beforeCreate&&au(e.beforeCreate,t,"bc");const{data:i,computed:r,methods:o,watch:a,provide:l,inject:c,created:u,beforeMount:d,mounted:h,beforeUpdate:m,updated:v,activated:y,deactivated:R,beforeDestroy:F,beforeUnmount:M,destroyed:$,unmounted:B,render:K,renderTracked:Te,renderTriggered:ne,errorCaptured:X,serverPrefetch:Q,expose:_e,inheritAttrs:Ve,components:Xe,directives:ze,filters:Pt}=e;if(c&&Q_(c,s,null),o)for(const Y in o){const re=o[Y];J(re)&&(s[Y]=re.bind(n))}if(i){const Y=i.call(n,n);Pe(Y)&&(t.data=is(Y))}if(La=!0,r)for(const Y in r){const re=r[Y],At=J(re)?re.bind(n,n):J(re.get)?re.get.bind(n,n):Kt,Ut=!J(re)&&J(re.set)?re.set.bind(n):Kt,vt=Ct({get:At,set:Ut});Object.defineProperty(s,Y,{enumerable:!0,configurable:!0,get:()=>vt.value,set:Ge=>vt.value=Ge})}if(a)for(const Y in a)Zh(a[Y],s,n,Y);if(l){const Y=J(l)?l.call(n):l;Reflect.ownKeys(Y).forEach(re=>{yr(re,Y[re])})}u&&au(u,t,"c");function we(Y,re){G(re)?re.forEach(At=>Y(At.bind(n))):re&&Y(re.bind(n))}if(we(M_,d),we(xl,h),we(B_,m),we(F_,v),we(N_,y),we(L_,R),we(W_,X),we(V_,Te),we(H_,ne),we($_,M),we(Io,B),we(U_,Q),G(_e))if(_e.length){const Y=t.exposed||(t.exposed={});_e.forEach(re=>{Object.defineProperty(Y,re,{get:()=>n[re],set:At=>n[re]=At})})}else t.exposed||(t.exposed={});K&&t.render===Kt&&(t.render=K),Ve!=null&&(t.inheritAttrs=Ve),Xe&&(t.components=Xe),ze&&(t.directives=ze),Q&&Qh(t)}function Q_(t,e,n=Kt){G(t)&&(t=Da(t));for(const s in t){const i=t[s];let r;Pe(i)?"default"in i?r=Yt(i.from||s,i.default,!0):r=Yt(i.from||s):r=Yt(i),Le(r)?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>r.value,set:o=>r.value=o}):e[s]=r}}function au(t,e,n){Jt(G(t)?t.map(s=>s.bind(e.proxy)):t.bind(e.proxy),e,n)}function Zh(t,e,n,s){let i=s.includes(".")?mf(n,s):()=>n[s];if(Me(t)){const r=e[t];J(r)&&ts(i,r)}else if(J(t))ts(i,t.bind(n));else if(Pe(t))if(G(t))t.forEach(r=>Zh(r,e,n,s));else{const r=J(t.handler)?t.handler.bind(n):e[t.handler];J(r)&&ts(i,r,t)}}function ef(t){const e=t.type,{mixins:n,extends:s}=e,{mixins:i,optionsCache:r,config:{optionMergeStrategies:o}}=t.appContext,a=r.get(e);let l;return a?l=a:!i.length&&!n&&!s?l=e:(l={},i.length&&i.forEach(c=>Nr(l,c,o,!0)),Nr(l,e,o)),Pe(e)&&r.set(e,l),l}function Nr(t,e,n,s=!1){const{mixins:i,extends:r}=e;r&&Nr(t,r,n,!0),i&&i.forEach(o=>Nr(t,o,n,!0));for(const o in e)if(!(s&&o==="expose")){const a=J_[o]||n&&n[o];t[o]=a?a(t[o],e[o]):e[o]}return t}const J_={data:lu,props:cu,emits:cu,methods:gi,computed:gi,beforeCreate:Ze,created:Ze,beforeMount:Ze,mounted:Ze,beforeUpdate:Ze,updated:Ze,beforeDestroy:Ze,beforeUnmount:Ze,destroyed:Ze,unmounted:Ze,activated:Ze,deactivated:Ze,errorCaptured:Ze,serverPrefetch:Ze,components:gi,directives:gi,watch:Z_,provide:lu,inject:X_};function lu(t,e){return e?t?function(){return Qe(J(t)?t.call(this,this):t,J(e)?e.call(this,this):e)}:e:t}function X_(t,e){return gi(Da(t),Da(e))}function Da(t){if(G(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ze(t,e){return t?[...new Set([].concat(t,e))]:e}function gi(t,e){return t?Qe(Object.create(null),t,e):e}function cu(t,e){return t?G(t)&&G(e)?[...new Set([...t,...e])]:Qe(Object.create(null),ou(t),ou(e??{})):e}function Z_(t,e){if(!t)return e;if(!e)return t;const n=Qe(Object.create(null),t);for(const s in e)n[s]=Ze(t[s],e[s]);return n}function tf(){return{app:null,config:{isNativeTag:$g,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let ew=0;function tw(t,e){return function(s,i=null){J(s)||(s=Qe({},s)),i!=null&&!Pe(i)&&(i=null);const r=tf(),o=new WeakSet,a=[];let l=!1;const c=r.app={_uid:ew++,_component:s,_props:i,_container:null,_context:r,_instance:null,version:Bw,get config(){return r.config},set config(u){},use(u,...d){return o.has(u)||(u&&J(u.install)?(o.add(u),u.install(c,...d)):J(u)&&(o.add(u),u(c,...d))),c},mixin(u){return r.mixins.includes(u)||r.mixins.push(u),c},component(u,d){return d?(r.components[u]=d,c):r.components[u]},directive(u,d){return d?(r.directives[u]=d,c):r.directives[u]},mount(u,d,h){if(!l){const m=c._ceVNode||xe(s,i);return m.appContext=r,h===!0?h="svg":h===!1&&(h=void 0),t(m,u,h),l=!0,c._container=u,u.__vue_app__=c,Dl(m.component)}},onUnmount(u){a.push(u)},unmount(){l&&(Jt(a,c._instance,16),t(null,c._container),delete c._container.__vue_app__)},provide(u,d){return r.provides[u]=d,c},runWithContext(u){const d=es;es=c;try{return u()}finally{es=d}}};return c}}let es=null;function yr(t,e){if(je){let n=je.provides;const s=je.parent&&je.parent.provides;s===n&&(n=je.provides=Object.create(s)),n[t]=e}}function Yt(t,e,n=!1){const s=je||Et;if(s||es){const i=es?es._context.provides:s?s.parent==null?s.vnode.appContext&&s.vnode.appContext.provides:s.parent.provides:void 0;if(i&&t in i)return i[t];if(arguments.length>1)return n&&J(e)?e.call(s&&s.proxy):e}}function nw(){return!!(je||Et||es)}const nf={},sf=()=>Object.create(nf),rf=t=>Object.getPrototypeOf(t)===nf;function sw(t,e,n,s=!1){const i={},r=sf();t.propsDefaults=Object.create(null),of(t,e,i,r);for(const o in t.propsOptions[0])o in i||(i[o]=void 0);n?t.props=s?i:Uh(i):t.type.props?t.props=i:t.props=r,t.attrs=r}function iw(t,e,n,s){const{props:i,attrs:r,vnode:{patchFlag:o}}=t,a=ae(i),[l]=t.propsOptions;let c=!1;if((s||o>0)&&!(o&16)){if(o&8){const u=t.vnode.dynamicProps;for(let d=0;d<u.length;d++){let h=u[d];if(So(t.emitsOptions,h))continue;const m=e[h];if(l)if(fe(r,h))m!==r[h]&&(r[h]=m,c=!0);else{const v=Tt(h);i[v]=Ma(l,a,v,m,t,!1)}else m!==r[h]&&(r[h]=m,c=!0)}}}else{of(t,e,i,r)&&(c=!0);let u;for(const d in a)(!e||!fe(e,d)&&((u=ms(d))===d||!fe(e,u)))&&(l?n&&(n[d]!==void 0||n[u]!==void 0)&&(i[d]=Ma(l,a,d,void 0,t,!0)):delete i[d]);if(r!==a)for(const d in r)(!e||!fe(e,d))&&(delete r[d],c=!0)}c&&on(t.attrs,"set","")}function of(t,e,n,s){const[i,r]=t.propsOptions;let o=!1,a;if(e)for(let l in e){if(_i(l))continue;const c=e[l];let u;i&&fe(i,u=Tt(l))?!r||!r.includes(u)?n[u]=c:(a||(a={}))[u]=c:So(t.emitsOptions,l)||(!(l in s)||c!==s[l])&&(s[l]=c,o=!0)}if(r){const l=ae(n),c=a||Ce;for(let u=0;u<r.length;u++){const d=r[u];n[d]=Ma(i,l,d,c[d],t,!fe(c,d))}}return o}function Ma(t,e,n,s,i,r){const o=t[n];if(o!=null){const a=fe(o,"default");if(a&&s===void 0){const l=o.default;if(o.type!==Function&&!o.skipFactory&&J(l)){const{propsDefaults:c}=i;if(n in c)s=c[n];else{const u=Ji(i);s=c[n]=l.call(null,e),u()}}else s=l;i.ce&&i.ce._setProp(n,s)}o[0]&&(r&&!a?s=!1:o[1]&&(s===""||s===ms(n))&&(s=!0))}return s}const rw=new WeakMap;function af(t,e,n=!1){const s=n?rw:e.propsCache,i=s.get(t);if(i)return i;const r=t.props,o={},a=[];let l=!1;if(!J(t)){const u=d=>{l=!0;const[h,m]=af(d,e,!0);Qe(o,h),m&&a.push(...m)};!n&&e.mixins.length&&e.mixins.forEach(u),t.extends&&u(t.extends),t.mixins&&t.mixins.forEach(u)}if(!r&&!l)return Pe(t)&&s.set(t,ks),ks;if(G(r))for(let u=0;u<r.length;u++){const d=Tt(r[u]);uu(d)&&(o[d]=Ce)}else if(r)for(const u in r){const d=Tt(u);if(uu(d)){const h=r[u],m=o[d]=G(h)||J(h)?{type:h}:Qe({},h),v=m.type;let y=!1,R=!0;if(G(v))for(let F=0;F<v.length;++F){const M=v[F],$=J(M)&&M.name;if($==="Boolean"){y=!0;break}else $==="String"&&(R=!1)}else y=J(v)&&v.name==="Boolean";m[0]=y,m[1]=R,(y||fe(m,"default"))&&a.push(d)}}const c=[o,a];return Pe(t)&&s.set(t,c),c}function uu(t){return t[0]!=="$"&&!_i(t)}const lf=t=>t[0]==="_"||t==="$stable",Nl=t=>G(t)?t.map(Gt):[Gt(t)],ow=(t,e,n)=>{if(e._n)return e;const s=R_((...i)=>Nl(e(...i)),n);return s._c=!1,s},cf=(t,e,n)=>{const s=t._ctx;for(const i in t){if(lf(i))continue;const r=t[i];if(J(r))e[i]=ow(i,r,s);else if(r!=null){const o=Nl(r);e[i]=()=>o}}},uf=(t,e)=>{const n=Nl(e);t.slots.default=()=>n},df=(t,e,n)=>{for(const s in e)(n||s!=="_")&&(t[s]=e[s])},aw=(t,e,n)=>{const s=t.slots=sf();if(t.vnode.shapeFlag&32){const i=e._;i?(df(s,e,n),n&&vh(s,"_",i,!0)):cf(e,s)}else e&&uf(t,e)},lw=(t,e,n)=>{const{vnode:s,slots:i}=t;let r=!0,o=Ce;if(s.shapeFlag&32){const a=e._;a?n&&a===1?r=!1:df(i,e,n):(r=!e.$stable,cf(e,i)),o=e}else e&&(uf(t,e),o={default:1});if(r)for(const a in i)!lf(a)&&o[a]==null&&delete i[a]},ft=Cw;function cw(t){return uw(t)}function uw(t,e){const n=yo();n.__VUE__=!0;const{insert:s,remove:i,patchProp:r,createElement:o,createText:a,createComment:l,setText:c,setElementText:u,parentNode:d,nextSibling:h,setScopeId:m=Kt,insertStaticContent:v}=t,y=(f,p,g,b=null,I=null,E=null,N=void 0,x=null,A=!!p.dynamicChildren)=>{if(f===p)return;f&&!ui(f,p)&&(b=C(f),Ge(f,I,E,!0),f=null),p.patchFlag===-2&&(A=!1,p.dynamicChildren=null);const{type:S,ref:W,shapeFlag:D}=p;switch(S){case To:R(f,p,g,b);break;case os:F(f,p,g,b);break;case ia:f==null&&M(p,g,b,N);break;case yt:Xe(f,p,g,b,I,E,N,x,A);break;default:D&1?K(f,p,g,b,I,E,N,x,A):D&6?ze(f,p,g,b,I,E,N,x,A):(D&64||D&128)&&S.process(f,p,g,b,I,E,N,x,A,w)}W!=null&&I&&Or(W,f&&f.ref,E,p||f,!p)},R=(f,p,g,b)=>{if(f==null)s(p.el=a(p.children),g,b);else{const I=p.el=f.el;p.children!==f.children&&c(I,p.children)}},F=(f,p,g,b)=>{f==null?s(p.el=l(p.children||""),g,b):p.el=f.el},M=(f,p,g,b)=>{[f.el,f.anchor]=v(f.children,p,g,b,f.el,f.anchor)},$=({el:f,anchor:p},g,b)=>{let I;for(;f&&f!==p;)I=h(f),s(f,g,b),f=I;s(p,g,b)},B=({el:f,anchor:p})=>{let g;for(;f&&f!==p;)g=h(f),i(f),f=g;i(p)},K=(f,p,g,b,I,E,N,x,A)=>{p.type==="svg"?N="svg":p.type==="math"&&(N="mathml"),f==null?Te(p,g,b,I,E,N,x,A):Q(f,p,I,E,N,x,A)},Te=(f,p,g,b,I,E,N,x)=>{let A,S;const{props:W,shapeFlag:D,transition:H,dirs:z}=f;if(A=f.el=o(f.type,E,W&&W.is,W),D&8?u(A,f.children):D&16&&X(f.children,A,null,b,I,sa(f,E),N,x),z&&qn(f,null,b,"created"),ne(A,f,f.scopeId,N,b),W){for(const ve in W)ve!=="value"&&!_i(ve)&&r(A,ve,null,W[ve],E,b);"value"in W&&r(A,"value",null,W.value,E),(S=W.onVnodeBeforeMount)&&jt(S,b,f)}z&&qn(f,null,b,"beforeMount");const se=dw(I,H);se&&H.beforeEnter(A),s(A,p,g),((S=W&&W.onVnodeMounted)||se||z)&&ft(()=>{S&&jt(S,b,f),se&&H.enter(A),z&&qn(f,null,b,"mounted")},I)},ne=(f,p,g,b,I)=>{if(g&&m(f,g),b)for(let E=0;E<b.length;E++)m(f,b[E]);if(I){let E=I.subTree;if(p===E||_f(E.type)&&(E.ssContent===p||E.ssFallback===p)){const N=I.vnode;ne(f,N,N.scopeId,N.slotScopeIds,I.parent)}}},X=(f,p,g,b,I,E,N,x,A=0)=>{for(let S=A;S<f.length;S++){const W=f[S]=x?Cn(f[S]):Gt(f[S]);y(null,W,p,g,b,I,E,N,x)}},Q=(f,p,g,b,I,E,N)=>{const x=p.el=f.el;let{patchFlag:A,dynamicChildren:S,dirs:W}=p;A|=f.patchFlag&16;const D=f.props||Ce,H=p.props||Ce;let z;if(g&&zn(g,!1),(z=H.onVnodeBeforeUpdate)&&jt(z,g,p,f),W&&qn(p,f,g,"beforeUpdate"),g&&zn(g,!0),(D.innerHTML&&H.innerHTML==null||D.textContent&&H.textContent==null)&&u(x,""),S?_e(f.dynamicChildren,S,x,g,b,sa(p,I),E):N||re(f,p,x,null,g,b,sa(p,I),E,!1),A>0){if(A&16)Ve(x,D,H,g,I);else if(A&2&&D.class!==H.class&&r(x,"class",null,H.class,I),A&4&&r(x,"style",D.style,H.style,I),A&8){const se=p.dynamicProps;for(let ve=0;ve<se.length;ve++){const pe=se[ve],dt=D[pe],at=H[pe];(at!==dt||pe==="value")&&r(x,pe,dt,at,I,g)}}A&1&&f.children!==p.children&&u(x,p.children)}else!N&&S==null&&Ve(x,D,H,g,I);((z=H.onVnodeUpdated)||W)&&ft(()=>{z&&jt(z,g,p,f),W&&qn(p,f,g,"updated")},b)},_e=(f,p,g,b,I,E,N)=>{for(let x=0;x<p.length;x++){const A=f[x],S=p[x],W=A.el&&(A.type===yt||!ui(A,S)||A.shapeFlag&70)?d(A.el):g;y(A,S,W,null,b,I,E,N,!0)}},Ve=(f,p,g,b,I)=>{if(p!==g){if(p!==Ce)for(const E in p)!_i(E)&&!(E in g)&&r(f,E,p[E],null,I,b);for(const E in g){if(_i(E))continue;const N=g[E],x=p[E];N!==x&&E!=="value"&&r(f,E,x,N,I,b)}"value"in g&&r(f,"value",p.value,g.value,I)}},Xe=(f,p,g,b,I,E,N,x,A)=>{const S=p.el=f?f.el:a(""),W=p.anchor=f?f.anchor:a("");let{patchFlag:D,dynamicChildren:H,slotScopeIds:z}=p;z&&(x=x?x.concat(z):z),f==null?(s(S,g,b),s(W,g,b),X(p.children||[],g,W,I,E,N,x,A)):D>0&&D&64&&H&&f.dynamicChildren?(_e(f.dynamicChildren,H,g,I,E,N,x),(p.key!=null||I&&p===I.subTree)&&hf(f,p,!0)):re(f,p,g,W,I,E,N,x,A)},ze=(f,p,g,b,I,E,N,x,A)=>{p.slotScopeIds=x,f==null?p.shapeFlag&512?I.ctx.activate(p,g,b,N,A):Pt(p,g,b,I,E,N,A):$t(f,p,A)},Pt=(f,p,g,b,I,E,N)=>{const x=f.component=Rw(f,b,I);if(Jh(f)&&(x.ctx.renderer=w),xw(x,!1,N),x.asyncDep){if(I&&I.registerDep(x,we,N),!f.el){const A=x.subTree=xe(os);F(null,A,p,g)}}else we(x,f,p,g,I,E,N)},$t=(f,p,g)=>{const b=p.component=f.component;if(yw(f,p,g))if(b.asyncDep&&!b.asyncResolved){Y(b,p,g);return}else b.next=p,b.update();else p.el=f.el,b.vnode=p},we=(f,p,g,b,I,E,N)=>{const x=()=>{if(f.isMounted){let{next:D,bu:H,u:z,parent:se,vnode:ve}=f;{const Vt=ff(f);if(Vt){D&&(D.el=ve.el,Y(f,D,N)),Vt.asyncDep.then(()=>{f.isUnmounted||x()});return}}let pe=D,dt;zn(f,!1),D?(D.el=ve.el,Y(f,D,N)):D=ve,H&&Jo(H),(dt=D.props&&D.props.onVnodeBeforeUpdate)&&jt(dt,se,D,ve),zn(f,!0);const at=hu(f),Ht=f.subTree;f.subTree=at,y(Ht,at,d(Ht.el),C(Ht),f,I,E),D.el=at.el,pe===null&&bw(f,at.el),z&&ft(z,I),(dt=D.props&&D.props.onVnodeUpdated)&&ft(()=>jt(dt,se,D,ve),I)}else{let D;const{el:H,props:z}=p,{bm:se,m:ve,parent:pe,root:dt,type:at}=f,Ht=yi(p);zn(f,!1),se&&Jo(se),!Ht&&(D=z&&z.onVnodeBeforeMount)&&jt(D,pe,p),zn(f,!0);{dt.ce&&dt.ce._injectChildStyle(at);const Vt=f.subTree=hu(f);y(null,Vt,g,b,f,I,E),p.el=Vt.el}if(ve&&ft(ve,I),!Ht&&(D=z&&z.onVnodeMounted)){const Vt=p;ft(()=>jt(D,pe,Vt),I)}(p.shapeFlag&256||pe&&yi(pe.vnode)&&pe.vnode.shapeFlag&256)&&f.a&&ft(f.a,I),f.isMounted=!0,p=g=b=null}};f.scope.on();const A=f.effect=new Th(x);f.scope.off();const S=f.update=A.run.bind(A),W=f.job=A.runIfDirty.bind(A);W.i=f,W.id=f.uid,A.scheduler=()=>Al(W),zn(f,!0),S()},Y=(f,p,g)=>{p.component=f;const b=f.vnode.props;f.vnode=p,f.next=null,iw(f,p.props,b,g),lw(f,p.children,g),Un(),iu(f),Hn()},re=(f,p,g,b,I,E,N,x,A=!1)=>{const S=f&&f.children,W=f?f.shapeFlag:0,D=p.children,{patchFlag:H,shapeFlag:z}=p;if(H>0){if(H&128){Ut(S,D,g,b,I,E,N,x,A);return}else if(H&256){At(S,D,g,b,I,E,N,x,A);return}}z&8?(W&16&&ot(S,I,E),D!==S&&u(g,D)):W&16?z&16?Ut(S,D,g,b,I,E,N,x,A):ot(S,I,E,!0):(W&8&&u(g,""),z&16&&X(D,g,b,I,E,N,x,A))},At=(f,p,g,b,I,E,N,x,A)=>{f=f||ks,p=p||ks;const S=f.length,W=p.length,D=Math.min(S,W);let H;for(H=0;H<D;H++){const z=p[H]=A?Cn(p[H]):Gt(p[H]);y(f[H],z,g,null,I,E,N,x,A)}S>W?ot(f,I,E,!0,!1,D):X(p,g,b,I,E,N,x,A,D)},Ut=(f,p,g,b,I,E,N,x,A)=>{let S=0;const W=p.length;let D=f.length-1,H=W-1;for(;S<=D&&S<=H;){const z=f[S],se=p[S]=A?Cn(p[S]):Gt(p[S]);if(ui(z,se))y(z,se,g,null,I,E,N,x,A);else break;S++}for(;S<=D&&S<=H;){const z=f[D],se=p[H]=A?Cn(p[H]):Gt(p[H]);if(ui(z,se))y(z,se,g,null,I,E,N,x,A);else break;D--,H--}if(S>D){if(S<=H){const z=H+1,se=z<W?p[z].el:b;for(;S<=H;)y(null,p[S]=A?Cn(p[S]):Gt(p[S]),g,se,I,E,N,x,A),S++}}else if(S>H)for(;S<=D;)Ge(f[S],I,E,!0),S++;else{const z=S,se=S,ve=new Map;for(S=se;S<=H;S++){const ht=p[S]=A?Cn(p[S]):Gt(p[S]);ht.key!=null&&ve.set(ht.key,S)}let pe,dt=0;const at=H-se+1;let Ht=!1,Vt=0;const li=new Array(at);for(S=0;S<at;S++)li[S]=0;for(S=z;S<=D;S++){const ht=f[S];if(dt>=at){Ge(ht,I,E,!0);continue}let Wt;if(ht.key!=null)Wt=ve.get(ht.key);else for(pe=se;pe<=H;pe++)if(li[pe-se]===0&&ui(ht,p[pe])){Wt=pe;break}Wt===void 0?Ge(ht,I,E,!0):(li[Wt-se]=S+1,Wt>=Vt?Vt=Wt:Ht=!0,y(ht,p[Wt],g,null,I,E,N,x,A),dt++)}const Zc=Ht?hw(li):ks;for(pe=Zc.length-1,S=at-1;S>=0;S--){const ht=se+S,Wt=p[ht],eu=ht+1<W?p[ht+1].el:b;li[S]===0?y(null,Wt,g,eu,I,E,N,x,A):Ht&&(pe<0||S!==Zc[pe]?vt(Wt,g,eu,2):pe--)}}},vt=(f,p,g,b,I=null)=>{const{el:E,type:N,transition:x,children:A,shapeFlag:S}=f;if(S&6){vt(f.component.subTree,p,g,b);return}if(S&128){f.suspense.move(p,g,b);return}if(S&64){N.move(f,p,g,w);return}if(N===yt){s(E,p,g);for(let D=0;D<A.length;D++)vt(A[D],p,g,b);s(f.anchor,p,g);return}if(N===ia){$(f,p,g);return}if(b!==2&&S&1&&x)if(b===0)x.beforeEnter(E),s(E,p,g),ft(()=>x.enter(E),I);else{const{leave:D,delayLeave:H,afterLeave:z}=x,se=()=>s(E,p,g),ve=()=>{D(E,()=>{se(),z&&z()})};H?H(E,se,ve):ve()}else s(E,p,g)},Ge=(f,p,g,b=!1,I=!1)=>{const{type:E,props:N,ref:x,children:A,dynamicChildren:S,shapeFlag:W,patchFlag:D,dirs:H,cacheIndex:z}=f;if(D===-2&&(I=!1),x!=null&&Or(x,null,g,f,!0),z!=null&&(p.renderCache[z]=void 0),W&256){p.ctx.deactivate(f);return}const se=W&1&&H,ve=!yi(f);let pe;if(ve&&(pe=N&&N.onVnodeBeforeUnmount)&&jt(pe,p,f),W&6)jn(f.component,g,b);else{if(W&128){f.suspense.unmount(g,b);return}se&&qn(f,null,p,"beforeUnmount"),W&64?f.type.remove(f,p,g,w,b):S&&!S.hasOnce&&(E!==yt||D>0&&D&64)?ot(S,p,g,!1,!0):(E===yt&&D&384||!I&&W&16)&&ot(A,p,g),b&&ue(f)}(ve&&(pe=N&&N.onVnodeUnmounted)||se)&&ft(()=>{pe&&jt(pe,p,f),se&&qn(f,null,p,"unmounted")},g)},ue=f=>{const{type:p,el:g,anchor:b,transition:I}=f;if(p===yt){tn(g,b);return}if(p===ia){B(f);return}const E=()=>{i(g),I&&!I.persisted&&I.afterLeave&&I.afterLeave()};if(f.shapeFlag&1&&I&&!I.persisted){const{leave:N,delayLeave:x}=I,A=()=>N(g,E);x?x(f.el,E,A):A()}else E()},tn=(f,p)=>{let g;for(;f!==p;)g=h(f),i(f),f=g;i(p)},jn=(f,p,g)=>{const{bum:b,scope:I,job:E,subTree:N,um:x,m:A,a:S}=f;du(A),du(S),b&&Jo(b),I.stop(),E&&(E.flags|=8,Ge(N,f,p,g)),x&&ft(x,p),ft(()=>{f.isUnmounted=!0},p),p&&p.pendingBranch&&!p.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===p.pendingId&&(p.deps--,p.deps===0&&p.resolve())},ot=(f,p,g,b=!1,I=!1,E=0)=>{for(let N=E;N<f.length;N++)Ge(f[N],p,g,b,I)},C=f=>{if(f.shapeFlag&6)return C(f.component.subTree);if(f.shapeFlag&128)return f.suspense.next();const p=h(f.anchor||f.el),g=p&&p[x_];return g?h(g):p};let T=!1;const O=(f,p,g)=>{f==null?p._vnode&&Ge(p._vnode,null,null,!0):y(p._vnode||null,f,p,null,null,null,g),p._vnode=f,T||(T=!0,iu(),zh(),T=!1)},w={p:y,um:Ge,m:vt,r:ue,mt:Pt,mc:X,pc:re,pbc:_e,n:C,o:t};return{render:O,hydrate:void 0,createApp:tw(O)}}function sa({type:t,props:e},n){return n==="svg"&&t==="foreignObject"||n==="mathml"&&t==="annotation-xml"&&e&&e.encoding&&e.encoding.includes("html")?void 0:n}function zn({effect:t,job:e},n){n?(t.flags|=32,e.flags|=4):(t.flags&=-33,e.flags&=-5)}function dw(t,e){return(!t||t&&!t.pendingBranch)&&e&&!e.persisted}function hf(t,e,n=!1){const s=t.children,i=e.children;if(G(s)&&G(i))for(let r=0;r<s.length;r++){const o=s[r];let a=i[r];a.shapeFlag&1&&!a.dynamicChildren&&((a.patchFlag<=0||a.patchFlag===32)&&(a=i[r]=Cn(i[r]),a.el=o.el),!n&&a.patchFlag!==-2&&hf(o,a)),a.type===To&&(a.el=o.el)}}function hw(t){const e=t.slice(),n=[0];let s,i,r,o,a;const l=t.length;for(s=0;s<l;s++){const c=t[s];if(c!==0){if(i=n[n.length-1],t[i]<c){e[s]=i,n.push(s);continue}for(r=0,o=n.length-1;r<o;)a=r+o>>1,t[n[a]]<c?r=a+1:o=a;c<t[n[r]]&&(r>0&&(e[s]=n[r-1]),n[r]=s)}}for(r=n.length,o=n[r-1];r-- >0;)n[r]=o,o=e[o];return n}function ff(t){const e=t.subTree.component;if(e)return e.asyncDep&&!e.asyncResolved?e:ff(e)}function du(t){if(t)for(let e=0;e<t.length;e++)t[e].flags|=8}const fw=Symbol.for("v-scx"),pw=()=>Yt(fw);function ts(t,e,n){return pf(t,e,n)}function pf(t,e,n=Ce){const{immediate:s,deep:i,flush:r,once:o}=n,a=Qe({},n),l=e&&s||!e&&r!=="post";let c;if(Mi){if(r==="sync"){const m=pw();c=m.__watcherHandles||(m.__watcherHandles=[])}else if(!l){const m=()=>{};return m.stop=Kt,m.resume=Kt,m.pause=Kt,m}}const u=je;a.call=(m,v,y)=>Jt(m,u,v,y);let d=!1;r==="post"?a.scheduler=m=>{ft(m,u&&u.suspense)}:r!=="sync"&&(d=!0,a.scheduler=(m,v)=>{v?m():Al(m)}),a.augmentJob=m=>{e&&(m.flags|=4),d&&(m.flags|=2,u&&(m.id=u.uid,m.i=u))};const h=T_(t,e,a);return Mi&&(c?c.push(h):l&&h()),h}function mw(t,e,n){const s=this.proxy,i=Me(t)?t.includes(".")?mf(s,t):()=>s[t]:t.bind(s,s);let r;J(e)?r=e:(r=e.handler,n=e);const o=Ji(this),a=pf(i,r.bind(s),n);return o(),a}function mf(t,e){const n=e.split(".");return()=>{let s=t;for(let i=0;i<n.length&&s;i++)s=s[n[i]];return s}}const gw=(t,e)=>e==="modelValue"||e==="model-value"?t.modelModifiers:t[`${e}Modifiers`]||t[`${Tt(e)}Modifiers`]||t[`${ms(e)}Modifiers`];function _w(t,e,...n){if(t.isUnmounted)return;const s=t.vnode.props||Ce;let i=n;const r=e.startsWith("update:"),o=r&&gw(s,e.slice(7));o&&(o.trim&&(i=n.map(u=>Me(u)?u.trim():u)),o.number&&(i=n.map(jg)));let a,l=s[a=Qo(e)]||s[a=Qo(Tt(e))];!l&&r&&(l=s[a=Qo(ms(e))]),l&&Jt(l,t,6,i);const c=s[a+"Once"];if(c){if(!t.emitted)t.emitted={};else if(t.emitted[a])return;t.emitted[a]=!0,Jt(c,t,6,i)}}function gf(t,e,n=!1){const s=e.emitsCache,i=s.get(t);if(i!==void 0)return i;const r=t.emits;let o={},a=!1;if(!J(t)){const l=c=>{const u=gf(c,e,!0);u&&(a=!0,Qe(o,u))};!n&&e.mixins.length&&e.mixins.forEach(l),t.extends&&l(t.extends),t.mixins&&t.mixins.forEach(l)}return!r&&!a?(Pe(t)&&s.set(t,null),null):(G(r)?r.forEach(l=>o[l]=null):Qe(o,r),Pe(t)&&s.set(t,o),o)}function So(t,e){return!t||!go(e)?!1:(e=e.slice(2).replace(/Once$/,""),fe(t,e[0].toLowerCase()+e.slice(1))||fe(t,ms(e))||fe(t,e))}function hu(t){const{type:e,vnode:n,proxy:s,withProxy:i,propsOptions:[r],slots:o,attrs:a,emit:l,render:c,renderCache:u,props:d,data:h,setupState:m,ctx:v,inheritAttrs:y}=t,R=xr(t);let F,M;try{if(n.shapeFlag&4){const B=i||s,K=B;F=Gt(c.call(K,B,u,d,m,h,v)),M=a}else{const B=e;F=Gt(B.length>1?B(d,{attrs:a,slots:o,emit:l}):B(d,null)),M=e.props?a:ww(a)}}catch(B){Ci.length=0,Co(B,t,1),F=xe(os)}let $=F;if(M&&y!==!1){const B=Object.keys(M),{shapeFlag:K}=$;B.length&&K&7&&(r&&B.some(gl)&&(M=vw(M,r)),$=Fs($,M,!1,!0))}return n.dirs&&($=Fs($,null,!1,!0),$.dirs=$.dirs?$.dirs.concat(n.dirs):n.dirs),n.transition&&Rl($,n.transition),F=$,xr(R),F}const ww=t=>{let e;for(const n in t)(n==="class"||n==="style"||go(n))&&((e||(e={}))[n]=t[n]);return e},vw=(t,e)=>{const n={};for(const s in t)(!gl(s)||!(s.slice(9)in e))&&(n[s]=t[s]);return n};function yw(t,e,n){const{props:s,children:i,component:r}=t,{props:o,children:a,patchFlag:l}=e,c=r.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return s?fu(s,o,c):!!o;if(l&8){const u=e.dynamicProps;for(let d=0;d<u.length;d++){const h=u[d];if(o[h]!==s[h]&&!So(c,h))return!0}}}else return(i||a)&&(!a||!a.$stable)?!0:s===o?!1:s?o?fu(s,o,c):!0:!!o;return!1}function fu(t,e,n){const s=Object.keys(e);if(s.length!==Object.keys(t).length)return!0;for(let i=0;i<s.length;i++){const r=s[i];if(e[r]!==t[r]&&!So(n,r))return!0}return!1}function bw({vnode:t,parent:e},n){for(;e;){const s=e.subTree;if(s.suspense&&s.suspense.activeBranch===t&&(s.el=t.el),s===t)(t=e.vnode).el=n,e=e.parent;else break}}const _f=t=>t.__isSuspense;function Cw(t,e){e&&e.pendingBranch?G(t)?e.effects.push(...t):e.effects.push(t):A_(t)}const yt=Symbol.for("v-fgt"),To=Symbol.for("v-txt"),os=Symbol.for("v-cmt"),ia=Symbol.for("v-stc"),Ci=[];let pt=null;function oe(t=!1){Ci.push(pt=t?null:[])}function Ew(){Ci.pop(),pt=Ci[Ci.length-1]||null}let Di=1;function pu(t,e=!1){Di+=t,t<0&&pt&&e&&(pt.hasOnce=!0)}function wf(t){return t.dynamicChildren=Di>0?pt||ks:null,Ew(),Di>0&&pt&&pt.push(t),t}function le(t,e,n,s,i,r){return wf(U(t,e,n,s,i,r,!0))}function Iw(t,e,n,s,i){return wf(xe(t,e,n,s,i,!0))}function Lr(t){return t?t.__v_isVNode===!0:!1}function ui(t,e){return t.type===e.type&&t.key===e.key}const vf=({key:t})=>t??null,br=({ref:t,ref_key:e,ref_for:n})=>(typeof t=="number"&&(t=""+t),t!=null?Me(t)||Le(t)||J(t)?{i:Et,r:t,k:e,f:!!n}:t:null);function U(t,e=null,n=null,s=0,i=null,r=t===yt?0:1,o=!1,a=!1){const l={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&vf(e),ref:e&&br(e),scopeId:Kh,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetStart:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:s,dynamicProps:i,dynamicChildren:null,appContext:null,ctx:Et};return a?(Ll(l,n),r&128&&t.normalize(l)):n&&(l.shapeFlag|=Me(n)?8:16),Di>0&&!o&&pt&&(l.patchFlag>0||r&6)&&l.patchFlag!==32&&pt.push(l),l}const xe=Sw;function Sw(t,e=null,n=null,s=0,i=null,r=!1){if((!t||t===z_)&&(t=os),Lr(t)){const a=Fs(t,e,!0);return n&&Ll(a,n),Di>0&&!r&&pt&&(a.shapeFlag&6?pt[pt.indexOf(t)]=a:pt.push(a)),a.patchFlag=-2,a}if(Mw(t)&&(t=t.__vccOpts),e){e=Tw(e);let{class:a,style:l}=e;a&&!Me(a)&&(e.class=Yi(a)),Pe(l)&&(Tl(l)&&!G(l)&&(l=Qe({},l)),e.style=vl(l))}const o=Me(t)?1:_f(t)?128:O_(t)?64:Pe(t)?4:J(t)?2:0;return U(t,e,n,s,i,o,r,!0)}function Tw(t){return t?Tl(t)||rf(t)?Qe({},t):t:null}function Fs(t,e,n=!1,s=!1){const{props:i,ref:r,patchFlag:o,children:a,transition:l}=t,c=e?kw(i||{},e):i,u={__v_isVNode:!0,__v_skip:!0,type:t.type,props:c,key:c&&vf(c),ref:e&&e.ref?n&&r?G(r)?r.concat(br(e)):[r,br(e)]:br(e):r,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:a,target:t.target,targetStart:t.targetStart,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==yt?o===-1?16:o|16:o,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:l,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&Fs(t.ssContent),ssFallback:t.ssFallback&&Fs(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce};return l&&s&&Rl(u,l.clone(u)),u}function an(t=" ",e=0){return xe(To,null,t,e)}function bt(t="",e=!1){return e?(oe(),Iw(os,null,t)):xe(os,null,t)}function Gt(t){return t==null||typeof t=="boolean"?xe(os):G(t)?xe(yt,null,t.slice()):Lr(t)?Cn(t):xe(To,null,String(t))}function Cn(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:Fs(t)}function Ll(t,e){let n=0;const{shapeFlag:s}=t;if(e==null)e=null;else if(G(e))n=16;else if(typeof e=="object")if(s&65){const i=e.default;i&&(i._c&&(i._d=!1),Ll(t,i()),i._c&&(i._d=!0));return}else{n=32;const i=e._;!i&&!rf(e)?e._ctx=Et:i===3&&Et&&(Et.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else J(e)?(e={default:e,_ctx:Et},n=32):(e=String(e),s&64?(n=16,e=[an(e)]):n=8);t.children=e,t.shapeFlag|=n}function kw(...t){const e={};for(let n=0;n<t.length;n++){const s=t[n];for(const i in s)if(i==="class")e.class!==s.class&&(e.class=Yi([e.class,s.class]));else if(i==="style")e.style=vl([e.style,s.style]);else if(go(i)){const r=e[i],o=s[i];o&&r!==o&&!(G(r)&&r.includes(o))&&(e[i]=r?[].concat(r,o):o)}else i!==""&&(e[i]=s[i])}return e}function jt(t,e,n,s=null){Jt(t,e,7,[n,s])}const Pw=tf();let Aw=0;function Rw(t,e,n){const s=t.type,i=(e?e.appContext:t.appContext)||Pw,r={uid:Aw++,vnode:t,type:s,parent:e,appContext:i,root:null,next:null,subTree:null,effect:null,update:null,job:null,scope:new Eh(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(i.provides),ids:e?e.ids:["",0,0],accessCache:null,renderCache:[],components:null,directives:null,propsOptions:af(s,i),emitsOptions:gf(s,i),emit:null,emitted:null,propsDefaults:Ce,inheritAttrs:s.inheritAttrs,ctx:Ce,data:Ce,props:Ce,attrs:Ce,slots:Ce,refs:Ce,setupState:Ce,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=e?e.root:r,r.emit=_w.bind(null,r),t.ce&&t.ce(r),r}let je=null,Dr,Ba;{const t=yo(),e=(n,s)=>{let i;return(i=t[n])||(i=t[n]=[]),i.push(s),r=>{i.length>1?i.forEach(o=>o(r)):i[0](r)}};Dr=e("__VUE_INSTANCE_SETTERS__",n=>je=n),Ba=e("__VUE_SSR_SETTERS__",n=>Mi=n)}const Ji=t=>{const e=je;return Dr(t),t.scope.on(),()=>{t.scope.off(),Dr(e)}},mu=()=>{je&&je.scope.off(),Dr(null)};function yf(t){return t.vnode.shapeFlag&4}let Mi=!1;function xw(t,e=!1,n=!1){e&&Ba(e);const{props:s,children:i}=t.vnode,r=yf(t);sw(t,s,r,e),aw(t,i,n);const o=r?Ow(t,e):void 0;return e&&Ba(!1),o}function Ow(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=new Proxy(t.ctx,K_);const{setup:s}=n;if(s){Un();const i=t.setupContext=s.length>1?Lw(t):null,r=Ji(t),o=Qi(s,t,0,[t.props,i]),a=gh(o);if(Hn(),r(),(a||t.sp)&&!yi(t)&&Qh(t),a){if(o.then(mu,mu),e)return o.then(l=>{gu(t,l)}).catch(l=>{Co(l,t,0)});t.asyncDep=o}else gu(t,o)}else bf(t)}function gu(t,e,n){J(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Pe(e)&&(t.setupState=Wh(e)),bf(t)}function bf(t,e,n){const s=t.type;t.render||(t.render=s.render||Kt);{const i=Ji(t);Un();try{Y_(t)}finally{Hn(),i()}}}const Nw={get(t,e){return Ke(t,"get",""),t[e]}};function Lw(t){const e=n=>{t.exposed=n||{}};return{attrs:new Proxy(t.attrs,Nw),slots:t.slots,emit:t.emit,expose:e}}function Dl(t){return t.exposed?t.exposeProxy||(t.exposeProxy=new Proxy(Wh(kl(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in bi)return bi[n](t)},has(e,n){return n in e||n in bi}})):t.proxy}function Dw(t,e=!0){return J(t)?t.displayName||t.name:t.name||e&&t.__name}function Mw(t){return J(t)&&"__vccOpts"in t}const Ct=(t,e)=>I_(t,e,Mi);function Cf(t,e,n){const s=arguments.length;return s===2?Pe(e)&&!G(e)?Lr(e)?xe(t,null,[e]):xe(t,e):xe(t,null,e):(s>3?n=Array.prototype.slice.call(arguments,2):s===3&&Lr(n)&&(n=[n]),xe(t,e,n))}const Bw="3.5.13";/**
* @vue/runtime-dom v3.5.13
* (c) 2018-present Yuxi (Evan) You and Vue contributors
* @license MIT
**/let Fa;const _u=typeof window<"u"&&window.trustedTypes;if(_u)try{Fa=_u.createPolicy("vue",{createHTML:t=>t})}catch{}const Ef=Fa?t=>Fa.createHTML(t):t=>t,Fw="http://www.w3.org/2000/svg",$w="http://www.w3.org/1998/Math/MathML",rn=typeof document<"u"?document:null,wu=rn&&rn.createElement("template"),Uw={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,s)=>{const i=e==="svg"?rn.createElementNS(Fw,t):e==="mathml"?rn.createElementNS($w,t):n?rn.createElement(t,{is:n}):rn.createElement(t);return t==="select"&&s&&s.multiple!=null&&i.setAttribute("multiple",s.multiple),i},createText:t=>rn.createTextNode(t),createComment:t=>rn.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>rn.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,s,i,r){const o=n?n.previousSibling:e.lastChild;if(i&&(i===r||i.nextSibling))for(;e.insertBefore(i.cloneNode(!0),n),!(i===r||!(i=i.nextSibling)););else{wu.innerHTML=Ef(s==="svg"?`<svg>${t}</svg>`:s==="mathml"?`<math>${t}</math>`:t);const a=wu.content;if(s==="svg"||s==="mathml"){const l=a.firstChild;for(;l.firstChild;)a.appendChild(l.firstChild);a.removeChild(l)}e.insertBefore(a,n)}return[o?o.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}},Hw=Symbol("_vtc");function Vw(t,e,n){const s=t[Hw];s&&(e=(e?[e,...s]:[...s]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}const vu=Symbol("_vod"),Ww=Symbol("_vsh"),jw=Symbol(""),qw=/(^|;)\s*display\s*:/;function zw(t,e,n){const s=t.style,i=Me(n);let r=!1;if(n&&!i){if(e)if(Me(e))for(const o of e.split(";")){const a=o.slice(0,o.indexOf(":")).trim();n[a]==null&&Cr(s,a,"")}else for(const o in e)n[o]==null&&Cr(s,o,"");for(const o in n)o==="display"&&(r=!0),Cr(s,o,n[o])}else if(i){if(e!==n){const o=s[jw];o&&(n+=";"+o),s.cssText=n,r=qw.test(n)}}else e&&t.removeAttribute("style");vu in t&&(t[vu]=r?s.display:"",t[Ww]&&(s.display="none"))}const yu=/\s*!important$/;function Cr(t,e,n){if(G(n))n.forEach(s=>Cr(t,e,s));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const s=Gw(t,e);yu.test(n)?t.setProperty(ms(s),n.replace(yu,""),"important"):t[s]=n}}const bu=["Webkit","Moz","ms"],ra={};function Gw(t,e){const n=ra[e];if(n)return n;let s=Tt(e);if(s!=="filter"&&s in t)return ra[e]=s;s=vo(s);for(let i=0;i<bu.length;i++){const r=bu[i]+s;if(r in t)return ra[e]=r}return e}const Cu="http://www.w3.org/1999/xlink";function Eu(t,e,n,s,i,r=Qg(e)){s&&e.startsWith("xlink:")?n==null?t.removeAttributeNS(Cu,e.slice(6,e.length)):t.setAttributeNS(Cu,e,n):n==null||r&&!yh(n)?t.removeAttribute(e):t.setAttribute(e,r?"":$n(n)?String(n):n)}function Iu(t,e,n,s,i){if(e==="innerHTML"||e==="textContent"){n!=null&&(t[e]=e==="innerHTML"?Ef(n):n);return}const r=t.tagName;if(e==="value"&&r!=="PROGRESS"&&!r.includes("-")){const a=r==="OPTION"?t.getAttribute("value")||"":t.value,l=n==null?t.type==="checkbox"?"on":"":String(n);(a!==l||!("_value"in t))&&(t.value=l),n==null&&t.removeAttribute(e),t._value=n;return}let o=!1;if(n===""||n==null){const a=typeof t[e];a==="boolean"?n=yh(n):n==null&&a==="string"?(n="",o=!0):a==="number"&&(n=0,o=!0)}try{t[e]=n}catch{}o&&t.removeAttribute(i||e)}function Kw(t,e,n,s){t.addEventListener(e,n,s)}function Yw(t,e,n,s){t.removeEventListener(e,n,s)}const Su=Symbol("_vei");function Qw(t,e,n,s,i=null){const r=t[Su]||(t[Su]={}),o=r[e];if(s&&o)o.value=s;else{const[a,l]=Jw(e);if(s){const c=r[e]=ev(s,i);Kw(t,a,c,l)}else o&&(Yw(t,a,o,l),r[e]=void 0)}}const Tu=/(?:Once|Passive|Capture)$/;function Jw(t){let e;if(Tu.test(t)){e={};let s;for(;s=t.match(Tu);)t=t.slice(0,t.length-s[0].length),e[s[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):ms(t.slice(2)),e]}let oa=0;const Xw=Promise.resolve(),Zw=()=>oa||(Xw.then(()=>oa=0),oa=Date.now());function ev(t,e){const n=s=>{if(!s._vts)s._vts=Date.now();else if(s._vts<=n.attached)return;Jt(tv(s,n.value),e,5,[s])};return n.value=t,n.attached=Zw(),n}function tv(t,e){if(G(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(s=>i=>!i._stopped&&s&&s(i))}else return e}const ku=t=>t.charCodeAt(0)===111&&t.charCodeAt(1)===110&&t.charCodeAt(2)>96&&t.charCodeAt(2)<123,nv=(t,e,n,s,i,r)=>{const o=i==="svg";e==="class"?Vw(t,s,o):e==="style"?zw(t,n,s):go(e)?gl(e)||Qw(t,e,n,s,r):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):sv(t,e,s,o))?(Iu(t,e,s),!t.tagName.includes("-")&&(e==="value"||e==="checked"||e==="selected")&&Eu(t,e,s,o,r,e!=="value")):t._isVueCE&&(/[A-Z]/.test(e)||!Me(s))?Iu(t,Tt(e),s,r,e):(e==="true-value"?t._trueValue=s:e==="false-value"&&(t._falseValue=s),Eu(t,e,s,o))};function sv(t,e,n,s){if(s)return!!(e==="innerHTML"||e==="textContent"||e in t&&ku(e)&&J(n));if(e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA")return!1;if(e==="width"||e==="height"){const i=t.tagName;if(i==="IMG"||i==="VIDEO"||i==="CANVAS"||i==="SOURCE")return!1}return ku(e)&&Me(n)?!1:e in t}const iv=Qe({patchProp:nv},Uw);let Pu;function rv(){return Pu||(Pu=cw(iv))}const ov=(...t)=>{const e=rv().createApp(...t),{mount:n}=e;return e.mount=s=>{const i=lv(s);if(!i)return;const r=e._component;!J(r)&&!r.render&&!r.template&&(r.template=i.innerHTML),i.nodeType===1&&(i.textContent="");const o=n(i,!1,av(i));return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},e};function av(t){if(t instanceof SVGElement)return"svg";if(typeof MathMLElement=="function"&&t instanceof MathMLElement)return"mathml"}function lv(t){return Me(t)?document.querySelector(t):t}/*!
 * pinia v3.0.2
 * (c) 2025 Eduardo San Martin Morote
 * @license MIT
 */let If;const ko=t=>If=t,Sf=Symbol();function $a(t){return t&&typeof t=="object"&&Object.prototype.toString.call(t)==="[object Object]"&&typeof t.toJSON!="function"}var Ei;(function(t){t.direct="direct",t.patchObject="patch object",t.patchFunction="patch function"})(Ei||(Ei={}));function cv(){const t=Ih(!0),e=t.run(()=>Se({}));let n=[],s=[];const i=kl({install(r){ko(i),i._a=r,r.provide(Sf,i),r.config.globalProperties.$pinia=i,s.forEach(o=>n.push(o)),s=[]},use(r){return this._a?n.push(r):s.push(r),this},_p:n,_a:null,_e:t,_s:new Map,state:e});return i}const Tf=()=>{};function Au(t,e,n,s=Tf){t.push(e);const i=()=>{const r=t.indexOf(e);r>-1&&(t.splice(r,1),s())};return!n&&Sh()&&Jg(i),i}function Cs(t,...e){t.slice().forEach(n=>{n(...e)})}const uv=t=>t(),Ru=Symbol(),aa=Symbol();function Ua(t,e){t instanceof Map&&e instanceof Map?e.forEach((n,s)=>t.set(s,n)):t instanceof Set&&e instanceof Set&&e.forEach(t.add,t);for(const n in e){if(!e.hasOwnProperty(n))continue;const s=e[n],i=t[n];$a(i)&&$a(s)&&t.hasOwnProperty(n)&&!Le(s)&&!On(s)?t[n]=Ua(i,s):t[n]=s}return t}const dv=Symbol();function hv(t){return!$a(t)||!Object.prototype.hasOwnProperty.call(t,dv)}const{assign:yn}=Object;function fv(t){return!!(Le(t)&&t.effect)}function pv(t,e,n,s){const{state:i,actions:r,getters:o}=e,a=n.state.value[t];let l;function c(){a||(n.state.value[t]=i?i():{});const u=y_(n.state.value[t]);return yn(u,r,Object.keys(o||{}).reduce((d,h)=>(d[h]=kl(Ct(()=>{ko(n);const m=n._s.get(t);return o[h].call(m,m)})),d),{}))}return l=kf(t,c,e,n,s,!0),l}function kf(t,e,n={},s,i,r){let o;const a=yn({actions:{}},n),l={deep:!0};let c,u,d=[],h=[],m;const v=s.state.value[t];!r&&!v&&(s.state.value[t]={}),Se({});let y;function R(X){let Q;c=u=!1,typeof X=="function"?(X(s.state.value[t]),Q={type:Ei.patchFunction,storeId:t,events:m}):(Ua(s.state.value[t],X),Q={type:Ei.patchObject,payload:X,storeId:t,events:m});const _e=y=Symbol();Pl().then(()=>{y===_e&&(c=!0)}),u=!0,Cs(d,Q,s.state.value[t])}const F=r?function(){const{state:Q}=n,_e=Q?Q():{};this.$patch(Ve=>{yn(Ve,_e)})}:Tf;function M(){o.stop(),d=[],h=[],s._s.delete(t)}const $=(X,Q="")=>{if(Ru in X)return X[aa]=Q,X;const _e=function(){ko(s);const Ve=Array.from(arguments),Xe=[],ze=[];function Pt(Y){Xe.push(Y)}function $t(Y){ze.push(Y)}Cs(h,{args:Ve,name:_e[aa],store:K,after:Pt,onError:$t});let we;try{we=X.apply(this&&this.$id===t?this:K,Ve)}catch(Y){throw Cs(ze,Y),Y}return we instanceof Promise?we.then(Y=>(Cs(Xe,Y),Y)).catch(Y=>(Cs(ze,Y),Promise.reject(Y))):(Cs(Xe,we),we)};return _e[Ru]=!0,_e[aa]=Q,_e},B={_p:s,$id:t,$onAction:Au.bind(null,h),$patch:R,$reset:F,$subscribe(X,Q={}){const _e=Au(d,X,Q.detached,()=>Ve()),Ve=o.run(()=>ts(()=>s.state.value[t],Xe=>{(Q.flush==="sync"?u:c)&&X({storeId:t,type:Ei.direct,events:m},Xe)},yn({},l,Q)));return _e},$dispose:M},K=is(B);s._s.set(t,K);const ne=(s._a&&s._a.runWithContext||uv)(()=>s._e.run(()=>(o=Ih()).run(()=>e({action:$}))));for(const X in ne){const Q=ne[X];if(Le(Q)&&!fv(Q)||On(Q))r||(v&&hv(Q)&&(Le(Q)?Q.value=v[X]:Ua(Q,v[X])),s.state.value[t][X]=Q);else if(typeof Q=="function"){const _e=$(Q,X);ne[X]=_e,a.actions[X]=Q}}return yn(K,ne),yn(ae(K),ne),Object.defineProperty(K,"$state",{get:()=>s.state.value[t],set:X=>{R(Q=>{yn(Q,X)})}}),s._p.forEach(X=>{yn(K,o.run(()=>X({store:K,app:s._a,pinia:s,options:a})))}),v&&r&&n.hydrate&&n.hydrate(K.$state,v),c=!0,u=!0,K}/*! #__NO_SIDE_EFFECTS__ */function mv(t,e,n){let s;const i=typeof e=="function";s=i?n:e;function r(o,a){const l=nw();return o=o||(l?Yt(Sf,null):null),o&&ko(o),o=If,o._s.has(t)||(i?kf(t,e,s,o):pv(t,s,o)),o._s.get(t)}return r.$id=t,r}const gv=()=>{};var xu={};/**
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
 */const Pf={NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
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
 */const k=function(t,e){if(!t)throw Js(e)},Js=function(t){return new Error("Firebase Database ("+Pf.SDK_VERSION+") INTERNAL ASSERT FAILED: "+t)};/**
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
 */const Af=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&s+1<t.length&&(t.charCodeAt(s+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++s)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},_v=function(t){const e=[];let n=0,s=0;for(;n<t.length;){const i=t[n++];if(i<128)e[s++]=String.fromCharCode(i);else if(i>191&&i<224){const r=t[n++];e[s++]=String.fromCharCode((i&31)<<6|r&63)}else if(i>239&&i<365){const r=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[s++]=String.fromCharCode(55296+(l>>10)),e[s++]=String.fromCharCode(56320+(l&1023))}else{const r=t[n++],o=t[n++];e[s++]=String.fromCharCode((i&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Ml={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,s=[];for(let i=0;i<t.length;i+=3){const r=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,c=l?t[i+2]:0,u=r>>2,d=(r&3)<<4|a>>4;let h=(a&15)<<2|c>>6,m=c&63;l||(m=64,o||(h=64)),s.push(n[u],n[d],n[h],n[m])}return s.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(Af(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):_v(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,s=[];for(let i=0;i<t.length;){const r=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const c=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,r==null||a==null||c==null||d==null)throw new wv;const h=r<<2|a>>4;if(s.push(h),c!==64){const m=a<<4&240|c>>2;if(s.push(m),d!==64){const v=c<<6&192|d;s.push(v)}}}return s},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class wv extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Rf=function(t){const e=Af(t);return Ml.encodeByteArray(e,!0)},Mr=function(t){return Rf(t).replace(/\./g,"")},Br=function(t){try{return Ml.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function vv(t){return xf(void 0,t)}function xf(t,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const n=e;return new Date(n.getTime());case Object:t===void 0&&(t={});break;case Array:t=[];break;default:return e}for(const n in e)!e.hasOwnProperty(n)||!yv(n)||(t[n]=xf(t[n],e[n]));return t}function yv(t){return t!=="__proto__"}/**
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
 */function bv(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Cv=()=>bv().__FIREBASE_DEFAULTS__,Ev=()=>{if(typeof process>"u"||typeof xu>"u")return;const t=xu.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},Iv=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Br(t[1]);return e&&JSON.parse(e)},Bl=()=>{try{return gv()||Cv()||Ev()||Iv()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Of=t=>{var e,n;return(n=(e=Bl())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Sv=t=>{const e=Of(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const s=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),s]:[e.substring(0,n),s]},Nf=()=>{var t;return(t=Bl())===null||t===void 0?void 0:t.config},Lf=t=>{var e;return(e=Bl())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Xi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,s)=>{n?this.reject(n):this.resolve(s),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,s))}}}/**
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
 */function Tv(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},s=e||"demo-project",i=t.iat||0,r=t.sub||t.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${s}`,aud:s,iat:i,exp:i+3600,auth_time:i,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},t);return[Mr(JSON.stringify(n)),Mr(JSON.stringify(o)),""].join(".")}/**
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
 */function st(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Fl(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(st())}function kv(){return typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"}function Pv(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Df(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Av(){const t=st();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Rv(){return Pf.NODE_ADMIN===!0}function xv(){try{return typeof indexedDB=="object"}catch{return!1}}function Ov(){return new Promise((t,e)=>{try{let n=!0;const s="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(s);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(s),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var r;e(((r=i.error)===null||r===void 0?void 0:r.message)||"")}}catch(n){e(n)}})}/**
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
 */const Nv="FirebaseError";class Vn extends Error{constructor(e,n,s){super(n),this.code=e,this.customData=s,this.name=Nv,Object.setPrototypeOf(this,Vn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Zi.prototype.create)}}class Zi{constructor(e,n,s){this.service=e,this.serviceName=n,this.errors=s}create(e,...n){const s=n[0]||{},i=`${this.service}/${e}`,r=this.errors[e],o=r?Lv(r,s):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Vn(i,a,s)}}function Lv(t,e){return t.replace(Dv,(n,s)=>{const i=e[s];return i!=null?String(i):`<${s}?>`})}const Dv=/\{\$([^}]+)}/g;/**
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
 */function Bi(t){return JSON.parse(t)}function Ue(t){return JSON.stringify(t)}/**
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
 */const Mf=function(t){let e={},n={},s={},i="";try{const r=t.split(".");e=Bi(Br(r[0])||""),n=Bi(Br(r[1])||""),i=r[2],s=n.d||{},delete n.d}catch{}return{header:e,claims:n,data:s,signature:i}},Mv=function(t){const e=Mf(t),n=e.claims;return!!n&&typeof n=="object"&&n.hasOwnProperty("iat")},Bv=function(t){const e=Mf(t).claims;return typeof e=="object"&&e.admin===!0};/**
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
 */function en(t,e){return Object.prototype.hasOwnProperty.call(t,e)}function $s(t,e){if(Object.prototype.hasOwnProperty.call(t,e))return t[e]}function Ha(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Fr(t,e,n){const s={};for(const i in t)Object.prototype.hasOwnProperty.call(t,i)&&(s[i]=e.call(n,t[i],i,t));return s}function as(t,e){if(t===e)return!0;const n=Object.keys(t),s=Object.keys(e);for(const i of n){if(!s.includes(i))return!1;const r=t[i],o=e[i];if(Ou(r)&&Ou(o)){if(!as(r,o))return!1}else if(r!==o)return!1}for(const i of s)if(!n.includes(i))return!1;return!0}function Ou(t){return t!==null&&typeof t=="object"}/**
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
 */function Xs(t){const e=[];for(const[n,s]of Object.entries(t))Array.isArray(s)?s.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(s));return e.length?"&"+e.join("&"):""}/**
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
 */class Fv{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,n){n||(n=0);const s=this.W_;if(typeof e=="string")for(let d=0;d<16;d++)s[d]=e.charCodeAt(n)<<24|e.charCodeAt(n+1)<<16|e.charCodeAt(n+2)<<8|e.charCodeAt(n+3),n+=4;else for(let d=0;d<16;d++)s[d]=e[n]<<24|e[n+1]<<16|e[n+2]<<8|e[n+3],n+=4;for(let d=16;d<80;d++){const h=s[d-3]^s[d-8]^s[d-14]^s[d-16];s[d]=(h<<1|h>>>31)&4294967295}let i=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let d=0;d<80;d++){d<40?d<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):d<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const h=(i<<5|i>>>27)+c+l+u+s[d]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=i,i=h}this.chain_[0]=this.chain_[0]+i&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,n){if(e==null)return;n===void 0&&(n=e.length);const s=n-this.blockSize;let i=0;const r=this.buf_;let o=this.inbuf_;for(;i<n;){if(o===0)for(;i<=s;)this.compress_(e,i),i+=this.blockSize;if(typeof e=="string"){for(;i<n;)if(r[o]=e.charCodeAt(i),++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}else for(;i<n;)if(r[o]=e[i],++o,++i,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=n}digest(){const e=[];let n=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let i=this.blockSize-1;i>=56;i--)this.buf_[i]=n&255,n/=256;this.compress_(this.buf_);let s=0;for(let i=0;i<5;i++)for(let r=24;r>=0;r-=8)e[s]=this.chain_[i]>>r&255,++s;return e}}function $v(t,e){const n=new Uv(t,e);return n.subscribe.bind(n)}class Uv{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(s=>{this.error(s)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,s){let i;if(e===void 0&&n===void 0&&s===void 0)throw new Error("Missing Observer.");Hv(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:s},i.next===void 0&&(i.next=la),i.error===void 0&&(i.error=la),i.complete===void 0&&(i.complete=la);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(s){typeof console<"u"&&console.error&&console.error(s)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function Hv(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function la(){}function Po(t,e){return`${t} failed: ${e} argument `}/**
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
 */const Vv=function(t){const e=[];let n=0;for(let s=0;s<t.length;s++){let i=t.charCodeAt(s);if(i>=55296&&i<=56319){const r=i-55296;s++,k(s<t.length,"Surrogate pair missing trail surrogate.");const o=t.charCodeAt(s)-56320;i=65536+(r<<10)+o}i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):i<65536?(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Ao=function(t){let e=0;for(let n=0;n<t.length;n++){const s=t.charCodeAt(n);s<128?e++:s<2048?e+=2:s>=55296&&s<=56319?(e+=4,n++):e+=3}return e};/**
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
 */function gt(t){return t&&t._delegate?t._delegate:t}class ls{constructor(e,n,s){this.name=e,this.instanceFactory=n,this.type=s,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Yn="[DEFAULT]";/**
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
 */class Wv{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const s=new Xi;if(this.instancesDeferred.set(n,s),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&s.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const s=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(s)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:s})}catch(r){if(i)return null;throw r}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(qv(e))try{this.getOrInitializeService({instanceIdentifier:Yn})}catch{}for(const[n,s]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const r=this.getOrInitializeService({instanceIdentifier:i});s.resolve(r)}catch{}}}}clearInstance(e=Yn){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Yn){return this.instances.has(e)}getOptions(e=Yn){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,s=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(s))throw Error(`${this.name}(${s}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:s,options:n});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);s===a&&o.resolve(i)}return i}onInit(e,n){var s;const i=this.normalizeInstanceIdentifier(n),r=(s=this.onInitCallbacks.get(i))!==null&&s!==void 0?s:new Set;r.add(e),this.onInitCallbacks.set(i,r);const o=this.instances.get(i);return o&&e(o,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,n){const s=this.onInitCallbacks.get(n);if(s)for(const i of s)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let s=this.instances.get(e);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:jv(e),options:n}),this.instances.set(e,s),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(s,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,s)}catch{}return s||null}normalizeInstanceIdentifier(e=Yn){return this.component?this.component.multipleInstances?e:Yn:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function jv(t){return t===Yn?void 0:t}function qv(t){return t.instantiationMode==="EAGER"}/**
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
 */class zv{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new Wv(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const Gv={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},Kv=me.INFO,Yv={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},Qv=(t,e,...n)=>{if(e<t.logLevel)return;const s=new Date().toISOString(),i=Yv[e];if(i)console[i](`[${s}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class $l{constructor(e){this.name=e,this._logLevel=Kv,this._logHandler=Qv,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Gv[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const Jv=(t,e)=>e.some(n=>t instanceof n);let Nu,Lu;function Xv(){return Nu||(Nu=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Zv(){return Lu||(Lu=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Bf=new WeakMap,Va=new WeakMap,Ff=new WeakMap,ca=new WeakMap,Ul=new WeakMap;function ey(t){const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("success",r),t.removeEventListener("error",o)},r=()=>{n(Nn(t.result)),i()},o=()=>{s(t.error),i()};t.addEventListener("success",r),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&Bf.set(n,t)}).catch(()=>{}),Ul.set(e,t),e}function ty(t){if(Va.has(t))return;const e=new Promise((n,s)=>{const i=()=>{t.removeEventListener("complete",r),t.removeEventListener("error",o),t.removeEventListener("abort",o)},r=()=>{n(),i()},o=()=>{s(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",r),t.addEventListener("error",o),t.addEventListener("abort",o)});Va.set(t,e)}let Wa={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Va.get(t);if(e==="objectStoreNames")return t.objectStoreNames||Ff.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Nn(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function ny(t){Wa=t(Wa)}function sy(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const s=t.call(ua(this),e,...n);return Ff.set(s,e.sort?e.sort():[e]),Nn(s)}:Zv().includes(t)?function(...e){return t.apply(ua(this),e),Nn(Bf.get(this))}:function(...e){return Nn(t.apply(ua(this),e))}}function iy(t){return typeof t=="function"?sy(t):(t instanceof IDBTransaction&&ty(t),Jv(t,Xv())?new Proxy(t,Wa):t)}function Nn(t){if(t instanceof IDBRequest)return ey(t);if(ca.has(t))return ca.get(t);const e=iy(t);return e!==t&&(ca.set(t,e),Ul.set(e,t)),e}const ua=t=>Ul.get(t);function ry(t,e,{blocked:n,upgrade:s,blocking:i,terminated:r}={}){const o=indexedDB.open(t,e),a=Nn(o);return s&&o.addEventListener("upgradeneeded",l=>{s(Nn(o.result),l.oldVersion,l.newVersion,Nn(o.transaction),l)}),n&&o.addEventListener("blocked",l=>n(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),i&&l.addEventListener("versionchange",c=>i(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const oy=["get","getKey","getAll","getAllKeys","count"],ay=["put","add","delete","clear"],da=new Map;function Du(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(da.get(e))return da.get(e);const n=e.replace(/FromIndex$/,""),s=e!==n,i=ay.includes(n);if(!(n in(s?IDBIndex:IDBObjectStore).prototype)||!(i||oy.includes(n)))return;const r=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let c=l.store;return s&&(c=c.index(a.shift())),(await Promise.all([c[n](...a),i&&l.done]))[0]};return da.set(e,r),r}ny(t=>({...t,get:(e,n,s)=>Du(e,n)||t.get(e,n,s),has:(e,n)=>!!Du(e,n)||t.has(e,n)}));/**
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
 */class ly{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(cy(n)){const s=n.getImmediate();return`${s.library}/${s.version}`}else return null}).filter(n=>n).join(" ")}}function cy(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ja="@firebase/app",Mu="0.11.4";/**
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
 */const pn=new $l("@firebase/app"),uy="@firebase/app-compat",dy="@firebase/analytics-compat",hy="@firebase/analytics",fy="@firebase/app-check-compat",py="@firebase/app-check",my="@firebase/auth",gy="@firebase/auth-compat",_y="@firebase/database",wy="@firebase/data-connect",vy="@firebase/database-compat",yy="@firebase/functions",by="@firebase/functions-compat",Cy="@firebase/installations",Ey="@firebase/installations-compat",Iy="@firebase/messaging",Sy="@firebase/messaging-compat",Ty="@firebase/performance",ky="@firebase/performance-compat",Py="@firebase/remote-config",Ay="@firebase/remote-config-compat",Ry="@firebase/storage",xy="@firebase/storage-compat",Oy="@firebase/firestore",Ny="@firebase/vertexai",Ly="@firebase/firestore-compat",Dy="firebase",My="11.6.0";/**
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
 */const qa="[DEFAULT]",By={[ja]:"fire-core",[uy]:"fire-core-compat",[hy]:"fire-analytics",[dy]:"fire-analytics-compat",[py]:"fire-app-check",[fy]:"fire-app-check-compat",[my]:"fire-auth",[gy]:"fire-auth-compat",[_y]:"fire-rtdb",[wy]:"fire-data-connect",[vy]:"fire-rtdb-compat",[yy]:"fire-fn",[by]:"fire-fn-compat",[Cy]:"fire-iid",[Ey]:"fire-iid-compat",[Iy]:"fire-fcm",[Sy]:"fire-fcm-compat",[Ty]:"fire-perf",[ky]:"fire-perf-compat",[Py]:"fire-rc",[Ay]:"fire-rc-compat",[Ry]:"fire-gcs",[xy]:"fire-gcs-compat",[Oy]:"fire-fst",[Ly]:"fire-fst-compat",[Ny]:"fire-vertex","fire-js":"fire-js",[Dy]:"fire-js-all"};/**
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
 */const $r=new Map,Fy=new Map,za=new Map;function Bu(t,e){try{t.container.addComponent(e)}catch(n){pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Us(t){const e=t.name;if(za.has(e))return pn.debug(`There were multiple attempts to register component ${e}.`),!1;za.set(e,t);for(const n of $r.values())Bu(n,t);for(const n of Fy.values())Bu(n,t);return!0}function Hl(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}function Rt(t){return t==null?!1:t.settings!==void 0}/**
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
 */const $y={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}'","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","server-app-deleted":"Firebase Server App has been deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}.","finalization-registry-not-supported":"FirebaseServerApp deleteOnDeref field defined but the JS runtime does not support FinalizationRegistry.","invalid-server-app-environment":"FirebaseServerApp is not for use in browser environments."},Ln=new Zi("app","Firebase",$y);/**
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
 */class Uy{constructor(e,n,s){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=s,this.container.addComponent(new ls("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ln.create("app-deleted",{appName:this._name})}}/**
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
 */const Zs=My;function $f(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const s=Object.assign({name:qa,automaticDataCollectionEnabled:!1},e),i=s.name;if(typeof i!="string"||!i)throw Ln.create("bad-app-name",{appName:String(i)});if(n||(n=Nf()),!n)throw Ln.create("no-options");const r=$r.get(i);if(r){if(as(n,r.options)&&as(s,r.config))return r;throw Ln.create("duplicate-app",{appName:i})}const o=new zv(i);for(const l of za.values())o.addComponent(l);const a=new Uy(n,s,o);return $r.set(i,a),a}function Uf(t=qa){const e=$r.get(t);if(!e&&t===qa&&Nf())return $f();if(!e)throw Ln.create("no-app",{appName:t});return e}function Dn(t,e,n){var s;let i=(s=By[t])!==null&&s!==void 0?s:t;n&&(i+=`-${n}`);const r=i.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${i}" with version "${e}":`];r&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),pn.warn(a.join(" "));return}Us(new ls(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
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
 */const Hy="firebase-heartbeat-database",Vy=1,Fi="firebase-heartbeat-store";let ha=null;function Hf(){return ha||(ha=ry(Hy,Vy,{upgrade:(t,e)=>{switch(e){case 0:try{t.createObjectStore(Fi)}catch(n){console.warn(n)}}}}).catch(t=>{throw Ln.create("idb-open",{originalErrorMessage:t.message})})),ha}async function Wy(t){try{const n=(await Hf()).transaction(Fi),s=await n.objectStore(Fi).get(Vf(t));return await n.done,s}catch(e){if(e instanceof Vn)pn.warn(e.message);else{const n=Ln.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});pn.warn(n.message)}}}async function Fu(t,e){try{const s=(await Hf()).transaction(Fi,"readwrite");await s.objectStore(Fi).put(e,Vf(t)),await s.done}catch(n){if(n instanceof Vn)pn.warn(n.message);else{const s=Ln.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});pn.warn(s.message)}}}function Vf(t){return`${t.name}!${t.options.appId}`}/**
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
 */const jy=1024,qy=30;class zy{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Ky(n),this._heartbeatsCachePromise=this._storage.read().then(s=>(this._heartbeatsCache=s,s))}async triggerHeartbeat(){var e,n;try{const i=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=$u();if(((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null&&(this._heartbeatsCache=await this._heartbeatsCachePromise,((n=this._heartbeatsCache)===null||n===void 0?void 0:n.heartbeats)==null)||this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(o=>o.date===r))return;if(this._heartbeatsCache.heartbeats.push({date:r,agent:i}),this._heartbeatsCache.heartbeats.length>qy){const o=Yy(this._heartbeatsCache.heartbeats);this._heartbeatsCache.heartbeats.splice(o,1)}return this._storage.overwrite(this._heartbeatsCache)}catch(s){pn.warn(s)}}async getHeartbeatsHeader(){var e;try{if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,((e=this._heartbeatsCache)===null||e===void 0?void 0:e.heartbeats)==null||this._heartbeatsCache.heartbeats.length===0)return"";const n=$u(),{heartbeatsToSend:s,unsentEntries:i}=Gy(this._heartbeatsCache.heartbeats),r=Mr(JSON.stringify({version:2,heartbeats:s}));return this._heartbeatsCache.lastSentHeartbeatDate=n,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}catch(n){return pn.warn(n),""}}}function $u(){return new Date().toISOString().substring(0,10)}function Gy(t,e=jy){const n=[];let s=t.slice();for(const i of t){const r=n.find(o=>o.agent===i.agent);if(r){if(r.dates.push(i.date),Uu(n)>e){r.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),Uu(n)>e){n.pop();break}s=s.slice(1)}return{heartbeatsToSend:n,unsentEntries:s}}class Ky{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return xv()?Ov().then(()=>!0).catch(()=>!1):!1}async read(){if(await this._canUseIndexedDBPromise){const n=await Wy(this.app);return n!=null&&n.heartbeats?n:{heartbeats:[]}}else return{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return Fu(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function Uu(t){return Mr(JSON.stringify({version:2,heartbeats:t})).length}function Yy(t){if(t.length===0)return-1;let e=0,n=t[0].date;for(let s=1;s<t.length;s++)t[s].date<n&&(n=t[s].date,e=s);return e}/**
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
 */function Qy(t){Us(new ls("platform-logger",e=>new ly(e),"PRIVATE")),Us(new ls("heartbeat",e=>new zy(e),"PRIVATE")),Dn(ja,Mu,t),Dn(ja,Mu,"esm2017"),Dn("fire-js","")}Qy("");var Jy="firebase",Xy="11.6.0";/**
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
 */Dn(Jy,Xy,"app");var Hu={};const Vu="@firebase/database",Wu="1.0.14";/**
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
 */let Wf="";function Zy(t){Wf=t}/**
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
 */class eb{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,n){n==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Ue(n))}get(e){const n=this.domStorage_.getItem(this.prefixedName_(e));return n==null?null:Bi(n)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
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
 */class tb{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,n){n==null?delete this.cache_[e]:this.cache_[e]=n}get(e){return en(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
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
 */const jf=function(t){try{if(typeof window<"u"&&typeof window[t]<"u"){const e=window[t];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new eb(e)}}catch{}return new tb},Jn=jf("localStorage"),nb=jf("sessionStorage");/**
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
 */const Rs=new $l("@firebase/database"),sb=function(){let t=1;return function(){return t++}}(),qf=function(t){const e=Vv(t),n=new Fv;n.update(e);const s=n.digest();return Ml.encodeByteArray(s)},er=function(...t){let e="";for(let n=0;n<t.length;n++){const s=t[n];Array.isArray(s)||s&&typeof s=="object"&&typeof s.length=="number"?e+=er.apply(null,s):typeof s=="object"?e+=Ue(s):e+=s,e+=" "}return e};let Ii=null,ju=!0;const ib=function(t,e){k(!0,"Can't turn on custom loggers persistently."),Rs.logLevel=me.VERBOSE,Ii=Rs.log.bind(Rs)},We=function(...t){if(ju===!0&&(ju=!1,Ii===null&&nb.get("logging_enabled")===!0&&ib()),Ii){const e=er.apply(null,t);Ii(e)}},tr=function(t){return function(...e){We(t,...e)}},Ga=function(...t){const e="FIREBASE INTERNAL ERROR: "+er(...t);Rs.error(e)},mn=function(...t){const e=`FIREBASE FATAL ERROR: ${er(...t)}`;throw Rs.error(e),new Error(e)},nt=function(...t){const e="FIREBASE WARNING: "+er(...t);Rs.warn(e)},rb=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&nt("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},Vl=function(t){return typeof t=="number"&&(t!==t||t===Number.POSITIVE_INFINITY||t===Number.NEGATIVE_INFINITY)},ob=function(t){if(document.readyState==="complete")t();else{let e=!1;const n=function(){if(!document.body){setTimeout(n,Math.floor(10));return}e||(e=!0,t())};document.addEventListener?(document.addEventListener("DOMContentLoaded",n,!1),window.addEventListener("load",n,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&n()}),window.attachEvent("onload",n))}},Hs="[MIN_NAME]",cs="[MAX_NAME]",gs=function(t,e){if(t===e)return 0;if(t===Hs||e===cs)return-1;if(e===Hs||t===cs)return 1;{const n=qu(t),s=qu(e);return n!==null?s!==null?n-s===0?t.length-e.length:n-s:-1:s!==null?1:t<e?-1:1}},ab=function(t,e){return t===e?0:t<e?-1:1},di=function(t,e){if(e&&t in e)return e[t];throw new Error("Missing required key ("+t+") in object: "+Ue(e))},Wl=function(t){if(typeof t!="object"||t===null)return Ue(t);const e=[];for(const s in t)e.push(s);e.sort();let n="{";for(let s=0;s<e.length;s++)s!==0&&(n+=","),n+=Ue(e[s]),n+=":",n+=Wl(t[e[s]]);return n+="}",n},zf=function(t,e){const n=t.length;if(n<=e)return[t];const s=[];for(let i=0;i<n;i+=e)i+e>n?s.push(t.substring(i,n)):s.push(t.substring(i,i+e));return s};function qe(t,e){for(const n in t)t.hasOwnProperty(n)&&e(n,t[n])}const Gf=function(t){k(!Vl(t),"Invalid JSON number");const e=11,n=52,s=(1<<e-1)-1;let i,r,o,a,l;t===0?(r=0,o=0,i=1/t===-1/0?1:0):(i=t<0,t=Math.abs(t),t>=Math.pow(2,1-s)?(a=Math.min(Math.floor(Math.log(t)/Math.LN2),s),r=a+s,o=Math.round(t*Math.pow(2,n-a)-Math.pow(2,n))):(r=0,o=Math.round(t/Math.pow(2,1-s-n))));const c=[];for(l=n;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(i?1:0),c.reverse();const u=c.join("");let d="";for(l=0;l<64;l+=8){let h=parseInt(u.substr(l,8),2).toString(16);h.length===1&&(h="0"+h),d=d+h}return d.toLowerCase()},lb=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},cb=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function ub(t,e){let n="Unknown Error";t==="too_big"?n="The data requested exceeds the maximum size that can be accessed with a single request.":t==="permission_denied"?n="Client doesn't have permission to access the desired data.":t==="unavailable"&&(n="The service is unavailable");const s=new Error(t+" at "+e._path.toString()+": "+n);return s.code=t.toUpperCase(),s}const db=new RegExp("^-?(0*)\\d{1,10}$"),hb=-2147483648,fb=2147483647,qu=function(t){if(db.test(t)){const e=Number(t);if(e>=hb&&e<=fb)return e}return null},ei=function(t){try{t()}catch(e){setTimeout(()=>{const n=e.stack||"";throw nt("Exception was thrown by user callback.",n),e},Math.floor(0))}},pb=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Si=function(t,e){const n=setTimeout(t,e);return typeof n=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(n):typeof n=="object"&&n.unref&&n.unref(),n};/**
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
 */class mb{constructor(e,n){this.appCheckProvider=n,this.appName=e.name,Rt(e)&&e.settings.appCheckToken&&(this.serverAppAppCheckToken=e.settings.appCheckToken),this.appCheck=n==null?void 0:n.getImmediate({optional:!0}),this.appCheck||n==null||n.get().then(s=>this.appCheck=s)}getToken(e){if(this.serverAppAppCheckToken){if(e)throw new Error("Attempted reuse of `FirebaseServerApp.appCheckToken` after previous usage failed.");return Promise.resolve({token:this.serverAppAppCheckToken})}return this.appCheck?this.appCheck.getToken(e):new Promise((n,s)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){var n;(n=this.appCheckProvider)===null||n===void 0||n.get().then(s=>s.addTokenListener(e))}notifyForInvalidToken(){nt(`Provided AppCheck credentials for the app named "${this.appName}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
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
 */class gb{constructor(e,n,s){this.appName_=e,this.firebaseOptions_=n,this.authProvider_=s,this.auth_=null,this.auth_=s.getImmediate({optional:!0}),this.auth_||s.onInit(i=>this.auth_=i)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(n=>n&&n.code==="auth/token-not-initialized"?(We("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(n)):new Promise((n,s)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(n,s):n(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(n=>n.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(n=>n.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',nt(e)}}class Er{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Er.OWNER="owner";/**
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
 */const jl="5",Kf="v",Yf="s",Qf="r",Jf="f",Xf=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,Zf="ls",ep="p",Ka="ac",tp="websocket",np="long_polling";/**
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
 */class sp{constructor(e,n,s,i,r=!1,o="",a=!1,l=!1,c=null){this.secure=n,this.namespace=s,this.webSocketOnly=i,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this.emulatorOptions=c,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=Jn.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&Jn.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",n=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${n}`}}function _b(t){return t.host!==t.internalHost||t.isCustomHost()||t.includeNamespaceInQueryParams}function ip(t,e,n){k(typeof e=="string","typeof type must == string"),k(typeof n=="object","typeof params must == object");let s;if(e===tp)s=(t.secure?"wss://":"ws://")+t.internalHost+"/.ws?";else if(e===np)s=(t.secure?"https://":"http://")+t.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);_b(t)&&(n.ns=t.namespace);const i=[];return qe(n,(r,o)=>{i.push(r+"="+o)}),s+i.join("&")}/**
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
 */class wb{constructor(){this.counters_={}}incrementCounter(e,n=1){en(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=n}get(){return vv(this.counters_)}}/**
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
 */const fa={},pa={};function ql(t){const e=t.toString();return fa[e]||(fa[e]=new wb),fa[e]}function vb(t,e){const n=t.toString();return pa[n]||(pa[n]=e()),pa[n]}/**
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
 */class yb{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,n){this.closeAfterResponse=e,this.onClose=n,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,n){for(this.pendingResponses[e]=n;this.pendingResponses[this.currentResponseNum];){const s=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let i=0;i<s.length;++i)s[i]&&ei(()=>{this.onMessage_(s[i])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
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
 */const zu="start",bb="close",Cb="pLPCommand",Eb="pRTLPCB",rp="id",op="pw",ap="ser",Ib="cb",Sb="seg",Tb="ts",kb="d",Pb="dframe",lp=1870,cp=30,Ab=lp-cp,Rb=25e3,xb=3e4;class Ts{constructor(e,n,s,i,r,o,a){this.connId=e,this.repoInfo=n,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=tr(e),this.stats_=ql(n),this.urlFn=l=>(this.appCheckToken&&(l[Ka]=this.appCheckToken),ip(n,np,l))}open(e,n){this.curSegmentNum=0,this.onDisconnect_=n,this.myPacketOrderer=new yb(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(xb)),ob(()=>{if(this.isClosed_)return;this.scriptTagHolder=new zl((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===zu)this.id=a,this.password=l;else if(o===bb)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const s={};s[zu]="t",s[ap]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(s[Ib]=this.scriptTagHolder.uniqueCallbackIdentifier),s[Kf]=jl,this.transportSessionId&&(s[Yf]=this.transportSessionId),this.lastSessionId&&(s[Zf]=this.lastSessionId),this.applicationId&&(s[ep]=this.applicationId),this.appCheckToken&&(s[Ka]=this.appCheckToken),typeof location<"u"&&location.hostname&&Xf.test(location.hostname)&&(s[Qf]=Jf);const i=this.urlFn(s);this.log_("Connecting via long-poll to "+i),this.scriptTagHolder.addTag(i,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ts.forceAllow_=!0}static forceDisallow(){Ts.forceDisallow_=!0}static isAvailable(){return Ts.forceAllow_?!0:!Ts.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!lb()&&!cb()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=Rf(n),i=zf(s,Ab);for(let r=0;r<i.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,i.length,i[r]),this.curSegmentNum++}addDisconnectPingFrame(e,n){this.myDisconnFrame=document.createElement("iframe");const s={};s[Pb]="t",s[rp]=e,s[op]=n,this.myDisconnFrame.src=this.urlFn(s),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const n=Ue(e).length;this.bytesReceived+=n,this.stats_.incrementCounter("bytes_received",n)}}class zl{constructor(e,n,s,i){this.onDisconnect=s,this.urlFn=i,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=sb(),window[Cb+this.uniqueCallbackIdentifier]=e,window[Eb+this.uniqueCallbackIdentifier]=n,this.myIFrame=zl.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){We("frame writing exception"),a.stack&&We(a.stack),We(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||We("No IE domain setting required")}catch{const s=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+s+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,n){for(this.myID=e,this.myPW=n,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[rp]=this.myID,e[op]=this.myPW,e[ap]=this.currentSerial;let n=this.urlFn(e),s="",i=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+cp+s.length<=lp;){const o=this.pendingSegs.shift();s=s+"&"+Sb+i+"="+o.seg+"&"+Tb+i+"="+o.ts+"&"+kb+i+"="+o.d,i++}return n=n+s,this.addLongPollTag_(n,this.currentSerial),!0}else return!1}enqueueSegment(e,n,s){this.pendingSegs.push({seg:e,ts:n,d:s}),this.alive&&this.newRequest_()}addLongPollTag_(e,n){this.outstandingRequests.add(n);const s=()=>{this.outstandingRequests.delete(n),this.newRequest_()},i=setTimeout(s,Math.floor(Rb)),r=()=>{clearTimeout(i),s()};this.addTag(e,r)}addTag(e,n){setTimeout(()=>{try{if(!this.sendNewPolls)return;const s=this.myIFrame.doc.createElement("script");s.type="text/javascript",s.async=!0,s.src=e,s.onload=s.onreadystatechange=function(){const i=s.readyState;(!i||i==="loaded"||i==="complete")&&(s.onload=s.onreadystatechange=null,s.parentNode&&s.parentNode.removeChild(s),n())},s.onerror=()=>{We("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(s)}catch{}},Math.floor(1))}}/**
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
 */const Ob=16384,Nb=45e3;let Ur=null;typeof MozWebSocket<"u"?Ur=MozWebSocket:typeof WebSocket<"u"&&(Ur=WebSocket);class xt{constructor(e,n,s,i,r,o,a){this.connId=e,this.applicationId=s,this.appCheckToken=i,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=tr(this.connId),this.stats_=ql(n),this.connURL=xt.connectionURL_(n,o,a,i,s),this.nodeAdmin=n.nodeAdmin}static connectionURL_(e,n,s,i,r){const o={};return o[Kf]=jl,typeof location<"u"&&location.hostname&&Xf.test(location.hostname)&&(o[Qf]=Jf),n&&(o[Yf]=n),s&&(o[Zf]=s),i&&(o[Ka]=i),r&&(o[ep]=r),ip(e,tp,o)}open(e,n){this.onDisconnect=n,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,Jn.set("previous_websocket_failure",!0);try{let s;Rv(),this.mySock=new Ur(this.connURL,[],s)}catch(s){this.log_("Error instantiating WebSocket.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=s=>{this.handleIncomingFrame(s)},this.mySock.onerror=s=>{this.log_("WebSocket error.  Closing connection.");const i=s.message||s.data;i&&this.log_(i),this.onClosed_()}}start(){}static forceDisallow(){xt.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const n=/Android ([0-9]{0,}\.[0-9]{0,})/,s=navigator.userAgent.match(n);s&&s.length>1&&parseFloat(s[1])<4.4&&(e=!0)}return!e&&Ur!==null&&!xt.forceDisallow_}static previouslyFailed(){return Jn.isInMemoryStorage||Jn.get("previous_websocket_failure")===!0}markConnectionHealthy(){Jn.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const n=this.frames.join("");this.frames=null;const s=Bi(n);this.onMessage(s)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(k(this.frames===null,"We already have a frame buffer"),e.length<=6){const n=Number(e);if(!isNaN(n))return this.handleNewFrameCount_(n),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const n=e.data;if(this.bytesReceived+=n.length,this.stats_.incrementCounter("bytes_received",n.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(n);else{const s=this.extractFrameCount_(n);s!==null&&this.appendFrame_(s)}}send(e){this.resetKeepAlive();const n=Ue(e);this.bytesSent+=n.length,this.stats_.incrementCounter("bytes_sent",n.length);const s=zf(n,Ob);s.length>1&&this.sendString_(String(s.length));for(let i=0;i<s.length;i++)this.sendString_(s[i])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(Nb))}sendString_(e){try{this.mySock.send(e)}catch(n){this.log_("Exception thrown from WebSocket.send():",n.message||n.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}xt.responsesRequiredToBeHealthy=2;xt.healthyTimeout=3e4;/**
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
 */class $i{static get ALL_TRANSPORTS(){return[Ts,xt]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}constructor(e){this.initTransports_(e)}initTransports_(e){const n=xt&&xt.isAvailable();let s=n&&!xt.previouslyFailed();if(e.webSocketOnly&&(n||nt("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),s=!0),s)this.transports_=[xt];else{const i=this.transports_=[];for(const r of $i.ALL_TRANSPORTS)r&&r.isAvailable()&&i.push(r);$i.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}$i.globalTransportInitialized_=!1;/**
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
 */const Lb=6e4,Db=5e3,Mb=10*1024,Bb=100*1024,ma="t",Gu="d",Fb="s",Ku="r",$b="e",Yu="o",Qu="a",Ju="n",Xu="p",Ub="h";class Hb{constructor(e,n,s,i,r,o,a,l,c,u){this.id=e,this.repoInfo_=n,this.applicationId_=s,this.appCheckToken_=i,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=tr("c:"+this.id+":"),this.transportManager_=new $i(n),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.conn_),s=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(n,s)},Math.floor(0));const i=e.healthyTimeout||0;i>0&&(this.healthyTimeout_=Si(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>Bb?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>Mb?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(i)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return n=>{e===this.conn_?this.onConnectionLost_(n):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return n=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(n):e===this.secondaryConn_?this.onSecondaryMessageReceived_(n):this.log_("message on old connection"))}}sendRequest(e){const n={t:"d",d:e};this.sendData_(n)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ma in e){const n=e[ma];n===Qu?this.upgradeIfSecondaryHealthy_():n===Ku?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):n===Yu&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const n=di("t",e),s=di("d",e);if(n==="c")this.onSecondaryControl_(s);else if(n==="d")this.pendingDataMessages.push(s);else throw new Error("Unknown protocol layer: "+n)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:Xu,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:Qu,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:Ju,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const n=di("t",e),s=di("d",e);n==="c"?this.onControl_(s):n==="d"&&this.onDataMessage_(s)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const n=di(ma,e);if(Gu in e){const s=e[Gu];if(n===Ub){const i=Object.assign({},s);this.repoInfo_.isUsingEmulator&&(i.h=this.repoInfo_.host),this.onHandshake_(i)}else if(n===Ju){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let i=0;i<this.pendingDataMessages.length;++i)this.onDataMessage_(this.pendingDataMessages[i]);this.pendingDataMessages=[],this.tryCleanupConnection()}else n===Fb?this.onConnectionShutdown_(s):n===Ku?this.onReset_(s):n===$b?Ga("Server Error: "+s):n===Yu?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):Ga("Unknown control packet command: "+n)}}onHandshake_(e){const n=e.ts,s=e.v,i=e.h;this.sessionId=e.s,this.repoInfo_.host=i,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,n),jl!==s&&nt("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const n=this.connReceiver_(this.secondaryConn_),s=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(n,s),Si(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(Lb))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,n){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(n,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Si(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(Db))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:Xu,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(Jn.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
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
 */class up{put(e,n,s,i){}merge(e,n,s,i){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,n,s){}onDisconnectMerge(e,n,s){}onDisconnectCancel(e,n){}reportStats(e){}}/**
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
 */let dp=class{constructor(e){this.allowedEvents_=e,this.listeners_={},k(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...n){if(Array.isArray(this.listeners_[e])){const s=[...this.listeners_[e]];for(let i=0;i<s.length;i++)s[i].callback.apply(s[i].context,n)}}on(e,n,s){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:n,context:s});const i=this.getInitialEvent(e);i&&n.apply(s,i)}off(e,n,s){this.validateEventType_(e);const i=this.listeners_[e]||[];for(let r=0;r<i.length;r++)if(i[r].callback===n&&(!s||s===i[r].context)){i.splice(r,1);return}}validateEventType_(e){k(this.allowedEvents_.find(n=>n===e),"Unknown event: "+e)}};/**
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
 */class Hr extends dp{static getInstance(){return new Hr}constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!Fl()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}getInitialEvent(e){return k(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
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
 */const Zu=32,ed=768;class ge{constructor(e,n){if(n===void 0){this.pieces_=e.split("/");let s=0;for(let i=0;i<this.pieces_.length;i++)this.pieces_[i].length>0&&(this.pieces_[s]=this.pieces_[i],s++);this.pieces_.length=s,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=n}toString(){let e="";for(let n=this.pieceNum_;n<this.pieces_.length;n++)this.pieces_[n]!==""&&(e+="/"+this.pieces_[n]);return e||"/"}}function de(){return new ge("")}function Z(t){return t.pieceNum_>=t.pieces_.length?null:t.pieces_[t.pieceNum_]}function Bn(t){return t.pieces_.length-t.pieceNum_}function Ee(t){let e=t.pieceNum_;return e<t.pieces_.length&&e++,new ge(t.pieces_,e)}function Gl(t){return t.pieceNum_<t.pieces_.length?t.pieces_[t.pieces_.length-1]:null}function Vb(t){let e="";for(let n=t.pieceNum_;n<t.pieces_.length;n++)t.pieces_[n]!==""&&(e+="/"+encodeURIComponent(String(t.pieces_[n])));return e||"/"}function Ui(t,e=0){return t.pieces_.slice(t.pieceNum_+e)}function hp(t){if(t.pieceNum_>=t.pieces_.length)return null;const e=[];for(let n=t.pieceNum_;n<t.pieces_.length-1;n++)e.push(t.pieces_[n]);return new ge(e,0)}function Re(t,e){const n=[];for(let s=t.pieceNum_;s<t.pieces_.length;s++)n.push(t.pieces_[s]);if(e instanceof ge)for(let s=e.pieceNum_;s<e.pieces_.length;s++)n.push(e.pieces_[s]);else{const s=e.split("/");for(let i=0;i<s.length;i++)s[i].length>0&&n.push(s[i])}return new ge(n,0)}function te(t){return t.pieceNum_>=t.pieces_.length}function lt(t,e){const n=Z(t),s=Z(e);if(n===null)return e;if(n===s)return lt(Ee(t),Ee(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+t+")")}function Wb(t,e){const n=Ui(t,0),s=Ui(e,0);for(let i=0;i<n.length&&i<s.length;i++){const r=gs(n[i],s[i]);if(r!==0)return r}return n.length===s.length?0:n.length<s.length?-1:1}function Kl(t,e){if(Bn(t)!==Bn(e))return!1;for(let n=t.pieceNum_,s=e.pieceNum_;n<=t.pieces_.length;n++,s++)if(t.pieces_[n]!==e.pieces_[s])return!1;return!0}function It(t,e){let n=t.pieceNum_,s=e.pieceNum_;if(Bn(t)>Bn(e))return!1;for(;n<t.pieces_.length;){if(t.pieces_[n]!==e.pieces_[s])return!1;++n,++s}return!0}class jb{constructor(e,n){this.errorPrefix_=n,this.parts_=Ui(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let s=0;s<this.parts_.length;s++)this.byteLength_+=Ao(this.parts_[s]);fp(this)}}function qb(t,e){t.parts_.length>0&&(t.byteLength_+=1),t.parts_.push(e),t.byteLength_+=Ao(e),fp(t)}function zb(t){const e=t.parts_.pop();t.byteLength_-=Ao(e),t.parts_.length>0&&(t.byteLength_-=1)}function fp(t){if(t.byteLength_>ed)throw new Error(t.errorPrefix_+"has a key path longer than "+ed+" bytes ("+t.byteLength_+").");if(t.parts_.length>Zu)throw new Error(t.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+Zu+") or object contains a cycle "+Qn(t))}function Qn(t){return t.parts_.length===0?"":"in property '"+t.parts_.join(".")+"'"}/**
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
 */class Yl extends dp{static getInstance(){return new Yl}constructor(){super(["visible"]);let e,n;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(n="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(n="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(n="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(n="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,n&&document.addEventListener(n,()=>{const s=!document[e];s!==this.visible_&&(this.visible_=s,this.trigger("visible",s))},!1)}getInitialEvent(e){return k(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
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
 */const hi=1e3,Gb=60*5*1e3,td=30*1e3,Kb=1.3,Yb=3e4,Qb="server_kill",nd=3;class hn extends up{constructor(e,n,s,i,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=n,this.onDataUpdate_=s,this.onConnectStatus_=i,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=hn.nextPersistentConnectionId_++,this.log_=tr("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=hi,this.maxReconnectDelay_=Gb,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l)throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Yl.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&Hr.getInstance().on("online",this.onOnline_,this)}sendRequest(e,n,s){const i=++this.requestNumber_,r={r:i,a:e,b:n};this.log_(Ue(r)),k(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),s&&(this.requestCBHash_[i]=s)}get(e){this.initConnection_();const n=new Xi,i={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?n.resolve(a):n.reject(a)}};this.outstandingGets_.push(i),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),n.promise}listen(e,n,s,i){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),k(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:i,hashFn:n,query:e,tag:s};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const n=this.outstandingGets_[e];this.sendRequest("g",n.request,s=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),n.onComplete&&n.onComplete(s)})}sendListen_(e){const n=e.query,s=n._path.toString(),i=n._queryIdentifier;this.log_("Listen on "+s+" for "+i);const r={p:s},o="q";e.tag&&(r.q=n._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;hn.warnOnListenWarnings_(l,n),(this.listens.get(s)&&this.listens.get(s).get(i))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(s,i),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,n){if(e&&typeof e=="object"&&en(e,"w")){const s=$s(e,"w");if(Array.isArray(s)&&~s.indexOf("no_index")){const i='".indexOn": "'+n._queryParams.getIndex().toString()+'"',r=n._path.toString();nt(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${i} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||Bv(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=td)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,n=Mv(e)?"auth":"gauth",s={cred:e};this.authOverride_===null?s.noauth=!0:typeof this.authOverride_=="object"&&(s.authvar=this.authOverride_),this.sendRequest(n,s,i=>{const r=i.s,o=i.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const n=e.s,s=e.d||"error";n==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(n,s)})}unlisten(e,n){const s=e._path.toString(),i=e._queryIdentifier;this.log_("Unlisten called for "+s+" "+i),k(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(s,i)&&this.connected_&&this.sendUnlisten_(s,i,e._queryObject,n)}sendUnlisten_(e,n,s,i){this.log_("Unlisten on "+e+" for "+n);const r={p:e},o="n";i&&(r.q=s,r.t=i),this.sendRequest(o,r)}onDisconnectPut(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:n,onComplete:s})}onDisconnectMerge(e,n,s){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,n,s):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:n,onComplete:s})}onDisconnectCancel(e,n){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,n):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:n})}sendOnDisconnect_(e,n,s,i){const r={p:n,d:s};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{i&&setTimeout(()=>{i(o.s,o.d)},Math.floor(0))})}put(e,n,s,i){this.putInternal("p",e,n,s,i)}merge(e,n,s,i){this.putInternal("m",e,n,s,i)}putInternal(e,n,s,i,r){this.initConnection_();const o={p:n,d:s};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:i}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+n)}sendPut_(e){const n=this.outstandingPuts_[e].action,s=this.outstandingPuts_[e].request,i=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(n,s,r=>{this.log_(n+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),i&&i(r.s,r.d)})}reportStats(e){if(this.connected_){const n={c:e};this.log_("reportStats",n),this.sendRequest("s",n,s=>{if(s.s!=="ok"){const r=s.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Ue(e));const n=e.r,s=this.requestCBHash_[n];s&&(delete this.requestCBHash_[n],s(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,n){this.log_("handleServerMessage",e,n),e==="d"?this.onDataUpdate_(n.p,n.d,!1,n.t):e==="m"?this.onDataUpdate_(n.p,n.d,!0,n.t):e==="c"?this.onListenRevoked_(n.p,n.q):e==="ac"?this.onAuthRevoked_(n.s,n.d):e==="apc"?this.onAppCheckRevoked_(n.s,n.d):e==="sd"?this.onSecurityDebugPacket_(n):Ga("Unrecognized action received from server: "+Ue(e)+`
Are you using the latest client?`)}onReady_(e,n){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=n,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){k(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>Yb&&(this.reconnectDelay_=hi),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=Math.max(0,new Date().getTime()-this.lastConnectionAttemptTime_);let n=Math.max(0,this.reconnectDelay_-e);n=Math.random()*n,this.log_("Trying to reconnect in "+n+"ms"),this.scheduleConnect_(n),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*Kb)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),n=this.onReady_.bind(this),s=this.onRealtimeDisconnect_.bind(this),i=this.id+":"+hn.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,s())},c=function(d){k(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(d)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[d,h]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?We("getToken() completed but was canceled"):(We("getToken() completed. Creating connection."),this.authToken_=d&&d.accessToken,this.appCheckToken_=h&&h.token,a=new Hb(i,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,n,s,m=>{nt(m+" ("+this.repoInfo_.toString()+")"),this.interrupt(Qb)},r))}catch(d){this.log_("Failed to get token: "+d),o||(this.repoInfo_.nodeAdmin&&nt(d),l())}}}interrupt(e){We("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){We("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Ha(this.interruptReasons_)&&(this.reconnectDelay_=hi,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const n=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:n})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const n=this.outstandingPuts_[e];n&&"h"in n.request&&n.queued&&(n.onComplete&&n.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,n){let s;n?s=n.map(r=>Wl(r)).join("$"):s="default";const i=this.removeListen_(e,s);i&&i.onComplete&&i.onComplete("permission_denied")}removeListen_(e,n){const s=new ge(e).toString();let i;if(this.listens.has(s)){const r=this.listens.get(s);i=r.get(n),r.delete(n),r.size===0&&this.listens.delete(s)}else i=void 0;return i}onAuthRevoked_(e,n){We("Auth token revoked: "+e+"/"+n),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=nd&&(this.reconnectDelay_=td,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,n){We("App check token revoked: "+e+"/"+n),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=nd&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const n of e.values())this.sendListen_(n);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let n="js";e["sdk."+n+"."+Wf.replace(/\./g,"-")]=1,Fl()?e["framework.cordova"]=1:Df()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=Hr.getInstance().currentlyOnline();return Ha(this.interruptReasons_)&&e}}hn.nextPersistentConnectionId_=0;hn.nextConnectionId_=0;/**
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
 */class ee{constructor(e,n){this.name=e,this.node=n}static Wrap(e,n){return new ee(e,n)}}/**
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
 */class Ro{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,n){const s=new ee(Hs,e),i=new ee(Hs,n);return this.compare(s,i)!==0}minPost(){return ee.MIN}}/**
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
 */let gr;class pp extends Ro{static get __EMPTY_NODE(){return gr}static set __EMPTY_NODE(e){gr=e}compare(e,n){return gs(e.name,n.name)}isDefinedOn(e){throw Js("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,n){return!1}minPost(){return ee.MIN}maxPost(){return new ee(cs,gr)}makePost(e,n){return k(typeof e=="string","KeyIndex indexValue must always be a string."),new ee(e,gr)}toString(){return".key"}}const xs=new pp;/**
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
 */class _r{constructor(e,n,s,i,r=null){this.isReverse_=i,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=n?s(e.key,n):1,i&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),n;if(this.resultGenerator_?n=this.resultGenerator_(e.key,e.value):n={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return n}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class Fe{constructor(e,n,s,i,r){this.key=e,this.value=n,this.color=s??Fe.RED,this.left=i??ct.EMPTY_NODE,this.right=r??ct.EMPTY_NODE}copy(e,n,s,i,r){return new Fe(e??this.key,n??this.value,s??this.color,i??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,s){let i=this;const r=s(e,i.key);return r<0?i=i.copy(null,null,null,i.left.insert(e,n,s),null):r===0?i=i.copy(null,n,null,null,null):i=i.copy(null,null,null,null,i.right.insert(e,n,s)),i.fixUp_()}removeMin_(){if(this.left.isEmpty())return ct.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,n){let s,i;if(s=this,n(e,s.key)<0)!s.left.isEmpty()&&!s.left.isRed_()&&!s.left.left.isRed_()&&(s=s.moveRedLeft_()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed_()&&(s=s.rotateRight_()),!s.right.isEmpty()&&!s.right.isRed_()&&!s.right.left.isRed_()&&(s=s.moveRedRight_()),n(e,s.key)===0){if(s.right.isEmpty())return ct.EMPTY_NODE;i=s.right.min_(),s=s.copy(i.key,i.value,null,null,s.right.removeMin_())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,Fe.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,Fe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}Fe.RED=!0;Fe.BLACK=!1;class Jb{copy(e,n,s,i,r){return this}insert(e,n,s){return new Fe(e,n,null)}remove(e,n){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ct{constructor(e,n=ct.EMPTY_NODE){this.comparator_=e,this.root_=n}insert(e,n){return new ct(this.comparator_,this.root_.insert(e,n,this.comparator_).copy(null,null,Fe.BLACK,null,null))}remove(e){return new ct(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,Fe.BLACK,null,null))}get(e){let n,s=this.root_;for(;!s.isEmpty();){if(n=this.comparator_(e,s.key),n===0)return s.value;n<0?s=s.left:n>0&&(s=s.right)}return null}getPredecessorKey(e){let n,s=this.root_,i=null;for(;!s.isEmpty();)if(n=this.comparator_(e,s.key),n===0){if(s.left.isEmpty())return i?i.key:null;for(s=s.left;!s.right.isEmpty();)s=s.right;return s.key}else n<0?s=s.left:n>0&&(i=s,s=s.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new _r(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,n){return new _r(this.root_,e,this.comparator_,!1,n)}getReverseIteratorFrom(e,n){return new _r(this.root_,e,this.comparator_,!0,n)}getReverseIterator(e){return new _r(this.root_,null,this.comparator_,!0,e)}}ct.EMPTY_NODE=new Jb;/**
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
 */function Xb(t,e){return gs(t.name,e.name)}function Ql(t,e){return gs(t,e)}/**
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
 */let Ya;function Zb(t){Ya=t}const mp=function(t){return typeof t=="number"?"number:"+Gf(t):"string:"+t},gp=function(t){if(t.isLeafNode()){const e=t.val();k(typeof e=="string"||typeof e=="number"||typeof e=="object"&&en(e,".sv"),"Priority must be a string or number.")}else k(t===Ya||t.isEmpty(),"priority of unexpected type.");k(t===Ya||t.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
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
 */let sd;class Be{static set __childrenNodeConstructor(e){sd=e}static get __childrenNodeConstructor(){return sd}constructor(e,n=Be.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=n,this.lazyHash_=null,k(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),gp(this.priorityNode_)}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new Be(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return te(e)?this:Z(e)===".priority"?this.priorityNode_:Be.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,n){return null}updateImmediateChild(e,n){return e===".priority"?this.updatePriority(n):n.isEmpty()&&e!==".priority"?this:Be.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,n).updatePriority(this.priorityNode_)}updateChild(e,n){const s=Z(e);return s===null?n:n.isEmpty()&&s!==".priority"?this:(k(s!==".priority"||Bn(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(s,Be.__childrenNodeConstructor.EMPTY_NODE.updateChild(Ee(e),n)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,n){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+mp(this.priorityNode_.val())+":");const n=typeof this.value_;e+=n+":",n==="number"?e+=Gf(this.value_):e+=this.value_,this.lazyHash_=qf(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===Be.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof Be.__childrenNodeConstructor?-1:(k(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const n=typeof e.value_,s=typeof this.value_,i=Be.VALUE_TYPE_ORDER.indexOf(n),r=Be.VALUE_TYPE_ORDER.indexOf(s);return k(i>=0,"Unknown leaf type: "+n),k(r>=0,"Unknown leaf type: "+s),i===r?s==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-i}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const n=e;return this.value_===n.value_&&this.priorityNode_.equals(n.priorityNode_)}else return!1}}Be.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
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
 */let _p,wp;function eC(t){_p=t}function tC(t){wp=t}class nC extends Ro{compare(e,n){const s=e.node.getPriority(),i=n.node.getPriority(),r=s.compareTo(i);return r===0?gs(e.name,n.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,n){return!e.getPriority().equals(n.getPriority())}minPost(){return ee.MIN}maxPost(){return new ee(cs,new Be("[PRIORITY-POST]",wp))}makePost(e,n){const s=_p(e);return new ee(n,new Be("[PRIORITY-POST]",s))}toString(){return".priority"}}const Oe=new nC;/**
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
 */const sC=Math.log(2);class iC{constructor(e){const n=r=>parseInt(Math.log(r)/sC,10),s=r=>parseInt(Array(r+1).join("1"),2);this.count=n(e+1),this.current_=this.count-1;const i=s(this.count);this.bits_=e+1&i}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const Vr=function(t,e,n,s){t.sort(e);const i=function(l,c){const u=c-l;let d,h;if(u===0)return null;if(u===1)return d=t[l],h=n?n(d):d,new Fe(h,d.node,Fe.BLACK,null,null);{const m=parseInt(u/2,10)+l,v=i(l,m),y=i(m+1,c);return d=t[m],h=n?n(d):d,new Fe(h,d.node,Fe.BLACK,v,y)}},r=function(l){let c=null,u=null,d=t.length;const h=function(v,y){const R=d-v,F=d;d-=v;const M=i(R+1,F),$=t[R],B=n?n($):$;m(new Fe(B,$.node,y,null,M))},m=function(v){c?(c.left=v,c=v):(u=v,c=v)};for(let v=0;v<l.count;++v){const y=l.nextBitIsOne(),R=Math.pow(2,l.count-(v+1));y?h(R,Fe.BLACK):(h(R,Fe.BLACK),h(R,Fe.RED))}return u},o=new iC(t.length),a=r(o);return new ct(s||e,a)};/**
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
 */let ga;const Es={};class cn{static get Default(){return k(Es&&Oe,"ChildrenNode.ts has not been loaded"),ga=ga||new cn({".priority":Es},{".priority":Oe}),ga}constructor(e,n){this.indexes_=e,this.indexSet_=n}get(e){const n=$s(this.indexes_,e);if(!n)throw new Error("No index defined for "+e);return n instanceof ct?n:null}hasIndex(e){return en(this.indexSet_,e.toString())}addIndex(e,n){k(e!==xs,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const s=[];let i=!1;const r=n.getIterator(ee.Wrap);let o=r.getNext();for(;o;)i=i||e.isDefinedOn(o.node),s.push(o),o=r.getNext();let a;i?a=Vr(s,e.getCompare()):a=Es;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new cn(u,c)}addToIndexes(e,n){const s=Fr(this.indexes_,(i,r)=>{const o=$s(this.indexSet_,r);if(k(o,"Missing index implementation for "+r),i===Es)if(o.isDefinedOn(e.node)){const a=[],l=n.getIterator(ee.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),Vr(a,o.getCompare())}else return Es;else{const a=n.get(e.name);let l=i;return a&&(l=l.remove(new ee(e.name,a))),l.insert(e,e.node)}});return new cn(s,this.indexSet_)}removeFromIndexes(e,n){const s=Fr(this.indexes_,i=>{if(i===Es)return i;{const r=n.get(e.name);return r?i.remove(new ee(e.name,r)):i}});return new cn(s,this.indexSet_)}}/**
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
 */let fi;class j{static get EMPTY_NODE(){return fi||(fi=new j(new ct(Ql),null,cn.Default))}constructor(e,n,s){this.children_=e,this.priorityNode_=n,this.indexMap_=s,this.lazyHash_=null,this.priorityNode_&&gp(this.priorityNode_),this.children_.isEmpty()&&k(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}isLeafNode(){return!1}getPriority(){return this.priorityNode_||fi}updatePriority(e){return this.children_.isEmpty()?this:new j(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const n=this.children_.get(e);return n===null?fi:n}}getChild(e){const n=Z(e);return n===null?this:this.getImmediateChild(n).getChild(Ee(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,n){if(k(n,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(n);{const s=new ee(e,n);let i,r;n.isEmpty()?(i=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(s,this.children_)):(i=this.children_.insert(e,n),r=this.indexMap_.addToIndexes(s,this.children_));const o=i.isEmpty()?fi:this.priorityNode_;return new j(i,o,r)}}updateChild(e,n){const s=Z(e);if(s===null)return n;{k(Z(e)!==".priority"||Bn(e)===1,".priority must be the last token in a path");const i=this.getImmediateChild(s).updateChild(Ee(e),n);return this.updateImmediateChild(s,i)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const n={};let s=0,i=0,r=!0;if(this.forEachChild(Oe,(o,a)=>{n[o]=a.val(e),s++,r&&j.INTEGER_REGEXP_.test(o)?i=Math.max(i,Number(o)):r=!1}),!e&&r&&i<2*s){const o=[];for(const a in n)o[a]=n[a];return o}else return e&&!this.getPriority().isEmpty()&&(n[".priority"]=this.getPriority().val()),n}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+mp(this.getPriority().val())+":"),this.forEachChild(Oe,(n,s)=>{const i=s.hash();i!==""&&(e+=":"+n+":"+i)}),this.lazyHash_=e===""?"":qf(e)}return this.lazyHash_}getPredecessorChildName(e,n,s){const i=this.resolveIndex_(s);if(i){const r=i.getPredecessorKey(new ee(e,n));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.minKey();return s&&s.name}else return this.children_.minKey()}getFirstChild(e){const n=this.getFirstChildName(e);return n?new ee(n,this.children_.get(n)):null}getLastChildName(e){const n=this.resolveIndex_(e);if(n){const s=n.maxKey();return s&&s.name}else return this.children_.maxKey()}getLastChild(e){const n=this.getLastChildName(e);return n?new ee(n,this.children_.get(n)):null}forEachChild(e,n){const s=this.resolveIndex_(e);return s?s.inorderTraversal(i=>n(i.name,i.node)):this.children_.inorderTraversal(n)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getIteratorFrom(e,i=>i);{const i=this.children_.getIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)<0;)i.getNext(),r=i.peek();return i}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,n){const s=this.resolveIndex_(n);if(s)return s.getReverseIteratorFrom(e,i=>i);{const i=this.children_.getReverseIteratorFrom(e.name,ee.Wrap);let r=i.peek();for(;r!=null&&n.compare(r,e)>0;)i.getNext(),r=i.peek();return i}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===nr?-1:0}withIndex(e){if(e===xs||this.indexMap_.hasIndex(e))return this;{const n=this.indexMap_.addIndex(e,this.children_);return new j(this.children_,this.priorityNode_,n)}}isIndexed(e){return e===xs||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const n=e;if(this.getPriority().equals(n.getPriority()))if(this.children_.count()===n.children_.count()){const s=this.getIterator(Oe),i=n.getIterator(Oe);let r=s.getNext(),o=i.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=s.getNext(),o=i.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===xs?null:this.indexMap_.get(e.toString())}}j.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class rC extends j{constructor(){super(new ct(Ql),j.EMPTY_NODE,cn.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return j.EMPTY_NODE}isEmpty(){return!1}}const nr=new rC;Object.defineProperties(ee,{MIN:{value:new ee(Hs,j.EMPTY_NODE)},MAX:{value:new ee(cs,nr)}});pp.__EMPTY_NODE=j.EMPTY_NODE;Be.__childrenNodeConstructor=j;Zb(nr);tC(nr);/**
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
 */const oC=!0;function $e(t,e=null){if(t===null)return j.EMPTY_NODE;if(typeof t=="object"&&".priority"in t&&(e=t[".priority"]),k(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof t=="object"&&".value"in t&&t[".value"]!==null&&(t=t[".value"]),typeof t!="object"||".sv"in t){const n=t;return new Be(n,$e(e))}if(!(t instanceof Array)&&oC){const n=[];let s=!1;if(qe(t,(o,a)=>{if(o.substring(0,1)!=="."){const l=$e(a);l.isEmpty()||(s=s||!l.getPriority().isEmpty(),n.push(new ee(o,l)))}}),n.length===0)return j.EMPTY_NODE;const r=Vr(n,Xb,o=>o.name,Ql);if(s){const o=Vr(n,Oe.getCompare());return new j(r,$e(e),new cn({".priority":o},{".priority":Oe}))}else return new j(r,$e(e),cn.Default)}else{let n=j.EMPTY_NODE;return qe(t,(s,i)=>{if(en(t,s)&&s.substring(0,1)!=="."){const r=$e(i);(r.isLeafNode()||!r.isEmpty())&&(n=n.updateImmediateChild(s,r))}}),n.updatePriority($e(e))}}eC($e);/**
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
 */class aC extends Ro{constructor(e){super(),this.indexPath_=e,k(!te(e)&&Z(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,n){const s=this.extractChild(e.node),i=this.extractChild(n.node),r=s.compareTo(i);return r===0?gs(e.name,n.name):r}makePost(e,n){const s=$e(e),i=j.EMPTY_NODE.updateChild(this.indexPath_,s);return new ee(n,i)}maxPost(){const e=j.EMPTY_NODE.updateChild(this.indexPath_,nr);return new ee(cs,e)}toString(){return Ui(this.indexPath_,0).join("/")}}/**
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
 */class lC extends Ro{compare(e,n){const s=e.node.compareTo(n.node);return s===0?gs(e.name,n.name):s}isDefinedOn(e){return!0}indexedValueChanged(e,n){return!e.equals(n)}minPost(){return ee.MIN}maxPost(){return ee.MAX}makePost(e,n){const s=$e(e);return new ee(n,s)}toString(){return".value"}}const cC=new lC;/**
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
 */function vp(t){return{type:"value",snapshotNode:t}}function Vs(t,e){return{type:"child_added",snapshotNode:e,childName:t}}function Hi(t,e){return{type:"child_removed",snapshotNode:e,childName:t}}function Vi(t,e,n){return{type:"child_changed",snapshotNode:e,childName:t,oldSnap:n}}function uC(t,e){return{type:"child_moved",snapshotNode:e,childName:t}}/**
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
 */class Jl{constructor(e){this.index_=e}updateChild(e,n,s,i,r,o){k(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(n);return a.getChild(i).equals(s.getChild(i))&&a.isEmpty()===s.isEmpty()||(o!=null&&(s.isEmpty()?e.hasChild(n)?o.trackChildChange(Hi(n,a)):k(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Vs(n,s)):o.trackChildChange(Vi(n,s,a))),e.isLeafNode()&&s.isEmpty())?e:e.updateImmediateChild(n,s).withIndex(this.index_)}updateFullNode(e,n,s){return s!=null&&(e.isLeafNode()||e.forEachChild(Oe,(i,r)=>{n.hasChild(i)||s.trackChildChange(Hi(i,r))}),n.isLeafNode()||n.forEachChild(Oe,(i,r)=>{if(e.hasChild(i)){const o=e.getImmediateChild(i);o.equals(r)||s.trackChildChange(Vi(i,r,o))}else s.trackChildChange(Vs(i,r))})),n.withIndex(this.index_)}updatePriority(e,n){return e.isEmpty()?j.EMPTY_NODE:e.updatePriority(n)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
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
 */class Wi{constructor(e){this.indexedFilter_=new Jl(e.getIndex()),this.index_=e.getIndex(),this.startPost_=Wi.getStartPost_(e),this.endPost_=Wi.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const n=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,s=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return n&&s}updateChild(e,n,s,i,r,o){return this.matches(new ee(n,s))||(s=j.EMPTY_NODE),this.indexedFilter_.updateChild(e,n,s,i,r,o)}updateFullNode(e,n,s){n.isLeafNode()&&(n=j.EMPTY_NODE);let i=n.withIndex(this.index_);i=i.updatePriority(j.EMPTY_NODE);const r=this;return n.forEachChild(Oe,(o,a)=>{r.matches(new ee(o,a))||(i=i.updateImmediateChild(o,j.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const n=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),n)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const n=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),n)}else return e.getIndex().maxPost()}}/**
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
 */class dC{constructor(e){this.withinDirectionalStart=n=>this.reverse_?this.withinEndPost(n):this.withinStartPost(n),this.withinDirectionalEnd=n=>this.reverse_?this.withinStartPost(n):this.withinEndPost(n),this.withinStartPost=n=>{const s=this.index_.compare(this.rangedFilter_.getStartPost(),n);return this.startIsInclusive_?s<=0:s<0},this.withinEndPost=n=>{const s=this.index_.compare(n,this.rangedFilter_.getEndPost());return this.endIsInclusive_?s<=0:s<0},this.rangedFilter_=new Wi(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,n,s,i,r,o){return this.rangedFilter_.matches(new ee(n,s))||(s=j.EMPTY_NODE),e.getImmediateChild(n).equals(s)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,n,s,i,r,o):this.fullLimitUpdateChild_(e,n,s,r,o)}updateFullNode(e,n,s){let i;if(n.isLeafNode()||n.isEmpty())i=j.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<n.numChildren()&&n.isIndexed(this.index_)){i=j.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=n.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=n.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))i=i.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{i=n.withIndex(this.index_),i=i.updatePriority(j.EMPTY_NODE);let r;this.reverse_?r=i.getReverseIterator(this.index_):r=i.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:i=i.updateImmediateChild(a.name,j.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,i,s)}updatePriority(e,n){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,n,s,i,r){let o;if(this.reverse_){const d=this.index_.getCompare();o=(h,m)=>d(m,h)}else o=this.index_.getCompare();const a=e;k(a.numChildren()===this.limit_,"");const l=new ee(n,s),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(n)){const d=a.getImmediateChild(n);let h=i.getChildAfterChild(this.index_,c,this.reverse_);for(;h!=null&&(h.name===n||a.hasChild(h.name));)h=i.getChildAfterChild(this.index_,h,this.reverse_);const m=h==null?1:o(h,l);if(u&&!s.isEmpty()&&m>=0)return r!=null&&r.trackChildChange(Vi(n,s,d)),a.updateImmediateChild(n,s);{r!=null&&r.trackChildChange(Hi(n,d));const y=a.updateImmediateChild(n,j.EMPTY_NODE);return h!=null&&this.rangedFilter_.matches(h)?(r!=null&&r.trackChildChange(Vs(h.name,h.node)),y.updateImmediateChild(h.name,h.node)):y}}else return s.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(Hi(c.name,c.node)),r.trackChildChange(Vs(n,s))),a.updateImmediateChild(n,s).updateImmediateChild(c.name,j.EMPTY_NODE)):e}}/**
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
 */class Xl{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=Oe}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return k(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return k(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:Hs}hasEnd(){return this.endSet_}getIndexEndValue(){return k(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return k(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:cs}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return k(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===Oe}copy(){const e=new Xl;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function hC(t){return t.loadsAllData()?new Jl(t.getIndex()):t.hasLimit()?new dC(t):new Wi(t)}function id(t){const e={};if(t.isDefault())return e;let n;if(t.index_===Oe?n="$priority":t.index_===cC?n="$value":t.index_===xs?n="$key":(k(t.index_ instanceof aC,"Unrecognized index type!"),n=t.index_.toString()),e.orderBy=Ue(n),t.startSet_){const s=t.startAfterSet_?"startAfter":"startAt";e[s]=Ue(t.indexStartValue_),t.startNameSet_&&(e[s]+=","+Ue(t.indexStartName_))}if(t.endSet_){const s=t.endBeforeSet_?"endBefore":"endAt";e[s]=Ue(t.indexEndValue_),t.endNameSet_&&(e[s]+=","+Ue(t.indexEndName_))}return t.limitSet_&&(t.isViewFromLeft()?e.limitToFirst=t.limit_:e.limitToLast=t.limit_),e}function rd(t){const e={};if(t.startSet_&&(e.sp=t.indexStartValue_,t.startNameSet_&&(e.sn=t.indexStartName_),e.sin=!t.startAfterSet_),t.endSet_&&(e.ep=t.indexEndValue_,t.endNameSet_&&(e.en=t.indexEndName_),e.ein=!t.endBeforeSet_),t.limitSet_){e.l=t.limit_;let n=t.viewFrom_;n===""&&(t.isViewFromLeft()?n="l":n="r"),e.vf=n}return t.index_!==Oe&&(e.i=t.index_.toString()),e}/**
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
 */class Wr extends up{reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,n){return n!==void 0?"tag$"+n:(k(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}constructor(e,n,s,i){super(),this.repoInfo_=e,this.onDataUpdate_=n,this.authTokenProvider_=s,this.appCheckTokenProvider_=i,this.log_=tr("p:rest:"),this.listens_={}}listen(e,n,s,i){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=Wr.getListenId_(e,s),a={};this.listens_[o]=a;const l=id(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let d=u;if(c===404&&(d=null,c=null),c===null&&this.onDataUpdate_(r,d,!1,s),$s(this.listens_,o)===a){let h;c?c===401?h="permission_denied":h="rest_error:"+c:h="ok",i(h,null)}})}unlisten(e,n){const s=Wr.getListenId_(e,n);delete this.listens_[s]}get(e){const n=id(e._queryParams),s=e._path.toString(),i=new Xi;return this.restRequest_(s+".json",n,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(s,a,!1,null),i.resolve(a)):i.reject(new Error(a))}),i.promise}refreshAuthToken(e){}restRequest_(e,n={},s){return n.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([i,r])=>{i&&i.accessToken&&(n.auth=i.accessToken),r&&r.token&&(n.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+Xs(n);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(s&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=Bi(a.responseText)}catch{nt("Failed to parse JSON response for "+o+": "+a.responseText)}s(null,l)}else a.status!==401&&a.status!==404&&nt("Got unsuccessful REST response for "+o+" Status: "+a.status),s(a.status);s=null}},a.open("GET",o,!0),a.send()})}}/**
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
 */class fC{constructor(){this.rootNode_=j.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,n){this.rootNode_=this.rootNode_.updateChild(e,n)}}/**
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
 */function jr(){return{value:null,children:new Map}}function yp(t,e,n){if(te(e))t.value=n,t.children.clear();else if(t.value!==null)t.value=t.value.updateChild(e,n);else{const s=Z(e);t.children.has(s)||t.children.set(s,jr());const i=t.children.get(s);e=Ee(e),yp(i,e,n)}}function Qa(t,e,n){t.value!==null?n(e,t.value):pC(t,(s,i)=>{const r=new ge(e.toString()+"/"+s);Qa(i,r,n)})}function pC(t,e){t.children.forEach((n,s)=>{e(s,n)})}/**
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
 */class mC{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),n=Object.assign({},e);return this.last_&&qe(this.last_,(s,i)=>{n[s]=n[s]-i}),this.last_=e,n}}/**
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
 */const od=10*1e3,gC=30*1e3,_C=5*60*1e3;class wC{constructor(e,n){this.server_=n,this.statsToReport_={},this.statsListener_=new mC(e);const s=od+(gC-od)*Math.random();Si(this.reportStats_.bind(this),Math.floor(s))}reportStats_(){const e=this.statsListener_.get(),n={};let s=!1;qe(e,(i,r)=>{r>0&&en(this.statsToReport_,i)&&(n[i]=r,s=!0)}),s&&this.server_.reportStats(n),Si(this.reportStats_.bind(this),Math.floor(Math.random()*2*_C))}}/**
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
 */var Ot;(function(t){t[t.OVERWRITE=0]="OVERWRITE",t[t.MERGE=1]="MERGE",t[t.ACK_USER_WRITE=2]="ACK_USER_WRITE",t[t.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(Ot||(Ot={}));function Zl(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function ec(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function tc(t){return{fromUser:!1,fromServer:!0,queryId:t,tagged:!0}}/**
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
 */class qr{constructor(e,n,s){this.path=e,this.affectedTree=n,this.revert=s,this.type=Ot.ACK_USER_WRITE,this.source=Zl()}operationForChild(e){if(te(this.path)){if(this.affectedTree.value!=null)return k(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const n=this.affectedTree.subtree(new ge(e));return new qr(de(),n,this.revert)}}else return k(Z(this.path)===e,"operationForChild called for unrelated child."),new qr(Ee(this.path),this.affectedTree,this.revert)}}/**
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
 */class ji{constructor(e,n){this.source=e,this.path=n,this.type=Ot.LISTEN_COMPLETE}operationForChild(e){return te(this.path)?new ji(this.source,de()):new ji(this.source,Ee(this.path))}}/**
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
 */class us{constructor(e,n,s){this.source=e,this.path=n,this.snap=s,this.type=Ot.OVERWRITE}operationForChild(e){return te(this.path)?new us(this.source,de(),this.snap.getImmediateChild(e)):new us(this.source,Ee(this.path),this.snap)}}/**
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
 */class Ws{constructor(e,n,s){this.source=e,this.path=n,this.children=s,this.type=Ot.MERGE}operationForChild(e){if(te(this.path)){const n=this.children.subtree(new ge(e));return n.isEmpty()?null:n.value?new us(this.source,de(),n.value):new Ws(this.source,de(),n)}else return k(Z(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new Ws(this.source,Ee(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
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
 */class ds{constructor(e,n,s){this.node_=e,this.fullyInitialized_=n,this.filtered_=s}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(te(e))return this.isFullyInitialized()&&!this.filtered_;const n=Z(e);return this.isCompleteForChild(n)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
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
 */class vC{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function yC(t,e,n,s){const i=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&t.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push(uC(o.childName,o.snapshotNode))}),pi(t,i,"child_removed",e,s,n),pi(t,i,"child_added",e,s,n),pi(t,i,"child_moved",r,s,n),pi(t,i,"child_changed",e,s,n),pi(t,i,"value",e,s,n),i}function pi(t,e,n,s,i,r){const o=s.filter(a=>a.type===n);o.sort((a,l)=>CC(t,a,l)),o.forEach(a=>{const l=bC(t,a,r);i.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,t.query_))})})}function bC(t,e,n){return e.type==="value"||e.type==="child_removed"||(e.prevName=n.getPredecessorChildName(e.childName,e.snapshotNode,t.index_)),e}function CC(t,e,n){if(e.childName==null||n.childName==null)throw Js("Should only compare child_ events.");const s=new ee(e.childName,e.snapshotNode),i=new ee(n.childName,n.snapshotNode);return t.index_.compare(s,i)}/**
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
 */function xo(t,e){return{eventCache:t,serverCache:e}}function Ti(t,e,n,s){return xo(new ds(e,n,s),t.serverCache)}function bp(t,e,n,s){return xo(t.eventCache,new ds(e,n,s))}function Ja(t){return t.eventCache.isFullyInitialized()?t.eventCache.getNode():null}function hs(t){return t.serverCache.isFullyInitialized()?t.serverCache.getNode():null}/**
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
 */let _a;const EC=()=>(_a||(_a=new ct(ab)),_a);class be{static fromObject(e){let n=new be(null);return qe(e,(s,i)=>{n=n.set(new ge(s),i)}),n}constructor(e,n=EC()){this.value=e,this.children=n}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,n){if(this.value!=null&&n(this.value))return{path:de(),value:this.value};if(te(e))return null;{const s=Z(e),i=this.children.get(s);if(i!==null){const r=i.findRootMostMatchingPathAndValue(Ee(e),n);return r!=null?{path:Re(new ge(s),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(te(e))return this;{const n=Z(e),s=this.children.get(n);return s!==null?s.subtree(Ee(e)):new be(null)}}set(e,n){if(te(e))return new be(n,this.children);{const s=Z(e),r=(this.children.get(s)||new be(null)).set(Ee(e),n),o=this.children.insert(s,r);return new be(this.value,o)}}remove(e){if(te(e))return this.children.isEmpty()?new be(null):new be(null,this.children);{const n=Z(e),s=this.children.get(n);if(s){const i=s.remove(Ee(e));let r;return i.isEmpty()?r=this.children.remove(n):r=this.children.insert(n,i),this.value===null&&r.isEmpty()?new be(null):new be(this.value,r)}else return this}}get(e){if(te(e))return this.value;{const n=Z(e),s=this.children.get(n);return s?s.get(Ee(e)):null}}setTree(e,n){if(te(e))return n;{const s=Z(e),r=(this.children.get(s)||new be(null)).setTree(Ee(e),n);let o;return r.isEmpty()?o=this.children.remove(s):o=this.children.insert(s,r),new be(this.value,o)}}fold(e){return this.fold_(de(),e)}fold_(e,n){const s={};return this.children.inorderTraversal((i,r)=>{s[i]=r.fold_(Re(e,i),n)}),n(e,this.value,s)}findOnPath(e,n){return this.findOnPath_(e,de(),n)}findOnPath_(e,n,s){const i=this.value?s(n,this.value):!1;if(i)return i;if(te(e))return null;{const r=Z(e),o=this.children.get(r);return o?o.findOnPath_(Ee(e),Re(n,r),s):null}}foreachOnPath(e,n){return this.foreachOnPath_(e,de(),n)}foreachOnPath_(e,n,s){if(te(e))return this;{this.value&&s(n,this.value);const i=Z(e),r=this.children.get(i);return r?r.foreachOnPath_(Ee(e),Re(n,i),s):new be(null)}}foreach(e){this.foreach_(de(),e)}foreach_(e,n){this.children.inorderTraversal((s,i)=>{i.foreach_(Re(e,s),n)}),this.value&&n(e,this.value)}foreachChild(e){this.children.inorderTraversal((n,s)=>{s.value&&e(n,s.value)})}}/**
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
 */class Dt{constructor(e){this.writeTree_=e}static empty(){return new Dt(new be(null))}}function ki(t,e,n){if(te(e))return new Dt(new be(n));{const s=t.writeTree_.findRootMostValueAndPath(e);if(s!=null){const i=s.path;let r=s.value;const o=lt(i,e);return r=r.updateChild(o,n),new Dt(t.writeTree_.set(i,r))}else{const i=new be(n),r=t.writeTree_.setTree(e,i);return new Dt(r)}}}function Xa(t,e,n){let s=t;return qe(n,(i,r)=>{s=ki(s,Re(e,i),r)}),s}function ad(t,e){if(te(e))return Dt.empty();{const n=t.writeTree_.setTree(e,new be(null));return new Dt(n)}}function Za(t,e){return _s(t,e)!=null}function _s(t,e){const n=t.writeTree_.findRootMostValueAndPath(e);return n!=null?t.writeTree_.get(n.path).getChild(lt(n.path,e)):null}function ld(t){const e=[],n=t.writeTree_.value;return n!=null?n.isLeafNode()||n.forEachChild(Oe,(s,i)=>{e.push(new ee(s,i))}):t.writeTree_.children.inorderTraversal((s,i)=>{i.value!=null&&e.push(new ee(s,i.value))}),e}function Mn(t,e){if(te(e))return t;{const n=_s(t,e);return n!=null?new Dt(new be(n)):new Dt(t.writeTree_.subtree(e))}}function el(t){return t.writeTree_.isEmpty()}function js(t,e){return Cp(de(),t.writeTree_,e)}function Cp(t,e,n){if(e.value!=null)return n.updateChild(t,e.value);{let s=null;return e.children.inorderTraversal((i,r)=>{i===".priority"?(k(r.value!==null,"Priority writes must always be leaf nodes"),s=r.value):n=Cp(Re(t,i),r,n)}),!n.getChild(t).isEmpty()&&s!==null&&(n=n.updateChild(Re(t,".priority"),s)),n}}/**
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
 */function nc(t,e){return Tp(e,t)}function IC(t,e,n,s,i){k(s>t.lastWriteId,"Stacking an older write on top of newer ones"),i===void 0&&(i=!0),t.allWrites.push({path:e,snap:n,writeId:s,visible:i}),i&&(t.visibleWrites=ki(t.visibleWrites,e,n)),t.lastWriteId=s}function SC(t,e,n,s){k(s>t.lastWriteId,"Stacking an older merge on top of newer ones"),t.allWrites.push({path:e,children:n,writeId:s,visible:!0}),t.visibleWrites=Xa(t.visibleWrites,e,n),t.lastWriteId=s}function TC(t,e){for(let n=0;n<t.allWrites.length;n++){const s=t.allWrites[n];if(s.writeId===e)return s}return null}function kC(t,e){const n=t.allWrites.findIndex(a=>a.writeId===e);k(n>=0,"removeWrite called with nonexistent writeId.");const s=t.allWrites[n];t.allWrites.splice(n,1);let i=s.visible,r=!1,o=t.allWrites.length-1;for(;i&&o>=0;){const a=t.allWrites[o];a.visible&&(o>=n&&PC(a,s.path)?i=!1:It(s.path,a.path)&&(r=!0)),o--}if(i){if(r)return AC(t),!0;if(s.snap)t.visibleWrites=ad(t.visibleWrites,s.path);else{const a=s.children;qe(a,l=>{t.visibleWrites=ad(t.visibleWrites,Re(s.path,l))})}return!0}else return!1}function PC(t,e){if(t.snap)return It(t.path,e);for(const n in t.children)if(t.children.hasOwnProperty(n)&&It(Re(t.path,n),e))return!0;return!1}function AC(t){t.visibleWrites=Ep(t.allWrites,RC,de()),t.allWrites.length>0?t.lastWriteId=t.allWrites[t.allWrites.length-1].writeId:t.lastWriteId=-1}function RC(t){return t.visible}function Ep(t,e,n){let s=Dt.empty();for(let i=0;i<t.length;++i){const r=t[i];if(e(r)){const o=r.path;let a;if(r.snap)It(n,o)?(a=lt(n,o),s=ki(s,a,r.snap)):It(o,n)&&(a=lt(o,n),s=ki(s,de(),r.snap.getChild(a)));else if(r.children){if(It(n,o))a=lt(n,o),s=Xa(s,a,r.children);else if(It(o,n))if(a=lt(o,n),te(a))s=Xa(s,de(),r.children);else{const l=$s(r.children,Z(a));if(l){const c=l.getChild(Ee(a));s=ki(s,de(),c)}}}else throw Js("WriteRecord should have .snap or .children")}}return s}function Ip(t,e,n,s,i){if(!s&&!i){const r=_s(t.visibleWrites,e);if(r!=null)return r;{const o=Mn(t.visibleWrites,e);if(el(o))return n;if(n==null&&!Za(o,de()))return null;{const a=n||j.EMPTY_NODE;return js(o,a)}}}else{const r=Mn(t.visibleWrites,e);if(!i&&el(r))return n;if(!i&&n==null&&!Za(r,de()))return null;{const o=function(c){return(c.visible||i)&&(!s||!~s.indexOf(c.writeId))&&(It(c.path,e)||It(e,c.path))},a=Ep(t.allWrites,o,e),l=n||j.EMPTY_NODE;return js(a,l)}}}function xC(t,e,n){let s=j.EMPTY_NODE;const i=_s(t.visibleWrites,e);if(i)return i.isLeafNode()||i.forEachChild(Oe,(r,o)=>{s=s.updateImmediateChild(r,o)}),s;if(n){const r=Mn(t.visibleWrites,e);return n.forEachChild(Oe,(o,a)=>{const l=js(Mn(r,new ge(o)),a);s=s.updateImmediateChild(o,l)}),ld(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}else{const r=Mn(t.visibleWrites,e);return ld(r).forEach(o=>{s=s.updateImmediateChild(o.name,o.node)}),s}}function OC(t,e,n,s,i){k(s||i,"Either existingEventSnap or existingServerSnap must exist");const r=Re(e,n);if(Za(t.visibleWrites,r))return null;{const o=Mn(t.visibleWrites,r);return el(o)?i.getChild(n):js(o,i.getChild(n))}}function NC(t,e,n,s){const i=Re(e,n),r=_s(t.visibleWrites,i);if(r!=null)return r;if(s.isCompleteForChild(n)){const o=Mn(t.visibleWrites,i);return js(o,s.getNode().getImmediateChild(n))}else return null}function LC(t,e){return _s(t.visibleWrites,e)}function DC(t,e,n,s,i,r,o){let a;const l=Mn(t.visibleWrites,e),c=_s(l,de());if(c!=null)a=c;else if(n!=null)a=js(l,n);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],d=o.getCompare(),h=r?a.getReverseIteratorFrom(s,o):a.getIteratorFrom(s,o);let m=h.getNext();for(;m&&u.length<i;)d(m,s)!==0&&u.push(m),m=h.getNext();return u}else return[]}function MC(){return{visibleWrites:Dt.empty(),allWrites:[],lastWriteId:-1}}function zr(t,e,n,s){return Ip(t.writeTree,t.treePath,e,n,s)}function sc(t,e){return xC(t.writeTree,t.treePath,e)}function cd(t,e,n,s){return OC(t.writeTree,t.treePath,e,n,s)}function Gr(t,e){return LC(t.writeTree,Re(t.treePath,e))}function BC(t,e,n,s,i,r){return DC(t.writeTree,t.treePath,e,n,s,i,r)}function ic(t,e,n){return NC(t.writeTree,t.treePath,e,n)}function Sp(t,e){return Tp(Re(t.treePath,e),t.writeTree)}function Tp(t,e){return{treePath:t,writeTree:e}}/**
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
 */class FC{constructor(){this.changeMap=new Map}trackChildChange(e){const n=e.type,s=e.childName;k(n==="child_added"||n==="child_changed"||n==="child_removed","Only child changes supported for tracking"),k(s!==".priority","Only non-priority child changes can be tracked.");const i=this.changeMap.get(s);if(i){const r=i.type;if(n==="child_added"&&r==="child_removed")this.changeMap.set(s,Vi(s,e.snapshotNode,i.snapshotNode));else if(n==="child_removed"&&r==="child_added")this.changeMap.delete(s);else if(n==="child_removed"&&r==="child_changed")this.changeMap.set(s,Hi(s,i.oldSnap));else if(n==="child_changed"&&r==="child_added")this.changeMap.set(s,Vs(s,e.snapshotNode));else if(n==="child_changed"&&r==="child_changed")this.changeMap.set(s,Vi(s,e.snapshotNode,i.oldSnap));else throw Js("Illegal combination of changes: "+e+" occurred after "+i)}else this.changeMap.set(s,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
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
 */class $C{getCompleteChild(e){return null}getChildAfterChild(e,n,s){return null}}const kp=new $C;class rc{constructor(e,n,s=null){this.writes_=e,this.viewCache_=n,this.optCompleteServerCache_=s}getCompleteChild(e){const n=this.viewCache_.eventCache;if(n.isCompleteForChild(e))return n.getNode().getImmediateChild(e);{const s=this.optCompleteServerCache_!=null?new ds(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return ic(this.writes_,e,s)}}getChildAfterChild(e,n,s){const i=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:hs(this.viewCache_),r=BC(this.writes_,i,n,1,s,e);return r.length===0?null:r[0]}}/**
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
 */function UC(t){return{filter:t}}function HC(t,e){k(e.eventCache.getNode().isIndexed(t.filter.getIndex()),"Event snap not indexed"),k(e.serverCache.getNode().isIndexed(t.filter.getIndex()),"Server snap not indexed")}function VC(t,e,n,s,i){const r=new FC;let o,a;if(n.type===Ot.OVERWRITE){const c=n;c.source.fromUser?o=tl(t,e,c.path,c.snap,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!te(c.path),o=Kr(t,e,c.path,c.snap,s,i,a,r))}else if(n.type===Ot.MERGE){const c=n;c.source.fromUser?o=jC(t,e,c.path,c.children,s,i,r):(k(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=nl(t,e,c.path,c.children,s,i,a,r))}else if(n.type===Ot.ACK_USER_WRITE){const c=n;c.revert?o=GC(t,e,c.path,s,i,r):o=qC(t,e,c.path,c.affectedTree,s,i,r)}else if(n.type===Ot.LISTEN_COMPLETE)o=zC(t,e,n.path,s,r);else throw Js("Unknown operation type: "+n.type);const l=r.getChanges();return WC(e,o,l),{viewCache:o,changes:l}}function WC(t,e,n){const s=e.eventCache;if(s.isFullyInitialized()){const i=s.getNode().isLeafNode()||s.getNode().isEmpty(),r=Ja(t);(n.length>0||!t.eventCache.isFullyInitialized()||i&&!s.getNode().equals(r)||!s.getNode().getPriority().equals(r.getPriority()))&&n.push(vp(Ja(e)))}}function Pp(t,e,n,s,i,r){const o=e.eventCache;if(Gr(s,n)!=null)return e;{let a,l;if(te(n))if(k(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=hs(e),u=c instanceof j?c:j.EMPTY_NODE,d=sc(s,u);a=t.filter.updateFullNode(e.eventCache.getNode(),d,r)}else{const c=zr(s,hs(e));a=t.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=Z(n);if(c===".priority"){k(Bn(n)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const d=cd(s,n,u,l);d!=null?a=t.filter.updatePriority(u,d):a=o.getNode()}else{const u=Ee(n);let d;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const h=cd(s,n,o.getNode(),l);h!=null?d=o.getNode().getImmediateChild(c).updateChild(u,h):d=o.getNode().getImmediateChild(c)}else d=ic(s,c,e.serverCache);d!=null?a=t.filter.updateChild(o.getNode(),c,d,u,i,r):a=o.getNode()}}return Ti(e,a,o.isFullyInitialized()||te(n),t.filter.filtersNodes())}}function Kr(t,e,n,s,i,r,o,a){const l=e.serverCache;let c;const u=o?t.filter:t.filter.getIndexedFilter();if(te(n))c=u.updateFullNode(l.getNode(),s,null);else if(u.filtersNodes()&&!l.isFiltered()){const m=l.getNode().updateChild(n,s);c=u.updateFullNode(l.getNode(),m,null)}else{const m=Z(n);if(!l.isCompleteForPath(n)&&Bn(n)>1)return e;const v=Ee(n),R=l.getNode().getImmediateChild(m).updateChild(v,s);m===".priority"?c=u.updatePriority(l.getNode(),R):c=u.updateChild(l.getNode(),m,R,v,kp,null)}const d=bp(e,c,l.isFullyInitialized()||te(n),u.filtersNodes()),h=new rc(i,d,r);return Pp(t,d,n,i,h,a)}function tl(t,e,n,s,i,r,o){const a=e.eventCache;let l,c;const u=new rc(i,e,r);if(te(n))c=t.filter.updateFullNode(e.eventCache.getNode(),s,o),l=Ti(e,c,!0,t.filter.filtersNodes());else{const d=Z(n);if(d===".priority")c=t.filter.updatePriority(e.eventCache.getNode(),s),l=Ti(e,c,a.isFullyInitialized(),a.isFiltered());else{const h=Ee(n),m=a.getNode().getImmediateChild(d);let v;if(te(h))v=s;else{const y=u.getCompleteChild(d);y!=null?Gl(h)===".priority"&&y.getChild(hp(h)).isEmpty()?v=y:v=y.updateChild(h,s):v=j.EMPTY_NODE}if(m.equals(v))l=e;else{const y=t.filter.updateChild(a.getNode(),d,v,h,u,o);l=Ti(e,y,a.isFullyInitialized(),t.filter.filtersNodes())}}}return l}function ud(t,e){return t.eventCache.isCompleteForChild(e)}function jC(t,e,n,s,i,r,o){let a=e;return s.foreach((l,c)=>{const u=Re(n,l);ud(e,Z(u))&&(a=tl(t,a,u,c,i,r,o))}),s.foreach((l,c)=>{const u=Re(n,l);ud(e,Z(u))||(a=tl(t,a,u,c,i,r,o))}),a}function dd(t,e,n){return n.foreach((s,i)=>{e=e.updateChild(s,i)}),e}function nl(t,e,n,s,i,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;te(n)?c=s:c=new be(null).setTree(n,s);const u=e.serverCache.getNode();return c.children.inorderTraversal((d,h)=>{if(u.hasChild(d)){const m=e.serverCache.getNode().getImmediateChild(d),v=dd(t,m,h);l=Kr(t,l,new ge(d),v,i,r,o,a)}}),c.children.inorderTraversal((d,h)=>{const m=!e.serverCache.isCompleteForChild(d)&&h.value===null;if(!u.hasChild(d)&&!m){const v=e.serverCache.getNode().getImmediateChild(d),y=dd(t,v,h);l=Kr(t,l,new ge(d),y,i,r,o,a)}}),l}function qC(t,e,n,s,i,r,o){if(Gr(i,n)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(s.value!=null){if(te(n)&&l.isFullyInitialized()||l.isCompleteForPath(n))return Kr(t,e,n,l.getNode().getChild(n),i,r,a,o);if(te(n)){let c=new be(null);return l.getNode().forEachChild(xs,(u,d)=>{c=c.set(new ge(u),d)}),nl(t,e,n,c,i,r,a,o)}else return e}else{let c=new be(null);return s.foreach((u,d)=>{const h=Re(n,u);l.isCompleteForPath(h)&&(c=c.set(u,l.getNode().getChild(h)))}),nl(t,e,n,c,i,r,a,o)}}function zC(t,e,n,s,i){const r=e.serverCache,o=bp(e,r.getNode(),r.isFullyInitialized()||te(n),r.isFiltered());return Pp(t,o,n,s,kp,i)}function GC(t,e,n,s,i,r){let o;if(Gr(s,n)!=null)return e;{const a=new rc(s,e,i),l=e.eventCache.getNode();let c;if(te(n)||Z(n)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=zr(s,hs(e));else{const d=e.serverCache.getNode();k(d instanceof j,"serverChildren would be complete if leaf node"),u=sc(s,d)}u=u,c=t.filter.updateFullNode(l,u,r)}else{const u=Z(n);let d=ic(s,u,e.serverCache);d==null&&e.serverCache.isCompleteForChild(u)&&(d=l.getImmediateChild(u)),d!=null?c=t.filter.updateChild(l,u,d,Ee(n),a,r):e.eventCache.getNode().hasChild(u)?c=t.filter.updateChild(l,u,j.EMPTY_NODE,Ee(n),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=zr(s,hs(e)),o.isLeafNode()&&(c=t.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||Gr(s,de())!=null,Ti(e,c,o,t.filter.filtersNodes())}}/**
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
 */class KC{constructor(e,n){this.query_=e,this.eventRegistrations_=[];const s=this.query_._queryParams,i=new Jl(s.getIndex()),r=hC(s);this.processor_=UC(r);const o=n.serverCache,a=n.eventCache,l=i.updateFullNode(j.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(j.EMPTY_NODE,a.getNode(),null),u=new ds(l,o.isFullyInitialized(),i.filtersNodes()),d=new ds(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=xo(d,u),this.eventGenerator_=new vC(this.query_)}get query(){return this.query_}}function YC(t){return t.viewCache_.serverCache.getNode()}function QC(t,e){const n=hs(t.viewCache_);return n&&(t.query._queryParams.loadsAllData()||!te(e)&&!n.getImmediateChild(Z(e)).isEmpty())?n.getChild(e):null}function hd(t){return t.eventRegistrations_.length===0}function JC(t,e){t.eventRegistrations_.push(e)}function fd(t,e,n){const s=[];if(n){k(e==null,"A cancel should cancel all event registrations.");const i=t.query._path;t.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(n,i);o&&s.push(o)})}if(e){let i=[];for(let r=0;r<t.eventRegistrations_.length;++r){const o=t.eventRegistrations_[r];if(!o.matches(e))i.push(o);else if(e.hasAnyCallback()){i=i.concat(t.eventRegistrations_.slice(r+1));break}}t.eventRegistrations_=i}else t.eventRegistrations_=[];return s}function pd(t,e,n,s){e.type===Ot.MERGE&&e.source.queryId!==null&&(k(hs(t.viewCache_),"We should always have a full cache before handling merges"),k(Ja(t.viewCache_),"Missing event cache, even though we have a server cache"));const i=t.viewCache_,r=VC(t.processor_,i,e,n,s);return HC(t.processor_,r.viewCache),k(r.viewCache.serverCache.isFullyInitialized()||!i.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),t.viewCache_=r.viewCache,Ap(t,r.changes,r.viewCache.eventCache.getNode(),null)}function XC(t,e){const n=t.viewCache_.eventCache,s=[];return n.getNode().isLeafNode()||n.getNode().forEachChild(Oe,(r,o)=>{s.push(Vs(r,o))}),n.isFullyInitialized()&&s.push(vp(n.getNode())),Ap(t,s,n.getNode(),e)}function Ap(t,e,n,s){const i=s?[s]:t.eventRegistrations_;return yC(t.eventGenerator_,e,n,i)}/**
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
 */let Yr;class ZC{constructor(){this.views=new Map}}function eE(t){k(!Yr,"__referenceConstructor has already been defined"),Yr=t}function tE(){return k(Yr,"Reference.ts has not been loaded"),Yr}function nE(t){return t.views.size===0}function oc(t,e,n,s){const i=e.source.queryId;if(i!==null){const r=t.views.get(i);return k(r!=null,"SyncTree gave us an op for an invalid query."),pd(r,e,n,s)}else{let r=[];for(const o of t.views.values())r=r.concat(pd(o,e,n,s));return r}}function sE(t,e,n,s,i){const r=e._queryIdentifier,o=t.views.get(r);if(!o){let a=zr(n,i?s:null),l=!1;a?l=!0:s instanceof j?(a=sc(n,s),l=!1):(a=j.EMPTY_NODE,l=!1);const c=xo(new ds(a,l,!1),new ds(s,i,!1));return new KC(e,c)}return o}function iE(t,e,n,s,i,r){const o=sE(t,e,s,i,r);return t.views.has(e._queryIdentifier)||t.views.set(e._queryIdentifier,o),JC(o,n),XC(o,n)}function rE(t,e,n,s){const i=e._queryIdentifier,r=[];let o=[];const a=Fn(t);if(i==="default")for(const[l,c]of t.views.entries())o=o.concat(fd(c,n,s)),hd(c)&&(t.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=t.views.get(i);l&&(o=o.concat(fd(l,n,s)),hd(l)&&(t.views.delete(i),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Fn(t)&&r.push(new(tE())(e._repo,e._path)),{removed:r,events:o}}function Rp(t){const e=[];for(const n of t.views.values())n.query._queryParams.loadsAllData()||e.push(n);return e}function Os(t,e){let n=null;for(const s of t.views.values())n=n||QC(s,e);return n}function xp(t,e){if(e._queryParams.loadsAllData())return Oo(t);{const s=e._queryIdentifier;return t.views.get(s)}}function Op(t,e){return xp(t,e)!=null}function Fn(t){return Oo(t)!=null}function Oo(t){for(const e of t.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
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
 */let Qr;function oE(t){k(!Qr,"__referenceConstructor has already been defined"),Qr=t}function aE(){return k(Qr,"Reference.ts has not been loaded"),Qr}let lE=1;class md{constructor(e){this.listenProvider_=e,this.syncPointTree_=new be(null),this.pendingWriteTree_=MC(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Np(t,e,n,s,i){return IC(t.pendingWriteTree_,e,n,s,i),i?ti(t,new us(Zl(),e,n)):[]}function cE(t,e,n,s){SC(t.pendingWriteTree_,e,n,s);const i=be.fromObject(n);return ti(t,new Ws(Zl(),e,i))}function Pn(t,e,n=!1){const s=TC(t.pendingWriteTree_,e);if(kC(t.pendingWriteTree_,e)){let r=new be(null);return s.snap!=null?r=r.set(de(),!0):qe(s.children,o=>{r=r.set(new ge(o),!0)}),ti(t,new qr(s.path,r,n))}else return[]}function No(t,e,n){return ti(t,new us(ec(),e,n))}function uE(t,e,n){const s=be.fromObject(n);return ti(t,new Ws(ec(),e,s))}function dE(t,e){return ti(t,new ji(ec(),e))}function hE(t,e,n){const s=lc(t,n);if(s){const i=cc(s),r=i.path,o=i.queryId,a=lt(r,e),l=new ji(tc(o),a);return uc(t,r,l)}else return[]}function sl(t,e,n,s,i=!1){const r=e._path,o=t.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Op(o,e))){const l=rE(o,e,n,s);nE(o)&&(t.syncPointTree_=t.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!i){const u=c.findIndex(h=>h._queryParams.loadsAllData())!==-1,d=t.syncPointTree_.findOnPath(r,(h,m)=>Fn(m));if(u&&!d){const h=t.syncPointTree_.subtree(r);if(!h.isEmpty()){const m=mE(h);for(let v=0;v<m.length;++v){const y=m[v],R=y.query,F=Mp(t,y);t.listenProvider_.startListening(Pi(R),Jr(t,R),F.hashFn,F.onComplete)}}}!d&&c.length>0&&!s&&(u?t.listenProvider_.stopListening(Pi(e),null):c.forEach(h=>{const m=t.queryToTagMap.get(Lo(h));t.listenProvider_.stopListening(Pi(h),m)}))}gE(t,c)}return a}function fE(t,e,n,s){const i=lc(t,s);if(i!=null){const r=cc(i),o=r.path,a=r.queryId,l=lt(o,e),c=new us(tc(a),l,n);return uc(t,o,c)}else return[]}function pE(t,e,n,s){const i=lc(t,s);if(i){const r=cc(i),o=r.path,a=r.queryId,l=lt(o,e),c=be.fromObject(n),u=new Ws(tc(a),l,c);return uc(t,o,u)}else return[]}function gd(t,e,n,s=!1){const i=e._path;let r=null,o=!1;t.syncPointTree_.foreachOnPath(i,(h,m)=>{const v=lt(h,i);r=r||Os(m,v),o=o||Fn(m)});let a=t.syncPointTree_.get(i);a?(o=o||Fn(a),r=r||Os(a,de())):(a=new ZC,t.syncPointTree_=t.syncPointTree_.set(i,a));let l;r!=null?l=!0:(l=!1,r=j.EMPTY_NODE,t.syncPointTree_.subtree(i).foreachChild((m,v)=>{const y=Os(v,de());y&&(r=r.updateImmediateChild(m,y))}));const c=Op(a,e);if(!c&&!e._queryParams.loadsAllData()){const h=Lo(e);k(!t.queryToTagMap.has(h),"View does not exist, but we have a tag");const m=_E();t.queryToTagMap.set(h,m),t.tagToQueryMap.set(m,h)}const u=nc(t.pendingWriteTree_,i);let d=iE(a,e,n,u,r,l);if(!c&&!o&&!s){const h=xp(a,e);d=d.concat(wE(t,e,h))}return d}function ac(t,e,n){const i=t.pendingWriteTree_,r=t.syncPointTree_.findOnPath(e,(o,a)=>{const l=lt(o,e),c=Os(a,l);if(c)return c});return Ip(i,e,r,n,!0)}function ti(t,e){return Lp(e,t.syncPointTree_,null,nc(t.pendingWriteTree_,de()))}function Lp(t,e,n,s){if(te(t.path))return Dp(t,e,n,s);{const i=e.get(de());n==null&&i!=null&&(n=Os(i,de()));let r=[];const o=Z(t.path),a=t.operationForChild(o),l=e.children.get(o);if(l&&a){const c=n?n.getImmediateChild(o):null,u=Sp(s,o);r=r.concat(Lp(a,l,c,u))}return i&&(r=r.concat(oc(i,t,s,n))),r}}function Dp(t,e,n,s){const i=e.get(de());n==null&&i!=null&&(n=Os(i,de()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=n?n.getImmediateChild(o):null,c=Sp(s,o),u=t.operationForChild(o);u&&(r=r.concat(Dp(u,a,l,c)))}),i&&(r=r.concat(oc(i,t,s,n))),r}function Mp(t,e){const n=e.query,s=Jr(t,n);return{hashFn:()=>(YC(e)||j.EMPTY_NODE).hash(),onComplete:i=>{if(i==="ok")return s?hE(t,n._path,s):dE(t,n._path);{const r=ub(i,n);return sl(t,n,null,r)}}}}function Jr(t,e){const n=Lo(e);return t.queryToTagMap.get(n)}function Lo(t){return t._path.toString()+"$"+t._queryIdentifier}function lc(t,e){return t.tagToQueryMap.get(e)}function cc(t){const e=t.indexOf("$");return k(e!==-1&&e<t.length-1,"Bad queryKey."),{queryId:t.substr(e+1),path:new ge(t.substr(0,e))}}function uc(t,e,n){const s=t.syncPointTree_.get(e);k(s,"Missing sync point for query tag that we're tracking");const i=nc(t.pendingWriteTree_,e);return oc(s,n,i,null)}function mE(t){return t.fold((e,n,s)=>{if(n&&Fn(n))return[Oo(n)];{let i=[];return n&&(i=Rp(n)),qe(s,(r,o)=>{i=i.concat(o)}),i}})}function Pi(t){return t._queryParams.loadsAllData()&&!t._queryParams.isDefault()?new(aE())(t._repo,t._path):t}function gE(t,e){for(let n=0;n<e.length;++n){const s=e[n];if(!s._queryParams.loadsAllData()){const i=Lo(s),r=t.queryToTagMap.get(i);t.queryToTagMap.delete(i),t.tagToQueryMap.delete(r)}}}function _E(){return lE++}function wE(t,e,n){const s=e._path,i=Jr(t,e),r=Mp(t,n),o=t.listenProvider_.startListening(Pi(e),i,r.hashFn,r.onComplete),a=t.syncPointTree_.subtree(s);if(i)k(!Fn(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,d)=>{if(!te(c)&&u&&Fn(u))return[Oo(u).query];{let h=[];return u&&(h=h.concat(Rp(u).map(m=>m.query))),qe(d,(m,v)=>{h=h.concat(v)}),h}});for(let c=0;c<l.length;++c){const u=l[c];t.listenProvider_.stopListening(Pi(u),Jr(t,u))}}return o}/**
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
 */class dc{constructor(e){this.node_=e}getImmediateChild(e){const n=this.node_.getImmediateChild(e);return new dc(n)}node(){return this.node_}}class hc{constructor(e,n){this.syncTree_=e,this.path_=n}getImmediateChild(e){const n=Re(this.path_,e);return new hc(this.syncTree_,n)}node(){return ac(this.syncTree_,this.path_)}}const vE=function(t){return t=t||{},t.timestamp=t.timestamp||new Date().getTime(),t},_d=function(t,e,n){if(!t||typeof t!="object")return t;if(k(".sv"in t,"Unexpected leaf node or priority contents"),typeof t[".sv"]=="string")return yE(t[".sv"],e,n);if(typeof t[".sv"]=="object")return bE(t[".sv"],e);k(!1,"Unexpected server value: "+JSON.stringify(t,null,2))},yE=function(t,e,n){switch(t){case"timestamp":return n.timestamp;default:k(!1,"Unexpected server value: "+t)}},bE=function(t,e,n){t.hasOwnProperty("increment")||k(!1,"Unexpected server value: "+JSON.stringify(t,null,2));const s=t.increment;typeof s!="number"&&k(!1,"Unexpected increment value: "+s);const i=e.node();if(k(i!==null&&typeof i<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!i.isLeafNode())return s;const o=i.getValue();return typeof o!="number"?s:o+s},Bp=function(t,e,n,s){return fc(e,new hc(n,t),s)},Fp=function(t,e,n){return fc(t,new dc(e),n)};function fc(t,e,n){const s=t.getPriority().val(),i=_d(s,e.getImmediateChild(".priority"),n);let r;if(t.isLeafNode()){const o=t,a=_d(o.getValue(),e,n);return a!==o.getValue()||i!==o.getPriority().val()?new Be(a,$e(i)):t}else{const o=t;return r=o,i!==o.getPriority().val()&&(r=r.updatePriority(new Be(i))),o.forEachChild(Oe,(a,l)=>{const c=fc(l,e.getImmediateChild(a),n);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
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
 */class pc{constructor(e="",n=null,s={children:{},childCount:0}){this.name=e,this.parent=n,this.node=s}}function mc(t,e){let n=e instanceof ge?e:new ge(e),s=t,i=Z(n);for(;i!==null;){const r=$s(s.node.children,i)||{children:{},childCount:0};s=new pc(i,s,r),n=Ee(n),i=Z(n)}return s}function ni(t){return t.node.value}function $p(t,e){t.node.value=e,il(t)}function Up(t){return t.node.childCount>0}function CE(t){return ni(t)===void 0&&!Up(t)}function Do(t,e){qe(t.node.children,(n,s)=>{e(new pc(n,t,s))})}function Hp(t,e,n,s){n&&e(t),Do(t,i=>{Hp(i,e,!0)})}function EE(t,e,n){let s=t.parent;for(;s!==null;){if(e(s))return!0;s=s.parent}return!1}function sr(t){return new ge(t.parent===null?t.name:sr(t.parent)+"/"+t.name)}function il(t){t.parent!==null&&IE(t.parent,t.name,t)}function IE(t,e,n){const s=CE(n),i=en(t.node.children,e);s&&i?(delete t.node.children[e],t.node.childCount--,il(t)):!s&&!i&&(t.node.children[e]=n.node,t.node.childCount++,il(t))}/**
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
 */const SE=/[\[\].#$\/\u0000-\u001F\u007F]/,TE=/[\[\].#$\u0000-\u001F\u007F]/,wa=10*1024*1024,gc=function(t){return typeof t=="string"&&t.length!==0&&!SE.test(t)},Vp=function(t){return typeof t=="string"&&t.length!==0&&!TE.test(t)},kE=function(t){return t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),Vp(t)},PE=function(t){return t===null||typeof t=="string"||typeof t=="number"&&!Vl(t)||t&&typeof t=="object"&&en(t,".sv")},Wp=function(t,e,n,s){s&&e===void 0||Mo(Po(t,"value"),e,n)},Mo=function(t,e,n){const s=n instanceof ge?new jb(n,t):n;if(e===void 0)throw new Error(t+"contains undefined "+Qn(s));if(typeof e=="function")throw new Error(t+"contains a function "+Qn(s)+" with contents = "+e.toString());if(Vl(e))throw new Error(t+"contains "+e.toString()+" "+Qn(s));if(typeof e=="string"&&e.length>wa/3&&Ao(e)>wa)throw new Error(t+"contains a string greater than "+wa+" utf8 bytes "+Qn(s)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let i=!1,r=!1;if(qe(e,(o,a)=>{if(o===".value")i=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!gc(o)))throw new Error(t+" contains an invalid key ("+o+") "+Qn(s)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);qb(s,o),Mo(t,a,s),zb(s)}),i&&r)throw new Error(t+' contains ".value" child '+Qn(s)+" in addition to actual children.")}},AE=function(t,e){let n,s;for(n=0;n<e.length;n++){s=e[n];const r=Ui(s);for(let o=0;o<r.length;o++)if(!(r[o]===".priority"&&o===r.length-1)){if(!gc(r[o]))throw new Error(t+"contains an invalid key ("+r[o]+") in path "+s.toString()+`. Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`)}}e.sort(Wb);let i=null;for(n=0;n<e.length;n++){if(s=e[n],i!==null&&It(i,s))throw new Error(t+"contains a path "+i.toString()+" that is ancestor of another path "+s.toString());i=s}},RE=function(t,e,n,s){const i=Po(t,"values");if(!(e&&typeof e=="object")||Array.isArray(e))throw new Error(i+" must be an object containing the children to replace.");const r=[];qe(e,(o,a)=>{const l=new ge(o);if(Mo(i,a,Re(n,l)),Gl(l)===".priority"&&!PE(a))throw new Error(i+"contains an invalid value for '"+l.toString()+"', which must be a valid Firebase priority (a string, finite number, server value, or null).");r.push(l)}),AE(i,r)},jp=function(t,e,n,s){if(!Vp(n))throw new Error(Po(t,e)+'was an invalid path = "'+n+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},xE=function(t,e,n,s){n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),jp(t,e,n)},qp=function(t,e){if(Z(e)===".info")throw new Error(t+" failed = Can't modify data under /.info/")},OE=function(t,e){const n=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!gc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||n.length!==0&&!kE(n))throw new Error(Po(t,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
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
 */class NE{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function Bo(t,e){let n=null;for(let s=0;s<e.length;s++){const i=e[s],r=i.getPath();n!==null&&!Kl(r,n.path)&&(t.eventLists_.push(n),n=null),n===null&&(n={events:[],path:r}),n.events.push(i)}n&&t.eventLists_.push(n)}function zp(t,e,n){Bo(t,n),Gp(t,s=>Kl(s,e))}function Bt(t,e,n){Bo(t,n),Gp(t,s=>It(s,e)||It(e,s))}function Gp(t,e){t.recursionDepth_++;let n=!0;for(let s=0;s<t.eventLists_.length;s++){const i=t.eventLists_[s];if(i){const r=i.path;e(r)?(LE(t.eventLists_[s]),t.eventLists_[s]=null):n=!1}}n&&(t.eventLists_=[]),t.recursionDepth_--}function LE(t){for(let e=0;e<t.events.length;e++){const n=t.events[e];if(n!==null){t.events[e]=null;const s=n.getEventRunner();Ii&&We("event: "+n.toString()),ei(s)}}}/**
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
 */const DE="repo_interrupt",ME=25;class BE{constructor(e,n,s,i){this.repoInfo_=e,this.forceRestClient_=n,this.authTokenProvider_=s,this.appCheckProvider_=i,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new NE,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=jr(),this.transactionQueueTree_=new pc,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function FE(t,e,n){if(t.stats_=ql(t.repoInfo_),t.forceRestClient_||pb())t.server_=new Wr(t.repoInfo_,(s,i,r,o)=>{wd(t,s,i,r,o)},t.authTokenProvider_,t.appCheckProvider_),setTimeout(()=>vd(t,!0),0);else{if(typeof n<"u"&&n!==null){if(typeof n!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Ue(n)}catch(s){throw new Error("Invalid authOverride provided: "+s)}}t.persistentConnection_=new hn(t.repoInfo_,e,(s,i,r,o)=>{wd(t,s,i,r,o)},s=>{vd(t,s)},s=>{$E(t,s)},t.authTokenProvider_,t.appCheckProvider_,n),t.server_=t.persistentConnection_}t.authTokenProvider_.addTokenChangeListener(s=>{t.server_.refreshAuthToken(s)}),t.appCheckProvider_.addTokenChangeListener(s=>{t.server_.refreshAppCheckToken(s.token)}),t.statsReporter_=vb(t.repoInfo_,()=>new wC(t.stats_,t.server_)),t.infoData_=new fC,t.infoSyncTree_=new md({startListening:(s,i,r,o)=>{let a=[];const l=t.infoData_.getNode(s._path);return l.isEmpty()||(a=No(t.infoSyncTree_,s._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),_c(t,"connected",!1),t.serverSyncTree_=new md({startListening:(s,i,r,o)=>(t.server_.listen(s,r,i,(a,l)=>{const c=o(a,l);Bt(t.eventQueue_,s._path,c)}),[]),stopListening:(s,i)=>{t.server_.unlisten(s,i)}})}function Kp(t){const n=t.infoData_.getNode(new ge(".info/serverTimeOffset")).val()||0;return new Date().getTime()+n}function Fo(t){return vE({timestamp:Kp(t)})}function wd(t,e,n,s,i){t.dataUpdateCount++;const r=new ge(e);n=t.interceptServerDataCallback_?t.interceptServerDataCallback_(e,n):n;let o=[];if(i)if(s){const l=Fr(n,c=>$e(c));o=pE(t.serverSyncTree_,r,l,i)}else{const l=$e(n);o=fE(t.serverSyncTree_,r,l,i)}else if(s){const l=Fr(n,c=>$e(c));o=uE(t.serverSyncTree_,r,l)}else{const l=$e(n);o=No(t.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=qs(t,r)),Bt(t.eventQueue_,a,o)}function vd(t,e){_c(t,"connected",e),e===!1&&VE(t)}function $E(t,e){qe(e,(n,s)=>{_c(t,n,s)})}function _c(t,e,n){const s=new ge("/.info/"+e),i=$e(n);t.infoData_.updateSnapshot(s,i);const r=No(t.infoSyncTree_,s,i);Bt(t.eventQueue_,s,r)}function wc(t){return t.nextWriteId_++}function UE(t,e,n,s,i){$o(t,"set",{path:e.toString(),value:n,priority:s});const r=Fo(t),o=$e(n,s),a=ac(t.serverSyncTree_,e),l=Fp(o,a,r),c=wc(t),u=Np(t.serverSyncTree_,e,l,c,!0);Bo(t.eventQueue_,u),t.server_.put(e.toString(),o.val(!0),(h,m)=>{const v=h==="ok";v||nt("set at "+e+" failed: "+h);const y=Pn(t.serverSyncTree_,c,!v);Bt(t.eventQueue_,e,y),rl(t,i,h,m)});const d=yc(t,e);qs(t,d),Bt(t.eventQueue_,d,[])}function HE(t,e,n,s){$o(t,"update",{path:e.toString(),value:n});let i=!0;const r=Fo(t),o={};if(qe(n,(a,l)=>{i=!1,o[a]=Bp(Re(e,a),$e(l),t.serverSyncTree_,r)}),i)We("update() called with empty data.  Don't do anything."),rl(t,s,"ok",void 0);else{const a=wc(t),l=cE(t.serverSyncTree_,e,o,a);Bo(t.eventQueue_,l),t.server_.merge(e.toString(),n,(c,u)=>{const d=c==="ok";d||nt("update at "+e+" failed: "+c);const h=Pn(t.serverSyncTree_,a,!d),m=h.length>0?qs(t,e):e;Bt(t.eventQueue_,m,h),rl(t,s,c,u)}),qe(n,c=>{const u=yc(t,Re(e,c));qs(t,u)}),Bt(t.eventQueue_,e,[])}}function VE(t){$o(t,"onDisconnectEvents");const e=Fo(t),n=jr();Qa(t.onDisconnect_,de(),(i,r)=>{const o=Bp(i,r,t.serverSyncTree_,e);yp(n,i,o)});let s=[];Qa(n,de(),(i,r)=>{s=s.concat(No(t.serverSyncTree_,i,r));const o=yc(t,i);qs(t,o)}),t.onDisconnect_=jr(),Bt(t.eventQueue_,de(),s)}function WE(t,e,n){let s;Z(e._path)===".info"?s=gd(t.infoSyncTree_,e,n):s=gd(t.serverSyncTree_,e,n),zp(t.eventQueue_,e._path,s)}function jE(t,e,n){let s;Z(e._path)===".info"?s=sl(t.infoSyncTree_,e,n):s=sl(t.serverSyncTree_,e,n),zp(t.eventQueue_,e._path,s)}function qE(t){t.persistentConnection_&&t.persistentConnection_.interrupt(DE)}function $o(t,...e){let n="";t.persistentConnection_&&(n=t.persistentConnection_.id+":"),We(n,...e)}function rl(t,e,n,s){e&&ei(()=>{if(n==="ok")e(null);else{const i=(n||"error").toUpperCase();let r=i;s&&(r+=": "+s);const o=new Error(r);o.code=i,e(o)}})}function Yp(t,e,n){return ac(t.serverSyncTree_,e,n)||j.EMPTY_NODE}function vc(t,e=t.transactionQueueTree_){if(e||Uo(t,e),ni(e)){const n=Jp(t,e);k(n.length>0,"Sending zero length transaction queue"),n.every(i=>i.status===0)&&zE(t,sr(e),n)}else Up(e)&&Do(e,n=>{vc(t,n)})}function zE(t,e,n){const s=n.map(c=>c.currentWriteId),i=Yp(t,e,s);let r=i;const o=i.hash();for(let c=0;c<n.length;c++){const u=n[c];k(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const d=lt(e,u.path);r=r.updateChild(d,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;t.server_.put(l.toString(),a,c=>{$o(t,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const d=[];for(let h=0;h<n.length;h++)n[h].status=2,u=u.concat(Pn(t.serverSyncTree_,n[h].currentWriteId)),n[h].onComplete&&d.push(()=>n[h].onComplete(null,!0,n[h].currentOutputSnapshotResolved)),n[h].unwatcher();Uo(t,mc(t.transactionQueueTree_,e)),vc(t,t.transactionQueueTree_),Bt(t.eventQueue_,e,u);for(let h=0;h<d.length;h++)ei(d[h])}else{if(c==="datastale")for(let d=0;d<n.length;d++)n[d].status===3?n[d].status=4:n[d].status=0;else{nt("transaction at "+l.toString()+" failed: "+c);for(let d=0;d<n.length;d++)n[d].status=4,n[d].abortReason=c}qs(t,e)}},o)}function qs(t,e){const n=Qp(t,e),s=sr(n),i=Jp(t,n);return GE(t,i,s),s}function GE(t,e,n){if(e.length===0)return;const s=[];let i=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=lt(n,l.path);let u=!1,d;if(k(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,d=l.abortReason,i=i.concat(Pn(t.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ME)u=!0,d="maxretry",i=i.concat(Pn(t.serverSyncTree_,l.currentWriteId,!0));else{const h=Yp(t,l.path,o);l.currentInputSnapshot=h;const m=e[a].update(h.val());if(m!==void 0){Mo("transaction failed: Data returned ",m,l.path);let v=$e(m);typeof m=="object"&&m!=null&&en(m,".priority")||(v=v.updatePriority(h.getPriority()));const R=l.currentWriteId,F=Fo(t),M=Fp(v,h,F);l.currentOutputSnapshotRaw=v,l.currentOutputSnapshotResolved=M,l.currentWriteId=wc(t),o.splice(o.indexOf(R),1),i=i.concat(Np(t.serverSyncTree_,l.path,M,l.currentWriteId,l.applyLocally)),i=i.concat(Pn(t.serverSyncTree_,R,!0))}else u=!0,d="nodata",i=i.concat(Pn(t.serverSyncTree_,l.currentWriteId,!0))}Bt(t.eventQueue_,n,i),i=[],u&&(e[a].status=2,function(h){setTimeout(h,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(d==="nodata"?s.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):s.push(()=>e[a].onComplete(new Error(d),!1,null))))}Uo(t,t.transactionQueueTree_);for(let a=0;a<s.length;a++)ei(s[a]);vc(t,t.transactionQueueTree_)}function Qp(t,e){let n,s=t.transactionQueueTree_;for(n=Z(e);n!==null&&ni(s)===void 0;)s=mc(s,n),e=Ee(e),n=Z(e);return s}function Jp(t,e){const n=[];return Xp(t,e,n),n.sort((s,i)=>s.order-i.order),n}function Xp(t,e,n){const s=ni(e);if(s)for(let i=0;i<s.length;i++)n.push(s[i]);Do(e,i=>{Xp(t,i,n)})}function Uo(t,e){const n=ni(e);if(n){let s=0;for(let i=0;i<n.length;i++)n[i].status!==2&&(n[s]=n[i],s++);n.length=s,$p(e,n.length>0?n:void 0)}Do(e,s=>{Uo(t,s)})}function yc(t,e){const n=sr(Qp(t,e)),s=mc(t.transactionQueueTree_,e);return EE(s,i=>{va(t,i)}),va(t,s),Hp(s,i=>{va(t,i)}),n}function va(t,e){const n=ni(e);if(n){const s=[];let i=[],r=-1;for(let o=0;o<n.length;o++)n[o].status===3||(n[o].status===1?(k(r===o-1,"All SENT items should be at beginning of queue."),r=o,n[o].status=3,n[o].abortReason="set"):(k(n[o].status===0,"Unexpected transaction status in abort"),n[o].unwatcher(),i=i.concat(Pn(t.serverSyncTree_,n[o].currentWriteId,!0)),n[o].onComplete&&s.push(n[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?$p(e,void 0):n.length=r+1,Bt(t.eventQueue_,sr(e),i);for(let o=0;o<s.length;o++)ei(s[o])}}/**
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
 */function KE(t){let e="";const n=t.split("/");for(let s=0;s<n.length;s++)if(n[s].length>0){let i=n[s];try{i=decodeURIComponent(i.replace(/\+/g," "))}catch{}e+="/"+i}return e}function YE(t){const e={};t.charAt(0)==="?"&&(t=t.substring(1));for(const n of t.split("&")){if(n.length===0)continue;const s=n.split("=");s.length===2?e[decodeURIComponent(s[0])]=decodeURIComponent(s[1]):nt(`Invalid query segment '${n}' in query '${t}'`)}return e}const yd=function(t,e){const n=QE(t),s=n.namespace;n.domain==="firebase.com"&&mn(n.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!s||s==="undefined")&&n.domain!=="localhost"&&mn("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),n.secure||rb();const i=n.scheme==="ws"||n.scheme==="wss";return{repoInfo:new sp(n.host,n.secure,s,i,e,"",s!==n.subdomain),path:new ge(n.pathString)}},QE=function(t){let e="",n="",s="",i="",r="",o=!0,a="https",l=443;if(typeof t=="string"){let c=t.indexOf("//");c>=0&&(a=t.substring(0,c-1),t=t.substring(c+2));let u=t.indexOf("/");u===-1&&(u=t.length);let d=t.indexOf("?");d===-1&&(d=t.length),e=t.substring(0,Math.min(u,d)),u<d&&(i=KE(t.substring(u,d)));const h=YE(t.substring(Math.min(t.length,d)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const m=e.slice(0,c);if(m.toLowerCase()==="localhost")n="localhost";else if(m.split(".").length<=2)n=m;else{const v=e.indexOf(".");s=e.substring(0,v).toLowerCase(),n=e.substring(v+1),r=s}"ns"in h&&(r=h.ns)}return{host:e,port:l,domain:n,subdomain:s,secure:o,scheme:a,pathString:i,namespace:r}};/**
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
 */const bd="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",JE=function(){let t=0;const e=[];return function(n){const s=n===t;t=n;let i;const r=new Array(8);for(i=7;i>=0;i--)r[i]=bd.charAt(n%64),n=Math.floor(n/64);k(n===0,"Cannot push at time == 0");let o=r.join("");if(s){for(i=11;i>=0&&e[i]===63;i--)e[i]=0;e[i]++}else for(i=0;i<12;i++)e[i]=Math.floor(Math.random()*64);for(i=0;i<12;i++)o+=bd.charAt(e[i]);return k(o.length===20,"nextPushId: Length should be 20."),o}}();/**
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
 */class XE{constructor(e,n,s,i){this.eventType=e,this.eventRegistration=n,this.snapshot=s,this.prevName=i}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Ue(this.snapshot.exportVal())}}class ZE{constructor(e,n,s){this.eventRegistration=e,this.error=n,this.path=s}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
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
 */class e0{constructor(e,n){this.snapshotCallback=e,this.cancelCallback=n}onValue(e,n){this.snapshotCallback.call(null,e,n)}onCancel(e){return k(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
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
 */class bc{constructor(e,n,s,i){this._repo=e,this._path=n,this._queryParams=s,this._orderByCalled=i}get key(){return te(this._path)?null:Gl(this._path)}get ref(){return new Wn(this._repo,this._path)}get _queryIdentifier(){const e=rd(this._queryParams),n=Wl(e);return n==="{}"?"default":n}get _queryObject(){return rd(this._queryParams)}isEqual(e){if(e=gt(e),!(e instanceof bc))return!1;const n=this._repo===e._repo,s=Kl(this._path,e._path),i=this._queryIdentifier===e._queryIdentifier;return n&&s&&i}toJSON(){return this.toString()}toString(){return this._repo.toString()+Vb(this._path)}}class Wn extends bc{constructor(e,n){super(e,n,new Xl,!1)}get parent(){const e=hp(this._path);return e===null?null:new Wn(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class Xr{constructor(e,n,s){this._node=e,this.ref=n,this._index=s}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const n=new ge(e),s=qi(this.ref,e);return new Xr(this._node.getChild(n),s,Oe)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(s,i)=>e(new Xr(i,qi(this.ref,s),Oe)))}hasChild(e){const n=new ge(e);return!this._node.getChild(n).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function ya(t,e){return t=gt(t),t._checkNotDeleted("ref"),e!==void 0?qi(t._root,e):t._root}function qi(t,e){return t=gt(t),Z(t._path)===null?xE("child","path",e):jp("child","path",e),new Wn(t._repo,Re(t._path,e))}function t0(t,e){t=gt(t),qp("push",t._path),Wp("push",e,t._path,!0);const n=Kp(t._repo),s=JE(n),i=qi(t,s),r=qi(t,s);let o;return o=Promise.resolve(r),i.then=o.then.bind(o),i.catch=o.then.bind(o,void 0),i}function n0(t,e){t=gt(t),qp("set",t._path),Wp("set",e,t._path,!1);const n=new Xi;return UE(t._repo,t._path,e,null,n.wrapCallback(()=>{})),n.promise}function s0(t,e){RE("update",e,t._path);const n=new Xi;return HE(t._repo,t._path,e,n.wrapCallback(()=>{})),n.promise}class Cc{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,n){const s=n._queryParams.getIndex();return new XE("value",this,new Xr(e.snapshotNode,new Wn(n._repo,n._path),s))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,n){return this.callbackContext.hasCancelCallback?new ZE(this,e,n):null}matches(e){return e instanceof Cc?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}function i0(t,e,n,s,i){const r=new e0(n,void 0),o=new Cc(r);return WE(t._repo,t,o),()=>jE(t._repo,t,o)}function r0(t,e,n,s){return i0(t,"value",e)}eE(Wn);oE(Wn);/**
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
 */const o0="FIREBASE_DATABASE_EMULATOR_HOST",ol={};let a0=!1;function l0(t,e,n,s){t.repoInfo_=new sp(e,!1,t.repoInfo_.namespace,t.repoInfo_.webSocketOnly,t.repoInfo_.nodeAdmin,t.repoInfo_.persistenceKey,t.repoInfo_.includeNamespaceInQueryParams,!0,n),s&&(t.authTokenProvider_=s)}function c0(t,e,n,s,i){let r=s||t.options.databaseURL;r===void 0&&(t.options.projectId||mn("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),We("Using default host for project ",t.options.projectId),r=`${t.options.projectId}-default-rtdb.firebaseio.com`);let o=yd(r,i),a=o.repoInfo,l;typeof process<"u"&&Hu&&(l=Hu[o0]),l?(r=`http://${l}?ns=${a.namespace}`,o=yd(r,i),a=o.repoInfo):o.repoInfo.secure;const c=new gb(t.name,t.options,e);OE("Invalid Firebase Database URL",o),te(o.path)||mn("Database URL must point to the root of a Firebase Database (not including a child path).");const u=d0(a,t,c,new mb(t,n));return new h0(u,t)}function u0(t,e){const n=ol[e];(!n||n[t.key]!==t)&&mn(`Database ${e}(${t.repoInfo_}) has already been deleted.`),qE(t),delete n[t.key]}function d0(t,e,n,s){let i=ol[e.name];i||(i={},ol[e.name]=i);let r=i[t.toURLString()];return r&&mn("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new BE(t,a0,n,s),i[t.toURLString()]=r,r}class h0{constructor(e,n){this._repoInternal=e,this.app=n,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(FE(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Wn(this._repo,de())),this._rootInternal}_delete(){return this._rootInternal!==null&&(u0(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&mn("Cannot call "+e+" on a deleted database.")}}function f0(t=Uf(),e){const n=Hl(t,"database").getImmediate({identifier:e});if(!n._instanceStarted){const s=Sv("database");s&&p0(n,...s)}return n}function p0(t,e,n,s={}){t=gt(t),t._checkNotDeleted("useEmulator");const i=`${e}:${n}`,r=t._repoInternal;if(t._instanceStarted){if(i===t._repoInternal.repoInfo_.host&&as(s,r.repoInfo_.emulatorOptions))return;mn("connectDatabaseEmulator() cannot initialize or alter the emulator configuration after the database instance has started.")}let o;if(r.repoInfo_.nodeAdmin)s.mockUserToken&&mn('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),o=new Er(Er.OWNER);else if(s.mockUserToken){const a=typeof s.mockUserToken=="string"?s.mockUserToken:Tv(s.mockUserToken,t.app.options.projectId);o=new Er(a)}l0(r,i,s,o)}/**
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
 */function m0(t){Zy(Zs),Us(new ls("database",(e,{instanceIdentifier:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return c0(s,i,r,n)},"PUBLIC").setMultipleInstances(!0)),Dn(Vu,Wu,t),Dn(Vu,Wu,"esm2017")}hn.prototype.simpleListen=function(t,e){this.sendRequest("q",{p:t},e)};hn.prototype.echo=function(t,e){this.sendRequest("echo",{d:t},e)};m0();function Ec(t,e){var n={};for(var s in t)Object.prototype.hasOwnProperty.call(t,s)&&e.indexOf(s)<0&&(n[s]=t[s]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,s=Object.getOwnPropertySymbols(t);i<s.length;i++)e.indexOf(s[i])<0&&Object.prototype.propertyIsEnumerable.call(t,s[i])&&(n[s[i]]=t[s[i]]);return n}function Zp(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const g0=Zp,em=new Zi("auth","Firebase",Zp());/**
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
 */const Zr=new $l("@firebase/auth");function _0(t,...e){Zr.logLevel<=me.WARN&&Zr.warn(`Auth (${Zs}): ${t}`,...e)}function Ir(t,...e){Zr.logLevel<=me.ERROR&&Zr.error(`Auth (${Zs}): ${t}`,...e)}/**
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
 */function Xt(t,...e){throw Sc(t,...e)}function Mt(t,...e){return Sc(t,...e)}function Ic(t,e,n){const s=Object.assign(Object.assign({},g0()),{[e]:n});return new Zi("auth","Firebase",s).create(e,{appName:t.name})}function ns(t){return Ic(t,"operation-not-supported-in-this-environment","Operations that alter the current user are not supported in conjunction with FirebaseServerApp")}function w0(t,e,n){const s=n;if(!(e instanceof s))throw s.name!==e.constructor.name&&Xt(t,"argument-error"),Ic(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Sc(t,...e){if(typeof t!="string"){const n=e[0],s=[...e.slice(1)];return s[0]&&(s[0].appName=t.name),t._errorFactory.create(n,...s)}return em.create(t,...e)}function q(t,e,...n){if(!t)throw Sc(e,...n)}function un(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ir(e),new Error(e)}function gn(t,e){t||un(e)}/**
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
 */function al(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function v0(){return Cd()==="http:"||Cd()==="https:"}function Cd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function y0(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(v0()||Pv()||"connection"in navigator)?navigator.onLine:!0}function b0(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class ir{constructor(e,n){this.shortDelay=e,this.longDelay=n,gn(n>e,"Short delay should be less than long delay!"),this.isMobile=Fl()||Df()}get(){return y0()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Tc(t,e){gn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class tm{static initialize(e,n,s){this.fetchImpl=e,n&&(this.headersImpl=n),s&&(this.responseImpl=s)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;un("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;un("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;un("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const C0={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",INVALID_LOGIN_CREDENTIALS:"invalid-credential",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const E0=["/v1/accounts:signInWithCustomToken","/v1/accounts:signInWithEmailLink","/v1/accounts:signInWithIdp","/v1/accounts:signInWithPassword","/v1/accounts:signInWithPhoneNumber","/v1/token"],I0=new ir(3e4,6e4);function kc(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function si(t,e,n,s,i={}){return nm(t,i,async()=>{let r={},o={};s&&(e==="GET"?o=s:r={body:JSON.stringify(s)});const a=Xs(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode);const c=Object.assign({method:e,headers:l},r);return kv()||(c.referrerPolicy="no-referrer"),tm.fetch()(await sm(t,t.config.apiHost,n,a),c)})}async function nm(t,e,n){t._canInitEmulator=!1;const s=Object.assign(Object.assign({},C0),e);try{const i=new T0(t),r=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw wr(t,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw wr(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw wr(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw wr(t,"user-disabled",o);const u=s[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ic(t,u,c);Xt(t,u)}}catch(i){if(i instanceof Vn)throw i;Xt(t,"network-request-failed",{message:String(i)})}}async function S0(t,e,n,s,i={}){const r=await si(t,e,n,s,i);return"mfaPendingCredential"in r&&Xt(t,"multi-factor-auth-required",{_serverResponse:r}),r}async function sm(t,e,n,s){const i=`${e}${n}?${s}`,r=t,o=r.config.emulator?Tc(t.config,i):`${t.config.apiScheme}://${i}`;return E0.includes(n)&&(await r._persistenceManagerAvailable,r._getPersistenceType()==="COOKIE")?r._getPersistence()._getFinalTarget(o).toString():o}class T0{clearNetworkTimeout(){clearTimeout(this.timer)}constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,s)=>{this.timer=setTimeout(()=>s(Mt(this.auth,"network-request-failed")),I0.get())})}}function wr(t,e,n){const s={appName:t.name};n.email&&(s.email=n.email),n.phoneNumber&&(s.phoneNumber=n.phoneNumber);const i=Mt(t,e,s);return i.customData._tokenResponse=n,i}/**
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
 */async function k0(t,e){return si(t,"POST","/v1/accounts:delete",e)}async function eo(t,e){return si(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function Ai(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function P0(t,e=!1){const n=gt(t),s=await n.getIdToken(e),i=Pc(s);q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const r=typeof i.firebase=="object"?i.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:i,token:s,authTime:Ai(ba(i.auth_time)),issuedAtTime:Ai(ba(i.iat)),expirationTime:Ai(ba(i.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function ba(t){return Number(t)*1e3}function Pc(t){const[e,n,s]=t.split(".");if(e===void 0||n===void 0||s===void 0)return Ir("JWT malformed, contained fewer than 3 sections"),null;try{const i=Br(n);return i?JSON.parse(i):(Ir("Failed to decode base64 JWT payload"),null)}catch(i){return Ir("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function Ed(t){const e=Pc(t);return q(e,"internal-error"),q(typeof e.exp<"u","internal-error"),q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function zi(t,e,n=!1){if(n)return e;try{return await e}catch(s){throw s instanceof Vn&&A0(s)&&t.auth.currentUser===t&&await t.auth.signOut(),s}}function A0({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class R0{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const s=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),s}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class ll{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=Ai(this.lastLoginAt),this.creationTime=Ai(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function to(t){var e;const n=t.auth,s=await t.getIdToken(),i=await zi(t,eo(n,{idToken:s}));q(i==null?void 0:i.users.length,n,"internal-error");const r=i.users[0];t._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?im(r.providerUserInfo):[],a=O0(t.providerData,o),l=t.isAnonymous,c=!(t.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,d={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new ll(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(t,d)}async function x0(t){const e=gt(t);await to(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function O0(t,e){return[...t.filter(s=>!e.some(i=>i.providerId===s.providerId)),...e]}function im(t){return t.map(e=>{var{providerId:n}=e,s=Ec(e,["providerId"]);return{providerId:n,uid:s.rawId||"",displayName:s.displayName||null,email:s.email||null,phoneNumber:s.phoneNumber||null,photoURL:s.photoUrl||null}})}/**
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
 */async function N0(t,e){const n=await nm(t,{},async()=>{const s=Xs({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:r}=t.config,o=await sm(t,i,"/v1/token",`key=${r}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",tm.fetch()(o,{method:"POST",headers:a,body:s})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}async function L0(t,e){return si(t,"POST","/v2/accounts:revokeToken",kc(t,e))}/**
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
 */class Ns{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){q(e.idToken,"internal-error"),q(typeof e.idToken<"u","internal-error"),q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Ed(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}updateFromIdToken(e){q(e.length!==0,"internal-error");const n=Ed(e);this.updateTokensAndExpiration(e,null,n)}async getToken(e,n=!1){return!n&&this.accessToken&&!this.isExpired?this.accessToken:(q(this.refreshToken,e,"user-token-expired"),this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null)}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:s,refreshToken:i,expiresIn:r}=await N0(e,n);this.updateTokensAndExpiration(s,i,Number(r))}updateTokensAndExpiration(e,n,s){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+s*1e3}static fromJSON(e,n){const{refreshToken:s,accessToken:i,expirationTime:r}=n,o=new Ns;return s&&(q(typeof s=="string","internal-error",{appName:e}),o.refreshToken=s),i&&(q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),r&&(q(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Ns,this.toJSON())}_performRefresh(){return un("not implemented")}}/**
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
 */function wn(t,e){q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Nt{constructor(e){var{uid:n,auth:s,stsTokenManager:i}=e,r=Ec(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new R0(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=s,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ll(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const n=await zi(this,this.stsTokenManager.getToken(this.auth,e));return q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return P0(this,e)}reload(){return x0(this)}_assign(e){this!==e&&(q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Nt(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let s=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),s=!0),n&&await to(this),await this.auth._persistUserIfCurrent(this),s&&this.auth._notifyListenersIfCurrent(this)}async delete(){if(Rt(this.auth.app))return Promise.reject(ns(this.auth));const e=await this.getIdToken();return await zi(this,k0(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var s,i,r,o,a,l,c,u;const d=(s=n.displayName)!==null&&s!==void 0?s:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,m=(r=n.phoneNumber)!==null&&r!==void 0?r:void 0,v=(o=n.photoURL)!==null&&o!==void 0?o:void 0,y=(a=n.tenantId)!==null&&a!==void 0?a:void 0,R=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,F=(c=n.createdAt)!==null&&c!==void 0?c:void 0,M=(u=n.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:$,emailVerified:B,isAnonymous:K,providerData:Te,stsTokenManager:ne}=n;q($&&ne,e,"internal-error");const X=Ns.fromJSON(this.name,ne);q(typeof $=="string",e,"internal-error"),wn(d,e.name),wn(h,e.name),q(typeof B=="boolean",e,"internal-error"),q(typeof K=="boolean",e,"internal-error"),wn(m,e.name),wn(v,e.name),wn(y,e.name),wn(R,e.name),wn(F,e.name),wn(M,e.name);const Q=new Nt({uid:$,auth:e,email:h,emailVerified:B,displayName:d,isAnonymous:K,photoURL:v,phoneNumber:m,tenantId:y,stsTokenManager:X,createdAt:F,lastLoginAt:M});return Te&&Array.isArray(Te)&&(Q.providerData=Te.map(_e=>Object.assign({},_e))),R&&(Q._redirectEventId=R),Q}static async _fromIdTokenResponse(e,n,s=!1){const i=new Ns;i.updateFromServerResponse(n);const r=new Nt({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:s});return await to(r),r}static async _fromGetAccountInfoResponse(e,n,s){const i=n.users[0];q(i.localId!==void 0,"internal-error");const r=i.providerUserInfo!==void 0?im(i.providerUserInfo):[],o=!(i.email&&i.passwordHash)&&!(r!=null&&r.length),a=new Ns;a.updateFromIdToken(s);const l=new Nt({uid:i.localId,auth:e,stsTokenManager:a,isAnonymous:o}),c={uid:i.localId,displayName:i.displayName||null,photoURL:i.photoUrl||null,email:i.email||null,emailVerified:i.emailVerified||!1,phoneNumber:i.phoneNumber||null,tenantId:i.tenantId||null,providerData:r,metadata:new ll(i.createdAt,i.lastLoginAt),isAnonymous:!(i.email&&i.passwordHash)&&!(r!=null&&r.length)};return Object.assign(l,c),l}}/**
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
 */const Id=new Map;function dn(t){gn(t instanceof Function,"Expected a class definition");let e=Id.get(t);return e?(gn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Id.set(t,e),e)}/**
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
 */class rm{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}rm.type="NONE";const Sd=rm;/**
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
 */function Sr(t,e,n){return`firebase:${t}:${e}:${n}`}class Ls{constructor(e,n,s){this.persistence=e,this.auth=n,this.userKey=s;const{config:i,name:r}=this.auth;this.fullUserKey=Sr(this.userKey,i.apiKey,r),this.fullPersistenceKey=Sr("persistence",i.apiKey,r),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);if(!e)return null;if(typeof e=="string"){const n=await eo(this.auth,{idToken:e}).catch(()=>{});return n?Nt._fromGetAccountInfoResponse(this.auth,n,e):null}return Nt._fromJSON(this.auth,e)}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,s="authUser"){if(!n.length)return new Ls(dn(Sd),e,s);const i=(await Promise.all(n.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=i[0]||dn(Sd);const o=Sr(s,e.config.apiKey,e.name);let a=null;for(const c of n)try{const u=await c._get(o);if(u){let d;if(typeof u=="string"){const h=await eo(e,{idToken:u}).catch(()=>{});if(!h)break;d=await Nt._fromGetAccountInfoResponse(e,h,u)}else d=Nt._fromJSON(e,u);c!==r&&(a=d),r=c;break}}catch{}const l=i.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new Ls(r,e,s):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(n.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new Ls(r,e,s))}}/**
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
 */function Td(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(cm(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(om(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(dm(e))return"Blackberry";if(hm(e))return"Webos";if(am(e))return"Safari";if((e.includes("chrome/")||lm(e))&&!e.includes("edge/"))return"Chrome";if(um(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,s=t.match(n);if((s==null?void 0:s.length)===2)return s[1]}return"Other"}function om(t=st()){return/firefox\//i.test(t)}function am(t=st()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function lm(t=st()){return/crios\//i.test(t)}function cm(t=st()){return/iemobile/i.test(t)}function um(t=st()){return/android/i.test(t)}function dm(t=st()){return/blackberry/i.test(t)}function hm(t=st()){return/webos/i.test(t)}function Ac(t=st()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function D0(t=st()){var e;return Ac(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function M0(){return Av()&&document.documentMode===10}function fm(t=st()){return Ac(t)||um(t)||hm(t)||dm(t)||/windows phone/i.test(t)||cm(t)}/**
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
 */function pm(t,e=[]){let n;switch(t){case"Browser":n=Td(st());break;case"Worker":n=`${Td(st())}-${t}`;break;default:n=t}const s=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Zs}/${s}`}/**
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
 */class B0{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const s=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});s.onAbort=n,this.queue.push(s);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const s of this.queue)await s(e),s.onAbort&&n.push(s.onAbort)}catch(s){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:s==null?void 0:s.message})}}}/**
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
 */async function F0(t,e={}){return si(t,"GET","/v2/passwordPolicy",kc(t,e))}/**
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
 */const $0=6;class U0{constructor(e){var n,s,i,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(n=o.minPasswordLength)!==null&&n!==void 0?n:$0,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(s=e.allowedNonAlphanumericCharacters)===null||s===void 0?void 0:s.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var n,s,i,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(n=l.meetsMinPasswordLength)!==null&&n!==void 0?n:!0),l.isValid&&(l.isValid=(s=l.meetsMaxPasswordLength)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(i=l.containsLowercaseLetter)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,n){const s=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;s&&(n.meetsMinPasswordLength=e.length>=s),i&&(n.meetsMaxPasswordLength=e.length<=i)}validatePasswordCharacterOptions(e,n){this.updatePasswordCharacterOptionsStatuses(n,!1,!1,!1,!1);let s;for(let i=0;i<e.length;i++)s=e.charAt(i),this.updatePasswordCharacterOptionsStatuses(n,s>="a"&&s<="z",s>="A"&&s<="Z",s>="0"&&s<="9",this.allowedNonAlphanumericCharacters.includes(s))}updatePasswordCharacterOptionsStatuses(e,n,s,i,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=n)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=s)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
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
 */class H0{constructor(e,n,s,i){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=s,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new kd(this),this.idTokenSubscription=new kd(this),this.beforeStateQueue=new B0(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=em,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this._resolvePersistenceManagerAvailable=void 0,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=i.sdkClientVersion,this._persistenceManagerAvailable=new Promise(r=>this._resolvePersistenceManagerAvailable=r)}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=dn(n)),this._initializationPromise=this.queue(async()=>{var s,i,r;if(!this._deleted&&(this.persistenceManager=await Ls.create(this,e),(s=this._resolvePersistenceManagerAvailable)===null||s===void 0||s.call(this),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((r=this.currentUser)===null||r===void 0?void 0:r.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUserFromIdToken(e){try{const n=await eo(this,{idToken:e}),s=await Nt._fromGetAccountInfoResponse(this,n,e);await this.directlySetCurrentUser(s)}catch(n){console.warn("FirebaseServerApp could not login user with provided authIdToken: ",n),await this.directlySetCurrentUser(null)}}async initializeCurrentUser(e){var n;if(Rt(this.app)){const o=this.app.settings.authIdToken;return o?new Promise(a=>{setTimeout(()=>this.initializeCurrentUserFromIdToken(o).then(a,a))}):this.directlySetCurrentUser(null)}const s=await this.assertedPersistence.getCurrentUser();let i=s,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=s,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await to(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=b0()}async _delete(){this._deleted=!0}async updateCurrentUser(e){if(Rt(this.app))return Promise.reject(ns(this));const n=e?gt(e):null;return n&&q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return Rt(this.app)?Promise.reject(ns(this)):(await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0))}setPersistence(e){return Rt(this.app)?Promise.reject(ns(this)):this.queue(async()=>{await this.assertedPersistence.setPersistence(dn(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const n=this._getPasswordPolicyInternal();return n.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):n.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await F0(this),n=new U0(e);this.tenantId===null?this._projectPasswordPolicy=n:this._tenantPasswordPolicies[this.tenantId]=n}_getPersistenceType(){return this.assertedPersistence.persistence.type}_getPersistence(){return this.assertedPersistence.persistence}_updateErrorMap(e){this._errorFactory=new Zi("auth","Firebase",e())}onAuthStateChanged(e,n,s){return this.registerStateListener(this.authStateSubscription,e,n,s)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,s){return this.registerStateListener(this.idTokenSubscription,e,n,s)}authStateReady(){return new Promise((e,n)=>{if(this.currentUser)e();else{const s=this.onAuthStateChanged(()=>{s(),e()},n)}})}async revokeAccessToken(e){if(this.currentUser){const n=await this.currentUser.getIdToken(),s={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:e,idToken:n};this.tenantId!=null&&(s.tenantId=this.tenantId),await L0(this,s)}}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const s=await this.getOrInitRedirectPersistenceManager(n);return e===null?s.removeCurrentUser():s.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&dn(e)||this._popupRedirectResolver;q(n,this,"argument-error"),this.redirectPersistenceManager=await Ls.create(this,[dn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,s;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((s=this.redirectUser)===null||s===void 0?void 0:s._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const s=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==s&&(this.lastNotifiedUid=s,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,s,i){if(this._deleted)return()=>{};const r=typeof n=="function"?n:n.next.bind(n);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(q(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof n=="function"){const l=e.addObserver(n,s,i);return()=>{o=!0,l()}}else{const l=e.addObserver(n);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=pm(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={"X-Client-Version":this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const s=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());s&&(n["X-Firebase-Client"]=s);const i=await this._getAppCheckToken();return i&&(n["X-Firebase-AppCheck"]=i),n}async _getAppCheckToken(){var e;if(Rt(this.app)&&this.app.settings.appCheckToken)return this.app.settings.appCheckToken;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&_0(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Ho(t){return gt(t)}class kd{constructor(e){this.auth=e,this.observer=null,this.addObserver=$v(n=>this.observer=n)}get next(){return q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */let Rc={async loadJS(){throw new Error("Unable to load external scripts")},recaptchaV2Script:"",recaptchaEnterpriseScript:"",gapiScript:""};function V0(t){Rc=t}function W0(t){return Rc.loadJS(t)}function j0(){return Rc.gapiScript}function q0(t){return`__${t}${Math.floor(Math.random()*1e6)}`}/**
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
 */function z0(t,e){const n=Hl(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),r=n.getOptions();if(as(r,e??{}))return i;Xt(i,"already-initialized")}return n.initialize({options:e})}function G0(t,e){const n=(e==null?void 0:e.persistence)||[],s=(Array.isArray(n)?n:[n]).map(dn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(s,e==null?void 0:e.popupRedirectResolver)}function K0(t,e,n){const s=Ho(t);q(/^https?:\/\//.test(e),s,"invalid-emulator-scheme");const i=!1,r=mm(e),{host:o,port:a}=Y0(e),l=a===null?"":`:${a}`,c={url:`${r}//${o}${l}/`},u=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:i})});if(!s._canInitEmulator){q(s.config.emulator&&s.emulatorConfig,s,"emulator-config-failed"),q(as(c,s.config.emulator)&&as(u,s.emulatorConfig),s,"emulator-config-failed");return}s.config.emulator=c,s.emulatorConfig=u,s.settings.appVerificationDisabledForTesting=!0,Q0()}function mm(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function Y0(t){const e=mm(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const s=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(s);if(i){const r=i[1];return{host:r,port:Pd(s.substr(r.length+1))}}else{const[r,o]=s.split(":");return{host:r,port:Pd(o)}}}function Pd(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function Q0(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class gm{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return un("not implemented")}_getIdTokenResponse(e){return un("not implemented")}_linkToIdToken(e,n){return un("not implemented")}_getReauthenticationResolver(e){return un("not implemented")}}/**
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
 */async function Ds(t,e){return S0(t,"POST","/v1/accounts:signInWithIdp",kc(t,e))}/**
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
 */const J0="http://localhost";class fs extends gm{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new fs(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Xt("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:s,signInMethod:i}=n,r=Ec(n,["providerId","signInMethod"]);if(!s||!i)return null;const o=new fs(s,i);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return Ds(e,n)}_linkToIdToken(e,n){const s=this.buildRequest();return s.idToken=n,Ds(e,s)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,Ds(e,n)}buildRequest(){const e={requestUri:J0,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Xs(n)}return e}}/**
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
 */class xc{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class rr extends xc{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Sn extends rr{constructor(){super("facebook.com")}static credential(e){return fs._fromParams({providerId:Sn.PROVIDER_ID,signInMethod:Sn.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Sn.credentialFromTaggedObject(e)}static credentialFromError(e){return Sn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Sn.credential(e.oauthAccessToken)}catch{return null}}}Sn.FACEBOOK_SIGN_IN_METHOD="facebook.com";Sn.PROVIDER_ID="facebook.com";/**
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
 */class ln extends rr{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return fs._fromParams({providerId:ln.PROVIDER_ID,signInMethod:ln.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ln.credentialFromTaggedObject(e)}static credentialFromError(e){return ln.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:s}=e;if(!n&&!s)return null;try{return ln.credential(n,s)}catch{return null}}}ln.GOOGLE_SIGN_IN_METHOD="google.com";ln.PROVIDER_ID="google.com";/**
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
 */class Tn extends rr{constructor(){super("github.com")}static credential(e){return fs._fromParams({providerId:Tn.PROVIDER_ID,signInMethod:Tn.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Tn.credentialFromTaggedObject(e)}static credentialFromError(e){return Tn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Tn.credential(e.oauthAccessToken)}catch{return null}}}Tn.GITHUB_SIGN_IN_METHOD="github.com";Tn.PROVIDER_ID="github.com";/**
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
 */class kn extends rr{constructor(){super("twitter.com")}static credential(e,n){return fs._fromParams({providerId:kn.PROVIDER_ID,signInMethod:kn.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return kn.credentialFromTaggedObject(e)}static credentialFromError(e){return kn.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:s}=e;if(!n||!s)return null;try{return kn.credential(n,s)}catch{return null}}}kn.TWITTER_SIGN_IN_METHOD="twitter.com";kn.PROVIDER_ID="twitter.com";/**
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
 */class zs{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,s,i=!1){const r=await Nt._fromIdTokenResponse(e,s,i),o=Ad(s);return new zs({user:r,providerId:o,_tokenResponse:s,operationType:n})}static async _forOperation(e,n,s){await e._updateTokensIfNecessary(s,!0);const i=Ad(s);return new zs({user:e,providerId:i,_tokenResponse:s,operationType:n})}}function Ad(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */class no extends Vn{constructor(e,n,s,i){var r;super(n.code,n.message),this.operationType=s,this.user=i,Object.setPrototypeOf(this,no.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:n.customData._serverResponse,operationType:s}}static _fromErrorAndOperation(e,n,s,i){return new no(e,n,s,i)}}function _m(t,e,n,s){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?no._fromErrorAndOperation(t,r,e,s):r})}async function X0(t,e,n=!1){const s=await zi(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return zs._forOperation(t,"link",s)}/**
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
 */async function Z0(t,e,n=!1){const{auth:s}=t;if(Rt(s.app))return Promise.reject(ns(s));const i="reauthenticate";try{const r=await zi(t,_m(s,i,e,t),n);q(r.idToken,s,"internal-error");const o=Pc(r.idToken);q(o,s,"internal-error");const{sub:a}=o;return q(t.uid===a,s,"user-mismatch"),zs._forOperation(t,i,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Xt(s,"user-mismatch"),r}}/**
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
 */async function eI(t,e,n=!1){if(Rt(t.app))return Promise.reject(ns(t));const s="signIn",i=await _m(t,s,e),r=await zs._fromIdTokenResponse(t,s,i);return n||await t._updateCurrentUser(r.user),r}function tI(t,e,n,s){return gt(t).onIdTokenChanged(e,n,s)}function nI(t,e,n){return gt(t).beforeAuthStateChanged(e,n)}function sI(t){return gt(t).signOut()}const so="__sak";/**
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
 */class wm{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(so,"1"),this.storage.removeItem(so),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */const iI=1e3,rI=10;class vm extends wm{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.fallbackToPolling=fm(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const s=this.storage.getItem(n),i=this.localCache[n];s!==i&&e(n,i,s)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const s=e.key;n?this.detachListener():this.stopPolling();const i=()=>{const o=this.storage.getItem(s);!n&&this.localCache[s]===o||this.notifyListeners(s,o)},r=this.storage.getItem(s);M0()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,rI):i()}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,s)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:s}),!0)})},iI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}vm.type="LOCAL";const oI=vm;/**
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
 */class ym extends wm{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}ym.type="SESSION";const bm=ym;/**
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
 */function aI(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Vo{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const s=new Vo(e);return this.receivers.push(s),s}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:s,eventType:i,data:r}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:s,eventType:i});const a=Array.from(o).map(async c=>c(n.origin,r)),l=await aI(a);n.ports[0].postMessage({status:"done",eventId:s,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Vo.receivers=[];/**
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
 */function Oc(t="",e=10){let n="";for(let s=0;s<e;s++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class lI{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,s=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=Oc("",20);i.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},s);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===c)switch(h.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(h.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
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
 */function Qt(){return window}function cI(t){Qt().location.href=t}/**
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
 */function Cm(){return typeof Qt().WorkerGlobalScope<"u"&&typeof Qt().importScripts=="function"}async function uI(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function dI(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function hI(){return Cm()?self:null}/**
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
 */const Em="firebaseLocalStorageDb",fI=1,io="firebaseLocalStorage",Im="fbase_key";class or{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Wo(t,e){return t.transaction([io],e?"readwrite":"readonly").objectStore(io)}function pI(){const t=indexedDB.deleteDatabase(Em);return new or(t).toPromise()}function cl(){const t=indexedDB.open(Em,fI);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const s=t.result;try{s.createObjectStore(io,{keyPath:Im})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const s=t.result;s.objectStoreNames.contains(io)?e(s):(s.close(),await pI(),e(await cl()))})})}async function Rd(t,e,n){const s=Wo(t,!0).put({[Im]:e,value:n});return new or(s).toPromise()}async function mI(t,e){const n=Wo(t,!1).get(e),s=await new or(n).toPromise();return s===void 0?null:s.value}function xd(t,e){const n=Wo(t,!0).delete(e);return new or(n).toPromise()}const gI=800,_I=3;class Sm{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await cl(),this.db)}async _withRetries(e){let n=0;for(;;)try{const s=await this._openDb();return await e(s)}catch(s){if(n++>_I)throw s;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Cm()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Vo._getInstance(hI()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await uI(),!this.activeServiceWorker)return;this.sender=new lI(this.activeServiceWorker);const s=await this.sender._send("ping",{},800);s&&!((e=s[0])===null||e===void 0)&&e.fulfilled&&!((n=s[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||dI()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await cl();return await Rd(e,so,"1"),await xd(e,so),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(s=>Rd(s,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(s=>mI(s,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>xd(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const r=Wo(i,!1).getAll();return new or(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],s=new Set;if(e.length!==0)for(const{fbase_key:i,value:r}of e)s.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!s.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const s=this.listeners[e];if(s)for(const i of Array.from(s))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),gI)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sm.type="LOCAL";const wI=Sm;new ir(3e4,6e4);/**
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
 */function Tm(t,e){return e?dn(e):(q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Nc extends gm{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Ds(e,this._buildIdpRequest())}_linkToIdToken(e,n){return Ds(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return Ds(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function vI(t){return eI(t.auth,new Nc(t),t.bypassAuthState)}function yI(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),Z0(n,new Nc(t),t.bypassAuthState)}async function bI(t){const{auth:e,user:n}=t;return q(n,e,"internal-error"),X0(n,new Nc(t),t.bypassAuthState)}/**
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
 */class km{constructor(e,n,s,i,r=!1){this.auth=e,this.resolver=s,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(s){this.reject(s)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:s,postBody:i,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:s,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return vI;case"linkViaPopup":case"linkViaRedirect":return bI;case"reauthViaPopup":case"reauthViaRedirect":return yI;default:Xt(this.auth,"internal-error")}}resolve(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){gn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const CI=new ir(2e3,1e4);async function EI(t,e,n){if(Rt(t.app))return Promise.reject(Mt(t,"operation-not-supported-in-this-environment"));const s=Ho(t);w0(t,e,xc);const i=Tm(s,n);return new Xn(s,"signInViaPopup",e,i).executeNotNull()}class Xn extends km{constructor(e,n,s,i,r){super(e,n,i,r),this.provider=s,this.authWindow=null,this.pollId=null,Xn.currentPopupAction&&Xn.currentPopupAction.cancel(),Xn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return q(e,this.auth,"internal-error"),e}async onExecution(){gn(this.filter.length===1,"Popup operations only handle one event");const e=Oc();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Mt(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Mt(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Xn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,s;if(!((s=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||s===void 0)&&s.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Mt(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,CI.get())};e()}}Xn.currentPopupAction=null;/**
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
 */const II="pendingRedirect",Tr=new Map;class SI extends km{constructor(e,n,s=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,s),this.eventId=null}async execute(){let e=Tr.get(this.auth._key());if(!e){try{const s=await TI(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(s)}catch(n){e=()=>Promise.reject(n)}Tr.set(this.auth._key(),e)}return this.bypassAuthState||Tr.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function TI(t,e){const n=AI(e),s=PI(t);if(!await s._isAvailable())return!1;const i=await s._get(n)==="true";return await s._remove(n),i}function kI(t,e){Tr.set(t._key(),e)}function PI(t){return dn(t._redirectPersistence)}function AI(t){return Sr(II,t.config.apiKey,t.name)}async function RI(t,e,n=!1){if(Rt(t.app))return Promise.reject(ns(t));const s=Ho(t),i=Tm(s,e),o=await new SI(s,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await s._persistUserIfCurrent(o.user),await s._setRedirectUser(null,e)),o}/**
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
 */const xI=10*60*1e3;class OI{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(s=>{this.isEventForConsumer(e,s)&&(n=!0,this.sendToConsumer(e,s),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!NI(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var s;if(e.error&&!Pm(e)){const i=((s=e.error.code)===null||s===void 0?void 0:s.split("auth/")[1])||"internal-error";n.onError(Mt(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const s=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&s}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=xI&&this.cachedEventUids.clear(),this.cachedEventUids.has(Od(e))}saveEventToCache(e){this.cachedEventUids.add(Od(e)),this.lastProcessedEventTime=Date.now()}}function Od(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function Pm({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function NI(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Pm(t);default:return!1}}/**
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
 */async function LI(t,e={}){return si(t,"GET","/v1/projects",e)}/**
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
 */const DI=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,MI=/^https?/;async function BI(t){if(t.config.emulator)return;const{authorizedDomains:e}=await LI(t);for(const n of e)try{if(FI(n))return}catch{}Xt(t,"unauthorized-domain")}function FI(t){const e=al(),{protocol:n,hostname:s}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&s===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===s}if(!MI.test(n))return!1;if(DI.test(t))return s===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(s)}/**
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
 */const $I=new ir(3e4,6e4);function Nd(){const t=Qt().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function UI(t){return new Promise((e,n)=>{var s,i,r;function o(){Nd(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Nd(),n(Mt(t,"network-request-failed"))},timeout:$I.get()})}if(!((i=(s=Qt().gapi)===null||s===void 0?void 0:s.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((r=Qt().gapi)===null||r===void 0)&&r.load)o();else{const a=q0("iframefcb");return Qt()[a]=()=>{gapi.load?o():n(Mt(t,"network-request-failed"))},W0(`${j0()}?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw kr=null,e})}let kr=null;function HI(t){return kr=kr||UI(t),kr}/**
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
 */const VI=new ir(5e3,15e3),WI="__/auth/iframe",jI="emulator/auth/iframe",qI={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},zI=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function GI(t){const e=t.config;q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Tc(e,jI):`https://${t.config.authDomain}/${WI}`,s={apiKey:e.apiKey,appName:t.name,v:Zs},i=zI.get(t.config.apiHost);i&&(s.eid=i);const r=t._getFrameworks();return r.length&&(s.fw=r.join(",")),`${n}?${Xs(s).slice(1)}`}async function KI(t){const e=await HI(t),n=Qt().gapi;return q(n,t,"internal-error"),e.open({where:document.body,url:GI(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:qI,dontclear:!0},s=>new Promise(async(i,r)=>{await s.restyle({setHideOnLeave:!1});const o=Mt(t,"network-request-failed"),a=Qt().setTimeout(()=>{r(o)},VI.get());function l(){Qt().clearTimeout(a),i(s)}s.ping(l).then(l,()=>{r(o)})}))}/**
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
 */const YI={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},QI=500,JI=600,XI="_blank",ZI="http://localhost";class Ld{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function eS(t,e,n,s=QI,i=JI){const r=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-s)/2,0).toString();let a="";const l=Object.assign(Object.assign({},YI),{width:s.toString(),height:i.toString(),top:r,left:o}),c=st().toLowerCase();n&&(a=lm(c)?XI:n),om(c)&&(e=e||ZI,l.scrollbars="yes");const u=Object.entries(l).reduce((h,[m,v])=>`${h}${m}=${v},`,"");if(D0(c)&&a!=="_self")return tS(e||"",a),new Ld(null);const d=window.open(e||"",a,u);q(d,t,"popup-blocked");try{d.focus()}catch{}return new Ld(d)}function tS(t,e){const n=document.createElement("a");n.href=t,n.target=e;const s=document.createEvent("MouseEvent");s.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(s)}/**
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
 */const nS="__/auth/handler",sS="emulator/auth/handler",iS=encodeURIComponent("fac");async function Dd(t,e,n,s,i,r){q(t.config.authDomain,t,"auth-domain-config-required"),q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:s,v:Zs,eventId:i};if(e instanceof xc){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",Ha(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,d]of Object.entries({}))o[u]=d}if(e instanceof rr){const u=e.getScopes().filter(d=>d!=="");u.length>0&&(o.scopes=u.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await t._getAppCheckToken(),c=l?`#${iS}=${encodeURIComponent(l)}`:"";return`${rS(t)}?${Xs(a).slice(1)}${c}`}function rS({config:t}){return t.emulator?Tc(t,sS):`https://${t.authDomain}/${nS}`}/**
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
 */const Ca="webStorageSupport";class oS{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=bm,this._completeRedirectFn=RI,this._overrideRedirectResult=kI}async _openPopup(e,n,s,i){var r;gn((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Dd(e,n,s,al(),i);return eS(e,o,Oc())}async _openRedirect(e,n,s,i){await this._originValidation(e);const r=await Dd(e,n,s,al(),i);return cI(r),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:r}=this.eventManagers[n];return i?Promise.resolve(i):(gn(r,"If manager is not set, promise should be"),r)}const s=this.initAndGetManager(e);return this.eventManagers[n]={promise:s},s.catch(()=>{delete this.eventManagers[n]}),s}async initAndGetManager(e){const n=await KI(e),s=new OI(e);return n.register("authEvent",i=>(q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:s.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:s},this.iframes[e._key()]=n,s}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Ca,{type:Ca},i=>{var r;const o=(r=i==null?void 0:i[0])===null||r===void 0?void 0:r[Ca];o!==void 0&&n(!!o),Xt(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=BI(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return fm()||am()||Ac()}}const aS=oS;var Md="@firebase/auth",Bd="1.10.0";/**
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
 */class lS{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(s=>{e((s==null?void 0:s.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function cS(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";case"WebExtension":return"web-extension";default:return}}function uS(t){Us(new ls("auth",(e,{options:n})=>{const s=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=s.options;q(o&&!o.includes(":"),"invalid-api-key",{appName:s.name});const l={apiKey:o,authDomain:a,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:pm(t)},c=new H0(s,i,r,l);return G0(c,n),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,s)=>{e.getProvider("auth-internal").initialize()})),Us(new ls("auth-internal",e=>{const n=Ho(e.getProvider("auth").getImmediate());return(s=>new lS(s))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Dn(Md,Bd,cS(t)),Dn(Md,Bd,"esm2017")}/**
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
 */const dS=5*60,hS=Lf("authIdTokenMaxAge")||dS;let Fd=null;const fS=t=>async e=>{const n=e&&await e.getIdTokenResult(),s=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(s&&s>hS)return;const i=n==null?void 0:n.token;Fd!==i&&(Fd=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function pS(t=Uf()){const e=Hl(t,"auth");if(e.isInitialized())return e.getImmediate();const n=z0(t,{popupRedirectResolver:aS,persistence:[wI,oI,bm]}),s=Lf("authTokenSyncURL");if(s&&typeof isSecureContext=="boolean"&&isSecureContext){const r=new URL(s,location.origin);if(location.origin===r.origin){const o=fS(r.toString());nI(n,o,()=>o(n.currentUser)),tI(n,a=>o(a))}}const i=Of("auth");return i&&K0(n,`http://${i}`),n}function mS(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}V0({loadJS(t){return new Promise((e,n)=>{const s=document.createElement("script");s.setAttribute("src",t),s.onload=e,s.onerror=i=>{const r=Mt("internal-error");r.customData=i,n(r)},s.type="text/javascript",s.charset="UTF-8",mS().appendChild(s)})},gapiScript:"https://apis.google.com/js/api.js",recaptchaV2Script:"https://www.google.com/recaptcha/api.js",recaptchaEnterpriseScript:"https://www.google.com/recaptcha/enterprise.js?render="});uS("Browser");const gS={apiKey:"AIzaSyBA6z3KtW9-3XxqvvsudpSPOls0isD7xx8",authDomain:"lax-scoreboard.firebaseapp.com",databaseURL:"https://lax-scoreboard-default-rtdb.firebaseio.com",projectId:"lax-scoreboard",storageBucket:"lax-scoreboard.appspot.com",messagingSenderId:"560143102921",appId:"1:560143102921:web:6e3a5d98726cecceeeae18"},Am=$f(gS),Ea=f0(Am),ro=pS(Am);/*!
* sweetalert2 v11.17.2
* Released under the MIT License.
*/function Rm(t,e,n){if(typeof t=="function"?t===e:t.has(e))return arguments.length<3?e:n;throw new TypeError("Private element is not present on this object")}function _S(t,e){if(e.has(t))throw new TypeError("Cannot initialize the same private elements twice on an object")}function $d(t,e){return t.get(Rm(t,e))}function wS(t,e,n){_S(t,e),e.set(t,n)}function vS(t,e,n){return t.set(Rm(t,e),n),n}const yS=100,V={},bS=()=>{V.previousActiveElement instanceof HTMLElement?(V.previousActiveElement.focus(),V.previousActiveElement=null):document.body&&document.body.focus()},CS=t=>new Promise(e=>{if(!t)return e();const n=window.scrollX,s=window.scrollY;V.restoreFocusTimeout=setTimeout(()=>{bS(),e()},yS),window.scrollTo(n,s)}),xm="swal2-",ES=["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error","draggable","dragging"],_=ES.reduce((t,e)=>(t[e]=xm+e,t),{}),IS=["success","warning","info","question","error"],oo=IS.reduce((t,e)=>(t[e]=xm+e,t),{}),Om="SweetAlert2:",Lc=t=>t.charAt(0).toUpperCase()+t.slice(1),it=t=>{console.warn(`${Om} ${typeof t=="object"?t.join(" "):t}`)},ws=t=>{console.error(`${Om} ${t}`)},Ud=[],SS=t=>{Ud.includes(t)||(Ud.push(t),it(t))},Nm=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;SS(`"${t}" is deprecated and will be removed in the next major release.${e?` Use "${e}" instead.`:""}`)},jo=t=>typeof t=="function"?t():t,Dc=t=>t&&typeof t.toPromise=="function",ar=t=>Dc(t)?t.toPromise():Promise.resolve(t),Mc=t=>t&&Promise.resolve(t)===t,rt=()=>document.body.querySelector(`.${_.container}`),lr=t=>{const e=rt();return e?e.querySelector(t):null},_t=t=>lr(`.${t}`),ce=()=>_t(_.popup),ii=()=>_t(_.icon),TS=()=>_t(_["icon-content"]),Lm=()=>_t(_.title),Bc=()=>_t(_["html-container"]),Dm=()=>_t(_.image),Fc=()=>_t(_["progress-steps"]),qo=()=>_t(_["validation-message"]),Zt=()=>lr(`.${_.actions} .${_.confirm}`),ri=()=>lr(`.${_.actions} .${_.cancel}`),vs=()=>lr(`.${_.actions} .${_.deny}`),kS=()=>_t(_["input-label"]),oi=()=>lr(`.${_.loader}`),cr=()=>_t(_.actions),Mm=()=>_t(_.footer),zo=()=>_t(_["timer-progress-bar"]),$c=()=>_t(_.close),PS=`
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
`,Uc=()=>{const t=ce();if(!t)return[];const e=t.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])'),n=Array.from(e).sort((r,o)=>{const a=parseInt(r.getAttribute("tabindex")||"0"),l=parseInt(o.getAttribute("tabindex")||"0");return a>l?1:a<l?-1:0}),s=t.querySelectorAll(PS),i=Array.from(s).filter(r=>r.getAttribute("tabindex")!=="-1");return[...new Set(n.concat(i))].filter(r=>ut(r))},Hc=()=>fn(document.body,_.shown)&&!fn(document.body,_["toast-shown"])&&!fn(document.body,_["no-backdrop"]),Go=()=>{const t=ce();return t?fn(t,_.toast):!1},AS=()=>{const t=ce();return t?t.hasAttribute("data-loading"):!1},wt=(t,e)=>{if(t.textContent="",e){const s=new DOMParser().parseFromString(e,"text/html"),i=s.querySelector("head");i&&Array.from(i.childNodes).forEach(o=>{t.appendChild(o)});const r=s.querySelector("body");r&&Array.from(r.childNodes).forEach(o=>{o instanceof HTMLVideoElement||o instanceof HTMLAudioElement?t.appendChild(o.cloneNode(!0)):t.appendChild(o)})}},fn=(t,e)=>{if(!e)return!1;const n=e.split(/\s+/);for(let s=0;s<n.length;s++)if(!t.classList.contains(n[s]))return!1;return!0},RS=(t,e)=>{Array.from(t.classList).forEach(n=>{!Object.values(_).includes(n)&&!Object.values(oo).includes(n)&&!Object.values(e.showClass||{}).includes(n)&&t.classList.remove(n)})},mt=(t,e,n)=>{if(RS(t,e),!e.customClass)return;const s=e.customClass[n];if(s){if(typeof s!="string"&&!s.forEach){it(`Invalid type of customClass.${n}! Expected string or iterable object, got "${typeof s}"`);return}ie(t,s)}},Ko=(t,e)=>{if(!e)return null;switch(e){case"select":case"textarea":case"file":return t.querySelector(`.${_.popup} > .${_[e]}`);case"checkbox":return t.querySelector(`.${_.popup} > .${_.checkbox} input`);case"radio":return t.querySelector(`.${_.popup} > .${_.radio} input:checked`)||t.querySelector(`.${_.popup} > .${_.radio} input:first-child`);case"range":return t.querySelector(`.${_.popup} > .${_.range} input`);default:return t.querySelector(`.${_.popup} > .${_.input}`)}},Bm=t=>{if(t.focus(),t.type!=="file"){const e=t.value;t.value="",t.value=e}},Fm=(t,e,n)=>{!t||!e||(typeof e=="string"&&(e=e.split(/\s+/).filter(Boolean)),e.forEach(s=>{Array.isArray(t)?t.forEach(i=>{n?i.classList.add(s):i.classList.remove(s)}):n?t.classList.add(s):t.classList.remove(s)}))},ie=(t,e)=>{Fm(t,e,!0)},kt=(t,e)=>{Fm(t,e,!1)},An=(t,e)=>{const n=Array.from(t.children);for(let s=0;s<n.length;s++){const i=n[s];if(i instanceof HTMLElement&&fn(i,e))return i}},ss=(t,e,n)=>{n===`${parseInt(n)}`&&(n=parseInt(n)),n||parseInt(n)===0?t.style.setProperty(e,typeof n=="number"?`${n}px`:n):t.style.removeProperty(e)},He=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"flex";t&&(t.style.display=e)},Je=t=>{t&&(t.style.display="none")},Vc=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:"block";t&&new MutationObserver(()=>{ur(t,t.innerHTML,e)}).observe(t,{childList:!0,subtree:!0})},Hd=(t,e,n,s)=>{const i=t.querySelector(e);i&&i.style.setProperty(n,s)},ur=function(t,e){let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:"flex";e?He(t,n):Je(t)},ut=t=>!!(t&&(t.offsetWidth||t.offsetHeight||t.getClientRects().length)),xS=()=>!ut(Zt())&&!ut(vs())&&!ut(ri()),Vd=t=>t.scrollHeight>t.clientHeight,$m=t=>{const e=window.getComputedStyle(t),n=parseFloat(e.getPropertyValue("animation-duration")||"0"),s=parseFloat(e.getPropertyValue("transition-duration")||"0");return n>0||s>0},Wc=function(t){let e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!1;const n=zo();n&&ut(n)&&(e&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition=`width ${t/1e3}s linear`,n.style.width="0%"},10))},OS=()=>{const t=zo();if(!t)return;const e=parseInt(window.getComputedStyle(t).width);t.style.removeProperty("transition"),t.style.width="100%";const n=parseInt(window.getComputedStyle(t).width),s=e/n*100;t.style.width=`${s}%`},NS=()=>typeof window>"u"||typeof document>"u",LS=`
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
`.replace(/(^|\n)\s*/g,""),DS=()=>{const t=rt();return t?(t.remove(),kt([document.documentElement,document.body],[_["no-backdrop"],_["toast-shown"],_["has-column"]]),!0):!1},Gn=()=>{V.currentInstance.resetValidationMessage()},MS=()=>{const t=ce(),e=An(t,_.input),n=An(t,_.file),s=t.querySelector(`.${_.range} input`),i=t.querySelector(`.${_.range} output`),r=An(t,_.select),o=t.querySelector(`.${_.checkbox} input`),a=An(t,_.textarea);e.oninput=Gn,n.onchange=Gn,r.onchange=Gn,o.onchange=Gn,a.oninput=Gn,s.oninput=()=>{Gn(),i.value=s.value},s.onchange=()=>{Gn(),i.value=s.value}},BS=t=>typeof t=="string"?document.querySelector(t):t,FS=t=>{const e=ce();e.setAttribute("role",t.toast?"alert":"dialog"),e.setAttribute("aria-live",t.toast?"polite":"assertive"),t.toast||e.setAttribute("aria-modal","true")},$S=t=>{window.getComputedStyle(t).direction==="rtl"&&ie(rt(),_.rtl)},US=t=>{const e=DS();if(NS()){ws("SweetAlert2 requires document to initialize");return}const n=document.createElement("div");n.className=_.container,e&&ie(n,_["no-transition"]),wt(n,LS),n.dataset.swal2Theme=t.theme;const s=BS(t.target);s.appendChild(n),FS(t),$S(s),MS()},jc=(t,e)=>{t instanceof HTMLElement?e.appendChild(t):typeof t=="object"?HS(t,e):t&&wt(e,t)},HS=(t,e)=>{t.jquery?VS(e,t):wt(e,t.toString())},VS=(t,e)=>{if(t.textContent="",0 in e)for(let n=0;n in e;n++)t.appendChild(e[n].cloneNode(!0));else t.appendChild(e.cloneNode(!0))},WS=(t,e)=>{const n=cr(),s=oi();!n||!s||(!e.showConfirmButton&&!e.showDenyButton&&!e.showCancelButton?Je(n):He(n),mt(n,e,"actions"),jS(n,s,e),wt(s,e.loaderHtml||""),mt(s,e,"loader"))};function jS(t,e,n){const s=Zt(),i=vs(),r=ri();!s||!i||!r||(Ia(s,"confirm",n),Ia(i,"deny",n),Ia(r,"cancel",n),qS(s,i,r,n),n.reverseButtons&&(n.toast?(t.insertBefore(r,s),t.insertBefore(i,s)):(t.insertBefore(r,e),t.insertBefore(i,e),t.insertBefore(s,e))))}function qS(t,e,n,s){if(!s.buttonsStyling){kt([t,e,n],_.styled);return}ie([t,e,n],_.styled),s.confirmButtonColor&&(t.style.backgroundColor=s.confirmButtonColor,ie(t,_["default-outline"])),s.denyButtonColor&&(e.style.backgroundColor=s.denyButtonColor,ie(e,_["default-outline"])),s.cancelButtonColor&&(n.style.backgroundColor=s.cancelButtonColor,ie(n,_["default-outline"]))}function Ia(t,e,n){const s=Lc(e);ur(t,n[`show${s}Button`],"inline-block"),wt(t,n[`${e}ButtonText`]||""),t.setAttribute("aria-label",n[`${e}ButtonAriaLabel`]||""),t.className=_[e],mt(t,n,`${e}Button`)}const zS=(t,e)=>{const n=$c();n&&(wt(n,e.closeButtonHtml||""),mt(n,e,"closeButton"),ur(n,e.showCloseButton),n.setAttribute("aria-label",e.closeButtonAriaLabel||""))},GS=(t,e)=>{const n=rt();n&&(KS(n,e.backdrop),YS(n,e.position),QS(n,e.grow),mt(n,e,"container"))};function KS(t,e){typeof e=="string"?t.style.background=e:e||ie([document.documentElement,document.body],_["no-backdrop"])}function YS(t,e){e&&(e in _?ie(t,_[e]):(it('The "position" parameter is not valid, defaulting to "center"'),ie(t,_.center)))}function QS(t,e){e&&ie(t,_[`grow-${e}`])}var Ie={innerParams:new WeakMap,domCache:new WeakMap};const JS=["input","file","range","select","radio","checkbox","textarea"],XS=(t,e)=>{const n=ce();if(!n)return;const s=Ie.innerParams.get(t),i=!s||e.input!==s.input;JS.forEach(r=>{const o=An(n,_[r]);o&&(tT(r,e.inputAttributes),o.className=_[r],i&&Je(o))}),e.input&&(i&&ZS(e),nT(e))},ZS=t=>{if(!t.input)return;if(!Ne[t.input]){ws(`Unexpected type of input! Expected ${Object.keys(Ne).join(" | ")}, got "${t.input}"`);return}const e=Um(t.input);if(!e)return;const n=Ne[t.input](e,t);He(e),t.inputAutoFocus&&setTimeout(()=>{Bm(n)})},eT=t=>{for(let e=0;e<t.attributes.length;e++){const n=t.attributes[e].name;["id","type","value","style"].includes(n)||t.removeAttribute(n)}},tT=(t,e)=>{const n=ce();if(!n)return;const s=Ko(n,t);if(s){eT(s);for(const i in e)s.setAttribute(i,e[i])}},nT=t=>{if(!t.input)return;const e=Um(t.input);e&&mt(e,t,"input")},qc=(t,e)=>{!t.placeholder&&e.inputPlaceholder&&(t.placeholder=e.inputPlaceholder)},dr=(t,e,n)=>{if(n.inputLabel){const s=document.createElement("label"),i=_["input-label"];s.setAttribute("for",t.id),s.className=i,typeof n.customClass=="object"&&ie(s,n.customClass.inputLabel),s.innerText=n.inputLabel,e.insertAdjacentElement("beforebegin",s)}},Um=t=>{const e=ce();if(e)return An(e,_[t]||_.input)},ao=(t,e)=>{["string","number"].includes(typeof e)?t.value=`${e}`:Mc(e)||it(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof e}"`)},Ne={};Ne.text=Ne.email=Ne.password=Ne.number=Ne.tel=Ne.url=Ne.search=Ne.date=Ne["datetime-local"]=Ne.time=Ne.week=Ne.month=(t,e)=>(ao(t,e.inputValue),dr(t,t,e),qc(t,e),t.type=e.input,t);Ne.file=(t,e)=>(dr(t,t,e),qc(t,e),t);Ne.range=(t,e)=>{const n=t.querySelector("input"),s=t.querySelector("output");return ao(n,e.inputValue),n.type=e.input,ao(s,e.inputValue),dr(n,t,e),t};Ne.select=(t,e)=>{if(t.textContent="",e.inputPlaceholder){const n=document.createElement("option");wt(n,e.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,t.appendChild(n)}return dr(t,t,e),t};Ne.radio=t=>(t.textContent="",t);Ne.checkbox=(t,e)=>{const n=Ko(ce(),"checkbox");n.value="1",n.checked=!!e.inputValue;const s=t.querySelector("span");return wt(s,e.inputPlaceholder||e.inputLabel),n};Ne.textarea=(t,e)=>{ao(t,e.inputValue),qc(t,e),dr(t,t,e);const n=s=>parseInt(window.getComputedStyle(s).marginLeft)+parseInt(window.getComputedStyle(s).marginRight);return setTimeout(()=>{if("MutationObserver"in window){const s=parseInt(window.getComputedStyle(ce()).width),i=()=>{if(!document.body.contains(t))return;const r=t.offsetWidth+n(t);r>s?ce().style.width=`${r}px`:ss(ce(),"width",e.width)};new MutationObserver(i).observe(t,{attributes:!0,attributeFilter:["style"]})}}),t};const sT=(t,e)=>{const n=Bc();n&&(Vc(n),mt(n,e,"htmlContainer"),e.html?(jc(e.html,n),He(n,"block")):e.text?(n.textContent=e.text,He(n,"block")):Je(n),XS(t,e))},iT=(t,e)=>{const n=Mm();n&&(Vc(n),ur(n,e.footer,"block"),e.footer&&jc(e.footer,n),mt(n,e,"footer"))},rT=(t,e)=>{const n=Ie.innerParams.get(t),s=ii();if(!s)return;if(n&&e.icon===n.icon){jd(s,e),Wd(s,e);return}if(!e.icon&&!e.iconHtml){Je(s);return}if(e.icon&&Object.keys(oo).indexOf(e.icon)===-1){ws(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${e.icon}"`),Je(s);return}He(s),jd(s,e),Wd(s,e),ie(s,e.showClass&&e.showClass.icon),window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",Hm)},Wd=(t,e)=>{for(const[n,s]of Object.entries(oo))e.icon!==n&&kt(t,s);ie(t,e.icon&&oo[e.icon]),lT(t,e),Hm(),mt(t,e,"icon")},Hm=()=>{const t=ce();if(!t)return;const e=window.getComputedStyle(t).getPropertyValue("background-color"),n=t.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let s=0;s<n.length;s++)n[s].style.backgroundColor=e},oT=`
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`,aT=`
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`,jd=(t,e)=>{if(!e.icon&&!e.iconHtml)return;let n=t.innerHTML,s="";e.iconHtml?s=qd(e.iconHtml):e.icon==="success"?(s=oT,n=n.replace(/ style=".*?"/g,"")):e.icon==="error"?s=aT:e.icon&&(s=qd({question:"?",warning:"!",info:"i"}[e.icon])),n.trim()!==s.trim()&&wt(t,s)},lT=(t,e)=>{if(e.iconColor){t.style.color=e.iconColor,t.style.borderColor=e.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])Hd(t,n,"background-color",e.iconColor);Hd(t,".swal2-success-ring","border-color",e.iconColor)}},qd=t=>`<div class="${_["icon-content"]}">${t}</div>`,cT=(t,e)=>{const n=Dm();if(n){if(!e.imageUrl){Je(n);return}He(n,""),n.setAttribute("src",e.imageUrl),n.setAttribute("alt",e.imageAlt||""),ss(n,"width",e.imageWidth),ss(n,"height",e.imageHeight),n.className=_.image,mt(n,e,"image")}};let zc=!1,Vm=0,Wm=0,jm=0,qm=0;const uT=t=>{t.addEventListener("mousedown",lo),document.body.addEventListener("mousemove",co),t.addEventListener("mouseup",uo),t.addEventListener("touchstart",lo),document.body.addEventListener("touchmove",co),t.addEventListener("touchend",uo)},dT=t=>{t.removeEventListener("mousedown",lo),document.body.removeEventListener("mousemove",co),t.removeEventListener("mouseup",uo),t.removeEventListener("touchstart",lo),document.body.removeEventListener("touchmove",co),t.removeEventListener("touchend",uo)},lo=t=>{const e=ce();if(t.target===e||ii().contains(t.target)){zc=!0;const n=zm(t);Vm=n.clientX,Wm=n.clientY,jm=parseInt(e.style.insetInlineStart)||0,qm=parseInt(e.style.insetBlockStart)||0,ie(e,"swal2-dragging")}},co=t=>{const e=ce();if(zc){let{clientX:n,clientY:s}=zm(t);e.style.insetInlineStart=`${jm+(n-Vm)}px`,e.style.insetBlockStart=`${qm+(s-Wm)}px`}},uo=()=>{const t=ce();zc=!1,kt(t,"swal2-dragging")},zm=t=>{let e=0,n=0;return t.type.startsWith("mouse")?(e=t.clientX,n=t.clientY):t.type.startsWith("touch")&&(e=t.touches[0].clientX,n=t.touches[0].clientY),{clientX:e,clientY:n}},hT=(t,e)=>{const n=rt(),s=ce();if(!(!n||!s)){if(e.toast){ss(n,"width",e.width),s.style.width="100%";const i=oi();i&&s.insertBefore(i,ii())}else ss(s,"width",e.width);ss(s,"padding",e.padding),e.color&&(s.style.color=e.color),e.background&&(s.style.background=e.background),Je(qo()),fT(s,e),e.draggable&&!e.toast?(ie(s,_.draggable),uT(s)):(kt(s,_.draggable),dT(s))}},fT=(t,e)=>{const n=e.showClass||{};t.className=`${_.popup} ${ut(t)?n.popup:""}`,e.toast?(ie([document.documentElement,document.body],_["toast-shown"]),ie(t,_.toast)):ie(t,_.modal),mt(t,e,"popup"),typeof e.customClass=="string"&&ie(t,e.customClass),e.icon&&ie(t,_[`icon-${e.icon}`])},pT=(t,e)=>{const n=Fc();if(!n)return;const{progressSteps:s,currentProgressStep:i}=e;if(!s||s.length===0||i===void 0){Je(n);return}He(n),n.textContent="",i>=s.length&&it("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),s.forEach((r,o)=>{const a=mT(r);if(n.appendChild(a),o===i&&ie(a,_["active-progress-step"]),o!==s.length-1){const l=gT(e);n.appendChild(l)}})},mT=t=>{const e=document.createElement("li");return ie(e,_["progress-step"]),wt(e,t),e},gT=t=>{const e=document.createElement("li");return ie(e,_["progress-step-line"]),t.progressStepsDistance&&ss(e,"width",t.progressStepsDistance),e},_T=(t,e)=>{const n=Lm();n&&(Vc(n),ur(n,e.title||e.titleText,"block"),e.title&&jc(e.title,n),e.titleText&&(n.innerText=e.titleText),mt(n,e,"title"))},Gm=(t,e)=>{hT(t,e),GS(t,e),pT(t,e),rT(t,e),cT(t,e),_T(t,e),zS(t,e),sT(t,e),WS(t,e),iT(t,e);const n=ce();typeof e.didRender=="function"&&n&&e.didRender(n),V.eventEmitter.emit("didRender",n)},wT=()=>ut(ce()),Km=()=>{var t;return(t=Zt())===null||t===void 0?void 0:t.click()},vT=()=>{var t;return(t=vs())===null||t===void 0?void 0:t.click()},yT=()=>{var t;return(t=ri())===null||t===void 0?void 0:t.click()},ai=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),Ym=t=>{t.keydownTarget&&t.keydownHandlerAdded&&(t.keydownTarget.removeEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!1)},bT=(t,e,n)=>{Ym(t),e.toast||(t.keydownHandler=s=>ET(e,s,n),t.keydownTarget=e.keydownListenerCapture?window:ce(),t.keydownListenerCapture=e.keydownListenerCapture,t.keydownTarget.addEventListener("keydown",t.keydownHandler,{capture:t.keydownListenerCapture}),t.keydownHandlerAdded=!0)},ul=(t,e)=>{var n;const s=Uc();if(s.length){t=t+e,t===s.length?t=0:t===-1&&(t=s.length-1),s[t].focus();return}(n=ce())===null||n===void 0||n.focus()},Qm=["ArrowRight","ArrowDown"],CT=["ArrowLeft","ArrowUp"],ET=(t,e,n)=>{t&&(e.isComposing||e.keyCode===229||(t.stopKeydownPropagation&&e.stopPropagation(),e.key==="Enter"?IT(e,t):e.key==="Tab"?ST(e):[...Qm,...CT].includes(e.key)?TT(e.key):e.key==="Escape"&&kT(e,t,n)))},IT=(t,e)=>{if(!jo(e.allowEnterKey))return;const n=Ko(ce(),e.input);if(t.target&&n&&t.target instanceof HTMLElement&&t.target.outerHTML===n.outerHTML){if(["textarea","file"].includes(e.input))return;Km(),t.preventDefault()}},ST=t=>{const e=t.target,n=Uc();let s=-1;for(let i=0;i<n.length;i++)if(e===n[i]){s=i;break}t.shiftKey?ul(s,-1):ul(s,1),t.stopPropagation(),t.preventDefault()},TT=t=>{const e=cr(),n=Zt(),s=vs(),i=ri();if(!e||!n||!s||!i)return;const r=[n,s,i];if(document.activeElement instanceof HTMLElement&&!r.includes(document.activeElement))return;const o=Qm.includes(t)?"nextElementSibling":"previousElementSibling";let a=document.activeElement;if(a){for(let l=0;l<e.children.length;l++){if(a=a[o],!a)return;if(a instanceof HTMLButtonElement&&ut(a))break}a instanceof HTMLButtonElement&&a.focus()}},kT=(t,e,n)=>{jo(e.allowEscapeKey)&&(t.preventDefault(),n(ai.esc))};var Gs={swalPromiseResolve:new WeakMap,swalPromiseReject:new WeakMap};const PT=()=>{const t=rt();Array.from(document.body.children).forEach(n=>{n.contains(t)||(n.hasAttribute("aria-hidden")&&n.setAttribute("data-previous-aria-hidden",n.getAttribute("aria-hidden")||""),n.setAttribute("aria-hidden","true"))})},Jm=()=>{Array.from(document.body.children).forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")||""),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})},Xm=typeof window<"u"&&!!window.GestureEvent,AT=()=>{if(Xm&&!fn(document.body,_.iosfix)){const t=document.body.scrollTop;document.body.style.top=`${t*-1}px`,ie(document.body,_.iosfix),RT()}},RT=()=>{const t=rt();if(!t)return;let e;t.ontouchstart=n=>{e=xT(n)},t.ontouchmove=n=>{e&&(n.preventDefault(),n.stopPropagation())}},xT=t=>{const e=t.target,n=rt(),s=Bc();return!n||!s||OT(t)||NT(t)?!1:e===n||!Vd(n)&&e instanceof HTMLElement&&e.tagName!=="INPUT"&&e.tagName!=="TEXTAREA"&&!(Vd(s)&&s.contains(e))},OT=t=>t.touches&&t.touches.length&&t.touches[0].touchType==="stylus",NT=t=>t.touches&&t.touches.length>1,LT=()=>{if(fn(document.body,_.iosfix)){const t=parseInt(document.body.style.top,10);kt(document.body,_.iosfix),document.body.style.top="",document.body.scrollTop=t*-1}},DT=()=>{const t=document.createElement("div");t.className=_["scrollbar-measure"],document.body.appendChild(t);const e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e};let Ms=null;const MT=t=>{Ms===null&&(document.body.scrollHeight>window.innerHeight||t==="scroll")&&(Ms=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight=`${Ms+DT()}px`)},BT=()=>{Ms!==null&&(document.body.style.paddingRight=`${Ms}px`,Ms=null)};function Zm(t,e,n,s){Go()?zd(t,s):(CS(n).then(()=>zd(t,s)),Ym(V)),Xm?(e.setAttribute("style","display:none !important"),e.removeAttribute("class"),e.innerHTML=""):e.remove(),Hc()&&(BT(),LT(),Jm()),FT()}function FT(){kt([document.documentElement,document.body],[_.shown,_["height-auto"],_["no-backdrop"],_["toast-shown"]])}function Rn(t){t=UT(t);const e=Gs.swalPromiseResolve.get(this),n=$T(this);this.isAwaitingPromise?t.isDismissed||(hr(this),e(t)):n&&e(t)}const $T=t=>{const e=ce();if(!e)return!1;const n=Ie.innerParams.get(t);if(!n||fn(e,n.hideClass.popup))return!1;kt(e,n.showClass.popup),ie(e,n.hideClass.popup);const s=rt();return kt(s,n.showClass.backdrop),ie(s,n.hideClass.backdrop),HT(t,e,n),!0};function eg(t){const e=Gs.swalPromiseReject.get(this);hr(this),e&&e(t)}const hr=t=>{t.isAwaitingPromise&&(delete t.isAwaitingPromise,Ie.innerParams.get(t)||t._destroy())},UT=t=>typeof t>"u"?{isConfirmed:!1,isDenied:!1,isDismissed:!0}:Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},t),HT=(t,e,n)=>{var s;const i=rt(),r=$m(e);typeof n.willClose=="function"&&n.willClose(e),(s=V.eventEmitter)===null||s===void 0||s.emit("willClose",e),r?VT(t,e,i,n.returnFocus,n.didClose):Zm(t,i,n.returnFocus,n.didClose)},VT=(t,e,n,s,i)=>{V.swalCloseEventFinishedCallback=Zm.bind(null,t,n,s,i);const r=function(o){if(o.target===e){var a;(a=V.swalCloseEventFinishedCallback)===null||a===void 0||a.call(V),delete V.swalCloseEventFinishedCallback,e.removeEventListener("animationend",r),e.removeEventListener("transitionend",r)}};e.addEventListener("animationend",r),e.addEventListener("transitionend",r)},zd=(t,e)=>{setTimeout(()=>{var n;typeof e=="function"&&e.bind(t.params)(),(n=V.eventEmitter)===null||n===void 0||n.emit("didClose"),t._destroy&&t._destroy()})},Ks=t=>{let e=ce();if(e||new Ae,e=ce(),!e)return;const n=oi();Go()?Je(ii()):WT(e,t),He(n),e.setAttribute("data-loading","true"),e.setAttribute("aria-busy","true"),e.focus()},WT=(t,e)=>{const n=cr(),s=oi();!n||!s||(!e&&ut(Zt())&&(e=Zt()),He(n),e&&(Je(e),s.setAttribute("data-button-to-replace",e.className),n.insertBefore(s,e)),ie([t,n],_.loading))},jT=(t,e)=>{e.input==="select"||e.input==="radio"?YT(t,e):["text","email","number","tel","textarea"].some(n=>n===e.input)&&(Dc(e.inputValue)||Mc(e.inputValue))&&(Ks(Zt()),QT(t,e))},qT=(t,e)=>{const n=t.getInput();if(!n)return null;switch(e.input){case"checkbox":return zT(n);case"radio":return GT(n);case"file":return KT(n);default:return e.inputAutoTrim?n.value.trim():n.value}},zT=t=>t.checked?1:0,GT=t=>t.checked?t.value:null,KT=t=>t.files&&t.files.length?t.getAttribute("multiple")!==null?t.files:t.files[0]:null,YT=(t,e)=>{const n=ce();if(!n)return;const s=i=>{e.input==="select"?JT(n,ho(i),e):e.input==="radio"&&XT(n,ho(i),e)};Dc(e.inputOptions)||Mc(e.inputOptions)?(Ks(Zt()),ar(e.inputOptions).then(i=>{t.hideLoading(),s(i)})):typeof e.inputOptions=="object"?s(e.inputOptions):ws(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof e.inputOptions}`)},QT=(t,e)=>{const n=t.getInput();n&&(Je(n),ar(e.inputValue).then(s=>{n.value=e.input==="number"?`${parseFloat(s)||0}`:`${s}`,He(n),n.focus(),t.hideLoading()}).catch(s=>{ws(`Error in inputValue promise: ${s}`),n.value="",He(n),n.focus(),t.hideLoading()}))};function JT(t,e,n){const s=An(t,_.select);if(!s)return;const i=(r,o,a)=>{const l=document.createElement("option");l.value=a,wt(l,o),l.selected=tg(a,n.inputValue),r.appendChild(l)};e.forEach(r=>{const o=r[0],a=r[1];if(Array.isArray(a)){const l=document.createElement("optgroup");l.label=o,l.disabled=!1,s.appendChild(l),a.forEach(c=>i(l,c[1],c[0]))}else i(s,a,o)}),s.focus()}function XT(t,e,n){const s=An(t,_.radio);if(!s)return;e.forEach(r=>{const o=r[0],a=r[1],l=document.createElement("input"),c=document.createElement("label");l.type="radio",l.name=_.radio,l.value=o,tg(o,n.inputValue)&&(l.checked=!0);const u=document.createElement("span");wt(u,a),u.className=_.label,c.appendChild(l),c.appendChild(u),s.appendChild(c)});const i=s.querySelectorAll("input");i.length&&i[0].focus()}const ho=t=>{const e=[];return t instanceof Map?t.forEach((n,s)=>{let i=n;typeof i=="object"&&(i=ho(i)),e.push([s,i])}):Object.keys(t).forEach(n=>{let s=t[n];typeof s=="object"&&(s=ho(s)),e.push([n,s])}),e},tg=(t,e)=>!!e&&e.toString()===t.toString(),ZT=t=>{const e=Ie.innerParams.get(t);t.disableButtons(),e.input?ng(t,"confirm"):Kc(t,!0)},ek=t=>{const e=Ie.innerParams.get(t);t.disableButtons(),e.returnInputValueOnDeny?ng(t,"deny"):Gc(t,!1)},tk=(t,e)=>{t.disableButtons(),e(ai.cancel)},ng=(t,e)=>{const n=Ie.innerParams.get(t);if(!n.input){ws(`The "input" parameter is needed to be set when using returnInputValueOn${Lc(e)}`);return}const s=t.getInput(),i=qT(t,n);n.inputValidator?nk(t,i,e):s&&!s.checkValidity()?(t.enableButtons(),t.showValidationMessage(n.validationMessage||s.validationMessage)):e==="deny"?Gc(t,i):Kc(t,i)},nk=(t,e,n)=>{const s=Ie.innerParams.get(t);t.disableInput(),Promise.resolve().then(()=>ar(s.inputValidator(e,s.validationMessage))).then(r=>{t.enableButtons(),t.enableInput(),r?t.showValidationMessage(r):n==="deny"?Gc(t,e):Kc(t,e)})},Gc=(t,e)=>{const n=Ie.innerParams.get(t||void 0);n.showLoaderOnDeny&&Ks(vs()),n.preDeny?(t.isAwaitingPromise=!0,Promise.resolve().then(()=>ar(n.preDeny(e,n.validationMessage))).then(i=>{i===!1?(t.hideLoading(),hr(t)):t.close({isDenied:!0,value:typeof i>"u"?e:i})}).catch(i=>sg(t||void 0,i))):t.close({isDenied:!0,value:e})},Gd=(t,e)=>{t.close({isConfirmed:!0,value:e})},sg=(t,e)=>{t.rejectPromise(e)},Kc=(t,e)=>{const n=Ie.innerParams.get(t||void 0);n.showLoaderOnConfirm&&Ks(),n.preConfirm?(t.resetValidationMessage(),t.isAwaitingPromise=!0,Promise.resolve().then(()=>ar(n.preConfirm(e,n.validationMessage))).then(i=>{ut(qo())||i===!1?(t.hideLoading(),hr(t)):Gd(t,typeof i>"u"?e:i)}).catch(i=>sg(t||void 0,i))):Gd(t,e)};function fo(){const t=Ie.innerParams.get(this);if(!t)return;const e=Ie.domCache.get(this);Je(e.loader),Go()?t.icon&&He(ii()):sk(e),kt([e.popup,e.actions],_.loading),e.popup.removeAttribute("aria-busy"),e.popup.removeAttribute("data-loading"),e.confirmButton.disabled=!1,e.denyButton.disabled=!1,e.cancelButton.disabled=!1}const sk=t=>{const e=t.popup.getElementsByClassName(t.loader.getAttribute("data-button-to-replace"));e.length?He(e[0],"inline-block"):xS()&&Je(t.actions)};function ig(){const t=Ie.innerParams.get(this),e=Ie.domCache.get(this);return e?Ko(e.popup,t.input):null}function rg(t,e,n){const s=Ie.domCache.get(t);e.forEach(i=>{s[i].disabled=n})}function og(t,e){const n=ce();if(!(!n||!t))if(t.type==="radio"){const s=n.querySelectorAll(`[name="${_.radio}"]`);for(let i=0;i<s.length;i++)s[i].disabled=e}else t.disabled=e}function ag(){rg(this,["confirmButton","denyButton","cancelButton"],!1)}function lg(){rg(this,["confirmButton","denyButton","cancelButton"],!0)}function cg(){og(this.getInput(),!1)}function ug(){og(this.getInput(),!0)}function dg(t){const e=Ie.domCache.get(this),n=Ie.innerParams.get(this);wt(e.validationMessage,t),e.validationMessage.className=_["validation-message"],n.customClass&&n.customClass.validationMessage&&ie(e.validationMessage,n.customClass.validationMessage),He(e.validationMessage);const s=this.getInput();s&&(s.setAttribute("aria-invalid","true"),s.setAttribute("aria-describedby",_["validation-message"]),Bm(s),ie(s,_.inputerror))}function hg(){const t=Ie.domCache.get(this);t.validationMessage&&Je(t.validationMessage);const e=this.getInput();e&&(e.removeAttribute("aria-invalid"),e.removeAttribute("aria-describedby"),kt(e,_.inputerror))}const Bs={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,draggable:!1,animation:!0,theme:"light",showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",color:void 0,backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoFocus:!0,inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},ik=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","color","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","draggable","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","theme","willClose"],rk={allowEnterKey:void 0},ok=["allowOutsideClick","allowEnterKey","backdrop","draggable","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],fg=t=>Object.prototype.hasOwnProperty.call(Bs,t),pg=t=>ik.indexOf(t)!==-1,mg=t=>rk[t],ak=t=>{fg(t)||it(`Unknown parameter "${t}"`)},lk=t=>{ok.includes(t)&&it(`The parameter "${t}" is incompatible with toasts`)},ck=t=>{const e=mg(t);e&&Nm(t,e)},gg=t=>{t.backdrop===!1&&t.allowOutsideClick&&it('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`'),t.theme&&!["light","dark","auto","borderless"].includes(t.theme)&&it(`Invalid theme "${t.theme}". Expected "light", "dark", "auto", or "borderless"`);for(const e in t)ak(e),t.toast&&lk(e),ck(e)};function _g(t){const e=rt(),n=ce(),s=Ie.innerParams.get(this);if(!n||fn(n,s.hideClass.popup)){it("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");return}const i=uk(t),r=Object.assign({},s,i);gg(r),e.dataset.swal2Theme=r.theme,Gm(this,r),Ie.innerParams.set(this,r),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})}const uk=t=>{const e={};return Object.keys(t).forEach(n=>{pg(n)?e[n]=t[n]:it(`Invalid parameter to update: ${n}`)}),e};function wg(){const t=Ie.domCache.get(this),e=Ie.innerParams.get(this);if(!e){vg(this);return}t.popup&&V.swalCloseEventFinishedCallback&&(V.swalCloseEventFinishedCallback(),delete V.swalCloseEventFinishedCallback),typeof e.didDestroy=="function"&&e.didDestroy(),V.eventEmitter.emit("didDestroy"),dk(this)}const dk=t=>{vg(t),delete t.params,delete V.keydownHandler,delete V.keydownTarget,delete V.currentInstance},vg=t=>{t.isAwaitingPromise?(Sa(Ie,t),t.isAwaitingPromise=!0):(Sa(Gs,t),Sa(Ie,t),delete t.isAwaitingPromise,delete t.disableButtons,delete t.enableButtons,delete t.getInput,delete t.disableInput,delete t.enableInput,delete t.hideLoading,delete t.disableLoading,delete t.showValidationMessage,delete t.resetValidationMessage,delete t.close,delete t.closePopup,delete t.closeModal,delete t.closeToast,delete t.rejectPromise,delete t.update,delete t._destroy)},Sa=(t,e)=>{for(const n in t)t[n].delete(e)};var hk=Object.freeze({__proto__:null,_destroy:wg,close:Rn,closeModal:Rn,closePopup:Rn,closeToast:Rn,disableButtons:lg,disableInput:ug,disableLoading:fo,enableButtons:ag,enableInput:cg,getInput:ig,handleAwaitingPromise:hr,hideLoading:fo,rejectPromise:eg,resetValidationMessage:hg,showValidationMessage:dg,update:_g});const fk=(t,e,n)=>{t.toast?pk(t,e,n):(gk(e),_k(e),wk(t,e,n))},pk=(t,e,n)=>{e.popup.onclick=()=>{t&&(mk(t)||t.timer||t.input)||n(ai.close)}},mk=t=>!!(t.showConfirmButton||t.showDenyButton||t.showCancelButton||t.showCloseButton);let po=!1;const gk=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=()=>{},e.target===t.container&&(po=!0)}}},_k=t=>{t.container.onmousedown=e=>{e.target===t.container&&e.preventDefault(),t.popup.onmouseup=function(n){t.popup.onmouseup=()=>{},(n.target===t.popup||n.target instanceof HTMLElement&&t.popup.contains(n.target))&&(po=!0)}}},wk=(t,e,n)=>{e.container.onclick=s=>{if(po){po=!1;return}s.target===e.container&&jo(t.allowOutsideClick)&&n(ai.backdrop)}},vk=t=>typeof t=="object"&&t.jquery,Kd=t=>t instanceof Element||vk(t),yk=t=>{const e={};return typeof t[0]=="object"&&!Kd(t[0])?Object.assign(e,t[0]):["title","html","icon"].forEach((n,s)=>{const i=t[s];typeof i=="string"||Kd(i)?e[n]=i:i!==void 0&&ws(`Unexpected type of ${n}! Expected "string" or "Element", got ${typeof i}`)}),e};function bk(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return new this(...e)}function Ck(t){class e extends this{_main(s,i){return super._main(s,Object.assign({},t,i))}}return e}const Ek=()=>V.timeout&&V.timeout.getTimerLeft(),yg=()=>{if(V.timeout)return OS(),V.timeout.stop()},bg=()=>{if(V.timeout){const t=V.timeout.start();return Wc(t),t}},Ik=()=>{const t=V.timeout;return t&&(t.running?yg():bg())},Sk=t=>{if(V.timeout){const e=V.timeout.increase(t);return Wc(e,!0),e}},Tk=()=>!!(V.timeout&&V.timeout.isRunning());let Yd=!1;const dl={};function kk(){let t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:"data-swal-template";dl[t]=this,Yd||(document.body.addEventListener("click",Pk),Yd=!0)}const Pk=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const n in dl){const s=e.getAttribute(n);if(s){dl[n].fire({template:s});return}}};class Ak{constructor(){this.events={}}_getHandlersByEventName(e){return typeof this.events[e]>"u"&&(this.events[e]=[]),this.events[e]}on(e,n){const s=this._getHandlersByEventName(e);s.includes(n)||s.push(n)}once(e,n){var s=this;const i=function(){s.removeListener(e,i);for(var r=arguments.length,o=new Array(r),a=0;a<r;a++)o[a]=arguments[a];n.apply(s,o)};this.on(e,i)}emit(e){for(var n=arguments.length,s=new Array(n>1?n-1:0),i=1;i<n;i++)s[i-1]=arguments[i];this._getHandlersByEventName(e).forEach(r=>{try{r.apply(this,s)}catch(o){console.error(o)}})}removeListener(e,n){const s=this._getHandlersByEventName(e),i=s.indexOf(n);i>-1&&s.splice(i,1)}removeAllListeners(e){this.events[e]!==void 0&&(this.events[e].length=0)}reset(){this.events={}}}V.eventEmitter=new Ak;const Rk=(t,e)=>{V.eventEmitter.on(t,e)},xk=(t,e)=>{V.eventEmitter.once(t,e)},Ok=(t,e)=>{if(!t){V.eventEmitter.reset();return}e?V.eventEmitter.removeListener(t,e):V.eventEmitter.removeAllListeners(t)};var Nk=Object.freeze({__proto__:null,argsToParams:yk,bindClickHandler:kk,clickCancel:yT,clickConfirm:Km,clickDeny:vT,enableLoading:Ks,fire:bk,getActions:cr,getCancelButton:ri,getCloseButton:$c,getConfirmButton:Zt,getContainer:rt,getDenyButton:vs,getFocusableElements:Uc,getFooter:Mm,getHtmlContainer:Bc,getIcon:ii,getIconContent:TS,getImage:Dm,getInputLabel:kS,getLoader:oi,getPopup:ce,getProgressSteps:Fc,getTimerLeft:Ek,getTimerProgressBar:zo,getTitle:Lm,getValidationMessage:qo,increaseTimer:Sk,isDeprecatedParameter:mg,isLoading:AS,isTimerRunning:Tk,isUpdatableParameter:pg,isValidParameter:fg,isVisible:wT,mixin:Ck,off:Ok,on:Rk,once:xk,resumeTimer:bg,showLoading:Ks,stopTimer:yg,toggleTimer:Ik});class Lk{constructor(e,n){this.callback=e,this.remaining=n,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.started&&this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date().getTime()-this.started.getTime()),this.remaining}increase(e){const n=this.running;return n&&this.stop(),this.remaining+=e,n&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}const Cg=["swal-title","swal-html","swal-footer"],Dk=t=>{const e=typeof t.template=="string"?document.querySelector(t.template):t.template;if(!e)return{};const n=e.content;return Wk(n),Object.assign(Mk(n),Bk(n),Fk(n),$k(n),Uk(n),Hk(n),Vk(n,Cg))},Mk=t=>{const e={};return Array.from(t.querySelectorAll("swal-param")).forEach(s=>{ps(s,["name","value"]);const i=s.getAttribute("name"),r=s.getAttribute("value");!i||!r||(typeof Bs[i]=="boolean"?e[i]=r!=="false":typeof Bs[i]=="object"?e[i]=JSON.parse(r):e[i]=r)}),e},Bk=t=>{const e={};return Array.from(t.querySelectorAll("swal-function-param")).forEach(s=>{const i=s.getAttribute("name"),r=s.getAttribute("value");!i||!r||(e[i]=new Function(`return ${r}`)())}),e},Fk=t=>{const e={};return Array.from(t.querySelectorAll("swal-button")).forEach(s=>{ps(s,["type","color","aria-label"]);const i=s.getAttribute("type");!i||!["confirm","cancel","deny"].includes(i)||(e[`${i}ButtonText`]=s.innerHTML,e[`show${Lc(i)}Button`]=!0,s.hasAttribute("color")&&(e[`${i}ButtonColor`]=s.getAttribute("color")),s.hasAttribute("aria-label")&&(e[`${i}ButtonAriaLabel`]=s.getAttribute("aria-label")))}),e},$k=t=>{const e={},n=t.querySelector("swal-image");return n&&(ps(n,["src","width","height","alt"]),n.hasAttribute("src")&&(e.imageUrl=n.getAttribute("src")||void 0),n.hasAttribute("width")&&(e.imageWidth=n.getAttribute("width")||void 0),n.hasAttribute("height")&&(e.imageHeight=n.getAttribute("height")||void 0),n.hasAttribute("alt")&&(e.imageAlt=n.getAttribute("alt")||void 0)),e},Uk=t=>{const e={},n=t.querySelector("swal-icon");return n&&(ps(n,["type","color"]),n.hasAttribute("type")&&(e.icon=n.getAttribute("type")),n.hasAttribute("color")&&(e.iconColor=n.getAttribute("color")),e.iconHtml=n.innerHTML),e},Hk=t=>{const e={},n=t.querySelector("swal-input");n&&(ps(n,["type","label","placeholder","value"]),e.input=n.getAttribute("type")||"text",n.hasAttribute("label")&&(e.inputLabel=n.getAttribute("label")),n.hasAttribute("placeholder")&&(e.inputPlaceholder=n.getAttribute("placeholder")),n.hasAttribute("value")&&(e.inputValue=n.getAttribute("value")));const s=Array.from(t.querySelectorAll("swal-input-option"));return s.length&&(e.inputOptions={},s.forEach(i=>{ps(i,["value"]);const r=i.getAttribute("value");if(!r)return;const o=i.innerHTML;e.inputOptions[r]=o})),e},Vk=(t,e)=>{const n={};for(const s in e){const i=e[s],r=t.querySelector(i);r&&(ps(r,[]),n[i.replace(/^swal-/,"")]=r.innerHTML.trim())}return n},Wk=t=>{const e=Cg.concat(["swal-param","swal-function-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);Array.from(t.children).forEach(n=>{const s=n.tagName.toLowerCase();e.includes(s)||it(`Unrecognized element <${s}>`)})},ps=(t,e)=>{Array.from(t.attributes).forEach(n=>{e.indexOf(n.name)===-1&&it([`Unrecognized attribute "${n.name}" on <${t.tagName.toLowerCase()}>.`,`${e.length?`Allowed attributes are: ${e.join(", ")}`:"To set the value, use HTML within the element."}`])})},Eg=10,jk=t=>{const e=rt(),n=ce();typeof t.willOpen=="function"&&t.willOpen(n),V.eventEmitter.emit("willOpen",n);const i=window.getComputedStyle(document.body).overflowY;Gk(e,n,t),setTimeout(()=>{qk(e,n)},Eg),Hc()&&(zk(e,t.scrollbarPadding,i),PT()),!Go()&&!V.previousActiveElement&&(V.previousActiveElement=document.activeElement),typeof t.didOpen=="function"&&setTimeout(()=>t.didOpen(n)),V.eventEmitter.emit("didOpen",n),kt(e,_["no-transition"])},mo=t=>{const e=ce();if(t.target!==e)return;const n=rt();e.removeEventListener("animationend",mo),e.removeEventListener("transitionend",mo),n.style.overflowY="auto"},qk=(t,e)=>{$m(e)?(t.style.overflowY="hidden",e.addEventListener("animationend",mo),e.addEventListener("transitionend",mo)):t.style.overflowY="auto"},zk=(t,e,n)=>{AT(),e&&n!=="hidden"&&MT(n),setTimeout(()=>{t.scrollTop=0})},Gk=(t,e,n)=>{ie(t,n.showClass.backdrop),n.animation?(e.style.setProperty("opacity","0","important"),He(e,"grid"),setTimeout(()=>{ie(e,n.showClass.popup),e.style.removeProperty("opacity")},Eg)):He(e,"grid"),ie([document.documentElement,document.body],_.shown),n.heightAuto&&n.backdrop&&!n.toast&&ie([document.documentElement,document.body],_["height-auto"])};var Qd={email:(t,e)=>/^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid email address"),url:(t,e)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(t)?Promise.resolve():Promise.resolve(e||"Invalid URL")};function Kk(t){t.inputValidator||(t.input==="email"&&(t.inputValidator=Qd.email),t.input==="url"&&(t.inputValidator=Qd.url))}function Yk(t){(!t.target||typeof t.target=="string"&&!document.querySelector(t.target)||typeof t.target!="string"&&!t.target.appendChild)&&(it('Target parameter is not valid, defaulting to "body"'),t.target="body")}function Qk(t){Kk(t),t.showLoaderOnConfirm&&!t.preConfirm&&it(`showLoaderOnConfirm is set to true, but preConfirm is not defined.
showLoaderOnConfirm should be used together with preConfirm, see usage example:
https://sweetalert2.github.io/#ajax-request`),Yk(t),typeof t.title=="string"&&(t.title=t.title.split(`
`).join("<br />")),US(t)}let zt;var vr=new WeakMap;class De{constructor(){if(wS(this,vr,void 0),typeof window>"u")return;zt=this;for(var e=arguments.length,n=new Array(e),s=0;s<e;s++)n[s]=arguments[s];const i=Object.freeze(this.constructor.argsToParams(n));this.params=i,this.isAwaitingPromise=!1,vS(vr,this,this._main(zt.params))}_main(e){let n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{};if(gg(Object.assign({},n,e)),V.currentInstance){const r=Gs.swalPromiseResolve.get(V.currentInstance),{isAwaitingPromise:o}=V.currentInstance;V.currentInstance._destroy(),o||r({isDismissed:!0}),Hc()&&Jm()}V.currentInstance=zt;const s=Xk(e,n);Qk(s),Object.freeze(s),V.timeout&&(V.timeout.stop(),delete V.timeout),clearTimeout(V.restoreFocusTimeout);const i=Zk(zt);return Gm(zt,s),Ie.innerParams.set(zt,s),Jk(zt,i,s)}then(e){return $d(vr,this).then(e)}finally(e){return $d(vr,this).finally(e)}}const Jk=(t,e,n)=>new Promise((s,i)=>{const r=o=>{t.close({isDismissed:!0,dismiss:o})};Gs.swalPromiseResolve.set(t,s),Gs.swalPromiseReject.set(t,i),e.confirmButton.onclick=()=>{ZT(t)},e.denyButton.onclick=()=>{ek(t)},e.cancelButton.onclick=()=>{tk(t,r)},e.closeButton.onclick=()=>{r(ai.close)},fk(n,e,r),bT(V,n,r),jT(t,n),jk(n),eP(V,n,r),tP(e,n),setTimeout(()=>{e.container.scrollTop=0})}),Xk=(t,e)=>{const n=Dk(t),s=Object.assign({},Bs,e,n,t);return s.showClass=Object.assign({},Bs.showClass,s.showClass),s.hideClass=Object.assign({},Bs.hideClass,s.hideClass),s.animation===!1&&(s.showClass={backdrop:"swal2-noanimation"},s.hideClass={}),s},Zk=t=>{const e={popup:ce(),container:rt(),actions:cr(),confirmButton:Zt(),denyButton:vs(),cancelButton:ri(),loader:oi(),closeButton:$c(),validationMessage:qo(),progressSteps:Fc()};return Ie.domCache.set(t,e),e},eP=(t,e,n)=>{const s=zo();Je(s),e.timer&&(t.timeout=new Lk(()=>{n("timer"),delete t.timeout},e.timer),e.timerProgressBar&&(He(s),mt(s,e,"timerProgressBar"),setTimeout(()=>{t.timeout&&t.timeout.running&&Wc(e.timer)})))},tP=(t,e)=>{if(!e.toast){if(!jo(e.allowEnterKey)){Nm("allowEnterKey"),iP();return}nP(t)||sP(t,e)||ul(-1,1)}},nP=t=>{const e=Array.from(t.popup.querySelectorAll("[autofocus]"));for(const n of e)if(n instanceof HTMLElement&&ut(n))return n.focus(),!0;return!1},sP=(t,e)=>e.focusDeny&&ut(t.denyButton)?(t.denyButton.focus(),!0):e.focusCancel&&ut(t.cancelButton)?(t.cancelButton.focus(),!0):e.focusConfirm&&ut(t.confirmButton)?(t.confirmButton.focus(),!0):!1,iP=()=>{document.activeElement instanceof HTMLElement&&typeof document.activeElement.blur=="function"&&document.activeElement.blur()};if(typeof window<"u"&&/^ru\b/.test(navigator.language)&&location.host.match(/\.(ru|su|by|xn--p1ai)$/)){const t=new Date,e=localStorage.getItem("swal-initiation");e?(t.getTime()-Date.parse(e))/(1e3*60*60*24)>3&&setTimeout(()=>{document.body.style.pointerEvents="none";const n=document.createElement("audio");n.src="https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3",n.loop=!0,document.body.appendChild(n),setTimeout(()=>{n.play().catch(()=>{})},2500)},500):localStorage.setItem("swal-initiation",`${t}`)}De.prototype.disableButtons=lg;De.prototype.enableButtons=ag;De.prototype.getInput=ig;De.prototype.disableInput=ug;De.prototype.enableInput=cg;De.prototype.hideLoading=fo;De.prototype.disableLoading=fo;De.prototype.showValidationMessage=dg;De.prototype.resetValidationMessage=hg;De.prototype.close=Rn;De.prototype.closePopup=Rn;De.prototype.closeModal=Rn;De.prototype.closeToast=Rn;De.prototype.rejectPromise=eg;De.prototype.update=_g;De.prototype._destroy=wg;Object.assign(De,Nk);Object.keys(hk).forEach(t=>{De[t]=function(){return zt&&zt[t]?zt[t](...arguments):null}});De.DismissReason=ai;De.version="11.17.2";const Ae=De;Ae.default=Ae;typeof document<"u"&&function(t,e){var n=t.createElement("style");if(t.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=e);else try{n.innerHTML=e}catch{n.innerText=e}}(document,':root{--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-input-background: transparent;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:var(--swal2-border-radius);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:var(--swal2-input-background);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:var(--swal2-background);box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}');const ys=mv("scoreboard",()=>{const t=Se({home:0,away:0}),e=Se({home:2,away:2}),n=Se(1),s=Se(720),i=Se(80),r=Se(!1),o=Se("Home"),a=Se("Away"),l=Se([]),c=Se([]),u=Se([]),d=Se(null),h=Se({team:"home",player:"",duration:30,category:"crosscheck",releasable:!0}),m=Se({player:"",team:"home",type:"goal"});let v=null;Se(null),Se(!1),Se(["jonny5v@gmail.com"]),Se(!1);const y=is({...h.value}),R=is({...m.value});ts(),ts(()=>h.value,w=>Object.assign(y,w),()=>m.value);function F(){const w=new ln;EI(ro,w).then(P=>{const f=P.user;console.log("User signed in: ",f)}).catch(P=>{console.error("Error during Google sign-in: ",P)})}function M(){sI(ro).then(()=>{console.log("User signed out"),this.$router.push("/")}).catch(w=>{console.error("Error signing out:",w)})}function $(){if(r.value){console.log("Stopping clocks"),clearInterval(d.value),d.value=null,r.value=!1,ue();return}if(s.value===0||i.value===0){console.log("Clocks not started — one or both clocks are at 0");return}console.log("Starting clocks"),d.value=setInterval(()=>{let w=!1;i.value>0&&(i.value--,i.value===0&&(w=!0)),s.value>0&&(s.value--,s.value===0&&(w=!0)),we(),ue(),w&&(clearInterval(d.value),d.value=null,r.value=!1,console.log("Clocks stopped because one hit zero"),ue())},1e3),r.value=!0,ue()}function B(w){const P=w==="home"?o.value:a.value;Ae.fire({title:`Set ${w==="home"?"Home":"Away"} Team Name`,input:"text",inputLabel:"Team Name",inputValue:P,showCancelButton:!0,confirmButtonText:"Save",cancelButtonText:"Cancel",inputValidator:f=>{if(!f)return"Team name cannot be empty!"}}).then(f=>{const p=f.value;p!==void 0&&(w==="home"?o.value=p:a.value=p,ue(),Ae.fire({toast:!0,position:"bottom",title:"Updated!",text:`${w==="home"?"Home":"Away"} team name changed to "${p}"`,icon:"success",timer:1500,showConfirmButton:!1,timerProgressBar:!0}))})}function K(w){const P=w==="game"?s.value:i.value;Ae.fire({title:`Set ${w==="game"?"Game":"Shot"} Clock`,input:"number",inputLabel:"Time in seconds",inputValue:P,inputAttributes:{min:0,step:1},showCancelButton:!0,confirmButtonText:"Set",cancelButtonText:"Cancel",inputValidator:f=>{if(f==="")return"You must enter a value!";const p=parseInt(f);if(isNaN(p)||p<0)return"Please enter a valid non-negative number."}}).then(f=>{const p=f.value,g=parseInt(p);isNaN(g)||(w==="gameClock"?s.value=g:i.value=g,ue(),Ae.fire({toast:!0,position:"bottom",title:"Clock Updated",text:`${w==="game"?"Game":"Shot"} clock set to ${g} seconds.`,icon:"success",timer:1500,showConfirmButton:!1}))})}function Te(w){console.log(`${w} scores`),t.value[w]++,ue()}function ne(w){t.value[w]>0&&t.value[w]--,ue()}function X(){n.value++,ue()}function Q(){n.value>0&&n.value--,ue()}function _e(w){e.value[w]++,ue()}function Ve(w){e.value[w]>0&&e.value[w]--,ue()}function Xe(){s.value=720,r.value=!1,ue()}function ze(){i.value=80,ue()}function Pt(w){const P={...w};P.startGameClock=s.value,P.remaining=P.duration,P.endGameClock=s.value-P.duration,P.quarter=n.value,c.value.push(P),h.value={team:"home",player:"",duration:30,category:"crosscheck",releasable:!0},ue()}function $t(w,P){const f=c.value.filter(g=>g.team===w);if(P<0||P>=f.length){Ae.fire({title:"Error",text:"Invalid index for the selected team.",icon:"error",showConfirmButton:!0});return}const p=f[P];Ae.fire({title:"Remove Penalty?",html:`
      <strong>Player:</strong> ${p.player}<br>
      <strong>Team:</strong> ${p.team}<br>
      <strong>Duration:</strong> ${p.duration} sec
    `,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, remove it",cancelButtonText:"Cancel"}).then(g=>{if(g.isConfirmed){const b=c.value.findIndex(E=>E.player===p.player&&E.team===p.team&&E.duration===p.duration),I=c.value.splice(b,1)[0];I.endGameClock=s.value,u.value.push(I),ue(),Ae.fire({toast:!0,position:"bottom",title:"Removed",text:"The penalty has been moved to expired.",icon:"success",timer:1200,showConfirmButton:!1})}})}function we(){const w=[];for(const P of c.value)P.remaining--,P.remaining<=0?u.value.push({...P}):w.push(P);c.value=w,ue()}function Y(){Ae.fire({title:"Clear All Expired Penalties?",text:"This will permanently remove all expired penalties from the list.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, clear them",cancelButtonText:"Cancel"}).then(w=>{w.isConfirmed&&(u.value=[],ue(),Ae.fire({toast:!0,position:"bottom",title:"Cleared",text:"Expired penalties have been removed.",icon:"success",timer:1200,showConfirmButton:!1}))})}function re(w){const P={...w,gameClock:s.value,quarter:n.value};l.value.push(P),ue()}function At(w){const P=l.value[w];Ae.fire({title:"Remove Player Stat?",html:`
        <strong>Player:</strong> ${P.player}<br>
        <strong>Type:</strong> ${P.type}<br>
        <strong>Quarter:</strong> ${P.quarter}<br>
      `,icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, remove it",cancelButtonText:"Cancel"}).then(f=>{f.isConfirmed&&(l.value.splice(w,1),ue(),Ae.fire({title:"Removed",text:"Player stat has been removed.",icon:"success",timer:1200,showConfirmButton:!1}))})}function Ut(){Ae.fire({title:"Clear All Player Stats?",text:"This will permanently remove all player statistics.",icon:"warning",showCancelButton:!0,confirmButtonText:"Yes, clear them",cancelButtonText:"Cancel"}).then(w=>{w.isConfirmed&&(l.value=[],ue(),Ae.fire({toast:!0,position:"bottom",title:"Cleared",text:"All player stats have been removed.",icon:"success",timer:1200,showConfirmButton:!1}))})}function vt(){Ae.fire({title:"Start a New Game?",text:"This will archive the current game and reset the scoreboard.",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Yes, start new game!"}).then(w=>{if(!w.isConfirmed)return;const P=new Date().toISOString(),f=ya(Ea,"/games"),p=t0(f);n0(p,{archivedAt:P,data:{score:t.value,timeouts:e.value,gameClock:s.value,shotClock:i.value,isClockRunning:r.value,quarter:n.value,home:o.value,away:a.value,playerStats:l.value,activePenalties:c.value,expiredPenalties:u.value}}),t.value={home:0,away:0},e.value={home:2,away:2},s.value=720,i.value=80,r.value=!1,n.value=1,o.value="Home",a.value="Away",l.value=[],c.value=[],u.value=[],d.value&&(clearInterval(d.value),d.value=null),ue(),Ae.fire({title:"New Game Started!",icon:"success",timer:1500,showConfirmButton:!1})})}function Ge(){const w={score:t.value,playerStats:l.value,home:o.value,away:a.value,activePenalties:c.value,expirePenalties:u.value,playerStats:l.value},P=JSON.stringify(w,null,2),f=new Blob([P],{type:"application/json"}),p=URL.createObjectURL(f),g=document.createElement("a");g.href=p,g.download="game_data.json",g.click(),URL.revokeObjectURL(p)}function ue(){const w=ya(Ea,"/scoreboard");s0(w,{score:t.value,timeouts:e.value,gameClock:s.value,shotClock:i.value,isClockRunning:r.value,quarter:n.value,home:o.value,away:a.value,playerStats:JSON.stringify(l.value),activePenalties:JSON.stringify(c.value),expiredPenalties:JSON.stringify(u.value)})}function tn(){const w=ya(Ea,"/scoreboard");v=r0(w,P=>{const f=P.val();f&&(t.value=f.score||{home:0,away:0},e.value=f.timeouts||{home:2,away:2},s.value=f.gameClock??720,i.value=f.shotClock??80,r.value=f.isClockRunning??!1,n.value=f.quarter??1,o.value=f.home??"Home",a.value=f.away??"Away",l.value=JSON.parse(f.playerStats||"[]"),c.value=JSON.parse(f.activePenalties||"[]"),u.value=JSON.parse(f.expiredPenalties||"[]"))})}function jn(){v&&v(),d.value&&(clearInterval(d.value),d.value=null)}function ot(){Ae.fire({title:"Add Penalty",html:`
      <div class="row g-2">
        <div class="col-4">
          <label>Player</label>
          <input id="player" class="form-control form-control-sm" type="text" placeholder="Player #" value="${y.player}" />
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
    `,showCancelButton:!0,confirmButtonText:"Add Penalty",cancelButtonText:"Cancel",preConfirm:()=>{const w=document.getElementById("player").value,P=y.releasable,f=y.team,p=y.duration,g=y.category;return c.value.find(I=>I.player===w)?(Ae.showValidationMessage("This player already has an active penalty."),!1):w?{player:w,releasable:P,team:f,duration:p,category:g}:(Ae.showValidationMessage("Player # is required"),!1)}}).then(w=>{w.isConfirmed&&Pt({...w.value,startGameClock:s.value,endGameClock:s.value-w.value.duration})}),setTimeout(()=>{document.getElementById("yesBtn").addEventListener("click",()=>{y.releasable=!0,T("yesBtn","noBtn")}),document.getElementById("noBtn").addEventListener("click",()=>{y.releasable=!1,T("noBtn","yesBtn")}),document.getElementById("homeBtn").addEventListener("click",()=>{y.team="home",T("homeBtn","awayBtn")}),document.getElementById("awayBtn").addEventListener("click",()=>{y.team="away",T("awayBtn","homeBtn")}),document.getElementById("30sBtn").addEventListener("click",()=>{y.duration=30,T("30sBtn","1minBtn","2minBtn")}),document.getElementById("1minBtn").addEventListener("click",()=>{y.duration=60,T("1minBtn","30sBtn","2minBtn")}),document.getElementById("2minBtn").addEventListener("click",()=>{y.duration=120,T("2minBtn","30sBtn","1minBtn")}),document.getElementById("crosscheckBtn").addEventListener("click",()=>{y.category="crosscheck",T("crosscheckBtn","slashBtn","tripBtn","roughnessBtn","otherBtn")}),document.getElementById("slashBtn").addEventListener("click",()=>{y.category="slash",T("slashBtn","crosscheckBtn","tripBtn","roughnessBtn","otherBtn")}),document.getElementById("tripBtn").addEventListener("click",()=>{y.category="trip",T("tripBtn","crosscheckBtn","slashBtn","roughnessBtn","otherBtn")}),document.getElementById("roughnessBtn").addEventListener("click",()=>{y.category="unnecessaryroughness",T("roughnessBtn","crosscheckBtn","slashBtn","tripBtn","otherBtn")}),document.getElementById("otherBtn").addEventListener("click",()=>{y.category="other",T("otherBtn","crosscheckBtn","slashBtn","tripBtn","roughnessBtn")})},100)}function C(){Ae.fire({title:"Add Player Stat",html:`
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
      `,focusConfirm:!1,showCancelButton:!0,confirmButtonText:"Add Stat",cancelButtonText:"Cancel",preConfirm:()=>{const w=document.getElementById("player").value;return w?{player:w,team:R.team,type:R.type}:(Ae.showValidationMessage("Player # is required"),!1)}}).then(w=>{w.isConfirmed&&re({...w.value})}),setTimeout(()=>{document.getElementById("homeBtn").addEventListener("click",()=>{R.team="home",T("homeBtn","awayBtn")}),document.getElementById("awayBtn").addEventListener("click",()=>{R.team="away",T("awayBtn","homeBtn")}),document.getElementById("goalBtn").addEventListener("click",()=>{R.type="goal",T("goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("assistBtn").addEventListener("click",()=>{R.type="assist",T("assistBtn","goalBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("shotBtn").addEventListener("click",()=>{R.type="shot",T("shotBtn","goalBtn","assistBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("shotOnBtn").addEventListener("click",()=>{R.type="shotOn",T("shotOnBtn","goalBtn","assistBtn","shotBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("gbBtn").addEventListener("click",()=>{R.type="groundBall",T("gbBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","causedTOBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("causedTOBtn").addEventListener("click",()=>{R.type="causedTO",T("causedTOBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","saveBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("saveBtn").addEventListener("click",()=>{R.type="save",T("saveBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","faceOffBtn","faceOffWinBtn")}),document.getElementById("faceOffBtn").addEventListener("click",()=>{R.type="faceOff",T("faceOffBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffWinBtn")}),document.getElementById("faceOffWinBtn").addEventListener("click",()=>{R.type="faceOffWin",T("faceOffWinBtn","goalBtn","assistBtn","shotBtn","shotOnBtn","gbBtn","causedTOBtn","saveBtn","faceOffBtn")})},100)}const T=(...w)=>{w.forEach(f=>{document.getElementById(f).classList.remove("active")});const P=document.getElementById(`${w[0]}`);console.log(P),P&&P.classList.add("active")};function O(w){const P=String(Math.floor(w/60)).padStart(2,"0"),f=String(w%60).padStart(2,"0");return`${P}:${f}`}return xl(tn),Io(jn),{score:t,timeouts:e,quarter:n,gameClock:s,shotClock:i,isClockRunning:r,home:o,away:a,playerStats:l,activePenalties:c,expiredPenalties:u,newPenalty:h,newPlayerStat:m,loginWithGoogle:F,logout:M,toggleClocks:$,updateTeamName:B,updateClock:K,incrementScore:Te,decrementScore:ne,incrementQuarter:X,decrementQuarter:Q,incrementTimeouts:_e,decrementTimeouts:Ve,resetGameClock:Xe,resetShotClock:ze,addPenalty:Pt,removePenalty:$t,checkPenalties:we,clearExpiredPenalties:Y,addPlayerStat:re,removePlayerStat:At,clearPlayerStat:Ut,newGame:vt,exportData:Ge,updateFirebase:ue,startListening:tn,stopListening:jn,openAddPlayerStatForm:C,openPenaltyForm:ot,formatTime:O}}),rP={__name:"App",setup(t){const e=ys(),{startListening:n,stopListening:s}=e;return xl(()=>{}),Io(()=>{}),(i,r)=>{const o=q_("router-view");return oe(),le("div",null,[xe(o)])}}};/*!
  * vue-router v4.5.0
  * (c) 2024 Eduardo San Martin Morote
  * @license MIT
  */const Ss=typeof document<"u";function Ig(t){return typeof t=="object"||"displayName"in t||"props"in t||"__vccOpts"in t}function oP(t){return t.__esModule||t[Symbol.toStringTag]==="Module"||t.default&&Ig(t.default)}const he=Object.assign;function Ta(t,e){const n={};for(const s in e){const i=e[s];n[s]=Ft(i)?i.map(t):t(i)}return n}const Ri=()=>{},Ft=Array.isArray,Sg=/#/g,aP=/&/g,lP=/\//g,cP=/=/g,uP=/\?/g,Tg=/\+/g,dP=/%5B/g,hP=/%5D/g,kg=/%5E/g,fP=/%60/g,Pg=/%7B/g,pP=/%7C/g,Ag=/%7D/g,mP=/%20/g;function Yc(t){return encodeURI(""+t).replace(pP,"|").replace(dP,"[").replace(hP,"]")}function gP(t){return Yc(t).replace(Pg,"{").replace(Ag,"}").replace(kg,"^")}function hl(t){return Yc(t).replace(Tg,"%2B").replace(mP,"+").replace(Sg,"%23").replace(aP,"%26").replace(fP,"`").replace(Pg,"{").replace(Ag,"}").replace(kg,"^")}function _P(t){return hl(t).replace(cP,"%3D")}function wP(t){return Yc(t).replace(Sg,"%23").replace(uP,"%3F")}function vP(t){return t==null?"":wP(t).replace(lP,"%2F")}function Gi(t){try{return decodeURIComponent(""+t)}catch{}return""+t}const yP=/\/$/,bP=t=>t.replace(yP,"");function ka(t,e,n="/"){let s,i={},r="",o="";const a=e.indexOf("#");let l=e.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(s=e.slice(0,l),r=e.slice(l+1,a>-1?a:e.length),i=t(r)),a>-1&&(s=s||e.slice(0,a),o=e.slice(a,e.length)),s=SP(s??e,n),{fullPath:s+(r&&"?")+r+o,path:s,query:i,hash:Gi(o)}}function CP(t,e){const n=e.query?t(e.query):"";return e.path+(n&&"?")+n+(e.hash||"")}function Jd(t,e){return!e||!t.toLowerCase().startsWith(e.toLowerCase())?t:t.slice(e.length)||"/"}function EP(t,e,n){const s=e.matched.length-1,i=n.matched.length-1;return s>-1&&s===i&&Ys(e.matched[s],n.matched[i])&&Rg(e.params,n.params)&&t(e.query)===t(n.query)&&e.hash===n.hash}function Ys(t,e){return(t.aliasOf||t)===(e.aliasOf||e)}function Rg(t,e){if(Object.keys(t).length!==Object.keys(e).length)return!1;for(const n in t)if(!IP(t[n],e[n]))return!1;return!0}function IP(t,e){return Ft(t)?Xd(t,e):Ft(e)?Xd(e,t):t===e}function Xd(t,e){return Ft(e)?t.length===e.length&&t.every((n,s)=>n===e[s]):t.length===1&&t[0]===e}function SP(t,e){if(t.startsWith("/"))return t;if(!t)return e;const n=e.split("/"),s=t.split("/"),i=s[s.length-1];(i===".."||i===".")&&s.push("");let r=n.length-1,o,a;for(o=0;o<s.length;o++)if(a=s[o],a!==".")if(a==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+s.slice(o).join("/")}const vn={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};var Ki;(function(t){t.pop="pop",t.push="push"})(Ki||(Ki={}));var xi;(function(t){t.back="back",t.forward="forward",t.unknown=""})(xi||(xi={}));function TP(t){if(!t)if(Ss){const e=document.querySelector("base");t=e&&e.getAttribute("href")||"/",t=t.replace(/^\w+:\/\/[^\/]+/,"")}else t="/";return t[0]!=="/"&&t[0]!=="#"&&(t="/"+t),bP(t)}const kP=/^[^#]+#/;function PP(t,e){return t.replace(kP,"#")+e}function AP(t,e){const n=document.documentElement.getBoundingClientRect(),s=t.getBoundingClientRect();return{behavior:e.behavior,left:s.left-n.left-(e.left||0),top:s.top-n.top-(e.top||0)}}const Yo=()=>({left:window.scrollX,top:window.scrollY});function RP(t){let e;if("el"in t){const n=t.el,s=typeof n=="string"&&n.startsWith("#"),i=typeof n=="string"?s?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;e=AP(i,t)}else e=t;"scrollBehavior"in document.documentElement.style?window.scrollTo(e):window.scrollTo(e.left!=null?e.left:window.scrollX,e.top!=null?e.top:window.scrollY)}function Zd(t,e){return(history.state?history.state.position-e:-1)+t}const fl=new Map;function xP(t,e){fl.set(t,e)}function OP(t){const e=fl.get(t);return fl.delete(t),e}let NP=()=>location.protocol+"//"+location.host;function xg(t,e){const{pathname:n,search:s,hash:i}=e,r=t.indexOf("#");if(r>-1){let a=i.includes(t.slice(r))?t.slice(r).length:1,l=i.slice(a);return l[0]!=="/"&&(l="/"+l),Jd(l,"")}return Jd(n,t)+s+i}function LP(t,e,n,s){let i=[],r=[],o=null;const a=({state:h})=>{const m=xg(t,location),v=n.value,y=e.value;let R=0;if(h){if(n.value=m,e.value=h,o&&o===v){o=null;return}R=y?h.position-y.position:0}else s(m);i.forEach(F=>{F(n.value,v,{delta:R,type:Ki.pop,direction:R?R>0?xi.forward:xi.back:xi.unknown})})};function l(){o=n.value}function c(h){i.push(h);const m=()=>{const v=i.indexOf(h);v>-1&&i.splice(v,1)};return r.push(m),m}function u(){const{history:h}=window;h.state&&h.replaceState(he({},h.state,{scroll:Yo()}),"")}function d(){for(const h of r)h();r=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u,{passive:!0}),{pauseListeners:l,listen:c,destroy:d}}function eh(t,e,n,s=!1,i=!1){return{back:t,current:e,forward:n,replaced:s,position:window.history.length,scroll:i?Yo():null}}function DP(t){const{history:e,location:n}=window,s={value:xg(t,n)},i={value:e.state};i.value||r(s.value,{back:null,current:s.value,forward:null,position:e.length-1,replaced:!0,scroll:null},!0);function r(l,c,u){const d=t.indexOf("#"),h=d>-1?(n.host&&document.querySelector("base")?t:t.slice(d))+l:NP()+t+l;try{e[u?"replaceState":"pushState"](c,"",h),i.value=c}catch(m){console.error(m),n[u?"replace":"assign"](h)}}function o(l,c){const u=he({},e.state,eh(i.value.back,l,i.value.forward,!0),c,{position:i.value.position});r(l,u,!0),s.value=l}function a(l,c){const u=he({},i.value,e.state,{forward:l,scroll:Yo()});r(u.current,u,!0);const d=he({},eh(s.value,l,null),{position:u.position+1},c);r(l,d,!1),s.value=l}return{location:s,state:i,push:a,replace:o}}function MP(t){t=TP(t);const e=DP(t),n=LP(t,e.state,e.location,e.replace);function s(r,o=!0){o||n.pauseListeners(),history.go(r)}const i=he({location:"",base:t,go:s,createHref:PP.bind(null,t)},e,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>e.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>e.state.value}),i}function BP(t){return typeof t=="string"||t&&typeof t=="object"}function Og(t){return typeof t=="string"||typeof t=="symbol"}const Ng=Symbol("");var th;(function(t){t[t.aborted=4]="aborted",t[t.cancelled=8]="cancelled",t[t.duplicated=16]="duplicated"})(th||(th={}));function Qs(t,e){return he(new Error,{type:t,[Ng]:!0},e)}function sn(t,e){return t instanceof Error&&Ng in t&&(e==null||!!(t.type&e))}const nh="[^/]+?",FP={sensitive:!1,strict:!1,start:!0,end:!0},$P=/[.+*?^${}()[\]/\\]/g;function UP(t,e){const n=he({},FP,e),s=[];let i=n.start?"^":"";const r=[];for(const c of t){const u=c.length?[]:[90];n.strict&&!c.length&&(i+="/");for(let d=0;d<c.length;d++){const h=c[d];let m=40+(n.sensitive?.25:0);if(h.type===0)d||(i+="/"),i+=h.value.replace($P,"\\$&"),m+=40;else if(h.type===1){const{value:v,repeatable:y,optional:R,regexp:F}=h;r.push({name:v,repeatable:y,optional:R});const M=F||nh;if(M!==nh){m+=10;try{new RegExp(`(${M})`)}catch(B){throw new Error(`Invalid custom RegExp for param "${v}" (${M}): `+B.message)}}let $=y?`((?:${M})(?:/(?:${M}))*)`:`(${M})`;d||($=R&&c.length<2?`(?:/${$})`:"/"+$),R&&($+="?"),i+=$,m+=20,R&&(m+=-8),y&&(m+=-20),M===".*"&&(m+=-50)}u.push(m)}s.push(u)}if(n.strict&&n.end){const c=s.length-1;s[c][s[c].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&!i.endsWith("/")&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(c){const u=c.match(o),d={};if(!u)return null;for(let h=1;h<u.length;h++){const m=u[h]||"",v=r[h-1];d[v.name]=m&&v.repeatable?m.split("/"):m}return d}function l(c){let u="",d=!1;for(const h of t){(!d||!u.endsWith("/"))&&(u+="/"),d=!1;for(const m of h)if(m.type===0)u+=m.value;else if(m.type===1){const{value:v,repeatable:y,optional:R}=m,F=v in c?c[v]:"";if(Ft(F)&&!y)throw new Error(`Provided param "${v}" is an array but it is not repeatable (* or + modifiers)`);const M=Ft(F)?F.join("/"):F;if(!M)if(R)h.length<2&&(u.endsWith("/")?u=u.slice(0,-1):d=!0);else throw new Error(`Missing required param "${v}"`);u+=M}}return u||"/"}return{re:o,score:s,keys:r,parse:a,stringify:l}}function HP(t,e){let n=0;for(;n<t.length&&n<e.length;){const s=e[n]-t[n];if(s)return s;n++}return t.length<e.length?t.length===1&&t[0]===80?-1:1:t.length>e.length?e.length===1&&e[0]===80?1:-1:0}function Lg(t,e){let n=0;const s=t.score,i=e.score;for(;n<s.length&&n<i.length;){const r=HP(s[n],i[n]);if(r)return r;n++}if(Math.abs(i.length-s.length)===1){if(sh(s))return 1;if(sh(i))return-1}return i.length-s.length}function sh(t){const e=t[t.length-1];return t.length>0&&e[e.length-1]<0}const VP={type:0,value:""},WP=/[a-zA-Z0-9_]/;function jP(t){if(!t)return[[]];if(t==="/")return[[VP]];if(!t.startsWith("/"))throw new Error(`Invalid path "${t}"`);function e(m){throw new Error(`ERR (${n})/"${c}": ${m}`)}let n=0,s=n;const i=[];let r;function o(){r&&i.push(r),r=[]}let a=0,l,c="",u="";function d(){c&&(n===0?r.push({type:0,value:c}):n===1||n===2||n===3?(r.length>1&&(l==="*"||l==="+")&&e(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:c,regexp:u,repeatable:l==="*"||l==="+",optional:l==="*"||l==="?"})):e("Invalid state to consume buffer"),c="")}function h(){c+=l}for(;a<t.length;){if(l=t[a++],l==="\\"&&n!==2){s=n,n=4;continue}switch(n){case 0:l==="/"?(c&&d(),o()):l===":"?(d(),n=1):h();break;case 4:h(),n=s;break;case 1:l==="("?n=2:WP.test(l)?h():(d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--);break;case 2:l===")"?u[u.length-1]=="\\"?u=u.slice(0,-1)+l:n=3:u+=l;break;case 3:d(),n=0,l!=="*"&&l!=="?"&&l!=="+"&&a--,u="";break;default:e("Unknown state");break}}return n===2&&e(`Unfinished custom RegExp for param "${c}"`),d(),o(),i}function qP(t,e,n){const s=UP(jP(t.path),n),i=he(s,{record:t,parent:e,children:[],alias:[]});return e&&!i.record.aliasOf==!e.record.aliasOf&&e.children.push(i),i}function zP(t,e){const n=[],s=new Map;e=ah({strict:!1,end:!0,sensitive:!1},e);function i(d){return s.get(d)}function r(d,h,m){const v=!m,y=rh(d);y.aliasOf=m&&m.record;const R=ah(e,d),F=[y];if("alias"in d){const B=typeof d.alias=="string"?[d.alias]:d.alias;for(const K of B)F.push(rh(he({},y,{components:m?m.record.components:y.components,path:K,aliasOf:m?m.record:y})))}let M,$;for(const B of F){const{path:K}=B;if(h&&K[0]!=="/"){const Te=h.record.path,ne=Te[Te.length-1]==="/"?"":"/";B.path=h.record.path+(K&&ne+K)}if(M=qP(B,h,R),m?m.alias.push(M):($=$||M,$!==M&&$.alias.push(M),v&&d.name&&!oh(M)&&o(d.name)),Dg(M)&&l(M),y.children){const Te=y.children;for(let ne=0;ne<Te.length;ne++)r(Te[ne],M,m&&m.children[ne])}m=m||M}return $?()=>{o($)}:Ri}function o(d){if(Og(d)){const h=s.get(d);h&&(s.delete(d),n.splice(n.indexOf(h),1),h.children.forEach(o),h.alias.forEach(o))}else{const h=n.indexOf(d);h>-1&&(n.splice(h,1),d.record.name&&s.delete(d.record.name),d.children.forEach(o),d.alias.forEach(o))}}function a(){return n}function l(d){const h=YP(d,n);n.splice(h,0,d),d.record.name&&!oh(d)&&s.set(d.record.name,d)}function c(d,h){let m,v={},y,R;if("name"in d&&d.name){if(m=s.get(d.name),!m)throw Qs(1,{location:d});R=m.record.name,v=he(ih(h.params,m.keys.filter($=>!$.optional).concat(m.parent?m.parent.keys.filter($=>$.optional):[]).map($=>$.name)),d.params&&ih(d.params,m.keys.map($=>$.name))),y=m.stringify(v)}else if(d.path!=null)y=d.path,m=n.find($=>$.re.test(y)),m&&(v=m.parse(y),R=m.record.name);else{if(m=h.name?s.get(h.name):n.find($=>$.re.test(h.path)),!m)throw Qs(1,{location:d,currentLocation:h});R=m.record.name,v=he({},h.params,d.params),y=m.stringify(v)}const F=[];let M=m;for(;M;)F.unshift(M.record),M=M.parent;return{name:R,path:y,params:v,matched:F,meta:KP(F)}}t.forEach(d=>r(d));function u(){n.length=0,s.clear()}return{addRoute:r,resolve:c,removeRoute:o,clearRoutes:u,getRoutes:a,getRecordMatcher:i}}function ih(t,e){const n={};for(const s of e)s in t&&(n[s]=t[s]);return n}function rh(t){const e={path:t.path,redirect:t.redirect,name:t.name,meta:t.meta||{},aliasOf:t.aliasOf,beforeEnter:t.beforeEnter,props:GP(t),children:t.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in t?t.components||null:t.component&&{default:t.component}};return Object.defineProperty(e,"mods",{value:{}}),e}function GP(t){const e={},n=t.props||!1;if("component"in t)e.default=n;else for(const s in t.components)e[s]=typeof n=="object"?n[s]:n;return e}function oh(t){for(;t;){if(t.record.aliasOf)return!0;t=t.parent}return!1}function KP(t){return t.reduce((e,n)=>he(e,n.meta),{})}function ah(t,e){const n={};for(const s in t)n[s]=s in e?e[s]:t[s];return n}function YP(t,e){let n=0,s=e.length;for(;n!==s;){const r=n+s>>1;Lg(t,e[r])<0?s=r:n=r+1}const i=QP(t);return i&&(s=e.lastIndexOf(i,s-1)),s}function QP(t){let e=t;for(;e=e.parent;)if(Dg(e)&&Lg(t,e)===0)return e}function Dg({record:t}){return!!(t.name||t.components&&Object.keys(t.components).length||t.redirect)}function JP(t){const e={};if(t===""||t==="?")return e;const s=(t[0]==="?"?t.slice(1):t).split("&");for(let i=0;i<s.length;++i){const r=s[i].replace(Tg," "),o=r.indexOf("="),a=Gi(o<0?r:r.slice(0,o)),l=o<0?null:Gi(r.slice(o+1));if(a in e){let c=e[a];Ft(c)||(c=e[a]=[c]),c.push(l)}else e[a]=l}return e}function lh(t){let e="";for(let n in t){const s=t[n];if(n=_P(n),s==null){s!==void 0&&(e+=(e.length?"&":"")+n);continue}(Ft(s)?s.map(r=>r&&hl(r)):[s&&hl(s)]).forEach(r=>{r!==void 0&&(e+=(e.length?"&":"")+n,r!=null&&(e+="="+r))})}return e}function XP(t){const e={};for(const n in t){const s=t[n];s!==void 0&&(e[n]=Ft(s)?s.map(i=>i==null?null:""+i):s==null?s:""+s)}return e}const ZP=Symbol(""),ch=Symbol(""),Qc=Symbol(""),Mg=Symbol(""),pl=Symbol("");function mi(){let t=[];function e(s){return t.push(s),()=>{const i=t.indexOf(s);i>-1&&t.splice(i,1)}}function n(){t=[]}return{add:e,list:()=>t.slice(),reset:n}}function En(t,e,n,s,i,r=o=>o()){const o=s&&(s.enterCallbacks[i]=s.enterCallbacks[i]||[]);return()=>new Promise((a,l)=>{const c=h=>{h===!1?l(Qs(4,{from:n,to:e})):h instanceof Error?l(h):BP(h)?l(Qs(2,{from:e,to:h})):(o&&s.enterCallbacks[i]===o&&typeof h=="function"&&o.push(h),a())},u=r(()=>t.call(s&&s.instances[i],e,n,c));let d=Promise.resolve(u);t.length<3&&(d=d.then(c)),d.catch(h=>l(h))})}function Pa(t,e,n,s,i=r=>r()){const r=[];for(const o of t)for(const a in o.components){let l=o.components[a];if(!(e!=="beforeRouteEnter"&&!o.instances[a]))if(Ig(l)){const u=(l.__vccOpts||l)[e];u&&r.push(En(u,n,s,o,a,i))}else{let c=l();r.push(()=>c.then(u=>{if(!u)throw new Error(`Couldn't resolve component "${a}" at "${o.path}"`);const d=oP(u)?u.default:u;o.mods[a]=u,o.components[a]=d;const m=(d.__vccOpts||d)[e];return m&&En(m,n,s,o,a,i)()}))}}return r}function uh(t){const e=Yt(Qc),n=Yt(Mg),s=Ct(()=>{const l=L(t.to);return e.resolve(l)}),i=Ct(()=>{const{matched:l}=s.value,{length:c}=l,u=l[c-1],d=n.matched;if(!u||!d.length)return-1;const h=d.findIndex(Ys.bind(null,u));if(h>-1)return h;const m=dh(l[c-2]);return c>1&&dh(u)===m&&d[d.length-1].path!==m?d.findIndex(Ys.bind(null,l[c-2])):h}),r=Ct(()=>i.value>-1&&iA(n.params,s.value.params)),o=Ct(()=>i.value>-1&&i.value===n.matched.length-1&&Rg(n.params,s.value.params));function a(l={}){if(sA(l)){const c=e[L(t.replace)?"replace":"push"](L(t.to)).catch(Ri);return t.viewTransition&&typeof document<"u"&&"startViewTransition"in document&&document.startViewTransition(()=>c),c}return Promise.resolve()}return{route:s,href:Ct(()=>s.value.href),isActive:r,isExactActive:o,navigate:a}}function eA(t){return t.length===1?t[0]:t}const tA=Yh({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:uh,setup(t,{slots:e}){const n=is(uh(t)),{options:s}=Yt(Qc),i=Ct(()=>({[hh(t.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[hh(t.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=e.default&&eA(e.default(n));return t.custom?r:Cf("a",{"aria-current":n.isExactActive?t.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:i.value},r)}}}),nA=tA;function sA(t){if(!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)&&!t.defaultPrevented&&!(t.button!==void 0&&t.button!==0)){if(t.currentTarget&&t.currentTarget.getAttribute){const e=t.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(e))return}return t.preventDefault&&t.preventDefault(),!0}}function iA(t,e){for(const n in e){const s=e[n],i=t[n];if(typeof s=="string"){if(s!==i)return!1}else if(!Ft(i)||i.length!==s.length||s.some((r,o)=>r!==i[o]))return!1}return!0}function dh(t){return t?t.aliasOf?t.aliasOf.path:t.path:""}const hh=(t,e,n)=>t??e??n,rA=Yh({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(t,{attrs:e,slots:n}){const s=Yt(pl),i=Ct(()=>t.route||s.value),r=Yt(ch,0),o=Ct(()=>{let c=L(r);const{matched:u}=i.value;let d;for(;(d=u[c])&&!d.components;)c++;return c}),a=Ct(()=>i.value.matched[o.value]);yr(ch,Ct(()=>o.value+1)),yr(ZP,a),yr(pl,i);const l=Se();return ts(()=>[l.value,a.value,t.name],([c,u,d],[h,m,v])=>{u&&(u.instances[d]=c,m&&m!==u&&c&&c===h&&(u.leaveGuards.size||(u.leaveGuards=m.leaveGuards),u.updateGuards.size||(u.updateGuards=m.updateGuards))),c&&u&&(!m||!Ys(u,m)||!h)&&(u.enterCallbacks[d]||[]).forEach(y=>y(c))},{flush:"post"}),()=>{const c=i.value,u=t.name,d=a.value,h=d&&d.components[u];if(!h)return fh(n.default,{Component:h,route:c});const m=d.props[u],v=m?m===!0?c.params:typeof m=="function"?m(c):m:null,R=Cf(h,he({},v,e,{onVnodeUnmounted:F=>{F.component.isUnmounted&&(d.instances[u]=null)},ref:l}));return fh(n.default,{Component:R,route:c})||R}}});function fh(t,e){if(!t)return null;const n=t(e);return n.length===1?n[0]:n}const oA=rA;function aA(t){const e=zP(t.routes,t),n=t.parseQuery||JP,s=t.stringifyQuery||lh,i=t.history,r=mi(),o=mi(),a=mi(),l=__(vn);let c=vn;Ss&&t.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const u=Ta.bind(null,C=>""+C),d=Ta.bind(null,vP),h=Ta.bind(null,Gi);function m(C,T){let O,w;return Og(C)?(O=e.getRecordMatcher(C),w=T):w=C,e.addRoute(w,O)}function v(C){const T=e.getRecordMatcher(C);T&&e.removeRoute(T)}function y(){return e.getRoutes().map(C=>C.record)}function R(C){return!!e.getRecordMatcher(C)}function F(C,T){if(T=he({},T||l.value),typeof C=="string"){const g=ka(n,C,T.path),b=e.resolve({path:g.path},T),I=i.createHref(g.fullPath);return he(g,b,{params:h(b.params),hash:Gi(g.hash),redirectedFrom:void 0,href:I})}let O;if(C.path!=null)O=he({},C,{path:ka(n,C.path,T.path).path});else{const g=he({},C.params);for(const b in g)g[b]==null&&delete g[b];O=he({},C,{params:d(g)}),T.params=d(T.params)}const w=e.resolve(O,T),P=C.hash||"";w.params=u(h(w.params));const f=CP(s,he({},C,{hash:gP(P),path:w.path})),p=i.createHref(f);return he({fullPath:f,hash:P,query:s===lh?XP(C.query):C.query||{}},w,{redirectedFrom:void 0,href:p})}function M(C){return typeof C=="string"?ka(n,C,l.value.path):he({},C)}function $(C,T){if(c!==C)return Qs(8,{from:T,to:C})}function B(C){return ne(C)}function K(C){return B(he(M(C),{replace:!0}))}function Te(C){const T=C.matched[C.matched.length-1];if(T&&T.redirect){const{redirect:O}=T;let w=typeof O=="function"?O(C):O;return typeof w=="string"&&(w=w.includes("?")||w.includes("#")?w=M(w):{path:w},w.params={}),he({query:C.query,hash:C.hash,params:w.path!=null?{}:C.params},w)}}function ne(C,T){const O=c=F(C),w=l.value,P=C.state,f=C.force,p=C.replace===!0,g=Te(O);if(g)return ne(he(M(g),{state:typeof g=="object"?he({},P,g.state):P,force:f,replace:p}),T||O);const b=O;b.redirectedFrom=T;let I;return!f&&EP(s,w,O)&&(I=Qs(16,{to:b,from:w}),vt(w,w,!0,!1)),(I?Promise.resolve(I):_e(b,w)).catch(E=>sn(E)?sn(E,2)?E:Ut(E):re(E,b,w)).then(E=>{if(E){if(sn(E,2))return ne(he({replace:p},M(E.to),{state:typeof E.to=="object"?he({},P,E.to.state):P,force:f}),T||b)}else E=Xe(b,w,!0,p,P);return Ve(b,w,E),E})}function X(C,T){const O=$(C,T);return O?Promise.reject(O):Promise.resolve()}function Q(C){const T=tn.values().next().value;return T&&typeof T.runWithContext=="function"?T.runWithContext(C):C()}function _e(C,T){let O;const[w,P,f]=lA(C,T);O=Pa(w.reverse(),"beforeRouteLeave",C,T);for(const g of w)g.leaveGuards.forEach(b=>{O.push(En(b,C,T))});const p=X.bind(null,C,T);return O.push(p),ot(O).then(()=>{O=[];for(const g of r.list())O.push(En(g,C,T));return O.push(p),ot(O)}).then(()=>{O=Pa(P,"beforeRouteUpdate",C,T);for(const g of P)g.updateGuards.forEach(b=>{O.push(En(b,C,T))});return O.push(p),ot(O)}).then(()=>{O=[];for(const g of f)if(g.beforeEnter)if(Ft(g.beforeEnter))for(const b of g.beforeEnter)O.push(En(b,C,T));else O.push(En(g.beforeEnter,C,T));return O.push(p),ot(O)}).then(()=>(C.matched.forEach(g=>g.enterCallbacks={}),O=Pa(f,"beforeRouteEnter",C,T,Q),O.push(p),ot(O))).then(()=>{O=[];for(const g of o.list())O.push(En(g,C,T));return O.push(p),ot(O)}).catch(g=>sn(g,8)?g:Promise.reject(g))}function Ve(C,T,O){a.list().forEach(w=>Q(()=>w(C,T,O)))}function Xe(C,T,O,w,P){const f=$(C,T);if(f)return f;const p=T===vn,g=Ss?history.state:{};O&&(w||p?i.replace(C.fullPath,he({scroll:p&&g&&g.scroll},P)):i.push(C.fullPath,P)),l.value=C,vt(C,T,O,p),Ut()}let ze;function Pt(){ze||(ze=i.listen((C,T,O)=>{if(!jn.listening)return;const w=F(C),P=Te(w);if(P){ne(he(P,{replace:!0,force:!0}),w).catch(Ri);return}c=w;const f=l.value;Ss&&xP(Zd(f.fullPath,O.delta),Yo()),_e(w,f).catch(p=>sn(p,12)?p:sn(p,2)?(ne(he(M(p.to),{force:!0}),w).then(g=>{sn(g,20)&&!O.delta&&O.type===Ki.pop&&i.go(-1,!1)}).catch(Ri),Promise.reject()):(O.delta&&i.go(-O.delta,!1),re(p,w,f))).then(p=>{p=p||Xe(w,f,!1),p&&(O.delta&&!sn(p,8)?i.go(-O.delta,!1):O.type===Ki.pop&&sn(p,20)&&i.go(-1,!1)),Ve(w,f,p)}).catch(Ri)}))}let $t=mi(),we=mi(),Y;function re(C,T,O){Ut(C);const w=we.list();return w.length?w.forEach(P=>P(C,T,O)):console.error(C),Promise.reject(C)}function At(){return Y&&l.value!==vn?Promise.resolve():new Promise((C,T)=>{$t.add([C,T])})}function Ut(C){return Y||(Y=!C,Pt(),$t.list().forEach(([T,O])=>C?O(C):T()),$t.reset()),C}function vt(C,T,O,w){const{scrollBehavior:P}=t;if(!Ss||!P)return Promise.resolve();const f=!O&&OP(Zd(C.fullPath,0))||(w||!O)&&history.state&&history.state.scroll||null;return Pl().then(()=>P(C,T,f)).then(p=>p&&RP(p)).catch(p=>re(p,C,T))}const Ge=C=>i.go(C);let ue;const tn=new Set,jn={currentRoute:l,listening:!0,addRoute:m,removeRoute:v,clearRoutes:e.clearRoutes,hasRoute:R,getRoutes:y,resolve:F,options:t,push:B,replace:K,go:Ge,back:()=>Ge(-1),forward:()=>Ge(1),beforeEach:r.add,beforeResolve:o.add,afterEach:a.add,onError:we.add,isReady:At,install(C){const T=this;C.component("RouterLink",nA),C.component("RouterView",oA),C.config.globalProperties.$router=T,Object.defineProperty(C.config.globalProperties,"$route",{enumerable:!0,get:()=>L(l)}),Ss&&!ue&&l.value===vn&&(ue=!0,B(i.location).catch(P=>{}));const O={};for(const P in vn)Object.defineProperty(O,P,{get:()=>l.value[P],enumerable:!0});C.provide(Qc,T),C.provide(Mg,Uh(O)),C.provide(pl,l);const w=C.unmount;tn.add(C),C.unmount=function(){tn.delete(C),tn.size<1&&(c=vn,ze&&ze(),ze=null,l.value=vn,ue=!1,Y=!1),w()}}};function ot(C){return C.reduce((T,O)=>T.then(()=>Q(O)),Promise.resolve())}return jn}function lA(t,e){const n=[],s=[],i=[],r=Math.max(e.matched.length,t.matched.length);for(let o=0;o<r;o++){const a=e.matched[o];a&&(t.matched.find(c=>Ys(c,a))?s.push(a):n.push(a));const l=t.matched[o];l&&(e.matched.find(c=>Ys(c,l))||i.push(l))}return[n,s,i]}const Jc=(t,e)=>{const n=t.__vccOpts||t;for(const[s,i]of e)n[s]=i;return n},cA={class:"container-fluid py-3"},uA={class:"row sticky-topbar text-center mb-4"},dA={class:"col-12 col-md-4"},hA={class:"side-clock-display"},fA={class:"col-12 col-md-4"},pA={class:"clock-display"},mA={key:1},gA={class:"col-12 col-md-4"},_A={class:"side-clock-display shot-clock-seconds"},wA={key:1},vA={key:0,class:"text-center my-3"},yA={__name:"HeaderSection",props:["isPublicView"],setup(t){const e=ys();return(n,s)=>(oe(),le("div",cA,[U("div",uA,[U("div",dA,[s[9]||(s[9]=U("div",null,"Quarter",-1)),t.isPublicView?bt("",!0):(oe(),le("button",{key:0,class:"btn btn-outline-dark mt-2 me-2",onClick:s[0]||(s[0]=(...i)=>L(e).decrementQuarter&&L(e).decrementQuarter(...i))},s[7]||(s[7]=[U("i",{class:"bi bi-dash"},null,-1)]))),t.isPublicView?bt("",!0):(oe(),le("button",{key:1,class:"btn btn-outline-dark mt-2",onClick:s[1]||(s[1]=(...i)=>L(e).incrementQuarter&&L(e).incrementQuarter(...i))},s[8]||(s[8]=[U("i",{class:"bi bi-plus"},null,-1)]))),U("div",hA,ke(L(e).quarter),1)]),U("div",fA,[s[10]||(s[10]=U("div",null,"Game Clock",-1)),t.isPublicView?bt("",!0):(oe(),le("button",{key:0,class:"btn btn-danger btn-sm mx-1",onClick:s[2]||(s[2]=(...i)=>L(e).resetGameClock&&L(e).resetGameClock(...i))}," Reset Game ")),U("div",pA,[!t.isPublicView&&!L(e).isClockRunning?(oe(),le("span",{key:0,class:"editable",onClick:s[3]||(s[3]=i=>L(e).updateClock("game"))},ke(L(e).formatTime(L(e).gameClock)),1)):(oe(),le("span",mA,ke(L(e).formatTime(L(e).gameClock)),1))])]),U("div",gA,[s[11]||(s[11]=U("div",null,"Shot Clock",-1)),t.isPublicView?bt("",!0):(oe(),le("button",{key:0,class:"btn btn-warning btn-sm mx-1",onClick:s[4]||(s[4]=(...i)=>L(e).resetShotClock&&L(e).resetShotClock(...i))}," Reset Shot ")),U("div",_A,[!t.isPublicView&&!L(e).isClockRunning?(oe(),le("span",{key:0,class:"editable",onClick:s[5]||(s[5]=i=>L(e).updateClock("shot"))},ke(L(e).shotClock),1)):(oe(),le("span",wA,ke(L(e).shotClock),1))])]),t.isPublicView?bt("",!0):(oe(),le("div",vA,[U("button",{class:"btn btn-primary btn-sm mx-1",onClick:s[6]||(s[6]=(...i)=>L(e).toggleClocks&&L(e).toggleClocks(...i))},[U("i",{class:Yi(L(e).isClockRunning?"bi bi-pause-fill":"bi bi-play-fill")},null,2),an(" "+ke(L(e).isClockRunning?"Stop":"Start"),1)])]))])]))}},Bg=Jc(yA,[["__scopeId","data-v-51644654"]]),bA={class:"col-6 border-end"},CA={key:1},EA={class:"score-display position-relative mb-2 p-4 border rounded text-center"},IA={class:"display-2 fw-bold"},SA={class:"position-absolute top-0 end-0 p-3 d-flex flex-column align-items-end",style:{"min-width":"140px"}},TA={class:"small mb-2"},kA={key:0,class:"btn-group btn-group-sm mb-3"},PA={key:1,class:"btn-group btn-group-sm mb-3"},AA={class:"list-group"},RA={key:0,class:"badge bg-success"},xA=["onClick"],OA={__name:"TeamPanel",props:["teamLabel","isPublicView"],setup(t){const e=ys();return(n,s)=>(oe(),le("div",bA,[U("h4",null,[!t.isPublicView&&!L(e).isClockRunning?(oe(),le("span",{key:0,onClick:s[0]||(s[0]=i=>L(e).updateTeamName(t.teamLabel)),class:"editable"},ke(L(e)[t.teamLabel]),1)):(oe(),le("span",CA,ke(L(e)[t.teamLabel]),1))]),U("div",EA,[U("div",IA,ke(L(e).score[t.teamLabel]),1),U("div",SA,[U("div",TA,"Timeouts: "+ke(L(e).timeouts[t.teamLabel]),1),t.isPublicView?bt("",!0):(oe(),le("div",kA,[U("button",{class:"btn btn-success btn-sm",onClick:s[1]||(s[1]=i=>L(e).incrementScore(t.teamLabel))},s[5]||(s[5]=[U("i",{class:"bi bi-plus-circle"},null,-1),an(" Score ")])),U("button",{class:"btn btn-danger btn-sm",onClick:s[2]||(s[2]=i=>L(e).decrementScore(t.teamLabel))},s[6]||(s[6]=[U("i",{class:"bi bi-dash-circle"},null,-1),an(" Score ")]))])),t.isPublicView?bt("",!0):(oe(),le("div",PA,[U("button",{class:"btn btn-outline-light btn-sm",onClick:s[3]||(s[3]=i=>L(e).incrementTimeouts(t.teamLabel))},s[7]||(s[7]=[U("i",{class:"bi bi-plus"},null,-1),an(" Timeout ")])),U("button",{class:"btn btn-outline-light btn-sm",onClick:s[4]||(s[4]=i=>L(e).decrementTimeouts(t.teamLabel))},s[8]||(s[8]=[U("i",{class:"bi bi-dash"},null,-1),an(" Timeout ")]))]))])]),s[10]||(s[10]=U("h6",null,"Penalties",-1)),U("ul",AA,[(oe(!0),le(yt,null,Ol(L(e).activePenalties.filter(i=>i.team===t.teamLabel),(i,r)=>(oe(),le("li",{key:r,class:Yi(["list-group-item d-flex justify-content-between align-items-center",{"blink-red":i.remaining<=10}])},[an(ke(i.player?`#${i.player}`:"Player")+" - "+ke(i.category)+" ("+ke(i.remaining)+"s) ",1),i.releasable?(oe(),le("span",RA,"Releasable")):bt("",!0),i.releasable?(oe(),le("button",{key:1,class:"btn btn-sm btn-danger removeBtn",onClick:o=>L(e).removePenalty(t.teamLabel,r)},s[9]||(s[9]=[U("i",{class:"bi bi-x"},null,-1)]),8,xA)):bt("",!0)],2))),128))])]))}},ph=Jc(OA,[["__scopeId","data-v-94fc254c"]]),NA={class:"row text-center align-items-start mb-4"},Fg={__name:"ScoreSection",props:["isPublicView"],setup(t){return(e,n)=>(oe(),le("div",NA,[xe(ph,{teamLabel:"home",isPublicView:t.isPublicView},null,8,["isPublicView"]),xe(ph,{teamLabel:"away",isPublicView:t.isPublicView},null,8,["isPublicView"])]))}},LA={class:"container-fluid"},DA={__name:"PublicViewer",setup(t){const e=ys();return(n,s)=>(oe(),le("div",LA,[xe(Bg,{quarter:L(e).quarter,gameClock:L(e).gameClock,shotClock:L(e).shotClock,isClockRunning:L(e).isClockRunning,isPublicView:!0},null,8,["quarter","gameClock","shotClock","isClockRunning"]),xe(Fg,{score:L(e).score,timeouts:L(e).timeouts,home:L(e).home,away:L(e).away,activePenalties:L(e).activePenalties,isClockRunning:L(e).isClockRunning,isPublicView:!0},null,8,["score","timeouts","home","away","activePenalties","isClockRunning"])]))}},MA={class:"mb-4"},BA={class:"row g-2"},FA={key:0,class:"col-12"},$A={class:"penalty-form mb-4"},UA={class:"list-group"},HA={__name:"PenaltyForm",setup(t){const e=ys();return(n,s)=>(oe(),le("div",MA,[U("div",BA,[L(e).expiredPenalties.length>0?(oe(),le("div",FA,[U("div",$A,[s[1]||(s[1]=U("h5",{class:"text-center"},"Expired Penalties",-1)),U("ul",UA,[(oe(!0),le(yt,null,Ol(L(e).expiredPenalties,(i,r)=>(oe(),le("li",{key:r,class:"list-group-item"},ke(i.team)+" "+ke(i.player?`- #${i.player}`:"")+" | "+ke(i.category)+" | "+ke(L(e).formatTime(i.startGameClock))+" → "+ke(L(e).formatTime(i.endGameClock)),1))),128))]),L(e).expiredPenalties.length>0?(oe(),le("button",{key:0,class:"btn btn-outline-dark mt-2 w-100",onClick:s[0]||(s[0]=(...i)=>L(e).clearExpiredPenalties&&L(e).clearExpiredPenalties(...i))},"Clear Penalties")):bt("",!0)])])):bt("",!0)])]))}},VA={class:"mb-4"},WA={class:"row g-2"},jA={key:0,class:"col-12"},qA={class:"penalty-form mb-4"},zA={class:"list-group"},GA=["onClick"],KA={__name:"PlayerStatsForm",setup(t){const e=ys();return(n,s)=>(oe(),le("div",VA,[U("div",WA,[L(e).playerStats.length>0?(oe(),le("div",jA,[U("div",qA,[s[2]||(s[2]=U("h5",{class:"text-center"},"Player Stats",-1)),U("ul",zA,[(oe(!0),le(yt,null,Ol(L(e).playerStats,(i,r)=>(oe(),le("li",{key:r,class:"list-group-item d-flex justify-content-between align-items-center"},[U("span",null,ke(i.team)+" - #"+ke(i.player)+" | "+ke(i.type)+" | Time: "+ke(L(e).formatTime(i.gameClock))+" | Quarter: "+ke(i.quarter),1),U("button",{class:"btn btn-danger btn-sm ml-auto removeBtn",onClick:o=>L(e).removePlayerStat(r)},s[1]||(s[1]=[U("i",{class:"bi bi-x"},null,-1)]),8,GA)]))),128))]),U("button",{class:"btn btn-outline-dark mt-3 w-100",onClick:s[0]||(s[0]=(...i)=>L(e).clearPlayerStat&&L(e).clearPlayerStat(...i))}," Clear All ")])])):bt("",!0)])]))}},YA=Jc(KA,[["__scopeId","data-v-8604070c"]]),QA={class:"container-fluid py-3"},JA={class:"row"},XA={class:"col-6"},ZA={class:"col-6"},eR={class:"navbar fixed-bottom bg-dark"},tR={class:"container-fluid"},nR={class:"float-start m-2"},sR={class:"float-end m-2"},iR={__name:"GameController",props:{isPublicView:Boolean,user:String},setup(t){Se(null);const e=Se(!1),n=Se(["jonny5v@gmail.com"]);Se(!1);const s=ys(),{exportData:i,newGame:r,startListening:o,stopListening:a}=s;return ro.onAuthStateChanged(l=>{console.log(l),l.value=l,l.value?e.value=n.value.includes(l.value.email):e.value=!1}),(l,c)=>(oe(),le("div",QA,[xe(Bg,{isPublicView:!1}),xe(Fg,{isPublicView:!1}),U("div",JA,[U("div",XA,[xe(HA)]),U("div",ZA,[xe(YA)])]),U("nav",eR,[U("div",tR,[U("div",nR,[U("button",{class:"btn btn-secondary btn-sm me-2",onClick:c[0]||(c[0]=(...u)=>L(i)&&L(i)(...u))}," Export Data "),U("button",{class:"btn btn-success btn-sm",onClick:c[1]||(c[1]=(...u)=>L(r)&&L(r)(...u))}," New Game ")]),U("div",sR,[U("button",{class:"btn btn-primary btn-sm me-2",onClick:c[2]||(c[2]=(...u)=>L(s).openPenaltyForm&&L(s).openPenaltyForm(...u))},c[4]||(c[4]=[U("i",{class:"bi bi-plus"},null,-1),an(" Add Penalty")])),U("button",{class:"btn btn-primary btn-sm",onClick:c[3]||(c[3]=(...u)=>L(s).openAddPlayerStatForm&&L(s).openAddPlayerStatForm(...u))},c[5]||(c[5]=[U("i",{class:"bi bi-plus"},null,-1),an(" Add Player Stat")]))])])])]))}},rR=()=>new Promise((t,e)=>{ro.onAuthStateChanged(n=>{n?t(n):e("Not authenticated")})}),oR=[{path:"/",name:"PublicViewer",component:DA},{path:"/control",name:"GameController",component:iR,props:t=>({isPublicView:t.query.isPublicView}),beforeEnter:async(t,e,n)=>{try{const s=await rR();["jonny5v@gmail.com"].includes(s.email)?n():n({name:"PublicViewer"})}catch{n({name:"PublicViewer"})}}}],aR=aA({history:MP("/lacrosse-tracker/"),routes:oR}),Xc=ov(rP),lR=cv();Xc.use(aR);Xc.use(lR);Xc.mount("#app");
