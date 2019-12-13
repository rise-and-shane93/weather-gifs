const express = require('express'); // eslint-disable-line import/no-commonjs
const User = require('../models/User');
// eslint-disable-line import/no-commonjs
const router = express.Router();
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json();

router.get('/:urlUserName', jsonParser, (req, res) => {
  const name = req.params.urlUserName;
    User.findOne({email: name})
      .exec()
      .then((doc) => {
        if (doc) {
          res.status(200).json({ savedWeatherData: doc.savedWeatherData, temperature: doc.temperature});
          // res.status(200).json(doc.temperature);
        } else {
          res
            .status(404)
            .json({ message: 'No valid entry found for provided ID' });
        }
      })
      .catch((err) => {
        res.status(500).json({ error: err });
      });  
  });

// eslint-disable-next-line no-unused-vars
router.post('/', jsonParser, (req, res) => {
  const weather = new Weather({
    City: req.body.city,
    State: req.body.state,
    Zip: req.body.zip,
  });
  console.log(req.body);

  weather
    .save()
    .then((result) => {
      res.status(201).json({
        message: 'Handling POST requests to /weather',
        createdWeather: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        error: err,
      });
    });
});

// router.post('/:userId', (req, res) => {
//   const id = req.params.urlUserName;
//   User.findOne({email: id})
//     .exec()
//     .then((doc) => {
//       if (doc) {
//         res.status(200).json(doc);
//       } else {
//         res
//           .status(404)
//           .json({ message: 'No valid entry found for provided ID' });
//       }
//     })
//     .catch((err) => {
//       res.status(500).json({ error: err });
//     });
// });

router.put('/:urlUserName/:temp', jsonParser, (req, res) => {
  const name = req.params.urlUserName;
  const temp = req.params.temp;
  User.findOne({email: name}, (err, foundObject) => {
    if(err) {
      console.log(err);
      res.status(500).send();
    } else {
      if (!foundObject) {
        res.status(404).send();
      } else {
        foundObject.temperature = temp;

        foundObject.save((err, updatedObject) => {
          if (err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.send(updatedObject);
          }
        });
      }
    }
  });
});

router.post('/:urlUserName', jsonParser, (req, res) => {
  const name = req.params.urlUserName;
  User.findOne({email: name}, (err, foundObject) => {
    if(err) {
      console.log(err);
      res.status(500).send();
    } else {
      if (!foundObject) {
        res.status(404).send();
      } else {
        if (req.body) {
          foundObject.savedWeatherData.push(req.body);

        }

        foundObject.save((err, updatedObject) => {
          if (err) {
            console.log(err);
            res.status(500).send();
          } else {
            res.send(updatedObject);
          }
        });
      }
    }
  });
});

router.delete('/:urlUserName/:location', jsonParser, (req, res) => {
  const name = req.params.urlUserName;
  const location = req.params.location;
  console.log(JSON.stringify(location));
  User.findOne({email: name}, function (err, foundObject) {
    if (err) {
        res.send(null, 500);
    } else if (foundObject.savedWeatherData) {
        let records;
        // find the delete uid in the favorites array
        let idx = foundObject.savedWeatherData.findIndex(el => el.location === location);
        console.log(idx);
        // is it valid?
        // remove it from the array.
        // records = foundObject.savedWeatherData.filter(el => el.location !== location);
        foundObject.savedWeatherData.splice(idx, 1);
        console.log(foundObject);
        // save the foundObject
        foundObject.save(function(err) {
            if (err) {
                console.log(err);
                res.send(null, 500);
            } else {
                // send the records
                console.log(records);
                res.send(records);
                console.log('save records');
            }
        });
        // stop here, otherwise 404
        return;
    }
    // send 404 not found
    res.send(null, 404);
});
});  

module.exports = router;
