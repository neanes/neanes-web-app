if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/neanes-web-app/sw.js', { scope: '/neanes-web-app/' })})}