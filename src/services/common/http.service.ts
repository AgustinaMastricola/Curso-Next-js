import { URLSearchParams } from "url";

const API_URL = 'http://localhost:8080/api';
const API_URL_PUBLIC = `${API_URL}/public/`;

export const httpGet = async (endpoint: string, params?: URLSearchParams): Promise<T> => {
    
    const res = await fetch(`${API_URL_PUBLIC}${endpoint}${params ? `?${params}` : '' }`);

    if(!res.ok){
        throw new Error("Error al encontrar " + endpoint)
    }
    return res.json()
}