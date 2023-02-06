import Works from './works.js';
import popup from './popup.js';

const createPopup = () => {
  const storybutton = document.querySelectorAll('.seepr-button');

  for (let i = 0; i < storybutton.length; i += 1) {
    storybutton[i].addEventListener('click', () => {
      popup(Works[i].title, Works[i].imageUrl, Works[i].description,
        Works[i].technologies, Works[i].liveVersion, Works[i].source, i);
      const popupcontainer = document.querySelector('.mobile-popup-container');
      popupcontainer.classList.remove('display-none');
      popupcontainer.classList.add('display-flex');
      document.body.style.overflow = 'hidden';

      setTimeout(() => {
        const visibility = popupcontainer.getAttribute('data-visible');
        if (visibility === 'false') {
          popupcontainer.setAttribute('data-visible', 'true');
        }
      }, 50);
    });
  }
};

export default createPopup;
