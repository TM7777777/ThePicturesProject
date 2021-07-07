const button = document.querySelectorAll('.pc');
const list = document.querySelector('.list');
Array.from(button).map((el) => {
  el.onclick = function (e) {
    let ind = +e.target.className.replace('pc', '');
    if (document.getElementsByClassName(`pc ${ind}`)[0].style.width === '100px') {
      Array.from(document.querySelectorAll('.pc')).map((el) => (el.style.width = '100px'));
      document.getElementsByClassName(`pc ${ind}`)[0].style.width = '700px';
    } else {
      document.getElementsByClassName(`pc ${ind}`)[0].style.width = '100px';
    }
  };
});
