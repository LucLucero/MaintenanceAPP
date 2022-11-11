//Abrindo e configurando o CACHE

const CACHE_KEY = 'app-main-v1';

const assetsToCache = [];



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
        return cache.match(''); // adicionar na pasta offline

    }


}

