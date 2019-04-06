

/*const invocation = new XMLHttpRequest();
const mozillaUrl = 'https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/testsitemach1.csv?alt=media&token=211d763c-4fd0-41ad-a350-5db9811066ab';
   
function callOtherDomain() {
  if(invocation) {    
    invocation.open('GET', mozillaUrl, true);
    invocation.onreadystatechange = handler;
    invocation.send(); 
  }
}
callOtherDomain();*/
// Create a reference with an initial file path and name
const storage = firebase.storage();

// Create a reference from a Google Cloud Storage location
const gsReference = storage.refFromURL('gs://testingroomsite.appspot.com/testsitemach1.csv')

//url
const httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/testsitemach1.csv?alt=media&token=211d763c-4fd0-41ad-a350-5db9811066ab');

//httpsReference.child('testsitemach1.csv').getDownloadURL().then(function(url) //{
    
     
    var idRequest = new XMLHttpRequest();
    
    idRequest.responseType = 'blob';
    idRequest.onload = function(event) {
        let blob = IDrequest.response;
  };
    idRequest.open('GET', 'https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/testsitemach1.csv?alt=media&token=211d763c-4fd0-41ad-a350-5db9811066ab');
    idRequest.setRequestHeader(
    'X-Custom-Header', 'value');
    idRequest.send();
      
/*}).catch(function(error) {
    switch (error.code) {
    
    case 'storage/object-not-found':
      // File doesn't exist
         
      break;

    case 'storage/unauthorized':
      // User doesn't have permission to access the object
        
      break;

    case 'storage/canceled':
      // User canceled the upload
           
      break;

    

    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
       
      break;
  }
});
/*const reader = new FileReader();

// This fires after the blob has been read/loaded.
reader.addEventListener('loadend', (e) => {
  const text = e.srcElement.result;
  console.log(text);
});

*/


