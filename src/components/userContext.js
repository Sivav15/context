import { createContext, useState } from "react";

let UserContext = createContext();

export const UserProvider = ({ childern }) => {
    console.log("sivanathan...................");
  const [username, setUsername] = useState("siva");

  return (
    <UserContext.Provider value={{ username, setUsername }}>
      {childern}
    </UserContext.Provider>
  );
};

export default UserContext;