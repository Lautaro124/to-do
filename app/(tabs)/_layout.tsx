import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable, useColorScheme } from 'react-native';

import Colors from '@/constants/Colors';

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const headerRight = () => (
    <Link href="/addTask" asChild>
      <Pressable>
        {({ pressed }) => (
          <FontAwesome
            name="plus"
            size={25}
            color={Colors[colorScheme ?? 'light'].text}
            style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </Link>
  )

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'today',
          tabBarIcon: ({ color }) => <TabBarIcon name='home' color={color} />,
          headerRight,
        }}
      />
      <Tabs.Screen
        name="week"
        options={{
          title: 'Weekly',
          tabBarIcon: ({ color }) => <TabBarIcon name="table" color={color} />,
          headerRight,
        }}
      />
      <Tabs.Screen
        name="month"
        options={{
          title: 'Monthly',
          tabBarIcon: ({ color }) => <TabBarIcon name="calendar" color={color} />,
          headerRight,
        }}
      />
    </Tabs>
  );
}
