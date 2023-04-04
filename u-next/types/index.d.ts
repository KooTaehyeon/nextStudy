export type ReactText = string | number;
export type ReactChild = ReactElement | ReactText;
export interface ReactNodeArray extends Array<ReactNode> {}
export type ReactNode =
  | ReactChild
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

export type Props = {
  children: ReactNode;
};
export type MeetupData = {
  [x: string]: any;
  title: string;
  image: string;
  address: string;
  description: string;
};
