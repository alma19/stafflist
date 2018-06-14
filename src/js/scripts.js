import $ from 'jquery';
import 'selectize';

import './furniture';



$(document).ready(() => {

const selectBox = $('#select-person').selectize({
      valueField: 'email',
      labelField: 'fullName',
      searchField: 'fullName',
      options: [],
      persist: false,
      // loadThrottle: 600,
      create: false,
      allowEmptyOption: true,
      // load: function(query, callback) {
      //     if (!query.length) return callback();
      //
      // }
  })


  $.ajax({
      url: 'https://datalab.dallasnews.com/staff/api/v1/staff/',
      type: 'GET',
      dataType: 'json',
      error: function() {
          callback();
      },
      success: function(staffList) {
          // you can apply any modification to data before passing it to selectize
          // callback(res);
          selectBox[0].selectize.addOption(staffList);
          // res is json response from server
          // it contains array of objects. Each object has two properties. In this case 'id' and 'Name'
          // if array is inside some other property of res like 'response' or something. than use this
          //callback(res.response);
      }
  });
});
