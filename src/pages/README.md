# `pages` folder

This is a special folder for Nextjs. Every file here is rendered as a single unique page by Next. You can read more about this in the [docs](https://nextjs.org/docs/basic-features/pages).

To allow for more flexibility, all pages except `_app.tsx` and `_document.tsx` should not do anything except import a component from the `containers` folder, and export it as default. In this way, the `containers` folder acts like a `pages` folder, but the developer can choose if a file is directly translated as a page, or just used as an auxiliary file.

## Why is the separation between `pages` and `containers` useful?

Consider you have a page like this:

<!-- Note: use spaces instead of tabs for better rendering in browsers -->

```jsx
function AuxiliarComponent({ arg }) {
	const transformedArg = arg.doTheThing();

	return <SomeJsxCode someArgument={transformedArg} />;
}

export default function HomePage() {
	return (
		<div>
			<AuxiliarComponent arg={1} />
			<AuxiliarComponent arg={2} />
			<AuxiliarComponent arg={3} />
		</div>
	);
}
```

In this code, we have two somewhat distinct components that are very closely related. Placing the `AuxiliarComponent` in a file inside the `components` folder would be confusing, since the component's only purpose is to serve the `HomePage` component, but creating a file alongside the `HomePage` component's file (considering the `HomePage`'s file is inside th `page` folder) would create a whole page dedicated for it.

The proposed solution is for the files inside the `page` folder have the single responsability of deciding which component should create a page and which shouldn't. The responsability of actually defining the components will now fall to the `containers` folder. This way, we could have multiple files with lots of auxiliar components without accidentaly creating a new page.
