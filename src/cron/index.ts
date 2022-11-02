import { GenericHandler, LambdaToolkit, RDSHelper } from '@tfs-code/lambda';

const { SST_APP = '' } = process.env;
const Toolkit = LambdaToolkit(SST_APP);
const genericHandler = Toolkit.manifestHandler(GenericHandler);
export const handler = genericHandler<any, any>(async (logger, event, context) => {
    const { resourceArn = '', secretArn = '', database = '' } = process.env;
    logger.info({ resourceArn, secretArn, database });
    const rdsHelper = Toolkit.manifestHelper(RDSHelper, { resourceArn, secretArn, database });
    const result = await rdsHelper.runCommand('SELECT 1');
    logger.info({ result });
    return {
        statusCode: 200,
        body: JSON.stringify({
            result
        }),
    };
});