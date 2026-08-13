import {precacheAndRoute as workbox_precaching_precacheAndRoute} from 'C:/Users/VICTUS/al-badar-real-estate/node_modules/workbox-precaching/precacheAndRoute.mjs';
import {cleanupOutdatedCaches as workbox_precaching_cleanupOutdatedCaches} from 'C:/Users/VICTUS/al-badar-real-estate/node_modules/workbox-precaching/cleanupOutdatedCaches.mjs';
import {registerRoute as workbox_routing_registerRoute} from 'C:/Users/VICTUS/al-badar-real-estate/node_modules/workbox-routing/registerRoute.mjs';
import {NavigationRoute as workbox_routing_NavigationRoute} from 'C:/Users/VICTUS/al-badar-real-estate/node_modules/workbox-routing/NavigationRoute.mjs';
import {createHandlerBoundToURL as workbox_precaching_createHandlerBoundToURL} from 'C:/Users/VICTUS/al-badar-real-estate/node_modules/workbox-precaching/createHandlerBoundToURL.mjs';/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */




self.skipWaiting();

/**
 * The precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
workbox_precaching_precacheAndRoute([
  {
    "url": "registerSW.js",
    "revision": "1872c500de691dce40960bb85481de07"
  },
  {
    "url": "index.html",
    "revision": "7480dbd1d5fb5653a76f15b2786be3ad"
  },
  {
    "url": "assets/index-DQeM1U3i.css",
    "revision": null
  },
  {
    "url": "assets/index-Bvf7G97k.js",
    "revision": null
  },
  {
    "url": "pwa-192x192.png",
    "revision": "a560e9ab678295dcfeeb744185878208"
  },
  {
    "url": "pwa-512x512.png",
    "revision": "4b953d61d30d5121f912422975162dc2"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "6a59baed231246a571be295a3fc30631"
  }
], {});
workbox_precaching_cleanupOutdatedCaches();workbox_routing_registerRoute(new workbox_routing_NavigationRoute(workbox_precaching_createHandlerBoundToURL("index.html")));


