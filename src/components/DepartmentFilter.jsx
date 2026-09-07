import { storyblokEditable } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';

export default async function DepartmentFilter({
	blok,
	department = '',
	query = '',
}) {
	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/datasource_entries', {
		datasource: 'job-departments',
	});

	return (
		<form
			action="/jobs"
			method="get"
			{...storyblokEditable(blok)}
			className="flex items-center gap-2"
		>
			<label htmlFor="department" className="sr-only">
				{blok.label || 'All jobs'}
			</label>
			<select
				id="department"
				name="department"
				defaultValue={department}
				className="rounded-lg border border-gray-300 px-4 py-2 text-sm text-gray-900"
			>
				<option value="">{blok.label || 'Alla avdelningar'}</option>
				{data.datasource_entries.map(({ id, name, value }) => (
					<option key={id} value={value}>
						{name}
					</option>
				))}
			</select>
			<input type="hidden" name="q" value={query} />
			<button
				type="submit"
				className="rounded-lg bg-gray-900 px-4 py-2 text-sm font-medium text-white hover:bg-gray-700"
			>
				Filter
			</button>
		</form>
	);
}
