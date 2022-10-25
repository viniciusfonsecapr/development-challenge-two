<<<<<<< HEAD
const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
    
    try {
        const results = await dynamo.scan({ TableName: 'users'}).promise()
        
        const response = {
            statusCode: 200,
            body: JSON.stringify(results)
        }
        
        return response;
    } catch (e) {
        return {
            error: e
        }
    }
    
=======
const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
    
    try {
        const results = await dynamo.scan({ TableName: 'users'}).promise()
        
        const response = {
            statusCode: 200,
            body: JSON.stringify(results)
        }
        
        return response;
    } catch (e) {
        return {
            error: e
        }
    }
    
>>>>>>> e81fb796a414ee79be9ae9948d7b9ce347290f45
};