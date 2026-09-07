import { storyblokEditable } from '@storyblok/react/rsc';
import { getStoryblokApi } from '@/lib/storyblok';
import Link from 'next/link';

export default async function JobList({ blok }) {
	const storyblokApi = getStoryblokApi();

	const { data } = await storyblokApi.getStories({
		version: 'draft',
		starts_with: 'jobs/',
		content_type: 'job-post',
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
				<div className="flex flex-col gap-8">
					{stories.map((story) => (
						<article key={story.uuid}>
							<h2 className="text-xl font-semibold">
								<Link href={`/${story.full_slug}`} className="hover:underline">
									{story.content.title}
								</Link>
							</h2>
							<p>{story.content.summary}</p>
						</article>
					))}
				</div>
			)}
		</section>
	);
}
