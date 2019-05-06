import {Component, OnInit} from '@angular/core';
import {ProviderService} from '../provider.service';
import {IPost, IUser} from '../models/models';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
	public post_lists: IUser[] = [];

  constructor(private provider: ProviderService) { }

  ngOnInit() {
  	this.provider.getTaskLists().then(res => {
      this.post_lists = res;
    });

  }

}
