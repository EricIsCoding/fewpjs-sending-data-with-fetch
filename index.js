// Add your code here
function submitData(userName, userEmail) {
    let formData = {
        name: userName,
        email: userEmail
    }
    let configObj = {
        method: "post", 
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(formData)
    }
    return fetch("http://localhost:3000/users", configObj).then((response) => {
        return response.json()
    }).then((object) => {
        let id = object.id
        let body = document.querySelector('body')
        body.innerHTML = id
    }).catch((error) => {
        let message = error.message
        let body = document.querySelector('body')
        body.innerHTML = message
    })
};