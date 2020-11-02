'use strict';

const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const moment = require('moment');
const bodyParser = require('body-parser');

const app = express();
const router = express.Router();

router.use(cors());
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

router.get('/', (req,res) => {
    const msg = {
        msg: 'At the third stroke, the time sponsored by Pete, will be . . .',
        now: moment().format('Do MMMM YYYY, h:mm:ss a')
    };
    return res.json(msg);
});

app.use('/', router);

const handler = serverless(app);
exports.handler = async (event, context) => {
    return await handler(event,context);
};