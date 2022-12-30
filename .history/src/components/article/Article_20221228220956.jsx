import React from 'react';
import './article.css';

const Article = (imgUrl, title) => (
	<div class="item-1">
		<a
			href="https://design.tutsplus.com/articles/international-artist-feature-malaysia--cms-26852"
			className="card"
		>
			<div
				className=="thumb"
				style="background-image: url(https://s3-us-west-2.amazonaws.com/s.cdpn.io/210284/flex-1.jpg);"
			></div>
			<article>
				<h1>International Artist Feature: Malaysia</h1>
				<span>Mary Winkler</span>
			</article>
		</a>
	</div>
);

export default Article;
