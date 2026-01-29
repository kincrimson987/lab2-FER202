import { Card, CardContent } from "@/components/ui/card";

export default function ProductCard({ product }) {
  return (
    <Card className="w-full">
      <CardContent className="p-4">
        <img
          src={product.image}
          alt={product.name}
          className="rounded-lg mb-3"
        />
        <h2 className="text-lg font-bold">{product.name}</h2>
        <p className="text-sm text-gray-600">{product.description}</p>
        <p className="text-blue-600 font-semibold mt-2">
          {product.price}
        </p>
      </CardContent>
    </Card>
  );
}