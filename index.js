'use strict';

const btnSyncFetch = document.querySelector(".js-sync-fetch-btn");
const btnASyncFetch = document.querySelector(".js-async-fetch-btn");
const btnClick = document.querySelector(".js-click-btn");

btnSyncFetch.addEventListener('click', e => {
  startProgram('sync');
});

btnASyncFetch.addEventListener('click', e => {
  startProgram('async');
});

btnClick.addEventListener('click', e => {
  console.log('You clicked me! Yay!');
})

function syncFetch(endpoint) {
  for(let i=0; i<3900000000; i++) {
    let a = 0;
  };
  console.log('Sync fetch finnished!');
}

function asyncFetch(endpoint) {
  setTimeout(() => {
    let a = 0;
    console.log('Async fetch finnished!');
  }, 3000);
}

function startProgram(exec){
  console.log('Before fetch calls.');
  
  const res1 = exec === 'sync' ? syncFetch('/api/users') : asyncFetch('/api/users');
  const res2 = exec === 'sync' ? syncFetch('/api/posts') : asyncFetch('/api/posts');
  const res3 = exec === 'sync' ? syncFetch('/api/cities') : asyncFetch('/api/cities');
  
  console.log('After fetch calls.');
};
