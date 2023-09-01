import React, { useState } from 'react';
import styled from 'styled-components';

type Column = {
  key: string;
  label: string;
  sortable?: boolean;
  render?: (row: any) => React.ReactNode;
};

type TableProps = {
  data: any[];
  columns: Column[];
  pageSize?: number;
};

type TableHeaderCellProps = {
  sortable?: boolean;
  sorted?: boolean;
};

const TableContainer = styled.div`
  width: 100%;
  overflow-x: auto;
`;

const TableElement = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const TableHeader = styled.thead``;

const TableHeaderRow = styled.tr``;

const TableHeaderCell = styled.th<TableHeaderCellProps>`
  padding: 8px;
  text-align: left;
  cursor: ${(props) => (props.sortable ? 'pointer' : 'default')};
  font-weight: ${(props) => (props.sorted ? 'bold' : 'normal')};
`;

const TableBody = styled.tbody``;

const TableDataRow = styled.tr``;

const TableDataCell = styled.td`
  padding: 8px;
`;

const TablePagination = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-top: 16px;
`;

const PaginationButton = styled.button`
  margin-left: 8px;
`;

const Table: React.FC<TableProps> = ({ data, columns, pageSize = 10 }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [sortKey, setSortKey] = useState('');
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc' | ''>('');

  const sortedData = sortData(data, sortKey, sortOrder);
  const paginatedData = paginateData(sortedData, currentPage, pageSize);
  const totalPages = Math.ceil(sortedData.length / pageSize);

  const handleSort = (key: string) => {
    if (key === sortKey) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortKey(key);
      setSortOrder('asc');
    }
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <TableContainer>
      <TableElement>
        <TableHeader>
          <TableHeaderRow>
            {columns.map((column) => (
              <TableHeaderCell
                key={column.key}
                sortable={column.sortable}
                sorted={column.key === sortKey}
                onClick={() => column.sortable && handleSort(column.key)}
              >
                {column.label}
              </TableHeaderCell>
            ))}
          </TableHeaderRow>
        </TableHeader>
        <TableBody>
          {paginatedData.map((row, index) => (
            <TableDataRow key={index}>
              {columns.map((column) => (
                <TableDataCell key={column.key}>
                  {column.render ? column.render(row) : row[column.key]}
                </TableDataCell>
              ))}
            </TableDataRow>
          ))}
        </TableBody>
      </TableElement>
      <TablePagination>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        {totalPages > 1 && (
          <>
            <PaginationButton
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
            >
              Previous
            </PaginationButton>
            <PaginationButton
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
            >
              Next
            </PaginationButton>
          </>
        )}
      </TablePagination>
    </TableContainer>
  );
};

function sortData(data: any[], sortKey: string, sortOrder: 'asc' | 'desc' | ''): any[] {
  if (!sortKey || sortOrder === '') {
    return data;
  }

  const sortedData = [...data];
  sortedData.sort((a, b) => {
    const valueA = a[sortKey];
    const valueB = b[sortKey];

    if (valueA < valueB) {
      return sortOrder === 'asc' ? -1 : 1;
    } else if (valueA > valueB) {
      return sortOrder === 'asc' ? 1 : -1;
    } else {
      return 0;
    }
  });

  return sortedData;
}

function paginateData(data: any[], currentPage: number, pageSize: number): any[] {
  const startIndex = (currentPage - 1) * pageSize;
  const endIndex = startIndex + pageSize;
  return data.slice(startIndex, endIndex);
}

export default Table;