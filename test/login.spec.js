import * as authentication from "../src/lib/authentication";
import * as router from "../src/router";
import { Login } from '../src/components/Login';


describe('Pruebas de login', () => {

  beforeEach(() => {
    authentication.signInWithGoogle = jest.fn();
    authentication.signInWithPassword = jest.fn();
    router.initRouter = jest.fn();
    router.navigateTo = jest.fn();
  })

  it('debería redireccionar a /home', () => {
    //preparamos el mock
    authentication.signInWithPassword.mockImplementationOnce((email, password) => Promise.resolve());

    // llamamos a la funcion que vamos a testear
    const loginDiv = Login();
    loginDiv.querySelector('#username').value = 'ssinuco@gmail.com';
    loginDiv.querySelector('#password').value = '123456';    
    // simulamos el evento submit del formulario
    loginDiv.querySelector('#loginForm').dispatchEvent(new Event('submit'));
    //confirmar que se llamo a la funcion
    return Promise.resolve().then(() => expect(router.navigateTo).toHaveBeenCalledWith('/home'));
  });

  it('NO debería redireccionar a /home', () => {
    //preparamos el mock
    authentication.signInWithPassword.mockRejectedValueOnce(new Error('Error'));
    
    // llamamos a la funcion que vamos a testear
    const loginDiv = Login();
    loginDiv.querySelector('#username').value = 'ssinuco@gmail.com';
    loginDiv.querySelector('#password').value = '123456';    
    // simulamos el evento submit del formulario
    loginDiv.querySelector('#loginForm').dispatchEvent(new Event('submit'));
    // confirmar que no se llamo a la funcion
    return Promise.resolve().then(() => expect(router.navigateTo).not.toHaveBeenCalled());
  });
});
