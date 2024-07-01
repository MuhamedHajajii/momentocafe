export interface Allimages {
  Folder1: Folder1[];
  Folder2: Folder1[];
}
interface Folder1 {
  Image_Name: string;
  Image_Url: string;
  Number: number;
  Folder: string;
  Last_Modified: string;
}
