import { Component, OnInit } from '@angular/core';
import { BLOGPOSTED } from 'src/app/data/data';
import { Blog } from 'src/app/interfaces/blog';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit{

      blogPost: Blog = {
        blogDate: 'June 19, 2023',
        blogTitle: "Understanding the Importance of Website Security:",
        blogImg: '../../../assets/img/blog/c4b8c91d88da3b09f35c9b2cd5d7f298.webp',
        blogNameOne: 'Shariar Nafis',
        blogNameTwo: 'Cybersecurity Expert',
        blogBtn: 'READ MORE',
        blogImage: '../../../assets/img/blog/card-banner-42b5.png'
      };

      blogPosted: Blog[] = []

      ngOnInit() {
        setTimeout(() => {
          this.blogPosted = BLOGPOSTED;
        }, 1000)
      }
}
