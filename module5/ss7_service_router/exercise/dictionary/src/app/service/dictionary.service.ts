// @ts-ignore
import { Injectable } from '@angular/core';

// @ts-ignore
@Injectable({
  providedIn: 'root'
})
export class DictionaryService {
  dictionaryList: IWord[]=[
    {word: "chicken",mean: "con gà"},
    {word: "cow",mean: "con bò"},
    {word: "mouse",mean: "con chuột"},
    {word: "griff",mean: "hưu"},
    {word: "squired",mean: "sóc"},
  ]

  constructor() { }
  getAll(){
    return this.dictionaryList;
  }
  findByWord(name: string){
    for(let i of this.dictionaryList){
      if(i.word == name){
        return i.mean;
      }
    }
  }


}
