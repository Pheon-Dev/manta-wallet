import {
  Text,
  Avatar,
  Divider,
  Center,
  Title,
  Table,
  Card,
  Badge,
  Button,
  Group,
  SegmentedControl,
  Box
} from '@mantine/core';
import { IconCash, IconBuildingBank, IconSend } from '@tabler/icons-react';
const Home = () => {
  const elements = [
    { id: "ji48dm349", amount: "12,011", transaction: 'Send', description: 'Gift Card', time: "12:03 Thu Dec, 2023" },
    { id: "894j9uow4", amount: "14,007", transaction: 'Withdraw', description: 'Shopping', time: "03:45 Mon May, 2023" },
    { id: "4uidf933n", amount: "88,906", transaction: 'Deposit', description: 'Savings', time: "22:34 Tue Jun, 2023" },
    { id: "wh47x74hs", amount: "13,733", transaction: 'Receive', description: 'Sales', time: "15:23 Fri Jan, 2023" },
    { id: "1vb56nb7e", amount: "14,012", transaction: 'Receive', description: 'Repayment', time: "09:21 Sat Aug, 2023" },
  ];
  const rows = elements.map((element) => (
    <tr key={element.description}>
      <td>{element.id}</td>
      <td>{element.amount}</td>
      <td>{element.transaction}</td>
      <td>{element.time}</td>
      <td>{element.description}</td>
    </tr>
  ));

  return (
    <>
      <Text
        variant="gradient"
        gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
        sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
        ta="center" p="xs"
        fz="xl"
        fw={900}
      >
        Mr. Walter Wallace
      </Text>
      <Center mx="auto" maw={400} h={200}>
        <Avatar src={null} alt="profile picture" color="indigo" radius="xl" size="xl" />
      </Center>
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <Box ml={5}>
              <Text
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="center" p="xs"
                fz="xl"
                fw={900}
              >
                Services
              </Text>
            </Box>
          </>
        }
        labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
      />
      <Center maw={600} mx="auto">
        <SegmentedControl
          data={[
            {
              value: 'preview',
              label: (
                <Center>
                  <IconBuildingBank size="1rem" />
                  <Box ml={10}>Deposit</Box>
                </Center>
              ),
            },
            {
              value: 'code',
              label: (
                <Center>
                  <IconCash size="1rem" />
                  <Box ml={10}>Withdraw</Box>
                </Center>
              ),
            },
            {
              value: 'export',
              label: (
                <Center>
                  <IconSend size="1rem" />
                  <Box ml={10}>Send</Box>
                </Center>
              ),
            },
          ]}
        />
      </Center>
      <Center maw={600} h={300} mx="auto">
        <Card shadow="sm" padding="lg" radius="md" withBorder>

          <Group position="apart" w={400} mt="md" mb="md">
            <Text weight={500}>Token Balance</Text>
            <Badge color="blue" variant="light">
              Tks. 364.00
            </Badge>
          </Group>
          <Divider />
          <Group position="apart" w={400} mt="md" mb="md">
            <Text weight={500}>In Local Currency</Text>
            <Badge color="green" variant="light">
              KSHs. 23,634.00
            </Badge>
          </Group>
        </Card>
      </Center>
      <Divider
        my="xs"
        variant="dashed"
        labelPosition="center"
        label={
          <>
            <Box ml={5}>
              <Text
                variant="gradient"
                gradient={{ from: 'indigo', to: 'cyan', deg: 45 }}
                sx={{ fontFamily: 'Greycliff CF, sans-serif' }}
                ta="center" p="xs"
                fz="xl"
                fw={900}
              >
                Recent Transactions
              </Text>
            </Box>
          </>
        }
        labelProps={{ component: 'a', href: 'https://mantine.dev', variant: 'link', color: 'blue' }}
      />
      <Center maw={700} mx="auto" mt="xl">
        <Table horizontalSpacing="xl">
          <thead>
            <tr>
              <th>id</th>
              <th>amount</th>
              <th>transaction</th>
              <th>time</th>
              <th>description</th>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </Table>
      </Center>
    </>
  );
}
export default Home;
