import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ReactiveFormsModule],
  template: `
    <div class="form-container">
      <article class="form-wrapper">
        <h1>Review on Slagelse Cinema</h1>
        <form
          name="reviewForm"
          [formGroup]="reviewForm"
          (ngSubmit)="handleFormSubmit()"
        >
          <section>
            <label for="title">Review Title</label>
            <input type="text" id="title" formControlName="title" />

            <label for="body">Review Body</label>
            <textarea
              id="body"
              cols="30"
              rows="10"
              formControlName="body"
            ></textarea>
          </section>
          <button type="submit">Submit review</button>
        </form>
      </article>
    </div>
  `,
  styleUrls: ['./styles.css'],
})
export class FormsComponent {
  reviewForm = new FormGroup({
    title: new FormControl(''),
    body: new FormControl(''),
  });
  handleFormSubmit() {
    this.postBlog(this.reviewForm.value.title, this.reviewForm.value.body);
  }

  postBlog(title: string | null | undefined, body: string | null | undefined) {
    console.log(
      `Posting review title ${title}, with the review content ${body}.`
    );
  }
}
