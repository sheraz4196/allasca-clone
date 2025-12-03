import { ServiceItem } from "../types/quoteTypes";

// Service data with Toronto price ranges
export const servicesData: ServiceItem[] = [
  // Flooring Services
  {
    id: 'floor-hardwood',
    name: 'Hardwood Flooring',
    category: 'flooring',
    unit: 'sq ft',
    priceLabour: [3, 6],
    priceMaterials: [4, 15],
    description: 'Installation of hardwood flooring including removal of old flooring.',
    popularSizes: { 'Small Room (120 sq ft)': 120, 'Medium Room (200 sq ft)': 200, 'Large Room (300 sq ft)': 300 }
  },
  {
    id: 'floor-laminate',
    name: 'Laminate Flooring',
    category: 'flooring',
    unit: 'sq ft',
    priceLabour: [2, 4],
    priceMaterials: [1, 5],
    description: 'Installation of laminate flooring including subfloor preparation.',
    popularSizes: { 'Small Room (120 sq ft)': 120, 'Medium Room (200 sq ft)': 200, 'Large Room (300 sq ft)': 300 }
  },
  {
    id: 'floor-tile',
    name: 'Tile Flooring',
    category: 'flooring',
    unit: 'sq ft',
    priceLabour: [6, 12],
    priceMaterials: [3, 20],
    description: 'Tile installation including cement board and grout.',
    popularSizes: { 'Small Bathroom (40 sq ft)': 40, 'Kitchen (100 sq ft)': 100, 'Large Space (200 sq ft)': 200 }
  },
  {
    id: 'floor-vinyl',
    name: 'Vinyl Flooring',
    category: 'flooring',
    unit: 'sq ft',
    priceLabour: [2, 4],
    priceMaterials: [2, 8],
    description: 'Luxury vinyl plank/tile installation including subfloor preparation.',
    popularSizes: { 'Small Room (120 sq ft)': 120, 'Medium Room (200 sq ft)': 200, 'Large Room (300 sq ft)': 300 }
  },
  
  // Painting Services
  {
    id: 'paint-interior',
    name: 'Interior Painting',
    category: 'painting',
    unit: 'sq ft',
    priceLabour: [1.5, 3],
    priceMaterials: [0.5, 2],
    description: 'Interior wall painting including basic prep and primer.',
    popularSizes: { 'Room (400 sq ft)': 400, 'Apartment (1200 sq ft)': 1200, 'House (2000 sq ft)': 2000 }
  },
  {
    id: 'paint-ceiling',
    name: 'Ceiling Painting',
    category: 'painting',
    unit: 'sq ft',
    priceLabour: [2, 4],
    priceMaterials: [0.5, 1.5],
    description: 'Ceiling painting including prep and primer.',
    popularSizes: { 'Room (100 sq ft)': 100, 'Multiple Rooms (400 sq ft)': 400, 'Full House (1200 sq ft)': 1200 }
  },
  {
    id: 'paint-exterior',
    name: 'Exterior Painting',
    category: 'painting',
    unit: 'sq ft',
    priceLabour: [3, 6],
    priceMaterials: [1, 3],
    description: 'Exterior painting including prep, primer, and weather protection.',
    popularSizes: { 'Small House (1200 sq ft)': 1200, 'Medium House (1800 sq ft)': 1800, 'Large House (2500 sq ft)': 2500 }
  },
  
  // Kitchen Services
  {
    id: 'kitchen-cabinets',
    name: 'Kitchen Cabinets',
    category: 'kitchen',
    unit: 'linear ft',
    priceLabour: [70, 120],
    priceMaterials: [100, 500],
    description: 'Custom kitchen cabinet installation or replacement.',
    popularSizes: { 'Small Kitchen (10 ln ft)': 10, 'Medium Kitchen (20 ln ft)': 20, 'Large Kitchen (30 ln ft)': 30 }
  },
  {
    id: 'kitchen-countertops',
    name: 'Countertop Installation',
    category: 'kitchen',
    unit: 'sq ft',
    priceLabour: [20, 40],
    priceMaterials: [40, 150],
    description: 'Countertop installation including templates and cutouts.',
    popularSizes: { 'Small Kitchen (20 sq ft)': 20, 'Medium Kitchen (30 sq ft)': 30, 'Large Kitchen (45 sq ft)': 45 }
  },
  {
    id: 'kitchen-backsplash',
    name: 'Backsplash Installation',
    category: 'kitchen',
    unit: 'sq ft',
    priceLabour: [15, 25],
    priceMaterials: [5, 30],
    description: 'Backsplash tile installation including backing and grout.',
    popularSizes: { 'Small (10 sq ft)': 10, 'Medium (20 sq ft)': 20, 'Large (30 sq ft)': 30 }
  },
  
  // Bathroom Services
  {
    id: 'bathroom-renovation',
    name: 'Complete Bathroom Renovation',
    category: 'bathroom',
    unit: 'complete',
    priceLabour: [5000, 15000],
    priceMaterials: [3000, 20000],
    description: 'Full bathroom renovation including fixtures, tile, and plumbing.',
    popularSizes: { 'Small (1 unit)': 1, 'Medium (1 unit)': 1, 'Large (1 unit)': 1 }
  },
  {
    id: 'bathroom-shower',
    name: 'Shower Installation',
    category: 'bathroom',
    unit: 'complete',
    priceLabour: [1500, 3500],
    priceMaterials: [1000, 5000],
    description: 'Custom shower installation including waterproofing and tile.',
    popularSizes: { 'Standard (1 unit)': 1, 'Custom (1 unit)': 1, 'Walk-in (1 unit)': 1 }
  },
  {
    id: 'bathroom-fixtures',
    name: 'Bathroom Fixtures',
    category: 'bathroom',
    unit: 'fixture',
    priceLabour: [150, 400],
    priceMaterials: [100, 1500],
    description: 'Installation of bathroom fixtures (toilet, sink, faucet, etc).',
    popularSizes: { '1 Fixture': 1, '3 Fixtures': 3, '5 Fixtures': 5 }
  },
  
  // Exterior Services
  {
    id: 'exterior-deck',
    name: 'Deck Construction',
    category: 'exterior',
    unit: 'sq ft',
    priceLabour: [25, 50],
    priceMaterials: [15, 40],
    description: 'Custom deck construction including foundation and railings.',
    popularSizes: { 'Small (100 sq ft)': 100, 'Medium (200 sq ft)': 200, 'Large (400 sq ft)': 400 }
  },
  {
    id: 'exterior-fence',
    name: 'Fence Installation',
    category: 'exterior',
    unit: 'linear ft',
    priceLabour: [12, 25],
    priceMaterials: [8, 30],
    description: 'Fence installation including posts and gates.',
    popularSizes: { 'Small Yard (60 ln ft)': 60, 'Medium Yard (120 ln ft)': 120, 'Large Yard (200 ln ft)': 200 }
  },
  {
    id: 'exterior-interlock',
    name: 'Interlock & Stone Work',
    category: 'exterior',
    unit: 'sq ft',
    priceLabour: [15, 30],
    priceMaterials: [10, 35],
    description: 'Interlocking stone installation for patios, walkways, and driveways.',
    popularSizes: { 'Small (100 sq ft)': 100, 'Medium (250 sq ft)': 250, 'Large (500 sq ft)': 500 }
  },
  {
    id: 'exterior-asphalt',
    name: 'Asphalt Driveway',
    category: 'exterior',
    unit: 'sq ft',
    priceLabour: [6, 10],
    priceMaterials: [3, 8],
    description: 'Asphalt driveway installation including base preparation.',
    popularSizes: { 'Small (400 sq ft)': 400, 'Medium (800 sq ft)': 800, 'Large (1200 sq ft)': 1200 }
  },
  {
    id: 'exterior-turf',
    name: 'Turf Installation',
    category: 'exterior',
    unit: 'sq ft',
    priceLabour: [5, 8],
    priceMaterials: [8, 15],
    description: 'Artificial turf installation including base preparation.',
    popularSizes: { 'Small (200 sq ft)': 200, 'Medium (500 sq ft)': 500, 'Large (1000 sq ft)': 1000 }
  },
  {
    id: 'exterior-concrete',
    name: 'Concrete Work',
    category: 'exterior',
    unit: 'sq ft',
    priceLabour: [10, 18],
    priceMaterials: [5, 12],
    description: 'Concrete work for side-entrance, driveway, patios, etc.',
    popularSizes: { 'Small (100 sq ft)': 100, 'Medium (300 sq ft)': 300, 'Large (600 sq ft)': 600 }
  },
  {
    id: 'exterior-cedar',
    name: 'Emerald Cedar Privacy Planting',
    category: 'exterior',
    unit: 'tree',
    priceLabour: [30, 60],
    priceMaterials: [80, 150],
    description: 'Emerald cedar trees for backyard privacy screens.',
    popularSizes: { '10 Trees': 10, '20 Trees': 20, '30 Trees': 30 }
  },
  
  // Outdoor/Landscaping Services
  {
    id: 'outdoor-patio',
    name: 'Patio Installation',
    category: 'outdoor',
    unit: 'sq ft',
    priceLabour: [15, 25],
    priceMaterials: [10, 35],
    description: 'Natural stone or interlocking brick patio installation.',
    popularSizes: { 'Small (100 sq ft)': 100, 'Medium (200 sq ft)': 200, 'Large (400 sq ft)': 400 }
  },
  {
    id: 'outdoor-walkway',
    name: 'Walkway Installation',
    category: 'outdoor',
    unit: 'sq ft',
    priceLabour: [12, 20],
    priceMaterials: [8, 25],
    description: 'Decorative stone or concrete walkway installation.',
    popularSizes: { 'Short (50 sq ft)': 50, 'Medium (100 sq ft)': 100, 'Long (200 sq ft)': 200 }
  },
  {
    id: 'outdoor-garden',
    name: 'Garden Bed Installation',
    category: 'outdoor',
    unit: 'sq ft',
    priceLabour: [8, 15],
    priceMaterials: [5, 20],
    description: 'Garden bed preparation, soil amendment, and planting.',
    popularSizes: { 'Small (50 sq ft)': 50, 'Medium (100 sq ft)': 100, 'Large (200 sq ft)': 200 }
  },
  {
    id: 'outdoor-lawn',
    name: 'Lawn Installation',
    category: 'outdoor',
    unit: 'sq ft',
    priceLabour: [1, 2],
    priceMaterials: [0.5, 1.5],
    description: 'Sod or seed lawn installation including soil preparation.',
    popularSizes: { 'Small Yard (500 sq ft)': 500, 'Medium Yard (1000 sq ft)': 1000, 'Large Yard (2000 sq ft)': 2000 }
  },
  {
    id: 'outdoor-sprinkler',
    name: 'Irrigation System',
    category: 'outdoor',
    unit: 'zone',
    priceLabour: [350, 550],
    priceMaterials: [250, 450],
    description: 'Automatic sprinkler system installation per zone.',
    popularSizes: { '3 Zones': 3, '5 Zones': 5, '8 Zones': 8 }
  },
  {
    id: 'outdoor-retaining-wall',
    name: 'Retaining Wall',
    category: 'outdoor',
    unit: 'sq ft',
    priceLabour: [25, 45],
    priceMaterials: [15, 35],
    description: 'Stone or block retaining wall construction.',
    popularSizes: { 'Small (20 sq ft)': 20, 'Medium (40 sq ft)': 40, 'Large (80 sq ft)': 80 }
  },
  
  // Basement Services
  {
    id: 'basement-finishing',
    name: 'Basement Finishing',
    category: 'basement',
    unit: 'sq ft',
    priceLabour: [35, 70],
    priceMaterials: [25, 50],
    description: 'Complete basement finishing including framing, electrical, and finishes.',
    popularSizes: { 'Small (500 sq ft)': 500, 'Medium (800 sq ft)': 800, 'Large (1200 sq ft)': 1200 }
  },
  
  // Plumbing Services
  {
    id: 'plumbing-pipes',
    name: 'Pipe Installation/Replacement',
    category: 'plumbing',
    unit: 'linear ft',
    priceLabour: [15, 35],
    priceMaterials: [5, 20],
    description: 'Installation or replacement of water/drain pipes.',
    popularSizes: { 'Small Job (20 ln ft)': 20, 'Medium Job (50 ln ft)': 50, 'Large Job (100 ln ft)': 100 }
  },
  {
    id: 'plumbing-fixtures',
    name: 'Fixture Installation',
    category: 'plumbing',
    unit: 'fixture',
    priceLabour: [150, 350],
    priceMaterials: [50, 800],
    description: 'Installation of sinks, faucets, toilets, or showers.',
    popularSizes: { '1 Fixture': 1, '3 Fixtures': 3, '5 Fixtures': 5 }
  },
  {
    id: 'plumbing-water-heater',
    name: 'Water Heater Installation',
    category: 'plumbing',
    unit: 'unit',
    priceLabour: [500, 1000],
    priceMaterials: [800, 2500],
    description: 'Installation of tank or tankless water heaters.',
    popularSizes: { 'Tank Heater': 1, 'Tankless Heater': 1 }
  },
  
  // HVAC Services
  {
    id: 'hvac-furnace',
    name: 'Furnace Installation',
    category: 'hvac',
    unit: 'unit',
    priceLabour: [1000, 1800],
    priceMaterials: [2000, 5000],
    description: 'Installation of high-efficiency furnace systems.',
    popularSizes: { 'Standard Unit': 1, 'High-Efficiency Unit': 1 }
  },
  {
    id: 'hvac-ac',
    name: 'Air Conditioning Installation',
    category: 'hvac',
    unit: 'unit',
    priceLabour: [800, 1500],
    priceMaterials: [1500, 4500],
    description: 'Installation of central or ductless AC systems.',
    popularSizes: { 'Central AC': 1, 'Ductless/Mini-Split': 1 }
  },
  {
    id: 'hvac-boiler',
    name: 'Boiler Installation',
    category: 'hvac',
    unit: 'unit',
    priceLabour: [1200, 2000],
    priceMaterials: [2500, 6000],
    description: 'Installation of residential boiler heating systems.',
    popularSizes: { 'Standard Boiler': 1, 'High-Efficiency Boiler': 1 }
  },
  {
    id: 'hvac-duct',
    name: 'Ductwork Installation',
    category: 'hvac',
    unit: 'linear ft',
    priceLabour: [20, 40],
    priceMaterials: [10, 25],
    description: 'Installation or modification of HVAC ductwork.',
    popularSizes: { 'Small (50 ln ft)': 50, 'Medium (100 ln ft)': 100, 'Large (200 ln ft)': 200 }
  },
  
  // Electrical Services
  {
    id: 'electrical-panel',
    name: 'Electrical Panel Upgrade',
    category: 'electrical',
    unit: 'unit',
    priceLabour: [1000, 2000],
    priceMaterials: [500, 1500],
    description: 'Upgrade of electrical service panel.',
    popularSizes: { '100 Amp': 1, '200 Amp': 1, '400 Amp': 1 }
  },
  {
    id: 'electrical-outlets',
    name: 'Outlets & Switches',
    category: 'electrical',
    unit: 'point',
    priceLabour: [75, 150],
    priceMaterials: [20, 60],
    description: 'Installation of electrical outlets or switches.',
    popularSizes: { '5 Points': 5, '10 Points': 10, '20 Points': 20 }
  },
  {
    id: 'electrical-lighting',
    name: 'Lighting Installation',
    category: 'electrical',
    unit: 'fixture',
    priceLabour: [100, 250],
    priceMaterials: [50, 500],
    description: 'Installation of light fixtures including pot lights.',
    popularSizes: { '5 Fixtures': 5, '10 Fixtures': 10, '20 Fixtures': 20 }
  },
  
  // Doors & Windows
  {
    id: 'doors-windows-entry',
    name: 'Entry Door Installation',
    category: 'doors-windows',
    unit: 'door',
    priceLabour: [400, 800],
    priceMaterials: [500, 2500],
    description: 'Installation of exterior entry doors.',
    popularSizes: { 'Single Door': 1, 'Double Door': 1, 'With Sidelights': 1 }
  },
  {
    id: 'doors-windows-interior',
    name: 'Interior Door Installation',
    category: 'doors-windows',
    unit: 'door',
    priceLabour: [175, 350],
    priceMaterials: [100, 600],
    description: 'Installation of interior passage or pocket doors.',
    popularSizes: { '1 Door': 1, '3 Doors': 3, '5 Doors': 5 }
  },
  {
    id: 'doors-windows-windows',
    name: 'Window Replacement',
    category: 'doors-windows',
    unit: 'window',
    priceLabour: [250, 600],
    priceMaterials: [300, 1200],
    description: 'Replacement of windows including framing.',
    popularSizes: { '1 Window': 1, '5 Windows': 5, '10 Windows': 10 }
  },
  
  // Staircase
  {
    id: 'stairs-interior',
    name: 'Interior Staircase',
    category: 'stairs',
    unit: 'flight',
    priceLabour: [1500, 3500],
    priceMaterials: [1000, 5000],
    description: 'Custom interior staircase construction or renovation.',
    popularSizes: { 'Straight Stairs': 1, 'L-Shaped Stairs': 1, 'Spiral Stairs': 1 }
  },
  {
    id: 'stairs-exterior',
    name: 'Exterior Staircase',
    category: 'stairs',
    unit: 'flight',
    priceLabour: [1200, 2800],
    priceMaterials: [800, 3000],
    description: 'Exterior staircase construction with weather-resistant materials.',
    popularSizes: { 'Concrete Stairs': 1, 'Wood Stairs': 1, 'Metal Stairs': 1 }
  },
  {
    id: 'stairs-railings',
    name: 'Railing Installation',
    category: 'stairs',
    unit: 'linear ft',
    priceLabour: [40, 80],
    priceMaterials: [30, 150],
    description: 'Installation of stair railings and balusters.',
    popularSizes: { 'Short (10 ln ft)': 10, 'Medium (20 ln ft)': 20, 'Long (40 ln ft)': 40 }
  },
  
  // Curtains
  {
    id: 'curtains-standard',
    name: 'Standard Curtain Installation',
    category: 'curtains',
    unit: 'window',
    priceLabour: [75, 150],
    priceMaterials: [50, 350],
    description: 'Installation of standard curtains and hardware.',
    popularSizes: { '1 Window': 1, '3 Windows': 3, '5 Windows': 5 }
  },
  {
    id: 'curtains-custom',
    name: 'Custom Drapery',
    category: 'curtains',
    unit: 'window',
    priceLabour: [125, 300],
    priceMaterials: [200, 800],
    description: 'Custom drapery including measurements and installation.',
    popularSizes: { '1 Window': 1, '3 Windows': 3, '5 Windows': 5 }
  },
  {
    id: 'curtains-blinds',
    name: 'Blinds & Shades Installation',
    category: 'curtains',
    unit: 'window',
    priceLabour: [60, 120],
    priceMaterials: [100, 500],
    description: 'Installation of blinds, shades, or shutters.',
    popularSizes: { '1 Window': 1, '5 Windows': 5, '10 Windows': 10 }
  },
  
  // Columns
  {
    id: 'columns-interior',
    name: 'Interior Decorative Columns',
    category: 'columns',
    unit: 'column',
    priceLabour: [300, 800],
    priceMaterials: [200, 1000],
    description: 'Installation of interior decorative columns.',
    popularSizes: { '1 Column': 1, '2 Columns': 2, '4 Columns': 4 }
  },
  {
    id: 'columns-exterior',
    name: 'Exterior Columns',
    category: 'columns',
    unit: 'column',
    priceLabour: [500, 1200],
    priceMaterials: [300, 1500],
    description: 'Installation of exterior architectural columns.',
    popularSizes: { '1 Column': 1, '2 Columns': 2, '4 Columns': 4 }
  },
  {
    id: 'columns-structural',
    name: 'Structural Columns',
    category: 'columns',
    unit: 'column',
    priceLabour: [800, 2000],
    priceMaterials: [500, 1500],
    description: 'Installation of load-bearing structural columns.',
    popularSizes: { '1 Column': 1, '2 Columns': 2, '4 Columns': 4 }
  },
  
  // Glass Railings
  {
    id: 'glass-railings-interior',
    name: 'Interior Glass Railings',
    category: 'glass',
    unit: 'linear ft',
    priceLabour: [100, 180],
    priceMaterials: [150, 300],
    description: 'Installation of interior glass railings and balustrades.',
    popularSizes: { '10 Linear Feet': 10, '20 Linear Feet': 20, '40 Linear Feet': 40 }
  },
  {
    id: 'glass-railings-exterior',
    name: 'Exterior Glass Railings',
    category: 'glass',
    unit: 'linear ft',
    priceLabour: [120, 200],
    priceMaterials: [180, 350],
    description: 'Installation of exterior glass railings for decks or balconies.',
    popularSizes: { '10 Linear Feet': 10, '20 Linear Feet': 20, '40 Linear Feet': 40 }
  },
  {
    id: 'glass-railings-frameless',
    name: 'Frameless Glass Railings',
    category: 'glass',
    unit: 'linear ft',
    priceLabour: [150, 250],
    priceMaterials: [200, 400],
    description: 'Installation of premium frameless glass railing systems.',
    popularSizes: { '10 Linear Feet': 10, '20 Linear Feet': 20, '40 Linear Feet': 40 }
  },
  
  // Demolition
  {
    id: 'demolition-interior',
    name: 'Interior Wall Demolition',
    category: 'demolition',
    unit: 'sq ft',
    priceLabour: [5, 15],
    priceMaterials: [1, 3],
    description: 'Demolition of interior walls including disposal.',
    popularSizes: { 'Small Wall (50 sq ft)': 50, 'Medium Wall (100 sq ft)': 100, 'Large Wall (200 sq ft)': 200 }
  },
  {
    id: 'demolition-retaining',
    name: 'Retaining Wall Demolition',
    category: 'demolition',
    unit: 'sq ft',
    priceLabour: [18, 35],
    priceMaterials: [2, 5],
    description: 'Demolition of retaining walls including disposal.',
    popularSizes: { 'Small (20 sq ft)': 20, 'Medium (50 sq ft)': 50, 'Large (100 sq ft)': 100 }
  },
  {
    id: 'demolition-concrete',
    name: 'Concrete Demolition',
    category: 'demolition',
    unit: 'sq ft',
    priceLabour: [8, 15],
    priceMaterials: [2, 4],
    description: 'Removal of concrete slabs, patios, or driveways.',
    popularSizes: { 'Small (100 sq ft)': 100, 'Medium (300 sq ft)': 300, 'Large (600 sq ft)': 600 }
  },
  
  // Wood Framing
  {
    id: 'framing-walls',
    name: 'Wall Framing',
    category: 'framing',
    unit: 'sq ft',
    priceLabour: [5, 10],
    priceMaterials: [3, 7],
    description: 'Wood framing for interior or exterior walls.',
    popularSizes: { 'Small Wall (50 sq ft)': 50, 'Room (200 sq ft)': 200, 'Multiple Rooms (500 sq ft)': 500 }
  },
  {
    id: 'framing-roof',
    name: 'Roof Framing',
    category: 'framing',
    unit: 'sq ft',
    priceLabour: [7, 14],
    priceMaterials: [5, 10],
    description: 'Wood framing for roof structures.',
    popularSizes: { 'Small (300 sq ft)': 300, 'Medium (600 sq ft)': 600, 'Large (1200 sq ft)': 1200 }
  },
  {
    id: 'framing-deck',
    name: 'Deck Framing',
    category: 'framing',
    unit: 'sq ft',
    priceLabour: [8, 16],
    priceMaterials: [6, 12],
    description: 'Structural wood framing for decks.',
    popularSizes: { 'Small (100 sq ft)': 100, 'Medium (200 sq ft)': 200, 'Large (400 sq ft)': 400 }
  },
  
  // Roofing
  {
    id: 'roofing-asphalt',
    name: 'Asphalt Shingle Roofing',
    category: 'roofing',
    unit: 'sq ft',
    priceLabour: [3, 5],
    priceMaterials: [1.5, 4],
    description: 'Installation of asphalt shingle roofing.',
    popularSizes: { 'Small Roof (800 sq ft)': 800, 'Medium Roof (1500 sq ft)': 1500, 'Large Roof (2500 sq ft)': 2500 }
  },
  {
    id: 'roofing-metal',
    name: 'Metal Roofing',
    category: 'roofing',
    unit: 'sq ft',
    priceLabour: [5, 8],
    priceMaterials: [7, 12],
    description: 'Installation of metal roofing panels or shingles.',
    popularSizes: { 'Small Roof (800 sq ft)': 800, 'Medium Roof (1500 sq ft)': 1500, 'Large Roof (2500 sq ft)': 2500 }
  },
  {
    id: 'roofing-flat',
    name: 'Flat Roof Installation',
    category: 'roofing',
    unit: 'sq ft',
    priceLabour: [5, 9],
    priceMaterials: [4, 10],
    description: 'Installation of EPDM, TPO, or modified bitumen flat roofing.',
    popularSizes: { 'Small (400 sq ft)': 400, 'Medium (800 sq ft)': 800, 'Large (1500 sq ft)': 1500 }
  },
  
  // Carpet
  {
    id: 'carpet-installation',
    name: 'Carpet Installation',
    category: 'carpet',
    unit: 'sq ft',
    priceLabour: [1, 3],
    priceMaterials: [2, 10],
    description: 'Carpet installation including padding and finishing.',
    popularSizes: { 'Small Room (120 sq ft)': 120, 'Medium Room (200 sq ft)': 200, 'Large Room (300 sq ft)': 300 }
  },
  {
    id: 'carpet-stairs',
    name: 'Carpet on Stairs',
    category: 'carpet',
    unit: 'step',
    priceLabour: [20, 40],
    priceMaterials: [10, 30],
    description: 'Carpet installation on stairs including padding and finishing.',
    popularSizes: { '12 Steps': 12, '15 Steps': 15, '20 Steps': 20 }
  },
  {
    id: 'carpet-removal',
    name: 'Carpet Removal',
    category: 'carpet',
    unit: 'sq ft',
    priceLabour: [0.75, 1.5],
    priceMaterials: [0.25, 0.5],
    description: 'Removal and disposal of existing carpet and padding.',
    popularSizes: { 'Small Room (120 sq ft)': 120, 'Medium Room (200 sq ft)': 200, 'Large Room (300 sq ft)': 300 }
  },
  
  // Other Services
  {
    id: 'other-drywall',
    name: 'Drywall Installation',
    category: 'other',
    unit: 'sq ft',
    priceLabour: [2, 3.5],
    priceMaterials: [0.5, 1.5],
    description: 'Drywall installation including taping and mudding.',
    popularSizes: { 'Room (400 sq ft)': 400, 'Multiple Rooms (1000 sq ft)': 1000, 'Full House (2000 sq ft)': 2000 }
  },
  {
    id: 'other-insulation',
    name: 'Insulation Installation',
    category: 'other',
    unit: 'sq ft',
    priceLabour: [1, 2],
    priceMaterials: [0.75, 2.5],
    description: 'Insulation installation for walls, attic, or basement.',
    popularSizes: { 'Room (400 sq ft)': 400, 'Attic (800 sq ft)': 800, 'Full House (2000 sq ft)': 2000 }
  }
];
