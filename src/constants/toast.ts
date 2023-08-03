export const TOAST_TYPE = {
	ERROR: 'error',
	WARNING: 'warning',
	INFO: 'info',
	SUCCESS: 'success',
} as const;

export const TOAST_MSG_TYPE = {
	CHANGE_NICKNAME: 'CHANGE_NICKNAME',
	NICKNAME_LENGTH: 'NICKNAME_LENGTH',
	NEED_CHECK_DUPLICATE: 'NEED_CHECK_DUPLICATE',
} as const;

export const TOAST_MESSAGE = {
	[TOAST_MSG_TYPE.CHANGE_NICKNAME]: '기존과 동일한 닉네임입니다.',
	[TOAST_MSG_TYPE.NICKNAME_LENGTH]: '닉네임은 3글자 이상이어야 합니다.',
	[TOAST_MSG_TYPE.NEED_CHECK_DUPLICATE]: '중복 확인을 해주세요.',
} as const;
