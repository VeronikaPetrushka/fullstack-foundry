import { WelcomeSection } from '../../components/WelcomeSection/WelcomeSection';
import { AdvantagesSection } from '../../components/AdvantagesSection/AdvantagesSection';
import Container from '../../components/Container/Container';
import Page from '../../components/Page/Page';
import React from 'react';

import { BasicModal } from '../../components/Modal/Modal';
import LogOutModal from '../../components/LogOutModal/LogOutModal';

const Homepage = () => {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <Container>
      <Page>
        <WelcomeSection />
        <AdvantagesSection />
      </Page>
      <div>
        <button onClick={openModal}>Open vera</button>
        <BasicModal isOpen={modalIsOpen} onClose={closeModal}>
          <LogOutModal />
        </BasicModal>
      </div>
    </Container>
  );
};

export default Homepage;
