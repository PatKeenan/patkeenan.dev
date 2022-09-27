import { NextApiRequest, NextApiResponse } from 'next';

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    return res.status(200).json({ email: 'patkeenan.dev@gmail.com' });
};
export default handler;
