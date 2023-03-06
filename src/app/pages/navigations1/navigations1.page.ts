import { Component, OnInit } from '@angular/core';
import { Navigations2Page } from '../navigations2/navigations2.page';

@Component({
  selector: 'app-navigations1',
  templateUrl: './navigations1.page.html',
  styleUrls: ['./navigations1.page.scss'],
})
export class Navigations1Page  {

  component = Navigations2Page;

}
