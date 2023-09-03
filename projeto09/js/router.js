export class Router {
  routes = {};

  add(routeName, page) {
    this.routes[routeName] = page;
  }

  route(event) {
    event = event || window.event;
    event.preventDefault();
  
    //mostrando para a janela em qual página estamos
    window.history.pushState({}, "", event.target.href);
  
    this.handle();
  }
  
  handle() {
    //const pathname = window.location.pathname;
    const { pathname } = window.location //desestruturação = const pathname = window.location.pathname;
    const route = this.routes[pathname] || this.routes[404];
    //busca a rota, quando concluir executo a função
    fetch(route)
    .then(data => data.text())
    .then(html => {
      document.querySelector('#app').innerHTML = html;
    })
  }
}