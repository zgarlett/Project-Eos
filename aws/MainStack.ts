import * as sst from '@serverless-stack/resources';

export default class MainStack extends sst.Stack {
    constructor(scope: sst.App, id: string, props?: sst.StackProps) {
        super(scope, id, props);
  
        const cronFn = new sst.Function(this, 'CronFn', {
            handler: 'cron/index.handler',
        });

        new sst.Cron(this, 'Cron', {
            job: {
                function: cronFn
            },
            schedule: 'rate(5 minutes)',
        })

      
    }
}
