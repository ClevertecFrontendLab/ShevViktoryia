import React from 'react';
import { Card } from 'antd';
import { SettingOutlined, AndroidFilled, AppleFilled, CalendarTwoTone, HeartFilled, IdcardOutlined } from '@ant-design/icons';
import background from "../../assets/img/Main_page_light.png";

import './main-page.css';

export const MainPage: React.FC = () => {

    return (
        <main style={{backgroundImage: `url(${background})`}}>
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
                    <div className="our_advantages card">
                        <ul className="advantages_list">
                            C CleverFit ты сможешь:
                            <li className="advantages_item">планировать свои тренировки на календаре, выбирая тип и уровень нагрузки;</li>
                            <li className="advantages_item">отслеживать свои достижения в разделе статистики, сравнивая свои результаты c нормами и рекордами;</li>
                            <li className="advantages_item">создавать свой профиль, где ты можешь загружать свои фото, видео и отзывы о тренировках;</li>
                            <li className="advantages_item">выполнять расписанные тренировки для разных частей тела, следуя подробным инструкциям и советам профессиональных тренеров.</li>
                        </ul>
                    </div>
                    <div className="cleverFit card">
                        <h4>CleverFit — это не приложение, а твой личный помощник в мире фитнеса. Не откладывай на завтра — начни тренироваться уже сегодня!</h4>
                    </div>
                    <div className="cards_wrapper">
                        <Card className='serviceCard' title="Расписать тренировки" bordered={false} style={{ width: 240 }}>
                            <p><HeartFilled twoToneColor='#2F54EB' style={{ fontSize: '14px', marginRight: '8px'}} /> Тренировки</p>
                        </Card>
                        <Card className='serviceCard' title="Назначить календарь" bordered={false} style={{ width: 240 }}>
                            <p><CalendarTwoTone twoToneColor='#2F54EB' style={{ fontSize: '14px', marginRight: '8px'}} /> Календаль</p>
                        </Card>
                        <Card className='serviceCard' title="Заполнить профиль" bordered={false} style={{ width: 240 }}>
                            <p><IdcardOutlined twoToneColor='#2F54EB' style={{ fontSize: '14px', marginRight: '8px' }} /> Профиль</p>
                        </Card>
                    </div>
                </div>
            </section>
            <section className='footer_page'>
                <div className="wrapper">
                    <div className="footer_wrapper">
                        <a href="#" className="reviews">Смотреть отзывы</a>
                        <Card className='downloadCard' title="Скачать на телефон" style={{ width: 240 }}>
                            <p className='download_description'>Доступно в PRO-тарифе</p>
                            <div className="download_buttons">
                                <p className='download_app'><AndroidFilled style={{ fontSize: '14px', marginRight: '8px' }} />Android OS</p>
                                <p className='download_app'><AppleFilled style={{ fontSize: '14px', marginRight: '8px' }} />Apple IOS</p>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>
        </main>
    );
};
