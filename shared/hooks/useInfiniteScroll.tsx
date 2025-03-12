import { useState, useEffect, useCallback } from 'react';
import axios from 'axios';
import Post from '../interface/post';

const API_URL = 'https://jsonplaceholder.typicode.com/posts';

const useInfiniteScroll = () => {
    const [data, setData] = useState<Post[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);
    const [page, setPage] = useState(1);

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const fetchData = useCallback(async (currentPage: number) => {
        if (loading || !hasMore) return;
        setLoading(true);
        try {
            const response = await axios.get(`${API_URL}?_page=${currentPage}&_limit=10`);
            const newData: Post[] = response.data;
            if (newData.length === 0) {
                setHasMore(false);
                return;
            }
            setData((prevData) => [...prevData, ...newData]);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }, [loading, hasMore]);

    const loadMoreData = useCallback(() => {
        if (loading || !hasMore) return;
        setLoading(true);
        setPage((prevPage) => prevPage + 1);
        setLoading(false);
    }, [loading, hasMore]);

    return {
        data,
        loading,
        hasMore,
        loadMoreData,
    };
};

export default useInfiniteScroll;
