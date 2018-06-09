/**
 * @fileoverview disallow `Date` constructors
 * @author Simon Graham
 */
"use strict";

//------------------------------------------------------------------------------
// Rule Definition
//------------------------------------------------------------------------------

module.exports = {
  meta: {
    docs: {
      description: "disallow `Date` constructors",
      category: "Possible Errors",
      recommended: true
    },
    fixable: null, // or "code" or "whitespace"
    schema: [],
    messages: {
      preferLiteral:
        "Use moment for date manipulation due to user timezone consideration."
    }
  },

  create: function(context) {
    // variables should be defined here

    function check(node) {
      if (
        node.arguments.length !== 1 &&
        node.callee.type === "Identifier" &&
        node.callee.name === "Date"
      ) {
        context.report({ node, messageId: "preferLiteral" });
      }
    }

    return {
      CallExpression: check,
      NewExpression: check
    };
  }
};
