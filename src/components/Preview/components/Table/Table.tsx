import { Link } from '@snack-uikit/link';
import { Table } from '@snack-uikit/table';

const TABLE_DATA = Array.from({ length: 3 })
  .fill('')
  .map(() => ({ cell1: `Ячейка 1`, cell2: `Ячейка 2`, cell3: `Ячейка 3`, cell4: `Ячейка №4` }));

export function TableDemo() {
  return (
    <Table
      outline
      data={TABLE_DATA}
      rowSelection={{
        enable: true,
        multiRow: true,
        initialState: {
          1: true,
        },
      }}
      manualPagination
      pageCount={99}
      pagination={{
        state: {
          pageIndex: 1,
          pageSize: 3,
        },
      }}
      manualFiltering
      columnDefinitions={[
        {
          accessorKey: 'cell1',
          header: 'Колонка 1',
          cell: ctx => <Link text={ctx.getValue<string>()} size='m' appearance='primary' textMode='accent' />,
        },
        {
          accessorKey: 'cell2',
          header: 'Колонка 2',
        },
        {
          accessorKey: 'cell3',
          header: 'Колонка 3',
        },
        {
          accessorKey: 'cell4',
          header: 'Колонка №4',
          headerAlign: 'right',
          align: 'right',
        },
      ]}
    />
  );
}
