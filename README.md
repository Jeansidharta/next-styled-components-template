# Nextjs, styled-components, typescript and some build niceness template

At the time of writting, this is my personal favorite stack to use, and since i've been creating lots of projects with the same packages, I've decided to make a template for it. It's main packages are:

- [`next`](https://nextjs.org/) (and `react`, as consequence)
- [`styled-components`](https://styled-components.com/)
- [`typescript`](https://www.typescriptlang.org/)
- [`imagemin-webp-webpack-plugin`](https://github.com/iampava/imagemin-webp-webpack-plugin) (and [`file-loader`](https://webpack.js.org/loaders/file-loader/) to allow this plugin to work).

## What is this template optimal for?

This template is optimal if you are looking for a small bundle-size while still using React. It's great for building somewhat complex landing pages with fast load speeds.

This template is not reall focused on web apps, but it could still be used for that job. It's not set in stone, so you could add any library you feel like using.

For smaller landing pages, I'd suggest using vanilla HTML, CSS and Javascript, since that would be way faster and simpler for that job.

## How to build and deploy?

This project was designed to be compiled into static HTMl, CSS and Javascript files, to be served by a simple CDN (this process is called Static Site Generation). To compile the project, just run `npm run build-export`. The compiled pages are then provided in the `out` folder. Serving the `out` folder through a simple static file server is enough to have your website up and running.

My personal favorite provider to quickly deploy any project is (Netlify)[https://www.netlify.com/].

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

## Why these libraries?

These are some libraries I personaly enjoy the most working with. Here, I'll list some of the reasons why:

### `react`

I personally love React for it's power and simplicity at the same time. I've been working with React for the most part of my web development time, and don't see myself willingly opting out of this tech.

I won't list all of React's pros and cons here because I believe many people have done this already in much bettter written articles, so if you're reading this and are unsure about React, I'd suggest just googling a bit about it.

### `next`

One of the biggest problems with React is it's low performance. Since it's content is rendered through javascript, an application built on React alone would only display any meaningful content after loading both the HTML and JavaScript code (which is huge if you don't properly code-split). This chain of requests needed to display content is sub-optimal. Idealy, your HTML file should include the minimum critial markup and styling to properly display content, and only after that has loaded, import the javascript to allow for user interaction.

Here is where `next` come in. This is a framework based on React that allows for SSG (static site generation). What this does is compile your React code into an HTML file for each page, and some bundled javascript files. The generated HTML already has all of it's content inside it, and would be enough to render something meaningful to the user. Then, after that content has loaded, your page will fetch the rest of your javascript code, to allow for user interaction. Therefore, the user will first load all critical data to render content, and then load the rest.

The most important downside to `next` is that you don't have access to the `window` variable inside component's `render` function. This is very insignificant, and will mostly affect you if you're using component libraries that aren't SSR-compatible (SSR = server-side rendering).

In the end, `next` has a huge benefit of optimizing your page load with it's critical information, and a very small downside of restricting your render functions a bit. I personaly think it's worth it, and it's why I love this framework so much.

### `styled-components`

React's styling solution out-of-the-box is plain old CSS. You simply import `.css` files in you components. This, however, is not very flexible, and you're restricted to manipulating styles with CSS. `next` provides some alternatives for vanilla CSS, like `CSS Modules` and `styled-jsx`, and those solutions are very cool, but they lack one thing that I personally believe makes `styled-components` superior: Semantic components.

In `styled-components`, instead of doing something like this:

```jsx
function Component () {
  return <>
    <div class='card'>
      <div class='text-container'>
        <h1 class='title'>My title!</h1>
        <p class='paragraph'>My paragraph!</p>
      </div>
      <div class='buttons-container'>
        <button>Next</button>
        <button>Prev</button>
      </div>
    </div>

    // Styled-jsx styling
    <style jsx>{`
      .card { /* Some styling... */ }
      .text-container { /* Some styling... */ }
      .buttons-container { /* Some styling... */ }
      .buttons-container { /* Some styling... */ }
    `}</style>
  </>;
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

function Component () {
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

With `styled-components` not only do you not rely on matching CSS classes anymore, but you also gain the advantage of being able to properly read your markup with semantic names! You can easily identify the purpose of each element (like `Card` or `TextContainer`), and understand how the page is organized without having to actually execute the application. Another advantage of this is that your text-editor/IDE can help you track where your styles are being defined, and which components are affected by it. And sice the styles are being applied in javascript, if you're using Typescript, you can also immediatly know if you forgot some styling prop, and have typing support for your theme-related variables.

However, `styled-components` comes with a great cost: since it applies styles through javascript, your application would only be styled when your javascript finishes loading, compiling and executing... Or does it? Since we are using `next`, we can actually render the styles on the server, and inline the critial parts on the HTML file! The greatest technical flaw of CSS-in-JS solutions is bypassed by `next` through SSG (static site generation)! It's actually better performance-wise for `next` to use `styled-components` over vanilla CSS, because Webpack can detect all of your page's styling dependencies, and only load the important stuff that you need right now! it's automatically code-splitting the styles for you.

I recognize there are some personal preferences in the community about CSS-in-JS soltuons, but with SSG, I don't have a very reasonble argument against this kind of technology other than architectural preference.

### `imagemin-webp-webpack-plugin`

Images are large. They are very large. Most of a page's size is in it's images. Therefore, optimizing images is extremely important for keeping your page fast, and this is exactly what this dependency does.

This webpack plugin will minify all `jpeg`, `png` and `gif` images being used in your application, and create a copy of it in the `webp` format. This will help your user to load the minimum ammount of data possible, while all we have to do is throw the images in the applications, without having to worry about optimization.

Since this plugin only transforms the image, I had to install the `file-loader` plugin to actually load the images to webpack.

## What about these packages?

Here are some packages that I consciously opted-out of, and the reasons why:

- **Redux**: I've used redux a few times in my carrer, but never with pleasure. This is purely personal opinion, but I'd prefer managing my own state through React's native context API instead of using Redux. I'll maintain may stand on this until I find a better lightweight library for state management.

- **Material UI**: I like this library a lot, but I feel like it's components weigh a lot on the final bundle size. Also, your designer has to be aware that you are using Material UI, or you may end up having to fight the library to achieve what the designer gave you. I feel like this limits too much of the app's design, and would rather develop my own components.

Other packages are either too small for me to mention, too specific to be added to a template, or I've never heard of them.