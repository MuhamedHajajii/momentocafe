export interface Allmenudata {
  Category_Name: string;
  Items: MenuItem[];
}
export interface MenuItem {
  Name: string;
  Small_Price: number | string | string;
  Description: string;
  category: string;
  Double_Price: number | number | string;
}
