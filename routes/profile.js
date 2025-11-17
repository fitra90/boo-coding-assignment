'use strict';

const express = require('express');
const router = express.Router();

const profiles = [
  {
    "id": 1,
    "name": "A Martinez",
    "description": "Adolph Larrue Martinez III.",
    "mbti": "ISFJ",
    "enneagram": "9w3",
    "variant": "sp/so",
    "tritype": 725,
    "socionics": "SEE",
    "sloan": "RCOEN",
    "psyche": "FEVL",
    "image": "https://images.mubicdn.net/images/cast_member/107373/cache-143180-1641846989/image-w856.jpg?size=300x",
  }
];

module.exports = function() {

  router.get('/*', function(req, res, next) {
    res.render('profile_template', {
      profile: profiles[0],
    });
  });

  return router;
}

