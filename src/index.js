import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/exchange-service.js';

function clearFields() {
  $('#amount').val("");
  $('.showRates').text("");
  $('.showErrors').text("");
}

function getElements(response) {
  if(response) {
    const conversion = (response.conversion_result);
    const dollars = (response.target_code);
    const base = (response.base_code);
    $('.showRates').append(`Your chosen amount of ${base} is worth ${conversion} in ${dollars}.`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  $('#submitExchange').click(function() {
    const amount = $('#amount').val();
    const currencyFrom = $('#currencyFrom').val();
    const currencyTo = $('#currencyTo').val();
    clearFields();
    ExchangeService.getCurrency(currencyFrom, currencyTo, amount)
    .then(function(response) {
      getElements(response);
    });
  });
});


