/* eslint-disable no-undef */
const isObject = (object) => object && typeof object === 'object';

const deepMerge = (...object) => {
  return object.reduce((acc, cur) => {
    Object.keys(cur).forEach(key => {
      acc[key] = Array.isArray(acc[key]) && Array.isArray(cur[key])
        ? [...acc[key], ...cur[key]]
          .filter((value, idx, arr) => arr.indexOf(value) === idx)
        : isObject(acc[key]) && isObject(cur[key])
          ? deepMerge(acc[key], cur[key])
          : cur[key];
    });
    return acc;
  }, {});
};

const withBaseTailwindConfig = (userConfig) => {
  const tailwindConfig = { content: [] };
  const config = deepMerge(tailwindConfig, userConfig);
  const maternaContent = '../../packages/shared/src/components/**/*.{js,jsx,ts,tsx,mdx}';
  if (Array.isArray(userConfig.content)) {
    config.content.push(maternaContent);
  }
  else if (Object.keys(userConfig.content)) {
    config.content.files.push(maternaContent);
  }
  else {
    config.content = [maternaContent];
  }
  return config;
};

module.exports = withBaseTailwindConfig;
