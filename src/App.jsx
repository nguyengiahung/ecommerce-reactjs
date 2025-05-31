import { BrowserRouter, Route, Routes } from 'react-router-dom';
import routers from '@/routers/routers';
import { Suspense } from 'react';
import { SidebarProvider } from '@/contexts/SidebarProvider';
import Sidebar from '@components/Sidebar/Sidebar';
import { ToastProvider } from '@/contexts/ToastProvider';
import { StoreProvider } from '@/contexts/storeProvider';
function App() {
  return (
    <StoreProvider>
      <ToastProvider>
        <SidebarProvider>
          <Sidebar />
          <BrowserRouter>
            <Suspense fallback={<div>Loading...</div>}>
              <Routes>
                {routers &&
                  routers.map((item, index) => {
                    return (
                      <Route
                        key={index}
                        path={item.path}
                        element={<item.component />}
                      />
                    );
                  })}
              </Routes>
            </Suspense>
          </BrowserRouter>
        </SidebarProvider>
      </ToastProvider>
    </StoreProvider>
  );
}

export default App;
