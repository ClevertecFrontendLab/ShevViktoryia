import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';

const SidebarItems: object[] = [
    {
      id: 1,
      svg: <CalendarTwoTone />,
      title: 'Календарь'
    },
    {
        id: 2,
        svg: <HeartFilled />,
        title: 'Тренировки'
    },
    {
        id: 3,
        svg: <TrophyFilled />,
        title: 'Достижения'
    },
    {
        id: 4,
        svg: <IdcardOutlined />,
        title: 'Профиль'
    }
]

export default SidebarItems;
