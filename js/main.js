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

  // コンテンツを新しく生成する
  const createItems = function (val) {
    const item = document.createElement('div');
    item.className = 'item';
    const img = document.createElement('img');
    img.src = val['path'];
    fragment.appendChild(item);
    item.appendChild(img);
  };

  // すべてのコンテンツを表示する
  const viewAllItems = function () {
    removeItems();
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
  };

  // コンテンツの更新(削除と追加)
  const updateItem = function (name) {
    removeItems();

    fetch(JSONImgPath)
      .then((response) => {
        return response.json();
      })
      .then((jsonData) => {
        const cornArray = jsonData.filter((val) => {
          return val['type'] === `${name}`;
        });
        cornArray.forEach((val) => {
          createItems(val);
        });
        container.appendChild(fragment);
      });
  };

  // 最初の読み込み時はすべての画像表示
  viewAllItems();

  btnAll.addEventListener('click', function () {
    viewAllItems();
  });

  btnCorn.addEventListener('click', function () {
    updateItem('corn');
  });

  btnCucumber.addEventListener('click', function () {
    updateItem('cucumber');
  });

  btnTomato.addEventListener('click', function () {
    updateItem('tomato');
  });

  btnEggplant.addEventListener('click', function () {
    updateItem('eggplant');
  });

  btnGreenpepper.addEventListener('click', function () {
    updateItem('greenpepper');
  });
});
