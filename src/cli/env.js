const parseEnv = () => {
  const prefix = "RSS_";

  const envKeys = Object.keys(process.env);

  const rssKeys = envKeys.filter((key) => key.startsWith(prefix));
  const rssVars = rssKeys.map((key) => `${key}=${process.env[key]}`);
  const rssString = rssVars.join(";");

  console.log(rssString);
};

parseEnv();
