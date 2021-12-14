var weather = require('weather-js');

// Options:
// search:     location name or zipcode
// degreeType: F or C

weather.find({ search: 'siliuri', degreeType: 'F' }, function (err, result) {
  if (err) console.log(err);

  console.log(JSON.stringify(result, null, 2));
});