export interface NameProp {
  first: string;
  last: string;
}

export interface PersonProp {
  name: NameProp;
}

export type ChildrenProp = {
  children: React.ReactNode;
};
