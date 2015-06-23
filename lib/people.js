'use strict';

var instructor = {
  'given name': 'Antony',
  surname: 'Donovan',
  occupation: 'WDI Instructor'
};

for (var key in instructor) {
  console.log('Key: "' + key + '", value: "' + instructor[key] + '"');
}
