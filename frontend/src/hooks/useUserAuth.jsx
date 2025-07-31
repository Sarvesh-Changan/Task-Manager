import { useContext } from "react";
import { UserContext } from "../context/userContext";

export const useUserAuth = () => {
    const { user, loading } = useContext(UserContext);
    return { user, loading };
}