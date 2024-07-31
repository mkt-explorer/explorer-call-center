'use client';

import React, { useState } from 'react';

const AccountDetails: React.FC = () => {
  const [accountDetails, setAccountDetails] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const fetchAccountDetails = async () => {
    try {
      const response = await fetch('/api/account-details');

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setAccountDetails(data);
      setError(null); // Resetar erro em caso de sucesso
    } catch (err) {
      console.error('Erro ao buscar detalhes da conta:', err);
      setError('Ocorreu um erro ao obter os detalhes da conta.');
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Detalhes da Conta Kiwify</h1>
      <button
        onClick={fetchAccountDetails}
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        Obter Detalhes da Conta
      </button>

      {error && <p className="text-red-500 mt-4">{error}</p>}

      {accountDetails && (
        <div className="mt-4">
          <h2 className="text-xl font-semibold">Informações da Conta:</h2>
          <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(accountDetails, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default AccountDetails;
