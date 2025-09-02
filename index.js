import{a as c,S as R,i as U,s as Y}from"./assets/vendor-Bg2myy9E.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(a){if(a.ep)return;a.ep=!0;const o=s(a);fetch(a.href,o)}})();const _="https://sound-wave.b.goit.study/api";c.defaults.baseURL=_;async function z(t=10,e=1){try{return(await c.get("/feedbacks",{params:{limit:t,page:e}})).data}catch(s){throw console.error("Error fetching feedback list:",s.message,s.response?.status),s}}let g;const G=document.querySelector(".swiper-wrapper"),k=document.querySelector(".feedback-pagination");async function K(){try{(await z(10,1)).data.forEach(({rating:s,descr:n,name:a})=>{const o=X({rating:s,text:n,user:a});G.appendChild(o)}),Q()}catch(t){console.error("Oops...Error",t.message)}}function X({rating:t,text:e,user:s}){const n=document.createElement("div");n.classList.add("swiper-slide");const a=Math.round(t);return n.innerHTML=`
    <div class="feedback-card">
      <div class="feedback-stars">${J(a)}</div>
      <p class="feedback-text">"${e}"</p>
      <p class="feedback-user">${s}</p>
    </div>
  `,n}function J(t){let s="";for(let n=1;n<=5;n++){const a=n<=t?"star-filled":"star-outline";s+=`
     <svg class="star-icon ${a}" width="24" height="24">
        <use href="/img/icons/symbol-defs.svg#${n<=t?"icon-star-filled":"icon-star-outline"}"></use>
      </svg>
    `}return s}function Q(){g=new R(".feedback-swiper",{loop:!1,navigation:{nextEl:".feedback-button-next",prevEl:".feedback-button-prev"},grabCursor:!0,on:{slideChange:V}}),I(),Z()}function I(){k.innerHTML="";const t=g.slides.length,e=g.activeIndex;if(t===0)return;const s=0,n=Math.floor(t/2),a=t-1;[s,n,a].forEach(i=>{const l=document.createElement("span");l.classList.add("swiper-pagination-bullet"),l.setAttribute("data-slide-index",i),e===i&&l.classList.add("swiper-pagination-bullet-active"),k.appendChild(l)})}function V(){I()}function Z(){k.addEventListener("click",t=>{const e=t.target.closest(".swiper-pagination-bullet");if(!e)return;const s=parseInt(e.getAttribute("data-slide-index"),10);g.slideTo(s)})}K();c.defaults.baseURL="https://sound-wave.b.goit.study/api";const h=8;let T=1;window.addEventListener("DOMContentLoaded",tt);function u(t){return document.querySelector(t)}async function tt(){const t=u(".artists-list"),e=u(".artists-load-more-btn"),s=u(".loader");if(!t||!e){console.error("[artists] .artists-list або .artists-load-more-btn не знайдено у DOM");return}await et(1),e.addEventListener("click",n);async function n(){a(!0),e.style.display="none",T+=1;const o=await H(T,h);t.insertAdjacentHTML("beforeend",q(o)),P(e,o.length),a(!1),e.style.display!=="none"&&(e.style.display="flex")}function a(o){s?.classList.toggle("visually-hidden",!o)}}async function et(t){const e=u(".artists-list"),s=u(".artists-load-more-btn"),n=u(".loader");n?.classList.remove("visually-hidden");const a=await H(t,h);e.innerHTML=q(a),P(s,a.length),n?.classList.add("visually-hidden")}async function H(t=1,e=h){try{const{data:s}=await c.get("/artists",{params:{page:t,limit:e},headers:{Accept:"application/json"}});return Array.isArray(s)?s:Array.isArray(s?.artists)?s.artists:Array.isArray(s?.results)?s.results:s?.items??[]}catch(s){return console.error("[artists] fetchArtists error:",s),[]}}function P(t,e){t.style.display=e<h?"none":"flex"}function q(t=[]){return t.map(({_id:e,genres:s,strArtist:n,strArtistThumb:a,strBiographyEN:o})=>{const i=a||"./img/placeholders/artist@1x.jpg",l=n||"Unknown",d=st(s).map(y=>`<li class="artists-genres-item">${x(nt(y))}</li>`).join("");return`
