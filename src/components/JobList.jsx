import { storyblokEditable } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import Link from 'next/link';

export default async function JobList({ blok, query = '', department = '' }) {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.getStories({
		version: 'published',
		starts_with: 'jobs/',
		content_type: 'job-post',
		...(query && { search_term: query }),
		...(department && { filter_query: { department: { in: department } } }),
	});

	const stories = data.stories;
	return (
		<section
			{...storyblokEditable(blok)}
			className="mx-auto max-w-3xl px-4 py-12"
		>
			{blok.heading && (
				<h1 className="mb-8 text-3xl font-bold">{blok.heading}</h1>
			)}

			{stories.length === 0 ? (
				<p className="text-gray-500">
					{blok.empty_text || 'No jobs posted yet.'}
				</p>
			) : (
				<div className="flex flex-col gap-4">
					{stories.map((story) => (
						<article
							key={story.uuid}
							className="rounded-xl border border-gray-200 p-5 hover:shadow-sm transition"
						>
							<h2 className="text-xl font-semibold">
								<Link href={`/${story.full_slug}`} className="hover:underline">
									{story.content.title}
								</Link>
							</h2>
							<p className="mt-1 text-sm text-gray-500">
								{story.content.location}
							</p>
							<p className="mt-2 text-gray-600">{story.content.summary}</p>
							{story.content.department && (
								<span className="mt-3 inline-block rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
									{story.content.department}
								</span>
							)}
						</article>
					))}
				</div>
			)}
		</section>
	);
}
