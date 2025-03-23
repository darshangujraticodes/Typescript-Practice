import React, { createContext, useContext, useState } from "react";
import { ChildrenProp } from "../Components/Types/PersonProps";

type UserProp = { name: string; email: string };

type UserContextType = {
  userData: UserProp | null;
  setUserData: React.Dispatch<React.SetStateAction<UserProp | null>>;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: ChildrenProp) => {
  const [userData, setUserData] = useState<UserProp | null>(null);

  const contextValue = {
    userData,
    setUserData,
  };

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
