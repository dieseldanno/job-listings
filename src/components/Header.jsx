import {
	storyblokEditable,
	StoryblokServerComponent,
} from '@storyblok/react/rsc';

export default function Header({ blok }) {
	return (
		<header
			{...storyblokEditable(blok)}
			className="flex justify-between mx-2 my-2"
		>
			{blok.logo?.filename && <img src={blok.logo.filename} alt="Logotyp" />}
			<nav>
				<ul className="flex flex-row gap-2">
					{blok.navigation?.map((navBlok) => (
						<StoryblokServerComponent blok={navBlok} key={navBlok._uid} />
					))}
				</ul>
			</nav>
		</header>
	);
}
