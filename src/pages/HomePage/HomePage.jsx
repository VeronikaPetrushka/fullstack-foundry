import Container from '../../components/Container/Container';
import Icon from '../../components/Icon/Icon';
import Page from '../../components/Page/Page';
import css from './HomePage.module.css';

const Homepage = () => {
  return (
    <Container>
      <Page>
        <div className={css.wrap}></div>
        <div>
          <h1>HomePage</h1>
        </div>
        <Icon width="16" height="16" iconName="pie-chart" styles="icon-pie" />
      </Page>
    </Container>
  );
};

export default Homepage;
