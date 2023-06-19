
import React from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Search from './assets/svg-components/search';
import Download from './assets/svg-components/download';
import Add from './assets/svg-components/add';
import Logo from './assets/svg-components/logo';
import Home from './assets/svg-components/home';
import Slide from './assets/svg-components/slide';
import Avatar from './assets/svg-components/avatar';
import Banner from './assets/svg-components/banner';
// bottom nav icons
import HomeIcon from './assets/svg-components/home-icon';
import NewRelease from './assets/svg-components/new-release';
import Downloads from './assets/svg-components/download-icon';
import Spred from './assets/svg-components/spred';

function Section(): JSX.Element {
  return (
    <View style={styles.sectionContainer}>

    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: '#353535',
    flex: 1,
    paddingBottom: 10
  };

  const DATA = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
  ];

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      {/* App bar starts */}
      <View style={{
        flexDirection: "row",
        display: "flex",
        paddingHorizontal: 10,
        paddingTop: 24,
      }}>
        <Avatar />
        <View style={styles.horizontalSpacer} />
        <Search />
        <View style={styles.horizontalSpacer} />
        <Download />
        <View style={styles.horizontalSpacer} />
        <Add />
        <View style={styles.spacer} />
        <Logo />
      </View>
      {/* App bar ends */}
      <View style={styles.verticalSpacer} />
      {/* Tab starts */}
      <View style={{
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: 10,
        marginBottom: 10,
      }}>
        <View style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Home />
          <View style={{
            width: 24,
            height: 3,
            backgroundColor: "#ffffff",
            marginTop: 5
          }} />
        </View>

        <View style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
          paddingHorizontal: 5,
        }}>
          <Text style={styles.tabText}>ORIGINAL</Text>
          <Text style={styles.tabText}>MOVIES</Text>
          <Text style={styles.tabText}>SERIES</Text>
          <Text style={styles.tabText}>SKIT</Text>
        </View>
        <Slide />
      </View>
      {/* Tab ends */}
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <View
          style={{
            backgroundColor: "#353535",
            paddingHorizontal: 10,

          }}>

          <View style={styles.verticalSpacer} />
          {/* Banner starts here */}
          <View style={{
            height: 200, backgroundColor: "#ffffff",
            borderRadius: 5,
          }}>
            <Banner />
          </View>
          {/* Banner ends here */}
          <View style={styles.verticalSpacer} />
          {/* First scroll sectiion starts */}
          <View>
            <Text>TOP SPRED ORIGINALS</Text>
            <View style={styles.verticalSpacer} />
            <View style={{ height: 171 }}>
              <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={DATA}
                renderItem={({ item }) => Section()}
              />
            </View>
          </View>
          {/* firts scroll session ends */}
          <View style={styles.verticalSpacer} />
          {/* Second scroll sectiion starts */}
          <View>
            <Text>TOP SPRED ORIGINALS</Text>
            <View style={styles.verticalSpacer} />
            <View style={{ height: 171 }}>
              <FlatList
                horizontal
                pagingEnabled={true}
                showsHorizontalScrollIndicator={false}
                legacyImplementation={false}
                data={DATA}
                renderItem={({ item }) => Section()}
              />
            </View>
          </View>
          {/* Second scroll session ends */}
        </View>
      </ScrollView>
      {/* Bottom nav bar */}
      <View style={
        {
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: 10
        }
      }>
        <View style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <HomeIcon />
          <Text style={styles.bottomBarText}>HOME</Text>
        </View>
        <View style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <NewRelease />
          <Text style={styles.bottomBarText}>NEW RELEASE</Text>
        </View>
        <View style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Downloads />
          <Text style={styles.bottomBarText}>DOWNLOADS</Text>
        </View>
        <View style={{
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center"
        }}>
          <Spred />
          <Text style={styles.bottomBarText}>SPRED</Text>
        </View>
      </View>
      {/* Bottom nav bar ends */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    height: 171,
    width: 116,
    backgroundColor: "#ffffff",
    marginRight: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  appIcon: {
    marginRight: 10,
    display: "flex"
  },
  spacer: {
    flex: 1,
  },
  horizontalSpacer: {
    width: 20,
  },
  verticalSpacer: {
    height: 20,
  },
  tabText: {
    fontSize: 14,
    fontWeight: '400'
  },
  bottomBarText: { fontSize: 8 }
});

export default App;
