import{a as c,i as N,s as W}from"./assets/vendor-BLr1Yvwf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();c.defaults.baseURL="https://sound-wave.b.goit.study/api";const g=8;let C=1;window.addEventListener("DOMContentLoaded",Y);function u(t){return document.querySelector(t)}async function Y(){const t=u(".artists-list"),e=u(".artists-load-more-btn"),s=u(".loader");if(!t||!e){console.error("[artists] .artists-list або .artists-load-more-btn не знайдено у DOM");return}await z(1),e.addEventListener("click",a),t.addEventListener("click",_);async function a(){n(!0),e.style.display="none",C+=1;const o=await B(C,g);t.insertAdjacentHTML("beforeend",I(o)),S(e,o.length),n(!1),e.style.display!=="none"&&(e.style.display="flex")}function n(o){s?.classList.toggle("visually-hidden",!o)}}async function z(t){const e=u(".artists-list"),s=u(".artists-load-more-btn"),a=u(".loader");a?.classList.remove("visually-hidden");const n=await B(t,g);e.innerHTML=I(n),S(s,n.length),a?.classList.add("visually-hidden")}async function B(t=1,e=g){try{const{data:s}=await c.get("/artists",{params:{page:t,limit:e},headers:{Accept:"application/json"}});return Array.isArray(s)?s:Array.isArray(s?.artists)?s.artists:Array.isArray(s?.results)?s.results:s?.items??[]}catch(s){return console.error("[artists] fetchArtists error:",s),[]}}function S(t,e){t.style.display=e<g?"none":"flex"}function I(t=[]){return t.map(({_id:e,genres:s,strArtist:a,strArtistThumb:n,strBiographyEN:o})=>{const i=n||"./img/placeholders/artist@1x.jpg",l=a||"Unknown",d=F(s).map(h=>`<li class="artists-genres-item">${L(R(h))}</li>`).join("");return`
<li class="artists-card-item">
  <img class="artists-image" src="${i}" alt="${L(l)}" loading="lazy" />
  <ul class="artists-genres-list">${d}</ul>
  <p class="artists-name">${L(l)}</p>
  <p class="artists-information">${U(o||"",144)}</p>
  <button class="artists-learn-more-card-btn open-artist-modal" data-artist-id="${e}">
    Learn More
    <svg class="caret-right-icon" width="8" height="16" aria-hidden="true" focusable="false">
      <use href="./icons-artists.svg#icon-caret-right"></use>
    </svg>
  </button>
</li>`}).join("")}function F(t){return Array.isArray(t)?t:typeof t=="string"?t.split(/[,/]/).map(e=>e.trim()).filter(Boolean):[]}function R(t=""){return String(t).replace(/[,/]/g," ")}function U(t="",e=144){const s=window.innerWidth,a=s<768?60:s<1440?160:e,n=String(t);return n.length>a?n.slice(0,a)+"…":n}function L(t=""){return String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}function _(t){const e=t.target.closest(".open-artist-modal");if(!e)return;const s=e.dataset.artistId;s&&console.log("[artists] clicked id:",s)}const r={modal:document.getElementById("artistModal"),modalClose:document.getElementById("modalClose"),modalContentWrapper:document.querySelector(".modal__content"),modalContent:document.getElementById("modal-content"),loader:document.getElementById("globalLoader"),artists:document.querySelector(".artists-section")};let m=0;c.defaults.baseURL="https://sound-wave.b.goit.study/api";c.defaults.timeout=1e4;function H(){m++,r.loader&&m===1&&r.loader.classList.add("active")}function f(){m=Math.max(0,m-1),r.loader&&m===0&&r.loader.classList.remove("active")}function q(t,e="Error"){N.error({title:e,message:t,position:"topRight",timeout:7e3,backgroundColor:"orange"})}c.interceptors.request.use(t=>(H(),t),t=>(f(),q("Request error"),Promise.reject(t)));c.interceptors.response.use(t=>(f(),t),t=>{f();const e=t.response?`Error ${t.response.status}: ${t.response.statusText}`:"Network error, please check your connection";return q(e),Promise.reject(t)});async function G(t){return(await c.get(`/artists/${t}`)).data}async function K(t){return(await c.get(`/artists/${t}/albums`)).data}function X(t){if(!t)return"0:00";let e=Math.floor(t/1e3),s=Math.floor(e/3600),a=Math.floor(e%3600/60),n=e%60;return s>0?s+":"+(a<10?"0"+a:a)+":"+(n<10?"0"+n:n):a+":"+(n<10?"0"+n:n)}function J(t,e){return t&&e?`${t}–${e}`:t?`${t}–present`:"No information"}function T(t="No Image",e=150,s=150){const a=W({width:e,height:s,text:t,fontSize:14,fontFamily:'"IBM Plex Sans", sans-serif',textColor:"#aaa"});return`data:image/svg+xml;base64,${btoa(a)}`}function Q(t,e){const{strArtist:s,strArtistThumb:a,intFormedYear:n,intDiedYear:o,strGender:i,intMembers:l,strCountry:d,strBiographyEN:h,genres:x}=t,p=h||"",E=p.indexOf(".",250),$=E!==-1?p.slice(0,E+1):p.slice(0,250);let y=!1;const{albumsList:b}=e,O=J(n,o),P=([...x],`
  <ul id="genres-list">${x.map(v=>`<li class="genre">
          <p class="genre-text">${v}</p>
        </li>`).join("")}</ul>
  `),j=a||T("No Image");let A="";b&&b.length&&(A=`
      <h3 id="albums-title">Albums</h3>
      <ul id="albums-list">
        ${b.map(v=>V(v)).join("")}
      </ul>
    `);const D=`
  <h1 id="artist-name">${s}</h1>
  <div id="modal-top-wrapper">
    <div id="modal-artist-photo">
      <img id="artist-photo" src="${j}" alt="${s}" onerror="onerror=null;src='${T()}'"/>
    </div>
    <div id="artist-intro-wrapper">
      <div class="intro-box">
        <h4 class="artist-details-heading">Years active</h4>
        <p class="artist-details-info">${O}</p>
      </div>
      <div class="intro-box">
        <h4 class="artist-details-heading">Sex</h4>
        <p class="artist-details-info"> ${i||""}</p>
      </div>
      <div class="intro-box">
        <h4 class="artist-details-heading">Members</h4>
        <p class="artist-details-info"> ${l||""}</p>
      </div>
      <div class="intro-box">
        <h4 class="artist-details-heading">Country</h4>        <p class="artist-details-info"> ${d?d.slice(d.lastIndexOf(",")+2):""}</p>
      </div>
      <div id="bio-data">
        <h4 class="artist-details-heading">Biography</h4>
        <p class="artist-details-info">${$}</p>
        <button type="button" id="bio-load-more">
          <i class="bx bx-caret-down bx-tada-hover" style="color:#fff; background-color:transparent"></i>
        </button>
      </div>
      ${P}
    </div>
  </div>
  ${A}
