
// Create a reference with an initial file path and name
var url = "https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/testsitemach1.csv?alt=media&token=30cdb0b2-9e5d-4632-8f9c-31c670c72ea3"
var storage = firebase.storage();
var pathReference = storage.ref('testsitemach1.csv');

// Create a reference from a Google Cloud Storage URI
var gsReference = storage.refFromURL('gs://testingroomsite.appspot.com/testsitemach1.csv')

// Create a reference from an HTTPS URL
// Note that in the URL, characters are URL escaped!
var httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/testsitemach1.csv?alt=media&token=30cdb0b2-9e5d-4632-8f9c-31c670c72ea3');

storageRef.child('testsitemach1.csv').getDownloadURL().then(function(url) {
  // `url` is the download URL for 'images/stars.jpg'

  // This can be downloaded directly:
  var xhr = new XMLHttpRequest();
  xhr.responseType = 'blob';
  xhr.onload = function(event) {
    var blob = xhr.response;
  };
  xhr.open('GET', url);
  xhr.send();

  // Or inserted into an <img> element:
  var testfile = document.getElementById('myimg');
  testfile.src = url;
}).catch(function(error) {
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

    ...

    case 'storage/unknown':
      // Unknown error occurred, inspect the server response
      break;
  }
});