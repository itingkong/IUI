/**
 * 头像
 * @create 2022.2.8
 */
import { useState } from 'react';
import styles from './index.less';
import { avatar } from '../../../static/images/index.js'

export default function Avatar(props) {
    const { type = 'normal' } = props;
    const sizes = {
        normal: 'normal',
        mini: 'mini',
        large: 'large'
    }
    const size = sizes[type] || 'normal'
    const [src, setSrc] = useState(props.src)

    const srcHandler = () => setSrc(avatar)

    return <div className={`${styles.avatar} ${styles[size]}`} >
        <img src={src} onError={() => { srcHandler() }} />
    </div>
}