import{a as m,S as F,i as U,s as Y}from"./assets/vendor-BeE4JKq3.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))s(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&s(l)}).observe(document,{childList:!0,subtree:!0});function a(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(n){if(n.ep)return;n.ep=!0;const o=a(n);fetch(n.href,o)}})();const _="https://sound-wave.b.goit.study/api";m.defaults.baseURL=_;async function z(t=10,e=1){try{return(await m.get("/feedbacks",{params:{limit:t,page:e}})).data}catch(a){throw console.error("Error fetching feedback list:",a.message,a.response?.status),a}}let v;const G=document.querySelector(".swiper-wrapper"),A=document.querySelector(".feedback-pagination");async function X(){try{(await z(10,1)).data.forEach(({rating:a,descr:s,name:n})=>{const o=K({rating:a,text:s,user:n});G.appendChild(o)}),J()}catch(t){console.error("Oops...Error",t.message)}}function K({rating:t,text:e,user:a}){const s=document.createElement("div");s.classList.add("swiper-slide");const n=Math.round(t);return s.innerHTML=`
    <div class="feedback-card">
      <div class="feedback-stars">${V(n)}</div>
      <p class="feedback-text">"${e}"</p>
      <p class="feedback-user">${a}</p>
    </div>
  `,s}function V(t){let a="";for(let s=1;s<=5;s++){const n=s<=t?"star-filled":"star-outline";a+=`
     <svg class="star-icon ${n}" width="24" height="24">
        <use href="icons/symbol-defs.svg#${s<=t?"icon-star-filled":"icon-star-outline"}"></use>
      </svg>
    `}return a}function J(){v=new F(".feedback-swiper",{loop:!1,navigation:{nextEl:".feedback-button-next",prevEl:".feedback-button-prev"},grabCursor:!0,on:{slideChange:Q}}),B(),Z()}function B(){A.innerHTML="";const t=v.slides.length,e=v.activeIndex;t!==0&&v.slides.forEach((a,s)=>{const n=document.createElement("span");n.classList.add("swiper-pagination-bullet"),n.setAttribute("data-slide-index",s),e===s&&n.classList.add("swiper-pagination-bullet-active"),A.appendChild(n)})}function Q(){B()}function Z(){A.addEventListener("click",t=>{const e=t.target.closest(".swiper-pagination-bullet");if(!e)return;const a=parseInt(e.getAttribute("data-slide-index"),10);v.slideTo(a)})}X();document.addEventListener("DOMContentLoaded",()=>{const t=document.querySelector(".hero-column-one"),e=document.querySelector(".hero-column-two");if(!t||!e)return;let s=[...Array.from(document.querySelectorAll(".hero-artist-card")).sort((d,p)=>parseInt(d.dataset.artistIndex)-parseInt(p.dataset.artistIndex))];const n=()=>{const d=new Map;s.forEach(c=>{d.set(c.dataset.artistIndex,c.getBoundingClientRect())}),s=s.slice(2).concat(s.slice(0,2)),t.replaceChildren(),e.replaceChildren(),s.forEach((c,f)=>{(f%2===0?t:e).appendChild(c)}),s.forEach(c=>{const f=c.getBoundingClientRect(),g=d.get(c.dataset.artistIndex);if(!g){c.style.transform="";return}const b=g.left-f.left,y=g.top-f.top;c.style.transition="none",c.style.transform=`translate(${b}px, ${y}px)`,c.offsetWidth,c.style.transition="transform 2s ease-in-out",c.style.transform="translate(0, 0)"})};let o;((d=1e3,p=4e3)=>{clearInterval(o),setTimeout(()=>{n(),o=setInterval(n,p)},d)})();const i=document.querySelector(".explore-btn"),u=document.getElementById("artist-section");i&&u&&i.addEventListener("click",d=>{d.preventDefault(),u.scrollIntoView({behavior:"smooth"})})});m.defaults.baseURL="https://sound-wave.b.goit.study/api";const E=8;let I=1;window.addEventListener("DOMContentLoaded",tt);function h(t){return document.querySelector(t)}async function tt(){const t=h(".artists-list"),e=h(".artists-load-more-btn"),a=h(".loader");if(!t||!e){console.error("[artists] .artists-list або .artists-load-more-btn не знайдено у DOM");return}await et(1),e.addEventListener("click",s);async function s(){n(!0),e.style.display="none",I+=1;const o=await q(I,E);t.insertAdjacentHTML("beforeend",P(o)),O(e,o.length),n(!1),e.style.display!=="none"&&(e.style.display="flex")}function n(o){a?.classList.toggle("visually-hidden",!o)}}async function et(t){const e=h(".artists-list"),a=h(".artists-load-more-btn"),s=h(".loader");s?.classList.remove("visually-hidden");const n=await q(t,E);e.innerHTML=P(n),O(a,n.length),s?.classList.add("visually-hidden")}async function q(t=1,e=E){try{const{data:a}=await m.get("/artists",{params:{page:t,limit:e},headers:{Accept:"application/json"}});return Array.isArray(a)?a:Array.isArray(a?.artists)?a.artists:Array.isArray(a?.results)?a.results:a?.items??[]}catch(a){return console.error("[artists] fetchArtists error:",a),[]}}function O(t,e){t.style.display=e<E?"none":"flex"}function P(t=[]){return t.map(({_id:e,genres:a,strArtist:s,strArtistThumb:n,strBiographyEN:o})=>{const l=n||"./img/placeholders/artist@1x.jpg",i=s||"Unknown",u=st(a).map(d=>`<li class="artists-genres-item">${C(nt(d))}</li>`).join("");return`
