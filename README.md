# testsite by Andy Doyle

Purpose: to allow students at Smithson Valley High School to check STAAR test rooms with ID number online

Created at the request of Michael Saberian, Testing Coordinator

Latest Version: Version 1.0000.000 on 27 April 2019

# Development

Comments can be found in the code itself

CORS CONFIGURATION:

Firebase Servers were used to store the files, and the service account was managed with Google Cloud development console. In order for this wesbite to successfully request the files from the servers, Cross Origin Resource Sharing had to be correctly configured. This can be done in the terminal. Instructions are below.

1. Create a Google Service account, ensure that it has permission to change Firebase storage settings. 

2. Download the Google Software Developr Kit in the command: "Line curl https://sdk.cloud.google.com | bash"

3.Login to service account. Initialize google cloud tools in terminal: "gcloud init"

4. Create a CORS json document with proper settings, see file on this repository

5. Set the CORS settings of your Firebase app to the ones in the document: "gsutil cors set /Your/Path/To/CORS.json gs://yourproject.appspot.com"

-If you are positive you are using the right path to the file, but terminal still says file does not exist, ensure you are logged in with your service account.

