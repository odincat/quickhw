import Head from "next/head";
import { titleFormat } from "@lib/static";

interface MetaTags {
	title: string;
	defaultTitleFormat: Boolean;
	description?: string;
	image?: string;
	color?: string;
}

const MetatagConfig = ({ title, defaultTitleFormat, description, image, color }:MetaTags) => {
	var titleString: string;
	if(!defaultTitleFormat) {
		titleString = title;
	} else {
		titleString = title + titleFormat;
	}

	return(
		<Head>
			<title> 
				{titleString}
			</title>
			<meta name="description" content={description} />

			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={titleString} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={image} />

			<meta property="og:type" content="website" />
			<meta property="og:title" content={titleString} />
			<meta property="og:description" content={description} />
			<meta property="og:image" content={image} />

			<meta property="theme-color" content={color} /> 
		</Head>
	);
};

export default MetatagConfig;