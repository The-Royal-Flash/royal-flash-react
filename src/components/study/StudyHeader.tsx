import styled from '@emotion/styled';
import { desktopMediaQuery, mobileMediaQuery } from '../../utils/mediaQueries';
import ImportContactsIcon from '@mui/icons-material/ImportContacts';
import StyleIcon from '@mui/icons-material/Style';

interface StudyHeaderProps {
	mode: 'ALL' | 'WRONG';
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
					<p>{mode === 'ALL' ? '전체' : '오답'} 학습모드</p>
				</ModeInfo>
				<h2>{title}</h2>
			</div>
			<ProgressBox>
				<StyleIcon color="inherit" fontSize="large" />
				<ProgressFraction>
					<p>{step}</p>
					<p>/{total}</p>
				</ProgressFraction>
			</ProgressBox>
		</Container>
	);
}

const Container = styled.header`
	${mobileMediaQuery} {
		width: 100%;
	}
	${desktopMediaQuery} {
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

const ProgressFraction = styled.div`
	display: flex;
	margin-bottom: 10px;

	> p {
		font-weight: bold;
		font-size: 25px;
	}

	> p:nth-of-type(2) {
		color: #000;
	}
`;

export default StudyHeader;
