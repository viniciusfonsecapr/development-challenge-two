<<<<<<< HEAD
const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
    const data = JSON.parse(event['body'])
    console.log(data.id)
    try {
        await dynamo.delete({
            TableName: 'users',
            Key: {
                id: data.id
            }
        }).promise()
        
        return {
            message: 'Deleted successfully ' + data.id
        }
    } catch (e) {
        return {
            error: e
        }
    }
    
=======
const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
    const data = JSON.parse(event['body'])
    console.log(data.id)
    try {
        await dynamo.delete({
            TableName: 'users',
            Key: {
                id: data.id
            }
        }).promise()
        
        return {
            message: 'Deleted successfully ' + data.id
        }
    } catch (e) {
        return {
            error: e
        }
    }
    
>>>>>>> e81fb796a414ee79be9ae9948d7b9ce347290f45
};