var kh=0,ic=1,zh=2;var Gs=1,ts=2,ns=3,Ji=0,Qt=1,Ln=2,Gn=0,is=1,Ci=2,rc=3,sc=4,Gh=5;var hr=100,Vh=101,Hh=102,Wh=103,Xh=104,Yh=200,qh=201,Zh=202,Jh=203,ac=204,oc=205,Kh=206,jh=207,$h=208,Qh=209,eu=210,tu=211,nu=212,iu=213,ru=214,za=0,Ga=1,Va=2,Or=3,Ha=4,Wa=5,Xa=6,Ya=7,lc=0,su=1,au=2,Qn=0,Vs=1,Hs=2,Ws=3,Ri=4,Xs=5,Ys=6,qs=7;var cc=300,Ki=301,ur=302,po=303,mo=304,Zs=306,ar=1e3,ui=1001,qa=1002,an=1003,ou=1004;var Js=1005;var Zt=1006,go=1007;var ji=1008;var wn=1009,hc=1010,uc=1011,rs=1012,vo=1013,ei=1014,Vn=1015,dn=1016,_o=1017,xo=1018,ss=1020,dc=35902,fc=35899,pc=1021,mc=1022,Fn=1023,di=1026,$i=1027,gc=1028,yo=1029,Qi=1030,So=1031;var bo=1033,Ks=33776,js=33777,$s=33778,Qs=33779,Mo=35840,wo=35841,To=35842,Ao=35843,Eo=36196,Co=37492,Ro=37496,Po=37488,Io=37489,ea=37490,Do=37491,Uo=37808,Lo=37809,Fo=37810,No=37811,Oo=37812,Bo=37813,ko=37814,zo=37815,Go=37816,Vo=37817,Ho=37818,Wo=37819,Xo=37820,Yo=37821,qo=36492,Zo=36494,Jo=36495,Ko=36283,jo=36284,ta=36285,$o=36286;var ws=2300,Za=2301,Oa=2302,ql=2303,Zl=2400,Jl=2401,Kl=2402;var lu=3200,vc=3201;var Qo=0,cu=1,Pi="",jt="srgb",Ts="srgb-linear",As="linear",It="srgb";var Ba=7680;var hu=519,uu=512,du=513,fu=514,el=515,pu=516,mu=517,tl=518,gu=519,vu=35044;var _c="300 es",jn=2e3,Br=2001;function Ld(s){for(let e=s.length-1;e>=0;--e)if(s[e]>=65535)return!0;return!1}function Fd(s){return ArrayBuffer.isView(s)&&!(s instanceof DataView)}function kr(s){return document.createElementNS("http://www.w3.org/1999/xhtml",s)}function _u(){let s=kr("canvas");return s.style.display="block",s}var fh={},zr=null;function xc(...s){let e="THREE."+s.shift();zr?zr("log",e,...s):console.log(e,...s)}function xu(s){let e=s[0];if(typeof e=="string"&&e.startsWith("TSL:")){let t=s[1];t&&t.isStackTrace?s[0]+=" "+t.getLocation():s[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return s}function pt(...s){s=xu(s);let e="THREE."+s.shift();if(zr)zr("warn",e,...s);else{let t=s[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...s)}}function ft(...s){s=xu(s);let e="THREE."+s.shift();if(zr)zr("error",e,...s);else{let t=s[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...s)}}function sr(...s){let e=s.join(" ");e in fh||(fh[e]=!0,pt(...s))}function yu(s,e,t){return new Promise(function(r,n){function i(){switch(s.clientWaitSync(e,s.SYNC_FLUSH_COMMANDS_BIT,0)){case s.WAIT_FAILED:n();break;case s.TIMEOUT_EXPIRED:setTimeout(i,t);break;default:r()}}setTimeout(i,t)})}var Su={[za]:Ga,[Va]:Xa,[Ha]:Ya,[Or]:Wa,[Ga]:za,[Xa]:Va,[Ya]:Ha,[Wa]:Or},fi=class{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});let r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){let r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){let r=this._listeners;if(r===void 0)return;let n=r[e];if(n!==void 0){let i=n.indexOf(t);i!==-1&&n.splice(i,1)}}dispatchEvent(e){let t=this._listeners;if(t===void 0)return;let r=t[e.type];if(r!==void 0){e.target=this;let n=r.slice(0);for(let i=0,a=n.length;i<a;i++)n[i].call(this,e);e.target=null}}},mn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"];var wl=Math.PI/180,Ja=180/Math.PI;function na(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(mn[s&255]+mn[s>>8&255]+mn[s>>16&255]+mn[s>>24&255]+"-"+mn[e&255]+mn[e>>8&255]+"-"+mn[e>>16&15|64]+mn[e>>24&255]+"-"+mn[t&63|128]+mn[t>>8&255]+"-"+mn[t>>16&255]+mn[t>>24&255]+mn[r&255]+mn[r>>8&255]+mn[r>>16&255]+mn[r>>24&255]).toLowerCase()}function Ct(s,e,t){return Math.max(e,Math.min(t,s))}function Nd(s,e){return(s%e+e)%e}function Tl(s,e,t){return(1-t)*s+t*e}function xs(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return s/4294967295;case Uint16Array:return s/65535;case Uint8Array:case Uint8ClampedArray:return s/255;case Int32Array:return Math.max(s/2147483647,-1);case Int16Array:return Math.max(s/32767,-1);case Int8Array:return Math.max(s/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Mn(s,e){switch(e.constructor){case Float32Array:return s;case Uint32Array:return Math.round(s*4294967295);case Uint16Array:return Math.round(s*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(s*255);case Int32Array:return Math.round(s*2147483647);case Int16Array:return Math.round(s*32767);case Int8Array:return Math.round(s*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}var wc=class wc{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){let t=this.x,r=this.y,n=e.elements;return this.x=n[0]*t+n[3]*r+n[6],this.y=n[1]*t+n[4]*r+n[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this}clampLength(e,t){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){let r=Math.cos(t),n=Math.sin(t),i=this.x-e.x,a=this.y-e.y;return this.x=i*r-a*n+e.x,this.y=i*n+a*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};wc.prototype.isVector2=!0;var lt=wc,zn=class{constructor(e=0,t=0,r=0,n=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=n}static slerpFlat(e,t,r,n,i,a,o){let l=r[n+0],c=r[n+1],h=r[n+2],d=r[n+3],u=i[a+0],f=i[a+1],g=i[a+2],x=i[a+3];if(d!==x||l!==u||c!==f||h!==g){let p=l*u+c*f+h*g+d*x;p<0&&(u=-u,f=-f,g=-g,x=-x,p=-p);let m=1-o;if(p<.9995){let S=Math.acos(p),E=Math.sin(S);m=Math.sin(m*S)/E,o=Math.sin(o*S)/E,l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+x*o}else{l=l*m+u*o,c=c*m+f*o,h=h*m+g*o,d=d*m+x*o;let S=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=S,c*=S,h*=S,d*=S}}e[t]=l,e[t+1]=c,e[t+2]=h,e[t+3]=d}static multiplyQuaternionsFlat(e,t,r,n,i,a){let o=r[n],l=r[n+1],c=r[n+2],h=r[n+3],d=i[a],u=i[a+1],f=i[a+2],g=i[a+3];return e[t]=o*g+h*d+l*f-c*u,e[t+1]=l*g+h*u+c*d-o*f,e[t+2]=c*g+h*f+o*u-l*d,e[t+3]=h*g-o*d-l*u-c*f,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,n){return this._x=e,this._y=t,this._z=r,this._w=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){let r=e._x,n=e._y,i=e._z,a=e._order,o=Math.cos,l=Math.sin,c=o(r/2),h=o(n/2),d=o(i/2),u=l(r/2),f=l(n/2),g=l(i/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:pt("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){let r=t/2,n=Math.sin(r);return this._x=e.x*n,this._y=e.y*n,this._z=e.z*n,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){let t=e.elements,r=t[0],n=t[4],i=t[8],a=t[1],o=t[5],l=t[9],c=t[2],h=t[6],d=t[10],u=r+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(i-c)*f,this._z=(a-n)*f}else if(r>o&&r>d){let f=2*Math.sqrt(1+r-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(n+a)/f,this._z=(i+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-r-d);this._w=(i-c)/f,this._x=(n+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-r-o);this._w=(a-n)/f,this._x=(i+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Ct(this.dot(e),-1,1)))}rotateTowards(e,t){let r=this.angleTo(e);if(r===0)return this;let n=Math.min(1,t/r);return this.slerp(e,n),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){let r=e._x,n=e._y,i=e._z,a=e._w,o=t._x,l=t._y,c=t._z,h=t._w;return this._x=r*h+a*o+n*c-i*l,this._y=n*h+a*l+i*o-r*c,this._z=i*h+a*c+r*l-n*o,this._w=a*h-r*o-n*l-i*c,this._onChangeCallback(),this}slerp(e,t){let r=e._x,n=e._y,i=e._z,a=e._w,o=this.dot(e);o<0&&(r=-r,n=-n,i=-i,a=-a,o=-o);let l=1-t;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,t=Math.sin(t*c)/h,this._x=this._x*l+r*t,this._y=this._y*l+n*t,this._z=this._z*l+i*t,this._w=this._w*l+a*t,this._onChangeCallback()}else this._x=this._x*l+r*t,this._y=this._y*l+n*t,this._z=this._z*l+i*t,this._w=this._w*l+a*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){let e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),n=Math.sqrt(1-r),i=Math.sqrt(r);return this.set(n*Math.sin(e),n*Math.cos(e),i*Math.sin(t),i*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},Tc=class Tc{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ph.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ph.setFromAxisAngle(e,t))}applyMatrix3(e){let t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[3]*r+i[6]*n,this.y=i[1]*t+i[4]*r+i[7]*n,this.z=i[2]*t+i[5]*r+i[8]*n,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){let t=this.x,r=this.y,n=this.z,i=e.elements,a=1/(i[3]*t+i[7]*r+i[11]*n+i[15]);return this.x=(i[0]*t+i[4]*r+i[8]*n+i[12])*a,this.y=(i[1]*t+i[5]*r+i[9]*n+i[13])*a,this.z=(i[2]*t+i[6]*r+i[10]*n+i[14])*a,this}applyQuaternion(e){let t=this.x,r=this.y,n=this.z,i=e.x,a=e.y,o=e.z,l=e.w,c=2*(a*n-o*r),h=2*(o*t-i*n),d=2*(i*r-a*t);return this.x=t+l*c+a*d-o*h,this.y=r+l*h+o*c-i*d,this.z=n+l*d+i*h-a*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){let t=this.x,r=this.y,n=this.z,i=e.elements;return this.x=i[0]*t+i[4]*r+i[8]*n,this.y=i[1]*t+i[5]*r+i[9]*n,this.z=i[2]*t+i[6]*r+i[10]*n,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this}clampLength(e,t){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){let r=e.x,n=e.y,i=e.z,a=t.x,o=t.y,l=t.z;return this.x=n*l-i*o,this.y=i*a-r*l,this.z=r*o-n*a,this}projectOnVector(e){let t=e.lengthSq();if(t===0)return this.set(0,0,0);let r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return Al.copy(this).projectOnVector(e),this.sub(Al)}reflect(e){return this.sub(Al.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){let t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;let r=this.dot(e)/t;return Math.acos(Ct(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){let t=this.x-e.x,r=this.y-e.y,n=this.z-e.z;return t*t+r*r+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){let n=Math.sin(t)*e;return this.x=n*Math.sin(r),this.y=Math.cos(t)*e,this.z=n*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){let t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),n=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=n,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Tc.prototype.isVector3=!0;var Z=Tc,Al=new Z,ph=new zn,Ac=class Ac{constructor(e,t,r,n,i,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,a,o,l,c)}set(e,t,r,n,i,a,o,l,c){let h=this.elements;return h[0]=e,h[1]=n,h[2]=o,h[3]=t,h[4]=i,h[5]=l,h[6]=r,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){let t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){let t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[3],l=r[6],c=r[1],h=r[4],d=r[7],u=r[2],f=r[5],g=r[8],x=n[0],p=n[3],m=n[6],S=n[1],E=n[4],y=n[7],b=n[2],M=n[5],A=n[8];return i[0]=a*x+o*S+l*b,i[3]=a*p+o*E+l*M,i[6]=a*m+o*y+l*A,i[1]=c*x+h*S+d*b,i[4]=c*p+h*E+d*M,i[7]=c*m+h*y+d*A,i[2]=u*x+f*S+g*b,i[5]=u*p+f*E+g*M,i[8]=u*m+f*y+g*A,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){let e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8];return t*a*h-t*o*c-r*i*h+r*o*l+n*i*c-n*a*l}invert(){let e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=h*a-o*c,u=o*l-h*i,f=c*i-a*l,g=t*d+r*u+n*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let x=1/g;return e[0]=d*x,e[1]=(n*c-h*r)*x,e[2]=(o*r-n*a)*x,e[3]=u*x,e[4]=(h*t-n*l)*x,e[5]=(n*i-o*t)*x,e[6]=f*x,e[7]=(r*l-c*t)*x,e[8]=(a*t-r*i)*x,this}transpose(){let e,t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){let t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,n,i,a,o){let l=Math.cos(i),c=Math.sin(i);return this.set(r*l,r*c,-r*(l*a+c*o)+a+e,-n*c,n*l,-n*(-c*a+l*o)+o+t,0,0,1),this}scale(e,t){return sr("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(El.makeScale(e,t)),this}rotate(e){return sr("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(El.makeRotation(-e)),this}translate(e,t){return sr("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(El.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){let t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){let t=this.elements,r=e.elements;for(let n=0;n<9;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){let r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Ac.prototype.isMatrix3=!0;var mt=Ac,El=new mt,mh=new mt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),gh=new mt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Od(){let s={enabled:!0,workingColorSpace:Ts,spaces:{},convert:function(n,i,a){return this.enabled===!1||i===a||!i||!a||(this.spaces[i].transfer===It&&(n.r=bi(n.r),n.g=bi(n.g),n.b=bi(n.b)),this.spaces[i].primaries!==this.spaces[a].primaries&&(n.applyMatrix3(this.spaces[i].toXYZ),n.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===It&&(n.r=Nr(n.r),n.g=Nr(n.g),n.b=Nr(n.b))),n},workingToColorSpace:function(n,i){return this.convert(n,this.workingColorSpace,i)},colorSpaceToWorking:function(n,i){return this.convert(n,i,this.workingColorSpace)},getPrimaries:function(n){return this.spaces[n].primaries},getTransfer:function(n){return n===Pi?As:this.spaces[n].transfer},getToneMappingMode:function(n){return this.spaces[n].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(n,i=this.workingColorSpace){return n.fromArray(this.spaces[i].luminanceCoefficients)},define:function(n){Object.assign(this.spaces,n)},_getMatrix:function(n,i,a){return n.copy(this.spaces[i].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(n){return this.spaces[n].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(n=this.workingColorSpace){return this.spaces[n].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(n,i){return sr("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),s.workingToColorSpace(n,i)},toWorkingColorSpace:function(n,i){return sr("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),s.colorSpaceToWorking(n,i)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return s.define({[Ts]:{primaries:e,whitePoint:r,transfer:As,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:jt},outputColorSpaceConfig:{drawingBufferColorSpace:jt}},[jt]:{primaries:e,whitePoint:r,transfer:It,toXYZ:mh,fromXYZ:gh,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:jt}}}),s}var wt=Od();function bi(s){return s<.04045?s*.0773993808:Math.pow(s*.9478672986+.0521327014,2.4)}function Nr(s){return s<.0031308?s*12.92:1.055*Math.pow(s,.41666)-.055}var br,Ka=class{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{br===void 0&&(br=kr("canvas")),br.width=e.width,br.height=e.height;let n=br.getContext("2d");e instanceof ImageData?n.putImageData(e,0,0):n.drawImage(e,0,0,e.width,e.height),r=br}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){let t=kr("canvas");t.width=e.width,t.height=e.height;let r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);let n=r.getImageData(0,0,e.width,e.height),i=n.data;for(let a=0;a<i.length;a++)i[a]=bi(i[a]/255)*255;return r.putImageData(n,0,0),t}else if(e.data){let t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(bi(t[r]/255)*255):t[r]=bi(t[r]);return{data:t,width:e.width,height:e.height}}else return pt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}},Bd=0,Gr=class{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Bd++}),this.uuid=na(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){let t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];let r={uuid:this.uuid,url:""},n=this.data;if(n!==null){let i;if(Array.isArray(n)){i=[];for(let a=0,o=n.length;a<o;a++)n[a].isDataTexture?i.push(Cl(n[a].image)):i.push(Cl(n[a]))}else i=Cl(n);r.url=i}return t||(e.images[this.uuid]=r),r}};function Cl(s){return typeof HTMLImageElement<"u"&&s instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&s instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&s instanceof ImageBitmap?Ka.getDataURL(s):s.data?{data:Array.from(s.data),width:s.width,height:s.height,type:s.data.constructor.name}:(pt("Texture: Unable to serialize Texture."),{})}var kd=0,Rl=new Z,on=class s extends fi{constructor(e=s.DEFAULT_IMAGE,t=s.DEFAULT_MAPPING,r=ui,n=ui,i=Zt,a=ji,o=Fn,l=wn,c=s.DEFAULT_ANISOTROPY,h=Pi){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:kd++}),this.uuid=na(),this.name="",this.source=new Gr(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=n,this.magFilter=i,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new mt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Rl).x}get height(){return this.source.getSize(Rl).y}get depth(){return this.source.getSize(Rl).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(let t in e){let r=e[t];if(r===void 0){pt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){pt(`Texture.setValues(): property '${t}' does not exist.`);continue}n&&r&&n.isVector2&&r.isVector2||n&&r&&n.isVector3&&r.isVector3||n&&r&&n.isMatrix3&&r.isMatrix3?n.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];let r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==cc)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case ar:e.x=e.x-Math.floor(e.x);break;case ui:e.x=e.x<0?0:1;break;case qa:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case ar:e.y=e.y-Math.floor(e.y);break;case ui:e.y=e.y<0?0:1;break;case qa:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}};on.DEFAULT_IMAGE=null;on.DEFAULT_MAPPING=cc;on.DEFAULT_ANISOTROPY=1;var Ec=class Ec{constructor(e=0,t=0,r=0,n=1){this.x=e,this.y=t,this.z=r,this.w=n}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,n){return this.x=e,this.y=t,this.z=r,this.w=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){let t=this.x,r=this.y,n=this.z,i=this.w,a=e.elements;return this.x=a[0]*t+a[4]*r+a[8]*n+a[12]*i,this.y=a[1]*t+a[5]*r+a[9]*n+a[13]*i,this.z=a[2]*t+a[6]*r+a[10]*n+a[14]*i,this.w=a[3]*t+a[7]*r+a[11]*n+a[15]*i,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);let t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,n,i,l=e.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],x=l[2],p=l[6],m=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-x)<.01&&Math.abs(g-p)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+x)<.1&&Math.abs(g+p)<.1&&Math.abs(c+f+m-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;let E=(c+1)/2,y=(f+1)/2,b=(m+1)/2,M=(h+u)/4,A=(d+x)/4,v=(g+p)/4;return E>y&&E>b?E<.01?(r=0,n=.707106781,i=.707106781):(r=Math.sqrt(E),n=M/r,i=A/r):y>b?y<.01?(r=.707106781,n=0,i=.707106781):(n=Math.sqrt(y),r=M/n,i=v/n):b<.01?(r=.707106781,n=.707106781,i=0):(i=Math.sqrt(b),r=A/i,n=v/i),this.set(r,n,i,t),this}let S=Math.sqrt((p-g)*(p-g)+(d-x)*(d-x)+(u-h)*(u-h));return Math.abs(S)<.001&&(S=1),this.x=(p-g)/S,this.y=(d-x)/S,this.z=(u-h)/S,this.w=Math.acos((c+f+m-1)/2),this}setFromMatrixPosition(e){let t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Ct(this.x,e.x,t.x),this.y=Ct(this.y,e.y,t.y),this.z=Ct(this.z,e.z,t.z),this.w=Ct(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Ct(this.x,e,t),this.y=Ct(this.y,e,t),this.z=Ct(this.z,e,t),this.w=Ct(this.w,e,t),this}clampLength(e,t){let r=this.length();return this.divideScalar(r||1).multiplyScalar(Ct(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Ec.prototype.isVector4=!0;var Ot=Ec,ja=class extends fi{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zt,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new Ot(0,0,e,t),this.scissorTest=!1,this.viewport=new Ot(0,0,e,t),this.textures=[];let n={width:e,height:t,depth:r.depth},i=new on(n),a=r.count;for(let o=0;o<a;o++)this.textures[o]=i.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){let t={minFilter:Zt,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let n=0,i=this.textures.length;n<i;n++)this.textures[n].image.width=e,this.textures[n].image.height=t,this.textures[n].image.depth=r,this.textures[n].isData3DTexture!==!0&&(this.textures[n].isArrayTexture=this.textures[n].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;let n=Object.assign({},e.textures[t].image);this.textures[t].source=new Gr(n)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){let t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Jt=class extends ja{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}},Es=class extends on{constructor(e=null,t=1,r=1,n=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=an,this.minFilter=an,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}};var $a=class extends on{constructor(e=null,t=1,r=1,n=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:n},this.magFilter=an,this.minFilter=an,this.wrapR=ui,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}};var fo=class fo{constructor(e,t,r,n,i,a,o,l,c,h,d,u,f,g,x,p){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,n,i,a,o,l,c,h,d,u,f,g,x,p)}set(e,t,r,n,i,a,o,l,c,h,d,u,f,g,x,p){let m=this.elements;return m[0]=e,m[4]=t,m[8]=r,m[12]=n,m[1]=i,m[5]=a,m[9]=o,m[13]=l,m[2]=c,m[6]=h,m[10]=d,m[14]=u,m[3]=f,m[7]=g,m[11]=x,m[15]=p,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new fo().fromArray(this.elements)}copy(e){let t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){let t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){let t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();let t=this.elements,r=e.elements,n=1/Mr.setFromMatrixColumn(e,0).length(),i=1/Mr.setFromMatrixColumn(e,1).length(),a=1/Mr.setFromMatrixColumn(e,2).length();return t[0]=r[0]*n,t[1]=r[1]*n,t[2]=r[2]*n,t[3]=0,t[4]=r[4]*i,t[5]=r[5]*i,t[6]=r[6]*i,t[7]=0,t[8]=r[8]*a,t[9]=r[9]*a,t[10]=r[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){let t=this.elements,r=e.x,n=e.y,i=e.z,a=Math.cos(r),o=Math.sin(r),l=Math.cos(n),c=Math.sin(n),h=Math.cos(i),d=Math.sin(i);if(e.order==="XYZ"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=-l*d,t[8]=c,t[1]=f+g*c,t[5]=u-x*c,t[9]=-o*l,t[2]=x-u*c,t[6]=g+f*c,t[10]=a*l}else if(e.order==="YXZ"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u+x*o,t[4]=g*o-f,t[8]=a*c,t[1]=a*d,t[5]=a*h,t[9]=-o,t[2]=f*o-g,t[6]=x+u*o,t[10]=a*l}else if(e.order==="ZXY"){let u=l*h,f=l*d,g=c*h,x=c*d;t[0]=u-x*o,t[4]=-a*d,t[8]=g+f*o,t[1]=f+g*o,t[5]=a*h,t[9]=x-u*o,t[2]=-a*c,t[6]=o,t[10]=a*l}else if(e.order==="ZYX"){let u=a*h,f=a*d,g=o*h,x=o*d;t[0]=l*h,t[4]=g*c-f,t[8]=u*c+x,t[1]=l*d,t[5]=x*c+u,t[9]=f*c-g,t[2]=-c,t[6]=o*l,t[10]=a*l}else if(e.order==="YZX"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=x-u*d,t[8]=g*d+f,t[1]=d,t[5]=a*h,t[9]=-o*h,t[2]=-c*h,t[6]=f*d+g,t[10]=u-x*d}else if(e.order==="XZY"){let u=a*l,f=a*c,g=o*l,x=o*c;t[0]=l*h,t[4]=-d,t[8]=c*h,t[1]=u*d+x,t[5]=a*h,t[9]=f*d-g,t[2]=g*d-f,t[6]=o*h,t[10]=x*d+u}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(zd,e,Gd)}lookAt(e,t,r){let n=this.elements;return Pn.subVectors(e,t),Pn.lengthSq()===0&&(Pn.z=1),Pn.normalize(),Ni.crossVectors(r,Pn),Ni.lengthSq()===0&&(Math.abs(r.z)===1?Pn.x+=1e-4:Pn.z+=1e-4,Pn.normalize(),Ni.crossVectors(r,Pn)),Ni.normalize(),ga.crossVectors(Pn,Ni),n[0]=Ni.x,n[4]=ga.x,n[8]=Pn.x,n[1]=Ni.y,n[5]=ga.y,n[9]=Pn.y,n[2]=Ni.z,n[6]=ga.z,n[10]=Pn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){let r=e.elements,n=t.elements,i=this.elements,a=r[0],o=r[4],l=r[8],c=r[12],h=r[1],d=r[5],u=r[9],f=r[13],g=r[2],x=r[6],p=r[10],m=r[14],S=r[3],E=r[7],y=r[11],b=r[15],M=n[0],A=n[4],v=n[8],T=n[12],I=n[1],P=n[5],C=n[9],N=n[13],R=n[2],O=n[6],z=n[10],K=n[14],re=n[3],G=n[7],V=n[11],U=n[15];return i[0]=a*M+o*I+l*R+c*re,i[4]=a*A+o*P+l*O+c*G,i[8]=a*v+o*C+l*z+c*V,i[12]=a*T+o*N+l*K+c*U,i[1]=h*M+d*I+u*R+f*re,i[5]=h*A+d*P+u*O+f*G,i[9]=h*v+d*C+u*z+f*V,i[13]=h*T+d*N+u*K+f*U,i[2]=g*M+x*I+p*R+m*re,i[6]=g*A+x*P+p*O+m*G,i[10]=g*v+x*C+p*z+m*V,i[14]=g*T+x*N+p*K+m*U,i[3]=S*M+E*I+y*R+b*re,i[7]=S*A+E*P+y*O+b*G,i[11]=S*v+E*C+y*z+b*V,i[15]=S*T+E*N+y*K+b*U,this}multiplyScalar(e){let t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){let e=this.elements,t=e[0],r=e[4],n=e[8],i=e[12],a=e[1],o=e[5],l=e[9],c=e[13],h=e[2],d=e[6],u=e[10],f=e[14],g=e[3],x=e[7],p=e[11],m=e[15],S=l*f-c*u,E=o*f-c*d,y=o*u-l*d,b=a*f-c*h,M=a*u-l*h,A=a*d-o*h;return t*(x*S-p*E+m*y)-r*(g*S-p*b+m*M)+n*(g*E-x*b+m*A)-i*(g*y-x*M+p*A)}determinantAffine(){let e=this.elements,t=e[0],r=e[4],n=e[8],i=e[1],a=e[5],o=e[9],l=e[2],c=e[6],h=e[10];return t*(a*h-o*c)-r*(i*h-o*l)+n*(i*c-a*l)}transpose(){let e=this.elements,t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){let n=this.elements;return e.isVector3?(n[12]=e.x,n[13]=e.y,n[14]=e.z):(n[12]=e,n[13]=t,n[14]=r),this}invert(){let e=this.elements,t=e[0],r=e[1],n=e[2],i=e[3],a=e[4],o=e[5],l=e[6],c=e[7],h=e[8],d=e[9],u=e[10],f=e[11],g=e[12],x=e[13],p=e[14],m=e[15],S=t*o-r*a,E=t*l-n*a,y=t*c-i*a,b=r*l-n*o,M=r*c-i*o,A=n*c-i*l,v=h*x-d*g,T=h*p-u*g,I=h*m-f*g,P=d*p-u*x,C=d*m-f*x,N=u*m-f*p,R=S*N-E*C+y*P+b*I-M*T+A*v;if(R===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let O=1/R;return e[0]=(o*N-l*C+c*P)*O,e[1]=(n*C-r*N-i*P)*O,e[2]=(x*A-p*M+m*b)*O,e[3]=(u*M-d*A-f*b)*O,e[4]=(l*I-a*N-c*T)*O,e[5]=(t*N-n*I+i*T)*O,e[6]=(p*y-g*A-m*E)*O,e[7]=(h*A-u*y+f*E)*O,e[8]=(a*C-o*I+c*v)*O,e[9]=(r*I-t*C-i*v)*O,e[10]=(g*M-x*y+m*S)*O,e[11]=(d*y-h*M-f*S)*O,e[12]=(o*T-a*P-l*v)*O,e[13]=(t*P-r*T+n*v)*O,e[14]=(x*E-g*b-p*S)*O,e[15]=(h*b-d*E+u*S)*O,this}scale(e){let t=this.elements,r=e.x,n=e.y,i=e.z;return t[0]*=r,t[4]*=n,t[8]*=i,t[1]*=r,t[5]*=n,t[9]*=i,t[2]*=r,t[6]*=n,t[10]*=i,t[3]*=r,t[7]*=n,t[11]*=i,this}getMaxScaleOnAxis(){let e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],n=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,n))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){let t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){let t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){let t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){let r=Math.cos(t),n=Math.sin(t),i=1-r,a=e.x,o=e.y,l=e.z,c=i*a,h=i*o;return this.set(c*a+r,c*o-n*l,c*l+n*o,0,c*o+n*l,h*o+r,h*l-n*a,0,c*l-n*o,h*l+n*a,i*l*l+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,n,i,a){return this.set(1,r,i,0,e,1,a,0,t,n,1,0,0,0,0,1),this}compose(e,t,r){let n=this.elements,i=t._x,a=t._y,o=t._z,l=t._w,c=i+i,h=a+a,d=o+o,u=i*c,f=i*h,g=i*d,x=a*h,p=a*d,m=o*d,S=l*c,E=l*h,y=l*d,b=r.x,M=r.y,A=r.z;return n[0]=(1-(x+m))*b,n[1]=(f+y)*b,n[2]=(g-E)*b,n[3]=0,n[4]=(f-y)*M,n[5]=(1-(u+m))*M,n[6]=(p+S)*M,n[7]=0,n[8]=(g+E)*A,n[9]=(p-S)*A,n[10]=(1-(u+x))*A,n[11]=0,n[12]=e.x,n[13]=e.y,n[14]=e.z,n[15]=1,this}decompose(e,t,r){let n=this.elements;e.x=n[12],e.y=n[13],e.z=n[14];let i=this.determinantAffine();if(i===0)return r.set(1,1,1),t.identity(),this;let a=Mr.set(n[0],n[1],n[2]).length(),o=Mr.set(n[4],n[5],n[6]).length(),l=Mr.set(n[8],n[9],n[10]).length();i<0&&(a=-a),qn.copy(this);let c=1/a,h=1/o,d=1/l;return qn.elements[0]*=c,qn.elements[1]*=c,qn.elements[2]*=c,qn.elements[4]*=h,qn.elements[5]*=h,qn.elements[6]*=h,qn.elements[8]*=d,qn.elements[9]*=d,qn.elements[10]*=d,t.setFromRotationMatrix(qn),r.x=a,r.y=o,r.z=l,this}makePerspective(e,t,r,n,i,a,o=jn,l=!1){let c=this.elements,h=2*i/(t-e),d=2*i/(r-n),u=(t+e)/(t-e),f=(r+n)/(r-n),g,x;if(l)g=i/(a-i),x=a*i/(a-i);else if(o===jn)g=-(a+i)/(a-i),x=-2*a*i/(a-i);else if(o===Br)g=-a/(a-i),x=-a*i/(a-i);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,t,r,n,i,a,o=jn,l=!1){let c=this.elements,h=2/(t-e),d=2/(r-n),u=-(t+e)/(t-e),f=-(r+n)/(r-n),g,x;if(l)g=1/(a-i),x=a/(a-i);else if(o===jn)g=-2/(a-i),x=-(a+i)/(a-i);else if(o===Br)g=-1/(a-i),x=-i/(a-i);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){let t=this.elements,r=e.elements;for(let n=0;n<16;n++)if(t[n]!==r[n])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){let r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};fo.prototype.isMatrix4=!0;var Ut=fo,Mr=new Z,qn=new Ut,zd=new Z(0,0,0),Gd=new Z(1,1,1),Ni=new Z,ga=new Z,Pn=new Z,vh=new Ut,_h=new zn,Mi=class s{constructor(e=0,t=0,r=0,n=s.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=n}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,n=this._order){return this._x=e,this._y=t,this._z=r,this._order=n,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){let n=e.elements,i=n[0],a=n[4],o=n[8],l=n[1],c=n[5],h=n[9],d=n[2],u=n[6],f=n[10];switch(t){case"XYZ":this._y=Math.asin(Ct(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,i)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Ct(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,i),this._z=0);break;case"ZXY":this._x=Math.asin(Ct(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,i));break;case"ZYX":this._y=Math.asin(-Ct(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,i)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Ct(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,i)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Ct(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,i)):(this._x=Math.atan2(-h,f),this._y=0);break;default:pt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return vh.makeRotationFromQuaternion(e),this.setFromRotationMatrix(vh,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return _h.setFromEuler(this),this.setFromQuaternion(_h,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Mi.DEFAULT_ORDER="XYZ";var Vr=class{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}},Vd=0,xh=new Z,wr=new zn,vi=new Ut,va=new Z,ys=new Z,Hd=new Z,Wd=new zn,yh=new Z(1,0,0),Sh=new Z(0,1,0),bh=new Z(0,0,1),Mh={type:"added"},Xd={type:"removed"},Tr={type:"childadded",child:null},Pl={type:"childremoved",child:null},un=class s extends fi{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Vd++}),this.uuid=na(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=s.DEFAULT_UP.clone();let e=new Z,t=new Mi,r=new zn,n=new Z(1,1,1);function i(){r.setFromEuler(t,!1)}function a(){t.setFromQuaternion(r,void 0,!1)}t._onChange(i),r._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:n},modelViewMatrix:{value:new Ut},normalMatrix:{value:new mt}}),this.matrix=new Ut,this.matrixWorld=new Ut,this.matrixAutoUpdate=s.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=s.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Vr,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.multiply(wr),this}rotateOnWorldAxis(e,t){return wr.setFromAxisAngle(e,t),this.quaternion.premultiply(wr),this}rotateX(e){return this.rotateOnAxis(yh,e)}rotateY(e){return this.rotateOnAxis(Sh,e)}rotateZ(e){return this.rotateOnAxis(bh,e)}translateOnAxis(e,t){return xh.copy(e).applyQuaternion(this.quaternion),this.position.add(xh.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(yh,e)}translateY(e){return this.translateOnAxis(Sh,e)}translateZ(e){return this.translateOnAxis(bh,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(vi.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?va.copy(e):va.set(e,t,r);let n=this.parent;this.updateWorldMatrix(!0,!1),ys.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?vi.lookAt(ys,va,this.up):vi.lookAt(va,ys,this.up),this.quaternion.setFromRotationMatrix(vi),n&&(vi.extractRotation(n.matrixWorld),wr.setFromRotationMatrix(vi),this.quaternion.premultiply(wr.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(ft("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Mh),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null):ft("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}let t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xd),Pl.child=e,this.dispatchEvent(Pl),Pl.child=null),this}removeFromParent(){let e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),vi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),vi.multiply(e.parent.matrixWorld)),e.applyMatrix4(vi),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Mh),Tr.child=e,this.dispatchEvent(Tr),Tr.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,n=this.children.length;r<n;r++){let a=this.children[r].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);let n=this.children;for(let i=0,a=n.length;i<a;i++)n[i].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,e,Hd),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ys,Wd,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);let t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);let t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);let t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].traverseVisible(e)}traverseAncestors(e){let t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let e=this.pivot;if(e!==null){let t=e.x,r=e.y,n=e.z,i=this.matrix.elements;i[12]+=t-i[0]*t-i[4]*r-i[8]*n,i[13]+=r-i[1]*t-i[5]*r-i[9]*n,i[14]+=n-i[2]*t-i[6]*r-i[10]*n}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);let t=this.children;for(let r=0,n=t.length;r<n;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){let n=this.parent;if(e===!0&&n!==null&&n.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){let i=this.children;for(let a=0,o=i.length;a<o;a++)i[a].updateWorldMatrix(!1,!0,r)}}toJSON(e){let t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let n={};n.uuid=this.uuid,n.type=this.type,n.name=this.name,n.castShadow=this.castShadow,n.receiveShadow=this.receiveShadow,n.visible=this.visible,n.frustumCulled=this.frustumCulled,n.renderOrder=this.renderOrder,n.static=this.static,n.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(n.userData=this.userData),n.layers=this.layers.mask,n.matrix=this.matrix.toArray(),n.up=this.up.toArray(),this.pivot!==null&&(n.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(n.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(n.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(n.type="InstancedMesh",n.count=this.count,n.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(n.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(n.type="BatchedMesh",n.perObjectFrustumCulled=this.perObjectFrustumCulled,n.sortObjects=this.sortObjects,n.drawRanges=this._drawRanges,n.reservedRanges=this._reservedRanges,n.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),n.instanceInfo=this._instanceInfo.map(o=>({...o})),n.availableInstanceIds=this._availableInstanceIds.slice(),n.availableGeometryIds=this._availableGeometryIds.slice(),n.nextIndexStart=this._nextIndexStart,n.nextVertexStart=this._nextVertexStart,n.geometryCount=this._geometryCount,n.maxInstanceCount=this._maxInstanceCount,n.maxVertexCount=this._maxVertexCount,n.maxIndexCount=this._maxIndexCount,n.geometryInitialized=this._geometryInitialized,n.matricesTexture=this._matricesTexture.toJSON(e),n.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(n.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(n.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(n.boundingBox=this.boundingBox.toJSON()));function i(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?n.background=this.background.toJSON():this.background.isTexture&&(n.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(n.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){n.geometry=i(e.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];i(e.shapes,d)}else i(e.shapes,l)}}if(this.isSkinnedMesh&&(n.bindMode=this.bindMode,n.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(i(e.skeletons,this.skeleton),n.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(i(e.materials,this.material[l]));n.material=o}else n.material=i(e.materials,this.material);if(this.children.length>0){n.children=[];for(let o=0;o<this.children.length;o++)n.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){n.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];n.animations.push(i(e.animations,l))}}if(t){let o=a(e.geometries),l=a(e.materials),c=a(e.textures),h=a(e.images),d=a(e.shapes),u=a(e.skeletons),f=a(e.animations),g=a(e.nodes);o.length>0&&(r.geometries=o),l.length>0&&(r.materials=l),c.length>0&&(r.textures=c),h.length>0&&(r.images=h),d.length>0&&(r.shapes=d),u.length>0&&(r.skeletons=u),f.length>0&&(r.animations=f),g.length>0&&(r.nodes=g)}return r.object=n,r;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){let n=e.children[r];this.add(n.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};un.DEFAULT_UP=new Z(0,1,0);un.DEFAULT_MATRIX_AUTO_UPDATE=!0;un.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;var Ht=class extends un{constructor(){super(),this.isGroup=!0,this.type="Group"}},Yd={type:"move"},Hr=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ht,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ht,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Z,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Z),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ht,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Z,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Z,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){let t=this._hand;if(t)for(let r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let n=null,i=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(c&&e.hand){a=!0;for(let x of e.hand.values()){let p=t.getJointPose(x,r),m=this._getHandJoint(c,x);p!==null&&(m.matrix.fromArray(p.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,m.jointRadius=p.radius),m.visible=p!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(i=t.getPose(e.gripSpace,r),i!==null&&(l.matrix.fromArray(i.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,i.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(i.linearVelocity)):l.hasLinearVelocity=!1,i.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(i.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(n=t.getPose(e.targetRaySpace,r),n===null&&i!==null&&(n=i),n!==null&&(o.matrix.fromArray(n.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,n.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(n.linearVelocity)):o.hasLinearVelocity=!1,n.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(n.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Yd)))}return o!==null&&(o.visible=n!==null),l!==null&&(l.visible=i!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){let r=new Ht;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}},bu={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Oi={h:0,s:0,l:0},_a={h:0,s:0,l:0};function Il(s,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?s+(e-s)*6*t:t<1/2?e:t<2/3?s+(e-s)*6*(2/3-t):s}var ze=class{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){let n=e;n&&n.isColor?this.copy(n):typeof n=="number"?this.setHex(n):typeof n=="string"&&this.setStyle(n)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=jt){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,wt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,n=wt.workingColorSpace){return this.r=e,this.g=t,this.b=r,wt.colorSpaceToWorking(this,n),this}setHSL(e,t,r,n=wt.workingColorSpace){if(e=Nd(e,1),t=Ct(t,0,1),r=Ct(r,0,1),t===0)this.r=this.g=this.b=r;else{let i=r<=.5?r*(1+t):r+t-r*t,a=2*r-i;this.r=Il(a,i,e+1/3),this.g=Il(a,i,e),this.b=Il(a,i,e-1/3)}return wt.colorSpaceToWorking(this,n),this}setStyle(e,t=jt){function r(i){i!==void 0&&parseFloat(i)<1&&pt("Color: Alpha component of "+e+" will be ignored.")}let n;if(n=/^(\w+)\(([^\)]*)\)/.exec(e)){let i,a=n[1],o=n[2];switch(a){case"rgb":case"rgba":if(i=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(255,parseInt(i[1],10))/255,Math.min(255,parseInt(i[2],10))/255,Math.min(255,parseInt(i[3],10))/255,t);if(i=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setRGB(Math.min(100,parseInt(i[1],10))/100,Math.min(100,parseInt(i[2],10))/100,Math.min(100,parseInt(i[3],10))/100,t);break;case"hsl":case"hsla":if(i=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return r(i[4]),this.setHSL(parseFloat(i[1])/360,parseFloat(i[2])/100,parseFloat(i[3])/100,t);break;default:pt("Color: Unknown color model "+e)}}else if(n=/^\#([A-Fa-f\d]+)$/.exec(e)){let i=n[1],a=i.length;if(a===3)return this.setRGB(parseInt(i.charAt(0),16)/15,parseInt(i.charAt(1),16)/15,parseInt(i.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(i,16),t);pt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=jt){let r=bu[e.toLowerCase()];return r!==void 0?this.setHex(r,t):pt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=bi(e.r),this.g=bi(e.g),this.b=bi(e.b),this}copyLinearToSRGB(e){return this.r=Nr(e.r),this.g=Nr(e.g),this.b=Nr(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=jt){return wt.workingToColorSpace(gn.copy(this),e),Math.round(Ct(gn.r*255,0,255))*65536+Math.round(Ct(gn.g*255,0,255))*256+Math.round(Ct(gn.b*255,0,255))}getHexString(e=jt){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=wt.workingColorSpace){wt.workingToColorSpace(gn.copy(this),t);let r=gn.r,n=gn.g,i=gn.b,a=Math.max(r,n,i),o=Math.min(r,n,i),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case r:l=(n-i)/d+(n<i?6:0);break;case n:l=(i-r)/d+2;break;case i:l=(r-n)/d+4;break}l/=6}return e.h=l,e.s=c,e.l=h,e}getRGB(e,t=wt.workingColorSpace){return wt.workingToColorSpace(gn.copy(this),t),e.r=gn.r,e.g=gn.g,e.b=gn.b,e}getStyle(e=jt){wt.workingToColorSpace(gn.copy(this),e);let t=gn.r,r=gn.g,n=gn.b;return e!==jt?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${n.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(n*255)})`}offsetHSL(e,t,r){return this.getHSL(Oi),this.setHSL(Oi.h+e,Oi.s+t,Oi.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Oi),e.getHSL(_a);let r=Tl(Oi.h,_a.h,t),n=Tl(Oi.s,_a.s,t),i=Tl(Oi.l,_a.l,t);return this.setHSL(r,n,i),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){let t=this.r,r=this.g,n=this.b,i=e.elements;return this.r=i[0]*t+i[3]*r+i[6]*n,this.g=i[1]*t+i[4]*r+i[7]*n,this.b=i[2]*t+i[5]*r+i[8]*n,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},gn=new ze;ze.NAMES=bu;var or=class s{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new ze(e),this.density=t}clone(){return new s(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}};var wi=class extends un{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Mi,this.environmentIntensity=1,this.environmentRotation=new Mi,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){let t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}},Zn=new Z,_i=new Z,Dl=new Z,xi=new Z,Ar=new Z,Er=new Z,wh=new Z,Ul=new Z,Ll=new Z,Fl=new Z,Nl=new Ot,Ol=new Ot,Bl=new Ot,Gi=class s{constructor(e=new Z,t=new Z,r=new Z){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,n){n.subVectors(r,t),Zn.subVectors(e,t),n.cross(Zn);let i=n.lengthSq();return i>0?n.multiplyScalar(1/Math.sqrt(i)):n.set(0,0,0)}static getBarycoord(e,t,r,n,i){Zn.subVectors(n,t),_i.subVectors(r,t),Dl.subVectors(e,t);let a=Zn.dot(Zn),o=Zn.dot(_i),l=Zn.dot(Dl),c=_i.dot(_i),h=_i.dot(Dl),d=a*c-o*o;if(d===0)return i.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return i.set(1-f-g,g,f)}static containsPoint(e,t,r,n){return this.getBarycoord(e,t,r,n,xi)===null?!1:xi.x>=0&&xi.y>=0&&xi.x+xi.y<=1}static getInterpolation(e,t,r,n,i,a,o,l){return this.getBarycoord(e,t,r,n,xi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(i,xi.x),l.addScaledVector(a,xi.y),l.addScaledVector(o,xi.z),l)}static getInterpolatedAttribute(e,t,r,n,i,a){return Nl.setScalar(0),Ol.setScalar(0),Bl.setScalar(0),Nl.fromBufferAttribute(e,t),Ol.fromBufferAttribute(e,r),Bl.fromBufferAttribute(e,n),a.setScalar(0),a.addScaledVector(Nl,i.x),a.addScaledVector(Ol,i.y),a.addScaledVector(Bl,i.z),a}static isFrontFacing(e,t,r,n){return Zn.subVectors(r,t),_i.subVectors(e,t),Zn.cross(_i).dot(n)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,n){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[n]),this}setFromAttributeAndIndices(e,t,r,n){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,n),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Zn.subVectors(this.c,this.b),_i.subVectors(this.a,this.b),Zn.cross(_i).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return s.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return s.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,n,i){return s.getInterpolation(e,this.a,this.b,this.c,t,r,n,i)}containsPoint(e){return s.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return s.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){let r=this.a,n=this.b,i=this.c,a,o;Ar.subVectors(n,r),Er.subVectors(i,r),Ul.subVectors(e,r);let l=Ar.dot(Ul),c=Er.dot(Ul);if(l<=0&&c<=0)return t.copy(r);Ll.subVectors(e,n);let h=Ar.dot(Ll),d=Er.dot(Ll);if(h>=0&&d<=h)return t.copy(n);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),t.copy(r).addScaledVector(Ar,a);Fl.subVectors(e,i);let f=Ar.dot(Fl),g=Er.dot(Fl);if(g>=0&&f<=g)return t.copy(i);let x=f*c-l*g;if(x<=0&&c>=0&&g<=0)return o=c/(c-g),t.copy(r).addScaledVector(Er,o);let p=h*g-f*d;if(p<=0&&d-h>=0&&f-g>=0)return wh.subVectors(i,n),o=(d-h)/(d-h+(f-g)),t.copy(n).addScaledVector(wh,o);let m=1/(p+x+u);return a=x*m,o=u*m,t.copy(r).addScaledVector(Ar,a).addScaledVector(Er,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}},$n=class{constructor(e=new Z(1/0,1/0,1/0),t=new Z(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(Jn.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(Jn.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){let r=Jn.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);let r=e.geometry;if(r!==void 0){let i=r.getAttribute("position");if(t===!0&&i!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=i.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,Jn):Jn.fromBufferAttribute(i,a),Jn.applyMatrix4(e.matrixWorld),this.expandByPoint(Jn);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),xa.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),xa.copy(r.boundingBox)),xa.applyMatrix4(e.matrixWorld),this.union(xa)}let n=e.children;for(let i=0,a=n.length;i<a;i++)this.expandByObject(n[i],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Jn),Jn.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Ss),ya.subVectors(this.max,Ss),Cr.subVectors(e.a,Ss),Rr.subVectors(e.b,Ss),Pr.subVectors(e.c,Ss),Bi.subVectors(Rr,Cr),ki.subVectors(Pr,Rr),tr.subVectors(Cr,Pr);let t=[0,-Bi.z,Bi.y,0,-ki.z,ki.y,0,-tr.z,tr.y,Bi.z,0,-Bi.x,ki.z,0,-ki.x,tr.z,0,-tr.x,-Bi.y,Bi.x,0,-ki.y,ki.x,0,-tr.y,tr.x,0];return!kl(t,Cr,Rr,Pr,ya)||(t=[1,0,0,0,1,0,0,0,1],!kl(t,Cr,Rr,Pr,ya))?!1:(Sa.crossVectors(Bi,ki),t=[Sa.x,Sa.y,Sa.z],kl(t,Cr,Rr,Pr,ya))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Jn).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Jn).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(yi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),yi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),yi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),yi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),yi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),yi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),yi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),yi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(yi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}},yi=[new Z,new Z,new Z,new Z,new Z,new Z,new Z,new Z],Jn=new Z,xa=new $n,Cr=new Z,Rr=new Z,Pr=new Z,Bi=new Z,ki=new Z,tr=new Z,Ss=new Z,ya=new Z,Sa=new Z,nr=new Z;function kl(s,e,t,r,n){for(let i=0,a=s.length-3;i<=a;i+=3){nr.fromArray(s,i);let o=n.x*Math.abs(nr.x)+n.y*Math.abs(nr.y)+n.z*Math.abs(nr.z),l=e.dot(nr),c=t.dot(nr),h=r.dot(nr);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}var qt=new Z,ba=new lt,qd=0,Dn=class extends fi{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qd++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=vu,this.updateRanges=[],this.gpuType=Vn,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let n=0,i=this.itemSize;n<i;n++)this.array[e+n]=t.array[r+n];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)ba.fromBufferAttribute(this,t),ba.applyMatrix3(e),this.setXY(t,ba.x,ba.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix3(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyMatrix4(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.applyNormalMatrix(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)qt.fromBufferAttribute(this,t),qt.transformDirection(e),this.setXYZ(t,qt.x,qt.y,qt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=xs(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Mn(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=xs(t,this.array)),t}setX(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=xs(t,this.array)),t}setY(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=xs(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=xs(t,this.array)),t}setW(e,t){return this.normalized&&(t=Mn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),r=Mn(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,n){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),r=Mn(r,this.array),n=Mn(n,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this}setXYZW(e,t,r,n,i){return e*=this.itemSize,this.normalized&&(t=Mn(t,this.array),r=Mn(r,this.array),n=Mn(n,this.array),i=Mn(i,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=n,this.array[e+3]=i,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}};var Cs=class extends Dn{constructor(e,t,r){super(new Uint16Array(e),t,r)}};var Rs=class extends Dn{constructor(e,t,r){super(new Uint32Array(e),t,r)}};var Lt=class extends Dn{constructor(e,t,r){super(new Float32Array(e),t,r)}},Zd=new $n,bs=new Z,zl=new Z,Ti=class{constructor(e=new Z,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){let r=this.center;t!==void 0?r.copy(t):Zd.setFromPoints(e).getCenter(r);let n=0;for(let i=0,a=e.length;i<a;i++)n=Math.max(n,r.distanceToSquared(e[i]));return this.radius=Math.sqrt(n),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){let t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){let r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;bs.subVectors(e,this.center);let t=bs.lengthSq();if(t>this.radius*this.radius){let r=Math.sqrt(t),n=(r-this.radius)*.5;this.center.addScaledVector(bs,n/r),this.radius+=n}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(zl.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(bs.copy(e.center).add(zl)),this.expandByPoint(bs.copy(e.center).sub(zl))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}},Jd=0,kn=new Ut,Gl=new un,Ir=new Z,In=new $n,Ms=new $n,sn=new Z,Yt=class s extends fi{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Jd++}),this.uuid=na(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ld(e)?Rs:Cs)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){let t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);let r=this.attributes.normal;if(r!==void 0){let i=new mt().getNormalMatrix(e);r.applyNormalMatrix(i),r.needsUpdate=!0}let n=this.attributes.tangent;return n!==void 0&&(n.transformDirection(e),n.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return kn.makeRotationFromQuaternion(e),this.applyMatrix4(kn),this}rotateX(e){return kn.makeRotationX(e),this.applyMatrix4(kn),this}rotateY(e){return kn.makeRotationY(e),this.applyMatrix4(kn),this}rotateZ(e){return kn.makeRotationZ(e),this.applyMatrix4(kn),this}translate(e,t,r){return kn.makeTranslation(e,t,r),this.applyMatrix4(kn),this}scale(e,t,r){return kn.makeScale(e,t,r),this.applyMatrix4(kn),this}lookAt(e){return Gl.lookAt(e),Gl.updateMatrix(),this.applyMatrix4(Gl.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ir).negate(),this.translate(Ir.x,Ir.y,Ir.z),this}setFromPoints(e){let t=this.getAttribute("position");if(t===void 0){let r=[];for(let n=0,i=e.length;n<i;n++){let a=e[n];r.push(a.x,a.y,a.z||0)}this.setAttribute("position",new Lt(r,3))}else{let r=Math.min(e.length,t.count);for(let n=0;n<r;n++){let i=e[n];t.setXYZ(n,i.x,i.y,i.z||0)}e.length>t.count&&pt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new $n);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Z(-1/0,-1/0,-1/0),new Z(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,n=t.length;r<n;r++){let i=t[r];In.setFromBufferAttribute(i),this.morphTargetsRelative?(sn.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(sn),sn.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(sn)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ft('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ti);let e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){ft("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Z,1/0);return}if(e){let r=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let i=0,a=t.length;i<a;i++){let o=t[i];Ms.setFromBufferAttribute(o),this.morphTargetsRelative?(sn.addVectors(In.min,Ms.min),In.expandByPoint(sn),sn.addVectors(In.max,Ms.max),In.expandByPoint(sn)):(In.expandByPoint(Ms.min),In.expandByPoint(Ms.max))}In.getCenter(r);let n=0;for(let i=0,a=e.count;i<a;i++)sn.fromBufferAttribute(e,i),n=Math.max(n,r.distanceToSquared(sn));if(t)for(let i=0,a=t.length;i<a;i++){let o=t[i],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)sn.fromBufferAttribute(o,c),l&&(Ir.fromBufferAttribute(e,c),sn.add(Ir)),n=Math.max(n,r.distanceToSquared(sn))}this.boundingSphere.radius=Math.sqrt(n),isNaN(this.boundingSphere.radius)&&ft('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){ft("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let r=t.position,n=t.normal,i=t.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==r.count)&&(a=new Dn(new Float32Array(4*r.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let v=0;v<r.count;v++)o[v]=new Z,l[v]=new Z;let c=new Z,h=new Z,d=new Z,u=new lt,f=new lt,g=new lt,x=new Z,p=new Z;function m(v,T,I){c.fromBufferAttribute(r,v),h.fromBufferAttribute(r,T),d.fromBufferAttribute(r,I),u.fromBufferAttribute(i,v),f.fromBufferAttribute(i,T),g.fromBufferAttribute(i,I),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let P=1/(f.x*g.y-g.x*f.y);isFinite(P)&&(x.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(P),p.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(P),o[v].add(x),o[T].add(x),o[I].add(x),l[v].add(p),l[T].add(p),l[I].add(p))}let S=this.groups;S.length===0&&(S=[{start:0,count:e.count}]);for(let v=0,T=S.length;v<T;++v){let I=S[v],P=I.start,C=I.count;for(let N=P,R=P+C;N<R;N+=3)m(e.getX(N+0),e.getX(N+1),e.getX(N+2))}let E=new Z,y=new Z,b=new Z,M=new Z;function A(v){b.fromBufferAttribute(n,v),M.copy(b);let T=o[v];E.copy(T),E.sub(b.multiplyScalar(b.dot(T))).normalize(),y.crossVectors(M,T);let P=y.dot(l[v])<0?-1:1;a.setXYZW(v,E.x,E.y,E.z,P)}for(let v=0,T=S.length;v<T;++v){let I=S[v],P=I.start,C=I.count;for(let N=P,R=P+C;N<R;N+=3)A(e.getX(N+0)),A(e.getX(N+1)),A(e.getX(N+2))}this._transformed=!0}computeVertexNormals(){let e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new Dn(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let u=0,f=r.count;u<f;u++)r.setXYZ(u,0,0,0);let n=new Z,i=new Z,a=new Z,o=new Z,l=new Z,c=new Z,h=new Z,d=new Z;if(e)for(let u=0,f=e.count;u<f;u+=3){let g=e.getX(u+0),x=e.getX(u+1),p=e.getX(u+2);n.fromBufferAttribute(t,g),i.fromBufferAttribute(t,x),a.fromBufferAttribute(t,p),h.subVectors(a,i),d.subVectors(n,i),h.cross(d),o.fromBufferAttribute(r,g),l.fromBufferAttribute(r,x),c.fromBufferAttribute(r,p),o.add(h),l.add(h),c.add(h),r.setXYZ(g,o.x,o.y,o.z),r.setXYZ(x,l.x,l.y,l.z),r.setXYZ(p,c.x,c.y,c.z)}else for(let u=0,f=t.count;u<f;u+=3)n.fromBufferAttribute(t,u+0),i.fromBufferAttribute(t,u+1),a.fromBufferAttribute(t,u+2),h.subVectors(a,i),d.subVectors(n,i),h.cross(d),r.setXYZ(u+0,h.x,h.y,h.z),r.setXYZ(u+1,h.x,h.y,h.z),r.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){let e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)sn.fromBufferAttribute(e,t),sn.normalize(),e.setXYZ(t,sn.x,sn.y,sn.z)}toNonIndexed(){function e(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let x=0,p=l.length;x<p;x++){o.isInterleavedBufferAttribute?f=l[x]*o.data.stride+o.offset:f=l[x]*h;for(let m=0;m<h;m++)u[g++]=c[f++]}return new Dn(u,h,d)}if(this.index===null)return pt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let t=new s,r=this.index.array,n=this.attributes;for(let o in n){let l=n[o],c=e(l,r);t.setAttribute(o,c)}let i=this.morphAttributes;for(let o in i){let l=[],c=i[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=e(u,r);l.push(f)}t.morphAttributes[o]=l}t.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];t.addGroup(c.start,c.count,c.materialIndex)}return t}toJSON(){let e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};let t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});let r=this.attributes;for(let l in r){let c=r[l];e.data.attributes[l]=c.toJSON(e.data)}let n={},i=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(e.data))}h.length>0&&(n[l]=h,i=!0)}i&&(e.data.morphAttributes=n,e.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let t={};this.name=e.name;let r=e.index;r!==null&&this.setIndex(r.clone());let n=e.attributes;for(let c in n){let h=n[c];this.setAttribute(c,h.clone(t))}let i=e.morphAttributes;for(let c in i){let h=[],d=i[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(t));this.morphAttributes[c]=h}this.morphTargetsRelative=e.morphTargetsRelative;let a=e.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}};var Vl=new Z,Kd=new Z,jd=new mt,Kn=class{constructor(e=new Z(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,n){return this.normal.set(e,t,r),this.constant=n,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){let n=Vl.subVectors(r,t).cross(Kd.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(n,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){let e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){let n=e.delta(Vl),i=this.normal.dot(n);if(i===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;let a=-(e.start.dot(this.normal)+this.constant)/i;return r===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(n,a)}intersectsLine(e){let t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){let r=t||jd.getNormalMatrix(e),n=this.coplanarPoint(Vl).applyMatrix4(e),i=this.normal.applyMatrix3(r).normalize();return this.constant=-n.dot(i),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}},$d=0,Ai=class extends fi{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:$d++}),this.uuid=na(),this.name="",this.type="Material",this.blending=is,this.side=Ji,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ac,this.blendDst=oc,this.blendEquation=hr,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ze(0,0,0),this.blendAlpha=0,this.depthFunc=Or,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=hu,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Ba,this.stencilZFail=Ba,this.stencilZPass=Ba,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(let t in e){let r=e[t];if(r===void 0){pt(`Material: parameter '${t}' has value of undefined.`);continue}let n=this[t];if(n===void 0){pt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}n&&n.isColor?n.set(r):n&&n.isVector2&&r&&r.isVector2||n&&n.isEuler&&r&&r.isEuler||n&&n.isVector3&&r&&r.isVector3?n.copy(r):this[t]=r}}toJSON(e){let t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});let r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(i=>i.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function n(i){let a=[];for(let o in i){let l=i[o];delete l.metadata,a.push(l)}return a}if(t){let i=n(e.textures),a=n(e.images);i.length>0&&(r.textures=i),a.length>0&&(r.images=a)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new ze().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new Kn().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new lt().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;let t=e.clippingPlanes,r=null;if(t!==null){let n=t.length;r=new Array(n);for(let i=0;i!==n;++i)r[i]=t[i].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}};var Si=new Z,Hl=new Z,Ma=new Z,wa=new Z,Wr=class{constructor(e=new Z,t=new Z(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Si)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);let r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){let t=Si.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Si.copy(this.origin).addScaledVector(this.direction,t),Si.distanceToSquared(e))}distanceSqToSegment(e,t,r,n){Hl.copy(e).add(t).multiplyScalar(.5),Ma.copy(t).sub(e).normalize(),wa.copy(this.origin).sub(Hl);let i=e.distanceTo(t)*.5,a=-this.direction.dot(Ma),o=wa.dot(this.direction),l=-wa.dot(Ma),c=wa.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=i*h,d>=0)if(u>=-g)if(u<=g){let x=1/h;d*=x,u*=x,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=i,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-i,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*i+o)),u=d>0?-i:Math.min(Math.max(-i,-l),i),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-i,-l),i),f=u*(u+2*l)+c):(d=Math.max(0,-(a*i+o)),u=d>0?i:Math.min(Math.max(-i,-l),i),f=-d*d+u*(u+2*l)+c);else u=a>0?-i:i,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return r&&r.copy(this.origin).addScaledVector(this.direction,d),n&&n.copy(Hl).addScaledVector(Ma,u),f}intersectSphere(e,t){if(e.radius<0)return null;Si.subVectors(e.center,this.origin);let r=Si.dot(this.direction),n=Si.dot(Si)-r*r,i=e.radius*e.radius;if(n>i)return null;let a=Math.sqrt(i-n),o=r-a,l=r+a;return l<0?null:o<0?this.at(l,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){let t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;let r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){let r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){let t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,n,i,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(r=(e.min.x-u.x)*c,n=(e.max.x-u.x)*c):(r=(e.max.x-u.x)*c,n=(e.min.x-u.x)*c),h>=0?(i=(e.min.y-u.y)*h,a=(e.max.y-u.y)*h):(i=(e.max.y-u.y)*h,a=(e.min.y-u.y)*h),r>a||i>n||((i>r||isNaN(r))&&(r=i),(a<n||isNaN(n))&&(n=a),d>=0?(o=(e.min.z-u.z)*d,l=(e.max.z-u.z)*d):(o=(e.max.z-u.z)*d,l=(e.min.z-u.z)*d),r>l||o>n)||((o>r||r!==r)&&(r=o),(l<n||n!==n)&&(n=l),n<0)?null:this.at(r>=0?r:n,t)}intersectsBox(e){return this.intersectBox(e,Si)!==null}intersectTriangle(e,t,r,n,i){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=e.x-a.x,u=e.y-a.y,f=e.z-a.z,g=t.x-a.x,x=t.y-a.y,p=t.z-a.z,m=r.x-a.x,S=r.y-a.y,E=r.z-a.z,y=Math.abs(l),b=Math.abs(c),M=Math.abs(h),A,v,T,I,P,C,N,R,O,z,K,re;if(y>=b&&y>=M?(T=l,C=d,O=g,re=m,l>=0?(A=c,v=h,I=u,P=f,N=x,R=p,z=S,K=E):(A=h,v=c,I=f,P=u,N=p,R=x,z=E,K=S)):b>=M?(T=c,C=u,O=x,re=S,c>=0?(A=h,v=l,I=f,P=d,N=p,R=g,z=E,K=m):(A=l,v=h,I=d,P=f,N=g,R=p,z=m,K=E)):(T=h,C=f,O=p,re=E,h>=0?(A=l,v=c,I=d,P=u,N=g,R=x,z=m,K=S):(A=c,v=l,I=u,P=d,N=x,R=g,z=S,K=m)),T===0)return null;let G=A/T,V=v/T,U=1/T,J=I-G*C,j=P-V*C,ae=N-G*O,Q=R-V*O,me=z-G*re,B=K-V*re,H=me*Q-B*ae,de=J*B-j*me,we=ae*j-Q*J;if(n){if(H<0||de<0||we<0)return null}else if((H<0||de<0||we<0)&&(H>0||de>0||we>0))return null;let ce=H+de+we;if(ce===0)return null;let fe=U*(H*C+de*O+we*re);return(ce>0?fe<0:fe>0)?null:this.at(fe/ce,i)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},kt=class extends Ai{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ze(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.combine=lc,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}},Th=new Ut,ir=new Wr,Ta=new Ti,Ah=new Z,Aa=new Z,Ea=new Z,Ca=new Z,Wl=new Z,Ra=new Z,Eh=new Z,Pa=new Z,_t=class extends un{constructor(e=new Yt,t=new kt){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){let t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){let n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){let o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}getVertexPosition(e,t){let r=this.geometry,n=r.attributes.position,i=r.morphAttributes.position,a=r.morphTargetsRelative;t.fromBufferAttribute(n,e);let o=this.morphTargetInfluences;if(i&&o){Ra.set(0,0,0);for(let l=0,c=i.length;l<c;l++){let h=o[l],d=i[l];h!==0&&(Wl.fromBufferAttribute(d,e),a?Ra.addScaledVector(Wl,h):Ra.addScaledVector(Wl.sub(t),h))}t.add(Ra)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let r=this.geometry,n=this.material,i=this.matrixWorld;n!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),Ta.copy(r.boundingSphere),Ta.applyMatrix4(i),ir.copy(e.ray).recast(e.near),!(Ta.containsPoint(ir.origin)===!1&&(ir.intersectSphere(Ta,Ah)===null||ir.origin.distanceToSquared(Ah)>(e.far-e.near)**2))&&(Th.copy(i).invert(),ir.copy(e.ray).applyMatrix4(Th),!(r.boundingBox!==null&&ir.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ir)))}_computeIntersections(e,t,r){let n,i=this.geometry,a=this.material,o=i.index,l=i.attributes.position,c=i.attributes.uv,h=i.attributes.uv1,d=i.attributes.normal,u=i.groups,f=i.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(o.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,b=E;y<b;y+=3){let M=o.getX(y),A=o.getX(y+1),v=o.getX(y+2);n=Ia(this,m,e,r,c,h,d,M,A,v),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(o.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let S=o.getX(p),E=o.getX(p+1),y=o.getX(p+2);n=Ia(this,a,e,r,c,h,d,S,E,y),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,x=u.length;g<x;g++){let p=u[g],m=a[p.materialIndex],S=Math.max(p.start,f.start),E=Math.min(l.count,Math.min(p.start+p.count,f.start+f.count));for(let y=S,b=E;y<b;y+=3){let M=y,A=y+1,v=y+2;n=Ia(this,m,e,r,c,h,d,M,A,v),n&&(n.faceIndex=Math.floor(y/3),n.face.materialIndex=p.materialIndex,t.push(n))}}else{let g=Math.max(0,f.start),x=Math.min(l.count,f.start+f.count);for(let p=g,m=x;p<m;p+=3){let S=p,E=p+1,y=p+2;n=Ia(this,a,e,r,c,h,d,S,E,y),n&&(n.faceIndex=Math.floor(p/3),t.push(n))}}}};function Qd(s,e,t,r,n,i,a,o){let l;if(e.side===Qt?l=r.intersectTriangle(a,i,n,!0,o):l=r.intersectTriangle(n,i,a,e.side===Ji,o),l===null)return null;Pa.copy(o),Pa.applyMatrix4(s.matrixWorld);let c=t.ray.origin.distanceTo(Pa);return c<t.near||c>t.far?null:{distance:c,point:Pa.clone(),object:s}}function Ia(s,e,t,r,n,i,a,o,l,c){s.getVertexPosition(o,Aa),s.getVertexPosition(l,Ea),s.getVertexPosition(c,Ca);let h=Qd(s,e,t,r,Aa,Ea,Ca,Eh);if(h){let d=new Z;Gi.getBarycoord(Eh,Aa,Ea,Ca,d),n&&(h.uv=Gi.getInterpolatedAttribute(n,o,l,c,d,new lt)),i&&(h.uv1=Gi.getInterpolatedAttribute(i,o,l,c,d,new lt)),a&&(h.normal=Gi.getInterpolatedAttribute(a,o,l,c,d,new Z),h.normal.dot(r.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new Z,materialIndex:0};Gi.getNormal(Aa,Ea,Ca,u.normal),h.face=u,h.barycoord=d}return h}var Ps=class extends on{constructor(e=null,t=1,r=1,n,i,a,o,l,c=an,h=an,d,u){super(null,a,o,l,c,h,n,i,d,u),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}};var Is=class extends Dn{constructor(e,t,r,n=1){super(e,t,r),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=n}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){let e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}};var rr=new Ti,ef=new lt(.5,.5),Da=new Z,Xr=class{constructor(e=new Kn,t=new Kn,r=new Kn,n=new Kn,i=new Kn,a=new Kn){this.planes=[e,t,r,n,i,a]}set(e,t,r,n,i,a){let o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(r),o[3].copy(n),o[4].copy(i),o[5].copy(a),this}copy(e){let t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=jn,r=!1){let n=this.planes,i=e.elements,a=i[0],o=i[1],l=i[2],c=i[3],h=i[4],d=i[5],u=i[6],f=i[7],g=i[8],x=i[9],p=i[10],m=i[11],S=i[12],E=i[13],y=i[14],b=i[15];if(n[0].setComponents(c-a,f-h,m-g,b-S).normalize(),n[1].setComponents(c+a,f+h,m+g,b+S).normalize(),n[2].setComponents(c+o,f+d,m+x,b+E).normalize(),n[3].setComponents(c-o,f-d,m-x,b-E).normalize(),r)n[4].setComponents(l,u,p,y).normalize(),n[5].setComponents(c-l,f-u,m-p,b-y).normalize();else if(n[4].setComponents(c-l,f-u,m-p,b-y).normalize(),t===jn)n[5].setComponents(c+l,f+u,m+p,b+y).normalize();else if(t===Br)n[5].setComponents(l,u,p,y).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{let t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(rr)}intersectsSprite(e){rr.center.set(0,0,0);let t=ef.distanceTo(e.center);return rr.radius=.7071067811865476+t,rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(rr)}intersectsSphere(e){let t=this.planes,r=e.center,n=-e.radius;for(let i=0;i<6;i++)if(t[i].distanceToPoint(r)<n)return!1;return!0}intersectsBox(e){let t=this.planes;for(let r=0;r<6;r++){let n=t[r];if(Da.x=n.normal.x>0?e.max.x:e.min.x,Da.y=n.normal.y>0?e.max.y:e.min.y,Da.z=n.normal.z>0?e.max.z:e.min.z,n.distanceToPoint(Da)<0)return!1}return!0}containsPoint(e){let t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}};var Ei=class extends Ai{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ze(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}},Ch=new Ut,jl=new Wr,Ua=new Ti,La=new Z,Vi=class extends un{constructor(e=new Yt,t=new Ei){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){let r=this.geometry,n=this.matrixWorld,i=e.params.Points.threshold,a=r.drawRange;if(r.boundingSphere===null&&r.computeBoundingSphere(),Ua.copy(r.boundingSphere),Ua.applyMatrix4(n),Ua.radius+=i,e.ray.intersectsSphere(Ua)===!1)return;Ch.copy(n).invert(),jl.copy(e.ray).applyMatrix4(Ch);let o=i/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=r.index,d=r.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,x=f;g<x;g++){let p=c.getX(g);La.fromBufferAttribute(d,p),Rh(La,p,l,n,e,t,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,x=f;g<x;g++)La.fromBufferAttribute(d,g),Rh(La,g,l,n,e,t,this)}}updateMorphTargets(){let t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){let n=t[r[0]];if(n!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let i=0,a=n.length;i<a;i++){let o=n[i].name||String(i);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=i}}}}};function Rh(s,e,t,r,n,i,a){let o=jl.distanceSqToPoint(s);if(o<t){let l=new Z;jl.closestPointToPoint(s,l),l.applyMatrix4(r);let c=n.ray.origin.distanceTo(l);if(c<n.near||c>n.far)return;i.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}var Ds=class extends on{constructor(e=[],t=Ki,r,n,i,a,o,l,c,h){super(e,t,r,n,i,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}},Yr=class extends on{constructor(e,t,r,n,i,a,o,l,c){super(e,t,r,n,i,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}};var Hi=class extends on{constructor(e,t,r=ei,n,i,a,o=an,l=an,c,h=di,d=1){if(h!==di&&h!==$i)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:e,height:t,depth:d};super(u,n,i,a,o,l,h,r,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Gr(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){let t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}},Qa=class extends Hi{constructor(e,t=ei,r=Ki,n,i,a=an,o=an,l,c=di){let h={width:e,height:e,depth:1},d=[h,h,h,h,h,h];super(e,e,t,r,n,i,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}},Us=class extends on{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}},Wi=class s extends Yt{constructor(e=1,t=1,r=1,n=1,i=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:n,heightSegments:i,depthSegments:a};let o=this;n=Math.floor(n),i=Math.floor(i),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,r,t,e,a,i,0),g("z","y","x",1,-1,r,t,-e,a,i,1),g("x","z","y",1,1,e,r,t,n,a,2),g("x","z","y",1,-1,e,r,-t,n,a,3),g("x","y","z",1,-1,e,t,r,n,i,4),g("x","y","z",-1,-1,e,t,-r,n,i,5),this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2));function g(x,p,m,S,E,y,b,M,A,v,T){let I=y/A,P=b/v,C=y/2,N=b/2,R=M/2,O=A+1,z=v+1,K=0,re=0,G=new Z;for(let V=0;V<z;V++){let U=V*P-N;for(let J=0;J<O;J++){let j=J*I-C;G[x]=j*S,G[p]=U*E,G[m]=R,c.push(G.x,G.y,G.z),G[x]=0,G[p]=0,G[m]=M>0?1:-1,h.push(G.x,G.y,G.z),d.push(J/A),d.push(1-V/v),K+=1}}for(let V=0;V<v;V++)for(let U=0;U<A;U++){let J=u+U+O*V,j=u+U+O*(V+1),ae=u+(U+1)+O*(V+1),Q=u+(U+1)+O*V;l.push(J,j,Q),l.push(j,ae,Q),re+=6}o.addGroup(f,re,T),f+=re,u+=K}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}};var qr=class s extends Yt{constructor(e=1,t=1,r=1,n=32,i=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:r,radialSegments:n,heightSegments:i,openEnded:a,thetaStart:o,thetaLength:l};let c=this;n=Math.floor(n),i=Math.floor(i);let h=[],d=[],u=[],f=[],g=0,x=[],p=r/2,m=0;S(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(h),this.setAttribute("position",new Lt(d,3)),this.setAttribute("normal",new Lt(u,3)),this.setAttribute("uv",new Lt(f,2));function S(){let y=new Z,b=new Z,M=0,A=(t-e)/r;for(let v=0;v<=i;v++){let T=[],I=v/i,P=I*(t-e)+e;for(let C=0;C<=n;C++){let N=C/n,R=N*l+o,O=Math.sin(R),z=Math.cos(R);b.x=P*O,b.y=-I*r+p,b.z=P*z,d.push(b.x,b.y,b.z),y.set(O,A,z).normalize(),u.push(y.x,y.y,y.z),f.push(N,1-I),T.push(g++)}x.push(T)}for(let v=0;v<n;v++)for(let T=0;T<i;T++){let I=x[T][v],P=x[T+1][v],C=x[T+1][v+1],N=x[T][v+1];(e>0||T!==0)&&(h.push(I,P,N),M+=3),(t>0||T!==i-1)&&(h.push(P,C,N),M+=3)}c.addGroup(m,M,0),m+=M}function E(y){let b=g,M=new lt,A=new Z,v=0,T=y===!0?e:t,I=y===!0?1:-1;for(let C=1;C<=n;C++)d.push(0,p*I,0),u.push(0,I,0),f.push(.5,.5),g++;let P=g;for(let C=0;C<=n;C++){let R=C/n*l+o,O=Math.cos(R),z=Math.sin(R);A.x=T*z,A.y=p*I,A.z=T*O,d.push(A.x,A.y,A.z),u.push(0,I,0),M.x=O*.5+.5,M.y=z*.5*I+.5,f.push(M.x,M.y),g++}for(let C=0;C<n;C++){let N=b+C,R=P+C;y===!0?h.push(R,R+1,N):h.push(R+1,R,N),v+=3}c.addGroup(m,v,y===!0?1:2),m+=v}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}};var Wt=class s extends Yt{constructor(e=1,t=1,r=1,n=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:n};let i=e/2,a=t/2,o=Math.floor(r),l=Math.floor(n),c=o+1,h=l+1,d=e/o,u=t/l,f=[],g=[],x=[],p=[];for(let m=0;m<h;m++){let S=m*u-a;for(let E=0;E<c;E++){let y=E*d-i;g.push(y,-S,0),x.push(0,0,1),p.push(E/o),p.push(1-m/l)}}for(let m=0;m<l;m++)for(let S=0;S<o;S++){let E=S+c*m,y=S+c*(m+1),b=S+1+c*(m+1),M=S+1+c*m;f.push(E,y,M),f.push(y,b,M)}this.setIndex(f),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.width,e.height,e.widthSegments,e.heightSegments)}};var Xi=class s extends Yt{constructor(e=1,t=32,r=16,n=0,i=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:n,phiLength:i,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new Z,u=new Z,f=[],g=[],x=[],p=[];for(let m=0;m<=r;m++){let S=[],E=m/r,y=a+E*o,b=e*Math.cos(y),M=Math.sqrt(e*e-b*b),A=0;m===0&&a===0?A=.5/t:m===r&&l===Math.PI&&(A=-.5/t);for(let v=0;v<=t;v++){let T=v/t,I=n+T*i;d.x=-M*Math.cos(I),d.y=b,d.z=M*Math.sin(I),g.push(d.x,d.y,d.z),u.copy(d).normalize(),x.push(u.x,u.y,u.z),p.push(T+A,1-E),S.push(c++)}h.push(S)}for(let m=0;m<r;m++)for(let S=0;S<t;S++){let E=h[m][S+1],y=h[m][S],b=h[m+1][S],M=h[m+1][S+1];(m!==0||a>0)&&f.push(E,y,M),(m!==r-1||l<Math.PI)&&f.push(y,b,M)}this.setIndex(f),this.setAttribute("position",new Lt(g,3)),this.setAttribute("normal",new Lt(x,3)),this.setAttribute("uv",new Lt(p,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}};var Zr=class s extends Yt{constructor(e=1,t=.4,r=12,n=48,i=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:n,arc:i,thetaStart:a,thetaLength:o},r=Math.floor(r),n=Math.floor(n);let l=[],c=[],h=[],d=[],u=new Z,f=new Z,g=new Z;for(let x=0;x<=r;x++){let p=a+x/r*o;for(let m=0;m<=n;m++){let S=m/n*i;f.x=(e+t*Math.cos(p))*Math.cos(S),f.y=(e+t*Math.cos(p))*Math.sin(S),f.z=t*Math.sin(p),c.push(f.x,f.y,f.z),u.x=e*Math.cos(S),u.y=e*Math.sin(S),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(m/n),d.push(x/r)}}for(let x=1;x<=r;x++)for(let p=1;p<=n;p++){let m=(n+1)*x+p-1,S=(n+1)*(x-1)+p-1,E=(n+1)*(x-1)+p,y=(n+1)*x+p;l.push(m,S,y),l.push(S,E,y)}this.setIndex(l),this.setAttribute("position",new Lt(c,3)),this.setAttribute("normal",new Lt(h,3)),this.setAttribute("uv",new Lt(d,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new s(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}};function dr(s){let e={};for(let t in s){e[t]={};for(let r in s[t]){let n=s[t][r];if(Ph(n))n.isRenderTargetTexture?(pt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=n.clone();else if(Array.isArray(n))if(Ph(n[0])){let i=[];for(let a=0,o=n.length;a<o;a++)i[a]=n[a].clone();e[t][r]=i}else e[t][r]=n.slice();else e[t][r]=n}}return e}function vn(s){let e={};for(let t=0;t<s.length;t++){let r=dr(s[t]);for(let n in r)e[n]=r[n]}return e}function Ph(s){return s&&(s.isColor||s.isMatrix3||s.isMatrix4||s.isVector2||s.isVector3||s.isVector4||s.isTexture||s.isQuaternion)}function tf(s){let e=[];for(let t=0;t<s.length;t++)e.push(s[t].clone());return e}function yc(s){let e=s.getRenderTarget();return e===null?s.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:wt.workingColorSpace}var ti={clone:dr,merge:vn},nf=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,rf=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,zt=class extends Ai{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=nf,this.fragmentShader=rf,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=dr(e.uniforms),this.uniformsGroups=tf(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){let t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(let n in this.uniforms){let a=this.uniforms[n].value;a&&a.isTexture?t.uniforms[n]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[n]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[n]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[n]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[n]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[n]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[n]={type:"m4",value:a.toArray()}:t.uniforms[n]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;let r={};for(let n in this.extensions)this.extensions[n]===!0&&(r[n]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(let r in e.uniforms){let n=e.uniforms[r];switch(this.uniforms[r]={},n.type){case"t":this.uniforms[r].value=t[n.value]||null;break;case"c":this.uniforms[r].value=new ze().setHex(n.value);break;case"v2":this.uniforms[r].value=new lt().fromArray(n.value);break;case"v3":this.uniforms[r].value=new Z().fromArray(n.value);break;case"v4":this.uniforms[r].value=new Ot().fromArray(n.value);break;case"m3":this.uniforms[r].value=new mt().fromArray(n.value);break;case"m4":this.uniforms[r].value=new Ut().fromArray(n.value);break;default:this.uniforms[r].value=n.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(let r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}},Jr=class extends zt{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},pi=class extends Ai{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new ze(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new ze(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qo,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Mi,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}};var Kr=class extends Ai{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=lu,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}},jr=class extends Ai{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}};function Dr(s,e){return!s||s.constructor===e?s:typeof e.BYTES_PER_ELEMENT=="number"?new e(s):Array.prototype.slice.call(s)}function Xl(s){return s!==void 0&&s.inTangents!==void 0&&s.outTangents!==void 0}var Yi=class{constructor(e,t,r,n){this.parameterPositions=e,this._cachedIndex=0,this.resultBuffer=n!==void 0?n:new t.constructor(r),this.sampleValues=t,this.valueSize=r,this.settings=null,this.DefaultSettings_={}}evaluate(e){let t=this.parameterPositions,r=this._cachedIndex,n=t[r],i=t[r-1];e:{t:{let a;n:{i:if(!(e<n)){for(let o=r+2;;){if(n===void 0){if(e<i)break i;return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}if(r===o)break;if(i=n,n=t[++r],e<n)break t}a=t.length;break n}if(!(e>=i)){let o=t[1];e<o&&(r=2,i=o);for(let l=r-2;;){if(i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(r===l)break;if(n=i,i=t[--r-1],e>=i)break t}a=r,r=0;break n}break e}for(;r<a;){let o=r+a>>>1;e<t[o]?a=o:r=o+1}if(n=t[r],i=t[r-1],i===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(n===void 0)return r=t.length,this._cachedIndex=r,this.copySampleValue_(r-1)}this._cachedIndex=r,this.intervalChanged_(r,i,n)}return this.interpolate_(r,i,e,n)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(e){let t=this.resultBuffer,r=this.sampleValues,n=this.valueSize,i=e*n;for(let a=0;a!==n;++a)t[a]=r[i+a];return t}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},eo=class extends Yi{constructor(e,t,r,n){super(e,t,r,n),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Zl,endingEnd:Zl}}intervalChanged_(e,t,r){let n=this.parameterPositions,i=e-2,a=e+1,o=n[i],l=n[a];if(o===void 0)switch(this.getSettings_().endingStart){case Jl:i=e,o=2*t-r;break;case Kl:i=n.length-2,o=t+n[i]-n[i+1];break;default:i=e,o=r}if(l===void 0)switch(this.getSettings_().endingEnd){case Jl:a=e,l=2*r-t;break;case Kl:a=1,l=r+n[1]-n[0];break;default:a=e-1,l=t}let c=(r-t)*.5,h=this.valueSize;this._weightPrev=c/(t-o),this._weightNext=c/(l-r),this._offsetPrev=i*h,this._offsetNext=a*h}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(r-t)/(n-t),x=g*g,p=x*g,m=-u*p+2*u*x-u*g,S=(1+u)*p+(-1.5-2*u)*x+(-.5+u)*g+1,E=(-1-f)*p+(1.5+f)*x+.5*g,y=f*p-f*x;for(let b=0;b!==o;++b)i[b]=m*a[h+b]+S*a[c+b]+E*a[l+b]+y*a[d+b];return i}},to=class extends Yi{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=(r-t)/(n-t),d=1-h;for(let u=0;u!==o;++u)i[u]=a[c+u]*d+a[l+u]*h;return i}},no=class extends Yi{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e){return this.copySampleValue_(e-1)}},io=class extends Yi{interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=e*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(r-t)/(n-t),x=1-g;for(let p=0;p!==o;++p)i[p]=a[c+p]*x+a[l+p]*g;return i}let u=o*2,f=e-1;for(let g=0;g!==o;++g){let x=a[c+g],p=a[l+g],m=f*u+g*2,S=d[m],E=d[m+1],y=e*u+g*2,b=h[y],M=h[y+1],A=af(r,t,S,b,n);i[g]=Mu(A,x,E,M,p)}return i}};function Mu(s,e,t,r,n){let i=1-s;return i*i*i*e+3*i*i*s*t+3*i*s*s*r+s*s*s*n}function sf(s,e,t,r,n){let i=1-s;return 3*i*i*(t-e)+6*i*s*(r-t)+3*s*s*(n-r)}function af(s,e,t,r,n){let i=(s-e)/(n-e);for(let a=0;a<8;a++){let o=Mu(i,e,t,r,n)-s;if(Math.abs(o)<1e-10)break;let l=sf(i,e,t,r,n);if(Math.abs(l)<1e-10)break;i=Math.max(0,Math.min(1,i-o/l))}return i}var Un=class{constructor(e,t,r,n){if(e===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(t===void 0||t.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+e);this.name=e,this.times=Dr(t,this.TimeBufferType),this.values=Dr(r,this.ValueBufferType),this.setInterpolation(n||this.DefaultInterpolation)}static toJSON(e){let t=e.constructor,r;if(t.toJSON!==this.toJSON)r=t.toJSON(e);else{r={name:e.name,times:Dr(e.times,Array),values:Dr(e.values,Array)};let n=e.getInterpolation();n!==e.DefaultInterpolation&&(r.interpolation=n),Xl(e.settings)&&(r.settings={inTangents:Dr(e.settings.inTangents,Array),outTangents:Dr(e.settings.outTangents,Array)})}return r.type=e.ValueTypeName,r}InterpolantFactoryMethodDiscrete(e){return new no(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodLinear(e){return new to(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodSmooth(e){return new eo(this.times,this.values,this.getValueSize(),e)}InterpolantFactoryMethodBezier(e){let t=new io(this.times,this.values,this.getValueSize(),e);return this.settings&&(t.inTangents=this.settings.inTangents,t.outTangents=this.settings.outTangents),t}setInterpolation(e){let t;switch(e){case ws:t=this.InterpolantFactoryMethodDiscrete;break;case Za:t=this.InterpolantFactoryMethodLinear;break;case Oa:t=this.InterpolantFactoryMethodSmooth;break;case ql:t=this.InterpolantFactoryMethodBezier;break}if(t===void 0){let r="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(e!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(r);return pt("KeyframeTrack:",r),this}return this.createInterpolant=t,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ws;case this.InterpolantFactoryMethodLinear:return Za;case this.InterpolantFactoryMethodSmooth:return Oa;case this.InterpolantFactoryMethodBezier:return ql}}getValueSize(){return this.values.length/this.times.length}shift(e){if(e!==0){let t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]+=e}return this}scale(e){if(e!==1){let t=this.times;for(let r=0,n=t.length;r!==n;++r)t[r]*=e;Xl(this.settings)&&(Ih(this.settings.inTangents,e),Ih(this.settings.outTangents,e))}return this}trim(e,t){let r=this.times,n=r.length,i=0,a=n-1;for(;i!==n&&r[i]<e;)++i;for(;a!==-1&&r[a]>t;)--a;if(++a,i!==0||a!==n){i>=a&&(a=Math.max(a,1),i=a-1);let o=this.getValueSize();this.times=r.slice(i,a),this.values=this.values.slice(i*o,a*o)}return this}validate(){let e=!0,t=this.getValueSize();t-Math.floor(t)!==0&&(ft("KeyframeTrack: Invalid value size in track.",this),e=!1);let r=this.times,n=this.values,i=r.length;i===0&&(ft("KeyframeTrack: Track is empty.",this),e=!1);let a=null;for(let o=0;o!==i;o++){let l=r[o];if(typeof l=="number"&&isNaN(l)){ft("KeyframeTrack: Time is not a valid number.",this,o,l),e=!1;break}if(a!==null&&a>l){ft("KeyframeTrack: Out of order keys.",this,o,l,a),e=!1;break}a=l}if(n!==void 0&&Fd(n))for(let o=0,l=n.length;o!==l;++o){let c=n[o];if(isNaN(c)){ft("KeyframeTrack: Value is not a valid number.",this,o,c),e=!1;break}}return e}optimize(){let e=this.times.slice(),t=this.values.slice(),r=this.getValueSize(),n=this.getInterpolation()===Oa,i=e.length-1,a=1;for(let o=1;o<i;++o){let l=!1,c=e[o],h=e[o+1];if(c!==h&&(o!==1||c!==e[0]))if(n)l=!0;else{let d=o*r,u=d-r,f=d+r;for(let g=0;g!==r;++g){let x=t[d+g];if(x!==t[u+g]||x!==t[f+g]){l=!0;break}}}if(l){if(o!==a){e[a]=e[o];let d=o*r,u=a*r;for(let f=0;f!==r;++f)t[u+f]=t[d+f]}++a}}if(i>0){e[a]=e[i];for(let o=i*r,l=a*r,c=0;c!==r;++c)t[l+c]=t[o+c];++a}return a!==e.length?(this.times=e.slice(0,a),this.values=t.slice(0,a*r)):(this.times=e,this.values=t),this}clone(){let e=this.times.slice(),t=this.values.slice(),r=this.constructor,n=new r(this.name,e,t);return n.createInterpolant=this.createInterpolant,Xl(this.settings)&&(n.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),n}};function Ih(s,e){for(let t=0,r=s.length;t!==r;t+=2)s[t]*=e}Un.prototype.ValueTypeName="";Un.prototype.TimeBufferType=Float32Array;Un.prototype.ValueBufferType=Float32Array;Un.prototype.DefaultInterpolation=Za;var qi=class extends Un{constructor(e,t,r){super(e,t,r)}};qi.prototype.ValueTypeName="bool";qi.prototype.ValueBufferType=Array;qi.prototype.DefaultInterpolation=ws;qi.prototype.InterpolantFactoryMethodLinear=void 0;qi.prototype.InterpolantFactoryMethodSmooth=void 0;var ro=class extends Un{constructor(e,t,r,n){super(e,t,r,n)}};ro.prototype.ValueTypeName="color";var so=class extends Un{constructor(e,t,r,n){super(e,t,r,n)}};so.prototype.ValueTypeName="number";var ao=class extends Yi{constructor(e,t,r,n){super(e,t,r,n)}interpolate_(e,t,r,n){let i=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(r-t)/(n-t),c=e*o;for(let h=c+o;c!==h;c+=4)zn.slerpFlat(i,0,a,c-o,a,c,l);return i}},Ls=class extends Un{constructor(e,t,r,n){super(e,t,r,n)}InterpolantFactoryMethodLinear(e){return new ao(this.times,this.values,this.getValueSize(),e)}};Ls.prototype.ValueTypeName="quaternion";Ls.prototype.InterpolantFactoryMethodSmooth=void 0;var Zi=class extends Un{constructor(e,t,r){super(e,t,r)}};Zi.prototype.ValueTypeName="string";Zi.prototype.ValueBufferType=Array;Zi.prototype.DefaultInterpolation=ws;Zi.prototype.InterpolantFactoryMethodLinear=void 0;Zi.prototype.InterpolantFactoryMethodSmooth=void 0;var oo=class extends Un{constructor(e,t,r,n){super(e,t,r,n)}};oo.prototype.ValueTypeName="vector";var ka={enabled:!1,files:{},add:function(s,e){this.enabled!==!1&&(Dh(s)||(this.files[s]=e))},get:function(s){if(this.enabled!==!1&&!Dh(s))return this.files[s]},remove:function(s){delete this.files[s]},clear:function(){this.files={}}};function Dh(s){try{let e=s.slice(s.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}var lo=class{constructor(e,t,r){let n=this,i=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(h){o++,i===!1&&n.onStart!==void 0&&n.onStart(h,a,o),i=!0},this.itemEnd=function(h){a++,n.onProgress!==void 0&&n.onProgress(h,a,o),a===o&&(i=!1,n.onLoad!==void 0&&n.onLoad())},this.itemError=function(h){n.onError!==void 0&&n.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wu=new lo,$r=class{constructor(e){this.manager=e!==void 0?e:wu,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){let r=this;return new Promise(function(n,i){r.load(e,n,t,i)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}};$r.DEFAULT_MATERIAL_NAME="__DEFAULT";var Ur=new WeakMap,co=class extends $r{constructor(e){super(e)}load(e,t,r,n){this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);let i=this,a=ka.get(`image:${e}`);if(a!==void 0){if(a.complete===!0)i.manager.itemStart(e),setTimeout(function(){t&&t(a),i.manager.itemEnd(e)},0);else{let d=Ur.get(a);d===void 0&&(d=[],Ur.set(a,d)),d.push({onLoad:t,onError:n})}return a}let o=kr("img");function l(){h(),t&&t(this);let d=Ur.get(this)||[];for(let u=0;u<d.length;u++){let f=d[u];f.onLoad&&f.onLoad(this)}Ur.delete(this),i.manager.itemEnd(e)}function c(d){h(),n&&n(d),ka.remove(`image:${e}`);let u=Ur.get(this)||[];for(let f=0;f<u.length;f++){let g=u[f];g.onError&&g.onError(d)}Ur.delete(this),i.manager.itemError(e),i.manager.itemEnd(e)}function h(){o.removeEventListener("load",l,!1),o.removeEventListener("error",c,!1)}return o.addEventListener("load",l,!1),o.addEventListener("error",c,!1),e.slice(0,5)!=="data:"&&this.crossOrigin!==void 0&&(o.crossOrigin=this.crossOrigin),ka.add(`image:${e}`,o),i.manager.itemStart(e),o.src=e,o}};var Qr=class extends $r{constructor(e){super(e)}load(e,t,r,n){let i=new on,a=new co(this.manager);return a.setCrossOrigin(this.crossOrigin),a.setPath(this.path),a.load(e,function(o){i.image=o,i.needsUpdate=!0,t!==void 0&&t(i)},r,n),i}},es=class extends un{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new ze(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){let t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}},lr=class extends es{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.groundColor=new ze(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){let t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}},Yl=new Ut,Uh=new Z,Lh=new Z,Fs=class{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=wn,this.map=null,this.mapPass=null,this.matrix=new Ut,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Xr,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new Ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){let t=this.camera;Uh.setFromMatrixPosition(e.matrixWorld),t.position.copy(Uh),Lh.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Lh),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,n){Yl.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Yl,e.coordinateSystem,e.reversedDepth);let i=this._frameExtents,a=n?n.z/i.x:1,o=n?n.w/i.y:1,l=n?n.x/i.x:0,c=n?n.y/i.y:0;e.coordinateSystem===Br||e.reversedDepth?t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),t.multiply(Yl)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}},Fa=new Z,Na=new zn,hi=new Z,Ns=class extends un{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ut,this.projectionMatrix=new Ut,this.projectionMatrixInverse=new Ut,this.coordinateSystem=jn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Fa,Na,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Na,hi.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(Fa,Na,hi),hi.x===1&&hi.y===1&&hi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Fa,Na,hi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},zi=new Z,Fh=new lt,Nh=new lt,$t=class extends Ns{constructor(e=50,t=1,r=.1,n=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=n,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){let t=.5*this.getFilmHeight()/e;this.fov=Ja*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){let e=Math.tan(wl*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ja*2*Math.atan(Math.tan(wl*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){zi.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(zi.x,zi.y).multiplyScalar(-e/zi.z),zi.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(zi.x,zi.y).multiplyScalar(-e/zi.z)}getViewSize(e,t){return this.getViewBounds(e,Fh,Nh),t.subVectors(Nh,Fh)}setViewOffset(e,t,r,n,i,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=this.near,t=e*Math.tan(wl*.5*this.fov)/this.zoom,r=2*t,n=this.aspect*r,i=-.5*n,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;i+=a.offsetX*n/l,t-=a.offsetY*r/c,n*=a.width/l,r*=a.height/c}let o=this.filmOffset;o!==0&&(i+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(i,i+n,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}};var $l=class extends Fs{constructor(){super(new $t(90,1,.5,500)),this.isPointLightShadow=!0}},Os=class extends es{constructor(e,t,r=0,n=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=r,this.decay=n,this.shadow=new $l}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}},mi=class extends Ns{constructor(e=-1,t=1,r=1,n=-1,i=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=n,this.near=i,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,n,i,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=n,this.view.width=i,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,n=(this.top+this.bottom)/2,i=r-e,a=r+e,o=n+t,l=n-t;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;i+=c*this.view.offsetX,a=i+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(i,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){let t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}},Ql=class extends Fs{constructor(){super(new mi(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},cr=class extends es{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(un.DEFAULT_UP),this.updateMatrix(),this.target=new un,this.shadow=new Ql}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){let t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}};var Bs=class extends Yt{constructor(){super(),this.isInstancedBufferGeometry=!0,this.type="InstancedBufferGeometry",this.instanceCount=1/0}copy(e){return super.copy(e),this.instanceCount=e.instanceCount,this}toJSON(){let e=super.toJSON();return e.instanceCount=this.instanceCount,e.isInstancedBufferGeometry=!0,e}};var Lr=-90,Fr=1,ho=class extends un{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;let n=new $t(Lr,Fr,e,t);n.layers=this.layers,this.add(n);let i=new $t(Lr,Fr,e,t);i.layers=this.layers,this.add(i);let a=new $t(Lr,Fr,e,t);a.layers=this.layers,this.add(a);let o=new $t(Lr,Fr,e,t);o.layers=this.layers,this.add(o);let l=new $t(Lr,Fr,e,t);l.layers=this.layers,this.add(l);let c=new $t(Lr,Fr,e,t);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let e=this.coordinateSystem,t=this.children.concat(),[r,n,i,a,o,l]=t;for(let c of t)this.remove(c);if(e===jn)r.up.set(0,1,0),r.lookAt(1,0,0),n.up.set(0,1,0),n.lookAt(-1,0,0),i.up.set(0,0,-1),i.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Br)r.up.set(0,-1,0),r.lookAt(-1,0,0),n.up.set(0,-1,0),n.lookAt(1,0,0),i.up.set(0,0,1),i.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(let c of t)this.add(c),c.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();let{renderTarget:r,activeMipmapLevel:n}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());let[i,a,o,l,c,h]=this.children,d=e.getRenderTarget(),u=e.getActiveCubeFace(),f=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;let x=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let p=!1;e.isWebGLRenderer===!0?p=e.state.buffers.depth.getReversed():p=e.reversedDepthBuffer,e.setRenderTarget(r,0,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,i),e.setRenderTarget(r,1,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(r,2,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,3,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(r,4,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),r.texture.generateMipmaps=x,e.setRenderTarget(r,5,n),p&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),e.setRenderTarget(d,u,f),e.xr.enabled=g,r.texture.needsPMREMUpdate=!0}},uo=class extends $t{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}},ks=class{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=of.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}};function of(){this._document.hidden===!1&&this.reset()}var Sc="\\[\\]\\.:\\/",lf=new RegExp("["+Sc+"]","g"),bc="[^"+Sc+"]",cf="[^"+Sc.replace("\\.","")+"]",hf=/((?:WC+[\/:])*)/.source.replace("WC",bc),uf=/(WCOD+)?/.source.replace("WCOD",cf),df=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",bc),ff=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",bc),pf=new RegExp("^"+hf+uf+df+ff+"$"),mf=["material","materials","bones","map"],ec=class{constructor(e,t,r){let n=r||Bt.parseTrackName(t);this._targetGroup=e,this._bindings=e.subscribe_(t,n)}getValue(e,t){this.bind();let r=this._targetGroup.nCachedObjects_,n=this._bindings[r];n!==void 0&&n.getValue(e,t)}setValue(e,t){let r=this._bindings;for(let n=this._targetGroup.nCachedObjects_,i=r.length;n!==i;++n)r[n].setValue(e,t)}bind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].bind()}unbind(){let e=this._bindings;for(let t=this._targetGroup.nCachedObjects_,r=e.length;t!==r;++t)e[t].unbind()}},Bt=class s{constructor(e,t,r){this.path=t,this.parsedPath=r||s.parseTrackName(t),this.node=s.findNode(e,this.parsedPath.nodeName),this.rootNode=e,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(e,t,r){return e&&e.isAnimationObjectGroup?new s.Composite(e,t,r):new s(e,t,r)}static sanitizeNodeName(e){return e.replace(/\s/g,"_").replace(lf,"")}static parseTrackName(e){let t=pf.exec(e);if(t===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+e);let r={nodeName:t[2],objectName:t[3],objectIndex:t[4],propertyName:t[5],propertyIndex:t[6]},n=r.nodeName&&r.nodeName.lastIndexOf(".");if(n!==void 0&&n!==-1){let i=r.nodeName.substring(n+1);mf.indexOf(i)!==-1&&(r.nodeName=r.nodeName.substring(0,n),r.objectName=i)}if(r.propertyName===null||r.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+e);return r}static findNode(e,t){if(t===void 0||t===""||t==="."||t===-1||t===e.name||t===e.uuid)return e;if(e.skeleton){let r=e.skeleton.getBoneByName(t);if(r!==void 0)return r}if(e.children){let r=function(i){for(let a=0;a<i.length;a++){let o=i[a];if(o.name===t||o.uuid===t)return o;let l=r(o.children);if(l)return l}return null},n=r(e.children);if(n)return n}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(e,t){e[t]=this.targetObject[this.propertyName]}_getValue_array(e,t){let r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)e[t++]=r[n]}_getValue_arrayElement(e,t){e[t]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(e,t){this.resolvedProperty.toArray(e,t)}_setValue_direct(e,t){this.targetObject[this.propertyName]=e[t]}_setValue_direct_setNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(e,t){this.targetObject[this.propertyName]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(e,t){let r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)r[n]=e[t++]}_setValue_array_setNeedsUpdate(e,t){let r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)r[n]=e[t++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(e,t){let r=this.resolvedProperty;for(let n=0,i=r.length;n!==i;++n)r[n]=e[t++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(e,t){this.resolvedProperty[this.propertyIndex]=e[t]}_setValue_arrayElement_setNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty[this.propertyIndex]=e[t],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(e,t){this.resolvedProperty.fromArray(e,t)}_setValue_fromArray_setNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(e,t){this.resolvedProperty.fromArray(e,t),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(e,t){this.bind(),this.getValue(e,t)}_setValue_unbound(e,t){this.bind(),this.setValue(e,t)}bind(){let e=this.node,t=this.parsedPath,r=t.objectName,n=t.propertyName,i=t.propertyIndex;if(e||(e=s.findNode(this.rootNode,t.nodeName),this.node=e),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!e){pt("PropertyBinding: No target node found for track: "+this.path+".");return}if(r){let c=t.objectIndex;switch(r){case"materials":if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.materials){ft("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}e=e.material.materials;break;case"bones":if(!e.skeleton){ft("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}e=e.skeleton.bones;for(let h=0;h<e.length;h++)if(e[h].name===c){c=h;break}break;case"map":if("map"in e){e=e.map;break}if(!e.material){ft("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!e.material.map){ft("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}e=e.material.map;break;default:if(e[r]===void 0){ft("PropertyBinding: Can not bind to objectName of node undefined.",this);return}e=e[r]}if(c!==void 0){if(e[c]===void 0){ft("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,e);return}e=e[c]}}let a=e[n];if(a===void 0){let c=t.nodeName;ft("PropertyBinding: Trying to update property for track: "+c+"."+n+" but it wasn't found.",e);return}let o=this.Versioning.None;this.targetObject=e,e.isMaterial===!0?o=this.Versioning.NeedsUpdate:e.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(i!==void 0){if(n==="morphTargetInfluences"){if(!e.geometry){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!e.geometry.morphAttributes){ft("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}e.morphTargetDictionary[i]!==void 0&&(i=e.morphTargetDictionary[i])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=i}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=n;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};Bt.Composite=ec;Bt.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};Bt.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};Bt.prototype.GetterByBindingType=[Bt.prototype._getValue_direct,Bt.prototype._getValue_array,Bt.prototype._getValue_arrayElement,Bt.prototype._getValue_toArray];Bt.prototype.SetterByBindingTypeAndVersioning=[[Bt.prototype._setValue_direct,Bt.prototype._setValue_direct_setNeedsUpdate,Bt.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_array,Bt.prototype._setValue_array_setNeedsUpdate,Bt.prototype._setValue_array_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_arrayElement,Bt.prototype._setValue_arrayElement_setNeedsUpdate,Bt.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[Bt.prototype._setValue_fromArray,Bt.prototype._setValue_fromArray_setNeedsUpdate,Bt.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];var r_=new Float32Array(1);var Oh=new Ut,zs=class{constructor(e,t,r=0,n=1/0){this.ray=new Wr(e,t),this.near=r,this.far=n,this.camera=null,this.layers=new Vr,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):ft("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Oh.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Oh),this}intersectObject(e,t=!0,r=[]){return tc(e,this,r,t),r.sort(Bh),r}intersectObjects(e,t=!0,r=[]){for(let n=0,i=e.length;n<i;n++)tc(e[n],this,r,t);return r.sort(Bh),r}};function Bh(s,e){return s.distance-e.distance}function tc(s,e,t,r){let n=!0;if(s.layers.test(e.layers)&&s.raycast(e,t)===!1&&(n=!1),n===!0&&r===!0){let i=s.children;for(let a=0,o=i.length;a<o;a++)tc(i[a],e,t,!0)}}var Cc=class Cc{constructor(e,t,r,n){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,n)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,n){let i=this.elements;return i[0]=e,i[2]=t,i[1]=r,i[3]=n,this}};Cc.prototype.isMatrix2=!0;var nc=Cc;function Mc(s,e,t,r){let n=gf(r);switch(t){case pc:return s*e;case gc:return s*e/n.components*n.byteLength;case yo:return s*e/n.components*n.byteLength;case Qi:return s*e*2/n.components*n.byteLength;case So:return s*e*2/n.components*n.byteLength;case mc:return s*e*3/n.components*n.byteLength;case Fn:return s*e*4/n.components*n.byteLength;case bo:return s*e*4/n.components*n.byteLength;case Ks:case js:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case $s:case Qs:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case wo:case Ao:return Math.max(s,16)*Math.max(e,8)/4;case Mo:case To:return Math.max(s,8)*Math.max(e,8)/2;case Eo:case Co:case Po:case Io:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*8;case Ro:case ea:case Do:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Uo:return Math.floor((s+3)/4)*Math.floor((e+3)/4)*16;case Lo:return Math.floor((s+4)/5)*Math.floor((e+3)/4)*16;case Fo:return Math.floor((s+4)/5)*Math.floor((e+4)/5)*16;case No:return Math.floor((s+5)/6)*Math.floor((e+4)/5)*16;case Oo:return Math.floor((s+5)/6)*Math.floor((e+5)/6)*16;case Bo:return Math.floor((s+7)/8)*Math.floor((e+4)/5)*16;case ko:return Math.floor((s+7)/8)*Math.floor((e+5)/6)*16;case zo:return Math.floor((s+7)/8)*Math.floor((e+7)/8)*16;case Go:return Math.floor((s+9)/10)*Math.floor((e+4)/5)*16;case Vo:return Math.floor((s+9)/10)*Math.floor((e+5)/6)*16;case Ho:return Math.floor((s+9)/10)*Math.floor((e+7)/8)*16;case Wo:return Math.floor((s+9)/10)*Math.floor((e+9)/10)*16;case Xo:return Math.floor((s+11)/12)*Math.floor((e+9)/10)*16;case Yo:return Math.floor((s+11)/12)*Math.floor((e+11)/12)*16;case qo:case Zo:case Jo:return Math.ceil(s/4)*Math.ceil(e/4)*16;case Ko:case jo:return Math.ceil(s/4)*Math.ceil(e/4)*8;case ta:case $o:return Math.ceil(s/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function gf(s){switch(s){case wn:case hc:return{byteLength:1,components:1};case rs:case uc:case dn:return{byteLength:2,components:1};case _o:case xo:return{byteLength:2,components:4};case ei:case vo:case Vn:return{byteLength:4,components:1};case dc:case fc:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${s}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?pt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186");function Yu(){let s=null,e=!1,t=null,r=null;function n(i,a){r=s.requestAnimationFrame(n),t(i,a)}return{start:function(){e!==!0&&t!==null&&s!==null&&(r=s.requestAnimationFrame(n),e=!0)},stop:function(){s!==null&&s.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(i){t=i},setContext:function(i){s=i}}}function xf(s){let e=new WeakMap;function t(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=s.createBuffer();s.bindBuffer(l,u),s.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=s.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=s.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=s.HALF_FLOAT:f=s.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=s.SHORT;else if(c instanceof Uint32Array)f=s.UNSIGNED_INT;else if(c instanceof Int32Array)f=s.INT;else if(c instanceof Int8Array)f=s.BYTE;else if(c instanceof Uint8Array)f=s.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=s.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function r(o,l,c){let h=l.array,d=l.updateRanges;if(s.bindBuffer(c,o),d.length===0)s.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],x=d[f];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++u,d[u]=x)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let x=d[f];s.bufferSubData(c,x.start*h.BYTES_PER_ELEMENT,h,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function n(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function i(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=e.get(o);l&&(s.deleteBuffer(l.buffer),e.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=e.get(o);(!h||h.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=e.get(o);if(c===void 0)e.set(o,t(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(c.buffer,o,l),c.version=o.version}}return{get:n,remove:i,update:a}}var yf=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,Sf=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,bf=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,Mf=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,wf=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,Tf=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,Af=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,Ef=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,Cf=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,Rf=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,Pf=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,If=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Df=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Uf=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,Lf=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,Ff=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Nf=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Of=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Bf=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,kf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,zf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Gf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Vf=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Hf=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Wf=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Xf=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Yf=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,qf=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Zf=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Jf=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Kf="gl_FragColor = linearToOutputTexel( gl_FragColor );",jf=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,$f=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Qf=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ep=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,tp=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,np=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ip=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,rp=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,sp=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,ap=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,op=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,lp=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,cp=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,hp=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,up=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,dp=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,fp=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,pp=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,mp=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,gp=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,vp=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,_p=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,xp=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,yp=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Sp=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,bp=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,Mp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,wp=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Tp=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ap=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Ep=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Cp=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Rp=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Pp=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Ip=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Dp=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Up=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Lp=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Fp=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Np=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Op=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Bp=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,kp=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,zp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Gp=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Vp=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Hp=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Wp=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Xp=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Yp=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,qp=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,Zp=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Jp=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,Kp=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,jp=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,$p=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Qp=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,em=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,tm=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,nm=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,im=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,rm=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,sm=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,am=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,om=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,lm=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,cm=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,hm=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,um=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,dm=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,fm=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,pm=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,mm=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,gm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,vm=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,_m=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,xm=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,ym=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,Sm=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,bm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Mm=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,wm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,Tm=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Am=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,Em=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,Cm=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,Rm=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,Pm=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,Im=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,Dm=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Um=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Lm=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,Fm=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Nm=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Om=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Bm=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,km=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,zm=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,Gm=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Vm=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,Hm=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Wm=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Xm=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Ym=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,qm=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Zm=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Jm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Km=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,jm=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,$m=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Qm=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,yt={alphahash_fragment:yf,alphahash_pars_fragment:Sf,alphamap_fragment:bf,alphamap_pars_fragment:Mf,alphatest_fragment:wf,alphatest_pars_fragment:Tf,aomap_fragment:Af,aomap_pars_fragment:Ef,batching_pars_vertex:Cf,batching_vertex:Rf,begin_vertex:Pf,beginnormal_vertex:If,bsdfs:Df,iridescence_fragment:Uf,bumpmap_pars_fragment:Lf,clipping_planes_fragment:Ff,clipping_planes_pars_fragment:Nf,clipping_planes_pars_vertex:Of,clipping_planes_vertex:Bf,color_fragment:kf,color_pars_fragment:zf,color_pars_vertex:Gf,color_vertex:Vf,common:Hf,cube_uv_reflection_fragment:Wf,defaultnormal_vertex:Xf,displacementmap_pars_vertex:Yf,displacementmap_vertex:qf,emissivemap_fragment:Zf,emissivemap_pars_fragment:Jf,colorspace_fragment:Kf,colorspace_pars_fragment:jf,envmap_fragment:$f,envmap_common_pars_fragment:Qf,envmap_pars_fragment:ep,envmap_pars_vertex:tp,envmap_physical_pars_fragment:dp,envmap_vertex:np,fog_vertex:ip,fog_pars_vertex:rp,fog_fragment:sp,fog_pars_fragment:ap,gradientmap_pars_fragment:op,lightmap_pars_fragment:lp,lights_lambert_fragment:cp,lights_lambert_pars_fragment:hp,lights_pars_begin:up,lights_toon_fragment:fp,lights_toon_pars_fragment:pp,lights_phong_fragment:mp,lights_phong_pars_fragment:gp,lights_physical_fragment:vp,lights_physical_pars_fragment:_p,lights_fragment_begin:xp,lights_fragment_maps:yp,lights_fragment_end:Sp,lightprobes_pars_fragment:bp,logdepthbuf_fragment:Mp,logdepthbuf_pars_fragment:wp,logdepthbuf_pars_vertex:Tp,logdepthbuf_vertex:Ap,map_fragment:Ep,map_pars_fragment:Cp,map_particle_fragment:Rp,map_particle_pars_fragment:Pp,metalnessmap_fragment:Ip,metalnessmap_pars_fragment:Dp,morphinstance_vertex:Up,morphcolor_vertex:Lp,morphnormal_vertex:Fp,morphtarget_pars_vertex:Np,morphtarget_vertex:Op,normal_fragment_begin:Bp,normal_fragment_maps:kp,normal_pars_fragment:zp,normal_pars_vertex:Gp,normal_vertex:Vp,normalmap_pars_fragment:Hp,clearcoat_normal_fragment_begin:Wp,clearcoat_normal_fragment_maps:Xp,clearcoat_pars_fragment:Yp,iridescence_pars_fragment:qp,opaque_fragment:Zp,packing:Jp,premultiplied_alpha_fragment:Kp,project_vertex:jp,dithering_fragment:$p,dithering_pars_fragment:Qp,roughnessmap_fragment:em,roughnessmap_pars_fragment:tm,shadowmap_pars_fragment:nm,shadowmap_pars_vertex:im,shadowmap_vertex:rm,shadowmask_pars_fragment:sm,skinbase_vertex:am,skinning_pars_vertex:om,skinning_vertex:lm,skinnormal_vertex:cm,specularmap_fragment:hm,specularmap_pars_fragment:um,tonemapping_fragment:dm,tonemapping_pars_fragment:fm,transmission_fragment:pm,transmission_pars_fragment:mm,uv_pars_fragment:gm,uv_pars_vertex:vm,uv_vertex:_m,worldpos_vertex:xm,background_vert:ym,background_frag:Sm,backgroundCube_vert:bm,backgroundCube_frag:Mm,cube_vert:wm,cube_frag:Tm,depth_vert:Am,depth_frag:Em,distance_vert:Cm,distance_frag:Rm,equirect_vert:Pm,equirect_frag:Im,linedashed_vert:Dm,linedashed_frag:Um,meshbasic_vert:Lm,meshbasic_frag:Fm,meshlambert_vert:Nm,meshlambert_frag:Om,meshmatcap_vert:Bm,meshmatcap_frag:km,meshnormal_vert:zm,meshnormal_frag:Gm,meshphong_vert:Vm,meshphong_frag:Hm,meshphysical_vert:Wm,meshphysical_frag:Xm,meshtoon_vert:Ym,meshtoon_frag:qm,points_vert:Zm,points_frag:Jm,shadow_vert:Km,shadow_frag:jm,sprite_vert:$m,sprite_frag:Qm},Je={common:{diffuse:{value:new ze(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new mt}},envmap:{envMap:{value:null},envMapRotation:{value:new mt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new mt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new mt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new mt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new mt},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new mt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new mt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new mt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new mt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ze(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Z},probesMax:{value:new Z},probesResolution:{value:new Z}},points:{diffuse:{value:new ze(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0},uvTransform:{value:new mt}},sprite:{diffuse:{value:new ze(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new mt},alphaMap:{value:null},alphaMapTransform:{value:new mt},alphaTest:{value:0}}},ni={basic:{uniforms:vn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.fog]),vertexShader:yt.meshbasic_vert,fragmentShader:yt.meshbasic_frag},lambert:{uniforms:vn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new ze(0)},envMapIntensity:{value:1}}]),vertexShader:yt.meshlambert_vert,fragmentShader:yt.meshlambert_frag},phong:{uniforms:vn([Je.common,Je.specularmap,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,Je.lights,{emissive:{value:new ze(0)},specular:{value:new ze(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:yt.meshphong_vert,fragmentShader:yt.meshphong_frag},standard:{uniforms:vn([Je.common,Je.envmap,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.roughnessmap,Je.metalnessmap,Je.fog,Je.lights,{emissive:{value:new ze(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag},toon:{uniforms:vn([Je.common,Je.aomap,Je.lightmap,Je.emissivemap,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.gradientmap,Je.fog,Je.lights,{emissive:{value:new ze(0)}}]),vertexShader:yt.meshtoon_vert,fragmentShader:yt.meshtoon_frag},matcap:{uniforms:vn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,Je.fog,{matcap:{value:null}}]),vertexShader:yt.meshmatcap_vert,fragmentShader:yt.meshmatcap_frag},points:{uniforms:vn([Je.points,Je.fog]),vertexShader:yt.points_vert,fragmentShader:yt.points_frag},dashed:{uniforms:vn([Je.common,Je.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:yt.linedashed_vert,fragmentShader:yt.linedashed_frag},depth:{uniforms:vn([Je.common,Je.displacementmap]),vertexShader:yt.depth_vert,fragmentShader:yt.depth_frag},normal:{uniforms:vn([Je.common,Je.bumpmap,Je.normalmap,Je.displacementmap,{opacity:{value:1}}]),vertexShader:yt.meshnormal_vert,fragmentShader:yt.meshnormal_frag},sprite:{uniforms:vn([Je.sprite,Je.fog]),vertexShader:yt.sprite_vert,fragmentShader:yt.sprite_frag},background:{uniforms:{uvTransform:{value:new mt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:yt.background_vert,fragmentShader:yt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new mt}},vertexShader:yt.backgroundCube_vert,fragmentShader:yt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:yt.cube_vert,fragmentShader:yt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:yt.equirect_vert,fragmentShader:yt.equirect_frag},distance:{uniforms:vn([Je.common,Je.displacementmap,{referencePosition:{value:new Z},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:yt.distance_vert,fragmentShader:yt.distance_frag},shadow:{uniforms:vn([Je.lights,Je.fog,{color:{value:new ze(0)},opacity:{value:1}}]),vertexShader:yt.shadow_vert,fragmentShader:yt.shadow_frag}};ni.physical={uniforms:vn([ni.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new mt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new mt},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new mt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new mt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new mt},sheen:{value:0},sheenColor:{value:new ze(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new mt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new mt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new mt},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new mt},attenuationDistance:{value:0},attenuationColor:{value:new ze(0)},specularColor:{value:new ze(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new mt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new mt},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new mt}}]),vertexShader:yt.meshphysical_vert,fragmentShader:yt.meshphysical_frag};var nl={r:0,b:0,g:0},eg=new Ut,qu=new mt;qu.set(-1,0,0,0,1,0,0,0,1);function tg(s,e,t,r,n,i){let a=new ze(0),o=n===!0?0:1,l,c,h=null,d=0,u=null;function f(S){let E=S.isScene===!0?S.background:null;if(E&&E.isTexture){let y=S.backgroundBlurriness>0;E=e.get(E,y)}return E}function g(S){let E=!1,y=f(S);y===null?p(a,o):y&&y.isColor&&(p(y,1),E=!0);let b=s.xr.getEnvironmentBlendMode();b==="additive"?t.buffers.color.setClear(0,0,0,1,i):b==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,i),(s.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),s.clear(s.autoClearColor,s.autoClearDepth,s.autoClearStencil))}function x(S,E){let y=f(E);y&&(y.isCubeTexture||y.mapping===Zs)?(c===void 0&&(c=new _t(new Wi(1,1,1),new zt({name:"BackgroundCubeMaterial",uniforms:dr(ni.backgroundCube.uniforms),vertexShader:ni.backgroundCube.vertexShader,fragmentShader:ni.backgroundCube.fragmentShader,side:Qt,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(b,M,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=y,c.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(eg.makeRotationFromEuler(E.backgroundRotation)).transpose(),y.isCubeTexture&&y.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(qu),c.material.toneMapped=wt.getTransfer(y.colorSpace)!==It,(h!==y||d!==y.version||u!==s.toneMapping)&&(c.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),c.layers.enableAll(),S.unshift(c,c.geometry,c.material,0,0,null)):y&&y.isTexture&&(l===void 0&&(l=new _t(new Wt(2,2),new zt({name:"BackgroundMaterial",uniforms:dr(ni.background.uniforms),vertexShader:ni.background.vertexShader,fragmentShader:ni.background.fragmentShader,side:Ji,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(l)),l.material.uniforms.t2D.value=y,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.toneMapped=wt.getTransfer(y.colorSpace)!==It,y.matrixAutoUpdate===!0&&y.updateMatrix(),l.material.uniforms.uvTransform.value.copy(y.matrix),(h!==y||d!==y.version||u!==s.toneMapping)&&(l.material.needsUpdate=!0,h=y,d=y.version,u=s.toneMapping),l.layers.enableAll(),S.unshift(l,l.geometry,l.material,0,0,null))}function p(S,E){S.getRGB(nl,yc(s)),t.buffers.color.setClear(nl.r,nl.g,nl.b,E,i)}function m(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(S,E=1){a.set(S),o=E,p(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(S){o=S,p(a,o)},render:g,addToRenderList:x,dispose:m}}function ng(s,e){let t=s.getParameter(s.MAX_VERTEX_ATTRIBS),r={},n=u(null),i=n,a=!1;function o(P,C,N,R,O){let z=!1,K=d(P,R,N,C);i!==K&&(i=K,c(i.object)),z=f(P,R,N,O),z&&g(P,R,N,O),O!==null&&e.update(O,s.ELEMENT_ARRAY_BUFFER),(z||a)&&(a=!1,y(P,C,N,R),O!==null&&s.bindBuffer(s.ELEMENT_ARRAY_BUFFER,e.get(O).buffer))}function l(){return s.createVertexArray()}function c(P){return s.bindVertexArray(P)}function h(P){return s.deleteVertexArray(P)}function d(P,C,N,R){let O=R.wireframe===!0,z=r[C.id];z===void 0&&(z={},r[C.id]=z);let K=P.isInstancedMesh===!0?P.id:0,re=z[K];re===void 0&&(re={},z[K]=re);let G=re[N.id];G===void 0&&(G={},re[N.id]=G);let V=G[O];return V===void 0&&(V=u(l()),G[O]=V),V}function u(P){let C=[],N=[],R=[];for(let O=0;O<t;O++)C[O]=0,N[O]=0,R[O]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:C,enabledAttributes:N,attributeDivisors:R,object:P,attributes:{},index:null}}function f(P,C,N,R){let O=i.attributes,z=C.attributes,K=0,re=N.getAttributes();for(let G in re)if(re[G].location>=0){let U=O[G],J=z[G];if(J===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(J=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(J=P.instanceColor)),U===void 0||U.attribute!==J||J&&U.data!==J.data)return!0;K++}return i.attributesNum!==K||i.index!==R}function g(P,C,N,R){let O={},z=C.attributes,K=0,re=N.getAttributes();for(let G in re)if(re[G].location>=0){let U=z[G];U===void 0&&(G==="instanceMatrix"&&P.instanceMatrix&&(U=P.instanceMatrix),G==="instanceColor"&&P.instanceColor&&(U=P.instanceColor));let J={};J.attribute=U,U&&U.data&&(J.data=U.data),O[G]=J,K++}i.attributes=O,i.attributesNum=K,i.index=R}function x(){let P=i.newAttributes;for(let C=0,N=P.length;C<N;C++)P[C]=0}function p(P){m(P,0)}function m(P,C){let N=i.newAttributes,R=i.enabledAttributes,O=i.attributeDivisors;N[P]=1,R[P]===0&&(s.enableVertexAttribArray(P),R[P]=1),O[P]!==C&&(s.vertexAttribDivisor(P,C),O[P]=C)}function S(){let P=i.newAttributes,C=i.enabledAttributes;for(let N=0,R=C.length;N<R;N++)C[N]!==P[N]&&(s.disableVertexAttribArray(N),C[N]=0)}function E(P,C,N,R,O,z,K){K===!0?s.vertexAttribIPointer(P,C,N,O,z):s.vertexAttribPointer(P,C,N,R,O,z)}function y(P,C,N,R){x();let O=R.attributes,z=N.getAttributes(),K=C.defaultAttributeValues;for(let re in z){let G=z[re];if(G.location>=0){let V=O[re];if(V===void 0&&(re==="instanceMatrix"&&P.instanceMatrix&&(V=P.instanceMatrix),re==="instanceColor"&&P.instanceColor&&(V=P.instanceColor)),V!==void 0){let U=V.normalized,J=V.itemSize,j=e.get(V);if(j===void 0)continue;let ae=j.buffer,Q=j.type,me=j.bytesPerElement,B=Q===s.INT||Q===s.UNSIGNED_INT||V.gpuType===vo;if(V.isInterleavedBufferAttribute){let H=V.data,de=H.stride,we=V.offset;if(H.isInstancedInterleavedBuffer){for(let ce=0;ce<G.locationSize;ce++)m(G.location+ce,H.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=H.meshPerAttribute*H.count)}else for(let ce=0;ce<G.locationSize;ce++)p(G.location+ce);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let ce=0;ce<G.locationSize;ce++)E(G.location+ce,J/G.locationSize,Q,U,de*me,(we+J/G.locationSize*ce)*me,B)}else{if(V.isInstancedBufferAttribute){for(let H=0;H<G.locationSize;H++)m(G.location+H,V.meshPerAttribute);P.isInstancedMesh!==!0&&R._maxInstanceCount===void 0&&(R._maxInstanceCount=V.meshPerAttribute*V.count)}else for(let H=0;H<G.locationSize;H++)p(G.location+H);s.bindBuffer(s.ARRAY_BUFFER,ae);for(let H=0;H<G.locationSize;H++)E(G.location+H,J/G.locationSize,Q,U,J*me,J/G.locationSize*H*me,B)}}else if(K!==void 0){let U=K[re];if(U!==void 0)switch(U.length){case 2:s.vertexAttrib2fv(G.location,U);break;case 3:s.vertexAttrib3fv(G.location,U);break;case 4:s.vertexAttrib4fv(G.location,U);break;default:s.vertexAttrib1fv(G.location,U)}}}}S()}function b(){T();for(let P in r){let C=r[P];for(let N in C){let R=C[N];for(let O in R){let z=R[O];for(let K in z)h(z[K].object),delete z[K];delete R[O]}}delete r[P]}}function M(P){if(r[P.id]===void 0)return;let C=r[P.id];for(let N in C){let R=C[N];for(let O in R){let z=R[O];for(let K in z)h(z[K].object),delete z[K];delete R[O]}}delete r[P.id]}function A(P){for(let C in r){let N=r[C];for(let R in N){let O=N[R];if(O[P.id]===void 0)continue;let z=O[P.id];for(let K in z)h(z[K].object),delete z[K];delete O[P.id]}}}function v(P){for(let C in r){let N=r[C],R=P.isInstancedMesh===!0?P.id:0,O=N[R];if(O!==void 0){for(let z in O){let K=O[z];for(let re in K)h(K[re].object),delete K[re];delete O[z]}delete N[R],Object.keys(N).length===0&&delete r[C]}}}function T(){I(),a=!0,i!==n&&(i=n,c(i.object))}function I(){n.geometry=null,n.program=null,n.wireframe=!1}return{setup:o,reset:T,resetDefaultState:I,dispose:b,releaseStatesOfGeometry:M,releaseStatesOfObject:v,releaseStatesOfProgram:A,initAttributes:x,enableAttribute:p,disableUnusedAttributes:S}}function ig(s,e,t){let r;function n(l){r=l}function i(l,c){s.drawArrays(r,l,c),t.update(c,r,1)}function a(l,c,h){h!==0&&(s.drawArraysInstanced(r,l,c,h),t.update(c,r,h))}function o(l,c,h){if(h===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];t.update(u,r,1)}this.setMode=n,this.render=i,this.renderInstances=a,this.renderMultiDraw=o}function rg(s,e,t,r){let n;function i(){if(n!==void 0)return n;if(e.has("EXT_texture_filter_anisotropic")===!0){let A=e.get("EXT_texture_filter_anisotropic");n=s.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else n=0;return n}function a(A){return!(A!==Fn&&r.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let v=A===dn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==wn&&A!==Vn&&!v&&r.convert(A)!==s.getParameter(s.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.HIGH_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&s.getShaderPrecisionFormat(s.VERTEX_SHADER,s.MEDIUM_FLOAT).precision>0&&s.getShaderPrecisionFormat(s.FRAGMENT_SHADER,s.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=t.precision!==void 0?t.precision:"highp",h=l(c);h!==c&&(pt("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=t.logarithmicDepthBuffer===!0,u=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&u===!1&&pt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=s.getParameter(s.MAX_TEXTURE_IMAGE_UNITS),g=s.getParameter(s.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=s.getParameter(s.MAX_TEXTURE_SIZE),p=s.getParameter(s.MAX_CUBE_MAP_TEXTURE_SIZE),m=s.getParameter(s.MAX_VERTEX_ATTRIBS),S=s.getParameter(s.MAX_VERTEX_UNIFORM_VECTORS),E=s.getParameter(s.MAX_VARYING_VECTORS),y=s.getParameter(s.MAX_FRAGMENT_UNIFORM_VECTORS),b=s.getParameter(s.MAX_SAMPLES),M=s.getParameter(s.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:i,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:p,maxAttributes:m,maxVertexUniforms:S,maxVaryings:E,maxFragmentUniforms:y,maxSamples:b,samples:M}}function sg(s){let e=this,t=null,r=0,n=!1,i=!1,a=new Kn,o=new mt,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||r!==0||n;return n=u,r=d.length,f},this.beginShadows=function(){i=!0,h(null)},this.endShadows=function(){i=!1},this.setGlobalState=function(d,u){t=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,x=d.clipIntersection,p=d.clipShadows,m=s.get(d);if(!n||g===null||g.length===0||i&&!p)i?h(null):c();else{let S=i?0:r,E=S*4,y=m.clippingState||null;l.value=y,y=h(g,u,E,f);for(let b=0;b!==E;++b)y[b]=t[b];m.clippingState=y,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=S}};function c(){l.value!==t&&(l.value=t,l.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function h(d,u,f,g){let x=d!==null?d.length:0,p=null;if(x!==0){if(p=l.value,g!==!0||p===null){let m=f+x*4,S=u.matrixWorldInverse;o.getNormalMatrix(S),(p===null||p.length<m)&&(p=new Float32Array(m));for(let E=0,y=f;E!==x;++E,y+=4)a.copy(d[E]).applyMatrix4(S,o),a.normal.toArray(p,y),p[y+3]=a.constant}l.value=p,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,p}}var os=4,ag=6,og=20,lg=256,ia=new mi,Tu=new ze,Rc=null,Pc=0,Ic=0,Dc=!1,cg=new Z,fr=new Z,rl=class{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,n=100,i={}){let{size:a=256,position:o=cg}=i;Rc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,r,n,l,o),t>0&&this._blur(l,0,0,t),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cu(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Eu(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Rc,Pc,Ic),this._renderer.xr.enabled=Dc,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ki||e.mapping===ur?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Rc=this._renderer.getRenderTarget(),Pc=this._renderer.getActiveCubeFace(),Ic=this._renderer.getActiveMipmapLevel(),Dc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){let e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:Zt,minFilter:Zt,generateMipmaps:!1,type:dn,format:Fn,colorSpace:Ts,depthBuffer:!1},n=Au(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Au(e,t,r);let{_lodMax:i}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=hg(i)),this._blurMaterial=dg(i,e,t),this._ggxMaterial=ug(i,e,t)}return n}_compileMaterial(e){let t=new _t(new Yt,e);this._renderer.compile(t,ia)}_sceneToCubeUV(e,t,r,n,i){let l=new $t(90,1,t,r),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Tu),d.toneMapping=Qn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(n),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new _t(new Wi,new kt({name:"PMREM.Background",side:Qt,depthWrite:!1,depthTest:!1})));let x=this._backgroundBox,p=x.material,m=!1,S=e.background;S?S.isColor&&(p.color.copy(S),e.background=null,m=!0):(p.color.copy(Tu),m=!0);for(let E=0;E<6;E++){let y=E%3;y===0?(l.up.set(0,c[E],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x+h[E],i.y,i.z)):y===1?(l.up.set(0,0,c[E]),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y+h[E],i.z)):(l.up.set(0,c[E],0),l.position.set(i.x,i.y,i.z),l.lookAt(i.x,i.y,i.z+h[E]));let b=this._cubeSize;as(n,y*b,E>2?b:0,b,b),d.setRenderTarget(n),m&&d.render(x,l),d.render(e,l)}d.toneMapping=f,d.autoClear=u,e.background=S}_textureToCubeUV(e,t){let r=this._renderer,n=e.mapping===Ki||e.mapping===ur;n?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cu()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Eu());let i=n?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=i;let o=i.uniforms;o.envMap.value=e;let l=this._cubeSize;as(t,0,0,3*l,2*l),r.setRenderTarget(t),r.render(a,ia)}_applyPMREM(e){let t=this._renderer,r=t.autoClear;t.autoClear=!1;let n=this._lodMeshes.length;for(let i=1;i<n;i++)this._applyGGXFilter(e,i-1,i);t.autoClear=r}_applyGGXFilter(e,t,r){let n=this._renderer,i=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[r];o.material=a;let l=a.uniforms,c=r/(this._lodMeshes.length-1),h=t/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,x=this._sizeLods[r],p=3*x*(r>g-os?r-g+os:0),m=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=f,l.mipInt.value=g-t,as(i,p,m,3*x,2*x),n.setRenderTarget(i),n.render(o,ia),l.envMap.value=i.texture,l.roughness.value=0,l.mipInt.value=g-r,as(e,p,m,3*x,2*x),n.setRenderTarget(e),n.render(o,ia)}_blur(e,t,r,n){let i=this._pingPongRenderTarget,a=Math.min(n,Math.PI)/Math.SQRT2;this._blurPass(e,i,t,r,a),this._blurPass(i,e,r,r,a)}_blurPass(e,t,r,n,i){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[n];l.material=o;let c=o.uniforms;c.envMap.value=e.texture,c.sigma.value=i,c.mipInt.value=this._lodMax-r;let h=this._sizeLods[n],d=3*h*(n>this._lodMax-os?n-this._lodMax+os:0),u=4*(this._cubeSize-h);as(t,d,u,3*h,2*h),a.setRenderTarget(t),a.render(l,ia)}};function hg(s){let e=[],t=[],r=s,n=s-os+1+ag;for(let i=0;i<n;i++){let a=Math.pow(2,r);e.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),x=new Float32Array(f*u*d);for(let m=0;m<d;m++){let S=m%3*2/3-1,E=m>2?0:-1,y=[S,E,0,S+2/3,E,0,S+2/3,E+1,0,S,E,0,S+2/3,E+1,0,S,E+1,0];g.set(y,f*u*m);for(let b=0;b<u;b++){let M=h[b*2]*2-1,A=h[b*2+1]*2-1;m===0?fr.set(1,A,M):m===1?fr.set(-M,1,-A):m===2?fr.set(-M,A,1):m===3?fr.set(-1,A,-M):m===4?fr.set(-M,-1,A):fr.set(M,A,-1),fr.toArray(x,(m*u+b)*f)}}let p=new Yt;p.setAttribute("position",new Dn(g,f)),p.setAttribute("outputDirection",new Dn(x,f)),t.push(new _t(p,null)),r>os&&r--}return{lodMeshes:t,sizeLods:e}}function Au(s,e,t){let r=new Jt(s,e,t);return r.texture.mapping=Zs,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function as(s,e,t,r,n){s.viewport.set(e,t,r,n),s.scissor.set(e,t,r,n)}function ug(s,e,t){return new zt({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:lg,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:al(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function dg(s,e,t){return new zt({name:"SphericalGaussianBlur",defines:{SAMPLES:og,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${s}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:al(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Eu(){return new zt({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function Cu(){return new zt({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:al(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Gn,depthTest:!1,depthWrite:!1})}function al(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}var sl=class extends Jt{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;let r={width:e,height:e,depth:1},n=[r,r,r,r,r,r];this.texture=new Ds(n),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;let r={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},n=new Wi(5,5,5),i=new zt({name:"CubemapFromEquirect",uniforms:dr(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:Qt,blending:Gn});i.uniforms.tEquirect.value=t;let a=new _t(n,i),o=t.minFilter;return t.minFilter===ji&&(t.minFilter=Zt),new ho(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,r=!0,n=!0){let i=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,r,n);e.setRenderTarget(i)}};function fg(s){let e=new WeakMap,t=new WeakMap,r=null;function n(u,f=!1){return u==null?null:f?a(u):i(u)}function i(u){if(u&&u.isTexture){let f=u.mapping;if(f===po||f===mo)if(e.has(u)){let g=e.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let x=new sl(g.height);return x.fromEquirectangularTexture(s,u),e.set(u,x),u.addEventListener("dispose",c),o(x.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===po||f===mo,x=f===Ki||f===ur;if(g||x){let p=t.get(u),m=p!==void 0?p.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==m)return r===null&&(r=new rl(s)),p=g?r.fromEquirectangular(u,p):r.fromCubemap(u,p),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),p.texture;if(p!==void 0)return p.texture;{let S=u.image;return g&&S&&S.height>0||x&&S&&l(S)?(r===null&&(r=new rl(s)),p=g?r.fromEquirectangular(u):r.fromCubemap(u),p.texture.pmremVersion=u.pmremVersion,t.set(u,p),u.addEventListener("dispose",h),p.texture):null}}}return u}function o(u,f){return f===po?u.mapping=Ki:f===mo&&(u.mapping=ur),u}function l(u){let f=0,g=6;for(let x=0;x<g;x++)u[x]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:n,dispose:d}}function pg(s){let e={};function t(r){if(e[r]!==void 0)return e[r];let n=s.getExtension(r);return e[r]=n,n}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){let n=t(r);return n===null&&sr("WebGLRenderer: "+r+" extension not supported."),n}}}function mg(s,e,t,r){let n={},i=new WeakMap;function a(d){let u=d.target;u.index!==null&&e.remove(u.index);for(let g in u.attributes)e.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete n[u.id];let f=i.get(u);f&&(e.remove(f),i.delete(u)),r.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,t.memory.geometries--}function o(d,u){return n[u.id]===!0||(u.addEventListener("dispose",a),n[u.id]=!0,t.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)e.update(u[f],s.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,x=0;if(g===void 0)return;if(f!==null){let S=f.array;x=f.version;for(let E=0,y=S.length;E<y;E+=3){let b=S[E+0],M=S[E+1],A=S[E+2];u.push(b,M,M,A,A,b)}}else{let S=g.array;x=g.version;for(let E=0,y=S.length/3-1;E<y;E+=3){let b=E+0,M=E+1,A=E+2;u.push(b,M,M,A,A,b)}}let p=new(g.count>=65535?Rs:Cs)(u,1);p.version=x;let m=i.get(d);m&&e.remove(m),i.set(d,p)}function h(d){let u=i.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return i.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function gg(s,e,t){let r;function n(d){r=d}let i,a;function o(d){i=d.type,a=d.bytesPerElement}function l(d,u){s.drawElements(r,u,i,d*a),t.update(u,r,1)}function c(d,u,f){f!==0&&(s.drawElementsInstanced(r,u,i,d*a,f),t.update(u,r,f))}function h(d,u,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,u,0,i,d,0,f);let x=0;for(let p=0;p<f;p++)x+=u[p];t.update(x,r,1)}this.setMode=n,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function vg(s){let e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(i,a,o){switch(t.calls++,a){case s.TRIANGLES:t.triangles+=o*(i/3);break;case s.LINES:t.lines+=o*(i/2);break;case s.LINE_STRIP:t.lines+=o*(i-1);break;case s.LINE_LOOP:t.lines+=o*i;break;case s.POINTS:t.points+=o*i;break;default:ft("WebGLInfo: Unknown draw mode:",a);break}}function n(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:n,update:r}}function _g(s,e,t){let r=new WeakMap,n=new Ot;function i(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=r.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),r.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,x=o.morphAttributes.color!==void 0,p=o.morphAttributes.position||[],m=o.morphAttributes.normal||[],S=o.morphAttributes.color||[],E=0;f===!0&&(E=1),g===!0&&(E=2),x===!0&&(E=3);let y=o.attributes.position.count*E,b=1;y>e.maxTextureSize&&(b=Math.ceil(y/e.maxTextureSize),y=e.maxTextureSize);let M=new Float32Array(y*b*4*d),A=new Es(M,y,b,d);A.type=Vn,A.needsUpdate=!0;let v=E*4;for(let I=0;I<d;I++){let P=p[I],C=m[I],N=S[I],R=y*b*4*I;for(let O=0;O<P.count;O++){let z=O*v;f===!0&&(n.fromBufferAttribute(P,O),M[R+z+0]=n.x,M[R+z+1]=n.y,M[R+z+2]=n.z,M[R+z+3]=0),g===!0&&(n.fromBufferAttribute(C,O),M[R+z+4]=n.x,M[R+z+5]=n.y,M[R+z+6]=n.z,M[R+z+7]=0),x===!0&&(n.fromBufferAttribute(N,O),M[R+z+8]=n.x,M[R+z+9]=n.y,M[R+z+10]=n.z,M[R+z+11]=N.itemSize===4?n.w:1)}}u={count:d,texture:A,size:new lt(y,b)},r.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(s,"morphTexture",a.morphTexture,t);else{let f=0;for(let x=0;x<c.length;x++)f+=c[x];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(s,"morphTargetBaseInfluence",g),l.getUniforms().setValue(s,"morphTargetInfluences",c)}l.getUniforms().setValue(s,"morphTargetsTexture",u.texture,t),l.getUniforms().setValue(s,"morphTargetsTextureSize",u.size)}return{update:i}}function xg(s,e,t,r,n){let i=new WeakMap;function a(c){let h=n.render.frame,d=c.geometry,u=e.get(c,d);if(i.get(u)!==h&&(e.update(u),i.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),i.get(c)!==h&&(t.update(c.instanceMatrix,s.ARRAY_BUFFER),c.instanceColor!==null&&t.update(c.instanceColor,s.ARRAY_BUFFER),i.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;i.get(f)!==h&&(f.update(),i.set(f,h))}return u}function o(){i=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),r.releaseStatesOfObject(h),t.remove(h.instanceMatrix),h.instanceColor!==null&&t.remove(h.instanceColor)}return{update:a,dispose:o}}var yg={[Vs]:"LINEAR_TONE_MAPPING",[Hs]:"REINHARD_TONE_MAPPING",[Ws]:"CINEON_TONE_MAPPING",[Ri]:"ACES_FILMIC_TONE_MAPPING",[Ys]:"AGX_TONE_MAPPING",[qs]:"NEUTRAL_TONE_MAPPING",[Xs]:"CUSTOM_TONE_MAPPING"};function Sg(s,e,t,r,n,i){let a=new Jt(e,t,{type:s,depthBuffer:n,stencilBuffer:i,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new Yt;c.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new Lt([0,2,0,0,2,0],2));let h=new Jr({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new _t(c,h),u=new mi(-1,1,1,-1,0,1),f=null,g=null,x=!1,p,m=null,S=[],E=!1;this.setSize=function(y,b){a.setSize(y,b),o!==null&&o.setSize(y,b),l!==null&&l.setSize(y,b);for(let M=0;M<S.length;M++){let A=S[M];A.setSize&&A.setSize(y,b)}},this.setEffects=function(y){S=y,E=S.length>0&&S[0].isRenderPass===!0;let b=a.width,M=a.height;S.length>0&&o===null&&(o=new Jt(b,M,{type:dn,depthBuffer:!1,stencilBuffer:!1}),l=new Jt(b,M,{type:dn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<S.length;A++){let v=S[A];v.setSize&&v.setSize(b,M)}},this.begin=function(y,b){if(x||y.toneMapping===Qn&&S.length===0)return!1;if(m=b,b!==null){let M=b.width,A=b.height;(a.width!==M||a.height!==A)&&this.setSize(M,A)}return E===!1&&y.setRenderTarget(a),p=y.toneMapping,y.toneMapping=Qn,!0},this.hasRenderPass=function(){return E},this.end=function(y,b){y.toneMapping=p,x=!0;let M=a,A=o;for(let v=0;v<S.length;v++){let T=S[v];T.enabled!==!1&&(T.render(y,A,M,b),T.needsSwap!==!1&&(M=A,A=A===o?l:o))}if(f!==y.outputColorSpace||g!==y.toneMapping){f=y.outputColorSpace,g=y.toneMapping,h.defines={},wt.getTransfer(f)===It&&(h.defines.SRGB_TRANSFER="");let v=yg[g];v&&(h.defines[v]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=M.texture,y.setRenderTarget(m),y.render(d,u),m=null,x=!1},this.isCompositing=function(){return x},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}var Zu=new on,Fc=new Hi(1,1),Ju=new Es,Ku=new $a,ju=new Ds,Ru=[],Pu=[],Iu=new Float32Array(16),Du=new Float32Array(9),Uu=new Float32Array(4);function hs(s,e,t){let r=s[0];if(r<=0||r>0)return s;let n=e*t,i=Ru[n];if(i===void 0&&(i=new Float32Array(n),Ru[n]=i),e!==0){r.toArray(i,0);for(let a=1,o=0;a!==e;++a)o+=t,s[a].toArray(i,o)}return i}function en(s,e){if(s.length!==e.length)return!1;for(let t=0,r=s.length;t<r;t++)if(s[t]!==e[t])return!1;return!0}function tn(s,e){for(let t=0,r=e.length;t<r;t++)s[t]=e[t]}function ol(s,e){let t=Pu[e];t===void 0&&(t=new Int32Array(e),Pu[e]=t);for(let r=0;r!==e;++r)t[r]=s.allocateTextureUnit();return t}function bg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1f(this.addr,e),t[0]=e)}function Mg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2fv(this.addr,e),tn(t,e)}}function wg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(s.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(en(t,e))return;s.uniform3fv(this.addr,e),tn(t,e)}}function Tg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4fv(this.addr,e),tn(t,e)}}function Ag(s,e){let t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix2fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Uu.set(r),s.uniformMatrix2fv(this.addr,!1,Uu),tn(t,r)}}function Eg(s,e){let t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix3fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Du.set(r),s.uniformMatrix3fv(this.addr,!1,Du),tn(t,r)}}function Cg(s,e){let t=this.cache,r=e.elements;if(r===void 0){if(en(t,e))return;s.uniformMatrix4fv(this.addr,!1,e),tn(t,e)}else{if(en(t,r))return;Iu.set(r),s.uniformMatrix4fv(this.addr,!1,Iu),tn(t,r)}}function Rg(s,e){let t=this.cache;t[0]!==e&&(s.uniform1i(this.addr,e),t[0]=e)}function Pg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2iv(this.addr,e),tn(t,e)}}function Ig(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3iv(this.addr,e),tn(t,e)}}function Dg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4iv(this.addr,e),tn(t,e)}}function Ug(s,e){let t=this.cache;t[0]!==e&&(s.uniform1ui(this.addr,e),t[0]=e)}function Lg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(s.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(en(t,e))return;s.uniform2uiv(this.addr,e),tn(t,e)}}function Fg(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(s.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(en(t,e))return;s.uniform3uiv(this.addr,e),tn(t,e)}}function Ng(s,e){let t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(s.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(en(t,e))return;s.uniform4uiv(this.addr,e),tn(t,e)}}function Og(s,e,t){let r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n);let i;this.type===s.SAMPLER_2D_SHADOW?(Fc.compareFunction=t.isReversedDepthBuffer()?tl:el,i=Fc):i=Zu,t.setTexture2D(e||i,n)}function Bg(s,e,t){let r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture3D(e||Ku,n)}function kg(s,e,t){let r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTextureCube(e||ju,n)}function zg(s,e,t){let r=this.cache,n=t.allocateTextureUnit();r[0]!==n&&(s.uniform1i(this.addr,n),r[0]=n),t.setTexture2DArray(e||Ju,n)}function Gg(s){switch(s){case 5126:return bg;case 35664:return Mg;case 35665:return wg;case 35666:return Tg;case 35674:return Ag;case 35675:return Eg;case 35676:return Cg;case 5124:case 35670:return Rg;case 35667:case 35671:return Pg;case 35668:case 35672:return Ig;case 35669:case 35673:return Dg;case 5125:return Ug;case 36294:return Lg;case 36295:return Fg;case 36296:return Ng;case 35678:case 36198:case 36298:case 36306:case 35682:return Og;case 35679:case 36299:case 36307:return Bg;case 35680:case 36300:case 36308:case 36293:return kg;case 36289:case 36303:case 36311:case 36292:return zg}}function Vg(s,e){s.uniform1fv(this.addr,e)}function Hg(s,e){let t=hs(e,this.size,2);s.uniform2fv(this.addr,t)}function Wg(s,e){let t=hs(e,this.size,3);s.uniform3fv(this.addr,t)}function Xg(s,e){let t=hs(e,this.size,4);s.uniform4fv(this.addr,t)}function Yg(s,e){let t=hs(e,this.size,4);s.uniformMatrix2fv(this.addr,!1,t)}function qg(s,e){let t=hs(e,this.size,9);s.uniformMatrix3fv(this.addr,!1,t)}function Zg(s,e){let t=hs(e,this.size,16);s.uniformMatrix4fv(this.addr,!1,t)}function Jg(s,e){s.uniform1iv(this.addr,e)}function Kg(s,e){s.uniform2iv(this.addr,e)}function jg(s,e){s.uniform3iv(this.addr,e)}function $g(s,e){s.uniform4iv(this.addr,e)}function Qg(s,e){s.uniform1uiv(this.addr,e)}function e0(s,e){s.uniform2uiv(this.addr,e)}function t0(s,e){s.uniform3uiv(this.addr,e)}function n0(s,e){s.uniform4uiv(this.addr,e)}function i0(s,e,t){let r=this.cache,n=e.length,i=ol(t,n);en(r,i)||(s.uniform1iv(this.addr,i),tn(r,i));let a;this.type===s.SAMPLER_2D_SHADOW?a=Fc:a=Zu;for(let o=0;o!==n;++o)t.setTexture2D(e[o]||a,i[o])}function r0(s,e,t){let r=this.cache,n=e.length,i=ol(t,n);en(r,i)||(s.uniform1iv(this.addr,i),tn(r,i));for(let a=0;a!==n;++a)t.setTexture3D(e[a]||Ku,i[a])}function s0(s,e,t){let r=this.cache,n=e.length,i=ol(t,n);en(r,i)||(s.uniform1iv(this.addr,i),tn(r,i));for(let a=0;a!==n;++a)t.setTextureCube(e[a]||ju,i[a])}function a0(s,e,t){let r=this.cache,n=e.length,i=ol(t,n);en(r,i)||(s.uniform1iv(this.addr,i),tn(r,i));for(let a=0;a!==n;++a)t.setTexture2DArray(e[a]||Ju,i[a])}function o0(s){switch(s){case 5126:return Vg;case 35664:return Hg;case 35665:return Wg;case 35666:return Xg;case 35674:return Yg;case 35675:return qg;case 35676:return Zg;case 5124:case 35670:return Jg;case 35667:case 35671:return Kg;case 35668:case 35672:return jg;case 35669:case 35673:return $g;case 5125:return Qg;case 36294:return e0;case 36295:return t0;case 36296:return n0;case 35678:case 36198:case 36298:case 36306:case 35682:return i0;case 35679:case 36299:case 36307:return r0;case 35680:case 36300:case 36308:case 36293:return s0;case 36289:case 36303:case 36311:case 36292:return a0}}var Nc=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Gg(t.type)}},Oc=class{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=o0(t.type)}},Bc=class{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){let n=this.seq;for(let i=0,a=n.length;i!==a;++i){let o=n[i];o.setValue(e,t[o.id],r)}}},Uc=/(\w+)(\])?(\[|\.)?/g;function Lu(s,e){s.seq.push(e),s.map[e.id]=e}function l0(s,e,t){let r=s.name,n=r.length;for(Uc.lastIndex=0;;){let i=Uc.exec(r),a=Uc.lastIndex,o=i[1],l=i[2]==="]",c=i[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===n){Lu(t,c===void 0?new Nc(o,s,e):new Oc(o,s,e));break}else{let d=t.map[o];d===void 0&&(d=new Bc(o),Lu(t,d)),t=d}}}var ls=class{constructor(e,t){this.seq=[],this.map={};let r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<r;++a){let o=e.getActiveUniform(t,a),l=e.getUniformLocation(t,o.name);l0(o,l,this)}let n=[],i=[];for(let a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?n.push(a):i.push(a);n.length>0&&(this.seq=n.concat(i))}setValue(e,t,r,n){let i=this.map[t];i!==void 0&&i.setValue(e,r,n)}setOptional(e,t,r){let n=t[r];n!==void 0&&this.setValue(e,r,n)}static upload(e,t,r,n){for(let i=0,a=t.length;i!==a;++i){let o=t[i],l=r[o.id];l.needsUpdate!==!1&&o.setValue(e,l.value,n)}}static seqWithValue(e,t){let r=[];for(let n=0,i=e.length;n!==i;++n){let a=e[n];a.id in t&&r.push(a)}return r}};function Fu(s,e,t){let r=s.createShader(e);return s.shaderSource(r,t),s.compileShader(r),r}var c0=37297,h0=0;function u0(s,e){let t=s.split(`
`),r=[],n=Math.max(e-6,0),i=Math.min(e+6,t.length);for(let a=n;a<i;a++){let o=a+1;r.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return r.join(`
`)}var Nu=new mt;function d0(s){wt._getMatrix(Nu,wt.workingColorSpace,s);let e=`mat3( ${Nu.elements.map(t=>t.toFixed(4))} )`;switch(wt.getTransfer(s)){case As:return[e,"LinearTransferOETF"];case It:return[e,"sRGBTransferOETF"];default:return pt("WebGLProgram: Unsupported color space: ",s),[e,"LinearTransferOETF"]}}function Ou(s,e,t){let r=s.getShaderParameter(e,s.COMPILE_STATUS),i=(s.getShaderInfoLog(e)||"").trim();if(r&&i==="")return"";let a=/ERROR: 0:(\d+)/.exec(i);if(a){let o=parseInt(a[1]);return t.toUpperCase()+`

`+i+`

`+u0(s.getShaderSource(e),o)}else return i}function f0(s,e){let t=d0(e);return[`vec4 ${s}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}var p0={[Vs]:"Linear",[Hs]:"Reinhard",[Ws]:"Cineon",[Ri]:"ACESFilmic",[Ys]:"AgX",[qs]:"Neutral",[Xs]:"Custom"};function m0(s,e){let t=p0[e];return t===void 0?(pt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+s+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+s+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}var il=new Z;function g0(){wt.getLuminanceCoefficients(il);let s=il.x.toFixed(4),e=il.y.toFixed(4),t=il.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${s}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function v0(s){return[s.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",s.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(sa).join(`
`)}function _0(s){let e=[];for(let t in s){let r=s[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function x0(s,e){let t={},r=s.getProgramParameter(e,s.ACTIVE_ATTRIBUTES);for(let n=0;n<r;n++){let i=s.getActiveAttrib(e,n),a=i.name,o=1;i.type===s.FLOAT_MAT2&&(o=2),i.type===s.FLOAT_MAT3&&(o=3),i.type===s.FLOAT_MAT4&&(o=4),t[a]={type:i.type,location:s.getAttribLocation(e,a),locationSize:o}}return t}function sa(s){return s!==""}function Bu(s,e){let t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return s.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function ku(s,e){return s.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}var y0=/^[ \t]*#include +<([\w\d./]+)>/gm;function kc(s){return s.replace(y0,b0)}var S0=new Map;function b0(s,e){let t=yt[e];if(t===void 0){let r=S0.get(e);if(r!==void 0)t=yt[r],pt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return kc(t)}var M0=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function zu(s){return s.replace(M0,w0)}function w0(s,e,t,r){let n="";for(let i=parseInt(e);i<parseInt(t);i++)n+=r.replace(/\[\s*i\s*\]/g,"[ "+i+" ]").replace(/UNROLLED_LOOP_INDEX/g,i);return n}function Gu(s){let e=`precision ${s.precision} float;
	precision ${s.precision} int;
	precision ${s.precision} sampler2D;
	precision ${s.precision} samplerCube;
	precision ${s.precision} sampler3D;
	precision ${s.precision} sampler2DArray;
	precision ${s.precision} sampler2DShadow;
	precision ${s.precision} samplerCubeShadow;
	precision ${s.precision} sampler2DArrayShadow;
	precision ${s.precision} isampler2D;
	precision ${s.precision} isampler3D;
	precision ${s.precision} isamplerCube;
	precision ${s.precision} isampler2DArray;
	precision ${s.precision} usampler2D;
	precision ${s.precision} usampler3D;
	precision ${s.precision} usamplerCube;
	precision ${s.precision} usampler2DArray;
	`;return s.precision==="highp"?e+=`
#define HIGH_PRECISION`:s.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:s.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}var T0={[Gs]:"SHADOWMAP_TYPE_PCF",[ns]:"SHADOWMAP_TYPE_VSM"};function A0(s){return T0[s.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}var E0={[Ki]:"ENVMAP_TYPE_CUBE",[ur]:"ENVMAP_TYPE_CUBE",[Zs]:"ENVMAP_TYPE_CUBE_UV"};function C0(s){return s.envMap===!1?"ENVMAP_TYPE_CUBE":E0[s.envMapMode]||"ENVMAP_TYPE_CUBE"}var R0={[ur]:"ENVMAP_MODE_REFRACTION"};function P0(s){return s.envMap===!1?"ENVMAP_MODE_REFLECTION":R0[s.envMapMode]||"ENVMAP_MODE_REFLECTION"}var I0={[lc]:"ENVMAP_BLENDING_MULTIPLY",[su]:"ENVMAP_BLENDING_MIX",[au]:"ENVMAP_BLENDING_ADD"};function D0(s){return s.envMap===!1?"ENVMAP_BLENDING_NONE":I0[s.combine]||"ENVMAP_BLENDING_NONE"}function U0(s){let e=s.envMapCubeUVHeight;if(e===null)return null;let t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function L0(s,e,t,r){let n=s.getContext(),i=t.defines,a=t.vertexShader,o=t.fragmentShader,l=A0(t),c=C0(t),h=P0(t),d=D0(t),u=U0(t),f=v0(t),g=_0(i),x=n.createProgram(),p,m,S=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sa).join(`
`),p.length>0&&(p+=`
`),m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(sa).join(`
`),m.length>0&&(m+=`
`)):(p=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(sa).join(`
`),m=[Gu(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.envMap?"#define "+h:"",t.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Qn?"#define TONE_MAPPING":"",t.toneMapping!==Qn?yt.tonemapping_pars_fragment:"",t.toneMapping!==Qn?m0("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",yt.colorspace_pars_fragment,f0("linearToOutputTexel",t.outputColorSpace),g0(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(sa).join(`
`)),a=kc(a),a=Bu(a,t),a=ku(a,t),o=kc(o),o=Bu(o,t),o=ku(o,t),a=zu(a),o=zu(o),t.isRawShaderMaterial!==!0&&(S=`#version 300 es
`,p=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+p,m=["#define varying in",t.glslVersion===_c?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===_c?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+m);let E=S+p+a,y=S+m+o,b=Fu(n,n.VERTEX_SHADER,E),M=Fu(n,n.FRAGMENT_SHADER,y);n.attachShader(x,b),n.attachShader(x,M),t.index0AttributeName!==void 0?n.bindAttribLocation(x,0,t.index0AttributeName):t.hasPositionAttribute===!0&&n.bindAttribLocation(x,0,"position"),n.linkProgram(x);function A(P){if(s.debug.checkShaderErrors){let C=n.getProgramInfoLog(x)||"",N=n.getShaderInfoLog(b)||"",R=n.getShaderInfoLog(M)||"",O=C.trim(),z=N.trim(),K=R.trim(),re=!0,G=!0;if(n.getProgramParameter(x,n.LINK_STATUS)===!1)if(re=!1,typeof s.debug.onShaderError=="function")s.debug.onShaderError(n,x,b,M);else{let V=Ou(n,b,"vertex"),U=Ou(n,M,"fragment");ft("WebGLProgram: Shader Error "+n.getError()+" - VALIDATE_STATUS "+n.getProgramParameter(x,n.VALIDATE_STATUS)+`

Material Name: `+P.name+`
Material Type: `+P.type+`

Program Info Log: `+O+`
`+V+`
`+U)}else O!==""?pt("WebGLProgram: Program Info Log:",O):(z===""||K==="")&&(G=!1);G&&(P.diagnostics={runnable:re,programLog:O,vertexShader:{log:z,prefix:p},fragmentShader:{log:K,prefix:m}})}n.deleteShader(b),n.deleteShader(M),v=new ls(n,x),T=x0(n,x)}let v;this.getUniforms=function(){return v===void 0&&A(this),v};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let I=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return I===!1&&(I=n.getProgramParameter(x,c0)),I},this.destroy=function(){r.releaseStatesOfProgram(this),n.deleteProgram(x),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=h0++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=b,this.fragmentShader=M,this}var F0=0,zc=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){let n=this._getShaderCacheForMaterial(e);return n.has(t)===!1&&(n.add(t),t.usedTimes++),n.has(r)===!1&&(n.add(r),r.usedTimes++),this}remove(e){let t=this.materialCache.get(e);for(let r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){let t=this.materialCache,r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){let t=this.shaderCache,r=t.get(e);return r===void 0&&(r=new Gc(e),t.set(e,r)),r}},Gc=class{constructor(e){this.id=F0++,this.code=e,this.usedTimes=0}};function N0(s){return s===Qi||s===ea||s===ta}function O0(s,e,t,r,n,i){let a=new Vr,o=new zc,l=new Set,c=[],h=new Map,d=r.logarithmicDepthBuffer,u=r.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(v){return l.add(v),v===0?"uv":`uv${v}`}function x(v,T,I,P,C,N){let R=P.fog,O=C.geometry,z=v.isMeshStandardMaterial||v.isMeshLambertMaterial||v.isMeshPhongMaterial?P.environment:null,K=v.isMeshStandardMaterial||v.isMeshLambertMaterial&&!v.envMap||v.isMeshPhongMaterial&&!v.envMap,re=e.get(v.envMap||z,K),G=re&&re.mapping===Zs?re.image.height:null,V=f[v.type];v.precision!==null&&(u=r.getMaxPrecision(v.precision),u!==v.precision&&pt("WebGLProgram.getParameters:",v.precision,"not supported, using",u,"instead."));let U=O.morphAttributes.position||O.morphAttributes.normal||O.morphAttributes.color,J=U!==void 0?U.length:0,j=0;O.morphAttributes.position!==void 0&&(j=1),O.morphAttributes.normal!==void 0&&(j=2),O.morphAttributes.color!==void 0&&(j=3);let ae,Q,me,B;if(V){let gt=ni[V];ae=gt.vertexShader,Q=gt.fragmentShader}else{ae=v.vertexShader,Q=v.fragmentShader;let gt=o.getVertexShaderStage(v),ut=o.getFragmentShaderStage(v);o.update(v,gt,ut),me=gt.id,B=ut.id}let H=s.getRenderTarget(),de=s.state.buffers.depth.getReversed(),we=C.isInstancedMesh===!0,ce=C.isBatchedMesh===!0,fe=!!v.map,st=!!v.matcap,Ue=!!re,Ee=!!v.aoMap,Ne=!!v.lightMap,Ce=!!v.bumpMap&&v.wireframe===!1,_e=!!v.normalMap,Ge=!!v.displacementMap,qe=!!v.emissiveMap,pe=!!v.metalnessMap,$e=!!v.roughnessMap,L=v.anisotropy>0,Se=v.clearcoat>0,be=v.dispersion>0,D=v.retroreflectivity>0,_=v.iridescence>0,k=v.sheen>0,W=v.transmission>0,ee=L&&!!v.anisotropyMap,ye=Se&&!!v.clearcoatMap,Me=Se&&!!v.clearcoatNormalMap,$=Se&&!!v.clearcoatRoughnessMap,se=_&&!!v.iridescenceMap,ue=_&&!!v.iridescenceThicknessMap,Be=k&&!!v.sheenColorMap,Te=k&&!!v.sheenRoughnessMap,xe=!!v.specularMap,Fe=!!v.specularColorMap,Pe=!!v.specularIntensityMap,Ke=W&&!!v.transmissionMap,X=W&&!!v.thicknessMap,ve=!!v.gradientMap,ie=!!v.alphaMap,Ae=v.alphaTest>0,Ie=!!v.alphaHash,le=!!v.extensions,Ve=Qn;v.toneMapped&&(H===null||H.isXRRenderTarget===!0)&&(Ve=s.toneMapping);let Xe={shaderID:V,shaderType:v.type,shaderName:v.name,vertexShader:ae,fragmentShader:Q,defines:v.defines,customVertexShaderID:me,customFragmentShaderID:B,isRawShaderMaterial:v.isRawShaderMaterial===!0,glslVersion:v.glslVersion,precision:u,batching:ce,batchingColor:ce&&C._colorsTexture!==null,instancing:we,instancingColor:we&&C.instanceColor!==null,instancingMorph:we&&C.morphTexture!==null,outputColorSpace:H===null?s.outputColorSpace:H.isXRRenderTarget===!0?H.texture.colorSpace:wt.workingColorSpace,alphaToCoverage:!!v.alphaToCoverage,map:fe,matcap:st,envMap:Ue,envMapMode:Ue&&re.mapping,envMapCubeUVHeight:G,aoMap:Ee,lightMap:Ne,bumpMap:Ce,normalMap:_e,displacementMap:Ge,emissiveMap:qe,normalMapObjectSpace:_e&&v.normalMapType===cu,normalMapTangentSpace:_e&&v.normalMapType===Qo,packedNormalMap:_e&&v.normalMapType===Qo&&N0(v.normalMap.format),metalnessMap:pe,roughnessMap:$e,anisotropy:L,anisotropyMap:ee,clearcoat:Se,clearcoatMap:ye,clearcoatNormalMap:Me,clearcoatRoughnessMap:$,dispersion:be,retroreflection:D,iridescence:_,iridescenceMap:se,iridescenceThicknessMap:ue,sheen:k,sheenColorMap:Be,sheenRoughnessMap:Te,specularMap:xe,specularColorMap:Fe,specularIntensityMap:Pe,transmission:W,transmissionMap:Ke,thicknessMap:X,gradientMap:ve,opaque:v.transparent===!1&&v.blending===is&&v.alphaToCoverage===!1,alphaMap:ie,alphaTest:Ae,alphaHash:Ie,combine:v.combine,mapUv:fe&&g(v.map.channel),aoMapUv:Ee&&g(v.aoMap.channel),lightMapUv:Ne&&g(v.lightMap.channel),bumpMapUv:Ce&&g(v.bumpMap.channel),normalMapUv:_e&&g(v.normalMap.channel),displacementMapUv:Ge&&g(v.displacementMap.channel),emissiveMapUv:qe&&g(v.emissiveMap.channel),metalnessMapUv:pe&&g(v.metalnessMap.channel),roughnessMapUv:$e&&g(v.roughnessMap.channel),anisotropyMapUv:ee&&g(v.anisotropyMap.channel),clearcoatMapUv:ye&&g(v.clearcoatMap.channel),clearcoatNormalMapUv:Me&&g(v.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:$&&g(v.clearcoatRoughnessMap.channel),iridescenceMapUv:se&&g(v.iridescenceMap.channel),iridescenceThicknessMapUv:ue&&g(v.iridescenceThicknessMap.channel),sheenColorMapUv:Be&&g(v.sheenColorMap.channel),sheenRoughnessMapUv:Te&&g(v.sheenRoughnessMap.channel),specularMapUv:xe&&g(v.specularMap.channel),specularColorMapUv:Fe&&g(v.specularColorMap.channel),specularIntensityMapUv:Pe&&g(v.specularIntensityMap.channel),transmissionMapUv:Ke&&g(v.transmissionMap.channel),thicknessMapUv:X&&g(v.thicknessMap.channel),alphaMapUv:ie&&g(v.alphaMap.channel),vertexTangents:!!O.attributes.tangent&&(_e||L),vertexNormals:!!O.attributes.normal,vertexColors:v.vertexColors,vertexAlphas:v.vertexColors===!0&&!!O.attributes.color&&O.attributes.color.itemSize===4,pointsUvs:C.isPoints===!0&&!!O.attributes.uv&&(fe||ie),fog:!!R,useFog:v.fog===!0,fogExp2:!!R&&R.isFogExp2,flatShading:v.wireframe===!1&&(v.flatShading===!0||O.attributes.normal===void 0&&_e===!1&&(v.isMeshLambertMaterial||v.isMeshPhongMaterial||v.isMeshStandardMaterial||v.isMeshPhysicalMaterial)),sizeAttenuation:v.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:de,skinning:C.isSkinnedMesh===!0,hasPositionAttribute:O.attributes.position!==void 0,morphTargets:O.morphAttributes.position!==void 0,morphNormals:O.morphAttributes.normal!==void 0,morphColors:O.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:j,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:N.length,numClippingPlanes:i.numPlanes,numClipIntersection:i.numIntersection,dithering:v.dithering,shadowMapEnabled:s.shadowMap.enabled&&I.length>0,shadowMapType:s.shadowMap.type,toneMapping:Ve,decodeVideoTexture:fe&&v.map.isVideoTexture===!0&&wt.getTransfer(v.map.colorSpace)===It,decodeVideoTextureEmissive:qe&&v.emissiveMap.isVideoTexture===!0&&wt.getTransfer(v.emissiveMap.colorSpace)===It,premultipliedAlpha:v.premultipliedAlpha,doubleSided:v.side===Ln,flipSided:v.side===Qt,useDepthPacking:v.depthPacking>=0,depthPacking:v.depthPacking||0,index0AttributeName:v.index0AttributeName,extensionClipCullDistance:le&&v.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(le&&v.extensions.multiDraw===!0||ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:v.customProgramCacheKey()};return Xe.vertexUv1s=l.has(1),Xe.vertexUv2s=l.has(2),Xe.vertexUv3s=l.has(3),l.clear(),Xe}function p(v){let T=[];if(v.shaderID?T.push(v.shaderID):(T.push(v.customVertexShaderID),T.push(v.customFragmentShaderID)),v.defines!==void 0)for(let I in v.defines)T.push(I),T.push(v.defines[I]);return v.isRawShaderMaterial===!1&&(m(T,v),S(T,v),T.push(s.outputColorSpace)),T.push(v.customProgramCacheKey),T.join()}function m(v,T){v.push(T.precision),v.push(T.outputColorSpace),v.push(T.envMapMode),v.push(T.envMapCubeUVHeight),v.push(T.mapUv),v.push(T.alphaMapUv),v.push(T.lightMapUv),v.push(T.aoMapUv),v.push(T.bumpMapUv),v.push(T.normalMapUv),v.push(T.displacementMapUv),v.push(T.emissiveMapUv),v.push(T.metalnessMapUv),v.push(T.roughnessMapUv),v.push(T.anisotropyMapUv),v.push(T.clearcoatMapUv),v.push(T.clearcoatNormalMapUv),v.push(T.clearcoatRoughnessMapUv),v.push(T.iridescenceMapUv),v.push(T.iridescenceThicknessMapUv),v.push(T.sheenColorMapUv),v.push(T.sheenRoughnessMapUv),v.push(T.specularMapUv),v.push(T.specularColorMapUv),v.push(T.specularIntensityMapUv),v.push(T.transmissionMapUv),v.push(T.thicknessMapUv),v.push(T.combine),v.push(T.fogExp2),v.push(T.sizeAttenuation),v.push(T.morphTargetsCount),v.push(T.morphAttributeCount),v.push(T.numSunLights),v.push(T.numDirLights),v.push(T.numPointLights),v.push(T.numSpotLights),v.push(T.numSpotLightMaps),v.push(T.numHemiLights),v.push(T.numRectAreaLights),v.push(T.numSunLightShadows),v.push(T.numDirLightShadows),v.push(T.numPointLightShadows),v.push(T.numSpotLightShadows),v.push(T.numSpotLightShadowsWithMaps),v.push(T.numLightProbes),v.push(T.shadowMapType),v.push(T.toneMapping),v.push(T.numClippingPlanes),v.push(T.numClipIntersection),v.push(T.depthPacking)}function S(v,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),v.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),v.push(a.mask)}function E(v){let T=f[v.type],I;if(T){let P=ni[T];I=ti.clone(P.uniforms)}else I=v.uniforms;return I}function y(v,T){let I=h.get(T);return I!==void 0?++I.usedTimes:(I=new L0(s,T,v,n),c.push(I),h.set(T,I)),I}function b(v){if(--v.usedTimes===0){let T=c.indexOf(v);c[T]=c[c.length-1],c.pop(),h.delete(v.cacheKey),v.destroy()}}function M(v){o.remove(v)}function A(){o.dispose()}return{getParameters:x,getProgramCacheKey:p,getUniforms:E,acquireProgram:y,releaseProgram:b,releaseShaderCache:M,programs:c,dispose:A}}function B0(){let s=new WeakMap;function e(a){return s.has(a)}function t(a){let o=s.get(a);return o===void 0&&(o={},s.set(a,o)),o}function r(a){s.delete(a)}function n(a,o,l){s.get(a)[o]=l}function i(){s=new WeakMap}return{has:e,get:t,remove:r,update:n,dispose:i}}function k0(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.material.id!==e.material.id?s.material.id-e.material.id:s.materialVariant!==e.materialVariant?s.materialVariant-e.materialVariant:s.z!==e.z?s.z-e.z:s.id-e.id}function Vu(s,e){return s.groupOrder!==e.groupOrder?s.groupOrder-e.groupOrder:s.renderOrder!==e.renderOrder?s.renderOrder-e.renderOrder:s.z!==e.z?e.z-s.z:s.id-e.id}function Hu(){let s=[],e=0,t=[],r=[],n=[];function i(){e=0,t.length=0,r.length=0,n.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,x,p,m){let S=s[e];return S===void 0?(S={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:x,renderOrder:u.renderOrder,z:p,group:m},s[e]=S):(S.id=u.id,S.object=u,S.geometry=f,S.material=g,S.materialVariant=a(u),S.groupOrder=x,S.renderOrder=u.renderOrder,S.z=p,S.group=m),e++,S}function l(u,f,g,x,p,m,S){S.reversedDepth===!0&&(p=-p);let E=o(u,f,g,x,p,m);g.transmission>0?r.push(E):g.transparent===!0?n.push(E):t.push(E)}function c(u,f,g,x,p,m){let S=o(u,f,g,x,p,m);g.transmission>0?r.unshift(S):g.transparent===!0?n.unshift(S):t.unshift(S)}function h(u,f){t.length>1&&t.sort(u||k0),r.length>1&&r.sort(f||Vu),n.length>1&&n.sort(f||Vu)}function d(){for(let u=e,f=s.length;u<f;u++){let g=s[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:r,transparent:n,init:i,push:l,unshift:c,finish:d,sort:h}}function z0(){let s=new WeakMap;function e(r,n){let i=s.get(r),a;return i===void 0?(a=new Hu,s.set(r,[a])):n>=i.length?(a=new Hu,i.push(a)):a=i[n],a}function t(){s=new WeakMap}return{get:e,dispose:t}}function G0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Z,color:new ze};break;case"SpotLight":t={position:new Z,direction:new Z,color:new ze,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Z,color:new ze,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Z,skyColor:new ze,groundColor:new ze};break;case"RectAreaLight":t={color:new ze,position:new Z,halfWidth:new Z,halfHeight:new Z};break}return s[e.id]=t,t}}}function V0(){let s={};return{get:function(e){if(s[e.id]!==void 0)return s[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return s[e.id]=t,t}}}var H0=0;function W0(s,e){return(e.castShadow?2:0)-(s.castShadow?2:0)+(e.map?1:0)-(s.map?1:0)}function X0(s){let e=new G0,t=V0(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)r.probe.push(new Z);let n=new Z,i=new Ut,a=new Ut;function o(c){let h=0,d=0,u=0;for(let C=0;C<9;C++)r.probe[C].set(0,0,0);let f=0,g=0,x=0,p=0,m=0,S=0,E=0,y=0,b=0,M=0,A=0,v=0,T=0,I=0;c.sort(W0);for(let C=0,N=c.length;C<N;C++){let R=c[C],O=R.color,z=R.intensity,K=R.distance,re=null;if(R.shadow&&R.shadow.map&&(R.shadow.map.texture.format===Qi?re=R.shadow.map.texture:re=R.shadow.map.depthTexture||R.shadow.map.texture),R.isAmbientLight)h+=O.r*z,d+=O.g*z,u+=O.b*z;else if(R.isLightProbe){for(let G=0;G<9;G++)r.probe[G].addScaledVector(R.sh.coefficients[G],z);I++}else if(R.isSunLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,U=t.get(R);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize.copy(V.mapSize).multiply(V.getFrameExtents()),r.sunShadow[g]=U,r.sunShadowMap[g]=re;let J=V.getViewportCount();for(let j=0;j<J;j++)r.sunShadowMatrix[x+j]=V.getMatrix(j),r.sunShadowCascade[x+j]=V._cascadeData[j];x+=J,g++}r.sun[f]=G,f++}else if(R.isDirectionalLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),R.castShadow){let V=R.shadow,U=t.get(R);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,r.directionalShadow[p]=U,r.directionalShadowMap[p]=re,r.directionalShadowMatrix[p]=R.shadow.matrix,b++}r.directional[p]=G,p++}else if(R.isSpotLight){let G=e.get(R);G.position.setFromMatrixPosition(R.matrixWorld),G.color.copy(O).multiplyScalar(z),G.distance=K,G.coneCos=Math.cos(R.angle),G.penumbraCos=Math.cos(R.angle*(1-R.penumbra)),G.decay=R.decay,r.spot[S]=G;let V=R.shadow;if(R.map&&(r.spotLightMap[v]=R.map,v++,V.updateMatrices(R),R.castShadow&&T++),r.spotLightMatrix[S]=V.matrix,R.castShadow){let U=t.get(R);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,r.spotShadow[S]=U,r.spotShadowMap[S]=re,A++}S++}else if(R.isRectAreaLight){let G=e.get(R);G.color.copy(O).multiplyScalar(z),G.halfWidth.set(R.width*.5,0,0),G.halfHeight.set(0,R.height*.5,0),r.rectArea[E]=G,E++}else if(R.isPointLight){let G=e.get(R);if(G.color.copy(R.color).multiplyScalar(R.intensity),G.distance=R.distance,G.decay=R.decay,R.castShadow){let V=R.shadow,U=t.get(R);U.shadowIntensity=V.intensity,U.shadowBias=V.bias,U.shadowNormalBias=V.normalBias,U.shadowRadius=V.radius,U.shadowMapSize=V.mapSize,U.shadowCameraNear=V.camera.near,U.shadowCameraFar=V.camera.far,r.pointShadow[m]=U,r.pointShadowMap[m]=re,r.pointShadowMatrix[m]=R.shadow.matrix,M++}r.point[m]=G,m++}else if(R.isHemisphereLight){let G=e.get(R);G.skyColor.copy(R.color).multiplyScalar(z),G.groundColor.copy(R.groundColor).multiplyScalar(z),r.hemi[y]=G,y++}}E>0&&(s.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=Je.LTC_FLOAT_1,r.rectAreaLTC2=Je.LTC_FLOAT_2):(r.rectAreaLTC1=Je.LTC_HALF_1,r.rectAreaLTC2=Je.LTC_HALF_2)),r.ambient[0]=h,r.ambient[1]=d,r.ambient[2]=u;let P=r.hash;(P.sunLength!==f||P.directionalLength!==p||P.pointLength!==m||P.spotLength!==S||P.rectAreaLength!==E||P.hemiLength!==y||P.numSunShadows!==g||P.numDirectionalShadows!==b||P.numPointShadows!==M||P.numSpotShadows!==A||P.numSpotMaps!==v||P.numLightProbes!==I)&&(r.sun.length=f,r.directional.length=p,r.spot.length=S,r.rectArea.length=E,r.point.length=m,r.hemi.length=y,r.sunShadow.length=g,r.sunShadowMap.length=g,r.sunShadowMatrix.length=x,r.sunShadowCascade.length=x,r.directionalShadow.length=b,r.directionalShadowMap.length=b,r.directionalShadowMatrix.length=b,r.pointShadow.length=M,r.pointShadowMap.length=M,r.pointShadowMatrix.length=M,r.spotShadow.length=A,r.spotShadowMap.length=A,r.spotLightMatrix.length=A+v-T,r.spotLightMap.length=v,r.numSpotLightShadowsWithMaps=T,r.numLightProbes=I,P.sunLength=f,P.directionalLength=p,P.pointLength=m,P.spotLength=S,P.rectAreaLength=E,P.hemiLength=y,P.numSunShadows=g,P.numDirectionalShadows=b,P.numPointShadows=M,P.numSpotShadows=A,P.numSpotMaps=v,P.numLightProbes=I,r.version=H0++)}function l(c,h){let d=0,u=0,f=0,g=0,x=0,p=0,m=h.matrixWorldInverse;for(let S=0,E=c.length;S<E;S++){let y=c[S];if(y.isSunLight){let b=r.sun[d];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),d++}else if(y.isDirectionalLight){let b=r.directional[u];b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),u++}else if(y.isSpotLight){let b=r.spot[g];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),b.direction.setFromMatrixPosition(y.matrixWorld),n.setFromMatrixPosition(y.target.matrixWorld),b.direction.sub(n),b.direction.transformDirection(m),g++}else if(y.isRectAreaLight){let b=r.rectArea[x];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),a.identity(),i.copy(y.matrixWorld),i.premultiply(m),a.extractRotation(i),b.halfWidth.set(y.width*.5,0,0),b.halfHeight.set(0,y.height*.5,0),b.halfWidth.applyMatrix4(a),b.halfHeight.applyMatrix4(a),x++}else if(y.isPointLight){let b=r.point[f];b.position.setFromMatrixPosition(y.matrixWorld),b.position.applyMatrix4(m),f++}else if(y.isHemisphereLight){let b=r.hemi[p];b.direction.setFromMatrixPosition(y.matrixWorld),b.direction.transformDirection(m),p++}}}return{setup:o,setupView:l,state:r}}function Wu(s){let e=new X0(s),t=[],r=[],n=[];function i(u){d.camera=u,t.length=0,r.length=0,n.length=0}function a(u){t.push(u)}function o(u){r.push(u)}function l(u){n.push(u)}function c(){e.setup(t)}function h(u){e.setupView(t,u)}let d={lightsArray:t,shadowsArray:r,lightProbeGridArray:n,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:i,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Y0(s){let e=new WeakMap;function t(n,i=0){let a=e.get(n),o;return a===void 0?(o=new Wu(s),e.set(n,[o])):i>=a.length?(o=new Wu(s),a.push(o)):o=a[i],o}function r(){e=new WeakMap}return{get:t,dispose:r}}var q0=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Z0=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,J0=[new Z(1,0,0),new Z(-1,0,0),new Z(0,1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1)],K0=[new Z(0,-1,0),new Z(0,-1,0),new Z(0,0,1),new Z(0,0,-1),new Z(0,-1,0),new Z(0,-1,0)],Xu=new Ut,ra=new Z,Lc=new Z;function j0(s,e,t){let r=new Xr,n=new lt,i=new lt,a=new Ot,o=new Kr,l=new jr,c={},h=t.maxTextureSize,d={[Ji]:Qt,[Qt]:Ji,[Ln]:Ln},u=new zt({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:q0,fragmentShader:Z0}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new Yt;g.setAttribute("position",new Dn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let x=new _t(g,u),p=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Gs;let m=this.type;this.render=function(M,A,v){if(p.enabled===!1||p.autoUpdate===!1&&p.needsUpdate===!1||M.length===0)return;this.type===ts&&(pt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Gs);let T=s.getRenderTarget(),I=s.getActiveCubeFace(),P=s.getActiveMipmapLevel(),C=s.state;C.setBlending(Gn),C.buffers.depth.getReversed()===!0?C.buffers.color.setClear(0,0,0,0):C.buffers.color.setClear(1,1,1,1),C.buffers.depth.setTest(!0),C.setScissorTest(!1);let N=m!==this.type;N&&A.traverse(function(R){R.material&&(Array.isArray(R.material)?R.material.forEach(O=>O.needsUpdate=!0):R.material.needsUpdate=!0)});for(let R=0,O=M.length;R<O;R++){let z=M[R],K=z.shadow;if(K===void 0){pt("WebGLShadowMap:",z,"has no shadow.");continue}if(K.autoUpdate===!1&&K.needsUpdate===!1)continue;n.copy(K.mapSize);let re=K.getFrameExtents();n.multiply(re),i.copy(K.mapSize),(n.x>h||n.y>h)&&(n.x>h&&(i.x=Math.floor(h/re.x),n.x=i.x*re.x,K.mapSize.x=i.x),n.y>h&&(i.y=Math.floor(h/re.y),n.y=i.y*re.y,K.mapSize.y=i.y));let G=s.state.buffers.depth.getReversed();if(K.camera._reversedDepth=G,K.map===null||N===!0){if(K.map!==null&&(K.map.depthTexture!==null&&(K.map.depthTexture.dispose(),K.map.depthTexture=null),K.map.dispose()),this.type===ns){if(z.isPointLight){pt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}K.map=new Jt(n.x,n.y,{format:Qi,type:dn,minFilter:Zt,magFilter:Zt,generateMipmaps:!1}),K.map.texture.name=z.name+".shadowMap",K.map.depthTexture=new Hi(n.x,n.y,Vn),K.map.depthTexture.name=z.name+".shadowMapDepth",K.map.depthTexture.format=di,K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=an,K.map.depthTexture.magFilter=an}else z.isPointLight?(K.map=new sl(n.x),K.map.depthTexture=new Qa(n.x,ei)):(K.map=new Jt(n.x,n.y),K.map.depthTexture=new Hi(n.x,n.y,ei)),K.map.depthTexture.name=z.name+".shadowMap",K.map.depthTexture.format=di,this.type===Gs?(K.map.depthTexture.compareFunction=G?tl:el,K.map.depthTexture.minFilter=Zt,K.map.depthTexture.magFilter=Zt):(K.map.depthTexture.compareFunction=null,K.map.depthTexture.minFilter=an,K.map.depthTexture.magFilter=an);K.camera.updateProjectionMatrix()}K.map.isWebGLCubeRenderTarget!==!0&&(K.map.width!==n.x||K.map.height!==n.y)&&K.map.setSize(n.x,n.y);let V=K.map.isWebGLCubeRenderTarget?6:K.getViewportCount();z.isPointLight!==!0&&K.updateMatrices(z,v);for(let U=0;U<V;U++){let J=K.getCamera(U);if(z.isPointLight){let j=K.camera,ae=K.matrix,Q=z.distance||j.far;Q!==j.far&&(j.far=Q,j.updateProjectionMatrix()),ra.setFromMatrixPosition(z.matrixWorld),j.position.copy(ra),Lc.copy(j.position),Lc.add(J0[U]),j.up.copy(K0[U]),j.lookAt(Lc),j.updateMatrixWorld(),ae.makeTranslation(-ra.x,-ra.y,-ra.z),Xu.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),K._frustum.setFromProjectionMatrix(Xu,j.coordinateSystem,j.reversedDepth)}if(K.map.isWebGLCubeRenderTarget)s.setRenderTarget(K.map,U),s.clear();else{U===0&&(s.setRenderTarget(K.map),s.clear());let j=K.getViewport(U);a.set(i.x*j.x,i.y*j.y,i.x*j.z,i.y*j.w),C.viewport(a)}r=K.getFrustum(U),y(A,v,J,z,this.type)}K.isPointLightShadow!==!0&&this.type===ns&&S(K,v),K.needsUpdate=!1}m=this.type,p.needsUpdate=!1,s.setRenderTarget(T,I,P)};function S(M,A){let v=e.update(x);u.defines.VSM_SAMPLES!==M.blurSamples&&(u.defines.VSM_SAMPLES=M.blurSamples,f.defines.VSM_SAMPLES=M.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),M.mapPass===null?M.mapPass=new Jt(n.x,n.y,{format:Qi,type:dn}):(M.mapPass.width!==M.map.width||M.mapPass.height!==M.map.height)&&M.mapPass.setSize(M.map.width,M.map.height),u.uniforms.shadow_pass.value=M.map.depthTexture,u.uniforms.resolution.value.set(M.map.width,M.map.height),u.uniforms.radius.value=M.radius,s.setRenderTarget(M.mapPass),s.clear(),s.renderBufferDirect(A,null,v,u,x,null),f.uniforms.shadow_pass.value=M.mapPass.texture,f.uniforms.resolution.value.set(M.map.width,M.map.height),f.uniforms.radius.value=M.radius,s.setRenderTarget(M.map),s.clear(),s.renderBufferDirect(A,null,v,f,x,null)}function E(M,A,v,T){let I=null,P=v.isPointLight===!0?M.customDistanceMaterial:M.customDepthMaterial;if(P!==void 0)I=P;else if(I=v.isPointLight===!0?l:o,s.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let C=I.uuid,N=A.uuid,R=c[C];R===void 0&&(R={},c[C]=R);let O=R[N];O===void 0&&(O=I.clone(),R[N]=O,A.addEventListener("dispose",b)),I=O}if(I.visible=A.visible,I.wireframe=A.wireframe,T===ns?I.side=A.shadowSide!==null?A.shadowSide:A.side:I.side=A.shadowSide!==null?A.shadowSide:d[A.side],I.alphaMap=A.alphaMap,I.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,I.map=A.map,I.clipShadows=A.clipShadows,I.clippingPlanes=A.clippingPlanes,I.clipIntersection=A.clipIntersection,I.displacementMap=A.displacementMap,I.displacementScale=A.displacementScale,I.displacementBias=A.displacementBias,I.wireframeLinewidth=A.wireframeLinewidth,I.linewidth=A.linewidth,v.isPointLight===!0&&I.isMeshDistanceMaterial===!0){let C=s.properties.get(I);C.light=v}return I}function y(M,A,v,T,I){if(M.visible===!1)return;if(M.layers.test(A.layers)&&(M.isMesh||M.isLine||M.isPoints)&&(M.castShadow||M.receiveShadow&&I===ns)&&(!M.frustumCulled||M.intersectsFrustum(r))){M.modelViewMatrix.multiplyMatrices(v.matrixWorldInverse,M.matrixWorld);let N=e.update(M),R=M.material;if(Array.isArray(R)){let O=N.groups;for(let z=0,K=O.length;z<K;z++){let re=O[z],G=R[re.materialIndex];if(G&&G.visible){let V=E(M,G,T,I);M.onBeforeShadow(s,M,A,v,N,V,re),s.renderBufferDirect(v,null,N,V,M,re),M.onAfterShadow(s,M,A,v,N,V,re)}}}else if(R.visible){let O=E(M,R,T,I);M.onBeforeShadow(s,M,A,v,N,O,null),s.renderBufferDirect(v,null,N,O,M,null),M.onAfterShadow(s,M,A,v,N,O,null)}}let C=M.children;for(let N=0,R=C.length;N<R;N++)y(C[N],A,v,T,I)}function b(M){M.target.removeEventListener("dispose",b);for(let v in c){let T=c[v],I=M.target.uuid;I in T&&(T[I].dispose(),delete T[I])}}}function $0(s,e){function t(){let X=!1,ve=new Ot,ie=null,Ae=new Ot(0,0,0,0);return{setMask:function(Ie){ie!==Ie&&!X&&(s.colorMask(Ie,Ie,Ie,Ie),ie=Ie)},setLocked:function(Ie){X=Ie},setClear:function(Ie,le,Ve,Xe,gt){gt===!0&&(Ie*=Xe,le*=Xe,Ve*=Xe),ve.set(Ie,le,Ve,Xe),Ae.equals(ve)===!1&&(s.clearColor(Ie,le,Ve,Xe),Ae.copy(ve))},reset:function(){X=!1,ie=null,Ae.set(-1,0,0,0)}}}function r(){let X=!1,ve=!1,ie=null,Ae=null,Ie=null;return{setReversed:function(le){if(ve!==le){let Ve=e.get("EXT_clip_control");le?Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.ZERO_TO_ONE_EXT):Ve.clipControlEXT(Ve.LOWER_LEFT_EXT,Ve.NEGATIVE_ONE_TO_ONE_EXT),ve=le;let Xe=Ie;Ie=null,this.setClear(Xe)}},getReversed:function(){return ve},setTest:function(le){le?H(s.DEPTH_TEST):de(s.DEPTH_TEST)},setMask:function(le){ie!==le&&!X&&(s.depthMask(le),ie=le)},setFunc:function(le){if(ve&&(le=Su[le]),Ae!==le){switch(le){case za:s.depthFunc(s.NEVER);break;case Ga:s.depthFunc(s.ALWAYS);break;case Va:s.depthFunc(s.LESS);break;case Or:s.depthFunc(s.LEQUAL);break;case Ha:s.depthFunc(s.EQUAL);break;case Wa:s.depthFunc(s.GEQUAL);break;case Xa:s.depthFunc(s.GREATER);break;case Ya:s.depthFunc(s.NOTEQUAL);break;default:s.depthFunc(s.LEQUAL)}Ae=le}},setLocked:function(le){X=le},setClear:function(le){Ie!==le&&(Ie=le,ve&&(le=1-le),s.clearDepth(le))},reset:function(){X=!1,ie=null,Ae=null,Ie=null,ve=!1}}}function n(){let X=!1,ve=null,ie=null,Ae=null,Ie=null,le=null,Ve=null,Xe=null,gt=null;return{setTest:function(ut){X||(ut?H(s.STENCIL_TEST):de(s.STENCIL_TEST))},setMask:function(ut){ve!==ut&&!X&&(s.stencilMask(ut),ve=ut)},setFunc:function(ut,Et,Ft){(ie!==ut||Ae!==Et||Ie!==Ft)&&(s.stencilFunc(ut,Et,Ft),ie=ut,Ae=Et,Ie=Ft)},setOp:function(ut,Et,Ft){(le!==ut||Ve!==Et||Xe!==Ft)&&(s.stencilOp(ut,Et,Ft),le=ut,Ve=Et,Xe=Ft)},setLocked:function(ut){X=ut},setClear:function(ut){gt!==ut&&(s.clearStencil(ut),gt=ut)},reset:function(){X=!1,ve=null,ie=null,Ae=null,Ie=null,le=null,Ve=null,Xe=null,gt=null}}}let i=new t,a=new r,o=new n,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],x=null,p=!1,m=null,S=null,E=null,y=null,b=null,M=null,A=null,v=new ze(0,0,0),T=0,I=!1,P=null,C=null,N=null,R=null,O=null,z=s.getParameter(s.MAX_COMBINED_TEXTURE_IMAGE_UNITS),K=!1,re=0,G=s.getParameter(s.VERSION);G.indexOf("WebGL")!==-1?(re=parseFloat(/^WebGL (\d)/.exec(G)[1]),K=re>=1):G.indexOf("OpenGL ES")!==-1&&(re=parseFloat(/^OpenGL ES (\d)/.exec(G)[1]),K=re>=2);let V=null,U={},J=s.getParameter(s.SCISSOR_BOX),j=s.getParameter(s.VIEWPORT),ae=new Ot().fromArray(J),Q=new Ot().fromArray(j);function me(X,ve,ie,Ae){let Ie=new Uint8Array(4),le=s.createTexture();s.bindTexture(X,le),s.texParameteri(X,s.TEXTURE_MIN_FILTER,s.NEAREST),s.texParameteri(X,s.TEXTURE_MAG_FILTER,s.NEAREST);for(let Ve=0;Ve<ie;Ve++)X===s.TEXTURE_3D||X===s.TEXTURE_2D_ARRAY?s.texImage3D(ve,0,s.RGBA,1,1,Ae,0,s.RGBA,s.UNSIGNED_BYTE,Ie):s.texImage2D(ve+Ve,0,s.RGBA,1,1,0,s.RGBA,s.UNSIGNED_BYTE,Ie);return le}let B={};B[s.TEXTURE_2D]=me(s.TEXTURE_2D,s.TEXTURE_2D,1),B[s.TEXTURE_CUBE_MAP]=me(s.TEXTURE_CUBE_MAP,s.TEXTURE_CUBE_MAP_POSITIVE_X,6),B[s.TEXTURE_2D_ARRAY]=me(s.TEXTURE_2D_ARRAY,s.TEXTURE_2D_ARRAY,1,1),B[s.TEXTURE_3D]=me(s.TEXTURE_3D,s.TEXTURE_3D,1,1),i.setClear(0,0,0,1),a.setClear(1),o.setClear(0),H(s.DEPTH_TEST),a.setFunc(Or),Ce(!1),_e(ic),H(s.CULL_FACE),Ee(Gn);function H(X){h[X]!==!0&&(s.enable(X),h[X]=!0)}function de(X){h[X]!==!1&&(s.disable(X),h[X]=!1)}function we(X,ve){return u[X]!==ve?(s.bindFramebuffer(X,ve),u[X]=ve,X===s.DRAW_FRAMEBUFFER&&(u[s.FRAMEBUFFER]=ve),X===s.FRAMEBUFFER&&(u[s.DRAW_FRAMEBUFFER]=ve),!0):!1}function ce(X,ve){let ie=g,Ae=!1;if(X){ie=f.get(ve),ie===void 0&&(ie=[],f.set(ve,ie));let Ie=X.textures;if(ie.length!==Ie.length||ie[0]!==s.COLOR_ATTACHMENT0){for(let le=0,Ve=Ie.length;le<Ve;le++)ie[le]=s.COLOR_ATTACHMENT0+le;ie.length=Ie.length,Ae=!0}}else ie[0]!==s.BACK&&(ie[0]=s.BACK,Ae=!0);Ae&&s.drawBuffers(ie)}function fe(X){return x!==X?(s.useProgram(X),x=X,!0):!1}let st={[hr]:s.FUNC_ADD,[Vh]:s.FUNC_SUBTRACT,[Hh]:s.FUNC_REVERSE_SUBTRACT};st[Wh]=s.MIN,st[Xh]=s.MAX;let Ue={[Yh]:s.ZERO,[qh]:s.ONE,[Zh]:s.SRC_COLOR,[ac]:s.SRC_ALPHA,[eu]:s.SRC_ALPHA_SATURATE,[$h]:s.DST_COLOR,[Kh]:s.DST_ALPHA,[Jh]:s.ONE_MINUS_SRC_COLOR,[oc]:s.ONE_MINUS_SRC_ALPHA,[Qh]:s.ONE_MINUS_DST_COLOR,[jh]:s.ONE_MINUS_DST_ALPHA,[tu]:s.CONSTANT_COLOR,[nu]:s.ONE_MINUS_CONSTANT_COLOR,[iu]:s.CONSTANT_ALPHA,[ru]:s.ONE_MINUS_CONSTANT_ALPHA};function Ee(X,ve,ie,Ae,Ie,le,Ve,Xe,gt,ut){if(X===Gn){p===!0&&(de(s.BLEND),p=!1);return}if(p===!1&&(H(s.BLEND),p=!0),X!==Gh){if(X!==m||ut!==I){if((S!==hr||b!==hr)&&(s.blendEquation(s.FUNC_ADD),S=hr,b=hr),ut)switch(X){case is:s.blendFuncSeparate(s.ONE,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ci:s.blendFunc(s.ONE,s.ONE);break;case rc:s.blendFuncSeparate(s.ZERO,s.ONE_MINUS_SRC_COLOR,s.ZERO,s.ONE);break;case sc:s.blendFuncSeparate(s.DST_COLOR,s.ONE_MINUS_SRC_ALPHA,s.ZERO,s.ONE);break;default:ft("WebGLState: Invalid blending: ",X);break}else switch(X){case is:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE_MINUS_SRC_ALPHA,s.ONE,s.ONE_MINUS_SRC_ALPHA);break;case Ci:s.blendFuncSeparate(s.SRC_ALPHA,s.ONE,s.ONE,s.ONE);break;case rc:ft("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case sc:ft("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ft("WebGLState: Invalid blending: ",X);break}E=null,y=null,M=null,A=null,v.set(0,0,0),T=0,m=X,I=ut}return}Ie=Ie||ve,le=le||ie,Ve=Ve||Ae,(ve!==S||Ie!==b)&&(s.blendEquationSeparate(st[ve],st[Ie]),S=ve,b=Ie),(ie!==E||Ae!==y||le!==M||Ve!==A)&&(s.blendFuncSeparate(Ue[ie],Ue[Ae],Ue[le],Ue[Ve]),E=ie,y=Ae,M=le,A=Ve),(Xe.equals(v)===!1||gt!==T)&&(s.blendColor(Xe.r,Xe.g,Xe.b,gt),v.copy(Xe),T=gt),m=X,I=!1}function Ne(X,ve){X.side===Ln?de(s.CULL_FACE):H(s.CULL_FACE);let ie=X.side===Qt;ve&&(ie=!ie),Ce(ie),X.blending===is&&X.transparent===!1?Ee(Gn):Ee(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),a.setFunc(X.depthFunc),a.setTest(X.depthTest),a.setMask(X.depthWrite),i.setMask(X.colorWrite);let Ae=X.stencilWrite;o.setTest(Ae),Ae&&(o.setMask(X.stencilWriteMask),o.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),o.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),qe(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?H(s.SAMPLE_ALPHA_TO_COVERAGE):de(s.SAMPLE_ALPHA_TO_COVERAGE)}function Ce(X){P!==X&&(X?s.frontFace(s.CW):s.frontFace(s.CCW),P=X)}function _e(X){X!==kh?(H(s.CULL_FACE),X!==C&&(X===ic?s.cullFace(s.BACK):X===zh?s.cullFace(s.FRONT):s.cullFace(s.FRONT_AND_BACK))):de(s.CULL_FACE),C=X}function Ge(X){X!==N&&(K&&s.lineWidth(X),N=X)}function qe(X,ve,ie){X?(H(s.POLYGON_OFFSET_FILL),(R!==ve||O!==ie)&&(R=ve,O=ie,a.getReversed()&&(ve=-ve),s.polygonOffset(ve,ie))):de(s.POLYGON_OFFSET_FILL)}function pe(X){X?H(s.SCISSOR_TEST):de(s.SCISSOR_TEST)}function $e(X){X===void 0&&(X=s.TEXTURE0+z-1),V!==X&&(s.activeTexture(X),V=X)}function L(X,ve,ie){ie===void 0&&(V===null?ie=s.TEXTURE0+z-1:ie=V);let Ae=U[ie];Ae===void 0&&(Ae={type:void 0,texture:void 0},U[ie]=Ae),(Ae.type!==X||Ae.texture!==ve)&&(V!==ie&&(s.activeTexture(ie),V=ie),s.bindTexture(X,ve||B[X]),Ae.type=X,Ae.texture=ve)}function Se(){let X=U[V];X!==void 0&&X.type!==void 0&&(s.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function be(){try{s.compressedTexImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function D(){try{s.compressedTexImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function _(){try{s.texSubImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function k(){try{s.texSubImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function W(){try{s.compressedTexSubImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function ee(){try{s.compressedTexSubImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function ye(){try{s.texStorage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function Me(){try{s.texStorage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function $(){try{s.texImage2D(...arguments)}catch(X){ft("WebGLState:",X)}}function se(){try{s.texImage3D(...arguments)}catch(X){ft("WebGLState:",X)}}function ue(X){return d[X]!==void 0?d[X]:s.getParameter(X)}function Be(X,ve){d[X]!==ve&&(s.pixelStorei(X,ve),d[X]=ve)}function Te(X){ae.equals(X)===!1&&(s.scissor(X.x,X.y,X.z,X.w),ae.copy(X))}function xe(X){Q.equals(X)===!1&&(s.viewport(X.x,X.y,X.z,X.w),Q.copy(X))}function Fe(X,ve){let ie=c.get(ve);ie===void 0&&(ie=new WeakMap,c.set(ve,ie));let Ae=ie.get(X);Ae===void 0&&(Ae=s.getUniformBlockIndex(ve,X.name),ie.set(X,Ae))}function Pe(X,ve){let Ae=c.get(ve).get(X);l.get(ve)!==Ae&&(s.uniformBlockBinding(ve,Ae,X.__bindingPointIndex),l.set(ve,Ae))}function Ke(){s.disable(s.BLEND),s.disable(s.CULL_FACE),s.disable(s.DEPTH_TEST),s.disable(s.POLYGON_OFFSET_FILL),s.disable(s.SCISSOR_TEST),s.disable(s.STENCIL_TEST),s.disable(s.SAMPLE_ALPHA_TO_COVERAGE),s.blendEquation(s.FUNC_ADD),s.blendFunc(s.ONE,s.ZERO),s.blendFuncSeparate(s.ONE,s.ZERO,s.ONE,s.ZERO),s.blendColor(0,0,0,0),s.colorMask(!0,!0,!0,!0),s.clearColor(0,0,0,0),s.depthMask(!0),s.depthFunc(s.LESS),a.setReversed(!1),s.clearDepth(1),s.stencilMask(4294967295),s.stencilFunc(s.ALWAYS,0,4294967295),s.stencilOp(s.KEEP,s.KEEP,s.KEEP),s.clearStencil(0),s.cullFace(s.BACK),s.frontFace(s.CCW),s.polygonOffset(0,0),s.activeTexture(s.TEXTURE0),s.bindFramebuffer(s.FRAMEBUFFER,null),s.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),s.bindFramebuffer(s.READ_FRAMEBUFFER,null),s.useProgram(null),s.lineWidth(1),s.scissor(0,0,s.canvas.width,s.canvas.height),s.viewport(0,0,s.canvas.width,s.canvas.height),s.pixelStorei(s.PACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_ALIGNMENT,4),s.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,!1),s.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),s.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,s.BROWSER_DEFAULT_WEBGL),s.pixelStorei(s.PACK_ROW_LENGTH,0),s.pixelStorei(s.PACK_SKIP_PIXELS,0),s.pixelStorei(s.PACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_ROW_LENGTH,0),s.pixelStorei(s.UNPACK_IMAGE_HEIGHT,0),s.pixelStorei(s.UNPACK_SKIP_PIXELS,0),s.pixelStorei(s.UNPACK_SKIP_ROWS,0),s.pixelStorei(s.UNPACK_SKIP_IMAGES,0),h={},d={},V=null,U={},u={},f=new WeakMap,g=[],x=null,p=!1,m=null,S=null,E=null,y=null,b=null,M=null,A=null,v=new ze(0,0,0),T=0,I=!1,P=null,C=null,N=null,R=null,O=null,ae.set(0,0,s.canvas.width,s.canvas.height),Q.set(0,0,s.canvas.width,s.canvas.height),i.reset(),a.reset(),o.reset()}return{buffers:{color:i,depth:a,stencil:o},enable:H,disable:de,bindFramebuffer:we,drawBuffers:ce,useProgram:fe,setBlending:Ee,setMaterial:Ne,setFlipSided:Ce,setCullFace:_e,setLineWidth:Ge,setPolygonOffset:qe,setScissorTest:pe,activeTexture:$e,bindTexture:L,unbindTexture:Se,compressedTexImage2D:be,compressedTexImage3D:D,texImage2D:$,texImage3D:se,pixelStorei:Be,getParameter:ue,updateUBOMapping:Fe,uniformBlockBinding:Pe,texStorage2D:ye,texStorage3D:Me,texSubImage2D:_,texSubImage3D:k,compressedTexSubImage2D:W,compressedTexSubImage3D:ee,scissor:Te,viewport:xe,reset:Ke}}function Q0(s,e,t,r,n,i,a){let o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new lt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function x(D,_){return g?new OffscreenCanvas(D,_):kr("canvas")}function p(D,_,k){let W=1,ee=be(D);if((ee.width>k||ee.height>k)&&(W=k/Math.max(ee.width,ee.height)),W<1)if(typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&D instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&D instanceof ImageBitmap||typeof VideoFrame<"u"&&D instanceof VideoFrame){let ye=Math.floor(W*ee.width),Me=Math.floor(W*ee.height);u===void 0&&(u=x(ye,Me));let $=_?x(ye,Me):u;return $.width=ye,$.height=Me,$.getContext("2d").drawImage(D,0,0,ye,Me),pt("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+ye+"x"+Me+")."),$}else return"data"in D&&pt("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),D;return D}function m(D){return D.generateMipmaps}function S(D){s.generateMipmap(D)}function E(D){return D.isWebGLCubeRenderTarget?s.TEXTURE_CUBE_MAP:D.isWebGL3DRenderTarget?s.TEXTURE_3D:D.isWebGLArrayRenderTarget||D.isCompressedArrayTexture?s.TEXTURE_2D_ARRAY:s.TEXTURE_2D}function y(D,_,k,W,ee,ye=!1){if(D!==null){if(s[D]!==void 0)return s[D];pt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+D+"'")}let Me;W&&(Me=e.get("EXT_texture_norm16"),Me||pt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let $=_;if(_===s.RED&&(k===s.FLOAT&&($=s.R32F),k===s.HALF_FLOAT&&($=s.R16F),k===s.UNSIGNED_BYTE&&($=s.R8),k===s.UNSIGNED_SHORT&&Me&&($=Me.R16_EXT),k===s.SHORT&&Me&&($=Me.R16_SNORM_EXT)),_===s.RED_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.R8UI),k===s.UNSIGNED_SHORT&&($=s.R16UI),k===s.UNSIGNED_INT&&($=s.R32UI),k===s.BYTE&&($=s.R8I),k===s.SHORT&&($=s.R16I),k===s.INT&&($=s.R32I)),_===s.RG&&(k===s.FLOAT&&($=s.RG32F),k===s.HALF_FLOAT&&($=s.RG16F),k===s.UNSIGNED_BYTE&&($=s.RG8),k===s.UNSIGNED_SHORT&&Me&&($=Me.RG16_EXT),k===s.SHORT&&Me&&($=Me.RG16_SNORM_EXT)),_===s.RG_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RG8UI),k===s.UNSIGNED_SHORT&&($=s.RG16UI),k===s.UNSIGNED_INT&&($=s.RG32UI),k===s.BYTE&&($=s.RG8I),k===s.SHORT&&($=s.RG16I),k===s.INT&&($=s.RG32I)),_===s.RGB_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGB8UI),k===s.UNSIGNED_SHORT&&($=s.RGB16UI),k===s.UNSIGNED_INT&&($=s.RGB32UI),k===s.BYTE&&($=s.RGB8I),k===s.SHORT&&($=s.RGB16I),k===s.INT&&($=s.RGB32I)),_===s.RGBA_INTEGER&&(k===s.UNSIGNED_BYTE&&($=s.RGBA8UI),k===s.UNSIGNED_SHORT&&($=s.RGBA16UI),k===s.UNSIGNED_INT&&($=s.RGBA32UI),k===s.BYTE&&($=s.RGBA8I),k===s.SHORT&&($=s.RGBA16I),k===s.INT&&($=s.RGBA32I)),_===s.RGB&&(k===s.UNSIGNED_SHORT&&Me&&($=Me.RGB16_EXT),k===s.SHORT&&Me&&($=Me.RGB16_SNORM_EXT),k===s.UNSIGNED_INT_5_9_9_9_REV&&($=s.RGB9_E5),k===s.UNSIGNED_INT_10F_11F_11F_REV&&($=s.R11F_G11F_B10F)),_===s.RGBA){let se=ye?As:wt.getTransfer(ee);k===s.FLOAT&&($=s.RGBA32F),k===s.HALF_FLOAT&&($=s.RGBA16F),k===s.UNSIGNED_BYTE&&($=se===It?s.SRGB8_ALPHA8:s.RGBA8),k===s.UNSIGNED_SHORT&&Me&&($=Me.RGBA16_EXT),k===s.SHORT&&Me&&($=Me.RGBA16_SNORM_EXT),k===s.UNSIGNED_SHORT_4_4_4_4&&($=s.RGBA4),k===s.UNSIGNED_SHORT_5_5_5_1&&($=s.RGB5_A1)}return($===s.R16F||$===s.R32F||$===s.RG16F||$===s.RG32F||$===s.RGBA16F||$===s.RGBA32F)&&e.get("EXT_color_buffer_float"),$}function b(D,_){let k;return D?_===null||_===ei||_===ss?k=s.DEPTH24_STENCIL8:_===Vn?k=s.DEPTH32F_STENCIL8:_===rs&&(k=s.DEPTH24_STENCIL8,pt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):_===null||_===ei||_===ss?k=s.DEPTH_COMPONENT24:_===Vn?k=s.DEPTH_COMPONENT32F:_===rs&&(k=s.DEPTH_COMPONENT16),k}function M(D,_){return m(D)===!0||D.isFramebufferTexture&&D.minFilter!==an&&D.minFilter!==Zt?Math.log2(Math.max(_.width,_.height))+1:D.mipmaps!==void 0&&D.mipmaps.length>0?D.mipmaps.length:D.isCompressedTexture&&Array.isArray(D.image)?_.mipmaps.length:1}function A(D){let _=D.target;_.removeEventListener("dispose",A),T(_),_.isVideoTexture&&h.delete(_),_.isHTMLTexture&&d.delete(_)}function v(D){let _=D.target;_.removeEventListener("dispose",v),P(_)}function T(D){let _=r.get(D);if(_.__webglInit===void 0)return;let k=D.source,W=f.get(k);if(W){let ee=W[_.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&I(D),Object.keys(W).length===0&&f.delete(k)}r.remove(D)}function I(D){let _=r.get(D);s.deleteTexture(_.__webglTexture);let k=D.source,W=f.get(k);delete W[_.__cacheKey],a.memory.textures--}function P(D){let _=r.get(D);if(D.depthTexture&&(D.depthTexture.dispose(),r.remove(D.depthTexture)),D.isWebGLCubeRenderTarget)for(let W=0;W<6;W++){if(Array.isArray(_.__webglFramebuffer[W]))for(let ee=0;ee<_.__webglFramebuffer[W].length;ee++)s.deleteFramebuffer(_.__webglFramebuffer[W][ee]);else s.deleteFramebuffer(_.__webglFramebuffer[W]);_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer[W])}else{if(Array.isArray(_.__webglFramebuffer))for(let W=0;W<_.__webglFramebuffer.length;W++)s.deleteFramebuffer(_.__webglFramebuffer[W]);else s.deleteFramebuffer(_.__webglFramebuffer);if(_.__webglDepthbuffer&&s.deleteRenderbuffer(_.__webglDepthbuffer),_.__webglMultisampledFramebuffer&&s.deleteFramebuffer(_.__webglMultisampledFramebuffer),_.__webglColorRenderbuffer)for(let W=0;W<_.__webglColorRenderbuffer.length;W++)_.__webglColorRenderbuffer[W]&&s.deleteRenderbuffer(_.__webglColorRenderbuffer[W]);_.__webglDepthRenderbuffer&&s.deleteRenderbuffer(_.__webglDepthRenderbuffer)}let k=D.textures;for(let W=0,ee=k.length;W<ee;W++){let ye=r.get(k[W]);ye.__webglTexture&&(s.deleteTexture(ye.__webglTexture),a.memory.textures--),r.remove(k[W])}r.remove(D)}let C=0;function N(){C=0}function R(){return C}function O(D){C=D}function z(){let D=C;return D>=n.maxTextures&&pt("WebGLTextures: Trying to use "+(D+1)+" texture units while this GPU supports only "+n.maxTextures),C+=1,D}function K(D){let _=[];return _.push(D.wrapS),_.push(D.wrapT),_.push(D.wrapR||0),_.push(D.magFilter),_.push(D.minFilter),_.push(D.anisotropy),_.push(D.internalFormat),_.push(D.format),_.push(D.type),_.push(D.generateMipmaps),_.push(D.premultiplyAlpha),_.push(D.flipY),_.push(D.unpackAlignment),_.push(D.colorSpace),_.join()}function re(D,_){let k=r.get(D);if(D.isVideoTexture&&L(D),D.isRenderTargetTexture===!1&&D.isExternalTexture!==!0&&D.version>0&&k.__version!==D.version){let W=D.image;if(W===null)pt("WebGLRenderer: Texture marked for update but no image data found.");else if(W.complete===!1)pt("WebGLRenderer: Texture marked for update but image is incomplete");else{de(k,D,_);return}}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D,k.__webglTexture,s.TEXTURE0+_)}function G(D,_){let k=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){de(k,D,_);return}else D.isExternalTexture&&(k.__webglTexture=D.sourceTexture?D.sourceTexture:null);t.bindTexture(s.TEXTURE_2D_ARRAY,k.__webglTexture,s.TEXTURE0+_)}function V(D,_){let k=r.get(D);if(D.isRenderTargetTexture===!1&&D.version>0&&k.__version!==D.version){de(k,D,_);return}t.bindTexture(s.TEXTURE_3D,k.__webglTexture,s.TEXTURE0+_)}function U(D,_){let k=r.get(D);if(D.isCubeDepthTexture!==!0&&D.version>0&&k.__version!==D.version){we(k,D,_);return}t.bindTexture(s.TEXTURE_CUBE_MAP,k.__webglTexture,s.TEXTURE0+_)}let J={[ar]:s.REPEAT,[ui]:s.CLAMP_TO_EDGE,[qa]:s.MIRRORED_REPEAT},j={[an]:s.NEAREST,[ou]:s.NEAREST_MIPMAP_NEAREST,[Js]:s.NEAREST_MIPMAP_LINEAR,[Zt]:s.LINEAR,[go]:s.LINEAR_MIPMAP_NEAREST,[ji]:s.LINEAR_MIPMAP_LINEAR},ae={[uu]:s.NEVER,[gu]:s.ALWAYS,[du]:s.LESS,[el]:s.LEQUAL,[fu]:s.EQUAL,[tl]:s.GEQUAL,[pu]:s.GREATER,[mu]:s.NOTEQUAL};function Q(D,_){if(_.type===Vn&&e.has("OES_texture_float_linear")===!1&&(_.magFilter===Zt||_.magFilter===go||_.magFilter===Js||_.magFilter===ji||_.minFilter===Zt||_.minFilter===go||_.minFilter===Js||_.minFilter===ji)&&pt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),s.texParameteri(D,s.TEXTURE_WRAP_S,J[_.wrapS]),s.texParameteri(D,s.TEXTURE_WRAP_T,J[_.wrapT]),(D===s.TEXTURE_3D||D===s.TEXTURE_2D_ARRAY)&&s.texParameteri(D,s.TEXTURE_WRAP_R,J[_.wrapR]),s.texParameteri(D,s.TEXTURE_MAG_FILTER,j[_.magFilter]),s.texParameteri(D,s.TEXTURE_MIN_FILTER,j[_.minFilter]),_.compareFunction&&(s.texParameteri(D,s.TEXTURE_COMPARE_MODE,s.COMPARE_REF_TO_TEXTURE),s.texParameteri(D,s.TEXTURE_COMPARE_FUNC,ae[_.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(_.magFilter===an||_.minFilter!==Js&&_.minFilter!==ji||_.type===Vn&&e.has("OES_texture_float_linear")===!1)return;if(_.anisotropy>1||r.get(_).__currentAnisotropy){let k=e.get("EXT_texture_filter_anisotropic");s.texParameterf(D,k.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(_.anisotropy,n.getMaxAnisotropy())),r.get(_).__currentAnisotropy=_.anisotropy}}}function me(D,_){let k=!1;D.__webglInit===void 0&&(D.__webglInit=!0,_.addEventListener("dispose",A));let W=_.source,ee=f.get(W);ee===void 0&&(ee={},f.set(W,ee));let ye=K(_);if(ye!==D.__cacheKey){ee[ye]===void 0&&(ee[ye]={texture:s.createTexture(),usedTimes:0},a.memory.textures++,k=!0),ee[ye].usedTimes++;let Me=ee[D.__cacheKey];Me!==void 0&&(ee[D.__cacheKey].usedTimes--,Me.usedTimes===0&&I(_)),D.__cacheKey=ye,D.__webglTexture=ee[ye].texture}return k}function B(D,_,k){return Math.floor(Math.floor(D/k)/_)}function H(D,_,k,W){let ye=D.updateRanges;if(ye.length===0)t.texSubImage2D(s.TEXTURE_2D,0,0,0,_.width,_.height,k,W,_.data);else{ye.sort((Be,Te)=>Be.start-Te.start);let Me=0;for(let Be=1;Be<ye.length;Be++){let Te=ye[Me],xe=ye[Be],Fe=Te.start+Te.count,Pe=B(xe.start,_.width,4),Ke=B(Te.start,_.width,4);xe.start<=Fe+1&&Pe===Ke&&B(xe.start+xe.count-1,_.width,4)===Pe?Te.count=Math.max(Te.count,xe.start+xe.count-Te.start):(++Me,ye[Me]=xe)}ye.length=Me+1;let $=t.getParameter(s.UNPACK_ROW_LENGTH),se=t.getParameter(s.UNPACK_SKIP_PIXELS),ue=t.getParameter(s.UNPACK_SKIP_ROWS);t.pixelStorei(s.UNPACK_ROW_LENGTH,_.width);for(let Be=0,Te=ye.length;Be<Te;Be++){let xe=ye[Be],Fe=Math.floor(xe.start/4),Pe=Math.ceil(xe.count/4),Ke=Fe%_.width,X=Math.floor(Fe/_.width),ve=Pe,ie=1;t.pixelStorei(s.UNPACK_SKIP_PIXELS,Ke),t.pixelStorei(s.UNPACK_SKIP_ROWS,X),t.texSubImage2D(s.TEXTURE_2D,0,Ke,X,ve,ie,k,W,_.data)}D.clearUpdateRanges(),t.pixelStorei(s.UNPACK_ROW_LENGTH,$),t.pixelStorei(s.UNPACK_SKIP_PIXELS,se),t.pixelStorei(s.UNPACK_SKIP_ROWS,ue)}}function de(D,_,k){let W=s.TEXTURE_2D;(_.isDataArrayTexture||_.isCompressedArrayTexture)&&(W=s.TEXTURE_2D_ARRAY),_.isData3DTexture&&(W=s.TEXTURE_3D);let ee=me(D,_),ye=_.source;t.bindTexture(W,D.__webglTexture,s.TEXTURE0+k);let Me=r.get(ye);if(ye.version!==Me.__version||ee===!0){if(t.activeTexture(s.TEXTURE0+k),(typeof ImageBitmap<"u"&&_.image instanceof ImageBitmap)===!1){let ie=wt.getPrimaries(wt.workingColorSpace),Ae=_.colorSpace===Pi?null:wt.getPrimaries(_.colorSpace),Ie=_.colorSpace===Pi||ie===Ae?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ie)}t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment);let se=p(_.image,!1,n.maxTextureSize);se=Se(_,se);let ue=i.convert(_.format,_.colorSpace),Be=i.convert(_.type),Te=y(_.internalFormat,ue,Be,_.normalized,_.colorSpace,_.isVideoTexture);Q(W,_);let xe,Fe=_.mipmaps,Pe=_.isVideoTexture!==!0,Ke=Me.__version===void 0||ee===!0,X=ye.dataReady,ve=M(_,se);if(_.isDepthTexture)Te=b(_.format===$i,_.type),Ke&&(Pe?t.texStorage2D(s.TEXTURE_2D,1,Te,se.width,se.height):t.texImage2D(s.TEXTURE_2D,0,Te,se.width,se.height,0,ue,Be,null));else if(_.isDataTexture)if(Fe.length>0){Pe&&Ke&&t.texStorage2D(s.TEXTURE_2D,ve,Te,Fe[0].width,Fe[0].height);for(let ie=0,Ae=Fe.length;ie<Ae;ie++)xe=Fe[ie],Pe?X&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,xe.width,xe.height,ue,Be,xe.data):t.texImage2D(s.TEXTURE_2D,ie,Te,xe.width,xe.height,0,ue,Be,xe.data);_.generateMipmaps=!1}else Pe?(Ke&&t.texStorage2D(s.TEXTURE_2D,ve,Te,se.width,se.height),X&&H(_,se,ue,Be)):t.texImage2D(s.TEXTURE_2D,0,Te,se.width,se.height,0,ue,Be,se.data);else if(_.isCompressedTexture)if(_.isCompressedArrayTexture){Pe&&Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,Te,Fe[0].width,Fe[0].height,se.depth);for(let ie=0,Ae=Fe.length;ie<Ae;ie++)if(xe=Fe[ie],_.format!==Fn)if(ue!==null)if(Pe){if(X)if(_.layerUpdates.size>0){let Ie=Mc(xe.width,xe.height,_.format,_.type);for(let le of _.layerUpdates){let Ve=xe.data.subarray(le*Ie/xe.data.BYTES_PER_ELEMENT,(le+1)*Ie/xe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,le,xe.width,xe.height,1,ue,Ve)}}else t.compressedTexSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,se.depth,ue,xe.data)}else t.compressedTexImage3D(s.TEXTURE_2D_ARRAY,ie,Te,xe.width,xe.height,se.depth,0,xe.data,0,0);else pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Pe?X&&t.texSubImage3D(s.TEXTURE_2D_ARRAY,ie,0,0,0,xe.width,xe.height,se.depth,ue,Be,xe.data):t.texImage3D(s.TEXTURE_2D_ARRAY,ie,Te,xe.width,xe.height,se.depth,0,ue,Be,xe.data);_.layerUpdates.size>0&&_.clearLayerUpdates()}else{Pe&&Ke&&t.texStorage2D(s.TEXTURE_2D,ve,Te,Fe[0].width,Fe[0].height);for(let ie=0,Ae=Fe.length;ie<Ae;ie++)xe=Fe[ie],_.format!==Fn?ue!==null?Pe?X&&t.compressedTexSubImage2D(s.TEXTURE_2D,ie,0,0,xe.width,xe.height,ue,xe.data):t.compressedTexImage2D(s.TEXTURE_2D,ie,Te,xe.width,xe.height,0,xe.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Pe?X&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,xe.width,xe.height,ue,Be,xe.data):t.texImage2D(s.TEXTURE_2D,ie,Te,xe.width,xe.height,0,ue,Be,xe.data)}else if(_.isDataArrayTexture)if(Pe){if(Ke&&t.texStorage3D(s.TEXTURE_2D_ARRAY,ve,Te,se.width,se.height,se.depth),X)if(_.layerUpdates.size>0){let ie=Mc(se.width,se.height,_.format,_.type);for(let Ae of _.layerUpdates){let Ie=se.data.subarray(Ae*ie/se.data.BYTES_PER_ELEMENT,(Ae+1)*ie/se.data.BYTES_PER_ELEMENT);t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,Ae,se.width,se.height,1,ue,Be,Ie)}_.clearLayerUpdates()}else t.texSubImage3D(s.TEXTURE_2D_ARRAY,0,0,0,0,se.width,se.height,se.depth,ue,Be,se.data)}else t.texImage3D(s.TEXTURE_2D_ARRAY,0,Te,se.width,se.height,se.depth,0,ue,Be,se.data);else if(_.isData3DTexture)Pe?(Ke&&t.texStorage3D(s.TEXTURE_3D,ve,Te,se.width,se.height,se.depth),X&&t.texSubImage3D(s.TEXTURE_3D,0,0,0,0,se.width,se.height,se.depth,ue,Be,se.data)):t.texImage3D(s.TEXTURE_3D,0,Te,se.width,se.height,se.depth,0,ue,Be,se.data);else if(_.isFramebufferTexture){if(Ke)if(Pe)t.texStorage2D(s.TEXTURE_2D,ve,Te,se.width,se.height);else{let ie=se.width,Ae=se.height;for(let Ie=0;Ie<ve;Ie++)t.texImage2D(s.TEXTURE_2D,Ie,Te,ie,Ae,0,ue,Be,null),ie>>=1,Ae>>=1}}else if(_.isHTMLTexture){if("texElementImage2D"in s){let ie=s.canvas;if(ie.hasAttribute("layoutsubtree")||ie.setAttribute("layoutsubtree","true"),se.parentNode!==ie){ie.appendChild(se),d.add(_),ie.onpaint=Ae=>{let Ie=Ae.changedElements;for(let le of d)Ie.includes(le.image)&&(le.needsUpdate=!0)},ie.requestPaint();return}if(s.texElementImage2D.length===3)s.texElementImage2D(s.TEXTURE_2D,s.RGBA8,se);else{let Ie=s.RGBA,le=s.RGBA,Ve=s.UNSIGNED_BYTE;s.texElementImage2D(s.TEXTURE_2D,0,Ie,le,Ve,se)}s.texParameteri(s.TEXTURE_2D,s.TEXTURE_MIN_FILTER,s.LINEAR),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_S,s.CLAMP_TO_EDGE),s.texParameteri(s.TEXTURE_2D,s.TEXTURE_WRAP_T,s.CLAMP_TO_EDGE)}}else if(Fe.length>0){if(Pe&&Ke){let ie=be(Fe[0]);t.texStorage2D(s.TEXTURE_2D,ve,Te,ie.width,ie.height)}for(let ie=0,Ae=Fe.length;ie<Ae;ie++)xe=Fe[ie],Pe?X&&t.texSubImage2D(s.TEXTURE_2D,ie,0,0,ue,Be,xe):t.texImage2D(s.TEXTURE_2D,ie,Te,ue,Be,xe);_.generateMipmaps=!1}else if(Pe){if(Ke){let ie=be(se);t.texStorage2D(s.TEXTURE_2D,ve,Te,ie.width,ie.height)}X&&t.texSubImage2D(s.TEXTURE_2D,0,0,0,ue,Be,se)}else t.texImage2D(s.TEXTURE_2D,0,Te,ue,Be,se);m(_)&&S(W),Me.__version=ye.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function we(D,_,k){if(_.image.length!==6)return;let W=me(D,_),ee=_.source;t.bindTexture(s.TEXTURE_CUBE_MAP,D.__webglTexture,s.TEXTURE0+k);let ye=r.get(ee);if(ee.version!==ye.__version||W===!0){t.activeTexture(s.TEXTURE0+k);let Me=wt.getPrimaries(wt.workingColorSpace),$=_.colorSpace===Pi?null:wt.getPrimaries(_.colorSpace),se=_.colorSpace===Pi||Me===$?s.NONE:s.BROWSER_DEFAULT_WEBGL;t.pixelStorei(s.UNPACK_FLIP_Y_WEBGL,_.flipY),t.pixelStorei(s.UNPACK_PREMULTIPLY_ALPHA_WEBGL,_.premultiplyAlpha),t.pixelStorei(s.UNPACK_ALIGNMENT,_.unpackAlignment),t.pixelStorei(s.UNPACK_COLORSPACE_CONVERSION_WEBGL,se);let ue=_.isCompressedTexture||_.image[0].isCompressedTexture,Be=_.image[0]&&_.image[0].isDataTexture,Te=[];for(let le=0;le<6;le++)!ue&&!Be?Te[le]=p(_.image[le],!0,n.maxCubemapSize):Te[le]=Be?_.image[le].image:_.image[le],Te[le]=Se(_,Te[le]);let xe=Te[0],Fe=i.convert(_.format,_.colorSpace),Pe=i.convert(_.type),Ke=y(_.internalFormat,Fe,Pe,_.normalized,_.colorSpace),X=_.isVideoTexture!==!0,ve=ye.__version===void 0||W===!0,ie=ee.dataReady,Ae=M(_,xe);Q(s.TEXTURE_CUBE_MAP,_);let Ie;if(ue){X&&ve&&t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,Ke,xe.width,xe.height);for(let le=0;le<6;le++){Ie=Te[le].mipmaps;for(let Ve=0;Ve<Ie.length;Ve++){let Xe=Ie[Ve];_.format!==Fn?Fe!==null?X?ie&&t.compressedTexSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,0,0,Xe.width,Xe.height,Fe,Xe.data):t.compressedTexImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,Ke,Xe.width,Xe.height,0,Xe.data):pt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,0,0,Xe.width,Xe.height,Fe,Pe,Xe.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve,Ke,Xe.width,Xe.height,0,Fe,Pe,Xe.data)}}}else{if(Ie=_.mipmaps,X&&ve){Ie.length>0&&Ae++;let le=be(Te[0]);t.texStorage2D(s.TEXTURE_CUBE_MAP,Ae,Ke,le.width,le.height)}for(let le=0;le<6;le++)if(Be){X?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Te[le].width,Te[le].height,Fe,Pe,Te[le].data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,Te[le].width,Te[le].height,0,Fe,Pe,Te[le].data);for(let Ve=0;Ve<Ie.length;Ve++){let gt=Ie[Ve].image[le].image;X?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,0,0,gt.width,gt.height,Fe,Pe,gt.data):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,Ke,gt.width,gt.height,0,Fe,Pe,gt.data)}}else{X?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,0,0,Fe,Pe,Te[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,0,Ke,Fe,Pe,Te[le]);for(let Ve=0;Ve<Ie.length;Ve++){let Xe=Ie[Ve];X?ie&&t.texSubImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,0,0,Fe,Pe,Xe.image[le]):t.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+le,Ve+1,Ke,Fe,Pe,Xe.image[le])}}}m(_)&&S(s.TEXTURE_CUBE_MAP),ye.__version=ee.version,_.onUpdate&&_.onUpdate(_)}D.__version=_.version}function ce(D,_,k,W,ee,ye){let Me=i.convert(k.format,k.colorSpace),$=i.convert(k.type),se=y(k.internalFormat,Me,$,k.normalized,k.colorSpace),ue=r.get(_),Be=r.get(k);if(Be.__renderTarget=_,!ue.__hasExternalTextures){let Te=Math.max(1,_.width>>ye),xe=Math.max(1,_.height>>ye);ee===s.TEXTURE_3D||ee===s.TEXTURE_2D_ARRAY?t.texImage3D(ee,ye,se,Te,xe,_.depth,0,Me,$,null):t.texImage2D(ee,ye,se,Te,xe,0,Me,$,null)}t.bindFramebuffer(s.FRAMEBUFFER,D),$e(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,W,ee,Be.__webglTexture,0,pe(_)):(ee===s.TEXTURE_2D||ee>=s.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=s.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&s.framebufferTexture2D(s.FRAMEBUFFER,W,ee,Be.__webglTexture,ye),t.bindFramebuffer(s.FRAMEBUFFER,null)}function fe(D,_,k){if(s.bindRenderbuffer(s.RENDERBUFFER,D),_.depthBuffer){let W=_.depthTexture,ee=W&&W.isDepthTexture?W.type:null,ye=b(_.stencilBuffer,ee),Me=_.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;$e(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe(_),ye,_.width,_.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe(_),ye,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,ye,_.width,_.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,Me,s.RENDERBUFFER,D)}else{let W=_.textures;for(let ee=0;ee<W.length;ee++){let ye=W[ee],Me=i.convert(ye.format,ye.colorSpace),$=i.convert(ye.type),se=y(ye.internalFormat,Me,$,ye.normalized,ye.colorSpace);$e(_)?o.renderbufferStorageMultisampleEXT(s.RENDERBUFFER,pe(_),se,_.width,_.height):k?s.renderbufferStorageMultisample(s.RENDERBUFFER,pe(_),se,_.width,_.height):s.renderbufferStorage(s.RENDERBUFFER,se,_.width,_.height)}}s.bindRenderbuffer(s.RENDERBUFFER,null)}function st(D,_,k){let W=_.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(s.FRAMEBUFFER,D),!(_.depthTexture&&_.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ee=r.get(_.depthTexture);if(ee.__renderTarget=_,(!ee.__webglTexture||_.depthTexture.image.width!==_.width||_.depthTexture.image.height!==_.height)&&(_.depthTexture.image.width=_.width,_.depthTexture.image.height=_.height,_.depthTexture.needsUpdate=!0),W){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,_.depthTexture.addEventListener("dispose",A)),ee.__webglTexture===void 0){ee.__webglTexture=s.createTexture(),t.bindTexture(s.TEXTURE_CUBE_MAP,ee.__webglTexture),Q(s.TEXTURE_CUBE_MAP,_.depthTexture);let ue=i.convert(_.depthTexture.format),Be=i.convert(_.depthTexture.type),Te;_.depthTexture.format===di?Te=s.DEPTH_COMPONENT24:_.depthTexture.format===$i&&(Te=s.DEPTH24_STENCIL8);for(let xe=0;xe<6;xe++)s.texImage2D(s.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,Te,_.width,_.height,0,ue,Be,null)}}else re(_.depthTexture,0);let ye=ee.__webglTexture,Me=pe(_),$=W?s.TEXTURE_CUBE_MAP_POSITIVE_X+k:s.TEXTURE_2D,se=_.depthTexture.format===$i?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;if(_.depthTexture.format===di)$e(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,$,ye,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,se,$,ye,0);else if(_.depthTexture.format===$i)$e(_)?o.framebufferTexture2DMultisampleEXT(s.FRAMEBUFFER,se,$,ye,0,Me):s.framebufferTexture2D(s.FRAMEBUFFER,se,$,ye,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(D){let _=r.get(D),k=D.isWebGLCubeRenderTarget===!0;if(_.__boundDepthTexture!==D.depthTexture){let W=D.depthTexture;if(_.__depthDisposeCallback&&_.__depthDisposeCallback(),W){let ee=()=>{delete _.__boundDepthTexture,delete _.__depthDisposeCallback,W.removeEventListener("dispose",ee)};W.addEventListener("dispose",ee),_.__depthDisposeCallback=ee}_.__boundDepthTexture=W}if(D.depthTexture&&!_.__autoAllocateDepthBuffer)if(k)for(let W=0;W<6;W++)st(_.__webglFramebuffer[W],D,W);else{let W=D.texture.mipmaps;W&&W.length>0?st(_.__webglFramebuffer[0],D,0):st(_.__webglFramebuffer,D,0)}else if(k){_.__webglDepthbuffer=[];for(let W=0;W<6;W++)if(t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[W]),_.__webglDepthbuffer[W]===void 0)_.__webglDepthbuffer[W]=s.createRenderbuffer(),fe(_.__webglDepthbuffer[W],D,!1);else{let ee=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=_.__webglDepthbuffer[W];s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,ye)}}else{let W=D.texture.mipmaps;if(W&&W.length>0?t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer[0]):t.bindFramebuffer(s.FRAMEBUFFER,_.__webglFramebuffer),_.__webglDepthbuffer===void 0)_.__webglDepthbuffer=s.createRenderbuffer(),fe(_.__webglDepthbuffer,D,!1);else{let ee=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,ye=_.__webglDepthbuffer;s.bindRenderbuffer(s.RENDERBUFFER,ye),s.framebufferRenderbuffer(s.FRAMEBUFFER,ee,s.RENDERBUFFER,ye)}}t.bindFramebuffer(s.FRAMEBUFFER,null)}function Ee(D,_,k){let W=r.get(D);_!==void 0&&ce(W.__webglFramebuffer,D,D.texture,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,0),k!==void 0&&Ue(D)}function Ne(D){let _=D.texture,k=r.get(D),W=r.get(_);D.addEventListener("dispose",v);let ee=D.textures,ye=D.isWebGLCubeRenderTarget===!0,Me=ee.length>1;if(Me||(W.__webglTexture===void 0&&(W.__webglTexture=s.createTexture()),W.__version=_.version,a.memory.textures++),ye){k.__webglFramebuffer=[];for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer[$]=[];for(let se=0;se<_.mipmaps.length;se++)k.__webglFramebuffer[$][se]=s.createFramebuffer()}else k.__webglFramebuffer[$]=s.createFramebuffer()}else{if(_.mipmaps&&_.mipmaps.length>0){k.__webglFramebuffer=[];for(let $=0;$<_.mipmaps.length;$++)k.__webglFramebuffer[$]=s.createFramebuffer()}else k.__webglFramebuffer=s.createFramebuffer();if(Me)for(let $=0,se=ee.length;$<se;$++){let ue=r.get(ee[$]);ue.__webglTexture===void 0&&(ue.__webglTexture=s.createTexture(),a.memory.textures++)}if(D.samples>0&&$e(D)===!1){k.__webglMultisampledFramebuffer=s.createFramebuffer(),k.__webglColorRenderbuffer=[],t.bindFramebuffer(s.FRAMEBUFFER,k.__webglMultisampledFramebuffer);for(let $=0;$<ee.length;$++){let se=ee[$];k.__webglColorRenderbuffer[$]=s.createRenderbuffer(),s.bindRenderbuffer(s.RENDERBUFFER,k.__webglColorRenderbuffer[$]);let ue=i.convert(se.format,se.colorSpace),Be=i.convert(se.type),Te=y(se.internalFormat,ue,Be,se.normalized,se.colorSpace,D.isXRRenderTarget===!0),xe=pe(D);s.renderbufferStorageMultisample(s.RENDERBUFFER,xe,Te,D.width,D.height),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+$,s.RENDERBUFFER,k.__webglColorRenderbuffer[$])}s.bindRenderbuffer(s.RENDERBUFFER,null),D.depthBuffer&&(k.__webglDepthRenderbuffer=s.createRenderbuffer(),fe(k.__webglDepthRenderbuffer,D,!0)),t.bindFramebuffer(s.FRAMEBUFFER,null)}}if(ye){t.bindTexture(s.TEXTURE_CUBE_MAP,W.__webglTexture),Q(s.TEXTURE_CUBE_MAP,_);for(let $=0;$<6;$++)if(_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)ce(k.__webglFramebuffer[$][se],D,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,se);else ce(k.__webglFramebuffer[$],D,_,s.COLOR_ATTACHMENT0,s.TEXTURE_CUBE_MAP_POSITIVE_X+$,0);m(_)&&S(s.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Me){for(let $=0,se=ee.length;$<se;$++){let ue=ee[$],Be=r.get(ue),Te=s.TEXTURE_2D;(D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&(Te=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture(Te,Be.__webglTexture),Q(Te,ue),ce(k.__webglFramebuffer,D,ue,s.COLOR_ATTACHMENT0+$,Te,0),m(ue)&&S(Te)}t.unbindTexture()}else{let $=s.TEXTURE_2D;if((D.isWebGL3DRenderTarget||D.isWebGLArrayRenderTarget)&&($=D.isWebGL3DRenderTarget?s.TEXTURE_3D:s.TEXTURE_2D_ARRAY),t.bindTexture($,W.__webglTexture),Q($,_),_.mipmaps&&_.mipmaps.length>0)for(let se=0;se<_.mipmaps.length;se++)ce(k.__webglFramebuffer[se],D,_,s.COLOR_ATTACHMENT0,$,se);else ce(k.__webglFramebuffer,D,_,s.COLOR_ATTACHMENT0,$,0);m(_)&&S($),t.unbindTexture()}D.depthBuffer&&Ue(D)}function Ce(D){let _=D.textures;for(let k=0,W=_.length;k<W;k++){let ee=_[k];if(m(ee)){let ye=E(D),Me=r.get(ee).__webglTexture;t.bindTexture(ye,Me),S(ye),t.unbindTexture()}}}let _e=[],Ge=[];function qe(D){if(D.samples>0){if($e(D)===!1){let _=D.textures,k=D.width,W=D.height,ee=s.COLOR_BUFFER_BIT,ye=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT,Me=r.get(D),$=_.length>1;if($)for(let ue=0;ue<_.length;ue++)t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,null),t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,null,0);t.bindFramebuffer(s.READ_FRAMEBUFFER,Me.__webglMultisampledFramebuffer);let se=D.texture.mipmaps;se&&se.length>0?t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer[0]):t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglFramebuffer);for(let ue=0;ue<_.length;ue++){if(D.resolveDepthBuffer&&(D.depthBuffer&&(ee|=s.DEPTH_BUFFER_BIT),D.stencilBuffer&&D.resolveStencilBuffer&&(ee|=s.STENCIL_BUFFER_BIT)),$){s.framebufferRenderbuffer(s.READ_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.RENDERBUFFER,Me.__webglColorRenderbuffer[ue]);let Be=r.get(_[ue]).__webglTexture;s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0,s.TEXTURE_2D,Be,0)}s.blitFramebuffer(0,0,k,W,0,0,k,W,ee,s.NEAREST),l===!0&&(_e.length=0,Ge.length=0,_e.push(s.COLOR_ATTACHMENT0+ue),D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&(_e.push(ye),Ge.push(ye),s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,Ge)),s.invalidateFramebuffer(s.READ_FRAMEBUFFER,_e))}if(t.bindFramebuffer(s.READ_FRAMEBUFFER,null),t.bindFramebuffer(s.DRAW_FRAMEBUFFER,null),$)for(let ue=0;ue<_.length;ue++){t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglMultisampledFramebuffer),s.framebufferRenderbuffer(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.RENDERBUFFER,Me.__webglColorRenderbuffer[ue]);let Be=r.get(_[ue]).__webglTexture;t.bindFramebuffer(s.FRAMEBUFFER,Me.__webglFramebuffer),s.framebufferTexture2D(s.DRAW_FRAMEBUFFER,s.COLOR_ATTACHMENT0+ue,s.TEXTURE_2D,Be,0)}t.bindFramebuffer(s.DRAW_FRAMEBUFFER,Me.__webglMultisampledFramebuffer)}else if(D.depthBuffer&&D.storeMultisampledDepthBuffer===!1&&l){let _=D.stencilBuffer?s.DEPTH_STENCIL_ATTACHMENT:s.DEPTH_ATTACHMENT;s.invalidateFramebuffer(s.DRAW_FRAMEBUFFER,[_])}}}function pe(D){return Math.min(n.maxSamples,D.samples)}function $e(D){let _=r.get(D);return D.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&_.__useRenderToTexture!==!1}function L(D){let _=a.render.frame;h.get(D)!==_&&(h.set(D,_),D.update())}function Se(D,_){let k=D.colorSpace,W=D.format,ee=D.type;return D.isCompressedTexture===!0||D.isVideoTexture===!0||k!==Ts&&k!==Pi&&(wt.getTransfer(k)===It?(W!==Fn||ee!==wn)&&pt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ft("WebGLTextures: Unsupported texture color space:",k)),_}function be(D){return typeof HTMLImageElement<"u"&&D instanceof HTMLImageElement?(c.width=D.naturalWidth||D.width,c.height=D.naturalHeight||D.height):typeof VideoFrame<"u"&&D instanceof VideoFrame?(c.width=D.displayWidth,c.height=D.displayHeight):(c.width=D.width,c.height=D.height),c}this.allocateTextureUnit=z,this.resetTextureUnits=N,this.getTextureUnits=R,this.setTextureUnits=O,this.setTexture2D=re,this.setTexture2DArray=G,this.setTexture3D=V,this.setTextureCube=U,this.rebindTextures=Ee,this.setupRenderTarget=Ne,this.updateRenderTargetMipmap=Ce,this.updateMultisampleRenderTarget=qe,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=ce,this.useMultisampledRTT=$e,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function ev(s,e){function t(r,n=Pi){let i,a=wt.getTransfer(n);if(r===wn)return s.UNSIGNED_BYTE;if(r===_o)return s.UNSIGNED_SHORT_4_4_4_4;if(r===xo)return s.UNSIGNED_SHORT_5_5_5_1;if(r===dc)return s.UNSIGNED_INT_5_9_9_9_REV;if(r===fc)return s.UNSIGNED_INT_10F_11F_11F_REV;if(r===hc)return s.BYTE;if(r===uc)return s.SHORT;if(r===rs)return s.UNSIGNED_SHORT;if(r===vo)return s.INT;if(r===ei)return s.UNSIGNED_INT;if(r===Vn)return s.FLOAT;if(r===dn)return s.HALF_FLOAT;if(r===pc)return s.ALPHA;if(r===mc)return s.RGB;if(r===Fn)return s.RGBA;if(r===di)return s.DEPTH_COMPONENT;if(r===$i)return s.DEPTH_STENCIL;if(r===gc)return s.RED;if(r===yo)return s.RED_INTEGER;if(r===Qi)return s.RG;if(r===So)return s.RG_INTEGER;if(r===bo)return s.RGBA_INTEGER;if(r===Ks||r===js||r===$s||r===Qs)if(a===It)if(i=e.get("WEBGL_compressed_texture_s3tc_srgb"),i!==null){if(r===Ks)return i.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===js)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===$s)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Qs)return i.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(i=e.get("WEBGL_compressed_texture_s3tc"),i!==null){if(r===Ks)return i.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===js)return i.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===$s)return i.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Qs)return i.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===Mo||r===wo||r===To||r===Ao)if(i=e.get("WEBGL_compressed_texture_pvrtc"),i!==null){if(r===Mo)return i.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===wo)return i.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===To)return i.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===Ao)return i.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===Eo||r===Co||r===Ro||r===Po||r===Io||r===ea||r===Do)if(i=e.get("WEBGL_compressed_texture_etc"),i!==null){if(r===Eo||r===Co)return a===It?i.COMPRESSED_SRGB8_ETC2:i.COMPRESSED_RGB8_ETC2;if(r===Ro)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:i.COMPRESSED_RGBA8_ETC2_EAC;if(r===Po)return i.COMPRESSED_R11_EAC;if(r===Io)return i.COMPRESSED_SIGNED_R11_EAC;if(r===ea)return i.COMPRESSED_RG11_EAC;if(r===Do)return i.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===Uo||r===Lo||r===Fo||r===No||r===Oo||r===Bo||r===ko||r===zo||r===Go||r===Vo||r===Ho||r===Wo||r===Xo||r===Yo)if(i=e.get("WEBGL_compressed_texture_astc"),i!==null){if(r===Uo)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:i.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===Lo)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:i.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===Fo)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:i.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===No)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:i.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Oo)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:i.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Bo)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:i.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===ko)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:i.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===zo)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:i.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Go)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:i.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Vo)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:i.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===Ho)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:i.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Wo)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:i.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Xo)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:i.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Yo)return a===It?i.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:i.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===qo||r===Zo||r===Jo)if(i=e.get("EXT_texture_compression_bptc"),i!==null){if(r===qo)return a===It?i.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:i.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Zo)return i.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Jo)return i.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Ko||r===jo||r===ta||r===$o)if(i=e.get("EXT_texture_compression_rgtc"),i!==null){if(r===Ko)return i.COMPRESSED_RED_RGTC1_EXT;if(r===jo)return i.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===ta)return i.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===$o)return i.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===ss?s.UNSIGNED_INT_24_8:s[r]!==void 0?s[r]:null}return{convert:t}}var tv=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nv=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`,Vc=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){let r=new Us(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){let t=e.cameras[0].viewport,r=new zt({vertexShader:tv,fragmentShader:nv,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new _t(new Wt(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},Hc=class extends fi{constructor(e,t){super();let r=this,n=null,i=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,x=typeof XRWebGLBinding<"u",p=new Vc,m={},S=t.getContextAttributes(),E=null,y=null,b=[],M=[],A=new lt,v=null,T=null,I=new $t;I.viewport=new Ot;let P=new $t;P.viewport=new Ot;let C=[I,P],N=new uo,R=null,O=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(B){let H=b[B];return H===void 0&&(H=new Hr,b[B]=H),H.getTargetRaySpace()},this.getControllerGrip=function(B){let H=b[B];return H===void 0&&(H=new Hr,b[B]=H),H.getGripSpace()},this.getHand=function(B){let H=b[B];return H===void 0&&(H=new Hr,b[B]=H),H.getHandSpace()};function z(B){let H=M.indexOf(B.inputSource);if(H===-1)return;let de=b[H];de!==void 0&&(de.update(B.inputSource,B.frame,c||a),de.dispatchEvent({type:B.type,data:B.inputSource}))}function K(){n.removeEventListener("select",z),n.removeEventListener("selectstart",z),n.removeEventListener("selectend",z),n.removeEventListener("squeeze",z),n.removeEventListener("squeezestart",z),n.removeEventListener("squeezeend",z),n.removeEventListener("end",K),n.removeEventListener("inputsourceschange",re);for(let B=0;B<b.length;B++){let H=M[B];H!==null&&(M[B]=null,b[B].disconnect(H))}R=null,O=null,p.reset();for(let B in m)delete m[B];if(e.setRenderTarget(E),f=null,u=null,d=null,n=null,y=null,me.stop(),r.isPresenting=!1,e.setPixelRatio(v),e.setSize(A.width,A.height,!1),T!==null){let B=T.camera;B.fov=T.fov,B.zoom=T.zoom,B.updateProjectionMatrix(),T=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(B){i=B,r.isPresenting===!0&&pt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(B){o=B,r.isPresenting===!0&&pt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(B){c=B},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&x&&(d=new XRWebGLBinding(n,t)),d},this.getFrame=function(){return g},this.getSession=function(){return n},this.setSession=async function(B){if(n=B,n!==null){if(E=e.getRenderTarget(),n.addEventListener("select",z),n.addEventListener("selectstart",z),n.addEventListener("selectend",z),n.addEventListener("squeeze",z),n.addEventListener("squeezestart",z),n.addEventListener("squeezeend",z),n.addEventListener("end",K),n.addEventListener("inputsourceschange",re),S.xrCompatible!==!0&&await t.makeXRCompatible(),v=e.getPixelRatio(),e.getSize(A),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let de=null,we=null,ce=null;S.depth&&(ce=S.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,de=S.stencil?$i:di,we=S.stencil?ss:ei);let fe={colorFormat:t.RGBA8,depthFormat:ce,scaleFactor:i};d=this.getBinding(),u=d.createProjectionLayer(fe),n.updateRenderState({layers:[u]}),e.setPixelRatio(1),e.setSize(u.textureWidth,u.textureHeight,!1),y=new Jt(u.textureWidth,u.textureHeight,{format:Fn,type:wn,depthTexture:new Hi(u.textureWidth,u.textureHeight,we,void 0,void 0,void 0,void 0,void 0,void 0,de),stencilBuffer:S.stencil,colorSpace:e.outputColorSpace,samples:S.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let de={antialias:S.antialias,alpha:!0,depth:S.depth,stencil:S.stencil,framebufferScaleFactor:i};f=new XRWebGLLayer(n,t,de),n.updateRenderState({baseLayer:f}),e.setPixelRatio(1),e.setSize(f.framebufferWidth,f.framebufferHeight,!1),y=new Jt(f.framebufferWidth,f.framebufferHeight,{format:Fn,type:wn,colorSpace:e.outputColorSpace,stencilBuffer:S.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}y.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await n.requestReferenceSpace(o),me.setContext(n),me.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(n!==null)return n.environmentBlendMode},this.getDepthTexture=function(){return p.getDepthTexture()};function re(B){for(let H=0;H<B.removed.length;H++){let de=B.removed[H],we=M.indexOf(de);we>=0&&(M[we]=null,b[we].disconnect(de))}for(let H=0;H<B.added.length;H++){let de=B.added[H],we=M.indexOf(de);if(we===-1){for(let fe=0;fe<b.length;fe++)if(fe>=M.length){M.push(de),we=fe;break}else if(M[fe]===null){M[fe]=de,we=fe;break}if(we===-1)break}let ce=b[we];ce&&ce.connect(de)}}let G=new Z,V=new Z;function U(B,H,de){G.setFromMatrixPosition(H.matrixWorld),V.setFromMatrixPosition(de.matrixWorld);let we=G.distanceTo(V),ce=H.projectionMatrix.elements,fe=de.projectionMatrix.elements,st=ce[14]/(ce[10]-1),Ue=ce[14]/(ce[10]+1),Ee=(ce[9]+1)/ce[5],Ne=(ce[9]-1)/ce[5],Ce=(ce[8]-1)/ce[0],_e=(fe[8]+1)/fe[0],Ge=st*Ce,qe=st*_e,pe=we/(-Ce+_e),$e=pe*-Ce;if(H.matrixWorld.decompose(B.position,B.quaternion,B.scale),B.translateX($e),B.translateZ(pe),B.matrixWorld.compose(B.position,B.quaternion,B.scale),B.matrixWorldInverse.copy(B.matrixWorld).invert(),ce[10]===-1)B.projectionMatrix.copy(H.projectionMatrix),B.projectionMatrixInverse.copy(H.projectionMatrixInverse);else{let L=st+pe,Se=Ue+pe,be=Ge-$e,D=qe+(we-$e),_=Ee*Ue/Se*L,k=Ne*Ue/Se*L;B.projectionMatrix.makePerspective(be,D,_,k,L,Se),B.projectionMatrixInverse.copy(B.projectionMatrix).invert()}}function J(B,H){H===null?B.matrixWorld.copy(B.matrix):B.matrixWorld.multiplyMatrices(H.matrixWorld,B.matrix),B.matrixWorldInverse.copy(B.matrixWorld).invert()}this.updateCamera=function(B){if(n===null)return;let H=B.near,de=B.far;p.texture!==null&&(p.depthNear>0&&(H=p.depthNear),p.depthFar>0&&(de=p.depthFar)),N.near=P.near=I.near=H,N.far=P.far=I.far=de,(R!==N.near||O!==N.far)&&(n.updateRenderState({depthNear:N.near,depthFar:N.far}),R=N.near,O=N.far),N.layers.mask=B.layers.mask|6,I.layers.mask=N.layers.mask&-5,P.layers.mask=N.layers.mask&-3;let we=B.parent,ce=N.cameras;J(N,we);for(let fe=0;fe<ce.length;fe++)J(ce[fe],we);ce.length===2?U(N,I,P):N.projectionMatrix.copy(I.projectionMatrix),T===null&&B.isPerspectiveCamera&&(T={camera:B,fov:B.fov,zoom:B.zoom}),j(B,N,we)};function j(B,H,de){de===null?B.matrix.copy(H.matrixWorld):(B.matrix.copy(de.matrixWorld),B.matrix.invert(),B.matrix.multiply(H.matrixWorld)),B.matrix.decompose(B.position,B.quaternion,B.scale),B.updateMatrixWorld(!0),B.projectionMatrix.copy(H.projectionMatrix),B.projectionMatrixInverse.copy(H.projectionMatrixInverse),B.isPerspectiveCamera&&(B.fov=Ja*2*Math.atan(1/B.projectionMatrix.elements[5]),B.zoom=1)}this.getCamera=function(){return N},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(B){l=B,u!==null&&(u.fixedFoveation=B),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=B)},this.hasDepthSensing=function(){return p.texture!==null},this.getDepthSensingMesh=function(){return p.getMesh(N)},this.getCameraTexture=function(B){return m[B]};let ae=null;function Q(B,H){if(h=H.getViewerPose(c||a),g=H,h!==null){let de=h.views;f!==null&&(e.setRenderTargetFramebuffer(y,f.framebuffer),e.setRenderTarget(y));let we=!1;de.length!==N.cameras.length&&(N.cameras.length=0,we=!0);for(let Ue=0;Ue<de.length;Ue++){let Ee=de[Ue],Ne=null;if(f!==null)Ne=f.getViewport(Ee);else{let _e=d.getViewSubImage(u,Ee);Ne=_e.viewport,Ue===0&&(e.setRenderTargetTextures(y,_e.colorTexture,_e.depthStencilTexture),e.setRenderTarget(y))}let Ce=C[Ue];Ce===void 0&&(Ce=new $t,Ce.layers.enable(Ue),Ce.viewport=new Ot,C[Ue]=Ce),Ce.matrix.fromArray(Ee.transform.matrix),Ce.matrix.decompose(Ce.position,Ce.quaternion,Ce.scale),Ce.projectionMatrix.fromArray(Ee.projectionMatrix),Ce.projectionMatrixInverse.copy(Ce.projectionMatrix).invert(),Ce.viewport.set(Ne.x,Ne.y,Ne.width,Ne.height),Ue===0&&(N.matrix.copy(Ce.matrix),N.matrix.decompose(N.position,N.quaternion,N.scale)),we===!0&&N.cameras.push(Ce)}let ce=n.enabledFeatures;if(ce&&ce.includes("depth-sensing")&&n.depthUsage=="gpu-optimized"&&x){d=r.getBinding();let Ue=d.getDepthInformation(de[0]);Ue&&Ue.isValid&&Ue.texture&&p.init(Ue,n.renderState)}if(ce&&ce.includes("camera-access")&&x){e.state.unbindTexture(),d=r.getBinding();for(let Ue=0;Ue<de.length;Ue++){let Ee=de[Ue].camera;if(Ee){let Ne=m[Ee];Ne||(Ne=new Us,m[Ee]=Ne);let Ce=d.getCameraImage(Ee);Ne.sourceTexture=Ce}}}}for(let de=0;de<b.length;de++){let we=M[de],ce=b[de];we!==null&&ce!==void 0&&ce.update(we,H,c||a)}ae&&ae(B,H),H.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:H}),g=null}let me=new Yu;me.setAnimationLoop(Q),this.setAnimationLoop=function(B){ae=B},this.dispose=function(){}}},iv=new Ut,$u=new mt;$u.set(-1,0,0,0,1,0,0,0,1);function rv(s,e){function t(p,m){p.matrixAutoUpdate===!0&&p.updateMatrix(),m.value.copy(p.matrix)}function r(p,m){m.color.getRGB(p.fogColor.value,yc(s)),m.isFog?(p.fogNear.value=m.near,p.fogFar.value=m.far):m.isFogExp2&&(p.fogDensity.value=m.density)}function n(p,m,S,E,y){m.isNodeMaterial?m.uniformsNeedUpdate=!1:m.isMeshBasicMaterial?i(p,m):m.isMeshLambertMaterial?(i(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshToonMaterial?(i(p,m),d(p,m)):m.isMeshPhongMaterial?(i(p,m),h(p,m),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)):m.isMeshStandardMaterial?(i(p,m),u(p,m),m.isMeshPhysicalMaterial&&f(p,m,y)):m.isMeshMatcapMaterial?(i(p,m),g(p,m)):m.isMeshDepthMaterial?i(p,m):m.isMeshDistanceMaterial?(i(p,m),x(p,m)):m.isMeshNormalMaterial?i(p,m):m.isLineBasicMaterial?(a(p,m),m.isLineDashedMaterial&&o(p,m)):m.isPointsMaterial?l(p,m,S,E):m.isSpriteMaterial?c(p,m):m.isShadowMaterial?(p.color.value.copy(m.color),p.opacity.value=m.opacity):m.isShaderMaterial&&(m.uniformsNeedUpdate=!1)}function i(p,m){p.opacity.value=m.opacity,m.color&&p.diffuse.value.copy(m.color),m.emissive&&p.emissive.value.copy(m.emissive).multiplyScalar(m.emissiveIntensity),m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.bumpMap&&(p.bumpMap.value=m.bumpMap,t(m.bumpMap,p.bumpMapTransform),p.bumpScale.value=m.bumpScale,m.side===Qt&&(p.bumpScale.value*=-1)),m.normalMap&&(p.normalMap.value=m.normalMap,t(m.normalMap,p.normalMapTransform),p.normalScale.value.copy(m.normalScale),m.side===Qt&&p.normalScale.value.negate()),m.displacementMap&&(p.displacementMap.value=m.displacementMap,t(m.displacementMap,p.displacementMapTransform),p.displacementScale.value=m.displacementScale,p.displacementBias.value=m.displacementBias),m.emissiveMap&&(p.emissiveMap.value=m.emissiveMap,t(m.emissiveMap,p.emissiveMapTransform)),m.specularMap&&(p.specularMap.value=m.specularMap,t(m.specularMap,p.specularMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest);let S=e.get(m),E=S.envMap,y=S.envMapRotation;E&&(p.envMap.value=E,p.envMapRotation.value.setFromMatrix4(iv.makeRotationFromEuler(y)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&p.envMapRotation.value.premultiply($u),p.reflectivity.value=m.reflectivity,p.ior.value=m.ior,p.refractionRatio.value=m.refractionRatio),m.lightMap&&(p.lightMap.value=m.lightMap,p.lightMapIntensity.value=m.lightMapIntensity,t(m.lightMap,p.lightMapTransform)),m.aoMap&&(p.aoMap.value=m.aoMap,p.aoMapIntensity.value=m.aoMapIntensity,t(m.aoMap,p.aoMapTransform))}function a(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform))}function o(p,m){p.dashSize.value=m.dashSize,p.totalSize.value=m.dashSize+m.gapSize,p.scale.value=m.scale}function l(p,m,S,E){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.size.value=m.size*S,p.scale.value=E*.5,m.map&&(p.map.value=m.map,t(m.map,p.uvTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function c(p,m){p.diffuse.value.copy(m.color),p.opacity.value=m.opacity,p.rotation.value=m.rotation,m.map&&(p.map.value=m.map,t(m.map,p.mapTransform)),m.alphaMap&&(p.alphaMap.value=m.alphaMap,t(m.alphaMap,p.alphaMapTransform)),m.alphaTest>0&&(p.alphaTest.value=m.alphaTest)}function h(p,m){p.specular.value.copy(m.specular),p.shininess.value=Math.max(m.shininess,1e-4)}function d(p,m){m.gradientMap&&(p.gradientMap.value=m.gradientMap)}function u(p,m){p.metalness.value=m.metalness,m.metalnessMap&&(p.metalnessMap.value=m.metalnessMap,t(m.metalnessMap,p.metalnessMapTransform)),p.roughness.value=m.roughness,m.roughnessMap&&(p.roughnessMap.value=m.roughnessMap,t(m.roughnessMap,p.roughnessMapTransform)),m.envMap&&(p.envMapIntensity.value=m.envMapIntensity)}function f(p,m,S){p.ior.value=m.ior,m.sheen>0&&(p.sheenColor.value.copy(m.sheenColor).multiplyScalar(m.sheen),p.sheenRoughness.value=m.sheenRoughness,m.sheenColorMap&&(p.sheenColorMap.value=m.sheenColorMap,t(m.sheenColorMap,p.sheenColorMapTransform)),m.sheenRoughnessMap&&(p.sheenRoughnessMap.value=m.sheenRoughnessMap,t(m.sheenRoughnessMap,p.sheenRoughnessMapTransform))),m.clearcoat>0&&(p.clearcoat.value=m.clearcoat,p.clearcoatRoughness.value=m.clearcoatRoughness,m.clearcoatMap&&(p.clearcoatMap.value=m.clearcoatMap,t(m.clearcoatMap,p.clearcoatMapTransform)),m.clearcoatRoughnessMap&&(p.clearcoatRoughnessMap.value=m.clearcoatRoughnessMap,t(m.clearcoatRoughnessMap,p.clearcoatRoughnessMapTransform)),m.clearcoatNormalMap&&(p.clearcoatNormalMap.value=m.clearcoatNormalMap,t(m.clearcoatNormalMap,p.clearcoatNormalMapTransform),p.clearcoatNormalScale.value.copy(m.clearcoatNormalScale),m.side===Qt&&p.clearcoatNormalScale.value.negate())),m.dispersion>0&&(p.dispersion.value=m.dispersion),m.retroreflectivity>0&&(p.retroreflectivity.value=m.retroreflectivity),m.iridescence>0&&(p.iridescence.value=m.iridescence,p.iridescenceIOR.value=m.iridescenceIOR,p.iridescenceThicknessMinimum.value=m.iridescenceThicknessRange[0],p.iridescenceThicknessMaximum.value=m.iridescenceThicknessRange[1],m.iridescenceMap&&(p.iridescenceMap.value=m.iridescenceMap,t(m.iridescenceMap,p.iridescenceMapTransform)),m.iridescenceThicknessMap&&(p.iridescenceThicknessMap.value=m.iridescenceThicknessMap,t(m.iridescenceThicknessMap,p.iridescenceThicknessMapTransform))),m.transmission>0&&(p.transmission.value=m.transmission,p.transmissionSamplerMap.value=S.texture,p.transmissionSamplerSize.value.set(S.width,S.height),m.transmissionMap&&(p.transmissionMap.value=m.transmissionMap,t(m.transmissionMap,p.transmissionMapTransform)),p.thickness.value=m.thickness,m.thicknessMap&&(p.thicknessMap.value=m.thicknessMap,t(m.thicknessMap,p.thicknessMapTransform)),p.attenuationDistance.value=m.attenuationDistance,p.attenuationColor.value.copy(m.attenuationColor)),m.anisotropy>0&&(p.anisotropyVector.value.set(m.anisotropy*Math.cos(m.anisotropyRotation),m.anisotropy*Math.sin(m.anisotropyRotation)),m.anisotropyMap&&(p.anisotropyMap.value=m.anisotropyMap,t(m.anisotropyMap,p.anisotropyMapTransform))),p.specularIntensity.value=m.specularIntensity,p.specularColor.value.copy(m.specularColor),m.specularColorMap&&(p.specularColorMap.value=m.specularColorMap,t(m.specularColorMap,p.specularColorMapTransform)),m.specularIntensityMap&&(p.specularIntensityMap.value=m.specularIntensityMap,t(m.specularIntensityMap,p.specularIntensityMapTransform))}function g(p,m){m.matcap&&(p.matcap.value=m.matcap)}function x(p,m){let S=e.get(m).light;p.referencePosition.value.setFromMatrixPosition(S.matrixWorld),p.nearDistance.value=S.shadow.camera.near,p.farDistance.value=S.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:n}}function sv(s,e,t,r){let n={},i={},a=[],o=s.getParameter(s.MAX_UNIFORM_BUFFER_BINDINGS);function l(y,b){let M=b.program;r.uniformBlockBinding(y,M)}function c(y,b){let M=n[y.id];M===void 0&&(p(y),M=h(y),n[y.id]=M,y.addEventListener("dispose",S));let A=b.program;r.updateUBOMapping(y,A);let v=e.render.frame;i[y.id]!==v&&(u(y),i[y.id]=v)}function h(y){let b=d();y.__bindingPointIndex=b;let M=s.createBuffer(),A=y.__size,v=y.usage;return s.bindBuffer(s.UNIFORM_BUFFER,M),s.bufferData(s.UNIFORM_BUFFER,A,v),s.bindBuffer(s.UNIFORM_BUFFER,null),s.bindBufferBase(s.UNIFORM_BUFFER,b,M),M}function d(){for(let y=0;y<o;y++)if(a.indexOf(y)===-1)return a.push(y),y;return ft("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(y){let b=n[y.id],M=y.uniforms,A=y.__cache;s.bindBuffer(s.UNIFORM_BUFFER,b);for(let v=0,T=M.length;v<T;v++){let I=M[v];if(Array.isArray(I))for(let P=0,C=I.length;P<C;P++)f(I[P],v,P,A);else f(I,v,0,A)}s.bindBuffer(s.UNIFORM_BUFFER,null)}function f(y,b,M,A){if(x(y,b,M,A)===!0){let v=y.__offset,T=y.value;if(Array.isArray(T)){let I=0;for(let P=0;P<T.length;P++){let C=T[P],N=m(C);g(C,y.__data,I),typeof C!="number"&&typeof C!="boolean"&&!C.isMatrix3&&!ArrayBuffer.isView(C)&&(I+=N.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,y.__data,0);s.bufferSubData(s.UNIFORM_BUFFER,v,y.__data)}}function g(y,b,M){typeof y=="number"||typeof y=="boolean"?b[0]=y:y.isMatrix3?(b[0]=y.elements[0],b[1]=y.elements[1],b[2]=y.elements[2],b[3]=0,b[4]=y.elements[3],b[5]=y.elements[4],b[6]=y.elements[5],b[7]=0,b[8]=y.elements[6],b[9]=y.elements[7],b[10]=y.elements[8],b[11]=0):ArrayBuffer.isView(y)?b.set(new y.constructor(y.buffer,y.byteOffset,b.length)):y.toArray(b,M)}function x(y,b,M,A){let v=y.value,T=b+"_"+M;if(A[T]===void 0)return typeof v=="number"||typeof v=="boolean"?A[T]=v:ArrayBuffer.isView(v)?A[T]=v.slice():A[T]=v.clone(),!0;{let I=A[T];if(typeof v=="number"||typeof v=="boolean"){if(I!==v)return A[T]=v,!0}else{if(ArrayBuffer.isView(v))return!0;if(I.equals(v)===!1)return I.copy(v),!0}}return!1}function p(y){let b=y.uniforms,M=0,A=16;for(let T=0,I=b.length;T<I;T++){let P=Array.isArray(b[T])?b[T]:[b[T]];for(let C=0,N=P.length;C<N;C++){let R=P[C],O=Array.isArray(R.value)?R.value:[R.value];for(let z=0,K=O.length;z<K;z++){let re=O[z],G=m(re),V=M%A,U=V%G.boundary,J=V+U;M+=U,J!==0&&A-J<G.storage&&(M+=A-J),R.__data=new Float32Array(G.storage/Float32Array.BYTES_PER_ELEMENT),R.__offset=M,M+=G.storage}}}let v=M%A;return v>0&&(M+=A-v),y.__size=M,y.__cache={},this}function m(y){let b={boundary:0,storage:0};return typeof y=="number"||typeof y=="boolean"?(b.boundary=4,b.storage=4):y.isVector2?(b.boundary=8,b.storage=8):y.isVector3||y.isColor?(b.boundary=16,b.storage=12):y.isVector4?(b.boundary=16,b.storage=16):y.isMatrix3?(b.boundary=48,b.storage=48):y.isMatrix4?(b.boundary=64,b.storage=64):y.isTexture?pt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(y)?(b.boundary=16,b.storage=y.byteLength):pt("WebGLRenderer: Unsupported uniform value type.",y),b}function S(y){let b=y.target;b.removeEventListener("dispose",S);let M=a.indexOf(b.__bindingPointIndex);a.splice(M,1),s.deleteBuffer(n[b.id]),delete n[b.id],delete i[b.id]}function E(){for(let y in n)s.deleteBuffer(n[y]);a=[],n={},i={}}return{bind:l,update:c,dispose:E}}var av=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),gi=null;function ov(){return gi===null&&(gi=new Ps(av,16,16,Qi,dn),gi.name="DFG_LUT",gi.minFilter=Zt,gi.magFilter=Zt,gi.wrapS=ui,gi.wrapT=ui,gi.generateMipmaps=!1,gi.needsUpdate=!0),gi}var cs=class{constructor(e={}){let{canvas:t=_u(),context:r=null,depth:n=!0,stencil:i=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=wn}=e;this.isWebGLRenderer=!0;let g;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=r.getContextAttributes().alpha}else g=a;let x=f,p=new Set([bo,So,yo]),m=new Set([wn,ei,rs,ss,_o,xo]),S=new Uint32Array(4),E=new Int32Array(4),y=new Z,b=null,M=null,A=[],v=[],T=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Qn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let I=this,P=!1,C=null,N=null,R=null,O=null;this._outputColorSpace=jt;let z=0,K=0,re=null,G=-1,V=null,U=new Ot,J=new Ot,j=null,ae=new ze(0),Q=0,me=t.width,B=t.height,H=1,de=null,we=null,ce=new Ot(0,0,me,B),fe=new Ot(0,0,me,B),st=!1,Ue=new Xr,Ee=!1,Ne=!1,Ce=new Ut,_e=new Z,Ge=new Ot,qe={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},pe=!1;function $e(){return re===null?H:1}let L=r;function Se(w,Y){return t.getContext(w,Y)}let be,D,_,k,W,ee,ye,Me,$,se,ue,Be,Te,xe,Fe,Pe,Ke,X,ve,ie,Ae,Ie,le;try{let w={alpha:!0,depth:n,stencil:i,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${"186"}`),t.addEventListener("webglcontextlost",gt,!1),t.addEventListener("webglcontextrestored",ut,!1),t.addEventListener("webglcontextcreationerror",Et,!1),L===null){let Y="webgl2";if(L=Se(Y,w),L===null)throw Se(Y)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}Ve()}catch(w){throw t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),ft("WebGLRenderer: "+w.message),w}function Ve(){be=new pg(L),be.init(),Ae=new ev(L,be),D=new rg(L,be,e,Ae),_=new $0(L,be),D.reversedDepthBuffer&&u&&_.buffers.depth.setReversed(!0),N=L.createFramebuffer(),R=L.createFramebuffer(),O=L.createFramebuffer(),k=new vg(L),W=new B0,ee=new Q0(L,be,_,W,D,Ae,k),ye=new fg(I),Me=new xf(L),Ie=new ng(L,Me),$=new mg(L,Me,k,Ie),se=new xg(L,$,Me,Ie,k),X=new _g(L,D,ee),Fe=new sg(W),ue=new O0(I,ye,be,D,Ie,Fe),Be=new rv(I,W),Te=new z0,xe=new Y0(be),Ke=new tg(I,ye,_,se,g,l),Pe=new j0(I,se,D),le=new sv(L,k,D,_),ve=new ig(L,be,k),ie=new gg(L,be,k),k.programs=ue.programs,I.capabilities=D,I.extensions=be,I.properties=W,I.renderLists=Te,I.shadowMap=Pe,I.state=_,I.info=k}x!==wn&&(T=new Sg(x,t.width,t.height,o,n,i));let Xe=new Hc(I,L);this.xr=Xe,this.getContext=function(){return L},this.getContextAttributes=function(){return L.getContextAttributes()},this.forceContextLoss=function(){let w=be.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){let w=be.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return H},this.setPixelRatio=function(w){w!==void 0&&(H=w,this.setSize(me,B,!1))},this.getSize=function(w){return w.set(me,B)},this.setSize=function(w,Y,oe=!0){if(Xe.isPresenting){pt("WebGLRenderer: Can't change size while VR device is presenting.");return}me=w,B=Y,t.width=Math.floor(w*H),t.height=Math.floor(Y*H),oe===!0&&(t.style.width=w+"px",t.style.height=Y+"px"),T!==null&&T.setSize(t.width,t.height),this.setViewport(0,0,w,Y)},this.getDrawingBufferSize=function(w){return w.set(me*H,B*H).floor()},this.setDrawingBufferSize=function(w,Y,oe){me=w,B=Y,H=oe,t.width=Math.floor(w*oe),t.height=Math.floor(Y*oe),this.setViewport(0,0,w,Y)},this.setEffects=function(w){if(x===wn){ft("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let Y=0;Y<w.length;Y++)if(w[Y].isOutputPass===!0){pt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(U)},this.getViewport=function(w){return w.copy(ce)},this.setViewport=function(w,Y,oe,te){w.isVector4?ce.set(w.x,w.y,w.z,w.w):ce.set(w,Y,oe,te),_.viewport(U.copy(ce).multiplyScalar(H).round())},this.getScissor=function(w){return w.copy(fe)},this.setScissor=function(w,Y,oe,te){w.isVector4?fe.set(w.x,w.y,w.z,w.w):fe.set(w,Y,oe,te),_.scissor(J.copy(fe).multiplyScalar(H).round())},this.getScissorTest=function(){return st},this.setScissorTest=function(w){_.setScissorTest(st=w)},this.setOpaqueSort=function(w){de=w},this.setTransparentSort=function(w){we=w},this.getClearColor=function(w){return w.copy(Ke.getClearColor())},this.setClearColor=function(){Ke.setClearColor(...arguments)},this.getClearAlpha=function(){return Ke.getClearAlpha()},this.setClearAlpha=function(){Ke.setClearAlpha(...arguments)},this.clear=function(w=!0,Y=!0,oe=!0){let te=0;if(w){let ne=!1;if(re!==null){let We=re.texture.format;ne=p.has(We)}if(ne){let We=re.texture.type,Ye=m.has(We),ke=Ke.getClearColor(),Qe=Ke.getClearAlpha(),nt=ke.r,ct=ke.g,vt=ke.b;Ye?(S[0]=nt,S[1]=ct,S[2]=vt,S[3]=Qe,L.clearBufferuiv(L.COLOR,0,S)):(E[0]=nt,E[1]=ct,E[2]=vt,E[3]=Qe,L.clearBufferiv(L.COLOR,0,E))}else te|=L.COLOR_BUFFER_BIT}Y&&(te|=L.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),oe&&(te|=L.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&L.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(w){w.setRenderer(this),C=w},this.dispose=function(){t.removeEventListener("webglcontextlost",gt,!1),t.removeEventListener("webglcontextrestored",ut,!1),t.removeEventListener("webglcontextcreationerror",Et,!1),Ke.dispose(),Te.dispose(),xe.dispose(),W.dispose(),ye.dispose(),se.dispose(),Ie.dispose(),le.dispose(),ue.dispose(),Xe.dispose(),Xe.removeEventListener("sessionstart",yn),Xe.removeEventListener("sessionend",ln),Dt.stop()};function gt(w){w.preventDefault(),xc("WebGLRenderer: Context Lost."),P=!0}function ut(){xc("WebGLRenderer: Context Restored."),P=!1;let w=k.autoReset,Y=Pe.enabled,oe=Pe.autoUpdate,te=Pe.needsUpdate,ne=Pe.type;Ve(),k.autoReset=w,Pe.enabled=Y,Pe.autoUpdate=oe,Pe.needsUpdate=te,Pe.type=ne}function Et(w){ft("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function Ft(w){let Y=w.target;Y.removeEventListener("dispose",Ft),_n(Y)}function _n(w){Tn(w),W.remove(w)}function Tn(w){let Y=W.get(w).programs;Y!==void 0&&(Y.forEach(function(oe){ue.releaseProgram(oe)}),w.isShaderMaterial&&ue.releaseShaderCache(w))}this.renderBufferDirect=function(w,Y,oe,te,ne,We){Y===null&&(Y=qe);let Ye=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,ke=et(w,Y,oe,te,ne);_.setMaterial(te,Ye);let Qe=oe.index,nt=1;if(te.wireframe===!0){if(Qe=$.getWireframeAttribute(oe),Qe===void 0)return;nt=2}let ct=oe.drawRange,vt=oe.attributes.position,je=ct.start*nt,Tt=(ct.start+ct.count)*nt;We!==null&&(je=Math.max(je,We.start*nt),Tt=Math.min(Tt,(We.start+We.count)*nt)),Qe!==null?(je=Math.max(je,0),Tt=Math.min(Tt,Qe.count)):vt!=null&&(je=Math.max(je,0),Tt=Math.min(Tt,vt.count));let Nt=Tt-je;if(Nt<0||Nt===1/0)return;Ie.setup(ne,te,ke,oe,Qe);let Pt,F=ve;if(Qe!==null&&(Pt=Me.get(Qe),F=ie,F.setIndex(Pt)),ne.isMesh)te.wireframe===!0?(_.setLineWidth(te.wireframeLinewidth*$e()),F.setMode(L.LINES)):F.setMode(L.TRIANGLES);else if(ne.isLine){let ge=te.linewidth;ge===void 0&&(ge=1),_.setLineWidth(ge*$e()),ne.isLineSegments?F.setMode(L.LINES):ne.isLineLoop?F.setMode(L.LINE_LOOP):F.setMode(L.LINE_STRIP)}else ne.isPoints?F.setMode(L.POINTS):ne.isSprite&&F.setMode(L.TRIANGLES);if(ne.isBatchedMesh)if(be.get("WEBGL_multi_draw"))F.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{let ge=ne._multiDrawStarts,q=ne._multiDrawCounts,Oe=ne._multiDrawCount,Re=Qe?Me.get(Qe).bytesPerElement:1,he=W.get(te).currentProgram.getUniforms();for(let at=0;at<Oe;at++)he.setValue(L,"_gl_DrawID",at),F.render(ge[at]/Re,q[at])}else if(ne.isInstancedMesh)F.renderInstances(je,Nt,ne.count);else if(oe.isInstancedBufferGeometry){let ge=oe._maxInstanceCount!==void 0?oe._maxInstanceCount:1/0,q=Math.min(oe.instanceCount,ge);F.renderInstances(je,Nt,q)}else F.render(je,Nt)};function An(w,Y,oe,te){C!==null&&w.isNodeMaterial&&C.setObject(te,w),Ee===!0&&Fe.setState(w,oe,!1),w.transparent===!0&&w.side===Ln&&w.forceSinglePass===!1?(w.side=Qt,w.needsUpdate=!0,cn(w,Y,te),w.side=Ji,w.needsUpdate=!0,cn(w,Y,te),w.side=Ln):cn(w,Y,te)}this.compile=function(w,Y,oe=null){oe===null&&(oe=w),C!==null&&C.renderStart(w,Y,oe),M=xe.get(oe),M.init(Y),v.push(M),oe.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(M.pushLight(ne),ne.castShadow&&M.pushShadow(ne))}),w!==oe&&w.traverseVisible(function(ne){ne.isLight&&ne.layers.test(Y.layers)&&(M.pushLight(ne),ne.castShadow&&M.pushShadow(ne))}),M.setupLights(),C!==null&&C.updateLights(M.state.lightsArray),Ne=this.localClippingEnabled,Ee=Fe.init(this.clippingPlanes,Ne),Ee===!0&&Fe.setGlobalState(this.clippingPlanes,Y),C!==null&&Pe.render(M.state.shadowsArray,oe,Y);let te=new Set;return w.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;let We=ne.material;if(We)if(Array.isArray(We))for(let Ye=0;Ye<We.length;Ye++){let ke=We[Ye];An(ke,oe,Y,ne),te.add(ke)}else An(We,oe,Y,ne),te.add(We)}),M=v.pop(),C!==null&&C.renderEnd(),te},this.compileAsync=function(w,Y,oe=null){let te=this.compile(w,Y,oe);return new Promise(ne=>{function We(){if(te.forEach(function(Ye){let Qe=W.get(Ye).currentProgram;(Qe===void 0||Qe.isReady())&&te.delete(Ye)}),te.size===0){ne(w);return}setTimeout(We,10)}be.get("KHR_parallel_shader_compile")!==null?We():setTimeout(We,10)})};let Gt=null;function nn(w){Gt&&Gt(w)}function yn(){Dt.stop()}function ln(){Dt.start()}let Dt=new Yu;Dt.setAnimationLoop(nn),typeof self<"u"&&Dt.setContext(self),this.setAnimationLoop=function(w){Gt=w,Xe.setAnimationLoop(w),w===null?Dt.stop():Dt.start()},Xe.addEventListener("sessionstart",yn),Xe.addEventListener("sessionend",ln),this.render=function(w,Y){if(Y!==void 0&&Y.isCamera!==!0){ft("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(P===!0)return;C!==null&&C.renderStart(w,Y);let oe=Xe.enabled===!0&&Xe.isPresenting===!0,te=T!==null&&(re===null||oe)&&T.begin(I,re);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),Y.parent===null&&Y.matrixWorldAutoUpdate===!0&&Y.updateMatrixWorld(),Xe.enabled===!0&&Xe.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(Xe.cameraAutoUpdate===!0&&Xe.updateCamera(Y),Y=Xe.getCamera()),w.isScene===!0&&w.onBeforeRender(I,w,Y,re),M=xe.get(w,v.length),M.init(Y),M.state.textureUnits=ee.getTextureUnits(),v.push(M),Ce.multiplyMatrices(Y.projectionMatrix,Y.matrixWorldInverse),Ue.setFromProjectionMatrix(Ce,jn,Y.reversedDepth),Ne=this.localClippingEnabled,Ee=Fe.init(this.clippingPlanes,Ne),b=Te.get(w,A.length),b.init(),A.push(b),Xe.enabled===!0&&Xe.isPresenting===!0){let Ye=I.xr.getDepthSensingMesh();Ye!==null&&Di(Ye,Y,-1/0,I.sortObjects)}Di(w,Y,0,I.sortObjects),b.finish(),C!==null&&C.updateLights(M.state.lightsArray),I.sortObjects===!0&&b.sort(de,we),pe=Xe.enabled===!1||Xe.isPresenting===!1||Xe.hasDepthSensing()===!1,pe&&Ke.addToRenderList(b,w),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Ee===!0&&Fe.beginShadows();let ne=M.state.shadowsArray;if(Pe.render(ne,w,Y),Ee===!0&&Fe.endShadows(),(te&&T.hasRenderPass())===!1){let Ye=b.opaque,ke=b.transmissive;if(M.setupLights(),Y.isArrayCamera){let Qe=Y.cameras;if(ke.length>0)for(let nt=0,ct=Qe.length;nt<ct;nt++){let vt=Qe[nt];ri(Ye,ke,w,vt)}pe&&Ke.render(w);for(let nt=0,ct=Qe.length;nt<ct;nt++){let vt=Qe[nt];Xt(b,w,vt,vt.viewport)}}else ke.length>0&&ri(Ye,ke,w,Y),pe&&Ke.render(w),Xt(b,w,Y)}re!==null&&K===0&&(ee.updateMultisampleRenderTarget(re),ee.updateRenderTargetMipmap(re)),te&&T.end(I),w.isScene===!0&&w.onAfterRender(I,w,Y),Ie.resetDefaultState(),G=-1,V=null,v.pop(),v.length>0?(M=v[v.length-1],ee.setTextureUnits(M.state.textureUnits),Ee===!0&&Fe.setGlobalState(I.clippingPlanes,M.state.camera)):M=null,A.pop(),A.length>0?b=A[A.length-1]:b=null,C!==null&&C.renderEnd()};function Di(w,Y,oe,te){if(w.visible===!1)return;if(w.layers.test(Y.layers)){if(w.isGroup)oe=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(Y);else if(w.isLightProbeGrid)M.pushLightProbeGrid(w);else if(w.isLight)M.pushLight(w),w.castShadow&&M.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||w.intersectsFrustum(Ue)){te&&Ge.setFromMatrixPosition(w.matrixWorld).applyMatrix4(Ce);let Ye=se.update(w),ke=w.material;ke.visible&&b.push(w,Ye,ke,oe,Ge.z,null,Y)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||w.intersectsFrustum(Ue))){let Ye=se.update(w),ke=w.material;if(te&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ge.copy(w.boundingSphere.center)):(Ye.boundingSphere===null&&Ye.computeBoundingSphere(),Ge.copy(Ye.boundingSphere.center)),Ge.applyMatrix4(w.matrixWorld).applyMatrix4(Ce)),Array.isArray(ke)){let Qe=Ye.groups;for(let nt=0,ct=Qe.length;nt<ct;nt++){let vt=Qe[nt],je=ke[vt.materialIndex];je&&je.visible&&b.push(w,Ye,je,oe,Ge.z,vt,Y)}}else ke.visible&&b.push(w,Ye,ke,oe,Ge.z,null,Y)}}let We=w.children;for(let Ye=0,ke=We.length;Ye<ke;Ye++)Di(We[Ye],Y,oe,te)}function Xt(w,Y,oe,te){let{opaque:ne,transmissive:We,transparent:Ye}=w;M.setupLightsView(oe),Ee===!0&&Fe.setGlobalState(I.clippingPlanes,oe),te&&_.viewport(U.copy(te)),ne.length>0&&On(ne,Y,oe),We.length>0&&On(We,Y,oe),Ye.length>0&&On(Ye,Y,oe),_.buffers.depth.setTest(!0),_.buffers.depth.setMask(!0),_.buffers.color.setMask(!0),_.setPolygonOffset(!1)}function ri(w,Y,oe,te){if((oe.isScene===!0?oe.overrideMaterial:null)!==null)return;if(M.state.transmissionRenderTarget[te.id]===void 0){let je=be.has("EXT_color_buffer_half_float")||be.has("EXT_color_buffer_float");M.state.transmissionRenderTarget[te.id]=new Jt(1,1,{generateMipmaps:!0,type:je?dn:wn,minFilter:ji,samples:Math.max(4,D.samples),stencilBuffer:i,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:wt.workingColorSpace})}let We=M.state.transmissionRenderTarget[te.id],Ye=te.viewport||U;We.setSize(Ye.z*I.transmissionResolutionScale,Ye.w*I.transmissionResolutionScale);let ke=I.getRenderTarget(),Qe=I.getActiveCubeFace(),nt=I.getActiveMipmapLevel();I.setRenderTarget(We),I.getClearColor(ae),Q=I.getClearAlpha(),Q<1&&I.setClearColor(16777215,.5),I.clear(),pe&&Ke.render(oe);let ct=I.toneMapping;I.toneMapping=Qn;let vt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),M.setupLightsView(te),Ee===!0&&Fe.setGlobalState(I.clippingPlanes,te),On(w,oe,te),ee.updateMultisampleRenderTarget(We),ee.updateRenderTargetMipmap(We),be.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let Tt=0,Nt=Y.length;Tt<Nt;Tt++){let Pt=Y[Tt],{object:F,geometry:ge,material:q,group:Oe}=Pt;if(q.side===Ln&&F.layers.test(te.layers)){let Re=q.side;q.side=Qt,q.needsUpdate=!0,si(F,oe,te,ge,q,Oe),q.side=Re,q.needsUpdate=!0,je=!0}}je===!0&&(ee.updateMultisampleRenderTarget(We),ee.updateRenderTargetMipmap(We))}I.setRenderTarget(ke,Qe,nt),I.setClearColor(ae,Q),vt!==void 0&&(te.viewport=vt),I.toneMapping=ct}function On(w,Y,oe){let te=Y.isScene===!0?Y.overrideMaterial:null;for(let ne=0,We=w.length;ne<We;ne++){let Ye=w[ne],{object:ke,geometry:Qe,group:nt}=Ye,ct=Ye.material;ct.allowOverride===!0&&te!==null&&(ct=te),ke.layers.test(oe.layers)&&si(ke,Y,oe,Qe,ct,nt)}}function si(w,Y,oe,te,ne,We){C!==null&&ne.isNodeMaterial&&C.setObject(w,ne),w.onBeforeRender(I,Y,oe,te,ne,We),w.modelViewMatrix.multiplyMatrices(oe.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),ne.onBeforeRender(I,Y,oe,te,w,We),ne.transparent===!0&&ne.side===Ln&&ne.forceSinglePass===!1?(ne.side=Qt,ne.needsUpdate=!0,I.renderBufferDirect(oe,Y,te,ne,w,We),ne.side=Ji,ne.needsUpdate=!0,I.renderBufferDirect(oe,Y,te,ne,w,We),ne.side=Ln):I.renderBufferDirect(oe,Y,te,ne,w,We),w.onAfterRender(I,Y,oe,te,ne,We)}function cn(w,Y,oe){Y.isScene!==!0&&(Y=qe);let te=W.get(w),ne=M.state.lights,We=M.state.shadowsArray,Ye=ne.state.version,ke=ue.getParameters(w,ne.state,We,Y,oe,M.state.lightProbeGridArray),Qe=ue.getProgramCacheKey(ke),nt=te.programs;te.environment=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?Y.environment:null,te.fog=Y.fog;let ct=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap;te.envMap=ye.get(w.envMap||te.environment,ct),te.envMapRotation=te.environment!==null&&w.envMap===null?Y.environmentRotation:w.envMapRotation,nt===void 0&&(w.addEventListener("dispose",Ft),nt=new Map,te.programs=nt);let vt=nt.get(Qe);if(vt!==void 0){if(te.currentProgram===vt&&te.lightsStateVersion===Ye)return ai(w,ke),vt}else ke.uniforms=ue.getUniforms(w),C!==null&&w.isNodeMaterial&&C.build(w,oe,ke),w.onBeforeCompile(ke,I),vt=ue.acquireProgram(ke,Qe),nt.set(Qe,vt),te.uniforms=ke.uniforms;let je=te.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(je.clippingPlanes=Fe.uniform),ai(w,ke),te.needsLights=li(w),te.lightsStateVersion=Ye,te.needsLights&&(je.ambientLightColor.value=ne.state.ambient,je.lightProbe.value=ne.state.probe,je.sunLights.value=ne.state.sun,je.sunLightShadows.value=ne.state.sunShadow,je.directionalLights.value=ne.state.directional,je.directionalLightShadows.value=ne.state.directionalShadow,je.spotLights.value=ne.state.spot,je.spotLightShadows.value=ne.state.spotShadow,je.rectAreaLights.value=ne.state.rectArea,je.ltc_1.value=ne.state.rectAreaLTC1,je.ltc_2.value=ne.state.rectAreaLTC2,je.pointLights.value=ne.state.point,je.pointLightShadows.value=ne.state.pointShadow,je.hemisphereLights.value=ne.state.hemi,je.sunShadowMatrix.value=ne.state.sunShadowMatrix,je.sunShadowCascade.value=ne.state.sunShadowCascade,je.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,je.spotLightMatrix.value=ne.state.spotLightMatrix,je.spotLightMap.value=ne.state.spotLightMap,je.pointShadowMatrix.value=ne.state.pointShadowMatrix),te.lightProbeGrid=M.state.lightProbeGridArray.length>0,te.currentProgram=vt,te.uniformsList=null,vt}function En(w){if(w.uniformsList===null){let Y=w.currentProgram.getUniforms();w.uniformsList=ls.seqWithValue(Y.seq,w.uniforms)}return w.uniformsList}function ai(w,Y){let oe=W.get(w);oe.outputColorSpace=Y.outputColorSpace,oe.batching=Y.batching,oe.batchingColor=Y.batchingColor,oe.instancing=Y.instancing,oe.instancingColor=Y.instancingColor,oe.instancingMorph=Y.instancingMorph,oe.skinning=Y.skinning,oe.morphTargets=Y.morphTargets,oe.morphNormals=Y.morphNormals,oe.morphColors=Y.morphColors,oe.morphTargetsCount=Y.morphTargetsCount,oe.numClippingPlanes=Y.numClippingPlanes,oe.numIntersection=Y.numClipIntersection,oe.vertexAlphas=Y.vertexAlphas,oe.vertexTangents=Y.vertexTangents,oe.toneMapping=Y.toneMapping}function pn(w,Y){if(w.length===0)return null;if(w.length===1)return w[0].texture!==null?w[0]:null;y.setFromMatrixPosition(Y.matrixWorld);for(let oe=0,te=w.length;oe<te;oe++){let ne=w[oe];if(ne.texture!==null&&ne.boundingBox.containsPoint(y))return ne}return null}function et(w,Y,oe,te,ne){Y.isScene!==!0&&(Y=qe),ee.resetTextureUnits();let We=Y.fog,Ye=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?Y.environment:null,ke=re===null?I.outputColorSpace:re.isXRRenderTarget===!0?re.texture.colorSpace:wt.workingColorSpace,Qe=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,nt=ye.get(te.envMap||Ye,Qe),ct=te.vertexColors===!0&&!!oe.attributes.color&&oe.attributes.color.itemSize===4,vt=!!oe.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),je=!!oe.morphAttributes.position,Tt=!!oe.morphAttributes.normal,Nt=!!oe.morphAttributes.color,Pt=Qn;te.toneMapped&&(re===null||re.isXRRenderTarget===!0)&&(Pt=I.toneMapping);let F=oe.morphAttributes.position||oe.morphAttributes.normal||oe.morphAttributes.color,ge=F!==void 0?F.length:0,q=W.get(te),Oe=M.state.lights;if(Ee===!0&&(Ne===!0||w!==V)){let Ze=w===V&&te.id===G;Fe.setState(te,w,Ze)}let Re=!1;te.version===q.__version?(q.needsLights&&q.lightsStateVersion!==Oe.state.version||q.outputColorSpace!==ke||ne.isBatchedMesh&&q.batching===!1||!ne.isBatchedMesh&&q.batching===!0||ne.isBatchedMesh&&q.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&q.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&q.instancing===!1||!ne.isInstancedMesh&&q.instancing===!0||ne.isSkinnedMesh&&q.skinning===!1||!ne.isSkinnedMesh&&q.skinning===!0||ne.isInstancedMesh&&q.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&q.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&q.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&q.instancingMorph===!1&&ne.morphTexture!==null||q.envMap!==nt||te.fog===!0&&q.fog!==We||q.numClippingPlanes!==void 0&&(q.numClippingPlanes!==Fe.numPlanes||q.numIntersection!==Fe.numIntersection)||q.vertexAlphas!==ct||q.vertexTangents!==vt||q.morphTargets!==je||q.morphNormals!==Tt||q.morphColors!==Nt||q.toneMapping!==Pt||q.morphTargetsCount!==ge||!!q.lightProbeGrid!=M.state.lightProbeGridArray.length>0)&&(Re=!0):(Re=!0,q.__version=te.version);let he=q.currentProgram;Re===!0&&(he=cn(te,Y,ne),C&&te.isNodeMaterial&&C.onUpdateProgram(te,he,q));let at=!1,ht=!1,De=!1,tt=he.getUniforms(),Le=q.uniforms;if(_.useProgram(he.program)&&(at=!0,ht=!0,De=!0),te.id!==G&&(G=te.id,ht=!0),q.needsLights){let Ze=pn(M.state.lightProbeGridArray,ne);q.lightProbeGrid!==Ze&&(q.lightProbeGrid=Ze,ht=!0)}if(at||V!==w){_.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),tt.setValue(L,"projectionMatrix",w.projectionMatrix),tt.setValue(L,"viewMatrix",w.matrixWorldInverse);let rt=tt.map.cameraPosition;rt!==void 0&&rt.setValue(L,_e.setFromMatrixPosition(w.matrixWorld)),D.logarithmicDepthBuffer&&tt.setValue(L,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&tt.setValue(L,"isOrthographic",w.isOrthographicCamera===!0),V!==w&&(V=w,ht=!0,De=!0)}if(q.needsLights&&(Oe.state.sunShadowMap.length>0&&tt.setValue(L,"sunShadowMap",Oe.state.sunShadowMap,ee),Oe.state.directionalShadowMap.length>0&&tt.setValue(L,"directionalShadowMap",Oe.state.directionalShadowMap,ee),Oe.state.spotShadowMap.length>0&&tt.setValue(L,"spotShadowMap",Oe.state.spotShadowMap,ee),Oe.state.pointShadowMap.length>0&&tt.setValue(L,"pointShadowMap",Oe.state.pointShadowMap,ee)),ne.isSkinnedMesh){tt.setOptional(L,ne,"bindMatrix"),tt.setOptional(L,ne,"bindMatrixInverse");let Ze=ne.skeleton;Ze&&(Ze.boneTexture===null&&Ze.computeBoneTexture(),tt.setValue(L,"boneTexture",Ze.boneTexture,ee))}ne.isBatchedMesh&&(tt.setOptional(L,ne,"batchingTexture"),tt.setValue(L,"batchingTexture",ne._matricesTexture,ee),tt.setOptional(L,ne,"batchingIdTexture"),tt.setValue(L,"batchingIdTexture",ne._indirectTexture,ee),tt.setOptional(L,ne,"batchingColorTexture"),ne._colorsTexture!==null&&tt.setValue(L,"batchingColorTexture",ne._colorsTexture,ee));let it=oe.morphAttributes;if((it.position!==void 0||it.normal!==void 0||it.color!==void 0)&&X.update(ne,oe,he),(ht||q.receiveShadow!==ne.receiveShadow)&&(q.receiveShadow=ne.receiveShadow,tt.setValue(L,"receiveShadow",ne.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&Y.environment!==null&&(Le.envMapIntensity.value=Y.environmentIntensity),Le.dfgLUT!==void 0&&(Le.dfgLUT.value=ov()),ht){if(tt.setValue(L,"toneMappingExposure",I.toneMappingExposure),q.needsLights&&oi(Le,De),We&&te.fog===!0&&Be.refreshFogUniforms(Le,We),Be.refreshMaterialUniforms(Le,te,H,B,M.state.transmissionRenderTarget[w.id]),q.needsLights&&q.lightProbeGrid){let Ze=q.lightProbeGrid;Le.probesSH.value=Ze.texture,Le.probesMin.value.copy(Ze.boundingBox.min),Le.probesMax.value.copy(Ze.boundingBox.max),Le.probesResolution.value.copy(Ze.resolution)}ls.upload(L,En(q),Le,ee)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(ls.upload(L,En(q),Le,ee),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&tt.setValue(L,"center",ne.center),tt.setValue(L,"modelViewMatrix",ne.modelViewMatrix),tt.setValue(L,"normalMatrix",ne.normalMatrix),tt.setValue(L,"modelMatrix",ne.matrixWorld),te.uniformsGroups!==void 0){let Ze=te.uniformsGroups;for(let rt=0,He=Ze.length;rt<He;rt++){let dt=Ze[rt];le.update(dt,he),le.bind(dt,he)}}return he}function oi(w,Y){w.ambientLightColor.needsUpdate=Y,w.lightProbe.needsUpdate=Y,w.sunLights.needsUpdate=Y,w.sunLightShadows.needsUpdate=Y,w.directionalLights.needsUpdate=Y,w.directionalLightShadows.needsUpdate=Y,w.pointLights.needsUpdate=Y,w.pointLightShadows.needsUpdate=Y,w.spotLights.needsUpdate=Y,w.spotLightShadows.needsUpdate=Y,w.rectAreaLights.needsUpdate=Y,w.hemisphereLights.needsUpdate=Y}function li(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return z},this.getActiveMipmapLevel=function(){return K},this.getRenderTarget=function(){return re},this.setRenderTargetTextures=function(w,Y,oe){let te=W.get(w);te.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),W.get(w.texture).__webglTexture=Y,W.get(w.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:oe,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,Y){let oe=W.get(w);oe.__webglFramebuffer=Y,oe.__useDefaultFramebuffer=Y===void 0},this.setRenderTarget=function(w,Y=0,oe=0){re=w,z=Y,K=oe;let te=null,ne=!1,We=!1;if(w){let ke=W.get(w);if(ke.__useDefaultFramebuffer!==void 0){_.bindFramebuffer(L.FRAMEBUFFER,ke.__webglFramebuffer),U.copy(w.viewport),J.copy(w.scissor),j=w.scissorTest,_.viewport(U),_.scissor(J),_.setScissorTest(j),G=-1;return}else if(ke.__webglFramebuffer===void 0)ee.setupRenderTarget(w);else if(ke.__hasExternalTextures)ee.rebindTextures(w,W.get(w.texture).__webglTexture,W.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){let ct=w.depthTexture;if(ke.__boundDepthTexture!==ct){if(ct!==null&&W.has(ct)&&(w.width!==ct.image.width||w.height!==ct.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ee.setupDepthRenderbuffer(w)}}let Qe=w.texture;(Qe.isData3DTexture||Qe.isDataArrayTexture||Qe.isCompressedArrayTexture)&&(We=!0);let nt=W.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(nt[Y])?te=nt[Y][oe]:te=nt[Y],ne=!0):w.samples>0&&ee.useMultisampledRTT(w)===!1?te=W.get(w).__webglMultisampledFramebuffer:Array.isArray(nt)?te=nt[oe]:te=nt,U.copy(w.viewport),J.copy(w.scissor),j=w.scissorTest}else U.copy(ce).multiplyScalar(H).floor(),J.copy(fe).multiplyScalar(H).floor(),j=st;if(oe!==0&&(te=N),_.bindFramebuffer(L.FRAMEBUFFER,te)&&_.drawBuffers(w,te),_.viewport(U),_.scissor(J),_.setScissorTest(j),ne){let ke=W.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ke.__webglTexture,oe)}else if(We){let ke=Y;for(let Qe=0;Qe<w.textures.length;Qe++){let nt=W.get(w.textures[Qe]);L.framebufferTextureLayer(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0+Qe,nt.__webglTexture,oe,ke)}}else if(w!==null&&oe!==0){let ke=W.get(w.texture);L.framebufferTexture2D(L.FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,ke.__webglTexture,oe)}G=-1};function Xn(w){let Y=W.get(w);return(Y.__readFormat!==w.format||Y.__readType!==w.type)&&(Y.__readFormat=w.format,Y.__readType=w.type,Y.__formatReadable=D.textureFormatReadable(w.format),Y.__typeReadable=D.textureTypeReadable(w.type)),Y}this.readRenderTargetPixels=function(w,Y,oe,te,ne,We,Ye,ke=0){if(!(w&&w.isWebGLRenderTarget)){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Qe=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe){_.bindFramebuffer(L.FRAMEBUFFER,Qe);try{let nt=w.textures[ke],ct=nt.format,vt=nt.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ke);let je=Xn(nt);if(je.__formatReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(je.__typeReadable===!1){ft("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}Y>=0&&Y<=w.width-te&&oe>=0&&oe<=w.height-ne&&L.readPixels(Y,oe,te,ne,Ae.convert(ct),Ae.convert(vt),We)}finally{let nt=re!==null?W.get(re).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(w,Y,oe,te,ne,We,Ye,ke=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Qe=W.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&Ye!==void 0&&(Qe=Qe[Ye]),Qe)if(Y>=0&&Y<=w.width-te&&oe>=0&&oe<=w.height-ne){_.bindFramebuffer(L.FRAMEBUFFER,Qe);let nt=w.textures[ke],ct=nt.format,vt=nt.type;w.textures.length>1&&L.readBuffer(L.COLOR_ATTACHMENT0+ke);let je=Xn(nt);if(je.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(je.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Tt=L.createBuffer();L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.bufferData(L.PIXEL_PACK_BUFFER,We.byteLength,L.STREAM_READ),L.readPixels(Y,oe,te,ne,Ae.convert(ct),Ae.convert(vt),0),L.bindBuffer(L.PIXEL_PACK_BUFFER,null);let Nt=re!==null?W.get(re).__webglFramebuffer:null;_.bindFramebuffer(L.FRAMEBUFFER,Nt);let Pt=L.fenceSync(L.SYNC_GPU_COMMANDS_COMPLETE,0);return L.flush(),await yu(L,Pt,4),L.bindBuffer(L.PIXEL_PACK_BUFFER,Tt),L.getBufferSubData(L.PIXEL_PACK_BUFFER,0,We),L.bindBuffer(L.PIXEL_PACK_BUFFER,null),L.deleteBuffer(Tt),L.deleteSync(Pt),We}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,Y=null,oe=0){let te=Math.pow(2,-oe),ne=Math.floor(w.image.width*te),We=Math.floor(w.image.height*te),Ye=Y!==null?Y.x:0,ke=Y!==null?Y.y:0;ee.setTexture2D(w,0),L.copyTexSubImage2D(L.TEXTURE_2D,oe,0,0,Ye,ke,ne,We),_.unbindTexture()},this.copyTextureToTexture=function(w,Y,oe=null,te=null,ne=0,We=0){let Ye,ke,Qe,nt,ct,vt,je,Tt,Nt,Pt=w.isCompressedTexture?w.mipmaps[We]:w.image;if(oe!==null)Ye=oe.max.x-oe.min.x,ke=oe.max.y-oe.min.y,Qe=oe.isBox3?oe.max.z-oe.min.z:1,nt=oe.min.x,ct=oe.min.y,vt=oe.isBox3?oe.min.z:0;else{let Le=Math.pow(2,-ne);Ye=Math.floor(Pt.width*Le),ke=Math.floor(Pt.height*Le),w.isDataArrayTexture?Qe=Pt.depth:w.isData3DTexture?Qe=Math.floor(Pt.depth*Le):Qe=1,nt=0,ct=0,vt=0}te!==null?(je=te.x,Tt=te.y,Nt=te.z):(je=0,Tt=0,Nt=0);let F=Ae.convert(Y.format),ge=Ae.convert(Y.type),q;Y.isData3DTexture?(ee.setTexture3D(Y,0),q=L.TEXTURE_3D):Y.isDataArrayTexture||Y.isCompressedArrayTexture?(ee.setTexture2DArray(Y,0),q=L.TEXTURE_2D_ARRAY):(ee.setTexture2D(Y,0),q=L.TEXTURE_2D),_.activeTexture(L.TEXTURE0),_.pixelStorei(L.UNPACK_FLIP_Y_WEBGL,Y.flipY),_.pixelStorei(L.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Y.premultiplyAlpha),_.pixelStorei(L.UNPACK_ALIGNMENT,Y.unpackAlignment);let Oe=_.getParameter(L.UNPACK_ROW_LENGTH),Re=_.getParameter(L.UNPACK_IMAGE_HEIGHT),he=_.getParameter(L.UNPACK_SKIP_PIXELS),at=_.getParameter(L.UNPACK_SKIP_ROWS),ht=_.getParameter(L.UNPACK_SKIP_IMAGES);_.pixelStorei(L.UNPACK_ROW_LENGTH,Pt.width),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Pt.height),_.pixelStorei(L.UNPACK_SKIP_PIXELS,nt),_.pixelStorei(L.UNPACK_SKIP_ROWS,ct),_.pixelStorei(L.UNPACK_SKIP_IMAGES,vt);let De=w.isDataArrayTexture||w.isData3DTexture,tt=Y.isDataArrayTexture||Y.isData3DTexture;if(w.isDepthTexture){let Le=W.get(w),it=W.get(Y),Ze=W.get(Le.__renderTarget),rt=W.get(it.__renderTarget);_.bindFramebuffer(L.READ_FRAMEBUFFER,Ze.__webglFramebuffer),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,rt.__webglFramebuffer);for(let He=0;He<Qe;He++)De&&(L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(w).__webglTexture,ne,vt+He),L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,W.get(Y).__webglTexture,We,Nt+He)),L.blitFramebuffer(nt,ct,Ye,ke,je,Tt,Ye,ke,L.DEPTH_BUFFER_BIT,L.NEAREST);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else if(ne!==0||w.isRenderTargetTexture||W.has(w)){let Le=W.get(w),it=W.get(Y);_.bindFramebuffer(L.READ_FRAMEBUFFER,R),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,O);for(let Ze=0;Ze<Qe;Ze++)De?L.framebufferTextureLayer(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,Le.__webglTexture,ne,vt+Ze):L.framebufferTexture2D(L.READ_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,Le.__webglTexture,ne),tt?L.framebufferTextureLayer(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,it.__webglTexture,We,Nt+Ze):L.framebufferTexture2D(L.DRAW_FRAMEBUFFER,L.COLOR_ATTACHMENT0,L.TEXTURE_2D,it.__webglTexture,We),ne!==0?L.blitFramebuffer(nt,ct,Ye,ke,je,Tt,Ye,ke,L.COLOR_BUFFER_BIT,L.NEAREST):tt?L.copyTexSubImage3D(q,We,je,Tt,Nt+Ze,nt,ct,Ye,ke):L.copyTexSubImage2D(q,We,je,Tt,nt,ct,Ye,ke);_.bindFramebuffer(L.READ_FRAMEBUFFER,null),_.bindFramebuffer(L.DRAW_FRAMEBUFFER,null)}else tt?w.isDataTexture||w.isData3DTexture?L.texSubImage3D(q,We,je,Tt,Nt,Ye,ke,Qe,F,ge,Pt.data):Y.isCompressedArrayTexture?L.compressedTexSubImage3D(q,We,je,Tt,Nt,Ye,ke,Qe,F,Pt.data):L.texSubImage3D(q,We,je,Tt,Nt,Ye,ke,Qe,F,ge,Pt):w.isDataTexture?L.texSubImage2D(L.TEXTURE_2D,We,je,Tt,Ye,ke,F,ge,Pt.data):w.isCompressedTexture?L.compressedTexSubImage2D(L.TEXTURE_2D,We,je,Tt,Pt.width,Pt.height,F,Pt.data):L.texSubImage2D(L.TEXTURE_2D,We,je,Tt,Ye,ke,F,ge,Pt);_.pixelStorei(L.UNPACK_ROW_LENGTH,Oe),_.pixelStorei(L.UNPACK_IMAGE_HEIGHT,Re),_.pixelStorei(L.UNPACK_SKIP_PIXELS,he),_.pixelStorei(L.UNPACK_SKIP_ROWS,at),_.pixelStorei(L.UNPACK_SKIP_IMAGES,ht),We===0&&Y.generateMipmaps&&L.generateMipmap(q),_.unbindTexture()},this.initRenderTarget=function(w){W.get(w).__webglFramebuffer===void 0&&ee.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?ee.setTextureCube(w,0):w.isData3DTexture?ee.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?ee.setTexture2DArray(w,0):ee.setTexture2D(w,0),_.unbindTexture()},this.resetState=function(){z=0,K=0,re=null,_.reset(),Ie.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return jn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;let t=this.getContext();t.drawingBufferColorSpace=wt._getDrawingBufferColorSpace(e),t.unpackColorSpace=wt._getUnpackColorSpace()}};var aa=new Z;function Hn(s,e,t,r,n,i){let a=2*Math.PI*n/4,o=Math.max(i-2*n,0),l=Math.PI/4;aa.copy(e),aa[r]=0,aa.normalize();let c=.5*a/(a+o),h=1-aa.angleTo(s)/l;return Math.sign(aa[t])===1?h*c:o/(a+o)+c+c*(1-h)}var Ii=class s extends Wi{constructor(e=1,t=1,r=1,n=2,i=.1){let a=n*2+1;if(i=Math.min(e/2,t/2,r/2,i),super(1,1,1,a,a,a),this.type="RoundedBoxGeometry",this.parameters={width:e,height:t,depth:r,segments:n,radius:i},a===1)return;let o=this.toNonIndexed();this.index=null,this.attributes.position=o.attributes.position,this.attributes.normal=o.attributes.normal,this.attributes.uv=o.attributes.uv;let l=new Z,c=new Z,h=new Z(e,t,r).divideScalar(2).subScalar(i),d=this.attributes.position.array,u=this.attributes.normal.array,f=this.attributes.uv.array,g=d.length/6,x=new Z,p=.5/a;for(let m=0,S=0;m<d.length;m+=3,S+=2)switch(l.fromArray(d,m),c.copy(l),c.x-=Math.sign(c.x)*p,c.y-=Math.sign(c.y)*p,c.z-=Math.sign(c.z)*p,c.normalize(),d[m+0]=h.x*Math.sign(l.x)+c.x*i,d[m+1]=h.y*Math.sign(l.y)+c.y*i,d[m+2]=h.z*Math.sign(l.z)+c.z*i,u[m+0]=c.x,u[m+1]=c.y,u[m+2]=c.z,Math.floor(m/g)){case 0:x.set(1,0,0),f[S+0]=Hn(x,c,"z","y",i,r),f[S+1]=1-Hn(x,c,"y","z",i,t);break;case 1:x.set(-1,0,0),f[S+0]=1-Hn(x,c,"z","y",i,r),f[S+1]=1-Hn(x,c,"y","z",i,t);break;case 2:x.set(0,1,0),f[S+0]=1-Hn(x,c,"x","z",i,e),f[S+1]=Hn(x,c,"z","x",i,r);break;case 3:x.set(0,-1,0),f[S+0]=1-Hn(x,c,"x","z",i,e),f[S+1]=1-Hn(x,c,"z","x",i,r);break;case 4:x.set(0,0,1),f[S+0]=1-Hn(x,c,"x","y",i,e),f[S+1]=1-Hn(x,c,"y","x",i,t);break;case 5:x.set(0,0,-1),f[S+0]=Hn(x,c,"x","y",i,e),f[S+1]=1-Hn(x,c,"y","x",i,t);break}}static fromJSON(e){return new s(e.width,e.height,e.depth,e.segments,e.radius)}};var us={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};var Nn=class{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}},lv=new mi(-1,1,1,-1,0,1),Wc=class extends Yt{constructor(){super(),this.setAttribute("position",new Lt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new Lt([0,2,0,0,2,0],2))}},cv=new Wc,er=class{constructor(e){this._mesh=new _t(cv,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,lv)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}};var pr=class extends Nn{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof zt?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=ti.clone(e.uniforms),this.material=new zt({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new er(this.material)}render(e,t,r){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=r.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};var oa=class extends Nn{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,r){let n=e.getContext(),i=e.state;i.buffers.color.setMask(!1),i.buffers.depth.setMask(!1),i.buffers.color.setLocked(!0),i.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),i.buffers.stencil.setTest(!0),i.buffers.stencil.setOp(n.REPLACE,n.REPLACE,n.REPLACE),i.buffers.stencil.setFunc(n.ALWAYS,a,4294967295),i.buffers.stencil.setClear(o),i.buffers.stencil.setLocked(!0),e.setRenderTarget(r),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),i.buffers.color.setLocked(!1),i.buffers.depth.setLocked(!1),i.buffers.color.setMask(!0),i.buffers.depth.setMask(!0),i.buffers.stencil.setLocked(!1),i.buffers.stencil.setFunc(n.EQUAL,1,4294967295),i.buffers.stencil.setOp(n.KEEP,n.KEEP,n.KEEP),i.buffers.stencil.setLocked(!0)}},ll=class extends Nn{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}};var cl=class{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){let r=e.getSize(new lt);this._width=r.width,this._height=r.height,t=new Jt(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:dn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new pr(us),this.copyPass.material.blending=Gn,this.timer=new ks}swapBuffers(){let e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){let t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());let t=this.renderer.getRenderTarget(),r=!1;for(let n=0,i=this.passes.length;n<i;n++){let a=this.passes[n];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(n),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,r),a.needsSwap){if(r){let o=this.renderer.getContext(),l=this.renderer.state.buffers.stencil;l.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),l.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}oa!==void 0&&(a instanceof oa?r=!0:a instanceof ll&&(r=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){let t=this.renderer.getSize(new lt);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;let r=this._width*this._pixelRatio,n=this._height*this._pixelRatio;this.renderTarget1.setSize(r,n),this.renderTarget2.setSize(r,n);for(let i=0;i<this.passes.length;i++)this.passes[i].setSize(r,n)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}};var hl=class extends Nn{constructor(e,t,r=null,n=null,i=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=r,this.clearColor=n,this.clearAlpha=i,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new ze}render(e,t,r){let n=e.autoClear;e.autoClear=!1;let i,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(i=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:r),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(i),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=n}};var Qu={name:"LuminosityHighPassShader",uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new ze(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};var ds=class s extends Nn{constructor(e,t=1,r,n){super(),this.strength=t,this.radius=r,this.threshold=n,this.resolution=e!==void 0?new lt(e.x,e.y):new lt(256,256),this.clearColor=new ze(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new Jt(i,a,{type:dn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let h=0;h<this.nMips;h++){let d=new Jt(i,a,{type:dn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+h,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);let u=new Jt(i,a,{type:dn,depthBuffer:!1});u.texture.name="UnrealBloomPass.v"+h,u.texture.generateMipmaps=!1,this.renderTargetsVertical.push(u),i=Math.round(i/2),a=Math.round(a/2)}let o=Qu;this.highPassUniforms=ti.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=n,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new zt({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];let l=[6,10,14,18,22];i=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let h=0;h<this.nMips;h++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(l[h])),this.separableBlurMaterials[h].uniforms.invSize.value=new lt(1/i,1/a),i=Math.round(i/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;let c=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=c,this.bloomTintColors=[new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1),new Z(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=ti.clone(us.uniforms),this.blendMaterial=new zt({uniforms:this.copyUniforms,vertexShader:us.vertexShader,fragmentShader:us.fragmentShader,premultipliedAlpha:!0,blending:Ci,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new ze,this._oldClearAlpha=1,this._basic=new kt,this._fsQuad=new er(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let r=Math.round(e/2),n=Math.round(t/2);this.renderTargetBright.setSize(r,n);for(let i=0;i<this.nMips;i++)this.renderTargetsHorizontal[i].setSize(r,n),this.renderTargetsVertical[i].setSize(r,n),this.separableBlurMaterials[i].uniforms.invSize.value=new lt(1/r,1/n),r=Math.round(r/2),n=Math.round(n/2)}render(e,t,r,n,i){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();let a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),i&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=r.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=r.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let l=0;l<this.nMips;l++)this._fsQuad.material=this.separableBlurMaterials[l],this.separableBlurMaterials[l].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[l]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[l].uniforms.colorTexture.value=this.renderTargetsHorizontal[l].texture,this.separableBlurMaterials[l].uniforms.direction.value=s.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[l]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[l];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,i&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(r),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){let t=[],r=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(r*r))/r);let n=[],i=[];for(let a=1;a<e;a+=2){let o=t[a],l=a+1<e?t[a+1]:0,c=o+l;n.push((a*o+(a+1)*l)/c),i.push(c)}return new zt({defines:{KERNEL_PAIRS:n.length},uniforms:{colorTexture:{value:null},invSize:{value:new lt(.5,.5)},direction:{value:new lt(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:n},gaussianWeights:{value:i}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new zt({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}};ds.BlurDirectionX=new lt(1,0);ds.BlurDirectionY=new lt(0,1);var la={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};var ul=class extends Nn{constructor(){super(),this.isOutputPass=!0,this.uniforms=ti.clone(la.uniforms),this.material=new Jr({name:la.name,uniforms:this.uniforms,vertexShader:la.vertexShader,fragmentShader:la.fragmentShader}),this._fsQuad=new er(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,r){this.uniforms.tDiffuse.value=r.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},wt.getTransfer(this._outputColorSpace)===It&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Vs?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Hs?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===Ws?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Ri?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ys?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===qs?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Xs&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}};function hv(){var s=Object.create(null);function e(n,i){var a=n.id,o=n.name,l=n.dependencies;l===void 0&&(l=[]);var c=n.init;c===void 0&&(c=function(){});var h=n.getTransferables;if(h===void 0&&(h=null),!s[a])try{l=l.map(function(u){return u&&u.isWorkerModule&&(e(u,function(f){if(f instanceof Error)throw f}),u=s[u.id].value),u}),c=r("<"+o+">.init",c),h&&(h=r("<"+o+">.getTransferables",h));var d=null;typeof c=="function"?d=c.apply(void 0,l):console.error("worker module init function failed to rehydrate"),s[a]={id:a,value:d,getTransferables:h},i(d)}catch(u){u&&u.noLog||console.error(u),i(u)}}function t(n,i){var a,o=n.id,l=n.args;(!s[o]||typeof s[o].value!="function")&&i(new Error("Worker module "+o+": not found or its 'init' did not return a function"));try{var c=(a=s[o]).value.apply(a,l);c&&typeof c.then=="function"?c.then(h,function(d){return i(d instanceof Error?d:new Error(""+d))}):h(c)}catch(d){i(d)}function h(d){try{var u=s[o].getTransferables&&s[o].getTransferables(d);(!u||!Array.isArray(u)||!u.length)&&(u=void 0),i(d,u)}catch(f){console.error(f),i(f)}}}function r(n,i){var a=void 0;self.troikaDefine=function(l){return a=l};var o=URL.createObjectURL(new Blob(["/** "+n.replace(/\*/g,"")+` **/

troikaDefine(
`+i+`
)`],{type:"application/javascript"}));try{importScripts(o)}catch(l){console.error(l)}return URL.revokeObjectURL(o),delete self.troikaDefine,a}self.addEventListener("message",function(n){var i=n.data,a=i.messageId,o=i.action,l=i.data;try{o==="registerModule"&&e(l,function(c){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:{isCallable:typeof c=="function"}})}),o==="callModule"&&t(l,function(c,h){c instanceof Error?postMessage({messageId:a,success:!1,error:c.message}):postMessage({messageId:a,success:!0,result:c},h||void 0)})}catch(c){postMessage({messageId:a,success:!1,error:c.stack})}})}function uv(s){var e=function(){for(var t=[],r=arguments.length;r--;)t[r]=arguments[r];return e._getInitResult().then(function(n){if(typeof n=="function")return n.apply(void 0,t);throw new Error("Worker module function was called but `init` did not return a callable function")})};return e._getInitResult=function(){var t=s.dependencies,r=s.init;t=Array.isArray(t)?t.map(function(i){return i&&(i=i.onMainThread||i,i._getInitResult&&(i=i._getInitResult())),i}):[];var n=Promise.all(t).then(function(i){return r.apply(null,i)});return e._getInitResult=function(){return n},n},e}var td=function(){var s=!1;if(typeof window<"u"&&typeof window.document<"u")try{var e=new Worker(URL.createObjectURL(new Blob([""],{type:"application/javascript"})));e.terminate(),s=!0}catch(t){typeof process<"u",console.log("Troika createWorkerModule: web workers not allowed; falling back to main thread execution. Cause: ["+t.message+"]")}return td=function(){return s},s},dv=0,fv=0,Xc=!1,ca=Object.create(null),ha=Object.create(null),Yc=Object.create(null);function mr(s){if((!s||typeof s.init!="function")&&!Xc)throw new Error("requires `options.init` function");var e=s.dependencies,t=s.init,r=s.getTransferables,n=s.workerId,i=uv(s);n==null&&(n="#default");var a="workerModule"+ ++dv,o=s.name||a,l=null;e=e&&e.map(function(h){return typeof h=="function"&&!h.workerModuleData&&(Xc=!0,h=mr({workerId:n,name:"<"+o+"> function dependency: "+h.name,init:`function(){return (
`+dl(h)+`
)}`}),Xc=!1),h&&h.workerModuleData&&(h=h.workerModuleData),h});function c(){for(var h=[],d=arguments.length;d--;)h[d]=arguments[d];if(!td())return i.apply(void 0,h);if(!l){l=ed(n,"registerModule",c.workerModuleData);var u=function(){l=null,ha[n].delete(u)};(ha[n]||(ha[n]=new Set)).add(u)}return l.then(function(f){var g=f.isCallable;if(g)return ed(n,"callModule",{id:a,args:h});throw new Error("Worker module function was called but `init` did not return a callable function")})}return c.workerModuleData={isWorkerModule:!0,id:a,name:o,dependencies:e,init:dl(t),getTransferables:r&&dl(r)},c.onMainThread=i,c}function nd(s){ha[s]&&ha[s].forEach(function(e){e()}),ca[s]&&(ca[s].terminate(),delete ca[s])}function dl(s){var e=s.toString();return!/^function/.test(e)&&/^\w+\s*\(/.test(e)&&(e="function "+e),e}function pv(s){var e=ca[s];if(!e){var t=dl(hv);e=ca[s]=new Worker(URL.createObjectURL(new Blob(["/** Worker Module Bootstrap: "+s.replace(/\*/g,"")+` **/

;(`+t+")()"],{type:"application/javascript"}))),e.onmessage=function(r){var n=r.data,i=n.messageId,a=Yc[i];if(!a)throw new Error("WorkerModule response with empty or unknown messageId");delete Yc[i],a(n)}}return e}function ed(s,e,t){return new Promise(function(r,n){var i=++fv;Yc[i]=function(a){a.success?r(a.result):n(new Error("Error in worker "+e+" call: "+a.error))},pv(s).postMessage({messageId:i,action:e,data:t})})}function qc(){var s=(function(e){function t(G,V,U,J,j,ae,Q,me){var B=1-Q;me.x=B*B*G+2*B*Q*U+Q*Q*j,me.y=B*B*V+2*B*Q*J+Q*Q*ae}function r(G,V,U,J,j,ae,Q,me,B,H){var de=1-B;H.x=de*de*de*G+3*de*de*B*U+3*de*B*B*j+B*B*B*Q,H.y=de*de*de*V+3*de*de*B*J+3*de*B*B*ae+B*B*B*me}function n(G,V){for(var U=/([MLQCZ])([^MLQCZ]*)/g,J,j,ae,Q,me;J=U.exec(G);){var B=J[2].replace(/^\s*|\s*$/g,"").split(/[,\s]+/).map(function(H){return parseFloat(H)});switch(J[1]){case"M":Q=j=B[0],me=ae=B[1];break;case"L":(B[0]!==Q||B[1]!==me)&&V("L",Q,me,Q=B[0],me=B[1]);break;case"Q":{V("Q",Q,me,Q=B[2],me=B[3],B[0],B[1]);break}case"C":{V("C",Q,me,Q=B[4],me=B[5],B[0],B[1],B[2],B[3]);break}case"Z":(Q!==j||me!==ae)&&V("L",Q,me,j,ae);break}}}function i(G,V,U){U===void 0&&(U=16);var J={x:0,y:0};n(G,function(j,ae,Q,me,B,H,de,we,ce){switch(j){case"L":V(ae,Q,me,B);break;case"Q":{for(var fe=ae,st=Q,Ue=1;Ue<U;Ue++)t(ae,Q,H,de,me,B,Ue/(U-1),J),V(fe,st,J.x,J.y),fe=J.x,st=J.y;break}case"C":{for(var Ee=ae,Ne=Q,Ce=1;Ce<U;Ce++)r(ae,Q,H,de,we,ce,me,B,Ce/(U-1),J),V(Ee,Ne,J.x,J.y),Ee=J.x,Ne=J.y;break}}})}var a="precision highp float;attribute vec2 aUV;varying vec2 vUV;void main(){vUV=aUV;gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",o="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){gl_FragColor=texture2D(tex,vUV);}",l=new WeakMap,c={premultipliedAlpha:!1,preserveDrawingBuffer:!0,antialias:!1,depth:!1};function h(G,V){var U=G.getContext?G.getContext("webgl",c):G,J=l.get(U);if(!J){let de=function(Ee){var Ne=ae[Ee];if(!Ne&&(Ne=ae[Ee]=U.getExtension(Ee),!Ne))throw new Error(Ee+" not supported");return Ne},we=function(Ee,Ne){var Ce=U.createShader(Ne);return U.shaderSource(Ce,Ee),U.compileShader(Ce),Ce},ce=function(Ee,Ne,Ce,_e){if(!Q[Ee]){var Ge={},qe={},pe=U.createProgram();U.attachShader(pe,we(Ne,U.VERTEX_SHADER)),U.attachShader(pe,we(Ce,U.FRAGMENT_SHADER)),U.linkProgram(pe),Q[Ee]={program:pe,transaction:function(L){U.useProgram(pe),L({setUniform:function(be,D){for(var _=[],k=arguments.length-2;k-- >0;)_[k]=arguments[k+2];var W=qe[D]||(qe[D]=U.getUniformLocation(pe,D));U["uniform"+be].apply(U,[W].concat(_))},setAttribute:function(be,D,_,k,W){var ee=Ge[be];ee||(ee=Ge[be]={buf:U.createBuffer(),loc:U.getAttribLocation(pe,be),data:null}),U.bindBuffer(U.ARRAY_BUFFER,ee.buf),U.vertexAttribPointer(ee.loc,D,U.FLOAT,!1,0,0),U.enableVertexAttribArray(ee.loc),j?U.vertexAttribDivisor(ee.loc,k):de("ANGLE_instanced_arrays").vertexAttribDivisorANGLE(ee.loc,k),W!==ee.data&&(U.bufferData(U.ARRAY_BUFFER,W,_),ee.data=W)}})}}}Q[Ee].transaction(_e)},fe=function(Ee,Ne){B++;try{U.activeTexture(U.TEXTURE0+B);var Ce=me[Ee];Ce||(Ce=me[Ee]=U.createTexture(),U.bindTexture(U.TEXTURE_2D,Ce),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MIN_FILTER,U.NEAREST),U.texParameteri(U.TEXTURE_2D,U.TEXTURE_MAG_FILTER,U.NEAREST)),U.bindTexture(U.TEXTURE_2D,Ce),Ne(Ce,B)}finally{B--}},st=function(Ee,Ne,Ce){var _e=U.createFramebuffer();H.push(_e),U.bindFramebuffer(U.FRAMEBUFFER,_e),U.activeTexture(U.TEXTURE0+Ne),U.bindTexture(U.TEXTURE_2D,Ee),U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Ee,0);try{Ce(_e)}finally{U.deleteFramebuffer(_e),U.bindFramebuffer(U.FRAMEBUFFER,H[--H.length-1]||null)}},Ue=function(){ae={},Q={},me={},B=-1,H.length=0};var j=typeof WebGL2RenderingContext<"u"&&U instanceof WebGL2RenderingContext,ae={},Q={},me={},B=-1,H=[];U.canvas.addEventListener("webglcontextlost",function(Ee){Ue(),Ee.preventDefault()},!1),l.set(U,J={gl:U,isWebGL2:j,getExtension:de,withProgram:ce,withTexture:fe,withTextureFramebuffer:st,handleContextLoss:Ue})}V(J)}function d(G,V,U,J,j,ae,Q,me){Q===void 0&&(Q=15),me===void 0&&(me=null),h(G,function(B){var H=B.gl,de=B.withProgram,we=B.withTexture;we("copy",function(ce,fe){H.texImage2D(H.TEXTURE_2D,0,H.RGBA,j,ae,0,H.RGBA,H.UNSIGNED_BYTE,V),de("copy",a,o,function(st){var Ue=st.setUniform,Ee=st.setAttribute;Ee("aUV",2,H.STATIC_DRAW,0,new Float32Array([0,0,2,0,0,2])),Ue("1i","image",fe),H.bindFramebuffer(H.FRAMEBUFFER,me||null),H.disable(H.BLEND),H.colorMask(Q&8,Q&4,Q&2,Q&1),H.viewport(U,J,j,ae),H.scissor(U,J,j,ae),H.drawArrays(H.TRIANGLES,0,3)})})})}function u(G,V,U){var J=G.width,j=G.height;h(G,function(ae){var Q=ae.gl,me=new Uint8Array(J*j*4);Q.readPixels(0,0,J,j,Q.RGBA,Q.UNSIGNED_BYTE,me),G.width=V,G.height=U,d(Q,me,0,0,J,j)})}var f=Object.freeze({__proto__:null,withWebGLContext:h,renderImageData:d,resizeWebGLCanvasWithoutClearing:u});function g(G,V,U,J,j,ae){ae===void 0&&(ae=1);var Q=new Uint8Array(G*V),me=J[2]-J[0],B=J[3]-J[1],H=[];i(U,function(Ee,Ne,Ce,_e){H.push({x1:Ee,y1:Ne,x2:Ce,y2:_e,minX:Math.min(Ee,Ce),minY:Math.min(Ne,_e),maxX:Math.max(Ee,Ce),maxY:Math.max(Ne,_e)})}),H.sort(function(Ee,Ne){return Ee.maxX-Ne.maxX});for(var de=0;de<G;de++)for(var we=0;we<V;we++){var ce=st(J[0]+me*(de+.5)/G,J[1]+B*(we+.5)/V),fe=Math.pow(1-Math.abs(ce)/j,ae)/2;ce<0&&(fe=1-fe),fe=Math.max(0,Math.min(255,Math.round(fe*255))),Q[we*G+de]=fe}return Q;function st(Ee,Ne){for(var Ce=1/0,_e=1/0,Ge=H.length;Ge--;){var qe=H[Ge];if(qe.maxX+_e<=Ee)break;if(Ee+_e>qe.minX&&Ne-_e<qe.maxY&&Ne+_e>qe.minY){var pe=m(Ee,Ne,qe.x1,qe.y1,qe.x2,qe.y2);pe<Ce&&(Ce=pe,_e=Math.sqrt(Ce))}}return Ue(Ee,Ne)&&(_e=-_e),_e}function Ue(Ee,Ne){for(var Ce=0,_e=H.length;_e--;){var Ge=H[_e];if(Ge.maxX<=Ee)break;var qe=Ge.y1>Ne!=Ge.y2>Ne&&Ee<(Ge.x2-Ge.x1)*(Ne-Ge.y1)/(Ge.y2-Ge.y1)+Ge.x1;qe&&(Ce+=Ge.y1<Ge.y2?1:-1)}return Ce!==0}}function x(G,V,U,J,j,ae,Q,me,B,H){ae===void 0&&(ae=1),me===void 0&&(me=0),B===void 0&&(B=0),H===void 0&&(H=0),p(G,V,U,J,j,ae,Q,null,me,B,H)}function p(G,V,U,J,j,ae,Q,me,B,H,de){ae===void 0&&(ae=1),B===void 0&&(B=0),H===void 0&&(H=0),de===void 0&&(de=0);for(var we=g(G,V,U,J,j,ae),ce=new Uint8Array(we.length*4),fe=0;fe<we.length;fe++)ce[fe*4+de]=we[fe];d(Q,ce,B,H,G,V,1<<3-de,me)}function m(G,V,U,J,j,ae){var Q=j-U,me=ae-J,B=Q*Q+me*me,H=B?Math.max(0,Math.min(1,((G-U)*Q+(V-J)*me)/B)):0,de=G-(U+H*Q),we=V-(J+H*me);return de*de+we*we}var S=Object.freeze({__proto__:null,generate:g,generateIntoCanvas:x,generateIntoFramebuffer:p}),E="precision highp float;uniform vec4 uGlyphBounds;attribute vec2 aUV;attribute vec4 aLineSegment;varying vec4 vLineSegment;varying vec2 vGlyphXY;void main(){vLineSegment=aLineSegment;vGlyphXY=mix(uGlyphBounds.xy,uGlyphBounds.zw,aUV);gl_Position=vec4(mix(vec2(-1.0),vec2(1.0),aUV),0.0,1.0);}",y="precision highp float;uniform vec4 uGlyphBounds;uniform float uMaxDistance;uniform float uExponent;varying vec4 vLineSegment;varying vec2 vGlyphXY;float absDistToSegment(vec2 point,vec2 lineA,vec2 lineB){vec2 lineDir=lineB-lineA;float lenSq=dot(lineDir,lineDir);float t=lenSq==0.0 ? 0.0 : clamp(dot(point-lineA,lineDir)/lenSq,0.0,1.0);vec2 linePt=lineA+t*lineDir;return distance(point,linePt);}void main(){vec4 seg=vLineSegment;vec2 p=vGlyphXY;float dist=absDistToSegment(p,seg.xy,seg.zw);float val=pow(1.0-clamp(dist/uMaxDistance,0.0,1.0),uExponent)*0.5;bool crossing=(seg.y>p.y!=seg.w>p.y)&&(p.x<(seg.z-seg.x)*(p.y-seg.y)/(seg.w-seg.y)+seg.x);bool crossingUp=crossing&&vLineSegment.y<vLineSegment.w;gl_FragColor=vec4(crossingUp ? 1.0/255.0 : 0.0,crossing&&!crossingUp ? 1.0/255.0 : 0.0,0.0,val);}",b="precision highp float;uniform sampler2D tex;varying vec2 vUV;void main(){vec4 color=texture2D(tex,vUV);bool inside=color.r!=color.g;float val=inside ? 1.0-color.a : color.a;gl_FragColor=vec4(val);}",M=new Float32Array([0,0,2,0,0,2]),A=null,v=!1,T={},I=new WeakMap;function P(G){if(!v&&!O(G))throw new Error("WebGL generation not supported")}function C(G,V,U,J,j,ae,Q){if(ae===void 0&&(ae=1),Q===void 0&&(Q=null),!Q&&(Q=A,!Q)){var me=typeof OffscreenCanvas=="function"?new OffscreenCanvas(1,1):typeof document<"u"?document.createElement("canvas"):null;if(!me)throw new Error("OffscreenCanvas or DOM canvas not supported");Q=A=me.getContext("webgl",{depth:!1})}P(Q);var B=new Uint8Array(G*V*4);h(Q,function(ce){var fe=ce.gl,st=ce.withTexture,Ue=ce.withTextureFramebuffer;st("readable",function(Ee,Ne){fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,G,V,0,fe.RGBA,fe.UNSIGNED_BYTE,null),Ue(Ee,Ne,function(Ce){R(G,V,U,J,j,ae,fe,Ce,0,0,0),fe.readPixels(0,0,G,V,fe.RGBA,fe.UNSIGNED_BYTE,B)})})});for(var H=new Uint8Array(G*V),de=0,we=0;de<B.length;de+=4)H[we++]=B[de];return H}function N(G,V,U,J,j,ae,Q,me,B,H){ae===void 0&&(ae=1),me===void 0&&(me=0),B===void 0&&(B=0),H===void 0&&(H=0),R(G,V,U,J,j,ae,Q,null,me,B,H)}function R(G,V,U,J,j,ae,Q,me,B,H,de){ae===void 0&&(ae=1),B===void 0&&(B=0),H===void 0&&(H=0),de===void 0&&(de=0),P(Q);var we=[];i(U,function(ce,fe,st,Ue){we.push(ce,fe,st,Ue)}),we=new Float32Array(we),h(Q,function(ce){var fe=ce.gl,st=ce.isWebGL2,Ue=ce.getExtension,Ee=ce.withProgram,Ne=ce.withTexture,Ce=ce.withTextureFramebuffer,_e=ce.handleContextLoss;if(Ne("rawDistances",function(Ge,qe){(G!==Ge._lastWidth||V!==Ge._lastHeight)&&fe.texImage2D(fe.TEXTURE_2D,0,fe.RGBA,Ge._lastWidth=G,Ge._lastHeight=V,0,fe.RGBA,fe.UNSIGNED_BYTE,null),Ee("main",E,y,function(pe){var $e=pe.setAttribute,L=pe.setUniform,Se=!st&&Ue("ANGLE_instanced_arrays"),be=!st&&Ue("EXT_blend_minmax");$e("aUV",2,fe.STATIC_DRAW,0,M),$e("aLineSegment",4,fe.DYNAMIC_DRAW,1,we),L.apply(void 0,["4f","uGlyphBounds"].concat(J)),L("1f","uMaxDistance",j),L("1f","uExponent",ae),Ce(Ge,qe,function(D){fe.enable(fe.BLEND),fe.colorMask(!0,!0,!0,!0),fe.viewport(0,0,G,V),fe.scissor(0,0,G,V),fe.blendFunc(fe.ONE,fe.ONE),fe.blendEquationSeparate(fe.FUNC_ADD,st?fe.MAX:be.MAX_EXT),fe.clear(fe.COLOR_BUFFER_BIT),st?fe.drawArraysInstanced(fe.TRIANGLES,0,3,we.length/4):Se.drawArraysInstancedANGLE(fe.TRIANGLES,0,3,we.length/4)})}),Ee("post",a,b,function(pe){pe.setAttribute("aUV",2,fe.STATIC_DRAW,0,M),pe.setUniform("1i","tex",qe),fe.bindFramebuffer(fe.FRAMEBUFFER,me),fe.disable(fe.BLEND),fe.colorMask(de===0,de===1,de===2,de===3),fe.viewport(B,H,G,V),fe.scissor(B,H,G,V),fe.drawArrays(fe.TRIANGLES,0,3)})}),fe.isContextLost())throw _e(),new Error("webgl context lost")})}function O(G){var V=!G||G===A?T:G.canvas||G,U=I.get(V);if(U===void 0){v=!0;var J=null;try{var j=[97,106,97,61,99,137,118,80,80,118,137,99,61,97,106,97],ae=C(4,4,"M8,8L16,8L24,24L16,24Z",[0,0,32,32],24,1,G);U=ae&&j.length===ae.length&&ae.every(function(Q,me){return Q===j[me]}),U||(J="bad trial run results",console.info(j,ae))}catch(Q){U=!1,J=Q.message}J&&console.warn("WebGL SDF generation not supported:",J),v=!1,I.set(V,U)}return U}var z=Object.freeze({__proto__:null,generate:C,generateIntoCanvas:N,generateIntoFramebuffer:R,isSupported:O});function K(G,V,U,J,j,ae){j===void 0&&(j=Math.max(J[2]-J[0],J[3]-J[1])/2),ae===void 0&&(ae=1);try{return C.apply(z,arguments)}catch(Q){return console.info("WebGL SDF generation failed, falling back to JS",Q),g.apply(S,arguments)}}function re(G,V,U,J,j,ae,Q,me,B,H){j===void 0&&(j=Math.max(J[2]-J[0],J[3]-J[1])/2),ae===void 0&&(ae=1),me===void 0&&(me=0),B===void 0&&(B=0),H===void 0&&(H=0);try{return N.apply(z,arguments)}catch(de){return console.info("WebGL SDF generation failed, falling back to JS",de),x.apply(S,arguments)}}return e.forEachPathCommand=n,e.generate=K,e.generateIntoCanvas=re,e.javascript=S,e.pathToLineSegments=i,e.webgl=z,e.webglUtils=f,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}function id(){var s=(function(e){var t={R:"13k,1a,2,3,3,2+1j,ch+16,a+1,5+2,2+n,5,a,4,6+16,4+3,h+1b,4mo,179q,2+9,2+11,2i9+7y,2+68,4,3+4,5+13,4+3,2+4k,3+29,8+cf,1t+7z,w+17,3+3m,1t+3z,16o1+5r,8+30,8+mc,29+1r,29+4v,75+73",EN:"1c+9,3d+1,6,187+9,513,4+5,7+9,sf+j,175h+9,qw+q,161f+1d,4xt+a,25i+9",ES:"17,2,6dp+1,f+1,av,16vr,mx+1,4o,2",ET:"z+2,3h+3,b+1,ym,3e+1,2o,p4+1,8,6u,7c,g6,1wc,1n9+4,30+1b,2n,6d,qhx+1,h0m,a+1,49+2,63+1,4+1,6bb+3,12jj",AN:"16o+5,2j+9,2+1,35,ed,1ff2+9,87+u",CS:"18,2+1,b,2u,12k,55v,l,17v0,2,3,53,2+1,b",B:"a,3,f+2,2v,690",S:"9,2,k",WS:"c,k,4f4,1vk+a,u,1j,335",ON:"x+1,4+4,h+5,r+5,r+3,z,5+3,2+1,2+1,5,2+2,3+4,o,w,ci+1,8+d,3+d,6+8,2+g,39+1,9,6+1,2,33,b8,3+1,3c+1,7+1,5r,b,7h+3,sa+5,2,3i+6,jg+3,ur+9,2v,ij+1,9g+9,7+a,8m,4+1,49+x,14u,2+2,c+2,e+2,e+2,e+1,i+n,e+e,2+p,u+2,e+2,36+1,2+3,2+1,b,2+2,6+5,2,2,2,h+1,5+4,6+3,3+f,16+2,5+3l,3+81,1y+p,2+40,q+a,m+13,2r+ch,2+9e,75+hf,3+v,2+2w,6e+5,f+6,75+2a,1a+p,2+2g,d+5x,r+b,6+3,4+o,g,6+1,6+2,2k+1,4,2j,5h+z,1m+1,1e+f,t+2,1f+e,d+3,4o+3,2s+1,w,535+1r,h3l+1i,93+2,2s,b+1,3l+x,2v,4g+3,21+3,kz+1,g5v+1,5a,j+9,n+v,2,3,2+8,2+1,3+2,2,3,46+1,4+4,h+5,r+5,r+a,3h+2,4+6,b+4,78,1r+24,4+c,4,1hb,ey+6,103+j,16j+c,1ux+7,5+g,fsh,jdq+1t,4,57+2e,p1,1m,1m,1m,1m,4kt+1,7j+17,5+2r,d+e,3+e,2+e,2+10,m+4,w,1n+5,1q,4z+5,4b+rb,9+c,4+c,4+37,d+2g,8+b,l+b,5+1j,9+9,7+13,9+t,3+1,27+3c,2+29,2+3q,d+d,3+4,4+2,6+6,a+o,8+6,a+2,e+6,16+42,2+1i",BN:"0+8,6+d,2s+5,2+p,e,4m9,1kt+2,2b+5,5+5,17q9+v,7k,6p+8,6+1,119d+3,440+7,96s+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+1,1ekf+75,6p+2rz,1ben+1,1ekf+1,1ekf+1",NSM:"lc+33,7o+6,7c+18,2,2+1,2+1,2,21+a,1d+k,h,2u+6,3+5,3+1,2+3,10,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,g+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+g,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,k1+w,2db+2,3y,2p+v,ff+3,30+1,n9x+3,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,r2,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+5,3+1,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2d+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,f0c+4,1o+6,t5,1s+3,2a,f5l+1,43t+2,i+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,gzhy+6n",AL:"16w,3,2,e+1b,z+2,2+2s,g+1,8+1,b+m,2+t,s+2i,c+e,4h+f,1d+1e,1bwe+dp,3+3z,x+c,2+1,35+3y,2rm+z,5+7,b+5,dt+l,c+u,17nl+27,1t+27,4x+6n,3+d",LRO:"6ct",RLO:"6cu",LRE:"6cq",RLE:"6cr",PDF:"6cs",LRI:"6ee",RLI:"6ef",FSI:"6eg",PDI:"6eh"},r={},n={};r.L=1,n[1]="L",Object.keys(t).forEach(function(_e,Ge){r[_e]=1<<Ge+1,n[r[_e]]=_e}),Object.freeze(r);var i=r.LRI|r.RLI|r.FSI,a=r.L|r.R|r.AL,o=r.B|r.S|r.WS|r.ON|r.FSI|r.LRI|r.RLI|r.PDI,l=r.BN|r.RLE|r.LRE|r.RLO|r.LRO|r.PDF,c=r.S|r.WS|r.B|i|r.PDI|l,h=null;function d(){if(!h){h=new Map;var _e=0;for(var Ge in t)if(t.hasOwnProperty(Ge))for(var qe=t[Ge],pe="",$e=void 0,L=!1,Se=0,be=0;be<=qe.length+1;be+=1){var D=qe[be];if(D!==","&&be!==qe.length)D==="+"?(L=!0,Se=_e=Se+parseInt(pe,36),pe=""):pe+=D;else{L?$e=_e+parseInt(pe,36):(Se=_e=Se+parseInt(pe,36),$e=_e),L=!1,pe="",Se=$e;for(var _=_e;_<$e+1;_+=1)h.set(_,r[Ge])}}}}function u(_e){return d(),h.get(_e.codePointAt(0))||r.L}function f(_e){return n[u(_e)]}var g={pairs:"14>1,1e>2,u>2,2wt>1,1>1,1ge>1,1wp>1,1j>1,f>1,hm>1,1>1,u>1,u6>1,1>1,+5,28>1,w>1,1>1,+3,b8>1,1>1,+3,1>3,-1>-1,3>1,1>1,+2,1s>1,1>1,x>1,th>1,1>1,+2,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,4q>1,1e>2,u>2,2>1,+1",canonical:"6f1>-6dx,6dy>-6dx,6ec>-6ed,6ee>-6ed,6ww>2jj,-2ji>2jj,14r4>-1e7l,1e7m>-1e7l,1e7m>-1e5c,1e5d>-1e5b,1e5c>-14qx,14qy>-14qx,14vn>-1ecg,1ech>-1ecg,1edu>-1ecg,1eci>-1ecg,1eda>-1ecg,1eci>-1ecg,1eci>-168q,168r>-168q,168s>-14ye,14yf>-14ye"};function x(_e,Ge){var qe=36,pe=0,$e=new Map,L=Ge&&new Map,Se;return _e.split(",").forEach(function be(D){if(D.indexOf("+")!==-1)for(var _=+D;_--;)be(Se);else{Se=D;var k=D.split(">"),W=k[0],ee=k[1];W=String.fromCodePoint(pe+=parseInt(W,qe)),ee=String.fromCodePoint(pe+=parseInt(ee,qe)),$e.set(W,ee),Ge&&L.set(ee,W)}}),{map:$e,reverseMap:L}}var p,m,S;function E(){if(!p){var _e=x(g.pairs,!0),Ge=_e.map,qe=_e.reverseMap;p=Ge,m=qe,S=x(g.canonical,!1).map}}function y(_e){return E(),p.get(_e)||null}function b(_e){return E(),m.get(_e)||null}function M(_e){return E(),S.get(_e)||null}var A=r.L,v=r.R,T=r.EN,I=r.ES,P=r.ET,C=r.AN,N=r.CS,R=r.B,O=r.S,z=r.ON,K=r.BN,re=r.NSM,G=r.AL,V=r.LRO,U=r.RLO,J=r.LRE,j=r.RLE,ae=r.PDF,Q=r.LRI,me=r.RLI,B=r.FSI,H=r.PDI;function de(_e,Ge){for(var qe=125,pe=new Uint32Array(_e.length),$e=0;$e<_e.length;$e++)pe[$e]=u(_e[$e]);var L=new Map;function Se(Sn,Yn){var bn=pe[Sn];pe[Sn]=Yn,L.set(bn,L.get(bn)-1),bn&o&&L.set(o,L.get(o)-1),L.set(Yn,(L.get(Yn)||0)+1),Yn&o&&L.set(o,(L.get(o)||0)+1)}for(var be=new Uint8Array(_e.length),D=new Map,_=[],k=null,W=0;W<_e.length;W++)k||_.push(k={start:W,end:_e.length-1,level:Ge==="rtl"?1:Ge==="ltr"?0:uh(W,!1)}),pe[W]&R&&(k.end=W,k=null);for(var ee=j|J|U|V|i|H|ae|R,ye=function(Sn){return Sn+(Sn&1?1:2)},Me=function(Sn){return Sn+(Sn&1?2:1)},$=0;$<_.length;$++){k=_[$];var se=[{_level:k.level,_override:0,_isolate:0}],ue=void 0,Be=0,Te=0,xe=0;L.clear();for(var Fe=k.start;Fe<=k.end;Fe++){var Pe=pe[Fe];if(ue=se[se.length-1],L.set(Pe,(L.get(Pe)||0)+1),Pe&o&&L.set(o,(L.get(o)||0)+1),Pe&ee)if(Pe&(j|J)){be[Fe]=ue._level;var Ke=(Pe===j?Me:ye)(ue._level);Ke<=qe&&!Be&&!Te?se.push({_level:Ke,_override:0,_isolate:0}):Be||Te++}else if(Pe&(U|V)){be[Fe]=ue._level;var X=(Pe===U?Me:ye)(ue._level);X<=qe&&!Be&&!Te?se.push({_level:X,_override:Pe&U?v:A,_isolate:0}):Be||Te++}else if(Pe&i){Pe&B&&(Pe=uh(Fe+1,!0)===1?me:Q),be[Fe]=ue._level,ue._override&&Se(Fe,ue._override);var ve=(Pe===me?Me:ye)(ue._level);ve<=qe&&Be===0&&Te===0?(xe++,se.push({_level:ve,_override:0,_isolate:1,_isolInitIndex:Fe})):Be++}else if(Pe&H){if(Be>0)Be--;else if(xe>0){for(Te=0;!se[se.length-1]._isolate;)se.pop();var ie=se[se.length-1]._isolInitIndex;ie!=null&&(D.set(ie,Fe),D.set(Fe,ie)),se.pop(),xe--}ue=se[se.length-1],be[Fe]=ue._level,ue._override&&Se(Fe,ue._override)}else Pe&ae?(Be===0&&(Te>0?Te--:!ue._isolate&&se.length>1&&(se.pop(),ue=se[se.length-1])),be[Fe]=ue._level):Pe&R&&(be[Fe]=k.level);else be[Fe]=ue._level,ue._override&&Pe!==K&&Se(Fe,ue._override)}for(var Ae=[],Ie=null,le=k.start;le<=k.end;le++){var Ve=pe[le];if(!(Ve&l)){var Xe=be[le],gt=Ve&i,ut=Ve===H;Ie&&Xe===Ie._level?(Ie._end=le,Ie._endsWithIsolInit=gt):Ae.push(Ie={_start:le,_end:le,_level:Xe,_startsWithPDI:ut,_endsWithIsolInit:gt})}}for(var Et=[],Ft=0;Ft<Ae.length;Ft++){var _n=Ae[Ft];if(!_n._startsWithPDI||_n._startsWithPDI&&!D.has(_n._start)){for(var Tn=[Ie=_n],An=void 0;Ie&&Ie._endsWithIsolInit&&(An=D.get(Ie._end))!=null;)for(var Gt=Ft+1;Gt<Ae.length;Gt++)if(Ae[Gt]._start===An){Tn.push(Ie=Ae[Gt]);break}for(var nn=[],yn=0;yn<Tn.length;yn++)for(var ln=Tn[yn],Dt=ln._start;Dt<=ln._end;Dt++)nn.push(Dt);for(var Di=be[nn[0]],Xt=k.level,ri=nn[0]-1;ri>=0;ri--)if(!(pe[ri]&l)){Xt=be[ri];break}var On=nn[nn.length-1],si=be[On],cn=k.level;if(!(pe[On]&i)){for(var En=On+1;En<=k.end;En++)if(!(pe[En]&l)){cn=be[En];break}}Et.push({_seqIndices:nn,_sosType:Math.max(Xt,Di)%2?v:A,_eosType:Math.max(cn,si)%2?v:A})}}for(var ai=0;ai<Et.length;ai++){var pn=Et[ai],et=pn._seqIndices,oi=pn._sosType,li=pn._eosType,Xn=be[et[0]]&1?v:A;if(L.get(re))for(var w=0;w<et.length;w++){var Y=et[w];if(pe[Y]&re){for(var oe=oi,te=w-1;te>=0;te--)if(!(pe[et[te]]&l)){oe=pe[et[te]];break}Se(Y,oe&(i|H)?z:oe)}}if(L.get(T))for(var ne=0;ne<et.length;ne++){var We=et[ne];if(pe[We]&T)for(var Ye=ne-1;Ye>=-1;Ye--){var ke=Ye===-1?oi:pe[et[Ye]];if(ke&a){ke===G&&Se(We,C);break}}}if(L.get(G))for(var Qe=0;Qe<et.length;Qe++){var nt=et[Qe];pe[nt]&G&&Se(nt,v)}if(L.get(I)||L.get(N))for(var ct=1;ct<et.length-1;ct++){var vt=et[ct];if(pe[vt]&(I|N)){for(var je=0,Tt=0,Nt=ct-1;Nt>=0&&(je=pe[et[Nt]],!!(je&l));Nt--);for(var Pt=ct+1;Pt<et.length&&(Tt=pe[et[Pt]],!!(Tt&l));Pt++);je===Tt&&(pe[vt]===I?je===T:je&(T|C))&&Se(vt,je)}}if(L.get(T))for(var F=0;F<et.length;F++){var ge=et[F];if(pe[ge]&T){for(var q=F-1;q>=0&&pe[et[q]]&(P|l);q--)Se(et[q],T);for(F++;F<et.length&&pe[et[F]]&(P|l|T);F++)pe[et[F]]!==T&&Se(et[F],T)}}if(L.get(P)||L.get(I)||L.get(N))for(var Oe=0;Oe<et.length;Oe++){var Re=et[Oe];if(pe[Re]&(P|I|N)){Se(Re,z);for(var he=Oe-1;he>=0&&pe[et[he]]&l;he--)Se(et[he],z);for(var at=Oe+1;at<et.length&&pe[et[at]]&l;at++)Se(et[at],z)}}if(L.get(T))for(var ht=0,De=oi;ht<et.length;ht++){var tt=et[ht],Le=pe[tt];Le&T?De===A&&Se(tt,A):Le&a&&(De=Le)}if(L.get(o)){var it=v|T|C,Ze=it|A,rt=[];{for(var He=[],dt=0;dt<et.length;dt++)if(pe[et[dt]]&o){var At=_e[et[dt]],hn=void 0;if(y(At)!==null)if(He.length<63)He.push({char:At,seqIndex:dt});else break;else if((hn=b(At))!==null)for(var rn=He.length-1;rn>=0;rn--){var Ui=He[rn].char;if(Ui===hn||Ui===b(M(At))||y(M(Ui))===At){rt.push([He[rn].seqIndex,dt]),He.length=rn;break}}}rt.sort(function(Sn,Yn){return Sn[0]-Yn[0]})}for(var Cn=0;Cn<rt.length;Cn++){for(var ot=rt[Cn],bt=ot[0],Rt=ot[1],St=!1,xt=0,Vt=bt+1;Vt<Rt;Vt++){var Kt=et[Vt];if(pe[Kt]&Ze){St=!0;var Bn=pe[Kt]&it?v:A;if(Bn===Xn){xt=Bn;break}}}if(St&&!xt){xt=oi;for(var ci=bt-1;ci>=0;ci--){var oh=et[ci];if(pe[oh]&Ze){var lh=pe[oh]&it?v:A;lh!==Xn?xt=lh:xt=Xn;break}}}if(xt){if(pe[et[bt]]=pe[et[Rt]]=xt,xt!==Xn){for(var ms=bt+1;ms<et.length;ms++)if(!(pe[et[ms]]&l)){u(_e[et[ms]])&re&&(pe[et[ms]]=xt);break}}if(xt!==Xn){for(var gs=Rt+1;gs<et.length;gs++)if(!(pe[et[gs]]&l)){u(_e[et[gs]])&re&&(pe[et[gs]]=xt);break}}}}for(var Li=0;Li<et.length;Li++)if(pe[et[Li]]&o){for(var ch=Li,Sl=Li,bl=oi,vs=Li-1;vs>=0;vs--)if(pe[et[vs]]&l)ch=vs;else{bl=pe[et[vs]]&it?v:A;break}for(var hh=li,_s=Li+1;_s<et.length;_s++)if(pe[et[_s]]&(o|l))Sl=_s;else{hh=pe[et[_s]]&it?v:A;break}for(var Ml=ch;Ml<=Sl;Ml++)pe[et[Ml]]=bl===hh?bl:Xn;Li=Sl}}}for(var Rn=k.start;Rn<=k.end;Rn++){var Dd=be[Rn],pa=pe[Rn];if(Dd&1?pa&(A|T|C)&&be[Rn]++:pa&v?be[Rn]++:pa&(C|T)&&(be[Rn]+=2),pa&l&&(be[Rn]=Rn===0?k.level:be[Rn-1]),Rn===k.end||u(_e[Rn])&(O|R))for(var ma=Rn;ma>=0&&u(_e[ma])&c;ma--)be[ma]=k.level}}return{levels:be,paragraphs:_};function uh(Sn,Yn){for(var bn=Sn;bn<_e.length;bn++){var Fi=pe[bn];if(Fi&(v|G))return 1;if(Fi&(R|A)||Yn&&Fi===H)return 0;if(Fi&i){var dh=Ud(bn);bn=dh===-1?_e.length:dh}}return 0}function Ud(Sn){for(var Yn=1,bn=Sn+1;bn<_e.length;bn++){var Fi=pe[bn];if(Fi&R)break;if(Fi&H){if(--Yn===0)return bn}else Fi&i&&Yn++}return-1}}var we="14>1,j>2,t>2,u>2,1a>g,2v3>1,1>1,1ge>1,1wd>1,b>1,1j>1,f>1,ai>3,-2>3,+1,8>1k0,-1jq>1y7,-1y6>1hf,-1he>1h6,-1h5>1ha,-1h8>1qi,-1pu>1,6>3u,-3s>7,6>1,1>1,f>1,1>1,+2,3>1,1>1,+13,4>1,1>1,6>1eo,-1ee>1,3>1mg,-1me>1mk,-1mj>1mi,-1mg>1mi,-1md>1,1>1,+2,1>10k,-103>1,1>1,4>1,5>1,1>1,+10,3>1,1>8,-7>8,+1,-6>7,+1,a>1,1>1,u>1,u6>1,1>1,+5,26>1,1>1,2>1,2>2,8>1,7>1,4>1,1>1,+5,b8>1,1>1,+3,1>3,-2>1,2>1,1>1,+2,c>1,3>1,1>1,+2,h>1,3>1,a>1,1>1,2>1,3>1,1>1,d>1,f>1,3>1,1a>1,1>1,6>1,7>1,13>1,k>1,1>1,+19,4>1,1>1,+2,2>1,1>1,+18,m>1,a>1,1>1,lk>1,1>1,4>1,2>1,f>1,3>1,1>1,+3,db>1,1>1,+3,3>1,1>1,+2,14qm>1,1>1,+1,6>1,4j>1,j>2,t>2,u>2,2>1,+1",ce;function fe(){if(!ce){var _e=x(we,!0),Ge=_e.map,qe=_e.reverseMap;qe.forEach(function(pe,$e){Ge.set($e,pe)}),ce=Ge}}function st(_e){return fe(),ce.get(_e)||null}function Ue(_e,Ge,qe,pe){var $e=_e.length;qe=Math.max(0,qe==null?0:+qe),pe=Math.min($e-1,pe==null?$e-1:+pe);for(var L=new Map,Se=qe;Se<=pe;Se++)if(Ge[Se]&1){var be=st(_e[Se]);be!==null&&L.set(Se,be)}return L}function Ee(_e,Ge,qe,pe){var $e=_e.length;qe=Math.max(0,qe==null?0:+qe),pe=Math.min($e-1,pe==null?$e-1:+pe);var L=[];return Ge.paragraphs.forEach(function(Se){var be=Math.max(qe,Se.start),D=Math.min(pe,Se.end);if(be<D){for(var _=Ge.levels.slice(be,D+1),k=D;k>=be&&u(_e[k])&c;k--)_[k]=Se.level;for(var W=Se.level,ee=1/0,ye=0;ye<_.length;ye++){var Me=_[ye];Me>W&&(W=Me),Me<ee&&(ee=Me|1)}for(var $=W;$>=ee;$--)for(var se=0;se<_.length;se++)if(_[se]>=$){for(var ue=se;se+1<_.length&&_[se+1]>=$;)se++;se>ue&&L.push([ue+be,se+be])}}}),L}function Ne(_e,Ge,qe,pe){var $e=Ce(_e,Ge,qe,pe),L=[].concat(_e);return $e.forEach(function(Se,be){L[be]=(Ge.levels[Se]&1?st(_e[Se]):null)||_e[Se]}),L.join("")}function Ce(_e,Ge,qe,pe){for(var $e=Ee(_e,Ge,qe,pe),L=[],Se=0;Se<_e.length;Se++)L[Se]=Se;return $e.forEach(function(be){for(var D=be[0],_=be[1],k=L.slice(D,_+1),W=k.length;W--;)L[_-W]=k[W]}),L}return e.closingToOpeningBracket=b,e.getBidiCharType=u,e.getBidiCharTypeName=f,e.getCanonicalBracket=M,e.getEmbeddingLevels=de,e.getMirroredCharacter=st,e.getMirroredCharactersMap=Ue,e.getReorderSegments=Ee,e.getReorderedIndices=Ce,e.getReorderedString=Ne,e.openingToClosingBracket=y,Object.defineProperty(e,"__esModule",{value:!0}),e})({});return s}var Jc=/\bvoid\s+main\s*\(\s*\)\s*{/g;function Zc(s){let e=/^[ \t]*#include +<([\w\d./]+)>/gm;function t(r,n){let i=yt[n];return i?Zc(i):r}return s.replace(e,t)}var fn=[];for(let s=0;s<256;s++)fn[s]=(s<16?"0":"")+s.toString(16);function mv(){let s=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(fn[s&255]+fn[s>>8&255]+fn[s>>16&255]+fn[s>>24&255]+"-"+fn[e&255]+fn[e>>8&255]+"-"+fn[e>>16&15|64]+fn[e>>24&255]+"-"+fn[t&63|128]+fn[t>>8&255]+"-"+fn[t>>16&255]+fn[t>>24&255]+fn[r&255]+fn[r>>8&255]+fn[r>>16&255]+fn[r>>24&255]).toUpperCase()}var gr=Object.assign||function(){let s=arguments[0];for(let e=1,t=arguments.length;e<t;e++){let r=arguments[e];if(r)for(let n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},gv=Date.now(),rd=new WeakMap,sd=new Map,vv=1e10;function fl(s,e){let t=Sv(e),r=rd.get(s);if(r||rd.set(s,r=Object.create(null)),r[t])return new r[t];let n=`_onBeforeCompile${t}`,i=function(c,h){s.onBeforeCompile.call(this,c,h);let d=this.customProgramCacheKey()+"|"+c.vertexShader+"|"+c.fragmentShader,u=sd[d];if(!u){let f=_v(this,c,e,t);u=sd[d]=f}c.vertexShader=u.vertexShader,c.fragmentShader=u.fragmentShader,gr(c.uniforms,this.uniforms),e.timeUniform&&(c.uniforms[e.timeUniform]={get value(){return Date.now()-gv}}),this[n]&&this[n](c)},a=function(){return o(e.chained?s:s.clone())},o=function(c){let h=Object.create(c,l);return Object.defineProperty(h,"baseMaterial",{value:s}),Object.defineProperty(h,"id",{value:vv++}),h.uuid=mv(),h.uniforms=gr({},c.uniforms,e.uniforms),h.defines=gr({},c.defines,e.defines),h.defines[`TROIKA_DERIVED_MATERIAL_${t}`]="",h.extensions=gr({},c.extensions,e.extensions),h._listeners=void 0,h},l={constructor:{value:a},isDerivedMaterial:{value:!0},type:{get:()=>s.type,set:c=>{s.type=c}},isDerivedFrom:{writable:!0,configurable:!0,value:function(c){let h=this.baseMaterial;return c===h||h.isDerivedMaterial&&h.isDerivedFrom(c)||!1}},customProgramCacheKey:{writable:!0,configurable:!0,value:function(){return s.customProgramCacheKey()+"|"+t}},onBeforeCompile:{get(){return i},set(c){this[n]=c}},copy:{writable:!0,configurable:!0,value:function(c){return s.copy.call(this,c),!s.isShaderMaterial&&!s.isDerivedMaterial&&(gr(this.extensions,c.extensions),gr(this.defines,c.defines),gr(this.uniforms,ti.clone(c.uniforms))),this}},clone:{writable:!0,configurable:!0,value:function(){let c=new s.constructor;return o(c).copy(this)}},getDepthMaterial:{writable:!0,configurable:!0,value:function(){let c=this._depthMaterial;return c||(c=this._depthMaterial=fl(s.isDerivedMaterial?s.getDepthMaterial():new Kr({depthPacking:vc}),e),c.defines.IS_DEPTH_MATERIAL="",c.uniforms=this.uniforms),c}},getDistanceMaterial:{writable:!0,configurable:!0,value:function(){let c=this._distanceMaterial;return c||(c=this._distanceMaterial=fl(s.isDerivedMaterial?s.getDistanceMaterial():new jr,e),c.defines.IS_DISTANCE_MATERIAL="",c.uniforms=this.uniforms),c}},dispose:{writable:!0,configurable:!0,value(){let{_depthMaterial:c,_distanceMaterial:h}=this;c&&c.dispose(),h&&h.dispose(),s.dispose.call(this)}}};return r[t]=a,new a}function _v(s,{vertexShader:e,fragmentShader:t},r,n){let{vertexDefs:i,vertexMainIntro:a,vertexMainOutro:o,vertexTransform:l,fragmentDefs:c,fragmentMainIntro:h,fragmentMainOutro:d,fragmentColorTransform:u,customRewriter:f,timeUniform:g}=r;if(i=i||"",a=a||"",o=o||"",c=c||"",h=h||"",d=d||"",(l||f)&&(e=Zc(e)),(u||f)&&(t=t.replace(/^[ \t]*#include <((?:tonemapping|encodings|colorspace|fog|premultiplied_alpha|dithering)_fragment)>/gm,`
//!BEGIN_POST_CHUNK $1
$&
//!END_POST_CHUNK
`),t=Zc(t)),f){let x=f({vertexShader:e,fragmentShader:t});e=x.vertexShader,t=x.fragmentShader}if(u){let x=[];t=t.replace(/^\/\/!BEGIN_POST_CHUNK[^]+?^\/\/!END_POST_CHUNK/gm,p=>(x.push(p),"")),d=`${u}
${x.join(`
`)}
${d}`}if(g){let x=`
uniform float ${g};
`;i=x+i,c=x+c}return l&&(e=`vec3 troika_position_${n};
vec3 troika_normal_${n};
vec2 troika_uv_${n};
${e}
`,i=`${i}
void troikaVertexTransform${n}() {
  vec3 position = troika_position_${n};
  vec3 normal = troika_normal_${n};
  vec2 uv = troika_uv_${n};
  ${l}
  troika_position_${n} = position;
  troika_normal_${n} = normal;
  troika_uv_${n} = uv;
}
`,a=`
troika_position_${n} = vec3(position);
troika_normal_${n} = vec3(normal);
troika_uv_${n} = vec2(uv);
troikaVertexTransform${n}();
${a}
`,e=e.replace(/\b(position|normal|uv)\b/g,(x,p,m,S)=>/\battribute\s+vec[23]\s+$/.test(S.substr(0,m))?p:`troika_${p}_${n}`),s.map&&s.map.channel>0||(e=e.replace(/\bMAP_UV\b/g,`troika_uv_${n}`))),e=ad(e,n,i,a,o),t=ad(t,n,c,h,d),{vertexShader:e,fragmentShader:t}}function ad(s,e,t,r,n){return(r||n||t)&&(s=s.replace(Jc,`
${t}
void troikaOrigMain${e}() {`),s+=`
void main() {
  ${r}
  troikaOrigMain${e}();
  ${n}
}`),s}function xv(s,e){return s==="uniforms"?void 0:typeof e=="function"?e.toString():e}var yv=0,od=new Map;function Sv(s){let e=JSON.stringify(s,xv),t=od.get(e);return t==null&&od.set(e,t=++yv),t}function bv(){return typeof window>"u"&&(self.window=self),(function(s){var e={parse:function(n){var i=e._bin,a=new Uint8Array(n);if(i.readASCII(a,0,4)=="ttcf"){var o=4;i.readUshort(a,o),o+=2,i.readUshort(a,o),o+=2;var l=i.readUint(a,o);o+=4;for(var c=[],h=0;h<l;h++){var d=i.readUint(a,o);o+=4,c.push(e._readFont(a,d))}return c}return[e._readFont(a,0)]},_readFont:function(n,i){var a=e._bin,o=i;a.readFixed(n,i),i+=4;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2;for(var c=["cmap","head","hhea","maxp","hmtx","name","OS/2","post","loca","glyf","kern","CFF ","GDEF","GPOS","GSUB","SVG "],h={_data:n,_offset:o},d={},u=0;u<l;u++){var f=a.readASCII(n,i,4);i+=4,a.readUint(n,i),i+=4;var g=a.readUint(n,i);i+=4;var x=a.readUint(n,i);i+=4,d[f]={offset:g,length:x}}for(u=0;u<c.length;u++){var p=c[u];d[p]&&(h[p.trim()]=e[p.trim()].parse(n,d[p].offset,d[p].length,h))}return h},_tabOffset:function(n,i,a){for(var o=e._bin,l=o.readUshort(n,a+4),c=a+12,h=0;h<l;h++){var d=o.readASCII(n,c,4);c+=4,o.readUint(n,c),c+=4;var u=o.readUint(n,c);if(c+=4,o.readUint(n,c),c+=4,d==i)return u}return 0}};e._bin={readFixed:function(n,i){return(n[i]<<8|n[i+1])+(n[i+2]<<8|n[i+3])/65540},readF2dot14:function(n,i){return e._bin.readShort(n,i)/16384},readInt:function(n,i){return e._bin._view(n).getInt32(i)},readInt8:function(n,i){return e._bin._view(n).getInt8(i)},readShort:function(n,i){return e._bin._view(n).getInt16(i)},readUshort:function(n,i){return e._bin._view(n).getUint16(i)},readUshorts:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(e._bin.readUshort(n,i+2*l));return o},readUint:function(n,i){return e._bin._view(n).getUint32(i)},readUint64:function(n,i){return 4294967296*e._bin.readUint(n,i)+e._bin.readUint(n,i+4)},readASCII:function(n,i,a){for(var o="",l=0;l<a;l++)o+=String.fromCharCode(n[i+l]);return o},readUnicode:function(n,i,a){for(var o="",l=0;l<a;l++){var c=n[i++]<<8|n[i++];o+=String.fromCharCode(c)}return o},_tdec:typeof window<"u"&&window.TextDecoder?new window.TextDecoder:null,readUTF8:function(n,i,a){var o=e._bin._tdec;return o&&i==0&&a==n.length?o.decode(n):e._bin.readASCII(n,i,a)},readBytes:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(n[i+l]);return o},readASCIIArray:function(n,i,a){for(var o=[],l=0;l<a;l++)o.push(String.fromCharCode(n[i+l]));return o},_view:function(n){return n._dataView||(n._dataView=n.buffer?new DataView(n.buffer,n.byteOffset,n.byteLength):new DataView(new Uint8Array(n).buffer))}},e._lctf={},e._lctf.parse=function(n,i,a,o,l){var c=e._bin,h={},d=i;c.readFixed(n,i),i+=4;var u=c.readUshort(n,i);i+=2;var f=c.readUshort(n,i);i+=2;var g=c.readUshort(n,i);return i+=2,h.scriptList=e._lctf.readScriptList(n,d+u),h.featureList=e._lctf.readFeatureList(n,d+f),h.lookupList=e._lctf.readLookupList(n,d+g,l),h},e._lctf.readLookupList=function(n,i,a){var o=e._bin,l=i,c=[],h=o.readUshort(n,i);i+=2;for(var d=0;d<h;d++){var u=o.readUshort(n,i);i+=2;var f=e._lctf.readLookupTable(n,l+u,a);c.push(f)}return c},e._lctf.readLookupTable=function(n,i,a){var o=e._bin,l=i,c={tabs:[]};c.ltype=o.readUshort(n,i),i+=2,c.flag=o.readUshort(n,i),i+=2;var h=o.readUshort(n,i);i+=2;for(var d=c.ltype,u=0;u<h;u++){var f=o.readUshort(n,i);i+=2;var g=a(n,d,l+f,c);c.tabs.push(g)}return c},e._lctf.numOfOnes=function(n){for(var i=0,a=0;a<32;a++)(n>>>a&1)!=0&&i++;return i},e._lctf.readClassDef=function(n,i){var a=e._bin,o=[],l=a.readUshort(n,i);if(i+=2,l==1){var c=a.readUshort(n,i);i+=2;var h=a.readUshort(n,i);i+=2;for(var d=0;d<h;d++)o.push(c+d),o.push(c+d),o.push(a.readUshort(n,i)),i+=2}if(l==2){var u=a.readUshort(n,i);for(i+=2,d=0;d<u;d++)o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2,o.push(a.readUshort(n,i)),i+=2}return o},e._lctf.getInterval=function(n,i){for(var a=0;a<n.length;a+=3){var o=n[a],l=n[a+1];if(n[a+2],o<=i&&i<=l)return a}return-1},e._lctf.readCoverage=function(n,i){var a=e._bin,o={};o.fmt=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);return i+=2,o.fmt==1&&(o.tab=a.readUshorts(n,i,l)),o.fmt==2&&(o.tab=a.readUshorts(n,i,3*l)),o},e._lctf.coverageIndex=function(n,i){var a=n.tab;if(n.fmt==1)return a.indexOf(i);if(n.fmt==2){var o=e._lctf.getInterval(a,i);if(o!=-1)return a[o+2]+(i-a[o])}return-1},e._lctf.readFeatureList=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var d=a.readASCII(n,i,4);i+=4;var u=a.readUshort(n,i);i+=2;var f=e._lctf.readFeatureTable(n,o+u);f.tag=d.trim(),l.push(f)}return l},e._lctf.readFeatureTable=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2,c>0&&(l.featureParams=o+c);var h=a.readUshort(n,i);i+=2,l.tab=[];for(var d=0;d<h;d++)l.tab.push(a.readUshort(n,i+2*d));return l},e._lctf.readScriptList=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var d=a.readASCII(n,i,4);i+=4;var u=a.readUshort(n,i);i+=2,l[d.trim()]=e._lctf.readScriptTable(n,o+u)}return l},e._lctf.readScriptTable=function(n,i){var a=e._bin,o=i,l={},c=a.readUshort(n,i);i+=2,c>0&&(l.default=e._lctf.readLangSysTable(n,o+c));var h=a.readUshort(n,i);i+=2;for(var d=0;d<h;d++){var u=a.readASCII(n,i,4);i+=4;var f=a.readUshort(n,i);i+=2,l[u.trim()]=e._lctf.readLangSysTable(n,o+f)}return l},e._lctf.readLangSysTable=function(n,i){var a=e._bin,o={};a.readUshort(n,i),i+=2,o.reqFeature=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);return i+=2,o.features=a.readUshorts(n,i,l),o},e.CFF={},e.CFF.parse=function(n,i,a){var o=e._bin;(n=new Uint8Array(n.buffer,i,a))[i=0],n[++i],n[++i],n[++i],i++;var l=[];i=e.CFF.readIndex(n,i,l);for(var c=[],h=0;h<l.length-1;h++)c.push(o.readASCII(n,i+l[h],l[h+1]-l[h]));i+=l[l.length-1];var d=[];i=e.CFF.readIndex(n,i,d);var u=[];for(h=0;h<d.length-1;h++)u.push(e.CFF.readDict(n,i+d[h],i+d[h+1]));i+=d[d.length-1];var f=u[0],g=[];i=e.CFF.readIndex(n,i,g);var x=[];for(h=0;h<g.length-1;h++)x.push(o.readASCII(n,i+g[h],g[h+1]-g[h]));if(i+=g[g.length-1],e.CFF.readSubrs(n,i,f),f.CharStrings){i=f.CharStrings,g=[],i=e.CFF.readIndex(n,i,g);var p=[];for(h=0;h<g.length-1;h++)p.push(o.readBytes(n,i+g[h],g[h+1]-g[h]));f.CharStrings=p}if(f.ROS){i=f.FDArray;var m=[];for(i=e.CFF.readIndex(n,i,m),f.FDArray=[],h=0;h<m.length-1;h++){var S=e.CFF.readDict(n,i+m[h],i+m[h+1]);e.CFF._readFDict(n,S,x),f.FDArray.push(S)}i+=m[m.length-1],i=f.FDSelect,f.FDSelect=[];var E=n[i];if(i++,E!=3)throw E;var y=o.readUshort(n,i);for(i+=2,h=0;h<y+1;h++)f.FDSelect.push(o.readUshort(n,i),n[i+2]),i+=3}return f.Encoding&&(f.Encoding=e.CFF.readEncoding(n,f.Encoding,f.CharStrings.length)),f.charset&&(f.charset=e.CFF.readCharset(n,f.charset,f.CharStrings.length)),e.CFF._readFDict(n,f,x),f},e.CFF._readFDict=function(n,i,a){var o;for(var l in i.Private&&(o=i.Private[1],i.Private=e.CFF.readDict(n,o,o+i.Private[0]),i.Private.Subrs&&e.CFF.readSubrs(n,o+i.Private.Subrs,i.Private)),i)["FamilyName","FontName","FullName","Notice","version","Copyright"].indexOf(l)!=-1&&(i[l]=a[i[l]-426+35])},e.CFF.readSubrs=function(n,i,a){var o=e._bin,l=[];i=e.CFF.readIndex(n,i,l);var c,h=l.length;c=h<1240?107:h<33900?1131:32768,a.Bias=c,a.Subrs=[];for(var d=0;d<l.length-1;d++)a.Subrs.push(o.readBytes(n,i+l[d],l[d+1]-l[d]))},e.CFF.tableSE=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,60,61,62,63,64,65,66,67,68,69,70,71,72,73,74,75,76,77,78,79,80,81,82,83,84,85,86,87,88,89,90,91,92,93,94,95,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,96,97,98,99,100,101,102,103,104,105,106,107,108,109,110,0,111,112,113,114,0,115,116,117,118,119,120,121,122,0,123,0,124,125,126,127,128,129,130,131,0,132,133,0,134,135,136,137,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,138,0,139,0,0,0,0,140,141,142,143,0,0,0,0,0,144,0,0,0,145,0,0,146,147,148,149,0,0,0,0],e.CFF.glyphByUnicode=function(n,i){for(var a=0;a<n.charset.length;a++)if(n.charset[a]==i)return a;return-1},e.CFF.glyphBySE=function(n,i){return i<0||i>255?-1:e.CFF.glyphByUnicode(n,e.CFF.tableSE[i])},e.CFF.readEncoding=function(n,i,a){e._bin;var o=[".notdef"],l=n[i];if(i++,l!=0)throw"error: unknown encoding format: "+l;var c=n[i];i++;for(var h=0;h<c;h++)o.push(n[i+h]);return o},e.CFF.readCharset=function(n,i,a){var o=e._bin,l=[".notdef"],c=n[i];if(i++,c==0)for(var h=0;h<a;h++){var d=o.readUshort(n,i);i+=2,l.push(d)}else{if(c!=1&&c!=2)throw"error: format: "+c;for(;l.length<a;){d=o.readUshort(n,i),i+=2;var u=0;for(c==1?(u=n[i],i++):(u=o.readUshort(n,i),i+=2),h=0;h<=u;h++)l.push(d),d++}}return l},e.CFF.readIndex=function(n,i,a){var o=e._bin,l=o.readUshort(n,i)+1,c=n[i+=2];if(i++,c==1)for(var h=0;h<l;h++)a.push(n[i+h]);else if(c==2)for(h=0;h<l;h++)a.push(o.readUshort(n,i+2*h));else if(c==3)for(h=0;h<l;h++)a.push(16777215&o.readUint(n,i+3*h-1));else if(l!=1)throw"unsupported offset size: "+c+", count: "+l;return(i+=l*c)-1},e.CFF.getCharString=function(n,i,a){var o=e._bin,l=n[i],c=n[i+1];n[i+2],n[i+3],n[i+4];var h=1,d=null,u=null;l<=20&&(d=l,h=1),l==12&&(d=100*l+c,h=2),21<=l&&l<=27&&(d=l,h=1),l==28&&(u=o.readShort(n,i+1),h=3),29<=l&&l<=31&&(d=l,h=1),32<=l&&l<=246&&(u=l-139,h=1),247<=l&&l<=250&&(u=256*(l-247)+c+108,h=2),251<=l&&l<=254&&(u=256*-(l-251)-c-108,h=2),l==255&&(u=o.readInt(n,i+1)/65535,h=5),a.val=u??"o"+d,a.size=h},e.CFF.readCharString=function(n,i,a){for(var o=i+a,l=e._bin,c=[];i<o;){var h=n[i],d=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,g=null;h<=20&&(f=h,u=1),h==12&&(f=100*h+d,u=2),h!=19&&h!=20||(f=h,u=2),21<=h&&h<=27&&(f=h,u=1),h==28&&(g=l.readShort(n,i+1),u=3),29<=h&&h<=31&&(f=h,u=1),32<=h&&h<=246&&(g=h-139,u=1),247<=h&&h<=250&&(g=256*(h-247)+d+108,u=2),251<=h&&h<=254&&(g=256*-(h-251)-d-108,u=2),h==255&&(g=l.readInt(n,i+1)/65535,u=5),c.push(g??"o"+f),i+=u}return c},e.CFF.readDict=function(n,i,a){for(var o=e._bin,l={},c=[];i<a;){var h=n[i],d=n[i+1];n[i+2],n[i+3],n[i+4];var u=1,f=null,g=null;if(h==28&&(g=o.readShort(n,i+1),u=3),h==29&&(g=o.readInt(n,i+1),u=5),32<=h&&h<=246&&(g=h-139,u=1),247<=h&&h<=250&&(g=256*(h-247)+d+108,u=2),251<=h&&h<=254&&(g=256*-(h-251)-d-108,u=2),h==255)throw g=o.readInt(n,i+1)/65535,u=5,"unknown number";if(h==30){var x=[];for(u=1;;){var p=n[i+u];u++;var m=p>>4,S=15&p;if(m!=15&&x.push(m),S!=15&&x.push(S),S==15)break}for(var E="",y=[0,1,2,3,4,5,6,7,8,9,".","e","e-","reserved","-","endOfNumber"],b=0;b<x.length;b++)E+=y[x[b]];g=parseFloat(E)}h<=21&&(f=["version","Notice","FullName","FamilyName","Weight","FontBBox","BlueValues","OtherBlues","FamilyBlues","FamilyOtherBlues","StdHW","StdVW","escape","UniqueID","XUID","charset","Encoding","CharStrings","Private","Subrs","defaultWidthX","nominalWidthX"][h],u=1,h==12&&(f=["Copyright","isFixedPitch","ItalicAngle","UnderlinePosition","UnderlineThickness","PaintType","CharstringType","FontMatrix","StrokeWidth","BlueScale","BlueShift","BlueFuzz","StemSnapH","StemSnapV","ForceBold",0,0,"LanguageGroup","ExpansionFactor","initialRandomSeed","SyntheticBase","PostScript","BaseFontName","BaseFontBlend",0,0,0,0,0,0,"ROS","CIDFontVersion","CIDFontRevision","CIDFontType","CIDCount","UIDBase","FDArray","FDSelect","FontName"][d],u=2)),f!=null?(l[f]=c.length==1?c[0]:c,c=[]):c.push(g),i+=u}return l},e.cmap={},e.cmap.parse=function(n,i,a){n=new Uint8Array(n.buffer,i,a),i=0;var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2;var h=[];l.tables=[];for(var d=0;d<c;d++){var u=o.readUshort(n,i);i+=2;var f=o.readUshort(n,i);i+=2;var g=o.readUint(n,i);i+=4;var x="p"+u+"e"+f,p=h.indexOf(g);if(p==-1){var m;p=l.tables.length,h.push(g);var S=o.readUshort(n,g);S==0?m=e.cmap.parse0(n,g):S==4?m=e.cmap.parse4(n,g):S==6?m=e.cmap.parse6(n,g):S==12?m=e.cmap.parse12(n,g):console.debug("unknown format: "+S,u,f,g),l.tables.push(m)}if(l[x]!=null)throw"multiple tables for one platform+encoding";l[x]=p}return l},e.cmap.parse0=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2,o.map=[];for(var c=0;c<l-6;c++)o.map.push(n[i+c]);return o},e.cmap.parse4=function(n,i){var a=e._bin,o=i,l={};l.format=a.readUshort(n,i),i+=2;var c=a.readUshort(n,i);i+=2,a.readUshort(n,i),i+=2;var h=a.readUshort(n,i);i+=2;var d=h/2;l.searchRange=a.readUshort(n,i),i+=2,l.entrySelector=a.readUshort(n,i),i+=2,l.rangeShift=a.readUshort(n,i),i+=2,l.endCount=a.readUshorts(n,i,d),i+=2*d,i+=2,l.startCount=a.readUshorts(n,i,d),i+=2*d,l.idDelta=[];for(var u=0;u<d;u++)l.idDelta.push(a.readShort(n,i)),i+=2;for(l.idRangeOffset=a.readUshorts(n,i,d),i+=2*d,l.glyphIdArray=[];i<o+c;)l.glyphIdArray.push(a.readUshort(n,i)),i+=2;return l},e.cmap.parse6=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,a.readUshort(n,i),i+=2,o.firstCode=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2,o.glyphIdArray=[];for(var c=0;c<l;c++)o.glyphIdArray.push(a.readUshort(n,i)),i+=2;return o},e.cmap.parse12=function(n,i){var a=e._bin,o={};o.format=a.readUshort(n,i),i+=2,i+=2,a.readUint(n,i),i+=4,a.readUint(n,i),i+=4;var l=a.readUint(n,i);i+=4,o.groups=[];for(var c=0;c<l;c++){var h=i+12*c,d=a.readUint(n,h+0),u=a.readUint(n,h+4),f=a.readUint(n,h+8);o.groups.push([d,u,f])}return o},e.glyf={},e.glyf.parse=function(n,i,a,o){for(var l=[],c=0;c<o.maxp.numGlyphs;c++)l.push(null);return l},e.glyf._parseGlyf=function(n,i){var a=e._bin,o=n._data,l=e._tabOffset(o,"glyf",n._offset)+n.loca[i];if(n.loca[i]==n.loca[i+1])return null;var c={};if(c.noc=a.readShort(o,l),l+=2,c.xMin=a.readShort(o,l),l+=2,c.yMin=a.readShort(o,l),l+=2,c.xMax=a.readShort(o,l),l+=2,c.yMax=a.readShort(o,l),l+=2,c.xMin>=c.xMax||c.yMin>=c.yMax)return null;if(c.noc>0){c.endPts=[];for(var h=0;h<c.noc;h++)c.endPts.push(a.readUshort(o,l)),l+=2;var d=a.readUshort(o,l);if(l+=2,o.length-l<d)return null;c.instructions=a.readBytes(o,l,d),l+=d;var u=c.endPts[c.noc-1]+1;for(c.flags=[],h=0;h<u;h++){var f=o[l];if(l++,c.flags.push(f),(8&f)!=0){var g=o[l];l++;for(var x=0;x<g;x++)c.flags.push(f),h++}}for(c.xs=[],h=0;h<u;h++){var p=(2&c.flags[h])!=0,m=(16&c.flags[h])!=0;p?(c.xs.push(m?o[l]:-o[l]),l++):m?c.xs.push(0):(c.xs.push(a.readShort(o,l)),l+=2)}for(c.ys=[],h=0;h<u;h++)p=(4&c.flags[h])!=0,m=(32&c.flags[h])!=0,p?(c.ys.push(m?o[l]:-o[l]),l++):m?c.ys.push(0):(c.ys.push(a.readShort(o,l)),l+=2);var S=0,E=0;for(h=0;h<u;h++)S+=c.xs[h],E+=c.ys[h],c.xs[h]=S,c.ys[h]=E}else{var y;c.parts=[];do{y=a.readUshort(o,l),l+=2;var b={m:{a:1,b:0,c:0,d:1,tx:0,ty:0},p1:-1,p2:-1};if(c.parts.push(b),b.glyphIndex=a.readUshort(o,l),l+=2,1&y){var M=a.readShort(o,l);l+=2;var A=a.readShort(o,l);l+=2}else M=a.readInt8(o,l),l++,A=a.readInt8(o,l),l++;2&y?(b.m.tx=M,b.m.ty=A):(b.p1=M,b.p2=A),8&y?(b.m.a=b.m.d=a.readF2dot14(o,l),l+=2):64&y?(b.m.a=a.readF2dot14(o,l),l+=2,b.m.d=a.readF2dot14(o,l),l+=2):128&y&&(b.m.a=a.readF2dot14(o,l),l+=2,b.m.b=a.readF2dot14(o,l),l+=2,b.m.c=a.readF2dot14(o,l),l+=2,b.m.d=a.readF2dot14(o,l),l+=2)}while(32&y);if(256&y){var v=a.readUshort(o,l);for(l+=2,c.instr=[],h=0;h<v;h++)c.instr.push(o[l]),l++}}return c},e.GDEF={},e.GDEF.parse=function(n,i,a,o){var l=i;i+=4;var c=e._bin.readUshort(n,i);return{glyphClassDef:c===0?null:e._lctf.readClassDef(n,l+c)}},e.GPOS={},e.GPOS.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GPOS.subt)},e.GPOS.subt=function(n,i,a,o){var l=e._bin,c=a,h={};if(h.fmt=l.readUshort(n,a),a+=2,i==1||i==2||i==3||i==7||i==8&&h.fmt<=2){var d=l.readUshort(n,a);a+=2,h.coverage=e._lctf.readCoverage(n,d+c)}if(i==1&&h.fmt==1){var u=l.readUshort(n,a);a+=2,u!=0&&(h.pos=e.GPOS.readValueRecord(n,a,u))}else if(i==2&&h.fmt>=1&&h.fmt<=2){u=l.readUshort(n,a),a+=2;var f=l.readUshort(n,a);a+=2;var g=e._lctf.numOfOnes(u),x=e._lctf.numOfOnes(f);if(h.fmt==1){h.pairsets=[];var p=l.readUshort(n,a);a+=2;for(var m=0;m<p;m++){var S=c+l.readUshort(n,a);a+=2;var E=l.readUshort(n,S);S+=2;for(var y=[],b=0;b<E;b++){var M=l.readUshort(n,S);S+=2,u!=0&&(C=e.GPOS.readValueRecord(n,S,u),S+=2*g),f!=0&&(N=e.GPOS.readValueRecord(n,S,f),S+=2*x),y.push({gid2:M,val1:C,val2:N})}h.pairsets.push(y)}}if(h.fmt==2){var A=l.readUshort(n,a);a+=2;var v=l.readUshort(n,a);a+=2;var T=l.readUshort(n,a);a+=2;var I=l.readUshort(n,a);for(a+=2,h.classDef1=e._lctf.readClassDef(n,c+A),h.classDef2=e._lctf.readClassDef(n,c+v),h.matrix=[],m=0;m<T;m++){var P=[];for(b=0;b<I;b++){var C=null,N=null;u!=0&&(C=e.GPOS.readValueRecord(n,a,u),a+=2*g),f!=0&&(N=e.GPOS.readValueRecord(n,a,f),a+=2*x),P.push({val1:C,val2:N})}h.matrix.push(P)}}}else if(i==4&&h.fmt==1)h.markCoverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),h.baseCoverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),h.markClassCount=l.readUshort(n,a+4),h.markArray=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),h.baseArray=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,h.markClassCount);else if(i==6&&h.fmt==1)h.mark1Coverage=e._lctf.readCoverage(n,l.readUshort(n,a)+c),h.mark2Coverage=e._lctf.readCoverage(n,l.readUshort(n,a+2)+c),h.markClassCount=l.readUshort(n,a+4),h.mark1Array=e.GPOS.readMarkArray(n,l.readUshort(n,a+6)+c),h.mark2Array=e.GPOS.readBaseArray(n,l.readUshort(n,a+8)+c,h.markClassCount);else{if(i==9&&h.fmt==1){var R=l.readUshort(n,a);a+=2;var O=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=R;else if(o.ltype!=R)throw"invalid extension substitution";return e.GPOS.subt(n,o.ltype,c+O)}console.debug("unsupported GPOS table LookupType",i,"format",h.fmt)}return h},e.GPOS.readValueRecord=function(n,i,a){var o=e._bin,l=[];return l.push(1&a?o.readShort(n,i):0),i+=1&a?2:0,l.push(2&a?o.readShort(n,i):0),i+=2&a?2:0,l.push(4&a?o.readShort(n,i):0),i+=4&a?2:0,l.push(8&a?o.readShort(n,i):0),i+=8&a?2:0,l},e.GPOS.readBaseArray=function(n,i,a){var o=e._bin,l=[],c=i,h=o.readUshort(n,i);i+=2;for(var d=0;d<h;d++){for(var u=[],f=0;f<a;f++)u.push(e.GPOS.readAnchorRecord(n,c+o.readUshort(n,i))),i+=2;l.push(u)}return l},e.GPOS.readMarkArray=function(n,i){var a=e._bin,o=[],l=i,c=a.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var d=e.GPOS.readAnchorRecord(n,a.readUshort(n,i+2)+l);d.markClass=a.readUshort(n,i),o.push(d),i+=4}return o},e.GPOS.readAnchorRecord=function(n,i){var a=e._bin,o={};return o.fmt=a.readUshort(n,i),o.x=a.readShort(n,i+2),o.y=a.readShort(n,i+4),o},e.GSUB={},e.GSUB.parse=function(n,i,a,o){return e._lctf.parse(n,i,a,o,e.GSUB.subt)},e.GSUB.subt=function(n,i,a,o){var l=e._bin,c=a,h={};if(h.fmt=l.readUshort(n,a),a+=2,i!=1&&i!=2&&i!=4&&i!=5&&i!=6)return null;if(i==1||i==2||i==4||i==5&&h.fmt<=2||i==6&&h.fmt<=2){var d=l.readUshort(n,a);a+=2,h.coverage=e._lctf.readCoverage(n,c+d)}if(i==1&&h.fmt>=1&&h.fmt<=2){if(h.fmt==1)h.delta=l.readShort(n,a),a+=2;else if(h.fmt==2){var u=l.readUshort(n,a);a+=2,h.newg=l.readUshorts(n,a,u),a+=2*h.newg.length}}else if(i==2&&h.fmt==1){u=l.readUshort(n,a),a+=2,h.seqs=[];for(var f=0;f<u;f++){var g=l.readUshort(n,a)+c;a+=2;var x=l.readUshort(n,g);h.seqs.push(l.readUshorts(n,g+2,x))}}else if(i==4)for(h.vals=[],u=l.readUshort(n,a),a+=2,f=0;f<u;f++){var p=l.readUshort(n,a);a+=2,h.vals.push(e.GSUB.readLigatureSet(n,c+p))}else if(i==5&&h.fmt==2){if(h.fmt==2){var m=l.readUshort(n,a);a+=2,h.cDef=e._lctf.readClassDef(n,c+m),h.scset=[];var S=l.readUshort(n,a);for(a+=2,f=0;f<S;f++){var E=l.readUshort(n,a);a+=2,h.scset.push(E==0?null:e.GSUB.readSubClassSet(n,c+E))}}}else if(i==6&&h.fmt==3){if(h.fmt==3){for(f=0;f<3;f++){u=l.readUshort(n,a),a+=2;for(var y=[],b=0;b<u;b++)y.push(e._lctf.readCoverage(n,c+l.readUshort(n,a+2*b)));a+=2*u,f==0&&(h.backCvg=y),f==1&&(h.inptCvg=y),f==2&&(h.ahedCvg=y)}u=l.readUshort(n,a),a+=2,h.lookupRec=e.GSUB.readSubstLookupRecords(n,a,u)}}else{if(i==7&&h.fmt==1){var M=l.readUshort(n,a);a+=2;var A=l.readUint(n,a);if(a+=4,o.ltype==9)o.ltype=M;else if(o.ltype!=M)throw"invalid extension substitution";return e.GSUB.subt(n,o.ltype,c+A)}console.debug("unsupported GSUB table LookupType",i,"format",h.fmt)}return h},e.GSUB.readSubClassSet=function(n,i){var a=e._bin.readUshort,o=i,l=[],c=a(n,i);i+=2;for(var h=0;h<c;h++){var d=a(n,i);i+=2,l.push(e.GSUB.readSubClassRule(n,o+d))}return l},e.GSUB.readSubClassRule=function(n,i){var a=e._bin.readUshort,o={},l=a(n,i),c=a(n,i+=2);i+=2,o.input=[];for(var h=0;h<l-1;h++)o.input.push(a(n,i)),i+=2;return o.substLookupRecords=e.GSUB.readSubstLookupRecords(n,i,c),o},e.GSUB.readSubstLookupRecords=function(n,i,a){for(var o=e._bin.readUshort,l=[],c=0;c<a;c++)l.push(o(n,i),o(n,i+2)),i+=4;return l},e.GSUB.readChainSubClassSet=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var d=a.readUshort(n,i);i+=2,l.push(e.GSUB.readChainSubClassRule(n,o+d))}return l},e.GSUB.readChainSubClassRule=function(n,i){for(var a=e._bin,o={},l=["backtrack","input","lookahead"],c=0;c<l.length;c++){var h=a.readUshort(n,i);i+=2,c==1&&h--,o[l[c]]=a.readUshorts(n,i,h),i+=2*o[l[c]].length}return h=a.readUshort(n,i),i+=2,o.subst=a.readUshorts(n,i,2*h),i+=2*o.subst.length,o},e.GSUB.readLigatureSet=function(n,i){var a=e._bin,o=i,l=[],c=a.readUshort(n,i);i+=2;for(var h=0;h<c;h++){var d=a.readUshort(n,i);i+=2,l.push(e.GSUB.readLigature(n,o+d))}return l},e.GSUB.readLigature=function(n,i){var a=e._bin,o={chain:[]};o.nglyph=a.readUshort(n,i),i+=2;var l=a.readUshort(n,i);i+=2;for(var c=0;c<l-1;c++)o.chain.push(a.readUshort(n,i)),i+=2;return o},e.head={},e.head.parse=function(n,i,a){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.fontRevision=o.readFixed(n,i),i+=4,o.readUint(n,i),i+=4,o.readUint(n,i),i+=4,l.flags=o.readUshort(n,i),i+=2,l.unitsPerEm=o.readUshort(n,i),i+=2,l.created=o.readUint64(n,i),i+=8,l.modified=o.readUint64(n,i),i+=8,l.xMin=o.readShort(n,i),i+=2,l.yMin=o.readShort(n,i),i+=2,l.xMax=o.readShort(n,i),i+=2,l.yMax=o.readShort(n,i),i+=2,l.macStyle=o.readUshort(n,i),i+=2,l.lowestRecPPEM=o.readUshort(n,i),i+=2,l.fontDirectionHint=o.readShort(n,i),i+=2,l.indexToLocFormat=o.readShort(n,i),i+=2,l.glyphDataFormat=o.readShort(n,i),i+=2,l},e.hhea={},e.hhea.parse=function(n,i,a){var o=e._bin,l={};return o.readFixed(n,i),i+=4,l.ascender=o.readShort(n,i),i+=2,l.descender=o.readShort(n,i),i+=2,l.lineGap=o.readShort(n,i),i+=2,l.advanceWidthMax=o.readUshort(n,i),i+=2,l.minLeftSideBearing=o.readShort(n,i),i+=2,l.minRightSideBearing=o.readShort(n,i),i+=2,l.xMaxExtent=o.readShort(n,i),i+=2,l.caretSlopeRise=o.readShort(n,i),i+=2,l.caretSlopeRun=o.readShort(n,i),i+=2,l.caretOffset=o.readShort(n,i),i+=2,i+=8,l.metricDataFormat=o.readShort(n,i),i+=2,l.numberOfHMetrics=o.readUshort(n,i),i+=2,l},e.hmtx={},e.hmtx.parse=function(n,i,a,o){for(var l=e._bin,c={aWidth:[],lsBearing:[]},h=0,d=0,u=0;u<o.maxp.numGlyphs;u++)u<o.hhea.numberOfHMetrics&&(h=l.readUshort(n,i),i+=2,d=l.readShort(n,i),i+=2),c.aWidth.push(h),c.lsBearing.push(d);return c},e.kern={},e.kern.parse=function(n,i,a,o){var l=e._bin,c=l.readUshort(n,i);if(i+=2,c==1)return e.kern.parseV1(n,i-2,a,o);var h=l.readUshort(n,i);i+=2;for(var d={glyph1:[],rval:[]},u=0;u<h;u++){i+=2,a=l.readUshort(n,i),i+=2;var f=l.readUshort(n,i);i+=2;var g=f>>>8;if((g&=15)!=0)throw"unknown kern table format: "+g;i=e.kern.readFormat0(n,i,d)}return d},e.kern.parseV1=function(n,i,a,o){var l=e._bin;l.readFixed(n,i),i+=4;var c=l.readUint(n,i);i+=4;for(var h={glyph1:[],rval:[]},d=0;d<c;d++){l.readUint(n,i),i+=4;var u=l.readUshort(n,i);i+=2,l.readUshort(n,i),i+=2;var f=u>>>8;if((f&=15)!=0)throw"unknown kern table format: "+f;i=e.kern.readFormat0(n,i,h)}return h},e.kern.readFormat0=function(n,i,a){var o=e._bin,l=-1,c=o.readUshort(n,i);i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2,o.readUshort(n,i),i+=2;for(var h=0;h<c;h++){var d=o.readUshort(n,i);i+=2;var u=o.readUshort(n,i);i+=2;var f=o.readShort(n,i);i+=2,d!=l&&(a.glyph1.push(d),a.rval.push({glyph2:[],vals:[]}));var g=a.rval[a.rval.length-1];g.glyph2.push(u),g.vals.push(f),l=d}return i},e.loca={},e.loca.parse=function(n,i,a,o){var l=e._bin,c=[],h=o.head.indexToLocFormat,d=o.maxp.numGlyphs+1;if(h==0)for(var u=0;u<d;u++)c.push(l.readUshort(n,i+(u<<1))<<1);if(h==1)for(u=0;u<d;u++)c.push(l.readUint(n,i+(u<<2)));return c},e.maxp={},e.maxp.parse=function(n,i,a){var o=e._bin,l={},c=o.readUint(n,i);return i+=4,l.numGlyphs=o.readUshort(n,i),i+=2,c==65536&&(l.maxPoints=o.readUshort(n,i),i+=2,l.maxContours=o.readUshort(n,i),i+=2,l.maxCompositePoints=o.readUshort(n,i),i+=2,l.maxCompositeContours=o.readUshort(n,i),i+=2,l.maxZones=o.readUshort(n,i),i+=2,l.maxTwilightPoints=o.readUshort(n,i),i+=2,l.maxStorage=o.readUshort(n,i),i+=2,l.maxFunctionDefs=o.readUshort(n,i),i+=2,l.maxInstructionDefs=o.readUshort(n,i),i+=2,l.maxStackElements=o.readUshort(n,i),i+=2,l.maxSizeOfInstructions=o.readUshort(n,i),i+=2,l.maxComponentElements=o.readUshort(n,i),i+=2,l.maxComponentDepth=o.readUshort(n,i),i+=2),l},e.name={},e.name.parse=function(n,i,a){var o=e._bin,l={};o.readUshort(n,i),i+=2;var c=o.readUshort(n,i);i+=2,o.readUshort(n,i);for(var h,d=["copyright","fontFamily","fontSubfamily","ID","fullName","version","postScriptName","trademark","manufacturer","designer","description","urlVendor","urlDesigner","licence","licenceURL","---","typoFamilyName","typoSubfamilyName","compatibleFull","sampleText","postScriptCID","wwsFamilyName","wwsSubfamilyName","lightPalette","darkPalette"],u=i+=2,f=0;f<c;f++){var g=o.readUshort(n,i);i+=2;var x=o.readUshort(n,i);i+=2;var p=o.readUshort(n,i);i+=2;var m=o.readUshort(n,i);i+=2;var S=o.readUshort(n,i);i+=2;var E=o.readUshort(n,i);i+=2;var y,b=d[m],M=u+12*c+E;if(g==0)y=o.readUnicode(n,M,S/2);else if(g==3&&x==0)y=o.readUnicode(n,M,S/2);else if(x==0)y=o.readASCII(n,M,S);else if(x==1)y=o.readUnicode(n,M,S/2);else if(x==3)y=o.readUnicode(n,M,S/2);else{if(g!=1)throw"unknown encoding "+x+", platformID: "+g;y=o.readASCII(n,M,S),console.debug("reading unknown MAC encoding "+x+" as ASCII")}var A="p"+g+","+p.toString(16);l[A]==null&&(l[A]={}),l[A][b!==void 0?b:m]=y,l[A]._lang=p}for(var v in l)if(l[v].postScriptName!=null&&l[v]._lang==1033)return l[v];for(var v in l)if(l[v].postScriptName!=null&&l[v]._lang==0)return l[v];for(var v in l)if(l[v].postScriptName!=null&&l[v]._lang==3084)return l[v];for(var v in l)if(l[v].postScriptName!=null)return l[v];for(var v in l){h=v;break}return console.debug("returning name table with languageID "+l[h]._lang),l[h]},e["OS/2"]={},e["OS/2"].parse=function(n,i,a){var o=e._bin.readUshort(n,i);i+=2;var l={};if(o==0)e["OS/2"].version0(n,i,l);else if(o==1)e["OS/2"].version1(n,i,l);else if(o==2||o==3||o==4)e["OS/2"].version2(n,i,l);else{if(o!=5)throw"unknown OS/2 table version: "+o;e["OS/2"].version5(n,i,l)}return l},e["OS/2"].version0=function(n,i,a){var o=e._bin;return a.xAvgCharWidth=o.readShort(n,i),i+=2,a.usWeightClass=o.readUshort(n,i),i+=2,a.usWidthClass=o.readUshort(n,i),i+=2,a.fsType=o.readUshort(n,i),i+=2,a.ySubscriptXSize=o.readShort(n,i),i+=2,a.ySubscriptYSize=o.readShort(n,i),i+=2,a.ySubscriptXOffset=o.readShort(n,i),i+=2,a.ySubscriptYOffset=o.readShort(n,i),i+=2,a.ySuperscriptXSize=o.readShort(n,i),i+=2,a.ySuperscriptYSize=o.readShort(n,i),i+=2,a.ySuperscriptXOffset=o.readShort(n,i),i+=2,a.ySuperscriptYOffset=o.readShort(n,i),i+=2,a.yStrikeoutSize=o.readShort(n,i),i+=2,a.yStrikeoutPosition=o.readShort(n,i),i+=2,a.sFamilyClass=o.readShort(n,i),i+=2,a.panose=o.readBytes(n,i,10),i+=10,a.ulUnicodeRange1=o.readUint(n,i),i+=4,a.ulUnicodeRange2=o.readUint(n,i),i+=4,a.ulUnicodeRange3=o.readUint(n,i),i+=4,a.ulUnicodeRange4=o.readUint(n,i),i+=4,a.achVendID=[o.readInt8(n,i),o.readInt8(n,i+1),o.readInt8(n,i+2),o.readInt8(n,i+3)],i+=4,a.fsSelection=o.readUshort(n,i),i+=2,a.usFirstCharIndex=o.readUshort(n,i),i+=2,a.usLastCharIndex=o.readUshort(n,i),i+=2,a.sTypoAscender=o.readShort(n,i),i+=2,a.sTypoDescender=o.readShort(n,i),i+=2,a.sTypoLineGap=o.readShort(n,i),i+=2,a.usWinAscent=o.readUshort(n,i),i+=2,a.usWinDescent=o.readUshort(n,i),i+=2},e["OS/2"].version1=function(n,i,a){var o=e._bin;return i=e["OS/2"].version0(n,i,a),a.ulCodePageRange1=o.readUint(n,i),i+=4,a.ulCodePageRange2=o.readUint(n,i),i+=4},e["OS/2"].version2=function(n,i,a){var o=e._bin;return i=e["OS/2"].version1(n,i,a),a.sxHeight=o.readShort(n,i),i+=2,a.sCapHeight=o.readShort(n,i),i+=2,a.usDefault=o.readUshort(n,i),i+=2,a.usBreak=o.readUshort(n,i),i+=2,a.usMaxContext=o.readUshort(n,i),i+=2},e["OS/2"].version5=function(n,i,a){var o=e._bin;return i=e["OS/2"].version2(n,i,a),a.usLowerOpticalPointSize=o.readUshort(n,i),i+=2,a.usUpperOpticalPointSize=o.readUshort(n,i),i+=2},e.post={},e.post.parse=function(n,i,a){var o=e._bin,l={};return l.version=o.readFixed(n,i),i+=4,l.italicAngle=o.readFixed(n,i),i+=4,l.underlinePosition=o.readShort(n,i),i+=2,l.underlineThickness=o.readShort(n,i),i+=2,l},e==null&&(e={}),e.U==null&&(e.U={}),e.U.codeToGlyph=function(n,i){var a=n.cmap,o=-1;if(a.p0e4!=null?o=a.p0e4:a.p3e1!=null?o=a.p3e1:a.p1e0!=null?o=a.p1e0:a.p0e3!=null&&(o=a.p0e3),o==-1)throw"no familiar platform and encoding!";var l=a.tables[o];if(l.format==0)return i>=l.map.length?0:l.map[i];if(l.format==4){for(var c=-1,h=0;h<l.endCount.length;h++)if(i<=l.endCount[h]){c=h;break}return c==-1||l.startCount[c]>i?0:65535&(l.idRangeOffset[c]!=0?l.glyphIdArray[i-l.startCount[c]+(l.idRangeOffset[c]>>1)-(l.idRangeOffset.length-c)]:i+l.idDelta[c])}if(l.format==12){if(i>l.groups[l.groups.length-1][1])return 0;for(h=0;h<l.groups.length;h++){var d=l.groups[h];if(d[0]<=i&&i<=d[1])return d[2]+(i-d[0])}return 0}throw"unknown cmap table format "+l.format},e.U.glyphToPath=function(n,i){var a={cmds:[],crds:[]};if(n.SVG&&n.SVG.entries[i]){var o=n.SVG.entries[i];return o==null?a:(typeof o=="string"&&(o=e.SVG.toPath(o),n.SVG.entries[i]=o),o)}if(n.CFF){var l={x:0,y:0,stack:[],nStems:0,haveWidth:!1,width:n.CFF.Private?n.CFF.Private.defaultWidthX:0,open:!1},c=n.CFF,h=n.CFF.Private;if(c.ROS){for(var d=0;c.FDSelect[d+2]<=i;)d+=2;h=c.FDArray[c.FDSelect[d+1]].Private}e.U._drawCFF(n.CFF.CharStrings[i],l,c,h,a)}else n.glyf&&e.U._drawGlyf(i,n,a);return a},e.U._drawGlyf=function(n,i,a){var o=i.glyf[n];o==null&&(o=i.glyf[n]=e.glyf._parseGlyf(i,n)),o!=null&&(o.noc>-1?e.U._simpleGlyph(o,a):e.U._compoGlyph(o,i,a))},e.U._simpleGlyph=function(n,i){for(var a=0;a<n.noc;a++){for(var o=a==0?0:n.endPts[a-1]+1,l=n.endPts[a],c=o;c<=l;c++){var h=c==o?l:c-1,d=c==l?o:c+1,u=1&n.flags[c],f=1&n.flags[h],g=1&n.flags[d],x=n.xs[c],p=n.ys[c];if(c==o)if(u){if(!f){e.U.P.moveTo(i,x,p);continue}e.U.P.moveTo(i,n.xs[h],n.ys[h])}else f?e.U.P.moveTo(i,n.xs[h],n.ys[h]):e.U.P.moveTo(i,(n.xs[h]+x)/2,(n.ys[h]+p)/2);u?f&&e.U.P.lineTo(i,x,p):g?e.U.P.qcurveTo(i,x,p,n.xs[d],n.ys[d]):e.U.P.qcurveTo(i,x,p,(x+n.xs[d])/2,(p+n.ys[d])/2)}e.U.P.closePath(i)}},e.U._compoGlyph=function(n,i,a){for(var o=0;o<n.parts.length;o++){var l={cmds:[],crds:[]},c=n.parts[o];e.U._drawGlyf(c.glyphIndex,i,l);for(var h=c.m,d=0;d<l.crds.length;d+=2){var u=l.crds[d],f=l.crds[d+1];a.crds.push(u*h.a+f*h.b+h.tx),a.crds.push(u*h.c+f*h.d+h.ty)}for(d=0;d<l.cmds.length;d++)a.cmds.push(l.cmds[d])}},e.U._getGlyphClass=function(n,i){var a=e._lctf.getInterval(i,n);return a==-1?0:i[a+2]},e.U._applySubs=function(n,i,a,o){for(var l=n.length-i-1,c=0;c<a.tabs.length;c++)if(a.tabs[c]!=null){var h,d=a.tabs[c];if(!d.coverage||(h=e._lctf.coverageIndex(d.coverage,n[i]))!=-1){if(a.ltype==1)n[i],d.fmt==1?n[i]=n[i]+d.delta:n[i]=d.newg[h];else if(a.ltype==4)for(var u=d.vals[h],f=0;f<u.length;f++){var g=u[f],x=g.chain.length;if(!(x>l)){for(var p=!0,m=0,S=0;S<x;S++){for(;n[i+m+(1+S)]==-1;)m++;g.chain[S]!=n[i+m+(1+S)]&&(p=!1)}if(p){for(n[i]=g.nglyph,S=0;S<x+m;S++)n[i+S+1]=-1;break}}}else if(a.ltype==5&&d.fmt==2)for(var E=e._lctf.getInterval(d.cDef,n[i]),y=d.cDef[E+2],b=d.scset[y],M=0;M<b.length;M++){var A=b[M],v=A.input;if(!(v.length>l)){for(p=!0,S=0;S<v.length;S++){var T=e._lctf.getInterval(d.cDef,n[i+1+S]);if(E==-1&&d.cDef[T+2]!=v[S]){p=!1;break}}if(p){var I=A.substLookupRecords;for(f=0;f<I.length;f+=2)I[f],I[f+1]}}}else if(a.ltype==6&&d.fmt==3){if(!e.U._glsCovered(n,d.backCvg,i-d.backCvg.length)||!e.U._glsCovered(n,d.inptCvg,i)||!e.U._glsCovered(n,d.ahedCvg,i+d.inptCvg.length))continue;var P=d.lookupRec;for(M=0;M<P.length;M+=2){E=P[M];var C=o[P[M+1]];e.U._applySubs(n,i+E,C,o)}}}}},e.U._glsCovered=function(n,i,a){for(var o=0;o<i.length;o++)if(e._lctf.coverageIndex(i[o],n[a+o])==-1)return!1;return!0},e.U.glyphsToPath=function(n,i,a){for(var o={cmds:[],crds:[]},l=0,c=0;c<i.length;c++){var h=i[c];if(h!=-1){for(var d=c<i.length-1&&i[c+1]!=-1?i[c+1]:0,u=e.U.glyphToPath(n,h),f=0;f<u.crds.length;f+=2)o.crds.push(u.crds[f]+l),o.crds.push(u.crds[f+1]);for(a&&o.cmds.push(a),f=0;f<u.cmds.length;f++)o.cmds.push(u.cmds[f]);a&&o.cmds.push("X"),l+=n.hmtx.aWidth[h],c<i.length-1&&(l+=e.U.getPairAdjustment(n,h,d))}}return o},e.U.P={},e.U.P.moveTo=function(n,i,a){n.cmds.push("M"),n.crds.push(i,a)},e.U.P.lineTo=function(n,i,a){n.cmds.push("L"),n.crds.push(i,a)},e.U.P.curveTo=function(n,i,a,o,l,c,h){n.cmds.push("C"),n.crds.push(i,a,o,l,c,h)},e.U.P.qcurveTo=function(n,i,a,o,l){n.cmds.push("Q"),n.crds.push(i,a,o,l)},e.U.P.closePath=function(n){n.cmds.push("Z")},e.U._drawCFF=function(n,i,a,o,l){for(var c=i.stack,h=i.nStems,d=i.haveWidth,u=i.width,f=i.open,g=0,x=i.x,p=i.y,m=0,S=0,E=0,y=0,b=0,M=0,A=0,v=0,T=0,I=0,P={val:0,size:0};g<n.length;){e.CFF.getCharString(n,g,P);var C=P.val;if(g+=P.size,C=="o1"||C=="o18")c.length%2!=0&&!d&&(u=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,d=!0;else if(C=="o3"||C=="o23")c.length%2!=0&&!d&&(u=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,d=!0;else if(C=="o4")c.length>1&&!d&&(u=c.shift()+o.nominalWidthX,d=!0),f&&e.U.P.closePath(l),p+=c.pop(),e.U.P.moveTo(l,x,p),f=!0;else if(C=="o5")for(;c.length>0;)x+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,x,p);else if(C=="o6"||C=="o7")for(var N=c.length,R=C=="o6",O=0;O<N;O++){var z=c.shift();R?x+=z:p+=z,R=!R,e.U.P.lineTo(l,x,p)}else if(C=="o8"||C=="o24"){N=c.length;for(var K=0;K+6<=N;)m=x+c.shift(),S=p+c.shift(),E=m+c.shift(),y=S+c.shift(),x=E+c.shift(),p=y+c.shift(),e.U.P.curveTo(l,m,S,E,y,x,p),K+=6;C=="o24"&&(x+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,x,p))}else{if(C=="o11")break;if(C=="o1234"||C=="o1235"||C=="o1236"||C=="o1237")C=="o1234"&&(S=p,E=(m=x+c.shift())+c.shift(),I=y=S+c.shift(),M=y,v=p,x=(A=(b=(T=E+c.shift())+c.shift())+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,E,y,T,I),e.U.P.curveTo(l,b,M,A,v,x,p)),C=="o1235"&&(m=x+c.shift(),S=p+c.shift(),E=m+c.shift(),y=S+c.shift(),T=E+c.shift(),I=y+c.shift(),b=T+c.shift(),M=I+c.shift(),A=b+c.shift(),v=M+c.shift(),x=A+c.shift(),p=v+c.shift(),c.shift(),e.U.P.curveTo(l,m,S,E,y,T,I),e.U.P.curveTo(l,b,M,A,v,x,p)),C=="o1236"&&(m=x+c.shift(),S=p+c.shift(),E=m+c.shift(),I=y=S+c.shift(),M=y,A=(b=(T=E+c.shift())+c.shift())+c.shift(),v=M+c.shift(),x=A+c.shift(),e.U.P.curveTo(l,m,S,E,y,T,I),e.U.P.curveTo(l,b,M,A,v,x,p)),C=="o1237"&&(m=x+c.shift(),S=p+c.shift(),E=m+c.shift(),y=S+c.shift(),T=E+c.shift(),I=y+c.shift(),b=T+c.shift(),M=I+c.shift(),A=b+c.shift(),v=M+c.shift(),Math.abs(A-x)>Math.abs(v-p)?x=A+c.shift():p=v+c.shift(),e.U.P.curveTo(l,m,S,E,y,T,I),e.U.P.curveTo(l,b,M,A,v,x,p));else if(C=="o14"){if(c.length>0&&!d&&(u=c.shift()+a.nominalWidthX,d=!0),c.length==4){var re=c.shift(),G=c.shift(),V=c.shift(),U=c.shift(),J=e.CFF.glyphBySE(a,V),j=e.CFF.glyphBySE(a,U);e.U._drawCFF(a.CharStrings[J],i,a,o,l),i.x=re,i.y=G,e.U._drawCFF(a.CharStrings[j],i,a,o,l)}f&&(e.U.P.closePath(l),f=!1)}else if(C=="o19"||C=="o20")c.length%2!=0&&!d&&(u=c.shift()+o.nominalWidthX),h+=c.length>>1,c.length=0,d=!0,g+=h+7>>3;else if(C=="o21")c.length>2&&!d&&(u=c.shift()+o.nominalWidthX,d=!0),p+=c.pop(),x+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,x,p),f=!0;else if(C=="o22")c.length>1&&!d&&(u=c.shift()+o.nominalWidthX,d=!0),x+=c.pop(),f&&e.U.P.closePath(l),e.U.P.moveTo(l,x,p),f=!0;else if(C=="o25"){for(;c.length>6;)x+=c.shift(),p+=c.shift(),e.U.P.lineTo(l,x,p);m=x+c.shift(),S=p+c.shift(),E=m+c.shift(),y=S+c.shift(),x=E+c.shift(),p=y+c.shift(),e.U.P.curveTo(l,m,S,E,y,x,p)}else if(C=="o26")for(c.length%2&&(x+=c.shift());c.length>0;)m=x,S=p+c.shift(),x=E=m+c.shift(),p=(y=S+c.shift())+c.shift(),e.U.P.curveTo(l,m,S,E,y,x,p);else if(C=="o27")for(c.length%2&&(p+=c.shift());c.length>0;)S=p,E=(m=x+c.shift())+c.shift(),y=S+c.shift(),x=E+c.shift(),p=y,e.U.P.curveTo(l,m,S,E,y,x,p);else if(C=="o10"||C=="o29"){var ae=C=="o10"?o:a;if(c.length==0)console.debug("error: empty stack");else{var Q=c.pop(),me=ae.Subrs[Q+ae.Bias];i.x=x,i.y=p,i.nStems=h,i.haveWidth=d,i.width=u,i.open=f,e.U._drawCFF(me,i,a,o,l),x=i.x,p=i.y,h=i.nStems,d=i.haveWidth,u=i.width,f=i.open}}else if(C=="o30"||C=="o31"){var B=c.length,H=(K=0,C=="o31");for(K+=B-(N=-3&B);K<N;)H?(S=p,E=(m=x+c.shift())+c.shift(),p=(y=S+c.shift())+c.shift(),N-K==5?(x=E+c.shift(),K++):x=E,H=!1):(m=x,S=p+c.shift(),E=m+c.shift(),y=S+c.shift(),x=E+c.shift(),N-K==5?(p=y+c.shift(),K++):p=y,H=!0),e.U.P.curveTo(l,m,S,E,y,x,p),K+=4}else{if((C+"").charAt(0)=="o")throw console.debug("Unknown operation: "+C,n),C;c.push(C)}}}i.x=x,i.y=p,i.nStems=h,i.haveWidth=d,i.width=u,i.open=f};var t=e,r={Typr:t};return s.Typr=t,s.default=r,Object.defineProperty(s,"__esModule",{value:!0}),s})({}).Typr}function Mv(){return(function(s){var e=Uint8Array,t=Uint16Array,r=Uint32Array,n=new e([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),i=new e([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),a=new e([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),o=function(C,N){for(var R=new t(31),O=0;O<31;++O)R[O]=N+=1<<C[O-1];var z=new r(R[30]);for(O=1;O<30;++O)for(var K=R[O];K<R[O+1];++K)z[K]=K-R[O]<<5|O;return[R,z]},l=o(n,2),c=l[0],h=l[1];c[28]=258,h[258]=28;for(var d=o(i,0)[0],u=new t(32768),f=0;f<32768;++f){var g=(43690&f)>>>1|(21845&f)<<1;g=(61680&(g=(52428&g)>>>2|(13107&g)<<2))>>>4|(3855&g)<<4,u[f]=((65280&g)>>>8|(255&g)<<8)>>>1}var x=function(C,N,R){for(var O=C.length,z=0,K=new t(N);z<O;++z)++K[C[z]-1];var re,G=new t(N);for(z=0;z<N;++z)G[z]=G[z-1]+K[z-1]<<1;if(R){re=new t(1<<N);var V=15-N;for(z=0;z<O;++z)if(C[z])for(var U=z<<4|C[z],J=N-C[z],j=G[C[z]-1]++<<J,ae=j|(1<<J)-1;j<=ae;++j)re[u[j]>>>V]=U}else for(re=new t(O),z=0;z<O;++z)C[z]&&(re[z]=u[G[C[z]-1]++]>>>15-C[z]);return re},p=new e(288);for(f=0;f<144;++f)p[f]=8;for(f=144;f<256;++f)p[f]=9;for(f=256;f<280;++f)p[f]=7;for(f=280;f<288;++f)p[f]=8;var m=new e(32);for(f=0;f<32;++f)m[f]=5;var S=x(p,9,1),E=x(m,5,1),y=function(C){for(var N=C[0],R=1;R<C.length;++R)C[R]>N&&(N=C[R]);return N},b=function(C,N,R){var O=N/8|0;return(C[O]|C[O+1]<<8)>>(7&N)&R},M=function(C,N){var R=N/8|0;return(C[R]|C[R+1]<<8|C[R+2]<<16)>>(7&N)},A=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],v=function(C,N,R){var O=new Error(N||A[C]);if(O.code=C,Error.captureStackTrace&&Error.captureStackTrace(O,v),!R)throw O;return O},T=function(C,N,R){var O=C.length;if(!O||R&&!R.l&&O<5)return N||new e(0);var z=!N||R,K=!R||R.i;R||(R={}),N||(N=new e(3*O));var re,G=function(ue){var Be=N.length;if(ue>Be){var Te=new e(Math.max(2*Be,ue));Te.set(N),N=Te}},V=R.f||0,U=R.p||0,J=R.b||0,j=R.l,ae=R.d,Q=R.m,me=R.n,B=8*O;do{if(!j){R.f=V=b(C,U,1);var H=b(C,U+1,3);if(U+=3,!H){var de=C[(qe=((re=U)/8|0)+(7&re&&1)+4)-4]|C[qe-3]<<8,we=qe+de;if(we>O){K&&v(0);break}z&&G(J+de),N.set(C.subarray(qe,we),J),R.b=J+=de,R.p=U=8*we;continue}if(H==1)j=S,ae=E,Q=9,me=5;else if(H==2){var ce=b(C,U,31)+257,fe=b(C,U+10,15)+4,st=ce+b(C,U+5,31)+1;U+=14;for(var Ue=new e(st),Ee=new e(19),Ne=0;Ne<fe;++Ne)Ee[a[Ne]]=b(C,U+3*Ne,7);U+=3*fe;var Ce=y(Ee),_e=(1<<Ce)-1,Ge=x(Ee,Ce,1);for(Ne=0;Ne<st;){var qe,pe=Ge[b(C,U,_e)];if(U+=15&pe,(qe=pe>>>4)<16)Ue[Ne++]=qe;else{var $e=0,L=0;for(qe==16?(L=3+b(C,U,3),U+=2,$e=Ue[Ne-1]):qe==17?(L=3+b(C,U,7),U+=3):qe==18&&(L=11+b(C,U,127),U+=7);L--;)Ue[Ne++]=$e}}var Se=Ue.subarray(0,ce),be=Ue.subarray(ce);Q=y(Se),me=y(be),j=x(Se,Q,1),ae=x(be,me,1)}else v(1);if(U>B){K&&v(0);break}}z&&G(J+131072);for(var D=(1<<Q)-1,_=(1<<me)-1,k=U;;k=U){var W=($e=j[M(C,U)&D])>>>4;if((U+=15&$e)>B){K&&v(0);break}if($e||v(2),W<256)N[J++]=W;else{if(W==256){k=U,j=null;break}var ee=W-254;if(W>264){var ye=n[Ne=W-257];ee=b(C,U,(1<<ye)-1)+c[Ne],U+=ye}var Me=ae[M(C,U)&_],$=Me>>>4;if(Me||v(3),U+=15&Me,be=d[$],$>3&&(ye=i[$],be+=M(C,U)&(1<<ye)-1,U+=ye),U>B){K&&v(0);break}z&&G(J+131072);for(var se=J+ee;J<se;J+=4)N[J]=N[J-be],N[J+1]=N[J+1-be],N[J+2]=N[J+2-be],N[J+3]=N[J+3-be];J=se}}R.l=j,R.p=k,R.b=J,j&&(V=1,R.m=Q,R.d=ae,R.n=me)}while(!V);return J==N.length?N:(function(ue,Be,Te){(Be==null||Be<0)&&(Be=0),(Te==null||Te>ue.length)&&(Te=ue.length);var xe=new(ue instanceof t?t:ue instanceof r?r:e)(Te-Be);return xe.set(ue.subarray(Be,Te)),xe})(N,0,J)},I=new e(0),P=typeof TextDecoder<"u"&&new TextDecoder;try{P.decode(I,{stream:!0})}catch{}return s.convert_streams=function(C){var N=new DataView(C),R=0;function O(){var ce=N.getUint16(R);return R+=2,ce}function z(){var ce=N.getUint32(R);return R+=4,ce}function K(ce){de.setUint16(we,ce),we+=2}function re(ce){de.setUint32(we,ce),we+=4}for(var G={signature:z(),flavor:z(),length:z(),numTables:O(),reserved:O(),totalSfntSize:z(),majorVersion:O(),minorVersion:O(),metaOffset:z(),metaLength:z(),metaOrigLength:z(),privOffset:z(),privLength:z()},V=0;Math.pow(2,V)<=G.numTables;)V++;V--;for(var U=16*Math.pow(2,V),J=16*G.numTables-U,j=12,ae=[],Q=0;Q<G.numTables;Q++)ae.push({tag:z(),offset:z(),compLength:z(),origLength:z(),origChecksum:z()}),j+=16;var me,B=new Uint8Array(12+16*ae.length+ae.reduce((function(ce,fe){return ce+fe.origLength+4}),0)),H=B.buffer,de=new DataView(H),we=0;return re(G.flavor),K(G.numTables),K(U),K(V),K(J),ae.forEach((function(ce){re(ce.tag),re(ce.origChecksum),re(j),re(ce.origLength),ce.outOffset=j,(j+=ce.origLength)%4!=0&&(j+=4-j%4)})),ae.forEach((function(ce){var fe,st=C.slice(ce.offset,ce.offset+ce.compLength);if(ce.compLength!=ce.origLength){var Ue=new Uint8Array(ce.origLength);fe=new Uint8Array(st,2),T(fe,Ue)}else Ue=new Uint8Array(st);B.set(Ue,ce.outOffset);var Ee=0;(j=ce.outOffset+ce.origLength)%4!=0&&(Ee=4-j%4),B.set(new Uint8Array(Ee).buffer,ce.outOffset+ce.origLength),me=j+Ee})),H.slice(0,me)},Object.defineProperty(s,"__esModule",{value:!0}),s})({}).convert_streams}function wv(s,e){let t={M:2,L:2,Q:4,C:6,Z:0},r={C:"18g,ca,368,1kz",D:"17k,6,2,2+4,5+c,2+6,2+1,10+1,9+f,j+11,2+1,a,2,2+1,15+2,3,j+2,6+3,2+8,2,2,2+1,w+a,4+e,3+3,2,3+2,3+5,23+w,2f+4,3,2+9,2,b,2+3,3,1k+9,6+1,3+1,2+2,2+d,30g,p+y,1,1+1g,f+x,2,sd2+1d,jf3+4,f+3,2+4,2+2,b+3,42,2,4+2,2+1,2,3,t+1,9f+w,2,el+2,2+g,d+2,2l,2+1,5,3+1,2+1,2,3,6,16wm+1v",R:"17m+3,2,2,6+3,m,15+2,2+2,h+h,13,3+8,2,2,3+1,2,p+1,x,5+4,5,a,2,2,3,u,c+2,g+1,5,2+1,4+1,5j,6+1,2,b,2+2,f,2+1,1s+2,2,3+1,7,1ez0,2,2+1,4+4,b,4,3,b,42,2+2,4,3,2+1,2,o+3,ae,ep,x,2o+2,3+1,3,5+1,6",L:"x9u,jff,a,fd,jv",T:"4t,gj+33,7o+4,1+1,7c+18,2,2+1,2+1,2,21+a,2,1b+k,h,2u+6,3+5,3+1,2+3,y,2,v+q,2k+a,1n+8,a,p+3,2+8,2+2,2+4,18+2,3c+e,2+v,1k,2,5+7,5,4+6,b+1,u,1n,5+3,9,l+1,r,3+1,1m,5+1,5+1,3+2,4,v+1,4,c+1,1m,5+4,2+1,5,l+1,n+5,2,1n,3,2+3,9,8+1,c+1,v,1q,d,1f,4,1m+2,6+2,2+3,8+1,c+1,u,1n,3,7,6+1,l+1,t+1,1m+1,5+3,9,l+1,u,21,8+2,2,2j,3+6,d+7,2r,3+8,c+5,23+1,s,2,2,1k+d,2+4,2+1,6+a,2+z,a,2v+3,2+5,2+1,3+1,q+1,5+2,h+3,e,3+1,7,g,jk+2,qb+2,u+2,u+1,v+1,1t+1,2+6,9,3+a,a,1a+2,3c+1,z,3b+2,5+1,a,7+2,64+1,3,1n,2+6,2,2,3+7,7+9,3,1d+d,1,1+1,1s+3,1d,2+4,2,6,15+8,d+1,x+3,3+1,2+2,1l,2+1,4,2+2,1n+7,3+1,49+2,2+c,2+6,5,7,4+1,5j+1l,2+4,ek,3+1,r+4,1e+4,6+5,2p+c,1+3,1,1+2,1+b,2db+2,3y,2p+v,ff+3,30+1,n9x,1+2,2+9,x+1,29+1,7l,4,5,q+1,6,48+1,r+h,e,13+7,q+a,1b+2,1d,3+3,3+1,14,1w+5,3+1,3+1,d,9,1c,1g,2+2,3+1,6+1,2,17+1,9,6n,3,5,fn5,ki+f,h+f,5s,6y+2,ea,6b,46+4,1af+2,2+1,6+3,15+2,5,4m+1,fy+3,as+1,4a+a,4x,1j+e,1l+2,1e+3,3+1,1y+2,11+4,2+7,1r,d+1,1h+8,b+3,3,2o+2,3,2+1,7,4h,4+7,m+1,1m+1,4,12+6,4+4,5g+7,3+2,2,o,2d+5,2,5+1,2+1,6n+3,7+1,2+1,s+1,2e+7,3,2+1,2z,2,3+5,2,2u+2,3+3,2+4,78+8,2+1,75+1,2,5,41+3,3+1,5,x+9,15+5,3+3,9,a+5,3+2,1b+c,2+1,bb+6,2+5,2,2b+l,3+6,2+1,2+1,3f+5,4,2+1,2+6,2,21+1,4,2,9o+1,470+8,at4+4,1o+6,t5,1s+3,2a,f5l+1,2+3,43o+2,a+7,1+7,3+6,v+3,45+2,1j0+1i,5+1d,9,f,n+4,2+e,11t+6,2+g,3+6,2+1,2+4,7a+6,c6+3,15t+6,32+6,1,gzau,v+2n,3l+6n"},n=1,i=2,a=4,o=8,l=16,c=32,h;function d(A){if(!h){let v={R:i,L:n,D:a,C:l,U:c,T:o};h=new Map;for(let T in r){let I=0;r[T].split(",").forEach(P=>{let[C,N]=P.split("+");C=parseInt(C,36),N=N?parseInt(N,36):0,h.set(I+=C,v[T]);for(let R=N;R--;)h.set(++I,v[T])})}}return h.get(A)||c}let u=1,f=2,g=3,x=4,p=[null,"isol","init","fina","medi"];function m(A){let v=new Uint8Array(A.length),T=c,I=u,P=-1;for(let C=0;C<A.length;C++){let N=A.codePointAt(C),R=d(N)|0,O=u;R&o||(T&(n|a|l)?R&(i|a|l)?(O=g,(I===u||I===g)&&v[P]++):R&(n|c)&&(I===f||I===x)&&v[P]--:T&(i|c)&&(I===f||I===x)&&v[P]--,I=v[C]=O,T=R,P=C,N>65535&&C++)}return v}function S(A,v){let T=[];for(let P=0;P<v.length;P++){let C=v.codePointAt(P);C>65535&&P++,T.push(s.U.codeToGlyph(A,C))}let I=A.GSUB;if(I){let{lookupList:P,featureList:C}=I,N,R=/^(rlig|liga|mset|isol|init|fina|medi|half|pres|blws|ccmp)$/,O=[];C.forEach(z=>{if(R.test(z.tag))for(let K=0;K<z.tab.length;K++){if(O[z.tab[K]])continue;O[z.tab[K]]=!0;let re=P[z.tab[K]],G=/^(isol|init|fina|medi)$/.test(z.tag);G&&!N&&(N=m(v));for(let V=0;V<T.length;V++)(!N||!G||p[N[V]]===z.tag)&&s.U._applySubs(T,V,re,P)}})}return T}function E(A,v){let T=new Int16Array(v.length*3),I=0;for(;I<v.length;I++){let R=v[I];if(R===-1)continue;T[I*3+2]=A.hmtx.aWidth[R];let O=A.GPOS;if(O){let z=O.lookupList;for(let K=0;K<z.length;K++){let re=z[K];for(let G=0;G<re.tabs.length;G++){let V=re.tabs[G];if(re.ltype===1){if(s._lctf.coverageIndex(V.coverage,R)!==-1&&V.pos){N(V.pos,I);break}}else if(re.ltype===2){let U=null,J=P();if(J!==-1){let j=s._lctf.coverageIndex(V.coverage,v[J]);if(j!==-1){if(V.fmt===1){let ae=V.pairsets[j];for(let Q=0;Q<ae.length;Q++)ae[Q].gid2===R&&(U=ae[Q])}else if(V.fmt===2){let ae=s.U._getGlyphClass(v[J],V.classDef1),Q=s.U._getGlyphClass(R,V.classDef2);U=V.matrix[ae][Q]}if(U){U.val1&&N(U.val1,J),U.val2&&N(U.val2,I);break}}}}else if(re.ltype===4){let U=s._lctf.coverageIndex(V.markCoverage,R);if(U!==-1){let J=P(C),j=J===-1?-1:s._lctf.coverageIndex(V.baseCoverage,v[J]);if(j!==-1){let ae=V.markArray[U],Q=V.baseArray[j][ae.markClass];T[I*3]=Q.x-ae.x+T[J*3]-T[J*3+2],T[I*3+1]=Q.y-ae.y+T[J*3+1];break}}}else if(re.ltype===6){let U=s._lctf.coverageIndex(V.mark1Coverage,R);if(U!==-1){let J=P();if(J!==-1){let j=v[J];if(y(A,j)===3){let ae=s._lctf.coverageIndex(V.mark2Coverage,j);if(ae!==-1){let Q=V.mark1Array[U],me=V.mark2Array[ae][Q.markClass];T[I*3]=me.x-Q.x+T[J*3]-T[J*3+2],T[I*3+1]=me.y-Q.y+T[J*3+1];break}}}}}}}}else if(A.kern&&!A.cff){let z=P();if(z!==-1){let K=A.kern.glyph1.indexOf(v[z]);if(K!==-1){let re=A.kern.rval[K].glyph2.indexOf(R);re!==-1&&(T[z*3+2]+=A.kern.rval[K].vals[re])}}}}return T;function P(R){for(let O=I-1;O>=0;O--)if(v[O]!==-1&&(!R||R(v[O])))return O;return-1}function C(R){return y(A,R)===1}function N(R,O){for(let z=0;z<3;z++)T[O*3+z]+=R[z]||0}}function y(A,v){let T=A.GDEF&&A.GDEF.glyphClassDef;return T?s.U._getGlyphClass(v,T):0}function b(...A){for(let v=0;v<A.length;v++)if(typeof A[v]=="number")return A[v]}function M(A){let v=Object.create(null),T=A["OS/2"],I=A.hhea,P=A.head.unitsPerEm,C=b(T&&T.sTypoAscender,I&&I.ascender,P),N={unitsPerEm:P,ascender:C,descender:b(T&&T.sTypoDescender,I&&I.descender,0),capHeight:b(T&&T.sCapHeight,C),xHeight:b(T&&T.sxHeight,C),lineGap:b(T&&T.sTypoLineGap,I&&I.lineGap),supportsCodePoint(R){return s.U.codeToGlyph(A,R)>0},forEachGlyph(R,O,z,K){let re=0,G=1/N.unitsPerEm*O,V=S(A,R),U=0,J=E(A,V);return V.forEach((j,ae)=>{if(j!==-1){let Q=v[j];if(!Q){let{cmds:me,crds:B}=s.U.glyphToPath(A,j),H="",de=0;for(let Ue=0,Ee=me.length;Ue<Ee;Ue++){let Ne=t[me[Ue]];H+=me[Ue];for(let Ce=1;Ce<=Ne;Ce++)H+=(Ce>1?",":"")+B[de++]}let we,ce,fe,st;if(B.length){we=ce=1/0,fe=st=-1/0;for(let Ue=0,Ee=B.length;Ue<Ee;Ue+=2){let Ne=B[Ue],Ce=B[Ue+1];Ne<we&&(we=Ne),Ce<ce&&(ce=Ce),Ne>fe&&(fe=Ne),Ce>st&&(st=Ce)}}else we=fe=ce=st=0;Q=v[j]={index:j,advanceWidth:A.hmtx.aWidth[j],xMin:we,yMin:ce,xMax:fe,yMax:st,path:H}}K.call(null,Q,re+J[ae*3]*G,J[ae*3+1]*G,U),re+=J[ae*3+2]*G,z&&(re+=z*O)}U+=R.codePointAt(U)>65535?2:1}),re}};return N}return function(v){let T=new Uint8Array(v,0,4),I=s._bin.readASCII(T,0,4);if(I==="wOFF")v=e(v);else if(I==="wOF2")throw new Error("woff2 fonts not supported");return M(s.parse(v)[0])}}var Tv=mr({name:"Typr Font Parser",dependencies:[bv,Mv,wv],init(s,e,t){let r=s(),n=e();return t(r,n)}});function Av(){return(function(s){var e=function(){this.buckets=new Map};e.prototype.add=function(E){var y=E>>5;this.buckets.set(y,(this.buckets.get(y)||0)|1<<(31&E))},e.prototype.has=function(E){var y=this.buckets.get(E>>5);return y!==void 0&&(y&1<<(31&E))!=0},e.prototype.serialize=function(){var E=[];return this.buckets.forEach((function(y,b){E.push((+b).toString(36)+":"+y.toString(36))})),E.join(",")},e.prototype.deserialize=function(E){var y=this;this.buckets.clear(),E.split(",").forEach((function(b){var M=b.split(":");y.buckets.set(parseInt(M[0],36),parseInt(M[1],36))}))};var t=Math.pow(2,8),r=t-1,n=~r;function i(E){var y=(function(M){return M&n})(E).toString(16),b=(function(M){return(M&n)+t-1})(E).toString(16);return"codepoint-index/plane"+(E>>16)+"/"+y+"-"+b+".json"}function a(E,y){var b=E&r,M=y.codePointAt(b/6|0);return((M=(M||48)-48)&1<<b%6)!=0}function o(E,y){var b;(b=E,b.replace(/U\+/gi,"").replace(/^,+|,+$/g,"").split(/,+/).map((function(M){return M.split("-").map((function(A){return parseInt(A.trim(),16)}))}))).forEach((function(M){var A=M[0],v=M[1];v===void 0&&(v=A),y(A,v)}))}function l(E,y){o(E,(function(b,M){for(var A=b;A<=M;A++)y(A)}))}var c={},h={},d=new WeakMap,u="https://cdn.jsdelivr.net/gh/lojjic/unicode-font-resolver@v1.0.1/packages/data";function f(E){var y=d.get(E);return y||(y=new e,l(E.ranges,(function(b){return y.add(b)})),d.set(E,y)),y}var g,x=new Map;function p(E,y,b){return E[y]?y:E[b]?b:(function(M){for(var A in M)return A})(E)}function m(E,y){var b=y;if(!E.includes(b)){b=1/0;for(var M=0;M<E.length;M++)Math.abs(E[M]-y)<Math.abs(b-y)&&(b=E[M])}return b}function S(E){return g||(g=new Set,l("9-D,20,85,A0,1680,2000-200A,2028-202F,205F,3000",(function(y){g.add(y)}))),g.has(E)}return s.CodePointSet=e,s.clearCache=function(){c={},h={}},s.getFontsForString=function(E,y){y===void 0&&(y={});var b,M=y.lang;M===void 0&&(M=/\p{Script=Hangul}/u.test(b=E)?"ko":/\p{Script=Hiragana}|\p{Script=Katakana}/u.test(b)?"ja":"en");var A=y.category;A===void 0&&(A="sans-serif");var v=y.style;v===void 0&&(v="normal");var T=y.weight;T===void 0&&(T=400);var I=(y.dataUrl||u).replace(/\/$/g,""),P=new Map,C=new Uint8Array(E.length),N={},R={},O=new Array(E.length),z=new Map,K=!1;function re(U){var J=x.get(U);return J||(J=fetch(I+"/"+U).then((function(j){if(!j.ok)throw new Error(j.statusText);return j.json().then((function(ae){if(!Array.isArray(ae)||ae[0]!==1)throw new Error("Incorrect schema version; need 1, got "+ae[0]);return ae[1]}))})).catch((function(j){if(I!==u)return K||(console.error('unicode-font-resolver: Failed loading from dataUrl "'+I+'", trying default CDN. '+j.message),K=!0),I=u,x.delete(U),re(U);throw j})),x.set(U,J)),J}for(var G=function(U){var J=E.codePointAt(U),j=i(J);O[U]=j,c[j]||z.has(j)||z.set(j,re(j).then((function(ae){c[j]=ae}))),J>65535&&(U++,V=U)},V=0;V<E.length;V++)G(V);return Promise.all(z.values()).then((function(){z.clear();for(var U=function(j){var ae=E.codePointAt(j),Q=null,me=c[O[j]],B=void 0;for(var H in me){var de=R[H];if(de===void 0&&(de=R[H]=new RegExp(H).test(M||"en")),de){for(var we in B=H,me[H])if(a(ae,me[H][we])){Q=we;break}break}}if(!Q){e:for(var ce in me)if(ce!==B){for(var fe in me[ce])if(a(ae,me[ce][fe])){Q=fe;break e}}}Q||(console.debug("No font coverage for U+"+ae.toString(16)),Q="latin"),O[j]=Q,h[Q]||z.has(Q)||z.set(Q,re("font-meta/"+Q+".json").then((function(st){h[Q]=st}))),ae>65535&&(j++,J=j)},J=0;J<E.length;J++)U(J);return Promise.all(z.values())})).then((function(){for(var U,J=null,j=0;j<E.length;j++){var ae=E.codePointAt(j);if(J&&(S(ae)||f(J).has(ae)))C[j]=C[j-1];else{J=h[O[j]];var Q=N[J.id];if(!Q){var me=J.typeforms,B=p(me,A,"sans-serif"),H=p(me[B],v,"normal"),de=m((U=me[B])===null||U===void 0?void 0:U[H],T);Q=N[J.id]=I+"/font-files/"+J.id+"/"+B+"."+H+"."+de+".woff"}var we=P.get(Q);we==null&&(we=P.size,P.set(Q,we)),C[j]=we}ae>65535&&(j++,C[j]=C[j-1])}return{fontUrls:Array.from(P.keys()),chars:C}}))},Object.defineProperty(s,"__esModule",{value:!0}),s})({})}function Ev(s,e){let t=Object.create(null),r=Object.create(null);function n(a,o){let l=c=>{console.error(`Failure loading font ${a}`,c)};try{let c=new XMLHttpRequest;c.open("get",a,!0),c.responseType="arraybuffer",c.onload=function(){if(c.status>=400)l(new Error(c.statusText));else if(c.status>0)try{let h=s(c.response);h.src=a,o(h)}catch(h){l(h)}},c.onerror=l,c.send()}catch(c){l(c)}}function i(a,o){let l=t[a];l?o(l):r[a]?r[a].push(o):(r[a]=[o],n(a,c=>{c.src=a,t[a]=c,r[a].forEach(h=>h(c)),delete r[a]}))}return function(a,o,{lang:l,fonts:c=[],style:h="normal",weight:d="normal",unicodeFontsURL:u}={}){let f=new Uint8Array(a.length),g=[];a.length||S();let x=new Map,p=[];if(h!=="italic"&&(h="normal"),typeof d!="number"&&(d=d==="bold"?700:400),c&&!Array.isArray(c)&&(c=[c]),c=c.slice().filter(y=>!y.lang||y.lang.test(l)).reverse(),c.length){let A=0;(function v(T=0){for(let I=T,P=a.length;I<P;I++){let C=a.codePointAt(I);if(A===1&&g[f[I-1]].supportsCodePoint(C)||I>0&&/\s/.test(a[I]))f[I]=f[I-1],A===2&&(p[p.length-1][1]=I);else for(let N=f[I],R=c.length;N<=R;N++)if(N===R){let O=A===2?p[p.length-1]:p[p.length]=[I,I];O[1]=I,A=2}else{f[I]=N;let{src:O,unicodeRange:z}=c[N];if(!z||E(C,z)){let K=t[O];if(!K){i(O,()=>{v(I)});return}if(K.supportsCodePoint(C)){let re=x.get(K);typeof re!="number"&&(re=g.length,g.push(K),x.set(K,re)),f[I]=re,A=1;break}}}C>65535&&I+1<P&&(f[I+1]=f[I],I++,A===2&&(p[p.length-1][1]=I))}m()})()}else p.push([0,a.length-1]),m();function m(){if(p.length){let y=p.map(b=>a.substring(b[0],b[1]+1)).join(`
`);e.getFontsForString(y,{lang:l||void 0,style:h,weight:d,dataUrl:u}).then(({fontUrls:b,chars:M})=>{let A=g.length,v=0;p.forEach(I=>{for(let P=0,C=I[1]-I[0];P<=C;P++)f[I[0]+P]=M[v++]+A;v++});let T=0;b.forEach((I,P)=>{i(I,C=>{g[P+A]=C,++T===b.length&&S()})})})}else S()}function S(){o({chars:f,fonts:g})}function E(y,b){for(let M=0;M<b.length;M++){let[A,v=A]=b[M];if(A<=y&&y<=v)return!0}return!1}}}var Cv=mr({name:"FontResolver",dependencies:[Ev,Tv,Av],init(s,e,t){return s(e,t())}});function Rv(s,e){let r=/[\u00AD\u034F\u061C\u115F-\u1160\u17B4-\u17B5\u180B-\u180E\u200B-\u200F\u202A-\u202E\u2060-\u206F\u3164\uFE00-\uFE0F\uFEFF\uFFA0\uFFF0-\uFFF8]/,n="[^\\S\\u00A0]",i=new RegExp(`${n}|[\\-\\u007C\\u00AD\\u2010\\u2012-\\u2014\\u2027\\u2056\\u2E17\\u2E40]`);function a({text:g,lang:x,fonts:p,style:m,weight:S,preResolvedFonts:E,unicodeFontsURL:y},b){let M=({chars:A,fonts:v})=>{let T,I,P=[];for(let C=0;C<A.length;C++)A[C]!==I?(I=A[C],P.push(T={start:C,end:C,fontObj:v[A[C]]})):T.end=C;b(P)};E?M(E):s(g,M,{lang:x,fonts:p,style:m,weight:S,unicodeFontsURL:y})}function o({text:g="",font:x,lang:p,sdfGlyphSize:m=64,fontSize:S=400,fontWeight:E=1,fontStyle:y="normal",letterSpacing:b=0,lineHeight:M="normal",maxWidth:A=1/0,direction:v,textAlign:T="left",textIndent:I=0,whiteSpace:P="normal",overflowWrap:C="normal",anchorX:N=0,anchorY:R=0,metricsOnly:O=!1,unicodeFontsURL:z,preResolvedFonts:K=null,includeCaretPositions:re=!1,chunkedBoundsSize:G=8192,colorRanges:V=null},U){let J=d(),j={fontLoad:0,typesetting:0};g.indexOf("\r")>-1&&(console.info("Typesetter: got text with \\r chars; normalizing to \\n"),g=g.replace(/\r\n/g,`
`).replace(/\r/g,`
`)),S=+S,b=+b,A=+A,M=M||"normal",I=+I,a({text:g,lang:p,style:y,weight:E,fonts:typeof x=="string"?[{src:x}]:x,unicodeFontsURL:z,preResolvedFonts:K},ae=>{j.fontLoad=d()-J;let Q=isFinite(A),me=null,B=null,H=null,de=null,we=null,ce=null,fe=null,st=null,Ue=0,Ee=0,Ne=P!=="nowrap",Ce=new Map,_e=d(),Ge=I,qe=0,pe=new u,$e=[pe];ae.forEach(_=>{let{fontObj:k}=_,{ascender:W,descender:ee,unitsPerEm:ye,lineGap:Me,capHeight:$,xHeight:se}=k,ue=Ce.get(k);if(!ue){let Pe=S/ye,Ke=M==="normal"?(W-ee+Me)*Pe:M*S,X=(Ke-(W-ee)*Pe)/2,ve=Math.min(Ke,(W-ee)*Pe),ie=(W+ee)/2*Pe+ve/2;ue={index:Ce.size,src:k.src,fontObj:k,fontSizeMult:Pe,unitsPerEm:ye,ascender:W*Pe,descender:ee*Pe,capHeight:$*Pe,xHeight:se*Pe,lineHeight:Ke,baseline:-X-W*Pe,caretTop:ie,caretBottom:ie-ve},Ce.set(k,ue)}let{fontSizeMult:Be}=ue,Te=g.slice(_.start,_.end+1),xe,Fe;k.forEachGlyph(Te,S,b,(Pe,Ke,X,ve)=>{Ke+=qe,ve+=_.start,xe=Ke,Fe=Pe;let ie=g.charAt(ve),Ae=Pe.advanceWidth*Be,Ie=pe.count,le;if("isEmpty"in Pe||(Pe.isWhitespace=!!ie&&new RegExp(n).test(ie),Pe.canBreakAfter=!!ie&&i.test(ie),Pe.isEmpty=Pe.xMin===Pe.xMax||Pe.yMin===Pe.yMax||r.test(ie)),!Pe.isWhitespace&&!Pe.isEmpty&&Ee++,Ne&&Q&&!Pe.isWhitespace&&Ke+Ae+Ge>A&&Ie){if(pe.glyphAt(Ie-1).glyphObj.canBreakAfter)le=new u,Ge=-Ke;else for(let Xe=Ie;Xe--;)if(Xe===0&&C==="break-word"){le=new u,Ge=-Ke;break}else if(pe.glyphAt(Xe).glyphObj.canBreakAfter){le=pe.splitAt(Xe+1);let gt=le.glyphAt(0).x;Ge-=gt;for(let ut=le.count;ut--;)le.glyphAt(ut).x-=gt;break}le&&(pe.isSoftWrapped=!0,pe=le,$e.push(pe),Ue=A)}let Ve=pe.glyphAt(pe.count);Ve.glyphObj=Pe,Ve.x=Ke+Ge,Ve.y=X,Ve.width=Ae,Ve.charIndex=ve,Ve.fontData=ue,ie===`
`&&(pe=new u,$e.push(pe),Ge=-(Ke+Ae+b*S)+I)}),qe=xe+Fe.advanceWidth*Be+b*S});let L=0;$e.forEach(_=>{let k=!0;for(let W=_.count;W--;){let ee=_.glyphAt(W);k&&!ee.glyphObj.isWhitespace&&(_.width=ee.x+ee.width,_.width>Ue&&(Ue=_.width),k=!1);let{lineHeight:ye,capHeight:Me,xHeight:$,baseline:se}=ee.fontData;ye>_.lineHeight&&(_.lineHeight=ye);let ue=se-_.baseline;ue<0&&(_.baseline+=ue,_.cap+=ue,_.ex+=ue),_.cap=Math.max(_.cap,_.baseline+Me),_.ex=Math.max(_.ex,_.baseline+$)}_.baseline-=L,_.cap-=L,_.ex-=L,L+=_.lineHeight});let Se=0,be=0;if(N&&(typeof N=="number"?Se=-N:typeof N=="string"&&(Se=-Ue*(N==="left"?0:N==="center"?.5:N==="right"?1:c(N)))),R&&(typeof R=="number"?be=-R:typeof R=="string"&&(be=R==="top"?0:R==="top-baseline"?-$e[0].baseline:R==="top-cap"?-$e[0].cap:R==="top-ex"?-$e[0].ex:R==="middle"?L/2:R==="bottom"?L:R==="bottom-baseline"?-$e[$e.length-1].baseline:c(R)*L)),!O){let _=e.getEmbeddingLevels(g,v);me=new Uint16Array(Ee),B=new Uint8Array(Ee),H=new Float32Array(Ee*2),de={},fe=[1/0,1/0,-1/0,-1/0],st=[],re&&(ce=new Float32Array(g.length*4)),V&&(we=new Uint8Array(Ee*3));let k=0,W=-1,ee=-1,ye,Me;if($e.forEach(($,se)=>{let{count:ue,width:Be}=$;if(ue>0){let Te=0;for(let ve=ue;ve--&&$.glyphAt(ve).glyphObj.isWhitespace;)Te++;let xe=0,Fe=0;if(T==="center")xe=(Ue-Be)/2;else if(T==="right")xe=Ue-Be;else if(T==="justify"&&$.isSoftWrapped){let ve=0;for(let ie=ue-Te;ie--;)$.glyphAt(ie).glyphObj.isWhitespace&&ve++;Fe=(Ue-Be)/ve}if(Fe||xe){let ve=0;for(let ie=0;ie<ue;ie++){let Ae=$.glyphAt(ie),Ie=Ae.glyphObj;Ae.x+=xe+ve,Fe!==0&&Ie.isWhitespace&&ie<ue-Te&&(ve+=Fe,Ae.width+=Fe)}}let Pe=e.getReorderSegments(g,_,$.glyphAt(0).charIndex,$.glyphAt($.count-1).charIndex);for(let ve=0;ve<Pe.length;ve++){let[ie,Ae]=Pe[ve],Ie=1/0,le=-1/0;for(let Ve=0;Ve<ue;Ve++)if($.glyphAt(Ve).charIndex>=ie){let Xe=Ve,gt=Ve;for(;gt<ue;gt++){let ut=$.glyphAt(gt);if(ut.charIndex>Ae)break;gt<ue-Te&&(Ie=Math.min(Ie,ut.x),le=Math.max(le,ut.x+ut.width))}for(let ut=Xe;ut<gt;ut++){let Et=$.glyphAt(ut);Et.x=le-(Et.x+Et.width-Ie)}break}}let Ke,X=ve=>Ke=ve;for(let ve=0;ve<ue;ve++){let ie=$.glyphAt(ve);Ke=ie.glyphObj;let Ae=Ke.index,Ie=_.levels[ie.charIndex]&1;if(Ie){let le=e.getMirroredCharacter(g[ie.charIndex]);le&&ie.fontData.fontObj.forEachGlyph(le,0,0,X)}if(re){let{charIndex:le,fontData:Ve}=ie,Xe=ie.x+Se,gt=ie.x+ie.width+Se;ce[le*4]=Ie?gt:Xe,ce[le*4+1]=Ie?Xe:gt,ce[le*4+2]=$.baseline+Ve.caretBottom+be,ce[le*4+3]=$.baseline+Ve.caretTop+be;let ut=le-W;ut>1&&h(ce,W,ut),W=le}if(V){let{charIndex:le}=ie;for(;le>ee;)ee++,V.hasOwnProperty(ee)&&(Me=V[ee])}if(!Ke.isWhitespace&&!Ke.isEmpty){let le=k++,{fontSizeMult:Ve,src:Xe,index:gt}=ie.fontData,ut=de[Xe]||(de[Xe]={});ut[Ae]||(ut[Ae]={path:Ke.path,pathBounds:[Ke.xMin,Ke.yMin,Ke.xMax,Ke.yMax]});let Et=ie.x+Se,Ft=ie.y+$.baseline+be;H[le*2]=Et,H[le*2+1]=Ft;let _n=Et+Ke.xMin*Ve,Tn=Ft+Ke.yMin*Ve,An=Et+Ke.xMax*Ve,Gt=Ft+Ke.yMax*Ve;_n<fe[0]&&(fe[0]=_n),Tn<fe[1]&&(fe[1]=Tn),An>fe[2]&&(fe[2]=An),Gt>fe[3]&&(fe[3]=Gt),le%G===0&&(ye={start:le,end:le,rect:[1/0,1/0,-1/0,-1/0]},st.push(ye)),ye.end++;let nn=ye.rect;if(_n<nn[0]&&(nn[0]=_n),Tn<nn[1]&&(nn[1]=Tn),An>nn[2]&&(nn[2]=An),Gt>nn[3]&&(nn[3]=Gt),me[le]=Ae,B[le]=gt,V){let yn=le*3;we[yn]=Me>>16&255,we[yn+1]=Me>>8&255,we[yn+2]=Me&255}}}}}),ce){let $=g.length-W;$>1&&h(ce,W,$)}}let D=[];Ce.forEach(({index:_,src:k,unitsPerEm:W,ascender:ee,descender:ye,lineHeight:Me,capHeight:$,xHeight:se})=>{D[_]={src:k,unitsPerEm:W,ascender:ee,descender:ye,lineHeight:Me,capHeight:$,xHeight:se}}),j.typesetting=d()-_e,U({glyphIds:me,glyphFontIndices:B,glyphPositions:H,glyphData:de,fontData:D,caretPositions:ce,glyphColors:we,chunkedBounds:st,fontSize:S,topBaseline:be+$e[0].baseline,blockBounds:[Se,be-L,Se+Ue,be],visibleBounds:fe,timings:j})})}function l(g,x){o({...g,metricsOnly:!0},p=>{let[m,S,E,y]=p.blockBounds;x({width:E-m,height:y-S})})}function c(g){let x=g.match(/^([\d.]+)%$/),p=x?parseFloat(x[1]):NaN;return isNaN(p)?0:p/100}function h(g,x,p){let m=g[x*4],S=g[x*4+1],E=g[x*4+2],y=g[x*4+3],b=(S-m)/p;for(let M=0;M<p;M++){let A=(x+M)*4;g[A]=m+b*M,g[A+1]=m+b*(M+1),g[A+2]=E,g[A+3]=y}}function d(){return(self.performance||Date).now()}function u(){this.data=[]}let f=["glyphObj","x","y","width","charIndex","fontData"];return u.prototype={width:0,lineHeight:0,baseline:0,cap:0,ex:0,isSoftWrapped:!1,get count(){return Math.ceil(this.data.length/f.length)},glyphAt(g){let x=u.flyweight;return x.data=this.data,x.index=g,x},splitAt(g){let x=new u;return x.data=this.data.splice(g*f.length),x}},u.flyweight=f.reduce((g,x,p,m)=>(Object.defineProperty(g,x,{get(){return this.data[this.index*f.length+p]},set(S){this.data[this.index*f.length+p]=S}}),g),{data:null,index:0}),{typeset:o,measure:l}}var _r=()=>(self.performance||Date).now(),vl=qc(),ld;function Pv(s,e,t,r,n,i,a,o,l,c,h=!0){return h?Dv(s,e,t,r,n,i,a,o,l,c).then(null,d=>(ld||(console.warn("WebGL SDF generation failed, falling back to JS",d),ld=!0),hd(s,e,t,r,n,i,a,o,l,c))):hd(s,e,t,r,n,i,a,o,l,c)}var gl=[],Iv=5,$c=0;function _d(){let s=_r();for(;gl.length&&_r()-s<Iv;)gl.shift()();$c=gl.length?setTimeout(_d,0):0}var Dv=(...s)=>new Promise((e,t)=>{gl.push(()=>{let r=_r();try{vl.webgl.generateIntoCanvas(...s),e({timing:_r()-r})}catch(n){t(n)}}),$c||($c=setTimeout(_d,0))}),Uv=4,Lv=2e3,cd={},Fv=0;function hd(s,e,t,r,n,i,a,o,l,c){let h="TroikaTextSDFGenerator_JS_"+Fv++%Uv,d=cd[h];return d||(d=cd[h]={workerModule:mr({name:h,workerId:h,dependencies:[qc,_r],init(u,f){let g=u().javascript.generate;return function(...x){let p=f();return{textureData:g(...x),timing:f()-p}}},getTransferables(u){return[u.textureData.buffer]}}),requests:0,idleTimer:null}),d.requests++,clearTimeout(d.idleTimer),d.workerModule(s,e,t,r,n,i).then(({textureData:u,timing:f})=>{let g=_r(),x=new Uint8Array(u.length*4);for(let p=0;p<u.length;p++)x[p*4+c]=u[p];return vl.webglUtils.renderImageData(a,x,o,l,s,e,1<<3-c),f+=_r()-g,--d.requests===0&&(d.idleTimer=setTimeout(()=>{nd(h)},Lv)),{timing:f}})}function Nv(s){s._warm||(vl.webgl.isSupported(s),s._warm=!0)}var Ov=vl.webglUtils.resizeWebGLCanvasWithoutClearing,vr={defaultFontURL:null,unicodeFontsURL:null,sdfGlyphSize:64,sdfMargin:1/16,sdfExponent:9,textureWidth:2048,useWorker:!0},Bv=new ze,kv=!1;function fs(){return(self.performance||Date).now()}var ud=Object.create(null);function zv(s,e){kv=!0,s=Vv({},s);let t=fs(),{defaultFontURL:r}=vr,n=[];if(r&&n.push({label:"default",src:dd(r)}),s.font&&n.push({label:"user",src:dd(s.font)}),s.font=n,s.text=""+s.text,s.sdfGlyphSize=s.sdfGlyphSize||vr.sdfGlyphSize,s.unicodeFontsURL=s.unicodeFontsURL||vr.unicodeFontsURL,s.colorRanges!=null){let f={};for(let g in s.colorRanges)if(s.colorRanges.hasOwnProperty(g)){let x=s.colorRanges[g];typeof x!="number"&&(x=Bv.set(x).getHex()),f[g]=x}s.colorRanges=f}Object.freeze(s);let{textureWidth:i,sdfExponent:a}=vr,{sdfGlyphSize:o}=s,l=i/o*4,c=ud[o];if(!c){let f=document.createElement("canvas");f.width=i,f.height=o*256/l,c=ud[o]={glyphCount:0,sdfGlyphSize:o,sdfCanvas:f,sdfTexture:new on(f,void 0,void 0,void 0,Zt,Zt),contextLost:!1,glyphsByFont:new Map},c.sdfTexture.generateMipmaps=!1,Gv(c)}let{sdfTexture:h,sdfCanvas:d}=c;(vr.useWorker?Sd:Wv)(s).then(f=>{let{glyphIds:g,glyphFontIndices:x,fontData:p,glyphPositions:m,fontSize:S,timings:E}=f,y=[],b=new Float32Array(g.length*4),M=0,A=0,v=fs(),T=p.map(R=>{let O=c.glyphsByFont.get(R.src);return O||c.glyphsByFont.set(R.src,O=new Map),O});g.forEach((R,O)=>{let z=x[O],{src:K,unitsPerEm:re}=p[z],G=T[z].get(R);if(!G){let{path:ae,pathBounds:Q}=f.glyphData[K][R],me=Math.max(Q[2]-Q[0],Q[3]-Q[1])/o*(vr.sdfMargin*o+.5),B=c.glyphCount++,H=[Q[0]-me,Q[1]-me,Q[2]+me,Q[3]+me];T[z].set(R,G={path:ae,atlasIndex:B,sdfViewBox:H}),y.push(G)}let{sdfViewBox:V}=G,U=m[A++],J=m[A++],j=S/re;b[M++]=U+V[0]*j,b[M++]=J+V[1]*j,b[M++]=U+V[2]*j,b[M++]=J+V[3]*j,g[O]=G.atlasIndex}),E.quads=(E.quads||0)+(fs()-v);let I=fs();E.sdf={};let P=d.height,C=Math.ceil(c.glyphCount/l),N=Math.pow(2,Math.ceil(Math.log2(C*o)));N>P&&(console.info(`Increasing SDF texture size ${P}->${N}`),Ov(d,i,N),h.dispose()),Promise.all(y.map(R=>xd(R,c,s.gpuAccelerateSDF).then(({timing:O})=>{E.sdf[R.atlasIndex]=O}))).then(()=>{y.length&&!c.contextLost&&(yd(c),h.needsUpdate=!0),E.sdfTotal=fs()-I,E.total=fs()-t,e(Object.freeze({parameters:s,sdfTexture:h,sdfGlyphSize:o,sdfExponent:a,glyphBounds:b,glyphAtlasIndices:g,glyphColors:f.glyphColors,caretPositions:f.caretPositions,chunkedBounds:f.chunkedBounds,ascender:f.ascender,descender:f.descender,lineHeight:f.lineHeight,capHeight:f.capHeight,xHeight:f.xHeight,topBaseline:f.topBaseline,blockBounds:f.blockBounds,visibleBounds:f.visibleBounds,timings:f.timings}))})}),Promise.resolve().then(()=>{c.contextLost||Nv(d)})}function xd({path:s,atlasIndex:e,sdfViewBox:t},{sdfGlyphSize:r,sdfCanvas:n,contextLost:i},a){if(i)return Promise.resolve({timing:-1});let{textureWidth:o,sdfExponent:l}=vr,c=Math.max(t[2]-t[0],t[3]-t[1]),h=Math.floor(e/4),d=h%(o/r)*r,u=Math.floor(h/(o/r))*r,f=e%4;return Pv(r,r,s,t,c,l,n,d,u,f,a)}function Gv(s){let e=s.sdfCanvas;e.addEventListener("webglcontextlost",t=>{console.log("Context Lost",t),t.preventDefault(),s.contextLost=!0}),e.addEventListener("webglcontextrestored",t=>{console.log("Context Restored",t),s.contextLost=!1;let r=[];s.glyphsByFont.forEach(n=>{n.forEach(i=>{r.push(xd(i,s,!0))})}),Promise.all(r).then(()=>{yd(s),s.sdfTexture.needsUpdate=!0})})}function Vv(s,e){for(let t in e)e.hasOwnProperty(t)&&(s[t]=e[t]);return s}var pl;function dd(s){return pl||(pl=typeof document>"u"?{}:document.createElement("a")),pl.href=s,pl.href}function yd(s){if(typeof createImageBitmap!="function"){console.info("Safari<15: applying SDF canvas workaround");let{sdfCanvas:e,sdfTexture:t}=s,{width:r,height:n}=e,i=s.sdfCanvas.getContext("webgl"),a=t.image.data;(!a||a.length!==r*n*4)&&(a=new Uint8Array(r*n*4),t.image={width:r,height:n,data:a},t.flipY=!1,t.isDataTexture=!0),i.readPixels(0,0,r,n,i.RGBA,i.UNSIGNED_BYTE,a)}}var Hv=mr({name:"Typesetter",dependencies:[Rv,Cv,id],init(s,e,t){return s(e,t())}}),Sd=mr({name:"Typesetter",dependencies:[Hv],init(s){return function(e){return new Promise(t=>{s.typeset(e,t)})}},getTransferables(s){let e=[];for(let t in s)s[t]&&s[t].buffer&&e.push(s[t].buffer);return e}}),Wv=Sd.onMainThread;var fd={};function Xv(s){let e=fd[s];return e||(e=fd[s]=new Wt(1,1,s,s).translate(.5,.5,0)),e}var Yv="aTroikaGlyphBounds",pd="aTroikaGlyphIndex",qv="aTroikaGlyphColor",Qc=class extends Bs{constructor(){super(),this.detail=1,this.curveRadius=0,this.groups=[{start:0,count:1/0,materialIndex:0},{start:0,count:1/0,materialIndex:1}],this.boundingSphere=new Ti,this.boundingBox=new $n}computeBoundingSphere(){}computeBoundingBox(){}set detail(e){if(e!==this._detail){this._detail=e,(typeof e!="number"||e<1)&&(e=1);let t=Xv(e);["position","normal","uv"].forEach(r=>{this.attributes[r]=t.attributes[r].clone()}),this.setIndex(t.getIndex().clone())}}get detail(){return this._detail}set curveRadius(e){e!==this._curveRadius&&(this._curveRadius=e,this._updateBounds())}get curveRadius(){return this._curveRadius}updateGlyphs(e,t,r,n,i){this.updateAttributeData(Yv,e,4),this.updateAttributeData(pd,t,1),this.updateAttributeData(qv,i,3),this._blockBounds=r,this._chunkedBounds=n,this.instanceCount=t.length,this._updateBounds()}_updateBounds(){let e=this._blockBounds;if(e){let{curveRadius:t,boundingBox:r}=this;if(t){let{PI:n,floor:i,min:a,max:o,sin:l,cos:c}=Math,h=n/2,d=n*2,u=Math.abs(t),f=e[0]/u,g=e[2]/u,x=i((f+h)/d)!==i((g+h)/d)?-u:a(l(f)*u,l(g)*u),p=i((f-h)/d)!==i((g-h)/d)?u:o(l(f)*u,l(g)*u),m=i((f+n)/d)!==i((g+n)/d)?u*2:o(u-c(f)*u,u-c(g)*u);r.min.set(x,e[1],t<0?-m:0),r.max.set(p,e[3],t<0?0:m)}else r.min.set(e[0],e[1],0),r.max.set(e[2],e[3],0);r.getBoundingSphere(this.boundingSphere)}}applyClipRect(e){let t=this.getAttribute(pd).count,r=this._chunkedBounds;if(r)for(let n=r.length;n--;){t=r[n].end;let i=r[n].rect;if(i[1]<e.w&&i[3]>e.y&&i[0]<e.z&&i[2]>e.x)break}this.instanceCount=t}updateAttributeData(e,t,r){let n=this.getAttribute(e);t?n&&n.array.length===t.length?(n.array.set(t),n.needsUpdate=!0):(this.setAttribute(e,new Is(t,r)),delete this._maxInstanceCount,this.dispose()):n&&this.deleteAttribute(e)}},Zv=`
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform vec4 uTroikaTotalBounds;
uniform vec4 uTroikaClipRect;
uniform mat3 uTroikaOrient;
uniform bool uTroikaUseGlyphColors;
uniform float uTroikaEdgeOffset;
uniform float uTroikaBlurRadius;
uniform vec2 uTroikaPositionOffset;
uniform float uTroikaCurveRadius;
attribute vec4 aTroikaGlyphBounds;
attribute float aTroikaGlyphIndex;
attribute vec3 aTroikaGlyphColor;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec3 vTroikaGlyphColor;
varying vec2 vTroikaGlyphDimensions;
`,Jv=`
vec4 bounds = aTroikaGlyphBounds;
bounds.xz += uTroikaPositionOffset.x;
bounds.yw -= uTroikaPositionOffset.y;

vec4 outlineBounds = vec4(
  bounds.xy - uTroikaEdgeOffset - uTroikaBlurRadius,
  bounds.zw + uTroikaEdgeOffset + uTroikaBlurRadius
);
vec4 clippedBounds = vec4(
  clamp(outlineBounds.xy, uTroikaClipRect.xy, uTroikaClipRect.zw),
  clamp(outlineBounds.zw, uTroikaClipRect.xy, uTroikaClipRect.zw)
);

vec2 clippedXY = (mix(clippedBounds.xy, clippedBounds.zw, position.xy) - bounds.xy) / (bounds.zw - bounds.xy);

position.xy = mix(bounds.xy, bounds.zw, clippedXY);

uv = (position.xy - uTroikaTotalBounds.xy) / (uTroikaTotalBounds.zw - uTroikaTotalBounds.xy);

float rad = uTroikaCurveRadius;
if (rad != 0.0) {
  float angle = position.x / rad;
  position.xz = vec2(sin(angle) * rad, rad - cos(angle) * rad);
  normal.xz = vec2(sin(angle), cos(angle));
}
  
position = uTroikaOrient * position;
normal = uTroikaOrient * normal;

vTroikaGlyphUV = clippedXY.xy;
vTroikaGlyphDimensions = vec2(bounds[2] - bounds[0], bounds[3] - bounds[1]);


float txCols = uTroikaSDFTextureSize.x / uTroikaSDFGlyphSize;
vec2 txUvPerSquare = uTroikaSDFGlyphSize / uTroikaSDFTextureSize;
vec2 txStartUV = txUvPerSquare * vec2(
  mod(floor(aTroikaGlyphIndex / 4.0), txCols),
  floor(floor(aTroikaGlyphIndex / 4.0) / txCols)
);
vTroikaTextureUVBounds = vec4(txStartUV, vec2(txStartUV) + txUvPerSquare);
vTroikaTextureChannel = mod(aTroikaGlyphIndex, 4.0);
`,Kv=`
uniform sampler2D uTroikaSDFTexture;
uniform vec2 uTroikaSDFTextureSize;
uniform float uTroikaSDFGlyphSize;
uniform float uTroikaSDFExponent;
uniform float uTroikaEdgeOffset;
uniform float uTroikaFillOpacity;
uniform float uTroikaBlurRadius;
uniform vec3 uTroikaStrokeColor;
uniform float uTroikaStrokeWidth;
uniform float uTroikaStrokeOpacity;
uniform bool uTroikaSDFDebug;
varying vec2 vTroikaGlyphUV;
varying vec4 vTroikaTextureUVBounds;
varying float vTroikaTextureChannel;
varying vec2 vTroikaGlyphDimensions;

float troikaSdfValueToSignedDistance(float alpha) {
  // Inverse of exponential encoding in webgl-sdf-generator
  
  float maxDimension = max(vTroikaGlyphDimensions.x, vTroikaGlyphDimensions.y);
  float absDist = (1.0 - pow(2.0 * (alpha > 0.5 ? 1.0 - alpha : alpha), 1.0 / uTroikaSDFExponent)) * maxDimension;
  float signedDist = absDist * (alpha > 0.5 ? -1.0 : 1.0);
  return signedDist;
}

float troikaGlyphUvToSdfValue(vec2 glyphUV) {
  vec2 textureUV = mix(vTroikaTextureUVBounds.xy, vTroikaTextureUVBounds.zw, glyphUV);
  vec4 rgba = texture2D(uTroikaSDFTexture, textureUV);
  float ch = floor(vTroikaTextureChannel + 0.5); //NOTE: can't use round() in WebGL1
  return ch == 0.0 ? rgba.r : ch == 1.0 ? rgba.g : ch == 2.0 ? rgba.b : rgba.a;
}

float troikaGlyphUvToDistance(vec2 uv) {
  return troikaSdfValueToSignedDistance(troikaGlyphUvToSdfValue(uv));
}

float troikaGetAADist() {
  
  #if defined(GL_OES_standard_derivatives) || __VERSION__ >= 300
  return length(fwidth(vTroikaGlyphUV * vTroikaGlyphDimensions)) * 0.5;
  #else
  return vTroikaGlyphDimensions.x / 64.0;
  #endif
}

float troikaGetFragDistValue() {
  vec2 clampedGlyphUV = clamp(vTroikaGlyphUV, 0.5 / uTroikaSDFGlyphSize, 1.0 - 0.5 / uTroikaSDFGlyphSize);
  float distance = troikaGlyphUvToDistance(clampedGlyphUV);
 
  // Extrapolate distance when outside bounds:
  distance += clampedGlyphUV == vTroikaGlyphUV ? 0.0 : 
    length((vTroikaGlyphUV - clampedGlyphUV) * vTroikaGlyphDimensions);

  

  return distance;
}

float troikaGetEdgeAlpha(float distance, float distanceOffset, float aaDist) {
  #if defined(IS_DEPTH_MATERIAL) || defined(IS_DISTANCE_MATERIAL)
  float alpha = step(-distanceOffset, -distance);
  #else

  float alpha = smoothstep(
    distanceOffset + aaDist,
    distanceOffset - aaDist,
    distance
  );
  #endif

  return alpha;
}
`,jv=`
float aaDist = troikaGetAADist();
float fragDistance = troikaGetFragDistValue();
float edgeAlpha = uTroikaSDFDebug ?
  troikaGlyphUvToSdfValue(vTroikaGlyphUV) :
  troikaGetEdgeAlpha(fragDistance, uTroikaEdgeOffset, max(aaDist, uTroikaBlurRadius));

#if !defined(IS_DEPTH_MATERIAL) && !defined(IS_DISTANCE_MATERIAL)
vec4 fillRGBA = gl_FragColor;
fillRGBA.a *= uTroikaFillOpacity;
vec4 strokeRGBA = uTroikaStrokeWidth == 0.0 ? fillRGBA : vec4(uTroikaStrokeColor, uTroikaStrokeOpacity);
if (fillRGBA.a == 0.0) fillRGBA.rgb = strokeRGBA.rgb;
gl_FragColor = mix(fillRGBA, strokeRGBA, smoothstep(
  -uTroikaStrokeWidth - aaDist,
  -uTroikaStrokeWidth + aaDist,
  fragDistance
));
gl_FragColor.a *= edgeAlpha;
#endif

if (edgeAlpha == 0.0) {
  discard;
}
`;function $v(s){let e=fl(s,{chained:!0,extensions:{derivatives:!0},uniforms:{uTroikaSDFTexture:{value:null},uTroikaSDFTextureSize:{value:new lt},uTroikaSDFGlyphSize:{value:0},uTroikaSDFExponent:{value:0},uTroikaTotalBounds:{value:new Ot(0,0,0,0)},uTroikaClipRect:{value:new Ot(0,0,0,0)},uTroikaEdgeOffset:{value:0},uTroikaFillOpacity:{value:1},uTroikaPositionOffset:{value:new lt},uTroikaCurveRadius:{value:0},uTroikaBlurRadius:{value:0},uTroikaStrokeWidth:{value:0},uTroikaStrokeColor:{value:new ze},uTroikaStrokeOpacity:{value:1},uTroikaOrient:{value:new mt},uTroikaUseGlyphColors:{value:!0},uTroikaSDFDebug:{value:!1}},vertexDefs:Zv,vertexTransform:Jv,fragmentDefs:Kv,fragmentColorTransform:jv,customRewriter({vertexShader:t,fragmentShader:r}){let n=/\buniform\s+vec3\s+diffuse\b/;return n.test(r)&&(r=r.replace(n,"varying vec3 vTroikaGlyphColor").replace(/\bdiffuse\b/g,"vTroikaGlyphColor"),n.test(t)||(t=t.replace(Jc,`uniform vec3 diffuse;
$&
vTroikaGlyphColor = uTroikaUseGlyphColors ? aTroikaGlyphColor / 255.0 : diffuse;
`))),{vertexShader:t,fragmentShader:r}}});return e.transparent=!0,e.forceSinglePass=!0,Object.defineProperties(e,{isTroikaTextMaterial:{value:!0},shadowSide:{get(){return this.side},set(){}}}),e}var eh=new kt({color:16777215,side:Ln,transparent:!0}),md=8421504,gd=new Ut,ml=new Z,Kc=new Z,ua=[],Qv=new Z,jc="+x+y";function vd(s){return Array.isArray(s)?s[0]:s}var bd=()=>{let s=new _t(new Wt(1,1),eh);return bd=()=>s,s},Md=()=>{let s=new _t(new Wt(1,1,32,1),eh);return Md=()=>s,s},e_={type:"syncstart"},t_={type:"synccomplete"},wd=["font","fontSize","fontStyle","fontWeight","lang","letterSpacing","lineHeight","maxWidth","overflowWrap","text","direction","textAlign","textIndent","whiteSpace","anchorX","anchorY","colorRanges","sdfGlyphSize"],n_=wd.concat("material","color","depthOffset","clipRect","curveRadius","orientation","glyphGeometryDetail"),xr=class extends _t{constructor(){let e=new Qc;super(e,null),this.text="",this.anchorX=0,this.anchorY=0,this.curveRadius=0,this.direction="auto",this.font=null,this.unicodeFontsURL=null,this.fontSize=.1,this.fontWeight="normal",this.fontStyle="normal",this.lang=null,this.letterSpacing=0,this.lineHeight="normal",this.maxWidth=1/0,this.overflowWrap="normal",this.textAlign="left",this.textIndent=0,this.whiteSpace="normal",this.material=null,this.color=null,this.colorRanges=null,this.outlineWidth=0,this.outlineColor=0,this.outlineOpacity=1,this.outlineBlur=0,this.outlineOffsetX=0,this.outlineOffsetY=0,this.strokeWidth=0,this.strokeColor=md,this.strokeOpacity=1,this.fillOpacity=1,this.depthOffset=0,this.clipRect=null,this.orientation=jc,this.glyphGeometryDetail=1,this.sdfGlyphSize=null,this.gpuAccelerateSDF=!0,this.debugSDF=!1}sync(e){this._needsSync&&(this._needsSync=!1,this._isSyncing?(this._queuedSyncs||(this._queuedSyncs=[])).push(e):(this._isSyncing=!0,this.dispatchEvent(e_),zv({text:this.text,font:this.font,lang:this.lang,fontSize:this.fontSize||.1,fontWeight:this.fontWeight||"normal",fontStyle:this.fontStyle||"normal",letterSpacing:this.letterSpacing||0,lineHeight:this.lineHeight||"normal",maxWidth:this.maxWidth,direction:this.direction||"auto",textAlign:this.textAlign,textIndent:this.textIndent,whiteSpace:this.whiteSpace,overflowWrap:this.overflowWrap,anchorX:this.anchorX,anchorY:this.anchorY,colorRanges:this.colorRanges,includeCaretPositions:!0,sdfGlyphSize:this.sdfGlyphSize,gpuAccelerateSDF:this.gpuAccelerateSDF,unicodeFontsURL:this.unicodeFontsURL},t=>{this._isSyncing=!1,this._textRenderInfo=t,this.geometry.updateGlyphs(t.glyphBounds,t.glyphAtlasIndices,t.blockBounds,t.chunkedBounds,t.glyphColors);let r=this._queuedSyncs;r&&(this._queuedSyncs=null,this._needsSync=!0,this.sync(()=>{r.forEach(n=>n&&n())})),this.dispatchEvent(t_),e&&e()})))}onBeforeRender(e,t,r,n,i,a){this.sync(),i.isTroikaTextMaterial&&this._prepareForRender(i)}dispose(){this.geometry.dispose()}get textRenderInfo(){return this._textRenderInfo||null}createDerivedMaterial(e){return $v(e)}get material(){let e=this._derivedMaterial,t=this._baseMaterial||this._defaultMaterial||(this._defaultMaterial=eh.clone());if((!e||!e.isDerivedFrom(t))&&(e=this._derivedMaterial=this.createDerivedMaterial(t),t.addEventListener("dispose",function r(){t.removeEventListener("dispose",r),e.dispose()})),this.hasOutline()){let r=e._outlineMtl;return r||(r=e._outlineMtl=Object.create(e,{id:{value:e.id+.1}}),r.isTextOutlineMaterial=!0,r.depthWrite=!1,r.map=null,e.addEventListener("dispose",function n(){e.removeEventListener("dispose",n),r.dispose()})),[r,e]}else return e}set material(e){e&&e.isTroikaTextMaterial?(this._derivedMaterial=e,this._baseMaterial=e.baseMaterial):this._baseMaterial=e}hasOutline(){return!!(this.outlineWidth||this.outlineBlur||this.outlineOffsetX||this.outlineOffsetY)}get glyphGeometryDetail(){return this.geometry.detail}set glyphGeometryDetail(e){this.geometry.detail=e}get curveRadius(){return this.geometry.curveRadius}set curveRadius(e){this.geometry.curveRadius=e}get customDepthMaterial(){return vd(this.material).getDepthMaterial()}set customDepthMaterial(e){}get customDistanceMaterial(){return vd(this.material).getDistanceMaterial()}set customDistanceMaterial(e){}_prepareForRender(e){let t=e.isTextOutlineMaterial,r=e.uniforms,n=this.textRenderInfo;if(n){let{sdfTexture:o,blockBounds:l}=n;r.uTroikaSDFTexture.value=o,r.uTroikaSDFTextureSize.value.set(o.image.width,o.image.height),r.uTroikaSDFGlyphSize.value=n.sdfGlyphSize,r.uTroikaSDFExponent.value=n.sdfExponent,r.uTroikaTotalBounds.value.fromArray(l),r.uTroikaUseGlyphColors.value=!t&&!!n.glyphColors;let c=0,h=0,d=0,u,f,g,x=0,p=0;if(t){let{outlineWidth:S,outlineOffsetX:E,outlineOffsetY:y,outlineBlur:b,outlineOpacity:M}=this;c=this._parsePercent(S)||0,h=Math.max(0,this._parsePercent(b)||0),u=M,x=this._parsePercent(E)||0,p=this._parsePercent(y)||0}else d=Math.max(0,this._parsePercent(this.strokeWidth)||0),d&&(g=this.strokeColor,r.uTroikaStrokeColor.value.set(g??md),f=this.strokeOpacity,f==null&&(f=1)),u=this.fillOpacity;r.uTroikaEdgeOffset.value=c,r.uTroikaPositionOffset.value.set(x,p),r.uTroikaBlurRadius.value=h,r.uTroikaStrokeWidth.value=d,r.uTroikaStrokeOpacity.value=f,r.uTroikaFillOpacity.value=u??1,r.uTroikaCurveRadius.value=this.curveRadius||0;let m=this.clipRect;if(m&&Array.isArray(m)&&m.length===4)r.uTroikaClipRect.value.fromArray(m);else{let S=(this.fontSize||.1)*100;r.uTroikaClipRect.value.set(l[0]-S,l[1]-S,l[2]+S,l[3]+S)}this.geometry.applyClipRect(r.uTroikaClipRect.value)}r.uTroikaSDFDebug.value=!!this.debugSDF,e.polygonOffset=!!this.depthOffset,e.polygonOffsetFactor=e.polygonOffsetUnits=this.depthOffset||0;let i=t?this.outlineColor||0:this.color;if(i==null)delete e.color;else{let o=e.hasOwnProperty("color")?e.color:e.color=new ze;(i!==o._input||typeof i=="object")&&o.set(o._input=i)}let a=this.orientation||jc;if(a!==e._orientation){let o=r.uTroikaOrient.value;a=a.replace(/[^-+xyz]/g,"");let l=a!==jc&&a.match(/^([-+])([xyz])([-+])([xyz])$/);if(l){let[,c,h,d,u]=l;ml.set(0,0,0)[h]=c==="-"?1:-1,Kc.set(0,0,0)[u]=d==="-"?-1:1,gd.lookAt(Qv,ml.cross(Kc),Kc),o.setFromMatrix4(gd)}else o.identity();e._orientation=a}}_parsePercent(e){if(typeof e=="string"){let t=e.match(/^(-?[\d.]+)%$/),r=t?parseFloat(t[1]):NaN;e=(isNaN(r)?0:r/100)*this.fontSize}return e}localPositionToTextCoords(e,t=new lt){t.copy(e);let r=this.curveRadius;return r&&(t.x=Math.atan2(e.x,Math.abs(r)-Math.abs(e.z))*Math.abs(r)),t}worldPositionToTextCoords(e,t=new lt){return ml.copy(e),this.localPositionToTextCoords(this.worldToLocal(ml),t)}raycast(e,t){let{textRenderInfo:r,curveRadius:n}=this;if(r){let i=r.blockBounds,a=n?Md():bd(),o=a.geometry,{position:l,uv:c}=o.attributes;for(let h=0;h<c.count;h++){let d=i[0]+c.getX(h)*(i[2]-i[0]),u=i[1]+c.getY(h)*(i[3]-i[1]),f=0;n&&(f=n-Math.cos(d/n)*n,d=Math.sin(d/n)*n),l.setXYZ(h,d,u,f)}o.boundingSphere=this.geometry.boundingSphere,o.boundingBox=this.geometry.boundingBox,a.matrixWorld=this.matrixWorld,a.material.side=this.material.side,ua.length=0,a.raycast(e,ua);for(let h=0;h<ua.length;h++)ua[h].object=this,t.push(ua[h])}}copy(e){let t=this.geometry;return super.copy(e),this.geometry=t,n_.forEach(r=>{this[r]=e[r]}),this}clone(){return new this.constructor().copy(this)}};wd.forEach(s=>{let e="_private_"+s;Object.defineProperty(xr.prototype,s,{get(){return this[e]},set(t){t!==this[e]&&(this[e]=t,this._needsSync=!0)}})});var p1=new $n,m1=new ze;function Td(s=1337){let e=new Uint8Array(512),t=new Uint8Array(256),r=s;for(let a=0;a<256;a+=1)t[a]=a;for(let a=255;a>0;a-=1){r=r*16807%2147483647;let o=r%(a+1);[t[a],t[o]]=[t[o],t[a]]}for(let a=0;a<512;a+=1)e[a]=t[a&255];let n=(a,o,l)=>(a&1?-o:o)+(a&2?-l:l),i=a=>a*a*a*(a*(a*6-15)+10);return(a,o)=>{let l=Math.floor(a)&255,c=Math.floor(o)&255,h=a-Math.floor(a),d=o-Math.floor(o),u=i(h),f=i(d),g=e[l]+c,x=e[l+1]+c,p=n(e[g],h,d)+u*(n(e[x],h-1,d)-n(e[g],h,d)),m=n(e[g+1],h,d-1)+u*(n(e[x+1],h-1,d-1)-n(e[g+1],h,d-1));return p+f*(m-p)}}function th(s){let e=Td(4242),t=520,r=s?170:300,n=new Wt(t,t,r,r);n.rotateX(-Math.PI/2);let i=n.attributes.position,a=new Float32Array(i.count*3),o=new ze("#a58c72"),l=new ze("#6e5b49"),c=new ze("#554c4e"),h=new ze("#8c7d76"),d=new ze("#eef0f3"),u=new ze,f=(S,E,y)=>{let b=0,M=.5,A=1;for(let v=0;v<y;v+=1)b+=M*e(S*A,E*A),A*=2.03,M*=.5;return b},g=(S,E)=>{let y=0,b=.55,M=1;for(let A=0;A<6;A+=1){let v=1-Math.abs(e(S*M,E*M));y+=b*v*v,M*=2.1,b*=.5}return y},x=new Float32Array(i.count);for(let S=0;S<i.count;S+=1){let E=i.getX(S),y=i.getZ(S),b=Math.hypot(E*.72,(y+30)*1),M=Math.min(1,Math.max(0,(b-55)/110)),A=g(E*.011,y*.011)*82*M*M*(y<0?1:.55),v=f(E*.06,y*.06,4)*.9+f(E*.012,y*.012,3)*3.5,T=A+v;i.setY(S,T),x[S]=T}n.computeVertexNormals();let p=n.attributes.normal;for(let S=0;S<i.count;S+=1){let E=x[S],y=1-p.getY(S),b=e(i.getX(S)*.4,i.getZ(S)*.4)*.5+.5;E<6?u.copy(l).lerp(o,b*.8+.1):u.copy(c).lerp(h,b),E>6&&E<12&&u.lerp(o,(12-E)/6*.6);let M=Math.max(0,Math.min(1,(E-33)/9))*(1-Math.min(1,y*2));u.lerp(d,M),a[S*3]=u.r,a[S*3+1]=u.g,a[S*3+2]=u.b}n.setAttribute("color",new Lt(a,3));let m=new _t(n,new pi({vertexColors:!0,roughness:1,metalness:0}));return m.receiveShadow=!0,m.userData.heightAt=(S,E)=>{let y=Math.hypot(S*.72,(E+30)*1),b=Math.min(1,Math.max(0,(y-55)/110));return g(S*.011,E*.011)*82*b*b*(E<0?1:.55)+f(S*.06,E*.06,4)*.9+f(S*.012,E*.012,3)*3.5},m}var nh="varying vec3 vDir; void main() { vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",ih=`
precision highp float;
uniform vec3 uSun; uniform vec3 uZenith; uniform vec3 uMid; uniform vec3 uHorizon; uniform vec3 uGlow;
varying vec3 vDir;
void main() {
  vec3 d = normalize(vDir);
  float h = clamp(d.y, -0.2, 1.0);
  vec3 col = mix(uHorizon, uMid, smoothstep(0.0, 0.18, h));
  col = mix(col, uZenith, smoothstep(0.18, 0.75, h));
  float sun = max(dot(d, normalize(uSun)), 0.0);
  col += uGlow * (pow(sun, 8.0) * 0.55 + pow(sun, 64.0) * 0.9 + pow(sun, 900.0) * 6.0);
  gl_FragColor = vec4(col, 1.0);
}`;function Ad(){let e=document.createElement("canvas");e.width=512,e.height=512;let t=e.getContext("2d");t.fillStyle="#000",t.fillRect(0,0,512,512);let r=(a,o,l)=>{let c=Array.from({length:8},(h,d)=>[a+l*Math.cos(d*Math.PI/4+Math.PI/8),o+l*Math.sin(d*Math.PI/4+Math.PI/8)]);t.beginPath();for(let h=0;h<=8;h+=1){let[d,u]=c[h*3%8];h===0?t.moveTo(d,u):t.lineTo(d,u)}t.stroke(),t.beginPath();for(let h=0;h<=8;h+=1){let d=h*Math.PI/4+Math.PI/8,u=a+l*.42*Math.cos(d),f=o+l*.42*Math.sin(d);h===0?t.moveTo(u,f):t.lineTo(u,f)}t.stroke()},n=(a,o,l)=>{t.lineWidth=a,t.strokeStyle=o,t.shadowColor=o,t.shadowBlur=l,t.lineJoin="miter";let c=512*.36;[[512/2,512/2],[0,0],[512,0],[0,512],[512,512]].forEach(([h,d])=>r(h,d,c)),[[512/2,0],[512/2,512],[0,512/2],[512,512/2]].forEach(([h,d])=>{t.beginPath(),t.moveTo(h-512*.1,d),t.lineTo(h,d-512*.1),t.lineTo(h+512*.1,d),t.lineTo(h,d+512*.1),t.closePath(),t.stroke()})};n(12,"#1e2a2e",0),n(3.2,"#ffffff",10);let i=new Yr(e);return i.wrapS=i.wrapT=ar,i.anisotropy=8,i}function _l(){let e=document.createElement("canvas");e.width=256,e.height=256;let t=e.getContext("2d"),r=t.createImageData(256,256),n=Td(99);for(let a=0;a<256;a+=1)for(let o=0;o<256;o+=1){let l=0,c=.5,h=.03;for(let f=0;f<5;f+=1)l+=c*n(o*h,a*h),h*=2,c*=.5;let d=52+l*40,u=(a*256+o)*4;r.data[u]=d+4,r.data[u+1]=d+2,r.data[u+2]=d+6,r.data[u+3]=255}t.putImageData(r,0,0);let i=new Yr(e);return i.wrapS=i.wrapT=ar,i.colorSpace=jt,i}var rh={uniforms:{tDiffuse:{value:null},uTime:{value:0},uVignette:{value:1.1}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uTime; uniform float uVignette; varying vec2 vUv;
    float hash(vec2 p) { return fract(sin(dot(p, vec2(12.9898, 78.233)) + uTime) * 43758.5453); }
    void main() {
      vec4 col = texture2D(tDiffuse, vUv);
      // Lift the shadows a touch towards blue, warm the highlights.
      float l = dot(col.rgb, vec3(0.299, 0.587, 0.114));
      col.rgb = mix(col.rgb * vec3(0.96, 0.98, 1.06), col.rgb * vec3(1.04, 1.0, 0.95), smoothstep(0.2, 0.8, l));
      float d = length(vUv - 0.5);
      col.rgb *= mix(1.0, 0.62, smoothstep(0.35, 0.95, d * uVignette));
      col.rgb += (hash(vUv * 900.0) - 0.5) * 0.035;
      gl_FragColor = col;
    }`};var da=[{h:0,zenith:"#0c1631",mid:"#22305a",horizon:"#46557e",glow:"#7084b8",fog:"#2a3352",density:.0049,dir:[.35,.5,-1],sun:"#b3c3ff",sunI:1,hemiSky:"#6577a6",hemiGround:"#2c2733",hemiI:.7,stars:1,girih:.95,exposure:1.18},{h:4.6,zenith:"#0c1631",mid:"#22305a",horizon:"#46557e",glow:"#7084b8",fog:"#2a3352",density:.0049,dir:[.35,.5,-1],sun:"#b3c3ff",sunI:1,hemiSky:"#6577a6",hemiGround:"#2c2733",hemiI:.7,stars:1,girih:.95,exposure:1.18},{h:6.6,zenith:"#3d4c66",mid:"#9aa3b3",horizon:"#e8c3a4",glow:"#ffd2a0",fog:"#c2a594",density:.0047,dir:[-.42,.1,-1],sun:"#ffcf9f",sunI:2.4,hemiSky:"#b9c4d6",hemiGround:"#5b4a3d",hemiI:.75,stars:0,girih:1,exposure:1},{h:9.5,zenith:"#4f6f9f",mid:"#9db1c9",horizon:"#dcd3c6",glow:"#fff0d2",fog:"#b7bcc2",density:.0034,dir:[-.2,.55,-1],sun:"#fff1df",sunI:2.7,hemiSky:"#c6d4ea",hemiGround:"#6b5a48",hemiI:.85,stars:0,girih:.85,exposure:.95},{h:15.5,zenith:"#4f6f9f",mid:"#9db1c9",horizon:"#dcd3c6",glow:"#fff0d2",fog:"#b7bcc2",density:.0034,dir:[.25,.5,-1],sun:"#fff1df",sunI:2.7,hemiSky:"#c6d4ea",hemiGround:"#6b5a48",hemiI:.85,stars:0,girih:.85,exposure:.95},{h:18.4,zenith:"#2b3152",mid:"#86708a",horizon:"#ef9f6e",glow:"#ff9858",fog:"#a77f6d",density:.0049,dir:[.5,.08,-1],sun:"#ff9c66",sunI:2.1,hemiSky:"#9a8fae",hemiGround:"#4d3a33",hemiI:.6,stars:.1,girih:1.1,exposure:1},{h:20.6,zenith:"#0c1631",mid:"#22305a",horizon:"#46557e",glow:"#7084b8",fog:"#2a3352",density:.0049,dir:[.35,.5,-1],sun:"#b3c3ff",sunI:1,hemiSky:"#6577a6",hemiGround:"#2c2733",hemiI:.7,stars:1,girih:.95,exposure:1.18},{h:24,zenith:"#0c1631",mid:"#22305a",horizon:"#46557e",glow:"#7084b8",fog:"#2a3352",density:.0049,dir:[.35,.5,-1],sun:"#b3c3ff",sunI:1,hemiSky:"#6577a6",hemiGround:"#2c2733",hemiI:.7,stars:1,girih:.95,exposure:1.18}];function Ed(){let s=Number(new URLSearchParams(location.search).get("hour"));if(Number.isFinite(s)&&new URLSearchParams(location.search).has("hour"))return(s%24+24)%24;let e=new Date;return((e.getUTCHours()+5+e.getUTCMinutes()/60)%24+24)%24}var Cd={"arise-welcome":.92,"idrok-library":.8,"arise-ari":.68,"arise-skills":.68,"idrok-alif":.68,"idrok-reader":.7},yr=["#7ff3ff","#7f9cff","#ffc86a","#f4f1ec"];function Rd(s,e){let t=Ad();t.repeat.set(...e);let r=_l();r.repeat.set(e[0]*2,e[1]*1.8);let n=new pi({color:"#3b3a40",map:r,roughness:.72,metalness:.15,emissive:new ze(yr[0]),emissiveMap:t,emissiveIntensity:2.6});return n.onBeforeCompile=i=>{i.uniforms.uTime=s.uTime,i.uniforms.uFill=s.uFill,i.uniforms.uSpan={value:e[1]},i.fragmentShader=`uniform float uTime;
uniform float uFill;
uniform float uSpan;
${i.fragmentShader}`.replace("#include <emissivemap_fragment>",`#include <emissivemap_fragment>
      #ifdef USE_EMISSIVEMAP
        // Light runs up the pattern in waves, like data through a machine.
        float wave = fract(vEmissiveMapUv.y * 0.3 - uTime * 0.09);
        float pulse = exp(-pow((wave - 0.5) * 7.0, 2.0));
        float cell = fract(sin(dot(floor(vEmissiveMapUv * 2.0), vec2(12.9, 78.2))) * 43758.5);
        float flicker = 0.75 + 0.25 * sin(uTime * (1.5 + cell * 2.0) + cell * 6.28);
        float level = 0.05 + pulse * 1.9 * flicker;
        // Process station: everything below the fill line glows steadily.
        float filled = step(vEmissiveMapUv.y / uSpan, uFill);
        level = max(level, filled * 1.1);
        totalEmissiveRadiance *= level;
      #endif`)},n}var Pd=["About \u2014 Nexora Studio","Skip to content","About","A small studio from Fergana that builds and runs real products.","Nexora Studio is a team of engineers and designers. We started with our own products, and now we build for other companies too.","2026","Founded","Fergana","Uzbekistan, UTC+5","EN \xB7 RU \xB7 UZ","Languages we work in","products we built and run","Our story","How we started.","We started with problems we saw around us. Students were choosing universities without guidance. Readers were collecting books from scattered Telegram channels.","So we built Arise and IDrok ourselves, tested every decision on real users and still support both products today.","In 2026 we opened Nexora Studio to do the same work for other companies: design, engineering and AI in one team.","First product","Arise","A mobile guide to career, university and grants, with an AI mentor.","Second product","IDrok","A personal digital library for Uzbek readers.","Nexora Studio","We start building products for other companies.","How we work","What you can expect from us.","You talk to the team.","You work directly with the designers and engineers on your project. No layers of managers between you and the work.","Small by design.","We take on a few projects at a time, so each one gets real attention.","Honest about limits.","If something can't be done well, or we are not the right team, we say so on the first call \u2014 not after the invoice.","We stay after launch.","Releases, monitoring and iteration are part of the job. We run our own products the same way.","Team","The people you will work with.","A small team: you talk directly to the people who design and build your product.","MN","Co-founder \xB7 CTO","Makhmud Nasriddinov","Leads architecture and mobile development. Built the Arise platform.","NX","Co-founder \xB7 CAIO","Nurahmadov Xayrullo","Leads AI work. Designed Ari, the mentor inside Arise.","AN","Co-founder \xB7 Design","Abduraximov Nizomiddin","Leads product design and the visual identity of every product.","Careers","We're hiring.","We look for engineers and designers who care about details. Send us your work.","Apply","Contact","Have a product in mind? Let's talk.","Tell us what you are building and when you need it. We reply within one working day.","Start a project","Estimate a timeline","Book a call","support@nexorastudio.world","Next page","Journal","Keep scrolling","Telegram","Journal \u2014 Nexora Studio","Notes from our team.","Notes from our team on performance, AI and how we run a small studio. No growth hacks, no predictions \u2014 only what we measured.","Engineering","October 2026","Light, not stripped down","The IDrok Android app weighs 7.05 MB. That is not a size cap we put on every product. It is the result of one project, and it shows how we build: compact, fast and fully working.","Applied AI","Guardrails before magic","Ari is the mentor inside Arise. The hardest part was not making it sound intelligent \u2014 it was keeping it honest about what it knows.","Studio","September 2026","Two engagements per quarter","Capacity is not a sales constraint. It is the mechanism that keeps the people who scope your product on the line that ships it.","October 2026 \xB7 6 min read","The easy version of a reading platform is a browser wrapped around a CDN. It looks finished on a fast connection and falls apart on the connection most students actually have. We started from the opposite direction: a device from 2019, a metered data plan and a campus where the Wi-Fi drops between buildings.","Every dependency had to justify its kilobytes. We kept the reader in the platform WebView, streamed chapters instead of preloading the catalogue, and cached only the pages a reader had actually opened. Analytics, crash reporting and A/B tooling \u2014 the default cargo of a modern app \u2014 were replaced with a single lightweight event pipe we could reason about.","Performance is a product decision, not a cleanup task.","The result is an app a student can download on mobile data without thinking about it, with nothing cut to get there. The lesson is not that every app should weigh 7 MB. Each product gets the size its job needs; what carries over is the habit of making every kilobyte earn its place.","The reader stays in the platform WebView; the catalogue streams on demand.","Covers are generated as responsive AVIF and WebP at build time.","No third-party SDK sits in the critical path.","\u2014 Makhmud Nasriddinov, systems","October 2026 \xB7 5 min read","Students ask direct questions: which university, which subject, which deadline. A fluent answer that invents a scholarship is worse than no answer at all. So Ari is built around retrieval first and generation second. University facts, deadlines and requirements come from a verified catalogue; the model composes the route, not the facts.","Every response is constrained to a structured shape \u2014 a next step, a reason, a source. When the catalogue has no answer, Ari says so and offers the closest verified path. That refusal style was designed before the first prompt was written.","A mentor that admits the gap is more useful than one that fills it with noise.","Multilingual support is not a translation layer on top. English, Russian and Uzbek prompts share the same structured contract, and the mentor answers in the language the student used \u2014 including the mixed language students actually type.","\u2014 Nurahmadov Xayrullo, machine learning","September 2026 \xB7 4 min read","Nexora is a small team with no account managers in between. That is easy to write and hard to keep. The only way to keep it true is to limit how many projects run at once.","Two client engagements per quarter is a deliberate ceiling. It leaves room for architecture reviews, for the unglamorous week where a release is stabilised, and for our own platforms \u2014 Arise and IDrok \u2014 which we still run ourselves.","A small studio is not a boutique aesthetic. It is an operating constraint.","It also makes the first conversation honest. If the timing does not fit, we say so instead of hiring a team you have never met to carry the work. The studio stays small because the alternative is a promise we cannot keep.","\u2014 Abduraximov Nizomiddin, design","A few projects at a time. Tell us what you're building and when it needs to exist.","Arise case study \u2014 Nexora Studio","Work","Case study","Arise: a personal guide to career, university and grants.","Arise helps school students in Uzbekistan choose a profession, find the right university and win a grant. We designed it, built it and run it.","Coming soon to","App Store","Google Play","Product","Mobile app","Platforms","iOS and Android","Languages","Uzbek, Russian, English","Our role","Product, design, engineering, AI","Year","Status","Live","The problem","Students were choosing their future alone.","Most school students in Uzbekistan choose a profession and a university with little guidance. Information about programmes, requirements and grants is spread across websites and Telegram channels, and it is often out of date.","We wanted to give every student a clear plan, not one more list of links.","What we built","A plan for each student, and a mentor to follow it.","Personal plan","The student picks a goal, for example UX designer. Arise builds a path of skills, courses and next steps around it.","Skill tree","Progress is shown as a tree. Finished skills are ticked, the current one is highlighted and the next ones unlock along the way.","Ari, the AI mentor","Ari answers questions, explains skills and makes plans, such as a two-week study plan for a future UX designer.","Easy start","Sign in with Google or Apple, or try the app as a guest. Light and dark themes are built in.","Welcome screen","Sign in with Google, Apple or as a guest.","Skills open one by one, with recommended online courses.","Ari","The mentor suggests next steps and replies in the student's language.","How Ari works","An AI mentor that does not make things up.","Every answer has a next step, a reason and a source","When the catalogue has no answer, Ari says so and suggests the closest verified option","The rules for refusals were written before the first prompt","Three languages from the first day.","Technology","One codebase for iOS and Android.","The app is built once and runs on both platforms. The AI layer looks up facts in a verified catalogue before the model writes an answer.","React Native","Expo","TypeScript","LLM","RAG","Next case study","Planning an education or AI product?","IDrok case study","IDrok case study \u2014 Nexora Studio","IDrok: a digital library that fits on any phone.","IDrok gathers Uzbek books and academic papers in one app, with a comfortable reader and an AI librarian. We designed it, built it and run it.","Mobile app and website","Android and web","Website","idroklib.uz \u2197","713","books in the catalogue","686","books in Uzbek","1,256","quiz questions","7.05 MB","Android app","Books were scattered across Telegram channels.","Readers in Uzbekistan looked for books in dozens of Telegram channels and on old websites that were never made for a phone. Files were hard to find, hard to read and easy to lose.","We set out to put them in one place that is pleasant to read in and light enough for any phone.","One library, a good reader and an AI librarian.","My Library","Continue reading where you stopped, keep your own books and PDFs, and browse the collection.","Comfortable reader","Three display modes, day, sepia, dark and night themes, adjustable fonts, text-to-speech with speed control, bookmarks and notes.","Alif, the AI librarian","Alif finds pages, quotes books from the library, explains key ideas and makes a personal reading plan.","Arena","Quizzes on book chapters with XP and reader ranks, so reading turns into a habit.","Books in progress, your own uploads and the full collection.","Alif AI","Chat, book picks and a reading plan in one place.","Reader settings","Themes, fonts, text-to-speech, search, bookmarks and notes.","Light, not stripped down.","The Android app weighs 7.05 MB. That is not a limit we set for every product: it is what this one needed, because many readers use older phones and limited mobile data.","Chapters load as you read instead of downloading the whole catalogue","Only the pages you have opened are saved on the phone","Covers are prepared in light image formats for every screen size","No third-party SDK slows down the start of the app","Read the full note in our journal","Android, web and AI.","IDrok works as an Android app and on the web at idroklib.uz. Before the rename it was called DigitalLib.","Android","Web","WebView reader","Text-to-speech","Building a platform for a market that has been underserved?"];function Mt(s){let e=Pd.find(t=>t.startsWith(s));if(!e)throw new Error(`corpus: no sentence starts with "${s}"`);return e}var sh="support@nexorastudio.world",fa=[{id:"home",label:"Home",stops:[{shot:"home-hero",content:{eyebrow:"Product studio \xB7 Design \xB7 Mobile \xB7 Web \xB7 AI",title:"The studio that makes your product better.",big:!0,lede:"We design and build new products, improve the ones you already have, and stay with them after launch.",top:12,buttons:[{label:"Start a project",primary:!0,action:{stop:"contact-brief"}},{label:"See our work",action:{place:"work"}}]}}]},{id:"services",label:"Services",stops:[{shot:"home-services",content:{eyebrow:"Services",title:"Everything a product needs, from the first idea to launch.",lede:"One team handles design, engineering and AI, so nothing gets lost between agencies.",top:34,list:[{label:"Mobile apps",service:0,action:{stay:!0}},{label:"Web platforms",service:1,action:{stay:!0}},{label:"AI features",service:2,action:{stay:!0}},{label:"Product design",service:3,action:{stay:!0}}],buttons:[{label:"Estimate a timeline",action:{place:"estimate"}}]}}]},{id:"work",label:"Work",stops:[{shot:"work-overview",content:{eyebrow:"Work",title:"Products we built and still run.",lede:"Two products of our own, live and in daily use. Read how we built them and what we learned.",top:14,buttons:[{label:"Arise",raw:!0,action:{place:"arise"}},{label:"IDrok",raw:!0,action:{place:"idrok"}}]}}]},{id:"arise",label:"Arise",raw:!0,stops:[{shot:"work-arise",content:{eyebrow:"iOS \xB7 Android \xB7 UZ \xB7 RU \xB7 EN",title:"Finds the right career, university and grant for each student.",lede:"Students tell Arise what they want to become. Ari, the built-in AI mentor, turns that goal into a plan: which skills to learn, which courses to take and what to do this week.",top:30,screens:"arise",stores:["App Store","Google Play"]}},{shot:"arise-problem",content:{eyebrow:"The problem",title:"Students were choosing their future alone.",lede:Mt("Most school students in Uzbekistan choose"),points:[Mt("We wanted to give every student")],top:24}},{shot:"arise-built",content:{eyebrow:"What we built",title:"A plan for each student, and a mentor to follow it.",rows:[{title:"Personal plan",text:Mt("The student picks a goal")},{title:"Skill tree",text:Mt("Progress is shown as a tree")},{title:"Ari, the AI mentor",text:Mt("Ari answers questions, explains skills")},{title:"Easy start",text:Mt("Sign in with Google or Apple, or try")}],top:36}},{shot:"arise-ai",content:{eyebrow:"How Ari works",title:"An AI mentor that does not make things up.",points:[Mt("Every answer has a next step"),Mt("When the catalogue has no answer, Ari says so"),Mt("The rules for refusals were written")],quote:Mt("A mentor that admits the gap"),top:28,buttons:[{label:"Read the Arise case study",action:{href:"./arise.html"}}]}}]},{id:"idrok",label:"IDrok",raw:!0,stops:[{shot:"work-idrok",content:{eyebrow:"Android \xB7 Web \xB7 idroklib.uz",title:"A personal digital library that works on any phone.",lede:"IDrok brings books and academic papers into one app with a comfortable reader. Alif, its AI librarian, finds pages, explains ideas and suggests what to read next.",top:30,screens:"idrok",stores:["Google Play"]}},{shot:"idrok-problem",content:{eyebrow:"The problem",title:"Books were scattered across Telegram channels.",lede:Mt("Readers in Uzbekistan looked for books"),points:[Mt("We set out to put them in one place")],top:24}},{shot:"idrok-built",content:{eyebrow:"What we built",title:"One library, a good reader and an AI librarian.",rows:[{title:"My Library",text:Mt("Continue reading where you stopped")},{title:"Comfortable reader",text:Mt("Three display modes")},{title:"Alif, the AI librarian",text:Mt("Alif finds pages, quotes books")},{title:"Arena",text:Mt("Quizzes on book chapters")}],top:36}},{shot:"idrok-engineering",content:{eyebrow:"Engineering",title:"Light, not stripped down.",lede:Mt("The Android app weighs 7.05 MB"),points:[Mt("Chapters load as you read"),Mt("Only the pages you have opened"),Mt("No third-party SDK slows down")],top:30,buttons:[{label:"Read the IDrok case study",action:{href:"./idrok.html"}},{label:"Visit idroklib.uz",action:{href:"https://idroklib.uz"}}]}}]},{id:"about",label:"About",stops:[{shot:"about-gate",content:{eyebrow:"About",title:Mt("A small studio from Fergana"),lede:Mt("Nexora Studio is a team of engineers and designers."),top:18}},{shot:"about-story",content:{eyebrow:"Our story",title:"How we started.",lede:Mt("We started with problems we saw around us."),points:[Mt("So we built Arise and IDrok ourselves"),Mt("In 2026 we opened Nexora Studio")],top:26}},{shot:"about-principles",content:{eyebrow:"How we work",title:"What you can expect from us.",rows:[{title:"You talk to the team.",text:Mt("You work directly with the designers")},{title:"Small by design.",text:Mt("We take on a few projects at a time")},{title:"Honest about limits.",text:Mt("If something can't be done well")},{title:"We stay after launch.",text:Mt("Releases, monitoring and iteration")}],top:36}},{shot:"about-team",content:{eyebrow:"Team",title:"The people you will work with.",rows:[{titleRaw:"Makhmud Nasriddinov",sub:"Co-founder \xB7 CTO",text:Mt("Leads architecture and mobile development")},{titleRaw:"Nurahmadov Xayrullo",sub:"Co-founder \xB7 CAIO",text:Mt("Leads AI work.")},{titleRaw:"Abduraximov Nizomiddin",sub:"Co-founder \xB7 Design",text:Mt("Leads product design")}],top:36,buttons:[{label:"We're hiring.",action:{href:`mailto:${sh}?subject=Application%20%E2%80%94%20Nexora%20Studio`}}]}}]},{id:"journal",label:"Journal",stops:[{shot:"journal-overview",content:{eyebrow:"Journal",title:"Notes from our team.",lede:Mt("Notes from our team on performance"),top:16}},{shot:"journal-1",content:{eyebrow:"Engineering",title:"Light, not stripped down",lede:Mt("The IDrok Android app weighs"),quote:Mt("Performance is a product decision"),author:"\u2014 Makhmud Nasriddinov, systems",top:30,buttons:[{label:"Read the full note in our journal",action:{href:"./journal.html#seven-mb"}}]}},{shot:"journal-2",content:{eyebrow:"Applied AI",title:"Guardrails before magic",lede:Mt("Ari is the mentor inside Arise."),quote:Mt("A mentor that admits the gap"),author:"\u2014 Nurahmadov Xayrullo, machine learning",top:30,buttons:[{label:"Read the full note in our journal",action:{href:"./journal.html#guardrails"}}]}},{shot:"journal-3",content:{eyebrow:"Studio",title:"Two engagements per quarter",lede:Mt("Capacity is not a sales constraint."),quote:Mt("A small studio is not a boutique aesthetic."),author:"\u2014 Abduraximov Nizomiddin, design",top:30,buttons:[{label:"Read the full note in our journal",action:{href:"./journal.html#capacity"}}]}}]},{id:"estimate",label:"Estimate",stops:[{shot:"estimate",content:{eyebrow:"Estimate",title:"How long will your project take?",estimator:!0,top:40}}]},{id:"contact",label:"Contact",stops:[{id:"contact-main",shot:"work-end",content:{eyebrow:"Contact",title:"Have a product in mind? Let's talk.",big:!0,lede:"Tell us what you are building and when you need it. We reply within one working day.",top:18,buttons:[{label:"Start a project",primary:!0,action:{stop:"contact-brief"}},{label:"Book a call",action:{stop:"contact-call"}},{label:"Write on Telegram",action:{href:"https://t.me/nexorastudio_admin"}}],points:[sh],rawPoints:!0}},{id:"contact-brief",shot:"contact-brief",pane:"brief",content:{eyebrow:"Contact",title:"Tell us about your project.",lede:"Tell us what you're building, who it's for and when it needs to exist. We reply within one working day.",points:[sh,"Telegram @nexorastudio_admin"],rawPoints:!0,top:22,compact:!0}},{id:"contact-call",shot:"contact-call",pane:"call",content:{eyebrow:"Intro call",title:"Book a 20-minute call.",lede:"Every day from 19:00 to 24:00 Fergana time (UTC+5). Pick a time that suits you; we send the call link by email.",top:22,compact:!0}}]}],ah=[{label:"Services",action:{place:"services"}},{label:"Work",action:{place:"work"}},{label:"About",action:{place:"about"}},{label:"Journal",action:{place:"journal"}},{label:"Contact",action:{place:"contact"}}],Sr={questions:[{id:"type",label:"What are you building?",single:!0,options:[["mobile","Mobile app"],["web","Web platform"],["ai","AI feature"],["design","Design only"]]},{id:"platform",label:"Where should it work?",options:[["ios","iOS"],["android","Android"],["web","Web"],["admin","Admin panel"]]},{id:"feature",label:"What should it do?",options:[["auth","Sign-in and profiles"],["payments","Payments"],["ai","AI assistant or chat"],["offline","Works offline"],["languages","Several languages"],["notifications","Notifications"]]},{id:"stage",label:"Where are you now?",single:!0,options:[["idea","Just an idea"],["designs","Designs are ready"],["existing","Improving an existing product"]]}],BASE:{mobile:[6,9],web:[5,8],ai:[3,5],design:[2,4]},PLATFORM:{ios:0,android:1,web:3,admin:2},FEATURE:{auth:1,payments:2,ai:3,offline:2,languages:1,notifications:1},STAGE:{idea:2,designs:-1,existing:1}};function xl(s){let e=s.type?.[0];if(!e)return null;let[t,r]=Sr.BASE[e],n=e==="design"?.5:1,i=0;return(s.platform||[]).forEach(a=>{i+=Sr.PLATFORM[a]*n}),e==="mobile"&&s.platform?.includes("ios")&&s.platform?.includes("android")&&(i+=1),(s.feature||[]).forEach(a=>{i+=Sr.FEATURE[a]*n}),s.stage?.[0]&&(i+=Sr.STAGE[s.stage[0]]),t=Math.max(2,Math.round(t+i)),r=Math.max(t+1,Math.round(r+i*1.3)),[t,r]}var Wn=(s,e=0,t=1)=>Math.min(t,Math.max(e,s)),Id=s=>s*s*(3-2*s),yl={400:"./assets/fonts/onest-400.woff",600:"./assets/fonts/onest-600.woff"},ii=new ze("#7ff3ff"),ps=new ze("#f4f1ec"),xn=new ze("#b8b3ac"),i_={uniforms:{tDiffuse:{value:null},uAmount:{value:0},uNarrow:{value:0}},vertexShader:"varying vec2 vUv; void main() { vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0); }",fragmentShader:`
    uniform sampler2D tDiffuse; uniform float uAmount; uniform float uNarrow; varying vec2 vUv;
    void main() {
      vec4 col = texture2D(tDiffuse, vUv);
      float wide = pow(1.0 - smoothstep(0.0, 0.7, vUv.x), 1.6);
      float narrow = pow(1.0 - smoothstep(0.0, 0.66, vUv.y), 1.4);
      // Phone form chapters: text sits at the top, so shade the top instead.
      float narrowTop = pow(smoothstep(0.38, 1.0, vUv.y), 1.2);
      float nk = uNarrow > 1.5 ? narrowTop : narrow;
      float k = mix(wide, nk, min(uNarrow, 1.0)) * uAmount;
      col.rgb = mix(col.rgb, col.rgb * 0.5 + vec3(0.02, 0.022, 0.03), k * 0.6);
      // A soft band under the menu so it reads over a bright daytime sky.
      float top = smoothstep(0.84, 1.0, vUv.y);
      col.rgb = mix(col.rgb, col.rgb * 0.55, top * 0.55);
      gl_FragColor = col;
    }`};async function O1(s,{lang:e,t,onReady:r,onFail:n,onPlace:i,onFrame:a}){let o=window.matchMedia("(pointer: coarse)").matches,l=window.matchMedia("(max-width: 760px)").matches,c=o||l,h=new URLSearchParams(location.search).get("q"),d=["low","mid","high"],u=d.includes(h)?h:c?"low":"high",f;try{f=new cs({canvas:s,antialias:!1,powerPreference:"high-performance"})}catch{return n?.("webgl"),null}f.toneMapping=Ri,f.outputColorSpace=jt,f.shadowMap.type=ts,f.autoClear=!1,s.addEventListener("webglcontextlost",F=>{F.preventDefault(),n?.("lost")});let g=new wi;g.fog=new or(new ze("#c2a594"),.0047);let x=new Z(-.42,.1,-1).normalize(),p={uSun:{value:x},uZenith:{value:new ze},uMid:{value:new ze},uHorizon:{value:new ze},uGlow:{value:new ze}};g.add(new _t(new Xi(400,48,24),new zt({vertexShader:nh,fragmentShader:ih,side:Qt,depthWrite:!1,fog:!1,uniforms:p})));let m=new lr("#b9c4d6","#5b4a3d",.75);g.add(m);let S=new cr("#ffcf9f",2.4);S.shadow.mapSize.set(2048,2048),Object.assign(S.shadow.camera,{left:-26,right:26,top:26,bottom:-26,near:10,far:140}),S.shadow.bias=-6e-4,S.shadow.radius=4,g.add(S,S.target);let E=new Float32Array((c?500:1100)*3);for(let F=0;F<E.length;F+=3){let ge=Math.random()*Math.PI*2,q=.06+Math.random()*.94,Oe=Math.sqrt(1-q*q);E.set([Math.cos(ge)*Oe*360,q*360,Math.sin(ge)*Oe*360],F)}let y=new Yt;y.setAttribute("position",new Lt(E,3));let b=new Ei({color:"#e6ecff",size:c?1.6:1.3,sizeAttenuation:!1,transparent:!0,opacity:0,depthWrite:!1,fog:!1}),M=new Vi(y,b);g.add(M);let A=th(c);g.add(A);let v=A.userData.heightAt,T={uTime:{value:0},uFill:{value:0}},I=Rd(T,[1,3.4]),P=new Z(4,0,-2);P.y=v(P.x,P.z);let C=new _t(new Ii(2.6,9,1.1,4,.05),I);C.position.set(P.x,P.y+4.3,P.z),C.rotation.y=-.38,C.castShadow=!0,g.add(C),S.target.position.copy(C.position);let N=new Qr,R=new pi({color:"#3b3a40",map:_l(),roughness:.75,metalness:.12}),O={};[["arise",["arise-welcome","arise-ari","arise-skills"],720/1566,-9.5,-15,.5],["idrok",["idrok-library","idrok-alif","idrok-reader"],720/1624,12.5,-11,-.6]].forEach(([F,ge,q,Oe,Re,he])=>{let at=new Ht,ht=3.6,De=ht*q,tt=.55,Le=new _t(new Ii(De+.28,ht+.28,.42,4,.05),R);Le.position.y=tt+ht/2,Le.castShadow=!0;let it=new _t(new Ii(De+.78,tt+.4,.9,3,.05),R);it.position.y=(tt+.4)/2-.4,it.castShadow=!0;let Ze=new kt({color:ii.clone(),toneMapped:!1}),rt=new _t(new Wt(De+.05,ht+.05),Ze);rt.position.set(0,Le.position.y,.212);let He=ge.map(rn=>({shot:rn,tex:null})),dt=rn=>(rn.tex||(rn.tex=N.load(`./assets/shots/${rn.shot}-720.webp`),rn.tex.colorSpace=jt,rn.tex.anisotropy=4),rn.tex),At=new kt({map:dt(He[0]),toneMapped:!1}),hn=new _t(new Wt(De,ht),At);hn.position.set(0,Le.position.y,.214),hn.userData.action={screen:F,step:1},at.add(Le,it,rt,hn),at.position.set(Oe,v(Oe,Re)-.1,Re),at.rotation.y=he,g.add(at),O[F]={group:at,screen:hn,screenMat:At,frameMat:Ze,textures:He,load:dt,index:0,pending:null,fade:0,on:0}});let z=new Z(-26,0,-32);z.y=v(z.x,z.z);let K=new Ht,re=new Ii(1.4,7,1.4,3,.06);[-2.9,2.9].forEach(F=>{let ge=new _t(re,R);ge.position.set(F,3.5,0),ge.castShadow=!0,K.add(ge)});let G=new _t(new Zr(2.9,.7,12,40,Math.PI),R);G.position.y=7,G.castShadow=!0,K.add(G);let V={uTime:T.uTime,uFill:{value:0}},U=new _t(new Zr(2.9,.18,8,40,Math.PI),new kt({color:new ze("#7ff3ff").multiplyScalar(.9),toneMapped:!1}));U.position.set(0,7,.55),K.add(U);let J=[];[-1.6,0,1.6].forEach((F,ge)=>{let q=new _t(new Xi(.16,12,8),new kt({color:new ze("#ffb46a").multiplyScalar(2.2),toneMapped:!1}));q.position.set(F,5.6-(ge===1?.5:0),.2),K.add(q),J.push(q)});let j=new Os("#ffb46a",14,18,2);j.position.set(0,4.6,2),K.add(j),["MN","NX","AN"].forEach((F,ge)=>{let q=(ge-1)*2.2,Oe=1.6+ge*.25,Re=new _t(new Ii(1.1,Oe,.5,3,.05),R);Re.position.set(q,.7,4.2),Re.rotation.y=(ge-1)*.18,Re.castShadow=!0;let he=new xr;he.text=F,he.font=yl[600],he.fontSize=.34,he.anchorX="center",he.anchorY="middle",he.letterSpacing=.08,he.color=new ze("#7ff3ff").multiplyScalar(1.4),he.material=new kt({toneMapped:!1}),he.position.set(0,Oe/2-.45-.7+.7,.26),Re.add(he),he.sync(),K.add(Re)}),K.position.copy(z).add(new Z(0,-.15,0)),K.rotation.y=.55,g.add(K);let ae=new Z(24,0,-30);ae.y=v(ae.x,ae.z);let Q=[];[-4.2,0,4.2].forEach((F,ge)=>{let q=new Ht,Oe=new _t(new Ii(2.4,3.2,.34,3,.05),R);Oe.position.y=1.9,Oe.rotation.x=-.12,Oe.castShadow=!0;let Re=new _t(new Wt(2,.06),new kt({color:new ze("#7ff3ff").multiplyScalar(.8),toneMapped:!1}));Re.position.set(0,3.1,.2),Re.rotation.x=-.12;let he=new _t(new qr(1.5,1.7,.5,24),R);he.position.y=.05,he.castShadow=!0,q.add(Oe,Re,he);let at=(ht,De,tt,Le)=>{let it=new xr;it.text=ht,it.font=yl[600],it.fontSize=De,it.anchorX="center",it.anchorY="middle",it.color=Le,it.material=new kt({toneMapped:!1}),it.position.set(0,tt,.19),it.rotation.x=-.12,it.sync(),Oe.add(it)};at(`0${ge+1}`,.9,.35,new ze("#7ff3ff").multiplyScalar(1.3)),at(["OCT 2026","OCT 2026","SEP 2026"][ge],.2,-.55,new ze("#f4f1ec").multiplyScalar(.8)),q.position.set(ae.x+F,v(ae.x+F,ae.z+Math.abs(F)*.4)-.1,ae.z+Math.abs(F)*.4),q.rotation.y=-.45-F*.06,g.add(q),Q.push(q)});let me={low:300,mid:900,high:1800}[u],B=new Float32Array(me*3);for(let F=0;F<me;F+=1)B.set([P.x+(Math.random()-.5)*44,P.y+Math.random()*14,P.z+(Math.random()-.5)*38],F*3);let H=new Yt;H.setAttribute("position",new Lt(B,3));let de=new Vi(H,new Ei({color:"#ffe2c2",size:.045,transparent:!0,opacity:.7,depthWrite:!1,blending:Ci}));g.add(de);let we=new ze,ce=new ze,fe=1;function st(){let F=Ed(),ge=0;for(;ge<da.length-2&&F>=da[ge+1].h;)ge+=1;let q=da[ge],Oe=da[ge+1],Re=Id(Wn((F-q.h)/Math.max(.001,Oe.h-q.h))),he=(ht,De)=>ht.copy(we.set(q[De])).lerp(ce.set(Oe[De]),Re),at=ht=>q[ht]+(Oe[ht]-q[ht])*Re;he(p.uZenith.value,"zenith"),he(p.uMid.value,"mid"),he(p.uHorizon.value,"horizon"),he(p.uGlow.value,"glow"),he(g.fog.color,"fog"),g.fog.density=at("density"),x.set(...q.dir).normalize().lerp(new Z(...Oe.dir).normalize(),Re).normalize(),he(S.color,"sun"),S.intensity=at("sunI"),S.position.copy(S.target.position).addScaledVector(x,60),he(m.color,"hemiSky"),he(m.groundColor,"hemiGround"),m.intensity=at("hemiI"),b.opacity=at("stars"),M.visible=b.opacity>.01,fe=at("girih"),f.toneMappingExposure=at("exposure"),document.documentElement.dataset.daypart=F<5||F>=20?"night":F<8?"dawn":F<17?"day":"dusk"}st(),setInterval(st,3e4);let Ue=new $t(34,1,.1,900),Ee=new mi(0,1,0,-1,-10,10),Ne=new wi,Ce=new wi,_e=new cl(f);_e.addPass(new hl(g,Ue));let Ge=new ds(new lt(256,256),.6,.5,.84);_e.addPass(Ge);let qe=new pr(rh);_e.addPass(qe);let pe=new pr(i_);_e.addPass(pe),_e.addPass(new ul);function $e(){let F=window.devicePixelRatio||1,ge=Math.min(F,{low:1,mid:1.25,high:1.6}[u]);f.setPixelRatio(ge),_e.setPixelRatio(ge),f.shadowMap.enabled=u==="high",S.castShadow=u==="high",Ge.enabled=u!=="low",Ge.strength=u==="high"?.6:.45,g.traverse(q=>{q.material&&(q.material.needsUpdate=!0)}),An()}let L=(F,ge,q)=>new Z(F,ge,q),Se=(F,ge,q,Oe,Re,he,at=.3)=>{let ht=new Z(Math.sin(ge),0,Math.cos(ge)),De=new Z(Math.cos(ge),0,-Math.sin(ge)),tt=F.clone().add(ht.clone().multiplyScalar(q)).add(new Z(0,Oe,0)),Le=v(tt.x,tt.z)+1.6;tt.y<Le&&(tt.y=Le);let it=F.clone().add(new Z(0,Re,0));return he||it.add(De.multiplyScalar(-q*at)),[tt,it]},be=O.arise.group.position,D=O.idrok.group.position,_={"home-hero":{wide:[L(-1.2,P.y+2.4,21),L(P.x-3.4,P.y+4.6,P.z-6)],narrow:[L(P.x-1.2,P.y+2.6,26),L(P.x,P.y+5.4,P.z-6)]},"home-services":{wide:Se(P,-.38,15,3.2,4.6),narrow:Se(P,-.38,19,3.4,7.2,!0)},"work-overview":{wide:[L(P.x-4,P.y+10,P.z+26),L(P.x-2,P.y+1,P.z-14)],narrow:[L(P.x-2,P.y+12,P.z+30),L(P.x,P.y+3,P.z-14)]},"work-arise":{wide:Se(be,.5,10.8,2.6,2.6),narrow:Se(be,.5,13,3.2,-.6,!0)},"work-idrok":{wide:Se(D,-.6,10.8,2.6,2.6),narrow:Se(D,-.6,13,3.2,-.6,!0)},"arise-problem":{wide:Se(be,1.25,12,3.6,3.2),narrow:Se(be,1.25,14,3.6,0,!0)},"arise-built":{wide:Se(be,-.25,8.5,1.2,2.6),narrow:Se(be,-.25,11,2.4,-.4,!0)},"arise-ai":{wide:Se(be,.9,16,8,1.8),narrow:Se(be,.9,17,8,-1,!0)},"idrok-problem":{wide:Se(D,.25,12,3.6,3.2),narrow:Se(D,.25,14,3.6,0,!0)},"idrok-built":{wide:Se(D,-1.35,8.5,1.2,2.6),narrow:Se(D,-1.35,11,2.4,-.4,!0)},"idrok-engineering":{wide:Se(D,-.2,16,8,1.8),narrow:Se(D,-.2,17,8,-1,!0)},"about-gate":{wide:Se(z,.55,24,4,5,!1,.16),narrow:Se(z,.55,28,5,3,!0)},"about-story":{wide:Se(z,1.25,14,2.4,4),narrow:Se(z,1.25,17,3,2,!0)},"about-principles":{wide:Se(z,.05,11,1.4,4.6),narrow:Se(z,.05,14,2.4,2.4,!0)},"about-team":{wide:Se(z.clone().add(new Z(Math.sin(.55)*4.2,0,Math.cos(.55)*4.2)),.75,7.5,1.8,.8),narrow:Se(z.clone().add(new Z(Math.sin(.55)*4.2,0,Math.cos(.55)*4.2)),.75,10,2.6,-1.4,!0)},"journal-overview":{wide:Se(ae,-.45,20,6,1.6),narrow:Se(ae,-.45,24,7,-.4,!0)},"journal-1":{wide:Se(Q[0].position,-.2,7.5,1.8,1.8),narrow:Se(Q[0].position,-.2,9.5,2.4,-.4,!0)},"journal-2":{wide:Se(Q[1].position,-.45,7.5,1.8,1.8),narrow:Se(Q[1].position,-.45,9.5,2.4,-.4,!0)},"journal-3":{wide:Se(Q[2].position,-.7,7.5,1.8,1.8),narrow:Se(Q[2].position,-.7,9.5,2.4,-.4,!0)},estimate:{wide:Se(P,.35,17,1.2,6.5),narrow:Se(P,.35,21,2,19,!1,.26)},"contact-brief":{wide:[L(P.x-34,P.y+16,P.z+30),L(P.x+14,P.y+13,P.z-70)],narrow:[L(P.x-30,P.y+16,P.z+34),L(P.x+10,P.y+22,P.z-70)]},"contact-call":{wide:[L(P.x+26,P.y+18,P.z+34),L(P.x-22,P.y+12,P.z-72)],narrow:[L(P.x+22,P.y+18,P.z+38),L(P.x-18,P.y+22,P.z-72)]},"work-end":{wide:[L(P.x-20,P.y+22,P.z+42),L(P.x+6,P.y+9,P.z-40)],narrow:[L(P.x-5,P.y+13,P.z+30),L(P.x,P.y+9,P.z-30)]}},k=fa.flatMap(F=>F.stops.map(ge=>({...ge,place:F.id}))),W=Object.fromEntries(fa.map(F=>[F.id,k.findIndex(ge=>ge.place===F.id)])),ee=F=>k.findIndex(ge=>ge.id===F),ye=()=>new kt({toneMapped:!1,transparent:!0,depthTest:!1,depthWrite:!1}),Me=[];function $({key:F,raw:ge,size:q,weight:Oe=400,color:Re=ps,max:he=0,anchorX:at="left",anchorY:ht="top",lineHeight:De=1.15,letterSpacing:tt=0}){let Le=new xr;return Le.material=ye(),Le.font=yl[Oe]||yl[400],Le.fontSize=q,Le.anchorX=at,Le.anchorY=ht,Le.lineHeight=De,Le.letterSpacing=tt,Le.maxWidth=he||1/0,Le.color=Re.clone(),Le.userData.key=F,Le.userData.raw=ge,Le.userData.base=Re.clone(),Le.text=ge??t(F),Le.addEventListener("synccomplete",()=>Le.userData.onSync?.()),Le.sync(),Me.push(Le),Le}function se(){Me.forEach(F=>{F.userData.key&&(F.text=t(F.userData.key),F.sync(()=>F.userData.onSync?.()))})}function ue(F,ge){let q=new Ht,Oe=$({key:F.raw?void 0:F.label,raw:F.raw?F.label:void 0,size:1.7*ge,weight:600,color:F.primary?new ze("#062a2e"):ps,anchorY:"middle"}),Re=new kt({color:F.primary?ii.clone():new ze("#f4f1ec"),transparent:!0,opacity:F.primary?1:0,toneMapped:!1,depthTest:!1,depthWrite:!1}),he=new kt({color:new ze("#f4f1ec"),transparent:!0,opacity:F.primary?0:.6,toneMapped:!1,depthTest:!1,depthWrite:!1,wireframe:!1}),at=new _t(new Wt(1,1),Re),ht=new Ht,De=[0,1,2,3].map(()=>new _t(new Wt(1,1),he));ht.add(...De),at.renderOrder=1,De.forEach(He=>{He.renderOrder=1}),Oe.renderOrder=2,q.add(at,ht,Oe);let tt=1.6*ge,Le=4.6*ge,it=()=>{let He=Oe.textRenderInfo?.blockBounds;if(!He)return;let dt=He[2]-He[0]+tt*2;Oe.position.x=tt,at.scale.set(dt,Le,1),at.position.set(dt/2,0,-.001);let At=Math.max(ge*.12,.002);De[0].scale.set(dt,At,1),De[0].position.set(dt/2,Le/2,0),De[1].scale.set(dt,At,1),De[1].position.set(dt/2,-Le/2,0),De[2].scale.set(At,Le,1),De[2].position.set(0,0,0),De[3].scale.set(At,Le,1),De[3].position.set(dt,0,0),q.userData.width=dt};Oe.userData.onSync=()=>{it(),q.userData.onResize?.()},at.userData.action=F.action,Oe.userData.action=F.action;let Ze=!1,rt=He=>{F.primary||Ze?(Re.color.copy(He?new ze("#a6f7ff"):ii),Re.opacity=1,Re.userData.base=1,Oe.color=new ze("#062a2e"),he.opacity=0,he.userData.base=0):(Re.color.set("#f4f1ec"),Re.opacity=He?.12:0,Re.userData.base=Re.opacity,Oe.color=ps.clone(),he.opacity=He?1:.6,he.userData.base=he.opacity)};return q.userData.hover=rt,q.userData.setSelected=He=>{Ze=He,rt(!1)},at.userData.owner=q,Oe.userData.owner=q,q.userData.height=Le,q.userData.mats=[Re,he],q.userData.label=Oe,q}let Be=10,Te=[],xe=!1,Fe=1;function Pe(F){let ge=_[F.shot][xe?"narrow":"wide"],q=new Ut().lookAt(ge[0],ge[1],new Z(0,1,0)),Oe=new zn().setFromRotationMatrix(q);return{pos:ge[0],look:ge[1],q:Oe}}function Ke(F,ge){let q=new Ht;return q.userData.items=[],q.userData.index=ge,Ne.add(q),Te.push(q),q}let X=F=>F.traverse(ge=>{ge.dispose&&ge!==F?ge.dispose():ge.geometry?.dispose?.()}),ve={type:[],platform:[],feature:[],stage:[]},ie=[],Ae=null;function Ie(){let F=xl(ve);return F?`${F[0]}\u2013${F[1]} ${t("weeks")}`:t("Pick what you are building to see a timeline.")}function le(){ie.forEach(F=>F.userData.setSelected(ve[F.userData.q].includes(F.userData.v))),Ae&&(Ae.text=Ie(),Ae.fontSize=Ae.userData[xl(ve)?"bigSize":"smallSize"],Ae.sync())}function Ve(){let F=xl(ve),ge=(Re,he)=>t(Sr.questions.find(at=>at.id===Re).options.find(at=>at[0]===he)[1]),q=[ve.type[0]?`${t("Project")}: ${ge("type",ve.type[0])}`:"",ve.platform.length?`${t("Platforms")}: ${ve.platform.map(Re=>ge("platform",Re)).join(", ")}`:"",ve.feature.length?`${t("Features")}: ${ve.feature.map(Re=>ge("feature",Re)).join(", ")}`:"",ve.stage[0]?`${t("Where we are")}: ${ge("stage",ve.stage[0])}`:"",F?`${t("Rough timeline from the estimator")}: ${F[0]}\u2013${F[1]} ${t("weeks")}`:""].filter(Boolean),Oe={mobile:"Mobile app",web:"Web platform",ai:"AI product",design:"Brand & site"};try{sessionStorage.setItem("nx-brief",JSON.stringify({projectType:Oe[ve.type[0]]||"",message:q.join(`
`)}))}catch{}window.dispatchEvent(new CustomEvent("nexora:brief",{detail:{projectType:Oe[ve.type[0]]||"",message:q.join(`
`)}})),cn(ee("contact-brief"))}function Xe(F,ge){let q=new Ht;q.userData.topAnchored=!0,ie.length=0;let Oe=[];Sr.questions.forEach(De=>{let tt=$({key:De.label,size:1.25*F,color:xn,letterSpacing:.12}),Le=De.options.map(([it,Ze])=>{let rt=ue({label:Ze,action:{est:{q:De.id,v:it,single:De.single}}},F*.82);return rt.userData.q=De.id,rt.userData.v=it,ie.push(rt),rt});Oe.push({head:tt,chips:Le}),q.add(tt,...Le)});let Re=$({raw:Ie(),size:3.6*F,weight:600,color:ii});Re.userData.bigSize=3.6*F,Re.userData.smallSize=1.6*F,Ae=Re;let he=$({key:"A rough estimate based on typical projects of this size. We confirm the scope, timeline and cost after a 20-minute call.",size:1.2*F,color:xn,max:ge,lineHeight:1.4}),at=[ue({label:"Send as a brief",primary:!0,action:{brief:!0}},F),ue({label:"Book a call",action:{href:"./contact.html#call"}},F)];q.add(Re,he,...at);let ht=()=>{let De=0;Oe.forEach(({head:Ze,chips:rt})=>{Ze.position.set(0,De,0),De-=2.4*F;let He=0,dt=4.6*F*.82;rt.forEach(At=>{let hn=At.userData.width||14*F;He>0&&He+hn>ge&&(He=0,De-=dt+.9*F),At.position.set(He,De-dt/2,0),He+=hn+.9*F}),De-=dt+2.4*F}),Re.position.set(0,De,0);let tt=Re.textRenderInfo?.blockBounds;De-=(tt?tt[3]-tt[1]:4*F)+1*F,he.position.set(0,De,0);let Le=he.textRenderInfo?.blockBounds;De-=(Le?Le[3]-Le[1]:3*F)+3.2*F;let it=0;at.forEach(Ze=>{Ze.position.set(it,De,0),it+=(Ze.userData.width||20*F)+1.4*F}),De-=3.4*F,q.userData.rowHeight=-De,q.userData.onChange?.()};return ie.forEach(De=>{De.userData.onResize=ht}),at.forEach(De=>{De.userData.onResize=ht}),Oe.forEach(({head:De})=>{De.userData.onSync=ht}),Re.userData.onSync=ht,he.userData.onSync=ht,ht(),setTimeout(le,0),q}function gt(F,ge){X(F),F.clear();let q=Pe(ge),Oe=Ue.fov,he=2*Be*Math.tan(Oe*Math.PI/360)/100,at=50*Fe,ht=new Z(0,0,-1).applyQuaternion(q.q);F.position.copy(q.pos).addScaledVector(ht,Be),F.quaternion.copy(q.q);let De=ge.content||{},tt=(-at+(xe?5:8))*he,Le=(xe?2*at-10:Math.min(at*.95,64))*he,it=new Ht;F.add(it);let Ze=(ot,bt)=>$({key:ot,...bt}),rt=()=>new kt({color:"#f4f1ec",transparent:!0,opacity:.16,toneMapped:!1,depthTest:!1,depthWrite:!1}),He=(ot,bt)=>{let Rt=new Ht;return Rt.userData.topAnchored=!0,Rt.userData.rowHeight=4*he,ot.forEach(St=>Rt.add(St)),Rt.userData.restack=()=>{let St=0;ot.forEach(xt=>{xt.position.y=St;let Vt=xt.textRenderInfo?.blockBounds,Kt=xt.userData.rowHeight||(Vt?Vt[3]-Vt[1]:(xt.fontSize||he)*1.2);St-=Kt+bt}),Rt.userData.rowHeight=-St-bt},ot.forEach(St=>{St.sync&&(St.userData.onSync=()=>{Rt.userData.restack(),Rt.userData.onChange?.()})}),Rt.userData.restack(),Rt},dt=[],At=Math.min(Le,50*he);De.eyebrow&&dt.push(()=>Ze(De.eyebrow,{size:(xe?1.6:1.35)*he,color:xn,letterSpacing:.18})),De.title&&dt.push(()=>Ze(De.title,{size:(xe?De.big?5.4:4.4:De.big?8.6:6.2)*he,weight:600,max:Le,lineHeight:1,letterSpacing:-.03})),De.lede&&dt.push(()=>Ze(De.lede,{size:1.8*he,color:xn,max:At,lineHeight:1.45})),De.list&&De.list.forEach((ot,bt)=>dt.push(()=>{let Rt=new Ht,St=$({raw:`0${bt+1}`,size:1.3*he,color:ii,anchorY:"middle"}),xt=Ze(ot.label,{size:(xe?2.6:2.4)*he,weight:600,anchorY:"middle"});xt.position.set(4.2*he,0,0);let Vt=Math.min(Le,46*he),Kt=new _t(new Wt(1,1),rt());Kt.scale.set(Vt,Math.max(he*.1,.002),1),Kt.position.set(Vt/2,-2.6*he,0);let Bn=new _t(new Wt(1,1),new kt({visible:!1}));return Bn.scale.set(Vt,5*he,1),Bn.position.set(Vt/2,0,0),Rt.add(St,xt,Kt,Bn),Rt.userData.rowHeight=5.6*he,[xt,Bn].forEach(ci=>{ci.userData.action=ot.action,ci.userData.owner=Rt}),Rt.userData.hover=ci=>{xt.color=ci?ii.clone():ps.clone(),xt.position.x=(ci?5.2:4.2)*he,ot.service!==void 0&&window.dispatchEvent(new CustomEvent(ci?"nexora:service":"nexora:service-leave",{detail:ot.service}))},Rt})),De.rows&&De.rows.forEach(ot=>dt.push(()=>{let bt=[],Rt=ot.titleRaw?$({raw:ot.titleRaw,size:2*he,weight:600}):Ze(ot.title,{size:2*he,weight:600,max:At});return bt.push(Rt),ot.sub&&bt.push(Ze(ot.sub,{size:1.2*he,color:ii,letterSpacing:.14})),bt.push(Ze(ot.text,{size:1.55*he,color:xn,max:At,lineHeight:1.4})),He(bt,.7*he)})),De.points&&De.points.forEach(ot=>dt.push(()=>De.rawPoints?$({raw:ot,size:1.7*he,color:ps,max:At}):Ze(ot,{size:(xe?1.75:1.65)*he,color:xn,max:At,lineHeight:1.4}))),De.quote&&dt.push(()=>{let ot=new _t(new Wt(1,1),new kt({color:ii.clone(),transparent:!0,toneMapped:!1,depthTest:!1,depthWrite:!1})),bt=Ze(De.quote,{size:(xe?2.1:2.2)*he,weight:600,max:At-3*he,lineHeight:1.25});bt.position.x=2.4*he;let Rt=[bt];if(De.author){let Kt=$({key:De.author,size:1.3*he,color:xn});Kt.position.x=2.4*he,Rt.push(Kt)}let St=He(Rt,1.2*he);St.add(ot);let xt=()=>{let Kt=St.userData.rowHeight;ot.scale.set(Math.max(he*.3,.004),Kt,1),ot.position.set(0,-Kt/2,0)},Vt=St.userData.restack;return St.userData.restack=()=>{Vt(),xt()},xt(),St}),De.screens&&dt.push(()=>{let ot=new Ht,bt=ue({label:"\u2190",raw:!0,action:{screen:De.screens,step:-1}},he),Rt=ue({label:"\u2192",raw:!0,action:{screen:De.screens,step:1}},he);Rt.position.x=7.5*he;let St=Ze("Swipe the screen",{size:1.25*he,color:xn,anchorY:"middle",letterSpacing:.12});return St.position.x=16*he,ot.add(bt,Rt,St),ot.userData.rowHeight=6*he,ot}),De.stores&&dt.push(()=>{let ot=new Ht,bt=0;return De.stores.forEach(Rt=>{let St=Ze("Coming soon to",{size:.95*he,color:xn,letterSpacing:.1,anchorY:"bottom"}),xt=$({raw:Rt,size:1.6*he,weight:600,anchorY:"top"});St.position.set(bt+1.2*he,.2*he,0),xt.position.set(bt+1.2*he,.1*he,0);let Vt=new _t(new Wt(1,1),rt());Vt.material.opacity=.08,Vt.scale.set(15*he,5.4*he,1),Vt.position.set(bt+7.5*he,-.4*he,-.001),ot.add(Vt,St,xt),bt+=16.2*he}),ot.userData.rowHeight=6*he,ot}),De.estimator&&dt.push(()=>Xe(he,At)),De.buttons&&dt.push(()=>{let ot=new Ht,bt=De.buttons.map(St=>ue(St,he)),Rt=()=>{let St=0,xt=0;bt.forEach(Kt=>{let Bn=Kt.userData.width||20*he;St>0&&St+Bn>Le&&(St=0,xt+=1),Kt.position.set(St,-xt*6*he,0),St+=Bn+1.4*he});let Vt=(xt+1)*6*he+.4*he;ot.userData.rowHeight!==Vt&&(ot.userData.rowHeight=Vt,ot.userData.onChange?.())};return bt.forEach(St=>{ot.add(St),St.userData.onResize=Rt}),ot.userData.rowHeight=6.4*he,ot.userData.firstHalf=3.2*he,ot});let hn=dt.map(ot=>ot()),rn=ot=>{if(ot.userData.rowHeight)return ot.userData.rowHeight;let bt=ot.textRenderInfo?.blockBounds;return bt?bt[3]-bt[1]:(ot.fontSize||he)*1.2},Ui=(xe?De.narrowTop??-6:De.top??22)*he,Cn=()=>{let ot=0;hn.forEach((xt,Vt)=>{let Kt=xt.userData.topAnchored?0:xt.userData.firstHalf??(xt.userData.rowHeight?xt.userData.rowHeight/2:0);xt.position.set(0,ot-Kt,0),xt.parent||it.add(xt);let Bn=Vt<hn.length-1?(xt.userData.rowHeight&&!xt.userData.topAnchored?.8:2.2)*he:0;ot-=rn(xt)+Bn});let bt=-ot,Rt=xe?56*he:(Ui/he+40)*he,St=bt>Rt?Rt/bt:1;it.scale.setScalar(St),xe&&De.compact?(it.scale.setScalar(Math.min(St,22*he/bt)),it.position.set(tt,40*he,0)):xe?it.position.set(tt,-44*he+bt*St,0):it.position.set(tt,Ui,0)};hn.forEach(ot=>{ot.isMesh&&ot.sync?ot.userData.onSync=Cn:ot.userData.onChange=Cn}),Cn(),F.userData.reflow=Cn,F.userData.objs=hn}function ut(){Me.length=0,Te.forEach((F,ge)=>gt(F,k[ge])),_n()}k.forEach((F,ge)=>Ke(F,ge));let Et={items:[]},Ft=!1;function _n(){X(Ce),Ce.clear(),Et.items=[];let F=s.clientWidth,ge=s.clientHeight,q=xe?18:32,Oe=-(xe?30:36),Re=$({raw:"Nexora",size:xe?17:18,weight:600,anchorY:"middle"}),he=$({raw:"Studio",size:xe?17:18,color:xn,anchorY:"middle"});Re.position.set(q,Oe,0),he.position.set(q+70,Oe,0),Re.userData.onSync=()=>{let Le=Re.textRenderInfo.blockBounds;he.position.set(q+(Le[2]-Le[0])+6,Oe,0)},Re.userData.action={go:0},Re.userData.owner=Re,Ce.add(Re,he);let at=["en","ru","uz"].map(Le=>{let it=$({raw:Le.toUpperCase(),size:12,weight:600,color:Le===e()?ii:xn,anchorX:"center",anchorY:"middle",letterSpacing:.1});return it.userData.action={lang:Le},it.userData.owner=it,it});if(!xe&&F>=1120){let Le=F*.5-250;ah.forEach(Ze=>{let rt=$({key:Ze.label,size:12,color:xn,anchorY:"middle",letterSpacing:.16});rt.text=`${t(Ze.label).toUpperCase()}${Ze.action.href?" \u2192":""}`,rt.userData.key=null,rt.position.set(Le,Oe,0),rt.userData.action=Ze.action,rt.userData.owner=rt,rt.userData.nav=Ze,Le+=30+t(Ze.label).length*10.2,Ce.add(rt),Et.items.push(rt)}),at.forEach((Ze,rt)=>{Ze.position.set(F-q-200+rt*30,Oe,0),Ce.add(Ze)});let it=ue({label:"Start a project",primary:!0,action:{stop:"contact-brief"}},9);it.position.set(F-q-104,Oe,0),it.scale.setScalar(1),Ce.add(it)}else{let Le=$({key:Ft?"Close":"Menu",size:13,weight:600,anchorX:"right",anchorY:"middle",letterSpacing:.14});if(Le.text=t(Ft?"Close":"Menu").toUpperCase(),Le.userData.key=null,Le.position.set(F-q,Oe,0),Le.userData.action={menu:!0},Le.userData.owner=Le,Ce.add(Le),Ft){let it=new _t(new Wt(F,ge),new kt({color:"#17161b",transparent:!0,opacity:.94,toneMapped:!1,depthTest:!1}));it.position.set(F/2,-ge/2,-1),it.renderOrder=-1,Ce.add(it);let Ze=-ge*.2;[{label:"Home",action:{go:0}},...ah].forEach(rt=>{let He=$({key:rt.label,size:34,weight:600,anchorY:"middle"});He.position.set(q,Ze,0),He.userData.action={...rt.action,closeMenu:!0},He.userData.owner=He,Ce.add(He),Ze-=54}),at.forEach((rt,He)=>{rt.position.set(q+10+He*40,Ze-20,0),rt.fontSize=16,Ce.add(rt)})}}let De=$({raw:"",size:11,color:xn,anchorX:"right",anchorY:"bottom",letterSpacing:.16});De.position.set(F-q,-ge+q,0),Ce.add(De),Et.progress=De;let tt=$({key:"Scroll to explore",size:11,color:xn,anchorY:"bottom",letterSpacing:.16});tt.text=`${t("Scroll to explore").toUpperCase()} \u2193`,tt.userData.key=null,tt.position.set(q,-ge+q,0),Ce.add(tt),Et.hint=tt}let Tn="";function An(){let F=s.clientWidth||1,ge=s.clientHeight||1;f.setSize(F,ge,!1),_e.setSize(F,ge),Ge.resolution.set(F/(u==="high"?2:3),ge/(u==="high"?2:3)),Fe=F/ge;let q=xe;xe=F<760||Fe<.85,Ue.aspect=Fe,Ue.fov=xe?46:34,Ue.updateProjectionMatrix(),Ee.left=0,Ee.right=F,Ee.top=0,Ee.bottom=-ge,Ee.updateProjectionMatrix(),pe.uniforms.uNarrow.value=xe?1:0;let Oe=`${F}x${ge}`;Oe!==Tn&&(Tn=Oe,ut()),q!==xe&&(Ft=!1)}let Gt=k.length-1,yn=new URLSearchParams(location.search).get("p"),ln=yn&&W[yn]>=0?W[yn]:0,Dt=ln,Di=0,Xt=null,ri=F=>{ln=Wn(ln+F,0,Gt),Di=performance.now(),Xt=null},On=F=>F.target instanceof Element&&F.target.closest(".pane");window.addEventListener("wheel",F=>{if(Ft||On(F))return;let ge=F.deltaMode===1?F.deltaY*40:F.deltaMode===2?F.deltaY*innerHeight:F.deltaY;ri(Wn(ge,-160,160)/900)},{passive:!0});let si=null;window.addEventListener("touchstart",F=>{si=On(F)?null:F.touches[0].clientY},{passive:!0}),window.addEventListener("touchmove",F=>{if(si===null||Ft)return;let ge=F.touches[0].clientY;ri((si-ge)/(innerHeight*.55)),si=ge},{passive:!0}),window.addEventListener("touchend",()=>{si=null},{passive:!0}),window.addEventListener("keydown",F=>{On(F)||F.target instanceof Element&&F.target.closest("input, textarea, select, button, a")||(["ArrowDown","PageDown"," "].includes(F.key)&&(cn(Math.min(Gt,Math.round(ln)+1)),F.preventDefault()),["ArrowUp","PageUp"].includes(F.key)&&(cn(Math.max(0,Math.round(ln)-1)),F.preventDefault()),F.key==="Home"&&cn(0),F.key==="End"&&cn(Gt))});function cn(F){Xt={from:Dt,to:Wn(F,0,Gt),t:0,dur:1.2+Math.min(3,Math.abs(F-Dt))*.35},ln=Xt.to}let En=new zs,ai=new lt,pn={x:0,y:0,tx:0,ty:0,px:-1,py:-1},et=null;function oi(F,ge){let q=s.getBoundingClientRect(),Oe=F-q.left,Re=ge-q.top;ai.set(Oe/q.width*2-1,-(Re/q.height)*2+1),En.setFromCamera(ai,Ee);let he=En.intersectObjects(Ce.children,!0).find(ht=>ht.object.userData.action);if(he)return he.object;En.setFromCamera(ai,Ue);let at=Te.filter(ht=>ht.visible);return he=En.intersectObjects(at,!0).find(ht=>ht.object.userData.action),he?he.object:(he=En.intersectObjects(Object.values(O).map(ht=>ht.screen),!1)[0],he?he.object:null)}s.addEventListener("pointermove",F=>{if(pn.tx=F.clientX/innerWidth*2-1,pn.ty=F.clientY/innerHeight*2-1,F.pointerType!=="mouse")return;let ge=oi(F.clientX,F.clientY),q=ge?ge.userData.owner||ge:null;q!==et&&(et?.userData.hover?.(!1),et&&et.isMesh&&et.userData.base&&!et.userData.hover&&(et.color=et.userData.base.clone()),et=q,q?.userData.hover?q.userData.hover(!0):q?.isMesh&&q.userData.base&&(q.color=ii.clone()),s.style.cursor=q?"pointer":"",q&&window.dispatchEvent(new CustomEvent("nexora:hover")))});let li=null;s.addEventListener("pointerdown",F=>{li={x:F.clientX,y:F.clientY,at:performance.now()}}),s.addEventListener("pointerup",F=>{if(!li)return;let ge=F.clientX-li.x,q=F.clientY-li.y,Oe=performance.now()-li.at<600;if(li=null,Math.abs(ge)>50&&Math.abs(ge)>Math.abs(q)*1.4){let he=k[Math.round(Dt)];he.content?.screens&&w(he.content.screens,ge<0?1:-1);return}if(Math.abs(ge)>8||Math.abs(q)>8||!Oe)return;let Re=oi(F.clientX,F.clientY);Re&&Xn(Re.userData.action)});function Xn(F){if(F){if(window.dispatchEvent(new CustomEvent("nexora:click")),F.closeMenu&&(Ft=!1,_n()),F.go!==void 0&&cn(F.go),F.place&&cn(W[F.place]),F.stop&&cn(ee(F.stop)),F.href&&(window.location.href=F.href),F.screen&&w(F.screen,F.step),F.est){let ge=ve[F.est.q],q=ge.indexOf(F.est.v);F.est.single?ve[F.est.q]=q>=0?[]:[F.est.v]:q>=0?ge.splice(q,1):ge.push(F.est.v),le()}F.brief&&Ve(),F.lang&&window.dispatchEvent(new CustomEvent("nexora:lang",{detail:F.lang})),F.menu&&(Ft=!Ft,_n())}}function w(F,ge){let q=O[F];if(!q)return;let Oe=q.pending??q.index;q.pending=(Oe+ge+q.textures.length)%q.textures.length,q.load(q.textures[q.pending])}let Y=new Z,oe=new Z,te=new Z,ne=new Z,We=new Z,Ye=performance.now(),ke=0,Qe=!1,nt=null,ct={frames:0,sum:0,checks:0};function vt(F){if(requestAnimationFrame(vt),document.hidden){Ye=F;return}u==="low"&&F-Ye<30&&Qe||Tt(F)}let je=window.devicePixelRatio||1;function Tt(F){let ge=window.devicePixelRatio||1;ge!==je&&(je=ge,$e());let q=Math.max(0,Math.min(.1,(F-Ye)/1e3));if(Ye=F,ke+=q,Xt){Xt.t=Math.min(1,Xt.t+q/Xt.dur);let rt=Xt.t<.5?4*Xt.t**3:1-(-2*Xt.t+2)**3/2;Dt=Xt.from+(Xt.to-Xt.from)*rt,Xt.t>=1&&(Xt=null)}else F-Di>380&&(ln+=(Math.round(ln)-ln)*(1-Math.exp(-q*6))),Dt+=(ln-Dt)*(1-Math.exp(-q*3.2));let Oe=xe?"narrow":"wide",Re=Math.floor(Wn(Dt,0,Gt)),he=Math.min(Gt,Re+1),at=Id(Wn(Dt-Re)),ht=_[k[Re].shot][Oe],De=_[k[he].shot][Oe];ne.copy(ht[0]).lerp(De[0],at),We.copy(ht[1]).lerp(De[1],at);let tt=Math.sin(at*Math.PI)*Math.min(6,ht[0].distanceTo(De[0])*.12);Y.copy(ne).add(new Z(0,tt,0)),oe.copy(We),pn.x+=(pn.tx-pn.x)*(1-Math.exp(-q*2)),pn.y+=(pn.ty-pn.y)*(1-Math.exp(-q*2)),te.set(Math.sin(ke*.05)*.5+pn.x*.7,-pn.y*.35,0),Ue.position.copy(Y).add(te),Ue.lookAt(oe.clone().addScaledVector(te,.3));let Le=0;Te.forEach((rt,He)=>{let dt=Wn(1-Math.abs(Dt-He)*2.4);rt.visible=dt>.01,rt.visible&&(Le=Math.max(Le,dt),rt.traverse(At=>{At.isMesh&&At.material&&(At.material.userData.base===void 0&&(At.material.userData.base=At.material.opacity??1),At.material.opacity=At.material.userData.base*dt,"fillOpacity"in At&&(At.fillOpacity=dt))}),rt.position.y+=0)}),pe.uniforms.uAmount.value=Le,pe.uniforms.uNarrow.value=xe?k[Math.round(Wn(Dt,0,Gt))].content?.compact?2:1:0,T.uTime.value=ke,Pt.lerp(Nt,1-Math.exp(-q*4)),I.emissive.copy(Pt).multiplyScalar(fe),Object.entries(O).forEach(([rt,He])=>{let dt=W[rt],At=dt+fa.find(Cn=>Cn.id===rt).stops.length-1,hn=Dt<dt?dt-Dt:Dt>At?Dt-At:0,rn=Wn(1.6-hn*1.4);if(He.on+=(rn-He.on)*(1-Math.exp(-q*5)),He.pending!==null){He.fade=Math.min(1,He.fade+q*7);let Cn=He.textures[He.pending];He.fade>=1&&Cn.tex?.image&&(He.index=He.pending,He.pending=null,He.screenMat.map=Cn.tex,He.screenMat.needsUpdate=!0,window.dispatchEvent(new CustomEvent("nexora:screen-shown")))}else He.fade=Math.max(0,He.fade-q*5);let Ui=Cd[He.textures[He.index].shot]??.8;He.screenMat.color.setScalar((.04+He.on*(Ui-.04))*(1-He.fade*.92)),He.frameMat.color.copy(ii).multiplyScalar(.06+He.on*.85)}),de.rotation.y=ke*.012,j.intensity=12+Math.sin(ke*7.3)*.8+Math.sin(ke*3.1)*1.2,qe.uniforms.uTime.value=ke%10;let it=Math.round(Wn(Dt,0,Gt)),Ze=k[it];if(Et.progress){let rt=`${String(it+1).padStart(2,"0")} / ${String(Gt+1).padStart(2,"0")} \u2014 ${(()=>{let He=fa.find(dt=>dt.id===Ze.place);return(He.raw?He.label:t(He.label)).toUpperCase()})()}`;Et.progress.text!==rt&&(Et.progress.text=rt,Et.progress.sync())}if(Et.hint&&(Et.hint.fillOpacity=Wn(1-Dt*2)),Ze.place!==nt){nt=Ze.place,i?.(Ze.place);let rt={arise:"work",idrok:"work",estimate:"contact"}[Ze.place]||Ze.place;Et.items.forEach(He=>{He.color=(He.userData.nav.action.place===rt?ps:xn).clone(),He.userData.base=He.color.clone()})}if(a?.(Dt,k),f.clear(),_e.render(q),f.clearDepth(),f.render(Ne,Ue),f.clearDepth(),f.render(Ce,Ee),ct.checks<3&&(ct.frames+=1,ct.sum+=q,ct.frames===90)){let rt=ct.sum/ct.frames;if(ct.frames=0,ct.sum=0,ct.checks+=1,rt>(u==="low"?.045:.024)){let dt=d.indexOf(u);dt>0?(u=d[dt-1],$e()):h||n?.("slow")}}Qe||(Qe=!0,r?.({tier:u}))}let Nt=new ze(yr[0]),Pt=new ze(yr[0]);return window.addEventListener("nexora:service",F=>Nt.set(yr[F.detail]??yr[0])),window.addEventListener("nexora:service-leave",()=>Nt.set(yr[0])),new ResizeObserver(()=>An()).observe(s),$e(),requestAnimationFrame(vt),{retranslate:()=>{ut()},goPlace:F=>cn(W[F]??0),get tier(){return u},debug:(F,ge=2)=>{ln=Dt=Wn(F,0,Gt),Xt=null;for(let q=0;q<30;q+=1)Tt(Ye+34)}}}export{O1 as mountSite};
