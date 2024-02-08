# Password Input Component with tooltip

The Password Input Component is a reusable and secure UI component designed for user password input in web applications. It enhances security by including strength indication. The strength requirements **default** to the same as **ASP.NET Core Identity** and can be easily customized via props.

![Password Input Component](https://github.com/Connectslide121/password-input-component/blob/master/images/password-input.png)

## Features

- **Masking**: Masks the password as it is entered for privacy.
- **Strength Indicator**: Provides real-time feedback on the entered password's strength.
- **Customizable**: Easy to customize styles and behaviors.

## Installation

To install the Password Input Component, you can use npm:

```bash
npm i password-input-component
```

## Usage

After installation, you can import the Password Input Component into your project:

```bash
import PasswordInput from "password-input-component";

```

#### Example

```js
import PasswordInput from "password-input-component";

function App() {
  return (
    <div>
      <PasswordInput />
    </div>
  );
}

export default App;
```

## Props

The following props can be passed to the Password Input Component to customize its behavior:

- **`inputName`**: The `name` property of the input element. **Default: "password"**.

- **`inputId`**: The `id` property of the input element. **Default: "password"**.

- **`inputPlaceholder`**: The `placeholder` property of the input element. **Default: ""**.

- **`isRequired`**: The `required` property of the input element. **Default: true**.

#### Example

```js
<PasswordInput
  inputName="myPassword"
  inputId="myPassword"
  inputPlaceholder="Password"
  isRequired={false}
/>
```

- **`minLength`**: Number that determines the minimum length of the password. **Default: 6**.

- **`nonAlphaNumeric`**: Boolean that determines whether the password must contain at least one non-alphanumeric character. **Default: true**.

- **`lowercase`**: Boolean that determines whether the password must contain at least one lowercase character. **Default: true**.

- **`uppercase`**: Boolean that determines whether the password must contain at least one uppercase character. **Default: true**.

- **`digit`**: Boolean that determines whether the password must contain at least one number. **Default: true**.

#### Example

```js
<PasswordInput
  minLength={12}
  nonAlphaNumeric={false}
  lowercase={false}
  uppercase={false}
  digit={false}
/>
```

- **`onInputChange`**: Returns the event object when the input changes, just like the regular `onChange` function.

#### Example

```js
<PasswordInput onInputChange={(e) => console.log(e.target.value)} />
```

or

```js
import { useState } from "react";
import PasswordInput from "password-input-component";

function App() {
  const [password, setPassword] = useState("");

  const handleChange = (e) => {
    setPassword(e.target.value);
  };

  return (
    <>
      <PasswordInput onInputChange={(e) => handleChange(e)} />
    </>
  );
}

export default App;
```

## Styling

The Password Input Component can be styled using CSS. Here are the classes you can target:

- **.password-input**: The class for the input field.
- **.password-tooltip**: The class for the tooltip. Must use `!important` to override the following default styles:

`position` / `top` / `right` / `display` / `flex-direction` / `gap` / `padding` / `background-color` / `color`

#### Example

```css
.password-tooltip {
  background-color: red !important;
}
```

- This code snippet will add an **arrow** pointing at the input element

```css
.password-tooltip:after {
  content: "";
  position: absolute;
  left: -20px;
  top: 10px;
  transform: translateY(-50%);
  border: 10px solid rgba(0, 0, 0, 0.8);
  border-color: transparent rgba(0, 0, 0, 0.8) transparent transparent;
}
```

![Arrow example](https://github.com/Connectslide121/password-input-component/blob/master/images/arrow.png)

- This code snippet will **center** the tooltip vertically with the input element

```css
.password-tooltip:after {
  content: "";
  position: absolute;
  left: -20px;
  top: 50%;
  transform: translateY(-50%);
  border: 10px solid rgba(0, 0, 0, 0.8);
  border-color: transparent rgba(0, 0, 0, 0.8) transparent transparent;
}

.password-tooltip {
  top: -63px !important;
}
```

![Centered tooltip example](https://github.com/Connectslide121/password-input-component/blob/master/images/centered.png)

## Contributing

Contributions are what make the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are greatly appreciated.

1. Fork the Project

2. Create your Feature Branch

```sh
git checkout -b feature/AmazingFeature
```

3. Commit your Changes

```sh
git commit -m 'Add some AmazingFeature'
```

4. Push to the Branch

```sh
git push origin feature/AmazingFeature
```

5. Open a Pull Request

## Support

For support, please open an issue in the GitHub issue tracker for this project.

## Thank you for using the Password Input Component!
