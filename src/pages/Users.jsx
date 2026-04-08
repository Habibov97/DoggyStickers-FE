import { getUsers } from '@/api/users.api';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useQuery } from '@tanstack/react-query';

export default function Users() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['users'],
    queryFn: () => getUsers(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <>
      <h1 className="font-josefin mb-4 text-2xl text-white border-b">Users</h1>

      <Table>
        <TableCaption>A list of users.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-25 text-white text-lg font-josefin">Id</TableHead>
            <TableHead className=" text-white text-lg font-josefin">username</TableHead>
            <TableHead className=" text-white text-lg font-josefin">email</TableHead>
            <TableHead className=" text-white text-lg font-josefin">phone number</TableHead>
            <TableHead className=" text-white text-lg font-josefin">role</TableHead>
            <TableHead className="text-right text-white text-lg font-josefin">isActive</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody className="text-white">
          {data?.map((user) => {
            return (
              <TableRow>
                <TableCell className="font-medium">{user.id}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.phoneNumber}</TableCell>
                <TableCell>{user.role}</TableCell>
                <TableCell className="text-right">{user.isActive === true ? 'active' : 'inactive'}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}
