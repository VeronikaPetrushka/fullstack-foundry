import Icon from '../../components/Icon/Icon';
import { Container } from '../../components/Container/Container';
import { Page } from '../../components/Page/Page';

export default function HomePage() {
  return (
    <Container>
      <Page>
        <Icon width="16" height="16" iconName="pie-chart" styles="icon-pie" />
      </Page>
    </Container>
  );
}
