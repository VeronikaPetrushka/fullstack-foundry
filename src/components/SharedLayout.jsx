import { Suspense } from 'react';
import Container from './Container/Container';

const SharedLayout = ({children}) => {
    return (
   <Container>
      <Suspense fallback={null}>{children}</Suspense>
   </Container>
    )
}

export default SharedLayout