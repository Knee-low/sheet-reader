import * as React from "react";
import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import DataTable from "@/templates/DataGrid";

export type SheetDataRow = [string, string, string, string, string, string];

export default function HomePage({ sheetData }: { sheetData: SheetDataRow[] }) {
  return (
    <Box sx={{ color: "black", backgroundColor: "white", height: "100vh" }}>
      <Box component="section" sx={{ p: 2 }}>
        <DataTable rowsT={sheetData} />
      </Box>

      {/* <Box sx={{ p: 5 }}>
        <Typography>
          <span>SAMPLE SHEET: </span>
          <Link
            href="https://docs.google.com/spreadsheets/d/1Qo8Mkw8zZR9azMDIRN_avz5pfPlTM3CBTcYuyADLHLg/edit?usp=sharing"
            target="_blank"
          >
            https://docs.google.com/spreadsheets/d/1Qo8Mkw8zZR9azMDIRN_avz5pfPlTM3CBTcYuyADLHLg/edit?usp=sharing
          </Link>
        </Typography>
      </Box> */}
    </Box>
  );
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export async function getServerSideProps({ req }: {req: any}) {
  const host = req ? req.headers.host : '';
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const baseUrl = `${protocol}://${host}`;
  const apiUrl = `${baseUrl}/api/hello`;

  const ret = await fetch(apiUrl);
  const res = await ret.json();

  return {
    props: {
      sheetData: res.data,
    },
  };
}
