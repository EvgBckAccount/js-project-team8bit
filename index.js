import{a as c,S as R,i as U,s as Y}from"./assets/vendor-BeE4JKq3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))a(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function s(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(n){if(n.ep)return;n.ep=!0;const o=s(n);fetch(n.href,o)}})();const _="https://sound-wave.b.goit.study/api";c.defaults.baseURL=_;async function z(t=10,e=1){try{return(await c.get("/feedbacks",{params:{limit:t,page:e}})).data}catch(s){throw console.error("Error fetching feedback list:",s.message,s.response?.status),s}}let p;const G=document.querySelector(".swiper-wrapper"),E=document.querySelector(".feedback-pagination");async function K(){try{(await z(10,1)).data.forEach(({rating:s,descr:a,name:n})=>{const o=X({rating:s,text:a,user:n});G.appendChild(o)}),Q()}catch(t){console.error("Oops...Error",t.message)}}function X({rating:t,text:e,user:s}){const a=document.createElement("div");a.classList.add("swiper-slide");const n=Math.round(t);return a.innerHTML=`
    <div class="feedback-card">
      <div class="feedback-stars">${J(n)}</div>
      <p class="feedback-text">"${e}"</p>
      <p class="feedback-user">${s}</p>
    </div>
  `,a}function J(t){let s="";for(let a=1;a<=5;a++){const n=a<=t?"star-filled":"star-outline";s+=`
     <svg class="star-icon ${n}" width="24" height="24">
        <use href="icons/symbol-defs.svg#${a<=t?"icon-star-filled":"icon-star-outline"}"></use>
      </svg>
    `}return s}function Q(){p=new R(".feedback-swiper",{loop:!1,navigation:{nextEl:".feedback-button-next",prevEl:".feedback-button-prev"},grabCursor:!0,on:{slideChange:V}}),I(),Z()}function I(){E.innerHTML="";const t=p.slides.length,e=p.activeIndex;t!==0&&p.slides.forEach((s,a)=>{const n=document.createElement("span");n.classList.add("swiper-pagination-bullet"),n.setAttribute("data-slide-index",a),e===a&&n.classList.add("swiper-pagination-bullet-active"),E.appendChild(n)})}function V(){I()}function Z(){E.addEventListener("click",t=>{const e=t.target.closest(".swiper-pagination-bullet");if(!e)return;const s=parseInt(e.getAttribute("data-slide-index"),10);p.slideTo(s)})}K();c.defaults.baseURL="https://sound-wave.b.goit.study/api";const h=8;let T=1;window.addEventListener("DOMContentLoaded",tt);function u(t){return document.querySelector(t)}async function tt(){const t=u(".artists-list"),e=u(".artists-load-more-btn"),s=u(".loader");if(!t||!e){console.error("[artists] .artists-list або .artists-load-more-btn не знайдено у DOM");return}await et(1),e.addEventListener("click",a);async function a(){n(!0),e.style.display="none",T+=1;const o=await H(T,h);t.insertAdjacentHTML("beforeend",P(o)),q(e,o.length),n(!1),e.style.display!=="none"&&(e.style.display="flex")}function n(o){s?.classList.toggle("visually-hidden",!o)}}async function et(t){const e=u(".artists-list"),s=u(".artists-load-more-btn"),a=u(".loader");a?.classList.remove("visually-hidden");const n=await H(t,h);e.innerHTML=P(n),q(s,n.length),a?.classList.add("visually-hidden")}async function H(t=1,e=h){try{const{data:s}=await c.get("/artists",{params:{page:t,limit:e},headers:{Accept:"application/json"}});return Array.isArray(s)?s:Array.isArray(s?.artists)?s.artists:Array.isArray(s?.results)?s.results:s?.items??[]}catch(s){return console.error("[artists] fetchArtists error:",s),[]}}function q(t,e){t.style.display=e<h?"none":"flex"}function P(t=[]){return t.map(({_id:e,genres:s,strArtist:a,strArtistThumb:n,strBiographyEN:o})=>{const i=n||"./img/placeholders/artist@1x.jpg",l=a||"Unknown",d=st(s).map(y=>`<li class="artists-genres-item">${x(nt(y))}</li>`).join("");return`
<li class="artists-card-item">
  <img class="artists-image" src="${i}" alt="${x(l)}" loading="lazy" />
  <ul class="artists-genres-list">${d}</ul>
  <p class="artists-name">${x(l)}</p>
  <p class="artists-information">${at(o||"",144)}</p>
  <button class="artists-learn-more-card-btn open-artist-modal" data-artist-id="${e}">
    Learn More
    <i class='bx  bx-caret-right bx-fade-right'  style='color:#fff'></i>
  </button>
