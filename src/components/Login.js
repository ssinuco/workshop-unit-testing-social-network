import { signInWithGoogle, signInWithPassword } from "../lib/authentication";
import { navigateTo } from "../router";

export const Login = () => {
  const div = document.createElement('div');
  div.innerHTML = `<div class="container">
    <form id="loginForm">
      <div class="row">
        <h2 style="text-align:center">Login with Social Media or Manually</h2>
        <div class="vl">
          <span class="vl-innertext">or</span>
        </div>

        <div class="col">
          <a href="#" class="fb btn">
            <i class="fa fa-facebook fa-fw"></i> Login with Facebook
          </a>
          <a href="#" class="twitter btn">
            <i class="fa fa-twitter fa-fw"></i> Login with Twitter
          </a>
          <a href="#" class="google btn"><i class="fa fa-google fa-fw">
            </i> Login with Google+
          </a>
        </div>

        <div class="col">
          <div class="hide-md-lg">
            <p>Or sign in manually:</p>
          </div>

          <input type="text" id="username" name="username" placeholder="Username" required>
          <input type="password" id="password" name="password" placeholder="Password" required>
          <input type="submit" value="Login">
        </div>

      </div>
    </form>
  </div>

  <div class="bottom-container">
    <div class="row">
      <div class="col">
        <!-- <a href="#" style="color:white" class="signup btn">Sign up</a> -->
        <button class="signup btn">Sign up</button>
      </div>
      <div class="col">
        <a href="#" style="color:white" class="btn">Forgot password?</a>
      </div>
    </div>
  </div>

  <div class="modal">
    <div class="modal-content">
      <span class="close">&times;</span>
      <p>Some text in the Modal..</p>
    </div>
  </div>`;

  const openModal = (message) => {
    div.querySelector('.modal').style.display = "block";
    div.querySelector('.modal-content > p:nth-child(2)').textContent = message;
  };

  div.querySelector('#loginForm').addEventListener('submit', (e) => {
    e.preventDefault();
    const username = div.querySelector("#username").value;
    const password = div.querySelector("#password").value;
    signInWithPassword(username, password)
      .then(
        (useCredential) => {
          navigateTo('/home');
        },
        (error) => {
          openModal(error.message);
        })
  });

  div.querySelector('.google').addEventListener('click', (e) => {
    e.preventDefault();
    signInWithGoogle()
      .then(
        (useCredential) => {
          navigateTo('/home');
        },
        (error) => {
          openModal(error.message);
        });
  });

  div.querySelector('.signup').addEventListener('click', (e) => {
    e.preventDefault();
    navigateTo('/register');
  });

  div.querySelector('.close').addEventListener('click', (e) => {
    e.preventDefault();
    div.querySelector('.modal').style.display = "none";
  });
  return div;
}