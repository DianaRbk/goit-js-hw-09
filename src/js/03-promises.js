import Notiflix from 'notiflix';

const refs = {
  form: document.querySelector('form'),
  delayEl: document.querySelector('input[name="delay"]'),
  stepEl: document.querySelector('input[name="step"]'),
  amountEl: document.querySelector('input[name="amount"]'),
};
const { form, delayEl, stepEl, amountEl } = refs;

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}

form.addEventListener('submit', e => {
  e.preventDefault();
  let delay = Number(delayEl.value);
  const step = Number(stepEl.value);
  const amount = Number(amountEl.value);

  const promises = [];

  for (let i = 0; i < amount; i++) {
    const position = i + 1;
    const promise = createPromise(position, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`Fulfilled promise ${position} in ${delay}ms`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.failure(`Rejected promise ${position} in ${delay}ms`);
      });
    promises.push(promise);
    delay += step;
  }

  Promise.all(promises)
    .then(() => {
      Notiflix.Notify.info('All promises have been fulfilled');
    })
    .catch(() => {
      Notiflix.Notify.info('At least one promise has been rejected');
    });
});

