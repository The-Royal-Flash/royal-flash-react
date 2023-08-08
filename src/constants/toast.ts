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
	NEED_AUTH: 'NEED_AUTH',
	NOT_FOUND: 'NOT_FOUND',
	SERVER_ERROR: 'SERVER_ERROR',
	SUCCESS_DELETE: 'SUCCESS_DELETE',
	FAIL_DELETE: 'FAIL_DELETE',
} as const;

export const TOAST_MESSAGE = {
	[TOAST_MSG_TYPE.CHANGE_NICKNAME]: '기존과 동일한 닉네임입니다.',
	[TOAST_MSG_TYPE.NICKNAME_LENGTH]: '닉네임은 3글자 이상이어야 합니다.',
	[TOAST_MSG_TYPE.NEED_CHECK_DUPLICATE]: '중복 확인을 해주세요.',
	[TOAST_MSG_TYPE.NEED_AUTH]: '로그인 후 이용 가능합니다.',
	[TOAST_MSG_TYPE.NOT_FOUND]: '해당 페이지가 존재하지 않습니다.',
	[TOAST_MSG_TYPE.SERVER_ERROR]: '나중에 다시 시도해주세요.',
	[TOAST_MSG_TYPE.SUCCESS_DELETE]: '학습 세트가 삭제되었습니다.',
	[TOAST_MSG_TYPE.FAIL_DELETE]: '학습 세트 삭제에 실패하였습니다.',
} as const;
