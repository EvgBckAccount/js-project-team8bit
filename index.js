import{a as c,i as N,s as W}from"./assets/vendor-BLr1Yvwf.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}})();c.defaults.baseURL="https://sound-wave.b.goit.study/api";const h=8;let C=1;window.addEventListener("DOMContentLoaded",U);function u(t){return document.querySelector(t)}async function U(){const t=u(".artists-list"),e=u(".artists-load-more-btn"),n=u(".loader");if(!t||!e){console.error("[artists] .artists-list або .artists-load-more-btn не знайдено у DOM");return}await Y(1),e.addEventListener("click",a);async function a(){s(!0),e.style.display="none",C+=1;const o=await B(C,h);t.insertAdjacentHTML("beforeend",I(o)),S(e,o.length),s(!1),e.style.display!=="none"&&(e.style.display="flex")}function s(o){n?.classList.toggle("visually-hidden",!o)}}async function Y(t){const e=u(".artists-list"),n=u(".artists-load-more-btn"),a=u(".loader");a?.classList.remove("visually-hidden");const s=await B(t,h);e.innerHTML=I(s),S(n,s.length),a?.classList.add("visually-hidden")}async function B(t=1,e=h){try{const{data:n}=await c.get("/artists",{params:{page:t,limit:e},headers:{Accept:"application/json"}});return Array.isArray(n)?n:Array.isArray(n?.artists)?n.artists:Array.isArray(n?.results)?n.results:n?.items??[]}catch(n){return console.error("[artists] fetchArtists error:",n),[]}}function S(t,e){t.style.display=e<h?"none":"flex"}function I(t=[]){return t.map(({_id:e,genres:n,strArtist:a,strArtistThumb:s,strBiographyEN:o})=>{const i=s||"./img/placeholders/artist@1x.jpg",l=a||"Unknown",d=z(n).map(y=>`<li class="artists-genres-item">${w(F(y))}</li>`).join("");return`
<li class="artists-card-item">
  <img class="artists-image" src="${i}" alt="${w(l)}" loading="lazy" />
  <ul class="artists-genres-list">${d}</ul>
  <p class="artists-name">${w(l)}</p>
  <p class="artists-information">${R(o||"",144)}</p>
  <button class="artists-learn-more-card-btn open-artist-modal" data-artist-id="${e}">
    Learn More
    <svg class="caret-right-icon" width="8" height="16" aria-hidden="true" focusable="false">
      <use href="./icons-artists.svg#icon-caret-right"></use>
    </svg>
  </button>
</li>`}).join("")}function z(t){return Array.isArray(t)?t:typeof t=="string"?t.split(/[,/]/).map(e=>e.trim()).filter(Boolean):[]}function F(t=""){return String(t).replace(/[,/]/g," ")}function R(t="",e=144){const n=window.innerWidth,a=n<768?60:n<1440?160:e,s=String(t);return s.length>a?s.slice(0,a)+"…":s}function w(t=""){return String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const r={modal:document.getElementById("artistModal"),modalClose:document.getElementById("modalClose"),modalContentWrapper:document.querySelector(".modal__content"),modalContent:document.getElementById("modal-content"),loader:document.getElementById("globalLoader"),artists:document.querySelector(".artists-section")};let m=0;c.defaults.baseURL="https://sound-wave.b.goit.study/api";c.defaults.timeout=1e4;function H(){m++,r.loader&&m===1&&r.loader.classList.add("active")}function g(){m=Math.max(0,m-1),r.loader&&m===0&&r.loader.classList.remove("active")}function q(t,e="Error"){N.error({title:e,message:t,position:"topRight",timeout:7e3,backgroundColor:"orange"})}c.interceptors.request.use(t=>(H(),t),t=>(g(),q("Request error"),Promise.reject(t)));c.interceptors.response.use(t=>(g(),t),t=>{g();const e=t.response?`Error ${t.response.status}: ${t.response.statusText}`:"Network error, please check your connection";return q(e),Promise.reject(t)});async function _(t){return(await c.get(`/artists/${t}`)).data}async function G(t){return(await c.get(`/artists/${t}/albums`)).data}function K(t){if(!t)return"0:00";let e=Math.floor(t/1e3),n=Math.floor(e/3600),a=Math.floor(e%3600/60),s=e%60;return n>0?n+":"+(a<10?"0"+a:a)+":"+(s<10?"0"+s:s):a+":"+(s<10?"0"+s:s)}function X(t,e){return t&&e?`${t}–${e}`:t?`${t}–present`:"Information missing"}function T(t="No Image",e=150,n=150){const a=W({width:e,height:n,text:t,fontSize:14,fontFamily:'"IBM Plex Sans", sans-serif',textColor:"#aaa"});return`data:image/svg+xml;base64,${btoa(a)}`}function J(t,e){const{strArtist:n,strArtistThumb:a,intFormedYear:s,intDiedYear:o,strGender:i,intMembers:l,strCountry:d,strBiographyEN:y,genres:E}=t,f=y||"",x=f.indexOf(".",250),$=x!==-1?f.slice(0,x+1):f.slice(0,250);let b=!1;const{albumsList:v}=e,O=X(s,o),P=([...E],`
  <ul id="genres-list">${E.map(L=>`<li class="genre">
          <p class="genre-text">${L}</p>
        </li>`).join("")}</ul>
  `),j=a||T("No Image");let M="";v&&v.length&&(M=`
      <h3 id="albums-title">Albums</h3>
      <ul id="albums-list">
        ${v.map(L=>Q(L)).join("")}
      </ul>
    `);const D=`
  <h1 id="artist-name">${n}</h1>
  <div id="modal-top-wrapper">
    <div id="modal-artist-photo">
      <img id="artist-photo" src="${j}" alt="${n}" onerror="onerror=null;src='${T()}'"/>
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
  ${M}
