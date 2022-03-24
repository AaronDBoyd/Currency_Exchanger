import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/styles.css';
import ExchangeService from './services/exchange-service.js';

function clearFields() {
  $('#amount').val("");
  $('#currency').val("");
  $('.showRates').text("");
  $('.showErrors').text("");
}

function getElements(response) {
  if(response) {
    const conversion = (response.conversion_rate * dollars);
    
    $('.showRates').append(`Your chosen amount of USD is worth ${conversion} in ${dollars}.`);
  } else {
    $('.showErrors').text(`There was an error: ${response}`);
  }
}

$(document).ready(function() {
  $('#submitExchange').click(function() {
    const amount = $('#amount').val();
    const currency = $('#currency').val();
    clearFields();
    ExchangeService.getCurrency(currency, amount)
    .then(function(response) {
      getElements(response);
    });
  });
});


