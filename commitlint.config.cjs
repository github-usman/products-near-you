// commitlint.config.cjs
module.exports = {
  // extends: ['@commitlint/config-conventional'],
  extends: [],
  rules: {
    "header-min-length": [2, "always", 20], // Header must be at least 15 characters long
    "header-end-period": [2, "always"], // Header must end with a period
    "message-need-colon": [2, "always"], // Body must contain a colon
  },
  plugins: [
    {
      rules: {
        "header-end-period": ({ header }) => {
          return [
            /\.$/.test(header),
            "Commit message header must end with a period(.)",
          ];
        },
        "message-need-colon": ({ raw }) => {
          if (!/:/.test(raw)) {
            return [
              0,
              "Commit message body must contain a colon. \n example => subject : describe the commit message",
            ];
          }
          return [true];
        },
      },
    },
  ],
};
