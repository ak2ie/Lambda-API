import * as cdk from 'aws-cdk-lib';
import { Architecture, FunctionUrlAuthType, HttpMethod } from 'aws-cdk-lib/aws-lambda';
import { NodejsFunction } from 'aws-cdk-lib/aws-lambda-nodejs';
import { Construct } from 'constructs';
// import * as sqs from 'aws-cdk-lib/aws-sqs';

export class LambdaExpressStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    // The code that defines your stack goes here
    const lambda = new NodejsFunction(this, "main", {
      entry: cdk.aws_lambda.Code.fromAsset('lambda/src/index.ts').path,
      handler: "index.handler",
      architecture: Architecture.X86_64
    })

    const url = lambda.addFunctionUrl({
      authType: FunctionUrlAuthType.NONE,
      cors: {
        allowedMethods: [HttpMethod.ALL],
        allowedOrigins: ["*"]
      }
    })

    // example resource
    // const queue = new sqs.Queue(this, 'LambdaExpressQueue', {
    //   visibilityTimeout: cdk.Duration.seconds(300)
    // });
  }
}
