<<<<<<< HEAD
const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()

exports.handler = async (event) => {
    const data = JSON.parse(event['body'])
    try {
        await dynamo.put({
            TableName: 'users',
            Item: {
                name: data.name,
                email: data.email,
                address: data.address,
                date_birth: data.date_birth,
                id: data.id
            }
        }).promise()
        
        return {
            message: 'Updated successfully ' + data.id
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
    try {
        await dynamo.put({
            TableName: 'users',
            Item: {
                name: data.name,
                email: data.email,
                address: data.address,
                date_birth: data.date_birth,
                id: data.id
            }
        }).promise()
        
        return {
            message: 'Updated successfully ' + data.id
        }
    } catch (e) {
        return {
            error: e
        }
    }
    
>>>>>>> e81fb796a414ee79be9ae9948d7b9ce347290f45
};