<li class="artists-card-item">
  <img class="artists-image" src="${i}" alt="${x(l)}" loading="lazy" />
  <ul class="artists-genres-list">${d}</ul>
  <p class="artists-name">${x(l)}</p>
  <p class="artists-information">${at(o||"",144)}</p>
  <button class="artists-learn-more-card-btn open-artist-modal" data-artist-id="${e}">
    Learn More
    <i class='bx  bx-caret-right bx-fade-right'  style='color:#fff'></i>
  </button>
</li>`}).join("")}function st(t){return Array.isArray(t)?t:typeof t=="string"?t.split(/[,/]/).map(e=>e.trim()).filter(Boolean):[]}function nt(t=""){return String(t).replace(/[,/]/g," ")}function at(t="",e=144){const s=window.innerWidth,n=s<768?60:s<1440?160:e,a=String(t);return a.length>n?a.slice(0,n)+"…":a}function x(t=""){return String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const r={modal:document.getElementById("artistModal"),modalClose:document.getElementById("modalClose"),modalContentWrapper:document.querySelector(".modal__content"),modalContent:document.getElementById("modal-content"),loader:document.getElementById("globalLoader"),artists:document.querySelector(".artists-section")};let p=0;c.defaults.baseURL="https://sound-wave.b.goit.study/api";c.defaults.timeout=1e4;function O(){p++,r.loader&&p===1&&r.loader.classList.add("active")}function b(){p=Math.max(0,p-1),r.loader&&p===0&&r.loader.classList.remove("active")}function D(t,e="Error"){U.error({title:e,message:t,position:"topRight",timeout:7e3,backgroundColor:"orange"})}c.interceptors.request.use(t=>(O(),t),t=>(b(),D("Request error"),Promise.reject(t)));c.interceptors.response.use(t=>(b(),t),t=>{b();const e=t.response?`Error ${t.response.status}: ${t.response.statusText}`:"Network error, please check your connection";return D(e),Promise.reject(t)});async function ot(t){return(await c.get(`/artists/${t}`)).data}async function rt(t){return(await c.get(`/artists/${t}/albums`)).data}function it(t){if(!t)return"0:00";let e=Math.floor(t/1e3),s=Math.floor(e/3600),n=Math.floor(e%3600/60),a=e%60;return s>0?s+":"+(n<10?"0"+n:n)+":"+(a<10?"0"+a:a):n+":"+(a<10?"0"+a:a)}function lt(t,e){return t&&e?`${t}–${e}`:t?`${t}–present`:"Information missing"}function B(t="No Image",e=150,s=150){const n=Y({width:e,height:s,text:t,fontSize:14,fontFamily:'"IBM Plex Sans", sans-serif',textColor:"#aaa"});return`data:image/svg+xml;base64,${btoa(n)}`}function ct(t,e){const{strArtist:s,strArtistThumb:n,intFormedYear:a,intDiedYear:o,strGender:i,intMembers:l,strCountry:d,strBiographyEN:y,genres:E}=t,f=y||"",$=f.indexOf(".",250),M=$!==-1?f.slice(0,$+1):f.slice(0,250);let v=!1;const{albumsList:L}=e,j=lt(a,o),N=([...E],`
  <ul id="genres-list">${E.map(w=>`<li class="genre">
          <p class="genre-text">${w}</p>
        </li>`).join("")}</ul>
  `),W=n||B("No Image");let A="";L&&L.length&&(A=`
      <h3 id="albums-title">Albums</h3>
      <ul id="albums-list">
        ${L.map(w=>dt(w)).join("")}
      </ul>
    `);const F=`
  <h1 id="artist-name">${s}</h1>
  <div id="modal-top-wrapper">
    <div id="modal-artist-photo">
      <img id="artist-photo" src="${W}" alt="${s}" onerror="onerror=null;src='${B()}'"/>
    </div>
    <div id="artist-intro-wrapper">
      <div class="intro-box">
        <h4 class="artist-details-heading">Years active</h4>
        <p class="artist-details-info">${j}</p>
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
        <p class="artist-details-info">${M}</p>
        <button type="button" id="bio-load-more">
          <i class="bx bx-caret-down bx-tada-hover" style="color:#fff; background-color:transparent"></i>
        </button>
      </div>
      ${N}
    </div>
  </div>
  ${A}
