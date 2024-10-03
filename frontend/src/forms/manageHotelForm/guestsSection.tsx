import { useFormContext } from "react-hook-form";
import { HotelFormData } from "./manageHotelForm";

const GeustsSection = () => {
    const {register, formState: {errors}} = useFormContext<HotelFormData>();
    return(
        <div>
            <h2 className="text-2xl font-bold mb-3">Guests</h2>
            <div className="grid grid-cols-2 p-6 gap-5 bg-gray-300">
                <label className="text-gray-700 text-sm font-semibold">
                    Adults
                    <input type="number" min={1} {...register("adultCount", {required: "This field is required"})} className="border rounded w-full py-2 px-3 font-normal"/>
                    {errors.adultCount && <span className="text-sm font-bold text-red-500">{errors.adultCount.message}</span>}
                </label>
                <label className="text-gray-700 text-sm font-semibold">
                    Children
                    <input type="number" min={0} {...register("childCount", {required: "This field is required"})} className="border rounded w-full py-2 px-3 font-normal"/>
                    {errors.childCount && <span className="text-sm font-bold text-red-500">{errors.childCount.message}</span>}
                </label>
             </div>
        </div>
    );
};

export default GeustsSection;