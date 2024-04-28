import * as React from "react";
import { Box, Typography } from "@mui/material";
import Link from "@mui/material/Link";
import DataTable from "@/templates/DataGrid";

export type SheetDataRow = [string, number, number, number, number];

export default function HomePage({ sheetData }: { sheetData: SheetDataRow[] }) {
  return (
    <Box sx={{ color: "black", backgroundColor: "white", height: "100vh" }}>
      <Box component="section" sx={{ p: 2 }}>
        <DataTable rowsT={sheetData} />
      </Box>

      <Box sx={{ p: 5 }}>
        <Typography>
          <span>SAMPLE SHEET: </span>
          <Link
            href="https://docs.google.com/spreadsheets/d/1Qo8Mkw8zZR9azMDIRN_avz5pfPlTM3CBTcYuyADLHLg/edit?usp=sharing"
            target="_blank"
          >
            https://docs.google.com/spreadsheets/d/1Qo8Mkw8zZR9azMDIRN_avz5pfPlTM3CBTcYuyADLHLg/edit?usp=sharing
          </Link>
        </Typography>
      </Box>
    </Box>
  );
}

export async function getServerSideProps() {
  const req = await fetch(process.env.URL_FETCH || '');
  const res = await req.json();

  return {
    props: {
      sheetData: res.data,
    },
  };
}
