import product from './product_data.js';

document.addEventListener('DOMContentLoaded', () => {
  const stars = document.querySelectorAll('.js-rating a');
  const rateResult = {
    id: undefined,
    user_stars: undefined
  };
  let classNameGetted = false;
  let elementsClasses = [];
  let score;

  function productGetClass (e) {
    const elements = [...e.currentTarget.parentElement.children];
    elements.forEach(element => {
      const className = element.className;
      elementsClasses.push(className);
    });
  }

  function setHoverClass (e) {
    let nextSibling = e.currentTarget.nextElementSibling;
    let target = e.currentTarget;

    while (nextSibling) {
      if (nextSibling.classList.contains('full')) {
        nextSibling.classList.remove('full');
      }
      nextSibling = nextSibling.nextElementSibling;
    }

    score = 1;
    target.classList.remove('full');
    target.classList.add('hover');

    while (target.previousElementSibling) {
      score += 1;
      target = target.previousElementSibling;
      target.classList.remove('full');
      target.classList.add('hover');
    }
  }

  function resetClass (e, elementsClasses) {
    const elements = [...e.currentTarget.parentElement.children];
    elements.map((element, i) => (element.className = elementsClasses[i]));
  }

  function rateProduct (e) {
    const parent = e.currentTarget.parentElement.parentElement.parentElement;
    const productId = parent.id.slice(12);

    rateResult.id = productId - 1;
    rateResult.user_stars = score;
    product[rateResult.id].user_stars = rateResult.user_stars;
  }

  function setUserRatingClass (e) {
    let nextSibling = e.currentTarget.nextElementSibling;
    let target = e.currentTarget;

    while (nextSibling) {
      nextSibling.className = '';
      nextSibling = nextSibling.nextElementSibling;
    }

    target.className = 'rated';

    while (target.previousElementSibling) {
      target = target.previousElementSibling;
      target.className = 'rated';
    }
  }

  function handleHoverIn (e) {
    e.preventDefault();
    e.stopPropagation();

    if (!classNameGetted) {
      productGetClass(e);
      classNameGetted = true;
    }

    setHoverClass(e);
  }

  function handleHoverOut (e) {
    e.preventDefault();
    e.stopPropagation();

    const elements = [...e.currentTarget.parentElement.children];
    let ratedFlag;

    elements.forEach(element => {
      if (element.classList.contains('rated')) {
        ratedFlag = true;
      }
    });

    if (ratedFlag) {
      elements.forEach(element => element.classList.remove('hover'));
    } else {
      resetClass(e, elementsClasses);
      elementsClasses = [];
      classNameGetted = false;
    }
  }

  function handleClick (e) {
    e.preventDefault();
    e.stopPropagation();

    rateProduct(e);
    setUserRatingClass(e);
  }

  stars.forEach(star => {
    star.addEventListener('mouseover', handleHoverIn);

    star.addEventListener('mouseout', handleHoverOut);

    star.addEventListener('click', handleClick);
  });
});
