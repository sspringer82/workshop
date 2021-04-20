import React, {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from 'react';

type ContextValue = [string, Dispatch<SetStateAction<string>>];

export const PersonContext = React.createContext<ContextValue>(['', (e) => e]);

type Props = {};
const ContextProvider: React.FC<Props> = (props) => {
  const [state, setState] = useState('Klaus');
  const value: ContextValue = React.useMemo(() => [state, setState], [state]);
  return <PersonContext.Provider value={value} {...props} />;
};

const Context: React.FC = () => {
  return (
    <div>
      <ContextProvider>
        <Intermediate />
      </ContextProvider>
    </div>
  );
};

const Intermediate: React.FC = () => {
  const [state] = useContext(PersonContext);
  return (
    <div>
      {state}
      <Child />
    </div>
  );
};

const Child: React.FC = () => {
  const [state, setState] = useContext(PersonContext);
  useEffect(() => {
    setTimeout(() => {
      setState('Claudia');
    }, 1000);
  });
  return <div>Child: {state}</div>;
};

export default Context;
