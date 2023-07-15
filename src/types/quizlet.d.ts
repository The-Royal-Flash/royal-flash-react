/** 학습세트 기본 정보 */
interface BaseQuizletInfo {
	/** 학습세트 제목 */
	title: string;
	/** 학습세트 설명 */
	description: string;
	/** 학습세트 태그 목록 */
	tagList: string[];
}

/** 암키 카드 */
interface QuestionCard {
	/** 문제 */
	question: string;
	/** 정답 */
	answer: string;
	/** 관련 정보 url */
	link?: string;
}

/** 학습 기록이 있는 학습 세트의 기본 정보 */
interface BaseMyQuizlet {
	/** 학습 (완료) 횟수 */
	studyCount: number;
	/** 문제(질문) 수 */
	numOfQuestions: number;
	/** 복습할(오답노트) 문제 수 */
	numOfQuestionsToReview: number;
	/** 최신 학습 일시 */
	lastQuizDate: Date; // string
}

/** 페이지네이션 필수 정보 */
interface BasePagenation {
	/** 현재 페이지 번호 */
	page: number;
	/** 전체 페이지 수 */
	totalPages: number;
}

/** 학습 세트 정보 */
interface QuizletResponse extends BaseQuizletInfo {
	questionCardList: Array<QuestionCard>;
}

/** 학습 세트 상세 정보  */
interface QuizletDetailResponse
	extends BaseQuizletInfo,
		Partial<BaseMyQuizlet> {
	/** 암기 카드의 문제 목록 */
	questionList: string[];
}

/** 학습세트 검색 페이지에서 보여질 학습세트 정보 */
interface SearchQuizlet extends QuizletInfo {
	/** 암기 카드 수 */
	numOfCards: number;
	/** 학습세트 작성자 */
	owner: string; // userId
	/** 학습세트 작성자 사진 url */
	ownerAvatarUrl?: string;
}

/** 나의 학습세트 검색 페이지에서 보여질 학습세트 정보 */
interface MyQuizlet extends BaseMyQuizlet {
	/** 학습세트 제목 */
	title: string;
	/** 태그 목록 */
	tagList: string[];
}

/** 학습세트 검색 결과 - 학습세트 목록 */
interface SearchResponse extends BasePagenation {
	/** 학습세트 목록 검색 결과 */
	quizletList: Array<SearchQuizlet>;
}

/** 나의 학습세트 검색 결과 - 학습세트 목록 */
interface MyQuizletSearchResponse extends BasePagenation {
	/** 나의 학습세트 목록 검색 결과  */
	quizletList: Array<MyQuizlet>;
}
