import { Pipe, PipeTransform } from '@angular/core';

interface CartProduct{
  name:string,
  count:number
}


@Pipe({
  name: 'groupProducts'
})
export class GroupProductsPipe implements PipeTransform {

  transform(objects: object[], id: number): any {
    console.log(id);
    const countedObjects: object[] = [];

    for (const object of objects) {
      const countObject: any = countedObjects.find(obj => obj[id] === object[id]);
      if (countObject) {
        countObject.count++;
      }else{
        countedObjects.push({...object, count: 1});
      }
    }
    console.log(countedObjects);
    return countedObjects;
  }

}

