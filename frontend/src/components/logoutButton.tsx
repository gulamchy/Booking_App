import { useMutation, useQueryClient } from "react-query";
import * as apiClient from "../api-client";
import { useAppContext } from "../contexts/appContext";

const Logout = () => {
    const quertClient = useQueryClient();
    const { showToast } = useAppContext();
    const mutation = useMutation(apiClient.logout, {
        onSuccess: async () => {
            await quertClient.invalidateQueries("validateToken");
             
            // ShowToast
            showToast({message: "You have successfully logout", type: "SUCCESS"});
        },
        onError: (error: Error) => {
            //ShowToast
            showToast({message: error.message, type: "ERROR"});
        }
    });

    const handleClick = () => {
        mutation.mutate();
    }
    return (
        <button onClick={handleClick} className="text-blue-600 px-3 font-bold bg-white hover:bg-gray-100">
            Log out 
        </button>
    );
};

export default Logout;