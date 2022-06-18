import './assets/styles/App.scss';
import React, { useState } from 'react';

function App() {
    const [listActiveId, setListActiveId] = useState([]);

    const feed = [
        {
            id: 1,
            subtitle: 'с фуа-гра',
            portion: 10,
            text: ' мышь в подарок',
            kg: '0,5',
            count: 2,
            contentActive: 'Печень утки разварная с артишоками.',
            isActive: false,
            isHovered: false,
        },
        {
            id: 2,
            subtitle: 'с рыбой',
            portion: 40,
            text: '2 мыши в подарок',
            kg: 2,
            count: 1,
            contentActive: 'Головы щучьи с чесноком да свежайшая сёмгушка.',
            isActive: false,
            isHovered: false,
        },
        {
            id: 3,
            subtitle: 'с курой',
            portion: 100,
            text: '5 мышей в подарок заказчик доволен',
            kg: 5,
            count: 0,
            contentActive: 'Филе из цыплят с трюфелями в бульоне.',
            isActive: false,
            isHovered: false,
        },
    ];

    const selected = (e, cardId) => {
        e.preventDefault();
        if (listActiveId.indexOf(cardId) === -1) {
            setListActiveId([...listActiveId, cardId]);
        } else {
            setListActiveId(listActiveId.filter((c) => c !== cardId));
        }
    };

    return (
        <div className='container'>
            <h2 className='title'>Ты сегодня покормил кота?</h2>
            <div className='cards'>
                {feed.map((item) => {
                    const cls = ['card'];
                    if (!item.count) {
                        cls.push('disabled');
                    }
                    if (
                        item.id === listActiveId.find((id) => item.id === id) &&
                        item.count
                    ) {
                        cls.push('active');
                        item.isActive = true;
                    }
                    return (
                        <div className={cls.join(' ')} key={item.id}>
                            <div
                                className='card-info'
                                onClick={(e) => selected(e, item.id)}
                            >
                                <div className='card-info__overlay'></div>
                                <p className='card-info__pretitle'>
                                    Сказочное заморское яство
                                </p>
                                <h2 className='card-info__title'>Нямушка</h2>
                                <p className='card-info__subtitle'>
                                    {item.subtitle}
                                </p>
                                <p className='card-info__portion'>
                                    {item.portion} порций
                                </p>
                                <p className='card-info__text'>{item.text}</p>
                                <p className='card-info__kg'>
                                    {item.kg}
                                    <span>кг</span>
                                </p>
                            </div>
                            {!item.count && (
                                <p className='card__action'>
                                    Печалька, {item.subtitle} закончился.
                                </p>
                            )}
                            {item.count && !item.isActive && (
                                <p className='card__action'>
                                    Чего сидишь? Порадуй котэ,{' '}
                                    <a
                                        href='/'
                                        onClick={(e) => selected(e, item.id)}
                                    >
                                        купи.
                                    </a>
                                </p>
                            )}
                            {item.isActive && (
                                <p className='card__action'>
                                    {item.contentActive}
                                </p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default App;
