import { useState } from "react";
import { NumericStepper } from "@anatoliygatt/numeric-stepper";

function Example() {
  const INITIAL_VALUE = 0;
  const [value, setValue] = useState(INITIAL_VALUE);
  return (
    <>
      <NumericStepper
        minimumValue={0}
        maximumValue={100}
        stepValue={10}
        initialValue={INITIAL_VALUE}
        size="md"
        inactiveTrackColor="#fed7aa"
        activeTrackColor="#fddec0"
        activeButtonColor="#ffedd5"
        inactiveIconColor="#fb923c"
        hoverIconColor="#ea580c"
        activeIconColor="#9a3412"
        disabledIconColor="#fdba74"
        thumbColor="#f97316"
        thumbShadowAnimationOnTrackHoverEnabled={true}
        focusRingColor="#fff7ed"
        onChange={(value) => {
          setValue(value);
        }}
      />
      <h1>{value}</h1>
    </>
  );
}
export default Example;
