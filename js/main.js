document.addEventListener('DOMContentLoaded', function () {
  const container = document.querySelector('.container');
  const fragment = document.createDocumentFragment();

  fetch('/JSON/image.json')
    .then((response) => {
      return response.json();
    })
    .then((jsonData) => {
      jsonData.forEach((v, i, array) => {
        const item = document.createElement('div');
        item.className = 'item';
        const img = document.createElement('img');
        img.src = v['path'];
        fragment.appendChild(item);
        item.appendChild(img);
      });
      container.appendChild(fragment);
    });
});
