import { Component } from '@angular/core';
import { Article } from './article/article.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title: ${title.value} and link: ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0));
    title.value = '';
    link.value = '';
    return false;
  }   

  articles: Article[];

 //populating the  array articles 
  constructor() {
    this.articles = [
      new Article('Angular', 'http://angular.io', 8),
      new Article('Fullstack.io', 'http://fullstack.io', 2),
      new Article('Iconic', 'http://ionicframework.com', 1),
      new Article('Python 3', 'http://python.org/doc', 5)

    ];
  }
  //sorting the array of articles 
  sortedArticles(): Article[] {
     return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);

   }

  
}
