import MyStack from "./MainStack";
import * as sst from "@serverless-stack/resources";

export default function main(app: sst.App): void {
  // Set default runtime for all functions
  app.setDefaultFunctionProps({
    srcPath: "src",
    runtime: "nodejs16.x"
  });

  new MyStack(app, "my-stack");

  // Add more stacks
}
