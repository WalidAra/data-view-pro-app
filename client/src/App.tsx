import ProfileProvider from "./providers/ProfileProvider";
import AppRouter from "./routes/AppRouter";

function App() {
  return (
    <AppRouter>
      <ProfileProvider />
    </AppRouter>
  );
}

export default App;