</li>`}).join("")}function st(t){return Array.isArray(t)?t:typeof t=="string"?t.split(/[,/]/).map(e=>e.trim()).filter(Boolean):[]}function nt(t=""){return String(t).replace(/[,/]/g," ")}function at(t="",e=144){const s=window.innerWidth,a=s<768?60:s<1440?160:e,n=String(t);return n.length>a?n.slice(0,a)+"…":n}function x(t=""){return String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const r={modal:document.getElementById("artistModal"),modalClose:document.getElementById("modalClose"),modalContentWrapper:document.querySelector(".modal__content"),modalContent:document.getElementById("modal-content"),loader:document.getElementById("globalLoader"),artists:document.querySelector(".artists-section")};let m=0;c.defaults.baseURL="https://sound-wave.b.goit.study/api";c.defaults.timeout=1e4;function O(){m++,r.loader&&m===1&&r.loader.classList.add("active")}function b(){m=Math.max(0,m-1),r.loader&&m===0&&r.loader.classList.remove("active")}function j(t,e="Error"){U.error({title:e,message:t,position:"topRight",timeout:7e3,backgroundColor:"orange"})}c.interceptors.request.use(t=>(O(),t),t=>(b(),j("Request error"),Promise.reject(t)));c.interceptors.response.use(t=>(b(),t),t=>{b();const e=t.response?`Error ${t.response.status}: ${t.response.statusText}`:"Network error, please check your connection";return j(e),Promise.reject(t)});async function ot(t){return(await c.get(`/artists/${t}`)).data}async function rt(t){return(await c.get(`/artists/${t}/albums`)).data}function it(t){if(!t)return"0:00";let e=Math.floor(t/1e3),s=Math.floor(e/3600),a=Math.floor(e%3600/60),n=e%60;return s>0?s+":"+(a<10?"0"+a:a)+":"+(n<10?"0"+n:n):a+":"+(n<10?"0"+n:n)}function lt(t,e){return t&&e?`${t}–${e}`:t?`${t}–present`:"Information missing"}function B(t="No Image",e=150,s=150){const a=Y({width:e,height:s,text:t,fontSize:14,fontFamily:'"IBM Plex Sans", sans-serif',textColor:"#aaa"});return`data:image/svg+xml;base64,${btoa(a)}`}function ct(t,e){const{strArtist:s,strArtistThumb:a,intFormedYear:n,intDiedYear:o,strGender:i,intMembers:l,strCountry:d,strBiographyEN:y,genres:k}=t,g=y||"",$=g.indexOf(".",250),M=$!==-1?g.slice(0,$+1):g.slice(0,250);let v=!1;const{albumsList:L}=e,D=lt(n,o),N=([...k],`
  <ul id="genres-list">${k.map(w=>`<li class="genre">
          <p class="genre-text">${w}</p>
        </li>`).join("")}</ul>
  `),W=a||B("No Image");let A="";L&&L.length&&(A=`
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
        <p class="artist-details-info">${D}</p>
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
`;r.modalContent.insertAdjacentHTML("afterbegin",F);const C=document.querySelector("#bio-data > .artist-details-info"),S=document.querySelector("#bio-load-more > .bx");document.querySelector("#bio-load-more").addEventListener("click",()=>{v=!v,v?(C.textContent=g,S.classList.replace("bx-caret-down","bx-caret-up")):(C.textContent=M,S.classList.replace("bx-caret-up","bx-caret-down"))})}function dt(t){const{tracks:e,strAlbum:s}=t;let a="";return e&&e.length&&(a=`
          <div id="track-list-headers">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </div>
          <ul>
          ${e.map(({strTrack:n,intDuration:o,movie:i})=>`
            <li class="song">
              <span class="track-name">${n}</span>
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
      ${a}
    </li>
  `}async function ut(t="65ada69eaf9f6d155db48612"){r.modal.classList.add("active"),document.body.classList.add("modal-open"),r.modalContent.innerHTML='<div class="modal-loading">Loading artist details...</div>',O();try{const[e,s]=await Promise.all([ot(t),rt(t)]);r.modalContent.innerHTML="",ct(e,s)}catch(e){r.modalContent.innerHTML=`<div class="modal-error">Failed to load artist details due to ${e}.</div>`}finally{b(),r.modalContentWrapper.scrollHeight>r.modalContentWrapper.offsetHeight&&(r.modalContentWrapper.style.overflowY="scroll",r.modalContentWrapper.style.overflowX="hidden")}}function pt(t){let e="";if(t.target.nodeName==="BUTTON"&&t.target.classList.contains("artists-learn-more-card-btn"))e=t.target.getAttribute("data-artist-id")||"",ut(e),r.modalClose.addEventListener("click",f),r.modal.addEventListener("click",s=>{s.target===r.modal&&f()});else return}function mt(){r.modalClose.removeEventListener("click",f),r.modal.removeEventListener("click",t=>{t.target===r.modal&&f()})}function f(){r.modal.classList.remove("active"),document.body.classList.remove("modal-open"),mt(),setTimeout(()=>{r.modalContent.innerHTML=""},300)}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".logo, .logo-mobile").forEach(l=>{l.addEventListener("click",d=>{d.preventDefault(),window.location.reload()})}),window.addEventListener("scroll",()=>{const l=document.querySelector(".header");window.scrollY>50?l.classList.add("scrolled"):l.classList.remove("scrolled")});const e=document.getElementById("open-menu"),s=document.getElementById("close-menu"),a=document.getElementById("mobile-menu"),n=a?.querySelectorAll(".nav-list-mobile a")||[];if(!e||!s||!a)return;const o=()=>{a.classList.add("open"),a.classList.remove("hidden"),document.body.style.overflow="hidden",e.setAttribute("aria-expanded","true")},i=()=>{a.classList.remove("open"),setTimeout(()=>a.classList.add("hidden"),300),document.body.style.overflow="",e.setAttribute("aria-expanded","false"),e.focus()};e.addEventListener("click",o),s.addEventListener("click",i),n.forEach(l=>l.addEventListener("click",i)),document.addEventListener("click",l=>{a.classList.contains("open")&&!a.contains(l.target)&&l.target!==e&&i()}),document.addEventListener("keydown",l=>{l.key==="Escape"&&a.classList.contains("open")&&i()}),r.artists&&r.artists.addEventListener("click",pt),window.addEventListener("hashchange",()=>{a.classList.contains("open")&&i()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&a.classList.contains("open")&&i()})});document.addEventListener("keydown",t=>{t.key==="Escape"&&r.modal.classList.contains("active")&&f()});
//# sourceMappingURL=index.js.map
