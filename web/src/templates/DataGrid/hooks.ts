import type { SheetDataRow } from "@/pages/spreadsheet-reader";
import { useEffect, useState } from "react";

type FilteredData = {
  id: number;
  targets: string;
  commands: string;
  aliasing: string;
  createAlias: string;
  useAlias: string;
  description: string;
}[];

type HookProps = {
  rowsT: SheetDataRow[];
};

export const useHooks = ({ rowsT }: HookProps) => {
  const [searchText, setSearchText] = useState("");
  const [filteredRows, setFilteredRows] = useState<FilteredData>([]);


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

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const lowercasedFilter = searchText.toLowerCase();
    const filteredData = formattedRows.filter((row) =>
      Object.values(row).some(
        (value) =>
          typeof value === "string" &&
          value.toLowerCase().includes(lowercasedFilter)
      )
    );
    setFilteredRows(filteredData);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText]);

  const getRowClassName = (params: { row: { id: number } }) => {
    return params.row.id % 2 === 0 ? "even" : "odd";
  };

  return {
    searchBarParams: { searchText, setSearchText },
    filteredRows,
    getRowClassName,
    searchText
  };
};
