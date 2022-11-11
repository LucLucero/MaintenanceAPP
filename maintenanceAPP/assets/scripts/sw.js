//Abrindo e configurando o CACHE
export default networkFirst;

const requestURL = 'http://127.0.0.1:5500/maintenanceAPP/index.html' ;
const CACHE_KEY = 'app-main-v1';
networkFirst(requestURL);


const assetsToCache = [

    "./assets/images/book-svgrepo-com.svg",
    "./assets/images/engrenagem.svg",
    "./assets/images/gear.svg",
    "./assets/images/sylvamo-logo-5.png",
    "./assets/scripts/app.js",
    "./assets/scripts/cache.js",
    "./assets/scripts/events-query.js",
    "./assets/style/events-page.css",
    "./assets/style/geareffect.css",
    "./assets/style/home-page-style.css",
    "./events-page/events-page.html",
    "./register-page/register-page.html",
    "./",
    "./index.html",
 
];



async function cacheStaticAssets() {

    const cache = await caches.open(CACHE_KEY);      
    const assets = cache.addAll(assetsToCache);    
    return assets;

}

async function networkFirst(request) {

    try {
        
        console.log(request);
        // cacheStaticAssets();
        return await fetch (request);


    } catch (error) {

        console.log('Error');        
        return cache.match('index.html');

    }
}


self.addEventListener('install', event =>{
    
    console.log('[Service Worker] Installing service worker...');
    event.waitUntil(cacheStaticAssets());
    self.skipWaiting();

});

self.addEventListener('activate', event =>{


    console.log('[Service Worker] Activating service worker..., please wait!!');
    return self.clients.claim();

});

self.addEventListener("fetch", (event) => {

    console.log('[Service Worker] Fetch event worker', event.request.url);
    event.respondWith(event.request);


});