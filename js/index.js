
import * as functions from './functions.js';

const containerUsers = document.querySelector('.js-container-users');
const widthContainerUsers = functions.getElementWidth(containerUsers);

const arrowPrev = document.querySelector('.js-arrow-prev')
.addEventListener('click', prev);

const arrowNext = document.querySelector('.js-arrow-next')
.addEventListener('click', next);


// setados em createUserFields()
const gapBetweenUsers = 30; // px
let firstUserField;
let marginLeft = 0;
let maxMarginLeft;

function prev() {

    marginLeft != 0 
    ? marginLeft -= widthContainerUsers + gapBetweenUsers
    : marginLeft = maxMarginLeft

    firstUserField.style.marginLeft = '-' + marginLeft + 'px';
}


function next() {
    marginLeft != maxMarginLeft
        ? marginLeft += widthContainerUsers + gapBetweenUsers
        : marginLeft = 0
        
    firstUserField.style.marginLeft = '-' + marginLeft + 'px';
}


async function createUserFields() {

    const userData = await functions.userDataRequest();
    const templateUserField = document.querySelector('.js-user-field');
    
    userData.forEach( (data, index) => {
        const user = functions.createUserClone(templateUserField);
        functions.setUserData(user, data);
        functions.addElement(user, templateUserField.parentNode)
    });

    firstUserField = functions.getFirstUserField();
    maxMarginLeft = functions.getMaxMarginLeft(widthContainerUsers, gapBetweenUsers);
}


window.onload = async function() {
    createUserFields();
};