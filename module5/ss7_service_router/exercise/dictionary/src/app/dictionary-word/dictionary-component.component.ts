// @ts-ignore
import { Component, OnInit } from '@angular/core';



// @ts-ignore
@Component({
  selector: 'app-dictionary-component',
  templateUrl: './dictionary-component.component.html',
  styleUrls: ['./dictionary-component.component.css']
})
export class DictionaryComponentComponent implements OnInit {
  article: IWord = {};
  dictionaryList: IWord[]=[];



  constructor(private dictionaryService: DitionaryService, private router:Router) {}

  ngOnInit(): void {
    this.getAll()
  }

  changePageToInfo() {
    for (let i = 0; i <this.dictionaryService.getAll().length ; i++) {
      if(this.dictionaryService.getAll()[i].word == this.article.word){
        this.router.navigate(["/detail",this.article.word])
      }
    }
  }

  getAll(){
    return this.dictionaryList =this.dictionaryService.getAll();
  }


}
