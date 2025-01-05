import { DataGrid, type GridColDef } from "@mui/x-data-grid";
import Box from "@mui/material/Box";
import type { SheetDataRow } from "@/pages/spreadsheet-reader";
import SearchBar from "../SearchBar";
import { useHooks } from "./hooks";

export default function DataTable({ rowsT }: { rowsT: SheetDataRow[] }) {
  const { searchBarParams, searchText, filteredRows, getRowClassName } = useHooks({
    rowsT,
  });

  const columns: GridColDef[] = [
    {
      field: "targets",
      headerName: "Targets / Actions",
      width: 300,
      headerClassName: "header",
      renderCell: ({ value: cellValue }) => {
        const cellStyles = {
          fontWeight: "bold",
          fontSize: "1rem",
        };
      
        if (searchText) {
          const highlightedValue = cellValue.replace('#', '');
          return <Box sx={cellStyles}>{highlightedValue}</Box>;
        }
      
        const shouldHideValue = cellValue.includes('#');
        return shouldHideValue ? '' : <Box sx={cellStyles}>{cellValue}</Box>;
      },
      sortable: false,
    },
    {
      field: "commands",
      headerName: "Commands ",
      width: 300,
      headerClassName: "header",
      sortable: false,
    },
    {
      field: "aliasing",
      headerName: "Alias",
      width: 150,
      headerClassName: "header",
      sortable: false,
    },
    {
      field: "createAlias",
      headerName: "Create Alias",
      width: 300,
      headerClassName: "header",
      sortable: false,
    },
    {
      field: "useAlias",
      headerName: "Use Alias",
      width: 300,
      headerClassName: "header",
      sortable: false,
    },
    {
      field: "description",
      headerName: "Description",
      width: 500,
      headerClassName: "header",
      sortable: false,
    },
  ];

  return (
    <div style={{ height: "90vh", width: "100%" }}>
      <SearchBar searchBarParams={searchBarParams} />
      <DataGrid
        rows={filteredRows}
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
