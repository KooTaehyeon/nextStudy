// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next';
import fs from 'fs';
import path from 'path';
type Data = {
  message?: string;
  feedback?: {};
};

export function bulidFeedbackPath() {
  return path.join(process.cwd(), 'data', 'feedback.json');
}
export function extractFeedback(filePath: any) {
  const fileData = fs.readFileSync(filePath, {
    encoding: 'utf-8',
    flag: 'r',
  });
  const data = JSON.parse(fileData);
  return data;
}
export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log(req.method, 'req.method');

  if (req.method === 'POST') {
    const email = req.body.email;
    const feedbackText = req.body.text;
    const newFeedback = {
      id: new Date().toISOString(),
      email: email,
      text: feedbackText,
    };
    // 데이터 저장
    const filePath = bulidFeedbackPath();
    const data = extractFeedback(filePath);
    data.push(newFeedback);
    fs.writeFileSync(filePath, JSON.stringify(data));
    res.status(201).json({ message: 'Success!', feedback: newFeedback });
  } else {
    const filePath = bulidFeedbackPath();
    console.log(filePath, 'filePath');

    const data = extractFeedback(filePath);
    console.log(data, 'data');

    res.status(200).json({ feedback: data });
  }
}
