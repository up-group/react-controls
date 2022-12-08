import { Row } from './UpDataGrid.types';

export const isSelectedRowData = (id: string, rowsSelected: Array<Row>): boolean => {
  return rowsSelected?.some(data => data.value.id === id);
};

export const getRowsFromData = (data: Array<any>, isAllRowsSelected: boolean): Array<Row> => {
  return data.map((row, index) => {
    return {
      isSelected: isAllRowsSelected,
      value: row.value,
    };
  });
};

export const getNewSelectedRows = (rows: Array<Row>, currentSelection: Array<Row>): Array<Row> => {
  return rows.filter(r => r.isSelected).filter(r => !currentSelection.map(d => d.value.id).includes(r.value.id));
};

export const removeRowsFromData = (rows: Array<Row>, currentData: Array<Row>): Array<Row> => {
  return rows.filter(s => !currentData.some(d => d.value.id === s.value.id));
};

export const mapDataToRow = (data: Array<any>, allRowsSelected: boolean, rowsSelected: Array<any>): Array<Row> => {
  const rows: Array<Row> = [];
  data.map((value, index) => {
    rows.push({
      isSelected: allRowsSelected !== null ? allRowsSelected : isSelectedRowData(value.id, rowsSelected),
      value: value,
    });
  });

  return rows;
};