`;r.modalContent.insertAdjacentHTML("afterbegin",F);const C=document.querySelector("#bio-data > .artist-details-info"),S=document.querySelector("#bio-load-more > .bx");document.querySelector("#bio-load-more").addEventListener("click",()=>{v=!v,v?(C.textContent=f,S.classList.replace("bx-caret-down","bx-caret-up")):(C.textContent=M,S.classList.replace("bx-caret-up","bx-caret-down"))})}function dt(t){const{tracks:e,strAlbum:s}=t;let n="";return e&&e.length&&(n=`
          <div id="track-list-headers">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </div>
          <ul>
          ${e.map(({strTrack:a,intDuration:o,movie:i})=>`
            <li class="song">
              <span class="track-name">${a}</span>
              <span class="track-duration">${it(o)||"N/A"}</span>
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
      ${n}
    </li>
  `}async function ut(t="65ada69eaf9f6d155db48612"){r.modal.classList.add("active"),document.body.classList.add("modal-open"),r.modalContent.innerHTML='<div class="modal-loading">Loading artist details...</div>',O();try{const[e,s]=await Promise.all([ot(t),rt(t)]);r.modalContent.innerHTML="",ct(e,s)}catch(e){r.modalContent.innerHTML=`<div class="modal-error">Failed to load artist details due to ${e}.</div>`}finally{b(),r.modalContentWrapper.scrollHeight>r.modalContentWrapper.offsetHeight&&(r.modalContentWrapper.style.overflowY="scroll",r.modalContentWrapper.style.overflowX="hidden")}}function pt(t){let e="";if(t.target.nodeName==="BUTTON"&&t.target.classList.contains("artists-learn-more-card-btn"))e=t.target.getAttribute("data-artist-id")||"",ut(e),r.modalClose.addEventListener("click",m),r.modal.addEventListener("click",s=>{s.target===r.modal&&m()});else return}function mt(){r.modalClose.removeEventListener("click",m),r.modal.removeEventListener("click",t=>{t.target===r.modal&&m()})}function m(){r.modal.classList.remove("active"),document.body.classList.remove("modal-open"),mt(),setTimeout(()=>{r.modalContent.innerHTML=""},300)}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".logo, .logo-mobile").forEach(l=>{l.addEventListener("click",d=>{d.preventDefault(),window.location.reload()})});const e=document.getElementById("open-menu"),s=document.getElementById("close-menu"),n=document.getElementById("mobile-menu"),a=n?.querySelectorAll(".nav-list-mobile a")||[];if(!e||!s||!n)return;const o=()=>{n.classList.add("open"),n.classList.remove("hidden"),document.body.style.overflow="hidden",e.setAttribute("aria-expanded","true")},i=()=>{n.classList.remove("open"),setTimeout(()=>n.classList.add("hidden"),300),document.body.style.overflow="",e.setAttribute("aria-expanded","false"),e.focus()};e.addEventListener("click",o),s.addEventListener("click",i),a.forEach(l=>l.addEventListener("click",i)),document.addEventListener("click",l=>{n.classList.contains("open")&&!n.contains(l.target)&&l.target!==e&&i()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&n.classList.contains("open")&&i()}),r.artists&&r.artists.addEventListener("click",pt),window.addEventListener("hashchange",()=>{n.classList.contains("open")&&i()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&n.classList.contains("open")&&i()})});document.addEventListener("keydown",t=>{t.key==="Escape"&&r.modal.classList.contains("active")&&m()});
//# sourceMappingURL=index.js.map
