import { Redirect, Route } from "react-router-dom";

export default function ProtectedRoute({
  isAuth = false,
  isAdmin = false,
  component: Component,
  ...rest
} = {}) {
  const user = JSON.parse(window.localStorage.getItem("login"));

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth && !isAdmin) {
          return <Component {...props} />;
        }

        if (!user) return <RedirectToLogin {...props} />;

        if (isAdmin) {
          if (user.isAdmin == false) {
            return <RedirectToLogin {...props} />;
          }
        }

        return <Component {...props} />;
      }}
    />
  );
}

function RedirectToLogin({ ...props }) {
  return <Redirect to={{ pathname: "/", state: { from: props.location } }} />;
}
