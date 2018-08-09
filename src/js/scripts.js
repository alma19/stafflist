import $ from 'jquery';
import 'selectize';

import './furniture';



$(document).ready(() => {
  const selectBoxes = {
  };

  window.sb = selectBoxes;
  // sb.business.monday[0].selectize.items
  // sb.business.tuesday[0].selectize.addItem('ldallen@dallasnews.com'

  $('.select-person').each((i, el) => {
    const role = $(el).closest('tr').attr('data-role');
    const day = $(el).closest('td').attr('data-day');

    document.getElementsByClassName('copy')['0'].onclick = () => {
      const copyItem = selectBoxes.photo_assignments.monday[0].selectize.items;
      selectBoxes.photo_assignments.tuesday[0].selectize.addItem(copyItem);
    }

    // writing to selectBoxes
    if (!Object.prototype.hasOwnProperty.call(selectBoxes, role)) {
      selectBoxes[role] = {};
    }

    selectBoxes[role][day] = $(el).selectize({
      valueField: 'email',
      labelField: 'fullName',
      searchField: 'fullName',
      options: [],
      render: {
        item: function (item, escape) {
          return '<div>' +
              (item.fullName ? '<p class="name">' + escape(item.fullName) + '</p>' : '') +
                (item.email ? '<span class="email">' + escape(item.email) + '</span>' : '') +
            '</div>';
        },
        option: function (item, escape) {
          const label = item.fullName || item.email;
          const caption = item.fullName ? item.email : null;
          return '<div>' +
                '<p class="label">' + escape(label) + '</p>' +
                (caption ? '<span class="caption">' + escape(caption) + '</span>' : '') +
            '</div>';
        },
      },
      persist: false,
      // loadThrottle: 600,
      create: false,
      allowEmptyOption: true,
      // load: function(query, callback) {
      //     if (!query.length) return callback();
      //
      // }
    });
  });


  $.ajax({
      url: 'https://datalab.dallasnews.com/staff/api/v1/staff/',
      type: 'GET',
      dataType: 'json',
      error: function() {
          callback();
      },

      //looking through the key and value pairs to get to the selectize option
      success: function(staffList) {
        Object.keys(selectBoxes).forEach(function(roleName){
          var roleValue = selectBoxes[roleName];
          Object.keys(roleValue).forEach(function(dayName){
            var dayValue = roleValue[dayName];
            dayValue[0].selectize.addOption(staffList);
          })
        });
          // you can apply any modification to data before passing it to selectize
          // callback(res);

          // res is json response from server
          // it contains array of objects. Each object has two properties. In this case 'id' and 'Name'
          // if array is inside some other property of res like 'response' or something. than use this
          //callback(res.response);
      }
  });
}); // document ready

// replacing the options :
// find from selecboxes
