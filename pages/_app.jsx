import React from "react";
import { useGetUser } from "../effects/user";
import "./style.scss";

export default function App({ Component, pageProps }) {
  const [user, error] = useGetUser();

  if (error) {
    return <div>{error.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return <Component {...pageProps} user={user} />;
}
