import {Component, OnInit, HostBinding} from '@angular/core';
import {DnasService} from '../../services/dnas.service'
import {Dna} from 'src/app/models/Dna';
import {StringUtils} from 'turbocommons-ts';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-dna-list',
  templateUrl: './dna-list.component.html',
  styleUrls: ['./dna-list.component.css']
})
export class DnaListComponent implements OnInit {

  @HostBinding('class') classes = 'row';
  dnas: any = [];
  list: any = [];
  searchedValue: string;
  Levdistance: string;
  constructor(private dnasService: DnasService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.getDnas();
  }

  getDnas() {
    this.dnasService.getDnas().subscribe(
      res => {
       // console.log(res)
        this.list = res;
        for (const dna of this.list) {
          this.searchedValue = this.route.snapshot.paramMap.get('string');
          this.Levdistance = this.route.snapshot.paramMap.get('distance');
          if (StringUtils.compareByLevenshtein(dna.string, this.searchedValue).toString() === this.Levdistance) {this.dnas.push(dna.string)}
        }
      },
      err => console.log(err)
    );
  }
}
