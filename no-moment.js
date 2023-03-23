module.exports = {
  meta: {
    type: "problem",
    docs: {
      description: "Disallow the use of moment package",
      category: "Possible Errors",
      recommended: true,
      url: "https://example.com/eslint/rules/no-moment",
    },
    schema: [], // no options
  },

  create: function (context) {
    return {
      ImportDeclaration(node) {
        const moduleName = node.source.value;
        if (moduleName === "moment") {
          context.report({
            node,
            message: "Do not import moment package.",
          });
        }
      },
    };
  },
};
