import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "./useAuthContext";

export const useLogin = () => {
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const { dispatch } = useAuthContext();

    const navigate = useNavigate();

    const login = async (email, password) => {
        setIsLoading(true);
        setError(null);

        const response = await fetch(process.env.REACT_APP_SERVER + 'api/user/login', {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({email, password})
        });

        const json = await response.json();

        if(!response.ok) {
            setIsLoading(false);
            setError(json.error);
        }
        if(response.ok) {
            // Save the user to local storage
            localStorage.setItem('user', JSON.stringify(json));

            // Update the Auth context
            dispatch({type: 'LOGIN', payload: json});

            setIsLoading(false);

            navigate('/home');
        }
    }

    return { login, isLoading, error };
}