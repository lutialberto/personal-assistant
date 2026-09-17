import BottomTabsApp from "@/components/containers/tabs/bottomTabs/BottomTabsApp";
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { Drawer } from 'expo-router/drawer';

export default function TabLayout() {
  return (
    // <BottomTabsApp
    //   tabItems={[
    //     { name: "index", title: "Tab One", icon: "code" },
    //     { name: "two", title: "Tab Two", icon: "code" },
    //   ]}
    // />
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Tab One',
            title: 'Tab one',
          }}
        />
        <Drawer.Screen
          name="two"
          options={{
            drawerLabel: 'Tab Two',
            title: 'Tab two',
          }}
        />
      </Drawer>
    </GestureHandlerRootView>
  );
}
