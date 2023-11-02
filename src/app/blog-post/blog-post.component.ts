import { Component, Input } from '@angular/core';
import { Blog } from '../interfaces/blog';

@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent {
  @Input() blogCardData: Blog;
}
