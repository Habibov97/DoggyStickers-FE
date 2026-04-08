import { useQuery } from '@tanstack/react-query';
import Card from './Card';
import { productsList } from '@/api/products.api';

export default function Products() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ['products'],
    queryFn: () => productsList(),
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  console.log(data);
  return (
    <div className="max-w-[1000px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-10">
      {data?.map((item) => {
        return <Card key={item.id} item={item} />;
      })}
    </div>
  );
}
