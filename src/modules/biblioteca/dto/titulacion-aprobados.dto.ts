export interface ResponseAprobados{
    aprobados:   Aprobado[];
    dominio:     string;
    descripcion: string;
}

export interface Aprobado {
    TITU_ID:                     number;
    TITU_CEDULA:                 string;
    TITU_NOMBRES:                string;
    CAR_NOMBRE:                  string;
    TITU_FECHA_DEF:              string;
    MODT_NOMBRE:                 string;
    TITU_TITULO:                 string;
    TITU_SIMILITUD_INF:          string;
    TITU_BIBLIOTECA_SENESCYT:    string;
    TITU_BIBLIOTECA_PDF:         string;
    TITU_BIBLIOTECA_DECLARACION: string;
}
