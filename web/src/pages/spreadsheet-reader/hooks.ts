export type SheetDataRow = [string, number, number, number, number];
export type RowType = {
  name: any;
  calories: number;
  fat: number;
  carbs: number;
  protein: number;
}[];

export const hooks = ({ sheetData }: { sheetData: SheetDataRow[] }) => {
  return sheetData;
};
