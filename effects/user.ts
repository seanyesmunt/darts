import React from "react";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { getUser } from "../api/firebase";

const USER_ID = "user_id";

export function useGetUser(): [User, Error?] {
  const [userID, setUserID] = React.useState<string>();
  const [user, setUser] = React.useState<User>();
  const [error, setError] = React.useState();

  React.useEffect(() => {
    const userIDCookie = Cookies.get(USER_ID);
    if (userIDCookie) {
      setUserID(userIDCookie);
    } else {
      const newID = uuidv4();
      Cookies.set(USER_ID, newID, {
        expires: 365
      });

      setUserID(newID);
    }
  }, []);

  React.useEffect(() => {
    if (userID) {
      getUser(userID)
        .then(userFromDB => {
          setUser(userFromDB);
        })
        .catch(error => {
          setError(error);
        });
    }
  }, [userID]);

  if (error) {
    console.error(error);
  }
  return [user, error];
}

export function useGetUserID(): string {
  const [user] = useGetUser();

  return user && user.id;
}
