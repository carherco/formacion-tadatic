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

    this.confUsuarioLayer2Name = this.workspaceData.data[0].layers[2].name;
    this.confUsuarioLayer5Name = this.workspaceData.data[0].layers[5].name;
    this.confUsuarioLayer2Description = this.workspaceData.data[0].layers[2].description;
    this.confUsuarioLayer2Selectable = this.workspaceData.data[0].layers[2].selectable;
    this.confUsuarioLayer2Show = this.workspaceData.data[0].layers[2].show;
    this.confUsuarioLayer2NumFields = this.workspaceData.data[0].layers[2].fields.length;
  }

  mostrar() {
    const layer = this.layer;
    const name = this.name;

    this.value = this.workspaceData.data[0].layers[layer][name];
  }

  find() {
    this.descriptionOfLayerWhoseNameIsPortales = this.workspaceData.data[0].layers.find( item => item.name === 'Portales' ).description;
    console.log(this.descriptionOfLayerWhoseNameIsPortales);
  }

  filter() {
    const layersConTypeVectorYConIdMenorDe30 = this.workspaceData.data[0].layers.filter( item => item.type === 'VECTOR' && item.id < 30);
    console.log(layersConTypeVectorYConIdMenorDe30);
  }

  map() {
    const layersConTypeVectorYConIdMenorDe30 = this.workspaceData.data[0].layers.filter( item => item.type === 'VECTOR' && item.id < 30);
    const layersWithNumFields = layersConTypeVectorYConIdMenorDe30.map( item => {
      return {
        id: item.id,
        type: item.type,
        name: item.alias,
        numFields: item.length
      }
    });
    console.log(layersWithNumFields);
  }

  // Map, Filter y Find

}
