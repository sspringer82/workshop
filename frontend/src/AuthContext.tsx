import React, { useContext, useState } from 'react';

type ContextValue = [string, React.Dispatch<React.SetStateAction<string>>];

const AuthContext = React.createContext<ContextValue>(['', (e) => e]);

function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('Context error');
  }
  return context;
}

type Props = {};

const AuthProvider: React.FC<Props> = (props) => {
  const [auth, setAuth] = useState<string>('');
  const value: ContextValue = React.useMemo(() => [auth, setAuth], [auth]);

  return <AuthContext.Provider value={value} {...props} />;
};

export { AuthProvider, useAuth };
