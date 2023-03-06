import { Component, OnInit } from '@angular/core';
import { Navigations3Page } from '../navigations3/navigations3.page';

@Component({
  selector: 'app-navigations2',
  templateUrl: './navigations2.page.html',
  styleUrls: ['./navigations2.page.scss'],
})
export class Navigations2Page  {

  component = Navigations3Page ;
}