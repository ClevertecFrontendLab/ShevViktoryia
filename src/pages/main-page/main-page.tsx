import React, { useState } from 'react';
import { SettingOutlined } from '@ant-design/icons';
import './main-page.css';

export const MainPage: React.FC = () => {

    return (
        <main>
            <section className='page_header'>
                <div className="wrapper">
                    <div className="header_content">
                        <div className="header_menu">
                            <a href="/">Главная</a>
                        </div>
                        <div className="header_about">
                            <h1 className="about">Приветствуем тебя в CleverFit — приложении, <br /> которое поможет тебе добиться своей мечты!</h1>
                            <p className='settings'><SettingOutlined title='Settings' className='settings_icon'/>Настройки</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="about_cleverFit">
                <div className="wrapper">
                    <div className="our_advantages">
                        <ul className="advantages_list">
                            C CleverFit ты сможешь:
                            <li className="advantages_item">планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</li>
                            <li className="advantages_item">отслеживать свои достижения в разделе статистики, сравнивая свои результаты c нормами и рекордами;</li>
                            <li className="advantages_item">создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;</li>
                            <li className="advantages_item">выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</li>
                        </ul>
                    </div>
                    <div className="cleverFit">
                        <h4>CleverFit — это не просто приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!</h4>
                    </div>
                </div>
            </section>
        </main>
    );
};
