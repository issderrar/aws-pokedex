const myTitle = document.querySelector('card-title');

fetch('https://8opdbbyonh.execute-api.eu-west-3.amazonaws.com/test/helloworld?name=Issam&city=Seattle')
    .then(function(response) {
        return response.blob();
    })
    .then(function(myBlob) {
        const objectURL = URL.createObjectURL(myBlob);
        console.log(objectURL)
    });
