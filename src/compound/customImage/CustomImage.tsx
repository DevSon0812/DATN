// components/CustomImage.tsx

import Image from 'next/image';
import React, { useState } from 'react';

interface CustomImageProps {
	src?: string;
	alt: string;
	defaultSrc: string;
	width?: number;
	height?: number;
}

const CustomImage: React.FC<CustomImageProps> = ({ src, alt, defaultSrc, width, height, ...props }) => {
	const [imageSrc, setImageSrc] = useState<string>(src || ''); // Provide a default value

	const [error, setError] = useState<boolean>(false);

	const handleError = () => {
		setError(true);
		setImageSrc(defaultSrc);
	};

	return (
		<div className="custom-image-wrapper">
			{error ? (
				<img
					src={defaultSrc}
					alt={alt}
					width={width}
					height={height}
					{...props}
				/>
			) : (
				<Image
					className="image-item"
					width={width}
					height={height}
					src={imageSrc}
					alt={alt}
					onError={handleError}
					{...props}
				/>
			)}
		</div>
	);
};

export default CustomImage;
