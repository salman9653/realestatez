import axios from "axios";

export const baseUrl = 'https://bayut.p.rapidapi.com';

export const fetchApi = async (url) => {
    const { data } = await axios.get((url), {
        headers: {
            'X-RapidAPI-Key': '4ad9671b6fmshb50b1fbc21294a0p1d313cjsn81fa8f006a48',
            'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
        },
    });

    return data;
}