(()=>{var e,t={843:()=>{class e extends HTMLElement{set dataAnime(e){this._dataAnime=e,this.render()}render(){this.innerHTML=`\n        <div style='background-color: #115e59;  border-radius: 15px; width:100%; max-width:400px ; padding : 10px;text-align:center;'>\n          <div style="font-size:15pt; font-family:fantasy; color:white; margin-bottom:10px;">${this._dataAnime.animeTitle}</div>\n          <img src="${this._dataAnime.animeImg}" style="width:100%; height:auto; border-radius: 15px"/>\n        </div>\n      `}}customElements.define("item-anime",e)},972:(e,t,n)=>{"use strict";var i=n(648);n(843);class r extends HTMLElement{set dataAnime(e){this._dataAnime=e,this.render()}render(){this.innerHTML="",this._dataAnime.forEach((e=>{const t=document.createElement("item-anime");t.dataAnime=e,t.style.width="100%",t.style.display="flex",t.style.flexDirection="row",t.style.justifyContent="center",this.appendChild(t)}))}}customElements.define("list-anime",r),window.addEventListener("DOMContentLoaded",(()=>{(async()=>{const e=document.querySelector("list-anime");i.Z.get("https://gogoanime.consumet.org/recent-release").then((t=>{e.dataAnime=t.data})).catch((e=>{console.log(e)}))})()}))}},n={};function i(e){var r=n[e];if(void 0!==r)return r.exports;var a=n[e]={exports:{}};return t[e](a,a.exports,i),a.exports}i.m=t,e=[],i.O=(t,n,r,a)=>{if(!n){var s=1/0;for(m=0;m<e.length;m++){for(var[n,r,a]=e[m],o=!0,d=0;d<n.length;d++)(!1&a||s>=a)&&Object.keys(i.O).every((e=>i.O[e](n[d])))?n.splice(d--,1):(o=!1,a<s&&(s=a));if(o){e.splice(m--,1);var l=r();void 0!==l&&(t=l)}}return t}a=a||0;for(var m=e.length;m>0&&e[m-1][2]>a;m--)e[m]=e[m-1];e[m]=[n,r,a]},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,n)=>{var r,a,[s,o,d]=n,l=0;if(s.some((t=>0!==e[t]))){for(r in o)i.o(o,r)&&(i.m[r]=o[r]);if(d)var m=d(i)}for(t&&t(n);l<s.length;l++)a=s[l],i.o(e,a)&&e[a]&&e[a][0](),e[a]=0;return i.O(m)},n=self.webpackChunksubmission_website=self.webpackChunksubmission_website||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=i.O(void 0,[648],(()=>i(972)));r=i.O(r)})();