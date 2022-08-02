document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');
  const btnAll = document.querySelector('.all');
  const btnCorn = document.querySelector('.corn');
  const btnCucumber = document.querySelector('.cucumber');
  const btnTomato = document.querySelector('.tomato');
  const btnEggplant = document.querySelector('.eggplant');
  const btnGreenpepper = document.querySelector('.greenpepper');

  const fragment = document.createDocumentFragment();

  const JSONImgPath = '/JSON/image.json';

  fetch(JSONImgPath)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      jsonData.forEach((val, i, array) => {
        const item = document.createElement('div');
        item.className = 'item';
        const img = document.createElement('img');
        img.src = val['path'];
        fragment.appendChild(item);
        item.appendChild(img);
      });
      container.appendChild(fragment);
    });

  btnCorn.addEventListener('click', function () {
    // item要素を全て消す
    const items = document.querySelectorAll('.item');
    items.forEach((val) => {
      val.remove();
    });

    fetch(JSONImgPath)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        const cornArray = jsonData.filter((val, i, array) => {
          return val['type'] === 'corn';
        });
        console.log(cornArray);
        cornArray.forEach((val, i, array) => {
          console.log(val);
          const item = document.createElement('div');
          item.className = 'item';
          const img = document.createElement('img');
          img.src = val['path'];
          fragment.appendChild(item);
          item.appendChild(img);
        });
        container.appendChild(fragment);
      });
  });
});
