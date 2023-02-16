
export function getElementWidth( element ) {
    return element.getBoundingClientRect().width;
}


export async function userDataRequest() {
    const response = await fetch("http://127.0.0.1:5500/db.json");
    const data = await response.json();
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