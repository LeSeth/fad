'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "a6218fe17009993029d2295aeab9faf0",
"version.json": "017548a45f05c09ea064e05502e71b0f",
"index.html": "d10ec66b2ef9f333ea6292420896bb96",
"/": "d10ec66b2ef9f333ea6292420896bb96",
"main.dart.js": "4ef1c2b032b84586da7c4290e2c8dd0c",
"flutter.js": "24bc71911b75b5f8135c949e27a2984e",
"manifest%20copy.json": "358f82fa3038d3848210e75dff4bbc48",
"favicon.png": "f7a83cad64685a712833f1536d7c88b5",
"icons/Icon-192%20copy.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192%20copy.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "f7a83cad64685a712833f1536d7c88b5",
"icons/Icon-512%20copy.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "52fbbfceb36e308b36b1a67b20fa849c",
"icons/Icon-maskable-512%20copy.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-512.png": "df009f1cbe408da23d6cd9013d4b33e4",
"icons/Icon-512.png": "1168fe6a14fa880ff20249b37204c00d",
"manifest.json": "3f2c66fe2efa5bc8c295679656baa298",
"assets/env.json": "4c54092ba9fedc570eba10a6a458a344",
"assets/NOTICES": "8a5c11871a7df2495f3d85b5c5a7ede0",
"assets/FontManifest.json": "5e79a7154a9c0743680ad7fe9f7d50c5",
"assets/AssetManifest.bin.json": "4f026e6a4b1b1ff62460626562f6c298",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_AMS-Regular.ttf": "657a5353a553777e270827bd1630e467",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Script-Regular.ttf": "55d2dcd4778875a53ff09320a85a5296",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size3-Regular.ttf": "e87212c26bb86c21eb028aba2ac53ec3",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Typewriter-Regular.ttf": "87f56927f1ba726ce0591955c8b3b42d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Bold.ttf": "a9c8e437146ef63fcd6fae7cf65ca859",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Bold.ttf": "ad0a28f28f736cf4c121bcb0e719b88a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Bold.ttf": "9eef86c1f9efa78ab93d41a0551948f7",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Regular.ttf": "dede6f2c7dad4402fa205644391b3a94",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Regular.ttf": "5a5766c715ee765aa1398997643f1589",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Italic.ttf": "d89b80e7bdd57d238eeaa80ed9a1013a",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-Italic.ttf": "a7732ecb5840a15be39e1eda377bc21d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-Italic.ttf": "ac3b1882325add4f148f05db8cafd401",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Fraktur-Bold.ttf": "46b41c4de7a936d099575185a94855c4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size2-Regular.ttf": "959972785387fe35f7d47dbfb0385bc4",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_SansSerif-Regular.ttf": "b5f967ed9e4933f1c3165a12fe3436df",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size1-Regular.ttf": "1e6a3368d660edc3a2fbbe72edfeaa85",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Caligraphic-Regular.ttf": "7ec92adfa4fe03eb8e9bfb60813df1fa",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Size4-Regular.ttf": "85554307b465da7eb785fd3ce52ad282",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Main-BoldItalic.ttf": "e3c361ea8d1c215805439ce0941a1c8d",
"assets/packages/flutter_math_fork/lib/katex_fonts/fonts/KaTeX_Math-BoldItalic.ttf": "946a26954ab7fbd7ea78df07795a6cbc",
"assets/packages/flutter_inappwebview_web/assets/web/web_support.js": "509ae636cfdd93e49b5a6eaf0f06d79f",
"assets/packages/panara_dialogs/assets/info.png": "e4bb5858c90ab48c72f11ba44bb26b5b",
"assets/packages/panara_dialogs/assets/confirm.png": "acf806139cb7c12e09fc5ca1185b8a2f",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/assets/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/shaders/stretch_effect.frag": "40d68efbbf360632f614c731219e95f0",
"assets/AssetManifest.bin": "ebe1606fa0edf8512418fd5b71779e56",
"assets/fonts/MaterialIcons-Regular.otf": "62053eb917f49f58a55f4344f6077eec",
"assets/assets/images/study.png": "f6d7168a998965e4b661153d97fa5b60",
"assets/assets/images/orange_money.png": "f76ef092187ef8d8c737df69dbb9be65",
"assets/assets/images/moov_money.png": "df640f524c729fb14a605b352c314c5d",
"assets/assets/concours/sona.png": "44ce8b04751920f0da912b988e67caa0",
"assets/assets/concours/z.png": "f1e59b1847e959f77bedac769a018519",
"assets/assets/concours/gr.png": "67e111bf2570ab6c371ca801206dd768",
"assets/assets/concours/ena.png": "3b1ebc8c1932ac1adb915ab199950015",
"assets/assets/concours/js.png": "8de6f42ae0ed61607cff3f1160d2ef64",
"assets/assets/concours/pol.png": "4a07175a5dcbc74e62112370dfb5de53",
"assets/assets/concours/jhh.png": "d0d51b7f8e00c99d2002f28e900d2d38",
"assets/assets/concours/infas.png": "f4061d4c863e23a5ea24faa5a122a1ac",
"assets/assets/concours/enam.png": "136daa6cdc22b20fb70219d9ee9c9676",
"assets/assets/concours/ens.png": "97ac17499f0ad67c2ef9a2781295a028",
"assets/assets/concours/genie.png": "00ce0ee1921b5dd0fade9dcd300e4769",
"assets/assets/concours/eamac.png": "946df642ccfba8c6583b47ee04b054eb",
"assets/assets/concours/sante.png": "d0725cee5ef358d9e5b6f3ce9ed47863",
"assets/assets/concours/gendarmerie.png": "5f2133f0843f543cc9b85f3b409aec25",
"assets/assets/concours/douane.png": "3608ceedd83abe0246ad2f63bbb6b5d6",
"assets/assets/concours/transition.png": "b5eeabe93272e20506ab1fe27d14366e",
"assets/assets/concours/gen.png": "fd4d02b30b9e09baf1c51cd6d9b49b3b",
"assets/assets/concours/injs.png": "6f7a5ef715a572275f74221b968cd691",
"assets/assets/concours/police.png": "238a11edb059c34e0b2f4b8cf326eedc",
"assets/assets/concours/culture.png": "e44a9fad2ffe6779e304722231660d90",
"assets/assets/concours/kkl.png": "d0d51b7f8e00c99d2002f28e900d2d38",
"assets/assets/concours/droit.png": "34bed1a267aaaa957789263ca75b1ce9",
"assets/assets/concours/ns.png": "19c214a35b5b91cdf313fba4321e86dc",
"assets/assets/icon/icon.png": "cbd00d07950900b1e675ccf5d462d0ea",
"assets/assets/icon/icon11.png": "cbd00d07950900b1e675ccf5d462d0ea",
"assets/assets/icon/icon).png": "a45ee5a1b36ca31082b92329a054b847",
"assets/assets/icon/icon1.png": "15f6825350d6a8ff616e5f5e6eb57118",
"assets/assets/icon/icon2.png": "28c97ee7142495189ecddc68f1a3afa5",
"index%20copy.html": "53dca227513f4dc0bee9806668a307bd",
"canvaskit/skwasm.js": "8060d46e9a4901ca9991edd3a26be4f0",
"canvaskit/skwasm_heavy.js": "740d43a6b8240ef9e23eed8c48840da4",
"canvaskit/skwasm.js.symbols": "3a4aadf4e8141f284bd524976b1d6bdc",
"canvaskit/canvaskit.js.symbols": "a3c9f77715b642d0437d9c275caba91e",
"canvaskit/skwasm_heavy.js.symbols": "0755b4fb399918388d71b59ad390b055",
"canvaskit/skwasm.wasm": "7e5f3afdd3b0747a1fd4517cea239898",
"canvaskit/chromium/canvaskit.js.symbols": "e2d09f0e434bc118bf67dae526737d07",
"canvaskit/chromium/canvaskit.js": "a80c765aaa8af8645c9fb1aae53f9abf",
"canvaskit/chromium/canvaskit.wasm": "a726e3f75a84fcdf495a15817c63a35d",
"canvaskit/canvaskit.js": "8331fe38e66b3a898c4f37648aaf7ee2",
"canvaskit/canvaskit.wasm": "9b6a7830bf26959b200594729d73538e",
"canvaskit/skwasm_heavy.wasm": "b0be7910760d205ea4e011458df6ee01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
