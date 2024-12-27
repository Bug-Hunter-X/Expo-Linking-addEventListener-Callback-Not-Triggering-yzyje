import * as Linking from 'expo-linking';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    const handleUrl = (url) => {
      console.log('Deep link received:', url);
      // Handle the deep link
    };

    const subscription = Linking.addEventListener('url', handleUrl);

    return () => {
        Linking.removeEventListener('url',handleUrl);
      subscription.remove();
    };
  }, []);

  return (
    <View>
      {/* App content */}
    </View>
  );
}

export default App;