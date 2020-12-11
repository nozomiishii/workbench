import classNames from 'classnames';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { slugify } from 'utils/slugify';

export const Tabs = ({ children, initialTab }) => {
  const [current, setCurrent] = useState(children[0].props.label);
  const router = useRouter();

  const handleClick = (e, tab) => {
    e.preventDefault();
    setCurrent(slugify(tab));
  };

  useEffect(() => {
    if (initialTab.tab) {
      setCurrent(initialTab.tab);
    }
  }, []);

  useEffect(() => {
    router.push(`${router.pathname}?tab=${slugify(current)}`, undefined, {
      shallow: true,
    });
  }, [current]);

  return (
    <div>
      <ul className='flex border-b-2 border-green-300 md:space-x-0'>
        {children.map((tab) => {
          const tabClass = classNames('mx-1', {
            'bg-blue-500 font-bold border-2 border-blue-500 border-b-0':
              current === slugify(tab.props.label),
          });
          return (
            <li key={tab.props.label} className={tabClass}>
              <a onClick={(e) => handleClick(e, tab.props.label)}>
                {tab.props.label}
              </a>
            </li>
          );
        })}
      </ul>
      <div>
        {children.map(
          (item) =>
            current === slugify(item.props.label) && (
              <div key={item.props.label}>{item.props.children}</div>
            )
        )}
      </div>
    </div>
  );
};
