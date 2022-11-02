import { GenericHandler, LambdaToolkit } from '@tfs-code/lambda';
const { SST_APP = '' } = process.env;
const Toolkit = LambdaToolkit(SST_APP);
const genericHandler = Toolkit.manifestHandler(GenericHandler);
export const handler = genericHandler<any, any>(async (logger, event, context) => {
    const { MY_ENV_VAR = '' } = process.env;
    logger.info({ MY_ENV_VAR });
    return {
        statusCode: 200,
        body: JSON.stringify({
            message: 'Hello World',
            input: event,
        }),
    };
});