<li class="artists-card-item">
  <img class="artists-image" src="${l}" alt="${C(i)}" loading="lazy" />
  <ul class="artists-genres-list">${u}</ul>
  <p class="artists-name">${C(i)}</p>
  <p class="artists-information">${at(o||"",144)}</p>
  <button class="artists-learn-more-card-btn open-artist-modal" data-artist-id="${e}">
    Learn More
    <i class='bx  bx-caret-right bx-fade-right'  style='color:#fff'></i>
  </button>
</li>`}).join("")}function st(t){return Array.isArray(t)?t:typeof t=="string"?t.split(/[,/]/).map(e=>e.trim()).filter(Boolean):[]}function nt(t=""){return String(t).replace(/[,/]/g," ")}function at(t="",e=144){const a=window.innerWidth,s=a<768?60:a<1440?160:e,n=String(t);return n.length>s?n.slice(0,s)+"…":n}function C(t=""){return String(t).replace(/[&<>"']/g,e=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"})[e])}const r={modal:document.getElementById("artistModal"),modalClose:document.getElementById("modalClose"),modalContentWrapper:document.querySelector(".modal__content"),modalContent:document.getElementById("modal-content"),loader:document.getElementById("globalLoader"),artists:document.querySelector(".artists-section")};let L=0;m.defaults.baseURL="https://sound-wave.b.goit.study/api";m.defaults.timeout=1e4;function H(){L++,r.loader&&L===1&&r.loader.classList.add("active")}function x(){L=Math.max(0,L-1),r.loader&&L===0&&r.loader.classList.remove("active")}function D(t,e="Error"){U.error({title:e,message:t,position:"topRight",timeout:7e3,backgroundColor:"orange"})}m.interceptors.request.use(t=>(H(),t),t=>(x(),D("Request error"),Promise.reject(t)));m.interceptors.response.use(t=>(x(),t),t=>{x();const e=t.response?`Error ${t.response.status}: ${t.response.statusText}`:"Network error, please check your connection";return D(e),Promise.reject(t)});async function ot(t){return(await m.get(`/artists/${t}`)).data}async function rt(t){return(await m.get(`/artists/${t}/albums`)).data}function it(t){if(!t)return"0:00";let e=Math.floor(t/1e3),a=Math.floor(e/3600),s=Math.floor(e%3600/60),n=e%60;return a>0?a+":"+(s<10?"0"+s:s)+":"+(n<10?"0"+n:n):s+":"+(n<10?"0"+n:n)}function lt(t,e){return t&&e?`${t}–${e}`:t?`${t}–present`:"Information missing"}function T(t="No Image",e=150,a=150){const s=Y({width:e,height:a,text:t,fontSize:14,fontFamily:'"IBM Plex Sans", sans-serif',textColor:"#aaa"});return`data:image/svg+xml;base64,${btoa(s)}`}function ct(t,e){const{strArtist:a,strArtistThumb:s,intFormedYear:n,intDiedYear:o,strGender:l,intMembers:i,strCountry:u,strBiographyEN:d,genres:p}=t,c=d||"",f=c.indexOf(".",250),g=f!==-1?c.slice(0,f+1):c.slice(0,250);let b=!1;const{albumsList:y}=e,j=lt(n,o),N=([...p],`
  <ul id="genres-list">${p.map(k=>`<li class="genre">
          <p class="genre-text">${k}</p>
        </li>`).join("")}</ul>
  `),R=s||T("No Image");let $="";y&&y.length&&($=`
      <h3 id="albums-title">Albums</h3>
      <ul id="albums-list">
        ${y.map(k=>dt(k)).join("")}
      </ul>
    `);const W=`
  <h1 id="artist-name">${a}</h1>
  <div id="modal-top-wrapper">
    <div id="modal-artist-photo">
      <img id="artist-photo" src="${R}" alt="${a}" onerror="onerror=null;src='${T()}'"/>
    </div>
    <div id="artist-intro-wrapper">
      <div class="intro-box">
        <h4 class="artist-details-heading">Years active</h4>
        <p class="artist-details-info">${j}</p>
      </div>
      <div class="intro-box">
        <h4 class="artist-details-heading">Sex</h4>
        <p class="artist-details-info"> ${l||""}</p>
      </div>
      <div class="intro-box">
        <h4 class="artist-details-heading">Members</h4>
        <p class="artist-details-info"> ${i||""}</p>
      </div>
      <div class="intro-box">
        <h4 class="artist-details-heading">Country</h4>        <p class="artist-details-info"> ${u?u.slice(u.lastIndexOf(",")+2):""}</p>
      </div>
      <div id="bio-data">
        <h4 class="artist-details-heading">Biography</h4>
        <p class="artist-details-info">${g}</p>
        <button type="button" id="bio-load-more">
          <i class="bx bx-caret-down bx-tada-hover" style="color:#fff; background-color:transparent"></i>
        </button>
      </div>
      ${N}
    </div>
  </div>
  ${$}
