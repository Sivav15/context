import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ children }) => {
    console.log("sivanathan...................");
  const [username, setUsername] = useState("siva");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContext;
