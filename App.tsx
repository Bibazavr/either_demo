import 'react-native-gesture-handler';
import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { login } from './network/login';
import { IUser, userData } from './network/userData';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();
  const [user, setUser] = useState<IUser | null>(null);
  const token = 'bibazavr';

  useEffect(() => {
    const init = async () => {
      await login(token);
      await userData(69).then((r) => {
        setUser(r.data);
      });
      // и тут вызываются море других методов
    };

    init().then((resp) => console.log('loading complete', resp));
  }, []);

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </SafeAreaProvider>
    );
  }
}
