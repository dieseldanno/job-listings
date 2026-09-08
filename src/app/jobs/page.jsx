import { getStoryblokApi } from '@/lib/storyblok';
import { StoryblokServerComponent } from '@storyblok/react/rsc';

export default async function JobsPage({ searchParams }) {
	const params = await searchParams;
	const query = params.q ?? '';
	const department = params.department ?? '';

	const storyblokApi = getStoryblokApi();
	const { data } = await storyblokApi.get('cdn/stories/jobs/', {
		version: 'published',
	});

	return (
		<StoryblokServerComponent
			blok={data.story.content}
			query={query}
			department={department}
		/>
	);
}
