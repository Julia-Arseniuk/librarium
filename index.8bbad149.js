let t,e;function a(t,e,a,n){Object.defineProperty(t,e,{get:a,set:n,enumerable:!0,configurable:!0})}function n(t){return t&&t.__esModule?t.default:t}var i="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},r={},s=i.parcelRequireabfc;null==s&&((s=function(t){if(t in o)return o[t].exports;if(t in r){var e=r[t];delete r[t];var a={id:t,exports:{}};return o[t]=a,e.call(a.exports,a,a.exports),a.exports}var n=Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(t,e){r[t]=e},i.parcelRequireabfc=s),s.register("27Lyk",function(t,e){a(t.exports,"register",()=>n,t=>n=t),a(t.exports,"resolve",()=>i,t=>i=t);var n,i,o={};n=function(t){for(var e=Object.keys(t),a=0;a<e.length;a++)o[e[a]]=t[e[a]]},i=function(t){var e=o[t];if(null==e)throw Error("Could not resolve bundle with id "+t);return e}}),s("27Lyk").register(JSON.parse('{"g3LtT":"index.8bbad149.js","jaSBS":"no-image-found.9e3cfd72.png"}'));var l={};function d(t,e,a=[],n=[],i=[]){let{id:o,accessInfo:r,saleInfo:s,volumeInfo:l}=t,d=!!a.find(t=>t.id===o),c=!!n.find(t=>t.id===o),u=!!i.find(t=>t.id===o),m=l.imageLinks?l.imageLinks.thumbnail:e,b="";l.industryIdentifiers&&l.industryIdentifiers.forEach(t=>{b+=t.type+": "+t.identifier+"<br>"});let f=l.title??"немає заголовку",p=l.authors?l.authors.join(", "):"невідомий автор",g=l.publishedDate?l.publishedDate.substr(0,4):"невідома дата",v=l.categories?l.categories.join(", "):"невідома категорія",h="BOOK"===l.printType?"Книга":"Журнал",y=l.description?l.description+"...":"немає опису",w="";"PARTIAL"===r.viewability&&(w="Перегляд фрагменту"),"ALL_PAGES"===r.viewability&&(w="Читати онлайн");let k=[];r.epub.isAvailable&&k.push("epub"),r.pdf.isAvailable&&k.push("pdf"),"NONE"===r.accessViewStatus&&k.push("недоступна для перегляду");let E="",S="";"NONE"===r.accessViewStatus?S=" hidden":E=r.webReaderLink;let P=s.isEbook?'<span class="material-symbols-outlined">book_2</span><p>Електронна книга</p>':'<span class="material-symbols-outlined" style="color: lightgray">disabled_by_default</span><p style="color: lightgray">Електронна книга</p>',$="";switch(s.saleability){case"FOR_SALE":$="<b>Ціна:</b> "+s.listPrice.amount+s.listPrice.currencyCode;break;case"NOT_FOR_SALE":$="Немає у продажу";break;case"FREE":$="Безкоштовно"}let x="NOT_FOR_SALE"===s.saleability||"FREE"===s.saleability?" hidden":"",O="FREE"===s.saleability?"":" hidden",L=s.buyLink??"";return{temlate:`<div class="modal-header">
    <h1 class="modal-title fs-5" id="AdvancedSearchModalLabel">${f}</h1>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
    <div class="single modal-body">
      <div class="container-fluid">
          <div class="row">
              <div class="col-sm-12 col-md-4 d-flex flex-column">
                  <div class="single-img">
                    <img src="${m}" alt="${f}" class="single-img"/>
                  </div>
                  <div class="ebook">${P}</div>
                  <div class="buy">
                    <p class="mt-3">${$}</p>
                    <a href="${L}" type="button" class="mt-3 mb-3 btn btn-primary buy-btn${x}" target="_blank">Придбати</a>
                    <a href="${r.pdf.downloadLink}" class="material-symbols-outlined${O}">download</a>
                  </div>
              </div>
              <div class="single col-sm-12 col-md-8">
                <table>
                  <tr>
                      <td>Автор/-и:</td>
                      <td>${p}</td>
                  </tr>
                  <tr>
                      <td>Видавництво:</td>
                      <td>${l.publisher} | ${g}</td>
                  </tr>
                  <tr>
                      <td>ISBN:</td>
                      <td>${b}</td>
                  </tr>
                  <tr>
                      <td>Кількість сторінок:</td>
                      <td>${l.pageCount}</td>
                  </tr>
                  <tr>
                      <td>Категорія:</td>
                      <td>${v}</td>
                  </tr>
                  <tr>
                      <td>Тип друку:</td>
                      <td>${h}</td>
                  </tr>
                  <tr>
                      <td>Формат завантаження: </td>
                      <td>${k.join("<br>")}</td>
                  </tr>
                  <tr>
                      <td>Мова:</td>
                      <td>${l.language}</td>
                  </tr>
                  <tr>
                      <td colspan="2"><strong>Опис: </strong>${y}</td>
                  </tr>
              </table>
            </div>
          </div>
      </div>
    <div class="modal-footer">
    <div class="row">
        <div class="col-md-8 ms-auto">
            <div class="footer-buttons">
                <a href="${E}" type="button" class="btn btn-primary params ${S}" target="_blank">${w}</a>
                <div class="dropdown">
                <div>
                    <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    ${d||c||u?"В бібліотеці":"Додати в бібліотеку"}
                    </button>
                    <ul class="dropdown-menu">
                        <li><button class="dropdown-item" type="button" data-action="add-to-queue"${c||u?" disabled":""}>${d?"Видалити":"Хочу прочитати"}</button></li>
                        <li><button class="dropdown-item" type="button" data-action="add-to-reading"${d||u?" disabled":""}>${c?"Видалити":"Читаю"}</button></li>
                        <li><button class="dropdown-item" type="button" data-action="add-to-finished"${d||c?" disabled":""}>${u?"Видалити":"Прочитано"}</button></li>
                    </ul>
                </div>
            </div>
            </div>
        </div>
    </div>
  </div>`,info:{id:o,img:m,title:f,author:p,date:g,description:y}}}function c(t,e,a,n,i){let o="";o=`<button type="button" class="pagination-btn first btn btn-light     material-symbols-outlined" data-dir="first"${n<=i?" disabled":""}>keyboard_double_arrow_left</button>
        
        <button type="button" class="pagination-btn prev btn btn-light material-symbols-outlined" data-dir="prev"${1==n?" disabled":""}>chevron_left</button>`;for(let t=e;t<=a;t++)o+=`
        <button type="button" class="pagination-btn page-btn btn btn-light${n==t?" active":""}" data-page="${t}">${t}</button>`;o+=`
        <button type="button" class="pagination-btn next btn btn-light material-symbols-outlined" data-dir="next"${n==n?" disabled":""}>chevron_right</button>
    
        <button type="button" class="pagination-btn btn last btn-light material-symbols-outlined" data-dir="last"${n>n-i?" disabled":""}>double_arrow</button>`,t.innerHTML=o}l=function(){var t="undefined"!=typeof window?window:void 0!==i?i:"undefined"!=typeof self?self:{},e="Expected a function",a=NaN,n=/^\s+|\s+$/g,o=/^[-+]0x[0-9a-f]+$/i,r=/^0b[01]+$/i,s=/^0o[0-7]+$/i,l=parseInt,d="object"==typeof t&&t&&t.Object===Object&&t,c="object"==typeof self&&self&&self.Object===Object&&self,u=d||c||Function("return this")(),m=Object.prototype.toString,b=Math.max,f=Math.min,p=function(){return u.Date.now()};function g(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function v(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==m.call(e))return a;if(g(t)){var e,i="function"==typeof t.valueOf?t.valueOf():t;t=g(i)?i+"":i}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(n,"");var d=r.test(t);return d||s.test(t)?l(t.slice(2),d?2:8):o.test(t)?a:+t}var h=function(t,a,n){var i=!0,o=!0;if("function"!=typeof t)throw TypeError(e);return g(n)&&(i="leading"in n?!!n.leading:i,o="trailing"in n?!!n.trailing:o),function(t,a,n){var i,o,r,s,l,d,c=0,u=!1,m=!1,h=!0;if("function"!=typeof t)throw TypeError(e);function y(e){var a=i,n=o;return i=o=void 0,c=e,s=t.apply(n,a)}function w(t){var e=t-d;return void 0===d||e>=a||e<0||m&&t-c>=r}function k(){var t,e=p();if(w(e))return E(e);l=setTimeout(k,(t=a-(e-d),m?f(t,r-(e-c)):t))}function E(t){return l=void 0,h&&i?y(t):(i=o=void 0,s)}function S(){var t,e=p(),n=w(e);if(i=arguments,o=this,d=e,n){if(void 0===l)return c=t=d,l=setTimeout(k,a),u?y(t):s;if(m)return l=setTimeout(k,a),y(d)}return void 0===l&&(l=setTimeout(k,a)),s}return a=v(a)||0,g(n)&&(u=!!n.leading,r=(m="maxWait"in n)?b(v(n.maxWait)||0,a):r,h="trailing"in n?!!n.trailing:h),S.cancel=function(){void 0!==l&&clearTimeout(l),c=0,i=d=o=l=void 0},S.flush=function(){return void 0===l?s:E(p())},S}(t,a,{leading:i,maxWait:a,trailing:o})},y=NaN,w=/^\s+|\s+$/g,k=/^[-+]0x[0-9a-f]+$/i,E=/^0b[01]+$/i,S=/^0o[0-7]+$/i,P=parseInt,$="object"==typeof t&&t&&t.Object===Object&&t,x="object"==typeof self&&self&&self.Object===Object&&self,O=$||x||Function("return this")(),L=Object.prototype.toString,N=Math.max,q=Math.min,j=function(){return O.Date.now()};function A(t){var e=typeof t;return!!t&&("object"==e||"function"==e)}function I(t){if("number"==typeof t)return t;if("symbol"==typeof(e=t)||e&&"object"==typeof e&&"[object Symbol]"==L.call(e))return y;if(A(t)){var e,a="function"==typeof t.valueOf?t.valueOf():t;t=A(a)?a+"":a}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(w,"");var n=E.test(t);return n||S.test(t)?P(t.slice(2),n?2:8):k.test(t)?y:+t}var _=function(t,e,a){var n,i,o,r,s,l,d=0,c=!1,u=!1,m=!0;if("function"!=typeof t)throw TypeError("Expected a function");function b(e){var a=n,o=i;return n=i=void 0,d=e,r=t.apply(o,a)}function f(t){var a=t-l;return void 0===l||a>=e||a<0||u&&t-d>=o}function p(){var t,a=j();if(f(a))return g(a);s=setTimeout(p,(t=e-(a-l),u?q(t,o-(a-d)):t))}function g(t){return s=void 0,m&&n?b(t):(n=i=void 0,r)}function v(){var t,a=j(),o=f(a);if(n=arguments,i=this,l=a,o){if(void 0===s)return d=t=l,s=setTimeout(p,e),c?b(t):r;if(u)return s=setTimeout(p,e),b(l)}return void 0===s&&(s=setTimeout(p,e)),r}return e=I(e)||0,A(a)&&(c=!!a.leading,o=(u="maxWait"in a)?N(I(a.maxWait)||0,e):o,m="trailing"in a?!!a.trailing:m),v.cancel=function(){void 0!==s&&clearTimeout(s),d=0,n=l=i=s=void 0},v.flush=function(){return void 0===s?r:g(j())},v},T=function(){};function C(t){t&&t.forEach(function(t){var e=Array.prototype.slice.call(t.addedNodes),a=Array.prototype.slice.call(t.removedNodes);if(function t(e){var a=void 0,n=void 0;for(a=0;a<e.length;a+=1)if((n=e[a]).dataset&&n.dataset.aos||n.children&&t(n.children))return!0;return!1}(e.concat(a)))return T()})}function M(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}var D={isSupported:function(){return!!M()},ready:function(t,e){var a=window.document,n=new(M())(C);T=e,n.observe(a.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}},H=function(t,e){if(!(t instanceof e))throw TypeError("Cannot call a class as a function")},R=function(){function t(t,e){for(var a=0;a<e.length;a++){var n=e[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}return function(e,a,n){return a&&t(e.prototype,a),n&&t(e,n),e}}(),z=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(t[n]=a[n])}return t},F=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,Y=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,K=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,U=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i;function B(){return navigator.userAgent||navigator.vendor||window.opera||""}var J=new(function(){function t(){H(this,t)}return R(t,[{key:"phone",value:function(){var t=B();return!(!F.test(t)&&!Y.test(t.substr(0,4)))}},{key:"mobile",value:function(){var t=B();return!(!K.test(t)&&!U.test(t.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}},{key:"ie11",value:function(){return"-ms-scroll-limit"in document.documentElement.style&&"-ms-ime-align"in document.documentElement.style}}]),t}()),Q=function(t,e){var a=void 0;return J.ie11()?(a=document.createEvent("CustomEvent")).initCustomEvent(t,!0,!0,{detail:e}):a=new CustomEvent(t,{detail:e}),document.dispatchEvent(a)},V=function(t){return t.forEach(function(t,e){var a,n,i,o,r,s;return a=window.pageYOffset,n=t.options,i=t.position,o=t.node,t.data,r=function(){var e;t.animated&&((e=n.animatedClassNames)&&e.forEach(function(t){return o.classList.remove(t)}),Q("aos:out",o),t.options.id&&Q("aos:in:"+t.options.id,o),t.animated=!1)},void(n.mirror&&a>=i.out&&!n.once?r():a>=i.in?t.animated||((s=n.animatedClassNames)&&s.forEach(function(t){return o.classList.add(t)}),Q("aos:in",o),t.options.id&&Q("aos:in:"+t.options.id,o),t.animated=!0):t.animated&&!n.once&&r())})},W=function(t){for(var e=0,a=0;t&&!isNaN(t.offsetLeft)&&!isNaN(t.offsetTop);)e+=t.offsetLeft-("BODY"!=t.tagName?t.scrollLeft:0),a+=t.offsetTop-("BODY"!=t.tagName?t.scrollTop:0),t=t.offsetParent;return{top:a,left:e}},G=function(t,e,a){var n=t.getAttribute("data-aos-"+e);if(void 0!==n){if("true"===n)return!0;if("false"===n)return!1}return n||a},X=function(){var t=document.querySelectorAll("[data-aos]");return Array.prototype.map.call(t,function(t){return{node:t}})},Z=[],tt=!1,te={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,mirror:!1,anchorPlacement:"top-bottom",startEvent:"DOMContentLoaded",animatedClassName:"aos-animate",initClassName:"aos-init",useClassNames:!1,disableMutationObserver:!1,throttleDelay:99,debounceDelay:50},ta=function(){return document.all&&!window.atob},tn=function(){var t,e;arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&(tt=!0),tt&&(t=Z,e=te,t.forEach(function(t,a){var n,i,o,r,s,l=G(t.node,"mirror",e.mirror),d=G(t.node,"once",e.once),c=G(t.node,"id"),u=e.useClassNames&&t.node.getAttribute("data-aos"),m=[e.animatedClassName].concat(u?u.split(" "):[]).filter(function(t){return"string"==typeof t});e.initClassName&&t.node.classList.add(e.initClassName),t.position={in:function(t,e,a){var n=window.innerHeight,i=G(t,"anchor"),o=G(t,"anchor-placement"),r=Number(G(t,"offset",o?0:e)),s=o||a,l=t;i&&document.querySelectorAll(i)&&(l=document.querySelectorAll(i)[0]);var d=W(l).top-n;switch(s){case"top-bottom":break;case"center-bottom":d+=l.offsetHeight/2;break;case"bottom-bottom":d+=l.offsetHeight;break;case"top-center":d+=n/2;break;case"center-center":d+=n/2+l.offsetHeight/2;break;case"bottom-center":d+=n/2+l.offsetHeight;break;case"top-top":d+=n;break;case"bottom-top":d+=n+l.offsetHeight;break;case"center-top":d+=n+l.offsetHeight/2}return d+r}(t.node,e.offset,e.anchorPlacement),out:l&&(n=t.node,i=e.offset,window.innerHeight,o=G(n,"anchor"),r=G(n,"offset",i),s=n,o&&document.querySelectorAll(o)&&(s=document.querySelectorAll(o)[0]),W(s).top+s.offsetHeight-r)},t.options={once:d,mirror:l,animatedClassNames:m,id:c}}),V(Z=t),window.addEventListener("scroll",h(function(){V(Z,te.once)},te.throttleDelay)))},ti=function(){if(Z=X(),tr(te.disable)||ta())return to();tn()},to=function(){Z.forEach(function(t,e){t.node.removeAttribute("data-aos"),t.node.removeAttribute("data-aos-easing"),t.node.removeAttribute("data-aos-duration"),t.node.removeAttribute("data-aos-delay"),te.initClassName&&t.node.classList.remove(te.initClassName),te.animatedClassName&&t.node.classList.remove(te.animatedClassName)})},tr=function(t){return!0===t||"mobile"===t&&J.mobile()||"phone"===t&&J.phone()||"tablet"===t&&J.tablet()||"function"==typeof t&&!0===t()};return{init:function(t){return te=z(te,t),Z=X(),te.disableMutationObserver||D.isSupported()||(console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '),te.disableMutationObserver=!0),te.disableMutationObserver||D.ready("[data-aos]",ti),tr(te.disable)||ta()?to():(document.querySelector("body").setAttribute("data-aos-easing",te.easing),document.querySelector("body").setAttribute("data-aos-duration",te.duration),document.querySelector("body").setAttribute("data-aos-delay",te.delay),-1===["DOMContentLoaded","load"].indexOf(te.startEvent)?document.addEventListener(te.startEvent,function(){tn(!0)}):window.addEventListener("load",function(){tn(!0)}),"DOMContentLoaded"===te.startEvent&&["complete","interactive"].indexOf(document.readyState)>-1&&tn(!0),window.addEventListener("resize",_(tn,te.debounceDelay,!0)),window.addEventListener("orientationchange",_(tn,te.debounceDelay,!0)),Z)},refresh:tn,refreshHard:ti}}();var u={};u=new URL(s("27Lyk").resolve("jaSBS"),import.meta.url).toString(),n(l).init({startEvent:"scroll",duration:700});const m=document.querySelectorAll("form"),b=document.querySelector("header"),f=document.querySelector(".params-form"),p=document.querySelector(".params"),g=document.querySelector(".result"),v=document.querySelector(".pagination"),h=v.querySelector(".pagination-wrap"),y=v.querySelector(".more-btn"),w=window.innerWidth>=768?10:5;let k=JSON.parse(localStorage.getItem("QUEUE_KEY"))??[],E=JSON.parse(localStorage.getItem("READING_KEY"))??[],S=JSON.parse(localStorage.getItem("FINISHED_KEY"))??[];const P=new class{constructor(){this.baseUrl="https://www.googleapis.com/books/v1",this.apiKey="AIzaSyDji-FbnVwseMFcebB3YE0rY7T-A9Q92GQ",this.searchValue="",this.queryString="",this.url="",this.startIndex=0,this.itemsPerPage=10,this.totalPages=1,this.currentPage=1}getOnQuickSearch(t){return this.startIndex=0,this.currentPage=1,this.totalPages=1,this.searchValue=t.replaceAll(" ","+"),this.url=`${this.baseUrl}/volumes?fields=totalItems,items&q=${this.searchValue}&startIndex=${this.startIndex}&maxResults=${this.itemsPerPage}&key=${this.apiKey}`,this.sendRequest(this.url)}getOnAdvancedSearch(t){return this.startIndex=0,this.currentPage=1,this.totalPages=1,this.url=`${this.baseUrl}/volumes?fields=totalItems,items&q=${this.searchValue}${this.getParams(t)}&startIndex=${this.startIndex}&key=${this.apiKey}`,this.sendRequest(this.url)}getParams(t){this.queryString="";let e=new FormData(t),a=Object.fromEntries(e),n=Object.keys(a);return n.forEach(t=>{if(""!==a[t]){let e=a[t].split(" ");"intitle"===t||"inauthor"===t||"inpublisher"===t||"subject"===t||"isbn"===t?1==e.length?this.queryString+=`+${t}:${a[t]}`:e.length>1&&e.forEach(e=>this.queryString+=`+${t}:${e}`):this.queryString+=`&${t}=${a[t]}`}}),""!==a.maxResults&&(this.itemsPerPage=Number(a.maxResults)),this.queryString}getOnPaginationBtnClick(t){let e=this.url.replace("startIndex=0","startIndex="+t*this.itemsPerPage);return this.sendRequest(e)}checkResponse(t){if(!t.error)return t;{let e=Error("Code: "+t.error.code+"\nError message: "+t.error.message);throw e}}sendRequest(t){return fetch(t).then(t=>t.json()).then(t=>this.checkResponse(t)).then(t=>t)}};function $(t){if(t.totalItems>0){var e,a;let i;g.innerHTML=(e=t.items,a=n(u),i='<div class="row row-cols-1 row-cols-md-2 gap-3">',e.forEach(t=>{let{id:e,selfLink:n,volumeInfo:o}=t,r=o.imageLinks?o.imageLinks.thumbnail:a,s=o.title??"no title",l=o.authors?o.authors.join(", "):"unknown authors",d=o.publishedDate?o.publishedDate.substr(0,4):"unknown date",c=o.description?o.description.substr(0,120)+"...":"no dscription";i+=`<div class="item col row" data-id="${e}" data-self-link="${n}" data-isbn="${isbn}">
            <img src="${r}" alt="${s}" class="d-block item-img col-3"  data-bs-toggle="modal" data-bs-target="#singleModal">
                            <div class="info col-9">
                                <p class="title" data-bs-toggle="modal" data-bs-target="#singleModal">${s}</p>
                                <p class="author">${l}</p>
                                <p class="date">${d}</p>
                                <p class="describe">${c}</p>
                            </div>
                        </div>`}),i+="</div>")}else alert("Не знайдено. Спробуйте інші параметри")}function x(t,e,a){let n=a.findIndex(e=>e.id===t.id);a.some(e=>e.id===t.id)?a.splice(n,1):a.push(t),localStorage.setItem(e,JSON.stringify(a))}m.forEach(t=>{t.classList.contains("params-form")||t.addEventListener("submit",t=>{t.preventDefault(),t.target.classList.contains("main-form")&&(b.classList.remove("hidden"),g.classList.remove("hidden"),v.classList.remove("hidden")),P.getOnQuickSearch(t.target.querySelector(".main-search").value).then(t=>{$(t),window.scrollTo(0,window.innerHeight)}).then(()=>{y.hasAttribute("disabled")&&y.removeAttribute("disabled"),c(h,P.currentPage,P.currentPage,P.currentPage,w)}).catch(t=>{console.log(t),alert(t)}),t.target.querySelector(".main-search").value=""})}),p.addEventListener("click",function(){P.getOnAdvancedSearch(f).then(t=>{$(t)}).then(()=>{y.hasAttribute("disabled")&&y.removeAttribute("disabled"),c(h,P.currentPage,P.currentPage,P.currentPage,w)}).catch(t=>{console.log("Error: ",t.message),alert(t)})}),g.addEventListener("click",function(t){t.preventDefault(),(t.target.classList.contains("title")||t.target.classList.contains("item-img"))&&P.sendRequest(t.target.closest(".item").dataset.selfLink).then(t=>{(function(t){document.querySelector(".single-modal").innerHTML=d(t,n(u),k,E,S).temlate;let e=d(t,n(u)).info,a=document.querySelector('[data-action="add-to-queue"]'),i=document.querySelector('[data-action="add-to-reading"]'),o=document.querySelector('[data-action="add-to-finished"]');k=JSON.parse(localStorage.getItem("QUEUE_KEY"))??[],E=JSON.parse(localStorage.getItem("READING_KEY"))??[],S=JSON.parse(localStorage.getItem("FINISHED_KEY"))??[],a.addEventListener("click",a=>{x(e,"QUEUE_KEY",k),document.querySelector(".single-modal").innerHTML=d(t,n(u),k,E,S).temlate}),i.addEventListener("click",a=>{x(e,"READING_KEY",E),document.querySelector(".single-modal").innerHTML=d(t,n(u),k,E,S).temlate}),o.addEventListener("click",a=>{x(e,"FINISHED_KEY",S),document.querySelector(".single-modal").innerHTML=d(t,n(u),k,E,S).temlate})})(t)})}),y.addEventListener("click",function(a){P.currentPage=P.totalPages,P.getOnPaginationBtnClick(P.currentPage).then(n=>{n.items?(++P.currentPage,++P.totalPages,$(n),window.scrollTo(0,window.innerHeight),P.currentPage<=w?(t=1,e=P.currentPage):P.currentPage>w&&(t=P.currentPage-w+1,e=P.currentPage),c(h,t,e,P.currentPage,w)):(alert("No more items"),a.target.setAttribute("disabled","true"))})}),h.addEventListener("click",function(a){switch(!0){case a.target.classList.contains("page-btn"):P.currentPage=Number(a.target.dataset.page),console.log("api.currentPage=",P.currentPage);break;case"prev"===a.target.dataset.dir:--P.currentPage,P.currentPage<=w?(t=1,e=Math.min(P.totalPages,w)):P.currentPage<t&&P.currentPage-w+1>1&&(t=P.currentPage-w+1,e=P.currentPage);break;case"next"===a.target.dataset.dir:++P.currentPage,P.currentPage<=w?(t=1,e=Math.min(P.totalPages,w)):P.currentPage>e&&P.currentPage<=P.totalPages-w?(t=P.currentPage,e=P.currentPage+w-1):P.currentPage>=P.totalPages-(w-1)&&(t=P.totalPages-(w-1),e=P.totalPages);break;case"first"===a.target.dataset.dir:P.currentPage=1,t=1,e=w;break;case"last"===a.target.dataset.dir:P.currentPage=P.totalPages,t=P.totalPages-(w-1),e=P.totalPages}P.getOnPaginationBtnClick(P.currentPage-1).then(a=>{$(a),c(h,t,e,P.currentPage,w)})});
//# sourceMappingURL=index.8bbad149.js.map