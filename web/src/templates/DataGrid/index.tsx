import * as React from "react";
import { DataGrid, GridColDef } from "@mui/x-data-grid";

export default function DataTable({ rowsT }: { rowsT: any }) {
  const columns: GridColDef[] = [
    { field: "id", headerName: "ID", width: 70 },
    { field: "firstName", headerName: "First name", width: 130 },
    { field: "lastName", headerName: "Last name", width: 130 },
    {
      field: "age",
      headerName: "Age",
      type: "number",
      width: 100,
    },
    {
      field: "fullName",
      headerName: "Full name",
      description: "This column has a value getter and is not sortable.",
      sortable: false,
      width: 160,
      valueGetter: (value, row) =>
        `${row.firstName || ""} ${row.lastName || ""}`,
    },
  ];

  const formattedRows = rowsT
    ?.filter((data: string | any[]) => data.length > 0)
    .slice(1)
    .map((row: any) => {
      return {
        id: parseInt(row[0]),
        lastName: row[2],
        firstName: row[1],
        age: parseInt(row[3]),
      };
    });

  return (
    <div style={{ height: 400, width: "100%" }}>
      <DataGrid
        rows={formattedRows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
      />
    </div>
  );
}
