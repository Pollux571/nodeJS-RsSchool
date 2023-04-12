const parseEnv = () => {
  const envVariables = process.env;
  const rssEnvVariables = Object.keys(envVariables).filter((key) =>
    key.startsWith("RSS_")
  );
  const rssEnvStrings = rssEnvVariables.map(
    (key) => `RSS_${key}=${envVariables[key]}`
  );
  console.log(rssEnvStrings.join("; "));
};

parseEnv();
