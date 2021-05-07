# stylis-important-plugin
Adds `!important` to transpiled to your react components with styled-components

# Install
```
npm install stylis-important-plugin
```
or
```
yarn add stylis-important-plugin
```

## Use case
This plugin can be used with styled-components v5+, in cases where you need to add `!important` on your components but you want to keep your JSX components without `!important` property [StyleSheetManager](https://www.styled-components.com/docs/api#stylesheetmanager)

## Example
```jsx
import stylisImportantPlugin from 'stylis-important-plugin';

const StyledDiv = styled.div`
  font-size: 2em;
  font-weight: bold;
  color: rebeccapurple;
`

render() {
  <StyleSheetManager stylisPlugins={[stylisImportantPlugin]}>
    <StyledDiv>...</StyledDiv>
  </StyleSheetManager>
}
```

## Output
```css
.1v3o04z {
  font-size: 2em !important;
  font-weight: bold !important;
  color: rebeccapurple !important;
}
```
