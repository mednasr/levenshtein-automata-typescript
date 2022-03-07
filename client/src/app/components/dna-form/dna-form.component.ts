import { Component, OnInit, HostBinding } from '@angular/core';
import { Dna } from '../../models/Dna'
import { ActivatedRoute, Router } from '@angular/router'
import { DnasService } from '../../services/dnas.service'

@Component({
  selector: 'app-dna-form',
  templateUrl: './dna-form.component.html',
  styleUrls: ['./dna-form.component.css']
})
export class DnaFormComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  dna: Dna = {
    id: 0,
    string: ''
  }
  constructor(private dnasService: DnasService, private router: Router, private activedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    const params = this.activedRoute.snapshot.params;
    if (params.id){
      this.dnasService.oneDna(params.id).subscribe(
        res => {
          console.log(res);
          this.dna = res;
        },
        err => console.error(err)
      );
    }
  }
  saveNewDna(){
    delete this.dna.id;
    this.dnasService.saveDna(this.dna).subscribe(
      res => {
        console.log(res);
      },
      err => console.error(err)
    );
  }


}
