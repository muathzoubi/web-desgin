import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "./tabel"

const pricingData = [
  {
    type: "Landing Page",
    basicPrice: "$500 - $1,500",
    advancedPrice: "$1,500 - $3,000",
    customPrice: "$3,000+",
    features: "Single page, Call-to-action, Basic interactivity",
  },
  {
    type: "E-commerce Site",
    basicPrice: "$1,500 - $5,000",
    advancedPrice: "$5,000 - $15,000",
    customPrice: "$15,000+",
    features: "Product catalog, Shopping cart, Payment integration",
  },
  {
    type: "Dashboard Site",
    basicPrice: "$2,000 - $7,000",
    advancedPrice: "$7,000 - $20,000",
    customPrice: "$20,000+",
    features: "Data visualization, User authentication, Real-time updates",
  },
]

export function PricingTable() {
  return (
    <Table className="overflow-hidden	">
      <TableCaption>Pricing for different types of websites</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[200px]">Website Type</TableHead>
          <TableHead>Basic</TableHead>
          <TableHead>Advanced</TableHead>
          <TableHead>Custom</TableHead>
          <TableHead className="w-[300px]">Key Features</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {pricingData.map((item) => (
          <TableRow key={item.type}>
            <TableCell className="font-medium">{item.type}</TableCell>
            <TableCell>{item.basicPrice}</TableCell>
            <TableCell>{item.advancedPrice}</TableCell>
            <TableCell>{item.customPrice}</TableCell>
            <TableCell>{item.features}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}