`;r.modalContent.insertAdjacentHTML("afterbegin",D);const A=document.querySelector("#bio-data > .artist-details-info"),k=document.querySelector("#bio-load-more > .bx");document.querySelector("#bio-load-more").addEventListener("click",()=>{b=!b,b?(A.textContent=f,k.classList.replace("bx-caret-down","bx-caret-up")):(A.textContent=$,k.classList.replace("bx-caret-up","bx-caret-down"))})}function Q(t){const{tracks:e,strAlbum:n}=t;let a="";return e&&e.length&&(a=`
          <div id="track-list-headers">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </div>
          <ul>
          ${e.map(({strTrack:s,intDuration:o,movie:i})=>`
            <li class="song">
              <span class="track-name">${s}</span>
              <span class="track-duration">${K(o)||"N/A"}</span>
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
      <h4 class="album-details-heading">${n}</h4>
      ${a}
    </li>
  `}async function V(t="65ada69eaf9f6d155db48612"){r.modal.classList.add("active"),document.body.classList.add("modal-open"),r.modalContent.innerHTML='<div class="modal-loading">Loading artist details...</div>',H();try{const[e,n]=await Promise.all([_(t),G(t)]);r.modalContent.innerHTML="",J(e,n)}catch(e){r.modalContent.innerHTML=`<div class="modal-error">Failed to load artist details due to ${e}.</div>`}finally{g(),r.modalContentWrapper.scrollHeight>r.modalContentWrapper.offsetHeight&&(r.modalContentWrapper.style.overflowY="scroll",r.modalContentWrapper.style.overflowX="hidden")}}function Z(t){let e="";if(t.target.nodeName==="BUTTON"&&t.target.classList.contains("artists-learn-more-card-btn"))e=t.target.getAttribute("data-artist-id")||"",V(e),r.modalClose.addEventListener("click",p),r.modal.addEventListener("click",n=>{n.target===r.modal&&p()});else return}function tt(){r.modalClose.removeEventListener("click",p),r.modal.removeEventListener("click",t=>{t.target===r.modal&&p()})}function p(){r.modal.classList.remove("active"),document.body.classList.remove("modal-open"),tt(),setTimeout(()=>{r.modalContent.innerHTML=""},300)}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".logo, .logo-mobile").forEach(l=>{l.addEventListener("click",d=>{d.preventDefault(),window.location.reload()})});const e=document.getElementById("open-menu"),n=document.getElementById("close-menu"),a=document.getElementById("mobile-menu"),s=a?.querySelectorAll(".nav-list-mobile a")||[];if(!e||!n||!a)return;const o=()=>{a.classList.add("open"),a.classList.remove("hidden"),document.body.style.overflow="hidden",e.setAttribute("aria-expanded","true")},i=()=>{a.classList.remove("open"),setTimeout(()=>a.classList.add("hidden"),300),document.body.style.overflow="",e.setAttribute("aria-expanded","false"),e.focus()};e.addEventListener("click",o),n.addEventListener("click",i),s.forEach(l=>l.addEventListener("click",i)),document.addEventListener("click",l=>{a.classList.contains("open")&&!a.contains(l.target)&&l.target!==e&&i()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&a.classList.contains("open")&&i()}),r.artists&&r.artists.addEventListener("click",Z),window.addEventListener("hashchange",()=>{a.classList.contains("open")&&i()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&a.classList.contains("open")&&i()})});document.addEventListener("keydown",t=>{t.key==="Escape"&&r.modal.classList.contains("active")&&p()});
//# sourceMappingURL=index.js.map
