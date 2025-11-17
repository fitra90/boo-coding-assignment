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

// get random commentator every time hit comment section
const commentators = [
  {
    "id": 1,
    "name": "Paul Gascoine",
    "description": "I'm Gazza - and I am an alcoholic.",
    "mbti": "ENFJ",
    "enneagram": "6w3",
    "variant": "sp/so",
    "tritype": 725,
    "socionics": "SEE",
    "sloan": "RCOEN",
    "psyche": "FEVL",
    "image": "https://m.media-amazon.com/images/M/MV5BY2I4ZWI1NGQtZDM5ZS00ZjE3LTg3MzUtMTZkYjY3MDUxZWZmXkEyXkFqcGc@._V1_.jpg",
  },
  {
    "id": 2,
    "name": "Robert De Niro",
    "description": "You talkin' to me?",
    "mbti": "ISTJ",
    "enneagram": "5w3",
    "variant": "sp/so",
    "tritype": 725,
    "socionics": "SEE",
    "sloan": "RCOEN",
    "psyche": "FEVL",
    "image": "https://stellaadler.com/wp-content/uploads/2015/08/10-1-290x290.jpg",
  },
];

module.exports = function() {

  router.get('/*', function(req, res, next) {
    res.render('profile_template', {
      profile: profiles[0],
      profile: commentators,
    });
  });

  return router;
}

