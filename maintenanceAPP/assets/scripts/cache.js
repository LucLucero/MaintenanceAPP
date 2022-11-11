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
    console.log('oi');    
    const assets = cache.addAll(assetsToCache);    
    return assets;

}

async function networkFirst(request) {

    try {

        console.log('oi');
        console.log(request);
        cacheStaticAssets();
        return await fetch (request);


    } catch (error) {
        
        console.log('Error');        
        return cache.match('index.html');
    }
}


