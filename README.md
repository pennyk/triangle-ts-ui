This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## About the Triangle App
The Triangle App was created as part of a technical test. It provides information about the triangle, determining what type it is based on the side lengths provided by the user. The type of triangle can be equilateral, isosceles or scalene.

## Design Decisions and Implementation Choices
 - Uses Tradeshift UI for form elements
 - 'Create React App' project template
 - Form labels and input fields each have a separate line for easier reading/scanning
 - Only custom CSS for implemented Tradeshift UI components were set up to save time and space, but if I was planning to make the css more future proof, I would add the custom styles for more related components.
 - I limited the maximum size of the main content area to improve appearance on wider displays.

## Known Issues
 - There is a weird bug where the input field is highlighted as invalid if the value entered is in floating point format (e.g. 1.3) instead of an integer (e.g. 1), with the exception of numbers that have only zeros after the decimal point (1.0, 1.00).
 - Input field error messages are indented too much (in my opinion).

## Future Tasks and Nice-To-Haves
 - Add more tests (functions, accessibility)
 - Refactoring for scalability: if, for example, the app was going to be updated to identify types of four-sided polygons, it would be better to use arrays when processing the input fields, instead of giving them individual IDs (sideX, sideY, sideZ).
 - The results area (#TriangleResults) doesn't catch the eye at the moment, and could benefit from larger text and a different coloured background.
 - Trim whitespace from input field to improve chances of accepting 'almost valid' input
 - Decimal point vs decimal comma
 - (nice to have) history of triangle results with one entry per line e.g "Scalene: 3,4,5" so user can make comparisons
 - (nice to have) a graphical to-scale representation of the triangle, with side lengths converte to a percentage so it fits on the screen

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
