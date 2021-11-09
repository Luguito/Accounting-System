import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, Injector } from '@angular/core';
import { CompanyComponent } from '../company/company.component';

@Component({
  selector: 'app-complete-registry',
  templateUrl: './complete-registry.component.html',
  styleUrls: ['./complete-registry.component.scss']
})
export class CompleteRegistryComponent implements OnInit {
  @ViewChild('body', { read: ViewContainerRef, static: true }) body: ViewContainerRef;
  constructor(private cfr: ComponentFactoryResolver, private injector: Injector) { }

  ngOnInit(): void {
    let component = this.cfr.resolveComponentFactory(CompanyComponent)

    this.body.createComponent(component)
  }

}
