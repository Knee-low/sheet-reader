import type { NextApiRequest, NextApiResponse } from "next";
import keys from "./apiKeys/testKeys.json";
import { google } from "googleapis";

export default function googleSheetHanlder(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  try {
    const client = new google.auth.JWT(
      keys.client_email,
      undefined,
      keys.private_key,
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    client.authorize(async function (err, tokens) {
      if (err) {
        return res.status(400).send(JSON.stringify({ error: true }));
      }

      const gsapi = google.sheets({ version: "v4", auth: client });
      const opt = {
        spreadsheetId: process.env.SPREADSHEET_ID,
        range: "Sheet1!A1:Z100",
      };

      let data = await gsapi.spreadsheets.values.get(opt);
      return res
        .status(400)
        .send(JSON.stringify({ errpr: false, data: data.data.values }));
    });
  } catch (e: any) {
    return res.status(400).send(e.message);
  }
}
