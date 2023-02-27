import { APIGatewayEvent } from "aws-lambda";

export const handleError =
  () => (handler: Function) => async (event: APIGatewayEvent) => {
    try {
      const response = await handler(event);
      return {
        statusCode: 200,
        body: JSON.stringify(response),
        headers: {
          "Content-Type": "application/json",
        },
      };
    } catch (error: any) {
      const code =
        error.statusCode ||
        error.httpStatusCode ||
        (error.$metadata && error.$metadata.httpStatusCode) ||
        500;

      return {
        statusCode: code,
        body: JSON.stringify({
          message: error.message ? error.message : "Something went wrong",
          nestedErrors: error,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      };
    }
  };
