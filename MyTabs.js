import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React, { useState, useRef } from 'react';
import { SafeAreaView, StyleSheet, Text, StatusBar } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import { Feather, FontAwesome5 } from '@expo/vector-icons';
import { WebView } from 'react-native-webview';
import Spinner from 'react-native-loading-spinner-overlay';

const Tab = createBottomTabNavigator();

export default function MyTabs() {
  StatusBar.setBackgroundColor("transparent");
  StatusBar.setTranslucent(true);
  StatusBar.setBarStyle("dark-content");

  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
          position: 'absolute',
          tabBarActiveTintColor: '#FF62AD',
          tabBarInactiveTintColor: '#818087',
          tabBarStyle: {
              height: 80,
              paddingTop: 8,
              paddingBottom: 14
          }
      }}>
      <Tab.Screen name="홈" component={HomeMenu}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <Feather name={"home"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="지역행사" component={FestivalMenu}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={"umbrella-beach"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="경로 만들기" component={WriteMenu}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={"map-marker-alt"} color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen name="마이 페이지" component={MyPageMenu}
        options={{
          headerShown: false,
          tabBarIcon: ({ color, size }) => (
            <FontAwesome5 name={"user-circle"} color={color} size={size} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function HomeMenu({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
      React.useCallback(() => {
          webViewRef.current.injectJavaScript('location.href="' + 'https://todaysdate.site:8080/home' + '"');
          setLoading(false);
      }, [])
  );

  function LoadAnimation() {
      return (<Spinner visible={loading} />)
  }

  return (
      <SafeAreaView style={styles.container}>
          <WebView
              ref={webViewRef}
              onLoad={() => setLoading(false)}
              source={{ uri: 'https://todaysdate.site:8080/home' }}
          />
          {loading && <LoadAnimation />}
      </SafeAreaView>
  )
}

function FestivalMenu({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
      React.useCallback(() => {
          webViewRef.current.injectJavaScript('location.href="' + 'https://todaysdate.site:8080/festival/1' + '"');
          setLoading(false);
      }, [])
  );

  function LoadAnimation() {
      return (<Spinner visible={loading} />)
  }

  return (
      <SafeAreaView style={styles.container}>
          <WebView
              ref={webViewRef}
              onLoad={() => setLoading(false)}
              source={{ uri: 'https://todaysdate.site:8080/festival/1' }}
          />
          {loading && <LoadAnimation />}
      </SafeAreaView>
  )
}

function WriteMenu({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
      React.useCallback(() => {
          webViewRef.current.injectJavaScript('location.href="' + 'https://todaysdate.site:8080/write' + '"');
          setLoading(false);
      }, [])
  );

  function LoadAnimation() {
      return (<Spinner visible={loading} />)
  }

  return (
      <SafeAreaView style={styles.container}>
          <WebView
              ref={webViewRef}
              onLoad={() => setLoading(false)}
              source={{ uri: 'https://todaysdate.site:8080/write' }}
          />
          {loading && <LoadAnimation />}
      </SafeAreaView>
  )
}

function MyPageMenu({ navigation }) {
  const webViewRef = useRef(null);
  const [loading, setLoading] = useState(true);

  useFocusEffect(
      React.useCallback(() => {
          webViewRef.current.injectJavaScript('location.href="' + 'https://todaysdate.site:8080/mypage' + '"');
          setLoading(false);
      }, [])
  );

  function LoadAnimation() {
      return (<Spinner visible={loading} />)
  }

  return (
      <SafeAreaView style={styles.container}>
          <WebView
              ref={webViewRef}
              onLoad={() => setLoading(false)}
              source={{ uri: 'https://todaysdate.site:8080/mypage' }}
          />
          {loading && <LoadAnimation />}
      </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
},
  text: { fontSize: 28, color: 'white' },
  icon: { fontSize: 36, color: 'white' },
})