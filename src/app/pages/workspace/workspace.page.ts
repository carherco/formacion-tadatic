import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from 'src/app/services/workspace.service';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.page.html',
  styleUrls: ['./workspace.page.scss'],
})
export class WorkspacePage implements OnInit {

  workspaceData;

  confUsuarioLayer2Name;
  confUsuarioLayer5Name;
  confUsuarioLayer2Description;
  confUsuarioLayer2Selectable;
  confUsuarioLayer2Show;
  confUsuarioLayer2NumFields;

  layer: number = 0;
  name: string = '';
  value: any;

  descriptionOfLayerWhoseNameIsPortales;

  constructor(private workspaceService: WorkspaceService) { 
    this.workspaceService.getMockData().subscribe(
      data => {
        this.workspaceData = data;
        this.processData();
      }
    );
  }

  ngOnInit() {
  }

  processData() {
    console.log(this.workspaceData);

    // this.confUsuarioLayer2Name = ;
    // this.confUsuarioLayer5Name = ;
    // this.confUsuarioLayer2Description = ;
    // this.confUsuarioLayer2Selectable = ;
    // this.confUsuarioLayer2Show = ;
    // this.confUsuarioLayer2NumFields = ;
  }

  mostrar() {
    const layer = this.layer;
    const name = this.name;

    // this.value = ;
  }

  find() {
    // this.descriptionOfLayerWhoseNameIsPortales = ;
    console.log(this.descriptionOfLayerWhoseNameIsPortales);
  }

  filter() {
    // const layersConTypeVectorYConIdMenorDe30 = ;
    // console.log(layersConTypeVectorYConIdMenorDe30);
  }

  map() {
    // const layersWithNumFields = ;
    // console.log(layersWithNumFields);
  }

}
