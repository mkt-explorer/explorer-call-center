"use client"
import React, { useEffect, useState } from 'react';

const KiwifyDataFetcher: React.FC = () => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      const options = {
        method: 'GET',
        headers: {
          'x-kiwify-account-id': 'N8zc0YHdY7Yk6Kt',
          Authorization: 'Bearer d3ae9d9eb47b7e8c3b04b2c1a3dce8e6845d1aeb88e467a37d311effbb6dc555',
        },
      };

      try {
        const response = await fetch('https://public-api.kiwify.com/v1/account-details', options);

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const result = await response.json();
        setData(result);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Account Details</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default KiwifyDataFetcher;
