import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email, message } = req.body;
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Missing required fields' });
  }

  // Forward to Formspree
  const formspreeRes = await fetch('https://formspree.io/f/xdkgqrwl', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
    },
    body: new URLSearchParams({ name, email, message }),
  });

  if (!formspreeRes.ok) {
    return res.status(500).json({ message: 'Failed to send email' });
  }

  return res.status(200).json({ message: 'Email sent successfully' });
}
