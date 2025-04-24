import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8080';

const api = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  }
});

// Add response interceptor for handling authentication errors
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 403) {
      window.location.href = '/signin';
    }
    return Promise.reject(error);
  }
);

// Auth endpoints
export const auth = {
  login: (credentials) => api.post('/api/auth/login', credentials),
  logout: () => api.post('/api/auth/logout'),
  signup: (userData) => api.post('/api/auth/signup', userData),
  checkAuth: () => api.get('/api/auth/check-auth')
};

// Appointment endpoints
export const appointments = {
  getAll: () => api.get('/api/appointments/all'),
  getWalkIn: () => api.get('/api/walk-in/all'),
  create: (appointmentData) => api.post('/api/reception/addpatient', appointmentData)
};

// Reports endpoints
export const reports = {
  upload: (formData) => api.post('/api/reports/upload', formData, {
    headers: {
      'Content-Type': 'multipart/form-data'
    }
  }),
  getPatientReports: (username) => api.get('/api/patient/report', { data: username })
};

// Test endpoints
export const tests = {
  getAll: () => api.get('/api/reception/getalltests'),
  getPatientTests: () => api.get('/api/patient/getalltests')
};

// Admin endpoints
export const admin = {
  getDoctors: () => api.get('/api/admin/getalldoctors'),
  getPatients: () => api.get('/api/admin/getallpatientdetails'),
  getAppointments: () => api.get('/api/admin/getallappoinments'),
  getTests: () => api.get('/api/admin/getalltest'),
  getCounts: {
    doctors: () => api.get('/api/admin/getnumberofdoctors'),
    patients: () => api.get('/api/admin/getnumberofpatients'),
    appointments: () => api.get('/api/admin/getnumberofappoinment'),
    receptions: () => api.get('/api/admin/getnumberofreceptions')
  }
};

export default api; 