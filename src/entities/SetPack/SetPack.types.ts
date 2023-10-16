interface IPackItem {
  image: string;
  itemName: string;
  quantity1?: string;
  quantity2?: string;
}

interface ISetPackProps {
  setPack: IPackItem[];
}

// eslint-disable-next-line import/prefer-default-export
export type { ISetPackProps };
