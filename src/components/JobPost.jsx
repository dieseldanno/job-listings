import { renderRichText } from '@storyblok/react';
import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

export default function JobPost({ blok }) {
	const renderedContent = renderRichText(blok.content);

	return (
		<article
			{...storyblokEditable(blok)}
			className="mx-auto max-w-2xl px-4 py-12"
		>
			<p className="mb-6">
				<Link href="/jobs" className="text-sm text-gray-500 hover:underline">
					← back to job listings
				</Link>
			</p>

			<h1 className="text-4xl font-bold">{blok.title}</h1>
			<p className="mt-2 text-lg text-gray-600">{blok.summary}</p>
			<p className="mt-2 text-lg text-gray-600">{blok.department}</p>
			<p className="mt-2 text-lg text-gray-600">{blok.location}</p>
			<p className="mt-2 text-lg text-gray-600">
				{new Date(blok.publishedAt).toLocaleDateString('sv-SE')}
			</p>

			<div
				className="prose mt-8 max-w-none"
				dangerouslySetInnerHTML={{ __html: renderedContent }}
			/>
		</article>
	);
}
