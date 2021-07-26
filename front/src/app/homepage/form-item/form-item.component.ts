import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ItemsService} from '../../core/service/items.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-form-item',
  templateUrl: './form-item.component.html',
  styleUrls: ['./form-item.component.sass']
})

export class FormItemComponent implements OnInit {
  form: FormGroup;
  constructor(
    private fb: FormBuilder,
    private itemsService: ItemsService,
    private router: Router
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
  }

  saveItem(event: Event){
    event.preventDefault();
    if (this.form.valid){
      const item = this.form.value;
      this.itemsService.createItem(item)
        .subscribe((newItem) => {
          this.router.navigate(['../list']);
      });
    }
  }

  private buildForm() {
    this.form = this.fb.group({
      description : ['', [Validators.required]],
      checked :  [  '', [Validators.required]]
    });
  }
}
