 var csvRequest = new XMLHttpRequest();
csvRequest.open("GET", "https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/testsitemach1.csv?alt=media&token=30cdb0b2-9e5d-4632-8f9c-31c670c72ea3");
csvRequest.setRequestHeader("Access-Control-Allow-Methods","*");
csvRequest.setRequestHeader("Access-Control-Allow-Origin","*");
//once loaded calls function
csvRequest.addEventListener("LOAD",next());
function next(){
    csvRequest.responseType = "blob";
    csvRequest.send();
    console.log('UH')
}

