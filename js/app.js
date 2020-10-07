const myTitle = document.querySelector('#card-title');
const myTypes = document.querySelector('.card-types');
const myText = document.querySelector('#card-text');

var myInit = { method: 'GET',
    headers: 'Content-Type,X-Amz-Date,Authorization,X-Api-Key,X-Amz-Security-Token',
    mode: 'cors',
    cache: 'default' };

fetch('https://8opdbbyonh.execute-api.eu-west-3.amazonaws.com/test/helloworld?name=Issam&city=Seattle', myInit)
    .then(function(response) {
        return response.blob();
    })
    .then(function(myBlob) {
        const objectURL = URL.createObjectURL(myBlob);
        console.log(objectURL)
    });
