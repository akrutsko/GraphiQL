import styles from '../../ListOfDocumentation.module.css';

type RootTypeProps = {
  root: string | null;
  onClick: (root: string | null) => void;
  title: string;
};
const RootType = ({ root, onClick, title }: RootTypeProps) => {
  if (!root) return;

  return (
    <li onClick={() => onClick(root)}>
      {title}:{' '}
      <span className={styles.link} style={{ color: '#918b3b', cursor: 'pointer' }}>
        {root}
      </span>
    </li>
  );
};

export default RootType;
