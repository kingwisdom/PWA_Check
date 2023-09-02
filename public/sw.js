let cacheData = 'appV1'
this.addEventListener('install', (evt) => {
    evt.waitUntil(
        caches.open(cacheData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/index.html',
                '/users',
                '/about',
                '/'
            ])
        })
    )
})

this.addEventListener("fetch", (evt) => {
    if (!navigator.onLine) {
        evt.respondWith(
            caches.match(evt.request).then((res) => {
                if (res) {
                    return res
                }
            })
        )
    }
})