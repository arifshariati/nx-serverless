import {
  APIGatewayProxyEventV2,
  APIGatewayProxyStructuredResultV2,
  Context,
  Handler,
} from 'aws-lambda';

const handler: Handler = async (
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  _event: APIGatewayProxyEventV2,
  //eslint-disable-next-line @typescript-eslint/no-unused-vars
  _context: Context
): Promise<APIGatewayProxyStructuredResultV2> => ({
  statusCode: 200,
  body: 'hello World!!',
});

export default handler;
