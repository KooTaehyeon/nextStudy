export type dumyProps = {
  id: string;
  title: string;
  image: string;
  description: string;
  loctation: string;
  date: string;
  isFeatured: boolean;
  year?: string | any;
  month?: string | any;
};

export type Props = {
  children: React.ReactNode;
};
