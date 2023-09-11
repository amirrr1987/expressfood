import axios, { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";



const instance = axios.create({
    baseURL: 'https://react-mini-projects-api.classbon.com/',
});

export const useServices = (params: AxiosRequestConfig<unknown>) => {
    const [loading, setLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>('');
    const [response, setResponse] = useState<never | null>(null);

    const fetchData = async () => {
        try {
            setLoading(true);
            const { data } = await instance.request(params);
            setResponse(data);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, [params.url])

    return [response, error, loading] as const;
};
