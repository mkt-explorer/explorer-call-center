// pages/api/account-details.ts

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const options = {
      method: 'GET',
      headers: {
        'x-kiwify-account-id': process.env.KIWIFY_ACCOUNT_ID as string,
        Authorization: `Bearer ${process.env.KIWIFY_ACCESS_TOKEN as string}`,
      },
    };

    try {
      const response = await fetch('https://public-api.kiwify.com/v1/account-details', options);

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      res.status(200).json(data);
    } catch (err) {
      console.error('Erro ao buscar detalhes da conta:', err);
      res.status(500).json({ error: 'Erro ao obter detalhes da conta' });
    }
  } else {
    res.setHeader('Allow', ['GET']);
    res.status(405).end(`Método ${req.method} não permitido`);
  }
}
