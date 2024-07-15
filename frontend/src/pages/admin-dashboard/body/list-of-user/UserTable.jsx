import React from 'react';
import { useTable, useSortBy, useFilters } from 'react-table';

const UserTable = ({ data, isOpen }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Avatar',
        accessor: 'avatar.url',
        Cell: ({ cell: { value } }) => (
          <img src={value} alt="avatar" style={{ width: '50px' }} />
        ),
      },
      {
        Header: 'Name',
        accessor: 'name',
        Filter: DefaultColumnFilter,
      },
      {
        Header: 'Email',
        accessor: 'email',
      },
      {
        Header: 'Role',
        accessor: 'role',
      },
      {
        Header: 'Created At',
        accessor: 'createdAt',
        Cell: ({ cell: { value } }) => (
          <span>{new Date(value).toLocaleString()}</span>
        ),
      },
    ],
    []
  );

  const defaultColumn = React.useMemo(
    () => ({
      Filter: DefaultColumnFilter,
    }),
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable(
      {
        columns,
        data,
        defaultColumn,
      },
      useFilters,
      useSortBy
    );

  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup, headerGroupIdx) => (
          <tr key={headerGroupIdx} {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column, columnIdx) => (
              <th
                key={columnIdx}
                {...column.getHeaderProps(column.getSortByToggleProps())}
                className="headings"
              >
                {column.render('Header')}
                <span>
                  {column.isSorted ? (column.isSortedDesc ? ' 🔽' : ' 🔼') : ''}
                </span>
                <div>{column.canFilter ? column.render('Filter') : null}</div>
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, rowIdx) => {
          prepareRow(row);
          return (
            <tr key={rowIdx} {...row.getRowProps()}>
              {row.cells.map((cell, cellIdx) => (
                <td
                  key={cellIdx}
                  {...cell.getCellProps()}
                  className={`${isOpen ? 'body' : 'close-body'}`}
                >
                  {cell.render('Cell')}
                </td>
              ))}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

const DefaultColumnFilter = ({
  column: { filterValue, setFilter },
  isOpen,
}) => (
  <input
    value={filterValue || ''}
    onChange={(e) => {
      setFilter(e.target.value || undefined);
    }}
    placeholder={`Search...`}
    className={`${isOpen ? 'search' : 'close-search'}`}
  />
);

export default UserTable;
