import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function Toolbar({ blok, ...rest }) {
	return (
		<div {...storyblokEditable(blok)} className="mb-8 flex flex-wrap gap-3">
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
