
import React from 'react';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface EstimateItem {
  service: string;
  description: string;
  estimatedCost: string;
  timeframe: string;
}

const EstimatesTable = () => {
  const estimates: EstimateItem[] = [
    {
      service: "Custom Home Construction",
      description: "Ground-up construction of custom single family home",
      estimatedCost: "$300 - $500 per sq.ft.",
      timeframe: "8-14 months"
    },
    {
      service: "Home Renovation",
      description: "Full house renovation including kitchen and bathrooms",
      estimatedCost: "$100 - $200 per sq.ft.",
      timeframe: "3-6 months"
    },
    {
      service: "Kitchen Remodel",
      description: "Complete kitchen renovation with premium finishes",
      estimatedCost: "$40,000 - $100,000",
      timeframe: "6-12 weeks"
    },
    {
      service: "Bathroom Renovation",
      description: "Full bathroom remodel with new fixtures and finishes",
      estimatedCost: "$15,000 - $35,000",
      timeframe: "3-6 weeks"
    },
    {
      service: "Basement Development",
      description: "Finishing an unfinished basement into living space",
      estimatedCost: "$35 - $75 per sq.ft.",
      timeframe: "4-8 weeks"
    },
    {
      service: "Garden Suite",
      description: "Building a detached garden suite or laneway house",
      estimatedCost: "$200,000 - $350,000",
      timeframe: "4-6 months"
    }
  ];

  return (
    <div className="rounded-xl overflow-hidden shadow-xl border border-purple-100 bg-white">
      <div className="overflow-x-auto pb-2" style={{
        scrollbarWidth: 'thin',
        scrollbarColor: '#9333ea #f3f4f6',
        WebkitOverflowScrolling: 'touch'
      }}>
        <Table>
          <TableCaption>
            Note: Estimates vary based on size, materials, and specific requirements
          </TableCaption>
          <TableHeader>
            <TableRow className="bg-gradient-to-r from-purple-600/90 to-fuchsia-500/90">
              <TableHead className="text-white font-medium">Service</TableHead>
              <TableHead className="text-white font-medium">Description</TableHead>
              <TableHead className="text-white font-medium">Estimated Cost</TableHead>
              <TableHead className="text-white font-medium">Timeframe</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {estimates.map((item, index) => (
              <TableRow 
                key={index} 
                className={index % 2 === 0 ? "bg-white" : "bg-purple-50/50"}
              >
                <TableCell className="font-medium">{item.service}</TableCell>
                <TableCell>{item.description}</TableCell>
                <TableCell className="text-fuchsia-600 font-medium">{item.estimatedCost}</TableCell>
                <TableCell>{item.timeframe}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default EstimatesTable;
