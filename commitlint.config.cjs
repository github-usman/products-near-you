// commitlint.config.cjs
module.exports = {
    extends: ['@commitlint/config-conventional'],
    rules: {
      'header-min-length': [2, 'always',15],
      'header-end-period': [2, 'always'],
      'commit-colon-need':[2,always,true],
    },
    plugins:[
      {
        rules:{
          'header-end-period':({header})=>{
            return [/\.$/.test(header),'Commit message must end with a period'];
          },
          'commit-colon-need': ({ body }) => {
          return [
            body.includes(':'),
            'Commit message body must contain a colon.',];
          }
        }
      }
    ]
  };
  