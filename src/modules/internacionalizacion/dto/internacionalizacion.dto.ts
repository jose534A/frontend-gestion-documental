

export interface InternacionalizacionDto {
    INTER_ID:                    number;
    SEDE_ID?:                     number;
    SEDE_NOMBRE:                 string;
    ICAR_ID?:                     number;
    ICAR_CODIGO:                 string;
    INTER_CONV_CODIGO:           string;
    INTER_CONV_NOMBRE:           string;
    INTER_CONTRAPARTE:           string;
    PAI_ID?:                      number;
    PAI_PAIS:                    string;
    PTIP_ID?:                     number;
    PTIP_TIPO:                   string;
    INTER_PAPELLIDO:             string;
    INTER_PNOMBRE:               string;
    INTER_ACTIVIDADES:           string;
    INTER_FINICIO?:               Date;
    INTER_FFIN?:                  Date;
    ARE_ID?:                      number;
    ARE_CODIGO:                  string;
    FIN_ID?:                      number;
    FIN_TIPO:                    string;
    INTER_ADOCENCIA:             string;
    INTER_AINVESTIGACION:        string;
    INTER_AVINCULACION:          string;
    INTER_AADMINISTRATIVO:       string;
    INTER_AINTERNACIONALIZACION: string;
    INTER_INDICADOR_1:           string;
    INTER_INDICADOR_2:           string;
    INTER_INDICADOR_3:           string;
    INTER_INDICADOR_4:           string;
    INTER_INDICADOR_5:           string;
    INTER_INDICADOR_6:           string;
    INTER_INDICADOR_7:           string;
    INTER_INDICADOR_8:           string;
    INTER_INDICADOR_9:           string;
    INTER_EVIDENCIA:             string;
}

export const internacionalizacionObjEmpty = {
    INTER_ID: 0,
    SEDE_NOMBRE: '',
    ICAR_CODIGO: '',
    INTER_CONV_CODIGO: '',
    INTER_CONV_NOMBRE: '',
    INTER_CONTRAPARTE: '',
    PAI_PAIS: '',
    PTIP_TIPO: '',
    INTER_PAPELLIDO: '',
    INTER_PNOMBRE: '',
    INTER_ACTIVIDADES: '',
    ARE_CODIGO: '',
    FIN_TIPO: '',
    INTER_ADOCENCIA: '',
    INTER_AINVESTIGACION: '',
    INTER_AVINCULACION: '',
    INTER_AADMINISTRATIVO: '',
    INTER_AINTERNACIONALIZACION: '',
    INTER_EVIDENCIA: '',
    INTER_INDICADOR_1: '',
    INTER_INDICADOR_2: '',
    INTER_INDICADOR_3: '',
    INTER_INDICADOR_4: '',
    INTER_INDICADOR_5: '',
    INTER_INDICADOR_6: '',
    INTER_INDICADOR_7: '',
    INTER_INDICADOR_8: '',
    INTER_INDICADOR_9: ''
  }



export interface CreateInternacionalizacionDto {
    SEDE_ID:                     number;
    ICAR_ID:                     number;
    INTER_CONV_CODIGO:           string;
    INTER_CONV_NOMBRE:           string;
    INTER_CONTRAPARTE:           string;
    PAI_ID:                      number;
    PTIP_ID:                     number;
    INTER_PAPELLIDO:             string;
    INTER_PNOMBRE:               string;
    INTER_ACTIVIDADES:           string;
    INTER_FINICIO:               string;
    INTER_FFIN:                  string;
    ARE_ID:                      number;
    FIN_ID:                      number;
    INTER_ADOCENCIA:             string;
    INTER_AINVESTIGACION:        string;
    INTER_AVINCULACION:          string;
    INTER_AADMINISTRATIVO:       string;
    INTER_AINTERNACIONALIZACION: string;
    INTER_INDICADOR_1:           string;
    INTER_INDICADOR_2:           string;
    INTER_INDICADOR_3:           string;
    INTER_INDICADOR_4:           string;
    INTER_INDICADOR_5:           string;
    INTER_INDICADOR_6:           string;
    INTER_INDICADOR_7:           string;
    INTER_INDICADOR_8:           string;
    INTER_INDICADOR_9:           string;
    INTER_EVIDENCIA:             string;
    INTER_ESTADO:                number;
}

export interface UpdateInternacionalizacionDto extends Partial<CreateInternacionalizacionDto>{}