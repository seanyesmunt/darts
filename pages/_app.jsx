import React from "react";
import { useGetUser } from "../effects/user";
import { useGetGame } from "../effects/game";
import "./style.scss";

export default function App({ Component, pageProps }) {
  const [user, userError] = useGetUser();

  if (userError) {
    return <div>{userError.message}</div>;
  }

  if (!user) {
    return <div>Loading...</div>;
  }

  return <Component {...pageProps} user={user} />;
}
