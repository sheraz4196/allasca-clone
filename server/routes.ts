import type { Express, Request, Response, NextFunction } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

// Extended Request interface to include session
declare module 'express-session' {
  interface SessionData {
    isAuthenticated?: boolean;
    user?: {
      id: string;
      username: string;
    };
  }
}

// Authentication middleware
const requireAuth = (req: Request, res: Response, next: NextFunction) => {
  if (req.session.isAuthenticated) {
    next();
  } else {
    res.status(401).json({ error: 'Authentication required' });
  }
};

export async function registerRoutes(app: Express): Promise<Server> {
  // Authentication routes
  app.post("/api/auth/login", async (req, res) => {
    try {
      const { username, password } = req.body;
      
      // Simple team member authentication - you can expand this
      const validUsers = [
        { id: "1", username: "admin", password: "allcasa2024!" },
        { id: "2", username: "mohsin", password: "allcasa123!" }
      ];
      
      const user = validUsers.find(u => u.username === username && u.password === password);
      
      if (user) {
        req.session.isAuthenticated = true;
        req.session.user = {
          id: user.id,
          username: user.username
        };
        
        res.json({ 
          success: true, 
          message: 'Login successful',
          user: { id: user.id, username: user.username }
        });
      } else {
        res.status(401).json({ error: 'Invalid credentials' });
      }
    } catch (error: any) {
      console.error('Login error:', error);
      res.status(500).json({ error: 'Login failed' });
    }
  });

  app.post("/api/auth/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) {
        console.error('Logout error:', err);
        res.status(500).json({ error: 'Logout failed' });
      } else {
        res.clearCookie('connect.sid');
        res.json({ success: true, message: 'Logout successful' });
      }
    });
  });

  app.get("/api/auth/status", (req, res) => {
    if (req.session.isAuthenticated) {
      res.json({ 
        authenticated: true,
        user: req.session.user
      });
    } else {
      res.json({ authenticated: false });
    }
  });

  // Email notification route
  app.post("/api/send-email", async (req, res) => {
    try {
      const { formName, formData, pageUrl, timestamp } = req.body;

      console.log('Received form submission:', { formName, formData, pageUrl, timestamp });

      // Note: Form submission is already saved by the form submission route
      // This route is only for sending email notifications

      const RESEND_API_KEY = process.env.RESEND_API_KEY;
      if (!RESEND_API_KEY) {
        console.error('RESEND_API_KEY environment variable is not set');
        return res.status(500).json({ error: 'Email service configuration error' });
      }

      const emailPayload = {
        from: 'AllCasa Website <onboarding@resend.dev>',
        to: ['allcasa12allcasa@gmail.com'], // Business owner email
        replyTo: formData.email || 'noreply@allcasa.ca',
        subject: `🏠 New ${formName} - ${formData.name || 'Guest'}`,
        html: `
          <!DOCTYPE html>
          <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Form Submission</title>
          </head>
          <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px;">
            <div style="background: linear-gradient(135deg, #8b5cf6, #d946ef); padding: 30px; border-radius: 12px; margin-bottom: 30px;">
              <h1 style="color: white; margin: 0; font-size: 24px; text-align: center;">🏠 AllCasa - New Lead!</h1>
            </div>
            
            <div style="background: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
              <h2 style="color: #8b5cf6; margin-top: 0;">📋 Submission Details</h2>
              <p><strong>Form:</strong> ${formName}</p>
              <p><strong>Page:</strong> <a href="${pageUrl}" style="color: #8b5cf6;">${pageUrl}</a></p>
              <p><strong>Time:</strong> ${new Date(timestamp).toLocaleString('en-US', { 
                timeZone: 'America/Toronto',
                dateStyle: 'full',
                timeStyle: 'medium'
              })}</p>
            </div>
            
            <div style="background: white; border: 2px solid #e5e7eb; border-radius: 8px; padding: 20px;">
              <h3 style="color: #8b5cf6; margin-top: 0;">👤 Customer Information</h3>
              <table style="width: 100%; border-collapse: collapse;">
                ${Object.entries(formData)
                  .filter(([key, value]) => value !== '' && value !== undefined && value !== null)
                  .map(([key, value]) => {
                    const displayKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
                    const emoji = key === 'name' ? '👤' : 
                                 key === 'email' ? '📧' : 
                                 key === 'phone' ? '📱' : 
                                 key === 'location' ? '📍' : 
                                 key === 'budget' ? '💰' : 
                                 key === 'projectType' ? '🏗️' : 
                                 key === 'description' ? '📝' : '📋';
                    
                    return `
                      <tr style="border-bottom: 1px solid #f3f4f6;">
                        <td style="padding: 12px 8px; font-weight: 600; color: #374151; width: 30%;">
                          ${emoji} ${displayKey}:
                        </td>
                        <td style="padding: 12px 8px; color: #6b7280;">
                          ${key === 'email' ? `<a href="mailto:${value}" style="color: #8b5cf6;">${value}</a>` :
                            key === 'phone' ? `<a href="tel:${value}" style="color: #8b5cf6;">${value}</a>` : 
                            value}
                        </td>
                      </tr>
                    `;
                  }).join('')}
              </table>
            </div>
            
            <div style="background: #fef3c7; border: 1px solid #f59e0b; border-radius: 8px; padding: 20px; margin-top: 20px;">
              <h4 style="color: #92400e; margin-top: 0;">🚀 Next Steps</h4>
              <ul style="color: #92400e; margin: 0;">
                <li>Respond within 24 hours for best conversion</li>
                <li>Call the provided phone number if available</li>
                <li>Send a personalized quote based on their requirements</li>
              </ul>
            </div>
            
            <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 14px; margin: 0;">
                This notification was sent automatically from your AllCasa website.<br>
                <strong>Business Owner:</strong> allcasa12allcasa@gmail.com
              </p>
            </div>
          </body>
          </html>
        `,
        text: `
NEW LEAD ALERT - AllCasa Website

Form: ${formName}
Time: ${new Date(timestamp).toLocaleString()}
Page: ${pageUrl}

CUSTOMER DETAILS:
${Object.entries(formData)
  .filter(([key, value]) => value !== '' && value !== undefined && value !== null)
  .map(([key, value]) => `${key.charAt(0).toUpperCase() + key.slice(1)}: ${value}`)
  .join('\n')}

Business Owner: allcasa12allcasa@gmail.com
Reply directly to this email to contact the customer.
        `.trim()
      };

      console.log('Sending email with payload:', { ...emailPayload, html: '[HTML CONTENT]' });

      const response = await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${RESEND_API_KEY}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(emailPayload),
      });

      if (!response.ok) {
        const errorData = await response.text();
        console.error('Resend API Error Response:', {
          status: response.status,
          statusText: response.statusText,
          errorData,
          headers: Object.fromEntries(response.headers.entries())
        });
        
        // Parse error for better user feedback
        let errorMessage = 'Failed to send email notification';
        try {
          const parsedError = JSON.parse(errorData);
          errorMessage = parsedError.message || errorMessage;
        } catch (e) {
          errorMessage = `${response.status}: ${response.statusText}`;
        }
        
        throw new Error(errorMessage);
      }

      const result = await response.json();
      console.log('✅ Email sent successfully to allcasa12allcasa@gmail.com:', {
        id: result.id,
        from: emailPayload.from,
        to: emailPayload.to,
        subject: emailPayload.subject,
        replyTo: emailPayload.replyTo
      });

      res.json({ 
        success: true, 
        result,
        message: 'Email notification sent successfully',
        owner_email: 'allcasa12allcasa@gmail.com'
      });
    } catch (error: any) {
      console.error('❌ Error in send-email route:', {
        error: error.message,
        stack: error.stack,
        requestBody: req.body,
        timestamp: new Date().toISOString()
      });
      
      res.status(500).json({ 
        error: error.message,
        success: false,
        timestamp: new Date().toISOString()
      });
    }
  });

  // Submit form data route
  app.post("/api/form-submissions", async (req, res) => {
    try {
      const { form_type, name, email, phone, location, project_type, budget, description } = req.body;

      console.log('Received form submission via POST:', req.body);

      // Save to database
      const formSubmission = await storage.createFormSubmission({
        formType: form_type,
        formName: form_type === 'navbar_quote' ? 'Navbar Quick Quote' : 'Contact Form',
        name: name || null,
        email,
        phone: phone || null,
        location: location || null,
        projectType: project_type || null,
        budget: budget || null,
        description: description || null,
        pageUrl: req.get('Referer') || null,
        ipAddress: req.ip || null,
        userAgent: req.get('User-Agent') || null
      });

      console.log('Form submission saved to database with ID:', formSubmission.id);
      
      res.json({ 
        success: true, 
        message: 'Form submitted successfully',
        submissionId: formSubmission.id 
      });
    } catch (error: any) {
      console.error('Error saving form submission:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Get form submissions route (for admin/analytics) - PROTECTED
  app.get("/api/form-submissions", requireAuth, async (req, res) => {
    try {
      const limit = parseInt(req.query.limit as string) || 50;
      const offset = parseInt(req.query.offset as string) || 0;
      
      const submissions = await storage.getFormSubmissions(limit, offset);
      res.json({ submissions, count: submissions.length });
    } catch (error: any) {
      console.error('Error fetching form submissions:', error);
      res.status(500).json({ error: error.message });
    }
  });

  // Get specific form submission by ID - PROTECTED
  app.get("/api/form-submissions/:id", requireAuth, async (req, res) => {
    try {
      const id = parseInt(req.params.id);
      if (isNaN(id)) {
        return res.status(400).json({ error: 'Invalid submission ID' });
      }
      
      const submission = await storage.getFormSubmissionById(id);
      if (!submission) {
        return res.status(404).json({ error: 'Submission not found' });
      }
      
      res.json({ submission });
    } catch (error: any) {
      console.error('Error fetching form submission:', error);
      res.status(500).json({ error: error.message });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
