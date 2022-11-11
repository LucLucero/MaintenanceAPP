//Abrindo e configurando o CACHE

const CACHE_KEY = 'app-main-v1';

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
    "./register-page/register.html",
    "./index.html",
 
];



async function cacheStaticAssets() {

    const cache = await caches.open(CACHE_KEY);
    return cache.addAll(assetsToCache);

}

async function networkFirst(request) {

    try {

        return await fetch (request);

    } catch (error) {
        
        console.log('Error');
        const cache = await caches.open(CACHE_KEY);
        return cache.match('index.html'); // adicionar na pasta offline

    }


}

