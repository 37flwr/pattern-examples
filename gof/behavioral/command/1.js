// https://github.com/bookingcom/powercalculator/blob/master/src/store/actions.js

export default {
  "field:change"(context, { prop, value }) {
    // add validations necessary here

    switch (prop) {
      case "base":
        context.commit("field:change", { prop, value });
        if (context.state.nonInferiority.enabled === true) {
          if (context.state.nonInferiority.selected == "absolutePerDay") {
            context.dispatch("change:noninferiorityimpact");
          }
          context.dispatch("convert:noninferioritythreshold", { prop, value });
        }

        context.dispatch(
          "update:proptocalculate",
          context.getters.calculatedValues
        );
        break;

      // ..........
    }
  },
};

/*
    ____________________________DESCRIPTION_______________________________
    field:change is being called and it processes the call
*/
