// ... Your existing JavaScript code ...

function googleSignIn() {
    gapi.auth2.getAuthInstance().signIn().then(
        function(googleUser) {
            // Access user information from the signed-in user
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            console.log('Email: ' + profile.getEmail());
            
            // You can use this information to authenticate the user in your application
        },
        function(error) {
            console.log('Google Sign-In failed: ' + error);
        }
    );
}

// ... Your existing JavaScript code ...