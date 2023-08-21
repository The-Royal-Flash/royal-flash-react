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
	INPUT_EMAIL: 'INPUT_EMAIL',
	INPUT_NICKNAME: 'INPUT_NICKNAME',
	INVALID_LOGIN: 'INVALID_LOGIN',
	COPY_SUCCESS: 'COPY_SUCCESS',
	SUCCESS_CHANGE_PW: 'SUCCESS_CHANGE_PW',
	SUCCESS_CHANGE_NICKNAME: 'SUCCESS_CHANGE_NICKNAME',
} as const;

export const TOAST_MESSAGE = {
	[TOAST_MSG_TYPE.CHANGE_NICKNAME]: '기존과 동일한 닉네임입니다.',
	[TOAST_MSG_TYPE.NICKNAME_LENGTH]: '닉네임은 3글자 이상이어야 합니다.',
	[TOAST_MSG_TYPE.NEED_CHECK_DUPLICATE]: '중복 확인을 해주세요.',
	[TOAST_MSG_TYPE.INPUT_EMAIL]: '이메일을 입력해 주세요.',
	[TOAST_MSG_TYPE.INPUT_NICKNAME]: '닉네임을 입력해 주세요.',
	[TOAST_MSG_TYPE.NEED_AUTH]: '로그인 후 이용 가능합니다.',
	[TOAST_MSG_TYPE.NOT_FOUND]: '해당 페이지가 존재하지 않습니다.',
	[TOAST_MSG_TYPE.SERVER_ERROR]: '나중에 다시 시도해주세요.',
	[TOAST_MSG_TYPE.SUCCESS_DELETE]: '학습 세트가 삭제되었습니다.',
	[TOAST_MSG_TYPE.FAIL_DELETE]: '학습 세트 삭제에 실패하였습니다.',
	[TOAST_MSG_TYPE.SUCCESS_CHANGE_PW]:
		'비밀번호가 변경되었습니다. 다시 로그인하세요.',
	[TOAST_MSG_TYPE.SUCCESS_CHANGE_NICKNAME]:
		'닉네임이 성공적으로 변경되었습니다.',
} as const;
