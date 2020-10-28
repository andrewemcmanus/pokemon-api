const container = document.querySelector('.container');

fetch('https://api.github.com/users/andrewemcmanus')
.then(response => { 
    // console.log(response);
    return response.json();
})
.then(githubData => {
    const userInfo = {
        bio: githubData.bio, // grab the value from githubData and assign it to this key
        username: githubData.login,
        name: githubData.name
    }
    console.log(userInfo);
    const newElement = document.createElement('p');
    newElement.textContent = userInfo.username;
    container.appendChild(newElement);
    
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
