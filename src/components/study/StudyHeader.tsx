import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import StyleIcon from '@mui/icons-material/Style';
import { ProgressFraction } from '../../components';
import { STUDY_MODE } from '../../constants';

interface StudyHeaderProps {
	mode: (typeof STUDY_MODE)[keyof typeof STUDY_MODE];
	step: number;
	title?: string;
	total?: number;
}

function StudyHeader({ mode, step, title, total }: StudyHeaderProps) {
	return (
		<Container>
			<div>
				<ModeInfo>
					<ImportContactsIcon color="inherit" />
					<p>{mode === STUDY_MODE.ALL ? '전체' : '오답'} 학습모드</p>
				</ModeInfo>
				<h2>{title}</h2>
			</div>
			<ProgressBox>
				<StyleIcon color="inherit" fontSize="large" />
				<ProgressFraction numerator={step} denominator={total} />
			</ProgressBox>
		</Container>
	);
}

const Container = styled.header`
	${mobileMediaQuery} {
		width: 90%;
		font-size: 14px;
	}
	${desktopMediaQuery} {
		@media (max-width: 900px) {
			width: 600px;
		}

		width: 800px;
	}
	display: flex;
	justify-content: space-between;
`;

const ModeInfo = styled.div`
	color: var(--primary-color);
	font-weight: bold;
	display: flex;
	gap: 5px;
`;

const ProgressBox = styled.div`
	color: var(--primary-color);
	display: flex;
	flex-direction: column;
	align-items: center;
`;

export default StudyHeader;
