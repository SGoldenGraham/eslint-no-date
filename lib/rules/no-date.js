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
    schema: [],
    messages: {
      preferMoment:
        "Use moment for date manipulation due to user timezone consideration."
    }
  },

  create: function(context) {
    return {
      "CallExpression[callee.name='Date'], NewExpression[callee.name='Date']"(
        node
      ) {
        context.report({
          node,
          messageId: "preferMoment"
        });
      }
    };
  }
};
