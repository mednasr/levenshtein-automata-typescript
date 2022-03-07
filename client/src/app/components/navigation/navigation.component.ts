import {Component, HostBinding, OnInit} from '@angular/core';
import {Dna} from "../../models/Dna";
import {DnasService} from "../../services/dnas.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  dnas: any = [];
  searchedValue : string ;
  location = window.location;
  dna: Dna = {
    id: 0,
    string: ''
  };

  constructor(private dnasService: DnasService, private router: Router, private activedRoute: ActivatedRoute) { }
  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if ( params.string ){
      this.dnasService.oneDna(params.string).subscribe(
        res => {
          console.log(res);
          this.dna = res;
        },
        err => console.error(err)
      );
    }
  }
}

