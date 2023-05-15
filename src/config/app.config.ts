const { NODE_ENV, MONGODB, PORT } = process.env;

export const EnvConfiguration = () => ({
  environment: NODE_ENV || 'dev',
  mongodb: MONGODB,
  port: PORT || 3001,
});
