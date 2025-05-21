import styles from '../styles.module.scss';
import fbIcon from '@icons/svgs/fbIcon.svg';
import instaIcon from '@icons/svgs/instaIcon.svg';
import ytbIcon from '@icons/svgs/ytbIcon.svg';

function BoxIcon({ type, href, path }) {
  const { boxIcon } = styles;

  const handleRenderIcon = (type) => {
    switch (type) {
      case 'fb':
        return fbIcon;
      case 'ins':
        return instaIcon;
      case 'ytb':
        return ytbIcon;
      default:
        break;
    }
  };
  return (
    <div className={boxIcon} href={href}>
      <img src={handleRenderIcon(type)} alt={type} />
    </div>
  );
}

export default BoxIcon;
