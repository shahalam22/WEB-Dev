import { useState, useEffect } from "react";

const useFetchData = (link, cb) => {    // cb = callback function || eta deyar karon holo jeno ei cb onujayi amra data create korte pari fetched data theke. Then modified data return korte pari
    const [data, setData] = useState(null);   // ekhane [] er poriborte null use korle application crash korbe. karon first time array na peye null pay state e ar null er upor e map kora possible na. amra jodi ekhane null use kori tahole jekhane amra map korbo sekhane check kore nite hobe amader state null ki na! jodi null na hoy tahole amra map korbo otherwise korbo na
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try{
            setLoading(true);
            const response = await fetch(link);
            const dat = await response.json();
            if(cb){
                setData(cb(dat));
            }else{
                setData(dat);
            }
            setLoading(false);
            setError('');
        } catch (error) {
            setError('Error fetching data from server');
            setLoading(false);
        }
    };

    return {
        data,
        loading,
        error
    };
}

export default useFetchData;