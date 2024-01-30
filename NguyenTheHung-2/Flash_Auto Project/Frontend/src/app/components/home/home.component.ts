import { Component } from '@angular/core';
import { RouterModule, Router, NavigationEnd  } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterModule, CarouselModule, CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {  
  constructor(private router: Router) { } 

  product: any[] = new Array(3).fill({id: -1, src: '', title: '', subtitle: ''});

  responsiveOptions: any[] | undefined;
      
  ngOnInit() { 
      this.router.events.subscribe((event) => { 
          if (!(event instanceof NavigationEnd)) { 
              return; 
          } 
          window.scrollTo(0, 0) 
      }); 

      this.product[0] = {
        src: 'https://vinfastauto.com/themes/porto/img/homepage-v2/banner/banner-02.webp',
      };
      this.product[1] = {
        src: 'https://vinfastauto.com/themes/porto/img/homepage-v2/banner/banner-01.webp',
      }
      this.product[2] = {
        src: 'https://vinfastauto.com/themes/porto/img/homepage-v2/banner/banner-03.webp',
      }

      this.responsiveOptions = [
        {
            breakpoint: '1199px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '991px',
            numVisible: 1,
            numScroll: 1
        },
        {
            breakpoint: '767px',
            numVisible: 1,
            numScroll: 1
        }
    ];

  } 

  

}
