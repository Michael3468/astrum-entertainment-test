import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './PageNotFound.module.scss';

const PageNotFound = () => {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => navigate('/'), 3000);
  }, [navigate]);

  return (
    <div className={styles.page}>
      <h1 className={styles.caption}>Page Not Found</h1>
    </div>
  );
};

export default PageNotFound;
