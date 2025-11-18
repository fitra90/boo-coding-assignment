'use strict';

const express = require('express');
const router = express.Router();
const path = require('path');

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

const zodiac = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];

const enneagram = ["1_wing_2", "2_wing_3", "3_wing_2", "3_wing_4", "4_wing_3", "4_wing_5", "5_wing_4", "5_wing_6", "6_wing_5", "6_wing_7", "7_wing_6", "7_wing_8", "8_wing_7", "8_wing_9", "9_wing_8", "9_wing_1"];

const mbti = ["INFP", "INFJ", "ENFP", "ENFJ", "INTJ", "INTP", "ENTP", "ENTJ", "ISFP", "ISFJ", "ESFP", "ESFJ", "ISTP", "ISTJ", "ESTP", "ESTJ"];

router.use(express.static('public'));

module.exports = function() {

  router.get('/*', function(req, res, next) {
    res.render('profile_template', {
      profile: profiles[0],
      mbti: mbti,
      enneagram: enneagram,
      zodiac: zodiac,
    });
  });

  return router;
}

