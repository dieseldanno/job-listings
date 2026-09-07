import { renderRichText } from '@storyblok/react';
import { storyblokEditable } from '@storyblok/react/rsc';
import Link from 'next/link';

export default function JobPost({ blok }) {
	const renderedContent = renderRichText(blok.content);

	return (
		<article
			{...storyblokEditable(blok)}
			className="mx-auto max-w-3xl px-4 py-12"
		>
			<p className="mb-6">
				<Link href="/jobs" className="text-sm text-gray-500 hover:underline">
					← Tillbaka till jobblistan
				</Link>
			</p>

			<div className="rounded-xl border border-gray-200 p-6">
				<h1 className="text-3xl font-bold">{blok.title}</h1>
				<p className="mt-1 text-sm text-gray-500">{blok.location}</p>
				<p className="mt-3 text-gray-600">{blok.summary}</p>

				<div className="mt-4 flex items-center gap-3">
					{blok.department && (
						<span className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600">
							{blok.department}
						</span>
					)}
					<span className="text-xs text-gray-400">
						{new Date(blok.publishedAt).toLocaleDateString('sv-SE')}
					</span>
				</div>
			</div>

			<div
				className="prose mt-8 max-w-none"
				dangerouslySetInnerHTML={{ __html: renderedContent }}
			/>
		</article>
	);
}
