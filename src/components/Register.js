import { registerWithEmail } from '../lib/authentication.js';
import { navigateTo } from '../router.js';

export const Register = () => {

  const div = document.createElement('div');
  div.innerHTML = `<form id="registerForm">
    <div class="container">
      <h1>Register</h1>
      <p>Please fill in this   form to create an account.</p>
      <hr>

      <label for="email"><b>Email</b></label>
      <input type="text" placeholder="Enter Email" name="email" id="email" required>

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" id="psw" required>

      <label for="psw-repeat"><b>Repeat Password</b></label>
      <input type="password" placeholder="Repeat Password" name="psw-repeat" id="psw-repeat" required>
      <hr>
      <p>By creating an account you agree to our <a href="#">Terms & Privacy</a>.</p>

      <input type="submit" value="Register"/>
    </div>   
    <div class="bottom-container">
    <div class="row">
      <div class="col">
        <a href="#" style="color:white" class="btn">Already have an account? Sign in</a>
      </div>
      </div>
    </div>
  </form>`;

  div.querySelector('#registerForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.psw.value;
    registerWithEmail(email, password)
      .then((useCredential) => {
        navigateTo('/home');
      })
      .catch(error => {
        console.error(error);
        alert(error.message);
      });
  });

  return div;
}