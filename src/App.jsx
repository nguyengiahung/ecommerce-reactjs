import Header from '@components/Header/Header';
import Footer from '@components/Footer/Footer';
import MainLayout from '@components/Layout/Layout';
import Button from './components/Button/Button';

function App() {

  return (
    <>
      <MainLayout>
        <Header />
        Content
        <Footer />
        {/* <Button /> */}
      </MainLayout>
    </>
  );
}

export default App;
