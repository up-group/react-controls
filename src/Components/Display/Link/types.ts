export type Method = 'push' | 'replace';
export type Target = '_blank' | '_self' | '_parent' | '_top' | 'framename';

export interface UpLinkProps {
  /** ??? */
  path?: string;
  /** If provided, the underline of the link will be removed  */
  plain?: boolean;
  /** To specify the URL of the page the link goes to */
  href?: string;
  /** To set link content */
  label?: string;
  /** To set link color */
  color?: string;
  /** ??? */
  method?: Method;
  /** To add tooltip */
  dataFor?: string;
  /** onClick callback */
  onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void;
  /** To Specify where to open the linked document, e.g : in new Tab ...*/
  target?: Target;
}
