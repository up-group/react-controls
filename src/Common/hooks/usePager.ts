import React, { useState } from 'react';

export interface UsePagerParams<T = React.ReactNode> {
  items: T[];
  itemsPerPage?: number;
  onChange?: (newStep: number) => void;
}

export interface UsePagerData {
  hasPreviousPage: boolean;
  hasNextPage: boolean;
  previousPage: () => void;
  nextPage: () => void;
}

export type UsePager<T = React.ReactNode> = [T[], UsePagerData];

export const usePager = <T>({ items, itemsPerPage = 1, onChange }: UsePagerParams<T>): UsePager<T> => {
  const [currentPage, setCurrentPage] = useState(1);
  const hasPreviousPage = currentPage > 1;
  const hasNextPage = currentPage < Math.ceil(items.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const displayedItems = items.slice(startIndex, endIndex);

  const previousPage = (): void => {
    if (hasPreviousPage) {
      const previousPageValue = currentPage - 1;
      setCurrentPage(previousPageValue);

      onChange?.(previousPageValue);
    }
  };

  const nextPage = (): void => {
    if (hasNextPage) {
      const nextPageValue = currentPage + 1;
      setCurrentPage(nextPageValue);

      onChange?.(nextPageValue);
    }
  };

  return [
    displayedItems,
    {
      hasPreviousPage,
      hasNextPage,
      previousPage,
      nextPage,
    },
  ];
};
