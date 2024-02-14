import type { MenuProps } from 'antd';
import { CalendarTwoTone, HeartFilled, IdcardOutlined, TrophyFilled } from '@ant-design/icons';

const SidebarList: MenuProps['items'] = [
    {
      label: 'Календарь',
      key: 'calendar',
      icon: <CalendarTwoTone twoToneColor='#061178' style={{ fontSize: '14px', marginRight: '10px' }}/>,
    },
    {
      label: 'Тренировки',
      key: 'workout',
      icon: <HeartFilled style={{ fontSize: '14px', color: '#061178', marginRight: '10px' }}/>
    },
    {
      label: 'Достижения',
      key: 'achievements',
      icon: <TrophyFilled style={{ fontSize: '14px', color: '#061178', marginRight: '10px' }}/>
    },
    {
      label: 'Профиль',
      key: 'profile',
      icon: <IdcardOutlined style={{ fontSize: '14px', color: '#061178', marginRight: '10px' }} />
    }
]

export default SidebarList;
