//Abrindo e configurando o CACHE

// const requestURL = 'http://127.0.0.1:5500/maintenanceAPP/index.html' ;
const CACHE_KEY = 'app-main-v1';
const assetsToCache = [

    "/assets/images/book-svgrepo-com.svg",
    "/assets/images/engrenagem.svg",
    "/assets/images/gear.svg",
    "/assets/images/sylvamo-logo-5.png",
    "/assets/images/sylvamo-logo.svg",
    "/assets/scripts/app.js",
    "/assets/scripts/events-query.js",
    "/assets/style/events-page.css",    
    "/assets/style/geareffect.css",
    "/assets/style/home-page-style.css",
    "/events-page/events-page.html",
    "/register-page/register-page.html",
    "/index.html",
    "/sw.js", 
    "/",
 
];
async function cacheStaticAssets() {

    const cache = await caches.open(CACHE_KEY);    
    console.log('estou em cacheStatic'); 
    return cache.addAll(assetsToCache);    
    

}

async function networkFirst(request) {           
        try{
            return await fetch (request);
        } catch {
            console.log("[Service Worker] network error");
            return fetchFromCache(request);
        }        
}

// async function cachedFirst(request){
//   try {
    


//   } catch (error) {
    

//   }



// }

async function fetchFromCache(request){

  const cache = await caches.open(CACHE_KEY);
  const cachedResponse = await cache.match(request);
  return cachedResponse || null;
}




self.addEventListener("install", (event) => {
    console.log("[Service Worker] Installing service worker");
    event.waitUntil(cacheStaticAssets());
    self.skipWaiting();
    
  });
  
  self.addEventListener("activate", () => {
    console.log("[Service Worker] Activating service worker!");
    return self.clients.claim();
  });
  
  self.addEventListener("fetch", (event) => {
    console.log("[Service Worker] Fetch event worker!", event.request.url);
    event.respondWith(networkFirst(event.request));
  });
  
