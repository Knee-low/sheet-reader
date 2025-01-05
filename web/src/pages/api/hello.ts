import type { NextApiRequest, NextApiResponse } from "next";
import { google } from "googleapis";

export default function googleSheetHanlder(
  req: NextApiRequest,
  res: NextApiResponse<{ success: boolean; data?: string[][]; error?: string }>
) {
  try {
    const client = new google.auth.JWT(
      process.env.CLIENT_EMAIL,
      undefined,
      process.env.PRIVATE_KEY,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    client.authorize(async (err) => {
      if (err) {
        return res.status(400).send({ success: false, error: err.message });
      }

      const gsapi = google.sheets({ version: "v4", auth: client });
      const opt = {
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Sheet1!A1:Z100",
      };

      const data = await gsapi.spreadsheets.values.get(opt);
      return res
        .status(400)
        .send({ success: true, data: data.data.values ?? undefined });
    });
  } catch (e: unknown) {
    const errorMessage = e instanceof Error ? e.message : String(e);
    return res.status(400).send({ success: false, error: errorMessage });
  }
}
