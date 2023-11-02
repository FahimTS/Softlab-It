import { Component } from '@angular/core';
import { Awards } from 'src/app/interfaces/awards';
import { BusinessGrow } from 'src/app/interfaces/business-grow';
import { ClientCard } from 'src/app/interfaces/client-card';
import { Recognition } from 'src/app/interfaces/recognition';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
  
})

export class HomeComponent {

  businessGrow: BusinessGrow = {
    image: '../../assets/img/business card/1.webp',
    title: 'Consultation',
    describtion: 'Our team of experienced professionals will work with you to gain a comprehensive understanding of your business needs, goals, and challenges. We believe that this step is critical to providing the best possible solutions to meet your requirements.',
    urlName: 'Read More'
  };

  businessGrows: BusinessGrow[] = [
    {
      image: '../../assets/img/business card/1.webp',
      title: 'Consultation',
      describtion: 'Our team of experienced professionals will work with you to gain a comprehensive understanding of your business needs, goals, and challenges. We believe that this step is critical to providing the best possible solutions to meet your requirements.',
      urlName: 'Read More'
    },
    {
      image: '../../assets/img/business card/2.webp',
      title: 'Customization',
      describtion: 'Based on the information gathered during the consultation phase, we develop customized IT solutions that are tailored to your specific needs. Our solutions are designed to optimize efficiency, productivity, and profitability.',
      urlName: 'Read More'
    },
    {
      image: '../../assets/img/business card/3.webp',
      title: 'Implementation',
      describtion: 'Once we have developed a solution that meets your requirements, our team of skilled engineers will work tirelessly to implement it seamlessly into your existing IT infrastructure. We understand that minimizing downtime is essential to maintaining productivity and.',
      urlName: 'Read More'
    },
    {
      image: '../../assets/img/business card/4.webp',
      title: 'Ongoing Support',
      describtion: 'Our team of experienced professionals will work with you to gain a comprehensive understanding of your business needs, goals, and challenges. We believe that this step is critical to providing the best possible solutions to meet your requirements.',
      urlName: 'Read More'
    },
  ];

  clientCard: ClientCard = {
    image: '../../../assets/img/client-card/red-grocer-200-27e6.webp',
    hrefName: 'Red Grocer',
    ceoName: 'CEO',
    description: "SoftLab IT's custom ERP solution revolutionized our industry-specific operations, optimizing processes, and enhancing productivity across our organization.",
    rateNum: 5.0
  };

  clientsCard: ClientCard[] = [
    {
      image: '../../../assets/img/client-card/red-grocer-200-27e6.webp',
      hrefName: 'Red Grocer',
      ceoName: 'CEO',
      description: "SoftLab IT's custom ERP solution revolutionized our industry-specific operations, optimizing processes, and enhancing productivity across our organization.",
      rateNum: 5.0
    },
    {
      image: '../../../assets/img/client-card/rajarhat-200-9ce0.webp',
      hrefName: 'Rajar Hat',
      ceoName: 'CEO',
      description: "SoftLab IT's custom ERP solution revolutionized our industry-specific operations, optimizing processes, and enhancing productivity across our organization.",
      rateNum: 5.0
    },
    {
      image: '../../../assets/img/client-card/esquire-200-76bb.webp',
      hrefName: 'Esquire',
      ceoName: 'MD',
      description: "SoftLab IT's custom ERP solution revolutionized our industry-specific operations, optimizing processes, and enhancing productivity across our organization.",
      rateNum: 5.0
    }
  ];

  recognition: Recognition = {
    countNum: '350',
    countName: 'Projects'
  };

  recognitions: Recognition[] = [
    {
      countNum: '350+',
      countName: 'Projects'
    },
    {
      countNum: '50+',
      countName: 'Professional developers'
    },
    {
      countNum: '07+',
      countName: 'Years of experience'
    },
    {
      countNum: '750+',
      countName: 'Esteemed clients'
    }
  ];

  award: Awards = {
    image: '../../assets/img/award/good-firms-a2d6.svg'
  };

  awards: Awards[] = [
    {
      image: '../../assets/img/award/good-firms-a2d6.svg'
    },
    {
      image: '../../assets/img/award/outsourcing-companies-ebcd.svg'
    },
    {
      image: '../../assets/img/award/upwork-logo-9a10d.svg'
    },
    {
      image: '../../assets/img/award/you-team-logo-cad6.webp'
    },
    {
      image: '../../assets/img/award/logo-clutch-df7b.webp'
    }
  ]

  hide = true;


};
