import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Breadcrumbs = ({ navigationMap }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  // Generate breadcrumb items from current path
  const getBreadcrumbs = () => {
    const breadcrumbs = [];
    let currentPath = '';

    // Always add home
    breadcrumbs.push({
      name: 'Home',
      path: '/',
    });

    // Add each path segment
    pathnames.forEach((segment, index) => {
      currentPath += `/${segment}`;
      
      // Find the matching navigation item
      let name = segment.charAt(0).toUpperCase() + segment.slice(1);
      
      // Check if this path exists in the navigation map
      if (navigationMap[currentPath]) {
        name = navigationMap[currentPath];
      }

      breadcrumbs.push({
        name,
        path: currentPath,
      });
    });

    return breadcrumbs;
  };

  const breadcrumbs = getBreadcrumbs();

  return (
    <nav className="flex items-center space-x-2 text-sm text-gray-500 mb-4">
      {breadcrumbs.map((breadcrumb, index) => (
        <React.Fragment key={breadcrumb.path}>
          {index > 0 && (
            <ChevronRight className="h-4 w-4 text-gray-400" />
          )}
          <Link
            to={breadcrumb.path}
            className={`hover:text-[#8f55ff] transition-colors duration-200 ${
              index === breadcrumbs.length - 1 
                ? 'text-[#8f55ff] font-medium' 
                : ''
            }`}
          >
            {breadcrumb.name}
          </Link>
        </React.Fragment>
      ))}
    </nav>
  );
};

export default Breadcrumbs;