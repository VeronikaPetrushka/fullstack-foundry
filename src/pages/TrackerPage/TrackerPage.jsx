import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';
import WaterMainInfo from '../../components/WaterMainInfo/WaterMainInfo';
import WaterDetailedInfo from '../../components/WaterDetailedInfo/WaterDetailedInfo';

const TrackerPage = () => {
  return (
    <Container>
      <Page>
        <WaterMainInfo />
        <WaterDetailedInfo />
      </Page>
    </Container>
  );
};

export default TrackerPage;
