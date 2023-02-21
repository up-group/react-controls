import { useCallback, useEffect, useRef, useState } from 'react';
interface IProps {
  children?: any;
  loadOnScroll?: boolean;
  scrollableDataGridStyle: string;
  onScrollStop: (page?: number, take?: number, skip?: number) => void;
}

export const InfiniteScrollObserver = (props: IProps) => {
  const [pageNum, setPageNum] = useState(1);
  const loader = useRef(null);

  const handleObserver = useCallback(entries => {
    const target = entries[0];
    if (target.isIntersecting) {
      setPageNum(prev => prev + 1);
      props.onScrollStop(pageNum);
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

  return props.loadOnScroll ? (
    <div className={props.scrollableDataGridStyle}>
      {props.children}
      <div ref={loader} />
    </div>
  ) : (
    <>{props.children}</>
  );
};
