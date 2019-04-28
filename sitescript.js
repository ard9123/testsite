//the url which the file will be taken from, depends on button selection
var currentUrl;

//statusUp = friendly message and alerts if no test selected
document.getElementById("statusUp").innerHTML=("Go Rangers");

//roomNumber and another error alert location
var output = document.getElementById("roomNumber").innerHTML;
output = "";

//stores student IDs
let IDs = [];

//stores room number in same index spot as IDs
let rooms = [];

//temporarily stores ID in [0] and rooms in [1]
let tempArr = []; 

//abandoned possible way of getting data
/*url

Create a reference with an initial file path and name
const storage = firebase.storage();

//const httpsReference = storage.refFromURL('https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/testsitemach2.csv?alt=media&token=211d763c-4fd0-41ad-a350-5db9811066ab');

//httpsReference.child('testsitemach1.csv').getDownloadURL().then(function(url) //{
    */

//called when submit button pressed
function startUp(){
            
            //checks which test is selected by checking each radio button if it is checked
            if(document.getElementById("English 1").checked == true){
                //english 1
               currentUrl= "https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/eng1.csv?alt=media&token=305ff07e-32a6-498c-bb0c-3d0be7d82053";
               //changes good luck message to whatever test is picked
               document.getElementById("statusUp").innerHTML = "English 1 selected";
            }
            else if(document.getElementById("US History").checked == true){
                //history
                currentUrl = "https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/ushistory.csv?alt=media&token=57aa47ae-7c5a-44b7-a029-ceb89fadad0b";
               
                document.getElementById("statusUp").innerHTML= "US History selected";
            }
            else if(document.getElementById("Biology").checked == true){
                //biology
                currentUrl = "https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/biology.csv?alt=media&token=c7cc3982-b83a-413e-a164-877343b49582";
             
                document.getElementById("statusUp").innerHTML= "Biology selected";
            }
            else if(document.getElementById("Algebra").checked == true){
                //algebra
                currentUrl = "https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/algebra.csv?alt=media&token=8464999c-e649-46df-ab09-06a23bfc89f7";
               
                document.getElementById("statusUp").innerHTML=  "Algebra selected";
            }
            else if(document.getElementById("English 2").checked == true){
                //english 2
                currentUrl = "https://firebasestorage.googleapis.com/v0/b/testingroomsite.appspot.com/o/eng2.csv?alt=media&token=12b90768-b44b-4e28-a84f-2fa9e1765f5e";
                
                document.getElementById("statusUp").innerHTML=  "English 2 selected";
            }
           else{
               //good luck message changed if no test selected
               document.getElementById("statusUp").innerHTML=("ERROR: NO TEST TYPE SELECTED, TRY AGAIN");
               //the program stops and no request is made if no test selected
               return;
           }

            //the value that the user entered
            console.log("User entered value: " + document.getElementById("idnumber").value);
    
            // prepares to make an http request
            var idRequest = new XMLHttpRequest();

            //will get data from certain url
            idRequest.open('GET', currentUrl,true);

            //sets response to raw data
            idRequest.responseType = 'blob';

            //once request loaded and sent, response will be analyzed
            idRequest.onload = function(event){
                
            //data is result of new request
            var blob = idRequest.response;
                
            //file reader changes raw data into string
            var reader = new FileReader();
            reader.addEventListener("loadend", function() {
    
                //reader.result contains the contents of blob as a typed array
                console.log(reader.result);
                
                // with regex,  csv split into groups of 11: 6 digit IDs and a comma and 4 digit room numbers
                var parse = reader.result.match(/.{1,11}/g);
                console.log(parse);
        
                for(var i = 0; i < parse.length;i++){
                    //each series of 11 is split into room and ID by comma
                    tempArr = parse[i].split(",");
                    
                    //the first value stored in array is the ID
                    IDs[i]=tempArr[0];
                    
                    //second value stored is the room number
                    rooms[i]=tempArr[1];
                    
                    //temp array is reset
                    tempArr= [];  
                }
                console.log("Student IDs: " + IDs);
                console.log("Room Numbers: " + rooms);
       
                for(i = 0; i<parse.length;i++){
                    if(document.getElementById("idnumber").value==IDs[i]){
                    console.log("sucessfully retrieved room at row" + (i+1));
                        
                    //if the user entered ID matches one on the file, the room number is posted
                    document.getElementById("roomNumber").innerHTML = rooms[i];
                    
                    //program stops after room number found    
                    return;
                
                    }
                    
                    else if(document.getElementById("idnumber").value.length != 6){
                        //alerts user if 6 digits are not entered
                        document.getElementById("roomNumber").innerHTML = "ERROR: Please Enter 6 Digit ID"
                
                    }
                    else{
                        //alerts reader if 6 digits entered did not match value
                        console.log("No match at row" + (i+1));
                        document.getElementById("roomNumber").innerHTML = "ID Not Found: Make Sure ID Number and Selected Test are correct"
                    }
                }
            });
            //the file reader converts the binary blob into string    
            reader.readAsText(blob);
            }

            //send xhr request
            idRequest.send();
}