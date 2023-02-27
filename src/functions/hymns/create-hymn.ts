import { PutCommand } from "@aws-sdk/lib-dynamodb";
import { SQSEvent } from "aws-lambda";
import { dbClient } from "../../utils/db";

export const handler = async (event: SQSEvent) => {
  event.Records.forEach(async (record) => {
    const body = JSON.parse(record.body);
    const params = {
      TableName: process.env.HYMNS_TABLE,
      Item: {
        PK: `HYMN#${body.number}`,
        SK: `HYMN#${body.timestamp}`,
        GSI: `HYMN`,
        timestamp: body.timestamp,
        number: body.number,
      },
    };
    await dbClient.send(new PutCommand(params));
  });
};
