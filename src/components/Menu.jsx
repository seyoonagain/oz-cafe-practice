import { useState } from 'react';
import Item from './Item';
import OrderModal from './OrderModal';
import { useMenuContext } from '../contexts/MenuContext';

function Menu() {
  const { menu } = useMenuContext();
  const [modalOn, setModalOn] = useState(false);
  const [modalMenu, setModalMenu] = useState(null);
  if (!menu)
    return (
      <div style={{ textAlign: 'center', margin: '80px' }}>
        메뉴 정보가 없어요!
      </div>
    );

  const categories = Object.keys(menu);
  return (
    <>
      {categories.map((category) => {
        return (
          <section key={category}>
            <h2>{category}</h2>
            <ul className='menu'>
              {menu[category].map((item) => (
                <Item
                  key={item.name}
                  item={item}
                  clickHandler={() => {
                    setModalMenu(item);
                    setModalOn(true);
                  }}
                />
              ))}
            </ul>
          </section>
        );
      })}
      {modalOn ? (
        <OrderModal modalMenu={modalMenu} setModalOn={setModalOn} />
      ) : null}
    </>
  );
}

export default Menu;
