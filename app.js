
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-app.js";
  import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-auth.js";
  import { getFirestore } from "https://www.gstatic.com/firebasejs/10.1.0/firebase-firestore.js";
  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBYjCrGbiEmzh4__RwEKb4RtBjGTnRRsMM",
    authDomain: "todo-app1-acd49.firebaseapp.com",
    projectId: "todo-app1-acd49",
    storageBucket: "todo-app1-acd49.appspot.com",
    messagingSenderId: "505586327318",
    appId: "1:505586327318:web:97c25bbc24ce3bdfbefa37",
    measurementId: "G-FNVTS353NH"
  };

  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  console.log(app);
  

let signUp = document.getElementById("sign-up");
signUp.addEventListener("click",()=>{

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
    });

} )


signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });

let mainContainer = document.getElementById("main-container");
const todo_cdiv = document.getElementById('todo_div')

  onAuthStateChanged(auth, (user) => {
    if (user) {

        mainContainer.style.display = "none";
        todo_cdiv.style.display = 'block';
      // User is signed in, see docs for a list of available properties
      // https://firebase.google.com/docs/reference/js/auth.user

      const uid = user.uid;
      // ...
    } else {
      // User is signed out
      // ...
    }
  });



  
 


  const addTodoBtn = document.getElementById('AddTodo_btn')
const delTodoBtn = document.getElementById('DelTodo_btn')
const dete = new Date()

addTodoBtn.addEventListener('click' ,addTodo )

function addTodo(){
  const input=document.getElementById("todoInput")

  const itemDiv = document.getElementById('ulParent')
     const list = `<li>

     <input type="text" value ="${input.value}"/>
     ${dete.toLocaleString()}
     <button>Delete</button>
     <button>Edit</button>

     </li>`

     itemDiv.innerHTML += list

     document.getElementById("todoInput").value = ''
   
}
