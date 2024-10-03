import { useMutation } from "react-query";
import ManageHotelForm from "../forms/manageHotelForm/manageHotelForm";
import { useAppContext } from "../contexts/appContext";
import * as apiClient from "../api-client";

const AddHotel = () => {
  const { showToast } = useAppContext();

  const { mutate, isLoading } = useMutation(apiClient.addMyHotel, {
    onSuccess: () => {
      showToast({ message: "Hotel Saved!", type: "SUCCESS" });
    },
    onError: () => {
      showToast({ message: "Error saving hotel!", type: "ERROR" });
    },
  });

  const handleSave = (hoteFormData: FormData) => {
    mutate(hoteFormData);
  };

  return <ManageHotelForm onSave={handleSave} isLoading={isLoading} />;

};

export default AddHotel;

