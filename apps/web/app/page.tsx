"use client";

import { useEffect } from 'react';
import useInfiniteScroll from 'shared/hooks/useInfiniteScroll';
import Post from 'shared/interface/post';

export default function Home() {
  const { data, loading, hasMore, loadMoreData } = useInfiniteScroll();

  // Effect to handle infinite scroll logic
  useEffect(() => {
    const handleScroll = () => {
      // Check if we're at the bottom of the page
      if (
        window.innerHeight + document.documentElement.scrollTop ===
        document.documentElement.scrollHeight
      ) {
        // Call loadMoreData when the user reaches the bottom
        if (!loading && hasMore) {
          loadMoreData();
        }
      }
    };

    // Add event listener for scroll
    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading, hasMore, loadMoreData]);

  return (
    <div className="p-5 font-sans bg-white"> {/* Set background of the container to white */}
      <h1 className="text-2xl font-bold mb-5 text-gray-800">Posts</h1>

      {/* List of Posts */}
      <ul className="list-none p-0">
        {data.map((item: Post, index: number) => (
          <li key={`${item.id}-${index}`} className="bg-gray-200 p-4 mb-4 rounded-lg shadow-md"> {/* Set background to silverish */}
            <h2 className="text-xl font-bold mb-3 text-gray-800">{item.title}</h2>
            <p className="text-base text-gray-600 leading-relaxed">{item.body}</p>
          </li>
        ))}
      </ul>

      {/* Loading and "Load More" button section */}
      <div className="mt-5 text-center">
        {loading ? (
          // Spinner while loading
          <div className="inline-block w-10 h-10 border-4 border-t-4 border-blue-500 border-solid rounded-full animate-spin"></div>
        ) : hasMore ? (
          // Load More button if there is more data
          <button
            className="px-6 py-2 bg-blue-500 text-white rounded-md cursor-pointer hover:bg-blue-600"
            onClick={loadMoreData}
          >
            Loading More
          </button>
        ) : (
          // Message when no more data is available
          <p className="text-base text-gray-500">No more data</p>
        )}
      </div>
    </div>
  );
}
