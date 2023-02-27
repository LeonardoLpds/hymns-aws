import { ScanCommand } from "@aws-sdk/lib-dynamodb";
import { APIGatewayEvent } from "aws-lambda";
import { dbClient } from "../../utils/db";
import { handleError } from "../../utils/errorHandler";

export const handler = handleError()(async (event: APIGatewayEvent) => {
  return await dbClient
    .send(new ScanCommand({ TableName: process.env.HYMNS_TABLE }))
    .then(({ Items }) =>
      Items?.map(({ number, timestamp }) => ({ number, timestamp }))
    );
});
