export interface PracticasResponseInterface {
    VINP_ID:              number;
    EST_CEDULA:           string;
    VINP_FECHA_INICIO:    Date;
    VINP_FECHA_FIN:       Date;
    VINP_HORAS_PRACTICAS: string;
    VINP_CAMPO_ESP:       string;
    VINP_CAMPO_DET:       string;
    DOC_CEDULA:           string;
    VINP_LINK_EVIDENCIA:  string;
    SEDE_ID:              number;
    VINP_ESTADO:          number;
    tipo:                 Tipo;
    especificacion:       Especificacion;
    empresa:              Empresa;
}

export interface Empresa {
    VINE_NOMBRE: string;
}

export interface Especificacion {
    VINESP_NOMBRE: string;
}

export interface Tipo {
    VINPT_NOMBRE: string;
}
