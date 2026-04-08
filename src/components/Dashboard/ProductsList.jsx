import { useQuery } from '@tanstack/react-query';
import { Button } from '../ui/button';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { productsList } from '@/api/products.api';
import { format } from 'date-fns';

export default function ProductsList() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () => productsList(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  console.log(data);

  return (
    <>
      <h1 className="font-josefin py-4 text-2xl text-purple-500">Products</h1>
      <div>
        <Table>
          <TableCaption>A list of users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="font-bold text-white/80 text-lg">id</TableHead>
              <TableHead className="font-bold text-white/80 text-lg">title</TableHead>
              <TableHead className="font-bold text-white/80 text-lg">description</TableHead>
              <TableHead className="font-bold text-white/80 text-lg">slug</TableHead>
              <TableHead className="font-bold text-white/80 text-lg">createdAt</TableHead>
              <TableHead className="font-bold text-white/80 text-lg">updatedAt</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.map((item) => {
              return (
                <TableRow key={item.id} className="text-white">
                  <TableCell className="font-medium">{item.id}</TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.desc} </TableCell>
                  <TableCell>{item.slug}</TableCell>
                  <TableCell>{format(new Date(item.createdAt), 'dd/MM/yyyy')}</TableCell>
                  <TableCell>{format(new Date(item.updatedAt), 'dd/MM/yyyy')}</TableCell>
                  <TableCell className="flex gap-2">
                    <Button className="cursor-pointer p-1 border border-slate-300" variant="destructive" size="small">
                      <span className="text-xs">Delete</span>
                    </Button>
                    <Button
                      className="cursor-pointer p-1 border border-slate-300 text-green-500"
                      variant="destructive"
                      size="small"
                    >
                      <span className="text-xs">Update</span>
                    </Button>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </div>
    </>
  );
}
