import { useNavigation } from '@react-navigation/native';
import React, { useEffect } from 'react';
import { useAuth } from '../hooks';

const withAuth = (WrappedComponent: any) => {
  const { navigate } = useNavigation();
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    if(!isAuthenticated) return navigate(R)
  }, [isAuthenticated]);

  const AuthHOC = () => {
    // Replace this with your actual authentication logic
    const isAuthenticated = true;

    if (isAuthenticated) {
      return <WrappedComponent />;
    } else {
      return null;
    }
  };

  return AuthHOC;
};

export default withAuth;