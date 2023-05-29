const getData = () => {

    const myForm = document.forms['myForm'];

    const name = myForm['name'].value;
    const email = myForm['email'].value;
    const number = myForm['m-number'].value;

    const confirmBox = document.getElementById('confirm-box')
    const textContent = document.getElementById('text-content')

    const confirm = document.getElementById('confirm');

    let part = /[A-Za-z]/g;

    if (name.length == 0) {
          confirmBox.style = 'display:block;';
          confirmBox.style = 'display:grid;';
          textContent.innerText = 'Name Field Is Empty!';
          return false;
    }
    if (email.length == 0) {
          confirmBox.style = 'display:block;';
          confirmBox.style = 'display:grid;';
          textContent.innerText = 'Email Field Is Empty!';
          return false;
    } else if (email.indexOf('@') <= 0) {
          confirmBox.style = 'display:block;';
          confirmBox.style = 'display:grid;';
          textContent.innerText = 'Email Is Invalid!';
          return false;
    }

    if (number.length == 0) {
          confirmBox.style = 'display:block;';
          confirmBox.style = 'display:grid;';
          textContent.innerText = 'Number Field Is Empty';
          return false;
    }else if(number.match(part)){
          confirmBox.style = 'display:block;';
          confirmBox.style = 'display:grid;';
          textContent.innerText = 'Only Digits';
          return false;
    }


}

const confirmBox2 = document.getElementById('confirm-box');

document.getElementById('confirm').addEventListener('click', () => {
    confirmBox2.style = 'display:none;';
});