`;r.modalContent.insertAdjacentHTML("afterbegin",D);const M=document.querySelector("#bio-data > .artist-details-info"),k=document.querySelector("#bio-load-more > .bx");document.querySelector("#bio-load-more").addEventListener("click",()=>{y=!y,y?(M.textContent=p,k.classList.replace("bx-caret-down","bx-caret-up")):(M.textContent=$,k.classList.replace("bx-caret-up","bx-caret-down"))})}function V(t){const{tracks:e,strAlbum:s}=t;let a="";return e&&e.length&&(a=`
          <div id="track-list-headers">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </div>
          <ul>
          ${e.map(({strTrack:n,intDuration:o,movie:i})=>`
            <li class="song">
              <span class="track-name">${n}</span>
              <span class="track-duration">${X(o)||"N/A"}</span>
              <span class="track-link">
                ${i?`<a href="${i}" target="_blank" rel="noopener noreferrer">
                      <i class="bx bxl-youtube bx-tada" style="color: #fff"></i>
                    </a>
                    `:"<span></span>"}
              </span>
            </li>`).join("")}
          </ul>
      `),`
    <li class="album">
      <h4 class="album-details-heading">${s}</h4>
      ${a}
    </li>
  `}async function Z(t="65ada69eaf9f6d155db48612"){r.modal.classList.add("active"),document.body.classList.add("modal-open"),r.modalContent.innerHTML='<div class="modal-loading">Loading artist details...</div>',H();try{const[e,s]=await Promise.all([G(t),K(t)]);r.modalContent.innerHTML="",Q(e,s)}catch(e){r.modalContent.innerHTML=`<div class="modal-error">Failed to load artist details due to ${e}.</div>`}finally{f(),r.modalContentWrapper.scrollHeight>r.modalContentWrapper.offsetHeight&&(r.modalContentWrapper.style.overflowY="scroll",r.modalContentWrapper.style.overflowX="hidden")}}async function tt(t){const e=t.target.closest(".artists-learn-more-card-btn");if(!e)return;const s=e.getAttribute("data-artist-id")||"";s?Z(s):console.warn("Artist ID not found")}function w(){r.modal.classList.remove("active"),document.body.classList.remove("modal-open"),setTimeout(()=>{r.modalContentWrapper.innerHTML=""},300)}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".logo, .logo-mobile").forEach(l=>{l.addEventListener("click",d=>{d.preventDefault(),window.location.reload()})});const e=document.getElementById("open-menu"),s=document.getElementById("close-menu"),a=document.getElementById("mobile-menu"),n=a?.querySelectorAll(".nav-list-mobile a")||[];if(!e||!s||!a)return;const o=()=>{a.classList.add("open"),a.classList.remove("hidden"),document.body.style.overflow="hidden",e.setAttribute("aria-expanded","true")},i=()=>{a.classList.remove("open"),setTimeout(()=>a.classList.add("hidden"),300),document.body.style.overflow="",e.setAttribute("aria-expanded","false"),e.focus()};e.addEventListener("click",o),s.addEventListener("click",i),n.forEach(l=>l.addEventListener("click",i)),document.addEventListener("click",l=>{a.classList.contains("open")&&!a.contains(l.target)&&l.target!==e&&i()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&a.classList.contains("open")&&i()}),r.artists&&r.artists.addEventListener("click",tt),window.addEventListener("hashchange",()=>{a.classList.contains("open")&&i()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&a.classList.contains("open")&&i()})});r.modalClose.addEventListener("click",w);r.modal.addEventListener("click",t=>{t.target===r.modal&&w()});document.addEventListener("keydown",t=>{t.key==="Escape"&&r.modal.classList.contains("active")&&w()});
//# sourceMappingURL=index.js.map
