import React from "react";
import { v4 as uuidv4 } from "uuid";
import Cookies from "js-cookie";
import { getUser } from "../api/firebase";

const USER_ID = "user_id";

export function useGetUser(): [User, Error?] {
  const [userId, setUserId] = React.useState<string>();
  const [user, setUser] = React.useState<User>();
  const [error, setError] = React.useState();

  React.useEffect(() => {
    const userIDCookie = Cookies.get(USER_ID);
    if (userIDCookie) {
      setUserId(userIDCookie);
    } else {
      const newId = uuidv4();
      Cookies.set(USER_ID, newId, {
        expires: 365
      });

      setUserId(newId);
    }
  }, []);

  React.useEffect(() => {
    if (userId) {
      getUser(userId)
        .then(userFromDB => setUser(userFromDB))
        .catch(error => {
          setError(error);
        });
    }
  }, [userId]);

  return [user, error];
}
