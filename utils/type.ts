export interface Data {
  id: string;
  name: string;
  age: number;
  address: string;
}

export interface AddData {
  id: string;
  value: string;
}

export type Response = {
  datas: Data[] | AddData[];
  keywords?: string;
  success?: boolean;
  msg?: string;
};
