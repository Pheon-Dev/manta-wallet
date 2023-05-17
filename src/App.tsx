import { useState } from "react";
import { IconWallet } from '@tabler/icons-react';
// import { invoke } from "@tauri-apps/api/tauri";
import {
  MantineProvider,
  AppShell,
  Navbar,
  Header,
  Footer,
  // Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  ActionIcon,
} from '@mantine/core';
import { Home, NavBar } from "./components";

function App() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS theme={{ colorScheme: 'dark' }}>
      <AppShell
        styles={{
          main: {
            background: theme.colorScheme !== 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
          },
        }}
        navbarOffsetBreakpoint="sm"
        asideOffsetBreakpoint="sm"
        navbar={
          <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 250, lg: 300 }}>
            <NavBar />
          </Navbar>
        }
        // aside={
        //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
        //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
        //       <Text>Application sidebar</Text>
        //     </Aside>
        //   </MediaQuery>
        // }
        footer={
          <Footer height={60} p="md">
            Application footer
          </Footer>
        }
        header={
          <Header height={{ base: 50, md: 70 }} p="md">
            <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
                  size="sm"
                  color={theme.colors.gray[6]}
                  mr="xl"
                />
              </MediaQuery>
              <ActionIcon variant="gradient" gradient={{ from: 'indigo', to: 'cyan', deg: 45 }} size="md"><IconWallet size={18} /></ActionIcon>
              <Text
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="center" p="xs"
                fz="xl"
                fw={700}
              >{"  "}Manta Wallet</Text>
            </div>
          </Header>
        }
      >
        <Home />
      </AppShell>
    </MantineProvider>
  );
}

export default App;
