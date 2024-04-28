import { Inter } from "next/font/google";
import { Box, Link } from "@mui/material";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <Box sx={{ p: 20}}>
      <Link href="/spreadsheet-reader">TO SPREADSHEET</Link>
    </Box>
  );
}
