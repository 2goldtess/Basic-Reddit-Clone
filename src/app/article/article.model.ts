/*
@Datastructure
This page contains a data structure that represents a single article 

*/


export class Article {
    title: string;
    link: string;
    votes: number;

    constructor(title: string, link: string, votes?: number ) {
        this.title = title;
        this.link = link;
        this.votes = votes || 0;
    }

   voteUp()  {
     this.votes += 1;
   }
   
   voteDown() {
     this.votes -= 1;
   }

   //this function is a utility function that extracts the domain from a url
   //e.g. http://angular.io   becomes angular.io
   domain(): string {
       try {
           const domainAndPath: string = this.link.split('//')[1];
           return domainAndPath.split('/')[0];
       } catch (err) {
           return null;
       }
   }
}