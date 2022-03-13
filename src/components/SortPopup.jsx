import React, {useRef, useState} from 'react';

const SortPopup = ({items}) => {
    const [visiblePopup, setVisiblePopup] = useState(false);
    const [activeItem, setActiveItem] = useState(0);

    // для того чтобы сохранить элемент DOM в переменную нужно использовать хук. Чтобы всегда хранить актуальные значения в виде объекта
    // сохранить элемент через анонимную функцию ref={(ref) => console.log(ref)}
    const sortRef = useRef()

    const activeLabel = items[activeItem]

    // todo в данном случае в компоненте чтобы при каждом рендере не создавалась анонимная функция делаем так, иначе это каждый раз новая ячейка памяти
    const toggleVisiblePopup = () => {
        setVisiblePopup(!visiblePopup)
    }

    const handleOutsideClick = (e) => {
        // * сравнивает и возвращает булеан с минимальным ресурсом нагрузки, клик вне области элемента sort скрывает попап
        if(!e.path.includes(sortRef.current)) {
            // console.log('hello')
            setVisiblePopup(false)
        }
    }

    const onSelectItem = (index) => {
        setActiveItem(index)
        setVisiblePopup(false)
    }

    // вызывается 1 раз при рендере если нет зависимостей, если в [] есть зависимость useEffect будет следить за ее изменениями и выполняться каждый раз
    React.useEffect(() => {
        document.body.addEventListener('click', handleOutsideClick)
        // console.log(sortRef.current)
    }, [])

    return (
        <div
            // ref={(ref) => {
            //     sortRef.current = ref;
            // }}
            ref={sortRef}
            className="sort">
            <div className="sort__label">
                <svg
                    className={visiblePopup ? 'rotated' : ''}
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M10 5C10 5.16927 9.93815 5.31576 9.81445 5.43945C9.69075 5.56315 9.54427 5.625 9.375 5.625H0.625C0.455729 5.625 0.309245 5.56315 0.185547 5.43945C0.061849 5.31576 0 5.16927 0 5C0 4.83073 0.061849 4.68424 0.185547 4.56055L4.56055 0.185547C4.68424 0.061849 4.83073 0 5 0C5.16927 0 5.31576 0.061849 5.43945 0.185547L9.81445 4.56055C9.93815 4.68424 10 4.83073 10 5Z"
                        fill="#2C2C2C"
                    />
                </svg>
                <b>Сортировка по:</b>
                <span onClick={toggleVisiblePopup}>{activeLabel}</span>
            </div>
            {visiblePopup && <div className="sort__popup">
                <ul>
                    {items && items.map((item, index) => <li
                        className={activeItem === index ? 'active' : ''}
                        key={`${item}_${index}`}
                        onClick={() => onSelectItem(index)}>{item}</li>)}
                </ul>
            </div>}
        </div>
    )
        ;
};

export default SortPopup;
