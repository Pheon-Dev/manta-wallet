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
const Dashboard = () => {
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
      <Center maw={900} mx="auto" mt="xs">
        <Table horizontalSpacing="xs">
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
export default Dashboard;
