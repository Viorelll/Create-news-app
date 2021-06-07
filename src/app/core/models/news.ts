export class News
{
   imagePath: string;
   title: string;
   description: string;
   id: number;

   constructor(id: number, imagePath: string, title: string, description: string) {
     this.id = id;
     this.imagePath = imagePath;
     this.title = title;
     this.description = description;
   }
}