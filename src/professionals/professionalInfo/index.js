import { Faylan, Enrique, Ericka, Ismaray, Julissa, Luis, Mariela, Minor, Santiago, Wendy} from "../professionalImages";

const Professional = {

    imgSrc: {},
    name: "",
    description: "",
    create: function(newImgSrc, newName, newDescription){
        const newProfessional = Object.create(this);
        newProfessional.imgSrc = newImgSrc;
        newProfessional.name = newName;
        newProfessional.description = newDescription;
        return newProfessional;
    }
}

let medicEnrique = Professional.create(
    Enrique,
    "Enrique Espinoza",
    `Con una amplia experiencia en el diagnóstico por imágenes de Resonancia Magnética, el Dr. Espinoza obtuvo su Licenciatura como Médico y Cirujano en la Universidad de Cartagena, Colombia, en 1983 y posteriormente, entre 1997 y 2001 se especializó en Radiología e Imágenes Médicas en la Universidad de Costa Rica.

    También ha participado en numerosos cursos y seminarios en Colombia, México y Costa Rica. Ha trabajado en nuestras oficinas como radiólogo y especialista en Resonancia Magnética desde el año 2002. El Dr. Espinoza es profesor titular de radiología en varias universidades locales.`
)

let medicFaylan = Professional.create(
    Faylan, 
    "Faylan Esquivel Esquivel", 
    `El Dr. Faylan Esquivel se graduó de la Universidad de Costa Rica como Doctor en Medicina y Cirugía en 1981, y en 1984 como radiólogo y especialista en Imágenes Médicas. También asistió a la Universidad de Michigan, EE.UU., donde obtuvo su título de Especialista en Radiología Musculoesquelética.
    
    Ha participado en numerosos cursos en relación con su campo principal de estudios y es profesor activo en varias universidades de prestigio. Cuenta con más de quince años de experiencia en el campo de la Resonancia Magnética.`
)

let medicLuis = Professional.create(
    Luis,
    "Luis Diego Campos",
    `Con una amplia experiencia en el diagnóstico por imágenes de Resonancia Magnética, el Dr. Campos obtuvo su Licenciatura como Médico y Cirujano en la Universidad de Costa Rica, en el 2002 y posteriormente en Junio 2010 recibió la especialidad en Radiología e Imágenes Médicas en la Universidad de Costa Rica.
    
    Realizó el Curso de Alta Especialización en Resonancia Magnética del Sistema Musculoesquelético en la Universidad Nacional Autónoma de México (UNAM) de febrero 2013 a marzo 2014. Trabaja en nuestras oficinas como radiólogo y especialista en Resonancia Magnética desde marzo 2014. También ha participado en numerosos cursos y seminarios en México, Honduras y Costa Rica.`
)

let technicianSantiago = Professional.create(
    Santiago,
    "Santiago Lopez Gatjens",
    `Santiago López ha trabajado con sistemas de resonancia magnética y Tomografía axial computarizada desde principios de los 90. Es Licenciado en Imagenología Diagnóstica. También ha asistido a cursos en la Universidad de Medicina Centro de Imagen (Un proveedor de servicios de resonancia magnética) en Lancaster, California y a las ciudades costeras de Oxnard California en  Imaging Center.

    Debido a su exaustiva dedicación a las imágenes médicas se le otorgó el honor y título como el primer Presidente de la Asociación Costarricense de Técnicos en Imágenes Médicas y también de la Asociación Latinoamerica de Técnicos Radiólogos, ALATRA.  Dispone también de experiencia en el manejo de mamógrafos y equipos de rayos X en General.`
)

let technicianMinor = Professional.create(
    Minor,
    "Minor Escalante",
    `Minor Escalante obtuvo el título de Técnico en Imágenes Médica de la Universidad de Costa Rica y posteriormente se especializó en resonancia magnética en la Universidad de Medicina Centro de Imagen en Lancaster, California.  También fue instructor de técnicos radiólogos en la Universidad de Costa Rica.
    
    Tiene la distinción de ser el primer técnico especializado en resonancia magnética en Costa Rica. Dispone también de experiencia en el manejo de mamógrafos y equipos de rayos X en General.`
)

let technicianEricka = Professional.create(
    Ericka, 
    "Ericka Céspedes Lopez",
    `Ericka Céspedes es graduada como técnica en Imagenología Diagnóstica y tiene amplia experiencia en el campo de la resonancia magnética desde el año 2002. Además es Técnica en Radioterapia del Hospital México (Seguridad social de Costa Rica) desde hace muchos años. Como técnico en radioterapia ha trabajado en prestigiosos centros de tratamiento del cáncer en San José, Costa Rica. Ha participado en números cursos de radiología, con énfasis en imágenes médicas de resonancia magnética y radioterapia, en nuestro país y en el extranjero.`
)

let technicianMariela = Professional.create(
    Mariela,
    "Mariela Ramirez Mata",
    `Mariela Ramirez Mata recibió el título en Imagenología Diagnóstica desde el año 2015 y desde esa fecha se mantiene laborando para nuestros Centros de Diagnóstico de Resonancia Magnética.

    Se encuentra incorporada al Colegio de Medicos y Cirujanos.
    
    Dispone también de experiencia en el manejo de mamógrafos y equipos de rayos X en General.`
)

let technicianIsmaray = Professional.create(
    Ismaray,
    "Ismaray Porras Alvarez",
    `Ismaray recibió el título en Imagenología Diagnóstica desde el año 2002 y desde el año 2008 se mantiene laborando para nuestros Centros de Diagnóstico de Resonancia Magnética. También, desde el 2011, cuenta con el título de Licenciada en Enfermería de la Universidad de las Ciencias y las Artes. 
    
    Dispone también de experiencia en el manejo de mamógrafos y equipos de rayos X en General.`
)

let technicianJulissa = Professional.create(
    Julissa,
    "Julissa Arce Soto",
    `Julissa recibió el título en Bachiller Imagenología Diagnóstica desde el año 2012 en la Universidad de Costa Rica y desde esa fecha se mantiene laborando para nuestros Centros de Diagnóstico de Resonancia Magnética.

    Dispone también de experiencia en el manejo de mamógrafos y equipos de rayos X en General.`
)

let nurseWendy = Professional.create(
    Wendy,
    "Wendy Gonzalez",
    `Wendy Gonzalez dispone de una licenciatura en Enfermería,  graduada  desde el 16 de diciembre del 2010.`
)

console.log(medicEnrique);

let medics = [medicEnrique, medicFaylan, medicLuis]
let technicians = [technicianSantiago, technicianMinor, technicianEricka, technicianMariela, technicianIsmaray, technicianJulissa]
let nurses = [nurseWendy]

export {medics, technicians, nurses};