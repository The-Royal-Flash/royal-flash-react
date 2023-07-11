import React from 'react';

function Main() {
	return (
		<div>
			<h2>메인</h2>
			{Array(10)
				.fill(
					<p>
						Lorem ipsum dolor, sit amet consectetur adipisicing elit. Expedita,
						enim nemo nostrum quis, maxime deleniti alias sapiente voluptatibus
						praesentium eaque sequi porro cumque est reprehenderit, doloribus
						nihil harum perspiciatis fuga.
					</p>,
				)
				.map((p) => p)}
		</div>
	);
}

export default Main;
