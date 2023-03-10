
export function getElementWidth( element ) {
    return element.getBoundingClientRect().width;
}


export function userDataRequest() {
   const data = [
        {
            "name": "Alisson Souza",
            "profession": "Desenvolvedora Web",
            "image_perfil": "Images/Alisson-Souza.jpg",
            "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste dicta est aliquid"
        },
        {
            "name": "Brenda Miriam",
            "profession": "Educadora",
            "image_perfil": "Images/Brenda-Miriam.jpg",
            "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste dicta est aliquid"
        },
        {
            "name": "Carla Leite",
            "profession": "Analista de Dados",
            "image_perfil": "Images/Carla-Leite.jpg",
            "review": "doloribus odit aperiam ratione soluta aut laborum impedit ipsam eligendi necessitatibus aliquam possimus nostrum commodi officia nulla."
        },
        {
            "name": "Dani Souza",
            "profession": "Web Designer",
            "image_perfil": "Images/Dani-Souza.jpg",
            "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste dicta est aliquid"
        },
        {
            "name": "Gabe José",
            "profession": "Gastrônomo",
            "image_perfil": "Images/Gabe-Jose.jpg",
            "review": "doloribus odit aperiam ratione soluta aut laborum impedit ipsam eligendi necessitatibus aliquam possimus nostrum commodi officia nulla."
        },
        {
            "name": "Gabriela Ferreira",
            "profession": "Empresária",
            "image_perfil": "Images/Gabriela-Ferreira.jpg",
            "review": "doloribus odit aperiam ratione soluta aut laborum impedit ipsam eligendi necessitatibus aliquam possimus nostrum commodi officia nulla."
        },
        {
            "name": "Luana Dantas",
            "profession": "Game Designer",
            "image_perfil": "Images/Luana-Dantas.jpg",
            "review": "doloribus odit aperiam ratione soluta aut laborum impedit ipsam eligendi necessitatibus aliquam possimus nostrum commodi officia nulla."
        },
        {
            "name": "Marcos Vieira",
            "profession": "Barbeador",
            "image_perfil": "Images/Marcos-Vieira.jpg",
            "review": "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat iste dicta est aliquid."
        },
        {
            "name": "Mateus Basto",
            "profession": "Agricultor",
            "image_perfil": "Images/Mateus-Basto.jpg",
            "review": "Lorem ipsum dolor sit amet consectetur necessitatibus aliquam possimus nostrum commodi officia nulla."
        },
        {
            "name": "Pedro Marcos",
            "profession": "Dev Back-end",
            "image_perfil": "Images/Pedro-Marcos.jpg",
            "review": "sicing elit. Repellat iste dicta est aliquid, doloribus odit aperiam ratione soluta aut laborum impedit tibus aliquam possimus nostrum commodi officia nulla."
        },
        {
            "name": "Suzy Santana",
            "profession": "Artista Autônoma",
            "image_perfil": "Images/Suzy-Santana.jpg",
            "review": "Lorem ipsipisicing elit. Repellat iste dicta est aliquid, doloribus odit aperiam ratione soluta autssimus nostrum commodi officia nulla."
        }
    ]
    return data;
}


export function createUserClone( template ) {
    const clone = template.cloneNode(true);
    clone.classList.remove('c-user-field--template');
    return clone;
}


export function setUserData( user, data ) {
    user.querySelector('.js-image').src = data.image_perfil;
    user.querySelector('.js-name').textContent = data.name;
    user.querySelector('.js-profession').textContent = data.profession;
    user.querySelector('.js-review').textContent = data.review;
}


export function addElement( element, parentElement ) {
    parentElement.appendChild(element);
}


export function getFirstUserField() {
    const allUserFields = document.querySelectorAll('.js-user-field');
    return allUserFields[1];
}


export function getMaxMarginLeft( widthContainer, gap ) {

    const lenghtUserFields = document.querySelectorAll('.js-user-field').length - 1;

    const slidesBeyond = Math.floor( lenghtUserFields / 3 );
    const maxMarginLeft = ( widthContainer * slidesBeyond ) + ( gap * slidesBeyond );
    
    return maxMarginLeft;
}