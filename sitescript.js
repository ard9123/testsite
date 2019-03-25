//create new request
var csvRequest = new XMLHttpRequest();
//initializes request type
csvRequest.open("GET", "https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/testsitemach1.csv?alt=media&token=30cdb0b2-9e5d-4632-8f9c-31c670c72ea3");
//FAILED ATTEMPT to bypass error
csvRequest.setRequestHeader("Access-Control-Allow-Methods","*");
//once loaded calls function
csvRequest.addEventListener("LOAD",next());
function next(){
    //sets data type blob as raw data
    csvRequest.responseType = "blob";
    //makes request
    csvRequest.send();
    //test to make sure it kinda works
    console.log('UH')
}

