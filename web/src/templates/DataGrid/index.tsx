import * as React from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import type { SheetDataRow } from "@/pages/spreadsheet-reader";

export default function DataTable({ rowsT }: { rowsT: SheetDataRow[] }) {
  const columns: GridColDef[] = [
    { field: "targets", headerName: "Targets / Actions", width: 300   },
    { field: "commands", headerName: "Commands ", width: 300 },
    {
      field: "aliasing",
      headerName: "Alias",
      width: 150,
    },
    {
      field: "createAlias",
      headerName: "Create Alias",
      width: 300,
    },
    {
      field: "useAlias",
      headerName: "Use Alias",
      width: 300,
    },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      renderCell: (params) => {
        return (
          <Box>
            {params.value}
            </Box>
        );
       }
    },
  ];

  const formattedRows = rowsT
    ?.filter((data: SheetDataRow) => data.length > 0)
    .slice(1)
    .map((row: SheetDataRow, index: number) => {
      return {
        id: index,
        targets: row[0],
        commands: row[1],
        aliasing: row[2],
        createAlias: row[3],
        useAlias: row[4],
        description: row[5],
      };
    });

  return (
    <div style={{ height: '90vh', width: "100%" }}>
      <DataGrid
        rows={formattedRows}
        columns={columns}
        hideFooter={true}
        sx={{
          '& .MuiDataGrid-row:nth-of-type(odd)': {
            backgroundColor: '#f9f9f9',
          },
          '& .MuiDataGrid-row:nth-of-type(even)': {
            backgroundColor: '#ffffff',
          },
          '& .MuiDataGrid-columnHeaders': {
            fontWeight: 'bold',
            fontSize: '1.5rem',
          },
        }}
      />
    </div>
  );
}
