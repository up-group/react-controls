import { isEmpty } from '../../../../Common/utils';

export const getMaxPage = (take, total): number => {
  if (isEmpty(take)) {
    return 0;
  }
  return Math.ceil(total / take);
};

export const generatePagesNavigation = (page, total, take): Array<number> => {
  {
    // Get the max page
    let maxPage = 0;
    maxPage = Math.ceil(total / take);
    let pages: Array<number> = [];
    if (maxPage >= 1) {
      if (maxPage <= 8) {
        pages = Array.from({ length: maxPage }, (_, i) => i + 1);
      } else {
        [1, 2].map(v => pages.push(v));
        if (page - 3 > 1 && !pages.includes(page - 3)) {
          pages.push(0);
        }
        if (page - 2 > 1 && !pages.includes(page - 2)) {
          pages.push(page - 2);
        }
        if (page - 1 > 1 && !pages.includes(page - 1)) {
          pages.push(page - 1);
        }
        if (page < maxPage - 1 && !pages.includes(page)) {
          pages.push(page);
        }
        if (page + 1 < maxPage - 1 && !pages.includes(page + 1)) {
          pages.push(page + 1);
        }
        if (page + 2 < maxPage - 1 && !pages.includes(page + 2)) {
          pages.push(page + 2);
        }
        if (page + 3 < maxPage - 1) {
          pages.push(0);
        }
        if (!pages.includes(maxPage - 1)) {
          pages.push(maxPage - 1);
        }
        if (!pages.includes(maxPage)) {
          pages.push(maxPage);
        }
      }
    }
    return pages;
  }
};
