import { useRouteError } from "react-router-dom";

function Error({ error }) {
  //default error
  const routerError = useRouteError();
  error = error || routerError.statusText;

  return <div>FIX THIS</div>;
}

export default Error;
