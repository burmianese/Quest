document.addEventListener('DOMContentLoaded', function () {
  const moreInfoButton = document.getElementById('more-info-button');
  const moreInfoPopup = document.getElementById('more-info-popup');

  moreInfoButton.addEventListener('click', function () {
    moreInfoPopup.style.display = moreInfoPopup.style.display === 'block' ? 'none' : 'block';
  });

  window.addEventListener('click', function (event) {
    if (!moreInfoButton.contains(event.target)) {
      moreInfoPopup.style.display = 'none';
    }
  });
});
