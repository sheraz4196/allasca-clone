
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { ShoppingCart, Plus, Minus, X } from 'lucide-react';
import { CartItem } from '@/types/quoteTypes';
import { formatCurrency, calculateTotal } from '@/utils/quoteUtils';

interface CartSummaryProps {
  cart: CartItem[];
  updateQuantity: (index: number, newQuantity: number) => void;
  removeFromCart: (index: number) => void;
  onRequestQuote: () => void;
}

const CartSummary: React.FC<CartSummaryProps> = ({
  cart,
  updateQuantity,
  removeFromCart,
  onRequestQuote
}) => {
  const subtotal = calculateTotal(cart);
  const discount = subtotal * 0.1; // 10% discount
  const total = subtotal - discount;
  
  // Get the end of the month date for the discount deadline
  const today = new Date();
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const formattedDeadline = endOfMonth.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  return (
    <Card className="sticky top-24">
      <CardHeader>
        <div className="flex justify-between items-center">
          <CardTitle>Your Quote</CardTitle>
          <div className="flex items-center gap-2">
            <ShoppingCart className="h-5 w-5" />
            <span className="bg-casa-purple text-white rounded-full h-5 w-5 flex items-center justify-center text-xs">
              {cart.reduce((sum, item) => sum + 1, 0)}
            </span>
          </div>
        </div>
        <CardDescription>
          {cart.length === 0
            ? "Your quote is empty. Add some services to get started."
            : "Review your selected services below."
          }
        </CardDescription>
      </CardHeader>
      
      <CardContent>
        {cart.length === 0 ? (
          <div className="text-center py-8 text-gray-400">
            <ShoppingCart className="h-12 w-12 mx-auto mb-2 opacity-30" />
            <p>Add services to build your quote</p>
          </div>
        ) : (
          <div className="space-y-4 max-h-[400px] overflow-y-auto pr-2">
            {cart.map((item, index) => {
              const totalPrice = item.selectedPrice * item.quantity;
              
              return (
                <div key={`${item.id}-${index}`} className="flex justify-between items-start pb-3 border-b">
                  <div className="flex-1">
                    <p className="font-medium">{item.name}</p>
                    <div className="flex items-center text-sm text-gray-600">
                      <span>{item.option === 'labour' ? 'Labour only' : item.option === 'materials' ? 'Materials only' : 'Labour & materials'}</span>
                    </div>
                    <p className="text-xs text-gray-500 mt-1">
                      {formatCurrency(item.selectedPrice)} x {item.quantity} {item.unit}
                    </p>
                  </div>
                  
                  <div className="flex flex-col items-end">
                    <div className="font-semibold text-casa-purple">{formatCurrency(totalPrice)}</div>
                    <div className="flex items-center mt-1">
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-6 w-6 rounded-full p-0"
                        onClick={() => updateQuantity(index, item.quantity - 1)}
                      >
                        <Minus className="h-3 w-3" />
                      </Button>
                      <span className="mx-2 text-sm">{item.quantity}</span>
                      <Button 
                        variant="outline" 
                        size="icon" 
                        className="h-6 w-6 rounded-full p-0"
                        onClick={() => updateQuantity(index, item.quantity + 1)}
                      >
                        <Plus className="h-3 w-3" />
                      </Button>
                      <Button 
                        variant="ghost" 
                        size="icon" 
                        className="h-6 w-6 text-gray-400 ml-1"
                        onClick={() => removeFromCart(index)}
                      >
                        <X className="h-3 w-3" />
                      </Button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </CardContent>
      
      <CardFooter className="flex flex-col">
        {cart.length > 0 && (
          <div className="w-full space-y-2 mb-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal:</span>
              <span>{formatCurrency(subtotal)}</span>
            </div>
            
            <div className="flex justify-between text-sm text-green-600 font-medium">
              <span>10% Early Approval Discount:</span>
              <span>-{formatCurrency(discount)}</span>
            </div>
            
            <div className="border-t pt-2 flex justify-between text-lg font-bold">
              <span>Estimated Total:</span>
              <span className="text-casa-purple">{formatCurrency(total)}</span>
            </div>
            
            <p className="text-xs text-green-600 italic">
              * Discount available if quote is approved by {formattedDeadline}
            </p>
          </div>
        )}
        
        <div className="w-full">
          <Button 
            disabled={cart.length === 0} 
            className="w-full bg-casa-purple hover:bg-casa-darkpurple"
            onClick={onRequestQuote}
          >
            Request Quote
          </Button>
          <div className="text-xs text-center text-gray-500 mt-3 space-y-1">
            <p>This is an estimate. Final quote may vary based on site inspection.</p>
            <p>To start work: 20% deposit required, with 15-20% installments as work progresses.</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  );
};

export default CartSummary;
