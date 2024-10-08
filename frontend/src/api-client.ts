import { RegisterFormData } from './pages/register';
import { SignInFormData } from './pages/signin';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const register = async (formData: RegisterFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/users/register`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const responseBody = await response.json();
    if(!response.ok){
        throw new Error(responseBody.message);
    }
};

export const signIn = async (formData: SignInFormData) => {
    const response = await fetch(`${API_BASE_URL}/api/auth/login`, {
        method: "POST",
        credentials: "include",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
    });

    const responseBody = await response.json();

    if(!response.ok) {
        throw new Error(responseBody.message);
    }

    return responseBody;
};

export const validateToken = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/validate-token`, {
        credentials: "include",
    });

    if(!response.ok) {
        throw new Error("Token invalid");
    }

    return response.json();
};

export const logout = async () => {
    const response = await fetch(`${API_BASE_URL}/api/auth/logout`, {
        method: "POST",
        credentials: "include",
    });

    if(!response.ok){
        throw new Error("Error during logout!");
    }
}


export const addMyHotel = async (hotelFormData: FormData) => {
    
    const response = await fetch(`${API_BASE_URL}/api/my-hotels`, {
        method: "POST",
        credentials: "include",
        body: hotelFormData,
    });
    
    if(!response.ok){
        // throw new Error("Failed to add hotel");
        const errorData = await response.json();
        console.error("API Error:", errorData);
        throw new Error(errorData.message);
    }


    return response.json();
};



