import { useState } from 'react';

const baseURL = new URL(location).origin;
let setPath; // useRouter에서도 setCurrentPath와 동일하게 사용해주기 위해

// find a route matched request path
export function Router({ children: routes }) {
  const [currentPath, setCurrentPath] = useState(location.pathname);
  setPath = setCurrentPath;

  window.onpopstate = () => {
    setCurrentPath(location.pathname)
  }
  
  let route = routes.find(route => route.props.path === currentPath).props.component;
  return route;
};

// return found route
export function Route({ path, component}) {
  return component;
};

// Hook
export default function useRouter() {
  const push = (path) => {
    history.pushState(null, null, baseURL+path);
    setPath(path);
  }

  return push;
}