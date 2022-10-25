const AWS = require('aws-sdk')
const dynamo = new AWS.DynamoDB.DocumentClient()
const crypto = require('crypto')

exports.handler = async (event) => {
    const data = JSON.parse(event['body'])
    try {
        await dynamo.put({
            TableName: 'users',
            Item: {
                id: crypto.randomUUID(),
                name: data.name,
                email: data.email,
                address: data.address,
                date_birth: data.date_birth
            }
        }).promise()
        
        return {
            message: 'Created successfully ' + data.email
        }
    } catch (e) {
        return {
            error: e
        }
    }
    
};