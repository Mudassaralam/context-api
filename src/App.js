import Home from './Pages/Home';
import PostsPage from './Pages/Posts';
import { AppProvider } from './context';

function App() {
  return (
    <AppProvider>
      <PostsPage />
    </AppProvider>
  );
}

export default App;
