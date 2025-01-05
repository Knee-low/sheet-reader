import * as React from "react";
import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import type { SheetDataRow } from "@/pages/spreadsheet-reader";

export default function DataTable({ rowsT }: { rowsT: SheetDataRow[] }) {
  const columns: GridColDef[] = [
    {
      field: "targets",
      headerName: "Targets / Actions",
      width: 300,
      headerClassName: "header",
      renderCell: ({ value }) => {
        return <Box sx={{ fontWeight: 'bold', fontSize: '1rem'}}>{value}</Box>;
      },
      sortable: false
    },
    {
      field: "commands",
      headerName: "Commands ",
      width: 300,
      headerClassName: "header",
      sortable: false
    },
    {
      field: "aliasing",
      headerName: "Alias",
      width: 150,
      headerClassName: "header",
      sortable: false
    },
    {
      field: "createAlias",
      headerName: "Create Alias",
      width: 300,
      headerClassName: "header",
      sortable: false
    },
    {
      field: "useAlias",
      headerName: "Use Alias",
      width: 300,
      headerClassName: "header",
      sortable: false
    },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      headerClassName: "header",
      sortable: false
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

  const getRowClassName = (params: { row: { id: number } }) => {
    return params.row.id % 2 === 0 ? "even" : "odd";
  };

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <DataGrid
        rows={formattedRows}
        columns={columns}
        hideFooter={true}
        getRowClassName={getRowClassName}
        sx={{
          "& .odd": {
            backgroundColor: "#f5f5f5",
          },
          "& .even": {
            backgroundColor: "#ffffff",
          },
          "& .MuiDataGrid-columnHeaders": {
            fontWeight: "bold",
            fontSize: "1.5rem",
          },
          "& .header": {
            color: "white",
            backgroundColor: "#26a69a",
          },
          "& .MuiDataGrid-row:hover": {
            backgroundColor: "#ddf2f0",
          },
          "& .MuiDataGrid-row.Mui-selected": {
            backgroundColor: "#ddf2f0",
          },
        }}
      />
    </div>
  );
}
