import React, { useState, useEffect, Suspense } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { ChevronDown, Menu, Home, BarChart2, MessageSquare, Users, FileText, Settings } from 'lucide-react';
import LoadingSpinner from './LoadingSpinner';
import Breadcrumbs from './Breadcrumbs';

const AppLayout = ({ children }) => { 
  const location = useLocation();
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [expandedMenus, setExpandedMenus] = useState({});
  const [currentPage, setCurrentPage] = useState('Dashboard Overview');
  const [isLoading, setIsLoading] = useState(false);

  const navigation = [
    {
      name: 'Home/Overview',
      path: '/',
      icon: Home,
      items: [
        { name: 'Quick Stats', path: '/stats' },
        { name: 'Latest Trends', path: '/trends' }
      ]
    },
    {
      name: 'Satisfaction Analysis',
      path: '/satisfaction',
      icon: BarChart2,
      items: [
        { name: 'Overall Satisfaction', path: '/satisfaction/overall' },
        { name: 'Role-Based Satisfaction', path: '/satisfaction/role-based' },
        { name: 'Comparative Analysis', path: '/satisfaction/comparative' }
      ]
    },
    {
      name: 'Feedback Insights',
      path: '/feedback',
      icon: MessageSquare,
      items: [
        { name: 'Overall Feedback Trends', path: '/feedback/trends' },
        { name: 'Meaningful Feedback Analysis', path: '/feedback/analysis' },
        { name: 'Role-Based Feedback', path: '/feedback/role-based' },
        { name: 'Time Evolution', path: '/feedback/evolution' }
      ]
    },
    {
      name: 'Team Engagement',
      path: '/engagement',
      icon: Users,
      items: [
        { name: 'Participation Metrics', path: '/engagement/metrics' },
        { name: 'Quality Analysis', path: '/engagement/quality' },
        { name: 'Engagement Patterns', path: '/engagement/patterns' }
      ]
    },
    {
      name: 'Insights & Reports',
      path: '/insights',
      icon: FileText,
      items: [
        { name: 'Monthly Reports', path: '/insights/monthly' },
        { name: 'Recommendations', path: '/insights/recommendations' }
      ]
    },
    {
      name: 'Admin',
      path: '/admin',
      icon: Settings,
      items: [
        { name: 'Data Management', path: '/admin/data' },
        { name: 'Configuration', path: '/admin/config' }
      ]
    }
  ];

  // Create navigation map for breadcrumbs
  const navigationMap = {};
  navigation.forEach(item => {
    navigationMap[item.path] = item.name;
    item.items.forEach(subItem => {
      navigationMap[subItem.path] = subItem.name;
    });
  });

  // Simulate loading on route change
  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 500); // Adjust timing as needed

    return () => clearTimeout(timer);
  }, [location.pathname]);

  // Update current page title based on route
  useEffect(() => {
    const currentNav = navigation.find(item => 
      item.path === location.pathname || 
      item.items.some(subItem => subItem.path === location.pathname)
    );
    
    if (currentNav) {
      const subItem = currentNav.items.find(item => item.path === location.pathname);
      setCurrentPage(subItem ? subItem.name : currentNav.name);
      
      // Expand the menu if we're on a sub-route
      if (subItem) {
        setExpandedMenus(prev => ({
          ...prev,
          [currentNav.name]: true
        }));
      }
    }
  }, [location.pathname]);

  const toggleMenu = (menuName) => {
    setExpandedMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName]
    }));
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar remains the same */}
      <div 
        className={`${
          isSidebarOpen ? 'w-64' : 'w-16'
        } bg-[#00171f] shadow-lg transition-all duration-300`}
      >
        {/* Sidebar content remains the same */}
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        {/* Header */}
        <header className="h-16 bg-white shadow-sm flex items-center justify-between px-6">
          <h1 className="text-xl font-semibold text-[#00171f]">{currentPage}</h1>
          <div className="flex items-center gap-4">
            <button className="px-4 py-2 bg-[#8f55ff] text-white rounded-lg hover:bg-opacity-90 transition-colors duration-200">
              New Report
            </button>
          </div>
        </header>

        {/* Main Content Area */}
        <main className="p-6">
          {/* Breadcrumbs */}
          <Breadcrumbs navigationMap={navigationMap} />
          
          {/* Content with Loading State */}
          <Suspense fallback={<LoadingSpinner />}>
            {isLoading ? (
              <LoadingSpinner />
            ) : (
              <div className="transition-opacity duration-200 ease-in-out">
                {children}
              </div>
            )}
          </Suspense>
        </main>
      </div>
    </div>
  );
};

export default AppLayout;