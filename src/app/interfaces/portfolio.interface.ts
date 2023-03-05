export interface PortfolioResponse {
    id_portfolio:       number;
    full_name:          string;
    informacion_titulo: string;
    saludo_titulo:      string;
    saludo_descripcion: string;
    github_url:         string;
    cv_url:             string;
    foto_perfil:        string;
    proyectos:          Proyecto[];
    tecnologias:        Tecnologia[];
    estudios:           Estudio[];
    experienciasLaborales: ExperienciaLaboral[];
}

export interface Proyecto {
    id_proyecto:          number;
    imgURL_proyecto:      string;
    titulo_proyecto:      string;
    descripcion_proyecto: string;
    github_proyecto?:      string;
    url_proyecto?:         string;
    tecnologias:          Tecnologia[];
}

export interface Tecnologia {
    id_tecnologia:     number;
    nombre_tecnologia: string;
    svg_url:           string;
    color:             string;
    porcentaje:        number;
}

export interface AuthResponse{
    ok: boolean;
    uid?: string;
    name?: string;
    token?: string;
    msg?: string;
}

export interface InfoPortfolio {
    id_portfolio:       number;
    informacion_titulo: string;
    saludo_titulo:      string;
    saludo_descripcion: string;
    github_url:         string;
    cv_url:             string;
    foto_perfil:        string;
}

export interface Contacto {
    id_Contacto?:       number;
    nombre_completo:    string;
    email:              string;
    mensaje:            string;
}

export interface MensajeResponse {
    results : Contacto[];
}

export interface Estudio {
    id_estudio?:       number;
    es_carrera:       boolean | number;
    nombre_estudio:   string;
    finalizado:       boolean | number;
    entidad_educador: string;
    img_entidad:      string;
    titulo?:           string;
    descripcion:      string;
    titulo_Url?:       string;
}

export interface ExperienciaLaboral {
    id_experiencia_laboral?:         number;
    empresa:                string;
    puesto:                 string;
    descripcion:            string;
    desde:                  Date;
    hasta?:                  Date;
    }





