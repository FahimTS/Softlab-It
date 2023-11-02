import { Component } from '@angular/core';
import { Services } from 'src/app/interfaces/services';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  service: Services = {
    image: '../../../assets/img/services/website-development-banner-f1fe.webp',
    headTitle: 'Corporate Website Development',
    title: "Make a lasting digital impression with SoftLab IT's professional corporate website development services, led by our world-class"
  };

  services: Services[] = [
    {
      image: '../../../assets/img/services/website-development-banner-f1fe.webp',
      headTitle: 'Corporate Website Development',
      title: "Make a lasting digital impression with SoftLab IT's professional corporate website development services, led by our world-class"
    },
    {
      image: '../../../assets/img/services/erp-service-banner-c17c.webp',
      headTitle: "ERP Development",
      title: "Supercharge your business with SoftLab IT's customized ERP development services, catering to the unique needs of the construction, education, healthcare, retail, and e-commerce industries."
    },
    {
      image: '../../../assets/img/services/ecommarce-banner-card-8dc7.webp',
      headTitle: "Revolutionizing Book Sales: Ehsan Book Store's from Offline to Online Success",
      title: "Discover how SoftLab IT, a leading software development company, empowered Ehsan Book Store's digital transformation. Witness the remarkable transition from offline to online book sales, leveraging the."
    },
    {
      image: '../../../assets/img/services/point-of-sale-card-10846.webp',
      headTitle: 'E-Commerce Development',
      title: "Unleash your online business potential with SoftLab IT's MEAN stack-powered e-commerce development, offering fully customized solutions for single and multi-vendor platforms."
    },
    {
      image: '../../../assets/img/services/managemnt-banner-card-104ef.webp',
      headTitle: 'Custom Management Solutions',
      title: "Streamline operations and enhance efficiency with our custom management solutions designed for hospitals, schools, corporate offices, and buying houses."
    },
    {
      image: '../../../assets/img/services/tocketing-solution-card-a2d2.webp',
      headTitle: "Ticketing Solution",
      title: "Upgrade your ticketing system with our automated Ticketing Solution powered by MEAN stack, providing user-friendly interfaces, seamless integration, real-time updates, secure payments, customization options, and insightful analytics."
    }
  ]
}
