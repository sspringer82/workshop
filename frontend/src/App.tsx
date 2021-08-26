import './App.css';
import { AuthProvider } from './AuthContext';
import Start from './Start';
import { TodoProvider } from './TodoContext';

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <TodoProvider>
          <Start />
        </TodoProvider>
      </AuthProvider>
    </div>
  );
}

export default App;
