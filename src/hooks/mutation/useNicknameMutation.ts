import { useMutation, useQueryClient } from '@tanstack/react-query';
import { updateNickname } from '../../api';
import { useToastContext } from '../../contexts/ToastContext';
import { TOAST_TYPE, TOAST_MSG_TYPE } from '../../constants/toast';

interface useNicknameMutationProps {
	updateDisplayNickname: (newNickname: string) => void;
	currentNickname: string;
}

const useNicknameMutation = ({
	updateDisplayNickname,
	currentNickname,
}: useNicknameMutationProps) => {
	const queryClient = useQueryClient();
	const { addToast } = useToastContext();

	const { mutate } = useMutation(updateNickname, {
		onMutate(newNickname) {
			queryClient.cancelQueries();
			updateDisplayNickname(newNickname);

			return { prevNickname: currentNickname };
		},
		onError(_, __, context) {
			updateDisplayNickname(context!.prevNickname as string);
			addToast({
				type: TOAST_TYPE.ERROR,
				msg_type: TOAST_MSG_TYPE.SERVER_ERROR,
			});
		},
		onSuccess() {
			addToast({
				type: TOAST_TYPE.SUCCESS,
				msg_type: TOAST_MSG_TYPE.SUCCESS_CHANGE_NICKNAME,
			});
		},
	});

	return { mutate };
};

export default useNicknameMutation;
