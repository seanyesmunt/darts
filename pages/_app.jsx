import React from "react";
import Head from "next/head";
import { useGetUser } from "../effects/user";
import { useGetGame } from "../effects/game";
import "../types.ts";
import "./style.scss";

export default function App({ Component, pageProps }) {
  const [user, userError] = useGetUser();

  if (userError) {
    return <div>{userError.message}</div>;
  }

  if (!user) {
    return null;
  }

  return (
    <React.Fragment>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Roboto:400,700|Mansalva&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Component {...pageProps} user={user} />
    </React.Fragment>
  );
}
