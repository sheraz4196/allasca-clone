
import React from 'react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import ServiceItem from './ServiceItem';
import { ServiceCategory, ServiceItem as ServiceItemType, PriceOption } from '@/types/quoteTypes';
import { servicesData } from '@/data/servicesData';

interface ServicesListProps {
  activeCategory: ServiceCategory;
  setActiveCategory: (category: ServiceCategory) => void;
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  priceOption: PriceOption;
  setPriceOption: (option: PriceOption) => void;
  onAddToCart: (service: ServiceItemType, quantity: number) => void;
}

const ServicesList: React.FC<ServicesListProps> = ({
  activeCategory,
  setActiveCategory,
  searchQuery,
  setSearchQuery,
  priceOption,
  setPriceOption,
  onAddToCart
}) => {
  // Filter services based on search and category
  const filteredServices = servicesData.filter(service => {
    const matchesSearch = searchQuery === '' || 
      service.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      service.description.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = activeCategory === service.category;
    
    return matchesSearch && matchesCategory;
  });
  
  // Group categories for easier management
  const categoryGroups = [
    // Group 1: Basic construction
    ['flooring', 'painting', 'kitchen', 'bathroom'],
    // Group 2: Structure & exterior
    ['exterior', 'basement', 'outdoor', 'framing', 'roofing', 'demolition'],
    // Group 3: Specialized
    ['plumbing', 'hvac', 'electrical', 'doors-windows'],
    // Group 4: Finishing & detailing
    ['stairs', 'curtains', 'columns', 'glass', 'carpet', 'other']
  ];
  
  // Service category display names
  const categoryNames: Record<ServiceCategory, string> = {
    'flooring': 'Flooring',
    'painting': 'Painting',
    'kitchen': 'Kitchen',
    'bathroom': 'Bathroom',
    'exterior': 'Exterior',
    'basement': 'Basement', 
    'outdoor': 'Outdoor',
    'other': 'Other',
    'plumbing': 'Plumbing',
    'hvac': 'HVAC',
    'electrical': 'Electrical',
    'doors-windows': 'Doors & Windows',
    'stairs': 'Staircase',
    'curtains': 'Curtains',
    'columns': 'Columns',
    'glass': 'Glass Railings',
    'demolition': 'Demolition',
    'framing': 'Wood Framing',
    'roofing': 'Roofing',
    'carpet': 'Carpet'
  };
  
  return (
    <Card className="mb-6">
      <CardHeader>
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <CardTitle>Select Services</CardTitle>
            <CardDescription>Choose what you need for your project</CardDescription>
          </div>
          
          <div className="flex flex-col md:flex-row gap-4">
            <div>
              <Input
                type="search"
                placeholder="Search services..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full md:w-60"
              />
            </div>
            
            <RadioGroup 
              value={priceOption} 
              onValueChange={(value: PriceOption) => setPriceOption(value)}
              className="flex space-x-2"
            >
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="labour" id="labour" />
                <Label htmlFor="labour">Labour</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="materials" id="materials" />
                <Label htmlFor="materials">Materials</Label>
              </div>
              <div className="flex items-center space-x-1">
                <RadioGroupItem value="both" id="both" />
                <Label htmlFor="both">Both</Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </CardHeader>
      
      <CardContent>
        <Tabs value={activeCategory} onValueChange={(value: string) => setActiveCategory(value as ServiceCategory)}>
          <div className="mb-6 overflow-x-auto">
            {categoryGroups.map((group, groupIndex) => (
              <TabsList key={groupIndex} className="grid grid-cols-6 mb-2 w-full">
                {group.map((category) => (
                  <TabsTrigger 
                    key={category} 
                    value={category}
                    className="text-xs md:text-sm"
                  >
                    {categoryNames[category as ServiceCategory]}
                  </TabsTrigger>
                ))}
              </TabsList>
            ))}
          </div>
          
          {/* Service content for each category */}
          {(Object.keys(categoryNames) as ServiceCategory[]).map((category) => (
            <TabsContent key={category} value={category} className="mt-0">
              <div className="grid grid-cols-1 gap-4">
                {filteredServices.length > 0 ? (
                  filteredServices.map((service) => (
                    <ServiceItem
                      key={service.id}
                      service={service}
                      priceOption={priceOption}
                      onAddToCart={onAddToCart}
                    />
                  ))
                ) : (
                  <div className="p-6 text-center text-gray-500">
                    No services found in this category. Try searching or selecting a different category.
                  </div>
                )}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </CardContent>
    </Card>
  );
};

export default ServicesList;
