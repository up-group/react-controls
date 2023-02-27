import { useCallback, useEffect, useRef, useState } from 'react';
import { style } from 'typestyle';
interface IProps {
  children?: any;
  upDatagridHeight?: string;
  borderRadius?: string;
  borderColor?: string;
  onScrollStop: (page?: number, take?: number, skip?: number) => void;
}

export const InfiniteScrollObserver = (props: IProps) => {
  const { onScrollStop, borderColor, borderRadius, children, upDatagridHeight } = props;
  const [pageNum, setPageNum] = useState(1);
  const loader = useRef(null);

  const handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageNum(prev => prev + 1);
      onScrollStop(pageNum);
    }
  }, []);
  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  return (
    <div className={scrollableDataGridStyle(upDatagridHeight, borderRadius, borderColor)}>
      {children}
      <div ref={loader} />
    </div>
  );
};

const scrollableDataGridStyle = (upDatagridHeight = '700px', borderRadius?: string, borderColor?: string): string =>
  style({
    border: 'solid 1px',
    borderColor: borderColor,
    width: '100%',
    borderRadius: borderRadius,
    overflowY: 'auto',
    maxHeight: upDatagridHeight,
    position: 'sticky',
    top: 0,
    $nest: {
      table: {
        borderCollapse: 'collapse',
      },
      thead: {
        position: 'sticky',
        top: 0,
        zIndex: 1000,
      },
      tbody: {
        position: 'sticky',
        top: 0,
      },
      th: {
        position: 'sticky',
        top: 0,
      },
    },
  });
