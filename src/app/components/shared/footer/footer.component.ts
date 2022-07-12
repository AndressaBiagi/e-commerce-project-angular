import { Component, OnInit } from '@angular/core';
import { faPinterest, faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';


@Component({
  selector: 'bookstore-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  faPinterest = faPinterest;
  faFacebook = faFacebook;
  faTwitter = faTwitter;
  faInstagram = faInstagram;
  constructor() { }

  ngOnInit(): void {
  }

}
