import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function Toolbar({ blok, ...rest }) {
	return (
		<div
			{...storyblokEditable(blok)}
			className="mx-auto mb-10 flex max-w-3xl flex-wrap items-center gap-4 px-4"
		>
			{blok.blocks?.map((nestedBlok) => (
				<StoryblokServerComponent
					blok={nestedBlok}
					key={nestedBlok._uid}
					{...rest}
				/>
			))}
		</div>
	);
}
