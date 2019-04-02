import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Post } from '../models/post.model';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit {

    constructor(private router: Router) {};

    posts: Post[]= [
      new Post(1001,"Dumb anime concept and logic?", "Darkwolf068", "https://img1.ak.crunchyroll.com/i/spire4/2c1f10242d87677a89b974ce896e9f011413497935_medium.jpg", "Posted one day ago", "edited one day ago", "the whole world is in danger and many states are huge, yet they only bothered making one fire, one ice, one lighting and wind robot. i fail to see how wind can deal damage to alien lifeform, powerful alien life forms and machines and how does adding wind to a missile benefit it at all? i can understand a fire or lightning sword, those are cool and effective, but a wind missile? sure wind irl has done major damage but as a weapon? and the lighting robot, he would need to discharge electric with the highest of volts to deal any damage but lower it to not hurt humans. and vollfogg. the lamest and weakest robot ever. he rips off optimus but is far less cool and is a total wimp. his siren makes no sense and neither does his helicopter blades and spin attack.Last edited by Gundam Heavyarm", 5),
      new Post(1002,"Got any isekai action anime suggestions?", "CactiPlayz", "https://img1.ak.crunchyroll.com/i/spire3/d3af3fd20ad8371e7e96770d9881d4d21535417852_medium.jpg", "Posted 14 hours ago", "edited 7 hours ago", "Hey, I know there are ones like this out there but I can't find any with new animes, but most are the generic popular ones I've seen. I'm looking for isekai (Another world) reincarnation/summoning animes... Ones without modern technology and stuff. For ex", 0 ),
      new Post(1003,"Catchiest Anime OP/ED of Winter 2019", "slamman", "https://img1.ak.crunchyroll.com/i/spire2/95e33a9446840aa824b1241de20104c91421985795_medium.gif", "osted 2 days ago", "edited one day ago", "Hello, as I've done for a while now I am asking what was stuck in your head this season? Which openings and endings were catchy enough that you found yourself singing them without realizing it. For me it was:", 10 )
    ];

    goToPost(clickedPost: Post) {
      this.router.navigate(['post', clickedPost.id])
    };

  ngOnInit() {
  }

}
