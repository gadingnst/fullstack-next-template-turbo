/* eslint-disable no-nested-ternary */
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
  const config = deepMerge(require('./tailwind.config'), userConfig);
  const sharedContent = [
    '../../packages/shared/components/**/*.{js,jsx,ts,tsx,mdx}',
    '../../packages/shared/libs/**/*.{js,jsx,ts,tsx,mdx}'
  ];
  if (Array.isArray(userConfig.content)) {
    sharedContent.forEach((_content) => {
      config.content.push(_content);
    });
  }
  else if (Object.keys(userConfig.content)) {
    sharedContent.forEach((_content) => {
      config.content.files.push(_content);
    });

  }
  else {
    config.content = sharedContent;
  }
  return config;
};

module.exports = withBaseTailwindConfig;
