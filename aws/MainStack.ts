import * as sst from '@serverless-stack/resources';
export default class MainStack extends sst.Stack {
    constructor(scope: sst.App, id: string, props?: sst.StackProps) {
        super(scope, id, props);
  
        const cronFn = new sst.Function(this, 'CronFn', {
            functionName: 'CronFn',
            handler: 'cron/index.handler',
            environment: {
                resourceArn: process.env.resourceArn!,
                secretArn: process.env.secretArn!,
                database: process.env.database!
            }
        });

        new sst.Cron(this, 'Cron', {
            job: {
                function: cronFn
            },
            schedule: 'cron(*/5 6-8 * * ? *)',
        })

      
    }
}
