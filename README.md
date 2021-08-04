# Nextjs, styled-components, typescript and some build niceness template

At the time of writting, this is my personal favorite stack to use, and since i've been creating lots of projects with the same packages, I've decided to make a template for it. It's main packages are:

- [`next`](https://nextjs.org/) (and `react`, as consequence)
- [`styled-components`](https://styled-components.com/)
- [`react-toastify`](https://github.com/fkhadra/react-toastify#readme)
- [`typescript`](https://www.typescriptlang.org/)
- [`prettier`](https://prettier.io/)
- [`imagemin-webp-webpack-plugin`](https://github.com/iampava/imagemin-webp-webpack-plugin) (and [`file-loader`](https://webpack.js.org/loaders/file-loader/) to allow this plugin to work).
- [`husky`](https://github.com/typicode/husky)
- [`lighthouse`](https://github.com/GoogleChrome/lighthouse) for quality control of the whole page.

## What is this template optimal for?

This template is optimal if you are looking for a small bundle-size while still using React. It's great for building somewhat complex landing pages with fast load speeds.

This template is not really focused on web apps, but it could still be used for that job. It's not set in stone, so you could add any library you feel like using.

For smaller landing pages, I'd suggest using vanilla HTML, CSS and JavaScript, since that would be way faster and simpler for that job.

## How to build and deploy?

This project was designed to be compiled into static HTML, CSS and JavaScript files, to be served by a simple CDN (this process is called Static Site Generation). To compile the project, just run `npm run build-export`. The compiled pages are then generated in the `out` folder. Serving the `out` folder through a simple static file server is enough to have your website up and running.

This project already has a [pm2](https://pm2.keymetrics.io/) configuration file, if you'd like to use that to serve the page in your own server.

If you want to use a third-party to serve your website, I'd recommend my personal favorite provider to quickly deploy any project: [Netlify](https://www.netlify.com/).

### Deploying on Nelify

Netlify is a CDN. Therefore, you can't deploy Next.js projects that use Server-side rendering. You can only deploy Next.js projects that use Static site generation. There are two possibilities to deploy there: Through the drag-and-drop interface, or through a git repository.

#### Using the simple drag-and-drop interface

Netlify Allows you to just drag and drop you your Static Generated Files. In order to use that, you just have to build your site using `npm run build-export` and drag the folder `out` to Netlify's interface.

#### Using a git repository

If you want to use the Continuous Deployment option through a git repository, all you have to do is connect your github or gitlab account on Netlify, select the repository you want to deploy, and specify the build command and the deploy folder as such:

- Build command: `npm run build-export`
- Deploy folder: `out`

## How are the folders organized?

The root of the project is reserved for configuration files. The only other relevant folder is the `src` folder, which contains your whole application. Each subfolder of `src` has a `README.md` explaining what it should contain, and it's purpose on the project.

Always remember this is not set in stone, and is simply the best way I've developed to organize my project at the time of writting.

## Some small quirks about this template that you should know

These are some things you should know when using this template to avoid some weird bugs, or unoptimal performance.

- All `jpeg`, `png` and `gif` images have to be imported using the `require` function, and **NOT** through the `public` folder. This is to ensure the images are properly optimized. Read more about this in my section about `imagemin-webp-webpack-plugin`.

  - `svg` images can be imported both through `require` or through the public folder, since they are not optimized, but I'd suggest always using the `require` function for consistency
  - If you want to support other image extensions, you'll have to change a few things in the `next.config.js` file. There should be enough comments in there to guide you in this mission. Webpack is kind of a nightmare (for me), so Good Luck.

- the `src/pages/_app.tsx` and `src/pages/_document.tsx` files should not contain any styled-components component definition. Doing so will throw the `class names don't match` console warning, which could potentialy cause some very hard to find bugs, so just avoid it. I'm not exactly sure why this happens, but I think it has someting to do with how `styled-components` compiles when using SSR (server-side rendering).
  - You can still import files that have `styled-components` component declarations without any warnings

## Git Hooks

All git hooks are specified in the `package.json` file, on the `husky` entry

### Pre-push

#### Lint check

Any time you push code to any remote, the `npm run lint` script will be run, and if it fails, the code won't actually be pushed. This is to prevent failed builds when you're using a Continuous Deployment tool.

#### Lighthouse check

If you try to specificaly push to the Master branch, a Chrome's lighthouse audit will be performed on the website, making sure any code that is being pushed to the Master branch is not of substandard quality.

The configurations for this script can be found on `scripts/lighthouse.config.js`, and should be nicely documented there.

## Npm scripts

This project has the following scripts:

- `dev`: Starts the dev server. This is what you'll be primarily doing.
- `build`: Builds the website for server-side rendering.
- `start`: Starts the server-side rendering server, that will serve the content built by the `build` command. In order for the `start` command to work, you need to run the `build` command first.
- `export`: Runs the static-site generator. It'll generate static HTML files based on your last build. In order for the `export` command to work, you need to run the `build` command first.
- `build-export`: both builds and exports the website.
- `serve`: This one will run the `build-export` command, and will serve the result from a static content server.
- `lint`: Checks for any linting problem.
- `prettier`: Runs prettier on the whole project.
- `lint`: Checks for typescript or linting errors.
- `pm2`: This will register the website on the pm2 program. If you're not using pm2, you can remove this.

## Why these libraries?

These are some libraries I personaly enjoy the most working with. Here are some of the reasons why:

### `react`

I personally love React for it's power and simplicity at the same time. I've been working with React for the most part of my web development career, and don't see myself willingly opting out of this tech.

I won't list all of React's pros and cons here because I believe many people have done this already in much bettter written articles, so if you're reading this and are unsure about React, I'd suggest just googling a bit about it.

### `next`

One of the biggest problems with React is it's low performance. Since it's content is rendered through JavaScript, an application built on React alone would only display any meaningful content after loading both the HTML and JavaScript code (which is huge if you don't properly code-split). This chain of requests needed to display content is sub-optimal. Idealy, your HTML file should include the minimum critial markup and styling to properly display content, and only after that has loaded, import the JavaScript to allow for user interaction.

This is where `next` comes in. `next` is a framework based on React that allows for SSG (static site generation). What this does is compile your React code into an HTML file for each page, and some bundled JavaScript files. The generated HTML already has all of it's critical content inside it, and is enough to render something meaningful to the user. After the critical content has loaded, your page will fetch the rest of your JavaScript code, to allow for user interaction. Therefore, the user will first load all critical data to render content, and then load the rest.

The most important downside to `next` is that you don't have access to the `window` variable inside any component's `render` function. This is very insignificant, and will mostly affect you if you're using component libraries that aren't SSR-compatible (SSR = server-side rendering).

In the end, `next` has a huge benefit of optimizing your page load with it's critical information, and a very small downside of restricting your render functions a bit. I personaly think it's worth it, and it's why I love this framework so much.

### `styled-components`

React's styling solution out-of-the-box is plain old CSS. You simply import `.css` files in you components. This, however, is not very flexible, and you're restricted to manipulating styles with CSS. `next` provides some alternatives for vanilla CSS, like `CSS Modules` and `styled-jsx`, and those solutions are very cool, but they lack one thing that I personally believe makes `styled-components` superior: Semantic components.

In `styled-components`, instead of doing something like this:

```jsx
function Component() {
	return (
		<>
			<div class="card">
				<div class="text-container">
					<h1 class="title">My title!</h1>
					<p class="paragraph">My paragraph!</p>
				</div>
				<div class="buttons-container">
					<button>Next</button>
					<button>Prev</button>
				</div>
			</div>
			// Styled-jsx styling
			<style jsx>{`
				.card {
					/* Some styling... */
				}
				.text-container {
					/* Some styling... */
				}
				.buttons-container {
					/* Some styling... */
				}
				.buttons-container {
					/* Some styling... */
				}
			`}</style>
		</>
	);
}
```

You can have something like this:

```jsx
const Card = styled.div`
	/* Some styling... */
`;

const TextContainer = styled.div`
	/* Some styling... */
`;

const Title = styled.h1`
	/* Some styling... */
`;

const Paragraph = styled.p`
	/* Some styling... */
`;

const ButtonsContainer = styled.div`
	/* Some styling... */
`;

const Button = styled.button`
	/* Some styling... */
`;

function Component() {
	return (
		<Card>
			<TextContainer>
				<Title>My title!</Title>
				<Paragraph>My paragraph!</Paragraph>
			</TextContainer>
			<ButtonsContainer>
				<Button>Next</Button>
				<Button>Prev</Button>
			</ButtonsContainer>
		</Card>
	);
}
```

Which, in my opinion, is a lot cleaner. You can quickly find which styles are being applied to which components, and your markup is much more readable.

With `styled-components` not only do you not rely on matching CSS classes anymore, but you also gain the advantage of being able to properly read your markup with semantic names! You can easily identify the purpose of each element (like `Card` or `TextContainer`), and understand how the page is organized without having to actually execute the application. Another advantage of this is that your text-editor/IDE can help you track where your styles are being defined, and which components are affected by it. And since the styles are being applied through JavaScript and you're using Typescript, you can also immediatly know if you forgot some styling prop, and have typing support for your theme-related variables.

However, `styled-components` comes with a great cost: since it applies styles through JavaScript, your application would only be styled when your JavaScript code finishes loading, compiling and executing... Or does it? Since we are using `next`, we can actually render the styles on the server, and inline the critial parts on the HTML file! The greatest technical flaw of CSS-in-JS solutions is bypassed by `next` through SSG (static site generation)! It's actually better performance-wise for `next` to use `styled-components` over vanilla CSS, because Webpack can detect all of your page's styling dependencies, and only load the important stuff that you need right now! it's automatically code-splitting the styles for you.

I recognize that there is a somewhat heated debate in the web community about CSS-in-JS solutions, but with SSG, I can't see a very reasonable argument against this kind of technology other than architectural preference.

### `react-toastify`

This is just a small toast library. It's simple to use, simple to setup and has a nice API. Also, I like it's visual style.

### Prettier

I like prettier because it's very automatic on code formating. I personally don't agree with all of it's rules on formating, but I think adding it to the project is worth it because it saves a lot of time with it's code formating rules.

### `imagemin-webp-webpack-plugin`

Images are large. They are very large. Most of a page's size is in it's images. Therefore, optimizing images is extremely important for keeping your page fast, and this is exactly what this dependency does.

This webpack plugin will minify all `jpeg`, `png` and `gif` images being used in your application, and create a copy of it in the `webp` format. This will help your user to load the minimum ammount of data possible, while all we have to do is throw the images in the applications, without having to worry about optimization.

Since this plugin only transforms the image, I had to install the `file-loader` plugin to actually load the images to webpack.

### `husky`

This one is used primarily to prevent incorrect code to be pushed to your remote repository. It's very useful because `next` production builds will fail if there are any typing errors, while development builds will work fine.So if you have some sort of Continuous Integration setup with your repository, when pushing your code to the master branch, it could fail to build in the last step because of some unseen typing warning.

### `lighthouse`

Google's lighthouse auditing is very good at catching easy to spot problems with the page, and is generally a good way of telling if you've messed something up.

However, auditing a webpage may be very easy to do, but is also very hard to remember. It can also be annoying if you have to build the app, serve it, open in a browser and audit it manually. Therefore, this is a perfect task to be automated, and is exactly what this library is here for.

It's not that simple though. I had to write a script on my own to run the auditing logic, and it was no easy task, but it sure has been very useful to me, and I hope it'll be of use to you.

## What about these packages?

Here are some packages that I consciously opted-out of, and the reasons why:

- **Redux**: I've used redux a few times in my carrer, but never with pleasure. This is purely personal opinion, but I'd prefer managing my own state through React's native context API instead of using Redux. I'll maintain my stand on this until I find a better lightweight library for state management.

- **Material UI**: I like this library a lot, but I feel like it's components weigh a lot on the final bundle size. Also, your designer has to be aware that you are using Material UI, or you may end up having to fight the library to achieve what the designer gave you. I feel like this limits the app's design too much, and would rather create my own components.

- **GraphQL**: There are two reasons why I didn't add GraphQL to this template. The first is because this template is more focused on landing pages, and it's somewhat rare to need server communication in a landing-page. The second reason is because I personally dislike GraphQL. A lot. I've only had bad experiences with this technology, and would rather use something else.

- **eslint or any linter**: I don't like linters. It's a personal opinion, but I really don't. Since this template is around my personal preferences, I've chosen not to add any. The project has a very basic linting script, but it's simply a check for typescript errors.

Other packages are either too small for me to mention, too specific to be added to a template, or I've never heard of them (or forgot about them).

Do remember that if you're using this template you can add whatever library you want. These are all my personal picks, and I won't hate you for not sticking to them :)
