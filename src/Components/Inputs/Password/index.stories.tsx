import * as React from "react";
import { storiesOf } from "@storybook/react";

import UpDefaultTheme from "../../../Common/theming";
import { ThemeProvider as UpThemeProvider } from "../../../Common/theming/ThemeProvider";

import UpPassword from "./UpPassword";

import { getRootContainer } from "../../../Common/stories";
import { withKnobs } from "@storybook/addon-knobs";
import {  rulesMatch } from "../../../Common/utils";

const stories = storiesOf("Inputs/UpPassword", module);

stories.addDecorator(withKnobs);
stories.addDecorator(getRootContainer("UpPassword"));

const ControlledPassword = props => {
  const [value, setValue] = React.useState("");
  

  return (
    <UpPassword
      value={value}
      onChange={(e, v) => setValue(v)}
      onClickBehaviour={true}
    />
  );
};

const PasswordWithRules = props => {
  const [value, setValue] = React.useState("");

  const [focused, setFocused] = React.useState(false)
  const [touched, setTouched] = React.useState(false)
  const rules = [
    { text: 'Au moins 8 caractères', regex: /^.{8,}$/ },
    { text: 'Au moins une majiscule', regex: /.*[A-Z]/ },
    { text: 'Au moins une miniscule', regex: /.*[a-z]/ },
    { text: 'Au moins 1 chiffre', regex: /.*[0-9].*/ }
  ]
  const rulesAreValid = rulesMatch(value,rules)

  return (
    <UpPassword
      value={value}
      onChange={(e, v) => setValue(v)}
      onClickBehaviour={false}
      rules={rules}
      onFocus={(e)=>{
        setFocused(true)
        setTouched(true)
      }}
      onBlur={(e)=> setFocused(false)}
      focused={focused}
      showError={touched && !rulesAreValid}
      hasError={touched && !rulesAreValid}
      touched={touched}
    />
  );
}
stories.add(
  "Password input",
  () => (
    <div style={{ padding: "30px" }}>
      <ControlledPassword />
    </div>
  ),
  { info: "Utilisation simple" }
).add("Password with rules", () => (
  <div style={{ padding: "30px" }}>
    <PasswordWithRules />
  </div>
));
