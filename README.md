# React-Controls

[![CI](https://github.com/up-group/react-controls/actions/workflows/main.yml/badge.svg?branch=v2.17.0)](https://github.com/up-group/react-controls/actions/workflows/main.yml)

## Background Info

We know that there are a ton of react UI library projects to choose from. Our hope with this one is to provide the next generation of react components that you can use to bootstrap your next project, or as a reference for building a UIKit.
Read on to get started!

## Main Features

- React
- Isolation
- Statically Typed
- TypeScript
- Styled Components
- React
- Validation

## Getting Started

1. Clone the Repo
   `git clone https://github.com/Up-Group/react-controls`

2. Install Dependencies
   From the root of the project directory, run `yarn` if you have yarn installed globally.
   --- or ---
   `npm install`.

### windows

- setup python 2.7 && add it to path
- configure NODE_OPTIONS

  ```powershell
   # necessary to run storybook on windows
   ##
   $Env:NODE_OPTIONS = "--openssl-legacy-provider"
  ```

## Styled Components

This project embraces [styled-components](https://github.com/styled-components/styled-components) as it's a fantastic way to style your React components.

Check the components directory for examples.

## File Tree Structure

```
src/
│   ├── Input
│   │   ├── __tests__
│   │   │   ├── __mocks__
│   │   │   │   └── boxMocks.mock.ts
│   │   │   ├── __snapshots__
│   │   │   │   └── index.test.tsx.snap
│   │   │   └── index.test.tsx
│   │   ├── index.tsx
│   │   ├── styles.ts
|   |   ├── Input.tsx
|   |   └── ...
├── index.ts
```

## Testing

Included is a test framework for all of your React testing needs. We are using Jest to run the test suite and generate snapshots, plus Enzyme for component introspection.

Tests should be collocated within the component they represent. Test files should be named `index.test.tsx` and mocks must be named `myMock.mock.ts`.

## Deployment

## Scripts

- `npm run setup:yarn`
  - Install the package dependencies via yarn
- `npm install`
  - Install dependencies (the ol' fashioned way)
- `npm run test`
  - Run the test suite
- `npm run test:watch`
  - Run the test suite in watch mode
- `npm run test:update`
  - Update the failing snapshot tests

## Components

1. Containers

2. Display

3. Inputs

Each input component has the common props :

- onChange?: (arg: \_BaseType, event: any) => void : the onChange handler
- value?: \_BaseType : the type of value
- disabled?:boolean : the disable state of the component
- readonly?:boolean : the readonly state of the component
- tooltip?: string | Tooltip : a tooltip explaining the usage of the component

- UpCheckbox : provide a component to display a set of option with multiple choice

A checkbox option is defined as : - name:string : the name attribute of the input DOMElement - value:any : the value of the input DOMElement - text?:string : the text to be displayed next to the checkbox - iconName?:string : a icon within the set provided by our UI kit - onChange?:(e:any) => void : the onChange handler - checked:boolean : the checked value of the checkbox

```
<UpCheckbox options={[{
  text: "My Option 1",
  name: "Option1",
  onChange: this.onOptionChange,
  value: true,
  checked: this.state.option1 === true
}, {
  text: "My Option 2",
  name: "Option2",
  onChange: this.onOptionChange,
  value: true,
  checked: this.state.option2 === true
}, {
  text: "My Option 3",
  name: "Option3",
  onChange: this.onOptionChange,
  value: true,
  checked: this.state.option3 === true
}]} />
```

- UpDate : provide a component for selectin date
  - format?:string : the format
  - minDate?:Date : the minimal date of the date picker
  - maxDate?:Date : the maximal date of the date picker
  - value?:Date : in order to set the value from outside
  - onChange?:(e:any) => void : the onChange handler

```
<UpLabel width="small" inline={true} text="Begin date :">
  <UpDate tooltip="Start dat of ..." maxDate={this.state.endDate} onChange={this.onBeginDateChange} value={this.state.beginDate} />
</UpLabel>
<UpLabel width="small" inline={true} text="End date :">
  <UpDate minDate={this.state.beginDate} onChange={this.onEndDateChange} value={this.state.endDate} />
</UpLabel>

```

- UpDateTime : provide a component for selectin date and time
  - format?:string : the format
  - minDate?:Date : the minimal date of the date picker
  - maxDate?:Date : the maximal date of the date picker
  - value?:Date : in order to set the value from outside
  - onChange?:(e:any) => void : the onChange handler
  - tooltip?: string | Tooltip : a tooltip explaining the usage of the component

```
  <UpLabel inline={true} text="Date and time :">
    <UpDateTime onChange={this.onDateTimeChange} value={this.state.dateTime} />
  </UpLabel>
```

- UpEmail : provide a component for specifying email with validation
  - placeholder?: string : the placeholder string of the component
  - height?: HeightSize : the height of the component
  - width?: WidthSize : the width of the component
  - maxLength?:number : the maximume length of the email
  - onChange?:(e:any) => void : the onChange handler
  - tooltip?: string | Tooltip : a tooltip explaining the usage of the component
  - value?:string : in order to set the value from outside

```
<UpLabel inline={true} text="Email :" textAlign="right" width="small">
  <UpEmail width="xlarge" placeholder="Enter the email used for your identification" onChange={this.onEmailChange} value={this.state.email} />
</UpLabel>
```

- UpFile

- UpInput : a generic component for specifying single line text
  - placeholder?: string : the placeholder string of the component
  - height?: HeightSize : the height of the component
  - width?: WidthSize : the width of the component
  - maxLength?:number : the maximume length of the email
  - onChange?:(e:any) => void : the onChange handler
  - tooltip?: string | Tooltip : a tooltip explaining the usage of the component

```
 <UpLabel text="Confirmation code :" inline={true} textAlign="right" width="small">
  <UpInput width="xlarge" placeholder="Enter the confirmation code"
    validation={[{
        pattern:/^(\d){4}$/,
        errorMessage:"Must contain 4 digits"
    }]}
    tooltip="The verification code received by SMS"
    iconName="ok-sign"
    maxLength={4}
    value={this.state.code} />
</UpLabel>
```

- UpNumber : provide a component for specifying number
  - max?: number : the maximal value of the number
  - min?: number : the minimale value of the number
  - stepSize?:number : the step used during each incrementation/decrementation
  - decimalPlace?:number : the place of the decimal
  - value?:number|string : in order to set the value from outside

```
 <UpNumber width="xlarge" placeholder="Enter the amount"
                        stepSize={10} onChange={this.onAmountChange} decimalPlace={2}
                        tooltip="The amount of ..."
                        value={this.state.amout} />
```

- UpInteger : provide a UpNumber component with min value greater to 0 and decimalPlace equals to 0
  - max?: number : the maximal value of the number
  - min?: number : the minimale value of the number. Invariant -> min > 0
  - stepSize?:number : the step used during each incrementation/decrementation
  - value?:number|string : in order to set the value from outside

```
 <UpLabel text="Age :" inline={true} textAlign="right" width="small">
    <UpInteger width="xlarge" placeholder="Entrer your age"
      stepSize={10} onChange={this.onAgeChange}
      value={this.state.age} />
</UpLabel>
```

- UpPhone : provide a component for specifying a phone number with validation
  - placeholder?: string : the placeholder string of the component
  - height?: HeightSize : the height of the component
  - width?: WidthSize : the width of the component
  - maxLength?:number : the maximume length of the email
  - onChange?:(e:any) => void : the onChange handler
  - tooltip?: string | Tooltip : a tooltip explaining the usage of the component
  - value?:string : in order to set the value from outside

```
<UpLabel inline={true} text="Phone :" textAlign="right" width="small">
  <UpPhone width="xlarge" placeholder="Enter your phone number" onChange={this.onPhoneChange} value={this.state.phone} />
</UpLabel>
```

- UpRadio : provide a component to display a set of option with single choice

A checkbox option is defined as : - value:any : the value of the input DOMElement - text?:string : the text to be displayed next to the checkbox - iconName?:string : a icon within the set provided by our UI kit - onChange?:(e:any) => void : the onChange handler - checked:boolean : the checked value of the checkbox

```
<UpRadio name="gender" value={this.state.gender}
  options={[{
    text: "Female",
    onChange: this.onGenderChange,
    value: "F",
    checked: this.state.gender === "F"
  }, {
    text: "Male",
    onChange: this.onGenderChange,
    value: "M",
    checked: this.state.gender === "M"
  }]} />
```

- UpSelect : provide a select component with data from array or ajax call
  - multiple?: boolean : allow multiple selection
  - data?: any : a array of data for initialisation of the select's options
  - placeholder?: string : the select placeholder message
  - loadingPlaceholder?:string : the text to be displayed during the loading step
  - allowClear?: boolean : Allow o clear the current selection
  - minimumInputLength?: number : the minimum input length for ajax call
  - dataSource?: { id?: string, text?: string, query: string, queryParameterName?: string} : the defintion o data source for dynamically fetch the options by autloading or autcompletion search
  - autoload?:boolean : Autoload the options from the data source
  - noResultsText? : string : the text to be displayed if none data found
  - clearAllText? : string : the text to be displayed for clearAll action
  - clearValueText? : string : the text to be displayed for the clear value action
  - addLabelText? : string : the text to be displayed for the add label action
  - searchPromptText? : string : the text to be displayed during the search step
  - optionRenderer?: React.StatelessComponent<UpSelectOption> : a component fore rendering the option
  - valueRenderer?: React.StatelessComponent<UpSelectOption> : a compoent for rendering the value

An UpSelectOption is defined as :
id:number|string : the unique id of the option
text:string: the text to be displayed
icon:string : the icon to be displayed

```
<UpLabel inline={true} width="small" text="My todos :">
  <UpSelect autoload={false}
    allowClear={true}
    multiple={false}
    tooltip="Selct the todos completed"
    minimumInputLength={3}
    dataSource={{
      query: "https://jsonplaceholder.typicode.com/todos",
      text: "title"
    }}
    onError={this.onSelectionError} onChange={this.onSelectionChange} value={this.state.todosCompleted} />
</UpLabel>
```

- UpText

- UpTimePicker

## Resources

- [JavaScript Code Quality with Free Tools](https://dev-blog.apollodata.com/javascript-code-quality-with-free-tools-9a6d80e29f2d#.1unvvh8vw)
- [Working with React & TypeScript](http://blog.wolksoftware.com/working-with-react-and-typescript)

## Contributing

See here for our [contribution guide](https://github.com/Up-Group/react-controls/blob/master/CONTRIBUTING.md). We are on slack, please go [here for an invite]
We'd love to hear from you!

## License

See here for the [license](https://github.com/Up-Group/react-controls/blob/master/LICENSE).

## Roadmap
