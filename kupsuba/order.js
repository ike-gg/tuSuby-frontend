let twitchNick = undefined;
let twitchChannel = undefined;
let subTier = undefined;
let subDuration = undefined;
let productId = undefined;

document.querySelector('#submitOrder').addEventListener('click', event => {
  if (event.target.classList.contains('disabled')) {
    alert("Najpierw wypełnij formularz!");
  } else {
    let object = {
      user: twitchNick,
      channel: twitchChannel,
      product: productId
    }
    const options = {
      method: 'POST',
      headers: {
          'Content-Type': "application/json"
      },
      body: JSON.stringify(object)
    };
    // const response = await fetch('/:)', options);
    const data = await response.json();
    console.log(data);
  }
})

let updatePrices = () => {
  let priceElement = document.querySelector(`#price`);
    if (subTier == 1 ) {
      if (subDuration == 1) {
        priceElement.innerHTML = "7.50 PLN";
        productId = 1;
      } else if (subDuration == 3) {
        priceElement.innerHTML = "22 PLN"
        productId = 2;
      } else if (subDuration == 6) {
        priceElement.innerHTML = "41 PLN"
        productId = 3;
      }
    } else if (subTier == 2 ) {
      if (subDuration == 1) {
        priceElement.innerHTML = "15 PLN"
        productId = 4;
      }
    } else if (subTier == 3 ) {
      if (subDuration == 1) {
        priceElement.innerHTML = "35 PLN"
        productId = 5;
      }
    }
}

let submitDetails = () => {
  if (subTier && subDuration && twitchNick && twitchChannel) {
    updatePrices();
    document.querySelector('#submitOrder').classList.remove('disabled');
  } else if (subTier && subDuration) {
    updatePrices();
  }
}

document.querySelectorAll('input').forEach(input => {
  input.addEventListener('change', () => {
    if (input.dataset.input == "twitchNick") {
      twitchNick = input.value;
    } else if (input.dataset.input == "twitchChannel") {
      twitchChannel = input.value;
    }
    console.log(twitchNick, twitchChannel);
    submitDetails();
  });
});

document.querySelectorAll('.orderButtonRow button').forEach(button => {
  button.addEventListener('click', () => {
    let dataInput = button.parentElement.dataset.input;
    document.querySelectorAll(`div[data-input="${dataInput}"] button`).forEach(buttonInside => {
      buttonInside.classList.remove('activeButtonOrder');
    });
    button.classList.add('activeButtonOrder');
    if (dataInput == "subTier") {
      subTier = button.dataset.value;
      if (subTier == 2 || subTier == 3) {
        document.querySelectorAll('div[data-input="subDuration"] button').forEach(button => {
          button.style.display = "none";
          button.classList.remove('activeButtonOrder');
        })
        document.querySelector('div[data-input="subDuration"] button').style.display = "block";
      } else {
        document.querySelectorAll('div[data-input="subDuration"] button').forEach(button => {
          button.style.display = "block";
          button.classList.remove('activeButtonOrder');
        })
      }
      subDuration = undefined;
    } else if (dataInput == "subDuration") {
      subDuration = button.dataset.value;
    }
    submitDetails();
  })
})