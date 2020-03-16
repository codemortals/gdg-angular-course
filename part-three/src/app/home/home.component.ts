import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public addForm: FormGroup;
  public searchForm: FormGroup;

  public data = [
    'Eddie',
    'Andrew',
    'ClamyLee',
    'Gsuss',
    'CodeMortals',
    'Reshma Patel',
    'N Nas,'
  ];
  public filteredData: Array<string>;

  constructor(
    private forms: FormBuilder,
  ) { }

  ngOnInit() {

    this.addForm = this.forms.group({
      name: []
    });

    this.searchForm = this.forms.group({
      search: [],
    });

    this.filteredData = this.data;

    this.searchForm.valueChanges.subscribe(() => this.performSearch());

  }

  public performSearch(): void {
    const check = new RegExp(this.searchForm.get('search').value, 'i');
    this.filteredData = this.data.filter((name) => check.test(name));
  }

  public addName(): void {
    this.data = [this.addForm.get('name').value, ...this.data];
    this.performSearch();
  }
}
