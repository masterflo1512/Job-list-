import React, {useEffect} from 'react';
import Return from '../pages/jobs/details/components/icons/Return';

type PagesNavigationProps = {
    styles?: string
}
function PagesNavigation(props:PagesNavigationProps) {
    useEffect(() => {
  
    }, []);
  
    const SplitLength = () => {
      const NumberListsPage = 2;
      const quantityPages = Math.floor(8 / NumberListsPage); 
      const list = [];
  
      if (quantityPages >= 7) {
        for (let i = 1; i <= quantityPages; i++) {
          if (i === 6) {
            list.push('...')
          } else if (i === 7) {
            list.push(quantityPages);
            break;
          } else {
            list.push(i);
          }
        } return list.map((item, i) => (<h4 key={i} className={styles.navigation_number}>{item}</h4>));
  
      } else {
        for (let i = 1; i <= quantityPages; i++) {
          list.push(i);
        }
      } return list.map((item, i) => (<h4 key={i} className={styles.navigation_number}>{item}</h4>));
  
    }
    return (
      <div className={styles.navigation_wrapper}>
        <div className='flex items-center'>
          <Return />
        </div>
        <div className={styles.navigation_numbers}>
          {SplitLength()}
        </div>
        <div className='flex items-center'>
          <Return />
        </div>
      </div>
    )
  }
  export default PagesNavigation;