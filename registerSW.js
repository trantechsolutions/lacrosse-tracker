if('serviceWorker' in navigator) {window.addEventListener('load', () => {navigator.serviceWorker.register('/lacrosse-tracker/sw.js', { scope: '/lacrosse-tracker/' })})}