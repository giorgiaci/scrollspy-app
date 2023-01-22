import { ChangeDetectorRef, Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-scrollspy',
  templateUrl: './scrollspy.component.html',
  styleUrls: ['./scrollspy.component.scss']
})
export class ScrollspyComponent {
  constructor( private cd: ChangeDetectorRef){ }

  @ViewChild('sectionContainer') sectionContainer: any; 
  currentSection: any;
  sectionScrolled:any;
  
  onSectionChange(section: any) {   
    this.sectionScrolled = section;
    this.currentSection = section.id;
  }

  scrollTo(section: any) {    
    section?.scrollIntoView();
  }
  
  ngAfterViewInit(){    
    this.currentSection = this.sectionContainer.nativeElement.children[0].id
    this.cd.detectChanges()
  }
}
