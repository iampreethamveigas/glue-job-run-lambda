var AWS = require('aws-sdk');
AWS.config.update({ region: 'us-east-2' });
var glue = new AWS.Glue();



exports.handler = async (event, context, callback) => {
     // TODO implement
     const response = {
          statusCode: 200,
          body: JSON.stringify('Hello from Lambda!'),
     };
     try {
          var params = {
               JobName: 'test_job2_test',
               Arguments: {}
          };


          await glue.startJobRun(params, function (err, data) {
               console.log(data);
               console.log(err);
          }).promise();


          const { Pool, Client } = require('pg');
          const connectionString = process.env.connection_string
          const pool = new Pool({
               connectionString: connectionString,
          });

          pool.query('SELECT filename from vehicle_data', (err, res) => {
               console.log(err, res);
               console.log("*******CONNECTED********");
               pool.end();
          });


          return response;
     }
     catch (e) {
          console.log(e);
          return e;
     }


};