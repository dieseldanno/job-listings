import { storyblokEditable } from '@storyblok/react/rsc';

export default function SearchBar({ blok, query = '', department = '' }) {
	return (
		<form
			action="/jobs"
			method="get"
			{...storyblokEditable(blok)}
			className="flex items-center gap-2"
		>
			<input type="hidden" name="department" value={department} />
			<label htmlFor="search" className="sr-only">
				{blok.label || 'Search jobs'}
			</label>
			<input
				type="search"
				id="search"
				name="q"
				placeholder={blok.placeholder}
				defaultValue={query}
				className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900"
			/>
			<button
				type="submit"
				className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
			>
				Sök
			</button>
		</form>
	);
}
