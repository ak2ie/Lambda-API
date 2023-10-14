export function Hello(res, req) {
  console.log("JS: " + process.env.ENV_TEST);
  throw new Error("error!!");
  req.status(200).send({
    message: "Hello",
  });
}
