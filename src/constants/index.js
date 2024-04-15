const DropdownLink = {

    text: "",
    href: "",
    create: function(new_text, new_href){
        const newDropdownLink = Object.create(this);
        newDropdownLink.text = new_text;
        newDropdownLink.href = new_href;
        return newDropdownLink;
    }

}

const NavbarLink = {

    text: "",
    dropdown_links: [],
    href: "",
    create: function (text, dropdown_links, href=""){
        const newNavbarLink = Object.create(this);
        newNavbarLink.text = text;
        newNavbarLink.dropdown_links = dropdown_links;
        newNavbarLink.href = href;
        return newNavbarLink;
    }

}

let links = [
    NavbarLink.create("Acerca de nosotros", [DropdownLink.create("Nuestras sedes", "index.html#contact"), DropdownLink.create("Nuestros profesionales", "professionals.html")], "about.html"),
    NavbarLink.create("Servicios", [DropdownLink.create("Procedimiento", "#"), DropdownLink.create("Nuestra práctica", "#")], "index.html#services"),
    NavbarLink.create("Contáctenos", [], "contact.html"),
    NavbarLink.create("Preguntas frecuentes", [], "index.html#faq"),
]

let studies_link = "http://201.192.249.18:8083"

export {links, studies_link};