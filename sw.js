if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,c)=>{const o=e||("document"in self?document.currentScript.src:"")||location.href;if(s[o])return;let a={};const r=e=>i(e,o),f={module:{uri:o},exports:a,require:r};s[o]=Promise.all(n.map((e=>f[e]||r(e)))).then((e=>(c(...e),a)))}}define(["./workbox-7cfec069"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"assets/Home-DKXcf1eU.css",revision:null},{url:"assets/Home-qXy33xJR.js",revision:null},{url:"assets/index-BniQBNUo.css",revision:null},{url:"assets/index-DEooL6o0.js",revision:null},{url:"index.html",revision:"6cddc234ec2a77d6167e0f4b965d511e"},{url:"registerSW.js",revision:"15d6ab6ffee1acd913a9687a0541a445"},{url:"favicon-32.png",revision:"a23c86058f71fe3d7a8fb155c8485434"},{url:"favicon-16.png",revision:"f2d6cc2aba8c06b3230e34f2ca638d36"},{url:"apple-touch-icon.png",revision:"45a9491155b0ea3cb4ac7f2c5ae8f67f"},{url:"msapplication-icon.png",revision:"98b12e334a4fb486c2ad693fa61360ca"},{url:"safari-pinned-tab.svg",revision:"6cdfa4ac7ba0d2a562953cebb19083b6"},{url:"assets/icons/icon-72x72.png",revision:"3a3e16b6cd8c04e9a36fc95efce1be8f"},{url:"assets/icons/icon-96x96.png",revision:"3e9198945f2dc9bc0216d64fa41a2578"},{url:"assets/icons/icon-128x128.png",revision:"bf4ec8f77ef06a4b10e8ccd096a90454"},{url:"assets/icons/icon-144x144.png",revision:"98b12e334a4fb486c2ad693fa61360ca"},{url:"assets/icons/icon-152x152.png",revision:"45a9491155b0ea3cb4ac7f2c5ae8f67f"},{url:"assets/icons/icon-192x192.png",revision:"f581844d48d2b9890316c7eec3d76db1"},{url:"assets/icons/icon-384x384.png",revision:"d8bf13cb3c6c53d0ec547dc77bc1a0c4"},{url:"assets/icons/icon-512x512.png",revision:"53537392255a7ae98943b18cbfc15eb6"},{url:"manifest.webmanifest",revision:"c22b040b314fbd463528e9f63c029ff1"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
