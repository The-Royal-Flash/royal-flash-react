import React, { useState, useRef } from 'react';
import styled from '@emotion/styled';
import { Modal } from '../common';
import DriveFolderUploadIcon from '@mui/icons-material/DriveFolderUpload';
import { Button } from '@mui/material';
import { useImageMutation } from '../../hooks/mutation';

interface ChangeImageModalProps {
	open: boolean;
	title: string;
	onClose: () => void;
	updateDisplayImage: (newImagePath: string) => void;
	currentImage: string;
}

function ChangeImageModal({
	open,
	title,
	onClose,
	currentImage,
	updateDisplayImage,
}: ChangeImageModalProps) {
	const [preview, setPreview] = useState('');
	const [upload, setUpload] = useState<null | File>(null);
	const fileInputRef = useRef<null | HTMLInputElement>(null);

	const { mutate: mutateImage } = useImageMutation({
		updateDisplayImage,
		currentImage,
	});

	const openUploader = () => {
		fileInputRef.current?.click();
	};

	const changePreview = (event: React.ChangeEvent) => {
		const file = ((event.target as HTMLInputElement).files as FileList)[0];
		const url = URL.createObjectURL(file);

		setUpload(file);
		setPreview(url);
	};

	const uploadImage = (event: React.FormEvent) => {
		event.preventDefault();

		const file = (fileInputRef.current?.files as FileList)[0];

		mutateImage(file);
		onClose();
	};

	return (
		<Modal open={open} title={title} onClose={() => onClose()}>
			<ModalContents>
				<ChangeImageForm id="ChangeImageForm" onSubmit={uploadImage}>
					<ImagePreview src={preview ? preview : currentImage} />
					<Uploader onClick={openUploader}>
						<DriveFolderUploadIcon />
						이미지 업로드
						<input
							accept="image/*"
							multiple
							type="file"
							onChange={changePreview}
							ref={fileInputRef}
							hidden
						/>
					</Uploader>
					<StyledButton
						variant="contained"
						color="error"
						form="ChangeImageForm"
						type="submit"
					>
						이미지 변경
					</StyledButton>
				</ChangeImageForm>
			</ModalContents>
		</Modal>
	);
}

const ModalContents = styled.div`
	display: flex;
	flex-direction: column;
	gap: 20px;
	text-align: center;
	width: 80%;
`;

const ChangeImageForm = styled.form`
	width: 100%;
	display: flex;
	flex-direction: column;
	gap: 30px;
	align-items: center;
`;

const ImagePreview = styled.img`
	width: 120px;
	height: 120px;
	border-radius: 50%;
	object-fit: cover;
`;

const Uploader = styled.div`
	border: 2px dashed lightgray;
	border-radius: 10px;
	width: 80%;
	height: 100px;
	cursor: pointer;
	display: flex;
	justify-content: center;
	align-items: center;
	color: gray;
`;

const StyledButton = styled(Button)`
	font-size: 14px;
`;

export default ChangeImageModal;
