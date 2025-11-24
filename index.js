import{a as d,S as f,i as a}from"./assets/vendor-Cq7ZUixy.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))n(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const p="53393377-61327aeaa606bd712bd3f0283",m="https://pixabay.com/api/";function h(s){return d.get(m,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(o=>o.data)}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");let y=new f(".gallery a",{captionsData:"alt",captionDelay:250,navText:["←","→"],closeText:"×"});function g(s){const o=s.map(e=>`<li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img
        class="gallery-image"
        src="${e.webformatURL}"
        alt="${e.tags}"
      />
    </a>
    <div class="info">
       <p><b>Likes</b> ${e.likes}</p>
       <p><b>Views</b> ${e.views}</p>
       <p><b>Comments</b> ${e.comments}</p>
       <p><b>Downloads</b> ${e.downloads}</p>
    </div>
  </li>`).join("");c.insertAdjacentHTML("beforeend",o),y.refresh()}function b(){c.innerHTML=""}function L(){u.classList.remove("hidden")}function l(){u.classList.add("hidden")}const q=document.querySelector(".form");document.querySelector(".gallery");q.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(o===" "){a.error({message:"Type something into the search",position:"topRight"});return}b(),L(),h(o).then(e=>{e.hits.length==0?a.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):e.hits.length>0&&g(e.hits)}).catch(e=>{a.error({message:`Error: ${e}`,position:"topRight"}),l()}).finally(()=>l()),s.target.reset()});
//# sourceMappingURL=index.js.map
