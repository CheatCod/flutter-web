'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "0257f333834307a8236fc666f6291113",
".git/config": "41d2fb0994ad81b385a3e36aa954c380",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "65c0953c7e9dd4ac8d15886642c52e33",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ecbb0cb5ffb7d773cd5b2407b210cc3b",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "8bc24133f6f090d39d14ae55c0ee25d2",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "7930cd8e7fa74fc947829456d7da9742",
".git/logs/refs/heads/main": "78871c6f3ec72fbd6148c9fd76c7ea67",
".git/logs/refs/remotes/origin/main": "f61abcdcfdeb9e09d8410a579b3fa2b0",
".git/objects/00/6932f32df03bdf9fc700fe932b139e67c3c317": "25c2ef64b184dbdfeaf8695bd1f16870",
".git/objects/00/b7594eb9c6f9048095397e201fa6a9632935cb": "e2a2602c451d6e0f5fe25867ed49321d",
".git/objects/02/46a155ff6c2be3d53ff91bf2dfd615fb18d8c5": "fb5a4baae9a055da3ef19137859c9ac8",
".git/objects/06/0b3e9e4b700efd4fc1cf77b9fc537fcb178c5c": "eb8991d27af7f368ff94fee788a4344b",
".git/objects/08/28e87747bd3361630c7d9b84ef9b32d8c30159": "460fd15f50c47ba2fe76b9d293ce2866",
".git/objects/0b/78ee81cb59834e64f908818517dc5d6c02a795": "812c043fc0e1c535797f07727b0bf027",
".git/objects/0c/919e1b779da5180a0d7ce573d3187c90d7a4ca": "2c13e712d711e92c2f04ffdbc5e322d1",
".git/objects/0f/09d0705d110568cda86cf281c62fd344461ed4": "ecc8908e835c0e84d6e7230fe55bbaf9",
".git/objects/15/970a1adc4ffa08913947125667d748dea51874": "73a193ab8fc19342c3968ec8ba3cbb5e",
".git/objects/1d/7ba15765567d3d5189618dee3fb900394ae150": "216bea943eef8ab3e55db15eb4079483",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/22/5d4fcbf3da2452c18b05755c2aedcf8e04be5f": "98887325cb2cad60531748115589b789",
".git/objects/23/dfb20a9646193bf64351ac46e2a2228c0a510c": "43a1be000cbfeab6adf6e0184fb16b03",
".git/objects/26/eb1b050ac908ed9d00225ea513d4d138886d8c": "072135d0f253bcb146ba9aa9c477dff6",
".git/objects/27/d4d539f7969787c15f73870b448ea7b83fccca": "7544165df5aecd690021ebc90470de88",
".git/objects/2a/48d92980d6995f2e87df41912315b2e2de5a98": "cb0b9f13e3369e32cb8eb24eb7aec1d9",
".git/objects/32/26df49c5f3e035f4346f3d9162ad5a4c093698": "db931cbea94699e0a952a32d9e41f51b",
".git/objects/33/0e16a2fee1ee70cf2a6dfb3998e3c6d31804a0": "05ab1619e40d63ee2a95f31a181f2949",
".git/objects/33/d9fa9e1942e1bb92bdc5cc04b0dd52ceba998a": "51777f3784ea7a7e6d51d8737260e920",
".git/objects/36/cb61b8d0ad0423b5fadf74a6da6649f10a0ed0": "5344d6a5bcd6aad7dd20e0695179ec32",
".git/objects/3b/b379111993537c5e642ea8a80471a3f2d920bd": "2182da958c169ea99193e891915f9b1d",
".git/objects/3f/7d8c455b5a26ca2c803deda5ac2c7e8fd45450": "6978a752899c136b3873b429bb513f94",
".git/objects/42/86fcbf47450d9de478ee6cb0bda7545f22d324": "5a564e5ff4ca75d1ec1faa01c77d5bd5",
".git/objects/44/3338751242fac734471f3d76a1101e98e458a4": "9542b9ac1cbc32b9ff9cf84f785cff87",
".git/objects/4a/aee6ca94856628817a4154307e4cd4458db01f": "bcf86b783417dd9ac7dc9b8087af54f6",
".git/objects/4d/e6229e3d6be348a8ce637a666f2bde1fd9e020": "8cb6b07cce88389673ca6b8450b5d993",
".git/objects/4e/8e00e68352817bd2861d296c5070487d54287e": "bb4595dd126d865374af079a9e24f6bf",
".git/objects/4f/e724088f5671472134619c0314663e5735a409": "59e9684d649a588ab2244311e075f9ef",
".git/objects/53/32d153a5bbbd8a79a5dfa404c0e52916886554": "d9c5c79f69776c0a785f824ed329b40e",
".git/objects/55/01cd25430b0c69ebb013bb6470d09502dc4d1f": "9c1b43b455506c8e7cc1c0be9426d0d9",
".git/objects/55/aa7f0fad6774405457ffcac9fe91ee67672b16": "55822300c8c5a5cabde67c5142ffc34f",
".git/objects/5f/86339d87f607959dbd82050b3e95b153c3e9c6": "04761a5a4b224b36b7633c0a6b1a49fd",
".git/objects/60/56c6611e304c50a433583868b1b37c62720429": "f9a97ece7ee2f6dbf4651a277285f363",
".git/objects/60/8efd90a99ac46f4373d5c6feaa6c53e8b727f0": "721bf977a2145fad7a24948970bff201",
".git/objects/62/fa853c0723208bcf91b47cab69a56e0f19582e": "d4fe30f3ad235719d31ea6b70a533393",
".git/objects/63/ac5612debfae26dbb347fedec45f18e99fcd82": "f2658dd1976e5302e46b1fce0607080d",
".git/objects/6c/53a03099299200be65f4519d9a1e1fd9e9633d": "3b6f017c84bea4877e1c2469ef2fe1c0",
".git/objects/71/18cd4654ce062a968b83683ed08e6293d0e5e2": "63979c3a7109bc80b59ee424706b39a5",
".git/objects/72/614a3849cee22e3f5f8f7894b0e30d1f78e39f": "8995d781665cc5b9dc2984bac5510a2d",
".git/objects/74/fa98943e20a6eec198a5bfca3349fda6d03668": "68b27da031ca0b04b6974654d1bac41c",
".git/objects/76/03616a7d7e59e24f2413be2900b05c63c49c12": "59e787e0de7d354cff2b6a21fef090b9",
".git/objects/78/c66e96774c9d736ffa0b9759f2b4cf1efe3fa6": "dc8ec1f8f4791ae23aa918dfefaf84c4",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/64e7c8150b5ff21610e8657d74655dd3100bd2": "1597a6d036333627501d2807bc5032d9",
".git/objects/7c/9dac223f3aef5b34e8cdad696f93522a844e3d": "ef2be170f0b5ec2d5030e2b13e4e8a54",
".git/objects/7e/ada1fb710aee1b550aa72b7184484af23a1a99": "066e1355ccb6785d4261f6c0655bdc0b",
".git/objects/82/11521150df2a6e72316541c80bafd6a66de23f": "d7c6c63c125ad613125b1c3703643e28",
".git/objects/83/0573434be485f169af4e60453662ce4aad976b": "bad4216cd345f6c08c38a6e4b92b9910",
".git/objects/84/58fbf475733eb04635ecb20eec8b6c1b01f689": "deef504aedf59deab4a18a9c10b3331f",
".git/objects/86/2e117c15c94426c891fa3000514b4c2e32e0e1": "764681da8530048db5ee8c64743b3174",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/1c26f88e9676546e3424334ad60aa450cb61a3": "28c3d5eb60673b7defdd28995217b239",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/95/a4bf234f96a5a1dc7bf010720e4df5f02e0752": "16179c128b51e908b1da2c775a49269b",
".git/objects/96/339de4d66b4a3f2405f1bf8e5dfbf3bcc09562": "117548cda54a928449175a5e438bfac6",
".git/objects/98/ee0ec363ca1511f766a4f075ead5ce28952ff0": "9b3c78e784f3a995bd61875b7c70b1e7",
".git/objects/99/c707c9bcdc4784d302286b9dcfc64c3f084e51": "253d3d1f0704238d581aabd729978181",
".git/objects/9e/3a45a9970042ea54eda69718f874af74d58bfe": "b9169a412cffd8acb84a6d324e1815a4",
".git/objects/a0/a641d84f3051697ba27d5618ff53915258777e": "7057bb962c796c0796510eb1e8a2ed02",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a2/794553b2611f7705e5d62b87f0fdce47c6d515": "fd52a4c3bd1b10328be33e33fa6980b1",
".git/objects/a7/f2064f438f0c3030efb2f281aaa9586c979a43": "88f80ec327c831e8e9e41d31db4ff3b5",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/b3/826862f956800a1df645350955156ac207a18c": "2bcc8d57fda2c2ea1d8112640c99020e",
".git/objects/b5/9eb097dcf076a03f3eea74e3a50af1fa9fee1b": "d5d5ecb73a875e1db492009cf4ffcf1a",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bb/9610a8b9158b533595fcbe9624260376e802cd": "d1b7fe789d762ef6580af1b3199d0bd9",
".git/objects/be/6cf44975857cefdd318680d1b5ce2f1b86b994": "88d1099a4784312575a16f3c4375bf42",
".git/objects/c3/81f1d2f33370d12b04d391d23142c6502b77e3": "1e2b03a2111d8d7db5b6fc27c3832a6d",
".git/objects/c6/76275a8629514dc7bbc9fba594d39118288dd3": "6b5ba0ddce9a15b7308b392c7da90d2d",
".git/objects/c7/24ef48423dd5faa4560d75cf8e21cbafe0269c": "c0c72e63cfc67fc95c1b837dccf90a56",
".git/objects/ca/154ab89ffa9a52cb6c4b8e9e8d4beb3778b509": "f1f8c3a8337785e549e7211d00cb92fc",
".git/objects/ca/30ab87a9599e498033014452e2087884c0205e": "50cd71f52e6f308c4c5ed29b8eeb7a39",
".git/objects/cf/45141c8ef397c1bc60231822a2bd8d8850c352": "c4ee0790355d84ea2b17654141b65af2",
".git/objects/d2/e949d779e4d3c200002ee043efc3a9d1aacf5d": "6d292376a7a3a896ffbdc1ef4efb9698",
".git/objects/d3/7fce92b6b8347479705b0435f5ab21ac17de1b": "ecd8cc56d9b1c9e0c507cdc9726cd0f0",
".git/objects/d7/f484466aa6d986c64b95e79006a0f88406adc3": "64a318c05140c20b1b04371ccc4f31e9",
".git/objects/df/258e6cbeb490c68c79c13a579a3ee19949a0d9": "0b6252c139b93bc0a4ac8fdfff2eee19",
".git/objects/e0/2f169f853d0a9a62470ec13f9cc22e921df491": "ecbcf1eb16cf879f8fe2037c8343faa3",
".git/objects/e0/b3a86486ec874a08e3cfd9e0445379007b4156": "fce4b710efbeac661a892266ff25abce",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/b163a71a1d7b19ee0f2f3521d4aa7583120d85": "8f1952ede8a0ba1dbe0c7dc3c06ef93e",
".git/objects/e7/e9e765d0adf0ce52851439d115141b8cbbc299": "36f9a6e2535b046820107a601d1da4e6",
".git/objects/ea/db4d5cd3e1d8add84ac7995d4bf6e5b62c85ba": "df17d9f4bf25ec8e7bfbce550d0bd7ae",
".git/objects/eb/27557fe24db616a87038f5516f2725bff9dd8c": "037988170e6ec6dc3574c5f9580ec2c0",
".git/objects/f3/82e3b8c0efcd7a8e1eea780e28b5644e4d9774": "1abbd20bf0f4acffd3fcc094337d753c",
".git/objects/f5/5ea749a984eb0e310881b041d79f1017a4101c": "34b137de6a2809474461ead7e401f9bc",
".git/objects/f7/822d721b9d20900105bd96c0e5101960d4ddaf": "a8dcba0eb7006cb2a82915065cae0e90",
".git/objects/f8/d7ec7a87cb98b22c774ba1e150b749cc82faf7": "87e79d67cf75418aab5b1fc91166bcd9",
".git/objects/f9/b4079b3b6d1580a9d941a1b58560764d64a2d7": "590ebb71e7f97880595ac7ae746ecde6",
".git/objects/fa/fc917291461b9c7e94fd534632c192a4db4a28": "2e37d4637dcbd42ee3ebbf56753bcc08",
".git/objects/fb/bcb1d30b5ba586922ac3279a74aedafb06c536": "89c9eb399b6fe6b94849253414a6011a",
".git/ORIG_HEAD": "433ca102e6d1d7fa88baaac4cd30a06a",
".git/refs/heads/main": "72573e25676a5eb6b997cef98e351c48",
".git/refs/remotes/origin/main": "72573e25676a5eb6b997cef98e351c48",
"assets/AssetManifest.json": "de4fbbb98942ed3caf1a9d47102af9ec",
"assets/assets/icons/email.png": "eacc913ff231f6356a3b18ec0f592012",
"assets/assets/icons/envelope-square-solid.svg": "eb97d059bd16b68a78ea0971f4661b45",
"assets/assets/icons/github-square-brands.svg": "2ef81c65794c3f5b134b39f30d15a8fc",
"assets/assets/icons/github.png": "e8212041da5b133f2bad6fe86275d371",
"assets/assets/icons/instagram-square-brands.svg": "7cbcd31df6a60a8b5cb41c8a55060973",
"assets/assets/icons/instagram.png": "347b5c3dcedb142fa4ff6a190f569041",
"assets/assets/icons/linkedin-brands.svg": "c733b26a2c8178914e17cf7d94ee81a6",
"assets/assets/icons/linkedin.png": "cb82b2b73e8169a628eadb45106acca4",
"assets/FontManifest.json": "18a1446a6330ed84ebf05a123a57cb21",
"assets/fonts/Arya-Double.ttf": "705aa5cef063ecd2542957acf9d7210d",
"assets/fonts/Arya-Single.ttf": "4af7c72f23d830cb51a5f0a3667aab34",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "f8a85cbbf7660d76dec38fa6da2fbfaa",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"CNAME": "fc2612493f4faa98416eef14f319dbc8",
"favicon-32x32.png": "f2bef46a8a255a3a8be2df7c3171892c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/logo.jpg": "f441019a44955da78161436eb03ce822",
"index.html": "f45355a18be2d18fbe0b11b8b8e0bc9d",
"/": "f45355a18be2d18fbe0b11b8b8e0bc9d",
"main.dart.js": "3983de3dba5c8b5503fc05b77fc9fd8b",
"manifest.json": "121c4e5d3d4a9661e1cb364fe604e0b7",
"version.json": "5a46d25873c9578129442a8cbc54be97"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value + '?revision=' + RESOURCES[value], {'cache': 'reload'})));
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
  for (var resourceKey in Object.keys(RESOURCES)) {
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
