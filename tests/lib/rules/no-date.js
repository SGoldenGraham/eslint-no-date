/**
 * @fileoverview blah
 * @author Simon Graham
 */
"use strict";

//------------------------------------------------------------------------------
// Requirements
//------------------------------------------------------------------------------

var rule = require("../../../lib/rules/no-date"),
  RuleTester = require("eslint").RuleTester;

//------------------------------------------------------------------------------
// Tests
//------------------------------------------------------------------------------

var ruleTester = new RuleTester();
ruleTester.run("no-date", rule, {
  valid: [
    // give me some code that won't trigger a warning
    "var x = moment().toISOString();"
  ],

  invalid: [
    {
      code: "var x = new Date();",
      errors: [
        {
          message:
            "Use moment for date manipulation due to user timezone consideration.",
          type: "NewExpression"
        }
      ]
    }
  ]
});
