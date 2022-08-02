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

  // コンテンツを取り除く
  const removeItems = function () {
    const items = document.querySelectorAll('.item');
    items.forEach((val) => {
      val.remove();
    });
  };

  // コンテンツを生成する
  const createItems = function (val) {
    const item = document.createElement('div');
    item.className = 'item';
    const img = document.createElement('img');
    img.src = val['path'];
    fragment.appendChild(item);
    item.appendChild(img);
  };

  // 最初の読み込み時はすべての画像表示
  fetch(JSONImgPath)
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      jsonData.forEach((val) => {
        createItems(val);
      });
      container.appendChild(fragment);
    });

  btnCorn.addEventListener('click', function () {
    removeItems();

    fetch(JSONImgPath)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        const cornArray = jsonData.filter((val) => {
          return val['type'] === 'corn';
        });
        cornArray.forEach((val) => {
          createItems(val);
        });
        container.appendChild(fragment);
      });
  });
});
