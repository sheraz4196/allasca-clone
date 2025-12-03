
import { CartItem, PriceOption, ServiceItem } from "../types/quoteTypes";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

// Format currency
export const formatCurrency = (amount: number) => {
  return new Intl.NumberFormat('en-CA', { style: 'currency', currency: 'CAD' }).format(amount);
};

// Calculate price based on selected option
export const calculatePrice = (item: ServiceItem, option: PriceOption): [number, number] => {
  if (option === 'labour') return item.priceLabour;
  if (option === 'materials') return item.priceMaterials;
  
  // For 'both', add the min and max of both ranges
  return [
    item.priceLabour[0] + item.priceMaterials[0],
    item.priceLabour[1] + item.priceMaterials[1]
  ];
};

// Calculate cart totals
export const calculateTotal = (cart: CartItem[]) => {
  return cart.reduce((total, item) => {
    return total + (item.selectedPrice * item.quantity);
  }, 0);
};

// Generate PDF from quote summary
export const generatePDF = async (
  customerInfo: { 
    name: string; 
    email: string; 
    phone: string; 
    budget: string; 
    address: string; 
    message: string; 
  }, 
  cart: CartItem[]
) => {
  // Create a hidden div to render the quote for PDF generation
  const pdfContent = document.createElement('div');
  pdfContent.style.padding = '20px';
  pdfContent.style.width = '800px';
  pdfContent.style.position = 'absolute';
  pdfContent.style.left = '-9999px';
  document.body.appendChild(pdfContent);
  
  // Get the end of the month date for the discount deadline
  const today = new Date();
  const endOfMonth = new Date(today.getFullYear(), today.getMonth() + 1, 0);
  const formattedDeadline = endOfMonth.toLocaleDateString('en-US', { 
    year: 'numeric', 
    month: 'long', 
    day: 'numeric' 
  });
  
  // Calculate subtotal and discount
  const subtotal = calculateTotal(cart);
  const discount = subtotal * 0.1; // 10% discount
  const total = subtotal - discount;
  
  // Create content for the PDF
  pdfContent.innerHTML = `
    <div style="font-family: Arial, sans-serif; padding: 30px;">
      <div style="text-align: center; margin-bottom: 30px;">
        <h1 style="color: #6a11cb; margin-bottom: 5px;">Casa Construction Custom Quote</h1>
        <p style="color: #666;">Generated on ${new Date().toLocaleDateString()}</p>
      </div>
      
      <div style="margin-bottom: 30px;">
        <h2 style="color: #6a11cb; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Customer Information</h2>
        <p><strong>Name:</strong> ${customerInfo.name}</p>
        <p><strong>Email:</strong> ${customerInfo.email}</p>
        <p><strong>Phone:</strong> ${customerInfo.phone}</p>
        <p><strong>Project Address:</strong> ${customerInfo.address || 'Not provided'}</p>
        <p><strong>Budget Range:</strong> ${customerInfo.budget.replace(/-/g, ' to $').replace('under-', 'Under $').replace('plus', '+')}</p>
        ${customerInfo.message ? `<p><strong>Additional Details:</strong> ${customerInfo.message}</p>` : ''}
      </div>
      
      <div style="margin-bottom: 30px;">
        <h2 style="color: #6a11cb; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Quote Summary</h2>
        <table style="width: 100%; border-collapse: collapse;">
          <thead>
            <tr style="background-color: #f5f5f5;">
              <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Service</th>
              <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Type</th>
              <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Quantity</th>
              <th style="padding: 10px; text-align: left; border-bottom: 1px solid #ddd;">Unit</th>
              <th style="padding: 10px; text-align: right; border-bottom: 1px solid #ddd;">Price</th>
            </tr>
          </thead>
          <tbody>
            ${cart.map(item => `
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.name}</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">
                  ${item.option === 'labour' ? 'Labour only' : item.option === 'materials' ? 'Materials only' : 'Labour & materials'}
                </td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.quantity}</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd;">${item.unit}</td>
                <td style="padding: 10px; border-bottom: 1px solid #ddd; text-align: right;">
                  ${formatCurrency(item.selectedPrice * item.quantity)}
                </td>
              </tr>
            `).join('')}
          </tbody>
          <tfoot>
            <tr>
              <td colspan="4" style="padding: 10px; text-align: right; font-weight: bold;">Subtotal:</td>
              <td style="padding: 10px; text-align: right; font-weight: bold;">
                ${formatCurrency(subtotal)}
              </td>
            </tr>
            <tr>
              <td colspan="4" style="padding: 10px; text-align: right; font-weight: bold; color: green;">
                10% Early Approval Discount:
              </td>
              <td style="padding: 10px; text-align: right; font-weight: bold; color: green;">
                -${formatCurrency(discount)}
              </td>
            </tr>
            <tr>
              <td colspan="4" style="padding: 10px; text-align: right; font-weight: bold; color: #6a11cb;">
                Estimated Total:
              </td>
              <td style="padding: 10px; text-align: right; font-weight: bold; color: #6a11cb;">
                ${formatCurrency(total)}
              </td>
            </tr>
          </tfoot>
        </table>
        
        <div style="margin-top: 15px; padding: 10px; background-color: #f5f9ff; border: 1px solid #d0e3ff; border-radius: 4px;">
          <p style="margin: 0; font-style: italic; color: green;">
            * 10% discount available if quote is approved by ${formattedDeadline}
          </p>
        </div>
      </div>
      
      <div style="margin-top: 30px;">
        <h2 style="color: #6a11cb; border-bottom: 1px solid #ddd; padding-bottom: 10px;">Terms & Conditions</h2>
        <ul style="padding-left: 20px;">
          <li style="margin-bottom: 8px;">This is an estimated quote based on the information provided. Final pricing may vary based on site inspection and specific requirements.</li>
          <li style="margin-bottom: 8px;"><strong>Payment Terms:</strong> 20% deposit required to start the project, with additional 15-20% installments as work progresses until completion.</li>
          <li style="margin-bottom: 8px;">Early approval discount of 10% is valid if quote is approved by ${formattedDeadline}.</li>
          <li style="margin-bottom: 8px;">All work will be completed according to local building codes and regulations.</li>
        </ul>
      </div>
      
      <div style="margin-top: 50px; font-size: 0.9em; color: #666; border-top: 1px solid #ddd; padding-top: 20px;">
        <p>For any questions regarding this quote, please contact us at info@allcasa.com or call +1-647-961-4070.</p>
        <p>7299 Yonge St, Thornhill, ON L3T 0C5</p>
        <p style="text-align: center; margin-top: 30px; font-size: 0.8em;">© AllCasa ${new Date().getFullYear()}</p>
      </div>
    </div>
  `;
  
  // Generate PDF from content
  try {
    const canvas = await html2canvas(pdfContent, {
      scale: 1,
      useCORS: true,
      logging: false
    });
    
    const pdf = new jsPDF('p', 'mm', 'a4');
    const imgData = canvas.toDataURL('image/png');
    const imgWidth = 210;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;
    
    pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
    
    // Clean up temporary element
    document.body.removeChild(pdfContent);
    
    // Return the PDF as base64 data URI
    return pdf.output('datauristring');
  } catch (error) {
    console.error('Error generating PDF:', error);
    document.body.removeChild(pdfContent);
    return null;
  }
};
