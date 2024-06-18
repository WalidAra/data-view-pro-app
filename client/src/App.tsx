import ProfileProvider from "./providers/ProfileProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <ProfileProvider>
      <AppRouter />
    </ProfileProvider>
  );
}

export default App;
