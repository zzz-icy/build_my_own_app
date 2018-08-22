// write a function to retrieve a blob of json
// make a ajax request, Use the 'fetch' function
/* eslint-disable indent */
// prettier-ignore

// compare the two code snippet

// function fetchAlbums() {
//     // whenever we make a request with fetch, fetch returns a promise
//     fetch('https://rallycoding.herokuapp.com/api/music_albums')
//         .then(res => res.json())
//     // this promise has to be resolved, so that the value can be use by the next .then()
//         .then(json => console.log(json));
// }

// asyn/await syntax
// async function fetchAlbums() {
//     // more legible
//     // whenever we make a request with fetch, fetch returns a promise
//     // add await before Promise
//     const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
//     const json = await res.json();
//     console.log(json);
// }

// use arrow function
const fetchAlbums = async () => {
    // more legible
    // whenever we make a request with fetch, fetch returns a promise
    // add await before Promise
    const res = await fetch('https://rallycoding.herokuapp.com/api/music_albums');
    const json = await res.json();
    console.log(json);
}
fetchAlbums();
