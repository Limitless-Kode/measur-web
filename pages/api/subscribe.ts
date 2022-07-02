// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { firestore } from '@/server/clientApp'
import { EMAIL, SUBSCRIPTIONS } from '@/src/helpers/strings';
import { addDoc, collection, getDocs, query, where } from 'firebase/firestore';
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  success: boolean,
  message: string
}

export type SubscriptionPayload = {
  email: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method == 'POST') {
    const formData = req.body;
    const dbInstance = collection(firestore, SUBSCRIPTIONS);
    const existingUserquery = query(dbInstance, where(EMAIL, '==', formData.email));
    const results = await getDocs(existingUserquery);

    if (!results.empty) {
      res.status(200).json({ success: true, message: 'Your email is already subscribed' });
      return;
    }

    const document = await addDoc(dbInstance, formData);

    if (document.id != null) {
      res.status(200).json({ success: true, message: 'Hurray, subscription was successful' });
    } else {
      res.status(400).json({ success: false, message: 'Oops, incorrect data payload' })
    }
  } else {
    res.status(405).json({ success: false, message: 'Method not allowed.' })
  }
}