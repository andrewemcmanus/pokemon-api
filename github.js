fetch('https://api.github.com/users/andrewemcmanus')
.then(response => { 
    // console.log(response);
    return response.json();
})
.then(githubData => {
    console.log(githubData);
    // returns an object with key-value pairs containing user information!

})

fetch('https://api.spacexdata.com/v3/capsules')
.then(response => {
    return response.json();
})
.then(spacexData => {
    console.log(spacexData);
})
.catch(error => {
    console.log(error);
})

fetch('https://api.spacexdata.com/v3/history')
.then(response => {
    return response.json();
})
.then(spacexHistory => {
    console.log(spacexHistory);
})
.catch(error => {
    console.log(error);
})

fetch('https://api.spacexdata.com/v3/landpads/LZ-4')
.then(response => {
    return response.json();
})
.then(oneLandingPad => {
    console.log(oneLandingPad);
})
.catch(error => {
    console.log(error);
})
