import MyStack from "./MainStack";
import * as sst from "@serverless-stack/resources";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    srcPath: "src",
    runtime: "nodejs16.x",
    permissions:['rds-data:ExecuteStatement','secretsmanager:GetSecretValue'], 
  });

  new MyStack(app, "main");

  // Add more stacks
}