`;r.modalContent.insertAdjacentHTML("afterbegin",W);const M=document.querySelector("#bio-data > .artist-details-info"),S=document.querySelector("#bio-load-more > .bx");document.querySelector("#bio-load-more").addEventListener("click",()=>{b=!b,b?(M.textContent=c,S.classList.replace("bx-caret-down","bx-caret-up")):(M.textContent=g,S.classList.replace("bx-caret-up","bx-caret-down"))})}function dt(t){const{tracks:e,strAlbum:a}=t;let s="";return e&&e.length&&(s=`
          <div id="track-list-headers">
            <span>Track</span>
            <span>Time</span>
            <span>Link</span>
          </div>
          <ul>
          ${e.map(({strTrack:n,intDuration:o,movie:l})=>`
            <li class="song">
              <span class="track-name">${n}</span>
              <span class="track-duration">${it(o)||"N/A"}</span>
              <span class="track-link">
                ${l?`<a href="${l}" target="_blank" rel="noopener noreferrer">
                      <i class="bx bxl-youtube bx-tada" style="color: #fff"></i>
                    </a>
                    `:"<span></span>"}
              </span>
            </li>`).join("")}
          </ul>
      `),`
    <li class="album">
      <h4 class="album-details-heading">${a}</h4>
      ${s}
    </li>
  `}async function ut(t="65ada69eaf9f6d155db48612"){r.modal.classList.add("active"),document.body.classList.add("modal-open"),r.modalContent.innerHTML='<div class="modal-loading">Loading artist details...</div>',H();try{const[e,a]=await Promise.all([ot(t),rt(t)]);r.modalContent.innerHTML="",ct(e,a)}catch(e){r.modalContent.innerHTML=`<div class="modal-error">Failed to load artist details due to ${e}.</div>`}finally{x(),r.modalContentWrapper.scrollHeight>r.modalContentWrapper.offsetHeight&&(r.modalContentWrapper.style.overflowY="scroll",r.modalContentWrapper.style.overflowX="hidden")}}function mt(t){let e="";if(t.target.nodeName==="BUTTON"&&t.target.classList.contains("artists-learn-more-card-btn"))e=t.target.getAttribute("data-artist-id")||"",ut(e),r.modalClose.addEventListener("click",w),r.modal.addEventListener("click",a=>{a.target===r.modal&&w()});else return}function pt(){r.modalClose.removeEventListener("click",w),r.modal.removeEventListener("click",t=>{t.target===r.modal&&w()})}function w(){r.modal.classList.remove("active"),document.body.classList.remove("modal-open"),pt(),setTimeout(()=>{r.modalContent.innerHTML=""},300)}document.addEventListener("DOMContentLoaded",()=>{document.querySelectorAll(".logo, .logo-mobile").forEach(i=>{i.addEventListener("click",u=>{u.preventDefault(),window.location.reload()})}),window.addEventListener("scroll",()=>{const i=document.querySelector(".header");window.scrollY>50?i.classList.add("scrolled"):i.classList.remove("scrolled")});const e=document.getElementById("open-menu"),a=document.getElementById("close-menu"),s=document.getElementById("mobile-menu"),n=s?.querySelectorAll(".nav-list-mobile a")||[];if(!e||!a||!s)return;const o=()=>{s.classList.add("open"),s.classList.remove("hidden"),document.body.style.overflow="hidden",e.setAttribute("aria-expanded","true")},l=()=>{s.classList.remove("open"),setTimeout(()=>s.classList.add("hidden"),300),document.body.style.overflow="",e.setAttribute("aria-expanded","false"),e.focus()};e.addEventListener("click",o),a.addEventListener("click",l),n.forEach(i=>i.addEventListener("click",l)),document.addEventListener("click",i=>{s.classList.contains("open")&&!s.contains(i.target)&&i.target!==e&&l()}),document.addEventListener("keydown",i=>{i.key==="Escape"&&s.classList.contains("open")&&l()}),r.artists&&r.artists.addEventListener("click",mt),window.addEventListener("hashchange",()=>{s.classList.contains("open")&&l()}),window.addEventListener("resize",()=>{window.innerWidth>=768&&s.classList.contains("open")&&l()})});document.addEventListener("keydown",t=>{t.key==="Escape"&&r.modal.classList.contains("active")&&w()});
//# sourceMappingURL=index.js.map
