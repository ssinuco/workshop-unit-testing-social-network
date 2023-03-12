const ROUTES = {};

export const navigateTo = (pathname, updateHistory = true) => {
  const path = typeof ROUTES[pathname] !== 'function' ? pathname : '/';
  if (updateHistory) {
    window.history.pushState({}, path, window.location.origin + pathname);
  }
  const rootSection = document.getElementById('root');
  rootSection.innerHTML = '';
  rootSection.append(ROUTES[pathname]());
};

export const initRouter = (routes) => {

  Object.keys(routes).reduce((currentRoutes, pathname) => {
    currentRoutes[pathname] = routes[pathname];
    return currentRoutes;
  }, ROUTES);

  window.onpopstate = (e) => {
    navigateTo(window.location.pathname, false);
  };
  
  window.onload = () =>{
    navigateTo(window.location.pathname, false);
  }  
}
