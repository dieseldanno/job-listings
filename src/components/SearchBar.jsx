import { storyblokEditable } from '@storyblok/react/rsc';

export default function SearchBar({ blok, query = '', department = '' }) {
	return (
		<form
			action="/jobs"
			method="get"
			{...storyblokEditable(blok)}
			className="flex gap-2"
		>
			<input type="hidden" name="department" value={department} />
			{blok.label && <label htmlFor="search">{blok.label}</label>}
			<input
				type="search"
				id="search"
				name="q"
				placeholder={blok.placeholder}
				defaultValue={query}
			/>
			<button type="submit">Search</button>
		</form>
	);
}
