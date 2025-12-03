
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Plus } from 'lucide-react';
import { ServiceItem as ServiceItemType, PriceOption } from '@/types/quoteTypes';
import { formatCurrency, calculatePrice } from '@/utils/quoteUtils';

interface ServiceItemProps {
  service: ServiceItemType;
  priceOption: PriceOption;
  onAddToCart: (service: ServiceItemType, quantity: number) => void;
}

const ServiceItem: React.FC<ServiceItemProps> = ({ service, priceOption, onAddToCart }) => {
  const [priceRange, setPriceRange] = useState<[number, number]>(calculatePrice(service, priceOption));
  const [quantity, setQuantity] = useState<number>(1);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  
  const handleSizeClick = (size: number, label: string) => {
    setQuantity(size);
    setSelectedSize(label);
    
    // Apply price adjustments for specific door types
    if (service.id === 'doors-windows-entry') {
      let adjustedService = {...service};
      
      if (label === 'Double Door') {
        // Double doors cost approximately 70% more
        adjustedService = {
          ...service,
          priceLabour: [service.priceLabour[0] * 1.4, service.priceLabour[1] * 1.4],
          priceMaterials: [service.priceMaterials[0] * 1.7, service.priceMaterials[1] * 1.7]
        };
      } else if (label === 'With Sidelights') {
        // Sidelights add approximately 50% to the cost
        adjustedService = {
          ...service,
          priceLabour: [service.priceLabour[0] * 1.2, service.priceLabour[1] * 1.2],
          priceMaterials: [service.priceMaterials[0] * 1.5, service.priceMaterials[1] * 1.5]
        };
      }
      // Single Door is default price
      
      setPriceRange(calculatePrice(adjustedService, priceOption));
    }
  };
  
  // Update price range when price option changes
  useEffect(() => {
    setPriceRange(calculatePrice(service, priceOption));
  }, [priceOption, service]);
  
  return (
    <Card key={service.id} className="overflow-hidden">
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{service.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="pb-2">
        <p className="text-gray-600 mb-2">{service.description}</p>
        <div className="font-semibold text-casa-purple">
          {formatCurrency(priceRange[0])} - {formatCurrency(priceRange[1])} per {service.unit}
        </div>
        
        {service.popularSizes && (
          <div className="mt-3">
            <p className="text-sm font-medium mb-2">Common sizes:</p>
            <div className="flex flex-wrap gap-2">
              {Object.entries(service.popularSizes).map(([label, size]) => (
                <Button 
                  key={label} 
                  variant="outline" 
                  size="sm" 
                  onClick={() => handleSizeClick(size, label)}
                  className={`text-xs py-1 ${quantity === size && selectedSize === label ? 'border-casa-purple bg-purple-50' : ''}`}
                >
                  {label}
                </Button>
              ))}
            </div>
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex justify-between pt-2">
        <div className="flex items-center gap-1">
          <Label htmlFor={`quantity-${service.id}`} className="sr-only">Quantity</Label>
          <Input
            id={`quantity-${service.id}`}
            type="number"
            min="1"
            className="w-20 mr-2"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
          <span className="text-sm text-gray-500">{service.unit}</span>
        </div>
        
        <Button 
          size="sm"
          onClick={() => {
            if (service.id === 'doors-windows-entry' && selectedSize) {
              let adjustedService = {...service};
              if (selectedSize === 'Double Door') {
                adjustedService.name = `${service.name} (Double Door)`;
                adjustedService.priceLabour = [service.priceLabour[0] * 1.4, service.priceLabour[1] * 1.4];
                adjustedService.priceMaterials = [service.priceMaterials[0] * 1.7, service.priceMaterials[1] * 1.7];
              } else if (selectedSize === 'With Sidelights') {
                adjustedService.name = `${service.name} (With Sidelights)`;
                adjustedService.priceLabour = [service.priceLabour[0] * 1.2, service.priceLabour[1] * 1.2];
                adjustedService.priceMaterials = [service.priceMaterials[0] * 1.5, service.priceMaterials[1] * 1.5];
              } else {
                adjustedService.name = `${service.name} (Single Door)`;
              }
              onAddToCart(adjustedService, quantity);
            } else {
              onAddToCart(service, quantity);
            }
          }}
        >
          <Plus className="h-4 w-4 mr-2" /> Add to Quote
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceItem;
