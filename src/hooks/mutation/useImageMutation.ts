import { useMutation, useQueryClient } from '@tanstack/react-query';
import { uploadImage } from '../../api';
import { useToastContext } from '../../contexts/ToastContext';
import { TOAST_TYPE, TOAST_MSG_TYPE } from '../../constants/toast';

interface useImageMutationProps {
	currentImage: string;
	updateDisplayImage: (newImagePath: string) => void;
}

const useImageMutation = ({
	updateDisplayImage,
	currentImage,
}: useImageMutationProps) => {
	const queryClient = useQueryClient();
	const { addToast } = useToastContext();

	const { mutate } = useMutation(uploadImage, {
		onMutate(newFile) {
			queryClient.cancelQueries();

			const imageUrl = URL.createObjectURL(newFile);
			updateDisplayImage(imageUrl);

			return { prevImage: currentImage };
		},
		onError(_, __, context) {
			updateDisplayImage(context!.prevImage as string);
			addToast({
				type: TOAST_TYPE.ERROR,
				msg_type: TOAST_MSG_TYPE.SERVER_ERROR,
			});
		},
		onSuccess() {
			addToast({
				type: TOAST_TYPE.SUCCESS,
				msg_type: TOAST_MSG_TYPE.SUCCESS_CHANGE_IMAGE,
			});
		},
	});

	return { mutate };
};

export default useImageMutation;
