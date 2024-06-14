export interface MenuRutasResponseDto {
    success: boolean;
    rutas:   RutaInterface[];
}

export interface RutaInterface {
    id:     number;
    nombre: string;
    ruta:   string;
    padre:  number;
    rutasHijas?: RutaInterface[];
}
