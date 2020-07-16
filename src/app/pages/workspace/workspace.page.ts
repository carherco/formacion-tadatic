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
      datoEmitidoPorElObservable => {
        this.workspaceData = datoEmitidoPorElObservable;
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
    // this.confUsuarioLayer2Selectable = ;
    // this.confUsuarioLayer2Show = ;
    // this.confUsuarioLayer2NumFields = ;
  }

  mostrar() {
    const layer = this.layer;
    const name = this.name;

    //           this.workspaceData.data[0].layers[2].name;

    const layerElegida = this.workspaceData.data[0].layers[layer];
    if (layerElegida) {
      this.value = layerElegida[name];
    } else {
      this.value = 'No existe la capa ' + layer;
    }

  }

  find() {
    const layers = this.workspaceData.data[0].layers;
    const layerWithNamePortales: ILayer = layers.find( layer => layer.name === 'Portales' );
    this.descriptionOfLayerWhoseNameIsPortales = layerWithNamePortales.description;

    console.log(this.descriptionOfLayerWhoseNameIsPortales);
  }

  filter() {
    const layers = this.workspaceData.data[0].layers;
    const layersConTypeVectorYConIdMenorDe30 = layers.filter( layer => layer.type === 'VECTOR' && layer.id < 30);
    console.log(layersConTypeVectorYConIdMenorDe30);

    // const layersConTypeVectorYConIdMenorDe30: ILayer[] = layers.filter( layer => layer.type === 'VECTOR').filter( layer => layer.id < 30);
  }

  map() {
    const layers = this.workspaceData.data[0].layers;
    const layersAnterior = layers.filter( layer => layer.type === 'VECTOR' && layer.id < 30);
    
    const layersWithNumFields = layersAnterior.map( layer => {
      //console.log(layer.id);
      const objeto = {
        id: layer.id,
        type: layer.type,
        name: layer.alias,
        numFileds: layer.fields.length
      };
      return objeto;
    } );

    console.log(layersWithNumFields);

    // {
    //   id: id de la layer
    //   type: type de la layer
    //   name: el alias de la layer
    //   numFields: número de fields
    // }

  }

}
