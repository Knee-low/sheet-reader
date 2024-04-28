import { Inter } from "next/font/google";
import { Box, CircularProgress, Link } from "@mui/material";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Home() {
  const router = useRouter()
  useEffect(() => {
    router.push('/spreadsheet-reader')
  }, [router])

  return (
    <Box sx={{ px: '48%', py: '20%', height:'100vh' }}>
      <CircularProgress disableShrink />
    </Box>
  );
}
