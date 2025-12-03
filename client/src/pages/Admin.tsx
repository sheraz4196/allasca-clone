import { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import LoginForm from '@/components/LoginForm';
import { Helmet } from 'react-helmet-async';

interface FormSubmission {
  id: number;
  form_type: string;
  form_name: string;
  name?: string;
  email: string;
  phone?: string;
  location?: string;
  project_type?: string;
  budget?: string;
  description?: string;
  page_url?: string;
  submitted_at: string;
  ip_address?: string;
}

const Admin = () => {
  const [submissions, setSubmissions] = useState<FormSubmission[]>([]);
  const [loading, setLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<{ id: string; username: string } | null>(null);

  useEffect(() => {
    checkAuthStatus();
  }, []);

  const checkAuthStatus = async () => {
    try {
      const response = await fetch('/api/auth/status');
      const data = await response.json();
      
      if (data.authenticated) {
        setIsAuthenticated(true);
        setUser(data.user);
        await fetchSubmissions();
      } else {
        setIsAuthenticated(false);
        setLoading(false);
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      setIsAuthenticated(false);
      setLoading(false);
    }
  };

  const fetchSubmissions = async () => {
    try {
      const response = await fetch('/api/form-submissions');
      
      if (response.status === 401) {
        setIsAuthenticated(false);
        return;
      }
      
      const data = await response.json();
      setSubmissions(data.submissions || []);
    } catch (error) {
      console.error('Error fetching submissions:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleLoginSuccess = (userData: { id: string; username: string }) => {
    setIsAuthenticated(true);
    setUser(userData);
    fetchSubmissions();
  };

  const handleLogout = async () => {
    try {
      await fetch('/api/auth/logout', { method: 'POST' });
      setIsAuthenticated(false);
      setUser(null);
      setSubmissions([]);
    } catch (error) {
      console.error('Logout failed:', error);
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleString();
  };

  if (isAuthenticated === null || loading) {
    return (
      <div className="min-h-screen bg-gray-50 p-8">
        <Helmet>
          <title>Admin - AllCasa</title>
          <meta name="robots" content="noindex,nofollow" />
          <link rel="canonical" href="https://allcasa.ca/admin" />
        </Helmet>
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-8">Loading...</h1>
        </div>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <>
        <Helmet>
          <title>Admin Login - AllCasa</title>
          <meta name="robots" content="noindex,nofollow" />
          <link rel="canonical" href="https://allcasa.ca/admin" />
        </Helmet>
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      </>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <Helmet>
        <title>Admin Dashboard - AllCasa</title>
        <meta name="robots" content="noindex,nofollow" />
        <link rel="canonical" href="https://allcasa.ca/admin" />
      </Helmet>
      <div className="container mx-auto">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold">🏠 AllCasa Admin Dashboard</h1>
            <p className="text-gray-600 mt-2">Welcome back, {user?.username}!</p>
          </div>
          <Button 
            onClick={handleLogout}
            variant="outline"
            className="bg-white border-red-200 text-red-600 hover:bg-red-50"
          >
            Sign Out
          </Button>
        </div>
        
        <div className="mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-purple-600">{submissions.length}</h3>
                  <p className="text-gray-600">Total Leads</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-green-600">
                    {submissions.filter(s => s.form_type === 'navbar_quote').length}
                  </h3>
                  <p className="text-gray-600">Quick Quotes</p>
                </div>
                <div className="text-center">
                  <h3 className="text-2xl font-bold text-blue-600">
                    {submissions.filter(s => s.form_type === 'contact_form').length}
                  </h3>
                  <p className="text-gray-600">Contact Forms</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
        
        {submissions.length === 0 ? (
          <Card>
            <CardContent className="p-8 text-center">
              <p className="text-gray-500">No form submissions yet.</p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {submissions.map((submission) => (
              <Card key={submission.id}>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">
                      Submission #{submission.id}
                    </CardTitle>
                    <Badge variant={submission.form_type === 'navbar_quote' ? 'default' : 'secondary'}>
                      {submission.form_type === 'navbar_quote' ? 'Quick Quote' : 'Contact Form'}
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-500">
                    {formatDate(submission.submitted_at)} • {submission.form_name}
                  </p>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {submission.name && (
                      <div>
                        <label className="font-semibold text-sm">Name:</label>
                        <p>{submission.name}</p>
                      </div>
                    )}
                    <div>
                      <label className="font-semibold text-sm">Email:</label>
                      <p>{submission.email}</p>
                    </div>
                    {submission.phone && (
                      <div>
                        <label className="font-semibold text-sm">Phone:</label>
                        <p>{submission.phone}</p>
                      </div>
                    )}
                    {submission.location && (
                      <div>
                        <label className="font-semibold text-sm">Location:</label>
                        <p>{submission.location}</p>
                      </div>
                    )}
                    {submission.project_type && (
                      <div>
                        <label className="font-semibold text-sm">Project Type:</label>
                        <p>{submission.project_type}</p>
                      </div>
                    )}
                    {submission.budget && (
                      <div>
                        <label className="font-semibold text-sm">Budget:</label>
                        <p>{submission.budget}</p>
                      </div>
                    )}
                    {submission.description && (
                      <div className="md:col-span-2">
                        <label className="font-semibold text-sm">Description:</label>
                        <p className="mt-1">{submission.description}</p>
                      </div>
                    )}
                    {submission.page_url && (
                      <div className="md:col-span-2">
                        <label className="font-semibold text-sm">Page URL:</label>
                        <p className="text-blue-600 hover:underline">
                          <a href={submission.page_url} target="_blank" rel="noopener noreferrer">
                            {submission.page_url}
                          </a>
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Admin;