'use strict';
const express = require('express');
const router = express.Router();
const ChannelController = require('../controllers').Channels;

router.route('/')
  .post(ChannelController.createChannel)
;

router.route('/:id')
  .get(ChannelController.getGroupChannels)
;


module.exports = router;