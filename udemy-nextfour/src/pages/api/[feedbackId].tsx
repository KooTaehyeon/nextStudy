import type { NextApiRequest, NextApiResponse } from 'next';
import { bulidFeedbackPath, extractFeedback } from './feedback';
function handler(req: NextApiRequest, res: NextApiResponse) {
  const feedbackId = req.query.feedbackId;
  const filePath = bulidFeedbackPath();
  const feedbackData = extractFeedback(filePath);
  const seletedFeedback = feedbackData.find(
    (item: { id: string }) => item.id === feedbackId
  );
  res.status(200).json({ feedback: seletedFeedback });
}

export default handler;
